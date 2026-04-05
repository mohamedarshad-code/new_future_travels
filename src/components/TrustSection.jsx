export default function TrustSection() {
  return (
    <section className="py-12 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-wrap justify-between items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="text-xl font-bold tracking-widest uppercase">Trusted By 5000+ Travelers</div>
          <div className="flex gap-16 overflow-hidden">
            <span className="text-2xl font-black italic">WANDERLUST</span>
            <span className="text-2xl font-black italic">EXPEDIA</span>
            <span className="text-2xl font-black italic">SKYSCANNER</span>
            <span className="text-2xl font-black italic">AIRBNB</span>
          </div>
        </div>
      </div>
    </section>
  );
}
