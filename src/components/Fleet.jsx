export default function Fleet() {
  const yachts = [
    {
      name: 'Artemis 72',
      blurb: '72ft classic sloop. Hand-laid teak decks, mahogany interiors, and carbon performance rigging.',
      image: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1600&auto=format&fit=crop',
      guests: 6,
      cabins: 3,
    },
    {
      name: 'Seraphine 85',
      blurb: '85ft modern classic. Onyx wine cellar, chef galley, and silent-hybrid propulsion for serene anchorages.',
      image: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1600&auto=format&fit=crop',
      guests: 8,
      cabins: 4,
    },
    {
      name: 'Elysian 62',
      blurb: '62ft gentleman cruiser. Lounge cockpit, sun awnings, and curated library for slow Mediterranean days.',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop',
      guests: 4,
      cabins: 2,
    },
  ];

  return (
    <section id="fleet" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Our Wooden Fleet</h2>
            <p className="text-slate-600 mt-2">Classic craftsmanship, modern comfort — tailored for blue-water cruising.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-full px-5 py-2 text-sm font-medium bg-slate-900 text-white hover:bg-slate-800">Check availability</a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {yachts.map((yacht) => (
            <article key={yacht.name} className="group rounded-3xl overflow-hidden ring-1 ring-slate-900/10 bg-white shadow-sm hover:shadow-xl transition">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={yacht.image} alt={yacht.name} className="h-full w-full object-cover group-hover:scale-105 transition" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                  <h3 className="text-lg font-semibold">{yacht.name}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-slate-600">{yacht.blurb}</p>
                <div className="mt-4 flex items-center gap-4 text-sm text-slate-700">
                  <span>{yacht.guests} guests</span>
                  <span className="opacity-30">•</span>
                  <span>{yacht.cabins} cabins</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
