import styles from "./rotatingCard.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../../Context";

const RotatingCard = ({ children }) => {
    const theme = useContext(ThemeContext);
    const themeStyle = theme == "dark" ? styles.dark : styles.light;

    return (
        <div className={`${styles.cardContainer} ${themeStyle}`}>
            {children}
        </div>
    );
};

export default RotatingCard;
