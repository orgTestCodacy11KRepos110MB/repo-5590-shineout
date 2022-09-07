(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[44],{2049:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),r=n(562),c=n(563),a=n(40),s=n(2050),l=n.n(s),m=n(2051),p=n.n(m),u=Object(a.b)(l.a,p.a),f=[{name:"1-top",isTs:!0,isTest:!1,title:Object(a.b)("基本 \n 附着在顶部 20px","Basic \n Sticky 20px to top"),component:n(2052).default,rawText:n(2053),parseTsText:n(2054)},{name:"2-element",isTs:!0,isTest:!1,title:Object(a.b)("指定元素 \n 附着在元素内","Element \n Sticky to element"),component:n(2055).default,rawText:n(2056),parseTsText:n(2057)},{name:"3-bottom",isTs:!0,isTest:!1,title:Object(a.b)("位置 \n 附着在底部","Position \n Sticky to bottom"),component:n(2058).default,rawText:n(2059),parseTsText:n(2060)},{name:"test-001-bottom",isTs:!0,isTest:!0,title:Object(a.b)("T:bottom \n ","T:bottom \n "),component:n(2061).default,rawText:n(2062),parseTsText:n(2063)}];e.default=Object(r.a)(function(t){return i.a.createElement(c.b,Object.assign({},t,{codes:void 0,source:u,examples:f}))})},2050:function(t,e){t.exports="# Sticky *附着*\n\n类似于 position: sticky，在屏幕滚动时，保持元素在屏幕可见区域内。\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| bottom | number | 无 | 距离底部多少偏移量触发 |\n| className | string | 无 | 扩展className |\n| style | object | 无 | 扩展样式。\b触发浮动后的默认zIndex为900，修改style的zIndex来改变。 |\n| target | string \\| HTMLElement | 无 | 附着的目标，默认为document.body。可以传入HTMLElement或者css selector，target 必须为 Sticky 组件的祖先节点 |\n| top | number | 无 | 距离顶部多少偏移量触发 |\n| css | bool | true | 在指定 target 下，是否采用css方式实现附着效果 |\n| onChange | (isSticky: boolean) => void | null | 吸附效果时，触发该回调 |\n"},2051:function(t,e){t.exports="# Sticky\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| bottom | number | - | Offsets from the bottom. |\n| className | string | - | Extend className |\n| style | object | - | Extend style. \bThe default z-Index after triggering the float is 900, and you can modify the z-Index of the style to change. |\n| target | string \\| HTMLElement | none | Attached target. the default is the document.body. You can pass in an HTMLElement or css selector, and the target must be an ancestor node of the Sticky component. |\n| top | number | none | Offsets from the top. |\n| css | bool | true | use css position:sticky while target is ordered |\n| onChange | (isSticky: boolean) => void | null | When the adsorption effect, trigger the callback |\n"},2052:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),r=n(305),c=n(123);e.default=function(){return i.a.createElement(r.a,{top:20},i.a.createElement(c.a,{onClose:!0},i.a.createElement("h3",null,"Some content."),"Sticky 20px to top."))}},2053:function(t,e){t.exports="/**\n * cn - 基本\n *    -- 附着在顶部 20px\n * en - Basic\n *    -- Sticky 20px to top\n */\nimport React from 'react'\nimport { Alert, Sticky } from 'shineout'\n\nconst App: React.FC = () => (\n  <Sticky top={20}>\n    <Alert onClose>\n      <h3>Some content.</h3>\n      Sticky 20px to top.\n    </Alert>\n  </Sticky>\n)\n\nexport default App\n"},2054:function(t,e){t.exports="/**\n * cn - 基本\n *    -- 附着在顶部 20px\n * en - Basic\n *    -- Sticky 20px to top\n */\nimport React from 'react';\nimport { Alert, Sticky } from 'shineout';\nconst App = () => (<Sticky top={20}>\n    <Alert onClose>\n      <h3>Some content.</h3>\n      Sticky 20px to top.\n    </Alert>\n  </Sticky>);\nexport default App;\n"},2055:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),r=n(305),c=n(123);e.default=function(){var t=Object(o.useRef)(null);return i.a.createElement("div",{id:"sticky_element",ref:t,style:{position:"relative",height:400,overflow:"auto"}},i.a.createElement("div",{style:{height:1600,background:"#f2f2f2"}},i.a.createElement("div",{style:{height:600}},"Some text."),i.a.createElement(r.a,{top:0,bottom:0,target:"#sticky_element"},i.a.createElement(c.a,{style:{marginBottom:0},type:"info"},"Sticky to element"))))}},2056:function(t,e){t.exports="/**\n * cn - 指定元素\n *    -- 附着在元素内\n * en - Element\n *    -- Sticky to element\n */\nimport React, { useRef } from 'react'\nimport { Alert, Sticky } from 'shineout'\n\nconst App: React.FC = () => {\n  const Element = useRef(null)\n\n  return (\n    <div id=\"sticky_element\" ref={Element} style={{ position: 'relative', height: 400, overflow: 'auto' }}>\n      <div style={{ height: 1600, background: '#f2f2f2' }}>\n        <div style={{ height: 600 }}>Some text.</div>\n        <Sticky top={0} bottom={0} target=\"#sticky_element\">\n          <Alert style={{ marginBottom: 0 }} type=\"info\">\n            Sticky to element\n          </Alert>\n        </Sticky>\n      </div>\n    </div>\n  )\n}\n\nexport default App\n"},2057:function(t,e){t.exports="/**\n * cn - 指定元素\n *    -- 附着在元素内\n * en - Element\n *    -- Sticky to element\n */\nimport React, { useRef } from 'react';\nimport { Alert, Sticky } from 'shineout';\nconst App = () => {\n    const Element = useRef(null);\n    return (<div id=\"sticky_element\" ref={Element} style={{ position: 'relative', height: 400, overflow: 'auto' }}>\n      <div style={{ height: 1600, background: '#f2f2f2' }}>\n        <div style={{ height: 600 }}>Some text.</div>\n        <Sticky top={0} bottom={0} target=\"#sticky_element\">\n          <Alert style={{ marginBottom: 0 }} type=\"info\">\n            Sticky to element\n          </Alert>\n        </Sticky>\n      </div>\n    </div>);\n};\nexport default App;\n"},2058:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),r=n(305),c=n(123);e.default=function(){return i.a.createElement(r.a,{bottom:0},i.a.createElement(c.a,{style:{marginBottom:0},onClose:!0},"Sticky at bottom."))}},2059:function(t,e){t.exports="/**\n * cn - 位置\n *    -- 附着在底部\n * en - Position\n *    -- Sticky to bottom\n */\nimport React from 'react'\nimport { Alert, Sticky } from 'shineout'\n\nconst App: React.FC = () => (\n  <Sticky bottom={0}>\n    <Alert style={{ marginBottom: 0 }} onClose>\n      Sticky at bottom.\n    </Alert>\n  </Sticky>\n)\n\nexport default App\n"},2060:function(t,e){t.exports="/**\n * cn - 位置\n *    -- 附着在底部\n * en - Position\n *    -- Sticky to bottom\n */\nimport React from 'react';\nimport { Alert, Sticky } from 'shineout';\nconst App = () => (<Sticky bottom={0}>\n    <Alert style={{ marginBottom: 0 }} onClose>\n      Sticky at bottom.\n    </Alert>\n  </Sticky>);\nexport default App;\n"},2061:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),r=n(305);e.default=function(){return i.a.createElement("div",{id:"target",style:{height:100,overflow:"auto"}},i.a.createElement(r.a,{className:"hello",target:"#target",bottom:20,top:0},i.a.createElement("div",{style:{height:400}},"Hello"),i.a.createElement("div",{style:{background:"#ebebeb",marginBottom:0}},"Hello")))}},2062:function(t,e){t.exports="/**\n * cn - T:bottom\n *    --\n * en - T:bottom\n *    --\n */\nimport React from 'react'\nimport { Sticky } from 'shineout'\n\nconst App: React.FC = () => (\n  <div id=\"target\" style={{ height: 100, overflow: 'auto' }}>\n    <Sticky className=\"hello\" target=\"#target\" bottom={20} top={0}>\n      <div style={{ height: 400 }}>Hello</div>\n      <div style={{ background: '#ebebeb', marginBottom: 0 }}>Hello</div>\n    </Sticky>\n  </div>\n)\nexport default App\n"},2063:function(t,e){t.exports="/**\n * cn - T:bottom\n *    --\n * en - T:bottom\n *    --\n */\nimport React from 'react';\nimport { Sticky } from 'shineout';\nconst App = () => (<div id=\"target\" style={{ height: 100, overflow: 'auto' }}>\n    <Sticky className=\"hello\" target=\"#target\" bottom={20} top={0}>\n      <div style={{ height: 400 }}>Hello</div>\n      <div style={{ background: '#ebebeb', marginBottom: 0 }}>Hello</div>\n    </Sticky>\n  </div>);\nexport default App;\n"}}]);