import { useEffect, useState } from "react";

// Placeholder slots for partner logos - replace with actual partner images
const partnerSlots = [
  { id: 1, name: "Partner 1" },
  { id: 2, name: "Partner 2" },
  { id: 3, name: "Partner 3" },
  { id: 4, name: "Partner 4" },
  { id: 5, name: "Partner 5" },
  { id: 6, name: "Partner 6" },
  { id: 7, name: "Partner 7" },
];

const PartnersCarousel = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev + 1);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Duplicate for seamless loop
  const duplicatedPartners = [...partnerSlots, ...partnerSlots, ...partnerSlots];

  return (
    <section className="py-12 bg-background border-y border-border/30 overflow-hidden">
      <div className="container-section mb-8">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Trusted by Industry Leaders
        </p>
      </div>

      {/* Scrolling Carousel */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div
          className="flex items-center gap-16 transition-none"
          style={{
            transform: `translateX(-${offset % (partnerSlots.length * 180)}px)`,
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 w-40 h-16 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground/50 text-sm font-medium hover:bg-muted hover:text-muted-foreground transition-colors"
            >
              {/* Replace with actual partner logo */}
              <span className="text-xs">Logo {partner.id}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container-section mt-6">
        <p className="text-center text-xs text-muted-foreground/60">
          Add your partner logos to showcase your network
        </p>
      </div>
    </section>
  );
};

export default PartnersCarousel;
