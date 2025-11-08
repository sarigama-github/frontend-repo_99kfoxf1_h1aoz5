import Hero from './components/Hero';
import Fleet from './components/Fleet';
import Experiences from './components/Experiences';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-900/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-xl">Aureli Yachts</a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#fleet" className="hover:text-emerald-800">Fleet</a>
            <a href="#" className="hover:text-emerald-800">Routes</a>
            <a href="#contact" className="hover:text-emerald-800">Enquire</a>
          </nav>
          <a href="#contact" className="rounded-full bg-emerald-700 text-white px-4 py-2 text-sm font-medium hover:bg-emerald-800">Request</a>
        </div>
      </header>

      <main>
        <Hero />
        <Fleet />
        <Experiences />
        <Contact />
      </main>

      <footer className="border-t border-slate-900/10">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-slate-600 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aureli Yachts. All rights reserved.</p>
          <p>Crafted in Europe • Monaco • Porto Cervo • Portofino</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
