import { useContext } from "react";
import { ThemeContext } from "../../Context";
import { useTranslation } from "react-i18next";
import styles from "./skills.module.scss";
import {
    htmlIcon,
    cssIcon,
    jsIcon,
    tsIcon,
    reactIcon,
    javaIcon,
    goLangIcon,
    sqlIcon,
    gitIcon,
} from "../../components/ui/svgElements";

const Skills = () => {
    const theme = useContext(ThemeContext);
    const themeStyle = theme == "dark" ? styles.dark : styles.light;
    const { t } = useTranslation();

    const svgIcons = [
        { icon: htmlIcon, name: "HTML" },
        { icon: cssIcon, name: "CSS" },
        { icon: jsIcon, name: "JS" },
        { icon: tsIcon, name: "TS" },
        { icon: reactIcon, name: "React" },
        { icon: javaIcon, name: "Java" },
        { icon: goLangIcon, name: "Go" },
        { icon: sqlIcon, name: "SQL" },
        { icon: gitIcon, name: "Git" },
    ];

    return (
        <>
            <h2>{t("skills.heading")}</h2>
            <div className={`${styles.skillsIcons} ${themeStyle}`}>
                {svgIcons.map((item, id) => {
                    return (
                        <div key={id} className={styles.iconItem}>
                            {item.icon}
                            <span className={styles.iconLabel}>{item.name}</span>
                        </div>
                    );
                })}
            </div>
            <div className={`${styles.skillsContent} ${themeStyle}`}>
                <div className={styles.skillCard}>
                    <h3>{t("skills.front-end")}</h3>
                    <ul>
                        <li><span className={styles.skillTag}>HTML</span></li>
                        <li><span className={styles.skillTag}>CSS</span></li>
                        <li><span className={styles.skillTag}>SASS</span></li>
                        <li><span className={styles.skillTag}>JavaScript</span></li>
                        <li><span className={`${styles.skillTag} ${styles.learning}`}>TypeScript</span></li>
                        <li><span className={styles.skillTag}>React</span></li>
                        <li><span className={styles.skillTag}>Next.js</span></li>
                        <li><span className={styles.skillTag}>Tailwind</span></li>
                    </ul>
                </div>
                <div className={styles.skillCard}>
                    <h3>{t("skills.back-end")}</h3>
                    <ul>
                        <li><span className={styles.skillTag}>Java</span></li>
                        <li><span className={styles.skillTag}>Spring Boot</span></li>
                        <li><span className={`${styles.skillTag} ${styles.learning}`}>GoLang</span></li>
                    </ul>
                </div>
                <div className={styles.skillCard}>
                    <h3>{t("skills.mobile")}</h3>
                    <ul>
                        <li><span className={`${styles.skillTag} ${styles.learning}`}>Flutter</span></li>
                        <li><span className={`${styles.skillTag} ${styles.learning}`}>React Native</span></li>
                    </ul>
                </div>
                <div className={styles.skillCard}>
                    <h3>{t("skills.databases")}</h3>
                    <ul>
                        <li><span className={styles.skillTag}>MySQL</span></li>
                        <li><span className={styles.skillTag}>PostgreSQL</span></li>
                        <li><span className={styles.skillTag}>MongoDB</span></li>
                        <li><span className={styles.skillTag}>ElasticSearch</span></li>
                        <li><span className={`${styles.skillTag} ${styles.learning}`}>GraphQL</span></li>
                        <li><span className={`${styles.skillTag} ${styles.learning}`}>DynamoDB</span></li>
                        <li><span className={`${styles.skillTag} ${styles.learning}`}>Redis</span></li>
                    </ul>
                </div>
                <div className={styles.skillCard}>
                    <h3>{t("skills.others")}</h3>
                    <ul>
                        <li><span className={styles.skillTag}>Git</span></li>
                        <li><span className={styles.skillTag}>{t("skills.agile")}</span></li>
                        <li><span className={styles.skillTag}>{t("skills.continuous-integration")}</span></li>
                        <li><span className={`${styles.skillTag} ${styles.learning}`}>Docker</span></li>
                        <li><span className={`${styles.skillTag} ${styles.learning}`}>AWS</span></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Skills;
