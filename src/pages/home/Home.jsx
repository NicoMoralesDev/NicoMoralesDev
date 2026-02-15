import styles from "./home.module.scss";
import photo from "../../images/yo_perfil.webp";
import { useContext } from "react";
import { ThemeContext } from "../../Context";
import { useTranslation } from "react-i18next";
import {
    githubIcon,
    gmailIcon,
    linkedinIcon,
} from "../../components/ui/svgElements";

const Home = () => {
    const theme = useContext(ThemeContext);
    const themeStyle = theme == "dark" ? styles.dark : styles.light;
    const { t } = useTranslation();

    return (
        <div className={`${styles.home} ${themeStyle}`}>
            <div className={styles.heroTop}>
                <div className={styles.heroText}>
                    <p className={styles.greeting}>{t("home.text1").trim()}</p>
                    <h1>
                        Nicolas Morales
                    </h1>
                    <p className={styles.role}>{t("home.developer")}</p>
                    <p className={styles.bio}>
                        {t("home.text1")}
                        <strong>Nico</strong>
                        {t("home.text2")}
                    </p>
                    <div className={styles.socialLinks}>
                        <a
                            href="mailto:nicomorales.dev@gmail.com"
                            className={styles.socialLink}
                            aria-label="Email"
                        >
                            {gmailIcon}
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nicolas-morales-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="LinkedIn"
                        >
                            {linkedinIcon}
                        </a>
                        <a
                            href="https://github.com/NicoMoralesDev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="GitHub"
                        >
                            {githubIcon}
                        </a>
                    </div>
                </div>
                <div className={styles.photoContainer}>
                    <img className={styles.photo} src={photo} alt="Photo of Nicolas Morales" />
                    <div className={styles.photoGlow}></div>
                </div>
            </div>
        </div>
    );
};

export default Home;
