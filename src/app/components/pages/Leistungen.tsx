import { Link } from "react-router";
import { motion } from "motion/react";
import { Fade } from "../SectionReveal";
import { serif } from "../Layout";
import { ClipReveal } from "../AnimatedCounter";
import { ArrowRight, Droplets, Layers, Ruler, BadgeCheck, Wrench, HardHat, Truck } from "lucide-react";

const CDN = "https://cdn.prod.website-files.com/618ac216f0fe430bdd7d4310/";
const IMG = {
  hero: `${CDN}61c33d8c9529ef05031047bb_bad-9_001.jpg`,
  floor: `${CDN}61bb870c14af694f5a425512_79f28a6b183002dg77cd302e87c2252d.jpg`,
  stairs: `${CDN}61c34585c4d070570bf6d6e4_stein-fliese-1_001.jpg`,
  stone: `${CDN}61c3551190b9b260e5e738db_manufaktur_001.jpg`,
};

const MAIN = [
  { icon: Droplets, title: "Bad & Spa", img: IMG.hero, text: "Ihr Badezimmer, ob preisgünstig oder Premium, planen und realisieren wir mit einer über Jahrzehnte gereiften Fachkenntnis. Modulare Teil-Lösung oder Full Service Paket — ob Gäste-WC oder Penthouse-Suite.", features: ["Komplettbäder & Teilsanierung", "3D-Visualisierung", "Barrierefreie Bäder", "Sauna, Dampfbad, Duschhimmel"] },
  { icon: Layers, title: "Boden & Wand", img: IMG.floor, text: "Technologie und handwerkliche Präzision formen Naturstein und Fliesen zu Ihrem Projekt. Einbau durch unsere eigenen Mitarbeiter. Alles aus einer Hand — vom Aufmaß bis zur Abnahme.", features: ["Naturstein & Fliesen", "Eigene Facharbeiter", "Aufmaß bis Abnahme", "Innen- & Außenbereich"] },
  { icon: Ruler, title: "Treppen", img: IMG.stairs, text: "Ihre Treppe ist meist Zentrum Ihrer Immobilie. Im Innen- wie im Außenbereich ist Naturstein die Lösung. Pflegeleicht, wertig und dennoch wirtschaftlich.", features: ["Innen- & Außentreppen", "Alle Natursteinsorten", "Rutschsichere Oberflächen", "Individuelle Maßfertigung"] },
  { icon: BadgeCheck, title: "Fensterbänke", img: IMG.stone, text: "Naturstein gestaltet den Übergang vom Fenster zum Raum ästhetisch und praktisch zugleich. Aus Marmor, Kalkstein oder Granit — individuell für Sie gefertigt.", features: ["Marmor, Granit, Kalkstein", "Maßanfertigung", "Innen & Außen", "Pflegeleichte Oberflächen"] },
];

const EXTRA = [
  { icon: HardHat, title: "Architekten-Service", items: ["Beratung & Materialbibliothek", "Muster-Service", "Ausschreibungsservice", "Bad- und Spa-Konzeption", "Entwurfs- & Ausführungszeichnungen", "Bauüberwachung & Steuerung"] },
  { icon: Wrench, title: "Wartung & Reparatur", items: ["Reparaturen & Fugenerneuerung", "Reinigung & Imprägnierungen", "Antirutsch-Behandlung", "Schleifen matter Oberflächen", "Austausch defekter Platten"] },
  { icon: Truck, title: "Montageservice", items: ["Eigenes Facharbeiter-Team", "Naturstein- & Fliesenverlegung", "Möbeleinbau", "Sanitär-Installation"] },
];

export function Leistungen() {
  return (
    <div>
      <section className="bg-neutral-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Fade>
            <p className="text-neutral-400" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>UNSERE LEISTUNGEN</p>
            <h1 className="mt-3" style={{ fontFamily: serif, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.15, fontStyle: "italic" }}>
              Was wir für Sie tun
            </h1>
            <p className="text-neutral-600 mt-4 max-w-xl" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              Wir bringen Ihnen die Welt von Bad, Naturstein, Fliese und Spa näher. Full Service — von der Beratung bis zur Abnahme.
            </p>
          </Fade>
        </div>
      </section>

      {MAIN.map((s, i) => (
        <section key={s.title} className={`py-24 lg:py-32 ${i % 2 ? "bg-neutral-100" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={i % 2 ? "lg:order-2" : ""}
              >
                <ClipReveal>
                  <img src={s.img} alt={s.title} className="w-full aspect-[4/3] object-cover" />
                </ClipReveal>
              </motion.div>
              <Fade delay={0.15} className={i % 2 ? "lg:order-1" : ""}>
                <s.icon size={20} className="text-neutral-400 mb-5" />
                <h2 style={{ fontFamily: serif, fontSize: "clamp(1.6rem, 2.5vw, 2rem)", fontWeight: 400, lineHeight: 1.15, fontStyle: "italic" }}>{s.title}</h2>
                <p className="text-neutral-600 mt-4" style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>{s.text}</p>
                <ul className="grid grid-cols-2 gap-3 mt-6">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-neutral-700" style={{ fontSize: "0.85rem" }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Fade>
            </div>
          </div>
        </section>
      ))}

      {/* Extra services */}
      <section className="py-24 lg:py-32 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Fade>
            <p className="text-neutral-500" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>SERVICES</p>
            <h2 className="mt-2 mb-12" style={{ fontFamily: serif, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 400, fontStyle: "italic" }}>Unser Service für Sie</h2>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {EXTRA.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="border border-white/10 p-8 hover:bg-white/5 transition-colors h-full"
              >
                <e.icon size={18} className="text-neutral-500 mb-5" />
                <h3 className="mb-5" style={{ fontSize: "1rem", fontWeight: 700 }}>{e.title}</h3>
                <ul className="space-y-2.5">
                  {e.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-neutral-400" style={{ fontSize: "0.8rem", lineHeight: 1.5 }}>
                      <div className="w-1 h-1 rounded-full bg-neutral-600 mt-1.5 shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <Fade>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, fontStyle: "italic" }}>
              Lassen Sie uns über Ihr Projekt sprechen
            </h2>
            <p className="text-neutral-500 mt-3 max-w-md mx-auto" style={{ fontSize: "0.95rem" }}>
              Besuchen Sie unseren Showroom oder vereinbaren Sie einen Beratungstermin.
            </p>
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-neutral-900 text-white hover:bg-neutral-700 transition-colors"
              style={{ fontSize: "0.9rem", fontWeight: 700 }}
            >
              Kontakt aufnehmen <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Fade>
        </div>
      </section>
    </div>
  );
}