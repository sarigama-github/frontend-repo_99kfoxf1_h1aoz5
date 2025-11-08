import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,95,70,0.15),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(8,47,73,0.15),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 py-28 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-emerald-700/80 font-semibold mb-4">European Yacht Charter</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-semibold text-slate-900">
              Handcrafted Sailing Yachts for Bespoke Journeys
            </h1>
            <p className="mt-6 text-slate-600 text-lg max-w-xl">
              Experience the quiet power of premium wood under sail. Private itineraries, discreet service, and the refined comfort of a modern classic fleet.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-700 text-white px-6 py-3 font-medium shadow-lg shadow-emerald-700/20 hover:bg-emerald-800 transition"
              >
                Request an Itinerary <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#fleet"
                className="inline-flex items-center rounded-full px-6 py-3 font-medium text-emerald-800 ring-1 ring-emerald-900/10 hover:ring-emerald-900/20"
              >
                Explore the Fleet
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=100&auto=format&fit=crop" alt="guest" className="w-8 h-8 rounded-full ring-2 ring-white object-cover" />
                <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100&auto=format&fit=crop" alt="guest" className="w-8 h-8 rounded-full ring-2 ring-white object-cover" />
                <img src="https://images.unsplash.com/photo-1521577352947-9bb58764b69a?q=80&w=100&auto=format&fit=crop" alt="guest" className="w-8 h-8 rounded-full ring-2 ring-white object-cover" />
              </div>
              <p><span className="font-semibold text-slate-800">200+ discerning guests</span> hosted across the Mediterranean</p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] w-full rounded-3xl overflow-hidden bg-slate-200 shadow-2xl shadow-emerald-900/10">
              <img
                src="https://images.unsplash.com/photo-1516924962500-2b4b3b43a2a6?q=80&w=1600&auto=format&fit=crop"
                alt="Luxury wooden sailing yacht cutting through Mediterranean waters"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur rounded-2xl p-4 shadow-xl ring-1 ring-black/5">
              <p className="text-sm text-slate-600">Sustainably sourced premium teak and mahogany</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
