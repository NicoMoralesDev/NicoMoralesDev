import styles from "./navBar.module.scss";
import MenuList from "./MenuList";
import Switch from "../ui/Switch";

const NavBar = ({ isNavBarOpen, toggleNavBar }) => {
    return (
        <nav className={styles.navContainer}>
            <div className={styles.navBar}>
                <div onClick={toggleNavBar} className={styles.menuIcon}>
                    <svg
                        width="512px"
                        height="512px"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu Icon</title>
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg>
                </div>

                <div className={styles.logotipo}>
                    <img
                        className={styles.isotipo}
                        src="src/images/nicrow-icono-flat-300px.png"
                        alt="Niccrow Logo"
                    />
                    <span className={styles.title}>nicomorales.dev</span>
                </div>
                {isNavBarOpen ? <MenuList /> : null}
                {/* <Switch name="theme" />
            <Switch name="lang" /> */}
            </div>
        </nav>
    );
};

export default NavBar;
