import { useState } from "react";
import { arrow } from "../svgElements";
import styles from "./carousel.module.scss";
import { useSwipeable } from "react-swipeable";

const CarouselContainer = ({ carouselList, theme }) => {
    const [activeItem, setActiveItem] = useState(0);
    const themeStyle = theme == "dark" ? styles.dark : styles.light;

    const swipeHandler = useSwipeable({
        onSwipedLeft: () => moveLeftHandler(),
        onSwipedRight: () => moveRightHandler(),
        swipeDuration: 300,
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    const moveLeftHandler = () => {
        setActiveItem(activeItem - 1);
        if (activeItem != 0) {
            setActiveItem(activeItem - 1);
        } else {
            setActiveItem(carouselList.length - 1);
        }
    };

    const moveRightHandler = () => {
        if (activeItem != carouselList.length - 1) {
            setActiveItem(activeItem + 1);
        } else {
            setActiveItem(0);
        }
    };

    const listedItems = carouselList.map((item, id) => {
        return (
            <div
                key={id}
                className={`${styles.resourceItem} ${
                    id == activeItem ? styles.active : ""
                }`}
            >
                <img src={item.logo} alt="Icon from resource" />
                <div className={styles.resourceInfo}>
                    <h3>
                        <a href={item.link} target="_blank">
                            {item.title}
                        </a>
                    </h3>

                    <p>{item.description}</p>
                </div>
            </div>
        );
    });

    return (
        <div className={`${styles.carouselContainer} ${themeStyle}`}>
            <div
                className={`${styles.arrow} ${styles.left}`}
                onClick={moveLeftHandler}
            >
                {arrow}
            </div>
            <div className={styles.carouselViewer} {...swipeHandler}>
                {listedItems}
                <span>
                    {activeItem + 1} / {listedItems.length}
                </span>
            </div>
            <div
                className={`${styles.arrow} ${styles.right}`}
                onClick={moveRightHandler}
            >
                {arrow}
            </div>
        </div>
    );
};

export default CarouselContainer;
