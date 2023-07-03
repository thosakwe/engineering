"use strict";(self.webpackChunkengineering_iog_io=self.webpackChunkengineering_iog_io||[]).push([[8201],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},551:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={slug:"2022-08-01-ghc-update",title:"GHC DevX July 2022 Update",authors:["sylvain"],tags:["ghc","ghc-update"]},c=void 0,p={permalink:"/2022-08-01-ghc-update",editUrl:"https://github.com/input-output-hk/engineering/tree/master/blog/2022-08-01-ghc-update-2022-07.md",source:"@site/blog/2022-08-01-ghc-update-2022-07.md",title:"GHC DevX July 2022 Update",description:"This is the July 2022 monthly update from the GHC DevX team at IOG.",date:"2022-08-01T00:00:00.000Z",formattedDate:"August 1, 2022",tags:[{label:"ghc",permalink:"/tags/ghc"},{label:"ghc-update",permalink:"/tags/ghc-update"}],readingTime:1.25,truncated:!1,authors:[{name:"Sylvain Henry",title:"Haskell DevX Engineer @ IOG",email:"sylvain.henry@iohk.io",key:"sylvain"}],frontMatter:{slug:"2022-08-01-ghc-update",title:"GHC DevX July 2022 Update",authors:["sylvain"],tags:["ghc","ghc-update"]},prevItem:{title:"GHCJS FFI system in the JS Backend",permalink:"/2022-08-18-js-backend-ffi"},nextItem:{title:"The GHCJS Linker",permalink:"/2022-07-26-the-ghcjs-linker"}},s={authorsImageUrls:[void 0]},u=[{value:"JavaScript Backend for GHC",id:"javascript-backend-for-ghc",children:[],level:2},{value:"Blog posts",id:"blog-posts",children:[],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is the July 2022 monthly update from the GHC DevX team at IOG."),(0,o.kt)("h2",{id:"javascript-backend-for-ghc"},"JavaScript Backend for GHC"),(0,o.kt)("p",null,'For a few months we have been merging GHCJS (Haskell to JavaScript compiler)\ninto GHC. We set our first milestone to be the ability to compile and to run the\nusual "Hello World" program. This month we finally reached it!'),(0,o.kt)("p",null,"We are now focusing on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"fixing failing tests in GHC's testsuite (~2800 unexpected failures). To do that, we\nhave to implement new primops, to fix bugs we introduced while we ported the\ncode from GHCJS, etc.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'implementing support for the "js-sources" Cabal stanza in Hadrian. Currently\nthe JS backend finds the JS sources required for the RTS and for base into\nexplicitly defined location. It was only a stop-gap measure and we now need to\nimplement proper support for user-provided JavaScript files.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"documenting and refactoring the source code and making it similar to other GHC\nmodules. As an example, GHCJS used the text package which isn't a boot\npackage. Hence we first switched to use GHC's ShortText implementation and now\nwe switched to a FastString based implementation.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"adding back GHCJS's features that we haven't ported for some reasons (e.g. the\ncompactor, TH, etc.)."))),(0,o.kt)("p",null,"You can follow our progress on our development branch\n",(0,o.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/tree/wip/js-staging"},"here"),"."),(0,o.kt)("h2",{id:"blog-posts"},"Blog posts"),(0,o.kt)("p",null,"For the time being, we will focus blog post topics on GHCJS internals and\nrelated topics. A few of these blog posts are currently under review and should\nbe published shortly."))}m.isMDXComponent=!0}}]);