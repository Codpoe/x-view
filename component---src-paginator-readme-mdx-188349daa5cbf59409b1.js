(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{HiRa:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return p})),a.d(t,"default",(function(){return d}));a("5hJT"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("PJhk");var n=a("/FXl"),b=a("TjRS"),r=a("ZFoC"),l=a("5CNs");a("A905"),a("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/paginator/README.mdx"}});var c={_frontmatter:p},o=b.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,["components"]);return Object(n.b)(o,i({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"演示"},"演示"),Object(n.b)("h3",{id:"简单示例"},"简单示例"),Object(n.b)(r.c,{__position:0,__code:"<Paginator total={3} pageSize={1} defaultPage={1} />\n<br />\n<Paginator total={7} pageSize={1} defaultPage={1} />\n<br />\n<Paginator total={8} pageSize={1} defaultPage={1} />\n<br />\n<Paginator total={99} pageSize={1} defaultPage={1} />",__scope:{props:a,DefaultLayout:b.a,Playground:r.c,Paginator:l.a},mdxType:"Playground"},Object(n.b)(l.a,{total:3,pageSize:1,defaultPage:1,mdxType:"Paginator"}),Object(n.b)("br",null),Object(n.b)(l.a,{total:7,pageSize:1,defaultPage:1,mdxType:"Paginator"}),Object(n.b)("br",null),Object(n.b)(l.a,{total:8,pageSize:1,defaultPage:1,mdxType:"Paginator"}),Object(n.b)("br",null),Object(n.b)(l.a,{total:99,pageSize:1,defaultPage:1,mdxType:"Paginator"})),Object(n.b)("h3",{id:"快速跳转"},"快速跳转"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"quickJump"),": ",Object(n.b)("inlineCode",{parentName:"p"},"boolean")),Object(n.b)(r.c,{__position:1,__code:"<Paginator total={99} pageSize={1} defaultPage={1} quickJump />",__scope:{props:a,DefaultLayout:b.a,Playground:r.c,Paginator:l.a},mdxType:"Playground"},Object(n.b)(l.a,{total:99,pageSize:1,defaultPage:1,quickJump:!0,mdxType:"Paginator"})),Object(n.b)("h2",{id:"api"},"API"),Object(n.b)("h3",{id:"props"},"Props"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",i({parentName:"tr"},{align:null}),"参数"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"类型"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"默认值"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"说明"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"total"),Object(n.b)("td",i({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"number")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"-"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"总数。必须")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"pageSize"),Object(n.b)("td",i({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"number")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"-"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"页长。必须")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"page"),Object(n.b)("td",i({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"number")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"-"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"defaultPage"),Object(n.b)("td",i({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"number")),Object(n.b)("td",i({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"1")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"默认页码")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"quickJump"),Object(n.b)("td",i({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"boolean")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"-"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"是否快速跳转")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"onChange"),Object(n.b)("td",i({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"(page: number) => void")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"-"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"页码变化事件")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"className"),Object(n.b)("td",i({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"string")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"-"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"类名")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"style"),Object(n.b)("td",i({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"React.CSSProperties")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"-"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"样式")))))}d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/paginator/README.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-paginator-readme-mdx-188349daa5cbf59409b1.js.map