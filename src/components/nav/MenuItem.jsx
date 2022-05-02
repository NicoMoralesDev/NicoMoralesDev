import { useContext } from "react";
import { ThemeContext } from "../../Context";
import styles from "./menuItem.module.scss";

const MenuItem = ({ children, menuId, toggleNavBar }) => {
    const theme = useContext(ThemeContext);
    const themeStyle = theme == "dark" ? styles.dark : styles.light;

    return (
        <li
            onClick={(e) => {
                e.preventDefault();
                document.getElementById(menuId).scrollIntoView();
                toggleNavBar();
            }}
            className={`${styles.menuItem} ${themeStyle}`}
        >
            <a href={menuId}>{children}</a>
        </li>
    );
};

export default MenuItem;
