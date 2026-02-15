import { useContext } from "react";
import { ThemeContext } from "../Context";
import styles from "./footer.module.scss";

const Footer = () => {
    const theme = useContext(ThemeContext);
    const themeStyle = theme === "dark" ? styles.dark : styles.light;

    return (
        <footer className={`${styles.footer} ${themeStyle}`}>
            <div className={styles.footerContent}>
                <p className={styles.copyright}>
                    {"Built by "}
                    <strong>Nico Morales</strong>
                    {" with React & SASS"}
                </p>
                <div className={styles.footerLinks}>
                    <a
                        href="https://github.com/NicoMoralesDev"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    <span className={styles.divider}>{"/"}</span>
                    <a
                        href="https://www.linkedin.com/in/nicolas-morales-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <span className={styles.divider}>{"/"}</span>
                    <a href="mailto:nicomorales.dev@gmail.com">Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
