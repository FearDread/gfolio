"use strict";
exports.id = 757;
exports.ids = [757];
exports.modules = {

/***/ 1448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6954);
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4027);
/* harmony import */ var _components_Date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(209);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_7__);








const BlogCardVertical = ({ className , title , images , slug , description , date , tags  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("group prose prose-zinc block flex flex-col", "from-omega-900 via-omega-900 to-omega-800 dark:prose-invert dark:sm:bg-gradient-to-b dark:sm:shadow-md", className),
        children: [
            images?.[0] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: slug.join("/"),
                "aria-label": title,
                className: "not-prose block h-48 w-full overflow-hidden md:h-64",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    src: images[0].src,
                    alt: images[0].alt || title,
                    animation: "fade-in zoom-out",
                    wrapperClassName: "transition-transform group-hover:scale-105 duration-300 ease-out before:bg-omega-700",
                    sizes: "(min-width: 768px) 428px, 100vw",
                    className: "object-cover",
                    fill: true
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex grow flex-col py-4 sm:p-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "space-x-1",
                        children: tags?.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                slug: tag.slug,
                                className: "m-0.5 font-mono text-sm lg:mr-2",
                                children: tag.title
                            }, tag.title))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: slug.join("/"),
                        "aria-label": title,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            className: "my-4 transition-colors group-hover:text-accent dark:group-hover:text-alpha",
                            children: title
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                        className: "mb-4 text-omega-400",
                        children: description
                    }),
                    date && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-auto text-omega-500",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_7__.IoCalendarOutline, {
                                className: "mr-2 inline h-6 w-6"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Date__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                className: "inline align-middle font-mono font-bold uppercase",
                                date: date
                            })
                        ]
                    })
                ]
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogCardVertical);


/***/ }),

/***/ 8607:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4009);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1305);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__]);
react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Paging = ({ totalPages , currentPage , slug , infinite =false  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [isFetching, setIsFetching] = react__WEBPACK_IMPORTED_MODULE_1___default().useState();
    const [isIntersecting, setIsIntersecting] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [inViewRef, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)({
        triggerOnce: false,
        threshold: 1
    });
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        router.events.on("routeChangeStart", ()=>setIsFetching(true));
        router.events.on("routeChangeComplete", ()=>setIsFetching(false));
        return ()=>{
            router.events.off("routeChangeStart");
            router.events.off("routeChangeComplete");
        };
    }, [
        router.events
    ]);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        setIsIntersecting(inView);
    }, [
        inView
    ]);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (!infinite || currentPage === totalPages || !isIntersecting) return;
        setIsIntersecting(false);
        router.push({
            query: {
                slug: slug.concat("page", currentPage + 1),
                infinite
            }
        }, undefined, {
            scroll: false
        });
    }, [
        router,
        currentPage,
        slug,
        totalPages,
        infinite,
        isIntersecting
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: inViewRef,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-10 text-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "block flex h-10 items-center justify-center text-omega-500",
                        children: isFetching && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "my-4"
                    }),
                    Array.from({
                        length: totalPages
                    }, (_, i)=>i + 1).map((page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: slug.concat("page", page).join("/"),
                            className: clsx__WEBPACK_IMPORTED_MODULE_5___default()("mx-2 inline-block px-3 py-1 hover:border-transparent hover:bg-omega-600", currentPage == page ? "bg-omega-700 text-white" : "border border-omega-700 bg-transparent text-alpha"),
                            children: page
                        }, `p-${page}`))
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-4 text-center",
                children: currentPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "md:block",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                        className: "font-mono font-normal text-omega-300",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            children: [
                                "Page ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-bold text-white",
                                    children: currentPage
                                }),
                                " of",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-bold text-white",
                                    children: totalPages
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paging);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const TagCard = (tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: tag.slug.join("/"),
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("bg-gradient-omega-900 group prose prose-zinc dark:prose-invert", "border-l border-transparent transition-colors hover:border-omega-500"),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex h-full items-stretch justify-between",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex items-center p-2 md:p-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                        className: "text-sm",
                        children: tag.title
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("border-l border-beta", "flex w-14 items-center justify-center text-center", "from-alpha-100 via-alpha to-beta dark:bg-omega-700", "transition-all duration-300 group-hover:bg-gradient-to-br group-hover:text-omega-900"),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                        className: "text-sm font-bold",
                        children: tag.collection?.totalRecords
                    })
                })
            ]
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagCard);


