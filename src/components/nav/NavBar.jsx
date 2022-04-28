import styles from "./navBar.module.scss";
import MenuList from "./MenuList";
import icon from "../../images/nicrow-icono-flat-300px.webp";
import { menuIcon } from "../../svgElements";
import SvgContainer from "../ui/SvgContainer";
import { useContext } from "react";
import { ThemeContext } from "../../Context";

const NavBar = ({ toggleTheme, isNavBarOpen, toggleNavBar }) => {
    const theme = useContext(ThemeContext);
    const themeStyle = theme == "dark" ? styles.dark : styles.light;

    return (
        <nav className={`${styles.navContainer} ${themeStyle}`}>
            <div className={`${styles.navBar} ${themeStyle}`}>
                <div onClick={toggleNavBar} className={styles.menuIcon}>
                    <SvgContainer>{menuIcon}</SvgContainer>
                </div>

                <div className={styles.logotipo}>
                    <img
                        className={styles.isotipo}
                        src={icon}
                        alt="Niccrow Logo"
                    />
                    <span className={styles.title}>nicomorales.dev</span>
                </div>
                {isNavBarOpen ? <MenuList toggleTheme={toggleTheme} /> : null}
            </div>
        </nav>
    );
};

export default NavBar;
