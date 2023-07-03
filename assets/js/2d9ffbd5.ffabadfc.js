"use strict";(self.webpackChunkengineering_iog_io=self.webpackChunkengineering_iog_io||[]).push([[1052],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,k=c["".concat(u,".").concat(m)]||c[m]||h[m]||r;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4236:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return s},toc:function(){return h},default:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={slug:"2022-03-01-haskell-nix-february-update",title:"haskell.nix February Update",authors:[],tags:["nix"],custom_edit_url:null},u=void 0,p={permalink:"/2022-03-01-haskell-nix-february-update",editUrl:"https://github.com/input-output-hk/engineering/tree/master/blog/2022-03-01-haskell-nix-february-update-wDy26Ro4GN-import.md",source:"@site/blog/2022-03-01-haskell-nix-february-update-wDy26Ro4GN-import.md",title:"haskell.nix February Update",description:"Documentation",date:"2022-03-01T00:00:00.000Z",formattedDate:"March 1, 2022",tags:[{label:"nix",permalink:"/tags/nix"}],readingTime:1.275,truncated:!1,authors:[],frontMatter:{slug:"2022-03-01-haskell-nix-february-update",title:"haskell.nix February Update",authors:[],tags:["nix"],custom_edit_url:null},prevItem:{title:"2021 GHC update",permalink:"/2022-03-01-2021-ghc-update"},nextItem:{title:"GHC January 2022 update",permalink:"/2022-02-01-ghc-january-2022-update"}},s={authorsImageUrls:[]},h=[{value:"Documentation",id:"documentation",children:[],level:2},{value:"Changes",id:"changes",children:[],level:2},{value:"Version Updates",id:"version-updates",children:[],level:2},{value:"Bug fixes",id:"bug-fixes",children:[],level:2}],c={toc:h};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A tutorial has been added on ",(0,r.kt)("a",{parentName:"li",href:"https://outline.zw3rk.com/share/d461004d-1f2f-4d7a-95f2-4e20acb18cac"},"building DWARF-enabled executables")," on linux systems.  There was also a related fix for building DWARF executables in a nix shell (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/haskell.nix/pull/1385"},"#1385"),")")),(0,r.kt)("h2",{id:"changes"},"Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support for external Hackage repositories was improved by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/haskell.nix/pull/1370"},"#1370"),". We can now use an extra package repository just by adding a ",(0,r.kt)("inlineCode",{parentName:"li"},"repository")," block to the ",(0,r.kt)("inlineCode",{parentName:"li"},"cabal.project")," file.  This makes it easy to make use of an extra hackage databases such as ",(0,r.kt)("a",{parentName:"li",href:"https://ghc.gitlab.haskell.org/head.hackage/"},"hackage.head")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hackage-overlay-ghcjs"},"hackage-overlay-ghcjs"),".  A ",(0,r.kt)("inlineCode",{parentName:"li"},"sha256")," for the repository it can be added as a comment in the ",(0,r.kt)("inlineCode",{parentName:"li"},"repository")," block or by including it in the ",(0,r.kt)("inlineCode",{parentName:"li"},"sha256map")," argument.")),(0,r.kt)("h2",{id:"version-updates"},"Version Updates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"nix-tools was updated to use the Cabal 3.6.2 and hnix 0.16 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/nix-tools/pull/113"},"nix-tools#113")),(0,r.kt)("li",{parentName:"ul"},"Nixpkgs pins were bumped ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/haskell.nix/pull/1371"},"#1371")),(0,r.kt)("li",{parentName:"ul"},"Update booting on aarch64 linux to ghc 8.8.4 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/haskell.nix/pull/1325"},"1325")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/haskell.nix/pull/1374"},"1374"))),(0,r.kt)("h2",{id:"bug-fixes"},"Bug fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allow linking pcre statically with musl ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/haskell.nix/pull/1363"},"#1363")),(0,r.kt)("li",{parentName:"ul"},"Add gpiod to system nixpkgs map ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/haskell.nix/pull/1359"},"#1359")),(0,r.kt)("li",{parentName:"ul"},"Add poppler-cpp to png-config Nixpkgs map ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/haskell.nix/pull/1373"},"#1373")),(0,r.kt)("li",{parentName:"ul"},"Use the same logic that cabal-install uses for determining the path of a packages ",(0,r.kt)("inlineCode",{parentName:"li"},".tar.gz")," in a repository  ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/nix-tools/pull/114"},"nix-tools#114")),(0,r.kt)("li",{parentName:"ul"},"Fix libnuma dependency in rts.conf ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/haskell.nix/commit/18ebf60137dd2ff1be7363eb46f67ebfa366d1dd"},"1342")),(0,r.kt)("li",{parentName:"ul"},'Fix when "materialized" dir is deep ',(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/haskell.nix/pull/1376"},"#1376")),(0,r.kt)("li",{parentName:"ul"},"Prefer local building for ",(0,r.kt)("inlineCode",{parentName:"li"},"git-ls-files")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/haskell.nix/pull/1378"},"#1378")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/haskell.nix/issues/1381"},"#1381")),(0,r.kt)("li",{parentName:"ul"},"Fix stack cache generator ",(0,r.kt)("inlineCode",{parentName:"li"},"sha256")," is a string not a lambda ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/haskell.nix/pull/1383"},"#1383")),(0,r.kt)("li",{parentName:"ul"},"Only pass ",(0,r.kt)("inlineCode",{parentName:"li"},"--index-state")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"cabal")," when asked ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/haskell.nix/pull/1384"},"#1384")),(0,r.kt)("li",{parentName:"ul"},"Pass ",(0,r.kt)("inlineCode",{parentName:"li"},"enableDWARF")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"makeConfigFiles")," to fix ",(0,r.kt)("inlineCode",{parentName:"li"},"-g3")," support in ",(0,r.kt)("inlineCode",{parentName:"li"},"nix-shell")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/haskell.nix/pull/1385"},"#1385"))),(0,r.kt)("p",null,"Finally, we\u2019d like to thank all the awesome contributors, who make\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"haskell.nix"),"\xa0a thriving open source project!\xa0\u2764\ufe0f"))}m.isMDXComponent=!0}}]);