/***/ }),

/***/ 1467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


const useInfinitePaging = ({ enabled , currentPage , records  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const [infiniteRecords, setInfiniteRecords] = react__WEBPACK_IMPORTED_MODULE_0___default().useState({});
    const { query: { infinite =false  }  } = router;
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(()=>{
        if (!records || !enabled) return;
        const newRecords = {
            [currentPage]: {
                records
            }
        };
        setInfiniteRecords((records)=>infinite ? {
                ...records,
                ...newRecords
            } : newRecords);
    }, [
        currentPage,
        enabled,
        infinite,
        records
    ]);
    return [
        infiniteRecords
    ];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInfinitePaging);


/***/ }),

/***/ 5757:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TagCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(815);
/* harmony import */ var _components_BlogCardVertical__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1448);
/* harmony import */ var _components_ContentRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4312);
/* harmony import */ var _components_Paging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8607);
/* harmony import */ var _components_useInfinitePaging__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1467);
/* harmony import */ var _components_Newsletter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8183);
/* harmony import */ var _components_Reveal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6229);
/* harmony import */ var _components_Sep__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4477);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ContentRenderer__WEBPACK_IMPORTED_MODULE_3__, _components_Paging__WEBPACK_IMPORTED_MODULE_4__, _components_Newsletter__WEBPACK_IMPORTED_MODULE_6__, _components_Reveal__WEBPACK_IMPORTED_MODULE_7__]);
([_components_ContentRenderer__WEBPACK_IMPORTED_MODULE_3__, _components_Paging__WEBPACK_IMPORTED_MODULE_4__, _components_Newsletter__WEBPACK_IMPORTED_MODULE_6__, _components_Reveal__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Layout = ({ pagination , collection , slug , content , categories  })=>{
    const { records , infinitePaging  } = collection;
    const { currentPage , totalPages  } = pagination;
    const [infiniteRecords] = (0,_components_useInfinitePaging__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        currentPage,
        records,
        enabled: infinitePaging
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mx-auto w-full",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "prose prose-headings:mb-4 dark:prose-invert",
            children: [
                categories && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid-cols-2 bg-omega-800 md:grid",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "p-3 md:p-6 lg:p-12",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ContentRenderer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            source: categories
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-4 grid gap-2 lg:grid-cols-2",
                                            children: categories?.collection?.records?.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TagCard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    ...tag
                                                }, tag.title))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Reveal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    animation: "fade-in slide-in-left",
                                    className: "bg-gradient-omega-900 p-3 md:p-6 lg:p-12",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Newsletter__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sep__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            line: true,
                            className: ""
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "p-4 md:p-6 lg:p-12",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-start justify-between",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ContentRenderer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        source: content
                                    })
                                }),
                                currentPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "hidden border-b border-omega-700 md:block",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                        className: "font-mono font-normal",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Page "
                                            }),
                                            currentPage,
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                children: [
                                                    "/",
                                                    totalPages
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        Array.from({
                            length: currentPage
                        }, (_, i)=>{
                            const page = i + 1;
                            const isStaticPage = page === currentPage;
                            const pageRecords = isStaticPage ? records : infinitePaging && infiniteRecords[page]?.records;
                            if (!pageRecords) return null;
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mt-4 grid grid-cols-1 gap-6 md:mt-6 md:grid-cols-2 lg:grid-cols-3",
                                children: pageRecords.map((record)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BlogCardVertical__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        ...record
                                    }, record.slug.join("/")))
                            }, `page-${page}`);
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Paging__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            infinite: infinitePaging,
                            currentPage: currentPage,
                            totalPages: totalPages,
                            slug: slug
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;