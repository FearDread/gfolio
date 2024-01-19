"use strict";
exports.id = 197;
exports.ids = [197];
exports.modules = {

/***/ 6239:
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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const FormCheckbox = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((props, ref)=>{
    const { id , label , value , type ="checkbox" , name  } = props;
    const { setValue  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
    const handleChange = (e)=>{
        const { value , checked  } = e.target;
        setValue(e.target.name, value ? value : checked);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                ref: ref,
                id: id,
                name: name,
                type: type,
                value: value,
                className: "h-6 w-6 border-omega-300 text-accent-600 focus:ring-accent-500",
                onChange: handleChange
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: id,
                className: "ml-3 block",
                children: label
            })
        ]
    });
});
FormCheckbox.displayName = "FormCheckbox";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormCheckbox);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7347:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_FormCheckbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6239);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_FormCheckbox__WEBPACK_IMPORTED_MODULE_2__]);
_components_FormCheckbox__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const FormRadio = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((props, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FormCheckbox__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...props,
        ref: ref,
        type: "radio"
    });
});
FormRadio.displayName = "FormRadio";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormRadio);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9376:
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



const FormSelect = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((props, ref)=>{
    const { label , name , autoComplete , hasError , ...rest } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: name,
                className: "block",
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                ref: ref,
                id: name,
                name: name,
                autoComplete: autoComplete,
                className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("block w-full border-0 py-3 px-4", "border-b bg-omega-700/20  placeholder-omega-400", hasError ? "border-red-500 focus:border-0 focus:ring-red-500" : "border-accent focus:ring-accent-500"),
                ...rest,
                children: props.options.map(({ label , ...rest }, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        className: "text-black",
                        ...rest,
                        children: label
                    }, i))
            })
        ]
    });
});
FormSelect.displayName = "FormSelect";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormSelect);


/***/ }),

/***/ 7265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_FormInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7636);



const FormTextarea = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((props, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FormInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...props,
        ref: ref,
        type: "textarea"
    });
});
FormTextarea.displayName = "FormTextarea";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormTextarea);


/***/ }),

/***/ 1197:
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
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var _components_ContentRenderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4312);
/* harmony import */ var _components_Reveal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6229);
/* harmony import */ var _components_FormInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7636);
/* harmony import */ var _components_FormTextarea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7265);
/* harmony import */ var _components_FormSelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9376);
/* harmony import */ var _components_FormCheckbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6239);
/* harmony import */ var _components_FormRadio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7347);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1893);
/* harmony import */ var react_icons_sl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5065);
/* harmony import */ var react_icons_sl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_sl__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _theme_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _components_ContentRenderer__WEBPACK_IMPORTED_MODULE_4__, _components_Reveal__WEBPACK_IMPORTED_MODULE_5__, _components_FormCheckbox__WEBPACK_IMPORTED_MODULE_9__, _components_FormRadio__WEBPACK_IMPORTED_MODULE_10__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _components_ContentRenderer__WEBPACK_IMPORTED_MODULE_4__, _components_Reveal__WEBPACK_IMPORTED_MODULE_5__, _components_FormCheckbox__WEBPACK_IMPORTED_MODULE_9__, _components_FormRadio__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const { inputs  } = _theme_config__WEBPACK_IMPORTED_MODULE_13__/* .config.contactForm */ .vc.contactForm || {};
const FormComponent = {
    text: _components_FormInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
    textarea: _components_FormTextarea__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
    select: _components_FormSelect__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
    radio: _components_FormRadio__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
    checkbox: _components_FormCheckbox__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z
};
const ErrorMessage = ({ errors , name  })=>errors[name] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mb-4 block bg-red-500/5 px-4 py-2 text-red-500",
        children: errors[name].message
    }) : null;
const SuccessMessage = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Reveal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        animation: "fade-in",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "absolute inset-0 z-20 flex h-full w-full items-center justify-center bg-omega-800/95",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-md text-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_sl__WEBPACK_IMPORTED_MODULE_12__.SlCheck, {
                        className: "mx-auto text-5xl text-alpha"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        children: "Thank you for contacting me."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "I will get back to you as soon as possible."
                    })
                ]
            })
        })
    });
const Contact01 = ({ main ={}  })=>{
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();
    const { register , formState: { errors , isValidating , isSubmitting , isSubmitSuccessful  } , handleSubmit , setError , clearErrors  } = methods;
    const onSubmit = async (data)=>{
        try {
            const res = await fetch(`/api/contact-form`, {
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
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "my-auto p-3 md:p-6 lg:p-12",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "prose prose-invert items-start lg:flex",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Reveal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    animation: "fade-in slide-in-right",
                    className: "prose prose-invert basis-1/3 lg:mr-14",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ContentRenderer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        source: main
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Reveal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    animation: "fade-in zoom-in",
                    className: "md:with-back-plate max-w-3xl border border-omega-700 md:before:bg-omega-700",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.FormProvider, {
                        ...methods,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                            onSubmit: handleSubmit(onSubmit),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative overflow-hidden shadow",
                                children: [
                                    isSubmitSuccessful && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SuccessMessage, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "bg-gradient-omega-900",
                                        children: inputs?.map(({ legend , columns , fields  }, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                                                className: "border-b border-dashed border-omega-700",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "bg-omega-800 p-5",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("legend", {
                                                            className: "m-0 p-0",
                                                            children: legend
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("grid gap-2 p-5", {
                                                            "md:grid-cols-2": columns === 2,
                                                            "md:grid-cols-3": columns === 3
                                                        }),
                                                        children: fields.map((input, j)=>{
                                                            const Component = FormComponent[input.type];
                                                            return input.type && Component ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "flex items-center",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                                                    ...input,
                                                                    ...register(input.id || input.name)
                                                                })
                                                            }, (input.id || input.name) + j) : null;
                                                        })
                                                    })
                                                ]
                                            }, i))
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-omega-900 px-4 pt-6 pb-8 text-left md:px-8",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ErrorMessage, {
                                                errors: errors,
                                                name: "service"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                as: "button",
                                                type: "submit",
                                                size: "sm",
                                                className: "w-full sm:w-1/3",
                                                disabled: isSubmitting,
                                                children: "Submit"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact01);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;