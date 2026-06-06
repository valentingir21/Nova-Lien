import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="footer-section" style={{ padding: "80px 56px 32px", background: "#8f9e63", color: "#fbfaf4" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        {/* Slogan */}
        <div style={{ paddingBottom: 56, marginBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div
            className="footer-slogan"
            style={{
              fontFamily: "var(--font-quicksand), system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 56,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              maxWidth: 720,
            }}
          >
            Comprendre votre chien.
            <br />
            <span style={{ color: "#dde2ce" }}>
              Renforcer votre lien.
            </span>
          </div>
        </div>

        {/* Columns */}
        <div
          className="footer-cols"
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
            gap: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <Image
                src="/logo-novalien.png"
                alt="Nova Lien"
                width={52}
                height={52}
                style={{ display: "block", flexShrink: 0 }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: 18,
                  }}
                >
                  Nova Lien
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: 11,
                    opacity: 0.7,
                    marginTop: 2,
                  }}
                >
                  Éducation &amp; comportement canin
                </div>
              </div>
            </div>
            <p
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 13,
                opacity: 0.7,
                lineHeight: 1.6,
                maxWidth: 320,
                margin: 0,
                paddingLeft: 64,
              }}
            >
              Amandine Pinto · Éducatrice canine comportementaliste à Dijon. Méthodes
              positives, respect des émotions, accompagnement personnalisé.
            </p>
          </div>

          {/* Site */}
          <FooterCol title="Site">
            <FooterLink href="/">Accueil</FooterLink>
            <FooterLink href="/a-propos">À propos</FooterLink>
            <FooterLink href="/services">Services & Tarifs</FooterLink>
            <FooterLink href="/faq">FAQ</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterCol>

          {/* Contact */}
          <FooterCol title="Contact">
            <FooterText>06 13 31 21 47</FooterText>
            <FooterText>amandine.novalien@gmail.com</FooterText>
            <FooterText>Dijon · 30 km</FooterText>
          </FooterCol>

          {/* Réseaux */}
          <FooterCol title="Suivre">
            <FooterLink href="https://www.instagram.com/nova.lien_/">
              Instagram · @nova.lien_
            </FooterLink>
            <FooterLink href="https://www.facebook.com/profile.php?id=61574337772678">
              Facebook
            </FooterLink>
          </FooterCol>
        </div>

        {/* Bottom bar */}
        <div
          className="footer-bottom"
          style={{
            marginTop: 48,
            paddingTop: 22,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "var(--font-manrope), system-ui, sans-serif",
            fontSize: 12,
            opacity: 0.6,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div>© 2026 Nova Lien · Amandine Pinto</div>
          <div style={{ display: "flex", gap: 18 }}>
            <Link href="/mentions-legales" style={{ color: "inherit", textDecoration: "none" }}>
              Mentions légales
            </Link>
            <Link href="/confidentialite" style={{ color: "inherit", textDecoration: "none" }}>
              RGPD &amp; cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div
        style={{
          fontFamily: "var(--font-manrope), system-ui, sans-serif",
          fontSize: 11,
          opacity: 0.6,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          fontWeight: 700,
          marginBottom: 14,
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{
        fontFamily: "var(--font-manrope), system-ui, sans-serif",
        fontSize: 14,
        opacity: 0.9,
        color: "#fbfaf4",
        textDecoration: "none",
      }}
    >
      {children}
    </a>
  );
}

function FooterText({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-manrope), system-ui, sans-serif",
        fontSize: 14,
        opacity: 0.9,
      }}
    >
      {children}
    </div>
  );
}
