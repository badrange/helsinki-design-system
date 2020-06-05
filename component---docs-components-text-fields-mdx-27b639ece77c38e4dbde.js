(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{opbm:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return x}));a("gs/B"),a("uydD"),a("Cwzy"),a("odAc"),a("OksV"),a("ho3K");var n=a("ZVZ0"),l=a("9Rvw"),r=a("qbsg"),i=a("OBWD"),o=a("sQ7B"),p=a("vD+s"),b=a("x0e6");a("l1C2");function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/components/text_fields.mdx"}});var u={_frontmatter:c},s=l.a;function x(e){var t,a,x,m,h=e.components,O=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["components"]);return Object(n.b)(s,d({},u,O,{components:h,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"text-fields"},"Text fields"),Object(n.b)(p.a,{mdxType:"LargeParagraph"},"A text field is an input field that the user can interact with and input content and data. The user can also be provided with helper text if needed. Text inputs are used for shorter information while Text areas can be used for multiline answers."),Object(n.b)("h2",{id:"principles"},"Principles"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"A label should always be provided with a text field.")," Only exception to this is the search field which can be identified from the magnifying glass icon."),Object(n.b)("li",{parentName:"ul"},"Use a text input when a single line of text is expected. For multiline inputs, use a text area."),Object(n.b)("li",{parentName:"ul"},"Allow the text input to reflect the length of the content you expect the user to enter."),Object(n.b)("li",{parentName:"ul"},"If possible, add programmatic assistance. Detect and pre-fill inputs to reduce errors and save time. Use sentence-case for default values, detected values, and auto-completion text."),Object(n.b)("li",{parentName:"ul"},"If possible, do input validation in client-side real time and provide the user with immediate feedback."),Object(n.b)("li",{parentName:"ul"},"If possible, be forgiving of different input formats and small mistakes. It can greatly increase user experience of your product if you can fix common mistakes for the user."),Object(n.b)("li",{parentName:"ul"},"To decrease cognitive load of the user, it is recommended to mark all required fields. Remember to provide explanation of the required field indicator at the top of your form.")),Object(n.b)("h2",{id:"accessibility"},"Accessibility"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Placeholder text can be used to give hints and examples to the user what should be entered to the field. ",Object(n.b)("strong",{parentName:"li"},"However, all assistive technologies do not threat placeholder texts as labels and therefore they may ignore them completely.")," Aim to provide the sufficient information to fill the input in the label."),Object(n.b)("li",{parentName:"ul"},"In the case of an erroneous input, aim to provide clear instructions to the user how to correct the mistake. Always provide text description of the error.")),Object(n.b)("h2",{id:"usage-and-variations"},"Usage and variations"),Object(n.b)("h3",{id:"text-input"},"Text input"),Object(n.b)("p",null,"Text input serves in most use cases when the user needs to enter information. Text input works well for short inputs that fit in one line and are not longer than one sentence."),Object(n.b)(r.c,{__position:1,__code:'<TextInput\n  id="input"\n  label="Label"\n  placeholder="Placeholder"\n  helperText="Assistive text"\n  required\n/>\n<TextInput\n  label="Label"\n  defaultValue="Text input value"\n  helperText="Assistive text"\n  style={{ marginTop: \'var(--spacing-s)\' }}\n  disabled\n/>\n<TextInput\n  id="input-invalid"\n  label="Label"\n  defaultValue="Text input value"\n  helperText="Error text"\n  style={{ marginTop: \'var(--spacing-s)\' }}\n  invalid\n/>',__scope:(t={props:O,DefaultLayout:l.a,Playground:r.c,TextArea:i.TextArea,TextInput:i.TextInput,ColorBox:o.a,LargeParagraph:p.a,Text:b.a},t.DefaultLayout=l.a,t._frontmatter=c,t),mdxType:"Playground"},Object(n.b)(i.TextInput,{id:"input",label:"Label",placeholder:"Placeholder",helperText:"Assistive text",required:!0,mdxType:"TextInput"}),Object(n.b)(i.TextInput,{label:"Label",defaultValue:"Text input value",helperText:"Assistive text",style:{marginTop:"var(--spacing-s)"},disabled:!0,mdxType:"TextInput"}),Object(n.b)(i.TextInput,{id:"input-invalid",label:"Label",defaultValue:"Text input value",helperText:"Error text",style:{marginTop:"var(--spacing-s)"},invalid:!0,mdxType:"TextInput"})),Object(n.b)("h5",{id:"core"},"Core:"),Object(n.b)("pre",null,Object(n.b)("code",d({parentName:"pre"},{className:"language-html"}),'\x3c!-- Enabled  --\x3e\n<div class="hds-text-input">\n  <label for="input" class="hds-text-input__label">\n    Label\n  </label>\n  <div class="hds-text-input__input-wrapper">\n    <input id="input" class="hds-text-input__input" type="text" placeholder="Placeholder" />\n  </div>\n  <span class="hds-text-input__helper-text">Assistive text</span>\n</div>\n\n\x3c!-- Disabled --\x3e\n<div class="hds-text-input">\n  <label for="input" class="hds-text-input__label">\n    Label\n  </label>\n  <div class="hds-text-input__input-wrapper">\n    <input id="input" class="hds-text-input__input" type="text" value="Text input value" disabled />\n  </div>\n  <span class="hds-text-input__helper-text">Assistive text</span>\n</div>\n\n\x3c!-- Error --\x3e\n<div class="hds-text-input hds-text-input--invalid">\n  <label for="input" class="hds-text-input__label">\n    Label\n  </label>\n  <div class="hds-text-input__input-wrapper">\n    <input id="input" class="hds-text-input__input" type="text" value="Text input value" />\n  </div>\n  <span class="hds-text-input__helper-text">Error text</span>\n</div>\n')),Object(n.b)("h5",{id:"react"},"React:"),Object(n.b)("pre",null,Object(n.b)("code",d({parentName:"pre"},{className:"language-tsx"}),'/* Enabled */\n<TextInput\n  id="input"\n  label="Label"\n  placeholder="Placeholder"\n  helperText="Assistive text"\n  required\n/>\n\n/* Disabled */\n<TextInput\n  id="input"\n  label="Label"\n  defaultValue="Text input value"\n  helperText="Assistive text"\n  disabled\n/>\n\n/* Error */\n<TextInput\n  id="input"\n  label="Label"\n  defaultValue="Text input value"\n  helperText="Error text"\n  invalid\n/>\n')),Object(n.b)("h3",{id:"text-area"},"Text area"),Object(n.b)("p",null,"Text area is meant for situations where inputted text is multiline or contains more than one sentence."),Object(n.b)(r.c,{__position:2,__code:'<TextArea\n  id="textarea"\n  label="Label"\n  placeholder="Placeholder"\n  helperText="Assistive text"\n  required\n/>\n<TextArea\n  label="Label"\n  defaultValue="Text area value"\n  helperText="Assistive text"\n  style={{ marginTop: \'var(--spacing-s)\' }}\n  disabled\n/>\n<TextArea\n  id="textarea-invalid"\n  label="Label"\n  defaultValue="Text area value"\n  helperText="Error text"\n  style={{ marginTop: \'var(--spacing-s)\' }}\n  invalid\n/>',__scope:(a={props:O,DefaultLayout:l.a,Playground:r.c,TextArea:i.TextArea,TextInput:i.TextInput,ColorBox:o.a,LargeParagraph:p.a,Text:b.a},a.DefaultLayout=l.a,a._frontmatter=c,a),mdxType:"Playground"},Object(n.b)(i.TextArea,{id:"textarea",label:"Label",placeholder:"Placeholder",helperText:"Assistive text",required:!0,mdxType:"TextArea"}),Object(n.b)(i.TextArea,{label:"Label",defaultValue:"Text area value",helperText:"Assistive text",style:{marginTop:"var(--spacing-s)"},disabled:!0,mdxType:"TextArea"}),Object(n.b)(i.TextArea,{id:"textarea-invalid",label:"Label",defaultValue:"Text area value",helperText:"Error text",style:{marginTop:"var(--spacing-s)"},invalid:!0,mdxType:"TextArea"})),Object(n.b)("h5",{id:"core-1"},"Core:"),Object(n.b)("pre",null,Object(n.b)("code",d({parentName:"pre"},{className:"language-html"}),'\x3c!-- Enabled  --\x3e\n<div class="hds-text-input">\n  <label for="textarea" class="hds-text-input__label">\n    Label\n  </label>\n  <div class="hds-text-input__input-wrapper">\n    <textarea id="textarea" class="hds-text-input__input" placeholder="Placeholder"></textarea>\n  </div>\n  <span class="hds-text-input__helper-text">Assistive text</span>\n</div>\n\n\x3c!-- Disabled --\x3e\n<div class="hds-text-input">\n  <label for="textarea" class="hds-text-input__label">\n    Label\n  </label>\n  <div class="hds-text-input__input-wrapper">\n    <textarea id="textarea" class="hds-text-input__input" disabled>\n      Text area value\n    </textarea>\n  </div>\n  <span class="hds-text-input__helper-text">Assistive text</span>\n</div>\n\n\x3c!-- Error --\x3e\n<div class="hds-text-input hds-text-input--invalid">\n  <label for="textarea" class="hds-text-input__label">\n    Label\n  </label>\n  <div class="hds-text-input__input-wrapper">\n    <textarea id="textarea" class="hds-text-input__input">\n      Text area value\n    </textarea>\n  </div>\n  <span class="hds-text-input__helper-text">Error text</span>\n</div>\n')),Object(n.b)("h5",{id:"react-1"},"React:"),Object(n.b)("pre",null,Object(n.b)("code",d({parentName:"pre"},{className:"language-tsx"}),'/* Enabled */\n<TextArea\n  id="textarea"\n  label="Label"\n  placeholder="Placeholder"\n  helperText="Assistive text"\n  required\n/>\n\n/* Disabled */\n<TextArea\n  id="textarea"\n  label="Label"\n  defaultValue="Text input value"\n  helperText="Assistive text"\n  disabled\n/>\n\n/* Error */\n<TextArea\n  id="textarea"\n  label="Label"\n  defaultValue="Text input value"\n  helperText="Error text"\n  invalid\n/>\n')),Object(n.b)("h3",{id:"read-only"},"Read-only"),Object(n.b)("p",null,"Read-only text input is used to indicate an input among other inputs that cannot be edited. This is needed in situations where, for example, the information has been gathered from other source and filled automatically. Read-only fields should not be confused with disabled text fields. Disabled text fields are used when there is an action the user can make to activate the field. Read-only text fields will stay uneditable in the same view."),Object(n.b)(r.c,{__position:3,__code:'<TextInput\n  label="Label"\n  defaultValue="Read-only value"\n  helperText="Assistive text"\n  readOnly\n/>',__scope:(x={props:O,DefaultLayout:l.a,Playground:r.c,TextArea:i.TextArea,TextInput:i.TextInput,ColorBox:o.a,LargeParagraph:p.a,Text:b.a},x.DefaultLayout=l.a,x._frontmatter=c,x),mdxType:"Playground"},Object(n.b)(i.TextInput,{label:"Label",defaultValue:"Read-only value",helperText:"Assistive text",readOnly:!0,mdxType:"TextInput"})),Object(n.b)("h5",{id:"core-2"},"Core:"),Object(n.b)("pre",null,Object(n.b)("code",d({parentName:"pre"},{className:"language-html"}),'<div class="hds-text-input">\n  <label for="input" class="hds-text-input__label">\n    Label\n  </label>\n  <div class="hds-text-input__input-wrapper">\n    <input id="input" class="hds-text-input__input" type="text" value="Text input value" readonly />\n  </div>\n  <span class="hds-text-input__helper-text">Assistive text</span>\n</div>\n')),Object(n.b)("h5",{id:"react-2"},"React:"),Object(n.b)("pre",null,Object(n.b)("code",d({parentName:"pre"},{className:"language-tsx"}),'<TextInput\n  id="textarea"\n  label="Label"\n  defaultValue="Text input value"\n  helperText="Assistive text"\n  readOnly\n/>\n')),Object(n.b)("h3",{id:"with-tooltip"},"With tooltip"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"NOTE! This component is work in progress and is subject to change in the future versions of HDS!")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Text field tooltips are only available in hds-react!")),Object(n.b)("p",null,"Both text input and text area can be provided with additional tooltip. Tooltip information should be considered as extra information, for example, why this information is gathered or how is it used. The user should have sufficient information on how to fill the input field in label and assistive text."),Object(n.b)(r.c,{__position:4,__code:'<TextInput\n  id="input-tooltip"\n  label="Label"\n  placeholder="Placeholder"\n  tooltipLabel="Tooltip label"\n  tooltipText="Tooltip text"\n/>\n<TextArea\n  id="textarea-tooltip"\n  label="Label"\n  placeholder="Placeholder"\n  tooltipLabel="Tooltip label"\n  tooltipText="Tooltip text"\n  style={{ marginTop: \'var(--spacing-s)\' }}\n/>',__scope:(m={props:O,DefaultLayout:l.a,Playground:r.c,TextArea:i.TextArea,TextInput:i.TextInput,ColorBox:o.a,LargeParagraph:p.a,Text:b.a},m.DefaultLayout=l.a,m._frontmatter=c,m),mdxType:"Playground"},Object(n.b)(i.TextInput,{id:"input-tooltip",label:"Label",placeholder:"Placeholder",tooltipLabel:"Tooltip label",tooltipText:"Tooltip text",mdxType:"TextInput"}),Object(n.b)(i.TextArea,{id:"textarea-tooltip",label:"Label",placeholder:"Placeholder",tooltipLabel:"Tooltip label",tooltipText:"Tooltip text",style:{marginTop:"var(--spacing-s)"},mdxType:"TextArea"})),Object(n.b)("h5",{id:"react-3"},"React:"),Object(n.b)("pre",null,Object(n.b)("code",d({parentName:"pre"},{className:"language-tsx"}),'/* Text input */\n<TextInput\n  id="input"\n  label="Label"\n  placeholder="Placeholder"\n  tooltipLabel="Tooltip label"\n  tooltipText="Tooltip text"\n/>\n\n/* Text area */\n<TextArea\n  id="textarea"\n  label="Label"\n  placeholder="Placeholder"\n  tooltipLabel="Tooltip label"\n  tooltipText="Tooltip text"\n/>\n')),Object(n.b)("h2",{id:"demos--api"},"Demos & API"),Object(n.b)("h3",{id:"core-3"},"Core"),Object(n.b)("p",null,Object(n.b)("a",d({parentName:"p"},{href:"/storybook/core/?path=/story/text-input--default"}),"Text inputs in hds-core")),Object(n.b)("p",null,Object(n.b)("a",d({parentName:"p"},{href:"/storybook/core/?path=/story/textarea--default"}),"Text areas in hds-core")),Object(n.b)("h3",{id:"react-4"},"React"),Object(n.b)("p",null,Object(n.b)("a",d({parentName:"p"},{href:"/storybook/react/?path=/story/components-textinput--default"}),"Text inputs in hds-react")),Object(n.b)("p",null,Object(n.b)("a",d({parentName:"p"},{href:"/storybook/react/?path=/docs/components-textinput--default"}),"TextInput API")),Object(n.b)("p",null,Object(n.b)("a",d({parentName:"p"},{href:"/storybook/react/?path=/story/components-textarea--default"}),"Text areas in hds-react")),Object(n.b)("p",null,Object(n.b)("a",d({parentName:"p"},{href:"/storybook/react/?path=/docs/components-textarea--default"}),"TextArea API")),Object(n.b)("h2",{id:"tokens"},"Tokens"),Object(n.b)("pre",null,Object(n.b)("code",d({parentName:"pre"},{className:"language-css"}),'/* CSS */\n@import "hds-design-tokens/lib/color/component/text-input.css";\n/* SCSS */\n@import "hds-design-tokens/lib/color/component/text-input.scss";\n')),Object(n.b)("pre",null,Object(n.b)("code",d({parentName:"pre"},{className:"language-js"}),"// JS\nimport 'hds-design-tokens/lib/color/component/text-input.css';\n")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",d({parentName:"tr"},{align:null}),"CSS"),Object(n.b)("th",d({parentName:"tr"},{align:null}),"SASS"),Object(n.b)("th",d({parentName:"tr"},{align:null}),"Value"),Object(n.b)("th",d({parentName:"tr"},{align:null}),"Example"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"--color-background-text-input-default"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"$color-background-text-input-default"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"#ffffff"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)(o.a,{color:"var(--color-background-text-input-default)",mdxType:"ColorBox"}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"--color-background-text-input-disabled"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"$color-background-text-input-disabled"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"#e5e5e5"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)(o.a,{color:"var(--color-background-text-input-disabled)",mdxType:"ColorBox"}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"--color-border-text-input-default"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"$color-border-text-input-default"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"#808080"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)(o.a,{color:"var(--color-border-text-input-default)",mdxType:"ColorBox"}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"--color-border-text-input-hover"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"$color-border-text-input-hover"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"#1a1a1a"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)(o.a,{color:"var(--color-border-text-input-hover)",mdxType:"ColorBox"}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"--color-border-text-input-focus"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"$color-border-text-input-focus"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"#1a1a1a"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)(o.a,{color:"var(--color-border-text-input-focus)",mdxType:"ColorBox"}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"--color-border-text-input-invalid"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"$color-border-text-input-invalid"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"#b01038"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)(o.a,{color:"var(--color-border-text-input-invalid)",mdxType:"ColorBox"}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"--color-border-text-input-disabled"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"$color-border-text-input-disabled"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"#e5e5e5"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)(o.a,{color:"var(--color-border-text-input-disabled)",mdxType:"ColorBox"}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"--color-focus-outline-text-input-default"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"$color-focus-outline-text-input-default"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"#0072c6"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)(o.a,{color:"var(--color-focus-outline-text-input-default)",mdxType:"ColorBox"}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"--color-helper-text-input-default"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"$color-helper-text-input-default"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"#666666"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)(b.a,{color:"var(--color-helper-text-input-default)",mdxType:"Text"}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"--color-helper-text-input-invalid"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"$color-helper-text-input-invalid"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"#b01038"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)(b.a,{color:"var(--color-helper-text-input-invalid)",mdxType:"Text"}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"--color-icon-text-input-invalid"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"$color-icon-text-input-invalid"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"#b01038"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)(o.a,{color:"var(--color-icon-text-input-invalid)",mdxType:"ColorBox"}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"--color-input-text-input-default"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"$color-input-text-input-default"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"#1a1a1a"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)(b.a,{color:"var(--color-input-text-input-default)",mdxType:"Text"}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"--color-input-text-input-disabled"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"$color-input-text-input-disabled"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"#999898"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)(b.a,{color:"var(--color-input-text-input-disabled)",mdxType:"Text"}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"--color-label-text-input-default"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"$color-label-text-input-default"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"#1a1a1a"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)(b.a,{color:"var(--color-label-text-input-default)",mdxType:"Text"}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"--color-label-text-input-invalid"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"$color-label-text-input-invalid"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"#1a1a1a"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)(b.a,{color:"var(--color-label-text-input-invalid)",mdxType:"Text"}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",d({parentName:"tr"},{align:null}),"--color-placeholder-text-input-default"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"$color-placeholder-text-input-default"),Object(n.b)("td",d({parentName:"tr"},{align:null}),"#666666"),Object(n.b)("td",d({parentName:"tr"},{align:null}),Object(n.b)(b.a,{color:"var(--color-placeholder-text-input-default)",mdxType:"Text"}))))))}void 0!==x&&x&&x===Object(x)&&Object.isExtensible(x)&&!x.hasOwnProperty("__filemeta")&&Object.defineProperty(x,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/components/text_fields.mdx"}}),x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-components-text-fields-mdx-27b639ece77c38e4dbde.js.map