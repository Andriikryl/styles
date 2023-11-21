import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import ButtonsSection from "@/components/buttonsSection/ButtonsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ButtonsSection />
    </main>
  );
}
