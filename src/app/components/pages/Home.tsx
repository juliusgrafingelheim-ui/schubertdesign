import { useRef } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { Fade } from "../SectionReveal";
import { serif } from "../Layout";
import { Counter, TextReveal, ClipReveal, MagneticWrap } from "../AnimatedCounter";
import { ArrowRight, Star, BadgeCheck, Ruler, Droplets, Layers, Award, Users } from "lucide-react";

const CDN = "https://cdn.prod.website-files.com/618ac216f0fe430bdd7d4310/";
const IMG = {
  hero: `${CDN}61c334a9842e5daac2534246_bad-1_001.jpg`,
  bath: `${CDN}61c3390794157de3e45cf7d8_bad-2_003.jpg`,
  stairs: `${CDN}61c34585c4d070570bf6d6e4_stein-fliese-1_001.jpg`,
  spa: `${CDN}61c34106842e5d7978539571_spa-1_001.jpg`,
  stone: `${CDN}61bb870c14af694f5a425512_79f28a6b183002dg77cd302e87c2252d.jpg`,
  craft: `${CDN}61c33958be9c7a851ff550bf_bad-3_004.jpg`,
  showroom: `${CDN}61c346f33deb6e51b9c34440_stein-fliese-5_002.jpg`,
  vanity: `${CDN}61c33d8c9529ef05031047bb_bad-9_001.jpg`,
  panorama: `${CDN}61bb867a917fa519c78937b0_c55db59efad994ag1d727bcbe02c4dbf.jpg`,
};

const SERVICES = [
  { icon: Droplets, title: "Bad & Spa", desc: "Vom Gäste-WC bis zur Penthouse-Suite — modulare Teil-Lösung oder Full Service.", img: IMG.hero },
  { icon: Layers, title: "Boden & Wand", desc: "Naturstein und Fliesen — Einbau durch eigene Facharbeiter, alles aus einer Hand.", img: `${CDN}61a8a524d596019e1e9f0c8a_Steinboden-Naturstein-Esszimmer%201.png` },
  { icon: Ruler, title: "Treppen", desc: "Pflegeleicht, wertig und wirtschaftlich — im Innen- wie im Außenbereich.", img: IMG.stairs },
  { icon: BadgeCheck, title: "Fensterbänke", desc: "Marmor, Kalkstein oder Granit — individuell für Sie gefertigt.", img: `${CDN}61a8a4f02916641fe408230b_Zach-Export-Masterbad-8%201.png` },
];

const PROJECTS = [
  { title: "LIMESTONE", cat: "Bad", img: IMG.hero },
  { title: "BIANCONE", cat: "Bad", img: IMG.bath },
  { title: "WELLNESSPARADIES", cat: "Spa", img: IMG.spa },
  { title: "BADETRÄUME", cat: "Bad", img: IMG.craft },
];

const REVIEWS = [
  { text: "Von Anfang bis zum Abschluss ist man bei Schubert immer in den besten Händen. Überaus freundlich und immer erreichbar.", name: "Martina B." },
  { text: "Vor 20 Jahren hat die Fa. Schubert unser Natursteinbad gestaltet. Es ist bis heute zeitlos schön.", name: "Simon S." },
  { text: "Besonders hervorzuheben ist die Detailgenauigkeit der ideenreichen Planung.", name: "Sabine Z." },
];

