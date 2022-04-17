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
            <img
                src="https://i.pravatar.cc/150?img=Nick"
                alt="Photo of Nicolas"
            />
            <h2>Hi, I'm Nico!</h2>
            <p className="whoiam">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Button text="Contact Me" />
        </div>
    );
};

export default Home;
