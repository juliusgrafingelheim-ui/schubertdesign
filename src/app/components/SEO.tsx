import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  lang?: string;
  keywords?: string;
}

const BASE_URL = "https://schubertdesign.de";

const FAVICON_SVG = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">S</text></svg>`;

export function SEO({
  title,
  description,
  canonical,
  ogImage,
  lang = "de",
  keywords,
}: SEOProps) {
  const fullTitle = title.includes("Schubert Design")
    ? title
    : `${title} | Schubert Design`;
  const url = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  return (
    <Helmet
      htmlAttributes={{ lang }}
    >
      <title>{fullTitle}</title>
      <link rel="icon" type="image/svg+xml" href={FAVICON_SVG} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <meta property="og:site_name" content="Schubert Design" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogImage && <meta property="og:image:width" content="1200" />}
      {ogImage && <meta property="og:image:height" content="630" />}
      {ogImage && <meta property="og:image:alt" content={fullTitle} />}
      <meta property="og:locale" content="de_DE" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      {ogImage && <meta name="twitter:image:alt" content={fullTitle} />}
      <meta name="geo.region" content="DE-BY" />
      <meta name="geo.placename" content="Ingolstadt" />
    </Helmet>
  );
}
