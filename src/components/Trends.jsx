export default function Trends() {
  const stats = [
    { label: 'Industry Size by 2030', value: '$1.5B+' },
    { label: 'Growth (CAGR)', value: '~20%' },
    { label: 'Key Drivers', value: 'Premium care, healthy diets, pet tech' },
  ]

  return (
    <section id="trends" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 to-cyan-400/10 p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Industry Trends & Opportunity</h2>
          <p className="mt-3 text-blue-100/90 max-w-3xl">India’s pet care industry is rapidly expanding with more urban professionals adopting pets, growing acceptance of technology like GPS tracking, and a strong shift towards healthy, premium offerings.</p>
          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <div className="text-3xl font-bold text-white">{s.value}</div>
                <div className="mt-2 text-blue-100/90 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
