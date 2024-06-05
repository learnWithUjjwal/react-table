import Navbar from "../Navbar/Navbar";
import styles from "./appLoader.module.css";

const AppLoader = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.mainWrapper}>{children}</div>
    </>
  );
};
export default AppLoader;
