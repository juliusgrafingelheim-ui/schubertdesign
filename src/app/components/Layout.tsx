import { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, ArrowUp } from "lucide-react";
import { CookieBanner } from "./CookieBanner";
import { LanguageProvider } from "./LanguageContext";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/projekte", label: "Projekte" },
  { to: "/showroom", label: "Showroom" },
  { to: "/marken", label: "Marken" },
  { to: "/unternehmen", label: "Über Uns" },
];

export const serif = "'Lora', Georgia, serif";
export const sans = "'Plus Jakarta Sans', sans-serif";
const LOGO = "https://cdn.prod.website-files.com/618ac216f0fe430bdd7d4310/618ac4ef655edfae991f06b2_Group%20108.png";

export function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const loc = useLocation();

  useEffect(() => { setMobileOpen(false); window.scrollTo(0, 0); }, [loc.pathname]);
  useEffect(() => {
    const fn = () => { setScrolled(window.scrollY > 20); setShowTop(window.scrollY > 600); };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => { document.body.style.overflow = mobileOpen ? "hidden" : ""; }, [mobileOpen]);

  const linkClass = (isActive: boolean) =>
    `relative py-1 transition-colors duration-200 ${isActive ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-900"}`;

  return (
    <LanguageProvider>
    <div style={{ fontFamily: sans }} className="min-h-screen bg-white text-neutral-900">
      {/* ─── NAVBAR ─── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={LOGO} alt="Schubert Design" className="h-8 brightness-0" />
          </Link>

          <nav className="hidden lg:flex items-center gap-7" style={{ fontSize: "0.8rem", fontWeight: 500 }}>
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === "/"} className={({ isActive }) => linkClass(isActive)}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/kontakt"
              className="hidden sm:flex items-center gap-2 px-5 py-2 bg-neutral-900 text-white transition-all hover:bg-neutral-700"
              style={{ fontSize: "0.8rem", fontWeight: 600 }}
            >
              <Phone size={14} />
              Kontakt
            </Link>
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center hover:bg-neutral-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* ─── MOBILE MENU ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-6 flex flex-col"
          >
            <nav className="flex flex-col gap-1 flex-1">
              {NAV.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === "/"}
                  className={({ isActive }) =>
                    `px-4 py-3.5 transition-colors ${isActive ? "bg-neutral-100 text-neutral-900" : "text-neutral-500 hover:bg-neutral-50"}`
                  }
                  style={{ fontSize: "1rem", fontWeight: 500 }}
                >
                  {n.label}
                </NavLink>
              ))}
              <Link
                to="/kontakt"
                className="mt-4 flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-900 text-white"
                style={{ fontSize: "1rem", fontWeight: 600 }}
              >
                <Phone size={16} />
                Kontakt aufnehmen
              </Link>
            </nav>
            <div className="py-6 text-center">
              <p className="text-neutral-400" style={{ fontSize: "0.75rem" }}>+49 (0) 841 97474 0</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-16 overflow-x-hidden"><Outlet /></main>

      {/* ─── FOOTER ─── */}
      <footer className="bg-neutral-950 text-white">
        {/* Big CTA strip */}
        <Link to="/kontakt" className="group block border-b border-white/5">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20 flex items-center justify-between">
            <h3 style={{ fontFamily: serif, fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 400, fontStyle: "italic" }}>
              Ihr Projekt beginnt hier.
            </h3>
            <div className="w-12 h-12 border border-white/15 flex items-center justify-center group-hover:bg-white group-hover:text-neutral-900 transition-all shrink-0 ml-6">
              <ArrowUp size={16} className="rotate-45" />
            </div>
          </div>
        </Link>

        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-5">
                <img src={LOGO} alt="Schubert Design" className="h-8 brightness-0 invert" />
              </div>
              <p className="text-neutral-500" style={{ fontSize: "0.8rem", lineHeight: 1.8 }}>
                Bad · Naturstein · Fliese<br />Seit 1953 in Ingolstadt
              </p>
            </div>
            <div>
              <h4 className="text-neutral-400 mb-4" style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.05em" }}>NAVIGATION</h4>
              {NAV.map((n) => (
                <Link key={n.to} to={n.to} className="block text-neutral-500 hover:text-white transition-colors py-1" style={{ fontSize: "0.8rem" }}>
                  {n.label}
                </Link>
              ))}
            </div>
            <div>
              <h4 className="text-neutral-400 mb-4" style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.05em" }}>KONTAKT</h4>
              <p className="text-neutral-500" style={{ fontSize: "0.8rem", lineHeight: 1.8 }}>
                Schrobenhausener Str. 132<br />85051 Ingolstadt<br /><br />
                +49 (0) 841 97474 0<br />schubert@schubertdesign.de
              </p>
            </div>
            <div>
              <h4 className="text-neutral-400 mb-4" style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.05em" }}>SHOWROOM</h4>
              <p className="text-neutral-500" style={{ fontSize: "0.8rem", lineHeight: 1.8 }}>
                Montag: geschlossen<br />Di–Fr: 09–12:30 & 14–17 Uhr<br />Sa: 10–15 Uhr
              </p>
            </div>
          </div>
          <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-neutral-600" style={{ fontSize: "0.7rem" }}>
            <span>&copy; {new Date().getFullYear()} Schubert GmbH & Co. KG</span>
            <div className="flex gap-5">
              <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
              <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-5 right-5 z-50 w-10 h-10 bg-neutral-900 text-white flex items-center justify-center shadow-lg hover:bg-neutral-700 transition-colors"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
      <CookieBanner />
    </div>
    </LanguageProvider>
  );
}