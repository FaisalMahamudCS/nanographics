'use client'

import { FormEvent, useState } from 'react'
import Header from '@/components/header'
import { Award, Search, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import { SERVICE_ROUTES } from '@/lib/service-routes'

type Student = {
  certificateId: string
  name: string
  course: string
  batch: string
  status: string
  issuedAt?: string
}

type LookupState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'empty' }
  | { status: 'error'; message: string }
  | { status: 'found'; student: Student }

export default function CertificateVerifyPage() {
  const [activeSection, setActiveSection] = useState('course')
  const [query, setQuery] = useState('')
  const [state, setState] = useState<LookupState>({ status: 'idle' })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const id = query.trim()
    if (!id) {
      setState({ status: 'error', message: 'Certificate ID লিখুন।' })
      return
    }

    setState({ status: 'loading' })
    try {
      const res = await fetch(`/api/certificate?id=${encodeURIComponent(id)}`, {
        cache: 'no-store',
      })
      const data = (await res.json()) as {
        ok?: boolean
        found?: boolean
        error?: string
        student?: Student | null
      }

      if (!res.ok || data.ok === false) {
        throw new Error(data.error || 'Lookup failed')
      }
      if (data.found && data.student) {
        setState({ status: 'found', student: data.student })
      } else {
        setState({ status: 'empty' })
      }
    } catch (err) {
      setState({
        status: 'error',
        message: err instanceof Error ? err.message : 'Search failed. Try again.',
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#050507] text-white overflow-x-hidden">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="relative z-10 w-full pt-28 sm:pt-32 pb-20 px-4 sm:px-6">
        <section className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00ffff]/10 border border-[#00ffff]/30 text-[#00ffff] text-[10px] font-bold uppercase tracking-widest mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              Certificate Check
            </span>
            <h1 className="section-title text-white mb-3">Verify Certificate</h1>
            <p className="text-white/50 text-sm font-light leading-relaxed">
               আইডি দিয়ে সার্টিফিকেট যাচাই করুন। 
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border border-white/10 bg-[#0c0c0f] p-6 sm:p-8 space-y-4"
          >
            <label className="block text-xs font-bold text-white/70 uppercase tracking-widest">
              Certificate ID
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="উদা: NG-B04-0001"
                className="flex-1 px-5 py-4 bg-[#0d0d10] border border-white/10 text-white placeholder-white/20 focus:border-[#00ffff] focus:ring-1 focus:ring-[#00ffff]/50 outline-none text-sm"
              />
              <button
                type="submit"
                disabled={state.status === 'loading'}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#00ffff] text-black font-bold uppercase tracking-wide text-xs hover:bg-[#33ffff] disabled:opacity-60"
              >
                <Search className="w-4 h-4" />
                {state.status === 'loading' ? 'খোঁজা হচ্ছে…' : 'Search'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            {state.status === 'found' && (
              <article className="border border-[#00ffff]/40 bg-[#00ffff]/5 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 border border-[#00ffff]/50 bg-[#00ffff]/10 flex items-center justify-center text-[#00ffff]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#00ffff] font-bold">Verified</p>
                    <h2 className="text-xl font-heading font-bold text-white">{state.student.name}</h2>
                  </div>
                </div>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Certificate ID</dt>
                    <dd className="text-white font-semibold">{state.student.certificateId}</dd>
                  </div>
                  <div>
                    <dt className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Status</dt>
                    <dd className="text-white font-semibold">{state.student.status}</dd>
                  </div>
                  <div>
                    <dt className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Course</dt>
                    <dd className="text-white font-semibold">{state.student.course}</dd>
                  </div>
                  <div>
                    <dt className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Batch</dt>
                    <dd className="text-white font-semibold">{state.student.batch}</dd>
                  </div>
                </dl>
              </article>
            )}

            {state.status === 'empty' && (
              <p className="border border-white/10 bg-[#0c0c0f] px-5 py-4 text-sm text-white/60">
                এই Certificate ID দিয়ে কোনো রেকর্ড পাওয়া যায়নি। <span className="text-white/80">Certificates</span> ট্যাবে ID ঠিক আছে কিনা চেক করুন।
              </p>
            )}

            {state.status === 'error' && (
              <p className="border border-red-400/30 bg-red-400/5 px-5 py-4 text-sm text-red-400">
                {state.message}
              </p>
            )}
          </div>

          <p className="text-center text-white/35 text-xs mt-8">
            <Link href={SERVICE_ROUTES.courseLanding} className="hover:text-[#00ffff] transition-colors">
              ← Course registration
            </Link>
          </p>
        </section>
      </main>
    </div>
  )
}
