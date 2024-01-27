"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[440],{4831:function(e,s,a){var l=a(5893);a(7294);var t=a(6010),i=a(1664),n=a.n(i),r=a(4919),o=a(2881),d=a(8475);s.Z=e=>{let{className:s,title:a,images:i,slug:m,date:c,tags:x}=e;return(0,l.jsxs)("div",{className:(0,t.Z)("group prose prose-zinc flex dark:prose-invert","md:bg-gradient-omega-900 md:shadow-lg",s),children:[(null==i?void 0:i[0])&&(0,l.jsx)(n(),{href:m.join("/"),"aria-label":a,className:"not-prose relative inline-block h-32 w-1/3 overflow-hidden md:h-40",children:(0,l.jsx)(r.Z,{src:i[0].src,alt:i[0].alt||a,animation:"fade-in zoom-out",wrapperClassName:"transition-transform group-hover:scale-105 duration-300 ease-out before:bg-omega-700",className:"object-cover",sizes:"(min-width: 540px) 428px, 16vw",fill:!0})}),(0,l.jsxs)("div",{className:"w-2/3 px-2 md:p-5",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsx)("div",{className:"space-x-1",children:null==x?void 0:x.map(e=>(0,l.jsx)(o.Z,{slug:e.slug,className:"m-0.5 font-mono text-sm lg:mr-2",children:e.title},e.title))}),c&&(0,l.jsx)("div",{className:"hidden text-omega-500 md:block",children:(0,l.jsx)(d.Z,{className:"block align-middle font-mono text-xs font-bold uppercase",date:c})})]}),(0,l.jsx)(n(),{href:m.join("/"),"aria-label":a,children:(0,l.jsx)("h6",{className:"mb-0 mt-2 transition-colors group-hover:text-accent dark:group-hover:text-alpha md:mt-3",children:a})})]})]})}},4631:function(e,s,a){var l=a(5893);a(7294);var t=a(6233),i=a(1114);s.Z=e=>{let{title:s,list:a}=e;return(0,l.jsxs)("div",{className:"prose prose-invert flex h-12 flex-wrap items-center justify-between",children:[s&&(0,l.jsx)("h4",{className:"mb-4 w-full lg:mb-0 lg:w-auto",children:s}),a&&a.map((e,s)=>{let{icon:a}=e;return(0,l.jsx)(t.Z,{animation:"fade-in zoom-in",delay:250*s,children:a&&(0,l.jsx)(i.Z,{...a,className:"h-12 w-36 fill-current text-omega-500"})},s)})]})}},2665:function(e,s,a){var l=a(5893);a(7294);var t=a(3899);s.Z=e=>{let{source:s}=e;if(!s)return null;let a=s.compiledSource?s:s.content;return a?(0,l.jsx)(t.R,{...a}):null}},8475:function(e,s,a){var l=a(5893);a(7294);var t=a(2821);s.Z=e=>{let{date:s,className:a,...i}=e;if(!s)return null;let n=new Date(s);return(0,l.jsxs)("dl",{className:a,...i,children:[(0,l.jsx)("dt",{className:"sr-only",children:"Published on"}),(0,l.jsx)("dd",{className:"inline",children:(0,l.jsx)("time",{dateTime:s,children:n.toLocaleDateString(t.vc.dateLocale,t.vc.dateOptions)})})]})}},4919:function(e,s,a){var l=a(5893),t=a(7294),i=a(6010),n=a(5675),r=a.n(n);s.Z=e=>{let[s,a]=t.useState(!1),{wrapperClassName:n,className:o,animation:d="fade-in",alt:m,quality:c=90,...x}=e,u={fadeIn:d.includes("fade-in"),zoomOut:d.includes("zoom-out"),maskRight:d.includes("mask-right"),maskLeft:d.includes("mask-left"),slideInTop:d.includes("slide-in-top")};return(0,l.jsxs)("div",{className:(0,i.Z)("relative overflow-hidden",{"h-full w-full":x.fill},n),children:[(0,l.jsx)("div",{className:(0,i.Z)("absolute left-0 top-0 z-10 hidden h-full w-[120%] bg-omega-900","origin-bottom skew-x-6 transform-gpu transition-transform duration-700",(u.maskRight||u.maskLeft)&&"md:block",{"translate-x-full":s&&u.maskRight,"-translate-x-full":s&&u.maskLeft})}),(0,l.jsx)(r(),{onLoadingComplete:()=>{a(!0)},className:(0,i.Z)("md:transform-gpu md:transition-all md:duration-700",!s&&{"md:opacity-0":u.fadeIn,"md:scale-150 md:will-change-transform":u.zoomOut,"md:translate-y-20 md:will-change-transform":u.slideInTop},o),alt:m,quality:c,...x})]})}},6233:function(e,s,a){var l=a(5893),t=a(2708),i=a(6010);s.Z=e=>{let{className:s,animation:a="fade-in",threshold:n=.3,triggerOnce:r=!0,delay:o,duration:d,timeout:m,style:c={},children:x,...u}=e,h={fadeIn:a.includes("fade-in"),slideInRight:a.includes("slide-in-right"),slideInLeft:a.includes("slide-in-left"),slideInTop:a.includes("slide-in-top"),slideInBottom:a.includes("slide-in-bottom"),zoomIn:a.includes("zoom-in"),scaleX:a.includes("scale-x")},[p,f]=(0,t.YD)({triggerOnce:r,threshold:n,delay:m}),v=(0,i.Z)("md:transition-all",{"md:origin-left":h.scaleX,"md:duration-1000":void 0===d},!f&&{"md:opacity-0":h.fadeIn,"md:-translate-x-10":h.slideInRight,"md:translate-x-10":h.slideInLeft,"md:translate-y-5":h.slideInTop,"md:-translate-y-5":h.slideInBottom,"md:scale-90":h.zoomIn,"md:scale-x-0":h.scaleX},s);return(0,l.jsx)("div",{ref:p,className:v,style:{transitionDelay:o?"".concat(o,"ms"):void 0,transitionDuration:d?"".concat(d,"ms"):void 0,...c},...u,children:x})}},2881:function(e,s,a){var l=a(5893);a(7294);var t=a(6010),i=a(1664),n=a.n(i);s.Z=e=>{let{children:s,className:a,slug:i,...r}=e,o=Array.isArray(i),d=o?n():"span",m=o?i.join("/"):void 0;return(0,l.jsx)(d,{className:(0,t.Z)("inline-block select-none px-3 py-1 uppercase no-underline","bg-beta/10 text-beta",o&&"hover:bg-beta/20",a),href:m,...r,children:s})}},5440:function(e,s,a){a.r(s);var l=a(5893);a(7294);var t=a(6010),i=a(2665),n=a(4919),r=a(7778),o=a(4831),d=a(6233),m=a(4631),c=a(6893);let HeroPhoto=e=>{var s;let{main:a}=e;return(null===(s=a.images)||void 0===s?void 0:s[1])&&(0,l.jsxs)("div",{className:"relative mx-auto w-full max-w-md text-center",children:[(0,l.jsx)(n.Z,{src:a.images[1].src,width:a.images[1].width,height:a.images[1].height,alt:a.images[1].alt,animation:"zoom-out",className:"mx-auto",priority:!0}),(0,l.jsx)(r.Z,{size:12})]})},HeroAbout=e=>{let{main:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"inline-flex items-center justify-center space-x-2 bg-accent py-2 px-4 text-accent-50",children:[(0,l.jsx)(c.fmn,{className:"text-xl"}),(0,l.jsx)("small",{className:"font-bold",children:s.slogan})]}),(0,l.jsx)(r.Z,{size:12}),(0,l.jsx)(d.Z,{animation:"fade-in slide-in-bottom",className:(0,t.Z)("mx-auto max-w-3xl px-4 md:p-0","prose prose-invert prose-headings:my-4 first-of-type:prose-headings:mt-0","prose-p:mx-auto prose-p:max-w-prose md:prose-headings:my-6","prose-hr:mx-auto prose-hr:max-w-md"),children:(0,l.jsx)(i.Z,{source:s})})]})},Achievements=e=>{let{achievements:s}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:(0,t.Z)("p-10 text-center md:p-6","ld:grid-cols-4 prose prose-invert grid grid-cols-2 lg:grid-cols-4","bg-gradient-to-tr from-alpha-100 via-alpha to-beta","divide-omega-700/30 lg:divide-x"),children:null==s?void 0:s.map((e,s)=>(0,l.jsxs)(d.Z,{animation:"fade-in",delay:150*s,className:"flex-1 p-2",children:[(0,l.jsx)("h3",{className:"m-0 text-omega-900",children:e.number}),(0,l.jsx)("p",{className:"mt-2 mb-0 font-bold text-omega-700",children:e.text})]},s))})})},Articles=e=>{var s,a;let{articles:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"prose prose-invert text-center",children:(0,l.jsx)(i.Z,{source:null==t?void 0:t.content})}),(0,l.jsx)("div",{className:"mt-8 grid gap-6 md:mt-14 md:gap-4 lg:grid-cols-2",children:null==t?void 0:null===(a=t.collection)||void 0===a?void 0:null===(s=a.records)||void 0===s?void 0:s.map(e=>(0,l.jsx)(o.Z,{...e},e.slug.join("/")))})]})};s.default=e=>{let{main:s={},articles:a={},cta:t={},achievements:n=[],companies:o}=e;return(0,l.jsx)("div",{className:"mx-auto my-auto",children:(0,l.jsxs)("div",{className:"items-center py-10 md:p-10 lg:p-20",children:[(0,l.jsxs)("div",{className:"text-center",children:[(0,l.jsx)(HeroPhoto,{main:s}),(0,l.jsx)(HeroAbout,{main:s}),(0,l.jsx)(r.Z,{size:12}),(0,l.jsx)("div",{className:"prose prose-invert",children:(0,l.jsx)(i.Z,{source:t})}),(0,l.jsx)(r.Z,{className:"my-8 my-16"}),(0,l.jsx)(Achievements,{achievements:n})]}),(0,l.jsx)(r.Z,{size:24}),(0,l.jsx)(Articles,{articles:a}),(0,l.jsxs)("div",{className:"hidden md:block",children:[(0,l.jsx)(r.Z,{size:24}),(0,l.jsx)(m.Z,{...o})]})]})})}}}]);