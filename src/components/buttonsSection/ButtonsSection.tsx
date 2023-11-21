"use client";
import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import { Button } from "../buttons/Button";

const ButtonList = [
  { id: "1", component: <Button type="button-1">button-1</Button> },
  { id: "2", component: <Button type="button-2">button-2</Button> },
  { id: "3", component: <Button type="button-3">button-3</Button> },
  { id: "4", component: <Button type="button-4">button-4</Button> },
];

export default function ButtonsSection() {
  return (
    <section className={styles.button__section}>
      <Container>
        <ul className={styles.button__box} role="list">
          {ButtonList.map((button, index) => {
            return (
              <li className={styles.button__item} key={index}>
                {button.component}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
