import styles from "./rotatingCard.module.scss";

const CardFront = ({ children }) => {
    return (
        <div className={`${styles.cardSide} ${styles.cardFront}`}>
            {children}
        </div>
    );
};

export default CardFront;
