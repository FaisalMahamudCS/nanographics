import { NextResponse } from 'next/server'

function endpoint() {
  return (
    process.env.REGISTRATION_ENDPOINT?.trim() ||
    process.env.NEXT_PUBLIC_REGISTRATION_ENDPOINT?.trim() ||
    ''
  )
}

export async function GET(request: Request) {
  const sheetUrl = endpoint()
  if (!sheetUrl) {
    return NextResponse.json(
      { ok: false, found: false, error: 'Registration endpoint is not configured' },
      { status: 500 }
    )
  }

  const { searchParams } = new URL(request.url)
  const id = (searchParams.get('id') || searchParams.get('certificateId') || '').trim()
  if (!id) {
    return NextResponse.json(
      { ok: false, found: false, error: 'Certificate ID is required' },
      { status: 400 }
    )
  }

  if (id.length > 80) {
    return NextResponse.json(
      { ok: false, found: false, error: 'Invalid certificate ID' },
      { status: 400 }
    )
  }

  try {
    const lookup = new URL(sheetUrl)
    lookup.searchParams.set('action', 'lookup')
    lookup.searchParams.set('id', id)

    const res = await fetch(lookup.toString(), {
      method: 'GET',
      redirect: 'follow',
      cache: 'no-store',
    })
    const text = await res.text()
    let data: {
      ok?: boolean
      found?: boolean
      error?: string
      student?: {
        certificateId: string
        name: string
        course: string
        batch: string
        status: string
        issuedAt?: string
      }
    } = {}

    try {
      data = JSON.parse(text) as typeof data
    } catch {
      return NextResponse.json(
        { ok: false, found: false, error: 'Sheet lookup is not deployed yet. Update Apps Script and deploy a new version.' },
        { status: 502 }
      )
    }

    if (!data.ok) {
      return NextResponse.json(
        { ok: false, found: false, error: data.error || 'Lookup failed' },
        { status: 502 }
      )
    }

    return NextResponse.json({
      ok: true,
      found: Boolean(data.found),
      student: data.found ? data.student : null,
    })
  } catch (err) {
    return NextResponse.json(
      { ok: false, found: false, error: err instanceof Error ? err.message : 'Network error' },
      { status: 502 }
    )
  }
}
