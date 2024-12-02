"use strict";(self.webpackChunkobBlog=self.webpackChunkobBlog||[]).push([[7643],{2052:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});a(6540);var n=a(4164),r=a(4586),s=a(5500),l=a(7559),i=a(8027),o=a(1312),c=a(9022),d=a(4848);function g(e){const{metadata:t}=e,{previousPage:a,nextPage:n}=t;return(0,d.jsxs)("nav",{className:"pagination-nav","aria-label":(0,o.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,d.jsx)(c.A,{permalink:a,title:(0,d.jsx)(o.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),n&&(0,d.jsx)(c.A,{permalink:n,title:(0,d.jsx)(o.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}var u=a(1463),m=a(4096),h=a(1225);function p(e){let{items:t,component:a=h.A}=e;return(0,d.jsx)(d.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,d.jsx)(m.in,{content:t,children:(0,d.jsx)(a,{children:(0,d.jsx)(t,{})})},t.metadata.permalink)}))})}var x=a(5260);function j(e){const t=(0,m.kJ)(e);return(0,d.jsx)(x.A,{children:(0,d.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function f(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,r.A)(),{blogDescription:n,blogTitle:l,permalink:i}=t,o="/"===i?a:l;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.be,{title:o,description:n}),(0,d.jsx)(u.A,{tag:"blog_posts_list"})]})}function b(e){const{metadata:t,items:a,sidebar:n}=e;return(0,d.jsxs)(i.A,{sidebar:n,children:[(0,d.jsx)(p,{items:a}),(0,d.jsx)(g,{metadata:t})]})}function A(e){return(0,d.jsxs)(s.e3,{className:(0,n.A)(l.G.wrapper.blogPages,l.G.page.blogListPage),children:[(0,d.jsx)(f,{...e}),(0,d.jsx)(j,{...e}),(0,d.jsx)(b,{...e})]})}},9022:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var n=a(4164),r=a(8774),s=a(4848);function l(e){const{permalink:t,title:a,subLabel:l,isNext:i}=e;return(0,s.jsxs)(r.A,{className:(0,n.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,s.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,s.jsx)("div",{className:"pagination-nav__label",children:a})]})}},6133:(e,t,a)=>{a.d(t,{A:()=>i});a(6540);var n=a(4164),r=a(8774);const s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=a(4848);function i(e){let{permalink:t,label:a,count:i,description:o}=e;return(0,l.jsxs)(r.A,{href:t,title:o,className:(0,n.A)(s.tag,i?s.tagWithCount:s.tagRegular),children:[a,i&&(0,l.jsx)("span",{children:i})]})}},2053:(e,t,a)=>{a.d(t,{A:()=>o});a(6540);var n=a(4164),r=a(1312),s=a(6133);const l={tags:"tags_jXut",tag:"tag_QGVx"};var i=a(4848);function o(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(r.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,n.A)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,i.jsx)("li",{className:l.tag,children:(0,i.jsx)(s.A,{...e})},e.permalink)))})]})}},5846:(e,t,a)=>{a.d(t,{W:()=>c});var n=a(6540),r=a(4586);const s=["zero","one","two","few","many","other"];function l(e){return s.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const r=a.select(t),s=a.pluralForms.indexOf(r);return n[Math.min(s,n.length-1)]}(a,t,e)}}},378:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(6540),r=a(4848);function s({id:e,host:t,repo:s,repoId:l,category:i,categoryId:o,mapping:c,term:d,strict:g,reactionsEnabled:u,emitMetadata:m,inputPosition:h,theme:p,lang:x,loading:j}){const[f,b]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{f||(a.e(1135).then(a.bind(a,1135)),b(!0))}),[]),f?(0,r.jsx)("giscus-widget",{id:e,host:t,repo:s,repoid:l,category:i,categoryid:o,mapping:c,term:d,strict:g,reactionsenabled:u,emitmetadata:m,inputposition:h,theme:p,lang:x,loading:j}):null}var l=a(5293);function i(){const{colorMode:e}=(0,l.G)();return(0,r.jsx)(s,{repo:"YiHsinTseng/obBlog",repoId:"R_kgDONW8b2Q",category:"General",categoryId:"DIC_kwDONW8b2c4CkxC6",mapping:"og:title",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"en",loading:"lazy",crossorigin:"anonymous",async:!0})}},1225:(e,t,a)=>{a.d(t,{A:()=>U});a(6540);var n=a(4096),r=a(4164),s=a(4848);function l(e){let{children:t,className:a}=e;return(0,s.jsx)("article",{className:a,children:t})}var i=a(8774);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:l}=(0,n.e7)(),{permalink:c,title:d}=a,g=l?"h1":"h2";return(0,s.jsx)(g,{className:(0,r.A)(o.title,t),children:l?d:(0,s.jsx)(i.A,{to:c,children:d})})}var d=a(1312),g=a(5846),u=a(6266);const m={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,g.W)();return t=>{const a=Math.ceil(t);return e(a,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,s.jsx)(s.Fragment,{children:a(t)})}function p(e){let{date:t,formattedDate:a}=e;return(0,s.jsx)("time",{dateTime:t,children:a})}function x(){return(0,s.jsx)(s.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,n.e7)(),{date:l,readingTime:i}=a,o=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,s.jsxs)("div",{className:(0,r.A)(m.container,"margin-vert--md",t),children:[(0,s.jsx)(p,{date:l,formattedDate:(c=l,o.format(new Date(c)))}),void 0!==i&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x,{}),(0,s.jsx)(h,{readingTime:i})]})]});var c}var f=a(6913);const b={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function A(e){let{className:t}=e;const{metadata:{authors:a},assets:l}=(0,n.e7)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t})),o=1===a.length;return(0,s.jsx)("div",{className:(0,r.A)("margin-top--md margin-bottom--sm",i?b.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,s.jsx)("div",{className:(0,r.A)(!i&&(o?"col col--12":"col col--6"),i?b.imageOnlyAuthorCol:b.authorCol),children:(0,s.jsx)(f.A,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,s.jsxs)("header",{children:[(0,s.jsx)(c,{}),(0,s.jsx)(j,{}),(0,s.jsx)(A,{})]})}var N=a(440),y=a(5568);function _(e){let{children:t,className:a}=e;const{isBlogPostPage:l}=(0,n.e7)();return(0,s.jsx)("div",{id:l?N.LU:void 0,className:(0,r.A)("markdown",a),children:(0,s.jsx)(y.A,{children:t})})}var k=a(7559),w=a(4336),T=a(2053);function P(){return(0,s.jsx)("b",{children:(0,s.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function C(e){const{blogPostTitle:t,...a}=e;return(0,s.jsx)(i.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,s.jsx)(P,{})})}function F(){const{metadata:e,isBlogPostPage:t}=(0,n.e7)(),{tags:a,title:l,editUrl:i,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,g=!t&&o,u=a.length>0;if(!(u||g||i))return null;if(t){const e=!!(i||d||c);return(0,s.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,s.jsx)("div",{className:(0,r.A)("row","margin-top--sm",k.G.blog.blogFooterEditMetaRow),children:(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(T.A,{tags:a})})}),e&&(0,s.jsx)(w.A,{className:(0,r.A)("margin-top--sm",k.G.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,s.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,s.jsx)("div",{className:(0,r.A)("col",{"col--9":g}),children:(0,s.jsx)(T.A,{tags:a})}),g&&(0,s.jsx)("div",{className:(0,r.A)("col text--right",{"col--3":u}),children:(0,s.jsx)(C,{blogPostTitle:l,to:e.permalink})})]})}function R(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,n.e7)();return e?void 0:"margin-bottom--xl"}();return(0,s.jsxs)(l,{className:(0,r.A)(i,a),children:[(0,s.jsx)(v,{}),(0,s.jsx)(_,{children:t}),(0,s.jsx)(F,{})]})}var M=a(378),O=a(2303);function U(e){(0,O.A)();const{metadata:t}=(0,n.e7)(),{frontMatter:a,slug:r,title:l}=t,{enableComments:i}=a;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(R,{...e}),"true"===i&&(0,s.jsx)(M.A,{})]})}}}]);