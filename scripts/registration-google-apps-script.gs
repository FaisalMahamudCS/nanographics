/**
 * Google Apps Script: two tabs in the same spreadsheet
 *
 *   Tab 1: Registrations  — course form submissions
 *   Tab 2: Certificates   — issued certificates (public lookup)
 *
 * SETUP / UPDATE:
 * 1. Open the existing Google Sheet.
 * 2. Keep current registration data on the first sheet.
 *    (This script will use a tab named "Registrations", or the first tab
 *     if that name is not there yet — existing rows stay.)
 * 3. Extensions -> Apps Script -> paste this file -> Save.
 * 4. Run doGet once in the editor (or submit a test registration) so it
 *    can create the "Certificates" tab automatically.
 * 5. Deploy -> Manage deployments -> Edit -> Version: New version -> Deploy.
 *
 * CERTIFICATES TAB (fill this yourself when you issue a cert):
 *   Certificate ID | Full Name | Email | WhatsApp | Course | Batch | Status | Issued At | Notes
 * Example Certificate ID: NG-B04-0001
 *
 * Registration POST JSON: { name, email, phone, paymentMethod, senderNo, transactionId, submittedAt }
 * Certificate GET: ?action=lookup&id=NG-B04-0001
 * Public lookup reads ONLY the Certificates tab. No payment fields are returned.
 */

var REG_SHEET_NAME = 'Registrations';
var CERT_SHEET_NAME = 'Certificates';

var REG_HEADERS = [
  'Timestamp',
  'Full Name',
  'Email',
  'WhatsApp',
  'Payment Method',
  'Sender Number',
  'Transaction ID',
  'Course',
  'Batch',
  'Status',
];

var CERT_HEADERS = [
  'Certificate ID',
  'Full Name',
  'Email',
  'WhatsApp',
  'Course',
  'Batch',
  'Status',
  'Issued At',
  'Notes',
];

var DEFAULT_COURSE = 'Packaging Design Masterclass';
var DEFAULT_BATCH = 'Batch 04';

function parseBody(e) {
  var p = {};
  if (e && e.postData && e.postData.contents) {
    try {
      p = JSON.parse(e.postData.contents);
    } catch (parseErr) {
      p = {};
    }
  }
  if (e && e.parameter) {
    for (var key in e.parameter) {
      if (p[key] === undefined) p[key] = e.parameter[key];
    }
  }
  return p;
}

function jsonOut(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function headerMap(sheet, expectedLen) {
  var lastCol = Math.max(sheet.getLastColumn(), expectedLen || 1);
  var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
  var map = {};
  for (var i = 0; i < headers.length; i++) {
    var key = String(headers[i] || '').trim().toLowerCase();
    if (key) map[key] = i;
  }
  return { headers: headers, map: map, lastCol: lastCol };
}

function ensureHeaders(sheet, headers) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    return;
  }

  var info = headerMap(sheet, headers.length);
  var missing = [];
  for (var i = 0; i < headers.length; i++) {
    if (info.map[headers[i].toLowerCase()] === undefined) {
      missing.push(headers[i]);
    }
  }
  if (!missing.length) return;

  var startCol = info.lastCol + 1;
  if (!String(info.headers[info.lastCol - 1] || '').trim()) {
    startCol = info.lastCol;
  }
  sheet.getRange(1, startCol, 1, missing.length).setValues([missing]);
}

function col(info, name, fallbackIndex) {
  var idx = info.map[String(name).toLowerCase()];
  return idx === undefined ? fallbackIndex : idx;
}

/**
 * Registrations: use a tab named "Registrations" if it exists.
 * Otherwise keep the first tab (where old form rows already live).
 */
function getRegistrationSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var named = ss.getSheetByName(REG_SHEET_NAME);
  if (named) return named;

  var first = ss.getSheets()[0];
  // Don't rename a Certificates tab by mistake.
  if (first.getName() !== CERT_SHEET_NAME) {
    try {
      first.setName(REG_SHEET_NAME);
    } catch (renameErr) {
      // Name may already be taken or protected — keep using first sheet.
    }
    return first;
  }

  var created = ss.insertSheet(REG_SHEET_NAME);
  created.appendRow(REG_HEADERS);
  return created;
}

function getCertificateSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var named = ss.getSheetByName(CERT_SHEET_NAME);
  if (named) {
    ensureHeaders(named, CERT_HEADERS);
    return named;
  }

  var created = ss.insertSheet(CERT_SHEET_NAME);
  created.appendRow(CERT_HEADERS);
  created.setFrozenRows(1);
  return created;
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    var sheet = getRegistrationSheet();
    ensureHeaders(sheet, REG_HEADERS);

    var p = parseBody(e);
    var timestamp = p.submittedAt || new Date().toISOString();

    sheet.appendRow([
      timestamp,
      p.name || '',
      p.email || '',
      p.phone || '',
      p.paymentMethod || '',
      p.senderNo || '',
      p.transactionId || '',
      p.course || DEFAULT_COURSE,
      p.batch || DEFAULT_BATCH,
      p.status || 'Registered',
    ]);

    return jsonOut({ ok: true, tab: REG_SHEET_NAME });
  } catch (err) {
    return jsonOut({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function lookupCertificate(rawId) {
  var id = String(rawId || '').trim();
  if (!id) {
    return jsonOut({ ok: false, found: false, error: 'Certificate ID is required' });
  }

  var sheet = getCertificateSheet();
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    return jsonOut({ ok: true, found: false, tab: CERT_SHEET_NAME });
  }

  var info = headerMap(sheet, CERT_HEADERS.length);
  var width = Math.max(info.lastCol, CERT_HEADERS.length);
  var values = sheet.getRange(2, 1, lastRow - 1, width).getValues();
  var needle = id.toLowerCase();

  var certCol = col(info, 'Certificate ID', 0);
  var nameCol = col(info, 'Full Name', 1);
  var courseCol = col(info, 'Course', 4);
  var batchCol = col(info, 'Batch', 5);
  var statusCol = col(info, 'Status', 6);
  var issuedCol = col(info, 'Issued At', 7);

  for (var r = 0; r < values.length; r++) {
    var row = values[r];
    var certId = String(row[certCol] || '').trim();
    if (!certId || certId.toLowerCase() !== needle) continue;

    var status = String(row[statusCol] || '').trim();
    return jsonOut({
      ok: true,
      found: true,
      tab: CERT_SHEET_NAME,
      student: {
        certificateId: certId,
        name: String(row[nameCol] || '').trim(),
        course: String(row[courseCol] || DEFAULT_COURSE).trim() || DEFAULT_COURSE,
        batch: String(row[batchCol] || DEFAULT_BATCH).trim() || DEFAULT_BATCH,
        status: status || 'Issued',
        issuedAt: String(row[issuedCol] || '').trim(),
      },
    });
  }

  return jsonOut({ ok: true, found: false, tab: CERT_SHEET_NAME });
}

function doGet(e) {
  var action = (e && e.parameter && e.parameter.action) || '';
  var id = (e && e.parameter && (e.parameter.id || e.parameter.certificateId)) || '';
  if (action === 'lookup' || id) {
    return lookupCertificate(id);
  }

  // Touch both tabs so they exist after deploy.
  getRegistrationSheet();
  getCertificateSheet();

  return ContentService
    .createTextOutput('Registration + Certificates tabs ready. v4-tabs')
    .setMimeType(ContentService.MimeType.TEXT);
}
