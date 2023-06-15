"use strict";(self.webpackChunkengineering_iog_io=self.webpackChunkengineering_iog_io||[]).push([[2986],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return g}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(a),g=n,d=h["".concat(s,".").concat(g)]||h[g]||u[g]||i;return a?r.createElement(d,o(o({ref:t},c),{},{components:a})):r.createElement(d,o({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6206:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return g}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],l={slug:"2023-06-15-ghc-update",title:"IOG GHC Update #12",authors:["sylvain","doyougnu","luite","josh","bartek"],tags:["ghc","ghc-update"]},s=void 0,p={permalink:"/2023-06-15-ghc-update",source:"@site/blog/2023-06-15-ghc-update-12.md",title:"IOG GHC Update #12",description:"Biweekly update from the GHC DevX team at IOG.",date:"2023-06-15T00:00:00.000Z",formattedDate:"June 15, 2023",tags:[{label:"ghc",permalink:"/tags/ghc"},{label:"ghc-update",permalink:"/tags/ghc-update"}],readingTime:2.025,truncated:!1,authors:[{name:"Sylvain Henry",title:"Haskell DevX Engineer @ IOG",email:"sylvain.henry@iohk.io",key:"sylvain"},{name:"Jeffrey M. Young",title:"Haskell DevX Engineer @ IOG",url:"https://iog.io/en/",key:"doyougnu"},{name:"Luite Stegeman",title:"Haskell DevX Engineer @ IOG",email:"luite.stegeman@iohk.io",key:"luite"},{name:"Joshua Meredith",title:"Haskell DevX Engineer @ IOG",url:"https://iog.io/en/",key:"josh"},{name:"Bart\u0142omiej Cie\u015blar",title:"Haskell DevX Intern @ IOG",email:"bartlomiej.cieslar@iohk.io",key:"bartek"}],frontMatter:{slug:"2023-06-15-ghc-update",title:"IOG GHC Update #12",authors:["sylvain","doyougnu","luite","josh","bartek"],tags:["ghc","ghc-update"]},nextItem:{title:"IOG GHC Update #11",permalink:"/2023-06-01-ghc-update"}},c={authorsImageUrls:[void 0,void 0,void 0,void 0,void 0]},u=[{value:"GHC contributors&#39; workshop &amp; Zurihac",id:"ghc-contributors-workshop--zurihac",children:[],level:2},{value:"JavaScript backend",id:"javascript-backend",children:[],level:2},{value:"Deprecation warnings",id:"deprecation-warnings",children:[],level:2},{value:"Incomplete Record Selectors",id:"incomplete-record-selectors",children:[],level:2},{value:"Miscellaneous",id:"miscellaneous",children:[],level:2}],h={toc:u};function g(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Biweekly update from the GHC DevX team at IOG."),(0,i.kt)("p",null,"Previous updates can be found ",(0,i.kt)("a",{parentName:"p",href:"https://engineering.iog.io/tags/ghc-update"},"here"),"."),(0,i.kt)("h2",{id:"ghc-contributors-workshop--zurihac"},"GHC contributors' workshop & Zurihac"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sylvain: had a great time presenting the JavaScript backend at the GHC\ncontributors' workshop and discussing various Haskell/GHC related things at\nZurihac. It was nice to meet so many familiar nicknames in person!\nSlides and examples can be found ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hsyl20/ghc-workshop-2023"},"here"),".")),(0,i.kt)("h2",{id:"javascript-backend"},"JavaScript backend"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Sylvain: updated the MR implementing Template Haskell for the JS backend\n",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/9779"},"!9779")," to add\na workaround for recompilation avoidance issues. We hope to get this MR merged\nbefore the GHC 9.8 fork (tomorrow).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Sylvain: has been doing some bug triage in the testsuite. Now the result can\nbe accessed and modifierd directly on the ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/wikis/javascript-backend/bug_triage"},"wiki"),"\n(it was in a Google doc before).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Luite: fixed a few IO related bugs, including one that caused threads to be\nunreachable by asynchronous exceptions such as timeout.\n",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/10657"},"GHC!10657"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Luite: fixed file descriptor sharing and signal handling for the ",(0,i.kt)("inlineCode",{parentName:"p"},"process")," package\non node.js, among many smaller changes and fixes. The testsuite for the ",(0,i.kt)("inlineCode",{parentName:"p"},"process"),"\npackage now passes on the JavaScript target. Some work remains before it can be\nmerged, mostly around error handling and documentation, but the package should be\ngenerally usable now.\n",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/22349"},"GHC#22349"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/luite/process/tree/js"},"luite/process/js WIP branch GitHub"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Josh: updated JavaScript FFI import strings in the ",(0,i.kt)("inlineCode",{parentName:"p"},"posix")," library to use modern\nJavaScript backend syntax.\nSee: ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/10590"},"!10590"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Josh: worked on updating ",(0,i.kt)("inlineCode",{parentName:"p"},"ghcjs-base")," to work with the JavaScript backend. This library\nis the first step in updating the GHCJS ecosystem for the JavaScript backend, such as\n",(0,i.kt)("inlineCode",{parentName:"p"},"ghcjs-dom"),".\nSee: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ghcjs/ghcjs-base/pull/134"},"ghcjs-base!134"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Jeff: Root caused JavaScript backend CI perf tests not being run. Perf tests should be enabled again soon. MR ","[here]","(",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/10576%7D"},"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/10576}"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Jeff: Continued splitting the JavaScript backend into an eDSL and IR for codegen/optimizations. Not ready for MR yet, but this will be a fairly large code churn."))),(0,i.kt)("h2",{id:"deprecation-warnings"},"Deprecation warnings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bartek: Trying to get the last changes through and fixing minor comments from Sam.\nSee ",(0,i.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/10283"},"GHC!10283"))),(0,i.kt)("h2",{id:"incomplete-record-selectors"},"Incomplete Record Selectors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Bartek: started work on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ghc-proposals/ghc-proposals/blob/master/proposals/0516-incomplete-record-selectors.rst"},"incomplete record selectors propolal"),",\nreading through the desugarer code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Bartek: crunching through the ",(0,i.kt)("a",{parentName:"p",href:"https://dl.acm.org/doi/pdf/10.1145/3408989"},"pattern match checker paper"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Bartek: investigating the issue where the code handling the incomplete record updates warning was removed.\nSee ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/23520"},"GHC#23520")))),(0,i.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Jeff: Continued trying to add ANSI Hyperlinks for the Haskell Error Index ",(0,i.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/10395"},"here"),". We hope to get this merged into the GHC 9.8 fork.")))}g.isMDXComponent=!0}}]);