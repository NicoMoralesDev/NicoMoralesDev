import { useTranslation } from "react-i18next";

export function getMenuList() {
    const { t } = useTranslation();

    return [
        {
            menuId: "home",
            menuName: t("nav.home"),
        },
        {
            menuId: "portfolio",
            menuName: t("nav.portfolio"),
        },
        {
            menuId: "skills",
            menuName: t("nav.skills"),
        },
        {
            menuId: "resources",
            menuName: t("nav.resources"),
        },
    ];
}
