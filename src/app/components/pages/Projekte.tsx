import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Fade } from "../SectionReveal";
import { serif } from "../Layout";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const CDN = "https://cdn.prod.website-files.com/618ac216f0fe430bdd7d4310/";

const PROJECTS = [
  // ── BAD ──
  { id: "bad-01", title: "BAD 01", sub: "LIMESTONE", cat: "Bad", cover: `${CDN}61c334a9842e5daac2534246_bad-1_001.jpg`, images: [`${CDN}61c334a9842e5daac2534246_bad-1_001.jpg`,`${CDN}61c334a99f37a0bd454710c8_bad-1_007.jpg`,`${CDN}61c334a994157d25145ce0f2_bad-1_002.jpg`,`${CDN}61c334a9de3ee5dc88f57abb_bad-1_004.jpg`,`${CDN}61c334a9a478e76ca15b0f18_bad-1_003.jpg`,`${CDN}61c334a8cbd128dadcbe620b_bad-1_006.jpg`,`${CDN}61c334a894e0587d94b3ceb2_bad-1_005.jpg`,`${CDN}61c334a88367576ce453d439_bad-1_008.jpg`] },
  { id: "bad-02", title: "BAD 02", sub: "BIANCONE", cat: "Bad", cover: `${CDN}61c3390794157de3e45cf7d8_bad-2_003.jpg`, images: [`${CDN}61c3390794157de3e45cf7d8_bad-2_003.jpg`,`${CDN}61c3391790b9b21fc5e678b7_bad-2_005.jpg`,`${CDN}61c33917ac87b6782b74d7ef_bad-2_001.jpg`,`${CDN}61c339179f37a01f19472ecd_bad-2_002.jpg`,`${CDN}61c33917064a66349eccd729_bad-2_008.jpg`,`${CDN}61c3391694108dc2218d6ae8_bad-2_007.jpg`,`${CDN}61c33915d21eebe299121ef4_bad-2_004.jpg`,`${CDN}61c3391594e058596fb3ea9b_bad-2_006.jpg`] },
  { id: "bad-03", title: "BAD 03", sub: "BADETRÄUME", cat: "Bad", cover: `${CDN}61c33958be9c7a851ff550bf_bad-3_004.jpg`, images: [`${CDN}61c33958be9c7a851ff550bf_bad-3_004.jpg`,`${CDN}61c339676364ba67d470acbf_bad-3_002.jpg`,`${CDN}61c339676c8e4c2872cbc598_bad-3_003.jpg`,`${CDN}61c33967370af2d96e5f8ac1_bad-3_001.jpg`] },
  { id: "bad-04", title: "BAD 04", sub: "TRANSPARENT", cat: "Bad", cover: `${CDN}61c3398f35a4b5bc9f2e6cb9_bad-4_005.jpg`, images: [`${CDN}61c3398f35a4b5bc9f2e6cb9_bad-4_005.jpg`,`${CDN}61c339a112080c695246078b_bad-4_008.jpg`,`${CDN}61c339a19281cd5d0d995142_bad-4_004.jpg`,`${CDN}61c339a171cfe63c151d8b17_bad-4_007.jpg`,`${CDN}61c339a0530232f0b45e5fc3_bad-4_002.jpg`,`${CDN}61c339a094157d1f705cfa3f_bad-4_006.jpg`,`${CDN}61c3399f370af2443e5f8b5f_bad-4_001.jpg`,`${CDN}61c3399c842e5d470a53676d_bad-4_003.jpg`] },
  { id: "bad-05", title: "BAD 05", sub: "KLASSIK UND AVANTGARDE", cat: "Bad", cover: `${CDN}61c33a01c44e29ecf3fd05c6_bad-5_003.jpg`, images: [`${CDN}61c33a17377d1c38f63d0756_bad-5_008.jpg`,`${CDN}61c33a172e88b7587f189545_bad-5_005.jpg`,`${CDN}61c33a17a7fbec4f48df9c4f_bad-5_002.jpg`,`${CDN}61c33a17be9c7a164af5575f_bad-5_004.jpg`,`${CDN}61c33a176c8e4cb303cbc956_bad-5_001.jpg`,`${CDN}61c33a17377d1c403a3d0754_bad-5_006.jpg`,`${CDN}61c33a17814cbd9a442829fd_bad-5_007.jpg`,`${CDN}61c33a01c44e29ecf3fd05c6_bad-5_003.jpg`] },
  { id: "bad-06", title: "BAD 06", sub: "BADEN UNTERM DACH", cat: "Bad", cover: `${CDN}61c33a5e9281cdfb20995462_bad-6_001.jpg`, images: [`${CDN}61c33a5e9281cdfb20995462_bad-6_001.jpg`,`${CDN}61c33a72ac87b66fb374de86_bad-6_007.jpg`,`${CDN}61c33a7190b9b2b6e9e67e5a_bad-6_008.jpg`,`${CDN}61c33a712e88b7cb0818960b_bad-6_004.jpg`,`${CDN}61c33a6fd36e2fda191b93cd_bad-6_002.jpg`,`${CDN}61c33a6f5597e66a637d8e56_bad-6_006.jpg`,`${CDN}61c33a6f5597e6637a7d8e55_bad-6_005.jpg`,`${CDN}61c33a6fac280e0bb0512944_bad-6_003.jpg`] },
  { id: "bad-07", title: "BAD 07", sub: "DAS PANORAMA-BAD", cat: "Bad", cover: `${CDN}61bb867a917fa519c78937b0_c55db59efad994ag1d727bcbe02c4dbf.jpg`, images: [`${CDN}61bb867a917fa519c78937b0_c55db59efad994ag1d727bcbe02c4dbf.jpg`,`${CDN}61c33afe363e4a24b9c7c3d8_bad-7_006.jpg`,`${CDN}61c33afc94108d0acf8d8dde_bad-7_007.jpg`,`${CDN}61c33afb90b9b24fade67ff8_bad-7_005.jpg`,`${CDN}61c33afb3abf43ac7f5e7a78_bad-7_003.jpg`,`${CDN}61c33afbc44e29368afd0ccd_bad-7_008.jpg`,`${CDN}61c33afb86f7c3e720570aff_bad-7_004.jpg`,`${CDN}61c33afbb6c49d6bb0efc799_bad-7_002.jpg`] },
  { id: "bad-08", title: "BAD 08", sub: "DAS MASTERBAD", cat: "Bad", cover: `${CDN}61c33d2ba8be56d50ed97a70_bad-8_001.jpg`, images: [`${CDN}61c33d2ba8be56d50ed97a70_bad-8_001.jpg`,`${CDN}61c33d45cad73d02d36cbb86_bad-8_003.jpg`,`${CDN}61c33d44a478e717225b514d_bad-8_002.jpg`,`${CDN}61c33d443abf435d305e847e_bad-8_004.jpg`] },
  { id: "bad-09", title: "BAD 09", sub: "NOBLESSE OBLIGE", cat: "Bad", cover: `${CDN}61c33d8c9529ef05031047bb_bad-9_001.jpg`, images: [`${CDN}61c33d8c9529ef05031047bb_bad-9_001.jpg`,`${CDN}61c33db1c44e29c53efd2480_bad-9_003.jpg`,`${CDN}61c33db0d36e2f25aa1badf1_bad-9_006.jpg`,`${CDN}61c33db0d5bfd509c899fc35_bad-9_007.jpg`,`${CDN}61c33db0a8be567487d98103_bad-9_004.jpg`,`${CDN}61c33dafa7fbecae53dfb5db_bad-9_002.jpg`,`${CDN}61c33daf94108d31d68da40b_bad-9_005.jpg`,`${CDN}61c33daf71cfe68ce31db035_bad-9_008.jpg`] },
  { id: "bad-10", title: "BAD 10", sub: "EIN STEIN - EIN BILD", cat: "Bad", cover: `${CDN}61c33e04178f7ff82cbe16de_bad-10_004.jpg`, images: [`${CDN}61c33e04178f7ff82cbe16de_bad-10_004.jpg`,`${CDN}61c33e24c44e29405dfd27fe_bad-10_003.jpg`,`${CDN}61c33e24836757e2485416f2_bad-10_002.jpg`,`${CDN}61c33e245597e603fa7dad00_bad-10_008.jpg`,`${CDN}61c33e24178f7f533cbe17c2_bad-10_007.jpg`,`${CDN}61c33e236364ba10e170de79_bad-10_006.jpg`,`${CDN}61c33e2312080c8826461a6a_bad-10_005.jpg`] },
  { id: "bad-11", title: "BAD 11", sub: "BAD TITANIUM", cat: "Bad", cover: `${CDN}61c33e5ceeb07f082df34c0b_bad-11_001.jpg`, images: [`${CDN}61c33e5ceeb07f082df34c0b_bad-11_001.jpg`,`${CDN}61c33e75cad73d603e6cc904_bad-11_004.jpg`,`${CDN}61c33e75ac87b667e4750de1_bad-11_008.jpg`,`${CDN}61c33e75a7fbec7b63dfbceb_bad-11_005.jpg`,`${CDN}61c33e753deb6e7199c30d76_bad-11_006.jpg`,`${CDN}61c33e758c354b376f10051f_bad-11_002.jpg`,`${CDN}61c33e75370af24ea45fb9ad_bad-11_003.jpg`,`${CDN}61c33e749f37a0a3d8475107_bad-11_007.jpg`] },
  { id: "bad-12", title: "BAD 12", sub: "BERGPANORAMA", cat: "Bad", cover: `${CDN}61c33eb886f7c36afc572632_bad-12_001.jpg`, images: [`${CDN}61c33eb886f7c36afc572632_bad-12_001.jpg`,`${CDN}61c33ec9eeb07f5a07f34d03_bad-12_002.jpg`,`${CDN}61c33ec9ac280e01b6514142_bad-12_004.jpg`,`${CDN}61c33ec994108d99d38dae9e_bad-12_008.jpg`,`${CDN}61c33ec986f7c35a99572647_bad-12_005.jpg`,`${CDN}61c33ec9064a661857cd0ea8_bad-12_006.jpg`,`${CDN}61c33ec971cfe6f8b81db643_bad-12_007.jpg`,`${CDN}61c33ec88c354b67ed10083c_bad-12_003.jpg`] },
  { id: "bad-13", title: "BAD 13", sub: "WANNE MIT DACHBLICK", cat: "Bad", cover: `${CDN}61c33f2b178f7f3d55be26c2_bad-13_001.jpg`, images: [`${CDN}61c33f2b178f7f3d55be26c2_bad-13_001.jpg`,`${CDN}61c33f4da8be562a03d986c0_bad-13_007.jpg`,`${CDN}61c33f4c9f7135900f15919e_bad-13_008.jpg`,`${CDN}61c33f4c363e4a2075c7f2c4_bad-13_005.jpg`,`${CDN}61c33f4cc44e29198afd2a32_bad-13_004.jpg`,`${CDN}61c33f4c86f7c3c6bd5727fb_bad-13_006.jpg`,`${CDN}61c33f4c6364ba378770ea64_bad-13_003.jpg`,`${CDN}61c33f4b9f37a054284751c7_bad-13_002.jpg`] },
  { id: "bad-14", title: "BAD 14", sub: "BAD MASKULIN", cat: "Bad", cover: `${CDN}61c33f89de3ee507aaf5d16f_bad-14_001.jpg`, images: [`${CDN}61c33f89de3ee507aaf5d16f_bad-14_001.jpg`,`${CDN}61c33fa8064a667b01cd1a5d_bad-14_008.jpg`,`${CDN}61c33fa794157db88b5d1c68_bad-14_002.jpg`,`${CDN}61c33fa7ac280ee6fe51488b_bad-14_004.jpg`,`${CDN}61c33fa7d36e2f0b511bb6cf_bad-14_005.jpg`,`${CDN}61c33fa75597e6648e7dbbd8_bad-14_006.jpg`,`${CDN}61c33fa6554564bc51ed9819_bad-14_007.jpg`,`${CDN}61c33fa671cfe667f21dc22c_bad-14_003.jpg`] },
  { id: "bad-15", title: "BAD 15", sub: "KINDERBAD IN ROT", cat: "Bad", cover: `${CDN}61c34008d5bfd53f889a0ff4_bad-15_005.jpg`, images: [`${CDN}61c34008d5bfd53f889a0ff4_bad-15_005.jpg`,`${CDN}61c3403aa8be563627d98edf_bad-15_006.jpg`,`${CDN}61c3403ca478e7e4fb5b62a8_bad-15_001.jpg`,`${CDN}61c3403aa8be56cf61d98ede_bad-15_002.jpg`,`${CDN}61c3403a14a0f70ae98aa2f0_bad-15_004.jpg`,`${CDN}61c34039178f7f0ff6be32cb_bad-15_003.jpg`,`${CDN}61c3403786f7c38d22572d09_bad-15_008.jpg`,`${CDN}61c3403786f7c31584572d08_bad-15_007.jpg`] },
  // ── SPA ──
  { id: "spa-01", title: "SPA 01", sub: "WELLNESSPARADIES", cat: "Spa", cover: `${CDN}61c34106842e5d7978539571_spa-1_001.jpg`, images: [`${CDN}61c34106842e5d7978539571_spa-1_001.jpg`] },
  { id: "spa-02", title: "SPA 02", sub: "ATT VON DORNBRACHT", cat: "Spa", cover: `${CDN}61c3417dd36e2fb9261bbc7d_spa-2_002.jpg`, images: [`${CDN}61c3417dd36e2fb9261bbc7d_spa-2_002.jpg`] },
  { id: "spa-03", title: "SPA 03", sub: "WHIRLEN, SCHWITZEN UND MEHR", cat: "Spa", cover: `${CDN}61c341f4370af229eb5fdb59_spa-3_001.jpg`, images: [`${CDN}61c341f4370af229eb5fdb59_spa-3_001.jpg`] },
  { id: "spa-04", title: "SPA 04", sub: "MOSAIK x SAUNA", cat: "Spa", cover: `${CDN}61c342393ca198cfa118812a_spa-4_001.jpg`, images: [`${CDN}61c342393ca198cfa118812a_spa-4_001.jpg`] },
  // ── WC ──
  { id: "wc-01", title: "WC 01", sub: "DUNKLER KIES MIT BASALT", cat: "WC", cover: `${CDN}61c342e49f71350d7215a2b2_wc-1_001.jpg`, images: [`${CDN}61c342e49f71350d7215a2b2_wc-1_001.jpg`] },
  { id: "wc-02", title: "WC 02", sub: "RAPSEL UND ANTONIO LUPI", cat: "WC", cover: `${CDN}61c343218c354b8f2c1030ff_wc-2_001.jpg`, images: [`${CDN}61c343218c354b8f2c1030ff_wc-2_001.jpg`] },
  { id: "wc-03", title: "WC 03", sub: "DAS WC MIT AUSBLICK", cat: "WC", cover: `${CDN}61c34351a7fbec789adfd4e8_wc-3_001.jpg`, images: [`${CDN}61c34351a7fbec789adfd4e8_wc-3_001.jpg`] },
  { id: "wc-04", title: "WC 04", sub: "ONYX", cat: "WC", cover: `${CDN}61c343903abf434e345ea8a6_wc-4_005.jpg`, images: [`${CDN}61c343903abf434e345ea8a6_wc-4_005.jpg`] },
  { id: "wc-05", title: "WC 05", sub: "ROSSO PERSIANO", cat: "WC", cover: `${CDN}61c343ce6364badaa270ff74_wc-5_008.jpg`, images: [`${CDN}61c343ce6364badaa270ff74_wc-5_008.jpg`] },
  { id: "wc-06", title: "WC 06", sub: "WC TIROL", cat: "WC", cover: `${CDN}61c344143977597ee42ae3e9_wc-6_001.jpg`, images: [`${CDN}61c344143977597ee42ae3e9_wc-6_001.jpg`] },
  // ── NATURSTEIN/FLIESE ──
  { id: "nf-01", title: "NATURSTEIN 01", sub: "HANSEATISCHE ELEGANZ", cat: "Naturstein", cover: `${CDN}61c34585c4d070570bf6d6e4_stein-fliese-1_001.jpg`, images: [`${CDN}61c34585c4d070570bf6d6e4_stein-fliese-1_001.jpg`] },
  { id: "nf-02", title: "NATURSTEIN 02", sub: "RÖMISCHER TRAVENTIN", cat: "Naturstein", cover: `${CDN}61c345eaae92120deb9efd0e_stein-fliese-2_001.jpg`, images: [`${CDN}61c345eaae92120deb9efd0e_stein-fliese-2_001.jpg`] },
  { id: "nf-03", title: "NATURSTEIN 03", sub: "SOLNHOFENER WOHLGEFÜHL", cat: "Naturstein", cover: `${CDN}61bb870c14af694f5a425512_79f28a6b183002dg77cd302e87c2252d.jpg`, images: [`${CDN}61bb870c14af694f5a425512_79f28a6b183002dg77cd302e87c2252d.jpg`] },
  { id: "nf-04", title: "NATURSTEIN 04", sub: "MICRO - ITALIEN ZIEHT EIN", cat: "Naturstein", cover: `${CDN}61c3467c94e0583cc7b43f9b_stein-fliese-4_001.jpg`, images: [`${CDN}61c3467c94e0583cc7b43f9b_stein-fliese-4_001.jpg`] },
  { id: "nf-05", title: "NATURSTEIN 05", sub: "FEINSTEINZEUG", cat: "Naturstein", cover: `${CDN}61c346f33deb6e51b9c34440_stein-fliese-5_002.jpg`, images: [`${CDN}61c346f33deb6e51b9c34440_stein-fliese-5_002.jpg`] },
  { id: "nf-06", title: "NATURSTEIN 06", sub: "SCHLICHT ZUM BADETRAUM", cat: "Naturstein", cover: `${CDN}61c34735ac87b649d2754556_stein-fliese-6_001.jpg`, images: [`${CDN}61c34735ac87b649d2754556_stein-fliese-6_001.jpg`] },
  { id: "nf-07", title: "NATURSTEIN 07", sub: "ERLEUCHTET NACH OBEN", cat: "Naturstein", cover: `${CDN}61c3477394e058008ab44ac6_stein-fliese-7_001.jpg`, images: [`${CDN}61c3477394e058008ab44ac6_stein-fliese-7_001.jpg`] },
  { id: "nf-08", title: "NATURSTEIN 08", sub: "MATRIX - AKZENT AM BODEN", cat: "Naturstein", cover: `${CDN}61c3479fde3ee5b65af60b0d_stein-fliese-8_004.jpg`, images: [`${CDN}61c3479fde3ee5b65af60b0d_stein-fliese-8_004.jpg`] },
  { id: "nf-09", title: "NATURSTEIN 09", sub: "AZULEJ UND BULTHAUP", cat: "Naturstein", cover: `${CDN}61c347da6364bafdb57117ad_stein-fliese-9_003.jpg`, images: [`${CDN}61c347da6364bafdb57117ad_stein-fliese-9_003.jpg`] },
  // ── GEWERBE ──
  { id: "gew-01", title: "GEWERBE 01", sub: "HIGHTECH-ARCHITEKTUR", cat: "Gewerbe", cover: `${CDN}61c349d03deb6e07b5c34b22_gewerbe-1_005.jpg`, images: [`${CDN}61c349d03deb6e07b5c34b22_gewerbe-1_005.jpg`] },
  { id: "gew-02", title: "GEWERBE 02", sub: "WOHNEN IN QUALITÄT", cat: "Gewerbe", cover: `${CDN}61c34a11377d1ca9773d5bef_gewerbe-2_001.jpg`, images: [`${CDN}61c34a11377d1ca9773d5bef_gewerbe-2_001.jpg`] },
  { id: "gew-03", title: "GEWERBE 03", sub: "PRODUKTIVITÄT TRIFFT QUALITÄT", cat: "Gewerbe", cover: `${CDN}61c34a25c9dc5e117b52257b_gewerbe-3_001.jpg`, images: [`${CDN}61c34a25c9dc5e117b52257b_gewerbe-3_001.jpg`] },
  // ── GASTRONOMIE ──
  { id: "gas-01", title: "GASTRONOMIE 01", sub: "LE 2 ISOLE", cat: "Gastronomie", cover: `${CDN}61c34a7c842e5d827053d35d_gastronomie-1_001.jpg`, images: [`${CDN}61c34a7c842e5d827053d35d_gastronomie-1_001.jpg`] },
  { id: "gas-02", title: "GASTRONOMIE 02", sub: "DON CAMILLO", cat: "Gastronomie", cover: `${CDN}61c34ab994e0582efbb4630d_gastronomie-2_001.jpg`, images: [`${CDN}61c34ab994e0582efbb4630d_gastronomie-2_001.jpg`] },
];

