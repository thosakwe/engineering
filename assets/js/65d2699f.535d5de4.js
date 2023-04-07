"use strict";(self.webpackChunkengineering_iog_io=self.webpackChunkengineering_iog_io||[]).push([[5843],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,d=u["".concat(s,".").concat(g)]||u[g]||h[g]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2915:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return h},default:function(){return g}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={slug:"2023-04-06-ghc-update",title:"IOG GHC Update #7",authors:["sylvain","doyougnu","luite","josh","bartek"],tags:["ghc","ghc-update"]},s=void 0,p={permalink:"/2023-04-06-ghc-update",source:"@site/blog/2023-04-06-ghc-update-7.md",title:"IOG GHC Update #7",description:"Biweekly update from the GHC DevX team at IOG.",date:"2023-04-06T00:00:00.000Z",formattedDate:"April 6, 2023",tags:[{label:"ghc",permalink:"/tags/ghc"},{label:"ghc-update",permalink:"/tags/ghc-update"}],readingTime:2.605,truncated:!1,authors:[{name:"Sylvain Henry",title:"Haskell DevX Engineer @ IOG",email:"sylvain.henry@iohk.io",key:"sylvain"},{name:"Jeffrey M. Young",title:"Haskell DevX Engineer @ IOG",url:"https://iog.io/en/",key:"doyougnu"},{name:"Luite Stegeman",title:"Haskell DevX Engineer @ IOG",email:"luite.stegeman@iohk.io",key:"luite"},{name:"Joshua Meredith",title:"Haskell DevX Engineer @ IOG",url:"https://iog.io/en/",key:"josh"},{name:"Bart\u0142omiej Cie\u015blar",title:"Haskell DevX Intern @ IOG",email:"bartlomiej.cieslar@iohk.io",key:"bartek"}],frontMatter:{slug:"2023-04-06-ghc-update",title:"IOG GHC Update #7",authors:["sylvain","doyougnu","luite","josh","bartek"],tags:["ghc","ghc-update"]},nextItem:{title:"IOG GHC Update #6",permalink:"/2023-03-23-ghc-update"}},c={authorsImageUrls:[void 0,void 0,void 0,void 0,void 0]},h=[{value:"JavaScript backend",id:"javascript-backend",children:[],level:2},{value:"Compiler Performance",id:"compiler-performance",children:[],level:2},{value:"Team",id:"team",children:[],level:2},{value:"GHC migration and stability",id:"ghc-migration-and-stability",children:[],level:2},{value:"Miscellaneous",id:"miscellaneous",children:[],level:2}],u={toc:h};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Biweekly update from the GHC DevX team at IOG."),(0,i.kt)("p",null,"Previous updates can be found ",(0,i.kt)("a",{parentName:"p",href:"https://engineering.iog.io/tags/ghc-update"},"here"),"."),(0,i.kt)("h2",{id:"javascript-backend"},"JavaScript backend"),(0,i.kt)("p",null,"Sylvain: fixed build of GHC with the ",(0,i.kt)("inlineCode",{parentName:"p"},"quickest")," Hadrian flavour.\nIt was failing due to a incorrect coercion in ",(0,i.kt)("inlineCode",{parentName:"p"},"ghc-heap"),".\nSee ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/23181"},"#23181"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/10192"},"!10192")),(0,i.kt)("p",null,"Jeff: Began to implement the plan to add GHCJS's optimizer to the JavaScript\nbackend. This item is slated for GHC 9.8 and is on our\n",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/wikis/javascript-backend"},"roadmap"),". The\n",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/10142"},"first step"),", which\nis now finished, is to split the intermediate representation the backend uses to\nisolate all code generation. This split then allows us to change the existing\nintermediate representation for the RTS and GC, remove some cruft that was\nadopted from GHCJS, and add optimization passes."),(0,i.kt)("p",null,"Jeff: Tested generating ",(0,i.kt)("inlineCode",{parentName:"p"},"let")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"var")," to take advantage of more recent\nJavaScript standards than GHCJS comported to. However, this change produced such\nsignificant runtime regressions in the generated JavaScript that we abandoned it. "),(0,i.kt)("p",null,"Sylvain: fixed an out-of-bound array access in code generated by Alex, the lexer\ngenerator, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/haskell/alex/pull/223"},"Alex#223"),". The out-of-bound access\nonly triggers an exception with the JS backend; with native backends it only causes a\nbenign data corruption. This was found in Cabal-syntax's lexer, which still needs to be\nregenerated, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/haskell/cabal/issues/8892"},"Cabal#8892"),"."),(0,i.kt)("p",null,"Josh: brought the callbacks CLC ticket to vote. Now it has enough votes to be\npassed, so we're just awaiting a formal conclusion. Following this, the JavaScript\nbackend will be able to pass Haskell functions to foreign imports as JavaScript\ncallbacks, which in turn enables JavaScript to call into Haskell code."),(0,i.kt)("p",null,"Merge request: ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/10128"},"GHC MR 10128")),(0,i.kt)("p",null,"Josh: debugged an issue with the ",(0,i.kt)("inlineCode",{parentName:"p"},"-fcheck-prim-bounds")," flag. The errors were mostly\nfalse negatives in the indicies that were rejected, but there were also a false positive\ndue to the existing code not accounting for zero-size ranges being allowed in range-based\noperations (even at indicies that don't exist, such as negative)."),(0,i.kt)("p",null,"Merge request: ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/10234"},"GHC MR 10234")),(0,i.kt)("p",null,'Luite: Worked on using the JavaScript finalization functionality for Haskell weak references.\nIt looks like it\'s not possible to keep the existing "GHC style" reachability semantics from\n',(0,i.kt)("inlineCode",{parentName:"p"},"System.Mem.Weak"),'. Our new approach is to create a "JavaScript style" variant in ',(0,i.kt)("inlineCode",{parentName:"p"},"System.Mem.Weak.JS"),'\nthat avoids the need for expensive heap scanning. Both variants of weak references\ncan be supported by the JavaScript backend, and heap scanning can be avoided if there\nare no pending finalizers for "GHC style" weak references (in progress).'),(0,i.kt)("h2",{id:"compiler-performance"},"Compiler Performance"),(0,i.kt)("p",null,"Jeff: Finally landed\n",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/9702"},"MR!9702")," which\nrefactored GHC's driver to use more eficient data structures. This refactor\nreduced allocations ",(0,i.kt)("em",{parentName:"p"},"for every")," test in GHC's testsuite, with an geometric mean\nof -1.6%."),(0,i.kt)("h2",{id:"team"},"Team"),(0,i.kt)("p",null,"The DevX team at IOG welcomes our summer intern Bartek! Bartek will be working\non GHC proposal\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ghc-proposals/ghc-proposals/blob/master/proposals/0134-deprecating-exports-proposal.rst#implementation-plan"},"134"),";\ndeprecating exports,\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ghc-proposals/ghc-proposals/blob/master/proposals/0516-incomplete-record-selectors.rst"},"516"),";\nadding warnings for incomplete record selectors, and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ghc-proposals/ghc-proposals/pull/575"},"deprecating\ninstances"),". We are glad\nto be working with him and happy to have him on the team."),(0,i.kt)("h2",{id:"ghc-migration-and-stability"},"GHC migration and stability"),(0,i.kt)("p",null,"Bartek: Started this sprint and has begun to read through the front end code of\nGHC to begin working on one of the ghc proposal tickets next week."),(0,i.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,i.kt)("p",null,"Sylvain: Fixed linker warning issue with ",(0,i.kt)("inlineCode",{parentName:"p"},"-fproc-alignment=64"),". See\n",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/20758"},"#20758")," and ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/10200"},"!10200"),"."))}g.isMDXComponent=!0}}]);