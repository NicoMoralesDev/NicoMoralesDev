import styles from "./cardHeader.module.scss";

const CardHeader = ({ title, url, github }) => {
    const gitHubLink =
        github != null ? (
            <a href={github} target="_blank">
                GitHub
            </a>
        ) : (
            "Private Code"
        );

    return (
        <div className={styles.cardHeader}>
            <h4 className={styles.title}>{title}</h4>
            <a href={url} target="_blank">
                Visit Web
            </a>
            {" | "}
            <span>{gitHubLink}</span>
        </div>
    );
};

export default CardHeader;
