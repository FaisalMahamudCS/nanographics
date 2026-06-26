'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  { q: 'RGB / CMYK কোনটা করতে হবে?', a: 'প্রিন্টে CMYK ব্যবহার করা হয়, কারণ এটি প্রিন্টের মূল রঙ মডেল। RGB স্ক্রিনের জন্য।' },
  { q: 'ফয়েল প্রিন্টের সময় সর্বনিম্ন কত কালারের প্রিন্ট করা হয়?', a: 'সাধারণত ১-২ রঙের ফয়েল ব্যবহার করা হয়, তবে ডিজাইনের উপর নির্ভর করে বেশি রঙেরও হতে পারে।' },
  { q: 'স্পেশাল কালার কেন ব্যবহার করা হয়?', a: 'স্পেশাল কালার (যেমন প্যানটোন) নিশ্চিত করে যে প্রিন্টে রঙের সঠিকতা ও সামঞ্জস্য থাকে।' },
  { q: 'গোল্ডেন কালার কি?', a: 'গোল্ড ফয়েল বা প্যানটোন 871, যা প্রিন্টে সোনার ইফেক্ট দেয়।' },
  { q: 'সিলভার কালার কি?', a: 'সিলভার ফয়েল বা প্যানটোন 877, যা রূপা মত শাইন তৈরি করে।' },
  { q: 'ডিজাইন করার সময় ট্রান্সপারেন্ট এরিয়া কিভাবে দেখাতে হয়?', a: 'Photoshop-এ লেয়ারকে লুকিয়ে বা সাদা ব্যাকগ্রাউন্ড দিয়ে রূপান্তর করতে পারেন।' },
  { q: 'আউটপুট ফাইল কিভাবে দিতে হবে?', a: 'PDF/X‑1a অথবা PDF/X‑4 ফরম্যাটে 300 dpi, CMYK ফ্ল্যাট কোলার প্রোফাইলসহ।' },
  { q: 'ফটোশপ এবং ইলাস্ট্রেটর দিয়ে কিভাবে একটা ডিজাইন রেডি করতে হয়?', a: 'ইলাস্ট্রেটরে ভেক্টর লেআউট তৈরি করুন, Photoshop‑এ র‍্যাস্টার ইফেক্ট যোগ করুন।' },
  { q: 'আউটপুট ফাইল দেয়ার সময় কী কী চেক করতে হবে?', a: 'রেজোলিউশন, কালার মোড (CMYK), ট্রিমার (Bleed) এবং ফন্ট অ্যাপ্লাইড/আউটলাইনেড।' },
]

const features = [
  { icon: '🎨', text: 'Colour Separation' },
  { icon: '📐', text: 'Packaging Dieline' },
  { icon: '🔗', text: 'Photoshop & Illustrator Link-up' },
  { icon: '📂', text: 'Output File Setup' },
  { icon: '🎬', text: '১৬+ লাইভ ক্লাস' },
  { icon: '📝', text: '৮+ রিয়েল-ওয়ার্ল্ড অ্যাসাইনমেন্ট' },
  { icon: '💬', text: 'Active গ্রুপ চ্যাট সাপোর্ট' },
  { icon: '🎯', text: 'Lifetime Support' },
]

