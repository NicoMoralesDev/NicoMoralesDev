import styles from "./home.module.scss";
import photo from "../../images/yo_perfil.webp";
import { useContext } from "react";
import { ThemeContext } from "../../Context";
import { useTranslation } from "react-i18next";
import SvgContainer from "../../components/ui/SvgContainer";
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
            <h1>
                Nicolas Morales
                <br />
                {t("home.developer")}
            </h1>
            <img className={styles.photo} src={photo} alt="Photo of Nicolas" />
            <h2>{t("home.aboutMe")}</h2>
            <p className={styles.whoiam}>
                {t("home.text1")}
                <strong>Nico</strong>
                {t("home.text2")}
            </p>
            <div className={styles.contactMe}>
                <span className={styles.contactText}>
                    {t("home.contactMe")}
                    {": "}
                </span>
                <div className={styles.contactIconsContainer}>
                    <SvgContainer>
                        <a href="mailto:nicomorales.dev@gmail.com">
                            {gmailIcon}
                        </a>
                    </SvgContainer>
                    <SvgContainer>
                        <a
                            href="https://www.linkedin.com/in/nicolas-morales-dev"
                            target="_blank"
                        >
                            {linkedinIcon}
                        </a>
                    </SvgContainer>
                    <SvgContainer>
                        <a
                            href="https://github.com/NicoMoralesDev"
                            target="_blank"
                        >
                            {githubIcon}
                        </a>
                    </SvgContainer>
                </div>
            </div>
        </div>
    );
};

export default Home;
