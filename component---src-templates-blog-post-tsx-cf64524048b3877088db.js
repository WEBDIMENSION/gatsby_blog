"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[7],{7118:function(e,t,r){var a=r(7294),n=r(3587),l=r(9641);t.Z=function(e){var t=e.title,r=e.prefixTitle;return a.createElement(a.Fragment,null,a.createElement(o,{className:"pageTitle"},r?a.createElement("div",{className:"prefix"},r,":"):"",a.createElement("h1",null,t)),a.createElement(l.Z,{slotKey:"contentsLower"}))};var o=n.default.div.withConfig({displayName:"pageTitle__DivWrapper",componentId:"sc-140o05u-0"})(["margin-bottom:0;display:flex;.prefix{font-size:var(--fontSizeH1);margin-right:0.5em;}"])},1969:function(e,t,r){var a=r(7294),n=r(3587),l=r(1597),o=r(1804),i=r.n(o),c=r(9519),m=r(8014);t.Z=function(e){var t,r,n=e.node;return a.createElement(s,{className:"tags"},null===(t=n.frontmatter)||void 0===t||null===(r=t.tags)||void 0===r?void 0:r.map((function(e){return a.createElement("li",{key:e,className:"tags"},a.createElement(c.G,{icon:m.LEN,size:"1x"}),a.createElement(l.Link,{to:"/blog/tags/"+i()(e)+"/"},e))})))};var s=n.default.ul.withConfig({displayName:"tagsInContent__UlWrapper",componentId:"sc-gochus-0"})(["display:flex;justify-content:flex-end;li{margin-left:1em;button{color:var(--fontColor) !important;}}"])},8540:function(e,t,r){r.r(t);var a=r(7294),n=r(1597),l=r(7618),o=r(3765),i=r(3587),c=r(7118),m=r(1969);t.default=function(e){var t,r=e.data,i=r.markdownRemark,p=r.previous,u=r.next;return a.createElement(l.Z,null,a.createElement(o.Z,{title:i.frontmatter.title+" の記事",DisplaySubTitle:!0,description:i.frontmatter.description||i.excerpt+" の記事"}),a.createElement(s,{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},function(){if(i.frontmatter.draft)return a.createElement("div",{className:"draft"},"Draft")}(),a.createElement("header",null,a.createElement(c.Z,{title:i.frontmatter.title,prefixTitle:""})),a.createElement("p",{className:"postDate"},a.createElement("span",null,i.frontmatter.date)),a.createElement(m.Z,{node:i}),a.createElement("p",{dangerouslySetInnerHTML:{__html:(null===(t=i.frontmatter)||void 0===t?void 0:t.description)||(null==i?void 0:i.excerpt)||""},itemProp:"description"}),a.createElement("section",{dangerouslySetInnerHTML:{__html:i.html},itemProp:"articleBody"}),a.createElement("hr",null)),a.createElement(m.Z,{node:i}),a.createElement(d,{className:"blogPostNav"},a.createElement("ul",null,a.createElement("li",{className:"prev"},p&&a.createElement(n.Link,{to:"/blog"+p.fields.slug,rel:"prev"},"← ",p.frontmatter.title)),a.createElement("li",{className:"next"},u&&a.createElement(n.Link,{to:"/blog"+u.fields.slug,rel:"next"},u.frontmatter.title," →")))))};var s=i.default.article.withConfig({displayName:"blog-post__ArticleWrapper",componentId:"sc-a8k2ed-0"})(["header{margin-bottom:1em;border-bottom:1px var(--colorPrimary) dashed;}.draft{background-color:var(--colorWarning);color:var(--bgColorPrimary);padding:4px;border-radius:4px;text-align:center;font-weight:bolder;}P.postDate{text-align:end;span{color:var(--colorSecondary);}}section{margin-top:1em;border-radius:8px;background-color:var(--bgColorScondary);padding:0.5em;}"]),d=i.default.nav.withConfig({displayName:"blog-post__NavWrapper",componentId:"sc-a8k2ed-1"})(["margin:1em 0;ul{display:flex;justify-content:space-between;li.next{text-align:right;}"])}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-cf64524048b3877088db.js.map