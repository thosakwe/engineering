"use strict";(self.webpackChunkengineering_iog_io=self.webpackChunkengineering_iog_io||[]).push([[3558],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),h=o,f=d["".concat(u,".").concat(h)]||d[h]||p[h]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8443:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return l},toc:function(){return p},default:function(){return h}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={slug:"2022-09-28-introduce-q-d",title:"Model-Based Testing with QuickCheck",date:"October 4, 2022",authors:["arnaud"],tags:["testing quickcheck"]},u=void 0,s={permalink:"/2022-09-28-introduce-q-d",editUrl:"https://github.com/input-output-hk/engineering/tree/master/blog/2022-09-28-introduce-q-d.md",source:"@site/blog/2022-09-28-introduce-q-d.md",title:"Model-Based Testing with QuickCheck",description:"quickcheck-dynamic is a library jointly developed by Quviq and IOG, whose purpose is to leverage QuickCheck to test stateful programs against a Model. In other words, it's a Model-Based Testing tool. This article wants to be a gentle introduction to the use of quickcheck-dynamic for Model-Based Testing. It describes the overall approach, how the library works, and how it's being applied within IOG to improve the reach of our testing efforts.",date:"2022-10-04T00:00:00.000Z",formattedDate:"October 4, 2022",tags:[{label:"testing quickcheck",permalink:"/tags/testing-quickcheck"}],readingTime:14.105,truncated:!0,authors:[{name:"Arnaud Bailly",title:"Technical Architect @ IOG",email:"arnaud.bailly@iohk.io",key:"arnaud"}],frontMatter:{slug:"2022-09-28-introduce-q-d",title:"Model-Based Testing with QuickCheck",date:"October 4, 2022",authors:["arnaud"],tags:["testing quickcheck"]},prevItem:{title:"JavaScript backend merged into GHC",permalink:"/2022-12-13-ghc-js-backend-merged"},nextItem:{title:"GHCJS heap representation",permalink:"/2022-09-23-ghcjs-heap-representation"}},l={authorsImageUrls:[void 0]},p=[],d={toc:p};function h(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/quickcheck-dynamic"},"quickcheck-dynamic")," is a library jointly developed by Quviq and IOG, whose purpose is to leverage ",(0,i.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/QuickCheck"},"QuickCheck")," to test stateful programs against a ",(0,i.kt)("em",{parentName:"p"},"Model"),". In other words, it's a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Model-based_testing"},(0,i.kt)("em",{parentName:"a"},"Model-Based Testing"))," tool. This article wants to be a gentle introduction to the use of quickcheck-dynamic for Model-Based Testing. It describes the overall approach, how the library works, and how it's being applied within IOG to improve the reach of our testing efforts."))}h.isMDXComponent=!0}}]);