import { useTranslation } from "react-i18next";
import coolorLogo from "../../images/coolors-co.png";

export function getDevelopmentList() {
    const { t } = useTranslation();

    return [
        {
            link: "https://devdocs.io/",
            logo: "https://devdocs.io/images/webapp-icon-192.png",
            title: "DevDocs API Documentation",
            description:
                "Fast, offline, and free documentation browser for developers. Search 100+ docs in one web app: HTML, CSS, JavaScript, PHP, Ruby, Python, Go, C, C++…",
        },
        {
            link: "https://sdkman.io/",
            logo: "https://sdkman.io/assets//img/logo.png",
            title: "Home - SDKMAN! the Software Development Kit Manager",
            description:
                "SDKMAN! is a tool for managing parallel versions of multiple Software Development Kits on most Unix based systems.",
        },
        {
            link: "https://code.visualstudio.com/",
            logo: "https://code.visualstudio.com/favicon.ico",
            title: "Visual Studio Code - Code Editing. Redefined",
            description:
                "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications. Visual Studio Code is free and available on your favorite platform - Linux, macOS, and Windows.",
        },
        {
            link: "https://loremipsum.io/",
            logo: "https://loremipsum.io/assets/images/icons/icon-144x144.png",
            title: "Lorem Ipsum – Generator, Origins and Meaning",
            description:
                "Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools.",
        },
    ];
}

export function getDesignList() {
    const { t } = useTranslation();

    return [
        {
            link: "https://land-book.com/",
            logo: "https://land-book.com/images/land-book-logo-simple.svg",
            title: "Land-book - website design inspiration gallery",
            description:
                "Web design gallery with hand-picked website design examples. From 2013 we help creatives find inspiration & motivation to create their best work.",
        },
        {
            link: "https://onepagelove.com/inspiration",
            logo: "https://onepagelove.com/wp-content/themes/onepagelove/frontend/img/favicon/favicon-32x32.png",
            title: "One Page Website Inspiration and References",
            description:
                "Beautiful One Page websites for inspiration and references. Each review includes a full screenshot of the website design along with noteworthy features.",
        },
        {
            link: "https://screenlane.com/",
            logo: "https://screenlane.com/static/website/images/logo.png",
            title: "Screenlane - Web & mobile UI design inspiration",
            description:
                "Get inspired and keep up with the latest web & mobile app UI design trends",
        },
        {
            link: "https://whocanuse.com/",
            logo: "",
            title: "WhoCanUse",
            description:
                "It's a tool that brings attention and understanding to how color contrast can affect different people with visual impairments.",
        },
        {
            link: "https://hue.tools/",
            logo: "https://hue.tools/favicon.svg",
            title: "hue.tools",
            description:
                "A free color mixer, blender, info and modifier tool. Mix multiple colors, get links for design inspiration and stock images based on a color, view various color combinations and modify colors in an intuitive.",
        },
        {
            link: "https://coolors.co/",
            logo: coolorLogo,
            title: "Coolors - The super fast color palettes generator!",
            description:
                "Generate or browse beautiful color combinations for your designs.",
        },
        {
            link: "https://superdesigner.co/",
            logo: "https://superdesigner.co/logo.svg",
            title: "Super designer",
            description:
                "Super designer gives you super powers to create unique designs",
        },
        {
            link: "https://yeun.github.io/open-color/",
            logo: "https://yeun.github.io/open-color/asset/images/logo.svg",
            title: "Open Color",
            description: "Color scheme for UI design",
        },
        {
            link: "https://tailwindcss.com/docs/customizing-colors",
            logo: "https://tailwindcss.com/favicons/favicon.ico?v=3",
            title: "Customizing Colors - Tailwind CSS",
            description:
                "Customizing the default color palette for your project with Tailwind CSS.",
        },
    ];
}
