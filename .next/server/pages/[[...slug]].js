(() => {
var exports = {};
exports.id = 120;
exports.ids = [120];
exports.modules = {

/***/ 2046:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Inter_9255d6', '__Inter_Fallback_9255d6'","fontStyle":"normal"},
	"className": "__className_9255d6",
	"variable": "__variable_9255d6"
};


/***/ }),

/***/ 6107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/ActiveLink.jsx





const ActiveLink = ({ children , className , activeClassName , inActiveClassName , ...props })=>{
    const { asPath  } = (0,router_.useRouter)();
    const dynamicClassName = external_react_default().useMemo(()=>external_clsx_default()(className, asPath === props.href ? activeClassName : inActiveClassName), [
        asPath,
        props.href,
        className,
        activeClassName,
        inActiveClassName
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        className: dynamicClassName,
        ...props,
        children: children
    });
};
/* harmony default export */ const components_ActiveLink = (ActiveLink);

// EXTERNAL MODULE: ./theme.config.js
var theme_config = __webpack_require__(250);
// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(6652);
;// CONCATENATED MODULE: ./components/Menu.jsx








const MenuItem = ({ name , Icon , text , slug , number , isOpen , toggleMenu , ...rest })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_ActiveLink, {
        href: slug,
        activeClassName: "from-beta to-alpha text-black",
        inActiveClassName: "from-omega-900 text-white group md:hover:from-accent-700 md:hover:to-accent",
        className: external_clsx_default()("h-16 md:h-auto", "relative z-20 flex flex-col items-center justify-center md:py-4", "bg-gradient-to-tr transition-all duration-300"),
        "aria-label": name,
        ...rest,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_clsx_default()("absolute right-full top-0 h-full min-w-max px-4", "hidden items-center bg-accent text-sm font-medium text-white md:flex", "invisible translate-x-10 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100"),
                children: name
            }),
            number && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute bottom-2 right-2 hidden h-4 w-4 text-center font-mono text-xs font-bold md:block",
                children: number
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "absolute top-0 right-0 hidden h-full w-1 bg-white/25 opacity-0 transition-opacity group-hover:opacity-100 md:block"
            }),
            Icon && /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                className: "relative z-20 h-6 w-6"
            }),
            text && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "relative z-20 h-6 text-lg font-extrabold",
                children: text
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "mt-1 text-center text-xs md:hidden",
                children: name
            })
        ]
    });
const SocialLink = ({ url , name , Icon  })=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: url,
        className: "group block flex-1 text-center",
        rel: "noopener noreferrer",
        target: "_blank",
        title: name,
        children: Icon && /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
            className: "mx-auto h-12 w-6 text-white md:text-omega-500 md:group-hover:text-alpha"
        })
    });
const Menu = ()=>{
    const [isOpen, setIsOpen] = external_react_default().useState(false);
    const toggleMenu = ()=>setIsOpen((open)=>!open);
    const closeMenu = ()=>setIsOpen(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_clsx_default()("fixed top-0 left-0 z-10 block w-full animate-fade-in bg-black/90 md:hidden", isOpen ? "h-screen" : "h-0"),
                onClick: closeMenu
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: external_clsx_default()("bg-gradient-omega-900 shrink-0 flex-col items-center justify-between md:flex", "fixed left-0 top-full z-40 w-full md:w-16", "md:sticky md:top-20 md:h-[calc(100vh-theme(space.40))]", "transition-transform md:translate-y-0", isOpen ? "-translate-y-full" : "-translate-y-16"),
                children: [
                    theme_config/* menu */.GI && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid w-full grid-cols-4 bg-gradient-to-b from-transparent to-omega-800 md:block",
                        children: [
                            theme_config/* menu */.GI && theme_config/* menu.map */.GI.map((item)=>/*#__PURE__*/ (0,external_react_.createElement)(MenuItem, {
                                    ...item,
                                    key: `${item.slug}`,
                                    onClick: closeMenu
                                })),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: external_clsx_default()("row-start-1 flex h-16 items-center md:hidden", isOpen ? "col-span-4 col-start-1" : "bg-gradient-omega-900 col-start-4"),
                                onClick: toggleMenu,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "md:none mx-auto block text-7xl text-omega-100",
                                    children: isOpen ? /*#__PURE__*/ jsx_runtime_.jsx(bi_.BiChevronDown, {
                                        className: "animate-grow-in"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(bi_.BiDotsHorizontalRounded, {
                                        className: "animate-grow-in"
                                    })
                                })
                            })
                        ]
                    }),
                    theme_config/* social */.xs && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex w-full flex-wrap bg-accent md:block md:bg-omega-800",
                        children: theme_config/* social.map */.xs.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                                ...item
                            }, `${i}-social`))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Menu = (Menu);

;// CONCATENATED MODULE: external "react-icons/hi"
const hi_namespaceObject = require("react-icons/hi");
;// CONCATENATED MODULE: ./components/ThemeSwitcher.jsx



