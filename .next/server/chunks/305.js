exports.id = 305;
exports.ids = [305];
exports.modules = {

/***/ 7572:
/***/ ((module) => {

// Exports
module.exports = {
	"loader": "Loader_loader__7OWxw",
	"loaderstrokedash": "Loader_loaderstrokedash__RLW5M"
};


/***/ }),

/***/ 1305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Loader_Loader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./components/Loader/Loader.module.css
var Loader_module = __webpack_require__(7572);
;// CONCATENATED MODULE: ./components/Loader/Loader.jsx




const Loader = (props)=>{
    const { className , text  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full text-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_clsx_default()("mx-auto h-10 w-10", className),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                    viewBox: "0 0 226 200",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                                x1: "114.720775%",
                                y1: "181.283245%",
                                x2: "39.5399306%",
                                y2: "100%",
                                id: "loader-linear-gradient",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                        stopColor: "#000000",
                                        offset: "0%"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                        stopColor: "#FFFFFF",
                                        offset: "100%"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("g", {
                            className: Loader_module.loader,
                            fill: "none",
                            stroke: "url(#loader-linear-gradient)",
                            strokeWidth: "18",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M113,5.08219117 L4.28393801,197.5 L221.716062,197.5 L113,5.08219117 Z"
                            })
                        })
                    ]
                })
            }),
            text && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "prose dark:prose-invert",
                children: text
            })
        ]
    });
};
/* harmony default export */ const Loader_Loader = (Loader);

;// CONCATENATED MODULE: ./components/Loader/index.js



/***/ })

};
;