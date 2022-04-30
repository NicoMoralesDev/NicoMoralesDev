import React, { useState, useEffect } from "react";

import styles from "./App.module.scss";
import NavBar from "./components/nav/NavBar";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Skills from "./pages/skills/Skills";
import Resources from "./pages/resources/Resources";
import { ThemeContext } from "./Context";

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

        media.addEventListener("change", listener);

        return () => media.removeEventListener("change", listener);
    }, [matches, query]);

    return matches;
}

function App() {
    const [navBarOpen, setNavBarOpen] = useState(false);
    const [theme, setTheme] = useState("dark");

    const isPageWide = useMediaQuery("(min-width: 800px)");
    const themeStyle = theme == "dark" ? styles.dark : styles.light;

    const handleToggleNavBar = (e) => {
        setNavBarOpen(!navBarOpen);
    };

    const handleToggleTheme = (e) => {
        e.preventDefault();
        if (theme == "dark") {
            setTheme("light");
            setNavBarOpen(false);
        } else {
            setTheme("dark");
            setNavBarOpen(false);
        }
    };

    return (
        <ThemeContext.Provider value={theme}>
            <div className={`${styles.App} ${themeStyle}`}>
                <NavBar
                    toggleTheme={handleToggleTheme}
                    toggleNavBar={handleToggleNavBar}
                    isNavBarOpen={isPageWide ? true : navBarOpen}
                />
                <div className={styles.content}>
                    <header id="home">
                        <Home />
                    </header>
                    <section id="portfolio">
                        <Portfolio />
                    </section>
                    <section id="skills">
                        <Skills />
                    </section>
                    <section id="resources">
                        <Resources />
                    </section>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
