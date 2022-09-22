import React from "react";
import CsvReader from "../CsvReader";
import styles from "./TopNav.module.css";

export default function TopNav({ setCsvArray }) {
  return (
    <div className={styles.topNav}>
      <div>
        AI Labs | <strong>Frontend case study</strong>
      </div>
      <CsvReader setCsvArray={setCsvArray} />
    </div>
  );
}
