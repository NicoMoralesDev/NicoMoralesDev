import { useContext } from "react";
import { ThemeContext } from "../../Context";
import styles from "./portfolio.module.scss";
import icon from "../../images/nicrow-icono-flat-300px.png";

import nexaWebImage from "../../images/nexa-web-ss.png";
import quagliaWebImage from "../../images/qua&l-web-ss.png";

import CardHeader from "../ui/RotatingCard/CardHeader";
import RotatingCard from "../ui/RotatingCard/RotatingCard";
import CardFront from "../ui/RotatingCard/CardFront";
import CardBack from "../ui/RotatingCard/CardBack";

const Portfolio = () => {
    const theme = useContext(ThemeContext);
    const themeStyle = theme == "dark" ? styles.dark : styles.light;

    return (
        <>
            <h2>Portfolio</h2>
            <div className={`${styles.portfolioContent} ${themeStyle}`}>
                <ul>
                    <li>
                        <CardHeader
                            title="This Web! Check the code below..."
                            url="/home"
                            github="https://github.com/NicoMoralesDev/NicoMoralesDev"
                        />
                        <RotatingCard>
                            <CardFront>
                                <div className={styles.logotipo}>
                                    <img
                                        className={styles.isotipo}
                                        src={icon}
                                        alt="Niccrow Logo"
                                    />
                                    <span className={styles.title}>
                                        nicomorales.dev
                                    </span>
                                </div>
                            </CardFront>
                            <CardBack>
                                <p>Made with React, Vite, SASS</p>
                            </CardBack>
                        </RotatingCard>
                    </li>
                    <li>Personal Blog (WIP)</li>
                    <li>Niccrow Deals (WIP)</li>
                    <li>
                        <CardHeader
                            title="Nexa - Penetration Testing Professional Services"
                            url="http://wearenexa.com"
                        />
                        <RotatingCard>
                            <CardFront>
                                <img src={nexaWebImage} alt="" />
                            </CardFront>
                            <CardBack>
                                <p>
                                    Landing page for cybersecurity company based
                                    in Uruguay. Coded from scratch using HTML,
                                    CSS/SASS, Vanilla JavaScript, Webpack,
                                    Babel.
                                </p>
                            </CardBack>
                        </RotatingCard>
                    </li>
                    <li>
                        <CardHeader
                            title="Estudio Quaglia-Lodigiani"
                            url="http://quglialodigiani.com.ar"
                        />
                        <RotatingCard>
                            <CardFront>
                                <img src={quagliaWebImage} alt="" />
                            </CardFront>
                            <CardBack>
                                <p>
                                    QUA&L or Quaglia Lodigiani is a law firm
                                    from Mendoza, Argentina.
                                </p>
                            </CardBack>
                        </RotatingCard>
                    </li>
                    <li>
                        More:{" "}
                        <a href="https://github.com/NicoMoralesDev">
                            My GitHub Profile
                        </a>
                    </li>
                    <li>
                        More:{" "}
                        <a href="https://leetcode.com/NicoMorales/">
                            My LeetCode Profile
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Portfolio;
