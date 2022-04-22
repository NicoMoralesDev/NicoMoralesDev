import { useContext } from "react";
import { ThemeContext } from "../../Context";
import styles from "./skills.module.scss";

const Skills = () => {
    const theme = useContext(ThemeContext);
    const isLight = theme == "light" ? styles.light : "";

    return (
        <>
            <h2>Skills</h2>
            <div className={`${styles.skillsContent} ${isLight}`}>
                <div>
                    <h3>Front-end</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SASS</li>
                        <li>JavaScript</li>
                        <li>Learning TypeScript</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Tailwind</li>
                    </ul>
                </div>
                <div>
                    <h3>Back-end</h3>
                    <ul>
                        <li>Java</li>
                        <li>Spring Boot</li>
                        <li>Learning GoLang</li>
                    </ul>
                </div>
                <div>
                    <h3>Mobile</h3>
                    <ul>
                        <li>Learning Flutter</li>
                        <li>Learning React Native</li>
                    </ul>
                </div>
                <div>
                    <h3>Databases</h3>
                    <ul>
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                        <li>ElasticSearch</li>
                        <li>Learning GraphQL</li>
                        <li>Learning DynamoDB</li>
                        <li>Learning Redis</li>
                    </ul>
                </div>
                <div>
                    <h3>Others</h3>
                    <ul>
                        <li>Git</li>
                        <li>Agile Methodologies</li>
                        <li>Continuous Integration</li>
                        <li>Learning Docker</li>
                        <li>Learning AWS</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Skills;
