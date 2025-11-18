export default function Uniqueness() {
  const points = [
    'Transparency: Live-stream POV for walks',
    'Community-driven boarding (Airbnb for dogs)',
    'Affordable grooming & meals via partners',
    'Integrated all-in-one app experience',
    'Trust-first: Verification, ratings, tracking'
  ]

  return (
    <section id="uniqueness" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Why We’re Different</h2>
            <ul className="mt-6 space-y-3 text-blue-100/90">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/20 to-teal-400/10 p-8">
            <h3 className="text-xl font-semibold text-white">Innovation in action</h3>
            <p className="mt-3 text-blue-100/90">From GPS-tracked walks to homely boarding with community ratings, every feature is designed to maximize trust and comfort for both dogs and owners.</p>
            <img className="mt-6 rounded-2xl border border-white/10" src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=1400&auto=format&fit=crop" alt="Dog care" />
          </div>
        </div>
      </div>
    </section>
  )
}
