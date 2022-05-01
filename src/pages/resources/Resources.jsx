import { useContext } from "react";
import { ThemeContext } from "../../Context";

import { useTranslation } from "react-i18next";
import CarouselContainer from "../../components/ui/Carousel/CarouselContainer";
import styles from "./resources.module.scss";

const Resources = () => {
    const theme = useContext(ThemeContext);
    // const themeStyle = theme == "dark" ? styles.dark : styles.light;
    const { t } = useTranslation();

    const carouselList = [
        {
            logo: "https://devdocs.io/images/webapp-icon-192.png",
            link: "https://devdocs.io/",
            title: "DevDocs API Documentation",
            description:
                "Fast, offline, and free documentation browser for developers. Search 100+ docs in one web app: HTML, CSS, JavaScript, PHP, Ruby, Python, Go, C, C++…",
        },
        {
            logo: "https://sdkman.io/assets//img/logo.png",
            title: "Home - SDKMAN! the Software Development Kit Manager",
            link: "https://sdkman.io/",
            description:
                "SDKMAN! is a tool for managing parallel versions of multiple Software Development Kits on most Unix based systems.",
        },
        {
            logo: "https://code.visualstudio.com/favicon.ico",
            title: "Visual Studio Code - Code Editing. Redefined",
            link: "https://code.visualstudio.com/",
            description:
                "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications. Visual Studio Code is free and available on your favorite platform - Linux, macOS, and Windows.",
        },
    ];

    return (
        <>
            <h2>{t("resources.heading")}</h2>
            {/* Carrousels? */}
            <h3>{t("resources.development")}</h3>
            <CarouselContainer carouselList={carouselList} theme={theme} />
            {/* Documentation and general dev resources */}
            <h3>{t("resources.design")}</h3>
            {/* <CarouselContainer carouselList={carouselList} /> */}
            {/* Icons, fonts, color tools */}
            <h3>{t("resources.html-css")}</h3>
            {/* HTML & CSS useful resources */}
            <h3>JavaScript</h3>
            {/* JS resources */}
            <h3>{t("resources.assets")}</h3>
            {/* Same as Design? */}
            <h3>Java</h3>
            {/* Java resources */}
            <h3>{t("resources.deployment")}</h3>
            {/* ++ */}
            <h3>{t("resources.more")}</h3>
        </>
    );
};

export default Resources;
