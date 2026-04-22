import { useState, useRef } from 'react';

const TRAVEL_CATEGORIES = [
  'Visa Assistance',
  'Bespoke Tours',
  'Corporate Travel',
  'Passport Services',
  'Cruise Booking',
  'Other',
];

function makePNR(data) {
  const seed = (data.user_name || '') + (data.user_email || '') + Date.now();
  let h = 0;
  for (let i = 0; i < seed.length; i++) { h = (h * 31 + seed.charCodeAt(i)) >>> 0; }
  return h.toString(36).slice(0,6).toUpperCase();
}

/* ── Boarding Pass Receipt ── */
function BoardingPassReceipt({ data, onReset, show }) {
  const pnr = makePNR(data);
  const date = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <div className={`success-pass ${show ? 'show' : ''}`}>
      <div className="relative">
        {/* Lime Stamp Overlay */}
        <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-[#9CE625] rounded-full flex items-center justify-center rotate-12 opacity-80 pointer-events-none">
          <span className="text-[#9CE625] font-medium text-xs tracking-widest text-center">CONFIRMED<br/>✓</span>
        </div>

        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-[#436900] font-medium text-[10px] tracking-widest uppercase mb-1">Booking Confirmed</p>
            <h3 className="text-2xl font-medium text-[#14140F]">Boarding Pass</h3>
          </div>
          <div className="text-right">
            <p className="text-[#14140F]/40 text-[9px] tracking-widest uppercase">PNR</p>
            <p className="text-xl font-medium text-[#436900]">{pnr}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-10">
          <div>
            <p className="text-[#14140F]/40 text-[9px] tracking-widest uppercase mb-1">Departure</p>
            <p className="text-lg font-medium text-[#14140F]">Your Dream</p>
          </div>
          <div className="text-right">
            <p className="text-[#14140F]/40 text-[9px] tracking-widest uppercase mb-1">Destination</p>
            <p className="text-lg font-medium text-[#14140F]">NFT Travels</p>
          </div>
          <div>
            <p className="text-[#14140F]/40 text-[9px] tracking-widest uppercase mb-1">Passenger</p>
            <p className="text-sm font-medium text-[#14140F]">{data.user_name}</p>
          </div>
          <div className="text-right">
            <p className="text-[#14140F]/40 text-[9px] tracking-widest uppercase mb-1">Gate / Date</p>
            <p className="text-sm font-medium text-[#14140F]">{date}</p>
          </div>
        </div>

        <button
          onClick={onReset}
          className="w-full py-4 rounded-full bg-[#F4F4EF] text-[#14140F] text-[10px] font-medium tracking-widest uppercase hover:bg-[#EAEAE5] transition-all"
        >
          Book Another Consultation →
        </button>
      </div>
    </div>
  );
}

/* ── Floating Label Field ── */
function FloatingField({ label, name, type = "text", required = false, select = false, options = [], textarea = false }) {
  return (
    <div className="form-group mb-6">
      {select ? (
        <select name={name} required={required} className="form-input appearance-none">
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : textarea ? (
        <textarea name={name} required={required} className="form-input h-32 resize-none" placeholder=" " />
      ) : (
        <input name={name} type={type} required={required} className="form-input" placeholder=" " />
      )}
      <label className="form-label">{label}</label>
      {select && (
        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
          expand_more
        </span>
      )}
    </div>
  );
}

export default function ContactSection() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [boardingPass, setBoardingPass] = useState(null);
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const data = Object.fromEntries(new FormData(formRef.current).entries());

    // Simulate sending
    setTimeout(() => {
      setIsSending(false);
      setBoardingPass(data);
      setTimeout(() => setShowPass(true), 100);
    }, 1500);
  };

  return (
    <section className="py-24 lg:py-40 bg-[#FAFAF5]" id="contact">
      {boardingPass && (
        <BoardingPassReceipt
          data={boardingPass}
          show={showPass}
          onReset={() => { setShowPass(false); setTimeout(() => setBoardingPass(null), 600); formRef.current?.reset(); }}
        />
      )}

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Info */}
          <div className="reveal">
            <p className="text-[#436900] font-medium text-[10px] tracking-[0.2em] uppercase mb-6">Flight Desk</p>
            <h2 className="text-5xl lg:text-7xl font-medium tracking-tight mb-10 leading-[0.9] text-[#14140F]">
              Begin Your
              <br /><span className="text-[#436900]">Journey</span>
              <br />Here
            </h2>
            
            <div className="space-y-10 mt-16">
              {[
                { icon: 'location_on', label: 'Office', val: 'Trichy Rd, Ramanathapuram, Coimbatore 641045' },
                { icon: 'call', label: 'Phone', val: '+91 98436 98394' },
                { icon: 'mail', label: 'Email', val: 'info@newfuturetravels.com' },
              ].map(item => (
                <div key={item.label} className="flex gap-6">
                  <span className="material-symbols-outlined text-[#436900] opacity-40">{item.icon}</span>
                  <div>
                    <p className="text-[#14140F]/40 text-[9px] tracking-widest uppercase mb-1">{item.label}</p>
                    <p className="text-[#14140F] font-normal">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Departure Board */}
            <div className="mt-20 p-8 rounded-[2rem] bg-white shadow-ambient">
              <p className="text-[#14140F]/40 text-[9px] tracking-widest uppercase mb-6">Departures</p>
              <div className="space-y-4">
                {[
                  { city: 'Dubai', code: 'DXB', status: 'ON TIME', type: 'on-time' },
                  { city: 'London', code: 'LHR', status: 'BOARDING', type: 'boarding' },
                  { city: 'Singapore', code: 'SIN', status: 'ON TIME', type: 'on-time' },
                ].map(f => (
                  <div key={f.code} className="flex items-center justify-between border-b border-[#F4F4EF] pb-4 last:border-0 last:pb-0">
                    <span className="text-sm font-medium text-[#14140F]">{f.city}</span>
                    <span className="text-xs font-mono text-[#14140F]/30 tracking-widest">{f.code}</span>
                    <span className={`text-[10px] font-medium tracking-widest status-${f.type}`}>{f.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal reveal-delay-1 p-10 lg:p-14 rounded-[3rem] bg-white shadow-ambient border border-[#F4F4EF]">
            <h3 className="text-2xl font-medium text-[#14140F] mb-10">Request Flight</h3>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <FloatingField label="Full Name" name="user_name" required />
                <FloatingField label="Phone" name="phone" type="tel" required />
              </div>
              <FloatingField label="Email Address" name="user_email" type="email" required />
              <div className="grid grid-cols-2 gap-6">
                <FloatingField label="Service Type" name="travel_category" select options={TRAVEL_CATEGORIES} />
                <FloatingField label="Travel Date" name="travel_date" type="date" />
              </div>
              <FloatingField label="Requirements" name="message" textarea />
              
              <button
                type="submit"
                disabled={isSending}
                className="btn-primary w-full mt-6"
              >
                {isSending ? 'Preparing Ticket...' : 'Confirm Request'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
