"use strict";(self.webpackChunkengineering_iog_io=self.webpackChunkengineering_iog_io||[]).push([[219],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3104:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={slug:"2022-07-01-ghc-update",title:"GHC DevX June 2022 Update",authors:["sylvain"],tags:["ghc"]},p=void 0,s={permalink:"/2022-07-01-ghc-update",source:"@site/blog/2022-07-01-ghc-update-2022-06.md",title:"GHC DevX June 2022 Update",description:"This is the June 2022 monthly update from the GHC DevX team at IOG.",date:"2022-07-01T00:00:00.000Z",formattedDate:"July 1, 2022",tags:[{label:"ghc",permalink:"/tags/ghc"}],readingTime:1.635,truncated:!1,authors:[{name:"Sylvain Henry",title:"Haskell DevX Engineer @ IOG",email:"sylvain.henry@iohk.io",key:"sylvain"}],frontMatter:{slug:"2022-07-01-ghc-update",title:"GHC DevX June 2022 Update",authors:["sylvain"],tags:["ghc"]},prevItem:{title:"Primitive Type Representation in GHC's upcoming JS-backend",permalink:"/2022-07-20-js-backend-prim-types"},nextItem:{title:"GHC DevX May 2022 Update",permalink:"/2022-06-01-ghc-update"}},c={authorsImageUrls:[void 0]},u=[{value:"JavaScript Backend for GHC",id:"javascript-backend-for-ghc",children:[],level:2},{value:"Haskell Optimization Handbook",id:"haskell-optimization-handbook",children:[],level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is the June 2022 monthly update from the GHC DevX team at IOG."),(0,o.kt)("h2",{id:"javascript-backend-for-ghc"},"JavaScript Backend for GHC"),(0,o.kt)("p",null,'For a few months we have been merging GHCJS (Haskell to JavaScript compiler) into GHC.\nWe set our first milestone to be the ability to compile and to run the usual "Hello World" program.\nIt turned out to be much more involved than we initially thought (requiring FFI support, etc.), but we should be getting there soon.'),(0,o.kt)("p",null,"This month we have made the following progress:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Linking"),": GHCJS requires some functions to be directly implemented in\nJavaScript (e.g. the RTS, some low-level functions in base). We have added support\nfor linking ",(0,o.kt)("inlineCode",{parentName:"p"},".js")," files. We've also added support for a preprocessing pass with CPP\nfor ",(0,o.kt)("inlineCode",{parentName:"p"},".js.pp")," files.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"js-sources"),": there is some ongoing work to load these external JavaScript\nfiles from installed libraries. Cabal provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"js-sources")," stanza for this,\nwe need to adapt Hadrian to make use of it.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Binary vs Objectable"),": GHCJS used its own ByteString-based Objectable\ntype-class: we replaced it with GHC's similar Binary type-class.\nJosh has published a ",(0,o.kt)("a",{parentName:"p",href:"https://engineering.iog.io/2022/05/24/april-GHCJS-Objectable-vs-GHC-Binary"},"blog\npost"),"\nabout their differences.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"64-bit primops"),": we've added support for 64-bit primops (Word64# and Int64#\ntypes). In GHCJS (GHC 8.10), these were still implemented as foreign function\ncalls. It's no longer true on GHC head.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"base library"),": added CPP as required to support the JS backend. Ported and\nconverted FFI imports from GHCJS to use JavaScript fat arrows (we haven't\nimplemented GHCJS's fancy import syntax yet)."))),(0,o.kt)("p",null,'Now we can compile and link the "HelloWorld" program.\nTo reach the first milestone we only have to fix the remaining runtime errors.'),(0,o.kt)("p",null,"You can follow our progress on our development branch ",(0,o.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/tree/wip/js-staging"},"here"),".\nWe now rebase this branch every Friday to avoid lagging too much behind GHC head."),(0,o.kt)("h2",{id:"haskell-optimization-handbook"},"Haskell Optimization Handbook"),(0,o.kt)("p",null,'The "Haskell Optimization Handbook" is an ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/haskellfoundation/tech-proposals/blob/main/proposals/accepted/026-haskell-optimization-handbook.md"},"accepted proposal")," of the Haskell Foundation.\nJeff has been steadily writing some initial material as per the project plan."))}d.isMDXComponent=!0}}]);