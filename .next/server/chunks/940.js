"use strict";
exports.id = 940;
exports.ids = [940];
exports.modules = {

/***/ 5017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6954);
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4177);
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4027);







const ProjectCardHorizontal = ({ title , logo , images , slug , tags , description , attributes , index  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        href: slug.join("/"),
        "aria-label": title,
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("group grid items-center transition-all duration-200 md:grid-cols-2 md:gap-10", "dark:bg-gradient-omega-900 prose prose-zinc bg-white dark:prose-invert dark:md:shadow-lg"),
        children: [
            images && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: slug.join("/"),
                "aria-label": title,
                className: "not-prose relative block h-80 w-full p-4",
                children: images[0] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            src: images[0].src,
                            alt: images[0].alt || title,
                            animation: "fade-in mask-left",
                            wrapperClassName: "transition-transform md:group-hover:scale-105 duration-300 ease-out",
                            className: "object-contain object-left",
                            sizes: "(min-width: 768px) 540px, 100vw",
                            priority: index === 0,
                            fill: true
                        }),
                        images[0].overlay && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute top-0 right-4 z-10 h-full w-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                src: images[0].overlay.src,
                                alt: images[0].overlay.alt || title,
                                animation: "fade-in",
                                wrapperClassName: "transition-transform md:group-hover:scale-105 origin-right duration-500 ease-out drop-shadow-2xl",
                                className: "object-contain object-right",
                                sizes: "(min-width: 768px) 540px, 100vw",
                                priority: index === 0,
                                fill: true
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "p-4 md:p-10 md:pl-0",
                children: [
                    logo?.src ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-10",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            ...logo,
                            className: "h-full w-36 fill-current text-omega-400"
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                        className: "text-omega-400",
                        children: logo.alt
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: slug.join("/"),
                        "aria-label": title,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: "mt-6 transition-colors group-hover:text-accent dark:group-hover:text-alpha",
                            children: title
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                        className: "mt-6 block",
                        children: description
                    }),
                    tags && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mb-2 mt-6 font-bold dark:text-accent-400",
                                children: "Technologies"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mt-2",
                                children: tags?.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        slug: tag.slug,
                                        className: "m-0.5 font-mono text-sm lg:mr-2",
                                        children: tag.title
                                    }, tag.title))
                            })
                        ]
                    }),
                    attributes && Array.isArray(attributes) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dl", {
                        className: "mt-2 flex flex-wrap",
                        children: attributes.map(({ label , value  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "basis-1/2 py-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                        className: "mb-1 font-bold dark:text-accent-400",
                                        children: label
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                        children: value
                                    })
                                ]
                            }, label))
                    })
                ]
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectCardHorizontal);


/***/ }),

/***/ 9553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__);




const DateComponent = (props)=>{
    const { stars , forks , name , owner , description , url , language , className  } = props;
    if (!name) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: url,
        "aria-label": name,
        target: "_blank",
        rel: "noreferrer noopener",
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("group prose flex h-full flex-col no-underline", "bg-gradient-to-br from-alpha-100 via-alpha to-beta", className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "p-4 md:p-6",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                        className: "text-accent",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "text-omega-900",
                                children: [
                                    owner,
                                    "/"
                                ]
                            }),
                            name
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: description
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("mt-auto flex justify-between px-4 py-3 font-mono font-bold md:px-6", "border-t border-beta bg-white", "group-hover:bg-gradient-omega-900 border-b border-b-transparent transition-colors duration-300 group-hover:border-b-omega-800 group-hover:text-white"),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-center",
                        children: language
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__.BiStar, {
                                className: "mr-1 text-yellow-500"
                            }),
                            stars
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__.BiGitRepoForked, {
                                className: "mr-1 text-beta"
                            }),
                            forks
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateComponent);


/***/ }),

/***/ 4027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




const Tag = (props)=>{
    const { children , className , slug , ...rest } = props;
    const isLinked = Array.isArray(slug);
    const Component = isLinked ? (next_link__WEBPACK_IMPORTED_MODULE_3___default()) : "span";
    const href = isLinked ? slug.join("/") : undefined;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("inline-block select-none px-3 py-1 uppercase no-underline", "bg-beta/10 text-beta", isLinked && "hover:bg-beta/20", className),
        href: href,
        ...rest,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tag);


/***/ }),

/***/ 9940:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ProjectCardHorizontal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5017);
/* harmony import */ var _components_RepositoryCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9553);
/* harmony import */ var _components_ContentRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4312);
/* harmony import */ var _components_Reveal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6229);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ContentRenderer__WEBPACK_IMPORTED_MODULE_3__, _components_Reveal__WEBPACK_IMPORTED_MODULE_4__]);
([_components_ContentRenderer__WEBPACK_IMPORTED_MODULE_3__, _components_Reveal__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Layout = ({ projects , github  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mx-auto p-3 md:p-6 lg:p-12",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "prose prose-headings:mb-4 dark:prose-invert",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ContentRenderer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    source: github
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-4 grid grid-cols-fluid gap-4 [--tw-fluid-col-min:15rem] md:mt-12 md:gap-6",
                    children: github?.repositories?.records?.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Reveal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            animation: "fade-in slide-in-top",
                            delay: i * 100,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RepositoryCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                ...item
                            })
                        }, item.name))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "my-6 md:my-12"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ContentRenderer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    source: projects
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-4 grid gap-4 md:mt-12 md:gap-6",
                    children: projects?.collection?.records?.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProjectCardHorizontal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            index: i,
                            ...item
                        }, item.slug))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;