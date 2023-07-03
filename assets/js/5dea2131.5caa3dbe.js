"use strict";(self.webpackChunkengineering_iog_io=self.webpackChunkengineering_iog_io||[]).push([[9206],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,g=d["".concat(s,".").concat(p)]||d[p]||u[p]||i;return n?a.createElement(g,o(o({ref:t},h),{},{components:n})):a.createElement(g,o({ref:t},h))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7398:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return h},toc:function(){return u},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={slug:"2022-07-18-lightweight-threads-on-JavaScript",title:"Lightweight Haskell Threads on JavaScript",date:"July 18, 2022",authors:["luite"],tags:["ghc","javascript","concurrency","ffi"]},s=void 0,c={permalink:"/2022-07-18-lightweight-threads-on-JavaScript",editUrl:"https://github.com/input-output-hk/engineering/tree/master/blog/2022-07-18-ghcjs-threads.md",source:"@site/blog/2022-07-18-ghcjs-threads.md",title:"Lightweight Haskell Threads on JavaScript",description:"Introduction",date:"2022-07-18T00:00:00.000Z",formattedDate:"July 18, 2022",tags:[{label:"ghc",permalink:"/tags/ghc"},{label:"javascript",permalink:"/tags/javascript"},{label:"concurrency",permalink:"/tags/concurrency"},{label:"ffi",permalink:"/tags/ffi"}],readingTime:3.915,truncated:!1,authors:[{name:"Luite Stegeman",title:"Haskell DevX Engineer @ IOG",email:"luite.stegeman@iohk.io",key:"luite"}],frontMatter:{slug:"2022-07-18-lightweight-threads-on-JavaScript",title:"Lightweight Haskell Threads on JavaScript",date:"July 18, 2022",authors:["luite"],tags:["ghc","javascript","concurrency","ffi"]},prevItem:{title:"Primitive Type Representation in GHC's upcoming JS-backend",permalink:"/2022-07-20-js-backend-prim-types"},nextItem:{title:"GHC DevX June 2022 Update",permalink:"/2022-07-01-ghc-update"}},h={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"JavaScript and Threads",id:"javascript-and-threads",children:[],level:2},{value:"Haskell Threads",id:"haskell-threads",children:[],level:2},{value:"Lightweight Threads in JavaScript",id:"lightweight-threads-in-javascript",children:[],level:2},{value:"Black Holes",id:"black-holes",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"I recently gave a short presentation on the topic of threads in GHCJS to the GHC team at IOG. This blog post is a summary of the content."),(0,i.kt)("h2",{id:"javascript-and-threads"},"JavaScript and Threads"),(0,i.kt)("p",null,"JavaScript is fundamentally single threaded. There are ways to share specific data between tasks but it's not possible to run multiple threads that have access to a shared memory space of JavaScript data."),(0,i.kt)("p",null,"The single JavaScript thread is often responsible for multiple tasks. For example a node.js server handles multiple simultaneous connections and a web application may be dealing with user input while downloading new data in the background."),(0,i.kt)("p",null,"This means that any single task should take care to never block execution of the other task. JavaScript's canonical answer is to use asynchronous programming. A function reading a file returns immediately without waiting for the file data to be loaded in memory. When the data is ready, a user-supplied callback is called to continue processing the data."),(0,i.kt)("h2",{id:"haskell-threads"},"Haskell Threads"),(0,i.kt)("p",null,"Concurrent Haskell supports lightweight threads through ",(0,i.kt)("inlineCode",{parentName:"p"},"forkIO"),". These threads are scheduled on top of one more more operating system thread. A blocking foreign call blocks an OS thread but other lightweight threads can still run on other OS threads if available."),(0,i.kt)("p",null,"There is no built-in support for foreign calls with a callback in the style of JavaScript. Functions imported with ",(0,i.kt)("inlineCode",{parentName:"p"},"foreign import ccall interruptible")," can be interrupted by sending an asynchronous exception to the corresponding lightweight thread."),(0,i.kt)("h2",{id:"lightweight-threads-in-javascript"},"Lightweight Threads in JavaScript"),(0,i.kt)("p",null,"GHCJS implements lightweight threads on top of the single JavaScript thread. The scheduler switches between threads and handles synchronization through ",(0,i.kt)("inlineCode",{parentName:"p"},"MVar")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"STM")," as expected from other Haskell platforms."),(0,i.kt)("p",null,"Foreign calls that don't block can be handled in the usual way. We extend the foreign function interface with a new type ",(0,i.kt)("inlineCode",{parentName:"p"},"foreign import javascript interruptible")," that conveniently supports the callback mechanism used by JavaScript frameworks. The foreign call is supplied with an additional argument ",(0,i.kt)("inlineCode",{parentName:"p"},"$c")," representing a callback to be called with the result when ready. From the Haskell side the corresponding lightweight thread is blocked until ",(0,i.kt)("inlineCode",{parentName:"p"},"$c")," is called. This type of foreign call can be interrupted with an asynchronous exception to the lightweight Haskell thread."),(0,i.kt)("p",null,"By default, Haskell threads in the JS environment run asynchronously. A call to ",(0,i.kt)("inlineCode",{parentName:"p"},"h$run")," returns immediately and starts the thread in the background. This works for tasks that does not require immediate actions. For situations that require more immediate action, such as dealing with event handler propagation, there is ",(0,i.kt)("inlineCode",{parentName:"p"},"h$runSync"),". This starts a synchronous thread that is not interleaved with other task. If possible, the thread runs to completion before the call to ",(0,i.kt)("inlineCode",{parentName:"p"},"h$runSync")," returns. If the thread blocks for any reason, such as waiting for an ",(0,i.kt)("inlineCode",{parentName:"p"},"MVar")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"foreign import javascript interruptible"),' call, synchronous execution cannot complete. The blocking task is then either interrupted with an exception or the thread is "demoted" to a regular asynchronous thread.'),(0,i.kt)("h2",{id:"black-holes"},"Black Holes"),(0,i.kt)("p",null,'When a Haskell value is evaluated, its heap object is overwritten by a black hole. This black hole marks the value as being evaluated and prevents other threads from doing the same. "black holing" can be done either immediately or "lazily", when the garbage collector is run. GHCJS implements immediate blackholing.'),(0,i.kt)("p",null,"Black holes give rise to an interesting problem in the presence of synchronous and asynchronous threads. Typically if we use ",(0,i.kt)("inlineCode",{parentName:"p"},"h$runSync"),', we want to have some guarantee that at least part of the task will run succesfully without blocking. For the most past it\'s fairly clear which parts of our task depends on potentially blocking IO or thread synchronization. But black holes throw a spanner in the works: Suddenly any "pure" data structure can be a source of blocking if it is under evaluation by another thread.'),(0,i.kt)("p",null,"To regain some predictability and usability of synchronous threads, the ",(0,i.kt)("inlineCode",{parentName:"p"},"h$runSync"),' scheduler can run other Haskell threads in order to "clear" a black hole. The process ends all black holes have been cleared or when any of the black holes is impossible to clear because of a blocking situation.'),(0,i.kt)("p",null,"This all happens transparantly to the caller of ",(0,i.kt)("inlineCode",{parentName:"p"},"h$runSync"),", if the black holes could be cleared it appears as if they were never there."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"We have lightweight Haskell threads in the single-threaded JavaScript environment and extend the foreign function interface to easily support foreign calls that depend on an asynchronous callback. This way, only the Haskell lightweight thread blocks."),(0,i.kt)("p",null,"By default, Haskell threads are asynchronous and run in the background: The scheduler interleaves the tasks and synchronization between threads. For situations that require immediate results or actions there are synchronous threads. Synchronous threads cannot block and are not interleaved with other tasks except when a black hole is encountered."))}p.isMDXComponent=!0}}]);