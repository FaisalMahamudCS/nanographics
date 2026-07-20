import React, { useState } from 'react'

const socialLinks = [
  {
    name: 'FB',
    href: 'https://www.facebook.com/Nanographic.bd',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'BE',
    href: 'https://www.behance.net/nanographic01',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 16 16" fill="currentColor">
        <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z" />
      </svg>
    ),
  },
  {
    name: 'YT',
    href: 'https://www.youtube.com/@AnyTutorialbyMujib',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'IG',
    href: '#',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'IN',
    href: '#',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', company: '', message: '' })
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-[#050505] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00ffff]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-[#00ffff] text-sm font-semibold tracking-widest mb-4 uppercase">
            GET IN TOUCH
          </p>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 uppercase tracking-[0.04em] leading-none font-display">
            <span className="text-white">Let&apos;s Work</span>
            <br />
            <span className="text-gradient-cyan">Together</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Have a project in mind? We&apos;d love to hear about it. Contact us today to discuss your branding and design needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Left: Contact Form */}
          <div className="relative flex h-full">
            <div className="absolute -inset-1 bg-gradient-to-br from-[#00ffff]/20 to-transparent rounded-none blur-xl" />
            <form
              onSubmit={handleSubmit}
              className="relative w-full h-full flex flex-col p-10 sm:p-12 rounded-none border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl space-y-8"
            >
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-white uppercase tracking-widest mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-[#111] border border-white/10 rounded-none text-white placeholder-white/30 focus:border-[#00ffff] focus:ring-1 focus:ring-[#00ffff] transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-white uppercase tracking-widest mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-[#111] border border-white/10 rounded-none text-white placeholder-white/30 focus:border-[#00ffff] focus:ring-1 focus:ring-[#00ffff] transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-white uppercase tracking-widest mb-3">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-[#111] border border-white/10 rounded-none text-white placeholder-white/30 focus:border-[#00ffff] focus:ring-1 focus:ring-[#00ffff] transition-all outline-none"
                  placeholder="Your Company"
                />
              </div>

              <div className="flex flex-col grow">
                <label className="block text-sm font-bold text-white uppercase tracking-widest mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full grow min-h-[140px] px-5 py-4 bg-[#111] border border-white/10 rounded-none text-white placeholder-white/30 focus:border-[#00ffff] focus:ring-1 focus:ring-[#00ffff] transition-all outline-none resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full mt-auto px-8 py-5 bg-[#00ffff] text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-[#33ffff] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Information — same column height */}
          <div className="h-full flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 grow">
              <div className="p-8 h-full flex flex-col rounded-none border border-white/10 bg-[#0a0a0a] hover:border-[#00ffff]/50 transition-colors duration-500 group">
                <div className="w-16 h-16 rounded-none border border-[#00ffff]/40 bg-[#00ffff]/10 flex items-center justify-center mb-6 group-hover:bg-[#00ffff] transition-colors duration-500">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-[#00ffff] group-hover:stroke-black stroke-2 stroke-linecap-round stroke-linejoin-round transition-colors duration-500">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h3 className="font-bold text-white uppercase tracking-wider mb-2">Phone</h3>
                <p className="text-white/60 hover:text-[#00ffff] transition-colors cursor-pointer text-lg font-light">
                  01834473283
                </p>
              </div>

              <div className="p-8 h-full flex flex-col rounded-none border border-white/10 bg-[#0a0a0a] hover:border-[#00ffff]/50 transition-colors duration-500 group">
                <div className="w-16 h-16 rounded-none border border-[#00ffff]/40 bg-[#00ffff]/10 flex items-center justify-center mb-6 group-hover:bg-[#00ffff] transition-colors duration-500">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-[#00ffff] group-hover:stroke-black stroke-2 stroke-linecap-round stroke-linejoin-round transition-colors duration-500">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="font-bold text-white uppercase tracking-wider mb-2">Address</h3>
                <p className="text-white/60 text-lg font-light leading-relaxed">
                  Khowaznagar, Azimpara<br />
                  Karnaphuli, Chattogram
                </p>
              </div>
            </div>

            <div className="p-8 flex flex-col rounded-none border border-white/10 bg-[#0a0a0a] hover:border-[#00ffff]/50 transition-colors duration-500 group">
              <div className="w-16 h-16 rounded-none border border-[#00ffff]/40 bg-[#00ffff]/10 flex items-center justify-center mb-6 group-hover:bg-[#00ffff] transition-colors duration-500">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-[#00ffff] group-hover:stroke-black stroke-2 stroke-linecap-round stroke-linejoin-round transition-colors duration-500">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h3 className="font-bold text-white uppercase tracking-wider mb-2">Email</h3>
              <p className="text-white/60 hover:text-[#00ffff] transition-colors cursor-pointer text-lg font-light break-all">
                nanographic.info01@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Follow Us — separate full-width row */}
        <div className="mt-10 p-8 sm:p-10 rounded-2xl border border-white/10 bg-[#0a0a0a] hover:border-[#00ffff]/50 transition-colors duration-500">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <h3 className="font-bold text-white uppercase tracking-wider text-xl">Follow Us</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href !== '#' ? '_blank' : undefined}
                  rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                  className="w-16 h-16 rounded-full border border-[#00ffff]/40 bg-[#00ffff]/10 flex items-center justify-center text-[#00ffff] hover:text-black hover:bg-[#00ffff] hover:border-[#00ffff] transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
