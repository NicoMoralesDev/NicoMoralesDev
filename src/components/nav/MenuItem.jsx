import { Children } from "react/cjs/react.production.min";
import styles from "./menuItem.module.scss";

const MenuItem = ({ children }) => {
    return <li className={styles.menuItem}>{children}</li>;
};

export default MenuItem;
