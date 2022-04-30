import { useContext } from "react";
import { ThemeContext } from "../../Context";
import styles from "./skills.module.scss";
import { useTranslation } from "react-i18next";

const Skills = () => {
    const theme = useContext(ThemeContext);
    const themeStyle = theme == "dark" ? styles.dark : styles.light;
    const { t } = useTranslation();

    return (
        <>
            <h2>{t("skills.heading")}</h2>
            <div className={`${styles.skillsContent} ${themeStyle}`}>
                <div>
                    <h3>{t("skills.front-end")}</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SASS</li>
                        <li>JavaScript</li>
                        <li>{t("skills.learning")} TypeScript</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Tailwind</li>
                    </ul>
                </div>
                <div>
                    <h3>{t("skills.back-end")}</h3>
                    <ul>
                        <li>Java</li>
                        <li>Spring Boot</li>
                        <li>{t("skills.learning")} GoLang</li>
                    </ul>
                </div>
                <div>
                    <h3>{t("skills.mobile")}</h3>
                    <ul>
                        <li>{t("skills.learning")} Flutter</li>
                        <li>{t("skills.learning")} React Native</li>
                    </ul>
                </div>
                <div>
                    <h3>{t("skills.databases")}</h3>
                    <ul>
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                        <li>ElasticSearch</li>
                        <li>{t("skills.learning")} GraphQL</li>
                        <li>{t("skills.learning")} DynamoDB</li>
                        <li>{t("skills.learning")} Redis</li>
                    </ul>
                </div>
                <div>
                    <h3>{t("skills.others")}</h3>
                    <ul>
                        <li>Git</li>
                        <li>{t("skills.agile")}</li>
                        <li>{t("skills.continuous-integration")}</li>
                        <li>{t("skills.learning")} Docker</li>
                        <li>{t("skills.learning")} AWS</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Skills;
