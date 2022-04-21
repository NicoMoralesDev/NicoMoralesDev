import { useState, useEffect } from "react";

import "./App.scss";
import NavBar from "./components/nav/NavBar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Resources from "./components/resources/Resources";

export function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);

        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        const listener = () => {
            setMatches(media.matches);
        };

        media.addListener(listener);

        return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
}

function App() {
    const [navBarOpen, setNavBarOpen] = useState(false);
    const [theme, setTheme] = useState("dark");

    let isPageWide = useMediaQuery("(min-width: 800px)");

    const handleToggleNavBar = (e) => {
        setNavBarOpen(!navBarOpen);
    };

    return (
        <div className="App">
            <NavBar
                theme={theme}
                isNavBarOpen={isPageWide ? true : navBarOpen}
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
