import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import { Button } from "../buttons/Button";

export default function ButtonsSection() {
  return (
    <section className={styles.button__section}>
      <Container>
        <div className={styles.button__box}>
          <Button type="button-1">button</Button>
          <Button type="button-2">button</Button>
        </div>
      </Container>
    </section>
  );
}
