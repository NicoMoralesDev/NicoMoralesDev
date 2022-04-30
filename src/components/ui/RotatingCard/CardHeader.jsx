import { useTranslation } from "react-i18next";
import styles from "./cardHeader.module.scss";

const CardHeader = ({ title, url, github }) => {
    const { t } = useTranslation();

    return (
        <div className={styles.cardHeader}>
            <h3 className={styles.title}>{title}</h3>
            <a href={url} target="_blank">
                {t("portfolio.visitWeb")}
            </a>
            {github != null && (
                <>
                    {" | "}
                    <span>
                        <a href={github} target="_blank">
                            GitHub
                        </a>
                    </span>
                </>
            )}
        </div>
    );
};

export default CardHeader;
