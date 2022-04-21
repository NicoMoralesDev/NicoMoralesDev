import styles from "./portfolio.modulce.scss";

const Portfolio = () => {
    return (
        <>
            <h2>Portfolio</h2>
            <ul>
                <li>
                    This Web! You can check the code{" "}
                    <a href="https://github.com/NicoMoralesDev/NicoMoralesDev">
                        here
                    </a>
                    .<p>Made with React, Vite, Sass</p>
                </li>
                <li>Personal Blog (WIP)</li>
                <li>Niccrow Deals (WIP)</li>
                <li>
                    <a href="http://wearenexa.com">
                        Nexa - Penetration Testing Professional Services:
                    </a>{" "}
                    <p>
                        Landing page for cybersecurity company based in Uruguay.
                        Coded from scratch using HTML, CSS/SASS, Vanilla
                        JavaScript, Webpack, Babel.
                    </p>
                </li>
                <li>
                    <a href="http://quglialodigiani.com.ar">
                        Estudio Quaglia-Lodigiani
                    </a>{" "}
                    <p>
                        QA&L or Quaglia Lodigiani is a firm from Mendoza,
                        Argentina.
                    </p>
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
        </>
    );
};

export default Portfolio;
