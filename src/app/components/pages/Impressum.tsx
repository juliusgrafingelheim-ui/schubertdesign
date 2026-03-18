import { serif } from "../Layout";
import { Fade } from "../SectionReveal";

export function Impressum() {
  const sectionClass = "mb-10";
  const h2Style = { fontFamily: serif, fontSize: "1.3rem", fontWeight: 500 as const };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-5 lg:px-8 py-24 lg:py-32">
        <Fade>
          <h1
            style={{ fontFamily: serif, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}
            className="mb-16"
          >
            Impressum
          </h1>
        </Fade>

        <Fade>
          <div className={sectionClass}>
            <h2 style={h2Style} className="mb-3">Angaben gemäß § 5 TMG:</h2>
            <p className="text-neutral-600" style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
              SCHUBERT GmbH &amp; Co. KG<br />
              Schrobenhausener Straße 132<br />
              85051 Ingolstadt
            </p>
          </div>
        </Fade>

        <Fade>
          <div className={sectionClass}>
            <h2 style={h2Style} className="mb-3">Vertreten durch:</h2>
            <p className="text-neutral-600" style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
              Herr Henry Schubert, Geschäftsführer<br />
              Herr Raphael Marc Schubert, Geschäftsführer
            </p>
          </div>
        </Fade>

        <Fade>
          <div className={sectionClass}>
            <h2 style={h2Style} className="mb-3">Kontakt:</h2>
            <p className="text-neutral-600" style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
              Telefon: +49 841 97474-0<br />
              Telefax: +49 841 97474-40<br />
              E-Mail: <a href="mailto:schubert@schubertdesign.de" className="underline hover:text-neutral-900 transition-colors">schubert@schubertdesign.de</a>
            </p>
          </div>
        </Fade>

        <Fade>
          <div className={sectionClass}>
            <h2 style={h2Style} className="mb-3">Registereintrag:</h2>
            <p className="text-neutral-600" style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Ingolstadt<br />
              Registernummer: HRA 2172
            </p>
          </div>
        </Fade>

        <Fade>
          <div className={sectionClass}>
            <h2 style={h2Style} className="mb-3">Umsatzsteuer:</h2>
            <p className="text-neutral-600" style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
              Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
              DE 261337057
            </p>
          </div>
        </Fade>

        <Fade>
          <div className={sectionClass}>
            <h2 style={h2Style} className="mb-3">Streitschlichtung:</h2>
            <p className="text-neutral-600" style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
              Plattform der EU-Kommission zur Online-Streitbeilegung:{" "}
              <a href="http://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-900 transition-colors">
                http://ec.europa.eu/consumers/odr
              </a><br />
              Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
            </p>
          </div>
        </Fade>

        <Fade>
          <div className={sectionClass}>
            <h2 style={h2Style} className="mb-3">Haftung für Inhalte</h2>
            <p className="text-neutral-600" style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="text-neutral-600 mt-3" style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </div>
        </Fade>

        <Fade>
          <div className={sectionClass}>
            <h2 style={h2Style} className="mb-3">Haftung für Links</h2>
            <p className="text-neutral-600" style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p className="text-neutral-600 mt-3" style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </div>
        </Fade>

        <Fade>
          <div className={sectionClass}>
            <h2 style={h2Style} className="mb-3">Urheberrecht</h2>
            <p className="text-neutral-600" style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p className="text-neutral-600 mt-3" style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
