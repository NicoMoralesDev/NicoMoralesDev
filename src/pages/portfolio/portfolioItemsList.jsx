import { useTranslation } from "react-i18next";

import styles from "./portfolio.module.scss";

import nicoWebImage from "../../images/nico-web-ss.webp";
import nexaWebImage from "../../images/nexa-web-ss.webp";
import quagliaWebImage from "../../images/qua&l-web-ss.webp";
import icon from "../../images/niccrow-icono-flat-300px.webp";

export function getPortfolioList() {
    const { t } = useTranslation();
    const logotipo = (
        <div className={styles.logotipo}>
            <img className={styles.isotipo} src={icon} alt="Niccrow Logo" />
            <span className={styles.title}>nicomorales.dev</span>
        </div>
    );

    return [
        {
            cardHeader: {
                title: t("portfolio.itemTitle-1"),
                url: "/home",
                github: "https://github.com/NicoMoralesDev/NicoMoralesDev",
            },
            cardFront: {
                imageSrc: nicoWebImage,
                imageAlt: "Screenshot preview of the web",
                jsxElement: null,
            },
            cardBack: { text: t("portfolio.itemDesc-1") },
        },
        {
            cardHeader: {
                title: t("portfolio.itemTitle-2"),
                url: "/blog",
                github: "https://github.com/NicoMoralesDev/NicoMoralesBlog",
            },
            cardFront: {
                imageSrc: null,
                imageAlt: null,
                jsxElement: logotipo,
            },
            cardBack: { text: t("portfolio.itemDesc-2") },
        },
        {
            cardHeader: {
                title: t("portfolio.itemTitle-3"),
                url: "http://niccrowdeals.com",
                github: null,
            },
            cardFront: {
                imageSrc: null,
                imageAlt: null,
                jsxElement: logotipo,
            },
            cardBack: { text: t("portfolio.itemDesc-3") },
        },
        {
            cardHeader: {
                title: t("portfolio.itemTitle-4"),
                url: "http://wearenexa.com",
                github: null,
            },
            cardFront: {
                imageSrc: nexaWebImage,
                imageAlt: "Screenshot preview of the web",
                jsxElement: null,
            },
            cardBack: { text: t("portfolio.itemDesc-4") },
        },
        {
            cardHeader: {
                title: t("portfolio.itemTitle-5"),
                url: "http://quaglialodigiani.com.ar",
                github: null,
            },
            cardFront: {
                imageSrc: quagliaWebImage,
                imageAlt: "Screenshot preview of the web",
                jsxElement: null,
            },
            cardBack: { text: t("portfolio.itemDesc-5") },
        },
        {
            cardHeader: {
                title: t("portfolio.itemTitle-6"),
                url: "https://github.com/NicoMoralesDev",
                github: null,
            },
            cardFront: {
                imageSrc: null,
                imageAlt: null,
                jsxElement: logotipo,
            },
            cardBack: { text: t("portfolio.itemDesc-6") },
        },
        {
            cardHeader: {
                title: t("portfolio.itemTitle-7"),
                url: "https://leetcode.com/NicoMorales/",
                github: null,
            },
            cardFront: {
                imageSrc: null,
                imageAlt: null,
                jsxElement: logotipo,
            },
            cardBack: { text: t("portfolio.itemDesc-7") },
        },
    ];
}
