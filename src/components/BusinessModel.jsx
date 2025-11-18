export default function BusinessModel() {
  const canvas = [
    {
      title: 'Customer Segments',
      items: ['Pet owners (urban professionals)', 'Grooming salons', 'Kitchens']
    },
    {
      title: 'Value Proposition',
      items: ['Reliable, transparent, affordable care', 'All-in-one app', 'Community-driven trust']
    },
    {
      title: 'Channels',
      items: ['Mobile app', 'Social media', 'Partnerships']
    },
    {
      title: 'Customer Relationships',
      items: ['Subscriptions', 'Reviews & ratings', 'Gamified loyalty']
    },
    {
      title: 'Revenue Streams',
      items: ['Grooming/boarding commission', 'Premium subscriptions', 'Meal delivery margin', 'Workout service fees']
    },
    {
      title: 'Key Resources',
      items: ['App', 'Partnerships', 'Verified providers']
    },
    {
      title: 'Key Activities',
      items: ['App development', 'Verification', 'Community management']
    },
    {
      title: 'Key Partners',
      items: ['Grooming salons', 'Kitchens', 'Cycling & swimming trainers']
    },
    {
      title: 'Cost Structure',
      items: ['Tech development', 'Operations', 'Partnerships', 'Marketing']
    },
  ]

  return (
    <section id="business" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Business Model Canvas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {canvas.map((block) => (
            <div key={block.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold">{block.title}</h3>
              <ul className="mt-3 space-y-2 text-blue-100/90 text-sm">
                {block.items.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
