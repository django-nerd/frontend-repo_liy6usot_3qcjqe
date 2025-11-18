import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Services from './components/Services'
import Trends from './components/Trends'
import Uniqueness from './components/Uniqueness'
import BusinessModel from './components/BusinessModel'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(40rem_20rem_at_top,rgba(59,130,246,0.2),transparent),radial-gradient(50rem_30rem_at_bottom_right,rgba(34,211,238,0.15),transparent)]" />

      <Navbar />

      <main className="relative">
        <Hero />
        <Problem />
        <Services />
        <Trends />
        <Uniqueness />
        <BusinessModel />

        <section id="cta" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 to-cyan-400/10 p-8 text-center">
              <h3 className="text-2xl font-bold text-white">Get Early Access</h3>
              <p className="mt-3 text-blue-100/90">Be the first to try PLUTO when we launch in your city.</p>
              <form className="mt-6 mx-auto max-w-md grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
                <input type="email" placeholder="Your email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50" required />
                <button className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-cyan-400">Notify Me</button>
              </form>
            </div>
          </div>
        </section>

        <footer className="pb-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-blue-200/70 text-sm">
            © {new Date().getFullYear()} PLUTO — Your Pet’s unexpected Best Friend
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
