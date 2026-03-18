import { Link } from "react-router";
import { Fade } from "../SectionReveal";
import { serif } from "../Layout";
import { ArrowRight } from "lucide-react";

const CDN = "https://cdn.prod.website-files.com/618ac216f0fe430bdd7d4310/";
const IMG = {
  craft: `${CDN}61c3551190b9b260e5e738db_manufaktur_001.jpg`,
  manufaktur2: `${CDN}61c35510c9dc5e876b528428_manufaktur_002.jpg`,
  raphael: `${CDN}61bb8adee7c8b01edf710c42_Raphael.png`,
  henry: `${CDN}61bb8ade917fa50cff895302_Henry.png`,
  steinbruch: `${CDN}61c356159f37a05bf74816c6_steinbruch_001.jpg`,
};

const TL = [
  { year: "1953", text: "Gründung als Einzelfirma durch Gerhard Schubert" },
  { year: "1965", text: "Niederlassung Ingolstadt" },
  { year: "1984", text: "Werkstatt, Lagerhalle, Verwaltung & Ausstellung" },
  { year: "1991", text: "Water & Stone Collection, ISH Frankfurt" },
  { year: "1996", text: "Sieger Design entwirft Waschtisch GODA" },
  { year: "2008", text: "Bäder und SPAs in London" },
  { year: "2011", text: "Auszeichnung durch Architectural Digest" },
  { year: "2013", text: "Raphael Marc Schubert, 3. Generation" },
  { year: "2019", text: "Meisterprüfung Naturwerksteinmechaniker" },
  { year: "2020", text: "Schubert GmbH & Co. KG" },
];

const JOBS = [
  { title: "Natursteinleger (m/w/d)", tag: "Vollzeit" },
  { title: "Naturwerksteinmechaniker (m/w/d)", tag: "Vollzeit" },
  { title: "Fliesenleger (m/w/d)", tag: "Vollzeit" },
  { title: "Azubi — Steinmetz (m/w/d)", tag: "Ausbildung" },
  { title: "Azubi — Büro (m/w/d)", tag: "Ausbildung" },
];

