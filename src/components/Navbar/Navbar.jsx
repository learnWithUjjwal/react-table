import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <NavLink className={(e) => (e.isActive ? styles.active : "")} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={(e) => (e.isActive ? styles.active : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/react-table"
            className={(e) => (e.isActive ? styles.active : "")}
          >
            React Table
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
