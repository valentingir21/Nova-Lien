import type { Metadata } from "next";
import Hero from "@/components/sections/home/Hero";
import Vision from "@/components/sections/home/Vision";
import Meaning from "@/components/sections/home/Meaning";
import Emotional from "@/components/sections/home/Emotional";
import AmandineHome from "@/components/sections/home/AmandineHome";
import Method from "@/components/sections/home/Method";
import ServicesHome from "@/components/sections/home/ServicesHome";
import HowItWorks from "@/components/sections/home/HowItWorks";
import Benefits from "@/components/sections/home/Benefits";
import FAQHome from "@/components/sections/home/FAQHome";
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
      <Meaning />
      <Emotional />
      <AmandineHome />
      <Method />
      <ServicesHome />
      <HowItWorks />
      <Benefits />
      <FAQHome />
      <ContactHome />
    </>
  );
}
