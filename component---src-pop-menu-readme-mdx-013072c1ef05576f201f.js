(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"2STn":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return u}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var a=n("/FXl"),l=n("TjRS"),b=n("ZFoC"),r=n("jcDR"),p=n("5+LR"),c=n("T/ex");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pop-menu/README.mdx"}});var m={_frontmatter:i},d=l.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(d,o({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"演示"},"演示"),Object(a.b)(b.c,{__position:0,__code:"() => {\n  const items = [\n    {\n      label: 'Phone',\n      items: [\n        { label: 'Apple', href: '//www.apple.com' },\n        { label: 'Smartisan', href: '//www.smartisan.com' },\n        { label: 'OnePlus', href: '//www.oneplus.com' },\n      ],\n    },\n    {\n      label: 'Phone',\n      items: [\n        { label: 'Apple', href: '//www.apple.com' },\n        { label: 'Smartisan', href: '//www.smartisan.com' },\n        { label: 'OnePlus', href: '//www.oneplus.com' },\n      ],\n    },\n  ]\n  return (\n    <PopMenu items={items} onClick={item => console.log(item)}>\n      <Button>\n        PopMenu <IconChevronDown />\n      </Button>\n    </PopMenu>\n  )\n}",__scope:{props:n,DefaultLayout:l.a,Playground:b.c,PopMenu:r.a,Button:p.b,IconChevronDown:c.IconChevronDown},mdxType:"Playground"},(function(){return Object(a.b)(r.a,{items:[{label:"Phone",items:[{label:"Apple",href:"//www.apple.com"},{label:"Smartisan",href:"//www.smartisan.com"},{label:"OnePlus",href:"//www.oneplus.com"}]},{label:"Phone",items:[{label:"Apple",href:"//www.apple.com"},{label:"Smartisan",href:"//www.smartisan.com"},{label:"OnePlus",href:"//www.oneplus.com"}]}],onClick:function(e){return console.log(e)},mdxType:"PopMenu"},Object(a.b)(p.b,{mdxType:"Button"},"PopMenu"," ",Object(a.b)(c.IconChevronDown,{mdxType:"IconChevronDown"})))})),Object(a.b)("h2",{id:"api"},"API"),Object(a.b)("h3",{id:"props"},"Props"),Object(a.b)("p",null,"继承 ",Object(a.b)("inlineCode",{parentName:"p"},"PopProps")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"参数"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"类型"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"默认值"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"说明"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"items"),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"PopMenuItemProps[]")),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"[]")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"菜单项")))),Object(a.b)("h3",{id:"popmenuitemprops"},"PopMenuItemProps"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"参数"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"类型"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"默认值"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"说明"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"value"),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"any")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"值")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"items"),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"PopMenuItemProps[]")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"子菜单项")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"label"),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"React.ReactNode")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"菜单名。必须")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"href"),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"string")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"链接")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"target"),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"_self"),", ",Object(a.b)("inlineCode",{parentName:"td"},"_blank")),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"_blank")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"链接打开方式")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"disabled"),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"boolean")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"是否禁用")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"onClick"),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"(item: PopMenuItemProps, ev: React.SyntheticEvent) => void")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"点击事件")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"className"),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"string")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"类名")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"style"),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"React.CSSProperties")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"样式")))))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pop-menu/README.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pop-menu-readme-mdx-013072c1ef05576f201f.js.map