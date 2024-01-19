"use strict";
exports.id = 201;
exports.ids = [201];
exports.modules = {

/***/ 1201:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4009);
/* harmony import */ var react_lite_youtube_embed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(495);
/* harmony import */ var react_lite_youtube_embed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lite_youtube_embed__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__]);
react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const MDXYoutube = ({ id , ...props })=>{
    const [inViewRef, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView)({
        triggerOnce: true,
        threshold: 0.1
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-omega-800",
        ref: inViewRef,
        children: inView && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lite_youtube_embed__WEBPACK_IMPORTED_MODULE_3___default()), {
            id: id,
            poster: "maxresdefault",
            activatedClass: "cursor-none before:hidden [--yt-btn-opacity:0]",
            iframeClass: "w-full h-full absolute top-0 left-0",
            playerClass: clsx__WEBPACK_IMPORTED_MODULE_1___default()("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", "w-24 h-16 z-20 bg-red-600 transition-transform group-hover:scale-110", "opacity-[var(--yt-btn-opacity,1)]", 'before:content-["_"]', "before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2", "before:border-solid before:border-t-[1em] before:border-b-[1em] before:border-l-[2em] before:border-transparent before:border-l-white"),
            wrapperClass: clsx__WEBPACK_IMPORTED_MODULE_1___default()("bg-black relative block bg-center bg-cover cursor-pointer group", 'after:content-["_"] after:block after:pb-[var(--aspect-ratio)]', 'before:content-["_"] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:z-10', "before:bg-omega-900 before:opacity-0 hover:before:opacity-50", "before:transition-opacity"),
            ...props
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXYoutube);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;