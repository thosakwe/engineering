"use strict";(self.webpackChunkengineering_iog_io=self.webpackChunkengineering_iog_io||[]).push([[7266],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(a),d=r,g=h["".concat(s,".").concat(d)]||h[d]||u[d]||i;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3191:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={slug:"2023-03-23-ghc-update",title:"IOG GHC Update #6",authors:["sylvain","doyougnu","luite","josh"],tags:["ghc","ghc-update"]},s=void 0,c={permalink:"/2023-03-23-ghc-update",source:"@site/blog/2023-03-23-ghc-update-6.md",title:"IOG GHC Update #6",description:"Biweekly update from the GHC DevX team at IOG.",date:"2023-03-23T00:00:00.000Z",formattedDate:"March 23, 2023",tags:[{label:"ghc",permalink:"/tags/ghc"},{label:"ghc-update",permalink:"/tags/ghc-update"}],readingTime:2.49,truncated:!1,authors:[{name:"Sylvain Henry",title:"Haskell DevX Engineer @ IOG",email:"sylvain.henry@iohk.io",key:"sylvain"},{name:"Jeffrey M. Young",title:"Haskell DevX Engineer @ IOG",url:"https://iog.io/en/",key:"doyougnu"},{name:"Luite Stegeman",title:"Haskell DevX Engineer @ IOG",email:"luite.stegeman@iohk.io",key:"luite"},{name:"Joshua Meredith",title:"Haskell DevX Engineer @ IOG",url:"https://iog.io/en/",key:"josh"}],frontMatter:{slug:"2023-03-23-ghc-update",title:"IOG GHC Update #6",authors:["sylvain","doyougnu","luite","josh"],tags:["ghc","ghc-update"]},prevItem:{title:"IOG GHC Update #7",permalink:"/2023-04-06-ghc-update"},nextItem:{title:"IOG GHC Update #5",permalink:"/2023-03-09-ghc-update"}},p={authorsImageUrls:[void 0,void 0,void 0,void 0]},u=[{value:"JavaScript backend",id:"javascript-backend",children:[{value:"Port of GHCJS&#39;s Callback feature",id:"port-of-ghcjss-callback-feature",children:[],level:3},{value:"Pipeline refactoring and new IR",id:"pipeline-refactoring-and-new-ir",children:[],level:3},{value:"Faster weak references implementation?",id:"faster-weak-references-implementation",children:[],level:3},{value:"Testsuite and cleanup",id:"testsuite-and-cleanup",children:[],level:3},{value:"Code generator and performance",id:"code-generator-and-performance",children:[],level:3}],level:2},{value:"Miscellaneous",id:"miscellaneous",children:[],level:2}],h={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Biweekly update from the GHC DevX team at IOG."),(0,i.kt)("p",null,"Previous updates can be found ",(0,i.kt)("a",{parentName:"p",href:"https://engineering.iog.io/tags/ghc-update"},"here"),"."),(0,i.kt)("h2",{id:"javascript-backend"},"JavaScript backend"),(0,i.kt)("h3",{id:"port-of-ghcjss-callback-feature"},"Port of GHCJS's Callback feature"),(0,i.kt)("p",null,"Josh: opened an MR for porting GHCJS's ",(0,i.kt)("inlineCode",{parentName:"p"},"GHCJS.Foreign.Callback")," module into the JavaScript backend.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"Callback"),' type allows for passing Haskell functions into the FFI using standard JavaScript-styled\nfunction arguments - where compiled functions usually use global variables as registers to pass arguments.\nBy passing functions into FFI imports and storing references to the functions, we can enable a form\nof FFI "exports" - since the passed functions allow JavaScript code to call back into Haskell code.'),(0,i.kt)("p",null,"This MR additionally adds user guide documentation for both callbacks, and general JavaScript FFI usage."),(0,i.kt)("p",null,"We're currently awaiting the results of a CLC proposal before the merge can be completed."),(0,i.kt)("p",null,"See the following links for more information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/23126"},"GHC Issue")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/10128"},"Merge Request")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/haskell/core-libraries-committee/issues/150"},"CLC Proposal"))),(0,i.kt)("h3",{id:"pipeline-refactoring-and-new-ir"},"Pipeline refactoring and new IR"),(0,i.kt)("p",null,"Jeff: Began to lay the foundation for splitting the DSL in the JavaScript backend by segregating code generation to a new, basically identical DSL. The motivation is that by splitting the existing DSL, we can now replace the old DSL while still providing working builds. This is the first step in a multistep plan that eventually ends with GHCJS's optimizer and a typed sunroof based DSL. ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/10142"},"MR is up")),(0,i.kt)("h3",{id:"faster-weak-references-implementation"},"Faster weak references implementation?"),(0,i.kt)("p",null,"Luite: investigated replacing heap traversal with newer JS feature."),(0,i.kt)("p",null,"ES2021 has new functionality for ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef"},"weak references"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry"},"finalization"),". These do not directly map to Haskell weak references and finalizers, but it's probably possible to use them to avoid a lot of the expensive heap scanning that we currently do."),(0,i.kt)("p",null,"It's not yet clear whether we can completely remove the heap scanning while exactly preserving the current semantics for weak references."),(0,i.kt)("h3",{id:"testsuite-and-cleanup"},"Testsuite and cleanup"),(0,i.kt)("p",null,"Sylvain: removed dead code in the JS RTS ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/10102"},"!10102")),(0,i.kt)("p",null,"Sylvain: did some triage of tests in GHC's testsuite failing with the JS backend. See tickets ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/22370"},"#22370"),", ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/22374"},"#22374"),", ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/22576"},"#22576"),", and merge requests ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/10148"},"!10148"),", ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/10150"},"!10150"),"."),(0,i.kt)("h3",{id:"code-generator-and-performance"},"Code generator and performance"),(0,i.kt)("p",null,"Jeff: tested changing the code generator to generate ",(0,i.kt)("inlineCode",{parentName:"p"},"let")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"var"),". This led to a large performance regression (~20%), which was not isolated to any single function (via a ticky profile in node). The working hypothesis is that ",(0,i.kt)("inlineCode",{parentName:"p"},"let")," requires more work when allocating closures because the JavaScript engine needs to ensure all variables are lexically scoped. We have not confirmed that this is the cause yet, but we did find that we generate closures that are allocated at runtime in the code generated for ",(0,i.kt)("inlineCode",{parentName:"p"},"base"),". So after review we decided to leave the ",(0,i.kt)("inlineCode",{parentName:"p"},"var"),"s and not generate ",(0,i.kt)("inlineCode",{parentName:"p"},"let"),"s. Unless we begin to observe issues around scoping, using the safer construct seems to be too much of a performance hit."),(0,i.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,i.kt)("p",null,"Jeff: Revived Data structure work in GHC.Unit.State resulting in -1.7% reduction in allocations (by geometric average) and -9% in some cases. ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/9702"},"MR is here")," and ready to land, just needs to upstream a single-line patch to haddock."))}d.isMDXComponent=!0}}]);