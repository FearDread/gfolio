(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[718],{4631:function(e,t,n){"use strict";var i=n(5893);n(7294);var s=n(6233),r=n(1114);t.Z=e=>{let{title:t,list:n}=e;return(0,i.jsxs)("div",{className:"prose prose-invert flex h-12 flex-wrap items-center justify-between",children:[t&&(0,i.jsx)("h4",{className:"mb-4 w-full lg:mb-0 lg:w-auto",children:t}),n&&n.map((e,t)=>{let{icon:n}=e;return(0,i.jsx)(s.Z,{animation:"fade-in zoom-in",delay:250*t,children:n&&(0,i.jsx)(r.Z,{...n,className:"h-12 w-36 fill-current text-omega-500"})},t)})]})}},2665:function(e,t,n){"use strict";var i=n(5893);n(7294);var s=n(3899);t.Z=e=>{let{source:t}=e;if(!t)return null;let n=t.compiledSource?t:t.content;return n?(0,i.jsx)(s.R,{...n}):null}},4919:function(e,t,n){"use strict";var i=n(5893),s=n(7294),r=n(6010),l=n(5675),a=n.n(l);t.Z=e=>{let[t,n]=s.useState(!1),{wrapperClassName:l,className:o,animation:d="fade-in",alt:c,quality:m=90,...u}=e,f={fadeIn:d.includes("fade-in"),zoomOut:d.includes("zoom-out"),maskRight:d.includes("mask-right"),maskLeft:d.includes("mask-left"),slideInTop:d.includes("slide-in-top")};return(0,i.jsxs)("div",{className:(0,r.Z)("relative overflow-hidden",{"h-full w-full":u.fill},l),children:[(0,i.jsx)("div",{className:(0,r.Z)("absolute left-0 top-0 z-10 hidden h-full w-[120%] bg-omega-900","origin-bottom skew-x-6 transform-gpu transition-transform duration-700",(f.maskRight||f.maskLeft)&&"md:block",{"translate-x-full":t&&f.maskRight,"-translate-x-full":t&&f.maskLeft})}),(0,i.jsx)(a(),{onLoadingComplete:()=>{n(!0)},className:(0,r.Z)("md:transform-gpu md:transition-all md:duration-700",!t&&{"md:opacity-0":f.fadeIn,"md:scale-150 md:will-change-transform":f.zoomOut,"md:translate-y-20 md:will-change-transform":f.slideInTop},o),alt:c,quality:m,...u})]})}},6233:function(e,t,n){"use strict";var i=n(5893),s=n(2708),r=n(6010);t.Z=e=>{let{className:t,animation:n="fade-in",threshold:l=.3,triggerOnce:a=!0,delay:o,duration:d,timeout:c,style:m={},children:u,...f}=e,h={fadeIn:n.includes("fade-in"),slideInRight:n.includes("slide-in-right"),slideInLeft:n.includes("slide-in-left"),slideInTop:n.includes("slide-in-top"),slideInBottom:n.includes("slide-in-bottom"),zoomIn:n.includes("zoom-in"),scaleX:n.includes("scale-x")},[p,g]=(0,s.YD)({triggerOnce:a,threshold:l,delay:c}),v=(0,r.Z)("md:transition-all",{"md:origin-left":h.scaleX,"md:duration-1000":void 0===d},!g&&{"md:opacity-0":h.fadeIn,"md:-translate-x-10":h.slideInRight,"md:translate-x-10":h.slideInLeft,"md:translate-y-5":h.slideInTop,"md:-translate-y-5":h.slideInBottom,"md:scale-90":h.zoomIn,"md:scale-x-0":h.scaleX},t);return(0,i.jsx)("div",{ref:p,className:v,style:{transitionDelay:o?"".concat(o,"ms"):void 0,transitionDuration:d?"".concat(d,"ms"):void 0,...m},...f,children:u})}},3718:function(e,t,n){"use strict";n.r(t);var i=n(5893);n(7294);var s=n(6010),r=n(2665),l=n(4919),a=n(7778),o=n(6233),d=n(4631);let HeroPhoto=e=>{var t,n;let{main:s}=e;return(0,i.jsxs)(i.Fragment,{children:[(null===(t=s.images)||void 0===t?void 0:t[0])&&(0,i.jsx)("div",{className:"hidden md:block",children:(0,i.jsx)(l.Z,{src:s.images[0].src,width:s.images[0].width,height:s.images[0].height,alt:s.images[0].alt,animation:"slide-in-top fade-in",priority:!0})}),(null===(n=s.images)||void 0===n?void 0:n[1])&&(0,i.jsx)("div",{className:"md:hidden",children:(0,i.jsx)(l.Z,{src:s.images[1].src,width:s.images[1].width,height:s.images[1].height,alt:s.images[1].alt,className:"mx-auto",priority:!0})})]})},HeroAbout=e=>{let{main:t}=e;return(0,i.jsx)(o.Z,{animation:"fade-in slide-in-right",className:(0,s.Z)("prose prose-invert prose-headings:my-4 first-of-type:prose-headings:mt-0 prose-p:hidden","prose-headings:my-6 prose-pre:max-w-[100vw] md:prose-p:block md:prose-pre:max-w-lg"),children:(0,i.jsx)(r.Z,{source:t})})},Achievements=e=>{let{achievements:t}=e;return(0,i.jsx)("div",{className:(0,s.Z)("prose prose-invert hidden grow grid-cols-2 gap-2 sm:grid md:gap-6 md:pr-6"),children:null==t?void 0:t.map((e,t)=>(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center md:flex-row",children:[(0,i.jsx)("h2",{className:"m-0 text-white md:pr-4",children:e.number}),(0,i.jsx)("div",{className:"dark:text-accent-400",children:e.text})]},t))})};t.default=e=>{let{main:t={},cta:n={},achievements:l=[],companies:o}=e;return(0,i.jsxs)("div",{className:"mx-auto my-auto py-4 md:p-10 lg:p-20",children:[(0,i.jsx)("div",{className:"absolute right-0 top-0 box-content hidden h-full w-1/4 bg-gradient-to-br from-alpha-100 via-alpha to-beta pl-5 md:block"}),(0,i.jsxs)("div",{className:"items-end text-center md:flex md:text-left",children:[(0,i.jsx)("div",{className:"relative shrink-0 basis-1/2 text-center md:order-2 md:-ml-20",children:(0,i.jsx)(HeroPhoto,{main:t})}),(0,i.jsx)("div",{className:"z-10 mt-6 basis-full md:mb-12 md:mt-0",children:(0,i.jsx)(HeroAbout,{main:t})})]}),(0,i.jsxs)("div",{className:"relative z-10",children:[(0,i.jsx)(a.Z,{line:!0,className:"hidden md:block"}),(0,i.jsxs)("div",{className:(0,s.Z)("md:bg-gradient-omega-900 flex flex-wrap items-center justify-between","px-4 md:p-8 md:shadow-xl"),children:[(0,i.jsx)(Achievements,{achievements:l}),(0,i.jsx)("div",{className:"prose prose-invert grow text-center",children:(0,i.jsx)(r.Z,{source:n})})]}),(0,i.jsx)("div",{className:"mt-6 mt-12 hidden w-3/4 px-2 pr-12 md:block",children:(0,i.jsx)(d.Z,{...o})})]})]})}},2746:function(e,t,n){let i=n(5893);e.exports.c=i},3899:function(e,t,n){"use strict";n.d(t,{R:function(){return MDXRemote}});var i={};n.r(i),n.d(i,{MDXContext:function(){return l.pC},MDXProvider:function(){return l.Zo},useMDXComponents:function(){return l.ah},withMDXComponents:function(){return l.NF}});var s=n(7294),r=n(2746),l=n(1151);function MDXRemote({compiledSource:e,frontmatter:t,scope:n,components:a={},lazy:o}){let[d,c]=(0,s.useState)(!o||"undefined"==typeof window);(0,s.useEffect)(()=>{if(o){let e=window.requestIdleCallback(()=>{c(!0)});return()=>window.cancelIdleCallback(e)}},[]);let m=(0,s.useMemo)(()=>{let s=Object.assign({opts:{...i,...r.c}},{frontmatter:t},n),l=Object.keys(s),a=Object.values(s),o=Reflect.construct(Function,l.concat(`${e}`));return o.apply(o,a).default},[n,e]);if(!d)return s.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let u=s.createElement(l.Zo,{components:a},s.createElement(m,null));return o?s.createElement("div",null,u):u}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)})},2708:function(e,t,n){"use strict";n.d(t,{YD:function(){return useInView}});var i=n(7294),s=Object.defineProperty,r=new Map,l=new WeakMap,a=0,o=void 0;function useInView({threshold:e,delay:t,trackVisibility:n,rootMargin:s,root:d,triggerOnce:c,skip:m,initialInView:u,fallbackInView:f,onChange:h}={}){var p;let[g,v]=i.useState(null),x=i.useRef(),[w,b]=i.useState({inView:!!u,entry:void 0});x.current=h,i.useEffect(()=>{let i;if(!m&&g)return i=function(e,t,n={},i=o){if(void 0===window.IntersectionObserver&&void 0!==i){let s=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}let{id:s,observer:d,elements:c}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var n;return`${t}_${"root"===t?(n=e.root)?(l.has(n)||(a+=1,l.set(n,a.toString())),l.get(n)):"0":e[t]}`}).toString(),n=r.get(t);if(!n){let i;let s=new Map,l=new IntersectionObserver(t=>{t.forEach(t=>{var n;let r=t.isIntersecting&&i.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=r),null==(n=s.get(t.target))||n.forEach(e=>{e(r,t)})})},e);i=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:l,elements:s},r.set(t,n)}return n}(n),m=c.get(e)||[];return c.has(e)||c.set(e,m),m.push(t),d.observe(e),function(){m.splice(m.indexOf(t),1),0===m.length&&(c.delete(e),d.unobserve(e)),0===c.size&&(d.disconnect(),r.delete(s))}}(g,(e,t)=>{b({inView:e,entry:t}),x.current&&x.current(e,t),t.isIntersecting&&c&&i&&(i(),i=void 0)},{root:d,rootMargin:s,threshold:e,trackVisibility:n,delay:t},f),()=>{i&&i()}},[Array.isArray(e)?e.toString():e,g,d,s,c,m,n,f,t]);let j=null==(p=w.entry)?void 0:p.target,y=i.useRef();g||!j||c||m||y.current===j||(y.current=j,b({inView:!!u,entry:void 0}));let k=[v,w.inView,w.entry];return k.ref=k[0],k.inView=k[1],k.entry=k[2],k}i.Component}}]);