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
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="Layer_1" />
                        <g id="Layer_2">
                            <g>
                                <g>
                                    <rect
                                        height="76.69"
                                        width="76.69"
                                        x="81.84"
                                        y="81.84"
                                    />
                                </g>
                                <g>
                                    <rect
                                        height="76.69"
                                        width="76.69"
                                        x="217.66"
                                        y="81.84"
                                    />
                                </g>
                                <g>
                                    <rect
                                        height="76.69"
                                        width="76.69"
                                        x="353.47"
                                        y="81.84"
                                    />
                                </g>
                                <g>
                                    <rect
                                        height="76.69"
                                        width="76.69"
                                        x="81.84"
                                        y="217.66"
                                    />
                                </g>
                                <g>
                                    <rect
                                        height="76.69"
                                        width="76.69"
                                        x="217.66"
                                        y="217.66"
                                    />
                                </g>
                                <g>
                                    <rect
                                        height="76.69"
                                        width="76.69"
                                        x="353.47"
                                        y="217.66"
                                    />
                                </g>
                                <g>
                                    <rect
                                        height="76.69"
                                        width="76.69"
                                        x="81.84"
                                        y="353.47"
                                    />
                                </g>
                                <g>
                                    <rect
                                        height="76.69"
                                        width="76.69"
                                        x="217.66"
                                        y="353.47"
                                    />
                                </g>
                                <g>
                                    <rect
                                        height="76.69"
                                        width="76.69"
                                        x="353.47"
                                        y="353.47"
                                    />
                                </g>
                            </g>
                        </g>
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
