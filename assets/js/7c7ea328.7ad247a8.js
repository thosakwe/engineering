"use strict";(self.webpackChunkengineering_iog_io=self.webpackChunkengineering_iog_io||[]).push([[791],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),h=n,g=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return r?a.createElement(g,o(o({ref:t},c),{},{components:r})):a.createElement(g,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7415:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return h}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],l={slug:"2022-03-09-ghc-february-2022-update",title:"GHC February 2022 Update",authors:["sylvain"],tags:["ghc"],custom_edit_url:null},s=void 0,p={permalink:"/2022-03-09-ghc-february-2022-update",source:"@site/blog/2022-03-09-ghc-february-2022-update-bnE9FHoNRc-import.md",title:"GHC February 2022 Update",description:"JS backend",date:"2022-03-09T00:00:00.000Z",formattedDate:"March 9, 2022",tags:[{label:"ghc",permalink:"/tags/ghc"}],readingTime:1.87,truncated:!1,authors:[{name:"Sylvain Henry",title:"Haskell DevX Engineer @ IOG",email:"sylvain.henry@iohk.io",key:"sylvain"}],frontMatter:{slug:"2022-03-09-ghc-february-2022-update",title:"GHC February 2022 Update",authors:["sylvain"],tags:["ghc"],custom_edit_url:null},prevItem:{title:"haskell.nix March Update",permalink:"/2022-04-08-haskell-nix-march-update"},nextItem:{title:"2021 GHC update",permalink:"/2022-03-01-2021-ghc-update"}},c={authorsImageUrls:[void 0]},u=[{value:"JS backend",id:"js-backend",children:[],level:2},{value:"Plutus-apps JS demo",id:"plutus-apps-js-demo",children:[],level:2},{value:"Reporting",id:"reporting",children:[],level:2}],d={toc:u};function h(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"js-backend"},"JS backend"),(0,i.kt)("p",null,"This month we worked on adapting code from GHCJS to merge into GHC head. We also started discussing the implementation process publicly and especially with our colleagues at Well-Typed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ticket about adapting GHCJS\u2019 code into a proper JS backend for GHC has been opened ","[",(0,i.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/21078"},"#21078"),"]",". Feedback was very positive!"),(0,i.kt)("li",{parentName:"ul"},"There were discussions about the process and an agreement to target GHC 9.6 release ","[",(0,i.kt)("a",{parentName:"li",href:"https://mail.haskell.org/pipermail/ghc-devs/2022-February/020580.html"},"email on ghc-devs"),", ",(0,i.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/wikis/javascript-backend"},"wiki page"),"]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deriveConstants")," is a program used to generate some header file included in the rts package. While it is mainly useful for native targets, we had to make it support Javascript targets ","[",(0,i.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/7585"},"!7585"),"]"),(0,i.kt)("li",{parentName:"ul"},"Javascript is going to be the first official target platform supported by GHC that has its own notion of managed heap objects. Hence we may need a new ",(0,i.kt)("inlineCode",{parentName:"li"},"RuntimeRep")," to represent these values for Haskell codes interacting with JS codes via FFI. We opened ",(0,i.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/7577"},"!7577")," into which we tried to make this new ",(0,i.kt)("inlineCode",{parentName:"li"},"RuntimeRep")," non JS specific so that it could be reused for future backends targeting other managed platforms (e.g. CLR, JVM). It triggered a lot of discussions summarized in ",(0,i.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/21142"},"#21142"),"."),(0,i.kt)("li",{parentName:"ul"},"GHCJS\u2019s code generator was ported to GHC head ","[",(0,i.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/7573"},"!7573"),"]",". In its current state, we can generate Javascript unoptimised code -- the optimiser hasn\u2019t been ported yet -- by compiling a module with ",(0,i.kt)("inlineCode",{parentName:"li"},"-c -fjavascript"),". It required many changes, not only to adapt to changes between GHC 8.10 and GHC head but also to avoid adding new package dependencies. It was also an opportunity to refactor and to document the code, which is still a work in progress."),(0,i.kt)("li",{parentName:"ul"},"GHC doesn\u2019t use any lens library, hence to port the code generator we had to replace lenses with usual record accessors. It turned out that ",(0,i.kt)("inlineCode",{parentName:"li"},"case")," alternatives in STG lacked them because they were represented with a triple. We took the opportunity to introduce a proper record type for them  ",(0,i.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/7652"},"!7652"))),(0,i.kt)("h2",{id:"plutus-apps-js-demo"},"Plutus-apps JS demo"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We improved the proof of concept JavaScript library for generating Plutus transactions with a given set of constraints and lookups, exposing functionality from the ",(0,i.kt)("inlineCode",{parentName:"li"},"plutus-ledger-constraints")," package. ","[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hamishmack/plutus-apps/blob/1f331225853f502807aab370f82ec975bdec38ee/plutus-pab/mktx/README.md"},"Report"),"]")),(0,i.kt)("h2",{id:"reporting"},"Reporting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"we wrote a blog post about the work we have done in 2021 as it wasn\u2019t covered anywhere else: ",(0,i.kt)("a",{parentName:"li",href:"https://engineering.iog.io/2022-03-01-2021-ghc-update"},"https://engineering.iog.io/2022-03-01-2021-ghc-update"))))}h.isMDXComponent=!0}}]);