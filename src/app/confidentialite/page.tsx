import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Nova Lien",
  description: "Politique de confidentialité et traitement des données personnelles — Nova Lien.",
  robots: { index: false },
};

const sectionStyle = { marginBottom: 40 };

const h2Style = {
  fontFamily: "var(--font-quicksand), system-ui, sans-serif",
  fontWeight: 600,
  fontSize: 22,
  color: "#1c2018",
  margin: "0 0 12px",
};

const pStyle = {
  fontFamily: "var(--font-manrope), system-ui, sans-serif",
  fontSize: 15,
  lineHeight: 1.75,
  color: "#4a4f3f",
  margin: "0 0 8px",
};

const liStyle = {
  fontFamily: "var(--font-manrope), system-ui, sans-serif",
  fontSize: 15,
  lineHeight: 1.75,
  color: "#4a4f3f",
  marginBottom: 4,
};

export default function ConfidentialitePage() {
  return (
    <section style={{ padding: "80px 56px 120px", background: "#fbfaf4" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div
          style={{
            display: "inline-flex",
            gap: 10,
            alignItems: "center",
            padding: "8px 16px",
            borderRadius: 999,
            background: "#dde2ce",
            fontFamily: "var(--font-manrope), system-ui, sans-serif",
            fontSize: 13,
            fontWeight: 500,
            color: "#4a4f3f",
            marginBottom: 24,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: 99, background: "#8f9e63", flexShrink: 0 }} />
          Données personnelles
        </div>
        <h1
          style={{
            fontFamily: "var(--font-quicksand), system-ui, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(36px, 5vw, 56px)",
            lineHeight: 1.05,
            color: "#1c2018",
            margin: "0 0 48px",
            letterSpacing: "-0.02em",
          }}
        >
          Politique de
          <br />
          <span style={{ color: "#6b7a44", fontFamily: "var(--font-lora), Georgia, serif", fontStyle: "italic", fontWeight: 500 }}>
            confidentialité
          </span>
        </h1>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Responsable du traitement</h2>
          <p style={pStyle}>
            Amandine Pinto — Nova Lien, Dijon (21000), France.<br />
            Contact : <a href="mailto:amandine.novalien@gmail.com" style={{ color: "#6b7a44" }}>amandine.novalien@gmail.com</a>
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Données collectées</h2>
          <p style={pStyle}>Lors de l&apos;utilisation du formulaire de contact, nous collectons :</p>
          <ul style={{ margin: "8px 0 0", paddingLeft: 20 }}>
            <li style={liStyle}>Nom et prénom</li>
            <li style={liStyle}>Numéro de téléphone</li>
            <li style={liStyle}>Adresse email</li>
            <li style={liStyle}>Commune de résidence</li>
            <li style={liStyle}>Informations sur votre chien (nom, race, âge, sexe, stérilisation)</li>
            <li style={liStyle}>Description de votre situation et besoins</li>
            <li style={liStyle}>Disponibilités souhaitées</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Finalité du traitement</h2>
          <p style={pStyle}>
            Les données collectées sont utilisées exclusivement dans le cadre de la gestion des
            demandes de contact et de l&apos;établissement d&apos;un devis ou d&apos;un suivi
            éducatif canin. Elles ne font l&apos;objet d&apos;aucune exploitation commerciale.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Base légale</h2>
          <p style={pStyle}>
            Le traitement est fondé sur le consentement explicite de la personne concernée
            (article 6.1.a du RGPD), exprimé via la case à cocher du formulaire.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Durée de conservation</h2>
          <p style={pStyle}>
            Les données sont conservées pendant la durée de la relation commerciale ou professionnelle,
            puis supprimées dans un délai maximal de 3 ans après le dernier contact.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Destinataires des données</h2>
          <p style={pStyle}>
            Les données sont transmises uniquement à Amandine Pinto — Nova Lien.
            Elles ne sont pas cédées, vendues ou partagées avec des tiers, à l&apos;exception
            des prestataires techniques strictement nécessaires (hébergeur Vercel, service d&apos;envoi
            d&apos;emails Resend), dans le respect du RGPD.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Vos droits</h2>
          <p style={pStyle}>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul style={{ margin: "8px 0 0", paddingLeft: 20 }}>
            <li style={liStyle}>Droit d&apos;accès à vos données</li>
            <li style={liStyle}>Droit de rectification</li>
            <li style={liStyle}>Droit à l&apos;effacement (« droit à l&apos;oubli »)</li>
            <li style={liStyle}>Droit à la portabilité</li>
            <li style={liStyle}>Droit d&apos;opposition au traitement</li>
            <li style={liStyle}>Droit de retirer votre consentement à tout moment</li>
          </ul>
          <p style={{ ...pStyle, marginTop: 12 }}>
            Pour exercer ces droits, contactez-nous à{" "}
            <a href="mailto:amandine.novalien@gmail.com" style={{ color: "#6b7a44" }}>
              amandine.novalien@gmail.com
            </a>
            . En cas de litige, vous pouvez saisir la{" "}
            <a href="https://www.cnil.fr" style={{ color: "#6b7a44" }} target="_blank" rel="noopener noreferrer">
              CNIL
            </a>
            .
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Cookies</h2>
          <p style={pStyle}>
            Ce site n&apos;utilise pas de cookies de traçage ou publicitaires.
            Seuls des cookies techniques strictement nécessaires au fonctionnement du site
            peuvent être déposés.
          </p>
        </div>

        <p
          style={{
            ...pStyle,
            color: "#7a7f6b",
            fontSize: 13,
            marginTop: 32,
            borderTop: "1px solid #e8e4d4",
            paddingTop: 20,
          }}
        >
          Dernière mise à jour : mai 2025
        </p>
      </div>
    </section>
  );
}
