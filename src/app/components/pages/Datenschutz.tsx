import { serif } from "../Layout";
import { Fade } from "../SectionReveal";

export function Datenschutz() {
  const sectionClass = "mb-12";
  const h2Style = { fontFamily: serif, fontSize: "1.3rem", fontWeight: 500 as const };
  const h3Style = { fontFamily: serif, fontSize: "1.05rem", fontWeight: 500 as const };
  const pClass = "text-neutral-600";
  const pStyle = { fontSize: "0.9rem" as const, lineHeight: 1.8 };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-5 lg:px-8 py-24 lg:py-32">
        <Fade>
          <h1
            style={{ fontFamily: serif, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}
            className="mb-6"
          >
            Datenschutzerklärung
          </h1>
          <p className={pClass} style={{ ...pStyle, marginBottom: "3rem" }}>
            Stand: März 2026
          </p>
        </Fade>

        {/* 1. Verantwortlicher */}
        <Fade>
          <div className={sectionClass}>
            <h2 style={h2Style} className="mb-4">1. Verantwortlicher</h2>
            <p className={pClass} style={pStyle}>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className={pClass} style={{ ...pStyle, marginTop: "0.75rem" }}>
              SCHUBERT GmbH &amp; Co. KG<br />
              Schrobenhausener Straße 132<br />
              85051 Ingolstadt<br /><br />
              Telefon: +49 841 97474-0<br />
              E-Mail: <a href="mailto:schubert@schubertdesign.de" className="underline hover:text-neutral-900 transition-colors">schubert@schubertdesign.de</a>
            </p>
          </div>
        </Fade>

        {/* 2. Allgemeines */}
        <Fade>
          <div className={sectionClass}>
            <h2 style={h2Style} className="mb-4">2. Allgemeines zur Datenverarbeitung</h2>
            <p className={pClass} style={pStyle}>
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich.
            </p>
            <p className={pClass} style={{ ...pStyle, marginTop: "0.75rem" }}>
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>
          </div>
        </Fade>

        {/* 3. Hosting */}
        <Fade>
          <div className={sectionClass}>
            <h2 style={h2Style} className="mb-4">3. Hosting</h2>
            <p className={pClass} style={pStyle}>
              Unsere Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
            </p>
            <p className={pClass} style={{ ...pStyle, marginTop: "0.75rem" }}>
              Der Einsatz des Hosters erfolgt im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </div>
        </Fade>

        {/* 4. SSL/TLS */}
        <Fade>
          <div className={sectionClass}>
            <h2 style={h2Style} className="mb-4">4. SSL- bzw. TLS-Verschlüsselung</h2>
            <p className={pClass} style={pStyle}>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </div>
        </Fade>

        {/* 5. Server-Log-Dateien */}
        <Fade>
          <div className={sectionClass}>
            <h2 style={h2Style} className="mb-4">5. Server-Log-Dateien</h2>
            <p className={pClass} style={pStyle}>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className={`${pClass} mt-3 ml-5 list-disc`} style={pStyle}>
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className={pClass} style={{ ...pStyle, marginTop: "0.75rem" }}>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website.
            </p>
          </div>
        </Fade>

        {/* 6. Cookies */}
        <Fade>
          <div className={sectionClass}>
            <h2 style={h2Style} className="mb-4">6. Cookies</h2>
            <p className={pClass} style={pStyle}>
              Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
            </p>
            <p className={pClass} style={{ ...pStyle, marginTop: "0.75rem" }}>
              Einige Cookies sind „Session-Cookies". Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen. Solche Cookies helfen uns, Sie bei Rückkehr auf unserer Website wiederzuerkennen.
            </p>

            <h3 style={h3Style} className="mt-6 mb-3">Technisch notwendige Cookies</h3>
            <p className={pClass} style={pStyle}>
              Diese Cookies sind für den Betrieb der Seite unbedingt notwendig und ermöglichen beispielsweise die Speicherung Ihrer Cookie-Einstellungen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 style={h3Style} className="mt-6 mb-3">Analyse-Cookies</h3>
            <p className={pClass} style={pStyle}>
              Mit Ihrer Einwilligung setzen wir Analyse-Cookies ein, um die Nutzung unserer Website statistisch zu erfassen und auszuwerten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.
            </p>

            <h3 style={h3Style} className="mt-6 mb-3">Marketing-Cookies</h3>
            <p className={pClass} style={pStyle}>
              Marketing-Cookies werden genutzt, um Besuchern relevante Anzeigen und Marketingkampagnen anzuzeigen. Diese Cookies werden nur mit Ihrer ausdrücklichen Einwilligung gesetzt (Art. 6 Abs. 1 lit. a DSGVO).
            </p>
          </div>
        </Fade>

        {/* 7. Kontaktformular */}
        <Fade>
          <div className={sectionClass}>
            <h2 style={h2Style} className="mb-4">7. Kontaktformular &amp; Anfragen</h2>
            <p className={pClass} style={pStyle}>
              Wenn Sie uns per Kontaktformular, E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, E-Mail, Telefonnummer, Nachricht) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
            </p>
            <p className={pClass} style={{ ...pStyle, marginTop: "0.75rem" }}>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf Ihrem Einverständnis (Art. 6 Abs. 1 lit. a DSGVO) und/oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p className={pClass} style={{ ...pStyle, marginTop: "0.75rem" }}>
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
            </p>
          </div>
        </Fade>

        {/* 8. Google Analytics */}
        <Fade>
          <div className={sectionClass}>
            <h2 style={h2Style} className="mb-4">8. Google Analytics</h2>
            <p className={pClass} style={pStyle}>
              Diese Website nutzt – sofern Sie eingewilligt haben – Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className={pClass} style={{ ...pStyle, marginTop: "0.75rem" }}>
              Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der Websitebesucher zu analysieren. Hierbei erhält der Websitebetreiber verschiedene Nutzungsdaten, wie z.B. Seitenaufrufe, Verweildauer, verwendete Betriebssysteme und Herkunft des Nutzers.
            </p>
            <p className={pClass} style={{ ...pStyle, marginTop: "0.75rem" }}>
              Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch die Cookies erzeugten Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Die Nutzung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können die Einwilligung jederzeit über unseren Cookie-Banner widerrufen.
            </p>
          </div>
        </Fade>

        {/* 9. Google Maps */}
        <Fade>
          <div className={sectionClass}>
            <h2 style={h2Style} className="mb-4">9. Google Maps</h2>
            <p className={pClass} style={pStyle}>
              Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
            </p>
            <p className={pClass} style={{ ...pStyle, marginTop: "0.75rem" }}>
              Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
            </p>
          </div>
        </Fade>

        {/* 10. WhatsApp */}
        <Fade>
          <div className={sectionClass}>
            <h2 style={h2Style} className="mb-4">10. WhatsApp-Kontakt</h2>
            <p className={pClass} style={pStyle}>
              Auf unserer Website bieten wir die Möglichkeit, uns über WhatsApp zu kontaktieren. WhatsApp ist ein Dienst der Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. Wenn Sie uns über WhatsApp kontaktieren, werden Ihre Telefonnummer und Ihr Name sowie der Inhalt Ihrer Nachricht an uns übermittelt.
            </p>
            <p className={pClass} style={{ ...pStyle, marginTop: "0.75rem" }}>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch Kontaktaufnahme) und Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen). Wir weisen darauf hin, dass WhatsApp Zugriff auf das Adressbuch des genutzten Endgeräts erhält und die dort gespeicherten Telefonnummern automatisch an die Server von Meta in den USA überträgt.
            </p>
          </div>
        </Fade>

        {/* 11. Social Media */}
        <Fade>
          <div className={sectionClass}>
            <h2 style={h2Style} className="mb-4">11. Social Media</h2>
            <p className={pClass} style={pStyle}>
              Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke, um mit den dort aktiven Kunden und Interessenten kommunizieren und über unsere Leistungen informieren zu können. Beim Aufruf der jeweiligen Netzwerke gelten die Geschäftsbedingungen und die Datenverarbeitungsrichtlinien der jeweiligen Betreiber.
            </p>
            <p className={pClass} style={{ ...pStyle, marginTop: "0.75rem" }}>
              Soweit nicht anders im Rahmen unserer Datenschutzerklärung angegeben, verarbeiten wir die Daten der Nutzer, sofern diese innerhalb der sozialen Netzwerke mit uns kommunizieren, z.B. Beiträge auf unseren Onlinepräsenzen verfassen oder uns Nachrichten zusenden.
            </p>
          </div>
        </Fade>

        {/* 12. Betroffenenrechte */}
        <Fade>
          <div className={sectionClass}>
            <h2 style={h2Style} className="mb-4">12. Ihre Rechte als Betroffener</h2>
            <p className={pClass} style={pStyle}>
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
            </p>
            <ul className={`${pClass} mt-3 ml-5 list-disc`} style={pStyle}>
              <li><strong>Recht auf Auskunft</strong> (Art. 15 DSGVO)</li>
              <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO)</li>
              <li><strong>Recht auf Löschung</strong> (Art. 17 DSGVO)</li>
              <li><strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
              <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
              <li><strong>Widerspruchsrecht</strong> (Art. 21 DSGVO)</li>
              <li><strong>Recht auf Widerruf der Einwilligung</strong> (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
          </div>
        </Fade>

        {/* 13. Beschwerderecht */}
        <Fade>
          <div className={sectionClass}>
            <h2 style={h2Style} className="mb-4">13. Beschwerderecht bei einer Aufsichtsbehörde</h2>
            <p className={pClass} style={pStyle}>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Die für uns zuständige Aufsichtsbehörde ist:
            </p>
            <p className={pClass} style={{ ...pStyle, marginTop: "0.75rem" }}>
              Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
              Promenade 18<br />
              91522 Ansbach<br />
              <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-900 transition-colors">
                www.lda.bayern.de
              </a>
            </p>
          </div>
        </Fade>

        {/* 14. Aktualität */}
        <Fade>
          <div className={sectionClass}>
            <h2 style={h2Style} className="mb-4">14. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p className={pClass} style={pStyle}>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026. Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
