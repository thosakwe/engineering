"use strict";(self.webpackChunkengineering_iog_io=self.webpackChunkengineering_iog_io||[]).push([[3180],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),g=s(n),d=a,f=g["".concat(c,".").concat(d)]||g[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3855:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],u={slug:"2023-01-26-hs-bindgen-introduction",title:"One step forward, an easier interoperability between Rust and Haskell",authors:["yvan"],tags:["cabal","rust","bindgen"]},c=void 0,s={permalink:"/2023-01-26-hs-bindgen-introduction",editUrl:"https://github.com/input-output-hk/engineering/tree/master/blog/2023-01-26-hs-bindgen-introduction.md",source:"@site/blog/2023-01-26-hs-bindgen-introduction.md",title:"One step forward, an easier interoperability between Rust and Haskell",description:"TL;DR: This blog post intends to sum up the why and how of cargo-cabal and hs-bindgen. If you\u2019re looking for usage walkthroughs and code examples, check out project READMEs on GitHub!",date:"2023-01-26T00:00:00.000Z",formattedDate:"January 26, 2023",tags:[{label:"cabal",permalink:"/tags/cabal"},{label:"rust",permalink:"/tags/rust"},{label:"bindgen",permalink:"/tags/bindgen"}],readingTime:10.84,truncated:!0,authors:[{name:"Yvan Sraka",title:"Rust DevX Engineer @ IOG",email:"yvan.sraka@iohk.io",key:"yvan"}],frontMatter:{slug:"2023-01-26-hs-bindgen-introduction",title:"One step forward, an easier interoperability between Rust and Haskell",authors:["yvan"],tags:["cabal","rust","bindgen"]},prevItem:{title:"GHC DevX Update 2023-01-26",permalink:"/2023-01-26-ghc-update"},nextItem:{title:"Using GHC's JavaScript Backend in the Browser",permalink:"/2023-01-24-javascript-browser-tutorial"}},l={authorsImageUrls:[void 0]},p=[],g={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TL;DR:")," This blog post intends to sum up the why and how of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yvan-sraka/cargo-cabal"},(0,o.kt)("inlineCode",{parentName:"a"},"cargo-cabal"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yvan-sraka/hs-bindgen"},(0,o.kt)("inlineCode",{parentName:"a"},"hs-bindgen")),". If you\u2019re looking for usage walkthroughs and code examples, check out project READMEs on GitHub!"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"N.B.")," quoted paragraphs in this article give straightforward motivation regarding some systems programming basic concepts. Feel free to skip them if you know you\u2019re likely to be already comfortable with them ;)")))}d.isMDXComponent=!0}}]);