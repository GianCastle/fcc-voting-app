window.Arrive=function(){"use strict";function a(a){return"object"==typeof a&&"nodeType"in a&&1===a.nodeType}function b(){var b;for(b in f)f.hasOwnProperty(b)&&(a(f[b].target)?c(f[b]):d(f[b]));g=!1}function c(a){var b,c=window.innerHeight||document.documentElement.clientHeight;b=a.target.getBoundingClientRect(),b.bottom<0||b.top>c?0<=a.target.className.indexOf("waypoint-visible")&&(a.target.className=a.target.className.replace(/(?:^|\s)waypoint-visible(?!\S)/,""),"function"==typeof a.no_longer_visible_callback&&a.no_longer_visible_callback(a.target)):(0>a.target.className.indexOf("waypoint-once")&&(a.target.className+=" waypoint-once"),0>a.target.className.indexOf("waypoint-visible")&&(a.target.className+=" waypoint-visible","function"==typeof a.visible_callback&&a.visible_callback(a.target)))}function d(a){var b,c,d,e=window.innerHeight||document.documentElement.clientHeight;for(c=document.querySelectorAll(a.target),b=0;b<c.length;b+=1)d=c[b].getBoundingClientRect(),d.bottom<0||d.top>e?0<=c[b].className.indexOf("waypoint-visible")&&(c[b].className=c[b].className.replace(/(?:^|\s)waypoint-visible(?!\S)/,""),"function"==typeof a.no_longer_visible_callback&&a.no_longer_visible_callback(c[b])):(0>c[b].className.indexOf("waypoint-once")&&(c[b].className+=" waypoint-once"),0>c[b].className.indexOf("waypoint-visible")&&(c[b].className+=" waypoint-visible","function"==typeof a.visible_callback&&a.visible_callback(c[b])))}var e={},f=[],g=!1;return e.reset=function(){f=[]},window.addEventListener("scroll",function(){g||requestAnimationFrame(b),g=!0}),e.register_selector=function(a,b,c){if("string"!=typeof a)throw"selector must be a string";return this._register(a,b,c)},e.register_element=function(b,c,d){if(!a(b))throw"element is not a DOM Element object";return this._register(b,c,d)},e._register=function(a,b,c){var d={target:a};return"undefined"!=typeof b&&(d.visible_callback=b),"undefined"!=typeof c&&(d.no_longer_visible_callback=c),f.push(d),d},e}(),function(){for(var a=0,b=["ms","moz","webkit","o"],c=0;c<b.length&&!window.requestAnimationFrame;++c)window.requestAnimationFrame=window[b[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[b[c]+"CancelAnimationFrame"]||window[b[c]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(b){var c=(new Date).getTime(),d=Math.max(0,16-(c-a)),e=window.setTimeout(function(){b(c+d)},d);return a=c+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)})}(),document.querySelectorAll||(document.querySelectorAll=function(a){var b,c=document.createElement("style"),d=[];for(document.documentElement.firstChild.appendChild(c),document._qsa=[],c.styleSheet.cssText=a+"{x-qsa:expression(document._qsa && document._qsa.push(this))}",window.scrollBy(0,0),c.parentNode.removeChild(c);document._qsa.length;)b=document._qsa.shift(),b.style.removeAttribute("x-qsa"),d.push(b);return document._qsa=null,d}),document.querySelector||(document.querySelector=function(a){var b=document.querySelectorAll(a);return b.length?b[0]:null});
//# sourceMappingURL=arrive.min.js.map
