"use strict";exports.id=919,exports.ids=[919],exports.modules={4919:(t,e,s)=>{s.d(e,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var a=s(997),l=s(6689),i=s.n(l),n=s(8103),o=s.n(n),d=s(5675),m=s.n(d);let __WEBPACK_DEFAULT_EXPORT__=t=>{let[e,s]=i().useState(!1),{wrapperClassName:l,className:n,animation:d="fade-in",alt:r,quality:u=90,...f}=t,c={fadeIn:d.includes("fade-in"),zoomOut:d.includes("zoom-out"),maskRight:d.includes("mask-right"),maskLeft:d.includes("mask-left"),slideInTop:d.includes("slide-in-top")};return(0,a.jsxs)("div",{className:o()("relative overflow-hidden",{"h-full w-full":f.fill},l),children:[a.jsx("div",{className:o()("absolute left-0 top-0 z-10 hidden h-full w-[120%] bg-omega-900","origin-bottom skew-x-6 transform-gpu transition-transform duration-700",(c.maskRight||c.maskLeft)&&"md:block",{"translate-x-full":e&&c.maskRight,"-translate-x-full":e&&c.maskLeft})}),a.jsx(m(),{onLoadingComplete:()=>{s(!0)},className:o()("md:transform-gpu md:transition-all md:duration-700",!e&&{"md:opacity-0":c.fadeIn,"md:scale-150 md:will-change-transform":c.zoomOut,"md:translate-y-20 md:will-change-transform":c.slideInTop},n),alt:r,quality:u,...f})]})}}};