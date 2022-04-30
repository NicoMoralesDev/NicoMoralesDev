import { useContext } from "react";
import { ThemeContext } from "../../Context";

import styles from "./portfolio.module.scss";

import CardHeader from "../../components/ui/RotatingCard/CardHeader";
import RotatingCard from "../../components/ui/RotatingCard/RotatingCard";
import CardFront from "../../components/ui/RotatingCard/CardFront";
import CardBack from "../../components/ui/RotatingCard/CardBack";

import { useTranslation } from "react-i18next";

import { getPortfolioList } from "./portfolioItemsList";

const Portfolio = () => {
    const theme = useContext(ThemeContext);
    const themeStyle = theme == "dark" ? styles.dark : styles.light;
    const { t } = useTranslation();

    const portfolioList = getPortfolioList().map((item, id) => {
        const cardFront = () => {
            if (item.cardFront.jsxElement != null) {
                return item.cardFront.jsxElement;
            } else {
                return (
                    <img
                        src={item.cardFront.imageSrc}
                        alt={item.cardFront.imageAlt}
                    />
                );
            }
        };

        return (
            <li key={id}>
                <CardHeader
                    title={item.cardHeader.title}
                    url={item.cardHeader.url}
                    github={item.cardHeader.github}
                />
                <RotatingCard>
                    <CardFront>{cardFront()}</CardFront>
                    <CardBack>
                        <p>{item.cardBack.text}</p>
                    </CardBack>
                </RotatingCard>
            </li>
        );
    });

    return (
        <>
            <h2>{t("portfolio.heading")}</h2>
            <div className={`${styles.portfolioContent} ${themeStyle}`}>
                <ul>{portfolioList}</ul>
            </div>
        </>
    );
};

export default Portfolio;
