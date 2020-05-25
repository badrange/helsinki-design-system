(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"Ox/Y":function(e,o,l){"use strict";l.r(o),l.d(o,"_frontmatter",(function(){return p})),l.d(o,"default",(function(){return s}));l("gs/B"),l("uydD"),l("Cwzy"),l("odAc"),l("OksV"),l("ho3K");var t=l("ZVZ0"),n=l("9Rvw"),a=l("qbsg"),i=l("OBWD"),r=l("sQ7B"),b=l("x0e6");l("l1C2");function c(){return(c=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var l=arguments[o];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e}).apply(this,arguments)}var p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/components/dropdown.mdx"}});var u={_frontmatter:p},d=n.a;function s(e){var o,l,s,m,O,f=e.components,h=function(e,o){if(null==e)return{};var l,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)l=a[t],o.indexOf(l)>=0||(n[l]=e[l]);return n}(e,["components"]);return Object(t.b)(d,c({},u,h,{components:f,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"dropdowns"},"Dropdowns"),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"},"TODO")),Object(t.b)("h2",{id:"accessibility"},"Accessibility"),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"},"TODO")),Object(t.b)("h2",{id:"how-to-use"},"How to use"),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"},"TODO")),Object(t.b)("h2",{id:"default"},"Default"),Object(t.b)(a.c,{__position:0,__code:'<Dropdown\n  id="example1"\n  options={[\n    { label: \'Plutonium\' },\n    { label: \'Americium\' },\n    { label: \'Copernicium\' },\n  ]}\n  placeholder="Choose one"\n  label="Label"\n  helper="Assistive text"\n/>',__scope:(o={props:h,DefaultLayout:n.a,Playground:a.c,Dropdown:i.c,ColorBox:r.a,Text:b.a},o.DefaultLayout=n.a,o._frontmatter=p,o),mdxType:"Playground"},Object(t.b)(i.c,{id:"example1",options:[{label:"Plutonium"},{label:"Americium"},{label:"Copernicium"}],placeholder:"Choose one",label:"Label",helper:"Assistive text",mdxType:"Dropdown"})),Object(t.b)("h2",{id:"disabled"},"Disabled"),Object(t.b)(a.c,{__position:1,__code:"<Dropdown\n  options={[\n    { label: 'Plutonium' },\n    { label: 'Americium' },\n    { label: 'Copernicium' },\n  ]}\n  defaultValue={{ label: 'Plutonium' }}\n  label=\"Label\"\n  helper=\"Assistive text\"\n  disabled\n/>",__scope:(l={props:h,DefaultLayout:n.a,Playground:a.c,Dropdown:i.c,ColorBox:r.a,Text:b.a},l.DefaultLayout=n.a,l._frontmatter=p,l),mdxType:"Playground"},Object(t.b)(i.c,{options:[{label:"Plutonium"},{label:"Americium"},{label:"Copernicium"}],defaultValue:{label:"Plutonium"},label:"Label",helper:"Assistive text",disabled:!0,mdxType:"Dropdown"})),Object(t.b)("h2",{id:"invalid"},"Invalid"),Object(t.b)(a.c,{__position:2,__code:"<Dropdown\n  id=\"example2\"\n  options={[\n    { label: 'Plutonium' },\n    { label: 'Americium' },\n    { label: 'Copernicium' },\n  ]}\n  defaultValue={{ label: 'Plutonium' }}\n  label=\"Label\"\n  helper=\"Error text\"\n  invalid\n/>",__scope:(s={props:h,DefaultLayout:n.a,Playground:a.c,Dropdown:i.c,ColorBox:r.a,Text:b.a},s.DefaultLayout=n.a,s._frontmatter=p,s),mdxType:"Playground"},Object(t.b)(i.c,{id:"example2",options:[{label:"Plutonium"},{label:"Americium"},{label:"Copernicium"}],defaultValue:{label:"Plutonium"},label:"Label",helper:"Error text",invalid:!0,mdxType:"Dropdown"})),Object(t.b)("h2",{id:"filterable"},"Filterable"),Object(t.b)(a.c,{__position:3,__code:'<Dropdown\n  id="example3"\n  options={[\n    { label: \'Plutonium\' },\n    { label: \'Americium\' },\n    { label: \'Copernicium\' },\n  ]}\n  placeholder="Choose one"\n  label="Label"\n  helper="Assistive text"\n  filterable\n/>',__scope:(m={props:h,DefaultLayout:n.a,Playground:a.c,Dropdown:i.c,ColorBox:r.a,Text:b.a},m.DefaultLayout=n.a,m._frontmatter=p,m),mdxType:"Playground"},Object(t.b)(i.c,{id:"example3",options:[{label:"Plutonium"},{label:"Americium"},{label:"Copernicium"}],placeholder:"Choose one",label:"Label",helper:"Assistive text",filterable:!0,mdxType:"Dropdown"})),Object(t.b)("h2",{id:"multi-select"},"Multi-select"),Object(t.b)(a.c,{__position:4,__code:'<Dropdown\n  id="example4"\n  options={[\n    { label: \'Plutonium\' },\n    { label: \'Americium\' },\n    { label: \'Copernicium\' },\n  ]}\n  placeholder="Choose one"\n  label="Label"\n  helper="Assistive text"\n  closeMenuOnSelect={false}\n  multiselect\n/>',__scope:(O={props:h,DefaultLayout:n.a,Playground:a.c,Dropdown:i.c,ColorBox:r.a,Text:b.a},O.DefaultLayout=n.a,O._frontmatter=p,O),mdxType:"Playground"},Object(t.b)(i.c,{id:"example4",options:[{label:"Plutonium"},{label:"Americium"},{label:"Copernicium"}],placeholder:"Choose one",label:"Label",helper:"Assistive text",closeMenuOnSelect:!1,multiselect:!0,mdxType:"Dropdown"})),Object(t.b)("h2",{id:"demos--api"},"Demos & API"),Object(t.b)("h3",{id:"core"},"Core"),Object(t.b)("p",null,Object(t.b)("em",{parentName:"p"},"Not included in hds-core!")),Object(t.b)("h3",{id:"react"},"React"),Object(t.b)("p",null,Object(t.b)("a",c({parentName:"p"},{href:"/helsinki-design-system/storybook/react/?path=/story/components-dropdown--default"}),"Dropdowns in hds-react")),Object(t.b)("p",null,Object(t.b)("a",c({parentName:"p"},{href:"/helsinki-design-system/storybook/react/?path=/docs/components-dropdown--default"}),"Dropdown API")))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/components/dropdown.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-components-dropdown-mdx-132cd7c7f98dc0e8d7d9.js.map