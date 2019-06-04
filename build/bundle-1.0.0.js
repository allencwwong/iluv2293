!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ES6Promise=e()}(this,function(){"use strict";function c(t){return"function"==typeof t}var r=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},n=0,e=void 0,o=void 0,s=function(t,e){h[n]=t,h[n+1]=e,2===(n+=2)&&(o?o(d):m())};var t="undefined"!=typeof window?window:void 0,i=t||{},a=i.MutationObserver||i.WebKitMutationObserver,u="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),f="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function l(){var t=setTimeout;return function(){return t(d,1)}}var h=new Array(1e3);function d(){for(var t=0;t<n;t+=2){(0,h[t])(h[t+1]),h[t]=void 0,h[t+1]=void 0}n=0}var p,y,b,v,m=void 0;function w(t,e){var r=this,n=new this.constructor(A);void 0===n[g]&&F(n);var o=r._state;if(o){var i=arguments[o-1];s(function(){return R(o,n,i,r._result)})}else C(r,n,t,e);return n}function _(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(A);return D(e,t),e}m=u?function(){return process.nextTick(d)}:a?(y=0,b=new a(d),v=document.createTextNode(""),b.observe(v,{characterData:!0}),function(){v.data=y=++y%2}):f?((p=new MessageChannel).port1.onmessage=d,function(){return p.port2.postMessage(0)}):void 0===t&&"function"==typeof require?function(){try{var t=Function("return this")().require("vertx");return void 0!==(e=t.runOnLoop||t.runOnContext)?function(){e(d)}:l()}catch(t){return l()}}():l();var g=Math.random().toString(36).substring(2);function A(){}var E=void 0,x=1,T=2,O={error:null};function j(t){try{return t.then}catch(t){return O.error=t,O}}function B(t,e,r){e.constructor===t.constructor&&r===w&&e.constructor.resolve===_?function(e,t){t._state===x?S(e,t._result):t._state===T?U(e,t._result):C(t,void 0,function(t){return D(e,t)},function(t){return U(e,t)})}(t,e):r===O?(U(t,O.error),O.error=null):void 0===r?S(t,e):c(r)?function(t,n,o){s(function(e){var r=!1,t=function(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}(o,n,function(t){r||(r=!0,n!==t?D(e,t):S(e,t))},function(t){r||(r=!0,U(e,t))},e._label);!r&&t&&(r=!0,U(e,t))},t)}(t,e,r):S(t,e)}function D(t,e){t===e?U(t,new TypeError("You cannot resolve a promise with itself")):!function(t){var e=typeof t;return null!==t&&("object"==e||"function"==e)}(e)?S(t,e):B(t,e,j(e))}function P(t){t._onerror&&t._onerror(t._result),M(t)}function S(t,e){t._state===E&&(t._result=e,t._state=x,0!==t._subscribers.length&&s(M,t))}function U(t,e){t._state===E&&(t._state=T,t._result=e,s(P,t))}function C(t,e,r,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+x]=r,o[i+T]=n,0===i&&t._state&&s(M,t)}function M(t){var e=t._subscribers,r=t._state;if(0!==e.length){for(var n=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)n=e[s],o=e[s+r],n?R(r,n,o,i):o(i);t._subscribers.length=0}}function R(t,e,r,n){var o=c(r),i=void 0,s=void 0,a=void 0,u=void 0;if(o){if((i=function(t,e){try{return t(e)}catch(t){return O.error=t,O}}(r,n))===O?(u=!0,s=i.error,i.error=null):a=!0,e===i)return void U(e,new TypeError("A promises callback cannot return that same promise."))}else i=n,a=!0;e._state!==E||(o&&a?D(e,i):u?U(e,s):t===x?S(e,i):t===T&&U(e,i))}var k=0;function F(t){t[g]=k++,t._state=void 0,t._result=void 0,t._subscribers=[]}var I=(L.prototype._enumerate=function(t){for(var e=0;this._state===E&&e<t.length;e++)this._eachEntry(t[e],e)},L.prototype._eachEntry=function(e,t){var r=this._instanceConstructor,n=r.resolve;if(n===_){var o=j(e);if(o===w&&e._state!==E)this._settledAt(e._state,t,e._result);else if("function"!=typeof o)this._remaining--,this._result[t]=e;else if(r===$){var i=new r(A);B(i,e,o),this._willSettleAt(i,t)}else this._willSettleAt(new r(function(t){return t(e)}),t)}else this._willSettleAt(n(e),t)},L.prototype._settledAt=function(t,e,r){var n=this.promise;n._state===E&&(this._remaining--,t===T?U(n,r):this._result[e]=r),0===this._remaining&&S(n,this._result)},L.prototype._willSettleAt=function(t,e){var r=this;C(t,void 0,function(t){return r._settledAt(x,e,t)},function(t){return r._settledAt(T,e,t)})},L);function L(t,e){this._instanceConstructor=t,this.promise=new t(A),this.promise[g]||F(this.promise),r(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&S(this.promise,this._result))):U(this.promise,new Error("Array Methods must be provided an Array"))}var $=(q.prototype.catch=function(t){return this.then(null,t)},q.prototype.finally=function(e){var r=this.constructor;return c(e)?this.then(function(t){return r.resolve(e()).then(function(){return t})},function(t){return r.resolve(e()).then(function(){throw t})}):this.then(e,e)},q);function q(t){this[g]=k++,this._result=this._state=void 0,this._subscribers=[],A!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof q?function(e,t){try{t(function(t){D(e,t)},function(t){U(e,t)})}catch(t){U(e,t)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return $.prototype.then=w,$.all=function(t){return new I(this,t).promise},$.race=function(o){var i=this;return r(o)?new i(function(t,e){for(var r=o.length,n=0;n<r;n++)i.resolve(o[n]).then(t,e)}):new i(function(t,e){return e(new TypeError("You must pass an array to race."))})},$.resolve=_,$.reject=function(t){var e=new this(A);return U(e,t),e},$._setScheduler=function(t){o=t},$._setAsap=function(t){s=t},$._asap=s,$.polyfill=function(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=$},($.Promise=$).polyfill(),$}),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.WHATWGFetch={})}(this,function(a){"use strict";var e="URLSearchParams"in self,r="Symbol"in self&&"iterator"in Symbol,u="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),n="FormData"in self,o="ArrayBuffer"in self;if(o)var i=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],s=ArrayBuffer.isView||function(t){return t&&-1<i.indexOf(Object.prototype.toString.call(t))};function c(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function f(t){return"string"!=typeof t&&(t=String(t)),t}function t(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return r&&(t[Symbol.iterator]=function(){return t}),t}function l(e){this.map={},e instanceof l?e.forEach(function(t,e){this.append(e,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function h(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function d(r){return new Promise(function(t,e){r.onload=function(){t(r.result)},r.onerror=function(){e(r.error)}})}function p(t){var e=new FileReader,r=d(e);return e.readAsArrayBuffer(t),r}function y(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(t){(this._bodyInit=t)?"string"==typeof t?this._bodyText=t:u&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:n&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:e&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():o&&u&&function(t){return t&&DataView.prototype.isPrototypeOf(t)}(t)?(this._bodyArrayBuffer=y(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):o&&(ArrayBuffer.prototype.isPrototypeOf(t)||s(t))?this._bodyArrayBuffer=y(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},u&&(this.blob=function(){var t=h(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?h(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(p)}),this.text=function(){var t=h(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,r=d(e);return e.readAsText(t),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}l.prototype.append=function(t,e){t=c(t),e=f(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},l.prototype.delete=function(t){delete this.map[c(t)]},l.prototype.get=function(t){return t=c(t),this.has(t)?this.map[t]:null},l.prototype.has=function(t){return this.map.hasOwnProperty(c(t))},l.prototype.set=function(t,e){this.map[c(t)]=f(e)},l.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},l.prototype.keys=function(){var r=[];return this.forEach(function(t,e){r.push(e)}),t(r)},l.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),t(e)},l.prototype.entries=function(){var r=[];return this.forEach(function(t,e){r.push([e,t])}),t(r)},r&&(l.prototype[Symbol.iterator]=l.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function m(t,e){var r=(e=e||{}).body;if(t instanceof m){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new l(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new l(e.headers)),this.method=function(t){var e=t.toUpperCase();return-1<v.indexOf(e)?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function w(t){var o=new FormData;return t.trim().split("&").forEach(function(t){if(t){var e=t.split("="),r=e.shift().replace(/\+/g," "),n=e.join("=").replace(/\+/g," ");o.append(decodeURIComponent(r),decodeURIComponent(n))}}),o}function _(t,e){e=e||{},this.type="default",this.status=void 0===e.status?200:e.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new l(e.headers),this.url=e.url||"",this._initBody(t)}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},b.call(m.prototype),b.call(_.prototype),_.prototype.clone=function(){return new _(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},_.error=function(){var t=new _(null,{status:0,statusText:""});return t.type="error",t};var g=[301,302,303,307,308];_.redirect=function(t,e){if(-1===g.indexOf(e))throw new RangeError("Invalid status code");return new _(null,{status:e,headers:{location:t}})},a.DOMException=self.DOMException;try{new a.DOMException}catch(t){a.DOMException=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},a.DOMException.prototype=Object.create(Error.prototype),a.DOMException.prototype.constructor=a.DOMException}function A(i,s){return new Promise(function(r,t){var e=new m(i,s);if(e.signal&&e.signal.aborted)return t(new a.DOMException("Aborted","AbortError"));var n=new XMLHttpRequest;function o(){n.abort()}n.onload=function(){var t={status:n.status,statusText:n.statusText,headers:function(t){var o=new l;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var e=t.split(":"),r=e.shift().trim();if(r){var n=e.join(":").trim();o.append(r,n)}}),o}(n.getAllResponseHeaders()||"")};t.url="responseURL"in n?n.responseURL:t.headers.get("X-Request-URL");var e="response"in n?n.response:n.responseText;r(new _(e,t))},n.onerror=function(){t(new TypeError("Network request failed"))},n.ontimeout=function(){t(new TypeError("Network request failed"))},n.onabort=function(){t(new a.DOMException("Aborted","AbortError"))},n.open(e.method,e.url,!0),"include"===e.credentials?n.withCredentials=!0:"omit"===e.credentials&&(n.withCredentials=!1),"responseType"in n&&u&&(n.responseType="blob"),e.headers.forEach(function(t,e){n.setRequestHeader(e,t)}),e.signal&&(e.signal.addEventListener("abort",o),n.onreadystatechange=function(){4===n.readyState&&e.signal.removeEventListener("abort",o)}),n.send(void 0===e._bodyInit?null:e._bodyInit)})}A.polyfill=!0,self.fetch||(self.fetch=A,self.Headers=l,self.Request=m,self.Response=_),a.Headers=l,a.Request=m,a.Response=_,a.fetch=A,Object.defineProperty(a,"__esModule",{value:!0})});"use strict";var isMobile=!(568<$(window).width());console.log(isMobile),$(".carousel").slick({centerMode:!0,slidesToShow:5,arrows:!0,prevArrow:".arrow-prev",nextArrow:".arrow-next",slidesToScroll:1,responsive:[{breakpoint:768,settings:{arrows:!1,centerMode:!1,slidesToShow:1}}]});var jsonURL="https://s.yimg.com/cv/apiv2/default/yahoo/oot/assets/js/carousel-slide-desc-1.0.0.json";function fetchCarouselDescription(){return fetch(jsonURL).then(function(t){return t.json()}).then(function(t){return t})}function getCarouselDescription(t){var e=$(".slick-slide.slick-current.slick-active img").data("item");$(".carousel-panel").html(t.randomThoughts[e])}function setArrowAlignment(){var t=($(".slick-list").height()-$(".arrow-prev").height())/2+"px";$(".arrow").css({top:t})}fetchCarouselDescription().then(function(r){getCarouselDescription(r),$(".arrow").on("click",function(){getCarouselDescription(r)}),$(".carousel").on("swipe",function(){getCarouselDescription(r)}),$(".slick-slide").on("click",function(t){t.preventDefault(),console.log("slide clicked");var e=$(this).data("slick-index");$(".carousel").slick("slickGoTo",e),getCarouselDescription(r)})}),setArrowAlignment(),window.onresize=function(t){setArrowAlignment()};