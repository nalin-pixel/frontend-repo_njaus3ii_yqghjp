import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#0A0F1C]">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_10%_20%,rgba(99,102,241,0.15),transparent),radial-gradient(800px_400px_at_90%_50%,rgba(56,189,248,0.12),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,15,28,0.2),rgba(10,15,28,0.9))]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
            Available for new projects
          </div>
          <h1 className="mt-6 bg-gradient-to-br from-white to-slate-300 bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-6xl">
            We build premium web, app, and growth experiences
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300/80">
            A senior team delivering custom websites, mobile apps, SEO, and high-ROI ad operations. Fast timelines. Enterprise polish.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:scale-[1.01] transition">
              Get a proposal
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition">
              Explore services
            </a>
          </div>
          <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 text-center text-xs text-slate-300/70">
            <div>
              <div className="text-2xl font-semibold text-white">120+</div>
              Projects delivered
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">4.9/5</div>
              Client rating
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">$50M+</div>
              Revenue driven
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
