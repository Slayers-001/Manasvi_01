import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Book, Compass, Feather } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Academics() {
  useEffect(() => {
    // Advanced individual block timeline configuration triggered on entry scroll
    gsap.utils.toArray(".academic-item").forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const logs = [
    {
      icon: <Feather className="w-5 h-5 text-[#f5f2eb] stroke-[1.5]" />,
      index: "01",
      title: "Hobby",
      desc: "Dancing is more than just a hobby for me—it's a way to express myself and have fun. Whenever I dance, I feel confident, energetic, and free. I love learning new moves, performing to my favorite songs, and improving my skills with every step. Whether I'm dancing for an audience or just for myself, it always brings me happiness. For me, dance is a perfect combination of creativity, music, and self-expression. When words aren't enough, I let my dance tell the story."
    },
    {
      icon: <Compass className="w-5 h-5 text-[#f5f2eb] stroke-[1.5]" />,
      index: "02",
      title: "Movies",
      desc: "If one movie perfectly matches my vibe, it's Zindagi Na Milegi Dobara. It's not just a road trip movie—it's a reminder to stop overthinking, take chances, and actually live life. From epic adventures and unforgettable friendships to the stunning Spain backdrop, every scene feels like a bucket-list dream. The movie inspires me to step out of my comfort zone, chase experiences, and make memories that last forever."
    },
    {
      icon: <Book className="w-5 h-5 text-[#f5f2eb] stroke-[1.5]" />,
      index: "03",
      title: "Friends And Family",
      desc: "My friends and family are literally my favorite people. They're the ones who hype me up, keep me sane, and make even the most random moments unforgettable. From inside jokes and chaotic conversations to endless support when I need it, they're always there for me. Life would be low-key boring without them. No matter what happens, they're my forever squad and my biggest flex."
    }
  ];

  return (
    <section id="academics-section" className="relative w-full max-w-7xl bg-[#0b0a09] py-40 px-6 md:px-16 flex flex-col items-center">
      <div className="w-full">
        <div className="mb-28 text-center md:text-left">
          <span className="text-xs font-bold tracking-[0.5em] text-[#dcd7ca]/50 uppercase block mb-3">SCHOLASTIC FOUNDATION</span>
          <h3 className="font-bold tracking-tight text-[#f5f2eb] uppercase" style={{ fontSize: "var(--font-section)", fontFamily: "var(--font-serif-display)" }}>
            THE TOPPER LOGS
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {logs.map((log, i) => (
            <div 
              key={i} 
              className="academic-item parchment-panel p-9 rounded-2xl flex flex-col justify-between h-[420px] border border-[#f5f2eb]/10 transition-all duration-500 hover:border-[#f5f2eb]/20 group hover:-translate-y-2"
            >
              <div className="flex justify-between items-start">
                <div className="p-4 bg-[#f5f2eb]/5 rounded-xl border border-[#f5f2eb]/5 group-hover:bg-[#f5f2eb]/10 group-hover:border-[#f5f2eb]/10 transition-all duration-300">
                  {log.icon}
                </div>
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#dcd7ca]/30" style={{ fontFamily: "var(--font-serif-display)" }}>
                  LOG_FOLIO // {log.index}
                </span>
              </div>

              <div>
                <h4 className="text-xl md:text-2xl font-bold text-[#f5f2eb] uppercase tracking-wide mb-4 transition-colors duration-300 group-hover:text-[#f5f2eb]" style={{ fontFamily: "var(--font-serif-display)", lineHeight: "1.2" }}>
                  {log.title}
                </h4>
                <p className="text-sm text-[#dcd7ca]/70 leading-relaxed font-light font-sans" style={{ fontFamily: "var(--font-sans)" }}>
                  {log.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-[#f5f2eb]/5 flex items-center justify-between text-[9px] tracking-[0.25em] text-[#dcd7ca]/30 uppercase font-semibold">
                <span>INDEX METRICS ARCHIVE</span>
                <span className="text-[#f5f2eb]/40">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
