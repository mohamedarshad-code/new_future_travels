export default function ServicesSection() {
  const services = [
    { icon: "verified_user", title: "Visa Assistance", desc: "Navigate global borders with confidence. Our elite documentation experts ensure your visa process is seamless, swift, and stress-free." },
    { icon: "assignment_ind", title: "Passport Services", desc: "From fresh applications to urgent renewals, we handle the intricacies of passport processing with precision and speed." },
    { icon: "travel_explore", title: "Curated Tour Packages", desc: "Experience the world through our eyes. We design bespoke domestic and international itineraries that go beyond the ordinary." },
    { icon: "description", title: "Document Attestation", desc: "Secure your future abroad. We provide legally verified attestation for educational and personal credentials globally." },
    { icon: "groups", title: "Corporate & Group Travel", desc: "Unite your team through discovery. We coordinate complex group logistics for corporate retreats and family milestones." },
    { icon: "diamond", title: "Bespoke Stays", desc: "Rest in the lap of luxury. Gain exclusive access to the world's most prestigious resorts and hidden boutique gems." },
    { icon: "sailing", title: "Elite Cruises", desc: "Set sail on a voyage of a lifetime. Experience curated ocean and river cruises with personalized concierge service." },
    { icon: "flight", title: "Priority Flight Booking", desc: "Fly better for less. Our global network secures the best fares with priority seating and 24/7 travel support." }
  ];

  return (
    <section className="py-32" id="services">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 gsap-reveal">
          <div>
            <div className="h-1.5 w-32 bg-primary mb-8"></div>
            <h2 className="text-6xl font-black tracking-tight leading-tight">World-Class Services,<br/><span className="text-on-surface-variant/40">Personalized Excellence</span></h2>
          </div>
          <p className="max-w-md text-xl text-on-surface-variant font-medium leading-relaxed">
            Every journey we craft is a testament to our decade-long commitment to perfection.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gsap-stagger-container">
          {services.map((service, idx) => (
            <div key={idx} className="gsap-stagger-item group p-10 rounded-3xl bg-white transition-all duration-500 hover:bg-primary hover:translate-y-[-12px] shadow-sm hover:shadow-2xl flex flex-col items-start border border-stone-100">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-10 group-hover:bg-white/20 transition-colors overflow-hidden">
                <span className="material-symbols-outlined text-primary text-4xl group-hover:text-white transition-colors shrink-0">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-6 group-hover:text-white transition-colors min-h-[4rem] flex items-center">
                {service.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed group-hover:text-white/80 transition-colors min-h-[6rem]">
                {service.desc}
              </p>
              <div className="mt-8 pt-6 border-t border-stone-100 w-full group-hover:border-white/20">
                <span className="text-primary font-bold group-hover:text-white text-sm tracking-widest uppercase">Explore Details</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
