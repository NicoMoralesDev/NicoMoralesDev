import styles from "./home.module.scss";
import Button from "../ui/Button";
import photo from "../../images/yo_perfil.jpg";
import { useContext } from "react";
import { ThemeContext } from "../../Context";

const Home = () => {
    const theme = useContext(ThemeContext);
    const themeStyle = theme == "dark" ? styles.dark : styles.light;

    return (
        <div className={`${styles.home} ${themeStyle}`}>
            <h1>
                Nicolas Morales
                <br />
                Full-Stack Developer
            </h1>
            <img src={photo} alt="Photo of Nicolas" />
            <h2>About Me</h2>
            <p className="whoiam">
                Hi, I'm <strong>Nico</strong>, Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
            </p>
            <Button text="Contact Me" />
        </div>
    );
};

export default Home;
