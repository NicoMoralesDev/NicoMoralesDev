import styles from "./carousel.module.scss";

const Carousel = ({ children }) => {
    return <div className={styles.carouselContainer}>{children}</div>;
};

export default Carousel;
