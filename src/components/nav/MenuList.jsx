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
} from "../ui/svgElements";
import { useContext, useState } from "react";
import { ThemeContext } from "../../Context";
import { useTranslation } from "react-i18next";
import { getMenuList } from "./menuItemsList";

const MenuList = ({ toggleTheme }) => {
    const [isOptionsShowing, setIsOptionsSwhoing] = useState(false);
    const theme = useContext(ThemeContext);
    const themeStyle = theme == "dark" ? styles.dark : styles.light;
    const { t, i18n } = useTranslation();
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
                    }}
                    className={`${styles.flagItem} ${
                        !isOptionsShowing ? styles.hidden : null
                    }`}
                >
                    <SvgContainer>{getFlag(lang)}</SvgContainer>
                </li>
            );
        });
    };

    const showOptions = (e) => {
        e.preventDefault();
        setIsOptionsSwhoing(!isOptionsShowing);
    };

    return (
        <menu>
            <ul className={`${styles.menu} ${themeStyle}`}>
                {getMenuList().map((item) => {
                    return (
                        <MenuItem key={item.menuId} menuId={item.menuId}>
                            {item.menuName}
                        </MenuItem>
                    );
                })}
                <li
                    onClick={toggleTheme}
                    className={`${stylesItem.menuItem} ${
                        theme == "dark" ? stylesItem.dark : stylesItem.light
                    }`}
                >
                    <SvgContainer>
                        {theme == "dark" ? moonIcon : sunIcon}
                    </SvgContainer>
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
                        {showLangFlags()}
                    </ul>
                </li>
            </ul>
        </menu>
    );
};

export default MenuList;
