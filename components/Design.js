// pages/KalarricPage.js

import React from "react";
import styles from "./Design.module.css";

const KalarricPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.title}>KALARRIC LIFESTYLE</div>
      <div className={`${styles.homegrown} ${styles.tricolorBackground}`}>
        HOMEGROWN INDIAN BRAND
      </div>
      <div className={styles.textContainer}>
        <div className={styles.text}>#beKALARRIC</div>
      </div>
    </div>
  );
};

export default KalarricPage;
