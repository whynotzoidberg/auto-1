(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{50:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;l(n(3));var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0));l(n(2)),l(n(114));function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&l)for(var s in l)void 0===t[s]&&(t[s]=l[s]);else t||(t=l||{});if(1===i)t.children=o;else if(i>1){for(var u=new Array(i),p=0;p<i;p++)u[p]=arguments[p+3];t.children=u}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=i("div",{});const c=e=>{let{plugins:t,name:n,options:r,children:l}=e,i=p(e,["plugins","name","options","children"]),s=t[n];const c=s.options;return s?(s=s.component,o.default.createElement(s,u({},c,{options:r?r.options:{}},r?r.props:i,{children:l,plugins:t}))):a};const f=e=>{var t,n;return n=t=class extends o.default.Component{constructor(...e){super(...e),s(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?o.default.createElement(e,this.props,this.props.children||null):null}},s(t,"defaultProps",{shouldLoad:!0}),n};f(()=>n.e(27).then(n.bind(null,115))),f(()=>n.e(27).then(n.bind(null,116)));var d=e=>i("div",{},void 0,i("div",{className:""},void 0,i(c,{name:"home",plugins:e.plugins,options:{options:[],props:{}}})));t.default=d,e.exports=t.default}}]);
//# sourceMappingURL=home.js.map