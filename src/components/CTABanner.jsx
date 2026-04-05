export default function CTABanner() {
  return (
    <section className="py-32 bg-white mx-8 rounded-3xl my-32 border border-stone-100 shadow-2xl shadow-stone-200/50 gsap-reveal">
        <div className="max-w-4xl mx-auto text-center px-8">
            <div className="h-1.5 w-16 bg-primary mx-auto mb-10"></div>
            <h2 className="text-6xl font-black tracking-tighter text-stone-900 mb-12">Plan Your Dream Trip Today</h2>
            <div className="flex flex-wrap justify-center gap-8">
                <a className="px-12 py-6 rounded-2xl bg-primary text-white text-xl font-bold flex items-center gap-4 hover:scale-105 transition-all shadow-xl shadow-primary/20" href="tel:+919843698394">
                    <span className="material-symbols-outlined">call</span> Call Now
                </a>
                <a className="px-12 py-6 rounded-2xl bg-stone-900 text-white text-xl font-bold flex items-center gap-4 hover:scale-105 transition-all shadow-xl shadow-stone-900/10" href="https://wa.me/919843698394" target="_blank" rel="noreferrer">
                    <span className="material-symbols-outlined text-whatsapp">chat</span> WhatsApp Us
                </a>
            </div>
        </div>
    </section>
  );
}
