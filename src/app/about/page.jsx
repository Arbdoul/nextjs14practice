import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h2 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better
        </h2>
        <p className={styles.desc}>
          We created digital ideas that are bigger, bolder, braver and better.
          We believe in good ideas flexibility and precision We're world's Our
          Special Team best consulting and finance solution provider.Wide range
          of web and software development services
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year or experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year or experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year or experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
