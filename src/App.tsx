import React from "react";
import styles from "./App.module.scss";
import { Discussion } from "./components/DiscussionSection/Discussion";
import Header from "./components/Header/Header";
import SidePanel from "./components/SidePanelSection/SidePanel";

function App() {
  return (
    <div className={styles.layout}>
      <header data-testid="header" className={styles.header}>
        <Header />
      </header>
      <main data-testid="main">
        <section className={styles.sidePanel}>
          <SidePanel />
        </section>
        <section>
          <Discussion />
        </section>
      </main>
      <footer data-testid="footer" className={styles.footer}></footer>
    </div>
  );
}

export default App;
