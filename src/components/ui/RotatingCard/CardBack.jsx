import styles from "./rotatingCard.module.scss";

const CardBack = ({ children }) => {
    return (
        <div className={`${styles.cardSide} ${styles.cardBack}`}>
            {children}
        </div>
    );
};

export default CardBack;
