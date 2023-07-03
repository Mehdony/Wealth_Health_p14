import { Link, useLocation } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = () => {
  const location = useLocation();
  return (
    <div className={styles.menu}>
      {location.pathname === "/" ? (
        <Link className={styles.link} to="/employees">
          View Current Employees
        </Link>
      ) : (
        <Link className={styles.link} to="/">
          Go Home
        </Link>
      )}
    </div>
  );
};

export default Menu;
