"use strict";(self.webpackChunkengineering_iog_io=self.webpackChunkengineering_iog_io||[]).push([[1937],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},287:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return d},default:function(){return h}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],l={slug:"2022-09-23-ghcjs-heap-representation",title:"GHCJS heap representation",date:"September 23, 2022",authors:["sylvain"],tags:["ghc","javascript"]},s=void 0,p={permalink:"/2022-09-23-ghcjs-heap-representation",source:"@site/blog/2022-09-23-ghcjs-heap-representation.md",title:"GHCJS heap representation",description:"Introduction",date:"2022-09-23T00:00:00.000Z",formattedDate:"September 23, 2022",tags:[{label:"ghc",permalink:"/tags/ghc"},{label:"javascript",permalink:"/tags/javascript"}],readingTime:8.32,truncated:!1,authors:[{name:"Sylvain Henry",title:"Haskell DevX Engineer @ IOG",email:"sylvain.henry@iohk.io",key:"sylvain"}],frontMatter:{slug:"2022-09-23-ghcjs-heap-representation",title:"GHCJS heap representation",date:"September 23, 2022",authors:["sylvain"],tags:["ghc","javascript"]},nextItem:{title:"GHC DevX July 2022 Update",permalink:"/2022-08-01-ghc-update"}},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Heap objects",id:"heap-objects",children:[],level:2},{value:"Info tables",id:"info-tables",children:[],level:2},{value:"Heap objects in JavaScript",id:"heap-objects-in-javascript",children:[{value:"f field",id:"f-field",children:[],level:3},{value:"d1, d2 fields",id:"d1-d2-fields",children:[],level:3},{value:"m field",id:"m-field",children:[],level:3},{value:"cc field",id:"cc-field",children:[],level:3}],level:2},{value:"Other heap object representation",id:"other-heap-object-representation",children:[{value:"Automatic unboxing",id:"automatic-unboxing",children:[],level:3}],level:2},{value:"Summary",id:"summary",children:[],level:2}],u={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"I recently gave a short presentation about heap objects representation in GHCJS and hence in the upcoming JS backend for GHC. This post is a summary of the content."),(0,i.kt)("h2",{id:"heap-objects"},"Heap objects"),(0,i.kt)("p",null,"GHC implements Haskell code evaluation by using graph reduction. As such Haskell\nprograms compiled by GHC use the heap to store nodes of the graph to be\nreduced and utility nodes participating in graph reduction. These nodes are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"FUN: functions with their free variables as payload"),(0,i.kt)("li",{parentName:"ul"},"THUNK: suspensions with their free variables as payload"),(0,i.kt)("li",{parentName:"ul"},"PAP: partial application to a FUN. FUN closure and already applied arguments\nas payload."),(0,i.kt)("li",{parentName:"ul"},"IND: indirection to another heap object"),(0,i.kt)("li",{parentName:"ul"},"BLACKHOLE: used to overwrite a THUNK when it is being evaluated")),(0,i.kt)("p",null,"The heap is also used to store other values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CON: boxed values (saturated constructor applications) with field values as payload"),(0,i.kt)("li",{parentName:"ul"},"Other unlifted values: TSO, BCO, arrays, MutVar#, MVar#, TVar#, stacks, stack frames...")),(0,i.kt)("h2",{id:"info-tables"},"Info tables"),(0,i.kt)("p",null,"Many heap objects share the same properties: e.g. all ",(0,i.kt)("inlineCode",{parentName:"p"},"Int")," CON objects are\nexactly the same except for their payload (the ",(0,i.kt)("inlineCode",{parentName:"p"},"Int#")," value) that may be\ndifferent.\nHence heap objects are split in two parts to allow sharing of common properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"info table: statically known properties (at compilation time) that can be\nshared by several heap objects"),(0,i.kt)("li",{parentName:"ul"},"heap object itself: dynamically allocated in the heap")),(0,i.kt)("p",null,"Heap objects always have the same layout in the native code generated by GHC.\nThey are composed of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a pointer to an info table"),(0,i.kt)("li",{parentName:"ul"},"some words of payload")),(0,i.kt)("p",null,"Heap traversal is done by following the info table pointer of every heap\nobject to query in the info table the layout of the heap object payload."),(0,i.kt)("p",null,'Info tables contain a pointer to a function called "entry code" that can be\nspecific to each info table. This code is mainly used to apply a node to some\narguments.\nNote that with tables-next-to-code optimisation enabled, to avoid an\nindirection the info table pointer is actually a pointer to this entry code and\nthe info table itself is stored in the words preceeding the entry code.'),(0,i.kt)("h2",{id:"heap-objects-in-javascript"},"Heap objects in JavaScript"),(0,i.kt)("p",null,"GHCJS represents most heap objects with a JavaScript object having the following\nfields:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"{ f, d1, d2, m, cc }\n")),(0,i.kt)("p",null,'One question I had was: why don\'t we use a JS array instead of a JS object?\nArrays should be faster than objects (i.e. hashmaps), no? It turns out that\nobjects like this are optimised by JS engines using "hidden classes" (see\n',(0,i.kt)("a",{parentName:"p",href:"https://v8.dev/blog/fast-properties"},"https://v8.dev/blog/fast-properties")," for an explanation). That's why\nthey are usually more efficient than arrays for which bound checking must be\nmade. Also arrays are larger in memory because they need to store their size."),(0,i.kt)("p",null,"Let's now discuss the fields of the heap objects."),(0,i.kt)("h3",{id:"f-field"},"f field"),(0,i.kt)("p",null,'"f" is the equivalent of the info table pointer. It contains a JavaScript\nfunction that is the entry code for the heap object.'),(0,i.kt)("p",null,"Similar to the tables-next-to-code optimisation discussed above, we use the\nfact that JS functions are objects which have properties to store the info\ntable fields as properties of the function itself."),(0,i.kt)("p",null,"Example of an info table / entry function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"[Function: h$entry_function_xyz]\n  { t    // (Int) object type\n  , size // (Int) number of fields in payload (-1 if variable layout)\n  , i    // (Array) fields layout (empty if variable layout)\n  , n    // (String) object name for debug\n  , a    // (Int) function arity or constructor tag\n  , r    // (Int) arity in number of JS variables\n  , s    // (Array) static refs that must be kept alive (SRT)\n  , m    // GC mark\n  }\n")),(0,i.kt)("h3",{id:"d1-d2-fields"},"d1, d2 fields"),(0,i.kt)("p",null,"The d1 and d2 fields contain the payload of the heap object: constructor fields,\nfunction free variables, etc."),(0,i.kt)("p",null,"Payloads can be composed of zero, one, or many fields. A naive solution would be\nto have one JS object field (d1, d2, d3...) per payload field. However it would\nbe bad for two reasons:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"performance: JS engine hidden classes optimisation mentioned above needs\nobjects to have the same field structure.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"genericity: we couldn't write generic functions (e.g. to copy a closure)\nwithout dynamically querying the number of fields composing the payload."))),(0,i.kt)("p",null,"Another solution would be to use a single field to store the whole payload. It\nwould fulfill the genericity constraint. However performance may not be good\nbecause of the extra allocation of the object containing the payload and the\nindirection to access its fields."),(0,i.kt)("p",null,"Instead GHCJS uses a middle ground approach: it always uses only two JS object\nfields to store any number of payload fields. The following encoding is used to\nstash any number of payload fields into two JS fields:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Payload"),(0,i.kt)("th",{parentName:"tr",align:null},"d1"),(0,i.kt)("th",{parentName:"tr",align:null},"d2"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"[]"),(0,i.kt)("td",{parentName:"tr",align:null},"null"),(0,i.kt)("td",{parentName:"tr",align:null},"null")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"[a]"),(0,i.kt)("td",{parentName:"tr",align:null},"a"),(0,i.kt)("td",{parentName:"tr",align:null},"null")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"[a,b]"),(0,i.kt)("td",{parentName:"tr",align:null},"a"),(0,i.kt)("td",{parentName:"tr",align:null},"b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"[a,b,c]"),(0,i.kt)("td",{parentName:"tr",align:null},"a"),(0,i.kt)("td",{parentName:"tr",align:null},"{d1=b,d2=c}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"[a,b,c,d...]"),(0,i.kt)("td",{parentName:"tr",align:null},"a"),(0,i.kt)("td",{parentName:"tr",align:null},"{d1=b,d2=c,d3=d...}")))),(0,i.kt)("p",null,"It still fulfills the genericity constraint and small objects (up to two fields\nof payload) don't pay for an extra allocation/indirection. The price to pay is\nthat two fields of payload are always allocated, even for for objects with 1\nfield of payload."),(0,i.kt)("p",null,"It would be interesting to benchmark the performance of the different payload\nrepresentations."),(0,i.kt)("h3",{id:"m-field"},"m field"),(0,i.kt)("p",null,'The "m" field is used both for reachability checking (~ garbage collection) and\nto implement the "stable names" features.'),(0,i.kt)("p",null,'GHCJS can\'t rely on the JS engine to know when a heap object is collected. So it\nimplements its own heap traversal algorithm for this. The "m" field is used as a\nmarker for this algorithm (it will be the topic of a future blog post).\nIn this case, the "m" field is a number (a GC mark).'),(0,i.kt)("p",null,'When a StableName is created for an object, the "m" field of the object is\nupdated to point to the StableName object:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"[h$StableName]\n  { m // GC mark\n  , s // stable name unique id\n  , ...\n  }\n")),(0,i.kt)("p",null,'The "m" field of the StableName object is used in replacement of the mark of the object.'),(0,i.kt)("h3",{id:"cc-field"},"cc field"),(0,i.kt)("p",null,'The "cc" field is the cost center associated to the heap object. This field is\nonly present when profiling mode is enabled. Cost centers are entered (pushed on\nthe cost center stack of the current thread) before the evaluation of thunks and\nfunction applications.'),(0,i.kt)("p",null,"Cost centers are allocated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"h$CC")," function."),(0,i.kt)("h2",{id:"other-heap-object-representation"},"Other heap object representation"),(0,i.kt)("p",null,"The generic heap object representation presented above is only used for some\nobjects: those involved in graph reduction (e.g. updatable objects) and values\nthat don't have a fixed layout (e.g. CON objects have different layouts\ndepending on which constructor they represent). The object layout allows generic\naccess to the infotable and to the payload, and the infotable describes the\nobject type and the payload layout."),(0,i.kt)("p",null,'Several other objects don\'t need this machinery: they always have the same\nlayout and are never the result of a reduction (they are unlifted values). These\nobjects are represented as JS objects with any fields they need (i.e. not using\nthe d1/d2 encoding above). To determine the type of such heap objects, instead\nof using the "type" field of an infotable the code uses the ',(0,i.kt)("inlineCode",{parentName:"p"},"instanceof"),"\noperator. For example a TSO is represented as a ",(0,i.kt)("inlineCode",{parentName:"p"},"h$Thread")," object."),(0,i.kt)("p",null,"Note that we could be tempted to give every heap object a different object name\nand to always use ",(0,i.kt)("inlineCode",{parentName:"p"},"instanceof"),' instead of the infotable "type" properties. It\nwould mean adding ',(0,i.kt)("inlineCode",{parentName:"p"},"h$Con"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"h$Thunk"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"h$Fun"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"h$Pap"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"h$Blackhole"),", and\n",(0,i.kt)("inlineCode",{parentName:"p"},"h$StackFrame"),' objects. Then all the heap objects could be treated in the same\nway. However the isssue is that these objects need to be overwritable in place:\na Thunk becomes a Fun/Con/Pap/Blackhole, etc. As far as I know we can\'t update\nthe "instance" of an object, so all these object have to be instances of\nthe same JS object.'),(0,i.kt)("p",null,"Also note that the JS backend doesn't need INDirection nodes because it can\nalways overwrite the fields of a JS object with the fields of another to update\na closure. For the record, indirection nodes are needed in backends that\nlayout closures as a chunk of bytes/words and when the size of the closure to\nupdate is smaller than the size of the updatee closure."),(0,i.kt)("h3",{id:"automatic-unboxing"},"Automatic unboxing"),(0,i.kt)("p",null,"Sometimes the generic heap object representation is unnecessary. For example, a\nboxed ",(0,i.kt)("inlineCode",{parentName:"p"},"Int")," would be represented as a ",(0,i.kt)("inlineCode",{parentName:"p"},"CON")," heap object with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Int#")," in its\npayload, represented as a JavaScript number value. The only thing we can do with\nthis heap object is to pass it around and to extract its payload. As such, it is\nmore memory efficient to directly pass the payload (a JS number)."),(0,i.kt)("p",null,"GHCJS provides an optimisation that consists in automatically unboxing some CON\nheap objects. For example, Haskell booleans (True and False datacons) are\ndirectly mapped to JavaScript booleans, boxed numbers (Float, Double, Int, Word,\nInt8, etc.) are directly mapped to JavaScript numbers."),(0,i.kt)("p",null,"We can do this because JavaScript already provides some boxing of its own: we\ncan use the ",(0,i.kt)("inlineCode",{parentName:"p"},"typeof")," operator on a heap object to know if it is a JS object, a\nJS number, a JS boolean, etc. It makes it possible to distinguish between heap\nobject representations. In comparison, we can't do this with the native (non-JS)\nbackend when we only have a pointer to a heap object: the pointer doesn't carry\nthe kind of value it points to, hence the pointed memory location must be\ngeneric enough for this introspection to be performed (e.g. using infotable\npointers)."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Heap object can be represented as JS values (number, boolean) because of the\nautomatic unboxing, or as JS objects: discimination is done with the ",(0,i.kt)("inlineCode",{parentName:"p"},"typeof"),"\noperator."),(0,i.kt)("p",null,"Heap objects represented as JS objects come in two flavours:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"unlifted objects are represented with specific JS objects, disciminated with\nthe ",(0,i.kt)("inlineCode",{parentName:"li"},"instanceof")," operator"),(0,i.kt)("li",{parentName:"ul"},"other objects use the following generic and updatable structure:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"{ f, d1, d2, m, [cc] }\n")))}h.isMDXComponent=!0}}]);