const BRANDS = ["Agape", "Antonio Lupi", "Bisazza", "Dornbracht", "Duravit", "Mutina", "Vola", "CEA Design", "Effe", "Glamora", "Tubes", "Nimbus"];

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div>
      {/* ══════ HERO ══════ */}
      <section ref={heroRef} className="relative overflow-hidden h-[75vh] lg:h-screen">
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <img src={IMG.panorama} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 h-full flex flex-col justify-end pb-20 lg:pb-28">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white/90 mb-6"
              style={{ fontSize: "0.8rem", fontWeight: 500 }}
            >
              <Award size={14} />
              Seit 1953 in Ingolstadt
            </motion.div>

            <h1 className="text-white overflow-hidden">
              <TextReveal className="block" delay={0.2}>Ihr Experte für</TextReveal>
              <span className="block" style={{ fontFamily: serif, fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 400, lineHeight: 1, fontStyle: "italic" }}>
                <TextReveal delay={0.4}>Bad, Naturstein & Fliese</TextReveal>
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-3 mt-10"
            >
              <MagneticWrap>
                <Link to="/kontakt" className="group flex items-center gap-2 px-7 py-3.5 bg-white text-neutral-900 hover:bg-neutral-100 transition-colors" style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                  Beratung anfragen
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticWrap>
              <Link to="/projekte" className="flex items-center gap-2 px-7 py-3.5 border border-white/25 text-white hover:bg-white/10 transition-colors" style={{ fontSize: "0.9rem", fontWeight: 500 }}>
                Projekte ansehen
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }} className="w-5 h-8 border-2 border-white/30 flex justify-center pt-1.5">
            <div className="w-1 h-1.5 bg-white/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════ STATS BAR ══════ */}
      <section className="bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14 lg:py-16 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {[
            { value: 65, suffix: "+", label: "Jahre Erfahrung" },
            { value: 3, suffix: ".", label: "Generation" },
            { value: 1953, suffix: "", label: "Gegründet" },
            { value: 500, suffix: "+", label: "Realisierte Projekte" },
          ].map((item, i) => (
            <Fade key={item.label} delay={i * 0.1}>
              <div className="text-center">
                <p style={{ fontFamily: serif, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, fontStyle: "italic" }}>
                  <Counter value={item.value} suffix={item.suffix} />
                </p>
                <p className="text-neutral-500 mt-1" style={{ fontSize: "0.8rem", fontWeight: 500 }}>{item.label}</p>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* ══════ EDITORIAL STATEMENT ══════ */}
      <section className="py-28 lg:py-40">
        <div className="max-w-5xl mx-auto px-5 lg:px-8 text-center">
          <Fade>
            <p className="text-neutral-400 mb-8" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em" }}>UNSERE PHILOSOPHIE</p>
          </Fade>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ fontFamily: serif, fontSize: "clamp(1.8rem, 4vw, 3.2rem)", fontWeight: 400, lineHeight: 1.35, fontStyle: "italic" }}
          >
            <TextReveal delay={0.1}>
              Stein ist unsere Kernkompetenz. Bäder sind unsere Leidenschaft. Qualität unser Prinzip.
            </TextReveal>
          </motion.h2>
          <Fade delay={0.5}><div className="w-12 h-px bg-neutral-200 mx-auto mt-10" /></Fade>
        </div>
      </section>

      {/* ══════ SERVICES ══════ */}
      <section className="py-20 lg:py-28 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Fade>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <p className="text-neutral-400" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>LEISTUNGEN</p>
                <h2 className="mt-2" style={{ fontFamily: serif, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 400, fontStyle: "italic" }}>
                  Was wir für Sie tun
                </h2>
              </div>
              <Link to="/leistungen" className="group flex items-center gap-1.5 text-neutral-900" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                Alle Leistungen <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Fade>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group"
              >
                <Link to="/leistungen" className="block bg-white overflow-hidden hover:bg-neutral-950 transition-all duration-500 h-full flex flex-col">
                  <ClipReveal>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                  </ClipReveal>
                  <div className="p-6 flex-1 flex flex-col">
                    <s.icon size={18} className="text-neutral-400 mb-3 group-hover:text-neutral-500 transition-colors" />
                    <h3 className="group-hover:text-white transition-colors" style={{ fontSize: "1.1rem", fontWeight: 700 }}>{s.title}</h3>
                    <p className="text-neutral-500 mt-2 group-hover:text-neutral-400 transition-colors flex-1" style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>{s.desc}</p>
                    <span className="inline-flex items-center gap-1 mt-4 text-neutral-900 group-hover:text-white group-hover:gap-2 transition-all" style={{ fontSize: "0.8rem", fontWeight: 600 }}>
                      Mehr erfahren <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ ABOUT SPLIT ══════ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative pb-12">
            <ClipReveal>
              <img src={IMG.craft} alt="Handwerk" className="w-full aspect-[4/3] object-cover" />
            </ClipReveal>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-4 lg:-right-10 bg-white shadow-2xl p-6 max-w-[220px] z-10"
            >
              <p style={{ fontFamily: serif, fontSize: "2.5rem", fontWeight: 400, fontStyle: "italic" }}>
                <Counter value={65} suffix="+" />
              </p>
              <p className="text-neutral-500" style={{ fontSize: "0.75rem", fontWeight: 500, lineHeight: 1.4 }}>Jahre Erfahrung in Naturstein & Badgestaltung</p>
            </motion.div>
          </div>

          <Fade delay={0.15}>
            <div>
              <p className="text-neutral-400 mb-2" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>ÜBER SCHUBERT</p>
              <h2 className="mt-2" style={{ fontFamily: serif, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 400, fontStyle: "italic" }}>
                Handwerk trifft Leidenschaft
              </h2>
              <p className="text-neutral-600 mt-5" style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                Modernste Technologie, handwerkliche Präzision und eine gute Portion Leidenschaft. Ihr Naturstein wird nicht von Automaten bearbeitet, sondern von Händen mit Gefühl.
              </p>
              <MagneticWrap className="inline-block">
                <Link to="/unternehmen" className="group inline-flex items-center gap-2 mt-8 px-6 py-3 bg-neutral-900 text-white hover:bg-neutral-700 transition-colors" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                  Mehr erfahren <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticWrap>
            </div>
          </Fade>
        </div>
      </section>

      {/* ══════ PROJECTS ══════ */}
      <section className="py-24 lg:py-32 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Fade>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
              <div>
                <p className="text-neutral-500" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>PROJEKTE</p>
                <h2 className="mt-2" style={{ fontFamily: serif, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 400, fontStyle: "italic" }}>
                  Ausgewählte Arbeiten
                </h2>
              </div>
              <Link to="/projekte" className="group flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                Alle Projekte <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Fade>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
            {PROJECTS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              >
                <Link to="/projekte" className="group relative block">
                  <div className="overflow-hidden aspect-[4/3]">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="inline-block px-3 py-1 bg-white/15 backdrop-blur-md text-white/80 mb-2" style={{ fontSize: "0.7rem", fontWeight: 500 }}>{p.cat}</span>
                    <h3 className="text-white" style={{ fontFamily: serif, fontSize: "1.3rem", fontWeight: 400, fontStyle: "italic" }}>{p.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ FULL WIDTH IMAGE DIVIDER ══════ */}
      <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <img src={IMG.vanity} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <Fade>
            <p className="text-white text-center max-w-xl px-5" style={{ fontFamily: serif, fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.4 }}>
              Service ist für uns selbstverständlich — und es macht uns Spaß.
            </p>
          </Fade>
        </div>
      </section>

      {/* ══════ REVIEWS ══════ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Fade>
            <div className="text-center mb-14">
              <p className="text-neutral-400 mb-2" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>KUNDENSTIMMEN</p>
              <h2 style={{ fontFamily: serif, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 400, fontStyle: "italic" }}>
                Was unsere Kunden sagen
              </h2>
            </div>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-100">
            {REVIEWS.map((r, i) => (
              <Fade key={r.name} delay={i * 0.1}>
                <div className="bg-white p-8 h-full flex flex-col group hover:bg-neutral-950 hover:text-white transition-all duration-500">
                  <div className="flex gap-0.5 mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} size={13} className="fill-neutral-900 text-neutral-900 group-hover:fill-white group-hover:text-white transition-colors" />)}
                  </div>
                  <p className="text-neutral-600 flex-1 group-hover:text-neutral-300 transition-colors" style={{ fontFamily: serif, fontSize: "1.05rem", lineHeight: 1.7, fontStyle: "italic" }}>
                    &bdquo;{r.text}&ldquo;
                  </p>
                  <div className="flex items-center gap-3 mt-8 pt-6 border-t border-neutral-100 group-hover:border-white/10 transition-colors">
                    <div className="w-9 h-9 bg-neutral-900 group-hover:bg-white group-hover:text-neutral-900 text-white flex items-center justify-center transition-colors" style={{ fontSize: "0.7rem", fontWeight: 700 }}>
                      {r.name.charAt(0)}
                    </div>
                    <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>{r.name}</span>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ BRANDS MARQUEE ══════ */}
      <section className="py-14 border-t border-neutral-100 overflow-hidden">
        <Fade>
          <p className="text-center text-neutral-400 mb-10" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em" }}>UNSERE MARKEN</p>
        </Fade>
        <div className="relative">
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} className="flex gap-16 whitespace-nowrap">
            {[...BRANDS, ...BRANDS].map((b, i) => (
              <span key={`${b}-${i}`} className="text-neutral-400 hover:text-neutral-900 transition-colors duration-300 cursor-default" style={{ fontFamily: serif, fontSize: "1.3rem", fontStyle: "italic" }}>
                {b}
              </span>
            ))}
          </motion.div>
        </div>
        <Fade>
          <div className="text-center mt-10">
            <Link to="/marken" className="group inline-flex items-center gap-1.5 text-neutral-900" style={{ fontSize: "0.8rem", fontWeight: 600 }}>
              Alle Marken ansehen <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Fade>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <Fade>
            <div className="bg-neutral-950 text-white p-12 lg:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 blur-3xl translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <h2 style={{ fontFamily: serif, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, fontStyle: "italic" }}>
                  Bereit für Ihr nächstes Projekt?
                </h2>
                <p className="text-neutral-400 mt-4 max-w-md mx-auto" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                  Vereinbaren Sie einen persönlichen Beratungstermin in unserem Showroom in Ingolstadt.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-10">
                  <MagneticWrap>
                    <Link to="/kontakt" className="group flex items-center gap-2 px-8 py-4 bg-white text-neutral-900 hover:bg-neutral-100 transition-colors" style={{ fontSize: "0.9rem", fontWeight: 700 }}>
                      Kontakt aufnehmen <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </MagneticWrap>
                  <Link to="/showroom" className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white hover:bg-white/10 transition-colors" style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                    Showroom besuchen
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
}