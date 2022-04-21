import { useState } from "react";

import "./App.scss";
import NavBar from "./components/nav/NavBar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Resources from "./components/resources/Resources";

function App() {
    const [navBarOpen, setNavBarOpen] = useState(false);

    const handleToggleNavBar = (e) => {
        setNavBarOpen(!navBarOpen);
    };

    return (
        <div className="App">
            <NavBar
                isNavBarOpen={navBarOpen}
                toggleNavBar={handleToggleNavBar}
            />
            <div className="content">
                <header>
                    <Home />
                </header>
                <section>
                    <Portfolio />
                </section>
                <section>
                    <Skills />
                </section>
                <section>
                    <Resources />
                </section>
            </div>
        </div>
    );
}

export default App;
