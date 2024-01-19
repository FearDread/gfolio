"use strict";
exports.id = 817;
exports.ids = [817];
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

/***/ 8817:
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
                className: "with-back-plate hidden md:block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    src: main.images[0].src,
                    width: main.images[0].width,
                    height: main.images[0].height,
                    alt: main.images[0].alt,
                    animation: "mask-left",
                    priority: true
                })
            }),
            main.images?.[1] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "with-back-plate md:hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    src: main.images[1].src,
                    width: main.images[1].width,
                    height: main.images[1].height,
                    alt: main.images[1].alt,
                    animation: "mask-left",
                    priority: true
                })
            })
        ]
    });
const HeroAbout = ({ main  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Reveal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        animation: "fade-in slide-in-right",
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("md:mr-52", "prose prose-invert prose-headings:my-4 first-of-type:prose-headings:mt-0 prose-p:hidden", "md:prose-headings:my-6 md:prose-p:block"),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ContentRenderer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            source: main
        })
    });
const Achievements = ({ achievements  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Reveal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        animation: "fade-in slide-in-left",
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("prose prose-invert relative z-10 flex flex-wrap md:mt-12", "md:bg-gradient-omega-900 md:shadow-2xl"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sep__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                line: true,
                className: "hidden md:block"
            }),
            achievements?.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-1 flex-col items-center justify-center px-1 py-4 md:flex-row md:justify-start md:p-6",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("m-0 md:pr-4", i === 0 && "text-accent", i === 1 && "text-beta", i >= 2 && "text-alpha"),
                            children: item.number
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-white",
                            children: item.text
                        })
                    ]
                }, i))
        ]
    });
const Layout = ({ main ={} , cta ={} , achievements =[] , companies  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mx-auto my-auto p-4 md:p-10 lg:p-20",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "items-center text-center md:flex md:text-left",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "inline-block shrink-0 md:order-2 md:-ml-40",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeroPhoto, {
                            main: main
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "z-10 mt-6 basis-full md:m-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeroAbout, {
                                main: main
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Achievements, {
                                achievements: achievements
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "prose prose-invert mt-6 md:mt-12",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ContentRenderer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    source: cta
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-6 mt-12 hidden px-4 md:block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Companies__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    ...companies
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