const themes = [
    {
        name: "lime",
        switchBg: "from-lime-500 to-green-500"
    },
    {
        name: "amber",
        switchBg: "from-amber-500 to-red-500"
    },
    {
        name: "rose",
        switchBg: "from-rose-500 to-purple-500"
    },
    {
        name: "cyan",
        switchBg: "from-cyan-500 to-indigo-500"
    }
];
const ThemeSwitcher = ({ setTheme  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "group fixed left-2 top-1/2 z-50 hidden -translate-y-1/2 space-y-1 lg:left-8 lg:block",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(hi_namespaceObject.HiOutlineColorSwatch, {
                className: "h-5 w-5 text-omega-500 group-hover:text-omega-100"
            }),
            themes.map(({ name , switchBg  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: external_clsx_default()(switchBg, "h-5 w-5 origin-right cursor-pointer bg-gradient-to-br transition-all hover:scale-x-150"),
                    onClick: ()=>setTheme(name)
                }, name))
        ]
    });
};
/* harmony default export */ const components_ThemeSwitcher = (ThemeSwitcher);

// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"arguments":[{"display":"swap","subsets":["latin"],"variable":"--font-sans"}],"import":"Inter","path":"styles/fonts.js","variableName":"sans"}
var fonts_js_variableName_sans_ = __webpack_require__(2046);
var fonts_js_variableName_sans_default = /*#__PURE__*/__webpack_require__.n(fonts_js_variableName_sans_);
;// CONCATENATED MODULE: ./styles/fonts.js

const variables = [
    (fonts_js_variableName_sans_default()).variable
];
/* harmony default export */ const fonts = (variables);

;// CONCATENATED MODULE: ./components/Layout.jsx






const Layout = (props)=>{
    const { children  } = props;
    const [theme, setTheme] = external_react_default().useState({});
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_clsx_default()("dark relative flex min-h-screen w-full justify-center bg-black font-sans lg:px-4 xl:px-8", theme, ...fonts),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_ThemeSwitcher, {
                setTheme: setTheme
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "fixed bottom-0 left-0 z-50 hidden w-full bg-black md:block lg:h-4 xl:h-8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "fixed top-0 left-0 z-50 hidden w-full bg-black md:block lg:h-4 xl:h-8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "relative w-full max-w-screen-xl",
                children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: "relative h-full bg-gradient-to-tr from-omega-900 via-omega-900 to-omega-800",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex h-full w-full flex-col content-center items-center pb-20 lg:py-4 xl:py-8",
                        children: children
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Menu, {})
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);


/***/ }),

/***/ 97:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(250);




const Seo = (props)=>{
    const { seo ={} , title , description , images , pageUrl  } = props;
    const metaData = {
        ..._theme_config__WEBPACK_IMPORTED_MODULE_3__/* .siteMetaData */ .cV,
        title,
        description,
        ...seo
    };
    const ogImageUrl = images?.[0]?.src ? metaData.siteUrl + images[0].src : undefined;
    const openGraph = {
        url: pageUrl,
        title: metaData.title,
        description: metaData.description,
        images: [
            {
                url: ogImageUrl
            }
        ],
        site_name: metaData.siteName,
        locale: metaData.locale
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__.NextSeo, {
        ...metaData,
        openGraph: openGraph
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);


/***/ }),

/***/ 9389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);

