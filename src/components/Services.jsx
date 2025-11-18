export default function Services() {
  const services = [
    {
      title: 'Verified Dog Walking',
      desc: 'GPS + live POV camera tracking for full transparency.',
      accent: 'from-emerald-500 to-teal-400'
    },
    {
      title: 'Community Boarding',
      desc: 'Connect with trusted dog lovers for homely care.',
      accent: 'from-blue-500 to-cyan-400'
    },
    {
      title: 'Grooming Services',
      desc: 'Discounted partner deals with home pick-up & drop.',
      accent: 'from-pink-500 to-rose-400'
    },
    {
      title: 'Extensive Workouts',
      desc: 'Cycling runs, swimming, park visits, puppy training.',
      accent: 'from-violet-500 to-fuchsia-400'
    },
    {
      title: 'Healthy Meal/Tiffin',
      desc: 'Fresh, preservative-free meals from verified kitchens.',
      accent: 'from-amber-500 to-orange-400'
    }
  ]

  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Services</h2>
          <a href="#cta" className="text-sm text-blue-100 hover:text-white">Get Early Access →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${s.accent} mb-4 shadow-lg`} />
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="text-blue-100/90 mt-2 text-sm">{s.desc}</p>
              <div className="mt-4 text-xs text-blue-200/80 opacity-0 group-hover:opacity-100 transition">Trust-first verification • Ratings • Tracking</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
