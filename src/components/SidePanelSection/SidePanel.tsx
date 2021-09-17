import React from "react";
import styles from "./SidePanel.module.scss";

// Topics area to the right of the main Discussion component
// Dummy data, totally non-working
function SidePanel() {
  return (
    <div className={styles.sidePanel}>
      <h3 className={styles.selected}>Daily Best</h3>
      <span>All</span>
      <span className={styles.selected}>Skin Concern</span>
      <span>Product Info</span>
      <span>Routine Help</span>
      <span>Ingredients</span>
      <span>Deals & News</span>
      <span>Brand Talk</span>
      <span>Opinion</span>
      <h3>Featured</h3>
      <h3>Skin Concern</h3>
      <h3>Product Info</h3>
      <h3>Routine Help</h3>
      <h3>Ingredients</h3>
      <h3>Deals & Talk</h3>
      <h3>Brand Talk</h3>
      <h3>Opinion</h3>
    </div>
  );
}

export default SidePanel;