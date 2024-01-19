exports.id = 702;
exports.ids = [702];
exports.modules = {

/***/ 2362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/author-profile-picture.6aee5575.jpg","height":96,"width":96,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAArBf/xAAeEAACAQMFAAAAAAAAAAAAAAABAgMFERMABCIxMv/aAAgBAQABPwCOorBXt471GLC7du3kkWxDlYa//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAJBcf/aAAgBAgEBPwBbp//EABcRAAMBAAAAAAAAAAAAAAAAAAACQnL/2gAIAQMBAT8Aecn/2Q==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 4312:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 1767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4095);
/* harmony import */ var react_portal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_portal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6954);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5001);
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8354);
/* harmony import */ var pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_7__);








const Button = ({ as ="button" , className , children , ...props })=>{
    const Component = as;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("bg-omega-900 p-2 text-white shadow-lg hover:text-alpha", "hover:bg-black active:bg-alpha active:text-black", className),
        ...props,
        children: children
    });
};
const ImageGallery = (props)=>{
    const { images  } = props;
    const portalRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const [activeIndex, setActiveIndex] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    const nextNode =  false && 0;
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        portalRef.current && portalRef.current.focus();
    }, [
        activeIndex
    ]);
    if (!images || !images.length) return null;
    const thumbsToShow = images.length > 4 ? 3 : images.length;
    const handleClickOutside = (e)=>{
        if (e.currentTarget != e.target) return;
        handleClose();
    };
    const handleEsc = (e)=>{
        if (e.key !== "Escape") return;
        handleClose();
    };
    const handleClose = ()=>setActiveIndex(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "grid grid-cols-4 grid-rows-3 gap-4",
        children: [
            images.slice(0, thumbsToShow).map((image, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("group relative", {
                        "col-span-3 row-span-3": i === 0 && thumbsToShow > 1,
                        "col-span-full row-span-full": i === 0 && thumbsToShow === 1
                    }),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            src: image.src,
                            alt: image.alt,
                            priority: i === 0,
                            animation: "fade-in zoom-out",
                            wrapperClassName: "aspect-w-16 aspect-h-9",
                            className: "object-cover",
                            sizes: i === 0 ? "(min-width: 1120px) 1120px, 33vw" : "(min-width: 540px) 428px, 8vw",
                            fill: true
                        }),
                        thumbsToShow > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            onClick: ()=>setActiveIndex(i),
                            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("absolute inset-0 flex cursor-pointer flex-col items-center", "opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100"),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoEyeSharp, {
                                    className: "mt-auto text-3xl invert"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figcaption", {
                                    className: "mt-auto w-full",
                                    children: image.alt
                                })
                            ]
                        })
                    ]
                }, i)),
            images.length > thumbsToShow && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setActiveIndex(0),
                className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("flex cursor-pointer items-center justify-center", "border border-transparent bg-omega-800 hover:border-omega-600"),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                    className: "m-0 text-omega-300",
                    children: [
                        "+",
                        images.length - thumbsToShow
                    ]
                })
            }),
            activeIndex !== null && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_portal__WEBPACK_IMPORTED_MODULE_3__.Portal, {
                node: nextNode,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    onClick: handleClickOutside,
                    onKeyDown: handleEsc,
                    ref: portalRef,
                    tabIndex: -1,
                    className: "fixed inset-0 z-50 flex h-screen w-screen items-center justify-center overflow-auto bg-omega-900/95",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_6__.CarouselProvider, {
                            tabIndex: "-1",
                            className: "relative w-full",
                            currentSlide: activeIndex,
                            totalSlides: images.length,
                            naturalSlideHeight: 45,
                            naturalSlideWidth: 100,
                            lockOnWindowScroll: true,
                            infinite: true,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_6__.Slider, {
                                    children: images.map((image, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_6__.Slide, {
                                            index: i,
                                            className: "text-center",
                                            tag: "figure",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                    src: image.src,
                                                    alt: image.alt,
                                                    fill: true,
                                                    className: "object-scale-down object-top",
                                                    animation: "fade-in zoom-out",
                                                    quality: 100
                                                }),
                                                image.alt && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figcaption", {
                                                    className: "absolute bottom-0 left-1/2 -translate-x-1/2 bg-black px-6 py-1 text-white",
                                                    children: image.alt
                                                })
                                            ]
                                        }, i))
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
                                    as: pure_react_carousel__WEBPACK_IMPORTED_MODULE_6__.ButtonBack,
                                    className: "absolute top-1/2 left-2 z-10 -translate-y-1/2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoChevronBackSharp, {
                                        className: "text-4xl"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
                                    as: pure_react_carousel__WEBPACK_IMPORTED_MODULE_6__.ButtonNext,
                                    className: "absolute top-1/2 right-2 z-10 -translate-y-1/2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoChevronForwardSharp, {
                                        className: "text-4xl"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Button, {
                            className: "absolute top-2 right-2 z-10",
                            onClick: handleClose,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoCloseSharp, {
                                    className: "text-4xl"
                                }),
                                "ESC"
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageGallery);


