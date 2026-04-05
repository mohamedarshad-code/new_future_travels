export default function TestimonialsSection() {
  const testimonials = [
    { 
      name: "Rahul Krishnan", 
      title: "Business Enthusiast", 
      location: "Coimbatore",
      text: "The precision with which New Future Travels handles intricate visa documentation is nothing short of legendary. My Switzerland dream was realized in just 10 days, without a single hurdle. They don't just provide a service; they provide peace of mind.",
      avatar: "https://i.pravatar.cc/150?u=rahul"
    },
    { 
      name: "Priya Sundar", 
      title: "CEO, TechFlow Solutions", 
      location: "Chennai",
      text: "Managing a corporate retreat for 50+ employees is a logistical nightmare. Mohamed Sirajdheen's team executed it with flawless elegance. From the primary flight to the smallest land detail in Dubai, everything was perfect. A true partner in travel.",
      avatar: "https://i.pravatar.cc/150?u=priya"
    },
    { 
      name: "Adithya V.", 
      title: "Global Wayfarer & Blogger", 
      location: "Bangalore",
      text: "I've traveled the world, but the ‘hidden gems’ itinerary New Future Travels created for my Bali expedition was breathtaking. They have an eye for detail and a heart for local experiences that you simply won't find anywhere else. The legacy continues.",
      avatar: "https://i.pravatar.cc/150?u=adithya"
    }
  ];

  const renderStars = () => (
    <div className="flex text-primary mb-6 gap-1">
        {[1,2,3,4,5].map((_, i) => (
            <span key={i} className="material-symbols-outlined text-xl" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
        ))}
    </div>
  );

  return (
    <section className="py-32 bg-stone-50" id="testimonials">
        <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-24">
                <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Trusted Voices</span>
                <h2 className="text-6xl font-black tracking-tight leading-tight">Stories from our<br/>Global Wayfarers</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {testimonials.map((t, i) => (
                    <div key={i} className="group relative p-12 rounded-2xl bg-white border border-stone-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                        <div className="absolute top-0 right-12 -translate-y-1/2 w-20 h-20 rounded-full border-8 border-stone-50 bg-white overflow-hidden shadow-lg group-hover:scale-110 transition-transform">
                          <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                        </div>
                        {renderStars()}
                        <p className="text-xl font-medium italic mb-10 leading-relaxed text-on-surface-variant">"{t.text}"</p>
                        <div className="border-t border-stone-100 pt-8">
                            <p className="font-black text-2xl text-on-surface mb-1">{t.name}</p>
                            <p className="text-sm text-primary font-bold uppercase tracking-wider">{t.title}</p>
                            <p className="text-xs text-on-surface-variant/60 font-medium mt-1">{t.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
