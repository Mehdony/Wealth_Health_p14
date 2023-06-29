import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import Menu from "../Menu/Menu";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src="/logo.svg" alt="logo" />
          <h1 className={styles.title}> Wealth Health</h1>
        </div>
      </div>
   <Menu />
    </nav>
  );
};

export default Nav;
