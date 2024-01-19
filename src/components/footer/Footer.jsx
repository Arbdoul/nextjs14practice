import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.contianer}>
      <div className={styles.logo}>Laradev</div>
      <div className={styles.text}>
        Lana creative thoughts agency @All rights reserved
      </div>
    </div>
  );
};

export default Footer;
