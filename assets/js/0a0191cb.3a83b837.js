"use strict";(self.webpackChunkengineering_iog_io=self.webpackChunkengineering_iog_io||[]).push([[9687],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7706:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return h}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={slug:"2023-06-01-ghc-update",title:"IOG GHC Update #11",authors:["sylvain","doyougnu","luite","josh","bartek"],tags:["ghc","ghc-update"]},s=void 0,p={permalink:"/2023-06-01-ghc-update",source:"@site/blog/2023-06-01-ghc-update-11.md",title:"IOG GHC Update #11",description:"Biweekly update from the GHC DevX team at IOG.",date:"2023-06-01T00:00:00.000Z",formattedDate:"June 1, 2023",tags:[{label:"ghc",permalink:"/tags/ghc"},{label:"ghc-update",permalink:"/tags/ghc-update"}],readingTime:1.705,truncated:!1,authors:[{name:"Sylvain Henry",title:"Haskell DevX Engineer @ IOG",email:"sylvain.henry@iohk.io",key:"sylvain"},{name:"Jeffrey M. Young",title:"Haskell DevX Engineer @ IOG",url:"https://iog.io/en/",key:"doyougnu"},{name:"Luite Stegeman",title:"Haskell DevX Engineer @ IOG",email:"luite.stegeman@iohk.io",key:"luite"},{name:"Joshua Meredith",title:"Haskell DevX Engineer @ IOG",url:"https://iog.io/en/",key:"josh"},{name:"Bart\u0142omiej Cie\u015blar",title:"Haskell DevX Intern @ IOG",email:"bartlomiej.cieslar@iohk.io",key:"bartek"}],frontMatter:{slug:"2023-06-01-ghc-update",title:"IOG GHC Update #11",authors:["sylvain","doyougnu","luite","josh","bartek"],tags:["ghc","ghc-update"]},nextItem:{title:"IOG GHC Update #10",permalink:"/2023-05-18-ghc-update"}},c={authorsImageUrls:[void 0,void 0,void 0,void 0,void 0]},u=[{value:"JavaScript backend",id:"javascript-backend",children:[],level:2},{value:"Deprecation warnings",id:"deprecation-warnings",children:[],level:2},{value:"Miscelleaneous",id:"miscelleaneous",children:[],level:2}],d={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Biweekly update from the GHC DevX team at IOG."),(0,i.kt)("p",null,"Previous updates can be found ",(0,i.kt)("a",{parentName:"p",href:"https://engineering.iog.io/tags/ghc-update"},"here"),"."),(0,i.kt)("h2",{id:"javascript-backend"},"JavaScript backend"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Sylvain: updated the MR implementing Template Haskell for the JS backend\n",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/9779"},"!9779")," to start\nfixing the remaining recompilation avoidance issues.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Sylvain: prepared slides for the GHC workshop about the JS backend. See you\nthere next week!")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Luite: Continued working on support for the ",(0,i.kt)("inlineCode",{parentName:"p"},"process")," package with the JS backend,\nmoving JavaScript specific functionality into the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.Process.JavaScript")," module.\nMost functionality works, but sometimes tests hang, which seems to be caused by\nnodejs being inconsistent emitting events on child process creation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Josh: merged changes to the JavaScript code rendering. Previously, we used GHC's ",(0,i.kt)("inlineCode",{parentName:"p"},"SDoc"),"\nsystem, which included a hack of using the ",(0,i.kt)("inlineCode",{parentName:"p"},"layLeft")," function to remove indentation\nfrom rendered code to improve code size. Now, code is instead rendered on one\nline using GHC's new ",(0,i.kt)("inlineCode",{parentName:"p"},"HLine")," system. ",(0,i.kt)("inlineCode",{parentName:"p"},"HLine")," doesn't have to waste time on indentation\nlogic, and instead simply concatenates very quickly. It also renders directly to a file\nhandle, rather than spending memory on an intermediate ",(0,i.kt)("inlineCode",{parentName:"p"},"ByteString"),"."),(0,i.kt)("p",{parentName:"li"},"Additionally, the flag ",(0,i.kt)("inlineCode",{parentName:"p"},"-ddisable-js-minifier")," is added in this MR, which causes JS\ncode to be rendered with full human-readable indentation and whitespace."),(0,i.kt)("p",{parentName:"li"},"See: ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/10500"},"GHC!10500"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Josh: fixed an issue where ",(0,i.kt)("inlineCode",{parentName:"p"},"ghc --supported-extensions")," was incorrectly listing\n",(0,i.kt)("inlineCode",{parentName:"p"},"JavaScriptFFI"),". This issue had a workaround in Cabal for several years, but the workaround\nwas causing issues for Cabal support in the JavaScript backend. Now, the extension is removed\nfrom non-JavaScript targets, allowing the Cabal workaround to be reverted for new versions\nof GHC."),(0,i.kt)("p",{parentName:"li"},"See:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/10505"},"GHC!10505")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/haskell/cabal/pull/8979"},"Cabal!8979"),"  ")))),(0,i.kt)("h2",{id:"deprecation-warnings"},"Deprecation warnings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Bartek: Deprecated exports proposal MR passes CI and has all the issues addressed, waiting for the MR to be accepted\nSee ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/10283"},"GHC!10283"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Bartek: Slight rework of parsing and storing the custom warnings so that it's more generalized (for the upcoming Deprecated Instances)\nSee ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/10531"},"GHC!10531"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Bartek: Parsing for the Deprecated Instances implemented, still waiting for the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ghc-proposals/ghc-proposals/pull/575"},"proposal")," to be accepted"))),(0,i.kt)("h2",{id:"miscelleaneous"},"Miscelleaneous"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Jeff: The FUNARCH version of the ",(0,i.kt)("a",{parentName:"li",href:"https://hsyl20.fr/home/files/papers/2022-ghc-modularity.pdf"},"GHC Modularity")," paper is submitted!")))}h.isMDXComponent=!0}}]);