export function CompanyValues() {
  const values = [
    { title: "Trust", desc: "Building lasting relationships through transparency and reliability since 2009.", icon: "handshake" },
    { title: "Innovation", desc: "Constantly evolving our travel technology and itineraries for the modern world.", icon: "lightbulb" },
    { title: "Excellence", desc: "Setting the gold standard in premium travel services and client care.", icon: "star_award" }
  ];

  return (
    <section className="py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {values.map((v, i) => (
          <div key={i} className="p-10 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all h-full">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="material-symbols-outlined text-4xl text-primary">{v.icon}</span>
            </div>
            <h3 className="text-3xl font-black mb-4">{v.title}</h3>
            <p className="text-on-surface-variant font-medium leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Milestones() {
  const years = [
    { year: "2009", title: "The Beginning", desc: "Founded by A. Mohamed Sirajdheen with a focus on trust-based travel." },
    { year: "2014", title: "Global Reach", desc: "Expanded services to cover all 7 continents with elite partner networks." },
    { year: "2019", title: "Luxury Redefined", desc: "Launched our bespoke luxury division for discerning wayfarers." },
    { year: "2026", title: "A New Future", desc: "Continuing the legacy with modern technology and personalized care." }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-5xl font-black tracking-tight mb-20 leading-tight">Our Legacy Timeline</h2>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-stone-100 hidden md:block"></div>
          <div className="space-y-12">
            {years.map((y, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 text-center md:text-left">
                  <span className="text-primary font-black text-4xl block mb-2">{y.year}</span>
                  <h4 className="text-2xl font-bold mb-4">{y.title}</h4>
                  <p className="text-on-surface-variant max-w-sm mx-auto md:mx-0">{y.desc}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary border-4 border-white shadow-xl relative z-10 hidden md:block"></div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
