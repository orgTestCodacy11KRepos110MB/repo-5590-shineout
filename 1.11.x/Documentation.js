(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[19],{2194:function(t,e,n){"use strict";n.r(e);var i=n(27),o=n(563),a=n(585),r=[],s=["API",{name:"Props",cn:"约定",level:2,component:Object(o.a)(function(){return n.e(56).then(n.t.bind(null,2185,7))},!0)},{name:"Classname",level:2,component:Object(o.a)(function(){return n.e(55).then(n.t.bind(null,2186,7))},!0)},"CHANGELOG"].concat(Object(i.a)(["1.x.x"].map(function(t){return{name:t,level:2,component:Object(o.a)(function(){return n(689)("./".concat(t,".md"))},!0)}})),Object(i.a)(r.map(function(t){return{name:"".concat(t,"-rc"),level:2,component:Object(o.a)(function(){return n(690)("./".concat(t,".md"))},!0)}})));e.default=Object(a.a)(s)},305:function(t,e,n){"use strict";var i=n(13),l=n(28),o=n(4),a=n(5),r=n(1),s=n(21),c=n(6),h=n(7),u=n(2),d=n(0),m=n.n(d),p=n(17),P=n(25),f=n(80),b=n(29),v=n(20),x=n(32),g=n(581);function y(i){return function(){var t,e=Object(u.a)(i);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=Object(u.a)(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return Object(h.a)(this,t)}}var O=["scroll","pageshow","load"],C=Object(P.cssSupport)("position","sticky"),w=function(t){Object(c.a)(i,t);var n=y(i);function i(t){var e;return Object(o.a)(this,i),(e=n.call(this,t)).state={},e.bindElement=e.bindElement.bind(Object(r.a)(e)),e.bindOrigin=e.bindOrigin.bind(Object(r.a)(e)),e.bindPlaceholder=e.bindPlaceholder.bind(Object(r.a)(e)),e.handlePosition=e.handlePosition.bind(Object(r.a)(e)),e.style={},e}return Object(a.a)(i,[{key:"componentDidMount",value:function(){Object(s.a)(Object(u.a)(i.prototype),"componentDidMount",this).call(this);var t=this.props.target;this.targetElement=Object(P.getParent)(this.element,t),this.handlePosition(),this.bindScroll()}},{key:"componentDidUpdate",value:function(t){!t.needResetPostion&&this.props.needResetPostion&&this.setPosition()}},{key:"componentWillUnmount",value:function(){Object(s.a)(Object(u.a)(i.prototype),"componentWillUnmount",this).call(this),this.unbindScroll(),this.scrollTimer&&clearTimeout(this.scrollTimer)}},{key:"getStyle",value:function(t,e,n,i){var o,a=this.props.style.zIndex,r=void 0===a?900:a,s=this.props.css,c=(o={position:"fixed",left:n,width:i},Object(l.a)(o,t,e),Object(l.a)(o,"zIndex",r),o);return this.targetElement&&(C&&s?c.position="sticky":(c.position="absolute",c.transform="translateY(".concat("top"===t?e+this.targetElement.scrollTop:this.targetElement.scrollTop,"px)"),delete c.left)),this.triggerChange(!0,c),c}},{key:"setPosition",value:function(){var t=this.props,e=t.bottom,n=t.top,i=t.target,o=t.css,a=t.needResetPostion,r=this.state,s=r.mode,c=r.scrollWidth;if(!1!==a){var l=Object(P.copyBoundingClientRect)(this.element),h=getComputedStyle(this.element),u=h.marginBottom,d=h.marginTop;l.height+=parseFloat(u)+parseFloat(d);var m=this.targetElement||document.body,p=m.getBoundingClientRect(),f=this.placeholder?Object(P.copyBoundingClientRect)(this.placeholder):null,b=x.docSize.height;if(this.origin){var v=this.origin.getBoundingClientRect().width;l.width=v,f&&(f.width=v)}var g,y,O={width:l.width,height:i&&C&&o?0:l.height},w=n,E=b-e;if(this.targetElement){var j=getComputedStyle(m),k=j.paddingTop,S=j.paddingBottom;w+=p.top+parseInt(k,10),E=p.bottom-e-parseInt(S,10)}void 0!==n&&"bottom"!==s&&(Math.ceil(l.top)<w?(this.setState({scrollWidth:p.width,mode:"top"}),g=this.getStyle("top",n,l.left,l.width),y=O):f&&l.top<f.top?(p.width!==l.width&&(g=this.getStyle("top",n,l.left,p.width)),i&&l.top===w||(this.setState({mode:""}),g={},y=null,this.triggerChange(!1,g))):this.targetElement&&f?(g=this.getStyle("top",n,l.left,l.width),y=O):c&&f&&c!==p.width&&(this.setState({scrollWidth:p.width,mode:"top"}),g=this.getStyle("top",n,f.left,f.width),y=O)),void 0!==e&&"top"!==s&&(l.bottom>E?(this.setState({scrollWidth:p.width,mode:"bottom"}),g=this.getStyle("bottom",e,l.left,l.width),y=O):f&&(this.targetElement?p.bottom:l.bottom)>f.bottom?(p.width!==l.width&&(g=this.getStyle("bottom",e,l.left,p.width)),i&&l.bottom===E||(this.setState({mode:""}),g={},y=null,this.triggerChange(!1,g))):this.targetElement&&f?(g=this.getStyle("bottom",e,l.left,l.width),y=O):c&&f&&c!==p.width&&(this.setState({scrollWidth:p.width,mode:"bottom"}),g=this.getStyle("bottom",e,f.left,f.width),y=O)),void 0!==y&&this.setState({placeholder:y}),g&&(this.style=g,this.setState({style:g}))}}},{key:"triggerChange",value:function(t,e){var n=this.props.onChange;e.position!==this.style.position&&"function"==typeof n&&n(t)}},{key:"handlePosition",value:function(){var t=this,e=this.props.css;this.locked&&e?this.scrollCount+=1:(this.locked=!0,this.scrollCount=0,this.setPosition(),this.scrollTimer=setTimeout(function(){t.locked=!1,0<t.scrollCount&&t.handlePosition()},48))}},{key:"bindElement",value:function(t){this.element=t}},{key:"bindOrigin",value:function(t){this.origin=t}},{key:"bindPlaceholder",value:function(t){this.placeholder=t}},{key:"bindScroll",value:function(){var e=this;this.targetElement?this.targetElement.addEventListener("scroll",this.handlePosition,f.eventPassive):O.forEach(function(t){window.addEventListener(t,e.handlePosition)}),window.addEventListener("resize",this.handlePosition)}},{key:"unbindScroll",value:function(){var e=this;this.targetElement?this.targetElement.removeEventListener("scroll",this.handlePosition):O.forEach(function(t){window.removeEventListener(t,e.handlePosition)}),window.removeEventListener("resize",this.handlePosition)}},{key:"render",value:function(){var t=this.props,e=t.children,n=t.className,i=t.target,o=t.css,a=this.state.placeholder,r=this.props.style,s=this.state.style;return i&&C&&o&&(r=Object.assign({},r,s),s={}),m.a.createElement("div",{style:r,className:n},m.a.createElement("div",{ref:this.bindElement,style:Object.assign({},s,{display:"flow-root"})},e),m.a.createElement("div",{ref:this.bindOrigin}),a&&m.a.createElement("div",{ref:this.bindPlaceholder,style:a}))}}]),i}(p.b);w.defaultProps=Object(i.a)(Object(i.a)({},b.a),{},{css:!0}),w.displayName="ShineoutSticky",e.a=Object(v.compose)(g.b)(w)},581:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return c});var i=n(0),o=n.n(i),a=n(38),r=Object(a.a)(),s=r.Provider,c=function(n){return function(e){return o.a.createElement(r.Consumer,null,function(t){return o.a.createElement(n,Object.assign({},e,t))})}}},585:function(t,e,n){"use strict";var h=n(24),u=n(0),d=n.n(u),m=n(111),p=n(87),f=n(305),b=n(40),v=n(199),g=n(19),y=n(195),O=["Datum.Form","Datum.List"];function w(t,e,n){return""===e.path?t:n?{pathname:"".concat(t,"/").concat(e.path||e.name),search:n}:"".concat(t,"/").concat(e.path||e.name).concat(n||"")}e.a=function(l){return function(t){var n=t.match.url,e=l.find(function(t){return"string"!=typeof t}),i=(t.history.location||{search:""}).search;0===i.indexOf("?example=")&&i.replace("?example=","");var o=Object(u.useState)(window.innerWidth<979),a=Object(h.a)(o,2),r=a[0],s=a[1],c=function(){if(!(979<window.innerWidth)){var t=document.querySelector("#-shineout-menu"),e=!r;e?(s(e),setTimeout(function(){t&&(t.style.display="none")},400)):(setTimeout(function(){return s(e)},16),t&&(t.style.display="block"))}};return Object(u.useEffect)(function(){var t=function(){s(window.innerWidth<979)};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}},[]),d.a.createElement(u.Fragment,null,d.a.createElement("div",{tabIndex:"-1",className:Object(g.g)("nav-open-close")},d.a.createElement(y.a,{name:r?"Menu":"close",onClick:c})),d.a.createElement(f.a,{top:0,className:Object(g.g)("menu-sticky-wrap")},d.a.createElement("div",{id:"-shineout-menu",className:Object(g.g)("menu",r&&"hidden")},l.filter(function(t){return-1===O.indexOf(t.name)}).map(function(t,e){return"string"==typeof t?d.a.createElement("label",{key:e},t):d.a.createElement(m.c,{className:Object(g.g)(2===t.level&&"sub"),activeClassName:Object(g.g)("active"),key:t.name,to:w(n,t,i),onClick:c},d.a.createElement("p",null,t.name,d.a.createElement("span",{style:{margin:"0 0 0 6px"}},Object(b.b)(t.cn))))}))),d.a.createElement("div",{className:Object(g.g)("page")},d.a.createElement(u.Suspense,{fallback:d.a.createElement(v.a,null)},d.a.createElement(p.d,null,d.a.createElement(p.a,{from:n,exact:!0,to:w(n,e)}),l.filter(function(t){return"object"==typeof t}).map(function(t){return d.a.createElement(p.b,{key:t.name+i,path:w(n,t),component:t.component,onEnter:function(){c.bind(null)}})})))))}}},689:function(t,e,i){var o={"./0.x.x.md":[2187,58],"./1.x.x.md":[2188,59]};function n(e){var n=o[e];return n?i.e(n[1]).then(function(){var t=n[0];return i.t(t,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}n.keys=function(){return Object.keys(o)},n.id=689,t.exports=n},690:function(t,e,i){var o={"./1.x.x.md":[2189,58]};function n(e){var n=o[e];return n?i.e(n[1]).then(function(){var t=n[0];return i.t(t,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}n.keys=function(){return Object.keys(o)},n.id=690,t.exports=n}}]);