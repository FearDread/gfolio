"use strict";
exports.id = 801;
exports.ids = [801];
exports.modules = {

/***/ 4312:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9961);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__]);
next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const ContentRenderer = (props)=>{
    const { source  } = props;
    if (!source) return null;
    const content = source.compiledSource ? source : source.content;
    if (!content) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__.MDXRemote, {
        ...content
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentRenderer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6229:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4009);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__]);
react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Reveal = (props)=>{
    const { className , animation ="fade-in" , threshold =0.3 , triggerOnce =true , delay =undefined , duration =undefined , timeout =undefined , style ={} , children , ...rest } = props;
    const fx = {
        fadeIn: animation.includes("fade-in"),
        slideInRight: animation.includes("slide-in-right"),
        slideInLeft: animation.includes("slide-in-left"),
        slideInTop: animation.includes("slide-in-top"),
        slideInBottom: animation.includes("slide-in-bottom"),
        zoomIn: animation.includes("zoom-in"),
        scaleX: animation.includes("scale-x")
    };
    const [ref, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__.useInView)({
        triggerOnce,
        threshold,
        delay: timeout
    });
    const rootClassName = clsx__WEBPACK_IMPORTED_MODULE_2___default()("md:transition-all", {
        "md:origin-left": fx.scaleX,
        "md:duration-1000": duration === undefined
    }, !inView && {
        "md:opacity-0": fx.fadeIn,
        "md:-translate-x-10": fx.slideInRight,
        "md:translate-x-10": fx.slideInLeft,
        "md:translate-y-5": fx.slideInTop,
        "md:-translate-y-5": fx.slideInBottom,
        "md:scale-90": fx.zoomIn,
        "md:scale-x-0": fx.scaleX
    }, className);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: rootClassName,
        style: {
            transitionDelay: delay ? `${delay}ms` : undefined,
            transitionDuration: duration ? `${duration}ms` : undefined,
            ...style
        },
        ...rest,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reveal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;