"use strict";(self.webpackChunkengineering_iog_io=self.webpackChunkengineering_iog_io||[]).push([[85],{6416:function(e,a,n){n.r(a),n.d(a,{default:function(){return d}});var l=n(7294),t=n(6010),i=n(9629),s=n(3905),c=n(66),r=n(4853),m=n(5773),o="mdxPageWrapper_zHyg";var d=function(e){var a=e.content,n=a.metadata,d=n.title,v=n.description,u=n.permalink,g=n.frontMatter,N=g.wrapperClassName,f=g.hide_table_of_contents;return l.createElement(i.Z,{title:d,description:v,permalink:u,wrapperClassName:null!=N?N:m.kM.wrapper.mdxPages,pageClassName:m.kM.page.mdxPage},l.createElement("main",{className:"container container--fluid margin-vert--lg"},l.createElement("div",{className:(0,t.Z)("row",o)},l.createElement("div",{className:(0,t.Z)("col",!f&&"col--8")},l.createElement(s.Zo,{components:c.Z},l.createElement(a,null))),!f&&a.toc&&l.createElement("div",{className:"col col--2"},l.createElement(r.Z,{toc:a.toc,minHeadingLevel:g.toc_min_heading_level,maxHeadingLevel:g.toc_max_heading_level})))))}},4853:function(e,a,n){n.d(a,{Z:function(){return u}});var l=n(7462),t=n(3366),i=n(7294),s=n(6010),c=n(5773),r=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function m(e){var a=e.toc,n=e.className,l=e.linkClassName,t=e.isChild;return a.length?i.createElement("ul",{className:t?void 0:n},a.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(m,{isChild:!0,toc:e.children,className:n,linkClassName:l}))}))):null}function o(e){var a=e.toc,n=e.className,s=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,v=e.linkActiveClassName,u=void 0===v?void 0:v,g=e.minHeadingLevel,N=e.maxHeadingLevel,f=(0,t.Z)(e,r),_=(0,c.LU)(),k=null!=g?g:_.tableOfContents.minHeadingLevel,C=null!=N?N:_.tableOfContents.maxHeadingLevel,p=(0,c.DA)({toc:a,minHeadingLevel:k,maxHeadingLevel:C}),h=(0,i.useMemo)((function(){if(d&&u)return{linkClassName:d,linkActiveClassName:u,minHeadingLevel:k,maxHeadingLevel:C}}),[d,u,k,C]);return(0,c.Si)(h),i.createElement(m,(0,l.Z)({toc:p,className:s,linkClassName:d},f))}var d="tableOfContents_cNA8",v=["className"];var u=function(e){var a=e.className,n=(0,t.Z)(e,v);return i.createElement("div",{className:(0,s.Z)(d,"thin-scrollbar",a)},i.createElement(o,(0,l.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}}}]);