const layouts = {
    About: next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>Promise.all(/* import() */[__webpack_require__.e(121), __webpack_require__.e(675), __webpack_require__.e(801), __webpack_require__.e(662), __webpack_require__.e(247), __webpack_require__.e(707)]).then(__webpack_require__.bind(__webpack_require__, 5707)), {
        loadableGenerated: {
            modules: [
                "../layouts/index.js -> " + "@/layouts/About"
            ]
        }
    }),
    Contact: next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>Promise.all(/* import() */[__webpack_require__.e(801), __webpack_require__.e(900), __webpack_require__.e(197)]).then(__webpack_require__.bind(__webpack_require__, 1197)), {
        loadableGenerated: {
            modules: [
                "../layouts/index.js -> " + "@/layouts/Contact"
            ]
        }
    }),
    Services: next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>Promise.all(/* import() */[__webpack_require__.e(801), __webpack_require__.e(601)]).then(__webpack_require__.bind(__webpack_require__, 4601)), {
        loadableGenerated: {
            modules: [
                "../layouts/index.js -> " + "@/layouts/Services"
            ]
        }
    }),
    Home: next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>Promise.all(/* import() */[__webpack_require__.e(121), __webpack_require__.e(675), __webpack_require__.e(801), __webpack_require__.e(662), __webpack_require__.e(817)]).then(__webpack_require__.bind(__webpack_require__, 8817)), {
        loadableGenerated: {
            modules: [
                "../layouts/index.js -> " + "@/layouts/Home"
            ]
        }
    }),
    "Home-2": next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>Promise.all(/* import() */[__webpack_require__.e(121), __webpack_require__.e(675), __webpack_require__.e(801), __webpack_require__.e(662), __webpack_require__.e(663)]).then(__webpack_require__.bind(__webpack_require__, 3663)), {
        loadableGenerated: {
            modules: [
                "../layouts/index.js -> " + "@/layouts/Home-2"
            ]
        }
    }),
    "Home-3": next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>Promise.all(/* import() */[__webpack_require__.e(121), __webpack_require__.e(675), __webpack_require__.e(801), __webpack_require__.e(662), __webpack_require__.e(692), __webpack_require__.e(536), __webpack_require__.e(19)]).then(__webpack_require__.bind(__webpack_require__, 6019)), {
        loadableGenerated: {
            modules: [
                "../layouts/index.js -> " + "@/layouts/Home-3"
            ]
        }
    }),
    "Home-4": next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>Promise.all(/* import() */[__webpack_require__.e(121), __webpack_require__.e(675), __webpack_require__.e(801), __webpack_require__.e(662), __webpack_require__.e(692), __webpack_require__.e(536), __webpack_require__.e(413)]).then(__webpack_require__.bind(__webpack_require__, 7413)), {
        loadableGenerated: {
            modules: [
                "../layouts/index.js -> " + "@/layouts/Home-4"
            ]
        }
    }),
    Post: next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>Promise.all(/* import() */[__webpack_require__.e(121), __webpack_require__.e(675), __webpack_require__.e(662), __webpack_require__.e(900), __webpack_require__.e(692), __webpack_require__.e(183), __webpack_require__.e(702)]).then(__webpack_require__.bind(__webpack_require__, 4702)), {
        loadableGenerated: {
            modules: [
                "../layouts/index.js -> " + "@/layouts/Post"
            ]
        }
    }),
    Blog: next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>Promise.all(/* import() */[__webpack_require__.e(121), __webpack_require__.e(675), __webpack_require__.e(801), __webpack_require__.e(662), __webpack_require__.e(900), __webpack_require__.e(692), __webpack_require__.e(183), __webpack_require__.e(305), __webpack_require__.e(757)]).then(__webpack_require__.bind(__webpack_require__, 5757)), {
        loadableGenerated: {
            modules: [
                "../layouts/index.js -> " + "@/layouts/Blog"
            ]
        }
    }),
    Projects: next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>Promise.all(/* import() */[__webpack_require__.e(121), __webpack_require__.e(675), __webpack_require__.e(801), __webpack_require__.e(662), __webpack_require__.e(940)]).then(__webpack_require__.bind(__webpack_require__, 9940)), {
        loadableGenerated: {
            modules: [
                "../layouts/index.js -> " + "@/layouts/Projects"
            ]
        }
    }),
    Fallback: next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>Promise.all(/* import() */[__webpack_require__.e(305), __webpack_require__.e(483)]).then(__webpack_require__.bind(__webpack_require__, 4483)), {
        loadableGenerated: {
            modules: [
                "../layouts/index.js -> " + "@/layouts/Fallback"
            ]
        }
    }),
    Blank: next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>__webpack_require__.e(/* import() */ 402).then(__webpack_require__.bind(__webpack_require__, 9402)), {
        loadableGenerated: {
            modules: [
                "../layouts/index.js -> " + "@/layouts/Blank"
            ]
        }
    }),
    BlankCentered: next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>__webpack_require__.e(/* import() */ 654).then(__webpack_require__.bind(__webpack_require__, 6654)), {
        loadableGenerated: {
            modules: [
                "../layouts/index.js -> " + "@/layouts/BlankCenter"
            ]
        }
    })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (layouts);


/***/ }),

/***/ 636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ computed_fields)
});

// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
;// CONCATENATED MODULE: external "sift"
const external_sift_namespaceObject = require("sift");
var external_sift_default = /*#__PURE__*/__webpack_require__.n(external_sift_namespaceObject);
// EXTERNAL MODULE: ./lib/mdx-files.js + 1 modules
var mdx_files = __webpack_require__(7794);
;// CONCATENATED MODULE: ./lib/computed-fields/collection.js



