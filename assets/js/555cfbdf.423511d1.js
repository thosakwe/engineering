"use strict";(self.webpackChunkengineering_iog_io=self.webpackChunkengineering_iog_io||[]).push([[8293],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2331:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return d},toc:function(){return c},default:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={},l="Objectable vs GHC Binary",p={permalink:"/2022/05/24/april-GHCJS-Objectable-vs-GHC-Binary",source:"@site/blog/2022-05-24-april-GHCJS-Objectable-vs-GHC-Binary.md",title:"Objectable vs GHC Binary",description:"As part of the integration of GHCJS into GHC as a cross-compilation backend, we've converted the binary serialisation that GHCJS previously used, which was via its Objectable typeclass, into GHC's internal Binary typeclass representation. In doing this, we gain access to instances for serialising many of GHC's internal data types, and, importantly, we can reuse GHC's mechanism for serialising its Name and FastString types, which are written to lookup tables in order to maintain identity, as well as allowing for space savings on disk.",date:"2022-05-24T00:00:00.000Z",formattedDate:"May 24, 2022",tags:[],readingTime:10.605,truncated:!1,authors:[],frontMatter:{},prevItem:{title:"GHC DevX June 2022 Update",permalink:"/ghc-update-2022-06"},nextItem:{title:"JavaScript, Template Haskell and the External Interpreter",permalink:"/2022-05-17-javascript-template-haskell-external-interpreter"}},d={authorsImageUrls:[]},c=[{value:"How GHC Binary Works",id:"how-ghc-binary-works",children:[],level:2},{value:"How Objectable Works",id:"how-objectable-works",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As part of the integration of GHCJS into GHC as a cross-compilation backend, we've converted the binary serialisation that GHCJS previously used, which was via its ",(0,r.kt)("inlineCode",{parentName:"p"},"Objectable")," typeclass, into GHC's internal ",(0,r.kt)("inlineCode",{parentName:"p"},"Binary")," typeclass representation. In doing this, we gain access to instances for serialising many of GHC's internal data types, and, importantly, we can reuse GHC's mechanism for serialising its ",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"FastString")," types, which are written to lookup tables in order to maintain identity, as well as allowing for space savings on disk."),(0,r.kt)("p",null,"In this post, we will explain how the GHC ",(0,r.kt)("inlineCode",{parentName:"p"},"Binary")," and GHCJS ",(0,r.kt)("inlineCode",{parentName:"p"},"Objectable")," approaches work, and compare their tradeoffs."),(0,r.kt)("h2",{id:"how-ghc-binary-works"},"How GHC Binary Works"),(0,r.kt)("p",null,"Internally, GHC uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," data type to track the uniqueness of objects during compilation. Amongst information relating to the definition of a ",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," within the Haskell source, a ",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," also contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"Unique")," integer (the value of which is provided by the complation environment monad). Using this ",(0,r.kt)("inlineCode",{parentName:"p"},"Unique")," integer, which is unpacked in ",(0,r.kt)("inlineCode",{parentName:"p"},"Name"),"'s definition, we can make O(1) equality comparisons without following further memory references - allowing for this operation to be very quick, which will have a large effect on compilation performance given how often it is used."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"FastString")," is used within GHC to store short, string-like data, and, similarly to ",(0,r.kt)("inlineCode",{parentName:"p"},"Name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"FastString")," uses a unique integer to allow for very fast equality comparisons. Primarily, ",(0,r.kt)("inlineCode",{parentName:"p"},"FastString")," is used to represent variables and other definitions, and is used both in ",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," as the string-representation of a name with extra information attached, as well as directly, representing names that don't require this extra information, such as local variables."),(0,r.kt)("p",null,"In GHC's ",(0,r.kt)("inlineCode",{parentName:"p"},".hi")," interface files, ",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"FastString")," are serialised differently compared to other data structures. They are written in the main data structure payload as indicies of a table, and these tables contain the actual string-like data of these types. So, an interface file might resemble:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Header",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Magic number for recognising interface files"),(0,r.kt)("li",{parentName:"ul"},"Pointer to ",(0,r.kt)("inlineCode",{parentName:"li"},"Name")," symbol table"),(0,r.kt)("li",{parentName:"ul"},"Pointer to ",(0,r.kt)("inlineCode",{parentName:"li"},"FastString")," dictionary"))),(0,r.kt)("li",{parentName:"ul"},"Main data structure payload"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Name")," symbol table"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FastString")," dictionary")),(0,r.kt)("p",null,"Importantly, the ",(0,r.kt)("inlineCode",{parentName:"p"},"FastString")," dictionary must be written ",(0,r.kt)("em",{parentName:"p"},"after")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," symbol table, because ",(0,r.kt)("inlineCode",{parentName:"p"},"Name"),"s contain ",(0,r.kt)("inlineCode",{parentName:"p"},"FastString"),"s, so writing the symbol table will expand the dictionary. Additionally, because we only have one buffer, and we don't know the size of the payload until it's written, the tables cannot be written in the header, and instead serialisation code must reserve space for the table pointers and jump back to write the pointers once the table locations are known."),(0,r.kt)("p",null,"During serialisation, GHC uses mutable data structures to store both the serialised binary buffer, as well as these tables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"data BinHandle\n  = BinMem {                     -- binary data stored in an unboxed array\n     bh_usr :: UserData,         -- sigh, need parameterized modules :-)\n     _off_r :: !FastMutInt,      -- the current offset\n     _sz_r  :: !FastMutInt,      -- size of the array (cached)\n     _arr_r :: !(IORef BinArray) -- the array (bounds: (0,size-1))\n    }\n\ndata UserData =\n   UserData {\n        -- for *deserialising* only:\n        ud_get_name :: BinHandle -> IO Name,\n        ud_get_fs   :: BinHandle -> IO FastString,\n\n        -- for *serialising* only:\n        ud_put_nonbinding_name :: BinHandle -> Name -> IO (),\n        -- ^ serialize a non-binding 'Name' (e.g. a reference to another\n        -- binding).\n        ud_put_binding_name :: BinHandle -> Name -> IO (),\n        -- ^ serialize a binding 'Name' (e.g. the name of an IfaceDecl)\n        ud_put_fs   :: BinHandle -> FastString -> IO ()\n   }\n")),(0,r.kt)("p",null,"Here, we see that various functions are stored in the handle structure, to be later referenced by their respective types in their ",(0,r.kt)("inlineCode",{parentName:"p"},"GHC.Utils.Binary.Binary")," typeclass instances. Notice that the instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"Binary Name")," references ",(0,r.kt)("inlineCode",{parentName:"p"},"ud_put_nonbinding_name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ud_get_name"),". Similarly, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Binary FastString")," instance uses ",(0,r.kt)("inlineCode",{parentName:"p"},"ud_put_fs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ud_get_fs"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"class Binary a where\n    put_   :: BinHandle -> a -> IO ()\n    put    :: BinHandle -> a -> IO (Bin a)\n    get    :: BinHandle -> IO a\n\ninstance Binary FastString where\n  put_ bh f =\n    case getUserData bh of\n        UserData { ud_put_fs = put_fs } -> put_fs bh f\n\n  get bh =\n    case getUserData bh of\n        UserData { ud_get_fs = get_fs } -> get_fs bh\n\ninstance Binary Name where\n   put_ bh name =\n      case getUserData bh of\n        UserData{ ud_put_nonbinding_name = put_name } -> put_name bh name\n\n   get bh =\n      case getUserData bh of\n        UserData { ud_get_name = get_name } -> get_name bh\n")),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"GHC.Iface.Binary"),", helper types and functions are defined to store the ",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," symbol table and ",(0,r.kt)("inlineCode",{parentName:"p"},"FastString")," dictionary in a mutable data structure. Here, ",(0,r.kt)("inlineCode",{parentName:"p"},"putFastString")," is intended to be partially applied - passing it an appropriately initialised ",(0,r.kt)("inlineCode",{parentName:"p"},"BinDictionary")," so that the resulting function can be stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"us_put_fs")," field of the ",(0,r.kt)("inlineCode",{parentName:"p"},"UserData"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"allocateFastString")," does the low-level work here, incrementing the index and modifying the mutable map (stored as a ",(0,r.kt)("inlineCode",{parentName:"p"},"UniqFM"),", which is map keyed on types that contain ",(0,r.kt)("inlineCode",{parentName:"p"},"Unique"),"s - recalling that these are used for fast equality comparisons):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"data BinDictionary = BinDictionary {\n        bin_dict_next :: !FastMutInt, -- The next index to use\n        bin_dict_map  :: !(IORef (UniqFM FastString (Int,FastString)))\n                                -- indexed by FastString\n  }\n\nputFastString :: BinDictionary -> BinHandle -> FastString -> IO ()\nputFastString dict bh fs = allocateFastString dict fs >>= put_ bh\n\nallocateFastString :: BinDictionary -> FastString -> IO Word32\nallocateFastString BinDictionary { bin_dict_next = j_r,\n                                   bin_dict_map  = out_r} f = do\n    out <- readIORef out_r\n    let !uniq = getUnique f\n    case lookupUFM_Directly out uniq of\n        Just (j, _)  -> return (fromIntegral j :: Word32)\n        Nothing -> do\n           j <- readFastMutInt j_r\n           writeFastMutInt j_r (j + 1)\n           writeIORef out_r $! addToUFM_Directly out uniq (j, f)\n           return (fromIntegral j :: Word32)\n")),(0,r.kt)("p",null,"Later, in ",(0,r.kt)("inlineCode",{parentName:"p"},"GHC.Iface.Binary"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"getWithUserData")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"putWithUserData")," will structure the header, and initialise the ",(0,r.kt)("inlineCode",{parentName:"p"},"UserData")," functions to write to/read from mutable tables. Notice that we must first reserve header space for pointers to the lookup tables, as well as initialise the mutable tables, write these initialised structures to the ",(0,r.kt)("inlineCode",{parentName:"p"},"UserData")," (for example, we see the previous ",(0,r.kt)("inlineCode",{parentName:"p"},"putFastString")," partially applied here), then write the main payload, then write the lookup tables (",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," symbol table first, because writing this can add to the ",(0,r.kt)("inlineCode",{parentName:"p"},"FastString")," dictionary), and finally jump back to fill in the pointers to these tables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'putWithUserData :: Binary a => TraceBinIFace -> BinHandle -> a -> IO ()\nputWithUserData traceBinIface bh payload = do\n    -- Remember where the dictionary pointer will go\n    dict_p_p <- tellBin bh\n    -- Placeholder for ptr to dictionary\n    put_ bh dict_p_p\n\n    -- Remember where the symbol table pointer will go\n    symtab_p_p <- tellBin bh\n    put_ bh symtab_p_p\n    -- Make some initial state\n    symtab_next <- newFastMutInt 0\n    symtab_map <- newIORef emptyUFM\n    let bin_symtab = BinSymbolTable {\n                         bin_symtab_next = symtab_next,\n                         bin_symtab_map  = symtab_map }\n    dict_next_ref <- newFastMutInt 0\n    dict_map_ref <- newIORef emptyUFM\n    let bin_dict = BinDictionary {\n                       bin_dict_next = dict_next_ref,\n                       bin_dict_map  = dict_map_ref }\n\n    -- Put the main thing,\n    bh <- return $ setUserData bh $ newWriteState (putName bin_dict bin_symtab)\n                                                  (putName bin_dict bin_symtab)\n                                                  (putFastString bin_dict)\n    put_ bh payload\n\n    -- Write the symtab pointer at the front of the file\n    symtab_p <- tellBin bh        -- This is where the symtab will start\n    putAt bh symtab_p_p symtab_p  -- Fill in the placeholder\n    seekBin bh symtab_p           -- Seek back to the end of the file\n\n    -- Write the symbol table itself\n    symtab_next <- readFastMutInt symtab_next\n    symtab_map  <- readIORef symtab_map\n    putSymbolTable bh symtab_next symtab_map\n    case traceBinIface of\n      QuietBinIFace         -> return ()\n      TraceBinIFace printer ->\n         printer (text "writeBinIface:" <+> int symtab_next\n                                        <+> text "Names")\n\n    -- NB. write the dictionary after the symbol table, because\n    -- writing the symbol table may create more dictionary entries.\n\n    -- Write the dictionary pointer at the front of the file\n    dict_p <- tellBin bh          -- This is where the dictionary will start\n    putAt bh dict_p_p dict_p      -- Fill in the placeholder\n    seekBin bh dict_p             -- Seek back to the end of the file\n\n    -- Write the dictionary itself\n    dict_next <- readFastMutInt dict_next_ref\n    dict_map  <- readIORef dict_map_ref\n    putDictionary bh dict_next dict_map\n    case traceBinIface of\n      QuietBinIFace         -> return ()\n      TraceBinIFace printer ->\n         printer (text "writeBinIface:" <+> int dict_next\n                                        <+> text "dict entries")\n')),(0,r.kt)("p",null,"In summary, we see a number of structural characteristics of code using GHC's Binary implementation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use of a single buffer means that the lookup tables can't be written in the header, so we have to reserve space for table pointers in the header, and jump back once we know where they will be located in order to write the pointers to the buffer. Essentially, an ordering of file sections is enforced by the data dependencies of the payload containing ",(0,r.kt)("inlineCode",{parentName:"li"},"Name"),"s and ",(0,r.kt)("inlineCode",{parentName:"li"},"FastString"),"s, and ",(0,r.kt)("inlineCode",{parentName:"li"},"Name"),"s containing ",(0,r.kt)("inlineCode",{parentName:"li"},"FastString"),"s - which means these must be written in this order, but reading must be done in the reverse order, causing the need for pointers in the header."),(0,r.kt)("li",{parentName:"ul"},"Jumping around in binary buffers results in weakly enforced types and fiddly, code that Haskell's type system isn't able to help us debug"),(0,r.kt)("li",{parentName:"ul"},"Must carry about read/write functions for the lookup table types (",(0,r.kt)("inlineCode",{parentName:"li"},"Name")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"FastString"),"), which are ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined")," during the opposite serialisation stage, and are hard-coded into the handle, reducing extensibility.")),(0,r.kt)("h2",{id:"how-objectable-works"},"How Objectable Works"),(0,r.kt)("p",null,"In comparison, GHCJS previously involved using instances of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Objectable")," typeclass to serialise its interface files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"import qualified Data.Binary as DB\n\ndata SymbolTable\n  = SymbolTable !Int !(Map ShortText Int)\n  deriving (Show)\n\ntype PutSM = St.StateT SymbolTable DB.PutM -- FIXME: StateT isn't strict enough apparently\ntype PutS  = PutSM ()\ntype GetS  = ReaderT ObjEnv DB.Get\n\nclass Objectable a where\n  put :: a -> PutS\n  get :: GetS a\n  putList :: [a] -> PutS\n  putList = putListOf put\n  getList :: GetS [a]\n  getList = getListOf get\n")),(0,r.kt)("p",null,"Here we see that GHCJS has opted for a different approach that avoids the mutable buffer by instead using ",(0,r.kt)("inlineCode",{parentName:"p"},"Data.Binary")," instances that work via concatenating lazy ",(0,r.kt)("inlineCode",{parentName:"p"},"ByteString"),"s. Additionally, the mutable tables are replaced with a ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," monad that holds the symbol table as a ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," structure."),(0,r.kt)("p",null,"Because ",(0,r.kt)("inlineCode",{parentName:"p"},"Data.Binary")," forms lazy ",(0,r.kt)("inlineCode",{parentName:"p"},"ByteString"),"s, it's trivial to serialise the individual parts of the interface file and later concatenate these using ",(0,r.kt)("inlineCode",{parentName:"p"},"ByteString"),"'s monoid instance - allowing for all of the sections of the file to be defined declaratively at the top-level of the function in order of their appearance within the file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"object'\n  :: ModuleName                 -- ^ module\n  -> SymbolTable                -- ^ final symbol table\n  -> Deps                       -- ^ dependencies\n  -> [([ShortText],ByteString)] -- ^ serialized units and their exported symbols, the first unit is module-global\n  -> ByteString\nobject' mod_name st0 deps0 os = hdr <> symbs <> deps1 <> idx <> mconcat (map snd os)\n  where\n    hdr          = putHeader (Header (moduleNameTag mod_name) (bl symbs) (bl deps1) (bl idx))\n    bl           = fromIntegral . B.length\n    deps1        = putDepsSection deps0\n    (sti, idx)   = putIndex st0 os\n    symbs        = putSymbolTable sti\n")),(0,r.kt)("p",null,"In summary, the use of multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"ByteString")," sections that are later concatenated offer several different structural characteristics compared to the use of a single mutable buffer:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The final ordering of the sections is flexible, because they are serialsied separately, so any data dependencies don't introduce ordering in the file - which we see in the ",(0,r.kt)("inlineCode",{parentName:"li"},"where")," clause of ",(0,r.kt)("inlineCode",{parentName:"li"},"object'")),(0,r.kt)("li",{parentName:"ul"},"Types are more strongly enforced because imperative ",(0,r.kt)("inlineCode",{parentName:"li"},"seekBin")," instructions aren't required. However, each section is still ",(0,r.kt)("em",{parentName:"li"},"deserialised")," by taking a substring of the file to be read as that section type. Of course, all serialisation eventually results in raw binary, so the simplification of concatenating the sections into the final file without jumping around limits the places that bugs can hide"),(0,r.kt)("li",{parentName:"ul"},"Visually, the ordering of the sections within the final file is very clear - we see in ",(0,r.kt)("inlineCode",{parentName:"li"},"object'")," that every section is simply listed ",(0,r.kt)("em",{parentName:"li"},"in order")," on one line, concatenated together.")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Making use of GHC's existing infrastructure lets the GHCJS backend to make use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"FastString")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," data types, as well as allowing for the removal of a significant amount of now-redundant code."),(0,r.kt)("p",null,"Additionally, interface file generation using GHC's ",(0,r.kt)("inlineCode",{parentName:"p"},"Binary")," appears to be very fast - for example, attempts to hide the handle behind a reader monad significantly reduce the compiler's performance as measured by CI. Speculatively, looking at the generated core, this could be because the optimiser has a much better time with the style of IO code that is used - rather than being a limitation of more abstacted approaches."),(0,r.kt)("p",null,"The comparison provided the GHCJS's old approach makes it clear that GHC's ",(0,r.kt)("inlineCode",{parentName:"p"},"Binary")," implementation, while very useful, has potential to be improved in both readability and extensiblity. However, because CI has shown that serialisation performance has a significant effect on overall compilation performance, this tradeoff must be considered when making any changes. Potentially, these readability shortfalls in GHC's implementation might just be the result of legacy code, and so benchmarks of other approaches, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Data.Binary"),", should be used to guide future work in improving the readability and flexibility of GHC's serialisation without sacrificing performance."))}m.isMDXComponent=!0}}]);