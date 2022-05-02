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

            <h3>{t("resources.development")}</h3>
            <p>{t("resources.developmentDesc")}</p>
            <CarouselContainer carouselList={developmentList} theme={theme} />

            <h3>{t("resources.design")}</h3>
            <p>{t("resources.designDesc")}</p>
            <CarouselContainer carouselList={designList} theme={theme} />

            <h3>{t("resources.assets")}</h3>
            <p>{t("resources.assetsDesc")}</p>
            <CarouselContainer carouselList={assetsList} theme={theme} />

            <h3>{t("resources.html-css")}</h3>
            <p>{t("resources.html-cssDesc")}</p>
            <CarouselContainer carouselList={htmlAndCssList} theme={theme} />

            <h3>{t("resources.javascript")}</h3>
            <p>{t("resources.javascriptDesc")}</p>
            <CarouselContainer carouselList={javascriptList} theme={theme} />

            {/* <h3>Java</h3>
            <p>Java resources</p>
            <CarouselContainer carouselList={javaList} theme={theme} /> */}

            <h3>{t("resources.deployment")}</h3>
            <p>{t("resources.deploymentDesc")}</p>
            <CarouselContainer carouselList={deploymentList} theme={theme} />

            <h3>{t("resources.extras")}</h3>
            <p>{t("resources.extrasDesc")}</p>
            <CarouselContainer carouselList={extrasList} theme={theme} />
        </div>
    );
};

export default Resources;
