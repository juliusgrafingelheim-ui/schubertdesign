import { Link } from "react-router";
import { motion } from "motion/react";
import { Fade } from "../SectionReveal";
import { serif } from "../Layout";
import { ArrowRight } from "lucide-react";

const BRANDS = [
  "Agape", "Antonio Lupi", "Tubes Radiatori", "Bisazza", "Bisazza Mosaico",
  "Dornbracht", "Duravit", "Glamora", "14 Ora Italiana", "Effe",
  "Mutina", "Inbani", "CEA Design", "Cosmic", "Living Ceramics",
  "Nimbus", "London Art", "Nevobad", "Godelmann", "Vola",
  "K8 Radiatori", "Terma", "Anker", "Ceramicas Aparici",
];

export function Marken() {
  return (
    <div>
      <section className="bg-neutral-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Fade>
            <p className="text-neutral-400" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>MARKENPARTNER</p>
            <h1 className="mt-3" style={{ fontFamily: serif, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.15, fontStyle: "italic" }}>
              Unsere Marken
            </h1>
            <p className="text-neutral-600 mt-4 max-w-xl" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              Sensibel selektierte Marken. Produkte, die sich hervorragend auch zur Montage in eigener Regie eignen. Marken, die man nicht überall findet.
            </p>
          </Fade>
        </div>
      </section>

      {/* Brand grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {BRANDS.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.5 }}
                className="group relative border border-neutral-100 p-8 flex items-center justify-center h-28 hover:bg-neutral-950 hover:border-neutral-950 transition-all duration-500 cursor-default"
              >
                <span
                  className="text-neutral-900 group-hover:text-white transition-colors duration-500 text-center"
                  style={{ fontFamily: serif, fontSize: "1.1rem", fontWeight: 400, fontStyle: "italic" }}
                >
                  {b}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-16 border-t border-neutral-100 overflow-hidden">
        <div className="relative">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex gap-20 whitespace-nowrap"
          >
            {[...BRANDS, ...BRANDS].map((b, i) => (
              <span key={`${b}-${i}`} className="text-neutral-300" style={{ fontFamily: serif, fontSize: "2rem", fontStyle: "italic" }}>
                {b}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-neutral-100">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <Fade>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, fontStyle: "italic" }}>
              Alle Marken live im Showroom
            </h2>
            <p className="text-neutral-500 mt-4 max-w-md mx-auto" style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
              Erleben Sie unsere Markenpartner vor Ort. Anfassen, fühlen, vergleichen.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <Link to="/showroom" className="group flex items-center gap-2 px-7 py-3.5 bg-neutral-900 text-white hover:bg-neutral-700 transition-colors" style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                Showroom besuchen <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/kontakt" className="flex items-center gap-2 px-7 py-3.5 border border-neutral-200 hover:bg-neutral-100 transition-colors" style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                Kontakt
              </Link>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
}