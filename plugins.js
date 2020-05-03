(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{62:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i,o=r(n(3)),t=function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};i.get||i.set?Object.defineProperty(a,n,i):a[n]=e[n]}return a.default=e,a}(n(0));r(n(2)),r(n(114));function r(e){return e&&e.__esModule?e:{default:e}}function s(e,a,n,o){i||(i="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var t=e&&e.defaultProps,r=arguments.length-3;if(a||0===r||(a={children:void 0}),a&&t)for(var s in t)void 0===a[s]&&(a[s]=t[s]);else a||(a=t||{});if(1===r)a.children=o;else if(r>1){for(var l=new Array(r),u=0;u<r;u++)l[u]=arguments[u+3];a.children=l}return{$$typeof:i,type:e,key:void 0===n?null:""+n,ref:null,props:a,_owner:null}}function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function u(){return(u=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function d(e,a){if(null==e)return{};var n,i,o=function(e,a){if(null==e)return{};var n,i,o={},t=Object.keys(e);for(i=0;i<t.length;i++)n=t[i],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)n=t[i],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c=e=>{let{to:a}=e,n=d(e,["to"]);return a.includes("http")?t.default.createElement("a",u({},e,{href:a})):("#"===a[0]&&(a=o.default.join("/auto/","pages/plugins.html")+a),t.default.createElement("a",u({},n,{href:a,onClick:n=>{if(n.preventDefault(),"#"===e.to)return!1;const i=new URL(o.default.join(window.location.origin,a));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(i),null,a),e.onClick();const t=new CustomEvent("changeLocation",{detail:i});return dispatchEvent(t),!1}})))};c.defaultProps={href:"",onClick:()=>{}};const p=e=>{var a,n;return n=a=class extends t.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?t.default.createElement(e,this.props,this.props.children||null):null}},l(a,"defaultProps",{shouldLoad:!0}),n};p(()=>n.e(27).then(n.bind(null,115))),p(()=>n.e(27).then(n.bind(null,116)));var g=s("h1",{},void 0,"Plugins"),h=s("code",{},void 0,"auto"),v=s("article",{className:"message column is-warning"},void 0,s("div",{className:"message-body"},void 0,s("p",{},void 0,"⚠️ Specifying a plugin overrides the defaults."))),f=s("p",{},void 0,"If you don't configure plugins in your ",s("code",{},void 0,".autorc")," configuration file ",s("code",{},void 0,"auto")," will use a default package manager plugin."),m=s("code",{},void 0,"npm"),b=s("code",{},void 0,"npm"),y=s("code",{},void 0,"git-tag"),P=s("p",{},void 0,"If you don't want to include the default plugins, you can supply an empty array in the ",s("code",{},void 0,".autorc")," configuration file like the following:"),N=s("pre",{},void 0,s("code",{className:"language-js"},void 0,"{",s("br",{}),"  ",s("span",{className:"hljs-string"},void 0,'"plugins"'),": []",s("br",{}),"}",s("br",{}))),j=s("p",{},void 0,"There are three ways to name and use a plugin."),w=s("p",{},void 0,"To use an official plugin all you have to do is supply the name."),k=s("pre",{},void 0,s("code",{className:"language-js"},void 0,"{",s("br",{}),"  ",s("span",{className:"hljs-string"},void 0,'"plugins"'),": [",s("br",{}),"    ",s("span",{className:"hljs-string"},void 0,'"npm"'),",",s("br",{}),"    ",s("span",{className:"hljs-comment"},void 0,"// or the full name"),s("br",{}),"    ",s("span",{className:"hljs-string"},void 0,'"@auto-it/npm"'),s("br",{}),"  ]",s("br",{}),"}",s("br",{}))),O=s("code",{},void 0,"npm"),L=s("p",{},void 0,"Unofficial plugins pulled from NPM should be named in one of the following formats:"),E=s("ul",{},void 0,s("li",{},void 0,s("code",{},void 0,"auto-plugin-PLUGIN_NAME")),s("li",{},void 0,s("code",{},void 0,"@my-scope/auto-plugin-PLUGIN_NAME"))),_=s("p",{},void 0,"You use them in your ",s("code",{},void 0,".autorc")," by:"),C=s("ul",{},void 0,s("li",{},void 0,"provide the full package name"),s("li",{},void 0,"when named like ",s("code",{},void 0,"auto-plugin-PLUGIN_NAME")," just the ",s("code",{},void 0,"PLUGIN_NAME"),".")),I=s("pre",{},void 0,s("code",{className:"language-js"},void 0,"{",s("br",{}),"  ",s("span",{className:"hljs-string"},void 0,'"plugins"'),": [",s("br",{}),"    ",s("span",{className:"hljs-string"},void 0,'"my-cool-plugin"'),",",s("br",{}),"    ",s("span",{className:"hljs-comment"},void 0,"// or"),s("br",{}),"    ",s("span",{className:"hljs-string"},void 0,'"auto-plugin-my-cool-plugin"'),",",s("br",{}),"    ",s("span",{className:"hljs-comment"},void 0,"// on a scope"),s("br",{}),"    ",s("span",{className:"hljs-string"},void 0,'"@my-scope/auto-plugin-my-cool-plugin"'),",",s("br",{}),"  ]",s("br",{}),"}",s("br",{}))),M=s("p",{},void 0,"Or if you have a plugin locally supply the path."),x=s("pre",{},void 0,s("code",{className:"language-js"},void 0,"{",s("br",{}),"  ",s("span",{className:"hljs-string"},void 0,'"plugins"'),": [",s("span",{className:"hljs-string"},void 0,'"../path/to/plugin.js"'),"]",s("br",{}),"}",s("br",{}))),D=s("p",{},void 0,"To provide plugin specific config change the following:"),S=s("pre",{},void 0,s("code",{className:"language-js"},void 0,"{",s("br",{}),"  ",s("span",{className:"hljs-string"},void 0,'"plugins"'),": [",s("span",{className:"hljs-string"},void 0,'"chrome"'),"]",s("br",{}),"}",s("br",{}))),A=s("p",{},void 0,"To this:"),U=s("pre",{},void 0,s("code",{className:"language-js"},void 0,"{",s("br",{}),"  ",s("span",{className:"hljs-string"},void 0,'"plugins"'),": [",s("br",{}),"    [",s("span",{className:"hljs-string"},void 0,'"chrome"'),", { ",s("span",{className:"hljs-string"},void 0,'"extensionId"'),": ",s("span",{className:"hljs-string"},void 0,'"1234"'),", ",s("span",{className:"hljs-string"},void 0,'"build"'),": ",s("span",{className:"hljs-string"},void 0,'"my-compiled-extension.zip"')," }]",s("br",{}),"  ]",s("br",{}),"}",s("br",{})));var G=e=>s("div",{className:e.className},void 0,s("section",{},void 0,g,s("p",{},void 0,h," uses the package ",s(c,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/webpack/tapable",className:"external-link"},void 0,"tapable")," to expose a plugin system. Go ",s(c,{currentPage:e.currentPage,to:"/auto/pages/writing-plugins.html"},void 0,"here")," to learn how to write one!"),s("h2",{id:"using-plugins"},void 0,"Using Plugins ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#using-plugins","aria-hidden":"true"})),s("p",{},void 0,"To use a plugin you can either supply the plugin via a CLI arg or in your ",s(c,{currentPage:e.currentPage,to:"/auto/pages/autorc.html#plugins"},void 0,".autorc"),"."),v,s("h3",{id:"defaults"},void 0,"Defaults ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#defaults","aria-hidden":"true"})),f,s("ul",{},void 0,s("li",{},void 0,"Installed through ",m," => uses ",s(c,{currentPage:e.currentPage,to:"/auto/plugins/npm/README.html"},void 0,b)),s("li",{},void 0,"Installed through executable => uses ",s(c,{currentPage:e.currentPage,to:"/auto/plugins/git-tag/README.html"},void 0,y))),s("h3",{id:"no-plugins"},void 0,"No Plugins ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#no-plugins","aria-hidden":"true"})),P,N,s("h2",{id:"plugin-declaration"},void 0,"Plugin Declaration ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#plugin-declaration","aria-hidden":"true"})),j,s("h3",{id:"official-plugins"},void 0,"Official Plugins ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#official-plugins","aria-hidden":"true"})),w,k,s("h3",{id:"npm-package"},void 0,O," package ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#npm-package","aria-hidden":"true"})),L,E,_,C,I,s("h3",{id:"local-plugin"},void 0,"Local Plugin ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#local-plugin","aria-hidden":"true"})),M,x,s("h2",{id:"plugin-configuration"},void 0,"Plugin Configuration ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#plugin-configuration","aria-hidden":"true"})),D,S,A,U));a.default=G,e.exports=a.default}}]);
//# sourceMappingURL=plugins.js.map