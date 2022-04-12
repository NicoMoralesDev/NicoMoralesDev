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
                <h1>Nicolas Morales | Full-Stack Developer</h1>
                <img
                    src="https://i.pravatar.cc/150?img=Nick"
                    alt="Photo of Nicolas"
                />
                <div className="whoiam">Intro: quien soy</div>
                <Button text="Contact Me" />
            </header>
            <section>
                <h2>Portfolio</h2>
                <ul>
                    <li>Niccrow Deals (WIP)</li>
                    <li>Personal Blog (WIP)</li>
                    <li>Nexa</li>
                    <li>Quaglia-Lodigiani</li>
                    <li>More: GitHub</li>
                </ul>
            </section>
            <section>
                <h2>Skills</h2>
                <ul>
                    <li>LeetCode</li>
                    <li></li>
                </ul>
            </section>
            <section>
                <h2>Resources</h2>
            </section>
        </div>
    );
}

export default App;
