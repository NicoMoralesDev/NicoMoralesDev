import styles from "./menuItem.module.scss";

const MenuItem = ({ children }) => {
    return (
        <li
            onClick={(e) => {
                e.preventDefault();
            }}
            className={styles.menuItem}
        >
            <a href={`/${children.toLowerCase()}`}>{children}</a>
        </li>
    );
};

export default MenuItem;
