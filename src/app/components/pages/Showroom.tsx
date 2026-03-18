import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Fade } from "../SectionReveal";
import { serif } from "../Layout";
import { ChevronLeft, ChevronRight, ArrowRight, MapPin, Clock } from "lucide-react";

const CDN = "https://cdn.prod.website-files.com/618ac216f0fe430bdd7d4310/";
const GALLERY = [
  `${CDN}61c3503012080c514646a1e6_showroom_001.jpg`,
  `${CDN}61c35031064a666784cdb033_showroom_008.jpg`,
  `${CDN}61c35031de3ee5bdf4f654f6_showroom_006.jpg`,
  `${CDN}61c3503035a4b5e24b2f07fd_showroom_002.jpg`,
  `${CDN}61c3503064b05da4b44c579c_showroom_004.jpg`,
  `${CDN}61c35030845bb2763c26e9ca_showroom_007.jpg`,
  `${CDN}61c35030be9c7a02fcf605d3_showroom_003.jpg`,
  `${CDN}61c350303abf43de705f091a_showroom_005.jpg`,
];

const HIGHLIGHTS = [
  { title: "Räume zum Leben", desc: "Keine Ausstellung, sondern begehbare Badezimmer, in denen Sie Materialien und Produkte erleben können." },
  { title: "Premium-Marken", desc: "Agape, Antonio Lupi, Dornbracht, Duravit und viele weitere — exklusiv in Ingolstadt." },
  { title: "Wellness erleben", desc: "Sauna, Dampfbad und Duschhimmel Rainsky — Wellness auch auf wenigen Quadratmetern." },
  { title: "Persönliche Beratung", desc: "Nehmen Sie sich Zeit. Wir beraten Sie gerne individuell und unverbindlich." },
];

export function Showroom() {
  const [cur, setCur] = useState(0);

  return (
    <div>
      <section className="bg-neutral-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Fade>
            <p className="text-neutral-400" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>SHOWROOM</p>
            <h1 className="mt-3" style={{ fontFamily: serif, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.15, fontStyle: "italic" }}>
              Erleben statt <em>auswählen</em>
            </h1>
            <p className="text-neutral-600 mt-4 max-w-xl" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              Keine Ausstellung, sondern Räume zum Leben. Tauchen Sie ein in die Präsenz von Stein, Fliese und Premium-Marken.
            </p>
          </Fade>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="relative overflow-hidden aspect-[16/9]">
            <AnimatePresence mode="wait">
              <motion.img key={cur} src={GALLERY[cur]} alt="" className="absolute inset-0 w-full h-full object-cover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} />
            </AnimatePresence>
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <button onClick={() => setCur((cur - 1 + GALLERY.length) % GALLERY.length)} className="w-11 h-11 bg-white/80 backdrop-blur-md flex items-center justify-center hover:bg-white transition-colors shadow-lg"><ChevronLeft size={18} /></button>
              <button onClick={() => setCur((cur + 1) % GALLERY.length)} className="w-11 h-11 bg-white/80 backdrop-blur-md flex items-center justify-center hover:bg-white transition-colors shadow-lg"><ChevronRight size={18} /></button>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {GALLERY.map((_, i) => (
                <button key={i} onClick={() => setCur(i)} className={`w-2 h-2 transition-all ${i === cur ? "bg-white w-6" : "bg-white/40"}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HIGHLIGHTS.map((h, i) => (
              <Fade key={h.title} delay={i * 0.08}>
                <div className="border border-neutral-100 p-6 h-full hover:shadow-md transition-shadow duration-300">
                  <div className="w-10 h-10 bg-neutral-900 text-white flex items-center justify-center mb-4" style={{ fontSize: "0.8rem", fontWeight: 700 }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mb-2" style={{ fontFamily: serif, fontSize: "1.05rem", fontWeight: 400, fontStyle: "italic" }}>{h.title}</h3>
                  <p className="text-neutral-500" style={{ fontSize: "0.85rem", lineHeight: 1.7 }}>{h.desc}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Fade>
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-neutral-500 shrink-0 mt-0.5" />
              <div>
                <p style={{ fontSize: "0.9rem", fontWeight: 600 }}>Standort</p>
                <p className="text-neutral-400 mt-1" style={{ fontSize: "0.85rem" }}>Schrobenhausener Str. 132, 85051 Ingolstadt</p>
              </div>
            </div>
          </Fade>
          <Fade delay={0.08}>
            <div className="flex items-start gap-4">
              <Clock size={20} className="text-neutral-500 shrink-0 mt-0.5" />
              <div>
                <p style={{ fontSize: "0.9rem", fontWeight: 600 }}>Öffnungszeiten</p>
                <p className="text-neutral-400 mt-1" style={{ fontSize: "0.85rem" }}>Di–Fr: 09–12:30 & 14–17 · Sa: 10–15</p>
              </div>
            </div>
          </Fade>
          <Fade delay={0.16}>
            <Link to="/kontakt" className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white justify-center hover:bg-white hover:text-neutral-900 transition-all" style={{ fontSize: "0.9rem", fontWeight: 600 }}>
              Termin vereinbaren <ArrowRight size={16} />
            </Link>
          </Fade>
        </div>
      </section>
    </div>
  );
}