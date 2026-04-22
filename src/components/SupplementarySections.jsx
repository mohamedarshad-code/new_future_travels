export function PartnerSpotlight() {
  const partners = [
    { name: "Global Airways", icon: "flight_class" },
    { name: "Grand Resorts", icon: "hotel_class" },
    { name: "Ocean Liners", icon: "directions_boat" },
    { name: "Expedition Pro", icon: "travel_explore" }
  ];

  return (
    <section className="py-32 bg-[#FAFAF5] border-t border-[#14140F]/5">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <p className="text-[#436900] font-medium text-[10px] tracking-[0.2em] uppercase mb-10 reveal">World-Class Affiliations</p>
        <div className="flex flex-wrap justify-center gap-16 lg:gap-32">
          {partners.map((p, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1} flex flex-col items-center gap-6 group`}>
              <div className="w-20 h-20 rounded-full bg-white shadow-ambient flex items-center justify-center transition-all duration-500 group-hover:-translate-y-2">
                <span className="material-symbols-outlined text-4xl text-[#14140F]/20 group-hover:text-[#436900] transition-colors">{p.icon}</span>
              </div>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#14140F]/40 group-hover:text-[#14140F] transition-colors">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
