"use strict";(self.webpackChunkengineering_iog_io=self.webpackChunkengineering_iog_io||[]).push([[8501],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||i;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1405:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={slug:"2023-03-09-ghc-update",title:"IOG GHC Update #5",authors:["sylvain","doyougnu","luite","josh"],tags:["ghc","ghc-update"]},s=void 0,p={permalink:"/2023-03-09-ghc-update",source:"@site/blog/2023-03-09-ghc-update-5.md",title:"IOG GHC Update #5",description:"Biweekly update from the GHC DevX team at IOG.",date:"2023-03-09T00:00:00.000Z",formattedDate:"March 9, 2023",tags:[{label:"ghc",permalink:"/tags/ghc"},{label:"ghc-update",permalink:"/tags/ghc-update"}],readingTime:1.955,truncated:!1,authors:[{name:"Sylvain Henry",title:"Haskell DevX Engineer @ IOG",email:"sylvain.henry@iohk.io",key:"sylvain"},{name:"Jeffrey M. Young",title:"Haskell DevX Engineer @ IOG",url:"https://iog.io/en/",key:"doyougnu"},{name:"Luite Stegeman",title:"Haskell DevX Engineer @ IOG",email:"luite.stegeman@iohk.io",key:"luite"},{name:"Joshua Meredith",title:"Haskell DevX Engineer @ IOG",url:"https://iog.io/en/",key:"josh"}],frontMatter:{slug:"2023-03-09-ghc-update",title:"IOG GHC Update #5",authors:["sylvain","doyougnu","luite","josh"],tags:["ghc","ghc-update"]},nextItem:{title:"IOG GHC Update #4",permalink:"/2023-02-23-ghc-update"}},c={authorsImageUrls:[void 0,void 0,void 0,void 0]},u=[{value:"JavaScript backend",id:"javascript-backend",children:[{value:"Template Haskell",id:"template-haskell",children:[],level:3},{value:"JavaScript EDSL",id:"javascript-edsl",children:[],level:3},{value:"copyMutableArray primops",id:"copymutablearray-primops",children:[],level:3},{value:"Testsuite",id:"testsuite",children:[],level:3},{value:"Callbacks",id:"callbacks",children:[],level:3}],level:2},{value:"Compiler performance",id:"compiler-performance",children:[{value:"Optimization Handbook",id:"optimization-handbook",children:[],level:3}],level:2},{value:"RTS linker",id:"rts-linker",children:[],level:2}],h={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Biweekly update from the GHC DevX team at IOG."),(0,i.kt)("p",null,"Previous updates can be found ",(0,i.kt)("a",{parentName:"p",href:"https://engineering.iog.io/tags/ghc-update"},"here"),"."),(0,i.kt)("h2",{id:"javascript-backend"},"JavaScript backend"),(0,i.kt)("p",null,"Luite: ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/10059"},"!10059"),"\nImplemented computing a valid ",(0,i.kt)("inlineCode",{parentName:"p"},"LambdaFormInfo")," for the JavaScript backend\nso that interface files can be written without warnings. Fixes\n",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/23053"},"#23053"),"."),(0,i.kt)("h3",{id:"template-haskell"},"Template Haskell"),(0,i.kt)("p",null,"Luite: ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/10008"},"!10008"),"\nimplemented keeping track of subdirectories in GHC's temporary file manager.\nIt has been updated after reviews and is now ready to be merged."),(0,i.kt)("h3",{id:"javascript-edsl"},"JavaScript EDSL"),(0,i.kt)("p",null,"Jeff: MR is ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/10000"},"open"),".\nIn response to feedback from the team Jeff has added (and removed)\nseveral features that distinguish the eDSL from\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ku-fpg/sunroof-compiler"},"sunroof"),". These include: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"removing threading and continuations"),(0,i.kt)("li",{parentName:"ul"},"adding named unique variables and a proper switch statement"),(0,i.kt)("li",{parentName:"ul"},"removing a dependency on the ",(0,i.kt)("inlineCode",{parentName:"li"},"operational")," package"),(0,i.kt)("li",{parentName:"ul"},"removing a dependency on the ",(0,i.kt)("inlineCode",{parentName:"li"},"data-reify")," package"),(0,i.kt)("li",{parentName:"ul"},"added a compilation function that compiles the eDSL to the IR the JavaScript backend uses.")),(0,i.kt)("p",null,"These changes allow more of the RTS to be replaced in the eDSL and allow the RTS\nto be typed using Haskell's type system. For example, now the STG registers\ntrack the type of the values they hold. The RTS migration is now underway."),(0,i.kt)("h3",{id:"copymutablearray-primops"},"copyMutableArray primops"),(0,i.kt)("p",null,"Sylvain: fixed JS implementations for ",(0,i.kt)("inlineCode",{parentName:"p"},"copyMutableByteArray#")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"copySmallMutableArray")," primops. They were wrong in some cases when the source\nand target arrays overlap. See\n",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/23033"},"#23033")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/10037"},"!10037"),"."),(0,i.kt)("h3",{id:"testsuite"},"Testsuite"),(0,i.kt)("p",null,"Sylvain: made a minor cleanup in the testsuite to correctly tag tests requiring\nCmm support (which the JS backend doesn't have):\n",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/10043"},"!10043"),"."),(0,i.kt)("h3",{id:"callbacks"},"Callbacks"),(0,i.kt)("p",null,"Josh: ported GHCJS's ",(0,i.kt)("inlineCode",{parentName:"p"},"GHCJS.Foreign.Callback")," module. Manual testing revealed some\nminor changes required in the JavaScript backend, including to ",(0,i.kt)("inlineCode",{parentName:"p"},"base.GHC.JS.Prim"),",\nto make everything work as expected."),(0,i.kt)("p",null,"This will enable passing Haskell functions into ",(0,i.kt)("inlineCode",{parentName:"p"},"foreign import"),"s, which in turn\nenables a form of calling into Haskell from JavaScript code."),(0,i.kt)("h2",{id:"compiler-performance"},"Compiler performance"),(0,i.kt)("h3",{id:"optimization-handbook"},"Optimization Handbook"),(0,i.kt)("p",null,"Jeff: Work has begun on the first major case study: a performance\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LeventErkok/sbv/issues/642"},"regression")," in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LeventErkok/sbv"},"sbv")," library. "),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"rts-linker"},"RTS linker"),(0,i.kt)("p",null,"Sylvain: helped fixing a RTS linker bug. The RTS ELF linker didn't properly\ntake into account required section alignments and always used 16-bytes alignment.\nHowever AVX instructions generated by the C compiler may expect 32-bytes alignment\n(even if the code uses unaligned load intrinsics, the C compiler may optimize them\ninto aligned load instructions, as was the case here).\nThe fix was simple, the test case a bit more involved.\nSee ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/23066"},"#23066")," and ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/10087"},"!10087"),"."))}d.isMDXComponent=!0}}]);