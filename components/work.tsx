import React from 'react'

const projects = [
  {
    title: 'Food Company',
    description: 'Brand Identity & Packaging',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Oil Company',
    description: 'Corporate Branding',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Tech Startup',
    description: 'Digital Product Design',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Fashion Label',
    description: 'Lookbook & Campaign',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1000&auto=format&fit=crop',
  }
]

export default function Work() {
  return (
    <section className="min-h-screen pt-32 pb-12 px-6 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest mb-4 uppercase">
            PORTFOLIO
          </p>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 uppercase tracking-tighter leading-none">
            <span className="text-white">
              Our Work
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl font-light leading-relaxed mt-8">
            A showcase of brand systems, websites, and campaign visuals we have shaped for clients who care about craft.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 hover:border-cyan-400/50 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-80 md:h-[400px] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-bold text-white uppercase tracking-tight mb-2">{project.title}</h3>
                  <p className="text-cyan-400 font-semibold tracking-widest uppercase text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Branding Design Section */}
        <div className="mt-32 pt-20 border-t border-white/10">
          <div className="mb-16">
            <h3 className="text-4xl lg:text-5xl font-bold mb-6 uppercase tracking-tighter">
              <span className="text-white">
                Branding Design
              </span>
            </h3>
            <p className="text-white/60 text-lg font-light max-w-2xl">Design systems utilizing primary cyan color and deep contrast to create striking visual hierarchies.</p>
          </div>

          {/* Cyan Color Feature */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Primary Color */}
            <div className="group rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-500 bg-[#0a0a0a]">
              <div className="h-48 bg-cyan-400 flex items-center justify-center relative">
                <span className="text-black text-sm font-bold uppercase tracking-widest">Primary Color</span>
              </div>
              <div className="p-8">
                <p className="text-white font-bold text-xl uppercase mb-1">Cyan #22D3EE</p>
                <p className="text-white/50 text-sm font-semibold uppercase tracking-widest">100% Intensity</p>
              </div>
            </div>

            {/* 60% Application */}
            <div className="group rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-500 bg-[#0a0a0a]">
              <div className="h-48 bg-cyan-400/60 flex items-center justify-center relative">
                <span className="text-white text-sm font-bold uppercase tracking-widest drop-shadow-md">60% Application</span>
              </div>
              <div className="p-8">
                <p className="text-white font-bold text-xl uppercase mb-1">Cyan 60%</p>
                <p className="text-white/50 text-sm font-semibold uppercase tracking-widest">Primary Usage</p>
              </div>
            </div>

            {/* Accent Use */}
            <div className="group rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-500 bg-[#0a0a0a]">
              <div className="h-48 bg-cyan-400/30 flex items-center justify-center relative">
                <span className="text-cyan-400 text-sm font-bold uppercase tracking-widest">30% Accent</span>
              </div>
              <div className="p-8">
                <p className="text-white font-bold text-xl uppercase mb-1">Cyan 30%</p>
                <p className="text-white/50 text-sm font-semibold uppercase tracking-widest">Accent Elements</p>
              </div>
            </div>
          </div>

          {/* Packaging Design */}
          <div className="mt-32">
            <h3 className="text-4xl lg:text-5xl font-bold mb-6 uppercase tracking-tighter">
              <span className="text-white">
                Packaging Design
              </span>
            </h3>
            <p className="text-white/60 mb-12 text-lg font-light max-w-2xl">Creative packaging solutions that stand out on the shelf, featuring clean lines and bold cyan accents.</p>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="rounded-3xl border border-white/10 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 bg-[#0a0a0a] group">
                <div className="h-80 relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1000&auto=format&fit=crop" alt="Package Design" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                </div>
                <div className="p-8 relative -mt-10">
                  <h4 className="font-bold text-2xl text-white uppercase tracking-tight mb-2">Creative Packaging</h4>
                  <p className="text-white/60 font-light">Innovative package designs with high-end finishing.</p>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 bg-[#0a0a0a] group">
                <div className="h-80 relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop" alt="Label Design" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                </div>
                <div className="p-8 relative -mt-10">
                  <h4 className="font-bold text-2xl text-white uppercase tracking-tight mb-2">Label Design</h4>
                  <p className="text-white/60 font-light">Premium label designs tailored for luxury products.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
