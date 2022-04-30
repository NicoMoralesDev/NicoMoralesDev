import { useTranslation } from "react-i18next";

const Resources = () => {
    const { t } = useTranslation();

    return (
        <>
            <h2>{t("resources.heading")}</h2>
            {/* Carrousels? */}
            <h3>{t("resources.development")}</h3>
            {/* Documentation and general dev resources */}
            <h3>{t("resources.design")}</h3>
            {/* Icons, fonts, color tools */}
            <h3>{t("resources.html-css")}</h3>
            {/* HTML & CSS useful resources */}
            <h3>JavaScript</h3>
            {/* JS resources */}
            <h3>{t("resources.assets")}</h3>
            {/* Same as Design? */}
            <h3>Java</h3>
            {/* Java resources */}
            <h3>{t("resources.deployment")}</h3>
            {/* ++ */}
            <h3>{t("resources.more")}</h3>
        </>
    );
};

export default Resources;
