"use strict";
exports.id = 536;
exports.ids = [536];
exports.modules = {

/***/ 2331:
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
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6954);
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4027);
/* harmony import */ var _components_Date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(209);







const BlogCardHorizontal = ({ className , title , images , slug , date , tags  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("group prose prose-zinc flex dark:prose-invert", "md:bg-gradient-omega-900 md:shadow-lg", className),
        children: [
            images?.[0] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: slug.join("/"),
                "aria-label": title,
                className: "not-prose relative inline-block h-32 w-1/3 overflow-hidden md:h-40",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    src: images[0].src,
                    alt: images[0].alt || title,
                    animation: "fade-in zoom-out",
                    wrapperClassName: "transition-transform group-hover:scale-105 duration-300 ease-out before:bg-omega-700",
                    className: "object-cover",
                    sizes: "(min-width: 540px) 428px, 16vw",
                    fill: true
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-2/3 px-2 md:p-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "space-x-1",
                                children: tags?.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        slug: tag.slug,
                                        className: "m-0.5 font-mono text-sm lg:mr-2",
                                        children: tag.title
                                    }, tag.title))
                            }),
                            date && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "hidden text-omega-500 md:block",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Date__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    className: "block align-middle font-mono text-xs font-bold uppercase",
                                    date: date
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: slug.join("/"),
                        "aria-label": title,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                            className: "mb-0 mt-2 transition-colors group-hover:text-accent dark:group-hover:text-alpha md:mt-3",
                            children: title
                        })
                    })
                ]
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogCardHorizontal);


/***/ }),

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

/***/ })

};
;