/***/ }),

/***/ 4702:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ContentRenderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4312);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6954);
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4027);
/* harmony import */ var _components_Date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(209);
/* harmony import */ var _components_ImageGallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1767);
/* harmony import */ var _components_Sep__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4477);
/* harmony import */ var _components_Newsletter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8183);
/* harmony import */ var _theme_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(250);
/* harmony import */ var _public_author_profile_picture_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2362);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ContentRenderer__WEBPACK_IMPORTED_MODULE_4__, _components_Newsletter__WEBPACK_IMPORTED_MODULE_10__]);
([_components_ContentRenderer__WEBPACK_IMPORTED_MODULE_4__, _components_Newsletter__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const SocialShare = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/* import() */ 739).then(__webpack_require__.bind(__webpack_require__, 1739)), {
    loadableGenerated: {
        modules: [
            "../layouts/Post.jsx -> " + "@/components/SocialShare"
        ]
    }
});
const Layout = ({ content , title , description , date , seo ={} , tags =[] , images =[] , attributes =[] , pageUrl  })=>{
    const { siteUrl , authorName  } = _theme_config__WEBPACK_IMPORTED_MODULE_11__/* .siteMetaData */ .cV || {};
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_3__.ArticleJsonLd, {
                type: "BlogPosting",
                url: pageUrl,
                title: title,
                images: images.map((img)=>siteUrl + img.src),
                datePublished: date,
                authorName: authorName,
                description: seo?.description || description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative mx-auto my-auto w-full p-4 pb-20 lg:p-20",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "prose prose-invert",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                            className: "mx-auto max-w-3xl space-y-10 text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: tags?.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            slug: tag.slug,
                                            className: "m-0.5 font-mono text-sm lg:mx-1",
                                            children: tag.title
                                        }, tag.title))
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "mb-0",
                                    children: title
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "basis-1/3 text-right",
                                            children: [
                                                "By ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    children: authorName
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "not-prose mx-6 box-content h-24 w-24 overflow-hidden rounded-full border-4 border-alpha bg-alpha",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                src: _public_author_profile_picture_jpg__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
                                                alt: "Picture of the author",
                                                animation: "fade-in",
                                                className: "rounded-full object-cover",
                                                priority: true,
                                                fill: true
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "basis-1/3 text-left",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Date__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                date: date
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        attributes.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "dark:bg-gradient-omega-900 mt-12 md:dark:shadow-2xl",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sep__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    line: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dl", {
                                    className: "grid grid-cols-fluid gap-4 p-4 [--tw-fluid-col-min:8rem] md:gap-6 md:py-6 md:px-12",
                                    children: attributes.map(({ label , value  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                    className: "mb-2 dark:text-alpha",
                                                    children: label
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                    className: "m-0",
                                                    children: value
                                                })
                                            ]
                                        }, label))
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "not-prose mt-6 text-center md:mt-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageGallery__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                images: images
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-6 grid gap-6 md:mt-12 md:grid-cols-[auto_3fr_auto] md:gap-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocialShare, {
                                        url: pageUrl,
                                        className: "sticky left-10 top-12 z-10"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "prose prose-invert mx-auto max-w-prose prose-pre:max-w-[90vw]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ContentRenderer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        source: content
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sep__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            line: true,
                            className: "my-20"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mx-auto max-w-lg",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Newsletter__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                className: "text-center"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8354:
/***/ (() => {



/***/ })

};
;