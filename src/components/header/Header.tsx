import React from "react";
import { Container } from "../container/Container";
import styles from "./style.module.css";
import Link from "next/link";

const Links = [
  {
    name: "home",
    href: "/",
  },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__box}>
          <nav className={styles.nav}>
            <ul role="list" className={styles.list}>
              {Links.map(({ href, name }, index) => {
                return (
                  <li key={index} className={styles.list__item}>
                    <Link href={href} className={styles.item__link}>
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
