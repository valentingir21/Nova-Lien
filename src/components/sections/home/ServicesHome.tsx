import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";

const services = [
  {
    t: "Éducation chiot",
    d: "Vous venez d'accueillir un chiot ? Pose des bases solides : propreté, rappel, sociabilisation, morsures, premières règles de vie.",
    tag: "Période clé",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6b7a44" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5" />
        <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.96-1.45-2.344-2.5" />
        <path d="M8 14v.5" /><path d="M16 14v.5" />
        <path d="M11.25 16.25h1.5L12 17l-.75-.75z" />
        <path d="M4.42 11.247A13.15 13.15 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306" />
      </svg>
    ),
  },
  {
    t: "Conseils pré-adoption",
    d: "Choisir le profil de chien adapté à votre mode de vie, préparer votre foyer, anticiper les premières semaines.",
    tag: "Avant l'adoption",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6b7a44" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
        <path d="M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="#6b7a44" />
      </svg>
    ),
  },
  {
    t: "Rééducation comportementale",
    d: "Réactivité, agressivité, peurs, destructions, aboiements, fugues, anxiété de séparation, protection de ressources.",
    tag: "Réeducation",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6b7a44" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
      </svg>
    ),
  },
  {
    t: "Renforcement du lien humain-chien",
    d: "Pour les duos qui veulent retrouver une relation sereine, équilibrée, épanouissante — dans les deux sens.",
    tag: "Reconnexion",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6b7a44" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function ServicesHome() {
  return (
    <section className="services-section" style={{ padding: "80px 56px", background: "#fbfaf4" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 32,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <Eyebrow>Mes prestations</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(32px, 3.2vw, 44px)",
                lineHeight: 1.05,
                color: "#1c2018",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Quatre façons de
              <br />
              <span style={{ color: "#6b7a44" }}>cheminer ensemble.</span>
            </h2>
          </div>
          <Link
            href="/services"
            style={{
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 14,
              color: "#1c2018",
              borderBottom: "2px solid #1c2018",
              paddingBottom: 3,
              textDecoration: "none",
            }}
          >
            Voir tous les tarifs & forfaits →
          </Link>
        </div>

        <div className="services-cards" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {services.map((s, i) => (
            <article
              key={i}
              style={{
                background: "#ffffff",
                borderRadius: 20,
                border: "1px solid #e8e4d4",
                padding: "18px 20px",
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: 18,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 18,
                  background: "#dde2ce",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {s.icon}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span
                  style={{
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: 10,
                    color: "#4a4f3f",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    background: "#f7f2e3",
                    padding: "3px 10px",
                    borderRadius: 999,
                    border: "1px solid #e8e4d4",
                    alignSelf: "flex-start",
                  }}
                >
                  {s.tag}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 17,
                    margin: 0,
                    color: "#1c2018",
                    lineHeight: 1.15,
                  }}
                >
                  {s.t}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: 12,
                    lineHeight: 1.5,
                    color: "#4a4f3f",
                    margin: 0,
                  }}
                >
                  {s.d}
                </p>
                <Link
                  href="/services"
                  style={{
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 12,
                    color: "#6b7a44",
                    borderBottom: "1px solid #6b7a44",
                    paddingBottom: 1,
                    textDecoration: "none",
                    alignSelf: "flex-start",
                  }}
                >
                  En savoir plus →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div
          className="services-cta-banner"
          style={{
            marginTop: 24,
            background: "#8f9e63",
            color: "#fbfaf4",
            borderRadius: 22,
            padding: "24px 32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontSize: 15,
              lineHeight: 1.5,
              maxWidth: 720,
            }}
          >
            <strong
              style={{
                fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                fontSize: 17,
              }}
            >
              Pas sûr·e de la prestation dont vous avez besoin&nbsp;?
            </strong>
            <br />
            Pas d&apos;inquiétude — c&apos;est exactement le rôle du{" "}
            <strong>bilan comportemental</strong>. On en parle ensemble.
          </div>
          <Link
            href="/contact"
            style={{
              background: "#fbfaf4",
              color: "#1c2018",
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 14,
              padding: "12px 22px",
              borderRadius: 999,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Me contacter →
          </Link>
        </div>
      </div>
    </section>
  );
}
