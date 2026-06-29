'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Hind_Siliguri } from 'next/font/google'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  Search,
  HelpCircle,
  Calendar,
  Clock,
  Layers,
  Palette,
  FileText,
  Tv,
  Award,
  Users,
  ShieldCheck,
  Check,
  Smartphone,
  FileCode,
  Flame
} from 'lucide-react'

const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-hind-siliguri',
})

// 20 questions from the Word document
const courseQuestions = [
  { id: 1, q: 'RGB / CMYK কোনটা করতে হবে?' },
  { id: 2, q: 'ফয়েল প্রিন্টের সময় সর্বনিম্ন কত কালারের প্রিন্ট করা হয়?' },
  { id: 3, q: 'স্পেশাল কালার কেন ব্যবহার করা হয়?' },
  { id: 4, q: 'গোল্ডেন কালার কি?' },
  { id: 5, q: 'সিলভার কালার কি?' },
  { id: 6, q: 'কিছু ফয়েল চিকচিক করে আবার কিছু ফয়েল চিকচিক করে না কেন?' },
  { id: 7, q: 'ডিজাইন করার সময় ট্রান্সপারেন্ট এরিয়া কিভাবে দেখাতে হয়?' },
  { id: 8, q: 'আইমার এরিয়া কেন দিতে হয়?' },
  { id: 9, q: 'কোন এলেমেন্ট চার কালারের থাকলে কি প্রবলেম?' },
  { id: 10, q: 'বিভিন্ন প্রকার ডাইলেন কিভাবে তৈরি করতে হয়?' },
  { id: 11, q: 'কাটিং এরিয়া ক্রিস এরিয়া কিভাবে বুঝাতে হবে?' },
  { id: 12, q: 'আউটপুট ফাইল কিভাবে দিতে হবে?' },
  { id: 13, q: 'সাধারণত কোন মেজারমেন্ট দিয়ে ডিজাইন করতে হয়?' },
  { id: 14, q: 'ফটোশপ এবং ইলাস্ট্রেটর দিয়ে কিভাবে একটা ডিজাইন রেডি করতে হয়?' },
  { id: 15, q: 'কোন এলিমেন্ট ফটোশপে থাকবে, কোন এলিমেন্ট ইলাস্ট্রেটরে থাকবে?' },
  { id: 16, q: 'জেপিজি ইমেজ রেডি করলে কিছু ট্যাক্স দেখা যায় না?' },
  { id: 17, q: 'ডিজাইন করার সময় ফ্রন্ট সাইজ কিভাবে নির্ণয় করব?' },
  { id: 18, q: 'বিএসটিআই অনুমোদন অনুযায়ী কিভাবে ডিজাইন করতে হবে?' },
  { id: 19, q: 'প্রোডাক্টের ডিজাইন কনসেপ্ট কিভাবে নিব?' },
  { id: 20, q: 'আউটপুট ফাইল দেয়ার সময় কি কি চেক করতে হবে?' }
]

const features = [
  { icon: Palette, title: 'Color Separation', desc: 'প্রিন্টিং-এর জন্য সঠিক কালার সেপারেশন গাইড।' },
  { icon: Layers, title: 'Packaging Dieline', desc: 'বিভিন্ন প্যাকেট ও বক্সের নিখুঁত ডাইলেন তৈরি।' },
  { icon: FileCode, title: 'Photoshop & Illustrator Link-up', desc: 'উভয় সফটওয়্যারের প্রফেশনাল ইন্টিগ্রেশন।' },
  { icon: FileCode, title: 'Output File Setup', desc: 'প্রেস রেডি ফাইল ফরমেট এবং এক্সপোর্ট রুলস।' },
  { icon: Tv, title: '১৬+ লাইভ ক্লাস', desc: 'সরাসরি প্রশ্ন করার সুযোগসহ লাইভ প্রজেক্ট সেশন।' },
  { icon: FileText, title: '৮+ রিয়েল প্রজেক্ট অ্যাসাইনমেন্ট', desc: 'বাস্তব কাজের অভিজ্ঞতা অর্জনের সুযোগ।' },
  { icon: Users, title: 'অ্যাক্টিভ গ্রুপ সাপোর্ট', desc: 'ক্লাসের বাইরে গ্রুপ চ্যাটে সার্বক্ষণিক সহায়তা।' },
  { icon: Award, title: 'লাইফটাইম এক্সেস ও সাপোর্ট', desc: 'ভবিষ্যতেও যে কোনো আপডেট ও পরামর্শের সুবিধা।' }
]

