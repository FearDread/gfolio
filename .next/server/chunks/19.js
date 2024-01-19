"use strict";
exports.id = 19;
exports.ids = [19];
exports.modules = {

/***/ 6019:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ContentRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4312);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6954);
/* harmony import */ var _components_Sep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4477);
/* harmony import */ var _components_BlogCardHorizontalMini__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2331);
/* harmony import */ var _components_Reveal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6229);
/* harmony import */ var _components_Companies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9002);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ContentRenderer__WEBPACK_IMPORTED_MODULE_3__, _components_Reveal__WEBPACK_IMPORTED_MODULE_7__, _components_Companies__WEBPACK_IMPORTED_MODULE_8__]);
([_components_ContentRenderer__WEBPACK_IMPORTED_MODULE_3__, _components_Reveal__WEBPACK_IMPORTED_MODULE_7__, _components_Companies__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const HeroPhoto = ({ main  })=>main.images?.[1] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative mx-auto w-full text-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Reveal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                delay: 1000,
                animation: "fade-in slide-in-top",
                className: "prose absolute -bottom-4 left-1/2 z-20 w-full -translate-x-1/2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-gradient-500 m-0 text-7xl drop-shadow-md md:text-8xl",
                    children: main.name
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Reveal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                animation: "fade-in zoom-in",
                className: "absolute left-1/2 h-72 w-72 -translate-x-1/2 md:bottom-0 md:h-96 md:w-96",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("h-full w-full rounded-full md:animate-spin-slow", "bg-gradient-to-tr from-alpha-600 via-beta to-accent")
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                src: main.images[1].src,
                width: main.images[1].width,
                height: main.images[1].height,
                alt: main.images[1].alt,
                animation: "fade-in slide-in-top",
                className: "mx-auto",
                priority: true
            })
        ]
    });
const HeroAbout = ({ main  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Reveal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        animation: "fade-in slide-in-bottom",
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("mx-auto max-w-3xl px-4 md:p-0", "prose prose-invert prose-headings:my-4 first-of-type:prose-headings:mt-0", "prose-p:mx-auto prose-p:max-w-prose md:prose-headings:my-6", "prose-hr:mx-auto prose-hr:max-w-md"),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ContentRenderer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            source: main
        })
    });
const Achievements = ({ achievements  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Reveal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                animation: "fade-in slide-in-bottom",
                className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("relative z-10", "mx-auto max-w-5xl p-10 text-center md:p-6", "ld:grid-cols-4 prose prose-invert grid grid-cols-2 lg:grid-cols-4", "bg-gradient-omega-900 shadow-lg", "divide-omega-700/30 lg:divide-x"),
                children: achievements?.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Reveal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        animation: "fade-in",
                        delay: i * 250,
                        className: "flex-1 p-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "m-0 text-accent",
                                children: item.number
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mt-2 mb-0 text-omega-300",
                                children: item.text
                            })
                        ]
                    }, i))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Reveal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                animation: "fade-in scale-x",
                className: "mx-auto h-px max-w-5xl bg-gradient-to-r from-accent via-beta to-alpha"
            })
        ]
    });
const Articles = ({ articles  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "prose prose-invert text-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ContentRenderer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    source: articles?.content
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-8 grid gap-6 md:mt-14 md:gap-4 lg:grid-cols-2",
                children: articles?.collection?.records?.map((record)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BlogCardHorizontalMini__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        ...record
                    }, record.slug.join("/")))
            })
        ]
    });
const Layout = ({ main ={} , articles ={} , cta ={} , achievements =[] , companies  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mx-auto my-auto",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "items-center py-10 md:p-10 lg:p-20",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeroPhoto, {
                            main: main
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Achievements, {
                            achievements: achievements
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sep__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            size: 12
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeroAbout, {
                            main: main
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sep__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            size: 12
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "prose prose-invert",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ContentRenderer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                source: cta
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "hidden md:block",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sep__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    size: 24
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Companies__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    ...companies
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-gradient-omega-900 py-10 md:p-10 lg:p-20",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Articles, {
                    articles: articles
                })
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;