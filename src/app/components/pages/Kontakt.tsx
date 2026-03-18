import { useState } from "react";
import { Fade } from "../SectionReveal";
import { serif } from "../Layout";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from "lucide-react";

export function Kontakt() {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "Badplanung",
    message: "",
  });

  const update = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Fehler beim Senden");
      }

      setDone(true);
      setForm({ firstName: "", lastName: "", email: "", subject: "Badplanung", message: "" });
    } catch (err: any) {
      setError(err.message || "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-white border border-neutral-200 outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-100 transition-all";

  return (
    <div>
      <section className="bg-neutral-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Fade>
            <p className="text-neutral-400" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>KONTAKT</p>
            <h1 className="mt-3" style={{ fontFamily: serif, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.15, fontStyle: "italic" }}>
              Lassen Sie uns sprechen
            </h1>
            <p className="text-neutral-600 mt-4 max-w-xl" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              Vereinbaren Sie einen persönlichen Beratungstermin oder besuchen Sie unseren Showroom.
            </p>
          </Fade>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: MapPin, label: "Adresse", val: "Schrobenhausener Str. 132\n85051 Ingolstadt" },
            { icon: Phone, label: "Telefon", val: "+49 (0) 841 97474 0" },
            { icon: Mail, label: "E-Mail", val: "schubert@\nschubertdesign.de" },
            { icon: Clock, label: "Showroom", val: "Di-Fr: 09-12:30 & 14-17\nSa: 10-15 Uhr" },
          ].map((c, i) => (
            <Fade key={c.label} delay={i * 0.06}>
              <div className="bg-white border border-neutral-100 p-6 h-full group hover:bg-neutral-900 hover:border-neutral-900 hover:text-white transition-all duration-300">
                <c.icon size={18} className="text-neutral-400 group-hover:text-white/50 mb-4 transition-colors" />
                <p className="text-neutral-400 group-hover:text-white/40 mb-1 transition-colors" style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.05em" }}>{c.label.toUpperCase()}</p>
                <p className="whitespace-pre-line text-neutral-700 group-hover:text-white/80 transition-colors" style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>{c.val}</p>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <Fade>
            <div className="bg-neutral-100 p-8 lg:p-12">
              <h2 className="mb-2" style={{ fontFamily: serif, fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 400, fontStyle: "italic" }}>
                Nachricht senden
              </h2>
              <p className="text-neutral-500 mb-8" style={{ fontSize: "0.9rem" }}>
                Wir beantworten Ihre Anfrage schnellstmöglich.
              </p>

              {done ? (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
                  <div className="w-14 h-14 bg-neutral-200 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={24} className="text-neutral-900" />
                  </div>
                  <h3 style={{ fontFamily: serif, fontSize: "1.3rem", fontWeight: 400, fontStyle: "italic" }}>Vielen Dank!</h3>
                  <p className="text-neutral-500 mt-2" style={{ fontSize: "0.9rem" }}>
                    Wir haben Ihnen eine Bestätigung per E-Mail gesendet und melden uns in Kürze.
                  </p>
                  <button onClick={() => setDone(false)} className="mt-6 px-5 py-2 bg-neutral-200 hover:bg-neutral-300 transition-colors cursor-pointer" style={{ fontSize: "0.8rem", fontWeight: 600 }}>
                    Neue Nachricht
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-neutral-500 mb-1.5" style={{ fontSize: "0.8rem", fontWeight: 600 }}>Vorname *</label>
                      <input type="text" required value={form.firstName} onChange={(e) => update("firstName", e.target.value)} className={inputClass} style={{ fontSize: "0.9rem" }} />
                    </div>
                    <div>
                      <label className="block text-neutral-500 mb-1.5" style={{ fontSize: "0.8rem", fontWeight: 600 }}>Nachname *</label>
                      <input type="text" required value={form.lastName} onChange={(e) => update("lastName", e.target.value)} className={inputClass} style={{ fontSize: "0.9rem" }} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-neutral-500 mb-1.5" style={{ fontSize: "0.8rem", fontWeight: 600 }}>E-Mail *</label>
                    <input type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass} style={{ fontSize: "0.9rem" }} />
                  </div>
                  <div>
                    <label className="block text-neutral-500 mb-1.5" style={{ fontSize: "0.8rem", fontWeight: 600 }}>Betreff</label>
                    <select value={form.subject} onChange={(e) => update("subject", e.target.value)} className={`${inputClass} text-neutral-700`} style={{ fontSize: "0.9rem" }}>
                      <option>Badplanung</option>
                      <option>Naturstein</option>
                      <option>Fliesen</option>
                      <option>Showroom-Termin</option>
                      <option>Bewerbung</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-neutral-500 mb-1.5" style={{ fontSize: "0.8rem", fontWeight: 600 }}>Ihre Nachricht *</label>
                    <textarea rows={5} required value={form.message} onChange={(e) => update("message", e.target.value)} className={`${inputClass} resize-none`} style={{ fontSize: "0.9rem" }} />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3" style={{ fontSize: "0.85rem" }}>
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 px-7 py-3.5 bg-neutral-900 text-white hover:bg-neutral-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                    style={{ fontSize: "0.9rem", fontWeight: 700 }}
                  >
                    {loading ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
                    {loading ? "Wird gesendet…" : "Nachricht senden"}
                  </button>
                </form>
              )}
            </div>
          </Fade>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-neutral-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-white shadow flex items-center justify-center mx-auto mb-3">
              <MapPin size={20} className="text-neutral-900" />
            </div>
            <p style={{ fontFamily: serif, fontSize: "1rem", fontWeight: 400, fontStyle: "italic" }}>Schubert Design</p>
            <p className="text-neutral-500 mt-1" style={{ fontSize: "0.8rem" }}>Schrobenhausener Str. 132, 85051 Ingolstadt</p>
          </div>
        </div>
      </section>
    </div>
  );
}
