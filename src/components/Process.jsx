const steps = [
  {
    k: '01',
    title: 'Discovery & Strategy',
    desc: 'We align on goals, audiences, and success metrics. Then map the shortest path to impact.',
  },
  {
    k: '02',
    title: 'Design & Prototype',
    desc: 'Rapid iterations on UX and visual direction. Interactive prototypes to validate fast.',
  },
  {
    k: '03',
    title: 'Build & Integrate',
    desc: 'Ship production-grade code, connect data sources, and integrate your stack.',
  },
  {
    k: '04',
    title: 'Launch & Scale',
    desc: 'Deploy, monitor, and optimize. Run experiments to scale what converts.',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative bg-[#070B14] py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-br from-white to-slate-300 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
            A fast, transparent process
          </h2>
          <p className="mt-3 text-slate-300/80">Tight feedback loops and weekly milestones keep momentum high.</p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {steps.map((s) => (
            <li key={s.k} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm font-mono text-indigo-300">{s.k}</div>
              <h3 className="mt-2 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300/80">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
