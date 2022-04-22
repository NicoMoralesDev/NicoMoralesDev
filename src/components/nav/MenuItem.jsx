import { useContext } from "react";
import { ThemeContext } from "../../Context";
import styles from "./menuItem.module.scss";

const MenuItem = ({ children }) => {
    const theme = useContext(ThemeContext);
    const themeStyle = theme == "dark" ? styles.dark : styles.light;

    return (
        <li
            onClick={(e) => {
                e.preventDefault();
            }}
            className={`${styles.menuItem} ${themeStyle}`}
        >
            <a href={`/${children.toLowerCase()}`}>{children}</a>
        </li>
    );
};

export default MenuItem;
