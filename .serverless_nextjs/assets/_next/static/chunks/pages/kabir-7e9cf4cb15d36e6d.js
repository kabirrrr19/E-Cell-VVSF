(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[971],{9709:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kabir",function(){return t(1284)}])},1284:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSP:function(){return i},default:function(){return o}});var n=t(5893),i=(t(1864),!0);function o(e){var r=e.d;return console.log(r),console.log("laudaa"),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("h1",{children:"Hello"})})}},1864:function(e){!function(){"use strict";var r={114:function(e){function r(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function t(e,r){for(var t,n="",i=0,o=-1,l=0,a=0;a<=e.length;++a){if(a<e.length)t=e.charCodeAt(a);else{if(47===t)break;t=47}if(47===t){if(o===a-1||1===l);else if(o!==a-1&&2===l){if(n.length<2||2!==i||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var f=n.lastIndexOf("/");if(f!==n.length-1){-1===f?(n="",i=0):i=(n=n.slice(0,f)).length-1-n.lastIndexOf("/"),o=a,l=0;continue}}else if(2===n.length||1===n.length){n="",i=0,o=a,l=0;continue}r&&(n.length>0?n+="/..":n="..",i=2)}else n.length>0?n+="/"+e.slice(o+1,a):n=e.slice(o+1,a),i=a-o-1;o=a,l=0}else 46===t&&-1!==l?++l:l=-1}return n}var n={resolve:function(){for(var e,n="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var l;o>=0?l=arguments[o]:(void 0===e&&(e=""),l=e),r(l),0!==l.length&&(n=l+"/"+n,i=47===l.charCodeAt(0))}return n=t(n,!i),i?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(e){if(r(e),0===e.length)return".";var n=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return 0!==(e=t(e,!n)).length||n||(e="."),e.length>0&&i&&(e+="/"),n?"/"+e:e},isAbsolute:function(e){return r(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var i=arguments[t];r(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":n.normalize(e)},relative:function(e,t){if(r(e),r(t),e===t)return"";if((e=n.resolve(e))===(t=n.resolve(t)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var o=e.length,l=o-i,a=1;a<t.length&&47===t.charCodeAt(a);++a);for(var f=t.length-a,c=l<f?l:f,h=-1,u=0;u<=c;++u){if(u===c){if(f>c){if(47===t.charCodeAt(a+u))return t.slice(a+u+1);if(0===u)return t.slice(a+u)}else l>c&&(47===e.charCodeAt(i+u)?h=u:0===u&&(h=0));break}var s=e.charCodeAt(i+u);if(s!==t.charCodeAt(a+u))break;47===s&&(h=u)}var g="";for(u=i+h+1;u<=o;++u)u!==o&&47!==e.charCodeAt(u)||(0===g.length?g+="..":g+="/..");return g.length>0?g+t.slice(a+h):(a+=h,47===t.charCodeAt(a)&&++a,t.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(r(e),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,i=-1,o=!0,l=e.length-1;l>=1;--l)if(47===(t=e.charCodeAt(l))){if(!o){i=l;break}}else o=!1;return-1===i?n?"/":".":n&&1===i?"//":e.slice(0,i)},basename:function(e,t){if(void 0!==t&&"string"!==typeof t)throw new TypeError('"ext" argument must be a string');r(e);var n,i=0,o=-1,l=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var a=t.length-1,f=-1;for(n=e.length-1;n>=0;--n){var c=e.charCodeAt(n);if(47===c){if(!l){i=n+1;break}}else-1===f&&(l=!1,f=n+1),a>=0&&(c===t.charCodeAt(a)?-1===--a&&(o=n):(a=-1,o=f))}return i===o?o=f:-1===o&&(o=e.length),e.slice(i,o)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!l){i=n+1;break}}else-1===o&&(l=!1,o=n+1);return-1===o?"":e.slice(i,o)},extname:function(e){r(e);for(var t=-1,n=0,i=-1,o=!0,l=0,a=e.length-1;a>=0;--a){var f=e.charCodeAt(a);if(47!==f)-1===i&&(o=!1,i=a+1),46===f?-1===t?t=a:1!==l&&(l=1):-1!==t&&(l=-1);else if(!o){n=a+1;break}}return-1===t||-1===i||0===l||1===l&&t===i-1&&t===n+1?"":e.slice(t,i)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,r){var t=r.dir||r.root,n=r.base||(r.name||"")+(r.ext||"");return t?t===r.root?t+n:t+e+n:n}("/",e)},parse:function(e){r(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var n,i=e.charCodeAt(0),o=47===i;o?(t.root="/",n=1):n=0;for(var l=-1,a=0,f=-1,c=!0,h=e.length-1,u=0;h>=n;--h)if(47!==(i=e.charCodeAt(h)))-1===f&&(c=!1,f=h+1),46===i?-1===l?l=h:1!==u&&(u=1):-1!==l&&(u=-1);else if(!c){a=h+1;break}return-1===l||-1===f||0===u||1===u&&l===f-1&&l===a+1?-1!==f&&(t.base=t.name=0===a&&o?e.slice(1,f):e.slice(a,f)):(0===a&&o?(t.name=e.slice(1,l),t.base=e.slice(1,f)):(t.name=e.slice(a,l),t.base=e.slice(a,f)),t.ext=e.slice(l,f)),a>0?t.dir=e.slice(0,a-1):o&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,e.exports=n}},t={};function n(e){var i=t[e];if(void 0!==i)return i.exports;var o=t[e]={exports:{}},l=!0;try{r[e](o,o.exports,n),l=!1}finally{l&&delete t[e]}return o.exports}n.ab="//";var i=n(114);e.exports=i}()}},function(e){e.O(0,[774,888,179],(function(){return r=9709,e(e.s=r);var r}));var r=e.O();_N_E=r}]);