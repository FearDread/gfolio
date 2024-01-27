exports.id=109,exports.ids=[109],exports.modules={7192:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addBasePath",{enumerable:!0,get:function(){return addBasePath}});let n=r(6063),o=r(2866);function addBasePath(e,t){return(0,o.normalizePathTrailingSlash)((0,n.addPathPrefix)(e,""))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3607:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return addLocale}}),r(2866);let addLocale=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7498:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return n},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return i},ACTION_PREFETCH:function(){return l},ACTION_FAST_REFRESH:function(){return u},ACTION_SERVER_ACTION:function(){return s}});let n="refresh",o="navigate",a="restore",i="server-patch",l="prefetch",u="fast-refresh",s="server-action";(function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"})(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:(e,t,r)=>{"use strict";function getDomainLocale(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6864:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"hasBasePath",{enumerable:!0,get:function(){return hasBasePath}});let n=r(387);function hasBasePath(e){return(0,n.pathHasPrefix)(e,"")}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3271:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return m}});let n=r(167),o=r(8760),a=o._(r(6689)),i=n._(r(6405)),l=n._(r(9201)),u=r(3914),s=r(5494),c=r(6218);r(1905);let d=r(5469),f=n._(r(4545)),p={deviceSizes:[428,540,640,768,1024,1120],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function handleLoading(e,t,r,n,o,a){let i=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===i)return;e["data-loaded-src"]=i;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function getDynamicProps(e){let[t,r]=a.version.split("."),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let g=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:i,width:l,decoding:u,className:s,style:c,fetchPriority:d,placeholder:f,loading:p,unoptimized:g,fill:m,onLoadRef:h,onLoadingCompleteRef:y,setBlurComplete:b,setShowAltText:v,onLoad:P,onError:_,...O}=e;return a.default.createElement("img",{...O,...getDynamicProps(d),loading:p,width:l,height:i,decoding:u,"data-nimg":m?"fill":"1",className:s,style:c,sizes:o,srcSet:n,src:r,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&handleLoading(e,f,h,y,b,g))},[r,f,h,y,b,_,g,t]),onLoad:e=>{let t=e.currentTarget;handleLoading(t,f,h,y,b,g)},onError:e=>{v(!0),"empty"!==f&&b(!0),_&&_(e)}})});function ImagePreload(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...getDynamicProps(r.fetchPriority)};return t&&i.default.preload?(i.default.preload(r.src,n),null):a.default.createElement(l.default,null,a.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...n}))}let m=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(d.RouterContext),n=(0,a.useContext)(c.ImageConfigContext),o=(0,a.useMemo)(()=>{let e=p||n||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:i,onLoadingComplete:l}=e,m=(0,a.useRef)(i);(0,a.useEffect)(()=>{m.current=i},[i]);let h=(0,a.useRef)(l);(0,a.useEffect)(()=>{h.current=l},[l]);let[y,b]=(0,a.useState)(!1),[v,P]=(0,a.useState)(!1),{props:_,meta:O}=(0,u.getImgProps)(e,{defaultLoader:f.default,imgConf:o,blurComplete:y,showAltText:v});return a.default.createElement(a.default.Fragment,null,a.default.createElement(g,{..._,unoptimized:O.unoptimized,placeholder:O.placeholder,fill:O.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:b,setShowAltText:P,ref:t}),O.priority?a.default.createElement(ImagePreload,{isAppRouter:!r,imgAttributes:_}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let n=r(167),o=n._(r(6689)),a=r(4450),i=r(2227),l=r(4364),u=r(109),s=r(3607),c=r(5469),d=r(7443),f=r(920),p=r(30),g=r(7192),m=r(7498);function formatStringOrUrl(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let h=o.default.forwardRef(function(e,t){let r,n;let{href:l,as:h,children:y,prefetch:b=null,passHref:v,replace:P,shallow:_,scroll:O,locale:j,onClick:R,onMouseEnter:S,onTouchStart:x,legacyBehavior:M=!1,...C}=e;r=y,M&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let w=o.default.useContext(c.RouterContext),I=o.default.useContext(d.AppRouterContext),E=null!=w?w:I,z=!w,A=!1!==b,T=null===b?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:k,as:L}=o.default.useMemo(()=>{if(!w){let e=formatStringOrUrl(l);return{href:e,as:h?formatStringOrUrl(h):e}}let[e,t]=(0,a.resolveHref)(w,l,!0);return{href:e,as:h?(0,a.resolveHref)(w,h):t||e}},[w,l,h]),U=o.default.useRef(k),N=o.default.useRef(L);M&&(n=o.default.Children.only(r));let D=M?n&&"object"==typeof n&&n.ref:t,[B,W,H]=(0,f.useIntersection)({rootMargin:"200px"}),G=o.default.useCallback(e=>{(N.current!==L||U.current!==k)&&(H(),N.current=L,U.current=k),B(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[L,D,k,H,B]);o.default.useEffect(()=>{},[L,k,W,j,A,null==w?void 0:w.locale,E,z,T]);let q={ref:G,onClick(e){M||"function"!=typeof R||R(e),M&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),E&&!e.defaultPrevented&&function(e,t,r,n,a,l,u,s,c,d){let{nodeName:f}=e.currentTarget,p="A"===f.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,i.isLocalURL)(r)))return;e.preventDefault();let navigate=()=>{let e=null==u||u;"beforePopState"in t?t[a?"replace":"push"](r,n,{shallow:l,locale:s,scroll:e}):t[a?"replace":"push"](n||r,{forceOptimisticNavigation:!d,scroll:e})};c?o.default.startTransition(navigate):navigate()}(e,E,k,L,P,_,O,j,z,A)},onMouseEnter(e){M||"function"!=typeof S||S(e),M&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e)},onTouchStart(e){M||"function"!=typeof x||x(e),M&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e)}};if((0,u.isAbsoluteUrl)(L))q.href=L;else if(!M||v||"a"===n.type&&!("href"in n.props)){let e=void 0!==j?j:null==w?void 0:w.locale,t=(null==w?void 0:w.isLocaleDomain)&&(0,p.getDomainLocale)(L,e,null==w?void 0:w.locales,null==w?void 0:w.domainLocales);q.href=t||(0,g.addBasePath)((0,s.addLocale)(L,e,null==w?void 0:w.defaultLocale))}return M?o.default.cloneElement(n,q):o.default.createElement("a",{...C,...q},r)}),y=h;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2866:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizePathTrailingSlash",{enumerable:!0,get:function(){return normalizePathTrailingSlash}});let n=r(7425),o=r(1156),normalizePathTrailingSlash=e=>{if(!e.startsWith("/"))return e;let{pathname:t,query:r,hash:a}=(0,o.parsePath)(e);return""+(0,n.removeTrailingSlash)(t)+r+a};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3436:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{requestIdleCallback:function(){return r},cancelIdleCallback:function(){return n}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4450:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return resolveHref}});let n=r(5980),o=r(4364),a=r(6455),i=r(109),l=r(2866),u=r(2227),s=r(8410),c=r(2969);function resolveHref(e,t,r){let d;let f="string"==typeof t?t:(0,o.formatWithValidation)(t),p=f.match(/^[a-zA-Z]{1,}:\/\//),g=p?f.slice(p[0].length):f,m=g.split("?");if((m[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+f+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,i.normalizeRepeatedSlashes)(g);f=(p?p[0]:"")+t}if(!(0,u.isLocalURL)(f))return r?[f]:f;try{d=new URL(f.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){d=new URL("/","http://n")}try{let e=new URL(f,d);e.pathname=(0,l.normalizePathTrailingSlash)(e.pathname);let t="";if((0,s.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,n.searchParamsToUrlQuery)(e.searchParams),{result:i,params:l}=(0,c.interpolateAs)(e.pathname,e.pathname,r);i&&(t=(0,o.formatWithValidation)({pathname:i,hash:e.hash,query:(0,a.omit)(r,l)}))}let i=e.origin===d.origin?e.href.slice(e.origin.length):e.href;return r?[i,t||i]:i}catch(e){return r?[f]:f}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let n=r(6689),o=r(3436),a="function"==typeof IntersectionObserver,i=new Map,l=[];function useIntersection(e){let{rootRef:t,rootMargin:r,disabled:u}=e,s=u||!a,[c,d]=(0,n.useState)(!1),f=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{f.current=e},[]);(0,n.useEffect)(()=>{if(a){if(s||c)return;let e=f.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:a}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=i.get(n)))return t;let o=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:a,elements:o},l.push(r),i.set(r,t),t}(r);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),i.delete(n);let e=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!c){let e=(0,o.requestIdleCallback)(()=>d(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,c,f.current]);let g=(0,n.useCallback)(()=>{d(!1)},[]);return[p,c,g]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7543:(e,t)=>{"use strict";function isInAmpMode(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return isInAmpMode}})},1342:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return noSSR},default:function(){return dynamic}});let n=r(167),o=n._(r(6689)),a=n._(r(4830));function convertModule(e){return{default:(null==e?void 0:e.default)||e}}function noSSR(e,t){delete t.webpack,delete t.modules;let r=t.loading;return()=>o.default.createElement(r,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function dynamic(e,t){let r=a.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e}),n={...n,...t};let o=n.loader;return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?r({...n,loader:()=>null!=o?o().then(convertModule):Promise.resolve(convertModule(()=>null))}):(delete n.webpack,delete n.modules,noSSR(r,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6614:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return escapeStringRegexp}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function escapeStringRegexp(e){return r.test(e)?e.replace(n,"\\$&"):e}},3914:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return getImgProps}}),r(1905);let n=r(2393),o=r(5494);function isStaticRequire(e){return void 0!==e.default}function getInt(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function getImgProps(e,t){var r;let a,i,l,{src:u,sizes:s,unoptimized:c=!1,priority:d=!1,loading:f,className:p,quality:g,width:m,height:h,fill:y=!1,style:b,onLoad:v,onLoadingComplete:P,placeholder:_="empty",blurDataURL:O,fetchPriority:j,layout:R,objectFit:S,objectPosition:x,lazyBoundary:M,lazyRoot:C,...w}=e,{imgConf:I,showAltText:E,blurComplete:z,defaultLoader:A}=t,T=I||o.imageConfigDefault;if("allSizes"in T)a=T;else{let e=[...T.deviceSizes,...T.imageSizes].sort((e,t)=>e-t),t=T.deviceSizes.sort((e,t)=>e-t);a={...T,allSizes:e,deviceSizes:t}}let k=w.loader||A;delete w.loader,delete w.srcSet;let L="__next_img_default"in k;if(L){if("custom"===a.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=k;k=t=>{let{config:r,...n}=t;return e(n)}}if(R){"fill"===R&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(b={...b,...e});let t={responsive:"100vw",fill:"100vw"}[R];t&&!s&&(s=t)}let U="",N=getInt(m),D=getInt(h);if("object"==typeof(r=u)&&(isStaticRequire(r)||void 0!==r.src)){let e=isStaticRequire(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(i=e.blurWidth,l=e.blurHeight,O=O||e.blurDataURL,U=e.src,!y){if(N||D){if(N&&!D){let t=N/e.width;D=Math.round(e.height*t)}else if(!N&&D){let t=D/e.height;N=Math.round(e.width*t)}}else N=e.width,D=e.height}}let B=!d&&("lazy"===f||void 0===f);(!(u="string"==typeof u?u:U)||u.startsWith("data:")||u.startsWith("blob:"))&&(c=!0,B=!1),a.unoptimized&&(c=!0),L&&u.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(c=!0),d&&(j="high");let W=getInt(g),H=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:S,objectPosition:x}:{},E?{}:{color:"transparent"},b),G=z||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:N,heightInt:D,blurWidth:i,blurHeight:l,blurDataURL:O||"",objectFit:H.objectFit})+'")':'url("'+_+'")',q=G?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:G}:{},F=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:a,sizes:i,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let a=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:a,kind:"x"}}(t,o,i),c=u.length-1;return{sizes:i||"w"!==s?i:"100vw",srcSet:u.map((e,n)=>l({config:t,src:r,quality:a,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:l({config:t,src:r,quality:a,width:u[c]})}}({config:a,src:u,unoptimized:c,width:N,quality:W,sizes:s,loader:k}),$={...w,loading:B?"lazy":f,fetchPriority:j,width:N,height:D,decoding:"async",className:p,style:{...H,...q},sizes:F.sizes,srcSet:F.srcSet,src:F.src},K={unoptimized:c,priority:d,placeholder:_,fill:y};return{props:$,meta:K}}},9201:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return defaultHead},default:function(){return _default}});let n=r(167),o=r(8760),a=o._(r(6689)),i=n._(r(8955)),l=r(8039),u=r(1988),s=r(7543);function defaultHead(e){void 0===e&&(e=!1);let t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function onlyReactElement(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(1905);let c=["name","httpEquiv","charSet","itemProp"];function reduceComponents(e,t){let{inAmpMode:r}=t;return e.reduce(onlyReactElement,[]).reverse().concat(defaultHead(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return o=>{let a=!0,i=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){i=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?a=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(let e=0,t=c.length;e<t;e++){let t=c[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?a=!1:r.add(t);else{let e=o.props[t],r=n[t]||new Set;("name"!==t||!i)&&r.has(e)?a=!1:(r.add(e),n[t]=r)}}}}return a}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:n})})}let _default=function(e){let{children:t}=e,r=(0,a.useContext)(l.AmpStateContext),n=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(i.default,{reduceComponentsToState:reduceComponents,headManager:n,inAmpMode:(0,s.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2393:(e,t)=>{"use strict";function getImageBlurSvg(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:a,objectFit:i}=e,l=n?40*n:t,u=o?40*o:r,s=l&&u?"viewBox='0 0 "+l+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+a+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return getImageBlurSvg}})},5494:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},645:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return u}});let n=r(167),o=r(3914),a=r(1905),i=r(3271),l=n._(r(4545)),unstable_getImgProps=e=>{(0,a.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[428,540,640,768,1024,1120],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},u=i.Image},4545:(e,t)=>{"use strict";function defaultLoader(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),defaultLoader.__next_img_default=!0;let r=defaultLoader},6063:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addPathPrefix",{enumerable:!0,get:function(){return addPathPrefix}});let n=r(1156);function addPathPrefix(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:r,query:o,hash:a}=(0,n.parsePath)(e);return""+t+r+o+a}},3090:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{normalizeAppPath:function(){return normalizeAppPath},normalizeRscPath:function(){return normalizeRscPath}});let n=r(504),o=r(6163);function normalizeAppPath(e){return(0,n.ensureLeadingSlash)(e.split("/").reduce((e,t,r,n)=>!t||(0,o.isGroupSegment)(t)||"@"===t[0]||("page"===t||"route"===t)&&r===n.length-1?e:e+"/"+t,""))}function normalizeRscPath(e,t){return t?e.replace(/\.rsc($|\?)/,"$1"):e}},4364:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return formatUrl},urlObjectKeys:function(){return i},formatWithValidation:function(){return formatWithValidation}});let n=r(8760),o=n._(r(5980)),a=/https?|ftp|gopher|file/;function formatUrl(e){let{auth:t,hostname:r}=e,n=e.protocol||"",i=e.pathname||"",l=e.hash||"",u=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(s+=":"+e.port)),u&&"object"==typeof u&&(u=String(o.urlQueryToSearchParams(u)));let c=e.search||u&&"?"+u||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||a.test(n))&&!1!==s?(s="//"+(s||""),i&&"/"!==i[0]&&(i="/"+i)):s||(s=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),""+n+s+(i=i.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+l}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function formatWithValidation(e){return formatUrl(e)}},2969:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return interpolateAs}});let n=r(2142),o=r(2839);function interpolateAs(e,t,r){let a="",i=(0,o.getRouteRegex)(e),l=i.groups,u=(t!==e?(0,n.getRouteMatcher)(i)(t):"")||r;a=e;let s=Object.keys(l);return s.every(e=>{let t=u[e]||"",{repeat:r,optional:n}=l[e],o="["+(r?"...":"")+e+"]";return n&&(o=(t?"":"/")+"["+o+"]"),r&&!Array.isArray(t)&&(t=[t]),(n||e in u)&&(a=a.replace(o,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(a=""),{params:s,result:a}}},2227:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return isLocalURL}});let n=r(109),o=r(6864);function isLocalURL(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},6455:(e,t)=>{"use strict";function omit(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return omit}})},1156:(e,t)=>{"use strict";function parsePath(e){let t=e.indexOf("#"),r=e.indexOf("?"),n=r>-1&&(t<0||r<t);return n||t>-1?{pathname:e.substring(0,n?r:t),query:n?e.substring(r,t>-1?t:void 0):"",hash:t>-1?e.slice(t):""}:{pathname:e,query:"",hash:""}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return parsePath}})},387:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"pathHasPrefix",{enumerable:!0,get:function(){return pathHasPrefix}});let n=r(1156);function pathHasPrefix(e,t){if("string"!=typeof e)return!1;let{pathname:r}=(0,n.parsePath)(e);return r===t||r.startsWith(t+"/")}},5980:(e,t)=>{"use strict";function searchParamsToUrlQuery(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function stringifyUrlQueryParam(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function urlQueryToSearchParams(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,n]=e;Array.isArray(n)?n.forEach(e=>t.append(r,stringifyUrlQueryParam(e))):t.set(r,stringifyUrlQueryParam(n))}),t}function assign(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{searchParamsToUrlQuery:function(){return searchParamsToUrlQuery},urlQueryToSearchParams:function(){return urlQueryToSearchParams},assign:function(){return assign}})},7425:(e,t)=>{"use strict";function removeTrailingSlash(e){return e.replace(/\/$/,"")||"/"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"removeTrailingSlash",{enumerable:!0,get:function(){return removeTrailingSlash}})},2142:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return getRouteMatcher}});let n=r(109);function getRouteMatcher(e){let{re:t,groups:r}=e;return e=>{let o=t.exec(e);if(!o)return!1;let decode=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},a={};return Object.keys(r).forEach(e=>{let t=r[e],n=o[t.pos];void 0!==n&&(a[e]=~n.indexOf("/")?n.split("/").map(e=>decode(e)):t.repeat?[decode(n)]:decode(n))}),a}}},2839:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRouteRegex:function(){return getRouteRegex},getNamedRouteRegex:function(){return getNamedRouteRegex},getNamedMiddlewareRegex:function(){return getNamedMiddlewareRegex}});let n=r(2407),o=r(6614),a=r(7425);function parseParameter(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function getParametrizedRoute(e){let t=(0,a.removeTrailingSlash)(e).slice(1).split("/"),r={},i=1;return{parameterizedRoute:t.map(e=>{let t=n.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&a){let{key:e,optional:n,repeat:l}=parseParameter(a[1]);return r[e]={pos:i++,repeat:l,optional:n},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(!a)return"/"+(0,o.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:n}=parseParameter(a[1]);return r[e]={pos:i++,repeat:t,optional:n},t?n?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function getRouteRegex(e){let{parameterizedRoute:t,groups:r}=getParametrizedRoute(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function getSafeKeyFromSegment(e){let{getSafeRouteKey:t,segment:r,routeKeys:n,keyPrefix:o}=e,{key:a,optional:i,repeat:l}=parseParameter(r),u=a.replace(/\W/g,"");o&&(u=""+o+u);let s=!1;return(0===u.length||u.length>30)&&(s=!0),isNaN(parseInt(u.slice(0,1)))||(s=!0),s&&(u=t()),o?n[u]=""+o+a:n[u]=""+a,l?i?"(?:/(?<"+u+">.+?))?":"/(?<"+u+">.+?)":"/(?<"+u+">[^/]+?)"}function getNamedParametrizedRoute(e,t){let r;let i=(0,a.removeTrailingSlash)(e).slice(1).split("/"),l=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),u={};return{namedParameterizedRoute:i.map(e=>{let r=n.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);return r&&a?getSafeKeyFromSegment({getSafeRouteKey:l,segment:a[1],routeKeys:u,keyPrefix:t?"nxtI":void 0}):a?getSafeKeyFromSegment({getSafeRouteKey:l,segment:a[1],routeKeys:u,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)}).join(""),routeKeys:u}}function getNamedRouteRegex(e,t){let r=getNamedParametrizedRoute(e,t);return{...getRouteRegex(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function getNamedMiddlewareRegex(e,t){let{parameterizedRoute:r}=getParametrizedRoute(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:o}=getNamedParametrizedRoute(e,!1);return{namedRegex:"^"+o+(n?"(?:(/.*)?)":"")+"$"}}},6163:(e,t)=>{"use strict";function isGroupSegment(e){return"("===e[0]&&e.endsWith(")")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isGroupSegment",{enumerable:!0,get:function(){return isGroupSegment}})},8955:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return SideEffect}});let n=r(6689),useClientOnlyLayoutEffect=()=>{},useClientOnlyEffect=()=>{};function SideEffect(e){var t;let{headManager:r,reduceComponentsToState:o}=e;function emitChange(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(o(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),emitChange(),useClientOnlyLayoutEffect(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),useClientOnlyLayoutEffect(()=>(r&&(r._pendingUpdate=emitChange),()=>{r&&(r._pendingUpdate=emitChange)})),useClientOnlyEffect(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},1905:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return warnOnce}});let warnOnce=e=>{}},2407:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{INTERCEPTION_ROUTE_MARKERS:function(){return o},isInterceptionRouteAppPath:function(){return isInterceptionRouteAppPath},extractInterceptionRouteInformation:function(){return extractInterceptionRouteInformation}});let n=r(3090),o=["(..)(..)","(.)","(..)","(...)"];function isInterceptionRouteAppPath(e){return void 0!==e.split("/").find(e=>o.find(t=>e.startsWith(t)))}function extractInterceptionRouteInformation(e){let t,r,a;for(let n of e.split("/"))if(r=o.find(e=>n.startsWith(e))){[t,a]=e.split(r,2);break}if(!t||!r||!a)throw Error(`Invalid interception route: ${e}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);switch(t=(0,n.normalizeAppPath)(t),r){case"(.)":a="/"===t?`/${a}`:t+"/"+a;break;case"(..)":if("/"===t)throw Error(`Invalid interception route: ${e}. Cannot use (..) marker at the root level, use (.) instead.`);a=t.split("/").slice(0,-1).concat(a).join("/");break;case"(...)":a="/"+a;break;case"(..)(..)":let i=t.split("/");if(i.length<=2)throw Error(`Invalid interception route: ${e}. Cannot use (..)(..) marker at the root level or one level up.`);a=i.slice(0,-2).concat(a).join("/");break;default:throw Error("Invariant: unexpected marker")}return{interceptingRoute:t,interceptedRoute:a}}},8039:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.AmpContext},7443:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.AppRouterContext},1988:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.HeadManagerContext},6218:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.ImageConfigContext},4830:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.Loadable},5469:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.RouterContext},5152:(e,t,r)=>{e.exports=r(1342)},5675:(e,t,r)=>{e.exports=r(645)},1664:(e,t,r)=>{e.exports=r(5170)},7516:(e,t,r)=>{"use strict";r.d(t,{Ev8:()=>BiGitRepoForked,OrA:()=>BiChevronDown,Q81:()=>BiDotsHorizontalRounded,Z6h:()=>BiCoffee,slP:()=>BiStar});var n=r(9127);function BiChevronDown(e){return(0,n.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"}}]})(e)}function BiCoffee(e){return(0,n.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 2h2v3H5zm4 0h2v3H9zm4 0h2v3h-2zm6 7h-2V7H3v11c0 1.654 1.346 3 3 3h8c1.654 0 3-1.346 3-3h2c1.103 0 2-.897 2-2v-5c0-1.103-.897-2-2-2zm-4 9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9h10v9zm2-2v-5h2l.002 5H17z"}}]})(e)}function BiDotsHorizontalRounded(e){return(0,n.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}}]})(e)}function BiGitRepoForked(e){return(0,n.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5.559 8.855c.166 1.183.789 3.207 3.087 4.079C11 13.829 11 14.534 11 15v.163c-1.44.434-2.5 1.757-2.5 3.337 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337V15c0-.466 0-1.171 2.354-2.065 2.298-.872 2.921-2.896 3.087-4.079C19.912 8.441 21 7.102 21 5.5 21 3.57 19.43 2 17.5 2S14 3.57 14 5.5c0 1.552 1.022 2.855 2.424 3.313-.146.735-.565 1.791-1.778 2.252-1.192.452-2.053.953-2.646 1.536-.593-.583-1.453-1.084-2.646-1.536-1.213-.461-1.633-1.517-1.778-2.252C8.978 8.355 10 7.052 10 5.5 10 3.57 8.43 2 6.5 2S3 3.57 3 5.5c0 1.602 1.088 2.941 2.559 3.355zM17.5 4c.827 0 1.5.673 1.5 1.5S18.327 7 17.5 7 16 6.327 16 5.5 16.673 4 17.5 4zm-4 14.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5.673-1.5 1.5-1.5 1.5.673 1.5 1.5zM6.5 4C7.327 4 8 4.673 8 5.5S7.327 7 6.5 7 5 6.327 5 5.5 5.673 4 6.5 4z"}}]})(e)}function BiStar(e){return(0,n.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"}}]})(e)}},8760:(e,t)=>{"use strict";function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(_getRequireWildcardCache=function(e){return e?r:t})(e)}t._=t._interop_require_wildcard=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=_getRequireWildcardCache(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}}};