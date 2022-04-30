import { useContext, forwardRef } from "react";
import { ThemeContext } from "../../Context";
import styles from "./menuItem.module.scss";

const MenuItem = ({ children, menuId }) => {
    const theme = useContext(ThemeContext);
    const themeStyle = theme == "dark" ? styles.dark : styles.light;

    return (
        <li
            onClick={(e) => {
                e.preventDefault();
                document.getElementById(menuId).scrollIntoView();
            }}
            className={`${styles.menuItem} ${themeStyle}`}
        >
            <a href={menuId}>{children}</a>
        </li>
    );
};

export default MenuItem;
