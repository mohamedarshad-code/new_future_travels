import founderImage from '../assets/images/founder.png';

export default function AboutSection() {
    return (
        <section className="py-32 bg-surface-container-low" id="about">
            <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-20 items-center">
                <div className="w-full lg:w-1/2 relative group gsap-reveal">
                    <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
                    <img
                        alt="A. Mohamed Sirajdheen"
                        className="relative w-full h-[650px] object-cover rounded-xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                        src={founderImage}
                    />
                    <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/90 backdrop-blur-md rounded-xl shadow-xl">
                        <p className="text-primary font-black text-2xl mb-1">A. Mohamed Sirajdheen</p>
                        <p className="text-on-surface-variant font-medium tracking-widest uppercase text-sm">Founder & Visionary</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 gsap-reveal">
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">Since 2009</span>
                    </div>
                    <h2 className="text-6xl font-black tracking-tight mb-8 leading-tight">Continuing a Legacy of<br /><span className="text-primary">Exceptional Journeys</span></h2>
                    <p className="text-xl text-on-surface-variant mb-8 leading-relaxed font-medium">
                        Founded in 2009 by A. Mohamed Sirajdheen, New Future Travels began with a single promise: to treat every traveler's dream as our own. Based in Coimbatore, we've spent over a decade turning that promise into a global legacy.
                    </p>
                    <p className="text-lg text-on-surface-variant/80 mb-10 leading-relaxed italic border-l-4 border-primary pl-6">
                        "Travel is the only thing you buy that makes you richer. At New Future Travels, we ensure that wealth is measured in memories, not just destination markers."
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <span className="material-symbols-outlined text-primary text-3xl">history_edu</span>
                            <div>
                                <h4 className="font-bold text-lg mb-1">25+ Years</h4>
                                <p className="text-on-surface-variant text-sm">Of unmatched expertise in global travel logistics.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <span className="material-symbols-outlined text-primary text-3xl">handshake</span>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Personal Touch</h4>
                                <p className="text-on-surface-variant text-sm">Every itinerary is hand-crafted by our team of experts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
