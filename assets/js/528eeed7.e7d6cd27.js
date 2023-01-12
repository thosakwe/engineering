"use strict";(self.webpackChunkengineering_iog_io=self.webpackChunkengineering_iog_io||[]).push([[2399],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8453:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={slug:"2023-01-12-ghc-update",title:"GHC DevX Update 2023-01-12",authors:["sylvain","doyougnu","luite","josh"],tags:["ghc"]},s=void 0,p={permalink:"/2023-01-12-ghc-update",source:"@site/blog/2023-01-12-ghc-update-2023-01-12.md",title:"GHC DevX Update 2023-01-12",description:"Starting in 2023 we\u2013the IOG GHC DevX team\u2013are going to provide biweekly updates",date:"2023-01-12T00:00:00.000Z",formattedDate:"January 12, 2023",tags:[{label:"ghc",permalink:"/tags/ghc"}],readingTime:2.93,truncated:!1,authors:[{name:"Sylvain Henry",title:"Haskell DevX Engineer @ IOG",email:"sylvain.henry@iohk.io",key:"sylvain"},{name:"Jeffrey M. Young",title:"Haskell DevX Engineer @ IOG",url:"https://iog.io/en/",key:"doyougnu"},{name:"Luite Stegeman",title:"Haskell DevX Engineer @ IOG",email:"luite.stegeman@iohk.io",key:"luite"},{name:"Joshua Meredith",title:"Haskell DevX Engineer @ IOG",url:"https://iog.io/en/",key:"josh"}],frontMatter:{slug:"2023-01-12-ghc-update",title:"GHC DevX Update 2023-01-12",authors:["sylvain","doyougnu","luite","josh"],tags:["ghc"]},nextItem:{title:"JavaScript backend merged into GHC",permalink:"/2022-12-13-ghc-js-backend-merged"}},u={authorsImageUrls:[void 0,void 0,void 0,void 0]},c=[{value:"JS backend in the browser tutorial",id:"js-backend-in-the-browser-tutorial",children:[],level:2},{value:"Cabal support for js-sources",id:"cabal-support-for-js-sources",children:[],level:2},{value:"JS backend CI",id:"js-backend-ci",children:[],level:2},{value:"JS backend: Template Haskell",id:"js-backend-template-haskell",children:[],level:2},{value:"GHCi: sized primitive types (Word8#, etc.)",id:"ghci-sized-primitive-types-word8-etc",children:[],level:2},{value:"GHCi: \u201cprim\u201d calling convention",id:"ghci-prim-calling-convention",children:[],level:2},{value:"Jeff",id:"jeff",children:[],level:2},{value:"Josh",id:"josh",children:[],level:2}],h={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Starting in 2023 we\u2013the IOG GHC DevX team\u2013are going to provide biweekly updates\nabout our work. This is the first edition."),(0,i.kt)("h1",{id:"js-backend"},"JS backend"),(0,i.kt)("h2",{id:"js-backend-in-the-browser-tutorial"},"JS backend in the browser tutorial"),(0,i.kt)("p",null,"We are working on a draft of a JS backend tutorial about using it to build a\nsimple web application: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/engineering/pull/24"},"https://github.com/input-output-hk/engineering/pull/24")),(0,i.kt)("p",null,"Publication is expected next week."),(0,i.kt)("h2",{id:"cabal-support-for-js-sources"},"Cabal support for js-sources"),(0,i.kt)("p",null,"Sylvain has made a patch to add cabal support for the ",(0,i.kt)("inlineCode",{parentName:"p"},"js-sources")," stanza when\nGHC is used as a compiler (and not only when GHCJS is used as a compiler):\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/haskell/cabal/pull/8636"},"https://github.com/haskell/cabal/pull/8636")),(0,i.kt)("p",null,"It\u2019s missing tests and then it should be ready to be merged."),(0,i.kt)("h2",{id:"js-backend-ci"},"JS backend CI"),(0,i.kt)("p",null,"Jeff has been working on adding a proper CI job that runs the full testsuite\nwith the JS backend. Cf ticket\n",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/22128"},"#22128")," and merge request\n",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/9552"},"!9552"),"."),(0,i.kt)("p",null,"He had to fix some unexpected test passes (!) with the JS backend due to an\nimprecise ",(0,i.kt)("inlineCode",{parentName:"p"},"req_smp")," predicate used by the testsuite. More details on\n",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/22630"},"#22630")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/9568"},"!9568"),"."),(0,i.kt)("h2",{id:"js-backend-template-haskell"},"JS backend: Template Haskell"),(0,i.kt)("p",null,"Luite and Sylvain started implementing support for Template Haskell (TH) with\nthe JS backend."),(0,i.kt)("p",null,"Sylvain has reimplemented support for running an adapted version of the\nTHRunner.js script from GHCJS. He has also refactored the JS linker and\nimplemented incremental linking."),(0,i.kt)("p",null,"The next step is to link and to run an instance of the external interpreter code\nthat implements the Template Haskell protocol (execution of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Q")," monad)\nadapted to run in JavaScript. GHCJS used to have its own duplicated code for\nthis but for maintenance concerns it\u2019s much better to reuse the external\ninterpreter code."),(0,i.kt)("h1",{id:"ghci"},"GHCi"),(0,i.kt)("h2",{id:"ghci-sized-primitive-types-word8-etc"},"GHCi: sized primitive types (Word8#, etc.)"),(0,i.kt)("p",null,"Luite has implemented support for sized primitive types in GHCi. Cf\n",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/8822"},"!8822"),"."),(0,i.kt)("h2",{id:"ghci-prim-calling-convention"},"GHCi: \u201cprim\u201d calling convention"),(0,i.kt)("p",null,"Luite has implemented support for the \u201cprim\u201d calling convention in GHCi. Cf\n",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/9026"},"!9026")),(0,i.kt)("h1",{id:"compiler-performance"},"Compiler performance"),(0,i.kt)("h2",{id:"jeff"},"Jeff"),(0,i.kt)("p",null,"Each of these improves allocations between 0.2 - 0.7% depending on the input\n(improvements by a thousand cuts):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"GHC.Foreign improved Strictness"),": An Attempt to remove lazy IO and SAT an\nargument that is only used for a debug message. Got a review from Andreas.\nWant to try to 2 more improvements then ready to merge.\n",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/9644"},"!9644"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"InfoTableProv: ShortText \u2192 ShortByteString"),": Post review from Ben I made some\nimprovements that preserved type safety and still recovered most of the\nperformance improvements. Ready to merge\n",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/9637"},"!9637"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"GHC.Unit.State"),": swapped use of Data.Map for GHC.Unique.UniqMap and expanded\nUniqMap API. Results in progress (need to patch Haddock) and still\nexperimental. The idea here is to use a data structure that no longer needs to\nbalance on insertions because Unit.State performs a lot of merges on these\nmaps.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"GHC.Utils.Binary.foldGet\u2019 removed lazy IO and lazy accumulator"),": merged\n",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/9538"},"!9538")))),(0,i.kt)("h2",{id:"josh"},"Josh"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Stricter break"),": we noticed in a ticky profile that ",(0,i.kt)("inlineCode",{parentName:"p"},"GHC.List.break")," allocates\n3 thunks and 1 datacon per list element returned the first part of the list.\nIf this list is fully evaluated later, we can allocate only 1 datacon per list\nelement instead. Preliminary results bootstrapping GHC with this change look\nvery promising.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"FastMutInt (Binary)"),": Josh started reviving Sylvain\u2019s MR\n",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/7246"},"!7246")," about\nbundling more than one ",(0,i.kt)("inlineCode",{parentName:"p"},"Int#")," in a ",(0,i.kt)("inlineCode",{parentName:"p"},"FastMutInt")," for performance. He tried to\nmake a proof of concept generalisation of 2-FastMutInt into n-FastMutInts\n(using GHC type level Natural). The types don\u2019t really recurse in a convenient\nway (Int -> (\u2026 -> IO ())) so it would probably introduce more complexity than\nthe problem is worth. Now, he\u2019s just implementing the original patch with the\nfixes and documentation."))))}d.isMDXComponent=!0}}]);