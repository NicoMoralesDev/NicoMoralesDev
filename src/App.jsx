import { useState } from "react";
import "./App.scss";
import Button from "./components/ui/Button";
import NavBar from "./components/nav/NavBar";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <NavBar />
            <header className="home">
                <h1>
                    Nicolas Morales
                    <br />
                    Full-Stack Developer
                </h1>
                <img
                    src="https://i.pravatar.cc/150?img=Nick"
                    alt="Photo of Nicolas"
                />
                <h2>Hi, I'm Nico!</h2>
                <p className="whoiam">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
                <Button text="Contact Me" />
            </header>
            <section>
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
                            Landing page for cybersecurity company based in
                            Uruguay. Coded from scratch using HTML, CSS/SASS,
                            Vanilla JavaScript, Webpack, Babel.
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
            </section>
            <section>
                <h2>Skills</h2>
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
                <h3>Back-end</h3>
                <ul>
                    <li>Java</li>
                    <li>Spring Boot</li>
                    <li>Learning GoLang</li>
                </ul>
                <h3>Mobile</h3>
                <ul>
                    <li>Learning Flutter</li>
                    <li>Learning React Native</li>
                </ul>
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
                <h3>Others</h3>
                <ul>
                    <li>Git</li>
                    <li>Agile Methodologies</li>
                    <li>Continuous Integration</li>
                    <li>Learning Docker</li>
                    <li>Learning AWS</li>
                </ul>
            </section>
            <section>
                <h2>Resources</h2>
            </section>
        </div>
    );
}

export default App;
