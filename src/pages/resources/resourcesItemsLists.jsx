import { useTranslation } from "react-i18next";
import coolorLogo from "../../images/coolors-co.png";
import svgRepoLogo from "../../images/svg-repo-48x48.png";

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
            link: "https://github.com/nvm-sh/nvm#node-version-manager---",
            logo: "https://raw.githubusercontent.com/nvm-sh/logos/HEAD/nvm-logo-color.svg",
            title: "Node Version Manager",
            description:
                "nvm allows you to quickly install and use different versions of node via the command line.",
        },
        {
            link: "https://code.visualstudio.com/",
            logo: "https://code.visualstudio.com/favicon.ico",
            title: "Visual Studio Code - Code Editing. Redefined",
            description:
                "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications. Visual Studio Code is free and available on your favorite platform - Linux, macOS, and Windows.",
        },
        {
            link: "https://jsonplaceholder.typicode.com/",
            logo: "",
            title: "JSONPlaceholder - Free Fake REST API",
            description: "Free fake API for testing and prototyping.",
        },
        {
            link: "https://www.geeksforgeeks.org/",
            logo: "https://www.geeksforgeeks.org/wp-content/uploads/gfg_200X200-100x100.png",
            title: "GeeksforGeeks | A computer science portal for geeks",
            description:
                "A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles, quizzes and practice/competitive programming/company interview Questions.",
        },
        {
            link: "https://codepen.io/",
            logo: "https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico",
            title: "CodePen: Online Code Editor",
            description:
                "Build, share, and learn JavaScript, CSS, and HTML with our online code editor.",
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
            link: "https://coolors.co/contrast-checker",
            logo: coolorLogo,
            title: "Coolors Contrast Checker",
            description:
                "Calculate the contrast ratio of text and background colors.",
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
        {
            link: "https://responsively.app/",
            logo: "https://responsively.app/icons/icon-144x144.png?v=cf7b6225acbb48a8f3246fb5c14f8d24",
            title: "A Web Developer's Browser | Responsively App",
            description:
                "A dev-tool that aids faster and precise responsive web development.",
        },
    ];
}

export function getAssetsList() {
    return [
        {
            link: "https://loremipsum.io/",
            logo: "https://loremipsum.io/assets/images/icons/icon-144x144.png",
            title: "Lorem Ipsum – Generator, Origins and Meaning",
            description:
                "Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools.",
        },
        {
            link: "https://labs.tineye.com/multicolr/",
            logo: "https://labs.tineye.com/favicon.ico",
            title: "TinEye Labs - Multicolr Search Lab",
            description:
                "We used MulticolorEngine to extract the colors from 20 million Creative Commons images on Flickr to make the images searchable by color. Enjoy! Multicolr is addictive and very likely the best color search engine in the world!",
        },
        {
            link: "https://www.svgrepo.com/",
            logo: svgRepoLogo,
            title: "SVG Repo - Free SVG Vectors and Icons",
            description:
                "Free Vectors and Icons in SVG format. ✅ Download free mono or multi color vectors for commercial use. Search in 300.000+ Free SVG Vectors and Icons.",
        },
        {
            link: "https://fonts.google.com/",
            logo: "https://www.gstatic.com/images/icons/material/apps/fonts/1x/catalog/v5/favicon.svg",
            title: "Browse Fonts - Google Fonts",
            description:
                "Making the web more beautiful, fast, and open through great typography",
        },
    ];
}

export function getHtmlAndCssList() {
    return [
        {
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
            logo: "https://developer.mozilla.org/favicon-192x192.png",
            title: "HTML elements reference",
            description:
                "This page lists all the HTML elements, which are created using tags.",
        },
        {
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference",
            logo: "https://developer.mozilla.org/favicon-192x192.png",
            title: "CSS reference",
            description:
                "Use this CSS reference to browse an alphabetical index of all of the standard CSS properties, pseudo-classes, pseudo-elements, data types, functional notations and at-rules. You can also browse key CSS concepts and a list of selectors organized by type. Also included is a brief DOM-CSS / CSSOM reference.",
        },
        {
            link: "https://css-tricks.com/snippets/html/glyphs/",
            logo: "https://css-tricks.com/favicon.ico",
            title: "Glyphs | CSS-Tricks",
            description:
                "Super useful reference, gives you HTML entity name, numeric code, hex code and ISO code.",
        },
        {
            link: "https://caniuse.com/",
            logo: "https://caniuse.com/img/favicon-128.png",
            title: "Can I use... Support tables for HTML5, CSS3, etc",
            description:
                "'Can I use' provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.",
        },
        {
            link: "https://cssreference.io/",
            logo: "https://cssreference.io/favicons/favicon.ico?v=201702181118",
            title: "CSS Reference - A free visual guide to CSS",
            description:
                "CSS Reference is a free visual guide to CSS. It features the most popular properties, and explains them with illustrated and animated examples.",
        },
        {
            link: "https://grid.malven.co/",
            logo: "https://grid.malven.co/favicon-32x32.png",
            title: "GRID: A simple visual cheatsheet for CSS Grid Layout",
            description:
                "Learn all about the properties available in CSS Grid Layout through simple visual examples.",
        },
    ];
}

