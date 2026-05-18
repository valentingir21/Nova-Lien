"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import PawIcon from "./ui/PawIcon";

const PAGES = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Services", href: "/services" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav
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
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          textDecoration: "none",
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: "#8f9e63",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <PawIcon size={24} color="#fbfaf4" rotate={-10} />
        </div>
        <div>
          <div
            style={{
              fontFamily: "var(--font-quicksand), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: 18,
              color: "#1c2018",
              letterSpacing: "0.02em",
              lineHeight: 1,
            }}
          >
            Nova Lien
          </div>
          <div
            style={{
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontSize: 11,
              color: "#7a7f6b",
              letterSpacing: "0.04em",
              marginTop: 3,
            }}
          >
            Comprendre votre chien, renforcer votre lien
          </div>
        </div>
      </Link>

      <div
        style={{
          display: "flex",
          gap: 6,
          alignItems: "center",
          background: "#ffffff",
          padding: 6,
          borderRadius: 999,
          border: "1px solid #e8e4d4",
        }}
      >
        {PAGES.map((p) => {
          const isActive =
            p.href === "/" ? pathname === "/" : pathname.startsWith(p.href);
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

      <Link
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
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: 99,
            background: "#9ac96a",
            boxShadow: "0 0 0 3px rgba(154,201,106,0.25)",
            flexShrink: 0,
          }}
        />
        Premier contact
      </Link>
    </nav>
  );
}
