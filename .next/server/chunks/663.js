"use strict";
exports.id = 663;
exports.ids = [663];
exports.modules = {

/***/ 9002:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6229);
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4177);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Reveal__WEBPACK_IMPORTED_MODULE_2__]);
_components_Reveal__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Companies = ({ title , list  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "prose prose-invert flex h-12 flex-wrap items-center justify-between",
        children: [
            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: "mb-4 w-full lg:mb-0 lg:w-auto",
                children: title
            }),
            list && list.map(({ icon  }, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Reveal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    animation: "fade-in zoom-in",
                    delay: i * 250,
                    children: icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        ...icon,
                        className: "h-12 w-36 fill-current text-omega-500"
                    })
                }, i))
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Companies);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4477:
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



const Sep = (props)=>{
    const { className , size , line , ...rest } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()({
            "h-px w-full bg-gradient-to-r from-accent via-beta to-alpha": line === true,
            "my-3 md:my-6": size == 6,
            "my-6 md:my-12": size == 12,
            "my-12 md:my-24": size == 24
        }, className),
        ...rest
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sep);


/***/ }),

/***/ 3663:
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
/* harmony import */ var _components_Reveal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6229);
/* harmony import */ var _components_Companies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9002);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ContentRenderer__WEBPACK_IMPORTED_MODULE_3__, _components_Reveal__WEBPACK_IMPORTED_MODULE_6__, _components_Companies__WEBPACK_IMPORTED_MODULE_7__]);
([_components_ContentRenderer__WEBPACK_IMPORTED_MODULE_3__, _components_Reveal__WEBPACK_IMPORTED_MODULE_6__, _components_Companies__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const HeroPhoto = ({ main  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            main.images?.[0] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hidden md:block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    src: main.images[0].src,
                    width: main.images[0].width,
                    height: main.images[0].height,
                    alt: main.images[0].alt,
                    animation: "slide-in-top fade-in",
                    priority: true
                })
            }),
            main.images?.[1] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "md:hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    src: main.images[1].src,
                    width: main.images[1].width,
                    height: main.images[1].height,
                    alt: main.images[1].alt,
                    className: "mx-auto",
                    priority: true
                })
            })
        ]
    });
const HeroAbout = ({ main  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Reveal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        animation: "fade-in slide-in-right",
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("prose prose-invert prose-headings:my-4 first-of-type:prose-headings:mt-0 prose-p:hidden", "prose-headings:my-6 prose-pre:max-w-[100vw] md:prose-p:block md:prose-pre:max-w-lg"),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ContentRenderer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            source: main
        })
    });
const Achievements = ({ achievements  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("prose prose-invert hidden grow grid-cols-2 gap-2 sm:grid md:gap-6 md:pr-6"),
        children: achievements?.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col items-center justify-center md:flex-row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "m-0 text-white md:pr-4",
                        children: item.number
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "dark:text-accent-400",
                        children: item.text
                    })
                ]
            }, i))
    });
const Layout = ({ main ={} , cta ={} , achievements =[] , companies  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mx-auto my-auto py-4 md:p-10 lg:p-20",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute right-0 top-0 box-content hidden h-full w-1/4 bg-gradient-to-br from-alpha-100 via-alpha to-beta pl-5 md:block"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "items-end text-center md:flex md:text-left",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative shrink-0 basis-1/2 text-center md:order-2 md:-ml-20",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeroPhoto, {
                            main: main
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "z-10 mt-6 basis-full md:mb-12 md:mt-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeroAbout, {
                            main: main
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sep__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        line: true,
                        className: "hidden md:block"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("md:bg-gradient-omega-900 flex flex-wrap items-center justify-between", "px-4 md:p-8 md:shadow-xl"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Achievements, {
                                achievements: achievements
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "prose prose-invert grow text-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ContentRenderer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    source: cta
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-6 mt-12 hidden w-3/4 px-2 pr-12 md:block",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Companies__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            ...companies
                        })
                    })
                ]
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;