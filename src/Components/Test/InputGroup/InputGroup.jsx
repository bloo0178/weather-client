import React from "react";
import styles from "./InputGroup.module.css";

export function InputGroup(props) {
  const { placeholder, submit } = props;
  return (
    <div className={styles.InputAddOn}>
      <input
        className={styles.InputAddOnField}
        type="text"
        placeholder={placeholder}
      />
      <button className={styles.InputAddOnItem} onClick={submit}>
        Submit
      </button>
    </div>
  );
}
