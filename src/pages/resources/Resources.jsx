import { useContext } from "react";
import { ThemeContext } from "../../Context";

import { useTranslation } from "react-i18next";
import CarouselContainer from "../../components/ui/Carousel/CarouselContainer";
import styles from "./resources.module.scss";
import { getDevelopmentList, getDesignList } from "./resourcesItemsLists";

const Resources = () => {
    const theme = useContext(ThemeContext);
    // const themeStyle = theme == "dark" ? styles.dark : styles.light;
    const { t } = useTranslation();

    const developmentList = getDevelopmentList();
    const designList = getDesignList();
    const htmlAndCssList = null;
    const javascriptList = null;

    return (
        <div className={styles.resourcesContainer}>
            <h2>{t("resources.heading")}</h2>
            {/* Carrousels? */}
            <h3>{t("resources.development")}</h3>
            <p>Documentation and general dev resources</p>
            <CarouselContainer carouselList={developmentList} theme={theme} />
            <h3>{t("resources.design")}</h3>
            <p>Inspiration and color tools</p>
            <CarouselContainer carouselList={designList} theme={theme} />
            <h3>{t("resources.assets")}</h3>
            <p>Images, videos, fonts, icons...</p>
            <h3>{t("resources.html-css")}</h3>
            {/* HTML & CSS useful resources */}
            <h3>JavaScript</h3>
            {/* JS resources */}
            <h3>Java</h3>
            {/* Java resources */}
            <h3>{t("resources.deployment")}</h3>
            {/* ++ */}
            <h3>{t("resources.more")}</h3>
        </div>
    );
};

export default Resources;
