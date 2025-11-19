import { Code2, Smartphone, Rocket, Search, LineChart, Megaphone } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'High-performance websites with modern stacks, responsive by default, optimized for conversion.',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    desc: 'iOS, Android, and cross-platform apps with beautiful UX and robust engineering.',
  },
  {
    icon: Search,
    title: 'SEO Management',
    desc: 'Technical SEO, content strategy, and on-page optimization for sustained growth.',
  },
  {
    icon: Megaphone,
    title: 'Paid Ads',
    desc: 'Google, YouTube, and programmatic ads with full-funnel tracking and CRO.',
  },
  {
    icon: Megaphone,
    title: 'Meta Ads',
    desc: 'Facebook and Instagram campaigns with creative testing and pixel-perfect attribution.',
  },
  {
    icon: LineChart,
    title: 'Analytics & CRO',
    desc: 'GA4, Tag Manager, dashboards, and experimentation to lift conversion rates.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-[#070B14] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_400px_at_10%_10%,rgba(99,102,241,0.12),transparent),radial-gradient(600px_400px_at_90%_50%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-br from-white to-slate-300 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
            Services designed to scale your brand
          </h2>
          <p className="mt-3 text-slate-300/80">End-to-end delivery from strategy to execution with measurable results.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 shadow-lg shadow-blue-500/20">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
