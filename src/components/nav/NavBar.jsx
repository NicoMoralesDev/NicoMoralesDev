import styles from "./navBar.module.scss";
import MenuList from "./MenuList";
import icon from "../../images/nicrow-icono-flat-300px.png";
import { menuIcon } from "../../svgElements";
import SvgContainer from "../ui/SvgContainer";
import { useContext } from "react";
import { ThemeContext } from "../../Context";

const NavBar = ({ toggleTheme, isNavBarOpen, toggleNavBar }) => {
    const theme = useContext(ThemeContext);
    const isLight = theme == "light" ? styles.light : "";

    return (
        <nav className={`${styles.navContainer} ${isLight}`}>
            <div className={`${styles.navBar} ${isLight}`}>
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
