(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[120],{9805:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[[...slug]]",function(){return a(2263)}])},2263:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return C},default:function(){return z}});var l=a(5893),n=a(7294),r=a(1163),s=a(2962),i=a(6788);let o=e=>{var t;let{seo:a={},title:n,description:r,images:o,pageUrl:c}=e,d={...i.cV,title:n,description:r,...a},m=(null==o?void 0:null===(t=o[0])||void 0===t?void 0:t.src)?d.siteUrl+o[0].src:void 0,h={url:c,title:d.title,description:d.description,images:[{url:m}],site_name:d.siteName,locale:d.locale};return(0,l.jsx)(s.PB,{...d,openGraph:h})};var c=a(6010),d=a(1664),m=a.n(d);let h=e=>{let{children:t,className:a,activeClassName:s,inActiveClassName:i,...o}=e,{asPath:d}=(0,r.useRouter)(),h=n.useMemo(()=>(0,c.Z)(a,d===o.href?s:i),[d,o.href,a,s,i]);return(0,l.jsx)(m(),{className:h,...o,children:t})};var b=a(7516);let x=e=>{let{name:t,Icon:a,text:n,slug:r,number:s,isOpen:i,toggleMenu:o,...d}=e;return(0,l.jsxs)(h,{href:r,activeClassName:"from-beta to-alpha text-black",inActiveClassName:"from-omega-900 text-white group md:hover:from-accent-700 md:hover:to-accent",className:(0,c.Z)("h-16 md:h-auto","relative z-20 flex flex-col items-center justify-center md:py-4","bg-gradient-to-tr transition-all duration-300"),"aria-label":t,...d,children:[(0,l.jsx)("div",{className:(0,c.Z)("absolute right-full top-0 h-full min-w-max px-4","hidden items-center bg-accent text-sm font-medium text-white md:flex","invisible translate-x-10 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100"),children:t}),s&&(0,l.jsx)("div",{className:"absolute bottom-2 right-2 hidden h-4 w-4 text-center font-mono text-xs font-bold md:block",children:s}),(0,l.jsx)("span",{className:"absolute top-0 right-0 hidden h-full w-1 bg-white/25 opacity-0 transition-opacity group-hover:opacity-100 md:block"}),a&&(0,l.jsx)(a,{className:"relative z-20 h-6 w-6"}),n&&(0,l.jsx)("div",{className:"relative z-20 h-6 text-lg font-extrabold",children:n}),(0,l.jsx)("span",{className:"mt-1 text-center text-xs md:hidden",children:t})]})},u=e=>{let{url:t,name:a,Icon:n}=e;return(0,l.jsx)(m(),{href:t,className:"group block flex-1 text-center",rel:"noopener noreferrer",target:"_blank",title:a,children:n&&(0,l.jsx)(n,{className:"mx-auto h-12 w-6 text-white md:text-omega-500 md:group-hover:text-alpha"})})},f=()=>{let[e,t]=n.useState(!1),a=()=>t(e=>!e),r=()=>t(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:(0,c.Z)("fixed top-0 left-0 z-10 block w-full animate-fade-in bg-black/90 md:hidden",e?"h-screen":"h-0"),onClick:r}),(0,l.jsxs)("div",{className:(0,c.Z)("bg-gradient-omega-900 shrink-0 flex-col items-center justify-between md:flex","fixed left-0 top-full z-40 w-full md:w-16","md:sticky md:top-20 md:h-[calc(100vh-theme(space.40))]","transition-transform md:translate-y-0",e?"-translate-y-full":"-translate-y-16"),children:[i.GI&&(0,l.jsxs)("div",{className:"grid w-full grid-cols-4 bg-gradient-to-b from-transparent to-omega-800 md:block",children:[i.GI&&i.GI.map(e=>(0,n.createElement)(x,{...e,key:"".concat(e.slug),onClick:r})),(0,l.jsx)("div",{className:(0,c.Z)("row-start-1 flex h-16 items-center md:hidden",e?"col-span-4 col-start-1":"bg-gradient-omega-900 col-start-4"),onClick:a,children:(0,l.jsx)("span",{className:"md:none mx-auto block text-7xl text-omega-100",children:e?(0,l.jsx)(b.OrA,{className:"animate-grow-in"}):(0,l.jsx)(b.Q81,{className:"animate-grow-in"})})})]}),i.xs&&(0,l.jsx)("div",{className:"flex w-full flex-wrap bg-accent md:block md:bg-omega-800",children:i.xs.map((e,t)=>(0,l.jsx)(u,{...e},"".concat(t,"-social")))})]})]})};var g=a(3854);let p=[{name:"lime",switchBg:"from-lime-500 to-green-500"},{name:"amber",switchBg:"from-amber-500 to-red-500"},{name:"rose",switchBg:"from-rose-500 to-purple-500"},{name:"cyan",switchBg:"from-cyan-500 to-indigo-500"}],v=e=>{let{setTheme:t}=e;return(0,l.jsxs)("div",{className:"group fixed left-2 top-1/2 z-50 hidden -translate-y-1/2 space-y-1 lg:left-8 lg:block",children:[(0,l.jsx)(g.Wdx,{className:"h-5 w-5 text-omega-500 group-hover:text-omega-100"}),p.map(e=>{let{name:a,switchBg:n}=e;return(0,l.jsx)("div",{className:(0,c.Z)(n,"h-5 w-5 origin-right cursor-pointer bg-gradient-to-br transition-all hover:scale-x-150"),onClick:()=>t(a)},a)})]})};var w=a(5394),k=a.n(w);let j=[k().variable],N=e=>{let{children:t}=e,[a,r]=n.useState({});return(0,l.jsxs)("div",{className:(0,c.Z)("dark relative flex min-h-screen w-full justify-center bg-black font-sans lg:px-4 xl:px-8",a,...j),children:[(0,l.jsx)(v,{setTheme:r}),(0,l.jsx)("div",{className:"fixed bottom-0 left-0 z-50 hidden w-full bg-black md:block lg:h-4 xl:h-8"}),(0,l.jsx)("div",{className:"fixed top-0 left-0 z-50 hidden w-full bg-black md:block lg:h-4 xl:h-8"}),(0,l.jsx)("div",{className:"relative w-full max-w-screen-xl",children:(0,l.jsx)("main",{className:"relative h-full bg-gradient-to-tr from-omega-900 via-omega-900 to-omega-800",children:(0,l.jsx)("div",{className:"flex h-full w-full flex-col content-center items-center pb-20 lg:py-4 xl:py-8",children:t})})}),(0,l.jsx)(f,{})]})};var y=a(5152),G=a.n(y);let _={About:G()(()=>a.e(707).then(a.bind(a,5707)),{loadableGenerated:{webpack:()=>[5707]}}),Contact:G()(()=>a.e(827).then(a.bind(a,9827)),{loadableGenerated:{webpack:()=>[9827]}}),Services:G()(()=>a.e(601).then(a.bind(a,4601)),{loadableGenerated:{webpack:()=>[4601]}}),Home:G()(()=>a.e(817).then(a.bind(a,8817)),{loadableGenerated:{webpack:()=>[8817]}}),"Home-2":G()(()=>a.e(663).then(a.bind(a,3663)),{loadableGenerated:{webpack:()=>[3663]}}),"Home-3":G()(()=>a.e(19).then(a.bind(a,6019)),{loadableGenerated:{webpack:()=>[6019]}}),"Home-4":G()(()=>Promise.all([a.e(450),a.e(413)]).then(a.bind(a,7413)),{loadableGenerated:{webpack:()=>[7413]}}),Post:G()(()=>Promise.all([a.e(368),a.e(211)]).then(a.bind(a,1829)),{loadableGenerated:{webpack:()=>[1829]}}),Blog:G()(()=>a.e(507).then(a.bind(a,5507)),{loadableGenerated:{webpack:()=>[5507]}}),Projects:G()(()=>a.e(461).then(a.bind(a,9461)),{loadableGenerated:{webpack:()=>[9461]}}),Fallback:G()(()=>a.e(483).then(a.bind(a,4483)),{loadableGenerated:{webpack:()=>[4483]}}),Blank:G()(()=>a.e(402).then(a.bind(a,9402)),{loadableGenerated:{webpack:()=>[9402]}}),BlankCentered:G()(()=>a.e(654).then(a.bind(a,6654)),{loadableGenerated:{webpack:()=>[6654]}})};var C=!0;function z(e){let{pagination:t,page:a={}}=e,{meta:n={},...s}=a,c=(0,r.useRouter)(),d=c.isFallback?"Fallback":n.layout,m=_[d],h=i.cV.siteUrl+c.asPath;return m?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{...n,pageUrl:h}),(0,l.jsx)(m,{...n,...s,pagination:t,pageUrl:h})]}):null}z.getLayout=function(e){return(0,l.jsx)(N,{children:e})}}},function(e){e.O(0,[556,52,774,888,179],function(){return e(e.s=9805)}),_N_E=e.O()}]);