const collection = {
    hasSubFields: true,
    resolve: async (collection, { mdxOptions , shallow  })=>{
        // Skip collections without path
        if (!collection?.path) {
            return {
                ...collection,
                infinitePaging: false,
                totalPages: 0,
                records: []
            };
        }
        const { path , sortBy , filterBy , limit , // reduceTo,
        infinitePaging =false , recordsPerPage =6  } = collection;
        // Already resolved?
        if (collection.records) return collection;
        // Get all collection files excluding collection's index page
        const files = await (0,mdx_files/* getManyFilesBySlug */.co)(path.split("/"), mdxOptions);
        let records = await Promise.all(files.map(async ({ slug , filePath  })=>{
            const file = await external_gray_matter_default().read(filePath);
            return {
                ...file.data,
                slug
            };
        }));
        if (records && records.length > 0) {
            if (filterBy) {
                records = records.filter(external_sift_default()(filterBy));
            }
            if (sortBy) {
                records.sort((p1, p2)=>p1[sortBy] > p2[sortBy] ? "-1" : "1");
            }
            // if (reduceTo) {
            //   const reducedRecords = records
            //     .reduce((acc, record) => {
            //       if (record[reduceTo]) acc.push(record[reduceTo])
            //       return acc
            //     }, [])
            //     .flat()
            //   const test = Array.from(new Set(reducedRecords))
            // }
            if (limit) {
                records = records.slice(0, limit);
            }
        }
        return {
            ...collection,
            infinitePaging,
            totalRecords: records.length,
            totalPages: recordsPerPage ? Math.ceil(records.length / recordsPerPage) : 1,
            recordsPerPage: recordsPerPage || records.length,
            records: shallow ? [] : records
        };
    }
};
/* harmony default export */ const computed_fields_collection = (collection);

;// CONCATENATED MODULE: ./lib/computed-fields/repositories.js
const repositories = {
    hasSubFields: false,
    resolve: async (repositories)=>{
        if (!Array.isArray(repositories) || !process.env.GITHUB_TOKEN) return null;
        const records = await Promise.all(repositories.filter(Boolean).map(async (repo)=>{
            let res, json;
            try {
                res = await fetch("https://api.github.com/repos/" + repo, {
                    headers: {
                        authorization: process.env.GITHUB_TOKEN ? "token " + process.env.GITHUB_TOKEN : undefined
                    }
                });
                json = await res.json();
            } catch (error) {
                return console.log(error);
            }
            return {
                name: json.name,
                owner: json.owner.login,
                url: json.html_url,
                description: json.description,
                language: json.language,
                stars: json.stargazers_count,
                forks: json.forks_count
            };
        }));
        return {
            records
        };
    }
};
/* harmony default export */ const computed_fields_repositories = (repositories);

;// CONCATENATED MODULE: ./lib/computed-fields/tags.js


const tags = {
    hasSubFields: false,
    resolve: async (tags, { mdxOptions  })=>{
        if (!Array.isArray(tags)) return tags;
        // Get tags collection
        const files = await (0,mdx_files/* getManyFilesBySlug */.co)([
            "tags"
        ], mdxOptions);
        let results = await Promise.all(tags.map(async (tag)=>{
            // tag without collection
            const file = files.find(({ slug  })=>slug[slug.length - 1] === tag);
            if (!file) return {
                title: tag
            };
            // tag with collection
            const fileData = await external_gray_matter_default().read(file.filePath);
            const { collection , ...meta } = fileData?.data || {};
            return {
                ...meta,
                slug: file.slug
            };
        }));
        return results.filter(Boolean);
    }
};
/* harmony default export */ const computed_fields_tags = (tags);

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
;// CONCATENATED MODULE: external "image-size"
const external_image_size_namespaceObject = require("image-size");
var external_image_size_default = /*#__PURE__*/__webpack_require__.n(external_image_size_namespaceObject);
;// CONCATENATED MODULE: ./lib/computed-fields/images.js



const resolve = (image, { mdxOptions  })=>{
    const test = image && /^\/.*[/.](gif|jpg|jpeg|png)$/i.test(image.src);
    if (!test) return;
    const filePath = (0,external_path_.join)(process.cwd(), mdxOptions.publicDir, image.src);
    if (!external_fs_default().existsSync(filePath)) return null;
    try {
        const { width , height  } = external_image_size_default()(filePath);
        image.width = width;
        image.height = height;
    } catch (err) {
        console.error(err);
    }
    return image;
};
// Single entry
const images_image = {
    hasSubFields: false,
    resolve
};
// Multiple entries
const images_images = {
    hasSubFields: false,
    resolve: (images, { mdxOptions  })=>images.map((image)=>resolve(image, {
                mdxOptions
            }))
};

;// CONCATENATED MODULE: ./lib/computed-fields/icons.js


const icons_resolve = async (icon, { mdxOptions  })=>{
    const test = icon && /^\/.*[/.](svg)$/i.test(icon.src);
    if (!test) return null;
    const filePath = (0,external_path_.join)(process.cwd(), mdxOptions.publicDir, icon.src);
    if (!external_fs_default().existsSync(filePath)) return null;
    try {
        icon.source = await external_fs_default().readFileSync(filePath, "utf8");
    } catch (err) {
        console.error(err);
    }
    return icon;
};
// Single entry
const icon = {
    hasSubFields: false,
    resolve: icons_resolve
};
// Multiple entries
const icons = {
    hasSubFields: false,
    resolve: async (icons, { mdxOptions  })=>await Promise.all(icons.map(async (icon)=>await icons_resolve(icon, {
                mdxOptions
            })))
};

;// CONCATENATED MODULE: ./lib/computed-fields/index.js





