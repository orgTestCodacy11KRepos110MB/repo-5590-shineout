(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[43],{1553:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),c=n(557),i=n(559),a=n(40),l=n(1554),s=n.n(l),u=n(1555),m=n.n(u),f=Object(a.b)(s.a,m.a),p=[{name:"1-top",title:Object(a.b)("基本 \n 附着在顶部 20px","Basic \n Sticky 20px to top"),component:n(1556).default,rawText:n(1557)},{name:"2-element",title:Object(a.b)("指定元素 \n 附着在元素内","Element \n Sticky to element"),component:n(1558).default,rawText:n(1559)},{name:"3-bottom",title:Object(a.b)("位置 \n 附着在底部","Position \n Sticky to bottom"),component:n(1560).default,rawText:n(1561)}];e.default=Object(c.a)(function(t){return r.a.createElement(i.b,Object.assign({},t,{codes:void 0,source:f,examples:p}))})},1554:function(t,e){t.exports="# Sticky *附着*\n\n类似于 position: sticky，在屏幕滚动时，保持元素在屏幕可见区域内。\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| bottom | number | 无 | 距离底部多少偏移量触发 |\n| className | string | 无 | 扩展className |\n| style | object | 无 | 扩展样式。\b触发浮动后的默认zIndex为900，修改style的zIndex来改变。 |\n| target | string \\| HTMLElement | 无 | 附着的目标，默认为document.body。可以传入HTMLElement或者css selector，target 必须为 Sticky 组件的祖先节点 |\n| top | number | 无 | 距离顶部多少偏移量触发 |\n| css | bool | true | 在指定 target 下，是否采用css方式实现附着效果 |\n| onChange | (isSticky: boolean) => void | null | 吸附效果时，触发该回调 |\n"},1555:function(t,e){t.exports="# Sticky\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| bottom | number | - | Offsets from the bottom. |\n| className | string | - | Extend className |\n| style | object | - | Extend style. \bThe default z-Index after triggering the float is 900, and you can modify the z-Index of the style to change. |\n| target | string \\| HTMLElement | none | Attached target. the default is the document.body. You can pass in an HTMLElement or css selector, and the target must be an ancestor node of the Sticky component. |\n| top | number | none | Offsets from the top. |\n| css | bool | true | use css position:sticky while target is ordered |\n| onChange | (isSticky: boolean) => void | null | When the adsorption effect, trigger the callback |\n"},1556:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),c=n(301),i=n(119);e.default=function(){return r.a.createElement(c.a,{top:20},r.a.createElement(i.a,{onClose:!0},r.a.createElement("h3",null,"Some content."),"Sticky 20px to top."))}},1557:function(t,e){t.exports="/**\n * cn - 基本\n *    -- 附着在顶部 20px\n * en - Basic\n *    -- Sticky 20px to top\n */\nimport React from 'react'\nimport { Alert, Sticky } from 'shineout'\n\nexport default function() {\n  return (\n    <Sticky top={20}>\n      <Alert onClose>\n        <h3>Some content.</h3>\n        Sticky 20px to top.\n      </Alert>\n    </Sticky>\n  )\n}\n"},1558:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return p});var o=n(4),r=n(5),c=n(6),i=n(7),a=n(2),l=n(0),s=n.n(l),u=n(301),m=n(119);function f(o){return function(){var t,e=Object(a.a)(o);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=Object(a.a)(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return Object(i.a)(this,t)}}var p=function(t){Object(c.a)(n,t);var e=f(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.element.scrollTop=400}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"sticky_element",ref:function(t){e.element=t},style:{position:"relative",height:400,overflow:"auto"}},s.a.createElement("div",{style:{height:1600,background:"#f2f2f2"}},s.a.createElement("div",{style:{height:600}},"Some text."),s.a.createElement(u.a,{top:0,bottom:0,target:"#sticky_element"},s.a.createElement(m.a,{style:{marginBottom:0},type:"info"},"Sticky to element"))))}}]),n}(l.PureComponent)},1559:function(t,e){t.exports="/**\n * cn - 指定元素\n *    -- 附着在元素内\n * en - Element\n *    -- Sticky to element\n */\nimport React, { PureComponent } from 'react'\nimport { Alert, Sticky } from 'shineout'\n\nexport default class extends PureComponent {\n  componentDidMount() {\n    this.element.scrollTop = 400\n  }\n\n  render() {\n    return (\n      <div\n        id=\"sticky_element\"\n        ref={el => {\n          this.element = el\n        }}\n        style={{ position: 'relative', height: 400, overflow: 'auto' }}\n      >\n        <div style={{ height: 1600, background: '#f2f2f2' }}>\n          <div style={{ height: 600 }}>Some text.</div>\n          <Sticky top={0} bottom={0} target=\"#sticky_element\">\n            <Alert style={{ marginBottom: 0 }} type=\"info\">\n              Sticky to element\n            </Alert>\n          </Sticky>\n        </div>\n      </div>\n    )\n  }\n}\n"},1560:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),c=n(301),i=n(119);e.default=function(){return r.a.createElement(c.a,{bottom:0},r.a.createElement(i.a,{style:{marginBottom:0},onClose:!0},"Sticky at bottom."))}},1561:function(t,e){t.exports="/**\n * cn - 位置\n *    -- 附着在底部\n * en - Position\n *    -- Sticky to bottom\n */\nimport React from 'react'\nimport { Alert, Sticky } from 'shineout'\n\nexport default function() {\n  return (\n    <Sticky bottom={0}>\n      <Alert style={{ marginBottom: 0 }} onClose>\n        Sticky at bottom.\n      </Alert>\n    </Sticky>\n  )\n}\n"}}]);