export default function Experiences() {
  const experiences = [
    {
      title: 'Amalfi & Capri',
      desc: 'Cliffside villages, lemon groves, and secret grottos with lunch at anchor.',
      image: 'https://images.unsplash.com/photo-1631812332566-5038df75faaf?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbWFsZmklMjAlMjYlMjBDYXByaXxlbnwwfDB8fHwxNzYyNTY0MjQ0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Cyclades Discovery',
      desc: 'Whitewashed harbors, Meltemi sailing, and sunset moorings below ancient temples.',
      image: 'https://images.unsplash.com/photo-1631439834385-66017f85d4ed?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI1NjQyNDV8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Côte d’Azur Weekender',
      desc: 'Riviera elegance, waterfront tables, and quiet bays beyond the headlines.',
      image: 'https://images.unsplash.com/photo-1599284170841-6214b6edcce6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDJUMzJUI0dGUlMjBkJUUyJTgwJTk5QXp1ciUyMFdlZWtlbmRlcnxlbnwwfDB8fHwxNzYyNTY0MjQ2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Signature Routes</h2>
          <p className="text-slate-600 mt-2">Designed for ease. Refined for privacy. Every voyage is fully bespoke.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <article key={exp.title} className="overflow-hidden rounded-3xl bg-white ring-1 ring-slate-900/10 shadow-sm">
              <div className="relative aspect-[5/4]">
                <img src={exp.image} alt={exp.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">{exp.title}</h3>
                <p className="text-slate-600 mt-2">{exp.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