const resolvers = {
    collection: computed_fields_collection,
    repositories: computed_fields_repositories,
    tags: computed_fields_tags,
    image: images_image,
    images: images_images,
    icon: icon,
    icons: icons
};
/* harmony default export */ const computed_fields = (resolvers);


/***/ }),

/***/ 6538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ generateRssFeed)
});

;// CONCATENATED MODULE: external "feed"
const external_feed_namespaceObject = require("feed");
// EXTERNAL MODULE: ./theme.config.js
var theme_config = __webpack_require__(250);
;// CONCATENATED MODULE: ./lib/generate-rss.js


async function generateRssFeed(records, rssPath) {
    const { siteUrl , defaultTitle , description , siteName , email , locale , twitter  } = theme_config/* siteMetaData */.cV;
    const date = new Date();
    const author = {
        name: siteName,
        email,
        link: twitter && twitter.handle ? `https://twitter.com/${twitter.handle.replace("@", "")}` : siteUrl
    };
    // Creating feed
    const feed = new external_feed_namespaceObject.Feed({
        title: defaultTitle,
        description: description,
        id: siteUrl,
        link: siteUrl,
        image: `${siteUrl}/favicon.ico`,
        favicon: `${siteUrl}/favicon.ico`,
        copyright: `All rights reserved ${date.getFullYear()}, ${siteName}`,
        updated: date,
        language: locale,
        author,
        feedLinks: {
            rss2: `${rssPath}/feed.xml`,
            json: `${rssPath}/feed.json`
        }
    });
    // Adding blogs to the rss feed
    records.forEach((record)=>{
        const { title , slug , description , date  } = record;
        const url = `${siteUrl}/${slug.join("/")}`;
        feed.addItem({
            title: title,
            id: url,
            link: url,
            description: description,
            author: [
                author
            ],
            date: new Date(date)
        });
    });
    return feed;
}


/***/ }),

/***/ 7794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x7": () => (/* binding */ getFileBySlug),
  "bE": () => (/* binding */ getFiles),
  "co": () => (/* binding */ getManyFilesBySlug)
});

;// CONCATENATED MODULE: external "fast-glob"
const external_fast_glob_namespaceObject = require("fast-glob");
var external_fast_glob_default = /*#__PURE__*/__webpack_require__.n(external_fast_glob_namespaceObject);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
// EXTERNAL MODULE: external "fast-deep-equal"
var external_fast_deep_equal_ = __webpack_require__(2404);
var external_fast_deep_equal_default = /*#__PURE__*/__webpack_require__.n(external_fast_deep_equal_);
;// CONCATENATED MODULE: ./lib/mdx-files.js



async function getFiles(path, mdxOptions) {
    if (!mdxOptions || !mdxOptions.pagesDir) {
        throw Error("pagesDir is missing from mdxOptions");
    }
    if (path && typeof path !== "string") {
        throw Error("path should be type string received " + typeof path);
    }
    const baseDir = path ? (0,external_path_.join)(mdxOptions.pagesDir, path) : mdxOptions.pagesDir;
    const paths = await external_fast_glob_default().sync(//Always use forward-slashes in glob expressions
    (0,external_path_.join)(baseDir, "**", `*${mdxOptions.fileExt}`).replace(/\\/g, "/"));
    return paths.map((filePath)=>({
            filePath,
            slug: filePath.replace(mdxOptions.fileExt, "").split("/").filter((s)=>s !== "index").filter(Boolean).slice(1)
        }));
}
async function getFileBySlug(slug, mdxOptions) {
    let rootPath = null;
    // Limit the search to the sub-directory if the file is inside a sub-directory
    if (Array.isArray(slug) && slug.length > 1) {
        rootPath = slug.slice(0, slug.length - 1).join("/");
    }
    const files = await getFiles(rootPath, mdxOptions);
    return files.find((page)=>external_fast_deep_equal_default()(page.slug, slug));
}
async function getManyFilesBySlug(slug, mdxOptions) {
    if (!slug || !Array.isArray(slug)) {
        throw Error("slug should be type array received " + typeof slug);
    }
    let rootPath = slug.join("/");
    const files = await getFiles(rootPath, mdxOptions);
    // Get all collection files excluding collection's index page
    return files.filter(({ slug  })=>slug.length > 1);
}


/***/ }),