export default function PackageCoursePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', paymentMethod: '', senderNo: '', transactionId: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated form submission
    console.log('Registration submitted:', form)
    setSubmitted(true)
  }

  const filteredQuestions = courseQuestions.filter((item) =>
    item.q.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className={`min-h-screen bg-[#050507] text-white overflow-x-hidden selection:bg-[#00ffff] selection:text-black ${hindSiliguri.variable}`} style={{ fontFamily: 'var(--font-space-grotesk), var(--font-hind-siliguri), sans-serif' }}>
      {/* Visual background elements */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] pointer-events-none z-0" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00ffff]/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#0088ff]/5 blur-[150px] pointer-events-none rounded-full" />

      {/* Floating Header */}
      <header className="fixed top-6 left-6 right-6 z-50 flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0a0a0c]/80 border border-white/10 backdrop-blur-md text-white/70 hover:text-white hover:border-[#00ffff]/40 hover:shadow-[0_0_15px_rgba(0,255,255,0.1)] transition-all duration-300 text-sm font-semibold cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#00ffff]" />
          <span>Home</span>
        </Link>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 flex flex-col items-center px-6 pt-32 pb-16 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00ffff]/10 border border-[#00ffff]/30 mb-6"
        >
          <Flame className="w-4 h-4 text-[#00ffff] animate-pulse" />
          <span className="text-[#00ffff] text-xs font-semibold tracking-wider uppercase font-heading">
            চতুর্থ ব্যাচ · Batch 04 · Registration Open
          </span>
        </motion.div>

        {/* Course Banner Image — primary hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="w-full max-w-5xl mx-auto mb-10 relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00ffff]/20 via-[#0088ff]/10 to-[#00ffff]/20 rounded-2xl blur-xl pointer-events-none" />
          <div className="relative rounded-xl overflow-hidden border border-[#00ffff]/30 shadow-[0_0_80px_rgba(0,255,255,0.15)]">
            <img
              src="/Banner Ai.png"
              alt="Packaging Design Masterclass – Batch 4"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[clamp(2rem,6vw,5rem)] font-black uppercase leading-[0.9] tracking-tighter mb-5 font-heading"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-[#0088ff]">
            Packaging Design
          </span>
          <br />
          <span className="text-white">Masterclass Course</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-2xl text-white/60 text-lg leading-relaxed mb-8 font-light"
        >
          আপনি কি প্যাকেজিং ডিজাইন শিখে নিজের ক্যারিয়ার গড়তে চান? সম্পূর্ণ শুরু থেকে প্রেস-রেডি আউটপুট ফাইল তৈরির ইন্ডাস্ট্রিয়াল কাজের সব সিক্রেট নিয়ে সাজানো স্পেশাল কোর্স।
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 items-center mb-10"
        >
          <a
            href="#register"
            className="px-8 py-4 rounded-full bg-[#00ffff] text-black font-bold uppercase tracking-wider shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] hover:scale-105 transition-all duration-300 text-sm cursor-pointer"
          >
            রেজিস্ট্রেশন করুন
          </a>
          <a
            href="#questions"
            className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white/80 font-bold uppercase tracking-wider hover:border-white/30 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm cursor-pointer"
          >
            আলোচ্য বিষয়সমূহ
          </a>
        </motion.div>



        {/* Pricing Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="inline-flex items-center gap-5 px-8 py-4 border border-[#00ffff]/30 bg-gradient-to-r from-[#00ffff]/5 to-transparent backdrop-blur-md shadow-[0_0_20px_rgba(0,255,255,0.15)] hover:shadow-[0_0_30px_rgba(0,255,255,0.25)] hover:border-[#00ffff]/60 transition-all duration-300 rounded-full group"
        >
          <div className="flex flex-col text-left">
            <span className="text-[#00ffff] text-3xl font-black font-heading leading-none group-hover:scale-110 transition-transform origin-left">২০০০৳</span>
            <span className="text-white/50 text-[10px] uppercase tracking-wider font-bold mt-1">Special Discount Fee</span>
          </div>
          <div className="h-10 w-px bg-[#00ffff]/20" />
          <p className="text-white/70 text-xs sm:text-sm text-left leading-snug font-medium">
            <span className="text-white font-bold">সীমিত সিট!</span> কোর্স শুরু হতে <br />আর অল্প কিছুদিন বাকি।
          </p>
        </motion.div>
      </section>


      {/* COURSE DETAILS / FEATURES */}
      <section className="relative z-10 px-6 py-24 bg-[#07070a] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#00ffff] font-semibold tracking-[0.2em] uppercase text-xs mb-4 font-heading">
              Comprehensive Curriculum
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight font-heading">
              কোর্সের বিশেষ সেবাসমূহ
            </h2>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feat, index) => {
              const Icon = feat.icon
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } }
                  }}
                  whileHover={{ y: -8 }}
                  className="group p-8 rounded-none border border-white/5 bg-[#0a0a0c] hover:border-[#00ffff]/30 hover:bg-[#00ffff]/5 transition-colors duration-300 flex flex-col items-start text-left cursor-pointer shadow-lg hover:shadow-[0_10px_30px_rgba(0,255,255,0.08)]"
                >
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="w-12 h-12 rounded-none bg-[#00ffff]/10 flex items-center justify-center mb-6 group-hover:bg-[#00ffff] transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5 text-[#00ffff] group-hover:text-black transition-colors duration-300" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00ffff] transition-colors font-heading uppercase tracking-wide">
                    {feat.title}
                  </h3>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* QUESTIONS SECTION (NO ANSWERS) */}
      <section id="questions" className="relative z-10 px-6 py-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00ffff] font-semibold tracking-[0.25em] uppercase text-xs block mb-4 font-heading">
              Live Class Discussion Topics
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight font-heading mb-6">
              যেসব প্রশ্নের সমাধান পাবেন এই কোর্সে
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-base leading-relaxed font-light">
              প্যাকেজিং ডিজাইনে পারফেক্ট কাজ শেখার জন্য এই ২০টি প্রফেশনাল বিষয়ের বাস্তবমুখী এবং সম্পূর্ণ সমাধান নিয়ে আলোচনা হবে সরাসরি লাইভ ক্লাসে।
            </p>
          </div>

          {/* Interactive Search Bar */}
          <div className="max-w-xl mx-auto mb-12 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ffff]/10 to-[#0088ff]/10 rounded-full blur-md opacity-70 group-focus-within:opacity-100 transition-opacity" />
            <div className="relative flex items-center bg-[#0d0d11] border border-white/10 rounded-full px-6 py-3.5 focus-within:border-[#00ffff]/50 transition-all duration-300">
              <Search className="w-5 h-5 text-white/30 mr-3 group-focus-within:text-[#00ffff] transition-colors" />
              <input
                type="text"
                placeholder="প্রশ্ন খুঁজুন (যেমন: CMYK, গোল্ডেন, ডাইলেন)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent outline-none border-none text-white text-sm placeholder-white/30"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-white/40 hover:text-white uppercase tracking-wider cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Questions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatePresence>
              {filteredQuestions.length > 0 ? (
                filteredQuestions.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="group flex gap-4 p-5 rounded-none border border-white/5 bg-[#08080b] hover:border-[#00ffff]/20 hover:bg-[#00ffff]/2 transition-all duration-300 items-center cursor-default"
                  >
                    <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 group-hover:border-[#00ffff]/40 group-hover:bg-[#00ffff]/10 flex items-center justify-center shrink-0 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_15px_rgba(0,255,255,0.15)]">
                      <HelpCircle className="w-5 h-5 text-white/50 group-hover:text-[#00ffff] transition-colors" />
                    </div>
                    <div className="text-left">
                      <p className="text-white/80 group-hover:text-white transition-colors text-sm sm:text-base font-medium leading-relaxed">
                        {item.q}
                      </p>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-12 text-center text-white/40 border border-dashed border-white/10">
                  কোনো মিল পাওয়া যায়নি। অন্য কিছু লিখে খুঁজুন।
                </div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{
                boxShadow: ["0px 0px 0px rgba(0,255,255,0)", "0px 0px 30px rgba(0,255,255,0.15)", "0px 0px 0px rgba(0,255,255,0)"]
              }}
              transition={{
                opacity: { duration: 0.6 },
                y: { duration: 0.6 },
                boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="inline-flex items-center gap-4 px-8 py-5 rounded-full bg-[#00ffff]/5 border border-[#00ffff]/25 backdrop-blur-md"
            >
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Check className="w-6 h-6 shrink-0 text-[#00ffff]" />
              </motion.div>
              <span className="text-[#00ffff] font-semibold text-lg md:text-xl">
                সকল প্রশ্নের বিস্তারিত উত্তর ও সমাধান নিয়ে আপনাদের সাথে দেখা হবে লাইভ ক্লাসে।
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SCHEDULE DETAILS */}
      <section className="relative z-10 px-6 py-24 bg-[#07070a] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00ffff] font-semibold tracking-[0.2em] uppercase text-xs block mb-4 font-heading">
              Class Schedule & Timeline
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight font-heading">
              ক্লাসের সময়সূচী
            </h2>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Calendar,
                label: 'দিন',
                value: 'রবিবার ও বুধবার',
                desc: 'সপ্তাহে ২ দিন লাইভ ক্লাস'
              },
              {
                icon: Clock,
                label: 'সময়',
                value: 'রাত ৮:৩০ - ১০:৩০',
                desc: 'প্রতিটি ক্লাস ২ ঘণ্টা'
              },
              {
                icon: ShieldCheck,
                label: 'ক্লাস শুরু',
                value: '১৬ আগস্ট ২০২৬',
                desc: 'মোট ১৬+ স্পেশাল লাইভ ক্লাস'
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } }
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-8 rounded-none border border-white/5 bg-[#0a0a0d] text-center flex flex-col items-center hover:border-[#00ffff]/30 hover:bg-[#00ffff]/5 transition-colors duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(0,255,255,0.08)] cursor-pointer group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-12 rounded-none bg-white/5 flex items-center justify-center mb-5 group-hover:bg-[#00ffff]/20 transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5 text-[#00ffff] group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <p className="text-white/40 text-xs tracking-widest uppercase font-semibold mb-2 font-heading">
                    {item.label}
                  </p>
                  <p className="text-white font-extrabold text-xl mb-2 font-heading group-hover:text-[#00ffff] transition-colors duration-300">
                    {item.value}
                  </p>
                  <p className="text-white/55 text-xs">
                    {item.desc}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* REGISTRATION & PAYMENT */}
      <section id="register" className="relative z-10 px-6 py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left: Instructions */}
            <div className="space-y-8 text-left">
              <div>
                <span className="text-[#00ffff] font-semibold tracking-[0.2em] uppercase text-xs block mb-4 font-heading">
                  How to Join
                </span>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight font-heading leading-tight mb-6">
                  ভর্তি হওয়ার সহজ নিয়মাবলী
                </h2>
                <p className="text-white/60 leading-relaxed font-light">
                  প্যাকেজিং ডিজাইন কোর্সের এই বিশেষ ব্যাচে রেজিস্ট্রেশন নিশ্চিত করতে নিচের ৩টি ধাপ অনুসরণ করুন।
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#00ffff]/10 border border-[#00ffff]/20 flex items-center justify-center shrink-0 font-bold text-[#00ffff] text-sm">
                    ১
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">কোর্স ফি সেন্ড মানি করুন</h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      নিচের যেকোনো একটি পেমেন্ট নাম্বারে কোর্স ফি <strong className="text-white font-bold">২০০০৳</strong> সেন্ড মানি করুন।
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#00ffff]/10 border border-[#00ffff]/20 flex items-center justify-center shrink-0 font-bold text-[#00ffff] text-sm">
                    ২
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">ট্রানজেকশন তথ্য সংগ্রহ করুন</h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      পেমেন্ট সফল হওয়ার পর যে নাম্বার থেকে পেমেন্ট করেছেন সেটি এবং Transaction ID টি লিখে রাখুন।
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#00ffff]/10 border border-[#00ffff]/20 flex items-center justify-center shrink-0 font-bold text-[#00ffff] text-sm">
                    ৩
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">রেজিস্ট্রেশন ফর্মটি পূরণ করুন</h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      পাশে দেওয়া ফর্মে সঠিক তথ্য এবং পেমেন্টের তথ্য দিয়ে &ldquo;রেজিস্ট্রেশন পাঠান&rdquo; বাটনে ক্লিক করুন।
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment details card */}
              <div className="p-8 rounded-none border border-[#00ffff]/15 bg-[#00ffff]/2 space-y-5">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-[#00ffff]" />
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm">
                    পেমেন্ট নাম্বার (Personal)
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#0b0b0f] border border-white/5 p-4 rounded-none">
                    <span className="text-white/40 text-xs uppercase font-semibold">bKash Personal</span>
                    <p className="text-white font-extrabold text-lg mt-1 tracking-wider">01980537210</p>
                  </div>
                  <div className="bg-[#0b0b0f] border border-white/5 p-4 rounded-none">
                    <span className="text-white/40 text-xs uppercase font-semibold">Nagad Personal</span>
                    <p className="text-white font-extrabold text-lg mt-1 tracking-wider">01980537210</p>
                  </div>
                </div>
                <p className="text-white/40 text-xs italic">
                  *অন্যান্য পেমেন্ট মেথড (Islami bank / Mcash / Rocket) এর জন্য যোগাযোগ করুন।
                </p>
              </div>
            </div>

            {/* Right: Registration Form */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#00ffff]/10 to-transparent rounded-none blur-xl pointer-events-none" />
              <div className="relative p-8 sm:p-10 rounded-none border border-white/10 bg-[#0a0a0c] backdrop-blur-md">

                <h3 className="text-2xl font-black text-white mb-2 font-heading uppercase">
                  Registration Form
                </h3>
                <p className="text-white/50 text-sm mb-8">
                  সঠিক পেমেন্ট সম্পন্ন করার পর রেজিস্ট্রেশন সম্পন্ন করুন।
                </p>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 px-6 rounded-none border border-[#00ffff]/30 bg-[#00ffff]/5"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#00ffff]/10 flex items-center justify-center mx-auto mb-6">
                        <Check className="w-8 h-8 text-[#00ffff]" />
                      </div>
                      <h4 className="text-2xl font-black text-[#00ffff] font-heading mb-3">
                        রেজিস্ট্রেশন সফল হয়েছে!
                      </h4>
                      <p className="text-white/70 text-sm leading-relaxed">
                        আপনার তথ্য সফলভাবে আমাদের ডাটাবেজে জমা হয়েছে। আমরা পেমেন্ট যাচাই করে আগামী ২৪ ঘণ্টার মধ্যে WhatsApp/Email-এ কনফার্মেশন পাঠিয়ে দেব।
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-8 px-6 py-2.5 rounded-full border border-[#00ffff]/20 text-[#00ffff] hover:bg-[#00ffff]/10 transition-all text-xs uppercase tracking-wider font-semibold cursor-pointer"
                      >
                        আরেকটি রেজিস্ট্রেশন করুন
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {/* Name */}
                      <div className="text-left">
                        <label className="block text-xs font-bold text-white/70 uppercase tracking-widest mb-2">
                          আপনার নাম (Full Name)
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="উদা: ফয়সাল মাহমুদ"
                          className="w-full px-5 py-4 bg-[#0d0d10] border border-white/10 rounded-none text-white placeholder-white/20 focus:border-[#00ffff] focus:ring-1 focus:ring-[#00ffff]/50 outline-none transition-all text-sm"
                        />
                      </div>

                      {/* Email */}
                      <div className="text-left">
                        <label className="block text-xs font-bold text-white/70 uppercase tracking-widest mb-2">
                          ইমেইল এড্রেস (Email Address)
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="উদা: name@example.com"
                          className="w-full px-5 py-4 bg-[#0d0d10] border border-white/10 rounded-none text-white placeholder-white/20 focus:border-[#00ffff] focus:ring-1 focus:ring-[#00ffff]/50 outline-none transition-all text-sm"
                        />
                      </div>

                      {/* Phone */}
                      <div className="text-left">
                        <label className="block text-xs font-bold text-white/70 uppercase tracking-widest mb-2">
                          মোবাইল নাম্বার (WhatsApp)
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="উদা: 017xxxxxxxx"
                          className="w-full px-5 py-4 bg-[#0d0d10] border border-white/10 rounded-none text-white placeholder-white/20 focus:border-[#00ffff] focus:ring-1 focus:ring-[#00ffff]/50 outline-none transition-all text-sm"
                        />
                      </div>

                      {/* Payment Method */}
                      <div className="text-left">
                        <label className="block text-xs font-bold text-white/70 uppercase tracking-widest mb-2">
                          পেমেন্ট মাধ্যম (Payment Method)
                        </label>
                        <select
                          name="paymentMethod"
                          value={form.paymentMethod}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 bg-[#0d0d10] border border-white/10 rounded-none text-white placeholder-white/20 focus:border-[#00ffff] focus:ring-1 focus:ring-[#00ffff]/50 outline-none transition-all text-sm appearance-none"
                        >
                          <option value="" disabled>সিলেক্ট করুন</option>
                          <option value="bkash">bKash (বিকাশ)</option>
                          <option value="nagad">Nagad (নগদ)</option>
                          <option value="other">অন্যান্য (Bank / Rocket)</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Sender Number */}
                        <div className="text-left">
                          <label className="block text-xs font-bold text-white/70 uppercase tracking-widest mb-2">
                            সেন্ডার নাম্বার
                          </label>
                          <input
                            type="text"
                            name="senderNo"
                            value={form.senderNo}
                            onChange={handleChange}
                            required
                            placeholder="যে নাম্বার থেকে পাঠিয়েছেন"
                            className="w-full px-4 py-4 bg-[#0d0d10] border border-white/10 rounded-none text-white placeholder-white/20 focus:border-[#00ffff] focus:ring-1 focus:ring-[#00ffff]/50 outline-none transition-all text-sm"
                          />
                        </div>

                        {/* Transaction ID */}
                        <div className="text-left">
                          <label className="block text-xs font-bold text-white/70 uppercase tracking-widest mb-2">
                            Transaction ID (TrxID)
                          </label>
                          <input
                            type="text"
                            name="transactionId"
                            value={form.transactionId}
                            onChange={handleChange}
                            required
                            placeholder="উদা: BKX98273S"
                            className="w-full px-4 py-4 bg-[#0d0d10] border border-white/10 rounded-none text-white placeholder-white/20 focus:border-[#00ffff] focus:ring-1 focus:ring-[#00ffff]/50 outline-none transition-all text-sm"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full mt-6 px-8 py-4 bg-[#00ffff] text-black font-bold uppercase tracking-wider rounded-full hover:bg-[#33ffff] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:scale-[1.02] transition-all duration-300 text-sm cursor-pointer"
                      >
                        রেজিস্ট্রেশন পাঠান
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-16 text-center text-white/30 border-t border-white/5 text-sm bg-[#030305]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/50 hover:text-[#00ffff] transition-colors cursor-pointer text-sm font-semibold uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <div className="h-px w-20 bg-white/10" />
          <p>© 2026 NanoGraphic Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
