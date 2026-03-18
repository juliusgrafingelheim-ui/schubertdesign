import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/Home";
import { Leistungen } from "./components/pages/Leistungen";
import { Projekte } from "./components/pages/Projekte";
import { Showroom } from "./components/pages/Showroom";
import { Marken } from "./components/pages/Marken";
import { Unternehmen } from "./components/pages/Unternehmen";
import { Kontakt } from "./components/pages/Kontakt";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "leistungen", Component: Leistungen },
      { path: "projekte", Component: Projekte },
      { path: "showroom", Component: Showroom },
      { path: "marken", Component: Marken },
      { path: "unternehmen", Component: Unternehmen },
      { path: "kontakt", Component: Kontakt },
      { path: "*", Component: Home },
    ],
  },
]);