/***/ 5083:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2404);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remark_unwrap_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8438);
/* harmony import */ var rehype_img_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9919);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6809);
/* harmony import */ var rehype_slug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7752);
/* harmony import */ var rehype_prism_plus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(483);
/* harmony import */ var rehype_external_links__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3738);
/* harmony import */ var remark_squeeze_paragraphs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2022);
/* harmony import */ var rehype_preset_minify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6370);
/* harmony import */ var _theme_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark_unwrap_images__WEBPACK_IMPORTED_MODULE_1__, rehype_img_size__WEBPACK_IMPORTED_MODULE_2__, remark_gfm__WEBPACK_IMPORTED_MODULE_3__, rehype_slug__WEBPACK_IMPORTED_MODULE_4__, rehype_prism_plus__WEBPACK_IMPORTED_MODULE_5__, rehype_external_links__WEBPACK_IMPORTED_MODULE_6__, remark_squeeze_paragraphs__WEBPACK_IMPORTED_MODULE_7__, rehype_preset_minify__WEBPACK_IMPORTED_MODULE_8__]);
([remark_unwrap_images__WEBPACK_IMPORTED_MODULE_1__, rehype_img_size__WEBPACK_IMPORTED_MODULE_2__, remark_gfm__WEBPACK_IMPORTED_MODULE_3__, rehype_slug__WEBPACK_IMPORTED_MODULE_4__, rehype_prism_plus__WEBPACK_IMPORTED_MODULE_5__, rehype_external_links__WEBPACK_IMPORTED_MODULE_6__, remark_squeeze_paragraphs__WEBPACK_IMPORTED_MODULE_7__, rehype_preset_minify__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const getMdxOptions = (options = {})=>{
    const { slug =[]  } = options;
    if (!_theme_config__WEBPACK_IMPORTED_MODULE_9__/* .mdxConfig */ .Hz) {
        throw Error("mdxConfig is missing from theme.config.js");
    }
    const { collections =[] , publicDir , remarkPlugins =[] , rehypePlugins =[]  } = _theme_config__WEBPACK_IMPORTED_MODULE_9__/* .mdxConfig */ .Hz;
    // Common plugins
    const allRemarkPlugins = [
        remark_gfm__WEBPACK_IMPORTED_MODULE_3__["default"],
        remark_squeeze_paragraphs__WEBPACK_IMPORTED_MODULE_7__["default"],
        remark_unwrap_images__WEBPACK_IMPORTED_MODULE_1__["default"],
        ...remarkPlugins
    ];
    const allRehypePlugins = [
        [
            rehype_img_size__WEBPACK_IMPORTED_MODULE_2__["default"],
            {
                dir: publicDir
            }
        ],
        [
            rehype_external_links__WEBPACK_IMPORTED_MODULE_6__["default"],
            {
                target: "_blank",
                protocols: [
                    "http",
                    "https",
                    "mailto",
                    "tel"
                ]
            }
        ],
        rehype_prism_plus__WEBPACK_IMPORTED_MODULE_5__["default"],
        rehype_preset_minify__WEBPACK_IMPORTED_MODULE_8__["default"],
        ...rehypePlugins
    ];
    // Collection page plugins
    const collectionSlugs = collections.map((path)=>path.split("/").filter(Boolean));
    const isCollectionPage = // Check if slug is a sub-directory & parent directory matches a collection
    slug.length > 1 && collectionSlugs.find((s)=>fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default()(s, slug.slice(0, -1)));
    if (isCollectionPage) {
        allRehypePlugins.push(rehype_slug__WEBPACK_IMPORTED_MODULE_4__["default"]);
    }
    return {
        ..._theme_config__WEBPACK_IMPORTED_MODULE_9__/* .mdxConfig */ .Hz,
        collections: collectionSlugs,
        options: {
            remarkPlugins: allRemarkPlugins,
            rehypePlugins: allRehypePlugins
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMdxOptions);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5154:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(626);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4818);
/* harmony import */ var _computed_fields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(636);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_yaml__WEBPACK_IMPORTED_MODULE_0__, next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_2__]);
([js_yaml__WEBPACK_IMPORTED_MODULE_0__, next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




class Parser {
    constructor({ filePath , mdxOptions  }){
        this.filePath = filePath;
        this.mdxOptions = mdxOptions;
        this.computedFields = _computed_fields__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z;
        this.computedFieldKeys = Object.keys(_computed_fields__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
        this.ignoreFields = [
            "compliedSource",
            "filterBy",
            "sortBy"
        ];
    }
    async resolveComputedFields(data) {
        if (!data || Object.keys(data).length === 0) return null;
        const self = this;
        let results = Object.assign({}, data);
        async function traverse(fields, shallow) {
            if (!fields || typeof fields != "object") return fields;
            await Promise.all(Object.entries(fields).map(async ([key, value])=>{
                // Continue traverse if field is not a computed field
                if (!self.computedFieldKeys.includes(key)) {
                    fields[key] = await traverse(value, shallow);
                    return fields;
                }
                // Resolve computed field
                const { resolve , hasSubFields  } = self.computedFields[key];
                fields[key] = await resolve(value, {
                    mdxOptions: self.mdxOptions,
                    shallow
                });
                // Resolve sub-fields within computed field
                if (hasSubFields) {
                    // Shallow fields wont have their subFields traversed
                    const { shallow  } = fields[key];
                    fields[key] = await traverse(fields[key], shallow);
                }
                return fields;
            }));
            return fields;
        }
        results = await traverse(results);
        return results;
    }
    async parseFrontmatter(filePath) {
        const { data  } = await gray_matter__WEBPACK_IMPORTED_MODULE_1___default().read(filePath);
        return data;
    }
    async parseMdxSections(sections) {
        const result = {};
        if (!sections || sections.length < 1) {
            return result;
        }
        await Promise.all(sections.map(async ({ key , data , content  })=>{
            const serializedContent = content.replace(/[\n\r\t\s]+/g, "").length > 0 ? await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_2__.serialize)(content, {
                mdxOptions: this.mdxOptions.options
            }) : null;
            //Check if section key represents array item eg. Section[1]
            var [, arrKey, arrIndex] = key.match(/(\w+)\[([0-9]+)\]$/) || [];
            if (!arrIndex) {
                result[key] = data || {};
                result[key].content = serializedContent;
                return;
            }
            result[arrKey] = result[arrKey] || [];
            result[arrKey][arrIndex] = data || {};
            result[arrKey][arrIndex].content = serializedContent;
        }));
        return result;
    }
    async parseMdx(filePath) {
        const { data , content , sections  } = await gray_matter__WEBPACK_IMPORTED_MODULE_1___default().read(filePath, {
            section: (section, file)=>{
                if (typeof section.data === "string" && section.data.trim() !== "") {
                    section.data = js_yaml__WEBPACK_IMPORTED_MODULE_0__["default"].load(section.data);
                }
                section.content = section.content.trim();
            }
        });
        const serializedContent = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_2__.serialize)(content, {
            scope: {
                path: "/blog"
            },
            mdxOptions: this.mdxOptions.options,
            parseFrontmatter: false
        });
        const serializedSections = await this.parseMdxSections(sections);
        return {
            data,
            content: serializedContent,
            sections: serializedSections
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Parser);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9882:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rm": () => (/* binding */ generateCollectionRss),
/* harmony export */   "it": () => (/* binding */ getPageBySlug),
/* harmony export */   "w3": () => (/* binding */ getPaths)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2404);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5154);
/* harmony import */ var _mdx_files__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7794);
/* harmony import */ var _mdx_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5083);
/* harmony import */ var _generate_rss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6538);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mdx_parser__WEBPACK_IMPORTED_MODULE_3__, _mdx_options__WEBPACK_IMPORTED_MODULE_5__]);
([_mdx_parser__WEBPACK_IMPORTED_MODULE_3__, _mdx_options__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







async function getPaths() {
    const mdxOptions = (0,_mdx_options__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const paths = [];
    const files = await (0,_mdx_files__WEBPACK_IMPORTED_MODULE_4__/* .getFiles */ .bE)(null, mdxOptions);
    await Promise.all(files.map(async (file)=>{
        const { filePath , slug  } = file;
        paths.push(file);
        const { meta  } = await getPageBySlug(slug);
        if (!meta || !meta.collection) return;
        // if (!meta) {
        //   throw Error('missing frontmatter in collection file' + typeof filePath)
        // }
        // if (!meta.collection) {
        //   throw Error('missing collection field in collection file' + typeof filePath)
        // }
        Array.from({
            length: meta.collection.totalPages
        }, (_, i)=>paths.push({
                filePath,
                slug: [
                    ...slug,
                    "page",
                    (i + 1).toString()
                ]
            }));
    }));
    return paths;
}
async function getPageBySlug(slug, { skipResolvers =false  } = {}) {
    if (!slug || !Array.isArray(slug)) {
        throw Error("slug should be type array received " + typeof slug);
    }
    const mdxOptions = (0,_mdx_options__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        slug
    });
    const file = await (0,_mdx_files__WEBPACK_IMPORTED_MODULE_4__/* .getFileBySlug */ .x7)(slug, mdxOptions);
    if (!file) {
        console.log("file with provided slug does not exist " + JSON.stringify(slug));
        return;
    }
    const parser = new _mdx_parser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z({
        mdxOptions
    });
    let { data , content , sections  } = await parser.parseMdx(file.filePath);
    if (!skipResolvers) {
        data = await parser.resolveComputedFields(data);
        sections = await parser.resolveComputedFields(sections);
    }
    const result = {
        slug,
        content,
        meta: data,
        ...sections
    };
    return result;
}
async function generateCollectionRss(slug) {
    if (!slug || !Array.isArray(slug)) {
        throw Error("slug should be type array received " + typeof slug);
    }
    const mdxOptions = (0,_mdx_options__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        slug
    });
    const isCollectionPage = mdxOptions.collections.find((s)=>fast_deep_equal__WEBPACK_IMPORTED_MODULE_2___default()(s, slug));
    if (!isCollectionPage) return;
    const files = await (0,_mdx_files__WEBPACK_IMPORTED_MODULE_4__/* .getManyFilesBySlug */ .co)(slug, mdxOptions);
    const parser = new _mdx_parser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z({
        slug,
        mdxOptions
    });
    let records = await Promise.all(files.map(async ({ slug , filePath  })=>{
        const data = await parser.parseFrontmatter(filePath);
        return {
            ...data,
            slug
        };
    }));
    const rssPath = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), mdxOptions.publicDir, "feed", slug.join("/"));
    const feed = await (0,_generate_rss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(records, rssPath);
    fs__WEBPACK_IMPORTED_MODULE_1___default().promises.mkdir(rssPath, {
        recursive: true
    });
    fs__WEBPACK_IMPORTED_MODULE_1___default().promises.writeFile(path__WEBPACK_IMPORTED_MODULE_0___default().join(rssPath, "feed.xml"), feed.rss2());
    fs__WEBPACK_IMPORTED_MODULE_1___default().promises.writeFile(path__WEBPACK_IMPORTED_MODULE_0___default().join(rssPath, "feed.json"), feed.json1());
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2462:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6107);
/* harmony import */ var _layouts_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9389);
/* harmony import */ var _lib_mdx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9882);
/* harmony import */ var _theme_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_mdx__WEBPACK_IMPORTED_MODULE_6__]);
_lib_mdx__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








