"use strict";
(() => {
var exports = {};
exports.id = 63;
exports.ids = [63];
exports.modules = {

/***/ 6161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact_form)
});

;// CONCATENATED MODULE: external "@sendgrid/mail"
const mail_namespaceObject = require("@sendgrid/mail");
var mail_default = /*#__PURE__*/__webpack_require__.n(mail_namespaceObject);
;// CONCATENATED MODULE: external "react-icons/io5"
const io5_namespaceObject = require("react-icons/io5");
;// CONCATENATED MODULE: external "react-icons/tfi"
const tfi_namespaceObject = require("react-icons/tfi");
;// CONCATENATED MODULE: external "react-icons/sl"
const sl_namespaceObject = require("react-icons/sl");
;// CONCATENATED MODULE: ./theme.config.js
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
        Icon: tfi_namespaceObject.TfiHome,
        number: 1
    },
    {
        name: "Home (2)",
        slug: "/index-2",
        Icon: tfi_namespaceObject.TfiHome,
        number: 2
    },
    {
        name: "Home (3)",
        slug: "/index-3",
        Icon: tfi_namespaceObject.TfiHome,
        number: 3
    },
    {
        name: "Home (4)",
        slug: "/index-4",
        Icon: tfi_namespaceObject.TfiHome,
        number: 4
    },
    {
        name: "About",
        slug: "/about",
        Icon: sl_namespaceObject.SlUser
    },
    {
        name: "Services",
        slug: "/services",
        Icon: sl_namespaceObject.SlBriefcase
    },
    {
        name: "Articles",
        slug: "/blog",
        Icon: tfi_namespaceObject.TfiPencilAlt
    },
    {
        name: "Projects",
        slug: "/projects",
        Icon: sl_namespaceObject.SlTrophy
    },
    {
        name: "Contact",
        slug: "/contact",
        Icon: sl_namespaceObject.SlEnvolope
    }
];
/**
 * Social Links under the Main Menu
 */ const social = [
    {
        name: "Twitter",
        url: "https://www.twitter.com/",
        Icon: io5_namespaceObject.IoLogoTwitter
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/",
        Icon: io5_namespaceObject.IoLogoInstagram
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/",
        Icon: io5_namespaceObject.IoLogoLinkedin
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
        inputs: __webpack_require__(1637),
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

;// CONCATENATED MODULE: ./pages/api/contact-form.js
/** *************************************************************
 * Any file inside the folder pages/api is mapped to /api/* and *
 * will be treated as an API endpoint instead of a page.        *
 ****************************************************************/ 

mail_default().setApiKey(process.env.SENDGRID_API_KEY);
const contact = async (req, res)=>{
    const { email  } = req.body;
    const { recipient , sender , subject  } = config.contactForm || {};
    if (!recipient) {
        return res.status(400).json({
            error: "Missing [config.contactForm.recipient] property in theme options."
        });
    }
    if (!sender) {
        return res.status(400).json({
            error: "Missing [config.contactForm.sender] property in theme options."
        });
    }
    if (!email) {
        return res.status(400).json({
            error: "Missing email address. Please provide a correct email address."
        });
    }
    if (req.method !== "POST") {
        return res.status(405).send({
            error: "Request method is not allowed."
        });
    }
    const getHtmlBody = (body)=>{
        return Object.entries(body).map(([key, value])=>{
            if (typeof value === "string") {
                return `<b>${key}</b>: ${value}`;
            }
            if (typeof value === "boolean") {
                return value === true ? key : false;
            }
            if (typeof value === "object") {
                return `<b>${key}</b>: ${getHtmlBody(value)?.filter(Boolean).join(", ")}`;
            }
            return html;
        });
    };
    let html = getHtmlBody(req.body);
    if (Array.isArray(html)) {
        html = html.join("<br />");
    }
    try {
        await mail_default().send({
            to: recipient,
            from: recipient,
            replyTo: email,
            subject: req.body.subject || subject || "Contact form entry",
            html
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            error: error.message
        });
    }
    return res.status(200).json({
        error: ""
    });
};
/* harmony default export */ const contact_form = (contact);


/***/ }),

/***/ 1637:
/***/ ((module) => {

module.exports = JSON.parse('[{"legend":"Your contact information","columns":3,"fields":[{"type":"text","name":"first-name","placeholder":"First name","autoComplete":"given-name","required":true},{"type":"text","name":"last-name","placeholder":"Last name","autoComplete":"family-name","required":true},{"type":"text","name":"email","placeholder":"Email address","autoComplete":"email","inputType":"email","required":true},{"type":"text","name":"company","placeholder":"Company Name","autoComplete":"company"},{"type":"text","name":"phone","placeholder":"Phone Number","autoComplete":"phone"},{"type":"select","name":"country","autoComplete":"country-name","defaultValue":"Select Country","options":[{"label":"Select Country","value":"","disabled":true},{"label":"United States","value":"United States"},{"label":"Canada","value":"Canada"},{"label":"Germany","value":"Germany"},{"label":"France","value":"France"}]}]},{"legend":"What services do you need for your project?","columns":3,"fields":[{"type":"checkbox","name":"project-type[Website Development]","label":"Website Development"},{"type":"checkbox","name":"project-type[App Development]","label":"App Development"},{"type":"checkbox","name":"project-type[Design System]","label":"Design System"},{"type":"checkbox","name":"project-type[Website Migration]","label":"Website Migration"},{"type":"checkbox","name":"project-type[E-commerce Site]","label":"E-commerce Site"},{"type":"checkbox","name":"project-type[Performance Evaluation]","label":"Performance Evaluation"}]},{"legend":"How much is the anticipated budget?","columns":3,"fields":[{"type":"radio","name":"budget","value":"Less than $2,000","label":"Less than $2,000"},{"type":"radio","name":"budget","value":"$2,000 - $10,000","label":"$2,000 - $10,000"},{"type":"radio","name":"budget","value":"More than $10,000","label":"More than $10,000"}]},{"legend":"Tell me about your project","columns":1,"fields":[{"type":"textarea","name":"message","placeholder":"Project description","rows":3}]}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6161));
module.exports = __webpack_exports__;

})();