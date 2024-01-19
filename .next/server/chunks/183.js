"use strict";
exports.id = 183;
exports.ids = [183];
exports.modules = {

/***/ 8183:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var _components_FormInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7636);
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4177);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1893);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const IntroMessage = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "prose dark:prose-invert",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                    children: "Stay Tuned"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                children: "Want to become a Next.js pro?"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                children: "The best articles, links and news related to web development delivered once a week to your inbox."
            })
        ]
    });
const ErrorMessage = ({ errors , name  })=>errors[name] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "block bg-red-500/5 px-4 py-1 text-xs text-red-500",
        children: errors[name].message
    }) : null;
const SuccessMessage = ({ handleReset  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "my-6 mx-auto flex max-w-md justify-between bg-omega-800 p-3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text-alpha",
                children: "Please check your inbox and confirm your email."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>handleReset(),
                className: "h-5 w-5 hover:bg-omega-900",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoClose, {
                    className: "mx-auto h-4 w-4 text-omega-500"
                })
            })
        ]
    });
const Badge = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            className: "group h-6 text-omega-400 no-underline",
            target: "_blank",
            rel: "noreferrer",
            href: "https://convertkit.com?lmref=CeGsMw",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-xs",
                    children: "BUILT WITH"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    src: "/icons/convertkit.svg",
                    className: "ml-2 mb-1 inline h-6 w-24 align-middle group-hover:text-[#FB6970]"
                })
            ]
        })
    });
const Newsletter = ({ className  })=>{
    const { register , formState: { errors , isValidating , isSubmitting , isSubmitSuccessful  } , handleSubmit , setError , clearErrors , reset  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();
    const onSubmit = async (data)=>{
        try {
            const res = await fetch(`/api/subscribe`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: new Headers({
                    "Content-Type": "application/json",
                    credentials: "same-origin"
                })
            });
            if (res.status === 201) {
                return true;
            }
            const json = await res.json();
            if (json.error) {
                throw json.error;
            }
        } catch (error) {
            setError("service", {
                type: "serviceSideError",
                message: error
            });
        }
    };
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (errors.service && isValidating) {
            clearErrors("service");
        }
    }, [
        isValidating,
        errors.service,
        clearErrors
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IntroMessage, {}),
            isSubmitSuccessful ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SuccessMessage, {
                handleReset: reset
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: "relative mx-auto my-6 flex items-start justify-between",
                onSubmit: handleSubmit(onSubmit),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mr-3 inline-block grow",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FormInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                disabled: isSubmitting,
                                type: "text",
                                name: "email",
                                placeholder: "Johndoe@example.com",
                                "aria-label": "email address",
                                hasError: errors.email || errors.service,
                                ...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required."
                                    },
                                    pattern: {
                                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                        message: "Email is invalid."
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "absolute bottom-full left-0 z-10",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ErrorMessage, {
                                        errors: errors,
                                        name: "email"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ErrorMessage, {
                                        errors: errors,
                                        name: "service"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        as: "button",
                        type: "submit",
                        size: "xs",
                        disabled: isSubmitting,
                        children: "Subscribe"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Badge, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Newsletter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;