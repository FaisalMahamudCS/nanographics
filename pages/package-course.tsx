import React, { useState } from 'react';

const faqs = [
  { q: 'RGB / CMYK কোনটা করতে হবে?', a: 'প্রিন্টে CMYK ব্যবহার করা হয়, কারণ এটি প্রিন্টের মূল রঙ মডেল। RGB স্ক্রিনের জন্য.' },
  { q: 'ফয়েল প্রিন্টের সময় সর্বনিম্ন কত কালারের প্রিন্ট করা হয়?', a: 'সাধারণত ১-২ রঙের ফয়েল ব্যবহার করা হয়, তবে ডিজাইনের উপর নির্ভর করে বেশি রঙেরও হতে পারে.' },
  { q: 'স্পেশাল কালার কেন ব্যবহার করা হয়?', a: 'স্পেশাল কালার (যেমন প্যানটোন) নিশ্চিত করে যে প্রিন্টে রঙের সঠিকতা ও সামঞ্জস্য থাকে।' },
  { q: 'গোল্ডেন কালার কি?', a: 'গোল্ড ফয়েল বা প্যানটোন 871, যা প্রিন্টে সোনার ইফেক্ট দেয়।' },
  { q: 'সিলভার কালার কি?', a: 'সিলভার ফয়েল বা প্যানটোন 877, যা রূপা মত শাইন তৈরি করে।' },
  { q: 'কিছু ফয়েল চিকচিক করে আবার কিছু ফয়েল চিকচিক করে না কেন?', a: 'ফয়েলের কোটিং, পরিবেশ এবং সাপ্লাইয়ার ব্যবহারের উপর নির্ভর করে।' },
  { q: 'ডিজাইন করার সময় ট্রান্সপারেন্ট এরিয়া কিভাবে দেখাতে হয়?', a: 'Photoshop-এ লেয়ারকে লুকিয়ে বা সাদা ব্যাকগ্রাউন্ড দিয়ে রূপান্তর করতে পারেন।' },
  { q: 'আইমার এরিয়া কেন দিতে হয়?', a: 'আইমার (இமைப்பு) হল অপ্রিন্টেড মার্জিন, যা কাটিং ও ফোল্ডিংয়ে সাহায্য করে।' },
  { q: 'কোন এলেমেন্ট চার কালারের থাকলে কি প্রবলেম?', a: 'সেমি-সর্বোচ্চ ৪টি রঙ (সিএমওয়াইকে) ব্যবহার করলে প্রোডাকশন সহজ হয়, তবে অতিরিক্ত রঙের অতিরিক্ত খরচ হয়।' },
  { q: 'বিভিন্ন প্রকার ডাইলেন কিভাবে তৈরি করতে হয়?', a: 'ডাইলেন সাধারণত Adobe Illustrator‑এ ডকুমেন্ট সাইজ অনুযায়ী টেমপ্লেট তৈরি করে।' },
  { q: 'কাটিং এরিয়া ক্রিস এরিয়া কিভাবে বুঝাতে হবে?', a: 'কাটিং লাইনকে ড্যাশড লাইন এবং ক্রিস (ক্রিয়েস) এরিয়া কে ডটেড লাইন দিয়ে নির্দেশ করুন।' },
  { q: 'আউটপুট ফাইল কিভাবে দিতে হবে?', a: 'PDF/X‑1a অথবা PDF/X‑4 ফরম্যাটে 300 dpi, CMYK ফ্ল্যাট কোলার প্রোফাইলসহ।' },
  { q: 'সাধারণত কোন মেজারমেন্ট দিয়ে ডিজাইন করতে হয়?', a: 'মিলিমিটারে (mm) ডিজাইন করা হয়, স্ট্যান্ডার্ড প্যাকেজ সাইজ অনুসারে।' },
  { q: 'ফটোশপ এবং ইলাস্ট্রেটর দিয়ে কিভাবে একটা ডিজাইন রেডি করতে হয়?', a: 'ইলাস্ট্রেটরে ভেক্টর লেআউট তৈরি করুন, Photoshop‑এ র‍্যাস্টার ইফেক্ট যোগ করুন।' },
  { q: 'কোন এলিমেন্ট ফটোশপে থাকবে, কোন এলিমেন্ট ইলাস্ট্রেটরে থাকবে?', a: 'ইলাস্ট্রেটর: লোগো, টেক্সট, শেপ; Photoshop: ফটো, শেড, টেক্সচার।' },
  { q: 'জেপিজি ইমেজ রেডি করলে কিছু ট্যাক্স দেখা যায় না?', a: 'প্রিন্টে জেপিইজি রঙের প্রোফাইল পরিবর্তন করে, ট্যাক্স দেখা না যায়।' },
  { q: 'ডিজাইন করার সময় ফ্রন্ট সাইজ কীভাবে নির্ণয় করব?', a: 'ফরা (ফ্রন্ট) সাইজ প্যাকেজের ফেসের মাপ অনুযায়ী, প্রোডাক্ট বিবরণে উল্লেখ থাকে।' },
  { q: 'বিএসটিআই অনুমোদন অনুযায়ী কীভাবে ডিজাইন করতে হবে?', a: 'বিএসটিআই গাইডলাইন অনুসারে মোবাইল প্যাকেজের টার্মিনাল ও লেবেলিং মান বজায় রেখে।' },
  { q: 'প্রোডাক্টের ডিজাইন কনসেপ্ট কীভাবে নিব?', a: 'ব্র্যান্ডের ভিশন, টার্গেট মার্কেট এবং ব্যবহারকারীর চাহিদা বিশ্লেষণ করে কনসেপ্ট তৈরি করুন।' },
  { q: 'আউটপুট ফাইল দেয়ার সময় কী কী চেক করতে হবে?', a: 'রেজোলিউশন, কালার মোড (CMYK), ট্রিমার (Bleed) এবং ফন্ট অ্যাপ্লাইড/আউটলাইনেড।' },
];

