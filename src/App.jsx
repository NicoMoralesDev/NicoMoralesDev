import React, { Suspense, useState, useEffect } from "react";

import styles from "./App.module.scss";
import NavBar from "./components/nav/NavBar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Resources from "./components/resources/Resources";
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

        media.addListener(listener);

        return () => media.removeListener(listener);
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
        } else {
            setTheme("dark");
        }
    };

    return (
        <Suspense fallback="loading">
            <ThemeContext.Provider value={theme}>
                <div className={`${styles.App} ${themeStyle}`}>
                    <NavBar
                        toggleTheme={handleToggleTheme}
                        isNavBarOpen={isPageWide ? true : navBarOpen}
                        toggleNavBar={handleToggleNavBar}
                    />
                    <div className={styles.content}>
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
            </ThemeContext.Provider>
        </Suspense>
    );
}

export default App;
