"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const PAGES = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Services & Tarifs", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="sitenav"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 56px",
          background: "rgba(251,250,244,0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid #e8e4d4",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", overflow: "hidden", flexShrink: 0, background: "#8f9e63", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image src="/logo-novalien.png" alt="Nova Lien" width={56} height={56} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} priority />
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-quicksand), system-ui, sans-serif", fontWeight: 700, fontSize: 18, color: "#1c2018", letterSpacing: "0.02em", lineHeight: 1 }}>
              Nova Lien
            </div>
            <div className="sitenav-tagline" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 11, color: "#7a7f6b", letterSpacing: "0.04em", marginTop: 3 }}>
              Comprendre votre chien, renforcer votre lien
            </div>
          </div>
        </Link>

        <div className="sitenav-links" style={{ display: "flex", gap: 6, alignItems: "center", background: "#ffffff", padding: 6, borderRadius: 999, border: "1px solid #e8e4d4" }}>
          {PAGES.map((p) => {
            const isActive = p.href === "/" ? pathname === "/" : pathname.startsWith(p.href);
            return (
              <Link
                key={p.label}
                href={p.href}
                style={{
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  color: isActive ? "#1c2018" : "#4a4f3f",
                  textDecoration: "none",
                  padding: "8px 14px",
                  borderRadius: 999,
                  background: isActive ? "#f7f2e3" : "transparent",
                  transition: "background 0.15s",
                }}
              >
                {p.label}
              </Link>
            );
          })}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Link
            className="sitenav-cta"
            href="/contact"
            style={{
              background: "#8f9e63",
              color: "#fbfaf4",
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 14,
              padding: "11px 20px",
              borderRadius: 999,
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: 99, background: "#9ac96a", boxShadow: "0 0 0 3px rgba(154,201,106,0.25)", flexShrink: 0 }} />
            Premier contact
          </Link>
          <button
            className="sitenav-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Ouvrir le menu"
            style={{
              display: "none",
              background: "none",
              border: "1px solid #e8e4d4",
              borderRadius: 12,
              padding: "9px 11px",
              cursor: "pointer",
              color: "#1c2018",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "#fbfaf4",
            zIndex: 200,
            display: "flex",
            flexDirection: "column",
            padding: "18px 24px 40px",
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 28, borderBottom: "1px solid #e8e4d4" }}>
            <Link href="/" onClick={() => setMenuOpen(false)} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              <Image src="/logo-novalien.png" alt="Nova Lien" width={38} height={38} style={{ display: "block" }} />
              <span style={{ fontFamily: "var(--font-quicksand), system-ui, sans-serif", fontWeight: 700, fontSize: 18, color: "#1c2018" }}>Nova Lien</span>
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Fermer"
              style={{ background: "none", border: "1px solid #e8e4d4", borderRadius: 12, padding: "9px 11px", cursor: "pointer", color: "#1c2018", display: "flex" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div style={{ display: "flex", flexDirection: "column", flex: 1, paddingTop: 8 }}>
            {PAGES.map((p) => {
              const isActive = p.href === "/" ? pathname === "/" : pathname.startsWith(p.href);
              return (
                <Link
                  key={p.label}
                  href={p.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 28,
                    color: isActive ? "#6b7a44" : "#1c2018",
                    textDecoration: "none",
                    padding: "16px 0",
                    borderBottom: "1px solid #e8e4d4",
                    display: "block",
                  }}
                >
                  {p.label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              background: "#8f9e63",
              color: "#fbfaf4",
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 16,
              padding: "18px 28px",
              borderRadius: 999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
              marginTop: 24,
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: 99, background: "#9ac96a", flexShrink: 0 }} />
            Premier contact
          </Link>
        </div>
      )}
    </>
  );
}