export function getJavascriptList() {
    return [
        {
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference",
            logo: "https://developer.mozilla.org/favicon-192x192.png",
            title: "JavaScript reference",
            description:
                "This part of the JavaScript section on MDN serves as a repository of facts about the JavaScript language. Read more about this reference.",
        },
        {
            link: "https://developer.mozilla.org/en-US/docs/Web/Events",
            logo: "https://developer.mozilla.org/favicon-192x192.png",
            title: "Event reference",
            description:
                "Events are fired to notify code of 'interesting changes' that may affect code execution. These can arise from user interactions such as using a mouse or resizing a window, changes in the state of the underlying environment, and other causes.",
        },
        {
            link: "https://javascript.info/",
            logo: "https://javascript.info/img/sitetoolbar__logo_small_en.svg",
            title: "The Modern JavaScript Tutorial",
            description:
                "Modern JavaScript Tutorial: simple, but detailed explanations with examples and tasks, including: closures, document and events, object oriented programming and more.",
        },
        {
            link: "https://www.patterns.dev/posts/classic-design-patterns/",
            logo: "https://www.patterns.dev/img/favicon/favicon-192x192.png?hash=b4b7ad3f7c",
            title: "Learning JavaScript Design Patterns",
            description:
                "The classic JavaScript design patterns book, updated to ES2015+ syntax.",
        },
        {
            link: "https://kangax.github.io/compat-table/es2016plus/",
            logo: "https://kangax.github.io/compat-table/favicon.ico",
            title: "ECMAScript 2016+ compatibility table",
            description:
                "Check out all the new ES2016+ features supported and their browser support.",
        },
    ];
}

export function getJavaList() {
    return [];
}

export function getDeploymentList() {
    return [
        {
            link: "https://squoosh.app/",
            logo: "https://squoosh.app/c/icon-large-cb438cac.png",
            title: "Squoosh",
            description:
                "Squoosh is the ultimate image optimizer that allows you to compress and compare images with different codecs in your browser.",
        },
        {
            link: "https://pagespeed.web.dev/",
            logo: "https://ssl.gstatic.com/pagespeed/insights/ui/logo/favicon_48.png",
            title: "PageSpeed Insights",
            description:
                "Make your web pages fast on all devices. Get your PageSpeed score and use PageSpeed suggestions to make your web site faster through our online tool.",
        },
        {
            link: "https://vercel.com/",
            logo: "https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/favicon.ico",
            title: "Develop. Preview. Ship. For the best frontend teams – Vercel",
            description:
                "Deploy web projects with the best frontend developer experience and highest end-user performance.",
        },
        {
            link: "https://www.netlify.com/",
            logo: "https://www.netlify.com/v3/static/favicon/favicon-32x32.png",
            title: "Netlify: Develop & deploy the best web experiences in record time",
            description:
                "A powerful serverless platform with an intuitive git-based workflow. Automated deployments, shareable previews, and much more. Get started for free!",
        },
        {
            link: "https://github.com/features/actions",
            logo: "https://github.githubassets.com/apple-touch-icon-144x144.png",
            title: "Features • GitHub Actions",
            description:
                "GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub.",
        },
    ];
}

export function getExtrasList() {
    return [
        {
            link: "https://hackernoon.com/",
            logo: "https://hackernoon.com/icons/icon-144x144.png",
            title: "HackerNoon - read, write and learn about any technology",
            description:
                "How hackers start their afternoon. HackerNoon is a free platform with 25k+ contributing writers. 100M+ humans have visited HackerNoon to learn about technology.",
        },
        {
            link: "https://stackoverflow.com/",
            logo: "https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico?v=ec617d715196",
            title: "Stack Overflow",
            description:
                "Stack Overflow is the largest, most trusted online community for developers to learn, share their programming knowledge, and build their careers.",
        },
        {
            link: "https://www.freecodecamp.org/",
            logo: "https://www.freecodecamp.org/icons/icon-144x144.png?v=6cba562cbd10e31af925a976f3db73f7",
            title: "Learn to Code — For Free — Coding Courses for Busy People",
            description:
                "Learn to Code — For Free. Build projects. Earn certifications.",
        },
    ];
}