// Fetch data at build time
async function getStaticProps({ params  }) {
    let slug = params.slug || [];
    let currentPage = 1;
    const pageIndex = slug.indexOf("page");
    if (pageIndex !== -1) {
        currentPage = parseInt(slug[pageIndex + 1]);
        slug = slug.slice(0, pageIndex);
    }
    let page = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_6__/* .getPageBySlug */ .it)(slug);
    if (!page) {
        page = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_6__/* .getPageBySlug */ .it)([
            "not-found"
        ]);
    }
    const props = {
        page
    };
    // Add pagination props for collection pages
    if (page.meta && page.meta.collection) {
        const { meta: { collection: { totalPages , records , recordsPerPage , infinitePaging  }  }  } = page;
        const pageRecords = records?.slice(recordsPerPage * (currentPage - 1), recordsPerPage * currentPage);
        page.meta.collection.records = pageRecords;
        props.pagination = {
            infinitePaging,
            totalPages,
            currentPage
        };
    }
    // Generate RSS feed for collections
    await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_6__/* .generateCollectionRss */ .Rm)(slug);
    return {
        props
    };
}
// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
async function getStaticPaths() {
    const pages = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_6__/* .getPaths */ .w3)();
    const paths = pages.map((page)=>({
            params: {
                slug: page.slug
            }
        }));
    return {
        paths,
        fallback: true
    };
}
function Page({ pagination , page ={}  }) {
    const { meta ={} , ...content } = page;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const layout = router.isFallback ? "Fallback" : meta.layout;
    const DynamicLayout = _layouts_index__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z[layout];
    const pageUrl = _theme_config__WEBPACK_IMPORTED_MODULE_7__/* .siteMetaData.siteUrl */ .cV.siteUrl + router.asPath;
    if (!DynamicLayout) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Seo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                ...meta,
                pageUrl: pageUrl
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicLayout, {
                ...meta,
                ...content,
                pagination: pagination,
                pageUrl: pageUrl
            })
        ]
    });
}
Page.getLayout = function getLayout(page) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: page
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8103:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 2404:
/***/ ((module) => {

"use strict";
module.exports = require("fast-deep-equal");

/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 6641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 8797:
/***/ ((module) => {

"use strict";
module.exports = require("next-share");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 5001:
/***/ ((module) => {

"use strict";
module.exports = require("pure-react-carousel");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 6652:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bi");

/***/ }),

/***/ 2750:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ 9989:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/io5");

/***/ }),

/***/ 5065:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/sl");

/***/ }),

