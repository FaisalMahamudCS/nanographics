export default function SiteFooter() {
  return (
    <footer className="relative z-10 w-full bg-[#050507] border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-white/40 text-sm font-light">
          © 2026 NanoGraphic. All rights reserved.
        </p>
        <div className="flex gap-8">
          <span className="text-white/40 text-sm hover:text-[#00ffff] cursor-pointer transition-colors">
            Privacy Policy
          </span>
          <span className="text-white/40 text-sm hover:text-[#00ffff] cursor-pointer transition-colors">
            Terms of Service
          </span>
        </div>
      </div>
    </footer>
  )
}
