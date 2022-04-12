import MenuItem from "./MenuItem";
import styles from "./menuList.module.scss";

const menuList = ["Home", "Portfolio", "Skills", "Resources"];

const MenuList = () => {
    return (
        <menu className={styles.menu}>
            {menuList.map((item) => {
                return <MenuItem key={item}>{item}</MenuItem>;
            })}
        </menu>
    );
};

export default MenuList;
