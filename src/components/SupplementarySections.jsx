export function PartnerSpotlight() {
  const partners = [
    { name: "Global Airways", icon: "flight_class" },
    { name: "Grand Resorts", icon: "hotel_class" },
    { name: "Ocean Liners", icon: "directions_boat" },
    { name: "Expedition Pro", icon: "travel_explore" }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-5xl font-black tracking-tight mb-20">Our Trusted Partners</h2>
        <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-30 invert hover:opacity-80 transition-opacity">
          {partners.map((p, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <span className="material-symbols-outlined text-6xl">{p.icon}</span>
              <span className="text-xl font-black uppercase tracking-widest">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