/***/ 1740:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/tfi");

/***/ }),

/***/ 3831:
/***/ ((module) => {

"use strict";
module.exports = require("react-inlinesvg");

/***/ }),

/***/ 4095:
/***/ ((module) => {

"use strict";
module.exports = require("react-portal");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 626:
/***/ ((module) => {

"use strict";
module.exports = import("js-yaml");;

/***/ }),

/***/ 9961:
/***/ ((module) => {

"use strict";
module.exports = import("next-mdx-remote");;

/***/ }),

/***/ 4818:
/***/ ((module) => {

"use strict";
module.exports = import("next-mdx-remote/serialize");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ }),

/***/ 4009:
/***/ ((module) => {

"use strict";
module.exports = import("react-intersection-observer");;

/***/ }),

/***/ 3738:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-external-links");;

/***/ }),

/***/ 9919:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-img-size");;

/***/ }),

/***/ 6370:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-preset-minify");;

/***/ }),

/***/ 483:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-prism-plus");;

/***/ }),

/***/ 7752:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-slug");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

"use strict";
module.exports = import("remark-gfm");;

/***/ }),

/***/ 2022:
/***/ ((module) => {

"use strict";
module.exports = import("remark-squeeze-paragraphs");;

/***/ }),

/***/ 8438:
/***/ ((module) => {

"use strict";
module.exports = import("remark-unwrap-images");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,142,250], () => (__webpack_exec__(2462)));
module.exports = __webpack_exports__;

})();