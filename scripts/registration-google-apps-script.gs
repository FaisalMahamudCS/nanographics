/**
 * Google Apps Script: Package Course Registration -> Google Sheet
 *
 * SETUP (one time, ~3 minutes):
 * 1. Create a new Google Sheet (e.g. "Course Registrations").
 * 2. In the Sheet menu: Extensions -> Apps Script.
 * 3. Delete any starter code, paste this whole file, then Save.
 * 4. Click "Deploy" -> "New deployment".
 *      - Type: Web app
 *      - Description: registration endpoint
 *      - Execute as: Me
 *      - Who has access: Anyone
 *    Click Deploy, authorize, and COPY the Web app URL
 *    (looks like https://script.google.com/macros/s/AKfy.../exec).
 * 5. In your Next.js project root, create a file named ".env.local" with:
 *      NEXT_PUBLIC_REGISTRATION_ENDPOINT=https://script.google.com/macros/s/AKfy.../exec
 *    Then restart `npm run dev`.
 *
 * NOTE: If you change this script later, redeploy via
 *       Deploy -> Manage deployments -> Edit -> New version.
 */

// Column order written to the sheet. Keep in sync with the form fields.
var HEADERS = [
  'Timestamp',
  'Full Name',
  'Email',
  'WhatsApp',
  'Payment Method',
  'Sender Number',
  'Transaction ID',
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000); // avoid two submissions writing the same row

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // Write header row once, on an empty sheet.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }

    // Read the JSON body first (most reliable), then fall back to form params.
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

    var timestamp = p.submittedAt || new Date().toISOString();

    sheet.appendRow([
      timestamp,
      p.name || '',
      p.email || '',
      p.phone || '',
      p.paymentMethod || '',
      p.senderNo || '',
      p.transactionId || '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Optional: lets you open the /exec URL in a browser to confirm it's live.
// The version tag below proves the LATEST code is deployed. If the browser
// shows an older/missing tag, you deployed without picking "New version".
function doGet() {
  return ContentService
    .createTextOutput('Registration endpoint is running. v2-json')
    .setMimeType(ContentService.MimeType.TEXT);
}
