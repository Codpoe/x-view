(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{lbfy:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return m}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var a=n("mXGw"),l=n.n(a),b=n("/FXl"),r=n("TjRS"),i=n("ZFoC"),c=n("s+pv");n("CJJX"),n("aD51");function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/base-select/README.mdx"}});var o={_frontmatter:p},u=r.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(b.b)(u,d({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"演示"},"演示"),Object(b.b)(i.c,{__position:0,__code:"() => {\n  const [visible, changeVisible] = React.useState(false)\n  const [value, changeValue] = React.useState('')\n  const handleChange = React.useCallback(\n    visible => {\n      if (visible) {\n        setTimeout(() => {\n          changeValue('r u ok?')\n        }, 1000)\n      }\n      changeVisible(visible)\n    },\n    [changeVisible],\n  )\n  return (\n    <BaseSelect\n      value={value}\n      visible={visible}\n      onChange={handleChange}\n      onClear={() => changeValue('')}\n    >\n      <div style={{ background: '#fff', padding: '4px 6px' }}>\n        永远相信美好的事情即将发生\n      </div>\n    </BaseSelect>\n  )\n}",__scope:{props:n,DefaultLayout:r.a,Playground:i.c,BaseSelect:c.a},mdxType:"Playground"},(function(){var e=l.a.useState(!1),t=e[0],n=e[1],a=l.a.useState(""),r=a[0],i=a[1],d=l.a.useCallback((function(e){e&&setTimeout((function(){i("r u ok?")}),1e3),n(e)}),[n]);return Object(b.b)(c.a,{value:r,visible:t,onChange:d,onClear:function(){return i("")},mdxType:"BaseSelect"},Object(b.b)("div",{style:{background:"#fff",padding:"4px 6px"}},"永远相信美好的事情即将发生"))})),Object(b.b)("h2",{id:"api"},"API"),Object(b.b)("h3",{id:"props"},"Props"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",d({parentName:"tr"},{align:null}),"参数"),Object(b.b)("th",d({parentName:"tr"},{align:null}),"类型"),Object(b.b)("th",d({parentName:"tr"},{align:null}),"默认值"),Object(b.b)("th",d({parentName:"tr"},{align:null}),"说明"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",d({parentName:"tr"},{align:null}),"value"),Object(b.b)("td",d({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"any")),Object(b.b)("td",d({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",d({parentName:"tr"},{align:null}),"值")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",d({parentName:"tr"},{align:null}),"icon"),Object(b.b)("td",d({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"React.ReactNode")),Object(b.b)("td",d({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",d({parentName:"tr"},{align:null}),"图标")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",d({parentName:"tr"},{align:null}),"visible"),Object(b.b)("td",d({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",d({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",d({parentName:"tr"},{align:null}),"是否可见")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",d({parentName:"tr"},{align:null}),"onChange"),Object(b.b)("td",d({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"(visible: boolean) => void")),Object(b.b)("td",d({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",d({parentName:"tr"},{align:null}),"可见性事件")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",d({parentName:"tr"},{align:null}),"onClear"),Object(b.b)("td",d({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"() => void")),Object(b.b)("td",d({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",d({parentName:"tr"},{align:null}),"清除内容事件")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",d({parentName:"tr"},{align:null}),"className"),Object(b.b)("td",d({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",d({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",d({parentName:"tr"},{align:null}),"类名")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",d({parentName:"tr"},{align:null}),"style"),Object(b.b)("td",d({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"React.CSSProperties")),Object(b.b)("td",d({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",d({parentName:"tr"},{align:null}),"样式")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",d({parentName:"tr"},{align:null}),"contentClassName"),Object(b.b)("td",d({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",d({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",d({parentName:"tr"},{align:null}),"弹窗的类名")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",d({parentName:"tr"},{align:null}),"contentStyle"),Object(b.b)("td",d({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"React.CSSProperties")),Object(b.b)("td",d({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",d({parentName:"tr"},{align:null}),"弹窗的样式")))))}m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/base-select/README.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-base-select-readme-mdx-ce4734b8db785b0f5fb8.js.map