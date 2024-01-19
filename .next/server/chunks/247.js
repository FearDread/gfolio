"use strict";
exports.id = 247;
exports.ids = [247];
exports.modules = {

/***/ 247:
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
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_3__);




const Typewriter = (props)=>{
    const { children , className , lineClassName , as ="div" , lines =[] , interval =3000 , withIcon =true , ...rest } = props;
    const [index, setIndex] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (lines.length < 1 && !children) return;
        const linesLength = children ? 1 : lines.length;
        if (linesLength === 1) {
            setTimeout(()=>setIndex(0), 1500);
        }
        if (linesLength > 1) {
            const intervalID = setInterval(()=>setIndex((i)=>(i + 1) % linesLength), interval);
            return ()=>clearInterval(intervalID);
        }
    }, [
        lines,
        children,
        interval
    ]);
    const Component = as;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Component, {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("m-0 inline-flex items-baseline font-mono", className),
        children: [
            withIcon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.IoChevronForwardSharp, {
                className: "hidden shrink-0 grow-0 self-center text-omega-500 md:block"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("animate-typewriter overflow-hidden whitespace-nowrap", lineClassName),
                ...rest,
                children: index !== null && (lines[index] || children)
            }, index),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "ml-2 -translate-y-2 animate-blink",
                children: "_"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Typewriter);


/***/ })

};
;