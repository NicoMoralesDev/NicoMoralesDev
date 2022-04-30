import styles from "./home.module.scss";
import Button from "../../components/ui/Button";
import photo from "../../images/yo_perfil.webp";
import { useContext } from "react";
import { ThemeContext } from "../../Context";
import { useTranslation } from "react-i18next";

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
            <img src={photo} alt="Photo of Nicolas" />
            <h2>{t("home.aboutMe")}</h2>
            <p className="whoiam">
                {t("home.text1")}
                <strong>Nico</strong>
                {t("home.text2")}
            </p>
            <Button text={t("home.button")} />
        </div>
    );
};

export default Home;
