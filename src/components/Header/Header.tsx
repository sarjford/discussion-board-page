import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/icon-picky@3x.png";
import search from "../../assets/search@3x.png";

// App header at the top of the page; no functionality for
// interactivity
function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="Picky Logo" className={styles.logo} />
      <div className={styles.headerRight}>
        <nav>
          <div>
            <a href="#">Products</a>
          </div>
          <div className={styles.selected}>
            <a href="#">Discussions</a>
          </div>
          <div>
            <a href="#">Blog</a>
          </div>
          <div>
            <a href="#">Our Story</a>
          </div>
        </nav>
        <div className={styles.searchWrapper}>
          <img src={search} alt="Search Icon" className={styles.search} />
        </div>
      </div>
    </div>
  );
}

export default Header;