const CATS = ["Alle", "Bad", "Spa", "WC", "Naturstein", "Gewerbe", "Gastronomie"];

export function Projekte() {
  const [cat, setCat] = useState("Alle");
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [lbIndex, setLbIndex] = useState(0);

  const list = cat === "Alle" ? PROJECTS : PROJECTS.filter((p) => p.cat === cat);
  const activeProject = openIdx !== null ? list[openIdx] : null;

  const nextImg = useCallback(() => {
    if (!activeProject) return;
    setLbIndex((i) => (i + 1) % activeProject.images.length);
  }, [activeProject]);
  const prevImg = useCallback(() => {
    if (!activeProject) return;
    setLbIndex((i) => (i - 1 + activeProject.images.length) % activeProject.images.length);
  }, [activeProject]);

  useEffect(() => {
    if (openIdx === null) return;
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIdx(null);
      if (e.key === "ArrowRight") nextImg();
      if (e.key === "ArrowLeft") prevImg();
    };
    window.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", fn); document.body.style.overflow = ""; };
  }, [openIdx, nextImg, prevImg]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-neutral-950 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Fade>
            <p className="text-neutral-500" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em" }}>PORTFOLIO</p>
            <h1 className="mt-4" style={{ fontFamily: serif, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400, lineHeight: 1.05, fontStyle: "italic" }}>
              Unsere Projekte
            </h1>
            <p className="text-neutral-400 mt-5 max-w-xl" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              Breit gefächert das Portfolio. Vom Gäste-WC bis zum Gewerbebau. Nutzen Sie unsere Kompetenz.
            </p>
          </Fade>
          <Fade delay={0.2}>
            <div className="flex items-center gap-8 mt-12">
              <div>
                <p style={{ fontFamily: serif, fontSize: "2.5rem", fontWeight: 400, fontStyle: "italic" }}>{PROJECTS.length}</p>
                <p className="text-neutral-500 mt-1" style={{ fontSize: "0.75rem", fontWeight: 500 }}>Projekte</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <p style={{ fontFamily: serif, fontSize: "2.5rem", fontWeight: 400, fontStyle: "italic" }}>6</p>
                <p className="text-neutral-500 mt-1" style={{ fontSize: "0.75rem", fontWeight: 500 }}>Kategorien</p>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-16 z-20 bg-white/90 backdrop-blur-xl border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-4 overflow-x-auto">
          <div className="flex gap-1">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className="px-5 py-2.5 whitespace-nowrap transition-all"
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  background: cat === c ? "#171717" : "transparent",
                  color: cat === c ? "#fff" : "#999",
                  letterSpacing: "0.03em",
                }}
              >
                {c}
                {cat === c && (
                  <span className="ml-2 text-white/50" style={{ fontSize: "0.7rem" }}>
                    {(cat === "Alle" ? PROJECTS : PROJECTS.filter(p => p.cat === c)).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-100">
            <AnimatePresence mode="popLayout">
              {list.map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.02 }}
                  className="group cursor-pointer bg-white"
                  onClick={() => { setOpenIdx(i); setLbIndex(0); }}
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={p.cover}
                      alt={p.sub}
                      className="w-full aspect-[16/11] object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end p-5">
                      <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="inline-block px-3 py-1 bg-white/15 backdrop-blur-md text-white/90 mb-2" style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.05em" }}>
                          {p.images.length} {p.images.length === 1 ? "BILD" : "BILDER"}
                        </span>
                        <h3 className="text-white" style={{ fontFamily: serif, fontSize: "1.1rem", fontWeight: 400, fontStyle: "italic" }}>{p.sub}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 py-4 flex items-center justify-between">
                    <div>
                      <p className="text-neutral-400" style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em" }}>{p.title}</p>
                    </div>
                    <span className="text-neutral-400" style={{ fontSize: "0.65rem", fontWeight: 500 }}>{p.cat}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ══════ LIGHTBOX ══════ */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col"
            onClick={() => setOpenIdx(null)}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-5 lg:px-8 py-4 shrink-0" onClick={(e) => e.stopPropagation()}>
              <div>
                <p className="text-white/40" style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em" }}>{activeProject.title}</p>
                <h3 className="text-white mt-0.5" style={{ fontFamily: serif, fontSize: "1rem", fontWeight: 400, fontStyle: "italic" }}>{activeProject.sub}</h3>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-white/40" style={{ fontSize: "0.75rem", fontWeight: 500 }}>
                  {lbIndex + 1} / {activeProject.images.length}
                </span>
                <button onClick={() => setOpenIdx(null)} className="w-10 h-10 bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors">
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 flex items-center justify-center px-16 lg:px-24 relative" onClick={(e) => e.stopPropagation()}>
              {activeProject.images.length > 1 && (
                <>
                  <button
                    className="absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 text-white flex items-center justify-center hover:bg-white/15 transition-colors"
                    onClick={prevImg}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    className="absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 text-white flex items-center justify-center hover:bg-white/15 transition-colors"
                    onClick={nextImg}
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              <AnimatePresence mode="wait">
                <motion.img
                  key={`${activeProject.id}-${lbIndex}`}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35 }}
                  src={activeProject.images[lbIndex]}
                  alt=""
                  className="max-w-full max-h-[78vh] object-contain"
                />
              </AnimatePresence>
            </div>

            {/* Thumbnails */}
            {activeProject.images.length > 1 && (
              <div className="flex justify-center gap-1.5 py-4 px-5 shrink-0 overflow-x-auto" onClick={(e) => e.stopPropagation()}>
                {activeProject.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setLbIndex(i)}
                    className="w-14 h-10 overflow-hidden shrink-0 transition-all"
                    style={{ opacity: i === lbIndex ? 1 : 0.3, outline: i === lbIndex ? "2px solid white" : "none", outlineOffset: "2px" }}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}