export default function PackageCoursePage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', payment: '' })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans overflow-x-hidden selection:bg-[#00ffff] selection:text-black">
      {/* Grid bg */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] pointer-events-none z-0" />

      {/* Back Nav */}
      <nav className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white/70 hover:text-white hover:border-[#00ffff]/40 transition-all text-sm font-semibold"
        >
          ← Back to NanoGraphic
        </Link>
      </nav>

      {/* HERO */}
      <section className="relative z-10 min-h-[85vh] flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#00ffff] font-semibold tracking-[0.3em] uppercase text-xs mb-6 block font-heading"
        >
          চতুর্থ ব্যাচ · Batch 04 · 2026
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[clamp(2.8rem,10vw,7rem)] font-black uppercase leading-[0.85] tracking-tighter mb-6 font-heading"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-[#0088ff]">Packaging</span>
          <br />
          <span className="text-white">Design</span>
          <br />
          <span className="text-white/40">Course</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="max-w-2xl text-white/60 text-lg md:text-xl leading-relaxed mb-10"
        >
          প্রফেশনাল প্যাকেজিং ডিজাইন শিখে নিজের স্কিল ডেভেলপ করুন।
          সীমিত সিট — এখনই জয়েন করুন!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 items-center mb-12"
        >
          <a
            href="#register"
            className="px-8 py-4 rounded-full bg-[#00ffff] text-black font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(0,255,255,0.4)] hover:shadow-[0_0_40px_rgba(0,255,255,0.7)] hover:scale-105 transition-all text-sm"
          >
            রেজিস্ট্রেশন করুন →
          </a>
          <a
            href="#faq"
            className="px-8 py-4 rounded-full border border-white/15 text-white/70 font-bold uppercase tracking-wider hover:border-white/40 hover:text-white transition-all text-sm"
          >
            প্রশ্নোত্তর দেখুন
          </a>
        </motion.div>

        {/* Price badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#00ffff]/30 bg-[#00ffff]/5 backdrop-blur-sm"
        >
          <span className="text-[#00ffff] text-2xl font-black font-heading">২০০০৳</span>
          <span className="text-white/50 text-sm">Special Offer Fee · সীমিত সময়ের জন্য</span>
        </motion.div>
      </section>

      {/* FEATURES GRID */}
      <section className="relative z-10 px-6 py-24 bg-[#07070a] border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#00ffff] font-semibold tracking-[0.3em] uppercase text-xs block mb-4 font-heading">What You'll Learn</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight font-heading">Course Features</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group p-6 rounded-[10px] bg-white/3 border border-white/8 hover:border-[#00ffff]/40 hover:bg-[#00ffff]/5 transition-all duration-300 text-center cursor-default"
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <p className="text-white/80 text-sm font-medium leading-snug group-hover:text-white transition-colors">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="relative z-10 px-6 py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-[#00ffff] font-semibold tracking-[0.3em] uppercase text-xs block mb-4 font-heading">Schedule</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight font-heading">Class Schedule</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '📅', label: 'দিন', value: 'রবিবার ও বুধবার' },
              { icon: '🕙', label: 'সময়', value: 'রাত ৮:৩০ – ১০:৩০' },
              { icon: '⏳', label: 'শুরু', value: '১৬ আগস্ট ২০২৬' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-[10px] border border-white/10 bg-white/3 text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-[#00ffff] text-xs tracking-widest uppercase font-semibold mb-1 font-heading">{item.label}</p>
                <p className="text-white font-bold text-lg">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION FORM */}
      <section id="register" className="relative z-10 px-6 py-24 bg-[#07070a] border-t border-white/5">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-[#00ffff] font-semibold tracking-[0.3em] uppercase text-xs block mb-4 font-heading">Join Now</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight font-heading">রেজিস্ট্রেশন ফরম</h2>
            <p className="text-white/50 mt-4 text-sm">Payment করার পর ফর্ম পূরণ করুন।</p>
          </motion.div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-12 rounded-[10px] border border-[#00ffff]/30 bg-[#00ffff]/5"
              >
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-black text-[#00ffff] font-heading mb-2">রেজিস্ট্রেশন সফল!</h3>
                <p className="text-white/60">আমাদের টিম শীঘ্রই আপনার সাথে যোগাযোগ করবে।</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {[
                  { name: 'name', type: 'text', placeholder: 'আপনার পূর্ণ নাম' },
                  { name: 'email', type: 'email', placeholder: 'ইমেইল ঠিকানা' },
                  { name: 'phone', type: 'tel', placeholder: 'ফোন নম্বর (WhatsApp)' },
                  { name: 'payment', type: 'text', placeholder: 'পেমেন্ট ট্রানজেকশন ID' },
                ].map((field) => (
                  <input
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    required
                    placeholder={field.placeholder}
                    className="w-full px-5 py-4 bg-[#0c0c0f] border border-white/10 rounded-[10px] text-white placeholder-white/30 focus:border-[#00ffff] focus:ring-1 focus:ring-[#00ffff] outline-none transition-all text-sm"
                  />
                ))}
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-[#00ffff] text-black font-black uppercase tracking-wider rounded-full hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:scale-[1.02] transition-all font-heading text-sm"
                >
                  রেজিস্ট্রেশন পাঠান →
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 px-6 py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-[#00ffff] font-semibold tracking-[0.3em] uppercase text-xs block mb-4 font-heading">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight font-heading">প্রশ্নোত্তর</h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="rounded-[10px] border border-white/8 bg-white/3 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  <span>{item.q}</span>
                  <motion.span
                    animate={{ rotate: openFaq === idx ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-[#00ffff] text-xl ml-4 flex-shrink-0"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-white/55 leading-relaxed border-t border-white/5 pt-4">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-10 text-center text-white/30 border-t border-white/8 text-sm">
        <Link href="/" className="text-[#00ffff]/60 hover:text-[#00ffff] transition-colors">← Back to NanoGraphic</Link>
        <p className="mt-3">© 2026 NanoGraphic. All rights reserved.</p>
      </footer>
    </div>
  )
}
