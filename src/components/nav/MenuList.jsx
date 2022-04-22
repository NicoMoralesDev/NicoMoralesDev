import MenuItem from "./MenuItem";
import styles from "./menuList.module.scss";
import stylesItem from "./menuItem.module.scss";
import SvgContainer from "../ui/SvgContainer";
import { moonIcon, sunIcon, enFlagIcon, esFlagIcon } from "../../svgElements";
import { useContext, useState } from "react";
import { ThemeContext } from "../../Context";

const menuList = ["Home", "Portfolio", "Skills", "Resources"];

const MenuList = ({ toggleTheme }) => {
    const [isOptionsShowing, setIsOptionsSwhoing] = useState(false);
    const theme = useContext(ThemeContext);
    const isLight = theme == "light" ? styles.light : "";

    const showOptions = (e) => {
        e.preventDefault();
        setIsOptionsSwhoing(!isOptionsShowing);
    };

    const themeIcon = (theme) => {
        if (theme == "light") {
            return (
                <a href="">
                    <SvgContainer>{sunIcon}</SvgContainer>
                </a>
            );
        } else if (theme == "dark") {
            return (
                <a href="">
                    <SvgContainer>{moonIcon}</SvgContainer>
                </a>
            );
        }
    };

    return (
        <menu className={`${styles.menu} ${isLight}`}>
            {menuList.map((item) => {
                return <MenuItem key={item}>{item}</MenuItem>;
            })}
            <li
                onClick={toggleTheme}
                className={`${stylesItem.menuItem} ${
                    theme == "light" ? stylesItem.light : ""
                }`}
            >
                {themeIcon(theme)}
            </li>
            <li className={stylesItem.menuItem}>
                <ul
                    className={`
                        ${styles.selector} ${isOptionsShowing && styles.opened}
                        
                    `}
                >
                    <a href="">
                        <li
                            key={"en"}
                            onClick={showOptions}
                            className={`${styles.selected}`}
                        >
                            <SvgContainer>{enFlagIcon}</SvgContainer>
                        </li>
                    </a>
                    <a href="">
                        <li
                            key={"es"}
                            className={!isOptionsShowing ? styles.hidden : null}
                        >
                            <SvgContainer>{esFlagIcon}</SvgContainer>
                        </li>
                    </a>
                </ul>
            </li>
        </menu>
    );
};

export default MenuList;
