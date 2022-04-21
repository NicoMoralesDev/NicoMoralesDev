import styles from "./home.module.scss";
import Button from "../ui/Button";

const Home = () => {
    return (
        <div className={styles.home}>
            <h1>
                Nicolas Morales
                <br />
                Full-Stack Developer
            </h1>
            <img src="src/images/yo_perfil.jpg" alt="Photo of Nicolas" />
            {/* <h3>Hi, I'm Nico!</h3> */}
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
