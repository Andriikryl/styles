import React from "react";
import { Container } from "../container/Container";
import styles from "./style.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.hero__box}>
          <h1 className={styles.hero__title}>GOOD MORNING Champ</h1>
          <p className={styles.hero__description}>Its time to make some fun</p>
        </div>
      </Container>
    </section>
  );
}
