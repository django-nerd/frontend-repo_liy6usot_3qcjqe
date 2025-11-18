export default function Problem() {
  const points = [
    'Insufficient, misrepresented dog walks and exercise',
    'Hard to find reliable boarding/grooming during work or travel',
    'Low transparency and trust in dog care services',
    'Nutritious meals are expensive or full of preservatives',
    'Limited options for specialized workouts and engagement'
  ]

  return (
    <section id="problem" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Problem</h2>
            <p className="mt-3 text-blue-100/90">Dog families face reliability, transparency, and affordability issues across daily care needs.</p>
            <ul className="mt-6 space-y-3 text-blue-100/90">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-red-400"></span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 to-cyan-400/10 p-8">
            <h3 className="text-xl font-semibold text-white">What this means</h3>
            <p className="mt-3 text-blue-100/90">Care tasks are fragmented across providers, hard to verify, and difficult to trust—leading to stress for owners and sub-par outcomes for dogs.</p>
            <img className="mt-6 rounded-2xl border border-white/10" src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1400&auto=format&fit=crop" alt="Dog walk" />
          </div>
        </div>
      </div>
    </section>
  )
}
