export default function CTA() {
  return (
    <section id="contact" className="relative bg-[#070B14] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(500px_400px_at_20%_10%,rgba(99,102,241,0.12),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.04] p-8 backdrop-blur">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="bg-gradient-to-br from-white to-slate-300 bg-clip-text text-2xl font-semibold text-transparent">
                Ready to accelerate your roadmap?
              </h3>
              <p className="mt-2 text-slate-300/80">
                Tell us about your goals and we’ll come back with scope, timeline, and a fixed quote.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300/80">
                <li>• 48-hour turnaround on proposals</li>
                <li>• Flexible engagement: project or retainer</li>
                <li>• Dedicated senior team</li>
              </ul>
            </div>
            <form className="space-y-3">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-indigo-400" placeholder="Full name" />
                <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-indigo-400" placeholder="Work email" />
              </div>
              <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-indigo-400" placeholder="Company / Website" />
              <textarea rows={4} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-indigo-400" placeholder="What do you want to build?" />
              <button type="button" className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20">
                Get my proposal
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
