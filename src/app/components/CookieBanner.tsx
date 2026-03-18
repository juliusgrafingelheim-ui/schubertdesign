import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { updateGoogleConsent } from "./analytics";

const COOKIE_CONSENT_KEY = "sd-cookie-consent-v1";

type ConsentState = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

const serif = "'Lora', Georgia, serif";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (consent: ConsentState) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
    updateGoogleConsent(consent.analytics, consent.marketing);
    setVisible(false);
  };

  const acceptAll = () =>
    saveConsent({ necessary: true, analytics: true, marketing: true, timestamp: new Date().toISOString() });

  const acceptSelected = () =>
    saveConsent({ ...preferences, necessary: true, timestamp: new Date().toISOString() });

  const acceptNecessary = () =>
    saveConsent({ necessary: true, analytics: false, marketing: false, timestamp: new Date().toISOString() });

  const toggles = [
    { key: "necessary" as const, label: "Notwendig", desc: "Technisch erforderlich – kann nicht deaktiviert werden.", locked: true },
    { key: "analytics" as const, label: "Analyse", desc: "Hilft uns zu verstehen, wie Besucher unsere Website nutzen.", locked: false },
    { key: "marketing" as const, label: "Marketing", desc: "Ermöglicht personalisierte Werbung und Inhalte.", locked: false },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
        >
          <div className="max-w-xl mx-auto bg-neutral-950 text-white shadow-2xl">
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <h3 style={{ fontFamily: serif, fontSize: "1.15rem", fontWeight: 400, fontStyle: "italic" }}>
                  Cookie-Einstellungen
                </h3>
                <button
                  onClick={acceptNecessary}
                  className="text-white/30 hover:text-white transition-colors cursor-pointer shrink-0 p-1"
                  aria-label="Schließen"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Text */}
              <p className="text-white/50 mb-6" style={{ fontSize: "0.8rem", lineHeight: 1.7 }}>
                Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung zu bieten.{" "}
                <Link
                  to="/datenschutz"
                  className="text-white/70 underline underline-offset-2 hover:text-white transition-colors"
                  onClick={() => setVisible(false)}
                >
                  Datenschutzerklärung
                </Link>
              </p>

              {/* Detail toggles */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/10 pt-5 mb-6 space-y-4">
                      {toggles.map((t) => (
                        <label
                          key={t.key}
                          className={`flex items-start gap-3 ${t.locked ? "cursor-not-allowed" : "cursor-pointer"}`}
                        >
                          <div className="mt-0.5 shrink-0">
                            <div
                              onClick={() => {
                                if (!t.locked)
                                  setPreferences((p) => ({ ...p, [t.key]: !p[t.key] }));
                              }}
                              className={`w-8 h-[18px] border transition-all flex items-center ${
                                t.locked || preferences[t.key]
                                  ? "bg-white border-white"
                                  : "bg-transparent border-white/30 hover:border-white/50"
                              }`}
                            >
                              <div
                                className={`w-3 h-3 transition-all ${
                                  t.locked || preferences[t.key]
                                    ? "bg-neutral-950 ml-[13px]"
                                    : "bg-white/30 ml-[2px]"
                                }`}
                              />
                            </div>
                          </div>
                          <div>
                            <p className="text-white/90" style={{ fontSize: "0.8rem", fontWeight: 500 }}>
                              {t.label}
                            </p>
                            <p className="text-white/35" style={{ fontSize: "0.72rem" }}>
                              {t.desc}
                            </p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={acceptAll}
                  className="flex-1 bg-white text-neutral-950 py-2.5 px-5 cursor-pointer border border-white hover:bg-white/90 transition-all"
                  style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}
                >
                  Alle akzeptieren
                </button>
                {showDetails ? (
                  <button
                    onClick={acceptSelected}
                    className="flex-1 bg-transparent text-white py-2.5 px-5 cursor-pointer border border-white/20 hover:border-white/50 transition-all"
                    style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}
                  >
                    Auswahl bestätigen
                  </button>
                ) : (
                  <button
                    onClick={() => setShowDetails(true)}
                    className="flex-1 bg-transparent text-white py-2.5 px-5 cursor-pointer border border-white/20 hover:border-white/50 transition-all"
                    style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}
                  >
                    Einstellungen
                  </button>
                )}
                <button
                  onClick={acceptNecessary}
                  className="flex-1 bg-transparent text-white/40 py-2.5 px-5 cursor-pointer border border-white/10 hover:border-white/25 hover:text-white/60 transition-all"
                  style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}
                >
                  Nur notwendige
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
