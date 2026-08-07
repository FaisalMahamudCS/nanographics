import { NextResponse } from 'next/server'

/**
 * Proxies course registration to Google Apps Script (avoids browser CORS).
 * Set REGISTRATION_ENDPOINT or NEXT_PUBLIC_REGISTRATION_ENDPOINT in .env.local
 */
export async function POST(request: Request) {
  const endpoint =
    process.env.REGISTRATION_ENDPOINT?.trim() ||
    process.env.NEXT_PUBLIC_REGISTRATION_ENDPOINT?.trim()

  if (!endpoint) {
    return NextResponse.json(
      { ok: false, error: 'Registration endpoint is not configured' },
      { status: 500 }
    )
  }

  let payload: Record<string, unknown>
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body' }, { status: 400 })
  }

  const body = {
    name: String(payload.name ?? ''),
    email: String(payload.email ?? ''),
    phone: String(payload.phone ?? ''),
    paymentMethod: String(payload.paymentMethod ?? ''),
    senderNo: String(payload.senderNo ?? ''),
    transactionId: String(payload.transactionId ?? ''),
    submittedAt: String(payload.submittedAt ?? new Date().toISOString()),
  }

  if (!body.name || !body.email || !body.phone || !body.transactionId) {
    return NextResponse.json(
      { ok: false, error: 'Missing required registration fields' },
      { status: 400 }
    )
  }

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      redirect: 'follow',
    })

    const text = await res.text()
    let data: { ok?: boolean; error?: string } = {}
    try {
      data = JSON.parse(text) as { ok?: boolean; error?: string }
    } catch {
      // GAS sometimes returns empty/redirect HTML; treat HTTP success as ok
      if (res.ok) return NextResponse.json({ ok: true })
      return NextResponse.json(
        { ok: false, error: text.slice(0, 200) || `Upstream status ${res.status}` },
        { status: 502 }
      )
    }

    if (data.ok === false) {
      return NextResponse.json(
        { ok: false, error: data.error || 'Sheet write failed' },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : 'Network error' },
      { status: 502 }
    )
  }
}
