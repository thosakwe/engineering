"use strict";(self.webpackChunkengineering_iog_io=self.webpackChunkengineering_iog_io||[]).push([[516],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,g=h["".concat(s,".").concat(d)]||h[d]||c[d]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4900:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={slug:"2022-06-01-ghc-update",title:"GHC DevX May 2022 Update",authors:["sylvain"],tags:["ghc"]},s=void 0,p={permalink:"/2022-06-01-ghc-update",source:"@site/blog/2022-06-01-ghc-update-2022-05.md",title:"GHC DevX May 2022 Update",description:"This is the May 2022 monthly update from the GHC DevX team at IOG.",date:"2022-06-01T00:00:00.000Z",formattedDate:"June 1, 2022",tags:[{label:"ghc",permalink:"/tags/ghc"}],readingTime:2.61,truncated:!1,authors:[{name:"Sylvain Henry",title:"Haskell DevX Engineer @ IOG",email:"sylvain.henry@iohk.io",key:"sylvain"}],frontMatter:{slug:"2022-06-01-ghc-update",title:"GHC DevX May 2022 Update",authors:["sylvain"],tags:["ghc"]},prevItem:{title:"GHC DevX June 2022 Update",permalink:"/2022-07-01-ghc-update"},nextItem:{title:"Objectable vs GHC Binary",permalink:"/2022/05/24/april-GHCJS-Objectable-vs-GHC-Binary"}},u={authorsImageUrls:[void 0]},c=[{value:"JavaScript Backend for GHC",id:"javascript-backend-for-ghc",children:[],level:2},{value:"External Static Plugins",id:"external-static-plugins",children:[],level:2},{value:"Blog posts",id:"blog-posts",children:[],level:2},{value:"Haskell Optimization Handbook",id:"haskell-optimization-handbook",children:[],level:2}],h={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is the May 2022 monthly update from the GHC DevX team at IOG."),(0,i.kt)("h2",{id:"javascript-backend-for-ghc"},"JavaScript Backend for GHC"),(0,i.kt)("p",null,'For a few months we have been merging GHCJS (Haskell to JavaScript compiler) into GHC.\nWe set our first milestone to be the ability to compile and to run the usual "Hello World" program.\nIt turned out to be much more involved than we initially thought (requiring FFI support, etc.), but we should be getting there soon.'),(0,i.kt)("p",null,"This month we have made the following progress:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"RTS"),": we have modified Hadrian and ",(0,i.kt)("inlineCode",{parentName:"p"},"rts.cabal")," in order to build a valid\nnative ",(0,i.kt)("inlineCode",{parentName:"p"},"rts")," unit that GHC can use, in particular containing appropriate\nheader files.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"linker"),": the JS linker has been hooked up with GHC's driver.\nWe fixed several panics in the linker due to erroneous symbol generation code.\nThese bugs were introduced while porting the code from the old 8.10 pretty-printing infrastructure to the newer one.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"boot libraries"),": the JS backend can now build and link all the boot libraries.\nNote that we are not claiming that they are all usable yet. In particular complete FFI support is lacking, but the JS backend Hadrian build completes and so we can start using the produced JS cross-compiler.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"levity polymorphism"),": building ",(0,i.kt)("inlineCode",{parentName:"p"},"ghc-prim")," uncovered a lurking bug related to\nlevity polymorphism. It wasn't noticed in GHCJS 8.10 because it is also\nrelated to the ",(0,i.kt)("inlineCode",{parentName:"p"},"BoxedRep")," proposal that introduced a constructor application\nin a commonly used ",(0,i.kt)("inlineCode",{parentName:"p"},"RuntimeRep"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"sized literals"),": support for new sized literals have been added to the code\ngenerator."))),(0,i.kt)("p",null,"Now that have achieved a build process that actually produces a JS cross compiler, we are confronting and fixing issues in the produced JavaScript code, such as adding, managing, and debugging CPP conditional compilation blocks in JS shim files. You can follow our progress on our development branch ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/tree/wip/js-staging"},"here"),"."),(0,i.kt)("h2",{id:"external-static-plugins"},"External Static Plugins"),(0,i.kt)("p",null,"GHC doesn't support plugins in cross-compilers ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/14335"},"#14335"),'.\nSome time ago, we came up with a solution called "external static plugins" ',(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/7377"},"!7377"),".\nThese are plugins that are directly loaded from shared libaries, bypassing the issue with usual plugins."),(0,i.kt)("p",null,"Our colleague Shea Levy confirmed that the approach works, backported it to GHC 8.10, and has been working on making it work in stage1 cross-compilers for Windows.\nKudos for this work, Shea."),(0,i.kt)("p",null,"As the current user-interface based on environment variables isn't convenient, we have been working on adding new command-line flags to GHC instead.\nWe expect to propose this for integration into GHC when the new interface will be fully implemented."),(0,i.kt)("h2",{id:"blog-posts"},"Blog posts"),(0,i.kt)("p",null,"Inspired by our friends and colleagues at Well-Typed and Tweag, we have been starting to write blog posts for IOG's engineering blog.\nThey will mostly be about stuff we are working on or that we are interested in.\nFeel free to send us feedback about these posts and to send us topics you would be interested to read about."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://engineering.iog.io/2022-04-28-on-the-inlining-of-integer-and-natural-operations"},"https://engineering.iog.io/2022-04-28-on-the-inlining-of-integer-and-natural-operations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://engineering.iog.io/2022-05-02-setup-ext-stg-interp"},"https://engineering.iog.io/2022-05-02-setup-ext-stg-interp")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://engineering.iog.io/2022-05-17-javascript-template-haskell-external-interpreter"},"https://engineering.iog.io/2022-05-17-javascript-template-haskell-external-interpreter"))),(0,i.kt)("h2",{id:"haskell-optimization-handbook"},"Haskell Optimization Handbook"),(0,i.kt)("p",null,'The "Haskell Optimization Handbook" is an ',(0,i.kt)("a",{parentName:"p",href:"https://github.com/haskellfoundation/tech-proposals/blob/main/proposals/accepted/026-haskell-optimization-handbook.md"},"accepted proposal")," of the Haskell Foundation.\nJeff has been working behind the scene to make this proposal concrete.\nMore about this in the upcoming months."))}d.isMDXComponent=!0}}]);