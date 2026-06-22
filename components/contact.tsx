import React, { useState } from 'react'

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
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00ffff]/5 blur-[150px] pointer-events-none rounded-full"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[#00ffff] text-sm font-semibold tracking-widest mb-4 uppercase">
            GET IN TOUCH
          </p>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 uppercase tracking-tighter leading-none">
            <span className="text-white">
              Let&apos;s Work
            </span>
            <br />
            <span className="text-[#00ffff]">Together</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Have a project in mind? We&apos;d love to hear about it. Contact us today to discuss your branding and design needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-[#00ffff]/20 to-transparent rounded-none blur-xl" />
            <form
              onSubmit={handleSubmit}
              className="relative p-10 sm:p-12 rounded-none border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl space-y-8"
            >
              <div className="grid sm:grid-cols-2 gap-8">
                {/* Name Field */}
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

                {/* Email Field */}
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

              {/* Company Field */}
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

              {/* Message Field */}
              <div>
                <label className="block text-sm font-bold text-white uppercase tracking-widest mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-[#111] border border-white/10 rounded-none text-white placeholder-white/30 focus:border-[#00ffff] focus:ring-1 focus:ring-[#00ffff] transition-all outline-none resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-5 bg-[#00ffff] text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-[#33ffff] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 lg:pl-10 mt-12 lg:mt-0">
            {/* Info Cards */}
            <div className="p-8 rounded-none border border-white/10 bg-[#0a0a0a] hover:border-[#00ffff]/50 transition-colors duration-500 group">
              <div className="w-14 h-14 rounded-none bg-[#00ffff]/10 flex items-center justify-center mb-6 group-hover:bg-[#00ffff] transition-colors duration-500">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#00ffff] group-hover:stroke-black stroke-2 stroke-linecap-round stroke-linejoin-round transition-colors duration-500">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <h3 className="font-bold text-white uppercase tracking-wider mb-2">Email</h3>
              <p className="text-white/60 hover:text-[#00ffff] transition-colors cursor-pointer text-lg font-light">
                hello@nanographic.com
              </p>
            </div>

            <div className="p-8 rounded-none border border-white/10 bg-[#0a0a0a] hover:border-[#00ffff]/50 transition-colors duration-500 group">
              <div className="w-14 h-14 rounded-none bg-[#00ffff]/10 flex items-center justify-center mb-6 group-hover:bg-[#00ffff] transition-colors duration-500">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#00ffff] group-hover:stroke-black stroke-2 stroke-linecap-round stroke-linejoin-round transition-colors duration-500">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3 className="font-bold text-white uppercase tracking-wider mb-2">Phone</h3>
              <p className="text-white/60 hover:text-[#00ffff] transition-colors cursor-pointer text-lg font-light">
                +1 (555) 123-4567
              </p>
            </div>

            <div className="p-8 rounded-none border border-white/10 bg-[#0a0a0a] hover:border-[#00ffff]/50 transition-colors duration-500 group">
              <div className="w-14 h-14 rounded-none bg-[#00ffff]/10 flex items-center justify-center mb-6 group-hover:bg-[#00ffff] transition-colors duration-500">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#00ffff] group-hover:stroke-black stroke-2 stroke-linecap-round stroke-linejoin-round transition-colors duration-500">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="font-bold text-white uppercase tracking-wider mb-2">Address</h3>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                123 Design Street<br />
                Creative City, CC 12345<br />
                United States
              </p>
            </div>

            {/* Social Links */}
            <div className="pt-10">
              <h3 className="font-bold text-white uppercase tracking-wider mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {['TW', 'IN', 'IG', 'BE'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-black hover:bg-[#00ffff] hover:border-[#00ffff] transition-all duration-300"
                    aria-label={social}
                  >
                    <span className="text-sm font-bold uppercase">
                      {social}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-32 pt-12 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm font-light">
            © 2026 NanoGraphic. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-white/40 text-sm hover:text-[#00ffff] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-white/40 text-sm hover:text-[#00ffff] cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </section>
  )
}
