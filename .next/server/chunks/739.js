"use strict";
exports.id = 739;
exports.ids = [739];
exports.modules = {

/***/ 1739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8797);
/* harmony import */ var next_share__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_share__WEBPACK_IMPORTED_MODULE_2__);



const SocialShare = (props)=>{
    const { className , url , quote , round =false , size =32 , ...rest } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("flex flex items-center space-x-2 pt-6 md:flex-col md:space-x-0 md:space-y-2", className),
        ...rest,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hidden sm:block md:mb-4 md:-rotate-90",
                children: "Sharing"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hidden h-px w-6 bg-white sm:block md:h-6 md:w-px"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_share__WEBPACK_IMPORTED_MODULE_2__.FacebookShareButton, {
                url: url,
                quote: quote,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_share__WEBPACK_IMPORTED_MODULE_2__.FacebookIcon, {
                    size: size,
                    round: round
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_share__WEBPACK_IMPORTED_MODULE_2__.TwitterShareButton, {
                url: url,
                title: quote,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_share__WEBPACK_IMPORTED_MODULE_2__.TwitterIcon, {
                    size: size,
                    round: round
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_share__WEBPACK_IMPORTED_MODULE_2__.LinkedinShareButton, {
                url: url,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_share__WEBPACK_IMPORTED_MODULE_2__.LinkedinIcon, {
                    size: size,
                    round: round
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_share__WEBPACK_IMPORTED_MODULE_2__.WhatsappShareButton, {
                url: url,
                title: quote,
                separator: ":: ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_share__WEBPACK_IMPORTED_MODULE_2__.WhatsappIcon, {
                    size: size,
                    round: round
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_share__WEBPACK_IMPORTED_MODULE_2__.PocketShareButton, {
                url: url,
                title: "Next Share",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_share__WEBPACK_IMPORTED_MODULE_2__.PocketIcon, {
                    size: size,
                    round: round
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_share__WEBPACK_IMPORTED_MODULE_2__.EmailShareButton, {
                url: url,
                subject: quote,
                body: "body",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_share__WEBPACK_IMPORTED_MODULE_2__.EmailIcon, {
                    size: size,
                    round: round
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialShare);


/***/ })

};
;