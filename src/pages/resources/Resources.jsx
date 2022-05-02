import { useContext } from "react";
import { ThemeContext } from "../../Context";

import { useTranslation } from "react-i18next";
import CarouselContainer from "../../components/ui/Carousel/CarouselContainer";
import styles from "./resources.module.scss";
import {
    getDevelopmentList,
    getDesignList,
    getAssetsList,
    getHtmlAndCssList,
    getJavascriptList,
    getJavaList,
    getDeploymentList,
    getExtrasList,
} from "./resourcesItemsLists";

const Resources = () => {
    const theme = useContext(ThemeContext);
    // const themeStyle = theme == "dark" ? styles.dark : styles.light;
    const { t } = useTranslation();

    const developmentList = getDevelopmentList();
    const designList = getDesignList();
    const assetsList = getAssetsList();
    const htmlAndCssList = getHtmlAndCssList();
    const javascriptList = getJavascriptList();
    const javaList = getJavaList();
    const deploymentList = getDeploymentList();
    const extrasList = getExtrasList();

    return (
        <div className={styles.resourcesContainer}>
            <h2>{t("resources.heading")}</h2>

            <h3 className={styles.categoryTitle}>
                {t("resources.development")}
            </h3>
            <p className={styles.categoryDesc}>
                {t("resources.developmentDesc")}
            </p>
            <CarouselContainer carouselList={developmentList} theme={theme} />

            <h3 className={styles.categoryTitle}>{t("resources.design")}</h3>
            <p className={styles.categoryDesc}>{t("resources.designDesc")}</p>
            <CarouselContainer carouselList={designList} theme={theme} />

            <h3 className={styles.categoryTitle}>{t("resources.assets")}</h3>
            <p className={styles.categoryDesc}>{t("resources.assetsDesc")}</p>
            <CarouselContainer carouselList={assetsList} theme={theme} />

            <h3 className={styles.categoryTitle}>{t("resources.html-css")}</h3>
            <p className={styles.categoryDesc}>{t("resources.html-cssDesc")}</p>
            <CarouselContainer carouselList={htmlAndCssList} theme={theme} />

            <h3 className={styles.categoryTitle}>
                {t("resources.javascript")}
            </h3>
            <p className={styles.categoryDesc}>
                {t("resources.javascriptDesc")}
            </p>
            <CarouselContainer carouselList={javascriptList} theme={theme} />

            {/* <h3 className={styles.categoryTitle}>Java</h3>
            <p className={styles.categoryDesc}>Java resources</p>
            <CarouselContainer carouselList={javaList} theme={theme} /> */}

            <h3 className={styles.categoryTitle}>
                {t("resources.deployment")}
            </h3>
            <p className={styles.categoryDesc}>
                {t("resources.deploymentDesc")}
            </p>
            <CarouselContainer carouselList={deploymentList} theme={theme} />

            <h3 className={styles.categoryTitle}>{t("resources.extras")}</h3>
            <p className={styles.categoryDesc}>{t("resources.extrasDesc")}</p>
            <CarouselContainer carouselList={extrasList} theme={theme} />
        </div>
    );
};

export default Resources;
