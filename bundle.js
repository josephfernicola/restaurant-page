(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>p});var o=n(81),a=n.n(o),r=n(645),c=n.n(r),i=n(667),s=n.n(i),d=new URL(n(236),n.b),l=c()(a()),u=s()(d);l.push([t.id,".headline {\n    text-align: center;\n    font-weight: bold;\n    font-size: 40px;\n    margin-top: 50px;\n}\n\nimg {\n    width: 300px;\n    height: 300px;\n}\n\nbody {\n    background-image: url("+u+");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-attachment: fixed;\n  \n}\n\np1 {\n    font-size: 30px;\n    margin-top: 50px;\n    max-width: 400px;\n}\n\n\nbutton {\n    width: 80px;\n    background-color: black;\n    color: black;\n    margin: 10px;\n    border-style: none;\n    outline: none;\n    cursor: pointer;\n    font-size: 25px;\n    font-weight: 500;\n \n}\n\n.home > p {\n    text-align: center;\n    font-size: 35px;\n    margin-top: 30px;\n}\n\n.menu, .contact, .header {\n    text-align: center;\n}\n\n.contact {\n    font-size: 40px;\n    font-weight: bold;\n    margin-top: 30px;\n}\n\n.menu {\n    margin-top: 30px;\n}\n\n.button-nav {\n    background-color: transparent;\n    border-bottom: 2px solid transparent;\n    font-weight: 700px;\n}\n\n.button-nav.active {\n    border-bottom: 2px solid black;\n}\n\n.button-nav:hover {\n    transform: translateY(-5px);\n}",""]);const p=l},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,a,r){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);o&&c[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var r={},c=[],i=0;i<t.length;i++){var s=t[i],d=o.base?s[0]+o.base:s[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=a(m,o);o.byIndex=i,e.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var r=o(t=t||[],a=a||{});return function(t){t=t||[];for(var c=0;c<r.length;c++){var i=n(r[c]);e[i].references--}for(var s=o(t,a),d=0;d<r.length;d++){var l=n(r[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=s}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},236:(t,e,n)=>{t.exports=n.p+"149839622d35d575b18f.png"}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return t[o](r,r.exports,n),r.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,(()=>{var t=n(379),e=n.n(t),o=n(795),a=n.n(o),r=n(569),c=n.n(r),i=n(565),s=n.n(i),d=n(216),l=n.n(d),u=n(589),p=n.n(u),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");return t.classList.add("home"),t.appendChild(function(t){const e=document.createElement("p");return e.textContent="Here at Giuseppee's, we value quality Italian food made fresh for you. When you take a seat in Giussepe's, you will feel like you have been teleported to Naples. Come and Join Us!",e}()),t}())};function v(t,e){const n=document.createElement("div");n.classList.add("menu-item");const o=document.createElement("h2");o.textContent=t;const a=document.createElement("h2");a.textContent=e;const r=document.createElement("img");return r.src=`${t}.png`,r.alt=`${t}`,n.appendChild(r),n.appendChild(o),n.appendChild(a),n}function g(){const t=document.createElement("header");t.classList.add("header");const e=document.createElement("h1");return e.classList.add("restaurant-name"),e.textContent="Giuseppe's Italian Palace",t.appendChild(e),t.appendChild(function(){const t=document.createElement("nav"),e=document.createElement("button");e.classList.add("button-nav"),e.textContent="Home",e.addEventListener("click",(t=>{t.target.classList.contains("active")||(b(e),h())}));const n=document.createElement("button");n.classList.add("button-nav"),n.textContent="Menu",n.addEventListener("click",(t=>{t.target.classList.contains("active")||(b(n),function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");return t.classList.add("menu"),t.appendChild(v("Meatballs","$23")),t.appendChild(v("Pasta","$18")),t.appendChild(v("Parm","$20")),t.appendChild(v("Pizza","$14")),t.appendChild(v("Gnocchi","$18")),t}())}())}));const o=document.createElement("button");return o.classList.add("button-nav"),o.textContent="Contact",o.addEventListener("click",(t=>{t.target.classList.contains("active")||(b(o),function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("contact");const e=document.createElement("p");e.textContent="888-888-8888";const n=document.createElement("p");return n.textContent="123 Naples Way",t.appendChild(e),t.appendChild(n),t}())}())})),t.appendChild(e),t.appendChild(n),t.appendChild(o),t}()),t}function b(t){document.querySelectorAll(".button-nav").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}!function(){const t=document.getElementById("content");t.appendChild(g()),t.appendChild(function(){const t=document.createElement("main");return t.classList.add("main"),t.setAttribute("id","main"),t}()),h()}()})()})();