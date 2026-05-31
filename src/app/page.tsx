import type { Metadata } from "next";
import Hero from "@/components/sections/home/Hero";
import Vision from "@/components/sections/home/Vision";
import Emotional from "@/components/sections/home/Emotional";
import Method from "@/components/sections/home/Method";
import ServicesHome from "@/components/sections/home/ServicesHome";
import ContactHome from "@/components/sections/home/ContactHome";

export const metadata: Metadata = {
  title: "Nova Lien — Éducatrice canine comportementaliste à Dijon",
  description:
    "Comprendre votre chien, renforcer votre lien. Amandine Pinto, éducatrice canine comportementaliste à Dijon. Méthodes positives, accompagnement personnalisé.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Vision />
      <Emotional />
      <Method />
      <ServicesHome />
      <ContactHome />
    </>
  );
}
