export default function Hero() {
  return (
    <section id="home" className="relative isolate pt-28 sm:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-100/90">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
              Now building India’s first integrated pet-care + community platform
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              PLUTO
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-blue-100/90 max-w-xl">
              “Your Pet’s unexpected Best Friend” — Reliable dog care services that are transparent, affordable, and community-driven.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#services" className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-cyan-400">
                Explore Services
              </a>
              <a href="#cta" className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Get Early Access
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-transparent blur-2xl"></div>
            <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1400&auto=format&fit=crop" alt="Happy dog" className="relative rounded-3xl border border-white/10 shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