export default function PackageCourse() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration:', form);
    alert('রেজিস্ট্রেশন সফল! আমাদের টিম শীঘ্রই যোগাযোগ করবে।');
    setForm({ name: '', email: '', phone: '' });
  };

  return (
    <div className="min-h-screen bg-[#050507] text-white font-heading">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
          চতুর্থ ব্যাচ – Packaging Design কোর্স
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 mb-8">
          প্রফেশনাল প্যাকেজিং ডিজাইন শিখে নিজের স্কিল ডেভেলপ করুন। সীমিত সিট, এখনই জয়েন করুন!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#register" className="px-8 py-4 rounded-full bg-[#00ffff] text-black font-bold uppercase tracking-wider transition-all hover:bg-[#33ffff]">
            রেজিস্ট্রেশন ফরমে যান
          </a>
          <a href="#faq" className="px-8 py-4 rounded-full border border-white/10 text-white font-bold uppercase tracking-wider transition-all hover:bg-white/5">
            ত্রুটিপূর্ণ প্রশ্নসমূহ
          </a>
        </div>
        <p className="mt-8 text-sm text-white/40">Special Offer Fee: মাত্র ২০০০৳</p>
      </section>

      {/* Course Features */}
      <section className="px-6 py-12 bg-[#0a0a0a]">
        <h2 className="text-3xl font-bold text-center mb-8">Course Features</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-white/80">
          <li>✅ Colour separation</li>
          <li>✅ Packaging Dieline</li>
          <li>✅ Photoshop & Illustrator লিংক‑আপ কাজ</li>
          <li>✅ Output file setup</li>
          <li>✅ ১৬+ টি লাইভ ক্লাস</li>
          <li>✅ ৮+ রিয়েল‑ওয়ার্ল্ড অ্যাসাইনমেন্ট</li>
          <li>✅ এক্টিভ গ্রুপ চ্যাট সাপোর্ট</li>
          <li>✅ 🎯 Lifetime Support</li>
        </ul>
      </section>

      {/* Schedule */}
      <section className="px-6 py-12 bg-[#050507] border-t border-white/5">
        <h2 className="text-3xl font-bold text-center mb-6">Class Schedule</h2>
        <div className="max-w-md mx-auto text-center text-white/70">
          <p>📅 সপ্তাহে ২ দিন — রবিবার ও বুধবার</p>
          <p>🕙 সময়: রাত ৮:৩০ – ১০:৩০ (প্রতি ক্লাস ২ ঘন্টা)</p>
          <p>⏳ প্রথম ক্লাস: ১৬ আগস্ট</p>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="px-6 py-20 bg-[#0a0a0a]">
        <h2 className="text-3xl font-bold text-center mb-8">রেজিস্ট্রেশন ফরম</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="আপনার নাম"
            className="w-full px-4 py-3 bg-[#111] border border-white/10 rounded-none text-white placeholder-white/30 focus:border-[#00ffff] focus:ring-1 focus:ring-[#00ffff]"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="ইমেইল ঠিকানা"
            className="w-full px-4 py-3 bg-[#111] border border-white/10 rounded-none text-white placeholder-white/30 focus:border-[#00ffff] focus:ring-1 focus:ring-[#00ffff]"
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="ফোন নম্বর"
            className="w-full px-4 py-3 bg-[#111] border border-white/10 rounded-none text-white placeholder-white/30 focus:border-[#00ffff] focus:ring-1 focus:ring-[#00ffff]"
          />
          <button
            type="submit"
            className="w-full px-6 py-4 bg-[#00ffff] text-black font-bold uppercase tracking-wider rounded-full hover:bg-[#33ffff] transition-all"
          >
            রেজিস্ট্রেশন পাঠান
          </button>
        </form>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-20 bg-[#050507] border-t border-white/5">
        <h2 className="text-3xl font-bold text-center mb-8">প্রশ্নোত্তর</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item, idx) => (
            <details key={idx} className="bg-[#0a0a0a] rounded-none p-4 border border-white/10">
              <summary className="cursor-pointer font-medium text-white/80">{item.q}</summary>
              <p className="mt-2 text-sm text-white/60">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-white/40 border-t border-white/10">
        © 2026 NanoGraphic. All rights reserved.
      </footer>
    </div>
  );
}
