(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55],{9642:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"===typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,n):void 0}}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}t.d(n,{Ul:function(){return i},gY:function(){return r},gK:function(){return o}})},9826:function(e,n,t){"use strict";t.d(n,{J:function(){return N}});var r,o=t(9642),u=t(7294),i=t(133),a=t(8529);function c(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=(0,u.useRef)(n);return(0,u.useEffect)((function(){r.current=n}),[n]),(0,u.useCallback)((function(e){for(var n,t=(0,o.Ul)(r.current);!(n=t()).done;){var u=n.value;null!=u&&("function"===typeof u?u(e):u.current=e)}}),[r])}function l(e){for(var n,t,r=e.parentElement,o=null;r&&!(r instanceof HTMLFieldSetElement);)r instanceof HTMLLegendElement&&(o=r),r=r.parentElement;var u=null!=(n=""===(null==(t=r)?void 0:t.getAttribute("disabled")))&&n;return(!u||!function(e){if(!e)return!1;var n=e.previousElementSibling;for(;null!==n;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}(o))&&u}!function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"}(r||(r={}));var s,f,d,p,v=t(2506),m=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(e){return e+":not([tabindex='-1'])"})).join(",");function b(e){return void 0===e&&(e=document.body),null==e?[]:Array.from(e.querySelectorAll(m))}function g(e,n){var t=Array.isArray(e)?e:b(e),r=document.activeElement,o=function(){if(n&(s.First|s.Next))return d.Next;if(n&(s.Previous|s.Last))return d.Previous;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),u=function(){if(n&s.First)return 0;if(n&s.Previous)return Math.max(0,t.indexOf(r))-1;if(n&s.Next)return Math.max(0,t.indexOf(r))+1;if(n&s.Last)return t.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),i=n&s.NoScroll?{preventScroll:!0}:{},a=0,c=t.length,l=void 0;do{var p;if(a>=c||a+c<=0)return f.Error;var v=u+a;if(n&s.WrapAround)v=(v+c)%c;else{if(v<0)return f.Underflow;if(v>=c)return f.Overflow}null==(p=l=t[v])||p.focus(i),a+=o}while(l!==document.activeElement);return l.hasAttribute("tabindex")||l.setAttribute("tabindex","0"),f.Success}function h(e,n,t){var r=(0,u.useRef)(n);r.current=n,(0,u.useEffect)((function(){function n(e){r.current.call(window,e)}return window.addEventListener(e,n,t),function(){return window.removeEventListener(e,n,t)}}),[e,t])}!function(e){e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll"}(s||(s={})),function(e){e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow"}(f||(f={})),function(e){e[e.Previous=-1]="Previous",e[e.Next=1]="Next"}(d||(d={})),function(e){e[e.Strict=0]="Strict",e[e.Loose=1]="Loose"}(p||(p={}));var y,E,w,S=t(3980),C=t(852);function P(e){var n;if(e.type)return e.type;var t=null!=(n=e.as)?n:"button";return"string"===typeof t&&"button"===t.toLowerCase()?"button":void 0}!function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(E||(E={})),function(e){e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId"}(w||(w={}));var O=((y={})[w.TogglePopover]=function(e){var n;return(0,o.gY)({},e,{popoverState:(0,i.E)(e.popoverState,(n={},n[E.Open]=E.Closed,n[E.Closed]=E.Open,n))})},y[w.ClosePopover]=function(e){return e.popoverState===E.Closed?e:(0,o.gY)({},e,{popoverState:E.Closed})},y[w.SetButton]=function(e,n){return e.button===n.button?e:(0,o.gY)({},e,{button:n.button})},y[w.SetButtonId]=function(e,n){return e.buttonId===n.buttonId?e:(0,o.gY)({},e,{buttonId:n.buttonId})},y[w.SetPanel]=function(e,n){return e.panel===n.panel?e:(0,o.gY)({},e,{panel:n.panel})},y[w.SetPanelId]=function(e,n){return e.panelId===n.panelId?e:(0,o.gY)({},e,{panelId:n.panelId})},y),x=(0,u.createContext)(null);function k(e){var n=(0,u.useContext)(x);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+N.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,k),t}return n}x.displayName="PopoverContext";var L=(0,u.createContext)(null);function T(e){var n=(0,u.useContext)(L);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+N.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,T),t}return n}L.displayName="PopoverAPIContext";var M=(0,u.createContext)(null);function A(){return(0,u.useContext)(M)}M.displayName="PopoverGroupContext";var F=(0,u.createContext)(null);function I(e,n){return(0,i.E)(n.type,O,e,n)}F.displayName="PopoverPanelContext";function N(e){var n,t="headlessui-popover-button-"+(0,v.M)(),r="headlessui-popover-panel-"+(0,v.M)(),o=(0,u.useReducer)(I,{popoverState:E.Closed,button:null,buttonId:t,panel:null,panelId:r}),c=o[0],l=c.popoverState,s=c.button,f=c.panel,d=o[1];(0,u.useEffect)((function(){return d({type:w.SetButtonId,buttonId:t})}),[t,d]),(0,u.useEffect)((function(){return d({type:w.SetPanelId,panelId:r})}),[r,d]);var b=(0,u.useMemo)((function(){return{buttonId:t,panelId:r,close:function(){return d({type:w.ClosePopover})}}}),[t,r,d]),g=A(),y=null==g?void 0:g.registerPopover,C=(0,u.useCallback)((function(){var e;return null!=(e=null==g?void 0:g.isFocusWithinPopoverGroup())?e:(null==s?void 0:s.contains(document.activeElement))||(null==f?void 0:f.contains(document.activeElement))}),[g,s,f]);(0,u.useEffect)((function(){return null==y?void 0:y(b)}),[y,b]),h("focus",(function(){l===E.Open&&(C()||s&&f&&d({type:w.ClosePopover}))}),!0),h("mousedown",(function(e){var n=e.target;l===E.Open&&((null==s?void 0:s.contains(n))||(null==f?void 0:f.contains(n))||(d({type:w.ClosePopover}),function(e,n){var t;return void 0===n&&(n=p.Strict),e!==document.body&&(0,i.E)(n,((t={})[p.Strict]=function(){return e.matches(m)},t[p.Loose]=function(){for(var n=e;null!==n;){if(n.matches(m))return!0;n=n.parentElement}return!1},t))}(n,p.Loose)||(e.preventDefault(),null==s||s.focus())))}));var P=(0,u.useCallback)((function(e){d({type:w.ClosePopover});var n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:s:s;null==n||n.focus()}),[d,s]),O=(0,u.useMemo)((function(){return{close:P}}),[P]),k=(0,u.useMemo)((function(){return{open:l===E.Open,close:P}}),[l,P]);return u.createElement(x.Provider,{value:o},u.createElement(L.Provider,{value:O},u.createElement(S.up,{value:(0,i.E)(l,(n={},n[E.Open]=S.ZM.Open,n[E.Closed]=S.ZM.Closed,n))},(0,a.sY)({props:e,slot:k,defaultTag:"div",name:"Popover"}))))}var j=(0,a.yV)((function e(n,t){var i=k([N.name,e.name].join(".")),f=i[0],d=i[1],p=(0,u.useRef)(null),v=A(),m=null==v?void 0:v.closeOthers,y=(0,u.useContext)(F),S=null!==y&&y===f.panelId,O=c(p,t,S?null:function(e){return d({type:w.SetButton,button:e})}),x=c(p,t),L=(0,u.useRef)(null),T=(0,u.useRef)("undefined"===typeof window?null:document.activeElement);h("focus",(function(){T.current=L.current,L.current=document.activeElement}),!0);var M=(0,u.useCallback)((function(e){var n;if(S){if(f.popoverState===E.Closed)return;switch(e.key){case r.Space:case r.Enter:e.preventDefault(),e.stopPropagation(),d({type:w.ClosePopover}),null==(n=f.button)||n.focus()}}else switch(e.key){case r.Space:case r.Enter:e.preventDefault(),e.stopPropagation(),f.popoverState===E.Closed&&(null==m||m(f.buttonId)),d({type:w.TogglePopover});break;case r.Escape:if(f.popoverState!==E.Open)return null==m?void 0:m(f.buttonId);if(!p.current)return;if(!p.current.contains(document.activeElement))return;d({type:w.ClosePopover});break;case r.Tab:if(f.popoverState!==E.Open)return;if(!f.panel)return;if(!f.button)return;if(e.shiftKey){var t;if(!T.current)return;if(null==(t=f.button)?void 0:t.contains(T.current))return;if(f.panel.contains(T.current))return;var o=b(),u=o.indexOf(T.current);if(o.indexOf(f.button)>u)return;e.preventDefault(),e.stopPropagation(),g(f.panel,s.Last)}else e.preventDefault(),e.stopPropagation(),g(f.panel,s.First)}}),[d,f.popoverState,f.buttonId,f.button,f.panel,p,m,S]),I=(0,u.useCallback)((function(e){var n;if(!S&&(e.key===r.Space&&e.preventDefault(),f.popoverState===E.Open&&f.panel&&f.button))switch(e.key){case r.Tab:if(!T.current)return;if(null==(n=f.button)?void 0:n.contains(T.current))return;if(f.panel.contains(T.current))return;var t=b(),o=t.indexOf(T.current);if(t.indexOf(f.button)>o)return;e.preventDefault(),e.stopPropagation(),g(f.panel,s.Last)}}),[f.popoverState,f.panel,f.button,S]),j=(0,u.useCallback)((function(e){var t,r;l(e.currentTarget)||(n.disabled||(S?(d({type:w.ClosePopover}),null==(t=f.button)||t.focus()):(f.popoverState===E.Closed&&(null==m||m(f.buttonId)),null==(r=f.button)||r.focus(),d({type:w.TogglePopover}))))}),[d,f.button,f.popoverState,f.buttonId,n.disabled,m,S]),H=(0,u.useMemo)((function(){return{open:f.popoverState===E.Open}}),[f]),R=function(e,n){var t=(0,u.useState)((function(){return P(e)})),r=t[0],o=t[1];return(0,C.e)((function(){o(P(e))}),[e.type,e.as]),(0,C.e)((function(){r||n.current&&n.current instanceof HTMLButtonElement&&!n.current.hasAttribute("type")&&o("button")}),[r,n]),r}(n,p),U=n,Y=S?{ref:x,type:R,onKeyDown:M,onClick:j}:{ref:O,id:f.buttonId,type:R,"aria-expanded":n.disabled?void 0:f.popoverState===E.Open,"aria-controls":f.panel?f.panelId:void 0,onKeyDown:M,onKeyUp:I,onClick:j};return(0,a.sY)({props:(0,o.gY)({},U,Y),slot:H,defaultTag:"button",name:"Popover.Button"})})),H=a.AN.RenderStrategy|a.AN.Static,R=(0,a.yV)((function e(n,t){var r=k([N.name,e.name].join(".")),i=r[0].popoverState,s=r[1],f=c(t),d="headlessui-popover-overlay-"+(0,v.M)(),p=(0,S.oJ)(),m=null!==p?p===S.ZM.Open:i===E.Open,b=(0,u.useCallback)((function(e){if(l(e.currentTarget))return e.preventDefault();s({type:w.ClosePopover})}),[s]),g=(0,u.useMemo)((function(){return{open:i===E.Open}}),[i]),h={ref:f,id:d,"aria-hidden":!0,onClick:b},y=n;return(0,a.sY)({props:(0,o.gY)({},y,h),slot:g,defaultTag:"div",features:H,visible:m,name:"Popover.Overlay"})})),U=a.AN.RenderStrategy|a.AN.Static,Y=(0,a.yV)((function e(n,t){var i=n.focus,l=void 0!==i&&i,d=(0,o.gK)(n,["focus"]),p=k([N.name,e.name].join(".")),v=p[0],m=p[1],y=T([N.name,e.name].join(".")).close,C=(0,u.useRef)(null),P=c(C,t,(function(e){m({type:w.SetPanel,panel:e})})),O=(0,S.oJ)(),x=null!==O?O===S.ZM.Open:v.popoverState===E.Open,L=(0,u.useCallback)((function(e){var n;switch(e.key){case r.Escape:if(v.popoverState!==E.Open)return;if(!C.current)return;if(!C.current.contains(document.activeElement))return;e.preventDefault(),m({type:w.ClosePopover}),null==(n=v.button)||n.focus()}}),[v,C,m]);(0,u.useEffect)((function(){return function(){return m({type:w.SetPanel,panel:null})}}),[m]),(0,u.useEffect)((function(){var e;v.popoverState!==E.Closed||null!=(e=n.unmount)&&!e||m({type:w.SetPanel,panel:null})}),[v.popoverState,n.unmount,m]),(0,u.useEffect)((function(){if(l&&v.popoverState===E.Open&&C.current){var e=document.activeElement;C.current.contains(e)||g(C.current,s.First)}}),[l,C,v.popoverState]),h("keydown",(function(e){if(v.popoverState===E.Open&&C.current&&e.key===r.Tab&&document.activeElement&&C.current&&C.current.contains(document.activeElement)){e.preventDefault();var n,t=g(C.current,e.shiftKey?s.Previous:s.Next);if(t===f.Underflow)return null==(n=v.button)?void 0:n.focus();if(t===f.Overflow){if(!v.button)return;var o=b(),u=o.indexOf(v.button);g(o.splice(u+1).filter((function(e){var n;return!(null==(n=C.current)?void 0:n.contains(e))})),s.First)===f.Error&&g(document.body,s.First)}}})),h("focus",(function(){var e;l&&v.popoverState===E.Open&&C.current&&((null==(e=C.current)?void 0:e.contains(document.activeElement))||m({type:w.ClosePopover}))}),!0);var M=(0,u.useMemo)((function(){return{open:v.popoverState===E.Open,close:y}}),[v,y]),A={ref:P,id:v.panelId,onKeyDown:L};return u.createElement(F.Provider,{value:v.panelId},(0,a.sY)({props:(0,o.gY)({},d,A),slot:M,defaultTag:"div",features:U,visible:x,name:"Popover.Panel"}))}));N.Button=j,N.Overlay=R,N.Panel=Y,N.Group=function(e){var n=(0,u.useRef)(null),t=(0,u.useState)([]),r=t[0],i=t[1],c=(0,u.useCallback)((function(e){i((function(n){var t=n.indexOf(e);if(-1!==t){var r=n.slice();return r.splice(t,1),r}return n}))}),[i]),l=(0,u.useCallback)((function(e){return i((function(n){return[].concat(n,[e])})),function(){return c(e)}}),[i,c]),s=(0,u.useCallback)((function(){var e,t=document.activeElement;return!!(null==(e=n.current)?void 0:e.contains(t))||r.some((function(e){var n,r;return(null==(n=document.getElementById(e.buttonId))?void 0:n.contains(t))||(null==(r=document.getElementById(e.panelId))?void 0:r.contains(t))}))}),[n,r]),f=(0,u.useCallback)((function(e){for(var n,t=(0,o.Ul)(r);!(n=t()).done;){var u=n.value;u.buttonId!==e&&u.close()}}),[r]),d=(0,u.useMemo)((function(){return{registerPopover:l,unregisterPopover:c,isFocusWithinPopoverGroup:s,closeOthers:f}}),[l,c,s,f]),p=(0,u.useMemo)((function(){return{}}),[]),v={ref:n},m=e;return u.createElement(M.Provider,{value:d},(0,a.sY)({props:(0,o.gY)({},m,v),slot:p,defaultTag:"div",name:"Popover.Group"}))}},6867:function(e,n,t){"use strict";t.d(n,{u:function(){return L}});var r=t(9642),o=t(7294),u=t(133),i=t(8529),a=t(852),c=t(5989),l=t(2506);var s,f=t(3980);function d(){var e=(0,o.useRef)(!0);return(0,o.useEffect)((function(){e.current=!1}),[]),e.current}function p(){var e=[],n={requestAnimationFrame:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(){var e=requestAnimationFrame.apply(void 0,arguments);n.add((function(){return cancelAnimationFrame(e)}))})),nextFrame:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];n.requestAnimationFrame((function(){n.requestAnimationFrame.apply(n,t)}))},setTimeout:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(){var e=setTimeout.apply(void 0,arguments);n.add((function(){return clearTimeout(e)}))})),add:function(n){e.push(n)},dispose:function(){for(var n,t=(0,r.Ul)(e.splice(0));!(n=t()).done;){var o=n.value;o()}}};return n}function v(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];e&&r.length>0&&(n=e.classList).add.apply(n,r)}function m(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];e&&r.length>0&&(n=e.classList).remove.apply(n,r)}function b(e,n,t,r,o,u){var i=p(),a=void 0!==u?function(e){var n={called:!1};return function(){if(!n.called)return n.called=!0,e.apply(void 0,arguments)}}(u):function(){};return m.apply(void 0,[e].concat(o)),v.apply(void 0,[e].concat(n,t)),i.nextFrame((function(){m.apply(void 0,[e].concat(t)),v.apply(void 0,[e].concat(r)),i.add(function(e,n){var t=p();if(!e)return t.dispose;var r=getComputedStyle(e),o=[r.transitionDuration,r.transitionDelay].map((function(e){var n=e.split(",").filter(Boolean).map((function(e){return e.includes("ms")?parseFloat(e):1e3*parseFloat(e)})).sort((function(e,n){return n-e}))[0];return void 0===n?0:n})),u=o[0],i=o[1];return 0!==u?t.setTimeout((function(){n(s.Finished)}),u+i):n(s.Finished),t.add((function(){return n(s.Cancelled)})),t.dispose}(e,(function(t){return m.apply(void 0,[e].concat(r,n)),v.apply(void 0,[e].concat(o)),a(t)})))})),i.add((function(){return m.apply(void 0,[e].concat(n,t,r,o))})),i.add((function(){return a(s.Cancelled)})),i.dispose}function g(e){return void 0===e&&(e=""),(0,o.useMemo)((function(){return e.split(" ").filter((function(e){return e.trim().length>1}))}),[e])}!function(e){e.Finished="finished",e.Cancelled="cancelled"}(s||(s={}));var h,y=(0,o.createContext)(null);y.displayName="TransitionContext",function(e){e.Visible="visible",e.Hidden="hidden"}(h||(h={}));var E=(0,o.createContext)(null);function w(e){return"children"in e?w(e.children):e.current.filter((function(e){return e.state===h.Visible})).length>0}function S(e){var n=(0,o.useRef)(e),t=(0,o.useRef)([]),r=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}();(0,o.useEffect)((function(){n.current=e}),[e]);var a=(0,o.useCallback)((function(e,o){var a;void 0===o&&(o=i.l4.Hidden);var c=t.current.findIndex((function(n){return n.id===e}));-1!==c&&((0,u.E)(o,((a={})[i.l4.Unmount]=function(){t.current.splice(c,1)},a[i.l4.Hidden]=function(){t.current[c].state=h.Hidden},a)),!w(t)&&r.current&&(null==n.current||n.current()))}),[n,r,t]),c=(0,o.useCallback)((function(e){var n=t.current.find((function(n){return n.id===e}));return n?n.state!==h.Visible&&(n.state=h.Visible):t.current.push({id:e,state:h.Visible}),function(){return a(e,i.l4.Unmount)}}),[t,a]);return(0,o.useMemo)((function(){return{children:t,register:c,unregister:a}}),[c,a,t])}function C(){}E.displayName="NestingContext";var P=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function O(e){for(var n,t={},o=(0,r.Ul)(P);!(n=o()).done;){var u,i=n.value;t[i]=null!=(u=e[i])?u:C}return t}var x=i.AN.RenderStrategy;function k(e){var n,t=e.beforeEnter,p=e.afterEnter,v=e.beforeLeave,m=e.afterLeave,C=e.enter,P=e.enterFrom,k=e.enterTo,L=e.entered,T=e.leave,M=e.leaveFrom,A=e.leaveTo,F=(0,r.gK)(e,["beforeEnter","afterEnter","beforeLeave","afterLeave","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"]),I=(0,o.useRef)(null),N=(0,o.useState)(h.Visible),j=N[0],H=N[1],R=F.unmount?i.l4.Unmount:i.l4.Hidden,U=function(){var e=(0,o.useContext)(y);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),Y=U.show,D=U.appear,B=function(){var e=(0,o.useContext)(E);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),V=B.register,K=B.unregister,W=d(),Z=(0,l.M)(),q=(0,o.useRef)(!1),J=S((function(){q.current||(H(h.Hidden),K(Z),ne.current.afterLeave())}));(0,a.e)((function(){if(Z)return V(Z)}),[V,Z]),(0,a.e)((function(){var e;R===i.l4.Hidden&&Z&&(Y&&j!==h.Visible?H(h.Visible):(0,u.E)(j,((e={})[h.Hidden]=function(){return K(Z)},e[h.Visible]=function(){return V(Z)},e)))}),[j,Z,V,K,Y,R]);var G=g(C),z=g(P),_=g(k),$=g(L),Q=g(T),X=g(M),ee=g(A),ne=function(e){var n=(0,o.useRef)(O(e));return(0,o.useEffect)((function(){n.current=O(e)}),[e]),n}({beforeEnter:t,afterEnter:p,beforeLeave:v,afterLeave:m}),te=(0,c.H)();(0,o.useEffect)((function(){if(te&&j===h.Visible&&null===I.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[I,j,te]);var re=W&&!D;(0,a.e)((function(){var e=I.current;if(e&&!re)return q.current=!0,Y&&ne.current.beforeEnter(),Y||ne.current.beforeLeave(),Y?b(e,G,z,_,$,(function(e){q.current=!1,e===s.Finished&&ne.current.afterEnter()})):b(e,Q,X,ee,$,(function(e){q.current=!1,e===s.Finished&&(w(J)||(H(h.Hidden),K(Z),ne.current.afterLeave()))}))}),[ne,Z,q,K,J,I,re,Y,G,z,_,Q,X,ee]);var oe={ref:I},ue=F;return o.createElement(E.Provider,{value:J},o.createElement(f.up,{value:(0,u.E)(j,(n={},n[h.Visible]=f.ZM.Open,n[h.Hidden]=f.ZM.Closed,n))},(0,i.sY)({props:(0,r.gY)({},ue,oe),defaultTag:"div",features:x,visible:j===h.Visible,name:"Transition.Child"})))}function L(e){var n,t=e.show,a=e.appear,c=void 0!==a&&a,l=e.unmount,s=(0,r.gK)(e,["show","appear","unmount"]),p=(0,f.oJ)();void 0===t&&null!==p&&(t=(0,u.E)(p,((n={})[f.ZM.Open]=!0,n[f.ZM.Closed]=!1,n)));if(![!0,!1].includes(t))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");var v=(0,o.useState)(t?h.Visible:h.Hidden),m=v[0],b=v[1],g=S((function(){b(h.Hidden)})),C=d(),P=(0,o.useMemo)((function(){return{show:t,appear:c||!C}}),[t,c,C]);(0,o.useEffect)((function(){t?b(h.Visible):w(g)||b(h.Hidden)}),[t,g]);var O={unmount:l};return o.createElement(E.Provider,{value:g},o.createElement(y.Provider,{value:P},(0,i.sY)({props:(0,r.gY)({},O,{as:o.Fragment,children:o.createElement(k,Object.assign({},O,s))}),defaultTag:o.Fragment,features:x,visible:m===h.Visible,name:"Transition"})))}L.Child=function(e){var n=null!==(0,o.useContext)(y),t=null!==(0,f.oJ)();return!n&&t?o.createElement(L,Object.assign({},e)):o.createElement(k,Object.assign({},e))},L.Root=L},2506:function(e,n,t){"use strict";t.d(n,{M:function(){return c}});var r=t(7294),o=t(852),u=t(5989),i=0;function a(){return++i}function c(){var e=(0,u.H)(),n=(0,r.useState)(e?a:null),t=n[0],i=n[1];return(0,o.e)((function(){null===t&&i(a())}),[t]),null!=t?""+t:void 0}},852:function(e,n,t){"use strict";t.d(n,{e:function(){return o}});var r=t(7294),o="undefined"!==typeof window?r.useLayoutEffect:r.useEffect},5989:function(e,n,t){"use strict";t.d(n,{H:function(){return u}});var r=t(7294),o={serverHandoffComplete:!1};function u(){var e=(0,r.useState)(o.serverHandoffComplete),n=e[0],t=e[1];return(0,r.useEffect)((function(){!0!==n&&t(!0)}),[n]),(0,r.useEffect)((function(){!1===o.serverHandoffComplete&&(o.serverHandoffComplete=!0)}),[]),n}},3980:function(e,n,t){"use strict";t.d(n,{up:function(){return a},ZM:function(){return r},oJ:function(){return i}});var r,o=t(7294),u=(0,o.createContext)(null);function i(){return(0,o.useContext)(u)}function a(e){var n=e.value,t=e.children;return o.createElement(u.Provider,{value:n},t)}u.displayName="OpenClosedContext",function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(r||(r={}))},133:function(e,n,t){"use strict";function r(e,n){if(e in n){for(var t=n[e],o=arguments.length,u=new Array(o>2?o-2:0),i=2;i<o;i++)u[i-2]=arguments[i];return"function"===typeof t?t.apply(void 0,u):t}var a=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(n).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(a,r),a}t.d(n,{E:function(){return r}})},8529:function(e,n,t){"use strict";t.d(n,{AN:function(){return r},l4:function(){return o},yV:function(){return s},sY:function(){return c}});var r,o,u=t(9642),i=t(7294),a=t(133);function c(e){var n=e.props,t=e.slot,i=e.defaultTag,c=e.features,s=e.visible,f=void 0===s||s,d=e.name;if(f)return l(n,t,i,d);var p=null!=c?c:r.None;if(p&r.Static){var v=n.static,m=void 0!==v&&v,b=(0,u.gK)(n,["static"]);if(m)return l(b,t,i,d)}if(p&r.RenderStrategy){var g,h=n.unmount,y=void 0===h||h,E=(0,u.gK)(n,["unmount"]),w=y?o.Unmount:o.Hidden;return(0,a.E)(w,((g={})[o.Unmount]=function(){return null},g[o.Hidden]=function(){return l((0,u.gY)({},E,{hidden:!0,style:{display:"none"}}),t,i,d)},g))}return l(n,t,i,d)}function l(e,n,t,r){var o;void 0===n&&(n={});var a=f(e,["unmount","static"]),c=a.as,l=void 0===c?t:c,s=a.children,d=a.refName,p=void 0===d?"ref":d,v=(0,u.gK)(a,["as","children","refName"]),m=void 0!==e.ref?((o={})[p]=e.ref,o):{},b="function"===typeof s?s(n):s;if(v.className&&"function"===typeof v.className&&(v.className=v.className(n)),l===i.Fragment&&Object.keys(v).length>0){if(!(0,i.isValidElement)(b)||Array.isArray(b)&&b.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(v).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return(0,i.cloneElement)(b,Object.assign({},function(e,n,t){for(var r,o=Object.assign({},e),i=function(){var t,u=r.value;void 0!==e[u]&&void 0!==n[u]&&Object.assign(o,((t={})[u]=function(t){t.defaultPrevented||e[u](t),t.defaultPrevented||n[u](t)},t))},a=(0,u.Ul)(t);!(r=a()).done;)i();return o}(function(e){var n=Object.assign({},e);for(var t in n)void 0===n[t]&&delete n[t];return n}(f(v,["ref"])),b.props,["onClick"]),m))}return(0,i.createElement)(l,Object.assign({},f(v,["ref"]),l!==i.Fragment&&m),b)}function s(e){var n;return Object.assign((0,i.forwardRef)(e),{displayName:null!=(n=e.displayName)?n:e.name})}function f(e,n){void 0===n&&(n=[]);for(var t,r=Object.assign({},e),o=(0,u.Ul)(n);!(t=o()).done;){var i=t.value;i in r&&delete r[i]}return r}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(r||(r={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(o||(o={}))},6049:function(e,n,t){"use strict";t.d(n,{xx7:function(){return o},Oqj:function(){return u},T$Z:function(){return i},vxs:function(){return a},b0D:function(){return c}});var r=t(7294);var o=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"}))};var u=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"}))};var i=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"}))};var a=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"}))};var c=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}))}},9008:function(e,n,t){e.exports=t(639)}}]);