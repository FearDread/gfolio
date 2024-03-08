"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[558],{5558:function(e,t,r){r.r(t),r.d(t,{default:function(){return components_MDXYoutube}});var n=r(5893),o=r(6010),a=r(2708),c=r(7294),__assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=c.forwardRef(function(e,t){var r=c.useState(!1),n=r[0],o=r[1],a=c.useState(!1),i=a[0],l=a[1],s=encodeURIComponent(e.id),u="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,f=e.title,p=e.poster||"hqdefault",b="&".concat(e.params)||0,d=e.muted?"&mute=1":"",m=e.announce||"Watch",h=e.webp?"webp":"jpg",g=e.webp?"vi_webp":"vi",y=e.thumbnail||(e.playlist?"https://i.ytimg.com/".concat(g,"/").concat(u,"/").concat(p,".").concat(h):"https://i.ytimg.com/".concat(g,"/").concat(s,"/").concat(p,".").concat(h)),w=e.noCookie?"https://www.youtube-nocookie.com":"https://www.youtube.com";w=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var v=e.playlist?"".concat(w,"/embed/videoseries?autoplay=1").concat(d,"&list=").concat(s).concat(b):"".concat(w,"/embed/").concat(s,"?autoplay=1&state=1").concat(d).concat(b),k=e.activatedClass||"lyt-activated",C=e.adNetwork||!1,E=e.aspectHeight||9,_=e.aspectWidth||16,I=e.iframeClass||"",O=e.playerClass||"lty-playbtn",R=e.wrapperClass||"yt-lite",V=e.onIframeAdded||function(){},S=e.rel?"prefetch":"preload",j=e.containerElement||"article";return c.useEffect(function(){i&&V()},[i]),c.createElement(c.Fragment,null,c.createElement("link",{rel:S,href:y,as:"image"}),c.createElement(c.Fragment,null,n&&c.createElement(c.Fragment,null,c.createElement("link",{rel:"preconnect",href:w}),c.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),C&&c.createElement(c.Fragment,null,c.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),c.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),c.createElement(j,{onPointerOver:function(){n||o(!0)},onClick:function(){i||l(!0)},className:"".concat(R," ").concat(i?k:""),"data-title":f,style:__assign({backgroundImage:"url(".concat(y,")")},{"--aspect-ratio":"".concat(E/_*100,"%")})},c.createElement("button",{type:"button",className:O,"aria-label":"".concat(m," ").concat(f)}),i&&c.createElement("iframe",{ref:t,className:I,title:f,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:v})))}),components_MDXYoutube=e=>{let{id:t,...r}=e,[c,l]=(0,a.YD)({triggerOnce:!0,threshold:.1});return(0,n.jsx)("div",{className:"bg-omega-800",ref:c,children:l&&(0,n.jsx)(i,{id:t,poster:"maxresdefault",activatedClass:"cursor-none before:hidden [--yt-btn-opacity:0]",iframeClass:"w-full h-full absolute top-0 left-0",playerClass:(0,o.Z)("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","w-24 h-16 z-20 bg-red-600 transition-transform group-hover:scale-110","opacity-[var(--yt-btn-opacity,1)]",'before:content-["_"]',"before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2","before:border-solid before:border-t-[1em] before:border-b-[1em] before:border-l-[2em] before:border-transparent before:border-l-white"),wrapperClass:(0,o.Z)("bg-black relative block bg-center bg-cover cursor-pointer group",'after:content-["_"] after:block after:pb-[var(--aspect-ratio)]','before:content-["_"] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:z-10',"before:bg-omega-900 before:opacity-0 hover:before:opacity-50","before:transition-opacity"),...r})})}},2708:function(e,t,r){r.d(t,{YD:function(){return useInView}});var n=r(7294),o=Object.defineProperty,a=new Map,c=new WeakMap,i=0,l=void 0;function useInView({threshold:e,delay:t,trackVisibility:r,rootMargin:o,root:s,triggerOnce:u,skip:f,initialInView:p,fallbackInView:b,onChange:d}={}){var m;let[h,g]=n.useState(null),y=n.useRef(),[w,v]=n.useState({inView:!!p,entry:void 0});y.current=d,n.useEffect(()=>{let n;if(!f&&h)return n=function(e,t,r={},n=l){if(void 0===window.IntersectionObserver&&void 0!==n){let o=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}let{id:o,observer:s,elements:u}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var r;return`${t}_${"root"===t?(r=e.root)?(c.has(r)||(i+=1,c.set(r,i.toString())),c.get(r)):"0":e[t]}`}).toString(),r=a.get(t);if(!r){let n;let o=new Map,c=new IntersectionObserver(t=>{t.forEach(t=>{var r;let a=t.isIntersecting&&n.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=a),null==(r=o.get(t.target))||r.forEach(e=>{e(a,t)})})},e);n=c.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:c,elements:o},a.set(t,r)}return r}(r),f=u.get(e)||[];return u.has(e)||u.set(e,f),f.push(t),s.observe(e),function(){f.splice(f.indexOf(t),1),0===f.length&&(u.delete(e),s.unobserve(e)),0===u.size&&(s.disconnect(),a.delete(o))}}(h,(e,t)=>{v({inView:e,entry:t}),y.current&&y.current(e,t),t.isIntersecting&&u&&n&&(n(),n=void 0)},{root:s,rootMargin:o,threshold:e,trackVisibility:r,delay:t},b),()=>{n&&n()}},[Array.isArray(e)?e.toString():e,h,s,o,u,f,r,b,t]);let k=null==(m=w.entry)?void 0:m.target,C=n.useRef();h||!k||u||f||C.current===k||(C.current=k,v({inView:!!p,entry:void 0}));let E=[g,w.inView,w.entry];return E.ref=E[0],E.inView=E[1],E.entry=E[2],E}n.Component}}]);