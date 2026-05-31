import Link from "next/link";

const coords = [
  {
    l: "Téléphone",
    v: "06 13 31 21 47",
    href: "tel:+33613312147",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.9 2 2 0 0 1 3.6 2.72h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.3a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17.92z" />
      </svg>
    ),
  },
  {
    l: "Email",
    v: "amandine.novalien@gmail.com",
    href: "mailto:amandine.novalien@gmail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    l: "Instagram",
    v: "@nova.lien_",
    href: "https://www.instagram.com/nova.lien_/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    l: "Facebook",
    v: "Nova Lien",
    href: "https://www.facebook.com/profile.php?id=61574337772678",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

export default function ContactHome() {
  return (
    <section className="contact-section" style={{ padding: "120px 56px", background: "#f1ecdc" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          className="contact-card"
          style={{
            background: "#ffffff",
            borderRadius: 36,
            padding: "56px 48px",
            border: "1px solid #e8e4d4",
            boxShadow: "0 24px 60px rgba(28,32,24,0.06)",
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: 56,
            alignItems: "stretch",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
            <h2
              style={{
                fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(36px, 4vw, 52px)",
                lineHeight: 1,
                color: "#1c2018",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Demande de{" "}
              <span style={{ color: "#6b7a44" }}>premier contact.</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 14,
                color: "#7a7f6b",
                marginTop: 14,
              }}
            >
              Réponse sous 48h.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginTop: 28,
              }}
            >
              {coords.map((x, i) => (
                <a
                  key={i}
                  href={x.href}
                  target={x.href.startsWith("http") ? "_blank" : undefined}
                  rel={x.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 16px",
                    borderRadius: 12,
                    background: "#f7f2e3",
                    textDecoration: "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: 11,
                      color: "#7a7f6b",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {x.l}
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                      fontWeight: 600,
                      fontSize: 14,
                      color: "#1c2018",
                    }}
                  >
                    {x.v}
                    <span style={{ color: "#6b7a44", display: "flex" }}>{x.icon}</span>
                  </span>
                </a>
              ))}
            </div>
            </div>

            <div
              style={{
                marginTop: 28,
                padding: 20,
                background: "#dde2ce",
                borderRadius: 16,
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 14,
                lineHeight: 1.6,
                color: "#3f4a2c",
              }}
            >
              <strong
                style={{
                  fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                  fontSize: 15,
                  color: "#3f4a2c",
                }}
              >
                Merci 🐾
              </strong>
              <br />
              Faire cette démarche, c&apos;est déjà un grand pas — pour vous, pour votre chien, et
              envers vous-même. À très vite.
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20, minHeight: 0, overflow: "hidden" }}>
            <style>{`
              .contact-cta { transition: background 0.2s; }
              .contact-cta:hover { background: #7a8d54 !important; }
              .contact-cta:hover .contact-cta-icon { transform: rotate(-15deg) scale(1.15); }
              .contact-cta-icon { transition: transform 0.25s cubic-bezier(.34,1.56,.64,1); }
            `}</style>
            <Link
              href="/contact"
              className="contact-cta"
              style={{
                background: "#8f9e63",
                color: "#fbfaf4",
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 15,
                padding: "18px 28px",
                borderRadius: 999,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <span>Remplir le formulaire de contact</span>
              <span
                className="contact-cta-icon"
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 99,
                  background: "#fbfaf4",
                  color: "#6b7a44",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                  <path d="m15 5 4 4" />
                </svg>
              </span>
            </Link>

            {/* Map */}
            <div className="contact-map-wrapper" style={{ flex: 1, minHeight: 0, position: "relative" }}>
            <svg
              viewBox="-42 -42 84 84"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: 16, display: "block", border: "1px solid #e8e4d4", background: "#f7f2e3" }}
              aria-label="Zone d'intervention : Dijon et 30 km alentours"
            >
              {/* Background */}
              <rect x="-42" y="-36" width="90" height="74" fill="#f7f2e3" />

              {/* 30km zone */}
              <circle cx="0" cy="0" r="30" fill="none" stroke="#8f9e63" strokeWidth="0.3" strokeDasharray="2 2" strokeOpacity="0.4" />
              <text x="22" y="-22" fontSize="1.9" fill="#8f9e63" fontWeight="600" fontFamily="system-ui, sans-serif">rayon 30 km</text>

              {/* Dijon */}
              <circle cx="0" cy="0" r="3.5" fill="rgba(143,158,99,0.2)" />
              <circle cx="0" cy="0" r="2" fill="#8f9e63" />
              <text x="0" y="-4" textAnchor="middle" fontSize="3.2" fontWeight="700" fill="#1c2018" fontFamily="system-ui, sans-serif">Dijon</text>

              {/* Nord */}
              <circle cx="0" cy="-27" r="1.2" fill="#6b7a44" />
              <text x="1.8" y="-26" fontSize="1.9" fill="#4a4f3f" fontFamily="system-ui, sans-serif">Is-sur-Tille</text>

              <circle cx="1" cy="-11" r="0.8" fill="#6b7a44" />
              <text x="2.5" y="-10.2" fontSize="1.6" fill="#7a7f6b" fontFamily="system-ui, sans-serif">Ahuy</text>

              {/* Nord-Est */}
              <circle cx="14" cy="-17" r="1.2" fill="#6b7a44" />
              <text x="15.5" y="-16.2" fontSize="1.9" fill="#4a4f3f" fontFamily="system-ui, sans-serif">Mirebeau</text>

              <circle cx="5" cy="-6" r="0.8" fill="#6b7a44" />
              <text x="6.5" y="-5.2" fontSize="1.6" fill="#7a7f6b" fontFamily="system-ui, sans-serif">St-Apollinaire</text>

              {/* Est */}
              <circle cx="29" cy="0" r="1.2" fill="#6b7a44" />
              <text x="30.5" y="0.8" fontSize="1.9" fill="#4a4f3f" fontFamily="system-ui, sans-serif">Auxonne</text>

              <circle cx="17" cy="1" r="1.2" fill="#6b7a44" />
              <text x="18.5" y="1.8" fontSize="1.9" fill="#4a4f3f" fontFamily="system-ui, sans-serif">Genlis</text>

              <circle cx="7" cy="2" r="0.8" fill="#6b7a44" />
              <text x="8.5" y="2.8" fontSize="1.6" fill="#7a7f6b" fontFamily="system-ui, sans-serif">Quetigny</text>

              {/* Sud-Est */}
              <circle cx="22" cy="11" r="1.2" fill="#6b7a44" />
              <text x="23.5" y="11.8" fontSize="1.9" fill="#4a4f3f" fontFamily="system-ui, sans-serif">Brazey</text>

              <circle cx="3" cy="5" r="0.8" fill="#6b7a44" />
              <text x="4.5" y="5.8" fontSize="1.6" fill="#7a7f6b" fontFamily="system-ui, sans-serif">Longvic</text>

              {/* Sud */}
              <circle cx="2" cy="14" r="1.2" fill="#6b7a44" />
              <text x="3.5" y="14.8" fontSize="1.9" fill="#4a4f3f" fontFamily="system-ui, sans-serif">Gevrey-Chbtn.</text>

              <circle cx="1" cy="22" r="1.2" fill="#6b7a44" />
              <text x="2.5" y="22.8" fontSize="1.9" fill="#4a4f3f" fontFamily="system-ui, sans-serif">Nuits-St-G.</text>

              <circle cx="0" cy="9" r="0.8" fill="#6b7a44" />
              <text x="-1.5" y="10" textAnchor="end" fontSize="1.6" fill="#7a7f6b" fontFamily="system-ui, sans-serif">Marsannay</text>

              <circle cx="-2" cy="6" r="0.8" fill="#6b7a44" />
              <text x="-3.5" y="7" textAnchor="end" fontSize="1.6" fill="#7a7f6b" fontFamily="system-ui, sans-serif">Chenôve</text>

              {/* Nord-Ouest */}
              <circle cx="-9" cy="-10" r="1.2" fill="#6b7a44" />
              <text x="-10.5" y="-9.2" textAnchor="end" fontSize="1.9" fill="#4a4f3f" fontFamily="system-ui, sans-serif">Norges</text>

              <circle cx="-15" cy="-20" r="1.2" fill="#6b7a44" />
              <text x="-16.5" y="-19.2" textAnchor="end" fontSize="1.9" fill="#4a4f3f" fontFamily="system-ui, sans-serif">Vitteaux</text>

              {/* Ouest */}
              <circle cx="-6" cy="-4" r="0.8" fill="#6b7a44" />
              <text x="-7.5" y="-3.2" textAnchor="end" fontSize="1.6" fill="#7a7f6b" fontFamily="system-ui, sans-serif">Hauteville</text>

              <circle cx="-8" cy="3" r="1.2" fill="#6b7a44" />
              <text x="-9.5" y="3.8" textAnchor="end" fontSize="1.9" fill="#4a4f3f" fontFamily="system-ui, sans-serif">Plombières</text>

              <circle cx="-22" cy="0" r="1.2" fill="#6b7a44" />
              <text x="-23.5" y="0.8" textAnchor="end" fontSize="1.9" fill="#4a4f3f" fontFamily="system-ui, sans-serif">Sombernon</text>

              {/* Sud-Ouest */}
              <circle cx="-18" cy="22" r="1.2" fill="#6b7a44" />
              <text x="-19.5" y="22.8" textAnchor="end" fontSize="1.9" fill="#4a4f3f" fontFamily="system-ui, sans-serif">Bligny-s-O.</text>
            </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
