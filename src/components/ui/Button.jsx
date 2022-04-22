import { useContext } from "react";
import { ThemeContext } from "../../Context";
import styles from "./button.module.scss";

const Button = ({ text }) => {
    const theme = useContext(ThemeContext);
    const themeStyle = theme == "dark" ? styles.dark : styles.light;

    return <button className={themeStyle}>{text}</button>;
};

export default Button;