export function Unternehmen() {
  return (
    <div>
      <section className="bg-neutral-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Fade>
            <p className="text-neutral-400" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>ÜBER UNS</p>
            <h1 className="mt-3" style={{ fontFamily: serif, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.15, fontStyle: "italic" }}>
              Drei Generationen Leidenschaft
            </h1>
            <p className="text-neutral-600 mt-4 max-w-xl" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              Erfahrung ist durch nichts zu ersetzen. Daher lernen wir für Sie seit mehr als 65 Jahren.
            </p>
          </Fade>
        </div>
      </section>

      {/* Editorial statement */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <Fade>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.4, fontStyle: "italic" }}>
              Stein ist unsere <em>Kernkompetenz.</em><br />
              Bäder sind unsere <em>Leidenschaft.</em><br />
              <span className="text-neutral-400">Qualität unser Prinzip — Service selbstverständlich.</span>
            </h2>
          </Fade>
        </div>
      </section>

      {/* Story + Image */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Fade>
            <img src={IMG.craft} alt="Handwerk" className="w-full aspect-[4/3] object-cover" />
          </Fade>
          <Fade delay={0.1}>
            <div>
              <h2 className="mb-5" style={{ fontFamily: serif, fontSize: "clamp(1.6rem, 2.5vw, 2rem)", fontWeight: 400, fontStyle: "italic" }}>
                Handwerk trifft Technologie
              </h2>
              <p className="text-neutral-600" style={{ fontSize: "0.95rem", lineHeight: 1.9 }}>
                Modernste Technologie, handwerkliche Präzision und eine gute Portion Leidenschaft. Ihr Naturstein wird nicht von Automaten bearbeitet, sondern von Händen mit Gefühl.
              </p>
              <p className="text-neutral-600 mt-4" style={{ fontSize: "0.95rem", lineHeight: 1.9 }}>
                Service ist für uns selbstverständlich — und es macht uns Spaß, selbst ausgefallenen Kundenträumen nahe zu kommen. Marmor, Sandstein, Kalkstein, Travertin, Onyx, Basalt, Granit — jeder Stein ist faszinierend einzigartig.
              </p>
            </div>
          </Fade>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <Fade>
            <p className="text-neutral-400 mb-2" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>GESCHÄFTSFÜHRUNG</p>
            <h2 className="mb-12" style={{ fontFamily: serif, fontSize: "clamp(1.6rem, 2.5vw, 2rem)", fontWeight: 400, fontStyle: "italic" }}>
              Wir freuen uns auf Sie
            </h2>
          </Fade>
          <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
            {[{ n: "Raphael", r: "Geschäftsführer", img: IMG.raphael }, { n: "Henry", r: "Geschäftsführer", img: IMG.henry }].map((p, i) => (
              <Fade key={p.n} delay={i * 0.1}>
                <div className="bg-white p-6">
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden">
                    <img src={p.img} alt={`${p.n} Schubert`} className="w-full h-full object-cover object-top" />
                  </div>
                  <p style={{ fontFamily: serif, fontSize: "1rem", fontWeight: 400, fontStyle: "italic" }}>{p.n} Schubert</p>
                  <p className="text-neutral-500 mt-1" style={{ fontSize: "0.8rem" }}>{p.r}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <Fade>
            <p className="text-neutral-400 mb-2" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>GESCHICHTE</p>
            <h2 className="mb-12" style={{ fontFamily: serif, fontSize: "clamp(1.6rem, 2.5vw, 2rem)", fontWeight: 400, fontStyle: "italic" }}>Seit 1953</h2>
          </Fade>
          {TL.map((t, i) => (
            <Fade key={`${t.year}-${i}`} delay={i * 0.03}>
              <div className="flex gap-6 py-4 border-b border-neutral-100 group hover:bg-neutral-50 -mx-4 px-4 transition-colors">
                <span className="shrink-0 w-14 tabular-nums text-neutral-400 group-hover:text-neutral-900 transition-colors" style={{ fontFamily: serif, fontSize: "1rem", fontWeight: 400, fontStyle: "italic" }}>{t.year}</span>
                <p className="text-neutral-600" style={{ fontSize: "0.9rem" }}>{t.text}</p>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* Steinbruch */}
      <section className="relative overflow-hidden">
        <img src={IMG.steinbruch} alt="" className="w-full h-[50vh] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 w-full">
            <h2 className="text-white max-w-md" style={{ fontFamily: serif, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 400, fontStyle: "italic" }}>
              Das Altmühltal — unser Steinbruch seit 1953
            </h2>
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="py-20 lg:py-28 bg-neutral-950 text-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <Fade>
            <p className="text-neutral-500" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>KARRIERE</p>
            <h2 className="mt-2 mb-4" style={{ fontFamily: serif, fontSize: "clamp(1.6rem, 2.5vw, 2rem)", fontWeight: 400, fontStyle: "italic" }}>
              Jobs & Ausbildung
            </h2>
            <p className="text-neutral-400 mb-10" style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
              Wir suchen Verstärkung. Werden Sie Teil unseres Teams.
            </p>
          </Fade>

          {JOBS.map((j, i) => (
            <Fade key={j.title} delay={i * 0.04}>
              <div className="flex items-center justify-between py-5 border-b border-white/5 group cursor-pointer hover:px-2 transition-all">
                <div className="flex items-center gap-3">
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 600 }}>{j.title}</h3>
                  <span className="px-2.5 py-0.5 bg-white/5 text-neutral-500" style={{ fontSize: "0.65rem", fontWeight: 600 }}>{j.tag}</span>
                </div>
                <ArrowRight size={15} className="text-neutral-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </Fade>
          ))}

          <Fade>
            <Link to="/kontakt" className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 border border-white/20 text-white hover:bg-white hover:text-neutral-900 transition-all" style={{ fontSize: "0.9rem", fontWeight: 600 }}>
              Jetzt bewerben <ArrowRight size={16} />
            </Link>
          </Fade>
        </div>
      </section>
    </div>
  );
}