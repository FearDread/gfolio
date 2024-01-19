"use strict";
exports.id = 662;
exports.ids = [662];
exports.modules = {

/***/ 4177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3831);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_inlinesvg__WEBPACK_IMPORTED_MODULE_1__);


const Icon = ({ source , src , width =28 , ...props })=>source || src ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_inlinesvg__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: source || src,
        ...props,
        width: width
    }) : null;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 6954:
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);




const Image = (props)=>{
    const [isLoaded, setIsLoaded] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const { wrapperClassName , className , animation ="fade-in" , alt , quality =90 , ...rest } = props;
    const fx = {
        fadeIn: animation.includes("fade-in"),
        zoomOut: animation.includes("zoom-out"),
        maskRight: animation.includes("mask-right"),
        maskLeft: animation.includes("mask-left"),
        slideInTop: animation.includes("slide-in-top")
    };
    const onLoadingComplete = ()=>{
        setIsLoaded(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("relative overflow-hidden", {
            "h-full w-full": rest.fill
        }, wrapperClassName),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("absolute left-0 top-0 z-10 hidden h-full w-[120%] bg-omega-900", "origin-bottom skew-x-6 transform-gpu transition-transform duration-700", (fx.maskRight || fx.maskLeft) && "md:block", {
                    "translate-x-full": isLoaded && fx.maskRight,
                    "-translate-x-full": isLoaded && fx.maskLeft
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                onLoadingComplete: onLoadingComplete,
                className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("md:transform-gpu md:transition-all md:duration-700", !isLoaded && {
                    "md:opacity-0": fx.fadeIn,
                    "md:scale-150 md:will-change-transform": fx.zoomOut,
                    "md:translate-y-20 md:will-change-transform": fx.slideInTop
                }, className),
                alt: alt,
                quality: quality,
                ...rest
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);


/***/ })

};
;