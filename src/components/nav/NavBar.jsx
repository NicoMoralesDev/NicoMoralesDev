import styles from "./navBar.module.scss";
import MenuList from "./MenuList";
import Switch from "../ui/Switch";

const NavBar = () => {
    return (
        <div className={styles.navContainer}>
            <nav className={styles.navBar}>
                <div className={styles.logotipo}>
                    <img
                        className={styles.isotipo}
                        src="src/images/nicrow-icono-flat-300px.png"
                        alt="Niccrow Logo"
                    />
                    <span className={styles.title}>nicomorales.dev</span>
                </div>
                <MenuList />
                {/* <Switch name="theme" />
            <Switch name="lang" /> */}
            </nav>
        </div>
    );
};

export default NavBar;
