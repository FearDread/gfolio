"use strict";
exports.id = 900;
exports.ids = [900];
exports.modules = {

/***/ 1893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Button)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./components/LoadingDots.jsx



const LoadingDots = (props)=>{
    const { className , ...rest } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_clsx_default()("flex items-center justify-center space-x-2 text-center leading-7", className),
        ...rest,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "h-2 w-2 animate-ping rounded-full bg-omega-500"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "h-2 w-2 animate-ping rounded-full bg-omega-500",
                style: {
                    animationDelay: "0.2s"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "h-2 w-2 animate-ping rounded-full bg-omega-500",
                style: {
                    animationDelay: "0.4s"
                }
            })
        ]
    });
};
/* harmony default export */ const components_LoadingDots = (LoadingDots);

;// CONCATENATED MODULE: ./components/Button.jsx




const Button = /*#__PURE__*/ external_react_default().forwardRef((props, ref)=>{
    const { variant ="white" , size ="md" , disabled =false , className , as ="a" , children , ...rest } = props;
    const Component = as;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Component, {
        ref: ref,
        className: external_clsx_default()("relative inline-flex items-center justify-center", "leading-normal no-underline", "group cursor-pointer select-none focus:outline-none", "peer md:peer-even:ml-6", disabled && "pointer-events-none grayscale", className),
        disabled: disabled,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: external_clsx_default()("z-10 h-full w-full border-4 border-transparent group-active:border-alpha", "flex transform-gpu transition-transform", "not-prose font-mono", {
                    "py-2 px-4 text-sm": size === "xs",
                    "py-3 px-6 text-sm": size === "sm",
                    "py-4 px-8 text-base": size === "md",
                    "py-5 px-10 text-lg": size === "lg",
                    "py-6 px-12 text-xl": size === "xl",
                    "hover:translate-x-1 hover:translate-y-1": size === "xs",
                    "hover:translate-x-2 hover:translate-y-2": size !== "xs",
                    "bg-white text-black": variant === "white",
                    "bg-black text-white": variant === "black"
                }),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: external_clsx_default()("mx-auto", {
                            invisible: disabled
                        }),
                        children: children
                    }),
                    disabled && /*#__PURE__*/ jsx_runtime_.jsx(components_LoadingDots, {
                        className: "absolute left-0 top-0 h-full w-full"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_clsx_default()("absolute h-full w-full", "bg-gradient-to-r from-alpha via-alpha-300 to-beta", {
                    "top-1 left-1": size === "xs",
                    "top-2 left-2": size !== "xs"
                })
            })
        ]
    });
});
Button.displayName = "Button";
/* harmony default export */ const components_Button = (Button);


/***/ }),

/***/ 7636:
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



const FormInput = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((props, ref)=>{
    const { label , placeholder , id , name , autoComplete , hasError , type ="text" , inputType , ...rest } = props;
    const tags = {
        text: "input",
        textarea: "textarea"
    };
    const Component = tags[type];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: name,
                className: "block",
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                type: inputType || type,
                ref: ref,
                id: id,
                name: name,
                autoComplete: autoComplete,
                className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("block w-full border-0 py-3 px-4", "border-b bg-omega-700/20  placeholder-omega-400", hasError ? "border-red-500 focus:border-0 focus:ring-red-500" : "border-accent focus:ring-accent-500"),
                placeholder: placeholder,
                ...rest
            })
        ]
    });
});
FormInput.displayName = "FormInput";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormInput);


/***/ })

};
;