"use strict";
exports.id = 250;
exports.ids = [250];
exports.modules = {

/***/ 250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GI": () => (/* binding */ menu),
/* harmony export */   "Hz": () => (/* binding */ mdxConfig),
/* harmony export */   "cV": () => (/* binding */ siteMetaData),
/* harmony export */   "vc": () => (/* binding */ config),
/* harmony export */   "xs": () => (/* binding */ social)
/* harmony export */ });
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_tfi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1740);
/* harmony import */ var react_icons_tfi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_tfi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_sl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5065);
/* harmony import */ var react_icons_sl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_sl__WEBPACK_IMPORTED_MODULE_2__);
/** *************************************************************
 * Please refer to the Theme Options section in documentation   *
 ****************************************************************/ /**
 * Icons from react-icons: https://react-icons.github.io/react-icons
 */ 


/**
 * Main Menu Items
 */ const menu = [
    {
        name: "Home",
        slug: "/",
        Icon: react_icons_tfi__WEBPACK_IMPORTED_MODULE_1__.TfiHome,
        number: 1
    },
    {
        name: "Home (2)",
        slug: "/index-2",
        Icon: react_icons_tfi__WEBPACK_IMPORTED_MODULE_1__.TfiHome,
        number: 2
    },
    {
        name: "Home (3)",
        slug: "/index-3",
        Icon: react_icons_tfi__WEBPACK_IMPORTED_MODULE_1__.TfiHome,
        number: 3
    },
    {
        name: "Home (4)",
        slug: "/index-4",
        Icon: react_icons_tfi__WEBPACK_IMPORTED_MODULE_1__.TfiHome,
        number: 4
    },
    {
        name: "About",
        slug: "/about",
        Icon: react_icons_sl__WEBPACK_IMPORTED_MODULE_2__.SlUser
    },
    {
        name: "Services",
        slug: "/services",
        Icon: react_icons_sl__WEBPACK_IMPORTED_MODULE_2__.SlBriefcase
    },
    {
        name: "Articles",
        slug: "/blog",
        Icon: react_icons_tfi__WEBPACK_IMPORTED_MODULE_1__.TfiPencilAlt
    },
    {
        name: "Projects",
        slug: "/projects",
        Icon: react_icons_sl__WEBPACK_IMPORTED_MODULE_2__.SlTrophy
    },
    {
        name: "Contact",
        slug: "/contact",
        Icon: react_icons_sl__WEBPACK_IMPORTED_MODULE_2__.SlEnvolope
    }
];
/**
 * Social Links under the Main Menu
 */ const social = [
    {
        name: "Twitter",
        url: "https://www.twitter.com/",
        Icon: react_icons_io5__WEBPACK_IMPORTED_MODULE_0__.IoLogoTwitter
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/",
        Icon: react_icons_io5__WEBPACK_IMPORTED_MODULE_0__.IoLogoInstagram
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/",
        Icon: react_icons_io5__WEBPACK_IMPORTED_MODULE_0__.IoLogoLinkedin
    }
];
/**
 * General configurations
 */ const config = {
    dateLocale: "en-US",
    dateOptions: {
        // dateOptions is passed to JavaScript's toLocaleDateString()
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC"
    },
    convertKit: {
        tipUrl: "https://fantastic-mover-3439.ck.page/products/blog"
    },
    contactForm: {
        inputs: __webpack_require__(1126),
        recipient: "RECIPIENT@EXAMPLE.com",
        sender: "SENDER@EXAMPLE.com",
        subject: "EMAIL NOTIFICATION SUBJECT"
    }
};
/**
 * MDX/Markdown configurations
 */ const mdxConfig = {
    publicDir: "public",
    pagesDir: "content",
    fileExt: ".md",
    collections: [
        "/blog",
        "/projects"
    ],
    remarkPlugins: [],
    rehypePlugins: []
};
/**
 * Global SEO configuration for next-seo plugin
 * https://github.com/garmeeh/next-seo
 */ const siteMetaData = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || "http://localhost:3000",
    authorName: "Carl Hanson",
    siteName: "Carl Hanson",
    defaultTitle: "Carl Hanson Personal Site",
    titleTemplate: "Carl Hanson | %s",
    description: "A short description goes here.",
    email: "hello@example.com",
    locale: "en_US",
    twitter: {
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image"
    }
};


/***/ }),

/***/ 1126:
/***/ ((module) => {

module.exports = JSON.parse('[{"legend":"Your contact information","columns":3,"fields":[{"type":"text","name":"first-name","placeholder":"First name","autoComplete":"given-name","required":true},{"type":"text","name":"last-name","placeholder":"Last name","autoComplete":"family-name","required":true},{"type":"text","name":"email","placeholder":"Email address","autoComplete":"email","inputType":"email","required":true},{"type":"text","name":"company","placeholder":"Company Name","autoComplete":"company"},{"type":"text","name":"phone","placeholder":"Phone Number","autoComplete":"phone"},{"type":"select","name":"country","autoComplete":"country-name","defaultValue":"Select Country","options":[{"label":"Select Country","value":"","disabled":true},{"label":"United States","value":"United States"},{"label":"Canada","value":"Canada"},{"label":"Germany","value":"Germany"},{"label":"France","value":"France"}]}]},{"legend":"What services do you need for your project?","columns":3,"fields":[{"type":"checkbox","name":"project-type[Website Development]","label":"Website Development"},{"type":"checkbox","name":"project-type[App Development]","label":"App Development"},{"type":"checkbox","name":"project-type[Design System]","label":"Design System"},{"type":"checkbox","name":"project-type[Website Migration]","label":"Website Migration"},{"type":"checkbox","name":"project-type[E-commerce Site]","label":"E-commerce Site"},{"type":"checkbox","name":"project-type[Performance Evaluation]","label":"Performance Evaluation"}]},{"legend":"How much is the anticipated budget?","columns":3,"fields":[{"type":"radio","name":"budget","value":"Less than $2,000","label":"Less than $2,000"},{"type":"radio","name":"budget","value":"$2,000 - $10,000","label":"$2,000 - $10,000"},{"type":"radio","name":"budget","value":"More than $10,000","label":"More than $10,000"}]},{"legend":"Tell me about your project","columns":1,"fields":[{"type":"textarea","name":"message","placeholder":"Project description","rows":3}]}]');

/***/ })

};
;