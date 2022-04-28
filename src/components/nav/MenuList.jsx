import MenuItem from "./MenuItem";
import styles from "./menuList.module.scss";
import stylesItem from "./menuItem.module.scss";
import SvgContainer from "../ui/SvgContainer";
import {
    moonIcon,
    sunIcon,
    enFlagIcon,
    esFlagIcon,
    langIcon,
} from "../../svgElements";
import { useContext, useState } from "react";
import { ThemeContext } from "../../Context";
import { useTranslation } from "react-i18next";

const MenuList = ({ toggleTheme }) => {
    const [isOptionsShowing, setIsOptionsSwhoing] = useState(false);
    const theme = useContext(ThemeContext);
    const themeStyle = theme == "dark" ? styles.dark : styles.light;
    const { t, i18n } = useTranslation();

    const menuList = [
        t("nav.home"),
        t("nav.portfolio"),
        t("nav.skills"),
        t("nav.resources"),
    ];
    const langs = ["en", "es"];

    const getFlag = (lang) => {
        if (lang == "en") {
            return enFlagIcon;
        } else if (lang == "es") {
            return esFlagIcon;
        }
    };

    const showLangFlags = () => {
        return langs.map((lang, index) => {
            return (
                <li
                    key={index + lang}
                    onClick={(e) => {
                        e.preventDefault();
                        if (i18n.resolvedLanguage != lang) {
                            i18n.changeLanguage(lang);
                        }
                        setIsOptionsSwhoing(!isOptionsShowing);
                        // console.log(i18n.languages);
                    }}
                    className={`${styles.flagItem} ${
                        !isOptionsShowing ? styles.hidden : null
                    }`}
                >
                    <a href={lang}>
                        <SvgContainer>{getFlag(lang)}</SvgContainer>
                    </a>
                </li>
            );
        });
    };

    const showOptions = (e) => {
        e.preventDefault();
        setIsOptionsSwhoing(!isOptionsShowing);
    };

    const themeIcon = (theme) => {
        if (theme == "light") {
            return (
                <a href="dark">
                    <SvgContainer>{sunIcon}</SvgContainer>
                </a>
            );
        } else if (theme == "dark") {
            return (
                <a href="light">
                    <SvgContainer>{moonIcon}</SvgContainer>
                </a>
            );
        }
    };

    return (
        <menu className={`${styles.menu} ${themeStyle}`}>
            {menuList.map((item) => {
                return <MenuItem key={item}>{item}</MenuItem>;
            })}
            <li
                onClick={toggleTheme}
                className={`${stylesItem.menuItem} ${
                    theme == "dark" ? stylesItem.dark : stylesItem.light
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
                    <li
                        key="selector"
                        className={styles.selectorItem}
                        onClick={showOptions}
                    >
                        {langIcon}
                    </li>
                    {/* <li
                        key={"en"}
                        onClick={showOptions}
                        className={`${styles.selected}`}
                    >
                        <a href="en">
                            <SvgContainer>{enFlagIcon}</SvgContainer>
                        </a>
                    </li>
                    <li
                        key={"es"}
                        className={!isOptionsShowing ? styles.hidden : null}
                    >
                        <a href="es">
                            <SvgContainer>{esFlagIcon}</SvgContainer>
                        </a>
                    </li> */}
                    {showLangFlags()}
                </ul>
            </li>
        </menu>
    );
};

export default MenuList;
