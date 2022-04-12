import styles from "./switch.module.scss";

const Switch = ({ name }) => {
    return (
        <div>
            <label htmlFor={name} className={styles.switch}>
                <input type={styles.checkbox} name={name} id={name} />
                <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
        </div>
    );
};

export default Switch;
