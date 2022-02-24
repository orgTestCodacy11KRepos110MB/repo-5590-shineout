(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[12],{1503:function(e,t,n){"use strict";var s=n(26),a=n(4),i=n(5),r=n(6),d=n(3),o=n(24),l=n(7),c=n(1),u=n(13),h=n(0),g=n.n(h),p=n(10),v=n.n(p),m=n(16),b=n(19),f=n(157),y=n(2),k=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(d.a)(n).call(this,e))).handleNodeClick=t.handleNodeClick.bind(Object(c.a)(Object(c.a)(t))),t}return Object(l.a)(n,e),Object(i.a)(n,[{key:"handleNodeClick",value:function(e){var t=this.props.datum.getPath(e).path;this.props.onPathChange(e,null,t)}},{key:"renderClear",value:function(){var e=this.props,t=e.clearable,n=e.value,a=e.disabled,i=e.onClear,r=v()(Object(y.z)("indicator","close"),Object(y.g)("close"));return t&&0<n.length&&!a?g.a.createElement("a",{tabIndex:-1,className:r,onClick:i}):null}},{key:"renderPlaceholder",value:function(){return g.a.createElement("span",{key:"placeholder",className:v()(Object(y.p)("placeholder"),Object(y.z)("ellipsis"))},this.props.placeholder," ")}},{key:"renderResult",value:function(){var a=this,e=this.props,t=e.datum,i=e.value,n=e.renderItem,r=e.renderResult,d=e.compressed,o=i.map(function(e){return t.getDataById(e)}),l=r||n;if("string"==typeof l){var s=l;l=function(e){return e[s]}}var c=(d?o.slice(0,1):o).map(function(e,t){var n=e&&l(e,o);return n?g.a.createElement("a",{tabIndex:-1,className:Object(y.g)("item"),onClick:a.handleNodeClick.bind(a,i[t]),key:t},n):null});return d&&1<o.length&&c.push(g.a.createElement("a",{tabIndex:-1,key:c.length,className:Object(y.g)("item","item-compressed")},g.a.createElement("span",null,"+".concat(o.length-1)))),0===c.filter(function(e){return e}).length&&c.push(this.renderPlaceholder()),c}},{key:"render",value:function(){var e=this.props,t=e.style,n=0===e.value.length?this.renderPlaceholder():this.renderResult();return g.a.createElement("div",{className:Object(y.g)("result"),style:t},n,!this.props.multiple&&g.a.createElement("a",{tabIndex:-1,className:Object(y.z)("indicator","caret")}),this.renderClear())}}]),n}(h.PureComponent);k.defaultProps={value:[]};var j=k,O=n(505),C=n(50),x={marginRight:8,marginTop:-1,verticalAlign:"top"},w=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(d.a)(n).call(this,e))).state={loading:!1},t.handleClick=t.handleClick.bind(Object(c.a)(Object(c.a)(t))),t.handleChange=t.handleChange.bind(Object(c.a)(Object(c.a)(t))),t.handlePathChange=t.handlePathChange.bind(Object(c.a)(Object(c.a)(t))),t}return Object(l.a)(n,e),Object(i.a)(n,[{key:"checkDisabled",value:function(){var e=this.props,t=e.datum,n=e.id;return!!e.disabled||t.isDisabled(n)}},{key:"handleClick",value:function(){var e=this.props,t=e.id,n=e.data,a=e.path,i=e.onChange,r=e.onPathChange,d=e.loader,o=e.multiple,l=e.datum;r(t,n,a),o||i([].concat(Object(s.a)(a),[t]),l.getDataById(t)),d&&!this.state.loading&&(this.setState({loading:!0}),d(t,n))}},{key:"handlePathChange",value:function(){var e=this.props,t=e.id,n=e.data,a=e.path;(0,e.onPathChange)(t,n,a)}},{key:"handleChange",value:function(e,t){var n=this.props,a=n.datum,i=n.id,r=n.onChange;a.set(i,t?1:0),r(a.getValue(),a.getDataById(i))}},{key:"renderContent",value:function(){var e=this.props,t=e.id,n=e.active,a=e.data,i=e.renderItem;return("function"==typeof i?i:function(e){return e[i]})(a,n,t)}},{key:"render",value:function(){var e=this.props,t=e.active,n=e.data,a=e.multiple,i=e.datum,r=e.id,d=e.loader,o=e.expandTrigger,l=e.childrenKey,s=this.state.loading,c=this.checkDisabled(),u=n[l],h=Object(y.g)("node",t&&"active",c&&"disabled",u&&0<u.length&&"has-children",d&&!s&&void 0===u&&"may-be-children"),p={},m={};return c||"hover-only"===o&&u&&0!==u.length||(m.onClick=this.handleClick,p.cursor="pointer"),"hover"!==o&&"hover-only"!==o||(m.onMouseEnter=this.handlePathChange),g.a.createElement("div",Object.assign({className:h,style:p},m),a&&g.a.createElement(O.a,{checked:i.getChecked(r),disabled:c,onChange:this.handleChange,style:x}),this.renderContent(),s&&void 0===u&&g.a.createElement(C.a,{className:Object(y.g)("loading"),size:10,name:"ring"}))}}]),n}(m.b),I=n(28),R=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(d.a)(n).call(this,e))).state={},t.getText=t.getText.bind(Object(c.a)(Object(c.a)(t))),t}return Object(l.a)(n,e),Object(i.a)(n,[{key:"getKey",value:function(e,t){var n=this.props,a=n.keygen,i=n.parentId;return"function"==typeof a?a(e,i):a?e[a]:i+(i?",":"")+t}},{key:"getText",value:function(e){return this.props.text[e]||Object(I.a)(e)}},{key:"render",value:function(){var a=this,e=this.props,t=e.data,i=Object(u.a)(e,["data"]);return t&&0!==t.length?g.a.createElement("div",{className:Object(y.g)("list")},t.map(function(e,t){var n=a.getKey(e,t);return g.a.createElement(w,Object.assign({},i,{key:n,active:i.id===n,id:n,data:e}))})):g.a.createElement("span",{className:Object(y.g)("no-data")},this.getText("noData"))}}]),n}(h.Component);R.defaultProps={id:"",parentId:"",text:{}};var E=R,S=n(25),N=n(31),P=n(76),T=Object(P.a)(function(e){var t=e.focus,n=(e.getRef,Object(u.a)(e,["focus","getRef"]));return t?g.a.createElement("div",n):null}),D=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(d.a)(n).call(this,e))).state={focus:!1,path:[],position:"drop-down",listStyle:0===e.data.length?{height:"auto",width:"100%"}:{height:e.height}},t.datum=new f.a({data:e.data,loader:e.loader,keygen:e.keygen,mode:e.mode,onChange:e.onChange,value:e.value||e.defaultValue,disabled:"function"==typeof e.disabled?e.disabled:void 0,childrenKey:e.childrenKey}),t.isRendered=!1,t.selectId="select_".concat(Object(b.c)()),t.handleClick=t.handleState.bind(Object(c.a)(Object(c.a)(t)),!0),t.handleBlur=t.handleState.bind(Object(c.a)(Object(c.a)(t)),!1),t.handleFocus=t.handleFocus.bind(Object(c.a)(Object(c.a)(t))),t.handleKeyDown=t.handleKeyDown.bind(Object(c.a)(Object(c.a)(t))),t.handleClickAway=t.handleClickAway.bind(Object(c.a)(Object(c.a)(t))),t.handlePathChange=t.handlePathChange.bind(Object(c.a)(Object(c.a)(t))),t.handleClear=t.handleClear.bind(Object(c.a)(Object(c.a)(t))),t.shouldFocus=t.shouldFocus.bind(Object(c.a)(Object(c.a)(t))),t.bindRef=t.bindRef.bind(Object(c.a)(Object(c.a)(t))),t.resetPosition=t.resetPosition.bind(Object(c.a)(Object(c.a)(t))),t}return Object(l.a)(n,e),Object(i.a)(n,[{key:"componentDidUpdate",value:function(e){this.datum.mode=this.props.mode,e.value!==this.props.value&&this.datum.setValue(this.props.value||[]),e.data!==this.props.data&&this.datum.setData(this.props.data)}},{key:"componentWillUnmount",value:function(){Object(o.a)(Object(d.a)(n.prototype),"componentWillUnmount",this).call(this),this.clearClickAway()}},{key:"bindRef",value:function(e){this.ref=e}},{key:"bindClickAway",value:function(){document.addEventListener("mousedown",this.handleClickAway)}},{key:"clearClickAway",value:function(){document.removeEventListener("mousedown",this.handleClickAway)}},{key:"shouldFocus",value:function(e){return e.getAttribute("data-id")===this.selectId||!!Object(N.e)(e,".".concat(Object(y.g)("result")))}},{key:"handleClickAway",value:function(e){(function e(t,n){return t.getAttribute("data-id")===n||!!t.parentElement&&e(t.parentElement,n)})(e.target,this.selectId)||(this.clearClickAway(),this.props.onBlur(),this.handleState(!1))}},{key:"handlePathChange",value:function(e,t,n){var a=this;setTimeout(function(){a.setState({path:[].concat(Object(s.a)(n),[e])})},50)}},{key:"handleFocus",value:function(e){this.shouldFocus(e.target)&&(this.props.onFocus(e),this.bindClickAway())}},{key:"handleClear",value:function(){var e=this,t=this.props,n=t.mode,a=t.onChange;void 0===n?this.setState({path:[]}):this.datum.setValue([]),a([]),setTimeout(function(){return e.handleState(!1)},10)}},{key:"handleState",value:function(e,t){if(!0!==this.props.disabled&&e!==this.state.focus&&!(e&&t&&t.target.classList.contains(Object(y.g)("close")))){var n=this.props.height,a=this.props.position;if(!a)S.b.height<n+this.element.getBoundingClientRect().bottom&&(a="drop-up");this.setState({focus:e,position:a||"drop-down"}),e&&(this.renderPending=!1,this.bindClickAway())}}},{key:"handleKeyDown",value:function(e){13===e.keyCode&&(e.preventDefault(),this.handleState(!this.state.focus)),9===e.keyCode&&(this.props.onBlur(),this.state.focus?this.handleState(!1):this.clearClickAway())}},{key:"resetPosition",value:function(){if(this.ref){var e=this.state.listStyle,t=this.props,n=t.data,a=t.height,i=this.ref.getBoundingClientRect().width,r=this.ref.parentElement.getBoundingClientRect().left;if(0!==n.length)if("100%"===e.width&&this.setState({listStyle:{height:a}}),r+i>S.b.width){if("auto"===e.left)return;this.setState({listStyle:{height:a,left:"auto",right:0}})}else{if(void 0===e.right)return;this.setState({listStyle:{height:a}})}else{if("auto"===e.height)return;this.setState({listStyle:{height:"auto",width:"100%"}})}}}},{key:"renderList",value:function(){var a=this,e=this.props,t=e.data,n=e.keygen,i=e.renderItem,r=e.mode,d=e.onChange,o=e.loader,l=e.onItemClick,s=e.expandTrigger,c=e.childrenKey,u=this.state,h=u.path,p=u.listStyle,m={datum:this.datum,renderItem:i,keygen:n,loader:o,onPathChange:this.handlePathChange,onChange:d,onItemClick:l,multiple:void 0!==r,expandTrigger:s,childrenKey:c},b=v()(Object(y.z)("options"),Object(y.g)("options")),f=t;return setTimeout(function(){a.resetPosition()}),g.a.createElement("div",{className:b,ref:this.bindRef,style:p},g.a.createElement(E,Object.assign({},m,{key:"root",data:f,id:h[0],parentId:"",path:[]})),h.map(function(t,n){return(f=f&&f.find(function(e){return a.datum.getKey(e,h[n-1])===t}))&&f[c]&&0<f[c].length?(f=f[c],g.a.createElement(E,Object.assign({},m,{key:t,data:f,id:h[n+1],parentId:h[n],path:h.slice(0,n+1)}))):null}))}},{key:"renderAbsoluteList",value:function(){var e=this.props,t=e.absolute,n=e.zIndex,a=this.state,i=a.focus,r=a.position,d=v()(Object(y.g)(i&&"focus"),Object(y.z)(this.state.position));return i||this.isRendered?(this.isRendered=!0,g.a.createElement(T,{rootClass:d,position:r,absolute:t,focus:i,parentElement:this.element,"data-id":this.selectId,zIndex:n,fixed:"min"},this.renderList())):null}},{key:"render",value:function(){var t=this,e=this.props,n=e.placeholder,a=e.disabled,i=e.size,r=Object(u.a)(e,["placeholder","disabled","size"]),d=v()(Object(y.g)("_",i,this.state.focus&&"focus",void 0!==r.mode&&"multiple",!0===a&&"disabled"),Object(y.z)(this.state.position));return g.a.createElement("div",{tabIndex:!0===a?-1:0,className:d,onFocus:this.handleFocus,onClick:this.handleClick,"data-id":this.selectId,onKeyDown:this.handleKeyDown,ref:function(e){t.element=e}},g.a.createElement(j,Object.assign({},r,{multiple:void 0!==r.mode,datum:this.datum,placeholder:n,onClear:this.handleClear,onPathChange:this.handlePathChange})),this.renderAbsoluteList())}}]),n}(m.b);D.defaultProps={clearable:!0,expandTrigger:"click",height:300,data:[],childrenKey:"children"};var A=D,K=n(49),M=n(68),U=n(22),W=Object(U.a)(K.a,Object(M.a)({className:Object(y.z)("_"),tag:"span"}))(A);W.displayName="ShineoutCascader";t.a=W},495:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return l});var a=n(0),i=n.n(a),r=n(34),d=n.n(r)()(),o=d.Provider,l=function(n){return function(t){return i.a.createElement(d.Consumer,null,function(e){return i.a.createElement(n,Object.assign({},t,e))})}}},505:function(e,t,n){"use strict";var a=n(49),i=n(22),l=n(75),r=n(67),d=n(4),o=n(5),s=n(6),c=n(3),u=n(24),h=n(7),p=n(1),m=n(0),b=n.n(m),f=n(10),g=n.n(f),v=n(16),y=n(19),k=n(9),j=n(495),O=n(2),C=function(e){function n(e){var t;return Object(d.a)(this,n),(t=Object(s.a)(this,Object(c.a)(n).call(this,e))).handleClick=t.handleClick.bind(Object(p.a)(Object(p.a)(t))),t.handleUpdate=t.handleUpdate.bind(Object(p.a)(Object(p.a)(t))),t.handleRawChange=t.handleRawChange.bind(Object(p.a)(Object(p.a)(t))),t}return Object(h.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){Object(u.a)(Object(c.a)(n.prototype),"componentDidMount",this).call(this),this.props.datum.subscribe(k.a,this.handleUpdate)}},{key:"componentWillUnmount",value:function(){Object(u.a)(Object(c.a)(n.prototype),"componentWillUnmount",this).call(this),this.props.datum.unsubscribe(k.a,this.handleUpdate)}},{key:"getContent",value:function(e){var t=this.props.renderItem;return"string"==typeof t?e[t]:"function"==typeof t?t(e):""}},{key:"handleUpdate",value:function(){this.forceUpdate()}},{key:"handleClick",value:function(e,t,n){var a=this.props,i=a.data,r=a.datum;t?r.add(i[n]):r.remove(i[n])}},{key:"handleRawChange",value:function(e,t){var n=this.props.datum;t?n.add(e):n.remove(e)}},{key:"render",value:function(){var n=this,e=this.props,t=e.block,a=e.data,i=e.datum,r=e.keygen,d=e.children,o=g()(Object(O.h)("group",t&&"block"),this.props.className);return void 0===a?b.a.createElement("div",{className:o},b.a.createElement(j.a,{value:{onRawChange:this.handleRawChange,checked:i.check.bind(i)}},d)):b.a.createElement("div",{className:o},a.map(function(e,t){return b.a.createElement(l.a,{checked:i.check(e),disabled:i.disabled(e),key:Object(y.b)(e,r,t),htmlValue:t,index:t,onChange:n.handleClick},n.getContent(e))}),d)}}]),n}(v.b);C.defaultProps={renderItem:function(e){return e}};var x=C,w=Object(i.a)(a.a,j.b)(l.a);w.Group=Object(i.a)(a.a,r.a.hoc({bindProps:["disabled","format","prediction","separator"]}))(x),w.Checkbox=l.a,w.displayName="ShineoutCheckbox",w.Group.displayName="ShineoutCheckboxGroup";t.a=w},517:function(e,t,n){"use strict";var a=n(22),i=n(49),r=n(67),c=n(495),d=n(4),o=n(5),l=n(6),s=n(3),u=n(24),h=n(7),p=n(1),m=n(0),b=n.n(m),f=n(10),g=n.n(f),v=n(16),y=n(19),k=n(9),j=n(2),O=n(147),C=function(e){function n(e){var t;return Object(d.a)(this,n),(t=Object(l.a)(this,Object(s.a)(n).call(this,e))).handleClick=t.handleClick.bind(Object(p.a)(Object(p.a)(t))),t.handleUpdate=t.forceUpdate.bind(Object(p.a)(Object(p.a)(t))),t.handleRawChange=t.handleRawChange.bind(Object(p.a)(Object(p.a)(t))),t}return Object(h.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){Object(u.a)(Object(s.a)(n.prototype),"componentDidMount",this).call(this),this.props.datum.subscribe(k.a,this.handleUpdate)}},{key:"componentWillUnmount",value:function(){Object(u.a)(Object(s.a)(n.prototype),"componentWillUnmount",this).call(this),this.props.datum.unsubscribe(k.a,this.handleUpdate)}},{key:"getContent",value:function(e){var t=this.props.renderItem;return"string"==typeof t?e[t]:"function"==typeof t?t(e):""}},{key:"handleClick",value:function(e,t,n){var a=this.props,i=a.data;a.datum.set(i[n])}},{key:"handleRawChange",value:function(e){this.props.datum.set(e)}},{key:"render",value:function(){var n=this,e=this.props,t=e.block,a=e.data,i=e.datum,r=e.keygen,d=e.children,o=e.button,l=e.size,s=g()(Object(j.h)("group",t&&"block",o&&"button","outline"===o&&"outline",o&&l),this.props.className);return void 0===a?b.a.createElement("div",{className:s},b.a.createElement(c.a,{value:{onRawChange:this.handleRawChange,checked:i.check.bind(i)}},d)):b.a.createElement("div",{className:s},a.map(function(e,t){return b.a.createElement(O.a,{checked:i.check(e),disabled:i.disabled(e),key:Object(y.b)(e,r,t),htmlValue:t,index:t,onChange:n.handleClick},n.getContent(e))}),d)}}]),n}(v.b);C.defaultProps={renderItem:function(e){return e}};var x=C,w=Object(c.b)(O.a);w.Group=Object(a.a)(i.a,r.a.hoc({limit:1,bindProps:["disabled","format","prediction"]}))(x),w.displayName="ShineoutRadio",w.Group.displayName="ShineoutRadioGroup";t.a=w},729:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(493),d=n(494),o=n(39),l=n(730),s=n.n(l),c=n(731),u=n.n(c),h=Object(o.b)(s.a,u.a),p=[{name:"01-base",title:Object(o.b)("基本用法 \n 基础的级联用法","Base \n Basic usage of Cascader"),component:n(732).default,rawText:n(733)},{name:"02-multiple",title:Object(o.b)("多选 \n 设置 mode 属性，使组件变为多选，mode 可选值如下 \n 0: 只返回完全选中的节点，包含父节点 \n 1: 返回全部选中的节点和半选中的父节点 \n 2: 只返回选中的子节点 \n 3: 如果父节点选中，只返回父节点","Multiple \n Set the mode property change the component to multiple select \n 0: Return only the fully selected node, including the parent node. \n 1: Return the fully selected nodes and semi-selected parent nodes. \n 2: Return only the selected child node. \n 3: Return only the parent node, if the parent node is selected."),component:n(734).default,rawText:n(735)},{name:"03-hover",title:Object(o.b)("移入展开 \n 设置 expandTrigger 为 'hover' 或 'hover-only', 可以在鼠标移入节点时展开，默认为 'click' \n 如果值为 'hover-only'，父节点只能 hover 触发展开, 只有子节点可以点击选择值","Hover \n Set expandTrigger to 'hover' or 'hover-only', expand the node when mouse hover, default value is 'click'."),component:n(736).default,rawText:n(737)},{name:"04-disabled",title:Object(o.b)("禁用 \n disabled 为函数时，根据返回结果禁用节点，同时禁用子节点 \n disabled 为 true 时，禁用全部节点","disabled \n When the disabled property is a function, disable the node and its child nodes according to the returned result. \n When the disabled property is true, disable all nodes."),component:n(738).default,rawText:n(739)},{name:"05-lazyload",title:Object(o.b)("动态加载 \n 数据过大，需要动态加载时，可以设置 loader 函数，当展开未定义 children（undefined）的节点时，触发此函数","Lazy load \n Set the loader function to dynamic fetch data. This function is triggered when the undefined child node is expanded."),component:n(740).default,rawText:n(741)}];t.default=Object(r.a)(function(e){return i.a.createElement(d.b,Object.assign({},e,{codes:void 0,source:h,examples:p}))})},730:function(e,t){e.exports="# Cascader *级联选择*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | 无 | 扩展className |\n| clearable | boolean | true | 是否显示清除数据图标 |\n| data | any[] | [] | 数据，子节点为children，如果 children 值为 null 或 长度为 0 时，视为叶子节点 |\n| defaultValue | any[] | 无 | 默认选中的 key （非受控） | \n| disabled | (data: any) => boolean \\| boolean | false | 显示选择框时有效，为 true 时，所有节点禁用选择，为函数时，根据函数返回结果确定是否禁用 |\n| expandTrigger | 'click' \\| 'hover' \\| 'hover-only' | 'click' | 节点展开触发方式 |\n| keygen | (data: any, parentKey: any) => string \\| string  | 必填 | 生成key的辅助方法<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d) => d.id |\n| loader | (key: any, data: any) => void | 无 | 设置loader属性后，未定义children的节点视为动态加载节点，点击展开触发 loader事件，children 为 null 或者长度为 0 视为叶子节点 |\n| mode | 0 \\| 1 \\| 2 \\| 3 | 无 | 选中值模式，未设置值为单选<br />0: 只返回完全选中的节点，包含父节点<br />1: 返回全部选中的节点和半选中的父节点<br />2: 只返回选中的子节点<br />3: 如果父节点选中，只返回父节点 |\n| onChange | (value: any[], selected: boolean) => void | 无 | 设置 onChange 属性时，显示 选择框。参数为当前选中值，和 mode 属性相关 |\n| renderItem | (data: any) => ReactNode \\| string | 必填 | 为 string 时，返回 d\\[string]<br />为 function 时，返回函数结果 |\n| renderResult | (data: any, result: any[]) => ReactNode \\| string | renderItem | 选中后在结果中显示的内容，默认和 renderItem 相同。返回 null 则不展示，result 为当前选中的所有值。 |\n| value | any[] | 无 | 选中的 key （受控） | \n| absolute | boolean | false | 为 true 时，选项弹出层在 DOM 中独立 render |\n| compressed | boolean | false | 将选中值合并 |\n| childrenKey | string | 'children' | 指定子数据的属性名 | \n"},731:function(e,t){e.exports="# Cascader\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| className | string | - | Extend className |\n| clearable | boolean | false | If clearable is true, show clear value icon |\n| data | any[] | [] | data. The child node is children. If the children value is null or its length is 0, it is render as a leaf node. |\n| disabled | (data: any) => boolean \\| boolean | false | When it is true, all nodes disable the selection; when it is a function, it determines whether it is disabled according to the return result of the function. |\n| expandTrigger | 'click' \\| 'hover' \\| 'hover-only'  | 'click' | Expand mode |\n| keygen | (data: any, parentKey: any) => string \\| string | required | Auxiliary method for generating key. <br />When it is a function, use the return value of this function. <br /> When it is a string, use the data value corresponding to this string. For example, 'id' is the same thing as (d) => d.id. |\n| loader | (key: any, data: any) => void | - | If the loader attribute is a function, the node with no children is regarded as dynamically loaded node. Click expanded button to trigger the loader event. The children property is null or its length is 0 will be regarded as a leaf node. |\n| mode | 0 \\| 1 \\| 2 \\| 3 | none | mode <br />0: Returns only the fully selected node including the parent node. <br />1: Returns all selected nodes and semi-selected nodes. <br />2: Return only the selected child nodes. <br />3: If the parent node is full selected, only return the parent node. |\n| onChange | (value: any[], selected: boolean) => void | - | When the onChange property is set, the selection box is displayed. The parameter is the current selected value, which is related to the mode property. |\n| renderItem | (data: any) => ReactNode \\| string | required | When it is a string, return d\\[string].<br /> When it is a function, return the result of this function. |\n| renderResult | (data: any, result: any[]) => ReactNode \\| string | renderItem | The content displayed in the result after selecting, if not set, use renderItem. not show while return null, result is current selected |\n| defaultValue | any[] | - | Default selected key (not controlled) | \n| value | any[] | - | Selected key (controlled) |\n| absolute | boolean | false | When it is true, the pop-up layer of option append into document.body. |\n| compressed | boolean | false | Merges selected values |\n| childrenKey | string | 'children' | the key of the children data name | \n"},732:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(1503),d=[{value:"jiangsu",children:[{value:"nanjing",children:[{value:"jiangning"}]}]},{value:"anhui",children:[{value:"hefei",children:[{value:"feidong"}]}]}];t.default=function(){return i.a.createElement(r.a,{data:d,absolute:!0,keygen:"value",renderItem:function(e){return"".concat(e.value)}})}},733:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- 基础的级联用法\n * en - Base\n *   -- Basic usage of Cascader\n */\n\nimport React from 'react'\nimport { Cascader } from 'shineout'\n\nconst data = [\n  {\n    value: 'jiangsu',\n    children: [\n      {\n        value: 'nanjing',\n        children: [\n          {\n            value: 'jiangning',\n          },\n        ],\n      },\n    ],\n  },\n  {\n    value: 'anhui',\n    children: [\n      {\n        value: 'hefei',\n        children: [\n          {\n            value: 'feidong',\n          },\n        ],\n      },\n    ],\n  },\n]\n\nexport default function() {\n  return <Cascader data={data} absolute keygen=\"value\" renderItem={n => `${n.value}`} />\n}\n"},734:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var i=n(4),r=n(5),d=n(6),o=n(3),l=n(7),s=n(23),a=n(0),c=n.n(a),u=n(517),h=n(1503),p=n(499),m=[{value:0,text:"mode=0 (full)"},{value:1,text:"mode=1 (half)"},{value:2,text:"mode=2 (child only)"},{value:3,text:"mode=3 (shallow)"}];var b=function(e){function a(e){var t;Object(i.a)(this,a),(t=Object(d.a)(this,Object(o.a)(a).call(this,e))).handleChange=function(e){t.setState({value:e})},t.handleModeChange=function(e){t.setState({mode:e,value:[]})},t.renderItem=function(e){return"node ".concat(e.id)};var n=[];return function e(t,n){var a=Object(s.a)(t,1)[0];a&&(n.push(a.id),a.children&&e(a.children,n))}(p.b,n),t.state={mode:1,value:n},t}return Object(l.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.mode,n=e.value;return c.a.createElement("div",null,c.a.createElement(u.a.Group,{keygen:"value",value:t,format:"value",onChange:this.handleModeChange,data:m,renderItem:"text"}),c.a.createElement("br",null),c.a.createElement(h.a,{data:p.b,keygen:"id",mode:t,onChange:this.handleChange,renderItem:this.renderItem,value:n}))}}]),a}(c.a.Component)},735:function(e,t){e.exports="/**\n * cn - 多选\n *    -- 设置 mode 属性，使组件变为多选，mode 可选值如下\n *    -- 0: 只返回完全选中的节点，包含父节点\n *    -- 1: 返回全部选中的节点和半选中的父节点\n *    -- 2: 只返回选中的子节点\n *    -- 3: 如果父节点选中，只返回父节点\n * en - Multiple\n *   -- Set the mode property change the component to multiple select\n *    -- 0: Return only the fully selected node, including the parent node.\n *    -- 1: Return the fully selected nodes and semi-selected parent nodes.\n *    -- 2: Return only the selected child node.\n *    -- 3: Return only the parent node, if the parent node is selected.\n */\n\nimport React from 'react'\nimport { Cascader, Radio } from 'shineout'\nimport { cascader as data } from 'doc/data/tree'\n\nconst modeList = [\n  { value: 0, text: 'mode=0 (full)' },\n  { value: 1, text: 'mode=1 (half)' },\n  { value: 2, text: 'mode=2 (child only)' },\n  { value: 3, text: 'mode=3 (shallow)' },\n]\n\nfunction getValue(list, value) {\n  const [node] = list\n  if (!node) return\n  value.push(node.id)\n  if (node.children) getValue(node.children, value)\n}\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n\n    const value = []\n    getValue(data, value)\n\n    this.state = { mode: 1, value }\n  }\n\n  handleChange = value => {\n    this.setState({ value })\n  }\n\n  handleModeChange = mode => {\n    this.setState({ mode, value: [] })\n  }\n\n  renderItem = node => `node ${node.id}`\n\n  render() {\n    const { mode, value } = this.state\n\n    return (\n      <div>\n        <Radio.Group\n          keygen=\"value\"\n          value={mode}\n          format=\"value\"\n          onChange={this.handleModeChange}\n          data={modeList}\n          renderItem=\"text\"\n        />\n\n        <br />\n\n        <Cascader\n          data={data}\n          keygen=\"id\"\n          mode={mode}\n          onChange={this.handleChange}\n          renderItem={this.renderItem}\n          value={value}\n        />\n      </div>\n    )\n  }\n}\n"},736:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(1503),d=n(499);t.default=function(){return i.a.createElement(r.a,{data:d.b,keygen:"id",expandTrigger:"hover-only",renderItem:function(e){return"node ".concat(e.text)},renderResult:function(e){return e.children&&0<e.children.length?"":e.text},style:{width:300}})}},737:function(e,t){e.exports="/**\n * cn - 移入展开\n *    -- 设置 expandTrigger 为 'hover' 或 'hover-only', 可以在鼠标移入节点时展开，默认为 'click'\n *    -- 如果值为 'hover-only'，父节点只能 hover 触发展开, 只有子节点可以点击选择值\n * en - Hover\n *    -- Set expandTrigger to 'hover' or 'hover-only', expand the node when mouse hover, default value is 'click'.\n */\n\nimport React from 'react'\nimport { Cascader } from 'shineout'\nimport { cascader as data } from 'doc/data/tree'\n\nexport default function() {\n  return (\n    <Cascader\n      data={data}\n      keygen=\"id\"\n      expandTrigger=\"hover-only\"\n      renderItem={n => `node ${n.text}`}\n      renderResult={n => (n.children && n.children.length > 0 ? '' : n.text)}\n      style={{ width: 300 }}\n    />\n  )\n}\n"},738:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(1503),d=n(499),o=function(e){return"1-0"===e.id||"2"===e.id};t.default=function(){return i.a.createElement(r.a,{data:d.b,keygen:"id",disabled:o,mode:2,renderItem:function(e){return"node ".concat(e.text)}})}},739:function(e,t){e.exports="/**\n * cn - 禁用\n *    -- disabled 为函数时，根据返回结果禁用节点，同时禁用子节点\n *    -- disabled 为 true 时，禁用全部节点\n * en - disabled\n *    -- When the disabled property is a function, disable the node and its child nodes according to the returned result.\n *    -- When the disabled property is true, disable all nodes.\n */\n\nimport React from 'react'\nimport { Cascader } from 'shineout'\nimport { cascader as data } from 'doc/data/tree'\n\nconst isDisabled = d => d.id === '1-0' || d.id === '2'\n\nexport default function() {\n  return <Cascader data={data} keygen=\"id\" disabled={isDisabled} mode={2} renderItem={n => `node ${n.text}`} />\n}\n"},740:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var i=n(26),a=n(4),r=n(5),d=n(6),o=n(3),l=n(7),s=n(0),c=n.n(s),u=n(41),h=n(1503),p=["0","1","2","3","4","5","6","7","8"].map(function(e){return{id:e}}),m=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(d.a)(this,Object(o.a)(n).call(this,e))).loader=function(e){var a=e.split(",");setTimeout(function(){t.setState(Object(u.a)(function(e){var n=e.data;a.forEach(function(t,e){n=n.find(function(e){return e.id===t}),e<a.length-1&&(n=n.children)}),n.children=Object(i.a)(Array.from({length:Math.round(4*Math.random())},function(e,t){return t}).map(function(e){return{id:"".concat(n.id,"-").concat(e)}}))}))},500)},t.keyGenerator=function(e,t){return"".concat(t,",").concat(e.id).replace(/^,/,"")},t.handleChange=function(e){return t.setState({value:e})},t.renderItem=function(e){return"node ".concat(e.id)},t.state={data:p,value:[]},t}return Object(l.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement(h.a,{data:this.state.data,keygen:this.keyGenerator,loader:this.loader,renderItem:this.renderItem,onChange:this.handleChange,value:this.state.value})}}]),n}(s.Component)},741:function(e,t){e.exports="/**\n * cn - 动态加载\n *    -- 数据过大，需要动态加载时，可以设置 loader 函数，当展开未定义 children（undefined）的节点时，触发此函数\n * en - Lazy load\n *    -- Set the loader function to dynamic fetch data. This function is triggered when the undefined child node is expanded.\n */\nimport React, { Component } from 'react'\nimport immer from 'immer'\nimport { Cascader } from 'shineout'\n\nconst initData = ['0', '1', '2', '3', '4', '5', '6', '7', '8'].map(i => ({ id: i }))\nconst createRange = () => Array.from({ length: Math.round(Math.random() * 4) }, (_, i) => i)\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { data: initData, value: [] }\n  }\n\n  loader = key => {\n    const path = key.split(',')\n\n    setTimeout(() => {\n      this.setState(\n        immer(draft => {\n          let { data } = draft\n          path.forEach((pid, i) => {\n            data = data.find(d => d.id === pid)\n            if (i < path.length - 1) data = data.children\n          })\n          data.children = [...createRange().map(i => ({ id: `${data.id}-${i}` }))]\n        })\n      )\n    }, 500)\n  }\n\n  keyGenerator = (node, parentKey) => `${parentKey},${node.id}`.replace(/^,/, '')\n\n  handleChange = value => this.setState({ value })\n\n  renderItem = node => `node ${node.id}`\n\n  render() {\n    return (\n      <Cascader\n        data={this.state.data}\n        keygen={this.keyGenerator}\n        loader={this.loader}\n        renderItem={this.renderItem}\n        onChange={this.handleChange}\n        value={this.state.value}\n      />\n    )\n  }\n}\n"}}]);