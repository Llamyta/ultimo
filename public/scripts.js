/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

;/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Popper = factory());
}(this, (function () { 'use strict';

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

return Popper;

})));
//# sourceMappingURL=popper.js.map

;/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery'), require('popper.js')) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'popper.js'], factory) :
  (global = global || self, factory(global.bootstrap = {}, global.jQuery, global.Popper));
}(this, (function (exports, $, Popper) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.4.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $ === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $.fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.4.1';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };
  var Event = {
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert =
  /*#__PURE__*/
  function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $(element).closest("." + ClassName.ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(Event.CLOSE);
      $(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $(element).removeClass(ClassName.SHOW);

      if (!$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(Event.CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'button';
  var VERSION$1 = '4.4.1';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];
  var ClassName$1 = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };
  var Selector$1 = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLES: '[data-toggle="buttons"]',
    DATA_TOGGLE: '[data-toggle="button"]',
    DATA_TOGGLES_BUTTONS: '[data-toggle="buttons"] .btn',
    INPUT: 'input:not([type="hidden"])',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };
  var Event$1 = {
    CLICK_DATA_API: "click" + EVENT_KEY$1 + DATA_API_KEY$1,
    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1),
    LOAD_DATA_API: "load" + EVENT_KEY$1 + DATA_API_KEY$1
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button =
  /*#__PURE__*/
  function () {
    function Button(element) {
      this._element = element;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this._element).closest(Selector$1.DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(Selector$1.INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(Selector$1.ACTIVE);

              if (activeElement) {
                $(activeElement).removeClass(ClassName$1.ACTIVE);
              }
            }
          } else if (input.type === 'checkbox') {
            if (this._element.tagName === 'LABEL' && input.checked === this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            }
          } else {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            triggerChangeEvent = false;
          }

          if (triggerChangeEvent) {
            input.checked = !this._element.classList.contains(ClassName$1.ACTIVE);
            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName$1.ACTIVE));
        }

        if (triggerChangeEvent) {
          $(this._element).toggleClass(ClassName$1.ACTIVE);
        }
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY$1, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$1.CLICK_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;

    if (!$(button).hasClass(ClassName$1.BUTTON)) {
      button = $(button).closest(Selector$1.BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(Selector$1.INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      Button._jQueryInterface.call($(button), 'toggle');
    }
  }).on(Event$1.FOCUS_BLUR_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector$1.BUTTON)[0];
    $(button).toggleClass(ClassName$1.FOCUS, /^focus(in)?$/.test(event.type));
  });
  $(window).on(Event$1.LOAD_DATA_API, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(Selector$1.DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(Selector$1.INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(ClassName$1.ACTIVE);
      } else {
        button.classList.remove(ClassName$1.ACTIVE);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(Selector$1.DATA_TOGGLE));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(ClassName$1.ACTIVE);
      } else {
        _button.classList.remove(ClassName$1.ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$1] = Button._jQueryInterface;
  $.fn[NAME$1].Constructor = Button;

  $.fn[NAME$1].noConflict = function () {
    $.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'carousel';
  var VERSION$2 = '4.4.1';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };
  var Event$2 = {
    SLIDE: "slide" + EVENT_KEY$2,
    SLID: "slid" + EVENT_KEY$2,
    KEYDOWN: "keydown" + EVENT_KEY$2,
    MOUSEENTER: "mouseenter" + EVENT_KEY$2,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$2,
    TOUCHSTART: "touchstart" + EVENT_KEY$2,
    TOUCHMOVE: "touchmove" + EVENT_KEY$2,
    TOUCHEND: "touchend" + EVENT_KEY$2,
    POINTERDOWN: "pointerdown" + EVENT_KEY$2,
    POINTERUP: "pointerup" + EVENT_KEY$2,
    DRAG_START: "dragstart" + EVENT_KEY$2,
    LOAD_DATA_API: "load" + EVENT_KEY$2 + DATA_API_KEY$2,
    CLICK_DATA_API: "click" + EVENT_KEY$2 + DATA_API_KEY$2
  };
  var ClassName$2 = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item',
    POINTER_EVENT: 'pointer-event'
  };
  var Selector$2 = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    ITEM_IMG: '.carousel-item img',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
  };
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel =
  /*#__PURE__*/
  function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(Selector$2.INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(Selector$2.NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(Event$2.SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $(this._element).off(EVENT_KEY$2);
      $.removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default, {}, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $(this._element).on(Event$2.KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $(this._element).on(Event$2.MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(Event$2.MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $(this._element.querySelectorAll(Selector$2.ITEM_IMG)).on(Event$2.DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $(this._element).on(Event$2.POINTERDOWN, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(ClassName$2.POINTER_EVENT);
      } else {
        $(this._element).on(Event$2.TOUCHSTART, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.TOUCHMOVE, function (event) {
          return move(event);
        });
        $(this._element).on(Event$2.TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(Selector$2.ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(Selector$2.ACTIVE_ITEM));

      var slideEvent = $.Event(Event$2.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(Selector$2.ACTIVE));
        $(indicators).removeClass(ClassName$2.ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName$2.ACTIVE);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName$2.LEFT;
        orderClassName = ClassName$2.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName$2.RIGHT;
        orderClassName = ClassName$2.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(ClassName$2.ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(Event$2.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($(this._element).hasClass(ClassName$2.SLIDE)) {
        $(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName$2.ACTIVE);
          $(activeElement).removeClass(ClassName$2.ACTIVE + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $(_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $(activeElement).removeClass(ClassName$2.ACTIVE);
        $(nextElement).addClass(ClassName$2.ACTIVE);
        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$2);

        var _config = _objectSpread2({}, Default, {}, $(this).data());

        if (typeof config === 'object') {
          _config = _objectSpread2({}, _config, {}, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(ClassName$2.CAROUSEL)) {
        return;
      }

      var config = _objectSpread2({}, $(target).data(), {}, $(this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$2.CLICK_DATA_API, Selector$2.DATA_SLIDE, Carousel._dataApiClickHandler);
  $(window).on(Event$2.LOAD_DATA_API, function () {
    var carousels = [].slice.call(document.querySelectorAll(Selector$2.DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $(carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$2] = Carousel._jQueryInterface;
  $.fn[NAME$2].Constructor = Carousel;

  $.fn[NAME$2].noConflict = function () {
    $.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'collapse';
  var VERSION$3 = '4.4.1';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var Event$3 = {
    SHOW: "show" + EVENT_KEY$3,
    SHOWN: "shown" + EVENT_KEY$3,
    HIDE: "hide" + EVENT_KEY$3,
    HIDDEN: "hidden" + EVENT_KEY$3,
    CLICK_DATA_API: "click" + EVENT_KEY$3 + DATA_API_KEY$3
  };
  var ClassName$3 = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };
  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };
  var Selector$3 = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse =
  /*#__PURE__*/
  function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(Selector$3.DATA_TOGGLE));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if ($(this._element).hasClass(ClassName$3.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(Selector$3.ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(ClassName$3.COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(Event$3.SHOW);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

        if (!activesData) {
          $(actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(ClassName$3.COLLAPSE).addClass(ClassName$3.COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(ClassName$3.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).addClass(ClassName$3.SHOW);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $(_this._element).trigger(Event$3.SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var startEvent = $.Event(Event$3.HIDE);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $(this._element).addClass(ClassName$3.COLLAPSING).removeClass(ClassName$3.COLLAPSE).removeClass(ClassName$3.SHOW);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(ClassName$3.SHOW)) {
              $(trigger).addClass(ClassName$3.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $(_this2._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).trigger(Event$3.HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$1, {}, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $(children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $(element).hasClass(ClassName$3.SHOW);

      if (triggerArray.length) {
        $(triggerArray).toggleClass(ClassName$3.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$3);

        var _config = _objectSpread2({}, Default$1, {}, $this.data(), {}, typeof config === 'object' && config ? config : {});

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$3.CLICK_DATA_API, Selector$3.DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $(selectors).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$3] = Collapse._jQueryInterface;
  $.fn[NAME$3].Constructor = Collapse;

  $.fn[NAME$3].noConflict = function () {
    $.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.4.1';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $.fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var Event$4 = {
    HIDE: "hide" + EVENT_KEY$4,
    HIDDEN: "hidden" + EVENT_KEY$4,
    SHOW: "show" + EVENT_KEY$4,
    SHOWN: "shown" + EVENT_KEY$4,
    CLICK: "click" + EVENT_KEY$4,
    CLICK_DATA_API: "click" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYUP_DATA_API: "keyup" + EVENT_KEY$4 + DATA_API_KEY$4
  };
  var ClassName$4 = {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    DROPRIGHT: 'dropright',
    DROPLEFT: 'dropleft',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    POSITION_STATIC: 'position-static'
  };
  var Selector$4 = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
  };
  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end',
    RIGHT: 'right-start',
    RIGHTEND: 'right-end',
    LEFT: 'left-start',
    LEFTEND: 'left-end'
  };
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown =
  /*#__PURE__*/
  function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var isActive = $(this._menu).hasClass(ClassName$4.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || $(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event$4.SHOW, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar && usePopper) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $(parent).addClass(ClassName$4.POSITION_STATIC);
        }

        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $(parent).closest(Selector$4.NAVBAR_NAV).length === 0) {
        $(document.body).children().on('mouseover', null, $.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || !$(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $.Event(Event$4.HIDE, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$4);
      $(this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $(this._element).on(Event$4.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, this.constructor.Default, {}, $(this._element).data(), {}, config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(Selector$4.MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element.parentNode);
      var placement = AttachmentMap.BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(ClassName$4.DROPUP)) {
        placement = AttachmentMap.TOP;

        if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($parentDropdown.hasClass(ClassName$4.DROPRIGHT)) {
        placement = AttachmentMap.RIGHT;
      } else if ($parentDropdown.hasClass(ClassName$4.DROPLEFT)) {
        placement = AttachmentMap.LEFT;
      } else if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2({}, data.offsets, {}, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper.js if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _objectSpread2({}, popperConfig, {}, this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$4);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(Selector$4.DATA_TOGGLE));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $(toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$(parent).hasClass(ClassName$4.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(Event$4.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $(dropdownMenu).removeClass(ClassName$4.SHOW);
        $(parent).removeClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(Selector$4.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $(parent).hasClass(ClassName$4.SHOW);

      if (!isActive && event.which === ESCAPE_KEYCODE) {
        return;
      }

      if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          var toggle = parent.querySelector(Selector$4.DATA_TOGGLE);
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(Selector$4.VISIBLE_ITEMS)).filter(function (item) {
        return $(item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$4.KEYDOWN_DATA_API, Selector$4.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event$4.KEYDOWN_DATA_API, Selector$4.MENU, Dropdown._dataApiKeydownHandler).on(Event$4.CLICK_DATA_API + " " + Event$4.KEYUP_DATA_API, Dropdown._clearMenus).on(Event$4.CLICK_DATA_API, Selector$4.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(Event$4.CLICK_DATA_API, Selector$4.FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$4] = Dropdown._jQueryInterface;
  $.fn[NAME$4].Constructor = Dropdown;

  $.fn[NAME$4].noConflict = function () {
    $.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$5 = 'modal';
  var VERSION$5 = '4.4.1';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $.fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var Event$5 = {
    HIDE: "hide" + EVENT_KEY$5,
    HIDE_PREVENTED: "hidePrevented" + EVENT_KEY$5,
    HIDDEN: "hidden" + EVENT_KEY$5,
    SHOW: "show" + EVENT_KEY$5,
    SHOWN: "shown" + EVENT_KEY$5,
    FOCUSIN: "focusin" + EVENT_KEY$5,
    RESIZE: "resize" + EVENT_KEY$5,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$5,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY$5,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY$5,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY$5,
    CLICK_DATA_API: "click" + EVENT_KEY$5 + DATA_API_KEY$5
  };
  var ClassName$5 = {
    SCROLLABLE: 'modal-dialog-scrollable',
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show',
    STATIC: 'modal-static'
  };
  var Selector$5 = {
    DIALOG: '.modal-dialog',
    MODAL_BODY: '.modal-body',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal =
  /*#__PURE__*/
  function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(Selector$5.DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($(this._element).hasClass(ClassName$5.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(Event$5.SHOW, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(Event$5.CLICK_DISMISS, Selector$5.DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(Event$5.MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(Event$5.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $.Event(Event$5.HIDE);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $(this._element).hasClass(ClassName$5.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(Event$5.FOCUSIN);
      $(this._element).removeClass(ClassName$5.SHOW);
      $(this._element).off(Event$5.CLICK_DISMISS);
      $(this._dialog).off(Event$5.MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICK_DATA_API` event that should remain
       */

      $(document).off(Event$5.FOCUSIN);
      $.removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$3, {}, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      if (this._config.backdrop === 'static') {
        var hideEventPrevented = $.Event(Event$5.HIDE_PREVENTED);
        $(this._element).trigger(hideEventPrevented);

        if (hideEventPrevented.defaultPrevented) {
          return;
        }

        this._element.classList.add(ClassName$5.STATIC);

        var modalTransitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function () {
          _this3._element.classList.remove(ClassName$5.STATIC);
        }).emulateTransitionEnd(modalTransitionDuration);

        this._element.focus();
      } else {
        this.hide();
      }
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $(this._element).hasClass(ClassName$5.FADE);
      var modalBody = this._dialog ? this._dialog.querySelector(Selector$5.MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      if ($(this._dialog).hasClass(ClassName$5.SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName$5.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(Event$5.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $(_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $(document).off(Event$5.FOCUSIN) // Guard against infinite focus loop
      .on(Event$5.FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $(_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event$5.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE$1) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event$5.KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $(window).on(Event$5.RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $(window).off(Event$5.RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName$5.OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $(_this8._element).trigger(Event$5.HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $(this._element).hasClass(ClassName$5.FADE) ? ClassName$5.FADE : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName$5.BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(Event$5.CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          _this9._triggerBackdropTransition();
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName$5.SHOW);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName$5.SHOW);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($(this._element).hasClass(ClassName$5.FADE)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(Selector$5.STICKY_CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $(document.body).addClass(ClassName$5.OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding = $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + Selector$5.STICKY_CONTENT));
      $(elements).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName$5.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$5);

        var _config = _objectSpread2({}, Default$3, {}, $(this).data(), {}, typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$5.CLICK_DATA_API, Selector$5.DATA_TOGGLE, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $(target).data(DATA_KEY$5) ? 'toggle' : _objectSpread2({}, $(target).data(), {}, $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(Event$5.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event$5.HIDDEN, function () {
        if ($(_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$5] = Modal._jQueryInterface;
  $.fn[NAME$5].Constructor = Modal;

  $.fn[NAME$5].noConflict = function () {
    $.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.4.1): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, l = regExp.length; i < l; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.4.1';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $.fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var AttachmentMap$1 = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };
  var Event$6 = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var ClassName$6 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$6 = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };
  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip =
  /*#__PURE__*/
  function () {
    function Tooltip(element, config) {
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($(this.getTipElement()).hasClass(ClassName$6.SHOW)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $.removeData(this.element, this.constructor.DATA_KEY);
      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(ClassName$6.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, this._getPopperConfig(attachment));
        $(tip).addClass(ClassName$6.SHOW); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this._leave(null, _this);
          }
        };

        if ($(this.tip).hasClass(ClassName$6.FADE)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(ClassName$6.SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $(document.body).children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if ($(this.tip).hasClass(ClassName$6.FADE)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($(tip.querySelectorAll(Selector$6.TOOLTIP_INNER)), this.getTitle());
      $(tip).removeClass(ClassName$6.FADE + " " + ClassName$6.SHOW);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: Selector$6.ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _objectSpread2({}, defaultBsConfig, {}, this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2({}, data.offsets, {}, _this4.config.offset(data.offsets, _this4.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $(this.config.container);
      }

      return $(document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap$1[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $(_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $(this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _objectSpread2({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(ClassName$6.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $(this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _objectSpread2({}, this.constructor.Default, {}, dataAttributes, {}, typeof config === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      var popperInstance = popperData.instance;
      this.tip = popperInstance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $(tip).removeClass(ClassName$6.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$6);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$6;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$6] = Tooltip._jQueryInterface;
  $.fn[NAME$6].Constructor = Tooltip;

  $.fn[NAME$6].noConflict = function () {
    $.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$7 = 'popover';
  var VERSION$7 = '4.4.1';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $.fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _objectSpread2({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _objectSpread2({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var ClassName$7 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$7 = {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
  };
  var Event$7 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover =
  /*#__PURE__*/
  function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $(this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(Selector$7.TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(Selector$7.CONTENT), content);
      $tip.removeClass(ClassName$7.FADE + " " + ClassName$7.SHOW);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$7);

        var _config = typeof config === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$7;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$7] = Popover._jQueryInterface;
  $.fn[NAME$7].Constructor = Popover;

  $.fn[NAME$7].noConflict = function () {
    $.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.4.1';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $.fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var Event$8 = {
    ACTIVATE: "activate" + EVENT_KEY$8,
    SCROLL: "scroll" + EVENT_KEY$8,
    LOAD_DATA_API: "load" + EVENT_KEY$8 + DATA_API_KEY$6
  };
  var ClassName$8 = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active'
  };
  var Selector$8 = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    NAV_ITEMS: '.nav-item',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };
  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy =
  /*#__PURE__*/
  function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + Selector$8.NAV_LINKS + "," + (this._config.target + " " + Selector$8.LIST_ITEMS + ",") + (this._config.target + " " + Selector$8.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $(this._scrollElement).on(Event$8.SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$8);
      $(this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$6, {}, typeof config === 'object' && config ? config : {});

      if (typeof config.target !== 'string') {
        var id = $(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      var offsetLength = this._offsets.length;

      for (var i = offsetLength; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(ClassName$8.DROPDOWN_ITEM)) {
        $link.closest(Selector$8.DROPDOWN).find(Selector$8.DROPDOWN_TOGGLE).addClass(ClassName$8.ACTIVE);
        $link.addClass(ClassName$8.ACTIVE);
      } else {
        // Set triggered link as active
        $link.addClass(ClassName$8.ACTIVE); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_LINKS + ", " + Selector$8.LIST_ITEMS).addClass(ClassName$8.ACTIVE); // Handle special case when .nav-link is inside .nav-item

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_ITEMS).children(Selector$8.NAV_LINKS).addClass(ClassName$8.ACTIVE);
      }

      $(this._scrollElement).trigger(Event$8.ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(ClassName$8.ACTIVE);
      }).forEach(function (node) {
        return node.classList.remove(ClassName$8.ACTIVE);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$8);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(window).on(Event$8.LOAD_DATA_API, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(Selector$8.DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$8] = ScrollSpy._jQueryInterface;
  $.fn[NAME$8].Constructor = ScrollSpy;

  $.fn[NAME$8].noConflict = function () {
    $.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$9 = 'tab';
  var VERSION$9 = '4.4.1';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $.fn[NAME$9];
  var Event$9 = {
    HIDE: "hide" + EVENT_KEY$9,
    HIDDEN: "hidden" + EVENT_KEY$9,
    SHOW: "show" + EVENT_KEY$9,
    SHOWN: "shown" + EVENT_KEY$9,
    CLICK_DATA_API: "click" + EVENT_KEY$9 + DATA_API_KEY$7
  };
  var ClassName$9 = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$9 = {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    ACTIVE_UL: '> li > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab =
  /*#__PURE__*/
  function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName$9.ACTIVE) || $(this._element).hasClass(ClassName$9.DISABLED)) {
        return;
      }

      var target;
      var previous;
      var listElement = $(this._element).closest(Selector$9.NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? Selector$9.ACTIVE_UL : Selector$9.ACTIVE;
        previous = $.makeArray($(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(Event$9.HIDE, {
        relatedTarget: this._element
      });
      var showEvent = $.Event(Event$9.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(Event$9.HIDDEN, {
          relatedTarget: _this._element
        });
        var shownEvent = $.Event(Event$9.SHOWN, {
          relatedTarget: previous
        });
        $(previous).trigger(hiddenEvent);
        $(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $(container).find(Selector$9.ACTIVE_UL) : $(container).children(Selector$9.ACTIVE);
      var active = activeElements[0];
      var isTransitioning = callback && active && $(active).hasClass(ClassName$9.FADE);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $(active).removeClass(ClassName$9.SHOW).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(ClassName$9.ACTIVE);
        var dropdownChild = $(active.parentNode).find(Selector$9.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName$9.ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $(element).addClass(ClassName$9.ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(ClassName$9.FADE)) {
        element.classList.add(ClassName$9.SHOW);
      }

      if (element.parentNode && $(element.parentNode).hasClass(ClassName$9.DROPDOWN_MENU)) {
        var dropdownElement = $(element).closest(Selector$9.DROPDOWN)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector$9.DROPDOWN_TOGGLE));
          $(dropdownToggleList).addClass(ClassName$9.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$9.CLICK_DATA_API, Selector$9.DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$9] = Tab._jQueryInterface;
  $.fn[NAME$9].Constructor = Tab;

  $.fn[NAME$9].noConflict = function () {
    $.fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$a = 'toast';
  var VERSION$a = '4.4.1';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $.fn[NAME$a];
  var Event$a = {
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$a,
    HIDE: "hide" + EVENT_KEY$a,
    HIDDEN: "hidden" + EVENT_KEY$a,
    SHOW: "show" + EVENT_KEY$a,
    SHOWN: "shown" + EVENT_KEY$a
  };
  var ClassName$a = {
    FADE: 'fade',
    HIDE: 'hide',
    SHOW: 'show',
    SHOWING: 'showing'
  };
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var Selector$a = {
    DATA_DISMISS: '[data-dismiss="toast"]'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast =
  /*#__PURE__*/
  function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      var showEvent = $.Event(Event$a.SHOW);
      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      if (this._config.animation) {
        this._element.classList.add(ClassName$a.FADE);
      }

      var complete = function complete() {
        _this._element.classList.remove(ClassName$a.SHOWING);

        _this._element.classList.add(ClassName$a.SHOW);

        $(_this._element).trigger(Event$a.SHOWN);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(ClassName$a.HIDE);

      Util.reflow(this._element);

      this._element.classList.add(ClassName$a.SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(ClassName$a.SHOW)) {
        return;
      }

      var hideEvent = $.Event(Event$a.HIDE);
      $(this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      this._timeout = null;

      if (this._element.classList.contains(ClassName$a.SHOW)) {
        this._element.classList.remove(ClassName$a.SHOW);
      }

      $(this._element).off(Event$a.CLICK_DISMISS);
      $.removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$7, {}, $(this._element).data(), {}, typeof config === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $(this._element).on(Event$a.CLICK_DISMISS, Selector$a.DATA_DISMISS, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(ClassName$a.HIDE);

        $(_this3._element).trigger(Event$a.HIDDEN);
      };

      this._element.classList.remove(ClassName$a.SHOW);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY$a);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$a] = Toast._jQueryInterface;
  $.fn[NAME$a].Constructor = Toast;

  $.fn[NAME$a].noConflict = function () {
    $.fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bootstrap.js.map

;/*!
 * Material Design for Bootstrap 4
 *   Version: MDB FREE 4.10.1
 * 
 * 
 *   Copyright: Material Design for Bootstrap
 *   https://mdbootstrap.com/
 * 
 *   Read the license: https://mdbootstrap.com/general/license/
 * 
 * 
 *   Documentation: https://mdbootstrap.com/
 * 
 *   Getting started: https://mdbootstrap.com/docs/jquery/getting-started/download/
 * 
 *   Tutorials: https://mdbootstrap.com/education/bootstrap/
 * 
 *   Templates: https://mdbootstrap.com/templates/
 * 
 *   Support: https://mdbootstrap.com/support/
 * 
 *   Contact: office@mdbootstrap.com
 * 
 *   Attribution: Animate CSS, Twitter Bootstrap, Materialize CSS, Normalize CSS, Waves JS, WOW JS, Toastr, Chart.js, jquery.easing.js, velocity.min.js, chart.js, wow.js, scrolling-navbar.js, waves.js, forms-free.js, enhanced-modals.js, treeview.js
 */
! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(r, i, function(e) {
                return t[e]
            }.bind(null, i));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 142)
}([function(t, e, n) {
    (function(e) {
        var n = function(t) {
            return t && t.Math == Math && t
        };
        t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || Function("return this")()
    }).call(this, n(57))
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e, n) {
    var r = n(0),
        i = n(14),
        o = n(28),
        a = n(46),
        s = r.Symbol,
        l = i("wks");
    t.exports = function(t) {
        return l[t] || (l[t] = a && s[t] || (a ? s : o)("Symbol." + t))
    }
}, function(t, e, n) {
    var r = n(0),
        i = n(24).f,
        o = n(6),
        a = n(15),
        s = n(21),
        l = n(43),
        u = n(50);
    t.exports = function(t, e) {
        var n, c, d, f, h, p = t.target,
            g = t.global,
            v = t.stat;
        if (n = g ? r : v ? r[p] || s(p, {}) : (r[p] || {}).prototype)
            for (c in e) {
                if (f = e[c], d = t.noTargetGet ? (h = i(n, c)) && h.value : n[c], !u(g ? c : p + (v ? "." : "#") + c, t.forced) && void 0 !== d) {
                    if (typeof f == typeof d) continue;
                    l(f, d)
                }(t.sham || d && d.sham) && o(f, "sham", !0), a(n, c, f, t)
            }
    }
}, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e, n) {
    var r = n(7),
        i = n(9),
        o = n(17);
    t.exports = r ? function(t, e, n) {
        return i.f(t, e, o(1, n))
    } : function(t, e, n) {
        return t[e] = n, t
    }
}, function(t, e, n) {
    var r = n(1);
    t.exports = !r((function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(t, e, n) {
    var r = n(5);
    t.exports = function(t) {
        if (!r(t)) throw TypeError(String(t) + " is not an object");
        return t
    }
}, function(t, e, n) {
    var r = n(7),
        i = n(35),
        o = n(8),
        a = n(19),
        s = Object.defineProperty;
    e.f = r ? s : function(t, e, n) {
        if (o(t), e = a(e, !0), o(n), i) try {
            return s(t, e, n)
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
        return "value" in n && (t[e] = n.value), t
    }
}, function(t, e, n) {
    var r = n(32),
        i = n(13);
    t.exports = function(t) {
        return r(i(t))
    }
}, function(t, e, n) {
    var r = n(12),
        i = Math.min;
    t.exports = function(t) {
        return t > 0 ? i(r(t), 9007199254740991) : 0
    }
}, function(t, e) {
    var n = Math.ceil,
        r = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
    }
}, function(t, e) {
    t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on " + t);
        return t
    }
}, function(t, e, n) {
    var r = n(26),
        i = n(59);
    (t.exports = function(t, e) {
        return i[t] || (i[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: "3.3.2",
        mode: r ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function(t, e, n) {
    var r = n(0),
        i = n(14),
        o = n(6),
        a = n(4),
        s = n(21),
        l = n(36),
        u = n(22),
        c = u.get,
        d = u.enforce,
        f = String(l).split("toString");
    i("inspectSource", (function(t) {
        return l.call(t)
    })), (t.exports = function(t, e, n, i) {
        var l = !!i && !!i.unsafe,
            u = !!i && !!i.enumerable,
            c = !!i && !!i.noTargetGet;
        "function" == typeof n && ("string" != typeof e || a(n, "name") || o(n, "name", e), d(n).source = f.join("string" == typeof e ? e : "")), t !== r ? (l ? !c && t[e] && (u = !0) : delete t[e], u ? t[e] = n : o(t, e, n)) : u ? t[e] = n : s(e, n)
    })(Function.prototype, "toString", (function() {
        return "function" == typeof this && c(this).source || l.call(this)
    }))
}, function(t, e, n) {
    var r = n(13);
    t.exports = function(t) {
        return Object(r(t))
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}, function(t, e, n) {
    var r = n(5);
    t.exports = function(t, e) {
        if (!r(t)) return t;
        var n, i;
        if (e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
        if ("function" == typeof(n = t.valueOf) && !r(i = n.call(t))) return i;
        if (!e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e) {
    t.exports = {}
}, function(t, e, n) {
    var r = n(0),
        i = n(6);
    t.exports = function(t, e) {
        try {
            i(r, t, e)
        } catch (n) {
            r[t] = e
        }
        return e
    }
}, function(t, e, n) {
    var r, i, o, a = n(60),
        s = n(0),
        l = n(5),
        u = n(6),
        c = n(4),
        d = n(23),
        f = n(20),
        h = s.WeakMap;
    if (a) {
        var p = new h,
            g = p.get,
            v = p.has,
            m = p.set;
        r = function(t, e) {
            return m.call(p, t, e), e
        }, i = function(t) {
            return g.call(p, t) || {}
        }, o = function(t) {
            return v.call(p, t)
        }
    } else {
        var y = d("state");
        f[y] = !0, r = function(t, e) {
            return u(t, y, e), e
        }, i = function(t) {
            return c(t, y) ? t[y] : {}
        }, o = function(t) {
            return c(t, y)
        }
    }
    t.exports = {
        set: r,
        get: i,
        has: o,
        enforce: function(t) {
            return o(t) ? i(t) : r(t, {})
        },
        getterFor: function(t) {
            return function(e) {
                var n;
                if (!l(e) || (n = i(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                return n
            }
        }
    }
}, function(t, e, n) {
    var r = n(14),
        i = n(28),
        o = r("keys");
    t.exports = function(t) {
        return o[t] || (o[t] = i(t))
    }
}, function(t, e, n) {
    var r = n(7),
        i = n(42),
        o = n(17),
        a = n(10),
        s = n(19),
        l = n(4),
        u = n(35),
        c = Object.getOwnPropertyDescriptor;
    e.f = r ? c : function(t, e) {
        if (t = a(t), e = s(e, !0), u) try {
            return c(t, e)
        } catch (t) {}
        if (l(t, e)) return o(!i.f.call(t, e), t[e])
    }
}, function(t, e, n) {
    var r = n(71),
        i = n(32),
        o = n(16),
        a = n(11),
        s = n(47),
        l = [].push,
        u = function(t) {
            var e = 1 == t,
                n = 2 == t,
                u = 3 == t,
                c = 4 == t,
                d = 6 == t,
                f = 5 == t || d;
            return function(h, p, g, v) {
                for (var m, y, b = o(h), x = i(b), w = r(p, g, 3), S = a(x.length), k = 0, C = v || s, M = e ? C(h, S) : n ? C(h, 0) : void 0; S > k; k++)
                    if ((f || k in x) && (y = w(m = x[k], k, b), t))
                        if (e) M[k] = y;
                        else if (y) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return m;
                    case 6:
                        return k;
                    case 2:
                        l.call(M, m)
                } else if (c) return !1;
                return d ? -1 : u || c ? c : M
            }
        };
    t.exports = {
        forEach: u(0),
        map: u(1),
        filter: u(2),
        some: u(3),
        every: u(4),
        find: u(5),
        findIndex: u(6)
    }
}, function(t, e) {
    t.exports = !1
}, function(t, e, n) {
    var r = n(39),
        i = n(29).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return r(t, i)
    }
}, function(t, e) {
    var n = 0,
        r = Math.random();
    t.exports = function(t) {
        return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + r).toString(36)
    }
}, function(t, e) {
    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function(t, e, n) {
    var r = n(18);
    t.exports = Array.isArray || function(t) {
        return "Array" == r(t)
    }
}, function(t, e, n) {
    var r = n(12),
        i = Math.max,
        o = Math.min;
    t.exports = function(t, e) {
        var n = r(t);
        return n < 0 ? i(n + e, 0) : o(n, e)
    }
}, function(t, e, n) {
    var r = n(1),
        i = n(18),
        o = "".split;
    t.exports = r((function() {
        return !Object("z").propertyIsEnumerable(0)
    })) ? function(t) {
        return "String" == i(t) ? o.call(t, "") : Object(t)
    } : Object
}, function(t, e, n) {
    var r = n(8),
        i = n(72),
        o = n(29),
        a = n(20),
        s = n(73),
        l = n(38),
        u = n(23)("IE_PROTO"),
        c = function() {},
        d = function() {
            var t, e = l("iframe"),
                n = o.length;
            for (e.style.display = "none", s.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), d = t.F; n--;) delete d.prototype[o[n]];
            return d()
        };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (c.prototype = r(t), n = new c, c.prototype = null, n[u] = t) : n = d(), void 0 === e ? n : i(n, e)
    }, a[u] = !0
}, function(t, e, n) {
    var r = n(1),
        i = n(2)("species");
    t.exports = function(t) {
        return !r((function() {
            var e = [];
            return (e.constructor = {})[i] = function() {
                return {
                    foo: 1
                }
            }, 1 !== e[t](Boolean).foo
        }))
    }
}, function(t, e, n) {
    var r = n(7),
        i = n(1),
        o = n(38);
    t.exports = !r && !i((function() {
        return 7 != Object.defineProperty(o("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(t, e, n) {
    var r = n(14);
    t.exports = r("native-function-to-string", Function.toString)
}, function(t, e, n) {
    var r = n(44),
        i = n(0),
        o = function(t) {
            return "function" == typeof t ? t : void 0
        };
    t.exports = function(t, e) {
        return arguments.length < 2 ? o(r[t]) || o(i[t]) : r[t] && r[t][e] || i[t] && i[t][e]
    }
}, function(t, e, n) {
    var r = n(0),
        i = n(5),
        o = r.document,
        a = i(o) && i(o.createElement);
    t.exports = function(t) {
        return a ? o.createElement(t) : {}
    }
}, function(t, e, n) {
    var r = n(4),
        i = n(10),
        o = n(41).indexOf,
        a = n(20);
    t.exports = function(t, e) {
        var n, s = i(t),
            l = 0,
            u = [];
        for (n in s) !r(a, n) && r(s, n) && u.push(n);
        for (; e.length > l;) r(s, n = e[l++]) && (~o(u, n) || u.push(n));
        return u
    }
}, function(t, e, n) {
    "use strict";
    var r, i = n(7),
        o = n(0),
        a = n(5),
        s = n(4),
        l = n(82),
        u = n(6),
        c = n(15),
        d = n(9).f,
        f = n(64),
        h = n(69),
        p = n(2),
        g = n(28),
        v = o.DataView,
        m = v && v.prototype,
        y = o.Int8Array,
        b = y && y.prototype,
        x = o.Uint8ClampedArray,
        w = x && x.prototype,
        S = y && f(y),
        k = b && f(b),
        C = Object.prototype,
        M = C.isPrototypeOf,
        A = p("toStringTag"),
        P = g("TYPED_ARRAY_TAG"),
        T = !(!o.ArrayBuffer || !v),
        I = T && !!h && "Opera" !== l(o.opera),
        _ = !1,
        O = {
            Int8Array: 1,
            Uint8Array: 1,
            Uint8ClampedArray: 1,
            Int16Array: 2,
            Uint16Array: 2,
            Int32Array: 4,
            Uint32Array: 4,
            Float32Array: 4,
            Float64Array: 8
        },
        F = function(t) {
            return a(t) && s(O, l(t))
        };
    for (r in O) o[r] || (I = !1);
    if ((!I || "function" != typeof S || S === Function.prototype) && (S = function() {
            throw TypeError("Incorrect invocation")
        }, I))
        for (r in O) o[r] && h(o[r], S);
    if ((!I || !k || k === C) && (k = S.prototype, I))
        for (r in O) o[r] && h(o[r].prototype, k);
    if (I && f(w) !== k && h(w, k), i && !s(k, A))
        for (r in _ = !0, d(k, A, {
                get: function() {
                    return a(this) ? this[P] : void 0
                }
            }), O) o[r] && u(o[r], P, r);
    T && h && f(m) !== C && h(m, C), t.exports = {
        NATIVE_ARRAY_BUFFER: T,
        NATIVE_ARRAY_BUFFER_VIEWS: I,
        TYPED_ARRAY_TAG: _ && P,
        aTypedArray: function(t) {
            if (F(t)) return t;
            throw TypeError("Target is not a typed array")
        },
        aTypedArrayConstructor: function(t) {
            if (h) {
                if (M.call(S, t)) return t
            } else
                for (var e in O)
                    if (s(O, r)) {
                        var n = o[e];
                        if (n && (t === n || M.call(n, t))) return t
                    } throw TypeError("Target is not a typed array constructor")
        },
        exportProto: function(t, e, n) {
            if (i) {
                if (n)
                    for (var r in O) {
                        var a = o[r];
                        a && s(a.prototype, t) && delete a.prototype[t]
                    }
                k[t] && !n || c(k, t, n ? e : I && b[t] || e)
            }
        },
        exportStatic: function(t, e, n) {
            var r, a;
            if (i) {
                if (h) {
                    if (n)
                        for (r in O)(a = o[r]) && s(a, t) && delete a[t];
                    if (S[t] && !n) return;
                    try {
                        return c(S, t, n ? e : I && y[t] || e)
                    } catch (t) {}
                }
                for (r in O) !(a = o[r]) || a[t] && !n || c(a, t, e)
            }
        },
        isView: function(t) {
            var e = l(t);
            return "DataView" === e || s(O, e)
        },
        isTypedArray: F,
        TypedArray: S,
        TypedArrayPrototype: k
    }
}, function(t, e, n) {
    var r = n(10),
        i = n(11),
        o = n(31),
        a = function(t) {
            return function(e, n, a) {
                var s, l = r(e),
                    u = i(l.length),
                    c = o(a, u);
                if (t && n != n) {
                    for (; u > c;)
                        if ((s = l[c++]) != s) return !0
                } else
                    for (; u > c; c++)
                        if ((t || c in l) && l[c] === n) return t || c || 0;
                return !t && -1
            }
        };
    t.exports = {
        includes: a(!0),
        indexOf: a(!1)
    }
}, function(t, e, n) {
    "use strict";
    var r = {}.propertyIsEnumerable,
        i = Object.getOwnPropertyDescriptor,
        o = i && !r.call({
            1: 2
        }, 1);
    e.f = o ? function(t) {
        var e = i(this, t);
        return !!e && e.enumerable
    } : r
}, function(t, e, n) {
    var r = n(4),
        i = n(61),
        o = n(24),
        a = n(9);
    t.exports = function(t, e) {
        for (var n = i(e), s = a.f, l = o.f, u = 0; u < n.length; u++) {
            var c = n[u];
            r(t, c) || s(t, c, l(e, c))
        }
    }
}, function(t, e, n) {
    t.exports = n(0)
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e, n) {
    var r = n(1);
    t.exports = !!Object.getOwnPropertySymbols && !r((function() {
        return !String(Symbol())
    }))
}, function(t, e, n) {
    var r = n(5),
        i = n(30),
        o = n(2)("species");
    t.exports = function(t, e) {
        var n;
        return i(t) && ("function" != typeof(n = t.constructor) || n !== Array && !i(n.prototype) ? r(n) && null === (n = n[o]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === e ? 0 : e)
    }
}, function(t, e) {
    t.exports = {}
}, function(t, e, n) {
    var r = n(9).f,
        i = n(4),
        o = n(2)("toStringTag");
    t.exports = function(t, e, n) {
        t && !i(t = n ? t : t.prototype, o) && r(t, o, {
            configurable: !0,
            value: e
        })
    }
}, function(t, e, n) {
    var r = n(1),
        i = /#|\.prototype\./,
        o = function(t, e) {
            var n = s[a(t)];
            return n == u || n != l && ("function" == typeof e ? r(e) : !!e)
        },
        a = o.normalize = function(t) {
            return String(t).replace(i, ".").toLowerCase()
        },
        s = o.data = {},
        l = o.NATIVE = "N",
        u = o.POLYFILL = "P";
    t.exports = o
}, function(t, e, n) {
    "use strict";
    var r = n(1);
    t.exports = function(t, e) {
        var n = [][t];
        return !n || !r((function() {
            n.call(null, e || function() {
                throw 1
            }, 1)
        }))
    }
}, function(t, e, n) {
    "use strict";
    var r, i, o = n(74),
        a = RegExp.prototype.exec,
        s = String.prototype.replace,
        l = a,
        u = (r = /a/, i = /b*/g, a.call(r, "a"), a.call(i, "a"), 0 !== r.lastIndex || 0 !== i.lastIndex),
        c = void 0 !== /()??/.exec("")[1];
    (u || c) && (l = function(t) {
        var e, n, r, i, l = this;
        return c && (n = new RegExp("^" + l.source + "$(?!\\s)", o.call(l))), u && (e = l.lastIndex), r = a.call(l, t), u && r && (l.lastIndex = l.global ? r.index + r[0].length : e), c && r && r.length > 1 && s.call(r[0], n, (function() {
            for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0)
        })), r
    }), t.exports = l
}, function(t, e, n) {
    var r = n(39),
        i = n(29);
    t.exports = Object.keys || function(t) {
        return r(t, i)
    }
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
        return t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(10),
        i = n(62),
        o = n(48),
        a = n(22),
        s = n(67),
        l = a.set,
        u = a.getterFor("Array Iterator");
    t.exports = s(Array, "Array", (function(t, e) {
        l(this, {
            type: "Array Iterator",
            target: r(t),
            index: 0,
            kind: e
        })
    }), (function() {
        var t = u(this),
            e = t.target,
            n = t.kind,
            r = t.index++;
        return !e || r >= e.length ? (t.target = void 0, {
            value: void 0,
            done: !0
        }) : "keys" == n ? {
            value: r,
            done: !1
        } : "values" == n ? {
            value: e[r],
            done: !1
        } : {
            value: [r, e[r]],
            done: !1
        }
    }), "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
}, function(t, e) {
    (function(e) {
        t.exports = e
    }).call(this, {})
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    "use strict";
    var r = n(19),
        i = n(9),
        o = n(17);
    t.exports = function(t, e, n) {
        var a = r(e);
        a in t ? i.f(t, a, o(0, n)) : t[a] = n
    }
}, function(t, e, n) {
    var r = n(0),
        i = n(21),
        o = r["__core-js_shared__"] || i("__core-js_shared__", {});
    t.exports = o
}, function(t, e, n) {
    var r = n(0),
        i = n(36),
        o = r.WeakMap;
    t.exports = "function" == typeof o && /native code/.test(i.call(o))
}, function(t, e, n) {
    var r = n(37),
        i = n(27),
        o = n(45),
        a = n(8);
    t.exports = r("Reflect", "ownKeys") || function(t) {
        var e = i.f(a(t)),
            n = o.f;
        return n ? e.concat(n(t)) : e
    }
}, function(t, e, n) {
    var r = n(2),
        i = n(33),
        o = n(6),
        a = r("unscopables"),
        s = Array.prototype;
    null == s[a] && o(s, a, i(null)), t.exports = function(t) {
        s[a][t] = !0
    }
}, function(t, e) {
    t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
}, function(t, e, n) {
    var r = n(4),
        i = n(16),
        o = n(23),
        a = n(94),
        s = o("IE_PROTO"),
        l = Object.prototype;
    t.exports = a ? Object.getPrototypeOf : function(t) {
        return t = i(t), r(t, s) ? t[s] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? l : null
    }
}, function(t, e, n) {
    e.f = n(2)
}, function(t, e, n) {
    var r = n(44),
        i = n(4),
        o = n(65),
        a = n(9).f;
    t.exports = function(t) {
        var e = r.Symbol || (r.Symbol = {});
        i(e, t) || a(e, t, {
            value: o.f(t)
        })
    }
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(93),
        o = n(64),
        a = n(69),
        s = n(49),
        l = n(6),
        u = n(15),
        c = n(2),
        d = n(26),
        f = n(48),
        h = n(68),
        p = h.IteratorPrototype,
        g = h.BUGGY_SAFARI_ITERATORS,
        v = c("iterator"),
        m = function() {
            return this
        };
    t.exports = function(t, e, n, c, h, y, b) {
        i(n, e, c);
        var x, w, S, k = function(t) {
                if (t === h && T) return T;
                if (!g && t in A) return A[t];
                switch (t) {
                    case "keys":
                    case "values":
                    case "entries":
                        return function() {
                            return new n(this, t)
                        }
                }
                return function() {
                    return new n(this)
                }
            },
            C = e + " Iterator",
            M = !1,
            A = t.prototype,
            P = A[v] || A["@@iterator"] || h && A[h],
            T = !g && P || k(h),
            I = "Array" == e && A.entries || P;
        if (I && (x = o(I.call(new t)), p !== Object.prototype && x.next && (d || o(x) === p || (a ? a(x, p) : "function" != typeof x[v] && l(x, v, m)), s(x, C, !0, !0), d && (f[C] = m))), "values" == h && P && "values" !== P.name && (M = !0, T = function() {
                return P.call(this)
            }), d && !b || A[v] === T || l(A, v, T), f[e] = T, h)
            if (w = {
                    values: k("values"),
                    keys: y ? T : k("keys"),
                    entries: k("entries")
                }, b)
                for (S in w) !g && !M && S in A || u(A, S, w[S]);
            else r({
                target: e,
                proto: !0,
                forced: g || M
            }, w);
        return w
    }
}, function(t, e, n) {
    "use strict";
    var r, i, o, a = n(64),
        s = n(6),
        l = n(4),
        u = n(2),
        c = n(26),
        d = u("iterator"),
        f = !1;
    [].keys && ("next" in (o = [].keys()) ? (i = a(a(o))) !== Object.prototype && (r = i) : f = !0), null == r && (r = {}), c || l(r, d) || s(r, d, (function() {
        return this
    })), t.exports = {
        IteratorPrototype: r,
        BUGGY_SAFARI_ITERATORS: f
    }
}, function(t, e, n) {
    var r = n(8),
        i = n(88);
    t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var t, e = !1,
            n = {};
        try {
            (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), e = n instanceof Array
        } catch (t) {}
        return function(n, o) {
            return r(n), i(o), e ? t.call(n, o) : n.__proto__ = o, n
        }
    }() : void 0)
}, function(t, e, n) {
    var r = n(12),
        i = n(13),
        o = function(t) {
            return function(e, n) {
                var o, a, s = String(i(e)),
                    l = r(n),
                    u = s.length;
                return l < 0 || l >= u ? t ? "" : void 0 : (o = s.charCodeAt(l)) < 55296 || o > 56319 || l + 1 === u || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? t ? s.charAt(l) : o : t ? s.slice(l, l + 2) : a - 56320 + (o - 55296 << 10) + 65536
            }
        };
    t.exports = {
        codeAt: o(!1),
        charAt: o(!0)
    }
}, function(t, e, n) {
    var r = n(54);
    t.exports = function(t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
            case 0:
                return function() {
                    return t.call(e)
                };
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function(n, r, i) {
                    return t.call(e, n, r, i)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e, n) {
    var r = n(7),
        i = n(9),
        o = n(8),
        a = n(53);
    t.exports = r ? Object.defineProperties : function(t, e) {
        o(t);
        for (var n, r = a(e), s = r.length, l = 0; s > l;) i.f(t, n = r[l++], e[n]);
        return t
    }
}, function(t, e, n) {
    var r = n(37);
    t.exports = r("document", "documentElement")
}, function(t, e, n) {
    "use strict";
    var r = n(8);
    t.exports = function() {
        var t = r(this),
            e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    }
}, function(t, e, n) {
    "use strict";
    var r = n(6),
        i = n(15),
        o = n(1),
        a = n(2),
        s = n(52),
        l = a("species"),
        u = !o((function() {
            var t = /./;
            return t.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "7" !== "".replace(t, "$<a>")
        })),
        c = !o((function() {
            var t = /(?:)/,
                e = t.exec;
            t.exec = function() {
                return e.apply(this, arguments)
            };
            var n = "ab".split(t);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
        }));
    t.exports = function(t, e, n, d) {
        var f = a(t),
            h = !o((function() {
                var e = {};
                return e[f] = function() {
                    return 7
                }, 7 != "" [t](e)
            })),
            p = h && !o((function() {
                var e = !1,
                    n = /a/;
                return n.exec = function() {
                    return e = !0, null
                }, "split" === t && (n.constructor = {}, n.constructor[l] = function() {
                    return n
                }), n[f](""), !e
            }));
        if (!h || !p || "replace" === t && !u || "split" === t && !c) {
            var g = /./ [f],
                v = n(f, "" [t], (function(t, e, n, r, i) {
                    return e.exec === s ? h && !i ? {
                        done: !0,
                        value: g.call(e, n, r)
                    } : {
                        done: !0,
                        value: t.call(n, e, r)
                    } : {
                        done: !1
                    }
                })),
                m = v[0],
                y = v[1];
            i(String.prototype, t, m), i(RegExp.prototype, f, 2 == e ? function(t, e) {
                return y.call(t, this, e)
            } : function(t) {
                return y.call(t, this)
            }), d && r(RegExp.prototype[f], "sham", !0)
        }
    }
}, function(t, e, n) {
    var r = n(18),
        i = n(52);
    t.exports = function(t, e) {
        var n = t.exec;
        if ("function" == typeof n) {
            var o = n.call(t, e);
            if ("object" != typeof o) throw TypeError("RegExp exec method returned something other than an Object or null");
            return o
        }
        if ("RegExp" !== r(t)) throw TypeError("RegExp#exec called on incompatible receiver");
        return i.call(t, e)
    }
}, function(t, e, n) {
    var r = n(13),
        i = "[" + n(63) + "]",
        o = RegExp("^" + i + i + "*"),
        a = RegExp(i + i + "*$"),
        s = function(t) {
            return function(e) {
                var n = String(r(e));
                return 1 & t && (n = n.replace(o, "")), 2 & t && (n = n.replace(a, "")), n
            }
        };
    t.exports = {
        start: s(1),
        end: s(2),
        trim: s(3)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(0),
        o = n(26),
        a = n(7),
        s = n(46),
        l = n(1),
        u = n(4),
        c = n(30),
        d = n(5),
        f = n(8),
        h = n(16),
        p = n(10),
        g = n(19),
        v = n(17),
        m = n(33),
        y = n(53),
        b = n(27),
        x = n(91),
        w = n(45),
        S = n(24),
        k = n(9),
        C = n(42),
        M = n(6),
        A = n(15),
        P = n(14),
        T = n(23),
        I = n(20),
        _ = n(28),
        O = n(2),
        F = n(65),
        D = n(66),
        L = n(49),
        E = n(22),
        R = n(25).forEach,
        N = T("hidden"),
        V = O("toPrimitive"),
        z = E.set,
        B = E.getterFor("Symbol"),
        W = Object.prototype,
        j = i.Symbol,
        H = i.JSON,
        q = H && H.stringify,
        Y = S.f,
        U = k.f,
        $ = x.f,
        G = C.f,
        Q = P("symbols"),
        X = P("op-symbols"),
        Z = P("string-to-symbol-registry"),
        K = P("symbol-to-string-registry"),
        J = P("wks"),
        tt = i.QObject,
        et = !tt || !tt.prototype || !tt.prototype.findChild,
        nt = a && l((function() {
            return 7 != m(U({}, "a", {
                get: function() {
                    return U(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        })) ? function(t, e, n) {
            var r = Y(W, e);
            r && delete W[e], U(t, e, n), r && t !== W && U(W, e, r)
        } : U,
        rt = function(t, e) {
            var n = Q[t] = m(j.prototype);
            return z(n, {
                type: "Symbol",
                tag: t,
                description: e
            }), a || (n.description = e), n
        },
        it = s && "symbol" == typeof j.iterator ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            return Object(t) instanceof j
        },
        ot = function(t, e, n) {
            t === W && ot(X, e, n), f(t);
            var r = g(e, !0);
            return f(n), u(Q, r) ? (n.enumerable ? (u(t, N) && t[N][r] && (t[N][r] = !1), n = m(n, {
                enumerable: v(0, !1)
            })) : (u(t, N) || U(t, N, v(1, {})), t[N][r] = !0), nt(t, r, n)) : U(t, r, n)
        },
        at = function(t, e) {
            f(t);
            var n = p(e),
                r = y(n).concat(ct(n));
            return R(r, (function(e) {
                a && !st.call(n, e) || ot(t, e, n[e])
            })), t
        },
        st = function(t) {
            var e = g(t, !0),
                n = G.call(this, e);
            return !(this === W && u(Q, e) && !u(X, e)) && (!(n || !u(this, e) || !u(Q, e) || u(this, N) && this[N][e]) || n)
        },
        lt = function(t, e) {
            var n = p(t),
                r = g(e, !0);
            if (n !== W || !u(Q, r) || u(X, r)) {
                var i = Y(n, r);
                return !i || !u(Q, r) || u(n, N) && n[N][r] || (i.enumerable = !0), i
            }
        },
        ut = function(t) {
            var e = $(p(t)),
                n = [];
            return R(e, (function(t) {
                u(Q, t) || u(I, t) || n.push(t)
            })), n
        },
        ct = function(t) {
            var e = t === W,
                n = $(e ? X : p(t)),
                r = [];
            return R(n, (function(t) {
                !u(Q, t) || e && !u(W, t) || r.push(Q[t])
            })), r
        };
    s || (A((j = function() {
        if (this instanceof j) throw TypeError("Symbol is not a constructor");
        var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
            e = _(t),
            n = function(t) {
                this === W && n.call(X, t), u(this, N) && u(this[N], e) && (this[N][e] = !1), nt(this, e, v(1, t))
            };
        return a && et && nt(W, e, {
            configurable: !0,
            set: n
        }), rt(e, t)
    }).prototype, "toString", (function() {
        return B(this).tag
    })), C.f = st, k.f = ot, S.f = lt, b.f = x.f = ut, w.f = ct, a && (U(j.prototype, "description", {
        configurable: !0,
        get: function() {
            return B(this).description
        }
    }), o || A(W, "propertyIsEnumerable", st, {
        unsafe: !0
    })), F.f = function(t) {
        return rt(O(t), t)
    }), r({
        global: !0,
        wrap: !0,
        forced: !s,
        sham: !s
    }, {
        Symbol: j
    }), R(y(J), (function(t) {
        D(t)
    })), r({
        target: "Symbol",
        stat: !0,
        forced: !s
    }, {
        for: function(t) {
            var e = String(t);
            if (u(Z, e)) return Z[e];
            var n = j(e);
            return Z[e] = n, K[n] = e, n
        },
        keyFor: function(t) {
            if (!it(t)) throw TypeError(t + " is not a symbol");
            if (u(K, t)) return K[t]
        },
        useSetter: function() {
            et = !0
        },
        useSimple: function() {
            et = !1
        }
    }), r({
        target: "Object",
        stat: !0,
        forced: !s,
        sham: !a
    }, {
        create: function(t, e) {
            return void 0 === e ? m(t) : at(m(t), e)
        },
        defineProperty: ot,
        defineProperties: at,
        getOwnPropertyDescriptor: lt
    }), r({
        target: "Object",
        stat: !0,
        forced: !s
    }, {
        getOwnPropertyNames: ut,
        getOwnPropertySymbols: ct
    }), r({
        target: "Object",
        stat: !0,
        forced: l((function() {
            w.f(1)
        }))
    }, {
        getOwnPropertySymbols: function(t) {
            return w.f(h(t))
        }
    }), H && r({
        target: "JSON",
        stat: !0,
        forced: !s || l((function() {
            var t = j();
            return "[null]" != q([t]) || "{}" != q({
                a: t
            }) || "{}" != q(Object(t))
        }))
    }, {
        stringify: function(t) {
            for (var e, n, r = [t], i = 1; arguments.length > i;) r.push(arguments[i++]);
            if (n = e = r[1], (d(e) || void 0 !== t) && !it(t)) return c(e) || (e = function(t, e) {
                if ("function" == typeof n && (e = n.call(this, t, e)), !it(e)) return e
            }), r[1] = e, q.apply(H, r)
        }
    }), j.prototype[V] || M(j.prototype, V, j.prototype.valueOf), L(j, "Symbol"), I[N] = !0
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(7),
        o = n(0),
        a = n(4),
        s = n(5),
        l = n(9).f,
        u = n(43),
        c = o.Symbol;
    if (i && "function" == typeof c && (!("description" in c.prototype) || void 0 !== c().description)) {
        var d = {},
            f = function() {
                var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                    e = this instanceof f ? new c(t) : void 0 === t ? c() : c(t);
                return "" === t && (d[e] = !0), e
            };
        u(f, c);
        var h = f.prototype = c.prototype;
        h.constructor = f;
        var p = h.toString,
            g = "Symbol(test)" == String(c("test")),
            v = /^Symbol\((.*)\)[^)]+$/;
        l(h, "description", {
            configurable: !0,
            get: function() {
                var t = s(this) ? this.valueOf() : this,
                    e = p.call(t);
                if (a(d, t)) return "";
                var n = g ? e.slice(7, -1) : e.replace(v, "$1");
                return "" === n ? void 0 : n
            }
        }), r({
            global: !0,
            forced: !0
        }, {
            Symbol: f
        })
    }
}, function(t, e, n) {
    n(66)("iterator")
}, function(t, e, n) {
    var r = n(15),
        i = n(96),
        o = Object.prototype;
    i !== o.toString && r(o, "toString", i, {
        unsafe: !0
    })
}, function(t, e, n) {
    var r = n(18),
        i = n(2)("toStringTag"),
        o = "Arguments" == r(function() {
            return arguments
        }());
    t.exports = function(t) {
        var e, n, a;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        }(e = Object(t), i)) ? n : o ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a
    }
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(52);
    r({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== i
    }, {
        exec: i
    })
}, function(t, e, n) {
    "use strict";
    var r = n(70).charAt,
        i = n(22),
        o = n(67),
        a = i.set,
        s = i.getterFor("String Iterator");
    o(String, "String", (function(t) {
        a(this, {
            type: "String Iterator",
            string: String(t),
            index: 0
        })
    }), (function() {
        var t, e = s(this),
            n = e.string,
            i = e.index;
        return i >= n.length ? {
            value: void 0,
            done: !0
        } : (t = r(n, i), e.index += t.length, {
            value: t,
            done: !1
        })
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(70).charAt;
    t.exports = function(t, e, n) {
        return e + (n ? r(t, e).length : 1)
    }
}, function(t, e, n) {
    var r = n(0),
        i = n(87),
        o = n(55),
        a = n(6),
        s = n(2),
        l = s("iterator"),
        u = s("toStringTag"),
        c = o.values;
    for (var d in i) {
        var f = r[d],
            h = f && f.prototype;
        if (h) {
            if (h[l] !== c) try {
                a(h, l, c)
            } catch (t) {
                h[l] = c
            }
            if (h[u] || a(h, u, d), i[d])
                for (var p in o)
                    if (h[p] !== o[p]) try {
                        a(h, p, o[p])
                    } catch (t) {
                        h[p] = o[p]
                    }
        }
    }
}, function(t, e) {
    t.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }
}, function(t, e, n) {
    var r = n(5);
    t.exports = function(t) {
        if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
        return t
    }
}, function(t, e) {
    t.exports = function(t) {
        if (!t.webpackPolyfill) {
            var e = Object.create(t);
            e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }), Object.defineProperty(e, "exports", {
                enumerable: !0
            }), e.webpackPolyfill = 1
        }
        return e
    }
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(5),
        o = n(30),
        a = n(31),
        s = n(11),
        l = n(10),
        u = n(58),
        c = n(34),
        d = n(2)("species"),
        f = [].slice,
        h = Math.max;
    r({
        target: "Array",
        proto: !0,
        forced: !c("slice")
    }, {
        slice: function(t, e) {
            var n, r, c, p = l(this),
                g = s(p.length),
                v = a(t, g),
                m = a(void 0 === e ? g : e, g);
            if (o(p) && ("function" != typeof(n = p.constructor) || n !== Array && !o(n.prototype) ? i(n) && null === (n = n[d]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return f.call(p, v, m);
            for (r = new(void 0 === n ? Array : n)(h(m - v, 0)), c = 0; v < m; v++, c++) v in p && u(r, c, p[v]);
            return r.length = c, r
        }
    })
}, function(t, e, n) {
    var r = n(10),
        i = n(27).f,
        o = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) {
        return a && "[object Window]" == o.call(t) ? function(t) {
            try {
                return i(t)
            } catch (t) {
                return a.slice()
            }
        }(t) : i(r(t))
    }
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(41).indexOf,
        o = n(51),
        a = [].indexOf,
        s = !!a && 1 / [1].indexOf(1, -0) < 0,
        l = o("indexOf");
    r({
        target: "Array",
        proto: !0,
        forced: s || l
    }, {
        indexOf: function(t) {
            return s ? a.apply(this, arguments) || 0 : i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(68).IteratorPrototype,
        i = n(33),
        o = n(17),
        a = n(49),
        s = n(48),
        l = function() {
            return this
        };
    t.exports = function(t, e, n) {
        var u = e + " Iterator";
        return t.prototype = i(r, {
            next: o(1, n)
        }), a(t, u, !1, !0), s[u] = l, t
    }
}, function(t, e, n) {
    var r = n(1);
    t.exports = !r((function() {
        function t() {}
        return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(25).map;
    r({
        target: "Array",
        proto: !0,
        forced: !n(34)("map")
    }, {
        map: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(82),
        i = {};
    i[n(2)("toStringTag")] = "z", t.exports = "[object z]" !== String(i) ? function() {
        return "[object " + r(this) + "]"
    } : i.toString
}, function(t, e, n) {
    var r = n(3),
        i = n(101);
    r({
        global: !0,
        forced: parseFloat != i
    }, {
        parseFloat: i
    })
}, function(t, e, n) {
    "use strict";
    var r = n(75),
        i = n(8),
        o = n(16),
        a = n(11),
        s = n(12),
        l = n(13),
        u = n(85),
        c = n(76),
        d = Math.max,
        f = Math.min,
        h = Math.floor,
        p = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        g = /\$([$&'`]|\d\d?)/g;
    r("replace", 2, (function(t, e, n) {
        return [function(n, r) {
            var i = l(this),
                o = null == n ? void 0 : n[t];
            return void 0 !== o ? o.call(n, i, r) : e.call(String(i), n, r)
        }, function(t, o) {
            var l = n(e, t, this, o);
            if (l.done) return l.value;
            var h = i(t),
                p = String(this),
                g = "function" == typeof o;
            g || (o = String(o));
            var v = h.global;
            if (v) {
                var m = h.unicode;
                h.lastIndex = 0
            }
            for (var y = [];;) {
                var b = c(h, p);
                if (null === b) break;
                if (y.push(b), !v) break;
                "" === String(b[0]) && (h.lastIndex = u(p, a(h.lastIndex), m))
            }
            for (var x, w = "", S = 0, k = 0; k < y.length; k++) {
                b = y[k];
                for (var C = String(b[0]), M = d(f(s(b.index), p.length), 0), A = [], P = 1; P < b.length; P++) A.push(void 0 === (x = b[P]) ? x : String(x));
                var T = b.groups;
                if (g) {
                    var I = [C].concat(A, M, p);
                    void 0 !== T && I.push(T);
                    var _ = String(o.apply(void 0, I))
                } else _ = r(C, p, M, A, T, o);
                M >= S && (w += p.slice(S, M) + _, S = M + C.length)
            }
            return w + p.slice(S)
        }];

        function r(t, n, r, i, a, s) {
            var l = r + t.length,
                u = i.length,
                c = g;
            return void 0 !== a && (a = o(a), c = p), e.call(s, c, (function(e, o) {
                var s;
                switch (o.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return n.slice(0, r);
                    case "'":
                        return n.slice(l);
                    case "<":
                        s = a[o.slice(1, -1)];
                        break;
                    default:
                        var c = +o;
                        if (0 === c) return e;
                        if (c > u) {
                            var d = h(c / 10);
                            return 0 === d ? e : d <= u ? void 0 === i[d - 1] ? o.charAt(1) : i[d - 1] + o.charAt(1) : e
                        }
                        s = i[c - 1]
                }
                return void 0 === s ? "" : s
            }))
        }
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(32),
        o = n(10),
        a = n(51),
        s = [].join,
        l = i != Object,
        u = a("join", ",");
    r({
        target: "Array",
        proto: !0,
        forced: l || u
    }, {
        join: function(t) {
            return s.call(o(this), void 0 === t ? "," : t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(31),
        o = n(12),
        a = n(11),
        s = n(16),
        l = n(47),
        u = n(58),
        c = n(34),
        d = Math.max,
        f = Math.min;
    r({
        target: "Array",
        proto: !0,
        forced: !c("splice")
    }, {
        splice: function(t, e) {
            var n, r, c, h, p, g, v = s(this),
                m = a(v.length),
                y = i(t, m),
                b = arguments.length;
            if (0 === b ? n = r = 0 : 1 === b ? (n = 0, r = m - y) : (n = b - 2, r = f(d(o(e), 0), m - y)), m + n - r > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
            for (c = l(v, r), h = 0; h < r; h++)(p = y + h) in v && u(c, h, v[p]);
            if (c.length = r, n < r) {
                for (h = y; h < m - r; h++) g = h + n, (p = h + r) in v ? v[g] = v[p] : delete v[g];
                for (h = m; h > m - r + n; h--) delete v[h - 1]
            } else if (n > r)
                for (h = m - r; h > y; h--) g = h + n - 1, (p = h + r - 1) in v ? v[g] = v[p] : delete v[g];
            for (h = 0; h < n; h++) v[h + y] = arguments[h + 2];
            return v.length = m - r + n, c
        }
    })
}, function(t, e, n) {
    var r = n(0),
        i = n(77).trim,
        o = n(63),
        a = r.parseFloat,
        s = 1 / a(o + "-0") != -1 / 0;
    t.exports = s ? function(t) {
        var e = i(String(t)),
            n = a(e);
        return 0 === n && "-" == e.charAt(0) ? -0 : n
    } : a
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(25).filter;
    r({
        target: "Array",
        proto: !0,
        forced: !n(34)("filter")
    }, {
        filter: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e, n) {
    var r = n(8),
        i = n(54),
        o = n(2)("species");
    t.exports = function(t, e) {
        var n, a = r(t).constructor;
        return void 0 === a || null == (n = r(a)[o]) ? e : i(n)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(1),
        o = n(30),
        a = n(5),
        s = n(16),
        l = n(11),
        u = n(58),
        c = n(47),
        d = n(34),
        f = n(2)("isConcatSpreadable"),
        h = !i((function() {
            var t = [];
            return t[f] = !1, t.concat()[0] !== t
        })),
        p = d("concat"),
        g = function(t) {
            if (!a(t)) return !1;
            var e = t[f];
            return void 0 !== e ? !!e : o(t)
        };
    r({
        target: "Array",
        proto: !0,
        forced: !h || !p
    }, {
        concat: function(t) {
            var e, n, r, i, o, a = s(this),
                d = c(a, 0),
                f = 0;
            for (e = -1, r = arguments.length; e < r; e++)
                if (o = -1 === e ? a : arguments[e], g(o)) {
                    if (f + (i = l(o.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    for (n = 0; n < i; n++, f++) n in o && u(d, f, o[n])
                } else {
                    if (f >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    u(d, f++, o)
                } return d.length = f, d
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(25).forEach,
        i = n(51);
    t.exports = i("forEach") ? function(t) {
        return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
    } : [].forEach
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(25).find,
        o = n(62),
        a = !0;
    "find" in [] && Array(1).find((function() {
        a = !1
    })), r({
        target: "Array",
        proto: !0,
        forced: a
    }, {
        find: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), o("find")
}, function(t, e, n) {
    var r = n(54),
        i = n(16),
        o = n(32),
        a = n(11),
        s = function(t) {
            return function(e, n, s, l) {
                r(n);
                var u = i(e),
                    c = o(u),
                    d = a(u.length),
                    f = t ? d - 1 : 0,
                    h = t ? -1 : 1;
                if (s < 2)
                    for (;;) {
                        if (f in c) {
                            l = c[f], f += h;
                            break
                        }
                        if (f += h, t ? f < 0 : d <= f) throw TypeError("Reduce of empty array with no initial value")
                    }
                for (; t ? f >= 0 : d > f; f += h) f in c && (l = n(l, c[f], f, u));
                return l
            }
        };
    t.exports = {
        left: s(!1),
        right: s(!0)
    }
}, function(t, e, n) {
    var r = n(5),
        i = n(69);
    t.exports = function(t, e, n) {
        var o, a;
        return i && "function" == typeof(o = e.constructor) && o !== n && r(a = o.prototype) && a !== n.prototype && i(t, a), t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(75),
        i = n(8),
        o = n(11),
        a = n(13),
        s = n(85),
        l = n(76);
    r("match", 1, (function(t, e, n) {
        return [function(e) {
            var n = a(this),
                r = null == e ? void 0 : e[t];
            return void 0 !== r ? r.call(e, n) : new RegExp(e)[t](String(n))
        }, function(t) {
            var r = n(e, t, this);
            if (r.done) return r.value;
            var a = i(t),
                u = String(this);
            if (!a.global) return l(a, u);
            var c = a.unicode;
            a.lastIndex = 0;
            for (var d, f = [], h = 0; null !== (d = l(a, u));) {
                var p = String(d[0]);
                f[h] = p, "" === p && (a.lastIndex = s(u, o(a.lastIndex), c)), h++
            }
            return 0 === h ? null : f
        }]
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(75),
        i = n(111),
        o = n(8),
        a = n(13),
        s = n(103),
        l = n(85),
        u = n(11),
        c = n(76),
        d = n(52),
        f = n(1),
        h = [].push,
        p = Math.min,
        g = !f((function() {
            return !RegExp(4294967295, "y")
        }));
    r("split", 2, (function(t, e, n) {
        var r;
        return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t, n) {
            var r = String(a(this)),
                o = void 0 === n ? 4294967295 : n >>> 0;
            if (0 === o) return [];
            if (void 0 === t) return [r];
            if (!i(t)) return e.call(r, t, o);
            for (var s, l, u, c = [], f = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), p = 0, g = new RegExp(t.source, f + "g");
                (s = d.call(g, r)) && !((l = g.lastIndex) > p && (c.push(r.slice(p, s.index)), s.length > 1 && s.index < r.length && h.apply(c, s.slice(1)), u = s[0].length, p = l, c.length >= o));) g.lastIndex === s.index && g.lastIndex++;
            return p === r.length ? !u && g.test("") || c.push("") : c.push(r.slice(p)), c.length > o ? c.slice(0, o) : c
        } : "0".split(void 0, 0).length ? function(t, n) {
            return void 0 === t && 0 === n ? [] : e.call(this, t, n)
        } : e, [function(e, n) {
            var i = a(this),
                o = null == e ? void 0 : e[t];
            return void 0 !== o ? o.call(e, i, n) : r.call(String(i), e, n)
        }, function(t, i) {
            var a = n(r, t, this, i, r !== e);
            if (a.done) return a.value;
            var d = o(t),
                f = String(this),
                h = s(d, RegExp),
                v = d.unicode,
                m = (d.ignoreCase ? "i" : "") + (d.multiline ? "m" : "") + (d.unicode ? "u" : "") + (g ? "y" : "g"),
                y = new h(g ? d : "^(?:" + d.source + ")", m),
                b = void 0 === i ? 4294967295 : i >>> 0;
            if (0 === b) return [];
            if (0 === f.length) return null === c(y, f) ? [f] : [];
            for (var x = 0, w = 0, S = []; w < f.length;) {
                y.lastIndex = g ? w : 0;
                var k, C = c(y, g ? f : f.slice(w));
                if (null === C || (k = p(u(y.lastIndex + (g ? 0 : w)), f.length)) === x) w = l(f, w, v);
                else {
                    if (S.push(f.slice(x, w)), S.length === b) return S;
                    for (var M = 1; M <= C.length - 1; M++)
                        if (S.push(C[M]), S.length === b) return S;
                    w = x = k
                }
            }
            return S.push(f.slice(x)), S
        }]
    }), !g)
}, function(t, e, n) {
    var r = n(5),
        i = n(18),
        o = n(2)("match");
    t.exports = function(t) {
        var e;
        return r(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t))
    }
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(105);
    r({
        target: "Array",
        proto: !0,
        forced: [].forEach != i
    }, {
        forEach: i
    })
}, function(t, e, n) {
    var r = n(15),
        i = Date.prototype,
        o = i.toString,
        a = i.getTime;
    new Date(NaN) + "" != "Invalid Date" && r(i, "toString", (function() {
        var t = a.call(this);
        return t == t ? o.call(this) : "Invalid Date"
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(7),
        i = n(0),
        o = n(50),
        a = n(15),
        s = n(4),
        l = n(18),
        u = n(108),
        c = n(19),
        d = n(1),
        f = n(33),
        h = n(27).f,
        p = n(24).f,
        g = n(9).f,
        v = n(77).trim,
        m = i.Number,
        y = m.prototype,
        b = "Number" == l(f(y)),
        x = function(t) {
            var e, n, r, i, o, a, s, l, u = c(t, !1);
            if ("string" == typeof u && u.length > 2)
                if (43 === (e = (u = v(u)).charCodeAt(0)) || 45 === e) {
                    if (88 === (n = u.charCodeAt(2)) || 120 === n) return NaN
                } else if (48 === e) {
                switch (u.charCodeAt(1)) {
                    case 66:
                    case 98:
                        r = 2, i = 49;
                        break;
                    case 79:
                    case 111:
                        r = 8, i = 55;
                        break;
                    default:
                        return +u
                }
                for (a = (o = u.slice(2)).length, s = 0; s < a; s++)
                    if ((l = o.charCodeAt(s)) < 48 || l > i) return NaN;
                return parseInt(o, r)
            }
            return +u
        };
    if (o("Number", !m(" 0o1") || !m("0b1") || m("+0x1"))) {
        for (var w, S = function(t) {
                var e = arguments.length < 1 ? 0 : t,
                    n = this;
                return n instanceof S && (b ? d((function() {
                    y.valueOf.call(n)
                })) : "Number" != l(n)) ? u(new m(x(e)), n, S) : x(e)
            }, k = r ? h(m) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), C = 0; k.length > C; C++) s(m, w = k[C]) && !s(S, w) && g(S, w, p(m, w));
        S.prototype = y, y.constructor = S, a(i, "Number", S)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(12),
        o = n(116),
        a = n(117),
        s = n(1),
        l = 1..toFixed,
        u = Math.floor,
        c = function(t, e, n) {
            return 0 === e ? n : e % 2 == 1 ? c(t, e - 1, n * t) : c(t * t, e / 2, n)
        };
    r({
        target: "Number",
        proto: !0,
        forced: l && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !s((function() {
            l.call({})
        }))
    }, {
        toFixed: function(t) {
            var e, n, r, s, l = o(this),
                d = i(t),
                f = [0, 0, 0, 0, 0, 0],
                h = "",
                p = "0",
                g = function(t, e) {
                    for (var n = -1, r = e; ++n < 6;) r += t * f[n], f[n] = r % 1e7, r = u(r / 1e7)
                },
                v = function(t) {
                    for (var e = 6, n = 0; --e >= 0;) n += f[e], f[e] = u(n / t), n = n % t * 1e7
                },
                m = function() {
                    for (var t = 6, e = ""; --t >= 0;)
                        if ("" !== e || 0 === t || 0 !== f[t]) {
                            var n = String(f[t]);
                            e = "" === e ? n : e + a.call("0", 7 - n.length) + n
                        } return e
                };
            if (d < 0 || d > 20) throw RangeError("Incorrect fraction digits");
            if (l != l) return "NaN";
            if (l <= -1e21 || l >= 1e21) return String(l);
            if (l < 0 && (h = "-", l = -l), l > 1e-21)
                if (n = (e = function(t) {
                        for (var e = 0, n = t; n >= 4096;) e += 12, n /= 4096;
                        for (; n >= 2;) e += 1, n /= 2;
                        return e
                    }(l * c(2, 69, 1)) - 69) < 0 ? l * c(2, -e, 1) : l / c(2, e, 1), n *= 4503599627370496, (e = 52 - e) > 0) {
                    for (g(0, n), r = d; r >= 7;) g(1e7, 0), r -= 7;
                    for (g(c(10, r, 1), 0), r = e - 1; r >= 23;) v(1 << 23), r -= 23;
                    v(1 << r), g(1, 1), v(2), p = m()
                } else g(0, n), g(1 << -e, 0), p = m() + a.call("0", d);
            return p = d > 0 ? h + ((s = p.length) <= d ? "0." + a.call("0", d - s) + p : p.slice(0, s - d) + "." + p.slice(s - d)) : h + p
        }
    })
}, function(t, e, n) {
    var r = n(18);
    t.exports = function(t) {
        if ("number" != typeof t && "Number" != r(t)) throw TypeError("Incorrect invocation");
        return +t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(12),
        i = n(13);
    t.exports = "".repeat || function(t) {
        var e = String(i(this)),
            n = "",
            o = r(t);
        if (o < 0 || o == 1 / 0) throw RangeError("Wrong number of repetitions");
        for (; o > 0;
            (o >>>= 1) && (e += e)) 1 & o && (n += e);
        return n
    }
}, function(t, e, n) {
    "use strict";
    var r = n(15),
        i = n(8),
        o = n(1),
        a = n(74),
        s = RegExp.prototype,
        l = s.toString,
        u = o((function() {
            return "/a/b" != l.call({
                source: "a",
                flags: "b"
            })
        })),
        c = "toString" != l.name;
    (u || c) && r(RegExp.prototype, "toString", (function() {
        var t = i(this),
            e = String(t.source),
            n = t.flags;
        return "/" + e + "/" + String(void 0 === n && t instanceof RegExp && !("flags" in s) ? a.call(t) : n)
    }), {
        unsafe: !0
    })
}, function(t, e, n) {
    var r = n(0),
        i = n(87),
        o = n(105),
        a = n(6);
    for (var s in i) {
        var l = r[s],
            u = l && l.prototype;
        if (u && u.forEach !== o) try {
            a(u, "forEach", o)
        } catch (t) {
            u.forEach = o
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(30),
        o = [].reverse,
        a = [1, 2];
    r({
        target: "Array",
        proto: !0,
        forced: String(a) === String(a.reverse())
    }, {
        reverse: function() {
            return i(this) && (this.length = this.length), o.call(this)
        }
    })
}, function(t, e, n) {
    var r = n(3),
        i = n(129);
    r({
        global: !0,
        forced: parseInt != i
    }, {
        parseInt: i
    })
}, function(t, e, n) {
    "use strict";
    var r = n(37),
        i = n(9),
        o = n(2),
        a = n(7),
        s = o("species");
    t.exports = function(t) {
        var e = r(t),
            n = i.f;
        a && e && !e[s] && n(e, s, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, , , function(t, e, n) {
    var r = n(7),
        i = n(9).f,
        o = Function.prototype,
        a = o.toString,
        s = /^\s*function ([^ (]*)/;
    !r || "name" in o || i(o, "name", {
        configurable: !0,
        get: function() {
            try {
                return a.call(this).match(s)[1]
            } catch (t) {
                return ""
            }
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(16),
        i = n(31),
        o = n(11);
    t.exports = function(t) {
        for (var e = r(this), n = o(e.length), a = arguments.length, s = i(a > 1 ? arguments[1] : void 0, n), l = a > 2 ? arguments[2] : void 0, u = void 0 === l ? n : i(l, n); u > s;) e[s++] = t;
        return e
    }
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(107).left;
    r({
        target: "Array",
        proto: !0,
        forced: n(51)("reduce")
    }, {
        reduce: function(t) {
            return i(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(54),
        o = n(16),
        a = n(1),
        s = n(51),
        l = [].sort,
        u = [1, 2, 3],
        c = a((function() {
            u.sort(void 0)
        })),
        d = a((function() {
            u.sort(null)
        })),
        f = s("sort");
    r({
        target: "Array",
        proto: !0,
        forced: c || !d || f
    }, {
        sort: function(t) {
            return void 0 === t ? l.call(o(this)) : l.call(o(this), i(t))
        }
    })
}, function(t, e, n) {
    var r = n(0),
        i = n(77).trim,
        o = n(63),
        a = r.parseInt,
        s = /^[+-]?0[Xx]/,
        l = 8 !== a(o + "08") || 22 !== a(o + "0x16");
    t.exports = l ? function(t, e) {
        var n = i(String(t));
        return a(n, e >>> 0 || (s.test(n) ? 16 : 10))
    } : a
}, function(t, e, n) {
    var r = n(7),
        i = n(0),
        o = n(50),
        a = n(108),
        s = n(9).f,
        l = n(27).f,
        u = n(111),
        c = n(74),
        d = n(15),
        f = n(1),
        h = n(122),
        p = n(2)("match"),
        g = i.RegExp,
        v = g.prototype,
        m = /a/g,
        y = /a/g,
        b = new g(m) !== m;
    if (r && o("RegExp", !b || f((function() {
            return y[p] = !1, g(m) != m || g(y) == y || "/a/i" != g(m, "i")
        })))) {
        for (var x = function(t, e) {
                var n = this instanceof x,
                    r = u(t),
                    i = void 0 === e;
                return !n && r && t.constructor === x && i ? t : a(b ? new g(r && !i ? t.source : t, e) : g((r = t instanceof x) ? t.source : t, r && i ? c.call(t) : e), n ? this : v, x)
            }, w = function(t) {
                t in x || s(x, t, {
                    configurable: !0,
                    get: function() {
                        return g[t]
                    },
                    set: function(e) {
                        g[t] = e
                    }
                })
            }, S = l(g), k = 0; S.length > k;) w(S[k++]);
        v.constructor = x, x.prototype = v, d(i, "RegExp", x)
    }
    h("RegExp")
}, function(t, e, n) {
    "use strict";
    var r = n(10),
        i = n(12),
        o = n(11),
        a = n(51),
        s = Math.min,
        l = [].lastIndexOf,
        u = !!l && 1 / [1].lastIndexOf(1, -0) < 0,
        c = a("lastIndexOf");
    t.exports = u || c ? function(t) {
        if (u) return l.apply(this, arguments) || 0;
        var e = r(this),
            n = o(e.length),
            a = n - 1;
        for (arguments.length > 1 && (a = s(a, i(arguments[1]))), a < 0 && (a = n + a); a >= 0; a--)
            if (a in e && e[a] === t) return a || 0;
        return -1
    } : l
}, function(t, e, n) {
    "use strict";
    n.r(e);
    n(106), n(99), n(95), n(114), n(83), n(98);
    ! function(t) {
        var e, n, r = "".concat(["text", "password", "email", "url", "tel", "number", "search", "search-md"].map((function(t) {
                return "input[type=".concat(t, "]")
            })).join(", "), ", textarea"),
            i = function(t) {
                var e = t.siblings("label, i"),
                    n = t.val().length,
                    r = t.attr("placeholder");
                e["".concat(n || r ? "add" : "remove", "Class")]("active")
            },
            o = function(t) {
                if (t.hasClass("validate")) {
                    var e = t.val(),
                        n = !e.length,
                        r = !t[0].validity.badInput;
                    if (n && r) t.removeClass("valid").removeClass("invalid");
                    else {
                        var i = t.is(":valid"),
                            o = Number(t.attr("length")) || 0;
                        i && (!o || o > e.length) ? t.removeClass("invalid").addClass("valid") : t.removeClass("valid").addClass("invalid")
                    }
                }
            },
            a = function() {
                var e = t(void 0);
                if (e.val().length) {
                    var n = t(".hiddendiv"),
                        r = e.css("font-family"),
                        i = e.css("font-size");
                    i && n.css("font-size", i), r && n.css("font-family", r), "off" === e.attr("wrap") && n.css("overflow-wrap", "normal").css("white-space", "pre"), n.text("".concat(e.val(), "\n"));
                    var o = n.html().replace(/\n/g, "<br>");
                    n.html(o), n.css("width", e.is(":visible") ? e.width() : t(window).width() / 2), e.css("height", n.height())
                }
            };
        t(r).each((function(e, n) {
            var r = t(n),
                o = r.siblings("label, i");
            i(r), n.validity.badInput && o.addClass("active")
        })), t(document).on("focus", r, (function(e) {
            t(e.target).siblings("label, i").addClass("active")
        })), t(document).on("blur", r, (function(e) {
            var n = t(e.target),
                r = !n.val(),
                i = !e.target.validity.badInput,
                a = void 0 === n.attr("placeholder");
            r && i && a && n.siblings("label, i").removeClass("active"), o(n)
        })), t(document).on("change", r, (function(e) {
            var n = t(e.target);
            i(n), o(n)
        })), t("input[autofocus]").siblings("label, i").addClass("active"), t(document).on("reset", (function(e) {
            var n = t(e.target);
            n.is("form") && (n.find(r).removeClass("valid").removeClass("invalid").each((function(e, n) {
                var r = t(n),
                    i = !r.val(),
                    o = !r.attr("placeholder");
                i && o && r.siblings("label, i").removeClass("active")
            })), n.find("select.initialized").each((function(e, n) {
                var r = t(n),
                    i = r.siblings("input.select-dropdown"),
                    o = r.children("[selected]").val();
                r.val(o), i.val(o)
            })))
        })), (n = t(".md-textarea-auto")).length && (e = window.attachEvent ? function(t, e, n) {
            t.attachEvent("on".concat(e), n)
        } : function(t, e, n) {
            t.addEventListener(e, n, !1)
        }, n.each((function() {
            var t = this;

            function n() {
                t.style.height = "auto", t.style.height = "".concat(t.scrollHeight, "px")
            }

            function r() {
                window.setTimeout(n, 0)
            }
            e(t, "change", n), e(t, "cut", r), e(t, "paste", r), e(t, "drop", r), e(t, "keydown", r), n()
        })));
        var s = t("body");
        if (!t(".hiddendiv").first().length) {
            var l = t('<div class="hiddendiv common"></div>');
            s.append(l)
        }
        t(".materialize-textarea").each(a), s.on("keyup keydown", ".materialize-textarea", a);
        var u = t('input[type="date"]');
        u.each((function(t, e) {
            e.type = "text"
        })), u.on("focus", (function(t) {
            t.target.type = "date"
        })), u.on("blur", (function(e) {
            e.target.type = "text", t("label[for=".concat(e.target.id, "]")).removeClass("active")
        }))
    }(jQuery)
}, function(t, e) {
    ! function(t) {
        t(window).on("scroll", (function() {
            var e = t(".navbar");
            e.length && (e.offset().top > 50 ? t(".scrolling-navbar").addClass("top-nav-collapse") : t(".scrolling-navbar").removeClass("top-nav-collapse"))
        }))
    }(jQuery)
}, function(t, e, n) {
    "use strict";
    n.r(e);
    n(106);
    ! function(t) {
        t.fn.mdbTreeview = function() {
            var e = t(this);
            if (e.hasClass("treeview")) {
                var n = e.find(".rotate");
                t.each(n, (function(e) {
                    t(n[e]).off("click"), t(n[e]).on("click", (function() {
                        var e = t(this);
                        e.siblings(".nested").toggleClass("active"), e.toggleClass("down")
                    }))
                }))
            }
            if (e.hasClass("treeview-animated")) {
                var r = e.find(".treeview-animated-element"),
                    i = e.find(".closed");
                e.find(".nested").hide(), i.off("click"), i.on("click", (function() {
                    var e = t(this),
                        n = e.siblings(".nested"),
                        r = e.children(".fa-angle-right");
                    return e.toggleClass("open"), r.toggleClass("down"), n.hasClass("active") ? n.removeClass("active").slideUp() : n.addClass("active").slideDown(), !1
                })), r.off("click"), r.on("click", (function() {
                    var e = t(this);
                    e.hasClass("opened") ? e.removeClass("opened") : (r.removeClass("opened"), e.addClass("opened"))
                }))
            }
            if (e.hasClass("treeview-colorful")) {
                var o = e.find(".treeview-colorful-element"),
                    a = e.find(".treeview-colorful-items-header");
                e.find(".nested").hide(), a.off("click"), a.on("click", (function() {
                    var e = t(this),
                        n = e.siblings(".nested"),
                        r = e.children(".fa-plus-circle"),
                        i = e.children(".fa-minus-circle");
                    e.toggleClass("open"), r.removeClass("fa-plus-circle"), r.addClass("fa-minus-circle"), i.removeClass("fa-minus-circle"), i.addClass("fa-plus-circle"), n.hasClass("active") ? n.removeClass("active").slideUp() : n.addClass("active").slideDown()
                })), o.off("click"), o.on("click", (function() {
                    var e = t(this);
                    e.hasClass("opened") ? o.removeClass("opened") : (o.removeClass("opened"), e.addClass("opened"))
                }))
            }
        }
    }(jQuery)
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r;
    n(90), n(97);
    ! function(t) {
        r = function() {
            return {
                init: function() {
                    var e = [],
                        n = 1;

                    function r() {
                        var n = window.innerHeight,
                            r = window.scrollY;
                        t(".wow").each((function() {
                            if ("visible" != t(this).css("visibility") && (n + r - 100 > i(this) && r < i(this) || n + r - 100 > i(this) + t(this).height() && r < i(this) + t(this).height() || n + r == t(document).height() && i(this) + 100 > t(document).height())) {
                                var o = t(this).index(".wow"),
                                    a = t(this).attr("data-wow-delay");
                                if (a) {
                                    a = t(this).attr("data-wow-delay").slice(0, -1);
                                    var s = this;
                                    parseFloat(a);
                                    t(s).addClass("animated"), t(s).css({
                                        visibility: "visible"
                                    }), t(s).css({
                                        "animation-delay": a
                                    }), t(s).css({
                                        "animation-name": e[o]
                                    });
                                    var l = 1e3 * t(this).css("animation-duration").slice(0, -1);
                                    t(this).attr("data-wow-delay") && (l += 1e3 * t(this).attr("data-wow-delay").slice(0, -1));
                                    s = this;
                                    setTimeout((function() {
                                        t(s).removeClass("animated")
                                    }), l)
                                } else {
                                    t(this).addClass("animated"), t(this).css({
                                        visibility: "visible"
                                    }), t(this).css({
                                        "animation-name": e[o]
                                    });
                                    l = 1e3 * t(this).css("animation-duration").slice(0, -1), s = this;
                                    setTimeout((function() {
                                        t(s).removeClass("animated")
                                    }), l)
                                }
                            }
                        }))
                    }

                    function i(t) {
                        var e = t.getBoundingClientRect(),
                            n = document.body,
                            r = document.documentElement,
                            i = window.pageYOffset || r.scrollTop || n.scrollTop,
                            o = r.clientTop || n.clientTop || 0,
                            a = e.top + i - o;
                        return Math.round(a)
                    }
                    t(".wow").each((function() {
                        t(this).css({
                            visibility: "hidden"
                        }), e[t(this).index(".wow")] = t(this).css("animation-name"), t(this).css({
                            "animation-name": "none"
                        })
                    })), t(window).scroll((function() {
                        var e, o;
                        n ? (e = window.innerHeight, o = window.scrollY, t(".wow.animated").each((function() {
                            if (e + o - 100 > i(this) && o > i(this) + 100 || e + o - 100 < i(this) && o < i(this) + 100 || i(this) + t(this).height > t(document).height() - 100) t(this).removeClass("animated"), t(this).css({
                                "animation-name": "none"
                            }), t(this).css({
                                visibility: "hidden"
                            });
                            else {
                                var n = 1e3 * t(this).css("animation-duration").slice(0, -1);
                                t(this).attr("data-wow-delay") && (n += 1e3 * t(this).attr("data-wow-delay").slice(0, -1));
                                var r = this;
                                setTimeout((function() {
                                    t(r).removeClass("animated")
                                }), n)
                            }
                        })), r(), n--) : r()
                    })), t(".wow").each((function() {
                        var n = t(this).index(".wow"),
                            r = t(this).attr("data-wow-delay");
                        r ? (r = t(this).attr("data-wow-delay").slice(0, -1), parseFloat(r), t(this).addClass("animated"), t(this).css({
                            visibility: "visible"
                        }), t(this).css({
                            "animation-delay": r + "s"
                        }), t(this).css({
                            "animation-name": e[n]
                        })) : (t(this).addClass("animated"), t(this).css({
                            visibility: "visible"
                        }), t(this).css({
                            "animation-name": e[n]
                        }))
                    }))
                }
            }
        }
    }(jQuery), window.WOW = r
}, , , function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(7),
        o = n(40).NATIVE_ARRAY_BUFFER,
        a = n(6),
        s = n(160),
        l = n(1),
        u = n(139),
        c = n(12),
        d = n(11),
        f = n(140),
        h = n(27).f,
        p = n(9).f,
        g = n(126),
        v = n(49),
        m = n(22),
        y = m.get,
        b = m.set,
        x = r.ArrayBuffer,
        w = x,
        S = r.DataView,
        k = r.Math,
        C = r.RangeError,
        M = k.abs,
        A = k.pow,
        P = k.floor,
        T = k.log,
        I = k.LN2,
        _ = function(t, e, n) {
            var r, i, o, a = new Array(n),
                s = 8 * n - e - 1,
                l = (1 << s) - 1,
                u = l >> 1,
                c = 23 === e ? A(2, -24) - A(2, -77) : 0,
                d = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0,
                f = 0;
            for ((t = M(t)) != t || t === 1 / 0 ? (i = t != t ? 1 : 0, r = l) : (r = P(T(t) / I), t * (o = A(2, -r)) < 1 && (r--, o *= 2), (t += r + u >= 1 ? c / o : c * A(2, 1 - u)) * o >= 2 && (r++, o /= 2), r + u >= l ? (i = 0, r = l) : r + u >= 1 ? (i = (t * o - 1) * A(2, e), r += u) : (i = t * A(2, u - 1) * A(2, e), r = 0)); e >= 8; a[f++] = 255 & i, i /= 256, e -= 8);
            for (r = r << e | i, s += e; s > 0; a[f++] = 255 & r, r /= 256, s -= 8);
            return a[--f] |= 128 * d, a
        },
        O = function(t, e) {
            var n, r = t.length,
                i = 8 * r - e - 1,
                o = (1 << i) - 1,
                a = o >> 1,
                s = i - 7,
                l = r - 1,
                u = t[l--],
                c = 127 & u;
            for (u >>= 7; s > 0; c = 256 * c + t[l], l--, s -= 8);
            for (n = c & (1 << -s) - 1, c >>= -s, s += e; s > 0; n = 256 * n + t[l], l--, s -= 8);
            if (0 === c) c = 1 - a;
            else {
                if (c === o) return n ? NaN : u ? -1 / 0 : 1 / 0;
                n += A(2, e), c -= a
            }
            return (u ? -1 : 1) * n * A(2, c - e)
        },
        F = function(t) {
            return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
        },
        D = function(t) {
            return [255 & t]
        },
        L = function(t) {
            return [255 & t, t >> 8 & 255]
        },
        E = function(t) {
            return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
        },
        R = function(t) {
            return _(t, 23, 4)
        },
        N = function(t) {
            return _(t, 52, 8)
        },
        V = function(t, e) {
            p(t.prototype, e, {
                get: function() {
                    return y(this)[e]
                }
            })
        },
        z = function(t, e, n, r) {
            var i = f(+n),
                o = y(t);
            if (i + e > o.byteLength) throw C("Wrong index");
            var a = y(o.buffer).bytes,
                s = i + o.byteOffset,
                l = a.slice(s, s + e);
            return r ? l : l.reverse()
        },
        B = function(t, e, n, r, i, o) {
            var a = f(+n),
                s = y(t);
            if (a + e > s.byteLength) throw C("Wrong index");
            for (var l = y(s.buffer).bytes, u = a + s.byteOffset, c = r(+i), d = 0; d < e; d++) l[u + d] = c[o ? d : e - d - 1]
        };
    if (o) {
        if (!l((function() {
                x(1)
            })) || !l((function() {
                new x(-1)
            })) || l((function() {
                return new x, new x(1.5), new x(NaN), "ArrayBuffer" != x.name
            }))) {
            for (var W, j = (w = function(t) {
                    return u(this, w), new x(f(t))
                }).prototype = x.prototype, H = h(x), q = 0; H.length > q;)(W = H[q++]) in w || a(w, W, x[W]);
            j.constructor = w
        }
        var Y = new S(new w(2)),
            U = S.prototype.setInt8;
        Y.setInt8(0, 2147483648), Y.setInt8(1, 2147483649), !Y.getInt8(0) && Y.getInt8(1) || s(S.prototype, {
            setInt8: function(t, e) {
                U.call(this, t, e << 24 >> 24)
            },
            setUint8: function(t, e) {
                U.call(this, t, e << 24 >> 24)
            }
        }, {
            unsafe: !0
        })
    } else w = function(t) {
        u(this, w, "ArrayBuffer");
        var e = f(t);
        b(this, {
            bytes: g.call(new Array(e), 0),
            byteLength: e
        }), i || (this.byteLength = e)
    }, S = function(t, e, n) {
        u(this, S, "DataView"), u(t, w, "DataView");
        var r = y(t).byteLength,
            o = c(e);
        if (o < 0 || o > r) throw C("Wrong offset");
        if (o + (n = void 0 === n ? r - o : d(n)) > r) throw C("Wrong length");
        b(this, {
            buffer: t,
            byteLength: n,
            byteOffset: o
        }), i || (this.buffer = t, this.byteLength = n, this.byteOffset = o)
    }, i && (V(w, "byteLength"), V(S, "buffer"), V(S, "byteLength"), V(S, "byteOffset")), s(S.prototype, {
        getInt8: function(t) {
            return z(this, 1, t)[0] << 24 >> 24
        },
        getUint8: function(t) {
            return z(this, 1, t)[0]
        },
        getInt16: function(t) {
            var e = z(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
            return (e[1] << 8 | e[0]) << 16 >> 16
        },
        getUint16: function(t) {
            var e = z(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
            return e[1] << 8 | e[0]
        },
        getInt32: function(t) {
            return F(z(this, 4, t, arguments.length > 1 ? arguments[1] : void 0))
        },
        getUint32: function(t) {
            return F(z(this, 4, t, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
        },
        getFloat32: function(t) {
            return O(z(this, 4, t, arguments.length > 1 ? arguments[1] : void 0), 23)
        },
        getFloat64: function(t) {
            return O(z(this, 8, t, arguments.length > 1 ? arguments[1] : void 0), 52)
        },
        setInt8: function(t, e) {
            B(this, 1, t, D, e)
        },
        setUint8: function(t, e) {
            B(this, 1, t, D, e)
        },
        setInt16: function(t, e) {
            B(this, 2, t, L, e, arguments.length > 2 ? arguments[2] : void 0)
        },
        setUint16: function(t, e) {
            B(this, 2, t, L, e, arguments.length > 2 ? arguments[2] : void 0)
        },
        setInt32: function(t, e) {
            B(this, 4, t, E, e, arguments.length > 2 ? arguments[2] : void 0)
        },
        setUint32: function(t, e) {
            B(this, 4, t, E, e, arguments.length > 2 ? arguments[2] : void 0)
        },
        setFloat32: function(t, e) {
            B(this, 4, t, R, e, arguments.length > 2 ? arguments[2] : void 0)
        },
        setFloat64: function(t, e) {
            B(this, 8, t, N, e, arguments.length > 2 ? arguments[2] : void 0)
        }
    });
    v(w, "ArrayBuffer"), v(S, "DataView"), t.exports = {
        ArrayBuffer: w,
        DataView: S
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        if (!(t instanceof e)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
        return t
    }
}, function(t, e, n) {
    var r = n(12),
        i = n(11);
    t.exports = function(t) {
        if (void 0 === t) return 0;
        var e = r(t),
            n = i(e);
        if (e !== n) throw RangeError("Wrong length or index");
        return n
    }
}, function(t, e, n) {
    var r = n(165);
    t.exports = function(t, e) {
        var n = r(t);
        if (n % e) throw RangeError("Wrong offset");
        return n
    }
}, function(t, e, n) {
    n(143), t.exports = n(144)
}, function(t, e, n) {}, function(t, e, n) {
    "use strict";
    n.r(e);
    n(145), n(146), n(156), n(157), n(158), n(193), n(132), n(133), n(134), n(135)
}, function(t, e, n) {
    "use strict";
    (function(t) {
        var e, r;
        n(78), n(79), n(80), n(102), n(92), n(55), n(99), n(95), n(90), n(125), n(81), n(83), n(84), n(110), n(86);

        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        /*!
         * bsCustomFileInput v1.3.2 (https://github.com/Johann-S/bs-custom-file-input)
         * Copyright 2018 - 2019 Johann-S <johann.servoire@gmail.com>
         * Licensed under MIT (https://github.com/Johann-S/bs-custom-file-input/blob/master/LICENSE)
         */
        e = void 0, r = function() {
            var t = {
                    CUSTOMFILE: '.custom-file input[type="file"]',
                    CUSTOMFILELABEL: ".custom-file-label",
                    FORM: "form",
                    INPUT: "input"
                },
                e = function(e) {
                    var n = "",
                        r = e.parentNode.querySelector(t.CUSTOMFILELABEL);
                    return r && (n = r.innerHTML), n
                },
                n = function(t) {
                    if (t.childNodes.length > 0)
                        for (var e = [].slice.call(t.childNodes), n = 0; n < e.length; n++) {
                            var r = e[n];
                            if (3 !== r.nodeType) return r
                        }
                    return t
                },
                r = function(e) {
                    var r = e.bsCustomFileInput.defaultText,
                        i = e.parentNode.querySelector(t.CUSTOMFILELABEL);
                    i && (n(i).innerHTML = r)
                },
                i = !!window.File,
                o = function(t) {
                    if (t.hasAttribute("multiple") && i) return [].slice.call(t.files).map((function(t) {
                        return t.name
                    })).join(", ");
                    if (-1 !== t.value.indexOf("fakepath")) {
                        var e = t.value.split("\\");
                        return e[e.length - 1]
                    }
                    return t.value
                };

            function a() {
                var e = this.parentNode.querySelector(t.CUSTOMFILELABEL);
                if (e) {
                    var i = n(e),
                        a = o(this);
                    a.length ? i.innerHTML = a : r(this)
                }
            }

            function s() {
                for (var e = [].slice.call(this.querySelectorAll(t.INPUT)).filter((function(t) {
                        return !!t.bsCustomFileInput
                    })), n = 0, i = e.length; n < i; n++) r(e[n])
            }
            var l = "reset",
                u = "change";
            return {
                init: function(n, r) {
                    void 0 === n && (n = t.CUSTOMFILE), void 0 === r && (r = t.FORM);
                    for (var i = [].slice.call(document.querySelectorAll(n)), o = [].slice.call(document.querySelectorAll(r)), c = 0, d = i.length; c < d; c++) {
                        var f = i[c];
                        Object.defineProperty(f, "bsCustomFileInput", {
                            value: {
                                defaultText: e(f)
                            },
                            writable: !0
                        }), a.call(f), f.addEventListener(u, a)
                    }
                    for (var h = 0, p = o.length; h < p; h++) o[h].addEventListener(l, s), Object.defineProperty(o[h], "bsCustomFileInput", {
                        value: !0,
                        writable: !0
                    })
                },
                destroy: function() {
                    for (var e = [].slice.call(document.querySelectorAll(t.FORM)).filter((function(t) {
                            return !!t.bsCustomFileInput
                        })), n = [].slice.call(document.querySelectorAll(t.INPUT)).filter((function(t) {
                            return !!t.bsCustomFileInput
                        })), i = 0, o = n.length; i < o; i++) {
                        var c = n[i];
                        r(c), c.bsCustomFileInput = void 0, c.removeEventListener(u, a)
                    }
                    for (var d = 0, f = e.length; d < f; d++) e[d].removeEventListener(l, s), e[d].bsCustomFileInput = void 0
                }
            }
        }, "object" === ("undefined" == typeof exports ? "undefined" : i(exports)) && void 0 !== t ? t.exports = r() : "function" == typeof define && n(56) ? define(r) : (e = e || self).bsCustomFileInput = r(), document.addEventListener("DOMContentLoaded", (function() {
            bsCustomFileInput.init()
        }))
    }).call(this, n(89)(t))
}, function(t, e, n) {
    "use strict";
    (function(t, e) {
        var i;
        n(78), n(79), n(80), n(104), n(147), n(102), n(148), n(112), n(92), n(55), n(99), n(95), n(127), n(120), n(90), n(128), n(100), n(113), n(149), n(150), n(114), n(152), n(153), n(154), n(115), n(155), n(81), n(97), n(121), n(83), n(118), n(84), n(109), n(110), n(119), n(86);

        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        /*!
         * Chart.js
         * http://chartjs.org/
         * Version: 2.7.3
         *
         * Copyright 2018 Chart.js Contributors
         * Released under the MIT license
         * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
         */
        ! function(r) {
            if ("object" === ("undefined" == typeof exports ? "undefined" : o(exports)) && void 0 !== t) t.exports = r();
            else if ("function" == typeof define && n(56)) define([], r);
            else {
                ("undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : this).Chart = r()
            }
        }((function() {
            return function t(e, n, r) {
                function o(s, l) {
                    if (!n[s]) {
                        if (!e[s]) {
                            if (!l && "function" == typeof i && i) return i(s, !0);
                            if (a) return a(s, !0);
                            var u = new Error("Cannot find module '" + s + "'");
                            throw u.code = "MODULE_NOT_FOUND", u
                        }
                        var c = n[s] = {
                            exports: {}
                        };
                        e[s][0].call(c.exports, (function(t) {
                            return o(e[s][1][t] || t)
                        }), c, c.exports, t, e, n, r)
                    }
                    return n[s].exports
                }
                for (var a = "function" == typeof i && i, s = 0; s < r.length; s++) o(r[s]);
                return o
            }({
                1: [function(t, e, n) {}, {}],
                2: [function(t, e, n) {
                    var r = t(6);

                    function i(t) {
                        if (t) {
                            var e = [0, 0, 0],
                                n = 1,
                                i = t.match(/^#([a-fA-F0-9]{3})$/i);
                            if (i) {
                                i = i[1];
                                for (var o = 0; o < e.length; o++) e[o] = parseInt(i[o] + i[o], 16)
                            } else if (i = t.match(/^#([a-fA-F0-9]{6})$/i)) {
                                i = i[1];
                                for (o = 0; o < e.length; o++) e[o] = parseInt(i.slice(2 * o, 2 * o + 2), 16)
                            } else if (i = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                                for (o = 0; o < e.length; o++) e[o] = parseInt(i[o + 1]);
                                n = parseFloat(i[4])
                            } else if (i = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                                for (o = 0; o < e.length; o++) e[o] = Math.round(2.55 * parseFloat(i[o + 1]));
                                n = parseFloat(i[4])
                            } else if (i = t.match(/(\w+)/)) {
                                if ("transparent" == i[1]) return [0, 0, 0, 0];
                                if (!(e = r[i[1]])) return
                            }
                            for (o = 0; o < e.length; o++) e[o] = c(e[o], 0, 255);
                            return n = n || 0 == n ? c(n, 0, 1) : 1, e[3] = n, e
                        }
                    }

                    function o(t) {
                        if (t) {
                            var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                            if (e) {
                                var n = parseFloat(e[4]);
                                return [c(parseInt(e[1]), 0, 360), c(parseFloat(e[2]), 0, 100), c(parseFloat(e[3]), 0, 100), c(isNaN(n) ? 1 : n, 0, 1)]
                            }
                        }
                    }

                    function a(t) {
                        if (t) {
                            var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                            if (e) {
                                var n = parseFloat(e[4]);
                                return [c(parseInt(e[1]), 0, 360), c(parseFloat(e[2]), 0, 100), c(parseFloat(e[3]), 0, 100), c(isNaN(n) ? 1 : n, 0, 1)]
                            }
                        }
                    }

                    function s(t, e) {
                        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
                    }

                    function l(t, e) {
                        return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
                    }

                    function u(t, e) {
                        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
                    }

                    function c(t, e, n) {
                        return Math.min(Math.max(e, t), n)
                    }

                    function d(t) {
                        var e = t.toString(16).toUpperCase();
                        return e.length < 2 ? "0" + e : e
                    }
                    e.exports = {
                        getRgba: i,
                        getHsla: o,
                        getRgb: function(t) {
                            var e = i(t);
                            return e && e.slice(0, 3)
                        },
                        getHsl: function(t) {
                            var e = o(t);
                            return e && e.slice(0, 3)
                        },
                        getHwb: a,
                        getAlpha: function(t) {
                            var e = i(t);
                            if (e) return e[3];
                            if (e = o(t)) return e[3];
                            if (e = a(t)) return e[3]
                        },
                        hexString: function(t) {
                            return "#" + d(t[0]) + d(t[1]) + d(t[2])
                        },
                        rgbString: function(t, e) {
                            if (e < 1 || t[3] && t[3] < 1) return s(t, e);
                            return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
                        },
                        rgbaString: s,
                        percentString: function(t, e) {
                            if (e < 1 || t[3] && t[3] < 1) return l(t, e);
                            var n = Math.round(t[0] / 255 * 100),
                                r = Math.round(t[1] / 255 * 100),
                                i = Math.round(t[2] / 255 * 100);
                            return "rgb(" + n + "%, " + r + "%, " + i + "%)"
                        },
                        percentaString: l,
                        hslString: function(t, e) {
                            if (e < 1 || t[3] && t[3] < 1) return u(t, e);
                            return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
                        },
                        hslaString: u,
                        hwbString: function(t, e) {
                            void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
                            return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
                        },
                        keyword: function(t) {
                            return f[t.slice(0, 3)]
                        }
                    };
                    var f = {};
                    for (var h in r) f[r[h]] = h
                }, {
                    6: 6
                }],
                3: [function(t, e, n) {
                    var r = t(5),
                        i = t(2),
                        a = function t(e) {
                            return e instanceof t ? e : this instanceof t ? (this.valid = !1, this.values = {
                                rgb: [0, 0, 0],
                                hsl: [0, 0, 0],
                                hsv: [0, 0, 0],
                                hwb: [0, 0, 0],
                                cmyk: [0, 0, 0, 0],
                                alpha: 1
                            }, void("string" == typeof e ? (n = i.getRgba(e)) ? this.setValues("rgb", n) : (n = i.getHsla(e)) ? this.setValues("hsl", n) : (n = i.getHwb(e)) && this.setValues("hwb", n) : "object" === o(e) && (void 0 !== (n = e).r || void 0 !== n.red ? this.setValues("rgb", n) : void 0 !== n.l || void 0 !== n.lightness ? this.setValues("hsl", n) : void 0 !== n.v || void 0 !== n.value ? this.setValues("hsv", n) : void 0 !== n.w || void 0 !== n.whiteness ? this.setValues("hwb", n) : void 0 === n.c && void 0 === n.cyan || this.setValues("cmyk", n)))) : new t(e);
                            var n
                        };
                    (a.prototype = {
                        isValid: function() {
                            return this.valid
                        },
                        rgb: function() {
                            return this.setSpace("rgb", arguments)
                        },
                        hsl: function() {
                            return this.setSpace("hsl", arguments)
                        },
                        hsv: function() {
                            return this.setSpace("hsv", arguments)
                        },
                        hwb: function() {
                            return this.setSpace("hwb", arguments)
                        },
                        cmyk: function() {
                            return this.setSpace("cmyk", arguments)
                        },
                        rgbArray: function() {
                            return this.values.rgb
                        },
                        hslArray: function() {
                            return this.values.hsl
                        },
                        hsvArray: function() {
                            return this.values.hsv
                        },
                        hwbArray: function() {
                            var t = this.values;
                            return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
                        },
                        cmykArray: function() {
                            return this.values.cmyk
                        },
                        rgbaArray: function() {
                            var t = this.values;
                            return t.rgb.concat([t.alpha])
                        },
                        hslaArray: function() {
                            var t = this.values;
                            return t.hsl.concat([t.alpha])
                        },
                        alpha: function(t) {
                            return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
                        },
                        red: function(t) {
                            return this.setChannel("rgb", 0, t)
                        },
                        green: function(t) {
                            return this.setChannel("rgb", 1, t)
                        },
                        blue: function(t) {
                            return this.setChannel("rgb", 2, t)
                        },
                        hue: function(t) {
                            return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
                        },
                        saturation: function(t) {
                            return this.setChannel("hsl", 1, t)
                        },
                        lightness: function(t) {
                            return this.setChannel("hsl", 2, t)
                        },
                        saturationv: function(t) {
                            return this.setChannel("hsv", 1, t)
                        },
                        whiteness: function(t) {
                            return this.setChannel("hwb", 1, t)
                        },
                        blackness: function(t) {
                            return this.setChannel("hwb", 2, t)
                        },
                        value: function(t) {
                            return this.setChannel("hsv", 2, t)
                        },
                        cyan: function(t) {
                            return this.setChannel("cmyk", 0, t)
                        },
                        magenta: function(t) {
                            return this.setChannel("cmyk", 1, t)
                        },
                        yellow: function(t) {
                            return this.setChannel("cmyk", 2, t)
                        },
                        black: function(t) {
                            return this.setChannel("cmyk", 3, t)
                        },
                        hexString: function() {
                            return i.hexString(this.values.rgb)
                        },
                        rgbString: function() {
                            return i.rgbString(this.values.rgb, this.values.alpha)
                        },
                        rgbaString: function() {
                            return i.rgbaString(this.values.rgb, this.values.alpha)
                        },
                        percentString: function() {
                            return i.percentString(this.values.rgb, this.values.alpha)
                        },
                        hslString: function() {
                            return i.hslString(this.values.hsl, this.values.alpha)
                        },
                        hslaString: function() {
                            return i.hslaString(this.values.hsl, this.values.alpha)
                        },
                        hwbString: function() {
                            return i.hwbString(this.values.hwb, this.values.alpha)
                        },
                        keyword: function() {
                            return i.keyword(this.values.rgb, this.values.alpha)
                        },
                        rgbNumber: function() {
                            var t = this.values.rgb;
                            return t[0] << 16 | t[1] << 8 | t[2]
                        },
                        luminosity: function() {
                            for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
                                var r = t[n] / 255;
                                e[n] = r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4)
                            }
                            return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
                        },
                        contrast: function(t) {
                            var e = this.luminosity(),
                                n = t.luminosity();
                            return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05)
                        },
                        level: function(t) {
                            var e = this.contrast(t);
                            return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
                        },
                        dark: function() {
                            var t = this.values.rgb;
                            return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
                        },
                        light: function() {
                            return !this.dark()
                        },
                        negate: function() {
                            for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
                            return this.setValues("rgb", t), this
                        },
                        lighten: function(t) {
                            var e = this.values.hsl;
                            return e[2] += e[2] * t, this.setValues("hsl", e), this
                        },
                        darken: function(t) {
                            var e = this.values.hsl;
                            return e[2] -= e[2] * t, this.setValues("hsl", e), this
                        },
                        saturate: function(t) {
                            var e = this.values.hsl;
                            return e[1] += e[1] * t, this.setValues("hsl", e), this
                        },
                        desaturate: function(t) {
                            var e = this.values.hsl;
                            return e[1] -= e[1] * t, this.setValues("hsl", e), this
                        },
                        whiten: function(t) {
                            var e = this.values.hwb;
                            return e[1] += e[1] * t, this.setValues("hwb", e), this
                        },
                        blacken: function(t) {
                            var e = this.values.hwb;
                            return e[2] += e[2] * t, this.setValues("hwb", e), this
                        },
                        greyscale: function() {
                            var t = this.values.rgb,
                                e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                            return this.setValues("rgb", [e, e, e]), this
                        },
                        clearer: function(t) {
                            var e = this.values.alpha;
                            return this.setValues("alpha", e - e * t), this
                        },
                        opaquer: function(t) {
                            var e = this.values.alpha;
                            return this.setValues("alpha", e + e * t), this
                        },
                        rotate: function(t) {
                            var e = this.values.hsl,
                                n = (e[0] + t) % 360;
                            return e[0] = n < 0 ? 360 + n : n, this.setValues("hsl", e), this
                        },
                        mix: function(t, e) {
                            var n = t,
                                r = void 0 === e ? .5 : e,
                                i = 2 * r - 1,
                                o = this.alpha() - n.alpha(),
                                a = ((i * o == -1 ? i : (i + o) / (1 + i * o)) + 1) / 2,
                                s = 1 - a;
                            return this.rgb(a * this.red() + s * n.red(), a * this.green() + s * n.green(), a * this.blue() + s * n.blue()).alpha(this.alpha() * r + n.alpha() * (1 - r))
                        },
                        toJSON: function() {
                            return this.rgb()
                        },
                        clone: function() {
                            var t, e, n = new a,
                                r = this.values,
                                i = n.values;
                            for (var o in r) r.hasOwnProperty(o) && (t = r[o], "[object Array]" === (e = {}.toString.call(t)) ? i[o] = t.slice(0) : "[object Number]" === e ? i[o] = t : console.error("unexpected color value:", t));
                            return n
                        }
                    }).spaces = {
                        rgb: ["red", "green", "blue"],
                        hsl: ["hue", "saturation", "lightness"],
                        hsv: ["hue", "saturation", "value"],
                        hwb: ["hue", "whiteness", "blackness"],
                        cmyk: ["cyan", "magenta", "yellow", "black"]
                    }, a.prototype.maxes = {
                        rgb: [255, 255, 255],
                        hsl: [360, 100, 100],
                        hsv: [360, 100, 100],
                        hwb: [360, 100, 100],
                        cmyk: [100, 100, 100, 100]
                    }, a.prototype.getValues = function(t) {
                        for (var e = this.values, n = {}, r = 0; r < t.length; r++) n[t.charAt(r)] = e[t][r];
                        return 1 !== e.alpha && (n.a = e.alpha), n
                    }, a.prototype.setValues = function(t, e) {
                        var n, i, o = this.values,
                            a = this.spaces,
                            s = this.maxes,
                            l = 1;
                        if (this.valid = !0, "alpha" === t) l = e;
                        else if (e.length) o[t] = e.slice(0, t.length), l = e[t.length];
                        else if (void 0 !== e[t.charAt(0)]) {
                            for (n = 0; n < t.length; n++) o[t][n] = e[t.charAt(n)];
                            l = e.a
                        } else if (void 0 !== e[a[t][0]]) {
                            var u = a[t];
                            for (n = 0; n < t.length; n++) o[t][n] = e[u[n]];
                            l = e.alpha
                        }
                        if (o.alpha = Math.max(0, Math.min(1, void 0 === l ? o.alpha : l)), "alpha" === t) return !1;
                        for (n = 0; n < t.length; n++) i = Math.max(0, Math.min(s[t][n], o[t][n])), o[t][n] = Math.round(i);
                        for (var c in a) c !== t && (o[c] = r[t][c](o[t]));
                        return !0
                    }, a.prototype.setSpace = function(t, e) {
                        var n = e[0];
                        return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this)
                    }, a.prototype.setChannel = function(t, e, n) {
                        var r = this.values[t];
                        return void 0 === n ? r[e] : n === r[e] ? this : (r[e] = n, this.setValues(t, r), this)
                    }, "undefined" != typeof window && (window.Color = a), e.exports = a
                }, {
                    2: 2,
                    5: 5
                }],
                4: [function(t, e, n) {
                    function i(t) {
                        var e, n, r = t[0] / 255,
                            i = t[1] / 255,
                            o = t[2] / 255,
                            a = Math.min(r, i, o),
                            s = Math.max(r, i, o),
                            l = s - a;
                        return s == a ? e = 0 : r == s ? e = (i - o) / l : i == s ? e = 2 + (o - r) / l : o == s && (e = 4 + (r - i) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), n = (a + s) / 2, [e, 100 * (s == a ? 0 : n <= .5 ? l / (s + a) : l / (2 - s - a)), 100 * n]
                    }

                    function o(t) {
                        var e, n, r = t[0],
                            i = t[1],
                            o = t[2],
                            a = Math.min(r, i, o),
                            s = Math.max(r, i, o),
                            l = s - a;
                        return n = 0 == s ? 0 : l / s * 1e3 / 10, s == a ? e = 0 : r == s ? e = (i - o) / l : i == s ? e = 2 + (o - r) / l : o == s && (e = 4 + (r - i) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, n, s / 255 * 1e3 / 10]
                    }

                    function a(t) {
                        var e = t[0],
                            n = t[1],
                            r = t[2];
                        return [i(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(n, r))), 100 * (r = 1 - 1 / 255 * Math.max(e, Math.max(n, r)))]
                    }

                    function s(t) {
                        var e, n = t[0] / 255,
                            r = t[1] / 255,
                            i = t[2] / 255;
                        return [100 * ((1 - n - (e = Math.min(1 - n, 1 - r, 1 - i))) / (1 - e) || 0), 100 * ((1 - r - e) / (1 - e) || 0), 100 * ((1 - i - e) / (1 - e) || 0), 100 * e]
                    }

                    function l(t) {
                        return M[JSON.stringify(t)]
                    }

                    function u(t) {
                        var e = t[0] / 255,
                            n = t[1] / 255,
                            r = t[2] / 255;
                        return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92)), 100 * (.2126 * e + .7152 * n + .0722 * r), 100 * (.0193 * e + .1192 * n + .9505 * r)]
                    }

                    function c(t) {
                        var e = u(t),
                            n = e[0],
                            r = e[1],
                            i = e[2];
                        return r /= 100, i /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116) - 16, 500 * (n - r), 200 * (r - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))]
                    }

                    function d(t) {
                        var e, n, r, i, o, a = t[0] / 360,
                            s = t[1] / 100,
                            l = t[2] / 100;
                        if (0 == s) return [o = 255 * l, o, o];
                        e = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), i = [0, 0, 0];
                        for (var u = 0; u < 3; u++)(r = a + 1 / 3 * -(u - 1)) < 0 && r++, r > 1 && r--, o = 6 * r < 1 ? e + 6 * (n - e) * r : 2 * r < 1 ? n : 3 * r < 2 ? e + (n - e) * (2 / 3 - r) * 6 : e, i[u] = 255 * o;
                        return i
                    }

                    function f(t) {
                        var e = t[0] / 60,
                            n = t[1] / 100,
                            r = t[2] / 100,
                            i = Math.floor(e) % 6,
                            o = e - Math.floor(e),
                            a = 255 * r * (1 - n),
                            s = 255 * r * (1 - n * o),
                            l = 255 * r * (1 - n * (1 - o));
                        r *= 255;
                        switch (i) {
                            case 0:
                                return [r, l, a];
                            case 1:
                                return [s, r, a];
                            case 2:
                                return [a, r, l];
                            case 3:
                                return [a, s, r];
                            case 4:
                                return [l, a, r];
                            case 5:
                                return [r, a, s]
                        }
                    }

                    function h(t) {
                        var e, n, i, o, a = t[0] / 360,
                            s = t[1] / 100,
                            l = t[2] / 100,
                            u = s + l;
                        switch (u > 1 && (s /= u, l /= u), i = 6 * a - (e = Math.floor(6 * a)), 0 != (1 & e) && (i = 1 - i), o = s + i * ((n = 1 - l) - s), e) {
                            default:
                            case 6:
                            case 0:
                                r = n, g = o, b = s;
                                break;
                            case 1:
                                r = o, g = n, b = s;
                                break;
                            case 2:
                                r = s, g = n, b = o;
                                break;
                            case 3:
                                r = s, g = o, b = n;
                                break;
                            case 4:
                                r = o, g = s, b = n;
                                break;
                            case 5:
                                r = n, g = s, b = o
                        }
                        return [255 * r, 255 * g, 255 * b]
                    }

                    function p(t) {
                        var e = t[0] / 100,
                            n = t[1] / 100,
                            r = t[2] / 100,
                            i = t[3] / 100;
                        return [255 * (1 - Math.min(1, e * (1 - i) + i)), 255 * (1 - Math.min(1, n * (1 - i) + i)), 255 * (1 - Math.min(1, r * (1 - i) + i))]
                    }

                    function v(t) {
                        var e, n, r, i = t[0] / 100,
                            o = t[1] / 100,
                            a = t[2] / 100;
                        return n = -.9689 * i + 1.8758 * o + .0415 * a, r = .0557 * i + -.204 * o + 1.057 * a, e = (e = 3.2406 * i + -1.5372 * o + -.4986 * a) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : r *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (r = Math.min(Math.max(0, r), 1))]
                    }

                    function m(t) {
                        var e = t[0],
                            n = t[1],
                            r = t[2];
                        return n /= 100, r /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (e - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]
                    }

                    function y(t) {
                        var e, n, r, i, o = t[0],
                            a = t[1],
                            s = t[2];
                        return o <= 8 ? i = (n = 100 * o / 903.3) / 100 * 7.787 + 16 / 116 : (n = 100 * Math.pow((o + 16) / 116, 3), i = Math.pow(n / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (a / 500 + i - 16 / 116) / 7.787 : 95.047 * Math.pow(a / 500 + i, 3), n, r = r / 108.883 <= .008859 ? r = 108.883 * (i - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(i - s / 200, 3)]
                    }

                    function x(t) {
                        var e, n = t[0],
                            r = t[1],
                            i = t[2];
                        return (e = 360 * Math.atan2(i, r) / 2 / Math.PI) < 0 && (e += 360), [n, Math.sqrt(r * r + i * i), e]
                    }

                    function w(t) {
                        return v(y(t))
                    }

                    function S(t) {
                        var e, n = t[0],
                            r = t[1];
                        return e = t[2] / 360 * 2 * Math.PI, [n, r * Math.cos(e), r * Math.sin(e)]
                    }

                    function k(t) {
                        return C[t]
                    }
                    e.exports = {
                        rgb2hsl: i,
                        rgb2hsv: o,
                        rgb2hwb: a,
                        rgb2cmyk: s,
                        rgb2keyword: l,
                        rgb2xyz: u,
                        rgb2lab: c,
                        rgb2lch: function(t) {
                            return x(c(t))
                        },
                        hsl2rgb: d,
                        hsl2hsv: function(t) {
                            var e = t[0],
                                n = t[1] / 100,
                                r = t[2] / 100;
                            if (0 === r) return [0, 0, 0];
                            return [e, 100 * (2 * (n *= (r *= 2) <= 1 ? r : 2 - r) / (r + n)), 100 * ((r + n) / 2)]
                        },
                        hsl2hwb: function(t) {
                            return a(d(t))
                        },
                        hsl2cmyk: function(t) {
                            return s(d(t))
                        },
                        hsl2keyword: function(t) {
                            return l(d(t))
                        },
                        hsv2rgb: f,
                        hsv2hsl: function(t) {
                            var e, n, r = t[0],
                                i = t[1] / 100,
                                o = t[2] / 100;
                            return e = i * o, [r, 100 * (e = (e /= (n = (2 - i) * o) <= 1 ? n : 2 - n) || 0), 100 * (n /= 2)]
                        },
                        hsv2hwb: function(t) {
                            return a(f(t))
                        },
                        hsv2cmyk: function(t) {
                            return s(f(t))
                        },
                        hsv2keyword: function(t) {
                            return l(f(t))
                        },
                        hwb2rgb: h,
                        hwb2hsl: function(t) {
                            return i(h(t))
                        },
                        hwb2hsv: function(t) {
                            return o(h(t))
                        },
                        hwb2cmyk: function(t) {
                            return s(h(t))
                        },
                        hwb2keyword: function(t) {
                            return l(h(t))
                        },
                        cmyk2rgb: p,
                        cmyk2hsl: function(t) {
                            return i(p(t))
                        },
                        cmyk2hsv: function(t) {
                            return o(p(t))
                        },
                        cmyk2hwb: function(t) {
                            return a(p(t))
                        },
                        cmyk2keyword: function(t) {
                            return l(p(t))
                        },
                        keyword2rgb: k,
                        keyword2hsl: function(t) {
                            return i(k(t))
                        },
                        keyword2hsv: function(t) {
                            return o(k(t))
                        },
                        keyword2hwb: function(t) {
                            return a(k(t))
                        },
                        keyword2cmyk: function(t) {
                            return s(k(t))
                        },
                        keyword2lab: function(t) {
                            return c(k(t))
                        },
                        keyword2xyz: function(t) {
                            return u(k(t))
                        },
                        xyz2rgb: v,
                        xyz2lab: m,
                        xyz2lch: function(t) {
                            return x(m(t))
                        },
                        lab2xyz: y,
                        lab2rgb: w,
                        lab2lch: x,
                        lch2lab: S,
                        lch2xyz: function(t) {
                            return y(S(t))
                        },
                        lch2rgb: function(t) {
                            return w(S(t))
                        }
                    };
                    var C = {
                            aliceblue: [240, 248, 255],
                            antiquewhite: [250, 235, 215],
                            aqua: [0, 255, 255],
                            aquamarine: [127, 255, 212],
                            azure: [240, 255, 255],
                            beige: [245, 245, 220],
                            bisque: [255, 228, 196],
                            black: [0, 0, 0],
                            blanchedalmond: [255, 235, 205],
                            blue: [0, 0, 255],
                            blueviolet: [138, 43, 226],
                            brown: [165, 42, 42],
                            burlywood: [222, 184, 135],
                            cadetblue: [95, 158, 160],
                            chartreuse: [127, 255, 0],
                            chocolate: [210, 105, 30],
                            coral: [255, 127, 80],
                            cornflowerblue: [100, 149, 237],
                            cornsilk: [255, 248, 220],
                            crimson: [220, 20, 60],
                            cyan: [0, 255, 255],
                            darkblue: [0, 0, 139],
                            darkcyan: [0, 139, 139],
                            darkgoldenrod: [184, 134, 11],
                            darkgray: [169, 169, 169],
                            darkgreen: [0, 100, 0],
                            darkgrey: [169, 169, 169],
                            darkkhaki: [189, 183, 107],
                            darkmagenta: [139, 0, 139],
                            darkolivegreen: [85, 107, 47],
                            darkorange: [255, 140, 0],
                            darkorchid: [153, 50, 204],
                            darkred: [139, 0, 0],
                            darksalmon: [233, 150, 122],
                            darkseagreen: [143, 188, 143],
                            darkslateblue: [72, 61, 139],
                            darkslategray: [47, 79, 79],
                            darkslategrey: [47, 79, 79],
                            darkturquoise: [0, 206, 209],
                            darkviolet: [148, 0, 211],
                            deeppink: [255, 20, 147],
                            deepskyblue: [0, 191, 255],
                            dimgray: [105, 105, 105],
                            dimgrey: [105, 105, 105],
                            dodgerblue: [30, 144, 255],
                            firebrick: [178, 34, 34],
                            floralwhite: [255, 250, 240],
                            forestgreen: [34, 139, 34],
                            fuchsia: [255, 0, 255],
                            gainsboro: [220, 220, 220],
                            ghostwhite: [248, 248, 255],
                            gold: [255, 215, 0],
                            goldenrod: [218, 165, 32],
                            gray: [128, 128, 128],
                            green: [0, 128, 0],
                            greenyellow: [173, 255, 47],
                            grey: [128, 128, 128],
                            honeydew: [240, 255, 240],
                            hotpink: [255, 105, 180],
                            indianred: [205, 92, 92],
                            indigo: [75, 0, 130],
                            ivory: [255, 255, 240],
                            khaki: [240, 230, 140],
                            lavender: [230, 230, 250],
                            lavenderblush: [255, 240, 245],
                            lawngreen: [124, 252, 0],
                            lemonchiffon: [255, 250, 205],
                            lightblue: [173, 216, 230],
                            lightcoral: [240, 128, 128],
                            lightcyan: [224, 255, 255],
                            lightgoldenrodyellow: [250, 250, 210],
                            lightgray: [211, 211, 211],
                            lightgreen: [144, 238, 144],
                            lightgrey: [211, 211, 211],
                            lightpink: [255, 182, 193],
                            lightsalmon: [255, 160, 122],
                            lightseagreen: [32, 178, 170],
                            lightskyblue: [135, 206, 250],
                            lightslategray: [119, 136, 153],
                            lightslategrey: [119, 136, 153],
                            lightsteelblue: [176, 196, 222],
                            lightyellow: [255, 255, 224],
                            lime: [0, 255, 0],
                            limegreen: [50, 205, 50],
                            linen: [250, 240, 230],
                            magenta: [255, 0, 255],
                            maroon: [128, 0, 0],
                            mediumaquamarine: [102, 205, 170],
                            mediumblue: [0, 0, 205],
                            mediumorchid: [186, 85, 211],
                            mediumpurple: [147, 112, 219],
                            mediumseagreen: [60, 179, 113],
                            mediumslateblue: [123, 104, 238],
                            mediumspringgreen: [0, 250, 154],
                            mediumturquoise: [72, 209, 204],
                            mediumvioletred: [199, 21, 133],
                            midnightblue: [25, 25, 112],
                            mintcream: [245, 255, 250],
                            mistyrose: [255, 228, 225],
                            moccasin: [255, 228, 181],
                            navajowhite: [255, 222, 173],
                            navy: [0, 0, 128],
                            oldlace: [253, 245, 230],
                            olive: [128, 128, 0],
                            olivedrab: [107, 142, 35],
                            orange: [255, 165, 0],
                            orangered: [255, 69, 0],
                            orchid: [218, 112, 214],
                            palegoldenrod: [238, 232, 170],
                            palegreen: [152, 251, 152],
                            paleturquoise: [175, 238, 238],
                            palevioletred: [219, 112, 147],
                            papayawhip: [255, 239, 213],
                            peachpuff: [255, 218, 185],
                            peru: [205, 133, 63],
                            pink: [255, 192, 203],
                            plum: [221, 160, 221],
                            powderblue: [176, 224, 230],
                            purple: [128, 0, 128],
                            rebeccapurple: [102, 51, 153],
                            red: [255, 0, 0],
                            rosybrown: [188, 143, 143],
                            royalblue: [65, 105, 225],
                            saddlebrown: [139, 69, 19],
                            salmon: [250, 128, 114],
                            sandybrown: [244, 164, 96],
                            seagreen: [46, 139, 87],
                            seashell: [255, 245, 238],
                            sienna: [160, 82, 45],
                            silver: [192, 192, 192],
                            skyblue: [135, 206, 235],
                            slateblue: [106, 90, 205],
                            slategray: [112, 128, 144],
                            slategrey: [112, 128, 144],
                            snow: [255, 250, 250],
                            springgreen: [0, 255, 127],
                            steelblue: [70, 130, 180],
                            tan: [210, 180, 140],
                            teal: [0, 128, 128],
                            thistle: [216, 191, 216],
                            tomato: [255, 99, 71],
                            turquoise: [64, 224, 208],
                            violet: [238, 130, 238],
                            wheat: [245, 222, 179],
                            white: [255, 255, 255],
                            whitesmoke: [245, 245, 245],
                            yellow: [255, 255, 0],
                            yellowgreen: [154, 205, 50]
                        },
                        M = {};
                    for (var A in C) M[JSON.stringify(C[A])] = A
                }, {}],
                5: [function(t, e, n) {
                    var r = t(4),
                        i = function() {
                            return new u
                        };
                    for (var o in r) {
                        i[o + "Raw"] = function(t) {
                            return function(e) {
                                return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), r[t](e)
                            }
                        }(o);
                        var a = /(\w+)2(\w+)/.exec(o),
                            s = a[1],
                            l = a[2];
                        (i[s] = i[s] || {})[l] = i[o] = function(t) {
                            return function(e) {
                                "number" == typeof e && (e = Array.prototype.slice.call(arguments));
                                var n = r[t](e);
                                if ("string" == typeof n || void 0 === n) return n;
                                for (var i = 0; i < n.length; i++) n[i] = Math.round(n[i]);
                                return n
                            }
                        }(o)
                    }
                    var u = function() {
                        this.convs = {}
                    };
                    u.prototype.routeSpace = function(t, e) {
                        var n = e[0];
                        return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n))
                    }, u.prototype.setValues = function(t, e) {
                        return this.space = t, this.convs = {}, this.convs[t] = e, this
                    }, u.prototype.getValues = function(t) {
                        var e = this.convs[t];
                        if (!e) {
                            var n = this.space,
                                r = this.convs[n];
                            e = i[n][t](r), this.convs[t] = e
                        }
                        return e
                    }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach((function(t) {
                        u.prototype[t] = function(e) {
                            return this.routeSpace(t, arguments)
                        }
                    })), e.exports = i
                }, {
                    4: 4
                }],
                6: [function(t, e, n) {
                    e.exports = {
                        aliceblue: [240, 248, 255],
                        antiquewhite: [250, 235, 215],
                        aqua: [0, 255, 255],
                        aquamarine: [127, 255, 212],
                        azure: [240, 255, 255],
                        beige: [245, 245, 220],
                        bisque: [255, 228, 196],
                        black: [0, 0, 0],
                        blanchedalmond: [255, 235, 205],
                        blue: [0, 0, 255],
                        blueviolet: [138, 43, 226],
                        brown: [165, 42, 42],
                        burlywood: [222, 184, 135],
                        cadetblue: [95, 158, 160],
                        chartreuse: [127, 255, 0],
                        chocolate: [210, 105, 30],
                        coral: [255, 127, 80],
                        cornflowerblue: [100, 149, 237],
                        cornsilk: [255, 248, 220],
                        crimson: [220, 20, 60],
                        cyan: [0, 255, 255],
                        darkblue: [0, 0, 139],
                        darkcyan: [0, 139, 139],
                        darkgoldenrod: [184, 134, 11],
                        darkgray: [169, 169, 169],
                        darkgreen: [0, 100, 0],
                        darkgrey: [169, 169, 169],
                        darkkhaki: [189, 183, 107],
                        darkmagenta: [139, 0, 139],
                        darkolivegreen: [85, 107, 47],
                        darkorange: [255, 140, 0],
                        darkorchid: [153, 50, 204],
                        darkred: [139, 0, 0],
                        darksalmon: [233, 150, 122],
                        darkseagreen: [143, 188, 143],
                        darkslateblue: [72, 61, 139],
                        darkslategray: [47, 79, 79],
                        darkslategrey: [47, 79, 79],
                        darkturquoise: [0, 206, 209],
                        darkviolet: [148, 0, 211],
                        deeppink: [255, 20, 147],
                        deepskyblue: [0, 191, 255],
                        dimgray: [105, 105, 105],
                        dimgrey: [105, 105, 105],
                        dodgerblue: [30, 144, 255],
                        firebrick: [178, 34, 34],
                        floralwhite: [255, 250, 240],
                        forestgreen: [34, 139, 34],
                        fuchsia: [255, 0, 255],
                        gainsboro: [220, 220, 220],
                        ghostwhite: [248, 248, 255],
                        gold: [255, 215, 0],
                        goldenrod: [218, 165, 32],
                        gray: [128, 128, 128],
                        green: [0, 128, 0],
                        greenyellow: [173, 255, 47],
                        grey: [128, 128, 128],
                        honeydew: [240, 255, 240],
                        hotpink: [255, 105, 180],
                        indianred: [205, 92, 92],
                        indigo: [75, 0, 130],
                        ivory: [255, 255, 240],
                        khaki: [240, 230, 140],
                        lavender: [230, 230, 250],
                        lavenderblush: [255, 240, 245],
                        lawngreen: [124, 252, 0],
                        lemonchiffon: [255, 250, 205],
                        lightblue: [173, 216, 230],
                        lightcoral: [240, 128, 128],
                        lightcyan: [224, 255, 255],
                        lightgoldenrodyellow: [250, 250, 210],
                        lightgray: [211, 211, 211],
                        lightgreen: [144, 238, 144],
                        lightgrey: [211, 211, 211],
                        lightpink: [255, 182, 193],
                        lightsalmon: [255, 160, 122],
                        lightseagreen: [32, 178, 170],
                        lightskyblue: [135, 206, 250],
                        lightslategray: [119, 136, 153],
                        lightslategrey: [119, 136, 153],
                        lightsteelblue: [176, 196, 222],
                        lightyellow: [255, 255, 224],
                        lime: [0, 255, 0],
                        limegreen: [50, 205, 50],
                        linen: [250, 240, 230],
                        magenta: [255, 0, 255],
                        maroon: [128, 0, 0],
                        mediumaquamarine: [102, 205, 170],
                        mediumblue: [0, 0, 205],
                        mediumorchid: [186, 85, 211],
                        mediumpurple: [147, 112, 219],
                        mediumseagreen: [60, 179, 113],
                        mediumslateblue: [123, 104, 238],
                        mediumspringgreen: [0, 250, 154],
                        mediumturquoise: [72, 209, 204],
                        mediumvioletred: [199, 21, 133],
                        midnightblue: [25, 25, 112],
                        mintcream: [245, 255, 250],
                        mistyrose: [255, 228, 225],
                        moccasin: [255, 228, 181],
                        navajowhite: [255, 222, 173],
                        navy: [0, 0, 128],
                        oldlace: [253, 245, 230],
                        olive: [128, 128, 0],
                        olivedrab: [107, 142, 35],
                        orange: [255, 165, 0],
                        orangered: [255, 69, 0],
                        orchid: [218, 112, 214],
                        palegoldenrod: [238, 232, 170],
                        palegreen: [152, 251, 152],
                        paleturquoise: [175, 238, 238],
                        palevioletred: [219, 112, 147],
                        papayawhip: [255, 239, 213],
                        peachpuff: [255, 218, 185],
                        peru: [205, 133, 63],
                        pink: [255, 192, 203],
                        plum: [221, 160, 221],
                        powderblue: [176, 224, 230],
                        purple: [128, 0, 128],
                        rebeccapurple: [102, 51, 153],
                        red: [255, 0, 0],
                        rosybrown: [188, 143, 143],
                        royalblue: [65, 105, 225],
                        saddlebrown: [139, 69, 19],
                        salmon: [250, 128, 114],
                        sandybrown: [244, 164, 96],
                        seagreen: [46, 139, 87],
                        seashell: [255, 245, 238],
                        sienna: [160, 82, 45],
                        silver: [192, 192, 192],
                        skyblue: [135, 206, 235],
                        slateblue: [106, 90, 205],
                        slategray: [112, 128, 144],
                        slategrey: [112, 128, 144],
                        snow: [255, 250, 250],
                        springgreen: [0, 255, 127],
                        steelblue: [70, 130, 180],
                        tan: [210, 180, 140],
                        teal: [0, 128, 128],
                        thistle: [216, 191, 216],
                        tomato: [255, 99, 71],
                        turquoise: [64, 224, 208],
                        violet: [238, 130, 238],
                        wheat: [245, 222, 179],
                        white: [255, 255, 255],
                        whitesmoke: [245, 245, 245],
                        yellow: [255, 255, 0],
                        yellowgreen: [154, 205, 50]
                    }
                }, {}],
                7: [function(t, e, n) {
                    var r = t(30)();
                    r.helpers = t(46), t(28)(r), r.Animation = t(22), r.animationService = t(23), r.defaults = t(26), r.Element = t(27), r.elements = t(41), r.Interaction = t(29), r.layouts = t(31), r.platform = t(49), r.plugins = t(32), r.Scale = t(33), r.scaleService = t(34), r.Ticks = t(35), r.Tooltip = t(36), t(24)(r), t(25)(r), t(56)(r), t(54)(r), t(55)(r), t(57)(r), t(58)(r), t(59)(r), t(15)(r), t(16)(r), t(17)(r), t(18)(r), t(19)(r), t(20)(r), t(21)(r), t(8)(r), t(9)(r), t(10)(r), t(11)(r), t(12)(r), t(13)(r), t(14)(r);
                    var i = t(50);
                    for (var o in i) i.hasOwnProperty(o) && r.plugins.register(i[o]);
                    r.platform.initialize(), e.exports = r, "undefined" != typeof window && (window.Chart = r), r.Legend = i.legend._element, r.Title = i.title._element, r.pluginService = r.plugins, r.PluginBase = r.Element.extend({}), r.canvasHelpers = r.helpers.canvas, r.layoutService = r.layouts
                }, {
                    10: 10,
                    11: 11,
                    12: 12,
                    13: 13,
                    14: 14,
                    15: 15,
                    16: 16,
                    17: 17,
                    18: 18,
                    19: 19,
                    20: 20,
                    21: 21,
                    22: 22,
                    23: 23,
                    24: 24,
                    25: 25,
                    26: 26,
                    27: 27,
                    28: 28,
                    29: 29,
                    30: 30,
                    31: 31,
                    32: 32,
                    33: 33,
                    34: 34,
                    35: 35,
                    36: 36,
                    41: 41,
                    46: 46,
                    49: 49,
                    50: 50,
                    54: 54,
                    55: 55,
                    56: 56,
                    57: 57,
                    58: 58,
                    59: 59,
                    8: 8,
                    9: 9
                }],
                8: [function(t, e, n) {
                    e.exports = function(t) {
                        t.Bar = function(e, n) {
                            return n.type = "bar", new t(e, n)
                        }
                    }
                }, {}],
                9: [function(t, e, n) {
                    e.exports = function(t) {
                        t.Bubble = function(e, n) {
                            return n.type = "bubble", new t(e, n)
                        }
                    }
                }, {}],
                10: [function(t, e, n) {
                    e.exports = function(t) {
                        t.Doughnut = function(e, n) {
                            return n.type = "doughnut", new t(e, n)
                        }
                    }
                }, {}],
                11: [function(t, e, n) {
                    e.exports = function(t) {
                        t.Line = function(e, n) {
                            return n.type = "line", new t(e, n)
                        }
                    }
                }, {}],
                12: [function(t, e, n) {
                    e.exports = function(t) {
                        t.PolarArea = function(e, n) {
                            return n.type = "polarArea", new t(e, n)
                        }
                    }
                }, {}],
                13: [function(t, e, n) {
                    e.exports = function(t) {
                        t.Radar = function(e, n) {
                            return n.type = "radar", new t(e, n)
                        }
                    }
                }, {}],
                14: [function(t, e, n) {
                    e.exports = function(t) {
                        t.Scatter = function(e, n) {
                            return n.type = "scatter", new t(e, n)
                        }
                    }
                }, {}],
                15: [function(t, e, n) {
                    var r = t(26),
                        i = t(41),
                        o = t(46);
                    r._set("bar", {
                        hover: {
                            mode: "label"
                        },
                        scales: {
                            xAxes: [{
                                type: "category",
                                categoryPercentage: .8,
                                barPercentage: .9,
                                offset: !0,
                                gridLines: {
                                    offsetGridLines: !0
                                }
                            }],
                            yAxes: [{
                                type: "linear"
                            }]
                        }
                    }), r._set("horizontalBar", {
                        hover: {
                            mode: "index",
                            axis: "y"
                        },
                        scales: {
                            xAxes: [{
                                type: "linear",
                                position: "bottom"
                            }],
                            yAxes: [{
                                position: "left",
                                type: "category",
                                categoryPercentage: .8,
                                barPercentage: .9,
                                offset: !0,
                                gridLines: {
                                    offsetGridLines: !0
                                }
                            }]
                        },
                        elements: {
                            rectangle: {
                                borderSkipped: "left"
                            }
                        },
                        tooltips: {
                            callbacks: {
                                title: function(t, e) {
                                    var n = "";
                                    return t.length > 0 && (t[0].yLabel ? n = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (n = e.labels[t[0].index])), n
                                },
                                label: function(t, e) {
                                    return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel
                                }
                            },
                            mode: "index",
                            axis: "y"
                        }
                    }), e.exports = function(t) {
                        t.controllers.bar = t.DatasetController.extend({
                            dataElementType: i.Rectangle,
                            initialize: function() {
                                var e, n = this;
                                t.DatasetController.prototype.initialize.apply(n, arguments), (e = n.getMeta()).stack = n.getDataset().stack, e.bar = !0
                            },
                            update: function(t) {
                                var e, n, r = this.getMeta().data;
                                for (this._ruler = this.getRuler(), e = 0, n = r.length; e < n; ++e) this.updateElement(r[e], e, t)
                            },
                            updateElement: function(t, e, n) {
                                var r = this,
                                    i = r.chart,
                                    a = r.getMeta(),
                                    s = r.getDataset(),
                                    l = t.custom || {},
                                    u = i.options.elements.rectangle;
                                t._xScale = r.getScaleForId(a.xAxisID), t._yScale = r.getScaleForId(a.yAxisID), t._datasetIndex = r.index, t._index = e, t._model = {
                                    datasetLabel: s.label,
                                    label: i.data.labels[e],
                                    borderSkipped: l.borderSkipped ? l.borderSkipped : u.borderSkipped,
                                    backgroundColor: l.backgroundColor ? l.backgroundColor : o.valueAtIndexOrDefault(s.backgroundColor, e, u.backgroundColor),
                                    borderColor: l.borderColor ? l.borderColor : o.valueAtIndexOrDefault(s.borderColor, e, u.borderColor),
                                    borderWidth: l.borderWidth ? l.borderWidth : o.valueAtIndexOrDefault(s.borderWidth, e, u.borderWidth)
                                }, r.updateElementGeometry(t, e, n), t.pivot()
                            },
                            updateElementGeometry: function(t, e, n) {
                                var r = this,
                                    i = t._model,
                                    o = r.getValueScale(),
                                    a = o.getBasePixel(),
                                    s = o.isHorizontal(),
                                    l = r._ruler || r.getRuler(),
                                    u = r.calculateBarValuePixels(r.index, e),
                                    c = r.calculateBarIndexPixels(r.index, e, l);
                                i.horizontal = s, i.base = n ? a : u.base, i.x = s ? n ? a : u.head : c.center, i.y = s ? c.center : n ? a : u.head, i.height = s ? c.size : void 0, i.width = s ? void 0 : c.size
                            },
                            getValueScaleId: function() {
                                return this.getMeta().yAxisID
                            },
                            getIndexScaleId: function() {
                                return this.getMeta().xAxisID
                            },
                            getValueScale: function() {
                                return this.getScaleForId(this.getValueScaleId())
                            },
                            getIndexScale: function() {
                                return this.getScaleForId(this.getIndexScaleId())
                            },
                            _getStacks: function(t) {
                                var e, n, r = this.chart,
                                    i = this.getIndexScale().options.stacked,
                                    o = void 0 === t ? r.data.datasets.length : t + 1,
                                    a = [];
                                for (e = 0; e < o; ++e)(n = r.getDatasetMeta(e)).bar && r.isDatasetVisible(e) && (!1 === i || !0 === i && -1 === a.indexOf(n.stack) || void 0 === i && (void 0 === n.stack || -1 === a.indexOf(n.stack))) && a.push(n.stack);
                                return a
                            },
                            getStackCount: function() {
                                return this._getStacks().length
                            },
                            getStackIndex: function(t, e) {
                                var n = this._getStacks(t),
                                    r = void 0 !== e ? n.indexOf(e) : -1;
                                return -1 === r ? n.length - 1 : r
                            },
                            getRuler: function() {
                                var t, e, n = this.getIndexScale(),
                                    r = this.getStackCount(),
                                    i = this.index,
                                    a = n.isHorizontal(),
                                    s = a ? n.left : n.top,
                                    l = s + (a ? n.width : n.height),
                                    u = [];
                                for (t = 0, e = this.getMeta().data.length; t < e; ++t) u.push(n.getPixelForValue(null, t, i));
                                return {
                                    min: o.isNullOrUndef(n.options.barThickness) ? function(t, e) {
                                        var n, r, i, o, a = t.isHorizontal() ? t.width : t.height,
                                            s = t.getTicks();
                                        for (i = 1, o = e.length; i < o; ++i) a = Math.min(a, e[i] - e[i - 1]);
                                        for (i = 0, o = s.length; i < o; ++i) r = t.getPixelForTick(i), a = i > 0 ? Math.min(a, r - n) : a, n = r;
                                        return a
                                    }(n, u) : -1,
                                    pixels: u,
                                    start: s,
                                    end: l,
                                    stackCount: r,
                                    scale: n
                                }
                            },
                            calculateBarValuePixels: function(t, e) {
                                var n, r, i, o, a, s, l = this.chart,
                                    u = this.getMeta(),
                                    c = this.getValueScale(),
                                    d = l.data.datasets,
                                    f = c.getRightValue(d[t].data[e]),
                                    h = c.options.stacked,
                                    p = u.stack,
                                    g = 0;
                                if (h || void 0 === h && void 0 !== p)
                                    for (n = 0; n < t; ++n)(r = l.getDatasetMeta(n)).bar && r.stack === p && r.controller.getValueScaleId() === c.id && l.isDatasetVisible(n) && (i = c.getRightValue(d[n].data[e]), (f < 0 && i < 0 || f >= 0 && i > 0) && (g += i));
                                return o = c.getPixelForValue(g), {
                                    size: s = ((a = c.getPixelForValue(g + f)) - o) / 2,
                                    base: o,
                                    head: a,
                                    center: a + s / 2
                                }
                            },
                            calculateBarIndexPixels: function(t, e, n) {
                                var r = n.scale.options,
                                    i = "flex" === r.barThickness ? function(t, e, n) {
                                        var r, i = e.pixels,
                                            o = i[t],
                                            a = t > 0 ? i[t - 1] : null,
                                            s = t < i.length - 1 ? i[t + 1] : null,
                                            l = n.categoryPercentage;
                                        return null === a && (a = o - (null === s ? e.end - o : s - o)), null === s && (s = o + o - a), r = o - (o - a) / 2 * l, {
                                            chunk: (s - a) / 2 * l / e.stackCount,
                                            ratio: n.barPercentage,
                                            start: r
                                        }
                                    }(e, n, r) : function(t, e, n) {
                                        var r, i, a = n.barThickness,
                                            s = e.stackCount,
                                            l = e.pixels[t];
                                        return o.isNullOrUndef(a) ? (r = e.min * n.categoryPercentage, i = n.barPercentage) : (r = a * s, i = 1), {
                                            chunk: r / s,
                                            ratio: i,
                                            start: l - r / 2
                                        }
                                    }(e, n, r),
                                    a = this.getStackIndex(t, this.getMeta().stack),
                                    s = i.start + i.chunk * a + i.chunk / 2,
                                    l = Math.min(o.valueOrDefault(r.maxBarThickness, 1 / 0), i.chunk * i.ratio);
                                return {
                                    base: s - l / 2,
                                    head: s + l / 2,
                                    center: s,
                                    size: l
                                }
                            },
                            draw: function() {
                                var t = this.chart,
                                    e = this.getValueScale(),
                                    n = this.getMeta().data,
                                    r = this.getDataset(),
                                    i = n.length,
                                    a = 0;
                                for (o.canvas.clipArea(t.ctx, t.chartArea); a < i; ++a) isNaN(e.getRightValue(r.data[a])) || n[a].draw();
                                o.canvas.unclipArea(t.ctx)
                            }
                        }), t.controllers.horizontalBar = t.controllers.bar.extend({
                            getValueScaleId: function() {
                                return this.getMeta().xAxisID
                            },
                            getIndexScaleId: function() {
                                return this.getMeta().yAxisID
                            }
                        })
                    }
                }, {
                    26: 26,
                    41: 41,
                    46: 46
                }],
                16: [function(t, e, n) {
                    var r = t(26),
                        i = t(41),
                        a = t(46);
                    r._set("bubble", {
                        hover: {
                            mode: "single"
                        },
                        scales: {
                            xAxes: [{
                                type: "linear",
                                position: "bottom",
                                id: "x-axis-0"
                            }],
                            yAxes: [{
                                type: "linear",
                                position: "left",
                                id: "y-axis-0"
                            }]
                        },
                        tooltips: {
                            callbacks: {
                                title: function() {
                                    return ""
                                },
                                label: function(t, e) {
                                    var n = e.datasets[t.datasetIndex].label || "",
                                        r = e.datasets[t.datasetIndex].data[t.index];
                                    return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + r.r + ")"
                                }
                            }
                        }
                    }), e.exports = function(t) {
                        t.controllers.bubble = t.DatasetController.extend({
                            dataElementType: i.Point,
                            update: function(t) {
                                var e = this,
                                    n = e.getMeta().data;
                                a.each(n, (function(n, r) {
                                    e.updateElement(n, r, t)
                                }))
                            },
                            updateElement: function(t, e, n) {
                                var r = this,
                                    i = r.getMeta(),
                                    a = t.custom || {},
                                    s = r.getScaleForId(i.xAxisID),
                                    l = r.getScaleForId(i.yAxisID),
                                    u = r._resolveElementOptions(t, e),
                                    c = r.getDataset().data[e],
                                    d = r.index,
                                    f = n ? s.getPixelForDecimal(.5) : s.getPixelForValue("object" === o(c) ? c : NaN, e, d),
                                    h = n ? l.getBasePixel() : l.getPixelForValue(c, e, d);
                                t._xScale = s, t._yScale = l, t._options = u, t._datasetIndex = d, t._index = e, t._model = {
                                    backgroundColor: u.backgroundColor,
                                    borderColor: u.borderColor,
                                    borderWidth: u.borderWidth,
                                    hitRadius: u.hitRadius,
                                    pointStyle: u.pointStyle,
                                    rotation: u.rotation,
                                    radius: n ? 0 : u.radius,
                                    skip: a.skip || isNaN(f) || isNaN(h),
                                    x: f,
                                    y: h
                                }, t.pivot()
                            },
                            setHoverStyle: function(t) {
                                var e = t._model,
                                    n = t._options;
                                t.$previousStyle = {
                                    backgroundColor: e.backgroundColor,
                                    borderColor: e.borderColor,
                                    borderWidth: e.borderWidth,
                                    radius: e.radius
                                }, e.backgroundColor = a.valueOrDefault(n.hoverBackgroundColor, a.getHoverColor(n.backgroundColor)), e.borderColor = a.valueOrDefault(n.hoverBorderColor, a.getHoverColor(n.borderColor)), e.borderWidth = a.valueOrDefault(n.hoverBorderWidth, n.borderWidth), e.radius = n.radius + n.hoverRadius
                            },
                            _resolveElementOptions: function(t, e) {
                                var n, r, i, o = this.chart,
                                    s = o.data.datasets[this.index],
                                    l = t.custom || {},
                                    u = o.options.elements.point,
                                    c = a.options.resolve,
                                    d = s.data[e],
                                    f = {},
                                    h = {
                                        chart: o,
                                        dataIndex: e,
                                        dataset: s,
                                        datasetIndex: this.index
                                    },
                                    p = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"];
                                for (n = 0, r = p.length; n < r; ++n) f[i = p[n]] = c([l[i], s[i], u[i]], h, e);
                                return f.radius = c([l.radius, d ? d.r : void 0, s.radius, u.radius], h, e), f
                            }
                        })
                    }
                }, {
                    26: 26,
                    41: 41,
                    46: 46
                }],
                17: [function(t, e, n) {
                    var r = t(26),
                        i = t(41),
                        o = t(46);
                    r._set("doughnut", {
                        animation: {
                            animateRotate: !0,
                            animateScale: !1
                        },
                        hover: {
                            mode: "single"
                        },
                        legendCallback: function(t) {
                            var e = [];
                            e.push('<ul class="' + t.id + '-legend">');
                            var n = t.data,
                                r = n.datasets,
                                i = n.labels;
                            if (r.length)
                                for (var o = 0; o < r[0].data.length; ++o) e.push('<li><span style="background-color:' + r[0].backgroundColor[o] + '"></span>'), i[o] && e.push(i[o]), e.push("</li>");
                            return e.push("</ul>"), e.join("")
                        },
                        legend: {
                            labels: {
                                generateLabels: function(t) {
                                    var e = t.data;
                                    return e.labels.length && e.datasets.length ? e.labels.map((function(n, r) {
                                        var i = t.getDatasetMeta(0),
                                            a = e.datasets[0],
                                            s = i.data[r],
                                            l = s && s.custom || {},
                                            u = o.valueAtIndexOrDefault,
                                            c = t.options.elements.arc;
                                        return {
                                            text: n,
                                            fillStyle: l.backgroundColor ? l.backgroundColor : u(a.backgroundColor, r, c.backgroundColor),
                                            strokeStyle: l.borderColor ? l.borderColor : u(a.borderColor, r, c.borderColor),
                                            lineWidth: l.borderWidth ? l.borderWidth : u(a.borderWidth, r, c.borderWidth),
                                            hidden: isNaN(a.data[r]) || i.data[r].hidden,
                                            index: r
                                        }
                                    })) : []
                                }
                            },
                            onClick: function(t, e) {
                                var n, r, i, o = e.index,
                                    a = this.chart;
                                for (n = 0, r = (a.data.datasets || []).length; n < r; ++n)(i = a.getDatasetMeta(n)).data[o] && (i.data[o].hidden = !i.data[o].hidden);
                                a.update()
                            }
                        },
                        cutoutPercentage: 50,
                        rotation: -.5 * Math.PI,
                        circumference: 2 * Math.PI,
                        tooltips: {
                            callbacks: {
                                title: function() {
                                    return ""
                                },
                                label: function(t, e) {
                                    var n = e.labels[t.index],
                                        r = ": " + e.datasets[t.datasetIndex].data[t.index];
                                    return o.isArray(n) ? (n = n.slice())[0] += r : n += r, n
                                }
                            }
                        }
                    }), r._set("pie", o.clone(r.doughnut)), r._set("pie", {
                        cutoutPercentage: 0
                    }), e.exports = function(t) {
                        t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
                            dataElementType: i.Arc,
                            linkScales: o.noop,
                            getRingIndex: function(t) {
                                for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && ++e;
                                return e
                            },
                            update: function(t) {
                                var e = this,
                                    n = e.chart,
                                    r = n.chartArea,
                                    i = n.options,
                                    a = i.elements.arc,
                                    s = r.right - r.left - a.borderWidth,
                                    l = r.bottom - r.top - a.borderWidth,
                                    u = Math.min(s, l),
                                    c = {
                                        x: 0,
                                        y: 0
                                    },
                                    d = e.getMeta(),
                                    f = i.cutoutPercentage,
                                    h = i.circumference;
                                if (h < 2 * Math.PI) {
                                    var p = i.rotation % (2 * Math.PI),
                                        g = (p += 2 * Math.PI * (p >= Math.PI ? -1 : p < -Math.PI ? 1 : 0)) + h,
                                        v = {
                                            x: Math.cos(p),
                                            y: Math.sin(p)
                                        },
                                        m = {
                                            x: Math.cos(g),
                                            y: Math.sin(g)
                                        },
                                        y = p <= 0 && g >= 0 || p <= 2 * Math.PI && 2 * Math.PI <= g,
                                        b = p <= .5 * Math.PI && .5 * Math.PI <= g || p <= 2.5 * Math.PI && 2.5 * Math.PI <= g,
                                        x = p <= -Math.PI && -Math.PI <= g || p <= Math.PI && Math.PI <= g,
                                        w = p <= .5 * -Math.PI && .5 * -Math.PI <= g || p <= 1.5 * Math.PI && 1.5 * Math.PI <= g,
                                        S = f / 100,
                                        k = {
                                            x: x ? -1 : Math.min(v.x * (v.x < 0 ? 1 : S), m.x * (m.x < 0 ? 1 : S)),
                                            y: w ? -1 : Math.min(v.y * (v.y < 0 ? 1 : S), m.y * (m.y < 0 ? 1 : S))
                                        },
                                        C = {
                                            x: y ? 1 : Math.max(v.x * (v.x > 0 ? 1 : S), m.x * (m.x > 0 ? 1 : S)),
                                            y: b ? 1 : Math.max(v.y * (v.y > 0 ? 1 : S), m.y * (m.y > 0 ? 1 : S))
                                        },
                                        M = {
                                            width: .5 * (C.x - k.x),
                                            height: .5 * (C.y - k.y)
                                        };
                                    u = Math.min(s / M.width, l / M.height), c = {
                                        x: -.5 * (C.x + k.x),
                                        y: -.5 * (C.y + k.y)
                                    }
                                }
                                n.borderWidth = e.getMaxBorderWidth(d.data), n.outerRadius = Math.max((u - n.borderWidth) / 2, 0), n.innerRadius = Math.max(f ? n.outerRadius / 100 * f : 0, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), n.offsetX = c.x * n.outerRadius, n.offsetY = c.y * n.outerRadius, d.total = e.calculateTotal(), e.outerRadius = n.outerRadius - n.radiusLength * e.getRingIndex(e.index), e.innerRadius = Math.max(e.outerRadius - n.radiusLength, 0), o.each(d.data, (function(n, r) {
                                    e.updateElement(n, r, t)
                                }))
                            },
                            updateElement: function(t, e, n) {
                                var r = this,
                                    i = r.chart,
                                    a = i.chartArea,
                                    s = i.options,
                                    l = s.animation,
                                    u = (a.left + a.right) / 2,
                                    c = (a.top + a.bottom) / 2,
                                    d = s.rotation,
                                    f = s.rotation,
                                    h = r.getDataset(),
                                    p = n && l.animateRotate ? 0 : t.hidden ? 0 : r.calculateCircumference(h.data[e]) * (s.circumference / (2 * Math.PI)),
                                    g = n && l.animateScale ? 0 : r.innerRadius,
                                    v = n && l.animateScale ? 0 : r.outerRadius,
                                    m = o.valueAtIndexOrDefault;
                                o.extend(t, {
                                    _datasetIndex: r.index,
                                    _index: e,
                                    _model: {
                                        x: u + i.offsetX,
                                        y: c + i.offsetY,
                                        startAngle: d,
                                        endAngle: f,
                                        circumference: p,
                                        outerRadius: v,
                                        innerRadius: g,
                                        label: m(h.label, e, i.data.labels[e])
                                    }
                                });
                                var y = t._model,
                                    b = t.custom || {},
                                    x = o.valueAtIndexOrDefault,
                                    w = this.chart.options.elements.arc;
                                y.backgroundColor = b.backgroundColor ? b.backgroundColor : x(h.backgroundColor, e, w.backgroundColor), y.borderColor = b.borderColor ? b.borderColor : x(h.borderColor, e, w.borderColor), y.borderWidth = b.borderWidth ? b.borderWidth : x(h.borderWidth, e, w.borderWidth), n && l.animateRotate || (y.startAngle = 0 === e ? s.rotation : r.getMeta().data[e - 1]._model.endAngle, y.endAngle = y.startAngle + y.circumference), t.pivot()
                            },
                            calculateTotal: function() {
                                var t, e = this.getDataset(),
                                    n = this.getMeta(),
                                    r = 0;
                                return o.each(n.data, (function(n, i) {
                                    t = e.data[i], isNaN(t) || n.hidden || (r += Math.abs(t))
                                })), r
                            },
                            calculateCircumference: function(t) {
                                var e = this.getMeta().total;
                                return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0
                            },
                            getMaxBorderWidth: function(t) {
                                for (var e, n, r = 0, i = this.index, o = t.length, a = 0; a < o; a++) e = t[a]._model ? t[a]._model.borderWidth : 0, r = (n = t[a]._chart ? t[a]._chart.config.data.datasets[i].hoverBorderWidth : 0) > (r = e > r ? e : r) ? n : r;
                                return r
                            }
                        })
                    }
                }, {
                    26: 26,
                    41: 41,
                    46: 46
                }],
                18: [function(t, e, n) {
                    var r = t(26),
                        i = t(41),
                        a = t(46);
                    r._set("line", {
                        showLines: !0,
                        spanGaps: !1,
                        hover: {
                            mode: "label"
                        },
                        scales: {
                            xAxes: [{
                                type: "category",
                                id: "x-axis-0"
                            }],
                            yAxes: [{
                                type: "linear",
                                id: "y-axis-0"
                            }]
                        }
                    }), e.exports = function(t) {
                        function e(t, e) {
                            return a.valueOrDefault(t.showLine, e.showLines)
                        }
                        t.controllers.line = t.DatasetController.extend({
                            datasetElementType: i.Line,
                            dataElementType: i.Point,
                            update: function(t) {
                                var n, r, i, o = this,
                                    s = o.getMeta(),
                                    l = s.dataset,
                                    u = s.data || [],
                                    c = o.chart.options,
                                    d = c.elements.line,
                                    f = o.getScaleForId(s.yAxisID),
                                    h = o.getDataset(),
                                    p = e(h, c);
                                for (p && (i = l.custom || {}, void 0 !== h.tension && void 0 === h.lineTension && (h.lineTension = h.tension), l._scale = f, l._datasetIndex = o.index, l._children = u, l._model = {
                                        spanGaps: h.spanGaps ? h.spanGaps : c.spanGaps,
                                        tension: i.tension ? i.tension : a.valueOrDefault(h.lineTension, d.tension),
                                        backgroundColor: i.backgroundColor ? i.backgroundColor : h.backgroundColor || d.backgroundColor,
                                        borderWidth: i.borderWidth ? i.borderWidth : h.borderWidth || d.borderWidth,
                                        borderColor: i.borderColor ? i.borderColor : h.borderColor || d.borderColor,
                                        borderCapStyle: i.borderCapStyle ? i.borderCapStyle : h.borderCapStyle || d.borderCapStyle,
                                        borderDash: i.borderDash ? i.borderDash : h.borderDash || d.borderDash,
                                        borderDashOffset: i.borderDashOffset ? i.borderDashOffset : h.borderDashOffset || d.borderDashOffset,
                                        borderJoinStyle: i.borderJoinStyle ? i.borderJoinStyle : h.borderJoinStyle || d.borderJoinStyle,
                                        fill: i.fill ? i.fill : void 0 !== h.fill ? h.fill : d.fill,
                                        steppedLine: i.steppedLine ? i.steppedLine : a.valueOrDefault(h.steppedLine, d.stepped),
                                        cubicInterpolationMode: i.cubicInterpolationMode ? i.cubicInterpolationMode : a.valueOrDefault(h.cubicInterpolationMode, d.cubicInterpolationMode)
                                    }, l.pivot()), n = 0, r = u.length; n < r; ++n) o.updateElement(u[n], n, t);
                                for (p && 0 !== l._model.tension && o.updateBezierControlPoints(), n = 0, r = u.length; n < r; ++n) u[n].pivot()
                            },
                            getPointBackgroundColor: function(t, e) {
                                var n = this.chart.options.elements.point.backgroundColor,
                                    r = this.getDataset(),
                                    i = t.custom || {};
                                return i.backgroundColor ? n = i.backgroundColor : r.pointBackgroundColor ? n = a.valueAtIndexOrDefault(r.pointBackgroundColor, e, n) : r.backgroundColor && (n = r.backgroundColor), n
                            },
                            getPointBorderColor: function(t, e) {
                                var n = this.chart.options.elements.point.borderColor,
                                    r = this.getDataset(),
                                    i = t.custom || {};
                                return i.borderColor ? n = i.borderColor : r.pointBorderColor ? n = a.valueAtIndexOrDefault(r.pointBorderColor, e, n) : r.borderColor && (n = r.borderColor), n
                            },
                            getPointBorderWidth: function(t, e) {
                                var n = this.chart.options.elements.point.borderWidth,
                                    r = this.getDataset(),
                                    i = t.custom || {};
                                return isNaN(i.borderWidth) ? !isNaN(r.pointBorderWidth) || a.isArray(r.pointBorderWidth) ? n = a.valueAtIndexOrDefault(r.pointBorderWidth, e, n) : isNaN(r.borderWidth) || (n = r.borderWidth) : n = i.borderWidth, n
                            },
                            getPointRotation: function(t, e) {
                                var n = this.chart.options.elements.point.rotation,
                                    r = this.getDataset(),
                                    i = t.custom || {};
                                return isNaN(i.rotation) ? isNaN(r.pointRotation) && !a.isArray(r.pointRotation) || (n = a.valueAtIndexOrDefault(r.pointRotation, e, n)) : n = i.rotation, n
                            },
                            updateElement: function(t, e, n) {
                                var r, i, s = this,
                                    l = s.getMeta(),
                                    u = t.custom || {},
                                    c = s.getDataset(),
                                    d = s.index,
                                    f = c.data[e],
                                    h = s.getScaleForId(l.yAxisID),
                                    p = s.getScaleForId(l.xAxisID),
                                    g = s.chart.options.elements.point;
                                void 0 !== c.radius && void 0 === c.pointRadius && (c.pointRadius = c.radius), void 0 !== c.hitRadius && void 0 === c.pointHitRadius && (c.pointHitRadius = c.hitRadius), r = p.getPixelForValue("object" === o(f) ? f : NaN, e, d), i = n ? h.getBasePixel() : s.calculatePointY(f, e, d), t._xScale = p, t._yScale = h, t._datasetIndex = d, t._index = e, t._model = {
                                    x: r,
                                    y: i,
                                    skip: u.skip || isNaN(r) || isNaN(i),
                                    radius: u.radius || a.valueAtIndexOrDefault(c.pointRadius, e, g.radius),
                                    pointStyle: u.pointStyle || a.valueAtIndexOrDefault(c.pointStyle, e, g.pointStyle),
                                    rotation: s.getPointRotation(t, e),
                                    backgroundColor: s.getPointBackgroundColor(t, e),
                                    borderColor: s.getPointBorderColor(t, e),
                                    borderWidth: s.getPointBorderWidth(t, e),
                                    tension: l.dataset._model ? l.dataset._model.tension : 0,
                                    steppedLine: !!l.dataset._model && l.dataset._model.steppedLine,
                                    hitRadius: u.hitRadius || a.valueAtIndexOrDefault(c.pointHitRadius, e, g.hitRadius)
                                }
                            },
                            calculatePointY: function(t, e, n) {
                                var r, i, o, a = this.chart,
                                    s = this.getMeta(),
                                    l = this.getScaleForId(s.yAxisID),
                                    u = 0,
                                    c = 0;
                                if (l.options.stacked) {
                                    for (r = 0; r < n; r++)
                                        if (i = a.data.datasets[r], "line" === (o = a.getDatasetMeta(r)).type && o.yAxisID === l.id && a.isDatasetVisible(r)) {
                                            var d = Number(l.getRightValue(i.data[e]));
                                            d < 0 ? c += d || 0 : u += d || 0
                                        } var f = Number(l.getRightValue(t));
                                    return f < 0 ? l.getPixelForValue(c + f) : l.getPixelForValue(u + f)
                                }
                                return l.getPixelForValue(t)
                            },
                            updateBezierControlPoints: function() {
                                var t, e, n, r, i = this.getMeta(),
                                    o = this.chart.chartArea,
                                    s = i.data || [];

                                function l(t, e, n) {
                                    return Math.max(Math.min(t, n), e)
                                }
                                if (i.dataset._model.spanGaps && (s = s.filter((function(t) {
                                        return !t._model.skip
                                    }))), "monotone" === i.dataset._model.cubicInterpolationMode) a.splineCurveMonotone(s);
                                else
                                    for (t = 0, e = s.length; t < e; ++t) n = s[t]._model, r = a.splineCurve(a.previousItem(s, t)._model, n, a.nextItem(s, t)._model, i.dataset._model.tension), n.controlPointPreviousX = r.previous.x, n.controlPointPreviousY = r.previous.y, n.controlPointNextX = r.next.x, n.controlPointNextY = r.next.y;
                                if (this.chart.options.elements.line.capBezierPoints)
                                    for (t = 0, e = s.length; t < e; ++t)(n = s[t]._model).controlPointPreviousX = l(n.controlPointPreviousX, o.left, o.right), n.controlPointPreviousY = l(n.controlPointPreviousY, o.top, o.bottom), n.controlPointNextX = l(n.controlPointNextX, o.left, o.right), n.controlPointNextY = l(n.controlPointNextY, o.top, o.bottom)
                            },
                            draw: function() {
                                var t, n = this.chart,
                                    r = this.getMeta(),
                                    i = r.data || [],
                                    o = n.chartArea,
                                    s = i.length,
                                    l = 0;
                                for (e(this.getDataset(), n.options) && (t = (r.dataset._model.borderWidth || 0) / 2, a.canvas.clipArea(n.ctx, {
                                        left: o.left,
                                        right: o.right,
                                        top: o.top - t,
                                        bottom: o.bottom + t
                                    }), r.dataset.draw(), a.canvas.unclipArea(n.ctx)); l < s; ++l) i[l].draw(o)
                            },
                            setHoverStyle: function(t) {
                                var e = this.chart.data.datasets[t._datasetIndex],
                                    n = t._index,
                                    r = t.custom || {},
                                    i = t._model;
                                t.$previousStyle = {
                                    backgroundColor: i.backgroundColor,
                                    borderColor: i.borderColor,
                                    borderWidth: i.borderWidth,
                                    radius: i.radius
                                }, i.backgroundColor = r.hoverBackgroundColor || a.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, a.getHoverColor(i.backgroundColor)), i.borderColor = r.hoverBorderColor || a.valueAtIndexOrDefault(e.pointHoverBorderColor, n, a.getHoverColor(i.borderColor)), i.borderWidth = r.hoverBorderWidth || a.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, i.borderWidth), i.radius = r.hoverRadius || a.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius)
                            }
                        })
                    }
                }, {
                    26: 26,
                    41: 41,
                    46: 46
                }],
                19: [function(t, e, n) {
                    var r = t(26),
                        i = t(41),
                        o = t(46);
                    r._set("polarArea", {
                        scale: {
                            type: "radialLinear",
                            angleLines: {
                                display: !1
                            },
                            gridLines: {
                                circular: !0
                            },
                            pointLabels: {
                                display: !1
                            },
                            ticks: {
                                beginAtZero: !0
                            }
                        },
                        animation: {
                            animateRotate: !0,
                            animateScale: !0
                        },
                        startAngle: -.5 * Math.PI,
                        legendCallback: function(t) {
                            var e = [];
                            e.push('<ul class="' + t.id + '-legend">');
                            var n = t.data,
                                r = n.datasets,
                                i = n.labels;
                            if (r.length)
                                for (var o = 0; o < r[0].data.length; ++o) e.push('<li><span style="background-color:' + r[0].backgroundColor[o] + '"></span>'), i[o] && e.push(i[o]), e.push("</li>");
                            return e.push("</ul>"), e.join("")
                        },
                        legend: {
                            labels: {
                                generateLabels: function(t) {
                                    var e = t.data;
                                    return e.labels.length && e.datasets.length ? e.labels.map((function(n, r) {
                                        var i = t.getDatasetMeta(0),
                                            a = e.datasets[0],
                                            s = i.data[r].custom || {},
                                            l = o.valueAtIndexOrDefault,
                                            u = t.options.elements.arc;
                                        return {
                                            text: n,
                                            fillStyle: s.backgroundColor ? s.backgroundColor : l(a.backgroundColor, r, u.backgroundColor),
                                            strokeStyle: s.borderColor ? s.borderColor : l(a.borderColor, r, u.borderColor),
                                            lineWidth: s.borderWidth ? s.borderWidth : l(a.borderWidth, r, u.borderWidth),
                                            hidden: isNaN(a.data[r]) || i.data[r].hidden,
                                            index: r
                                        }
                                    })) : []
                                }
                            },
                            onClick: function(t, e) {
                                var n, r, i, o = e.index,
                                    a = this.chart;
                                for (n = 0, r = (a.data.datasets || []).length; n < r; ++n)(i = a.getDatasetMeta(n)).data[o].hidden = !i.data[o].hidden;
                                a.update()
                            }
                        },
                        tooltips: {
                            callbacks: {
                                title: function() {
                                    return ""
                                },
                                label: function(t, e) {
                                    return e.labels[t.index] + ": " + t.yLabel
                                }
                            }
                        }
                    }), e.exports = function(t) {
                        t.controllers.polarArea = t.DatasetController.extend({
                            dataElementType: i.Arc,
                            linkScales: o.noop,
                            update: function(t) {
                                var e, n, r, i = this,
                                    a = i.getDataset(),
                                    s = i.getMeta(),
                                    l = i.chart.options.startAngle || 0,
                                    u = i._starts = [],
                                    c = i._angles = [];
                                for (i._updateRadius(), s.count = i.countVisibleElements(), e = 0, n = a.data.length; e < n; e++) u[e] = l, r = i._computeAngle(e), c[e] = r, l += r;
                                o.each(s.data, (function(e, n) {
                                    i.updateElement(e, n, t)
                                }))
                            },
                            _updateRadius: function() {
                                var t = this,
                                    e = t.chart,
                                    n = e.chartArea,
                                    r = e.options,
                                    i = r.elements.arc,
                                    o = Math.min(n.right - n.left, n.bottom - n.top);
                                e.outerRadius = Math.max((o - i.borderWidth / 2) / 2, 0), e.innerRadius = Math.max(r.cutoutPercentage ? e.outerRadius / 100 * r.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength
                            },
                            updateElement: function(t, e, n) {
                                var r = this,
                                    i = r.chart,
                                    a = r.getDataset(),
                                    s = i.options,
                                    l = s.animation,
                                    u = i.scale,
                                    c = i.data.labels,
                                    d = u.xCenter,
                                    f = u.yCenter,
                                    h = s.startAngle,
                                    p = t.hidden ? 0 : u.getDistanceFromCenterForValue(a.data[e]),
                                    g = r._starts[e],
                                    v = g + (t.hidden ? 0 : r._angles[e]),
                                    m = l.animateScale ? 0 : u.getDistanceFromCenterForValue(a.data[e]);
                                o.extend(t, {
                                    _datasetIndex: r.index,
                                    _index: e,
                                    _scale: u,
                                    _model: {
                                        x: d,
                                        y: f,
                                        innerRadius: 0,
                                        outerRadius: n ? m : p,
                                        startAngle: n && l.animateRotate ? h : g,
                                        endAngle: n && l.animateRotate ? h : v,
                                        label: o.valueAtIndexOrDefault(c, e, c[e])
                                    }
                                });
                                var y = this.chart.options.elements.arc,
                                    b = t.custom || {},
                                    x = o.valueAtIndexOrDefault,
                                    w = t._model;
                                w.backgroundColor = b.backgroundColor ? b.backgroundColor : x(a.backgroundColor, e, y.backgroundColor), w.borderColor = b.borderColor ? b.borderColor : x(a.borderColor, e, y.borderColor), w.borderWidth = b.borderWidth ? b.borderWidth : x(a.borderWidth, e, y.borderWidth), t.pivot()
                            },
                            countVisibleElements: function() {
                                var t = this.getDataset(),
                                    e = this.getMeta(),
                                    n = 0;
                                return o.each(e.data, (function(e, r) {
                                    isNaN(t.data[r]) || e.hidden || n++
                                })), n
                            },
                            _computeAngle: function(t) {
                                var e = this,
                                    n = this.getMeta().count,
                                    r = e.getDataset(),
                                    i = e.getMeta();
                                if (isNaN(r.data[t]) || i.data[t].hidden) return 0;
                                var a = {
                                    chart: e.chart,
                                    dataIndex: t,
                                    dataset: r,
                                    datasetIndex: e.index
                                };
                                return o.options.resolve([e.chart.options.elements.arc.angle, 2 * Math.PI / n], a, t)
                            }
                        })
                    }
                }, {
                    26: 26,
                    41: 41,
                    46: 46
                }],
                20: [function(t, e, n) {
                    var r = t(26),
                        i = t(41),
                        o = t(46);
                    r._set("radar", {
                        scale: {
                            type: "radialLinear"
                        },
                        elements: {
                            line: {
                                tension: 0
                            }
                        }
                    }), e.exports = function(t) {
                        t.controllers.radar = t.DatasetController.extend({
                            datasetElementType: i.Line,
                            dataElementType: i.Point,
                            linkScales: o.noop,
                            update: function(t) {
                                var e = this,
                                    n = e.getMeta(),
                                    r = n.dataset,
                                    i = n.data,
                                    a = r.custom || {},
                                    s = e.getDataset(),
                                    l = e.chart.options.elements.line,
                                    u = e.chart.scale;
                                void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), o.extend(n.dataset, {
                                    _datasetIndex: e.index,
                                    _scale: u,
                                    _children: i,
                                    _loop: !0,
                                    _model: {
                                        tension: a.tension ? a.tension : o.valueOrDefault(s.lineTension, l.tension),
                                        backgroundColor: a.backgroundColor ? a.backgroundColor : s.backgroundColor || l.backgroundColor,
                                        borderWidth: a.borderWidth ? a.borderWidth : s.borderWidth || l.borderWidth,
                                        borderColor: a.borderColor ? a.borderColor : s.borderColor || l.borderColor,
                                        fill: a.fill ? a.fill : void 0 !== s.fill ? s.fill : l.fill,
                                        borderCapStyle: a.borderCapStyle ? a.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
                                        borderDash: a.borderDash ? a.borderDash : s.borderDash || l.borderDash,
                                        borderDashOffset: a.borderDashOffset ? a.borderDashOffset : s.borderDashOffset || l.borderDashOffset,
                                        borderJoinStyle: a.borderJoinStyle ? a.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle
                                    }
                                }), n.dataset.pivot(), o.each(i, (function(n, r) {
                                    e.updateElement(n, r, t)
                                }), e), e.updateBezierControlPoints()
                            },
                            updateElement: function(t, e, n) {
                                var r = this,
                                    i = t.custom || {},
                                    a = r.getDataset(),
                                    s = r.chart.scale,
                                    l = r.chart.options.elements.point,
                                    u = s.getPointPositionForValue(e, a.data[e]);
                                void 0 !== a.radius && void 0 === a.pointRadius && (a.pointRadius = a.radius), void 0 !== a.hitRadius && void 0 === a.pointHitRadius && (a.pointHitRadius = a.hitRadius), o.extend(t, {
                                    _datasetIndex: r.index,
                                    _index: e,
                                    _scale: s,
                                    _model: {
                                        x: n ? s.xCenter : u.x,
                                        y: n ? s.yCenter : u.y,
                                        tension: i.tension ? i.tension : o.valueOrDefault(a.lineTension, r.chart.options.elements.line.tension),
                                        radius: i.radius ? i.radius : o.valueAtIndexOrDefault(a.pointRadius, e, l.radius),
                                        backgroundColor: i.backgroundColor ? i.backgroundColor : o.valueAtIndexOrDefault(a.pointBackgroundColor, e, l.backgroundColor),
                                        borderColor: i.borderColor ? i.borderColor : o.valueAtIndexOrDefault(a.pointBorderColor, e, l.borderColor),
                                        borderWidth: i.borderWidth ? i.borderWidth : o.valueAtIndexOrDefault(a.pointBorderWidth, e, l.borderWidth),
                                        pointStyle: i.pointStyle ? i.pointStyle : o.valueAtIndexOrDefault(a.pointStyle, e, l.pointStyle),
                                        rotation: i.rotation ? i.rotation : o.valueAtIndexOrDefault(a.pointRotation, e, l.rotation),
                                        hitRadius: i.hitRadius ? i.hitRadius : o.valueAtIndexOrDefault(a.pointHitRadius, e, l.hitRadius)
                                    }
                                }), t._model.skip = i.skip ? i.skip : isNaN(t._model.x) || isNaN(t._model.y)
                            },
                            updateBezierControlPoints: function() {
                                var t = this.chart.chartArea,
                                    e = this.getMeta();
                                o.each(e.data, (function(n, r) {
                                    var i = n._model,
                                        a = o.splineCurve(o.previousItem(e.data, r, !0)._model, i, o.nextItem(e.data, r, !0)._model, i.tension);
                                    i.controlPointPreviousX = Math.max(Math.min(a.previous.x, t.right), t.left), i.controlPointPreviousY = Math.max(Math.min(a.previous.y, t.bottom), t.top), i.controlPointNextX = Math.max(Math.min(a.next.x, t.right), t.left), i.controlPointNextY = Math.max(Math.min(a.next.y, t.bottom), t.top), n.pivot()
                                }))
                            },
                            setHoverStyle: function(t) {
                                var e = this.chart.data.datasets[t._datasetIndex],
                                    n = t.custom || {},
                                    r = t._index,
                                    i = t._model;
                                t.$previousStyle = {
                                    backgroundColor: i.backgroundColor,
                                    borderColor: i.borderColor,
                                    borderWidth: i.borderWidth,
                                    radius: i.radius
                                }, i.radius = n.hoverRadius ? n.hoverRadius : o.valueAtIndexOrDefault(e.pointHoverRadius, r, this.chart.options.elements.point.hoverRadius), i.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : o.valueAtIndexOrDefault(e.pointHoverBackgroundColor, r, o.getHoverColor(i.backgroundColor)), i.borderColor = n.hoverBorderColor ? n.hoverBorderColor : o.valueAtIndexOrDefault(e.pointHoverBorderColor, r, o.getHoverColor(i.borderColor)), i.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : o.valueAtIndexOrDefault(e.pointHoverBorderWidth, r, i.borderWidth)
                            }
                        })
                    }
                }, {
                    26: 26,
                    41: 41,
                    46: 46
                }],
                21: [function(t, e, n) {
                    t(26)._set("scatter", {
                        hover: {
                            mode: "single"
                        },
                        scales: {
                            xAxes: [{
                                id: "x-axis-1",
                                type: "linear",
                                position: "bottom"
                            }],
                            yAxes: [{
                                id: "y-axis-1",
                                type: "linear",
                                position: "left"
                            }]
                        },
                        showLines: !1,
                        tooltips: {
                            callbacks: {
                                title: function() {
                                    return ""
                                },
                                label: function(t) {
                                    return "(" + t.xLabel + ", " + t.yLabel + ")"
                                }
                            }
                        }
                    }), e.exports = function(t) {
                        t.controllers.scatter = t.controllers.line
                    }
                }, {
                    26: 26
                }],
                22: [function(t, e, n) {
                    var r = t(27);
                    n = e.exports = r.extend({
                        chart: null,
                        currentStep: 0,
                        numSteps: 60,
                        easing: "",
                        render: null,
                        onAnimationProgress: null,
                        onAnimationComplete: null
                    });
                    Object.defineProperty(n.prototype, "animationObject", {
                        get: function() {
                            return this
                        }
                    }), Object.defineProperty(n.prototype, "chartInstance", {
                        get: function() {
                            return this.chart
                        },
                        set: function(t) {
                            this.chart = t
                        }
                    })
                }, {
                    27: 27
                }],
                23: [function(t, e, n) {
                    var r = t(26),
                        i = t(46);
                    r._set("global", {
                        animation: {
                            duration: 1e3,
                            easing: "easeOutQuart",
                            onProgress: i.noop,
                            onComplete: i.noop
                        }
                    }), e.exports = {
                        frameDuration: 17,
                        animations: [],
                        dropFrames: 0,
                        request: null,
                        addAnimation: function(t, e, n, r) {
                            var i, o, a = this.animations;
                            for (e.chart = t, r || (t.animating = !0), i = 0, o = a.length; i < o; ++i)
                                if (a[i].chart === t) return void(a[i] = e);
                            a.push(e), 1 === a.length && this.requestAnimationFrame()
                        },
                        cancelAnimation: function(t) {
                            var e = i.findIndex(this.animations, (function(e) {
                                return e.chart === t
                            })); - 1 !== e && (this.animations.splice(e, 1), t.animating = !1)
                        },
                        requestAnimationFrame: function() {
                            var t = this;
                            null === t.request && (t.request = i.requestAnimFrame.call(window, (function() {
                                t.request = null, t.startDigest()
                            })))
                        },
                        startDigest: function() {
                            var t = this,
                                e = Date.now(),
                                n = 0;
                            t.dropFrames > 1 && (n = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + n);
                            var r = Date.now();
                            t.dropFrames += (r - e) / t.frameDuration, t.animations.length > 0 && t.requestAnimationFrame()
                        },
                        advance: function(t) {
                            for (var e, n, r = this.animations, o = 0; o < r.length;) n = (e = r[o]).chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), i.callback(e.render, [n, e], n), i.callback(e.onAnimationProgress, [e], n), e.currentStep >= e.numSteps ? (i.callback(e.onAnimationComplete, [e], n), n.animating = !1, r.splice(o, 1)) : ++o
                        }
                    }
                }, {
                    26: 26,
                    46: 46
                }],
                24: [function(t, e, n) {
                    var r = t(22),
                        i = t(23),
                        a = t(26),
                        s = t(46),
                        l = t(29),
                        u = t(31),
                        c = t(49),
                        d = t(32),
                        f = t(34),
                        h = t(36);
                    e.exports = function(t) {
                        function e(e) {
                            var n = e.options;
                            s.each(e.scales, (function(t) {
                                u.removeBox(e, t)
                            })), n = s.configMerge(t.defaults.global, t.defaults[e.config.type], n), e.options = e.config.options = n, e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.tooltip._options = n.tooltips, e.tooltip.initialize()
                        }

                        function n(t) {
                            return "top" === t || "bottom" === t
                        }
                        t.types = {}, t.instances = {}, t.controllers = {}, s.extend(t.prototype, {
                            construct: function(e, n) {
                                var r = this;
                                n = function(t) {
                                    var e = (t = t || {}).data = t.data || {};
                                    return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = s.configMerge(a.global, a[t.type], t.options || {}), t
                                }(n);
                                var i = c.acquireContext(e, n),
                                    o = i && i.canvas,
                                    l = o && o.height,
                                    u = o && o.width;
                                r.id = s.uid(), r.ctx = i, r.canvas = o, r.config = n, r.width = u, r.height = l, r.aspectRatio = l ? u / l : null, r.options = n.options, r._bufferedRender = !1, r.chart = r, r.controller = r, t.instances[r.id] = r, Object.defineProperty(r, "data", {
                                    get: function() {
                                        return r.config.data
                                    },
                                    set: function(t) {
                                        r.config.data = t
                                    }
                                }), i && o ? (r.initialize(), r.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                            },
                            initialize: function() {
                                var t = this;
                                return d.notify(t, "beforeInit"), s.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), d.notify(t, "afterInit"), t
                            },
                            clear: function() {
                                return s.canvas.clear(this), this
                            },
                            stop: function() {
                                return i.cancelAnimation(this), this
                            },
                            resize: function(t) {
                                var e = this,
                                    n = e.options,
                                    r = e.canvas,
                                    i = n.maintainAspectRatio && e.aspectRatio || null,
                                    o = Math.max(0, Math.floor(s.getMaximumWidth(r))),
                                    a = Math.max(0, Math.floor(i ? o / i : s.getMaximumHeight(r)));
                                if ((e.width !== o || e.height !== a) && (r.width = e.width = o, r.height = e.height = a, r.style.width = o + "px", r.style.height = a + "px", s.retinaScale(e, n.devicePixelRatio), !t)) {
                                    var l = {
                                        width: o,
                                        height: a
                                    };
                                    d.notify(e, "resize", [l]), e.options.onResize && e.options.onResize(e, l), e.stop(), e.update({
                                        duration: e.options.responsiveAnimationDuration
                                    })
                                }
                            },
                            ensureScalesHaveIDs: function() {
                                var t = this.options,
                                    e = t.scales || {},
                                    n = t.scale;
                                s.each(e.xAxes, (function(t, e) {
                                    t.id = t.id || "x-axis-" + e
                                })), s.each(e.yAxes, (function(t, e) {
                                    t.id = t.id || "y-axis-" + e
                                })), n && (n.id = n.id || "scale")
                            },
                            buildOrUpdateScales: function() {
                                var t = this,
                                    e = t.options,
                                    r = t.scales || {},
                                    i = [],
                                    o = Object.keys(r).reduce((function(t, e) {
                                        return t[e] = !1, t
                                    }), {});
                                e.scales && (i = i.concat((e.scales.xAxes || []).map((function(t) {
                                    return {
                                        options: t,
                                        dtype: "category",
                                        dposition: "bottom"
                                    }
                                })), (e.scales.yAxes || []).map((function(t) {
                                    return {
                                        options: t,
                                        dtype: "linear",
                                        dposition: "left"
                                    }
                                })))), e.scale && i.push({
                                    options: e.scale,
                                    dtype: "radialLinear",
                                    isDefault: !0,
                                    dposition: "chartArea"
                                }), s.each(i, (function(e) {
                                    var i = e.options,
                                        a = i.id,
                                        l = s.valueOrDefault(i.type, e.dtype);
                                    n(i.position) !== n(e.dposition) && (i.position = e.dposition), o[a] = !0;
                                    var u = null;
                                    if (a in r && r[a].type === l)(u = r[a]).options = i, u.ctx = t.ctx, u.chart = t;
                                    else {
                                        var c = f.getScaleConstructor(l);
                                        if (!c) return;
                                        u = new c({
                                            id: a,
                                            type: l,
                                            options: i,
                                            ctx: t.ctx,
                                            chart: t
                                        }), r[u.id] = u
                                    }
                                    u.mergeTicksOptions(), e.isDefault && (t.scale = u)
                                })), s.each(o, (function(t, e) {
                                    t || delete r[e]
                                })), t.scales = r, f.addScalesToLayout(this)
                            },
                            buildOrUpdateControllers: function() {
                                var e = this,
                                    n = [],
                                    r = [];
                                return s.each(e.data.datasets, (function(i, o) {
                                    var a = e.getDatasetMeta(o),
                                        s = i.type || e.config.type;
                                    if (a.type && a.type !== s && (e.destroyDatasetMeta(o), a = e.getDatasetMeta(o)), a.type = s, n.push(a.type), a.controller) a.controller.updateIndex(o), a.controller.linkScales();
                                    else {
                                        var l = t.controllers[a.type];
                                        if (void 0 === l) throw new Error('"' + a.type + '" is not a chart type.');
                                        a.controller = new l(e, o), r.push(a.controller)
                                    }
                                }), e), r
                            },
                            resetElements: function() {
                                var t = this;
                                s.each(t.data.datasets, (function(e, n) {
                                    t.getDatasetMeta(n).controller.reset()
                                }), t)
                            },
                            reset: function() {
                                this.resetElements(), this.tooltip.initialize()
                            },
                            update: function(t) {
                                var n = this;
                                if (t && "object" === o(t) || (t = {
                                        duration: t,
                                        lazy: arguments[1]
                                    }), e(n), d._invalidate(n), !1 !== d.notify(n, "beforeUpdate")) {
                                    n.tooltip._data = n.data;
                                    var r = n.buildOrUpdateControllers();
                                    s.each(n.data.datasets, (function(t, e) {
                                        n.getDatasetMeta(e).controller.buildOrUpdateElements()
                                    }), n), n.updateLayout(), n.options.animation && n.options.animation.duration && s.each(r, (function(t) {
                                        t.reset()
                                    })), n.updateDatasets(), n.tooltip.initialize(), n.lastActive = [], d.notify(n, "afterUpdate"), n._bufferedRender ? n._bufferedRequest = {
                                        duration: t.duration,
                                        easing: t.easing,
                                        lazy: t.lazy
                                    } : n.render(t)
                                }
                            },
                            updateLayout: function() {
                                !1 !== d.notify(this, "beforeLayout") && (u.update(this, this.width, this.height), d.notify(this, "afterScaleUpdate"), d.notify(this, "afterLayout"))
                            },
                            updateDatasets: function() {
                                if (!1 !== d.notify(this, "beforeDatasetsUpdate")) {
                                    for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                                    d.notify(this, "afterDatasetsUpdate")
                                }
                            },
                            updateDataset: function(t) {
                                var e = this.getDatasetMeta(t),
                                    n = {
                                        meta: e,
                                        index: t
                                    };
                                !1 !== d.notify(this, "beforeDatasetUpdate", [n]) && (e.controller.update(), d.notify(this, "afterDatasetUpdate", [n]))
                            },
                            render: function(t) {
                                var e = this;
                                t && "object" === o(t) || (t = {
                                    duration: t,
                                    lazy: arguments[1]
                                });
                                var n = t.duration,
                                    a = t.lazy;
                                if (!1 !== d.notify(e, "beforeRender")) {
                                    var l = e.options.animation,
                                        u = function(t) {
                                            d.notify(e, "afterRender"), s.callback(l && l.onComplete, [t], e)
                                        };
                                    if (l && (void 0 !== n && 0 !== n || void 0 === n && 0 !== l.duration)) {
                                        var c = new r({
                                            numSteps: (n || l.duration) / 16.66,
                                            easing: t.easing || l.easing,
                                            render: function(t, e) {
                                                var n = s.easing.effects[e.easing],
                                                    r = e.currentStep,
                                                    i = r / e.numSteps;
                                                t.draw(n(i), i, r)
                                            },
                                            onAnimationProgress: l.onProgress,
                                            onAnimationComplete: u
                                        });
                                        i.addAnimation(e, c, n, a)
                                    } else e.draw(), u(new r({
                                        numSteps: 0,
                                        chart: e
                                    }));
                                    return e
                                }
                            },
                            draw: function(t) {
                                var e = this;
                                e.clear(), s.isNullOrUndef(t) && (t = 1), e.transition(t), e.width <= 0 || e.height <= 0 || !1 !== d.notify(e, "beforeDraw", [t]) && (s.each(e.boxes, (function(t) {
                                    t.draw(e.chartArea)
                                }), e), e.scale && e.scale.draw(), e.drawDatasets(t), e._drawTooltip(t), d.notify(e, "afterDraw", [t]))
                            },
                            transition: function(t) {
                                for (var e = 0, n = (this.data.datasets || []).length; e < n; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
                                this.tooltip.transition(t)
                            },
                            drawDatasets: function(t) {
                                var e = this;
                                if (!1 !== d.notify(e, "beforeDatasetsDraw", [t])) {
                                    for (var n = (e.data.datasets || []).length - 1; n >= 0; --n) e.isDatasetVisible(n) && e.drawDataset(n, t);
                                    d.notify(e, "afterDatasetsDraw", [t])
                                }
                            },
                            drawDataset: function(t, e) {
                                var n = this.getDatasetMeta(t),
                                    r = {
                                        meta: n,
                                        index: t,
                                        easingValue: e
                                    };
                                !1 !== d.notify(this, "beforeDatasetDraw", [r]) && (n.controller.draw(e), d.notify(this, "afterDatasetDraw", [r]))
                            },
                            _drawTooltip: function(t) {
                                var e = this.tooltip,
                                    n = {
                                        tooltip: e,
                                        easingValue: t
                                    };
                                !1 !== d.notify(this, "beforeTooltipDraw", [n]) && (e.draw(), d.notify(this, "afterTooltipDraw", [n]))
                            },
                            getElementAtEvent: function(t) {
                                return l.modes.single(this, t)
                            },
                            getElementsAtEvent: function(t) {
                                return l.modes.label(this, t, {
                                    intersect: !0
                                })
                            },
                            getElementsAtXAxis: function(t) {
                                return l.modes["x-axis"](this, t, {
                                    intersect: !0
                                })
                            },
                            getElementsAtEventForMode: function(t, e, n) {
                                var r = l.modes[e];
                                return "function" == typeof r ? r(this, t, n) : []
                            },
                            getDatasetAtEvent: function(t) {
                                return l.modes.dataset(this, t, {
                                    intersect: !0
                                })
                            },
                            getDatasetMeta: function(t) {
                                var e = this.data.datasets[t];
                                e._meta || (e._meta = {});
                                var n = e._meta[this.id];
                                return n || (n = e._meta[this.id] = {
                                    type: null,
                                    data: [],
                                    dataset: null,
                                    controller: null,
                                    hidden: null,
                                    xAxisID: null,
                                    yAxisID: null
                                }), n
                            },
                            getVisibleDatasetCount: function() {
                                for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e) this.isDatasetVisible(e) && t++;
                                return t
                            },
                            isDatasetVisible: function(t) {
                                var e = this.getDatasetMeta(t);
                                return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                            },
                            generateLegend: function() {
                                return this.options.legendCallback(this)
                            },
                            destroyDatasetMeta: function(t) {
                                var e = this.id,
                                    n = this.data.datasets[t],
                                    r = n._meta && n._meta[e];
                                r && (r.controller.destroy(), delete n._meta[e])
                            },
                            destroy: function() {
                                var e, n, r = this,
                                    i = r.canvas;
                                for (r.stop(), e = 0, n = r.data.datasets.length; e < n; ++e) r.destroyDatasetMeta(e);
                                i && (r.unbindEvents(), s.canvas.clear(r), c.releaseContext(r.ctx), r.canvas = null, r.ctx = null), d.notify(r, "destroy"), delete t.instances[r.id]
                            },
                            toBase64Image: function() {
                                return this.canvas.toDataURL.apply(this.canvas, arguments)
                            },
                            initToolTip: function() {
                                var t = this;
                                t.tooltip = new h({
                                    _chart: t,
                                    _chartInstance: t,
                                    _data: t.data,
                                    _options: t.options.tooltips
                                }, t)
                            },
                            bindEvents: function() {
                                var t = this,
                                    e = t._listeners = {},
                                    n = function() {
                                        t.eventHandler.apply(t, arguments)
                                    };
                                s.each(t.options.events, (function(r) {
                                    c.addEventListener(t, r, n), e[r] = n
                                })), t.options.responsive && (n = function() {
                                    t.resize()
                                }, c.addEventListener(t, "resize", n), e.resize = n)
                            },
                            unbindEvents: function() {
                                var t = this,
                                    e = t._listeners;
                                e && (delete t._listeners, s.each(e, (function(e, n) {
                                    c.removeEventListener(t, n, e)
                                })))
                            },
                            updateHoverStyle: function(t, e, n) {
                                var r, i, o, a = n ? "setHoverStyle" : "removeHoverStyle";
                                for (i = 0, o = t.length; i < o; ++i)(r = t[i]) && this.getDatasetMeta(r._datasetIndex).controller[a](r)
                            },
                            eventHandler: function(t) {
                                var e = this,
                                    n = e.tooltip;
                                if (!1 !== d.notify(e, "beforeEvent", [t])) {
                                    e._bufferedRender = !0, e._bufferedRequest = null;
                                    var r = e.handleEvent(t);
                                    n && (r = n._start ? n.handleEvent(t) : r | n.handleEvent(t)), d.notify(e, "afterEvent", [t]);
                                    var i = e._bufferedRequest;
                                    return i ? e.render(i) : r && !e.animating && (e.stop(), e.render({
                                        duration: e.options.hover.animationDuration,
                                        lazy: !0
                                    })), e._bufferedRender = !1, e._bufferedRequest = null, e
                                }
                            },
                            handleEvent: function(t) {
                                var e, n = this,
                                    r = n.options || {},
                                    i = r.hover;
                                return n.lastActive = n.lastActive || [], "mouseout" === t.type ? n.active = [] : n.active = n.getElementsAtEventForMode(t, i.mode, i), s.callback(r.onHover || r.hover.onHover, [t.native, n.active], n), "mouseup" !== t.type && "click" !== t.type || r.onClick && r.onClick.call(n, t.native, n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, i.mode, !1), n.active.length && i.mode && n.updateHoverStyle(n.active, i.mode, !0), e = !s.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, e
                            }
                        }), t.Controller = t
                    }
                }, {
                    22: 22,
                    23: 23,
                    26: 26,
                    29: 29,
                    31: 31,
                    32: 32,
                    34: 34,
                    36: 36,
                    46: 46,
                    49: 49
                }],
                25: [function(t, e, n) {
                    var r = t(46);
                    e.exports = function(t) {
                        var e = ["push", "pop", "shift", "splice", "unshift"];

                        function n(t, n) {
                            var r = t._chartjs;
                            if (r) {
                                var i = r.listeners,
                                    o = i.indexOf(n); - 1 !== o && i.splice(o, 1), i.length > 0 || (e.forEach((function(e) {
                                    delete t[e]
                                })), delete t._chartjs)
                            }
                        }
                        t.DatasetController = function(t, e) {
                            this.initialize(t, e)
                        }, r.extend(t.DatasetController.prototype, {
                            datasetElementType: null,
                            dataElementType: null,
                            initialize: function(t, e) {
                                this.chart = t, this.index = e, this.linkScales(), this.addElements()
                            },
                            updateIndex: function(t) {
                                this.index = t
                            },
                            linkScales: function() {
                                var t = this,
                                    e = t.getMeta(),
                                    n = t.getDataset();
                                null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = n.xAxisID || t.chart.options.scales.xAxes[0].id), null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = n.yAxisID || t.chart.options.scales.yAxes[0].id)
                            },
                            getDataset: function() {
                                return this.chart.data.datasets[this.index]
                            },
                            getMeta: function() {
                                return this.chart.getDatasetMeta(this.index)
                            },
                            getScaleForId: function(t) {
                                return this.chart.scales[t]
                            },
                            reset: function() {
                                this.update(!0)
                            },
                            destroy: function() {
                                this._data && n(this._data, this)
                            },
                            createMetaDataset: function() {
                                var t = this.datasetElementType;
                                return t && new t({
                                    _chart: this.chart,
                                    _datasetIndex: this.index
                                })
                            },
                            createMetaData: function(t) {
                                var e = this.dataElementType;
                                return e && new e({
                                    _chart: this.chart,
                                    _datasetIndex: this.index,
                                    _index: t
                                })
                            },
                            addElements: function() {
                                var t, e, n = this.getMeta(),
                                    r = this.getDataset().data || [],
                                    i = n.data;
                                for (t = 0, e = r.length; t < e; ++t) i[t] = i[t] || this.createMetaData(t);
                                n.dataset = n.dataset || this.createMetaDataset()
                            },
                            addElementAndReset: function(t) {
                                var e = this.createMetaData(t);
                                this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
                            },
                            buildOrUpdateElements: function() {
                                var t, i, o = this,
                                    a = o.getDataset(),
                                    s = a.data || (a.data = []);
                                o._data !== s && (o._data && n(o._data, o), i = o, (t = s)._chartjs ? t._chartjs.listeners.push(i) : (Object.defineProperty(t, "_chartjs", {
                                    configurable: !0,
                                    enumerable: !1,
                                    value: {
                                        listeners: [i]
                                    }
                                }), e.forEach((function(e) {
                                    var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                                        i = t[e];
                                    Object.defineProperty(t, e, {
                                        configurable: !0,
                                        enumerable: !1,
                                        value: function() {
                                            var e = Array.prototype.slice.call(arguments),
                                                o = i.apply(this, e);
                                            return r.each(t._chartjs.listeners, (function(t) {
                                                "function" == typeof t[n] && t[n].apply(t, e)
                                            })), o
                                        }
                                    })
                                }))), o._data = s), o.resyncElements()
                            },
                            update: r.noop,
                            transition: function(t) {
                                for (var e = this.getMeta(), n = e.data || [], r = n.length, i = 0; i < r; ++i) n[i].transition(t);
                                e.dataset && e.dataset.transition(t)
                            },
                            draw: function() {
                                var t = this.getMeta(),
                                    e = t.data || [],
                                    n = e.length,
                                    r = 0;
                                for (t.dataset && t.dataset.draw(); r < n; ++r) e[r].draw()
                            },
                            removeHoverStyle: function(t) {
                                r.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle
                            },
                            setHoverStyle: function(t) {
                                var e = this.chart.data.datasets[t._datasetIndex],
                                    n = t._index,
                                    i = t.custom || {},
                                    o = r.valueAtIndexOrDefault,
                                    a = r.getHoverColor,
                                    s = t._model;
                                t.$previousStyle = {
                                    backgroundColor: s.backgroundColor,
                                    borderColor: s.borderColor,
                                    borderWidth: s.borderWidth
                                }, s.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : o(e.hoverBackgroundColor, n, a(s.backgroundColor)), s.borderColor = i.hoverBorderColor ? i.hoverBorderColor : o(e.hoverBorderColor, n, a(s.borderColor)), s.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : o(e.hoverBorderWidth, n, s.borderWidth)
                            },
                            resyncElements: function() {
                                var t = this.getMeta(),
                                    e = this.getDataset().data,
                                    n = t.data.length,
                                    r = e.length;
                                r < n ? t.data.splice(r, n - r) : r > n && this.insertElements(n, r - n)
                            },
                            insertElements: function(t, e) {
                                for (var n = 0; n < e; ++n) this.addElementAndReset(t + n)
                            },
                            onDataPush: function() {
                                this.insertElements(this.getDataset().data.length - 1, arguments.length)
                            },
                            onDataPop: function() {
                                this.getMeta().data.pop()
                            },
                            onDataShift: function() {
                                this.getMeta().data.shift()
                            },
                            onDataSplice: function(t, e) {
                                this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
                            },
                            onDataUnshift: function() {
                                this.insertElements(0, arguments.length)
                            }
                        }), t.DatasetController.extend = r.inherits
                    }
                }, {
                    46: 46
                }],
                26: [function(t, e, n) {
                    var r = t(46);
                    e.exports = {
                        _set: function(t, e) {
                            return r.merge(this[t] || (this[t] = {}), e)
                        }
                    }
                }, {
                    46: 46
                }],
                27: [function(t, e, n) {
                    var r = t(3),
                        i = t(46);
                    var a = function(t) {
                        i.extend(this, t), this.initialize.apply(this, arguments)
                    };
                    i.extend(a.prototype, {
                        initialize: function() {
                            this.hidden = !1
                        },
                        pivot: function() {
                            var t = this;
                            return t._view || (t._view = i.clone(t._model)), t._start = {}, t
                        },
                        transition: function(t) {
                            var e = this,
                                n = e._model,
                                i = e._start,
                                a = e._view;
                            return n && 1 !== t ? (a || (a = e._view = {}), i || (i = e._start = {}), function(t, e, n, i) {
                                var a, s, l, u, c, d, f, h, p, g = Object.keys(n);
                                for (a = 0, s = g.length; a < s; ++a)
                                    if (d = n[l = g[a]], e.hasOwnProperty(l) || (e[l] = d), (u = e[l]) !== d && "_" !== l[0]) {
                                        if (t.hasOwnProperty(l) || (t[l] = u), c = t[l], (f = o(d)) === o(c))
                                            if ("string" === f) {
                                                if ((h = r(c)).valid && (p = r(d)).valid) {
                                                    e[l] = p.mix(h, i).rgbString();
                                                    continue
                                                }
                                            } else if ("number" === f && isFinite(c) && isFinite(d)) {
                                            e[l] = c + (d - c) * i;
                                            continue
                                        }
                                        e[l] = d
                                    }
                            }(i, a, n, t), e) : (e._view = n, e._start = null, e)
                        },
                        tooltipPosition: function() {
                            return {
                                x: this._model.x,
                                y: this._model.y
                            }
                        },
                        hasValue: function() {
                            return i.isNumber(this._model.x) && i.isNumber(this._model.y)
                        }
                    }), a.extend = i.inherits, e.exports = a
                }, {
                    3: 3,
                    46: 46
                }],
                28: [function(t, e, n) {
                    var r = t(3),
                        i = t(26),
                        o = t(46),
                        a = t(34);
                    e.exports = function() {
                        function t(t, e, n) {
                            var r;
                            return "string" == typeof t ? (r = parseInt(t, 10), -1 !== t.indexOf("%") && (r = r / 100 * e.parentNode[n])) : r = t, r
                        }

                        function e(t) {
                            return null != t && "none" !== t
                        }

                        function n(n, r, i) {
                            var a = document.defaultView,
                                s = o._getParentNode(n),
                                l = a.getComputedStyle(n)[r],
                                u = a.getComputedStyle(s)[r],
                                c = e(l),
                                d = e(u),
                                f = Number.POSITIVE_INFINITY;
                            return c || d ? Math.min(c ? t(l, n, i) : f, d ? t(u, s, i) : f) : "none"
                        }
                        o.configMerge = function() {
                            return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), {
                                merger: function(t, e, n, r) {
                                    var i = e[t] || {},
                                        s = n[t];
                                    "scales" === t ? e[t] = o.scaleMerge(i, s) : "scale" === t ? e[t] = o.merge(i, [a.getScaleDefaults(s.type), s]) : o._merger(t, e, n, r)
                                }
                            })
                        }, o.scaleMerge = function() {
                            return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), {
                                merger: function(t, e, n, r) {
                                    if ("xAxes" === t || "yAxes" === t) {
                                        var i, s, l, u = n[t].length;
                                        for (e[t] || (e[t] = []), i = 0; i < u; ++i) l = n[t][i], s = o.valueOrDefault(l.type, "xAxes" === t ? "category" : "linear"), i >= e[t].length && e[t].push({}), !e[t][i].type || l.type && l.type !== e[t][i].type ? o.merge(e[t][i], [a.getScaleDefaults(s), l]) : o.merge(e[t][i], l)
                                    } else o._merger(t, e, n, r)
                                }
                            })
                        }, o.where = function(t, e) {
                            if (o.isArray(t) && Array.prototype.filter) return t.filter(e);
                            var n = [];
                            return o.each(t, (function(t) {
                                e(t) && n.push(t)
                            })), n
                        }, o.findIndex = Array.prototype.findIndex ? function(t, e, n) {
                            return t.findIndex(e, n)
                        } : function(t, e, n) {
                            n = void 0 === n ? t : n;
                            for (var r = 0, i = t.length; r < i; ++r)
                                if (e.call(n, t[r], r, t)) return r;
                            return -1
                        }, o.findNextWhere = function(t, e, n) {
                            o.isNullOrUndef(n) && (n = -1);
                            for (var r = n + 1; r < t.length; r++) {
                                var i = t[r];
                                if (e(i)) return i
                            }
                        }, o.findPreviousWhere = function(t, e, n) {
                            o.isNullOrUndef(n) && (n = t.length);
                            for (var r = n - 1; r >= 0; r--) {
                                var i = t[r];
                                if (e(i)) return i
                            }
                        }, o.isNumber = function(t) {
                            return !isNaN(parseFloat(t)) && isFinite(t)
                        }, o.almostEquals = function(t, e, n) {
                            return Math.abs(t - e) < n
                        }, o.almostWhole = function(t, e) {
                            var n = Math.round(t);
                            return n - e < t && n + e > t
                        }, o.max = function(t) {
                            return t.reduce((function(t, e) {
                                return isNaN(e) ? t : Math.max(t, e)
                            }), Number.NEGATIVE_INFINITY)
                        }, o.min = function(t) {
                            return t.reduce((function(t, e) {
                                return isNaN(e) ? t : Math.min(t, e)
                            }), Number.POSITIVE_INFINITY)
                        }, o.sign = Math.sign ? function(t) {
                            return Math.sign(t)
                        } : function(t) {
                            return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1
                        }, o.log10 = Math.log10 ? function(t) {
                            return Math.log10(t)
                        } : function(t) {
                            var e = Math.log(t) * Math.LOG10E,
                                n = Math.round(e);
                            return t === Math.pow(10, n) ? n : e
                        }, o.toRadians = function(t) {
                            return t * (Math.PI / 180)
                        }, o.toDegrees = function(t) {
                            return t * (180 / Math.PI)
                        }, o.getAngleFromPoint = function(t, e) {
                            var n = e.x - t.x,
                                r = e.y - t.y,
                                i = Math.sqrt(n * n + r * r),
                                o = Math.atan2(r, n);
                            return o < -.5 * Math.PI && (o += 2 * Math.PI), {
                                angle: o,
                                distance: i
                            }
                        }, o.distanceBetweenPoints = function(t, e) {
                            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                        }, o.aliasPixel = function(t) {
                            return t % 2 == 0 ? 0 : .5
                        }, o.splineCurve = function(t, e, n, r) {
                            var i = t.skip ? e : t,
                                o = e,
                                a = n.skip ? e : n,
                                s = Math.sqrt(Math.pow(o.x - i.x, 2) + Math.pow(o.y - i.y, 2)),
                                l = Math.sqrt(Math.pow(a.x - o.x, 2) + Math.pow(a.y - o.y, 2)),
                                u = s / (s + l),
                                c = l / (s + l),
                                d = r * (u = isNaN(u) ? 0 : u),
                                f = r * (c = isNaN(c) ? 0 : c);
                            return {
                                previous: {
                                    x: o.x - d * (a.x - i.x),
                                    y: o.y - d * (a.y - i.y)
                                },
                                next: {
                                    x: o.x + f * (a.x - i.x),
                                    y: o.y + f * (a.y - i.y)
                                }
                            }
                        }, o.EPSILON = Number.EPSILON || 1e-14, o.splineCurveMonotone = function(t) {
                            var e, n, r, i, a, s, l, u, c, d = (t || []).map((function(t) {
                                    return {
                                        model: t._model,
                                        deltaK: 0,
                                        mK: 0
                                    }
                                })),
                                f = d.length;
                            for (e = 0; e < f; ++e)
                                if (!(r = d[e]).model.skip) {
                                    if (n = e > 0 ? d[e - 1] : null, (i = e < f - 1 ? d[e + 1] : null) && !i.model.skip) {
                                        var h = i.model.x - r.model.x;
                                        r.deltaK = 0 !== h ? (i.model.y - r.model.y) / h : 0
                                    }!n || n.model.skip ? r.mK = r.deltaK : !i || i.model.skip ? r.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(r.deltaK) ? r.mK = 0 : r.mK = (n.deltaK + r.deltaK) / 2
                                } for (e = 0; e < f - 1; ++e) r = d[e], i = d[e + 1], r.model.skip || i.model.skip || (o.almostEquals(r.deltaK, 0, this.EPSILON) ? r.mK = i.mK = 0 : (a = r.mK / r.deltaK, s = i.mK / r.deltaK, (u = Math.pow(a, 2) + Math.pow(s, 2)) <= 9 || (l = 3 / Math.sqrt(u), r.mK = a * l * r.deltaK, i.mK = s * l * r.deltaK)));
                            for (e = 0; e < f; ++e)(r = d[e]).model.skip || (n = e > 0 ? d[e - 1] : null, i = e < f - 1 ? d[e + 1] : null, n && !n.model.skip && (c = (r.model.x - n.model.x) / 3, r.model.controlPointPreviousX = r.model.x - c, r.model.controlPointPreviousY = r.model.y - c * r.mK), i && !i.model.skip && (c = (i.model.x - r.model.x) / 3, r.model.controlPointNextX = r.model.x + c, r.model.controlPointNextY = r.model.y + c * r.mK))
                        }, o.nextItem = function(t, e, n) {
                            return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                        }, o.previousItem = function(t, e, n) {
                            return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
                        }, o.niceNum = function(t, e) {
                            var n = Math.floor(o.log10(t)),
                                r = t / Math.pow(10, n);
                            return (e ? r < 1.5 ? 1 : r < 3 ? 2 : r < 7 ? 5 : 10 : r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * Math.pow(10, n)
                        }, o.requestAnimFrame = "undefined" == typeof window ? function(t) {
                            t()
                        } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                            return window.setTimeout(t, 1e3 / 60)
                        }, o.getRelativePosition = function(t, e) {
                            var n, r, i = t.originalEvent || t,
                                a = t.target || t.srcElement,
                                s = a.getBoundingClientRect(),
                                l = i.touches;
                            l && l.length > 0 ? (n = l[0].clientX, r = l[0].clientY) : (n = i.clientX, r = i.clientY);
                            var u = parseFloat(o.getStyle(a, "padding-left")),
                                c = parseFloat(o.getStyle(a, "padding-top")),
                                d = parseFloat(o.getStyle(a, "padding-right")),
                                f = parseFloat(o.getStyle(a, "padding-bottom")),
                                h = s.right - s.left - u - d,
                                p = s.bottom - s.top - c - f;
                            return {
                                x: n = Math.round((n - s.left - u) / h * a.width / e.currentDevicePixelRatio),
                                y: r = Math.round((r - s.top - c) / p * a.height / e.currentDevicePixelRatio)
                            }
                        }, o.getConstraintWidth = function(t) {
                            return n(t, "max-width", "clientWidth")
                        }, o.getConstraintHeight = function(t) {
                            return n(t, "max-height", "clientHeight")
                        }, o._calculatePadding = function(t, e, n) {
                            return (e = o.getStyle(t, e)).indexOf("%") > -1 ? n / parseInt(e, 10) : parseInt(e, 10)
                        }, o._getParentNode = function(t) {
                            var e = t.parentNode;
                            return e && e.host && (e = e.host), e
                        }, o.getMaximumWidth = function(t) {
                            var e = o._getParentNode(t);
                            if (!e) return t.clientWidth;
                            var n = e.clientWidth,
                                r = n - o._calculatePadding(e, "padding-left", n) - o._calculatePadding(e, "padding-right", n),
                                i = o.getConstraintWidth(t);
                            return isNaN(i) ? r : Math.min(r, i)
                        }, o.getMaximumHeight = function(t) {
                            var e = o._getParentNode(t);
                            if (!e) return t.clientHeight;
                            var n = e.clientHeight,
                                r = n - o._calculatePadding(e, "padding-top", n) - o._calculatePadding(e, "padding-bottom", n),
                                i = o.getConstraintHeight(t);
                            return isNaN(i) ? r : Math.min(r, i)
                        }, o.getStyle = function(t, e) {
                            return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                        }, o.retinaScale = function(t, e) {
                            var n = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1;
                            if (1 !== n) {
                                var r = t.canvas,
                                    i = t.height,
                                    o = t.width;
                                r.height = i * n, r.width = o * n, t.ctx.scale(n, n), r.style.height || r.style.width || (r.style.height = i + "px", r.style.width = o + "px")
                            }
                        }, o.fontString = function(t, e, n) {
                            return e + " " + t + "px " + n
                        }, o.longestText = function(t, e, n, r) {
                            var i = (r = r || {}).data = r.data || {},
                                a = r.garbageCollect = r.garbageCollect || [];
                            r.font !== e && (i = r.data = {}, a = r.garbageCollect = [], r.font = e), t.font = e;
                            var s = 0;
                            o.each(n, (function(e) {
                                null != e && !0 !== o.isArray(e) ? s = o.measureText(t, i, a, s, e) : o.isArray(e) && o.each(e, (function(e) {
                                    null == e || o.isArray(e) || (s = o.measureText(t, i, a, s, e))
                                }))
                            }));
                            var l = a.length / 2;
                            if (l > n.length) {
                                for (var u = 0; u < l; u++) delete i[a[u]];
                                a.splice(0, l)
                            }
                            return s
                        }, o.measureText = function(t, e, n, r, i) {
                            var o = e[i];
                            return o || (o = e[i] = t.measureText(i).width, n.push(i)), o > r && (r = o), r
                        }, o.numberOfLabelLines = function(t) {
                            var e = 1;
                            return o.each(t, (function(t) {
                                o.isArray(t) && t.length > e && (e = t.length)
                            })), e
                        }, o.color = r ? function(t) {
                            return t instanceof CanvasGradient && (t = i.global.defaultColor), r(t)
                        } : function(t) {
                            return console.error("Color.js not found!"), t
                        }, o.getHoverColor = function(t) {
                            return t instanceof CanvasPattern ? t : o.color(t).saturate(.5).darken(.1).rgbString()
                        }
                    }
                }, {
                    26: 26,
                    3: 3,
                    34: 34,
                    46: 46
                }],
                29: [function(t, e, n) {
                    var r = t(46);

                    function i(t, e) {
                        return t.native ? {
                            x: t.x,
                            y: t.y
                        } : r.getRelativePosition(t, e)
                    }

                    function o(t, e) {
                        var n, r, i, o, a;
                        for (r = 0, o = t.data.datasets.length; r < o; ++r)
                            if (t.isDatasetVisible(r))
                                for (i = 0, a = (n = t.getDatasetMeta(r)).data.length; i < a; ++i) {
                                    var s = n.data[i];
                                    s._view.skip || e(s)
                                }
                    }

                    function a(t, e) {
                        var n = [];
                        return o(t, (function(t) {
                            t.inRange(e.x, e.y) && n.push(t)
                        })), n
                    }

                    function s(t, e, n, r) {
                        var i = Number.POSITIVE_INFINITY,
                            a = [];
                        return o(t, (function(t) {
                            if (!n || t.inRange(e.x, e.y)) {
                                var o = t.getCenterPoint(),
                                    s = r(e, o);
                                s < i ? (a = [t], i = s) : s === i && a.push(t)
                            }
                        })), a
                    }

                    function l(t) {
                        var e = -1 !== t.indexOf("x"),
                            n = -1 !== t.indexOf("y");
                        return function(t, r) {
                            var i = e ? Math.abs(t.x - r.x) : 0,
                                o = n ? Math.abs(t.y - r.y) : 0;
                            return Math.sqrt(Math.pow(i, 2) + Math.pow(o, 2))
                        }
                    }

                    function u(t, e, n) {
                        var r = i(e, t);
                        n.axis = n.axis || "x";
                        var o = l(n.axis),
                            u = n.intersect ? a(t, r) : s(t, r, !1, o),
                            c = [];
                        return u.length ? (t.data.datasets.forEach((function(e, n) {
                            if (t.isDatasetVisible(n)) {
                                var r = t.getDatasetMeta(n).data[u[0]._index];
                                r && !r._view.skip && c.push(r)
                            }
                        })), c) : []
                    }
                    e.exports = {
                        modes: {
                            single: function(t, e) {
                                var n = i(e, t),
                                    r = [];
                                return o(t, (function(t) {
                                    if (t.inRange(n.x, n.y)) return r.push(t), r
                                })), r.slice(0, 1)
                            },
                            label: u,
                            index: u,
                            dataset: function(t, e, n) {
                                var r = i(e, t);
                                n.axis = n.axis || "xy";
                                var o = l(n.axis),
                                    u = n.intersect ? a(t, r) : s(t, r, !1, o);
                                return u.length > 0 && (u = t.getDatasetMeta(u[0]._datasetIndex).data), u
                            },
                            "x-axis": function(t, e) {
                                return u(t, e, {
                                    intersect: !1
                                })
                            },
                            point: function(t, e) {
                                return a(t, i(e, t))
                            },
                            nearest: function(t, e, n) {
                                var r = i(e, t);
                                n.axis = n.axis || "xy";
                                var o = l(n.axis),
                                    a = s(t, r, n.intersect, o);
                                return a.length > 1 && a.sort((function(t, e) {
                                    var n = t.getArea() - e.getArea();
                                    return 0 === n && (n = t._datasetIndex - e._datasetIndex), n
                                })), a.slice(0, 1)
                            },
                            x: function(t, e, n) {
                                var r = i(e, t),
                                    a = [],
                                    s = !1;
                                return o(t, (function(t) {
                                    t.inXRange(r.x) && a.push(t), t.inRange(r.x, r.y) && (s = !0)
                                })), n.intersect && !s && (a = []), a
                            },
                            y: function(t, e, n) {
                                var r = i(e, t),
                                    a = [],
                                    s = !1;
                                return o(t, (function(t) {
                                    t.inYRange(r.y) && a.push(t), t.inRange(r.x, r.y) && (s = !0)
                                })), n.intersect && !s && (a = []), a
                            }
                        }
                    }
                }, {
                    46: 46
                }],
                30: [function(t, e, n) {
                    t(26)._set("global", {
                        responsive: !0,
                        responsiveAnimationDuration: 0,
                        maintainAspectRatio: !0,
                        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                        hover: {
                            onHover: null,
                            mode: "nearest",
                            intersect: !0,
                            animationDuration: 400
                        },
                        onClick: null,
                        defaultColor: "rgba(0,0,0,0.1)",
                        defaultFontColor: "#666",
                        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                        defaultFontSize: 12,
                        defaultFontStyle: "normal",
                        showLines: !0,
                        elements: {},
                        layout: {
                            padding: {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            }
                        }
                    }), e.exports = function() {
                        var t = function(t, e) {
                            return this.construct(t, e), this
                        };
                        return t.Chart = t, t
                    }
                }, {
                    26: 26
                }],
                31: [function(t, e, n) {
                    var r = t(46);

                    function i(t, e) {
                        return r.where(t, (function(t) {
                            return t.position === e
                        }))
                    }

                    function o(t, e) {
                        t.forEach((function(t, e) {
                            return t._tmpIndex_ = e, t
                        })), t.sort((function(t, n) {
                            var r = e ? n : t,
                                i = e ? t : n;
                            return r.weight === i.weight ? r._tmpIndex_ - i._tmpIndex_ : r.weight - i.weight
                        })), t.forEach((function(t) {
                            delete t._tmpIndex_
                        }))
                    }
                    e.exports = {
                        defaults: {},
                        addBox: function(t, e) {
                            t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e)
                        },
                        removeBox: function(t, e) {
                            var n = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== n && t.boxes.splice(n, 1)
                        },
                        configure: function(t, e, n) {
                            for (var r, i = ["fullWidth", "position", "weight"], o = i.length, a = 0; a < o; ++a) r = i[a], n.hasOwnProperty(r) && (e[r] = n[r])
                        },
                        update: function(t, e, n) {
                            if (t) {
                                var a = t.options.layout || {},
                                    s = r.options.toPadding(a.padding),
                                    l = s.left,
                                    u = s.right,
                                    c = s.top,
                                    d = s.bottom,
                                    f = i(t.boxes, "left"),
                                    h = i(t.boxes, "right"),
                                    p = i(t.boxes, "top"),
                                    g = i(t.boxes, "bottom"),
                                    v = i(t.boxes, "chartArea");
                                o(f, !0), o(h, !1), o(p, !0), o(g, !1);
                                var m = e - l - u,
                                    y = n - c - d,
                                    b = y / 2,
                                    x = (e - m / 2) / (f.length + h.length),
                                    w = (n - b) / (p.length + g.length),
                                    S = m,
                                    k = y,
                                    C = [];
                                r.each(f.concat(h, p, g), (function(t) {
                                    var e, n = t.isHorizontal();
                                    n ? (e = t.update(t.fullWidth ? m : S, w), k -= e.height) : (e = t.update(x, k), S -= e.width), C.push({
                                        horizontal: n,
                                        minSize: e,
                                        box: t
                                    })
                                }));
                                var M = 0,
                                    A = 0,
                                    P = 0,
                                    T = 0;
                                r.each(p.concat(g), (function(t) {
                                    if (t.getPadding) {
                                        var e = t.getPadding();
                                        M = Math.max(M, e.left), A = Math.max(A, e.right)
                                    }
                                })), r.each(f.concat(h), (function(t) {
                                    if (t.getPadding) {
                                        var e = t.getPadding();
                                        P = Math.max(P, e.top), T = Math.max(T, e.bottom)
                                    }
                                }));
                                var I = l,
                                    _ = u,
                                    O = c,
                                    F = d;
                                r.each(f.concat(h), z), r.each(f, (function(t) {
                                    I += t.width
                                })), r.each(h, (function(t) {
                                    _ += t.width
                                })), r.each(p.concat(g), z), r.each(p, (function(t) {
                                    O += t.height
                                })), r.each(g, (function(t) {
                                    F += t.height
                                })), r.each(f.concat(h), (function(t) {
                                    var e = r.findNextWhere(C, (function(e) {
                                            return e.box === t
                                        })),
                                        n = {
                                            left: 0,
                                            right: 0,
                                            top: O,
                                            bottom: F
                                        };
                                    e && t.update(e.minSize.width, k, n)
                                })), I = l, _ = u, O = c, F = d, r.each(f, (function(t) {
                                    I += t.width
                                })), r.each(h, (function(t) {
                                    _ += t.width
                                })), r.each(p, (function(t) {
                                    O += t.height
                                })), r.each(g, (function(t) {
                                    F += t.height
                                }));
                                var D = Math.max(M - I, 0);
                                I += D, _ += Math.max(A - _, 0);
                                var L = Math.max(P - O, 0);
                                O += L, F += Math.max(T - F, 0);
                                var E = n - O - F,
                                    R = e - I - _;
                                R === S && E === k || (r.each(f, (function(t) {
                                    t.height = E
                                })), r.each(h, (function(t) {
                                    t.height = E
                                })), r.each(p, (function(t) {
                                    t.fullWidth || (t.width = R)
                                })), r.each(g, (function(t) {
                                    t.fullWidth || (t.width = R)
                                })), k = E, S = R);
                                var N = l + D,
                                    V = c + L;
                                r.each(f.concat(p), B), N += S, V += k, r.each(h, B), r.each(g, B), t.chartArea = {
                                    left: I,
                                    top: O,
                                    right: I + S,
                                    bottom: O + k
                                }, r.each(v, (function(e) {
                                    e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(S, k)
                                }))
                            }

                            function z(t) {
                                var e = r.findNextWhere(C, (function(e) {
                                    return e.box === t
                                }));
                                if (e)
                                    if (t.isHorizontal()) {
                                        var n = {
                                            left: Math.max(I, M),
                                            right: Math.max(_, A),
                                            top: 0,
                                            bottom: 0
                                        };
                                        t.update(t.fullWidth ? m : S, y / 2, n)
                                    } else t.update(e.minSize.width, k)
                            }

                            function B(t) {
                                t.isHorizontal() ? (t.left = t.fullWidth ? l : I, t.right = t.fullWidth ? e - u : I + S, t.top = V, t.bottom = V + t.height, V = t.bottom) : (t.left = N, t.right = N + t.width, t.top = O, t.bottom = O + k, N = t.right)
                            }
                        }
                    }
                }, {
                    46: 46
                }],
                32: [function(t, e, n) {
                    var r = t(26),
                        i = t(46);
                    r._set("global", {
                        plugins: {}
                    }), e.exports = {
                        _plugins: [],
                        _cacheId: 0,
                        register: function(t) {
                            var e = this._plugins;
                            [].concat(t).forEach((function(t) {
                                -1 === e.indexOf(t) && e.push(t)
                            })), this._cacheId++
                        },
                        unregister: function(t) {
                            var e = this._plugins;
                            [].concat(t).forEach((function(t) {
                                var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
                            })), this._cacheId++
                        },
                        clear: function() {
                            this._plugins = [], this._cacheId++
                        },
                        count: function() {
                            return this._plugins.length
                        },
                        getAll: function() {
                            return this._plugins
                        },
                        notify: function(t, e, n) {
                            var r, i, o, a, s, l = this.descriptors(t),
                                u = l.length;
                            for (r = 0; r < u; ++r)
                                if ("function" == typeof(s = (o = (i = l[r]).plugin)[e]) && ((a = [t].concat(n || [])).push(i.options), !1 === s.apply(o, a))) return !1;
                            return !0
                        },
                        descriptors: function(t) {
                            var e = t.$plugins || (t.$plugins = {});
                            if (e.id === this._cacheId) return e.descriptors;
                            var n = [],
                                o = [],
                                a = t && t.config || {},
                                s = a.options && a.options.plugins || {};
                            return this._plugins.concat(a.plugins || []).forEach((function(t) {
                                if (-1 === n.indexOf(t)) {
                                    var e = t.id,
                                        a = s[e];
                                    !1 !== a && (!0 === a && (a = i.clone(r.global.plugins[e])), n.push(t), o.push({
                                        plugin: t,
                                        options: a || {}
                                    }))
                                }
                            })), e.descriptors = o, e.id = this._cacheId, o
                        },
                        _invalidate: function(t) {
                            delete t.$plugins
                        }
                    }
                }, {
                    26: 26,
                    46: 46
                }],
                33: [function(t, e, n) {
                    var r = t(26),
                        i = t(27),
                        o = t(46),
                        a = t(35);

                    function s(t) {
                        var e, n, r = [];
                        for (e = 0, n = t.length; e < n; ++e) r.push(t[e].label);
                        return r
                    }

                    function l(t, e, n) {
                        var r = t.getPixelForTick(e);
                        return n && (r -= 0 === e ? (t.getPixelForTick(1) - r) / 2 : (r - t.getPixelForTick(e - 1)) / 2), r
                    }

                    function u(t, e, n) {
                        return o.isArray(e) ? o.longestText(t, n, e) : t.measureText(e).width
                    }

                    function c(t) {
                        var e = o.valueOrDefault,
                            n = r.global,
                            i = e(t.fontSize, n.defaultFontSize),
                            a = e(t.fontStyle, n.defaultFontStyle),
                            s = e(t.fontFamily, n.defaultFontFamily);
                        return {
                            size: i,
                            style: a,
                            family: s,
                            font: o.fontString(i, a, s)
                        }
                    }

                    function d(t) {
                        return o.options.toLineHeight(o.valueOrDefault(t.lineHeight, 1.2), o.valueOrDefault(t.fontSize, r.global.defaultFontSize))
                    }
                    r._set("scale", {
                        display: !0,
                        position: "left",
                        offset: !1,
                        gridLines: {
                            display: !0,
                            color: "rgba(0, 0, 0, 0.1)",
                            lineWidth: 1,
                            drawBorder: !0,
                            drawOnChartArea: !0,
                            drawTicks: !0,
                            tickMarkLength: 10,
                            zeroLineWidth: 1,
                            zeroLineColor: "rgba(0,0,0,0.25)",
                            zeroLineBorderDash: [],
                            zeroLineBorderDashOffset: 0,
                            offsetGridLines: !1,
                            borderDash: [],
                            borderDashOffset: 0
                        },
                        scaleLabel: {
                            display: !1,
                            labelString: "",
                            lineHeight: 1.2,
                            padding: {
                                top: 4,
                                bottom: 4
                            }
                        },
                        ticks: {
                            beginAtZero: !1,
                            minRotation: 0,
                            maxRotation: 50,
                            mirror: !1,
                            padding: 0,
                            reverse: !1,
                            display: !0,
                            autoSkip: !0,
                            autoSkipPadding: 0,
                            labelOffset: 0,
                            callback: a.formatters.values,
                            minor: {},
                            major: {}
                        }
                    }), e.exports = i.extend({
                        getPadding: function() {
                            return {
                                left: this.paddingLeft || 0,
                                top: this.paddingTop || 0,
                                right: this.paddingRight || 0,
                                bottom: this.paddingBottom || 0
                            }
                        },
                        getTicks: function() {
                            return this._ticks
                        },
                        mergeTicksOptions: function() {
                            var t = this.options.ticks;
                            for (var e in !1 === t.minor && (t.minor = {
                                    display: !1
                                }), !1 === t.major && (t.major = {
                                    display: !1
                                }), t) "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]))
                        },
                        beforeUpdate: function() {
                            o.callback(this.options.beforeUpdate, [this])
                        },
                        update: function(t, e, n) {
                            var r, i, a, s, l, u, c = this;
                            for (c.beforeUpdate(), c.maxWidth = t, c.maxHeight = e, c.margins = o.extend({
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    bottom: 0
                                }, n), c.longestTextCache = c.longestTextCache || {}, c.beforeSetDimensions(), c.setDimensions(), c.afterSetDimensions(), c.beforeDataLimits(), c.determineDataLimits(), c.afterDataLimits(), c.beforeBuildTicks(), l = c.buildTicks() || [], c.afterBuildTicks(), c.beforeTickToLabelConversion(), a = c.convertTicksToLabels(l) || c.ticks, c.afterTickToLabelConversion(), c.ticks = a, r = 0, i = a.length; r < i; ++r) s = a[r], (u = l[r]) ? u.label = s : l.push(u = {
                                label: s,
                                major: !1
                            });
                            return c._ticks = l, c.beforeCalculateTickRotation(), c.calculateTickRotation(), c.afterCalculateTickRotation(), c.beforeFit(), c.fit(), c.afterFit(), c.afterUpdate(), c.minSize
                        },
                        afterUpdate: function() {
                            o.callback(this.options.afterUpdate, [this])
                        },
                        beforeSetDimensions: function() {
                            o.callback(this.options.beforeSetDimensions, [this])
                        },
                        setDimensions: function() {
                            var t = this;
                            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
                        },
                        afterSetDimensions: function() {
                            o.callback(this.options.afterSetDimensions, [this])
                        },
                        beforeDataLimits: function() {
                            o.callback(this.options.beforeDataLimits, [this])
                        },
                        determineDataLimits: o.noop,
                        afterDataLimits: function() {
                            o.callback(this.options.afterDataLimits, [this])
                        },
                        beforeBuildTicks: function() {
                            o.callback(this.options.beforeBuildTicks, [this])
                        },
                        buildTicks: o.noop,
                        afterBuildTicks: function() {
                            o.callback(this.options.afterBuildTicks, [this])
                        },
                        beforeTickToLabelConversion: function() {
                            o.callback(this.options.beforeTickToLabelConversion, [this])
                        },
                        convertTicksToLabels: function() {
                            var t = this.options.ticks;
                            this.ticks = this.ticks.map(t.userCallback || t.callback, this)
                        },
                        afterTickToLabelConversion: function() {
                            o.callback(this.options.afterTickToLabelConversion, [this])
                        },
                        beforeCalculateTickRotation: function() {
                            o.callback(this.options.beforeCalculateTickRotation, [this])
                        },
                        calculateTickRotation: function() {
                            var t = this,
                                e = t.ctx,
                                n = t.options.ticks,
                                r = s(t._ticks),
                                i = c(n);
                            e.font = i.font;
                            var a = n.minRotation || 0;
                            if (r.length && t.options.display && t.isHorizontal())
                                for (var l, u = o.longestText(e, i.font, r, t.longestTextCache), d = u, f = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; d > f && a < n.maxRotation;) {
                                    var h = o.toRadians(a);
                                    if (l = Math.cos(h), Math.sin(h) * u > t.maxHeight) {
                                        a--;
                                        break
                                    }
                                    a++, d = l * u
                                }
                            t.labelRotation = a
                        },
                        afterCalculateTickRotation: function() {
                            o.callback(this.options.afterCalculateTickRotation, [this])
                        },
                        beforeFit: function() {
                            o.callback(this.options.beforeFit, [this])
                        },
                        fit: function() {
                            var t = this,
                                e = t.minSize = {
                                    width: 0,
                                    height: 0
                                },
                                n = s(t._ticks),
                                r = t.options,
                                i = r.ticks,
                                a = r.scaleLabel,
                                l = r.gridLines,
                                f = r.display,
                                h = t.isHorizontal(),
                                p = c(i),
                                g = r.gridLines.tickMarkLength;
                            if (e.width = h ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : f && l.drawTicks ? g : 0, e.height = h ? f && l.drawTicks ? g : 0 : t.maxHeight, a.display && f) {
                                var v = d(a) + o.options.toPadding(a.padding).height;
                                h ? e.height += v : e.width += v
                            }
                            if (i.display && f) {
                                var m = o.longestText(t.ctx, p.font, n, t.longestTextCache),
                                    y = o.numberOfLabelLines(n),
                                    b = .5 * p.size,
                                    x = t.options.ticks.padding;
                                if (h) {
                                    t.longestLabelWidth = m;
                                    var w = o.toRadians(t.labelRotation),
                                        S = Math.cos(w),
                                        k = Math.sin(w) * m + p.size * y + b * (y - 1) + b;
                                    e.height = Math.min(t.maxHeight, e.height + k + x), t.ctx.font = p.font;
                                    var C = u(t.ctx, n[0], p.font),
                                        M = u(t.ctx, n[n.length - 1], p.font);
                                    0 !== t.labelRotation ? (t.paddingLeft = "bottom" === r.position ? S * C + 3 : S * b + 3, t.paddingRight = "bottom" === r.position ? S * b + 3 : S * M + 3) : (t.paddingLeft = C / 2 + 3, t.paddingRight = M / 2 + 3)
                                } else i.mirror ? m = 0 : m += x + b, e.width = Math.min(t.maxWidth, e.width + m), t.paddingTop = p.size / 2, t.paddingBottom = p.size / 2
                            }
                            t.handleMargins(), t.width = e.width, t.height = e.height
                        },
                        handleMargins: function() {
                            var t = this;
                            t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0))
                        },
                        afterFit: function() {
                            o.callback(this.options.afterFit, [this])
                        },
                        isHorizontal: function() {
                            return "top" === this.options.position || "bottom" === this.options.position
                        },
                        isFullWidth: function() {
                            return this.options.fullWidth
                        },
                        getRightValue: function(t) {
                            if (o.isNullOrUndef(t)) return NaN;
                            if ("number" == typeof t && !isFinite(t)) return NaN;
                            if (t)
                                if (this.isHorizontal()) {
                                    if (void 0 !== t.x) return this.getRightValue(t.x)
                                } else if (void 0 !== t.y) return this.getRightValue(t.y);
                            return t
                        },
                        getLabelForIndex: o.noop,
                        getPixelForValue: o.noop,
                        getValueForPixel: o.noop,
                        getPixelForTick: function(t) {
                            var e = this,
                                n = e.options.offset;
                            if (e.isHorizontal()) {
                                var r = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (n ? 0 : 1), 1),
                                    i = r * t + e.paddingLeft;
                                n && (i += r / 2);
                                var o = e.left + Math.round(i);
                                return o += e.isFullWidth() ? e.margins.left : 0
                            }
                            var a = e.height - (e.paddingTop + e.paddingBottom);
                            return e.top + t * (a / (e._ticks.length - 1))
                        },
                        getPixelForDecimal: function(t) {
                            var e = this;
                            if (e.isHorizontal()) {
                                var n = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
                                    r = e.left + Math.round(n);
                                return r += e.isFullWidth() ? e.margins.left : 0
                            }
                            return e.top + t * e.height
                        },
                        getBasePixel: function() {
                            return this.getPixelForValue(this.getBaseValue())
                        },
                        getBaseValue: function() {
                            var t = this.min,
                                e = this.max;
                            return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
                        },
                        _autoSkip: function(t) {
                            var e, n, r, i, a = this,
                                s = a.isHorizontal(),
                                l = a.options.ticks.minor,
                                u = t.length,
                                c = o.toRadians(a.labelRotation),
                                d = Math.cos(c),
                                f = a.longestLabelWidth * d,
                                h = [];
                            for (l.maxTicksLimit && (i = l.maxTicksLimit), s && (e = !1, (f + l.autoSkipPadding) * u > a.width - (a.paddingLeft + a.paddingRight) && (e = 1 + Math.floor((f + l.autoSkipPadding) * u / (a.width - (a.paddingLeft + a.paddingRight)))), i && u > i && (e = Math.max(e, Math.floor(u / i)))), n = 0; n < u; n++) r = t[n], (e > 1 && n % e > 0 || n % e == 0 && n + e >= u) && n !== u - 1 && delete r.label, h.push(r);
                            return h
                        },
                        draw: function(t) {
                            var e = this,
                                n = e.options;
                            if (n.display) {
                                var i = e.ctx,
                                    a = r.global,
                                    s = n.ticks.minor,
                                    u = n.ticks.major || s,
                                    f = n.gridLines,
                                    h = n.scaleLabel,
                                    p = 0 !== e.labelRotation,
                                    g = e.isHorizontal(),
                                    v = s.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
                                    m = o.valueOrDefault(s.fontColor, a.defaultFontColor),
                                    y = c(s),
                                    b = o.valueOrDefault(u.fontColor, a.defaultFontColor),
                                    x = c(u),
                                    w = f.drawTicks ? f.tickMarkLength : 0,
                                    S = o.valueOrDefault(h.fontColor, a.defaultFontColor),
                                    k = c(h),
                                    C = o.options.toPadding(h.padding),
                                    M = o.toRadians(e.labelRotation),
                                    A = [],
                                    P = e.options.gridLines.lineWidth,
                                    T = "right" === n.position ? e.left : e.right - P - w,
                                    I = "right" === n.position ? e.left + w : e.right,
                                    _ = "bottom" === n.position ? e.top + P : e.bottom - w - P,
                                    O = "bottom" === n.position ? e.top + P + w : e.bottom + P;
                                if (o.each(v, (function(r, i) {
                                        if (!o.isNullOrUndef(r.label)) {
                                            var u, c, d, h, m, y, b, x, S, k, C, F, D, L, E = r.label;
                                            i === e.zeroLineIndex && n.offset === f.offsetGridLines ? (u = f.zeroLineWidth, c = f.zeroLineColor, d = f.zeroLineBorderDash, h = f.zeroLineBorderDashOffset) : (u = o.valueAtIndexOrDefault(f.lineWidth, i), c = o.valueAtIndexOrDefault(f.color, i), d = o.valueOrDefault(f.borderDash, a.borderDash), h = o.valueOrDefault(f.borderDashOffset, a.borderDashOffset));
                                            var R = "middle",
                                                N = "middle",
                                                V = s.padding;
                                            if (g) {
                                                var z = w + V;
                                                "bottom" === n.position ? (N = p ? "middle" : "top", R = p ? "right" : "center", L = e.top + z) : (N = p ? "middle" : "bottom", R = p ? "left" : "center", L = e.bottom - z);
                                                var B = l(e, i, f.offsetGridLines && v.length > 1);
                                                B < e.left && (c = "rgba(0,0,0,0)"), B += o.aliasPixel(u), D = e.getPixelForTick(i) + s.labelOffset, m = b = S = C = B, y = _, x = O, k = t.top, F = t.bottom + P
                                            } else {
                                                var W, j = "left" === n.position;
                                                s.mirror ? (R = j ? "left" : "right", W = V) : (R = j ? "right" : "left", W = w + V), D = j ? e.right - W : e.left + W;
                                                var H = l(e, i, f.offsetGridLines && v.length > 1);
                                                H < e.top && (c = "rgba(0,0,0,0)"), H += o.aliasPixel(u), L = e.getPixelForTick(i) + s.labelOffset, m = T, b = I, S = t.left, C = t.right + P, y = x = k = F = H
                                            }
                                            A.push({
                                                tx1: m,
                                                ty1: y,
                                                tx2: b,
                                                ty2: x,
                                                x1: S,
                                                y1: k,
                                                x2: C,
                                                y2: F,
                                                labelX: D,
                                                labelY: L,
                                                glWidth: u,
                                                glColor: c,
                                                glBorderDash: d,
                                                glBorderDashOffset: h,
                                                rotation: -1 * M,
                                                label: E,
                                                major: r.major,
                                                textBaseline: N,
                                                textAlign: R
                                            })
                                        }
                                    })), o.each(A, (function(t) {
                                        if (f.display && (i.save(), i.lineWidth = t.glWidth, i.strokeStyle = t.glColor, i.setLineDash && (i.setLineDash(t.glBorderDash), i.lineDashOffset = t.glBorderDashOffset), i.beginPath(), f.drawTicks && (i.moveTo(t.tx1, t.ty1), i.lineTo(t.tx2, t.ty2)), f.drawOnChartArea && (i.moveTo(t.x1, t.y1), i.lineTo(t.x2, t.y2)), i.stroke(), i.restore()), s.display) {
                                            i.save(), i.translate(t.labelX, t.labelY), i.rotate(t.rotation), i.font = t.major ? x.font : y.font, i.fillStyle = t.major ? b : m, i.textBaseline = t.textBaseline, i.textAlign = t.textAlign;
                                            var n = t.label;
                                            if (o.isArray(n))
                                                for (var r = n.length, a = 1.5 * y.size, l = e.isHorizontal() ? 0 : -a * (r - 1) / 2, u = 0; u < r; ++u) i.fillText("" + n[u], 0, l), l += a;
                                            else i.fillText(n, 0, 0);
                                            i.restore()
                                        }
                                    })), h.display) {
                                    var F, D, L = 0,
                                        E = d(h) / 2;
                                    if (g) F = e.left + (e.right - e.left) / 2, D = "bottom" === n.position ? e.bottom - E - C.bottom : e.top + E + C.top;
                                    else {
                                        var R = "left" === n.position;
                                        F = R ? e.left + E + C.top : e.right - E - C.top, D = e.top + (e.bottom - e.top) / 2, L = R ? -.5 * Math.PI : .5 * Math.PI
                                    }
                                    i.save(), i.translate(F, D), i.rotate(L), i.textAlign = "center", i.textBaseline = "middle", i.fillStyle = S, i.font = k.font, i.fillText(h.labelString, 0, 0), i.restore()
                                }
                                if (f.drawBorder) {
                                    i.lineWidth = o.valueAtIndexOrDefault(f.lineWidth, 0), i.strokeStyle = o.valueAtIndexOrDefault(f.color, 0);
                                    var N = e.left,
                                        V = e.right + P,
                                        z = e.top,
                                        B = e.bottom + P,
                                        W = o.aliasPixel(i.lineWidth);
                                    g ? (z = B = "top" === n.position ? e.bottom : e.top, z += W, B += W) : (N = V = "left" === n.position ? e.right : e.left, N += W, V += W), i.beginPath(), i.moveTo(N, z), i.lineTo(V, B), i.stroke()
                                }
                            }
                        }
                    })
                }, {
                    26: 26,
                    27: 27,
                    35: 35,
                    46: 46
                }],
                34: [function(t, e, n) {
                    var r = t(26),
                        i = t(46),
                        o = t(31);
                    e.exports = {
                        constructors: {},
                        defaults: {},
                        registerScaleType: function(t, e, n) {
                            this.constructors[t] = e, this.defaults[t] = i.clone(n)
                        },
                        getScaleConstructor: function(t) {
                            return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                        },
                        getScaleDefaults: function(t) {
                            return this.defaults.hasOwnProperty(t) ? i.merge({}, [r.scale, this.defaults[t]]) : {}
                        },
                        updateScaleDefaults: function(t, e) {
                            this.defaults.hasOwnProperty(t) && (this.defaults[t] = i.extend(this.defaults[t], e))
                        },
                        addScalesToLayout: function(t) {
                            i.each(t.scales, (function(e) {
                                e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, o.addBox(t, e)
                            }))
                        }
                    }
                }, {
                    26: 26,
                    31: 31,
                    46: 46
                }],
                35: [function(t, e, n) {
                    var r = t(46);
                    e.exports = {
                        formatters: {
                            values: function(t) {
                                return r.isArray(t) ? t : "" + t
                            },
                            linear: function(t, e, n) {
                                var i = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                                Math.abs(i) > 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
                                var o = r.log10(Math.abs(i)),
                                    a = "";
                                if (0 !== t)
                                    if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) {
                                        var s = r.log10(Math.abs(t));
                                        a = t.toExponential(Math.floor(s) - Math.floor(o))
                                    } else {
                                        var l = -1 * Math.floor(o);
                                        l = Math.max(Math.min(l, 20), 0), a = t.toFixed(l)
                                    }
                                else a = "0";
                                return a
                            },
                            logarithmic: function(t, e, n) {
                                var i = t / Math.pow(10, Math.floor(r.log10(t)));
                                return 0 === t ? "0" : 1 === i || 2 === i || 5 === i || 0 === e || e === n.length - 1 ? t.toExponential() : ""
                            }
                        }
                    }
                }, {
                    46: 46
                }],
                36: [function(t, e, n) {
                    var r = t(26),
                        i = t(27),
                        o = t(46);
                    r._set("global", {
                        tooltips: {
                            enabled: !0,
                            custom: null,
                            mode: "nearest",
                            position: "average",
                            intersect: !0,
                            backgroundColor: "rgba(0,0,0,0.8)",
                            titleFontStyle: "bold",
                            titleSpacing: 2,
                            titleMarginBottom: 6,
                            titleFontColor: "#fff",
                            titleAlign: "left",
                            bodySpacing: 2,
                            bodyFontColor: "#fff",
                            bodyAlign: "left",
                            footerFontStyle: "bold",
                            footerSpacing: 2,
                            footerMarginTop: 6,
                            footerFontColor: "#fff",
                            footerAlign: "left",
                            yPadding: 6,
                            xPadding: 6,
                            caretPadding: 2,
                            caretSize: 5,
                            cornerRadius: 6,
                            multiKeyBackground: "#fff",
                            displayColors: !0,
                            borderColor: "rgba(0,0,0,0)",
                            borderWidth: 0,
                            callbacks: {
                                beforeTitle: o.noop,
                                title: function(t, e) {
                                    var n = "",
                                        r = e.labels,
                                        i = r ? r.length : 0;
                                    if (t.length > 0) {
                                        var o = t[0];
                                        o.xLabel ? n = o.xLabel : i > 0 && o.index < i && (n = r[o.index])
                                    }
                                    return n
                                },
                                afterTitle: o.noop,
                                beforeBody: o.noop,
                                beforeLabel: o.noop,
                                label: function(t, e) {
                                    var n = e.datasets[t.datasetIndex].label || "";
                                    return n && (n += ": "), n += t.yLabel, n
                                },
                                labelColor: function(t, e) {
                                    var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                                    return {
                                        borderColor: n.borderColor,
                                        backgroundColor: n.backgroundColor
                                    }
                                },
                                labelTextColor: function() {
                                    return this._options.bodyFontColor
                                },
                                afterLabel: o.noop,
                                afterBody: o.noop,
                                beforeFooter: o.noop,
                                footer: o.noop,
                                afterFooter: o.noop
                            }
                        }
                    });
                    var a = {
                        average: function(t) {
                            if (!t.length) return !1;
                            var e, n, r = 0,
                                i = 0,
                                o = 0;
                            for (e = 0, n = t.length; e < n; ++e) {
                                var a = t[e];
                                if (a && a.hasValue()) {
                                    var s = a.tooltipPosition();
                                    r += s.x, i += s.y, ++o
                                }
                            }
                            return {
                                x: Math.round(r / o),
                                y: Math.round(i / o)
                            }
                        },
                        nearest: function(t, e) {
                            var n, r, i, a = e.x,
                                s = e.y,
                                l = Number.POSITIVE_INFINITY;
                            for (n = 0, r = t.length; n < r; ++n) {
                                var u = t[n];
                                if (u && u.hasValue()) {
                                    var c = u.getCenterPoint(),
                                        d = o.distanceBetweenPoints(e, c);
                                    d < l && (l = d, i = u)
                                }
                            }
                            if (i) {
                                var f = i.tooltipPosition();
                                a = f.x, s = f.y
                            }
                            return {
                                x: a,
                                y: s
                            }
                        }
                    };

                    function s(t, e) {
                        var n = o.color(t);
                        return n.alpha(e * n.alpha()).rgbaString()
                    }

                    function l(t, e) {
                        return e && (o.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
                    }

                    function u(t) {
                        return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
                    }

                    function c(t) {
                        var e = r.global,
                            n = o.valueOrDefault;
                        return {
                            xPadding: t.xPadding,
                            yPadding: t.yPadding,
                            xAlign: t.xAlign,
                            yAlign: t.yAlign,
                            bodyFontColor: t.bodyFontColor,
                            _bodyFontFamily: n(t.bodyFontFamily, e.defaultFontFamily),
                            _bodyFontStyle: n(t.bodyFontStyle, e.defaultFontStyle),
                            _bodyAlign: t.bodyAlign,
                            bodyFontSize: n(t.bodyFontSize, e.defaultFontSize),
                            bodySpacing: t.bodySpacing,
                            titleFontColor: t.titleFontColor,
                            _titleFontFamily: n(t.titleFontFamily, e.defaultFontFamily),
                            _titleFontStyle: n(t.titleFontStyle, e.defaultFontStyle),
                            titleFontSize: n(t.titleFontSize, e.defaultFontSize),
                            _titleAlign: t.titleAlign,
                            titleSpacing: t.titleSpacing,
                            titleMarginBottom: t.titleMarginBottom,
                            footerFontColor: t.footerFontColor,
                            _footerFontFamily: n(t.footerFontFamily, e.defaultFontFamily),
                            _footerFontStyle: n(t.footerFontStyle, e.defaultFontStyle),
                            footerFontSize: n(t.footerFontSize, e.defaultFontSize),
                            _footerAlign: t.footerAlign,
                            footerSpacing: t.footerSpacing,
                            footerMarginTop: t.footerMarginTop,
                            caretSize: t.caretSize,
                            cornerRadius: t.cornerRadius,
                            backgroundColor: t.backgroundColor,
                            opacity: 0,
                            legendColorBackground: t.multiKeyBackground,
                            displayColors: t.displayColors,
                            borderColor: t.borderColor,
                            borderWidth: t.borderWidth
                        }
                    }

                    function d(t) {
                        return l([], u(t))
                    }(e.exports = i.extend({
                        initialize: function() {
                            this._model = c(this._options), this._lastActive = []
                        },
                        getTitle: function() {
                            var t = this,
                                e = t._options,
                                n = e.callbacks,
                                r = n.beforeTitle.apply(t, arguments),
                                i = n.title.apply(t, arguments),
                                o = n.afterTitle.apply(t, arguments),
                                a = [];
                            return a = l(a, u(r)), a = l(a, u(i)), a = l(a, u(o))
                        },
                        getBeforeBody: function() {
                            return d(this._options.callbacks.beforeBody.apply(this, arguments))
                        },
                        getBody: function(t, e) {
                            var n = this,
                                r = n._options.callbacks,
                                i = [];
                            return o.each(t, (function(t) {
                                var o = {
                                    before: [],
                                    lines: [],
                                    after: []
                                };
                                l(o.before, u(r.beforeLabel.call(n, t, e))), l(o.lines, r.label.call(n, t, e)), l(o.after, u(r.afterLabel.call(n, t, e))), i.push(o)
                            })), i
                        },
                        getAfterBody: function() {
                            return d(this._options.callbacks.afterBody.apply(this, arguments))
                        },
                        getFooter: function() {
                            var t = this,
                                e = t._options.callbacks,
                                n = e.beforeFooter.apply(t, arguments),
                                r = e.footer.apply(t, arguments),
                                i = e.afterFooter.apply(t, arguments),
                                o = [];
                            return o = l(o, u(n)), o = l(o, u(r)), o = l(o, u(i))
                        },
                        update: function(t) {
                            var e, n, r, i, s, l, u, d = this,
                                f = d._options,
                                h = d._model,
                                p = d._model = c(f),
                                g = d._active,
                                v = d._data,
                                m = {
                                    xAlign: h.xAlign,
                                    yAlign: h.yAlign
                                },
                                y = {
                                    x: h.x,
                                    y: h.y
                                },
                                b = {
                                    width: h.width,
                                    height: h.height
                                },
                                x = {
                                    x: h.caretX,
                                    y: h.caretY
                                };
                            if (g.length) {
                                p.opacity = 1;
                                var w = [],
                                    S = [];
                                x = a[f.position].call(d, g, d._eventPosition);
                                var k = [];
                                for (e = 0, n = g.length; e < n; ++e) k.push((r = g[e], i = void 0, s = void 0, l = void 0, u = void 0, i = r._xScale, s = r._yScale || r._scale, l = r._index, u = r._datasetIndex, {
                                    xLabel: i ? i.getLabelForIndex(l, u) : "",
                                    yLabel: s ? s.getLabelForIndex(l, u) : "",
                                    index: l,
                                    datasetIndex: u,
                                    x: r._model.x,
                                    y: r._model.y
                                }));
                                f.filter && (k = k.filter((function(t) {
                                    return f.filter(t, v)
                                }))), f.itemSort && (k = k.sort((function(t, e) {
                                    return f.itemSort(t, e, v)
                                }))), o.each(k, (function(t) {
                                    w.push(f.callbacks.labelColor.call(d, t, d._chart)), S.push(f.callbacks.labelTextColor.call(d, t, d._chart))
                                })), p.title = d.getTitle(k, v), p.beforeBody = d.getBeforeBody(k, v), p.body = d.getBody(k, v), p.afterBody = d.getAfterBody(k, v), p.footer = d.getFooter(k, v), p.x = Math.round(x.x), p.y = Math.round(x.y), p.caretPadding = f.caretPadding, p.labelColors = w, p.labelTextColors = S, p.dataPoints = k, b = function(t, e) {
                                    var n = t._chart.ctx,
                                        r = 2 * e.yPadding,
                                        i = 0,
                                        a = e.body,
                                        s = a.reduce((function(t, e) {
                                            return t + e.before.length + e.lines.length + e.after.length
                                        }), 0);
                                    s += e.beforeBody.length + e.afterBody.length;
                                    var l = e.title.length,
                                        u = e.footer.length,
                                        c = e.titleFontSize,
                                        d = e.bodyFontSize,
                                        f = e.footerFontSize;
                                    r += l * c, r += l ? (l - 1) * e.titleSpacing : 0, r += l ? e.titleMarginBottom : 0, r += s * d, r += s ? (s - 1) * e.bodySpacing : 0, r += u ? e.footerMarginTop : 0, r += u * f, r += u ? (u - 1) * e.footerSpacing : 0;
                                    var h = 0,
                                        p = function(t) {
                                            i = Math.max(i, n.measureText(t).width + h)
                                        };
                                    return n.font = o.fontString(c, e._titleFontStyle, e._titleFontFamily), o.each(e.title, p), n.font = o.fontString(d, e._bodyFontStyle, e._bodyFontFamily), o.each(e.beforeBody.concat(e.afterBody), p), h = e.displayColors ? d + 2 : 0, o.each(a, (function(t) {
                                        o.each(t.before, p), o.each(t.lines, p), o.each(t.after, p)
                                    })), h = 0, n.font = o.fontString(f, e._footerFontStyle, e._footerFontFamily), o.each(e.footer, p), {
                                        width: i += 2 * e.xPadding,
                                        height: r
                                    }
                                }(this, p), y = function(t, e, n, r) {
                                    var i = t.x,
                                        o = t.y,
                                        a = t.caretSize,
                                        s = t.caretPadding,
                                        l = t.cornerRadius,
                                        u = n.xAlign,
                                        c = n.yAlign,
                                        d = a + s,
                                        f = l + s;
                                    return "right" === u ? i -= e.width : "center" === u && ((i -= e.width / 2) + e.width > r.width && (i = r.width - e.width), i < 0 && (i = 0)), "top" === c ? o += d : o -= "bottom" === c ? e.height + d : e.height / 2, "center" === c ? "left" === u ? i += d : "right" === u && (i -= d) : "left" === u ? i -= f : "right" === u && (i += f), {
                                        x: i,
                                        y: o
                                    }
                                }(p, b, m = function(t, e) {
                                    var n, r, i, o, a, s = t._model,
                                        l = t._chart,
                                        u = t._chart.chartArea,
                                        c = "center",
                                        d = "center";
                                    s.y < e.height ? d = "top" : s.y > l.height - e.height && (d = "bottom");
                                    var f = (u.left + u.right) / 2,
                                        h = (u.top + u.bottom) / 2;
                                    "center" === d ? (n = function(t) {
                                        return t <= f
                                    }, r = function(t) {
                                        return t > f
                                    }) : (n = function(t) {
                                        return t <= e.width / 2
                                    }, r = function(t) {
                                        return t >= l.width - e.width / 2
                                    }), i = function(t) {
                                        return t + e.width + s.caretSize + s.caretPadding > l.width
                                    }, o = function(t) {
                                        return t - e.width - s.caretSize - s.caretPadding < 0
                                    }, a = function(t) {
                                        return t <= h ? "top" : "bottom"
                                    }, n(s.x) ? (c = "left", i(s.x) && (c = "center", d = a(s.y))) : r(s.x) && (c = "right", o(s.x) && (c = "center", d = a(s.y)));
                                    var p = t._options;
                                    return {
                                        xAlign: p.xAlign ? p.xAlign : c,
                                        yAlign: p.yAlign ? p.yAlign : d
                                    }
                                }(this, b), d._chart)
                            } else p.opacity = 0;
                            return p.xAlign = m.xAlign, p.yAlign = m.yAlign, p.x = y.x, p.y = y.y, p.width = b.width, p.height = b.height, p.caretX = x.x, p.caretY = x.y, d._model = p, t && f.custom && f.custom.call(d, p), d
                        },
                        drawCaret: function(t, e) {
                            var n = this._chart.ctx,
                                r = this._view,
                                i = this.getCaretPosition(t, e, r);
                            n.lineTo(i.x1, i.y1), n.lineTo(i.x2, i.y2), n.lineTo(i.x3, i.y3)
                        },
                        getCaretPosition: function(t, e, n) {
                            var r, i, o, a, s, l, u = n.caretSize,
                                c = n.cornerRadius,
                                d = n.xAlign,
                                f = n.yAlign,
                                h = t.x,
                                p = t.y,
                                g = e.width,
                                v = e.height;
                            if ("center" === f) s = p + v / 2, "left" === d ? (i = (r = h) - u, o = r, a = s + u, l = s - u) : (i = (r = h + g) + u, o = r, a = s - u, l = s + u);
                            else if ("left" === d ? (r = (i = h + c + u) - u, o = i + u) : "right" === d ? (r = (i = h + g - c - u) - u, o = i + u) : (r = (i = n.caretX) - u, o = i + u), "top" === f) s = (a = p) - u, l = a;
                            else {
                                s = (a = p + v) + u, l = a;
                                var m = o;
                                o = r, r = m
                            }
                            return {
                                x1: r,
                                x2: i,
                                x3: o,
                                y1: a,
                                y2: s,
                                y3: l
                            }
                        },
                        drawTitle: function(t, e, n, r) {
                            var i = e.title;
                            if (i.length) {
                                n.textAlign = e._titleAlign, n.textBaseline = "top";
                                var a, l, u = e.titleFontSize,
                                    c = e.titleSpacing;
                                for (n.fillStyle = s(e.titleFontColor, r), n.font = o.fontString(u, e._titleFontStyle, e._titleFontFamily), a = 0, l = i.length; a < l; ++a) n.fillText(i[a], t.x, t.y), t.y += u + c, a + 1 === i.length && (t.y += e.titleMarginBottom - c)
                            }
                        },
                        drawBody: function(t, e, n, r) {
                            var i = e.bodyFontSize,
                                a = e.bodySpacing,
                                l = e.body;
                            n.textAlign = e._bodyAlign, n.textBaseline = "top", n.font = o.fontString(i, e._bodyFontStyle, e._bodyFontFamily);
                            var u = 0,
                                c = function(e) {
                                    n.fillText(e, t.x + u, t.y), t.y += i + a
                                };
                            n.fillStyle = s(e.bodyFontColor, r), o.each(e.beforeBody, c);
                            var d = e.displayColors;
                            u = d ? i + 2 : 0, o.each(l, (function(a, l) {
                                var u = s(e.labelTextColors[l], r);
                                n.fillStyle = u, o.each(a.before, c), o.each(a.lines, (function(o) {
                                    d && (n.fillStyle = s(e.legendColorBackground, r), n.fillRect(t.x, t.y, i, i), n.lineWidth = 1, n.strokeStyle = s(e.labelColors[l].borderColor, r), n.strokeRect(t.x, t.y, i, i), n.fillStyle = s(e.labelColors[l].backgroundColor, r), n.fillRect(t.x + 1, t.y + 1, i - 2, i - 2), n.fillStyle = u), c(o)
                                })), o.each(a.after, c)
                            })), u = 0, o.each(e.afterBody, c), t.y -= a
                        },
                        drawFooter: function(t, e, n, r) {
                            var i = e.footer;
                            i.length && (t.y += e.footerMarginTop, n.textAlign = e._footerAlign, n.textBaseline = "top", n.fillStyle = s(e.footerFontColor, r), n.font = o.fontString(e.footerFontSize, e._footerFontStyle, e._footerFontFamily), o.each(i, (function(r) {
                                n.fillText(r, t.x, t.y), t.y += e.footerFontSize + e.footerSpacing
                            })))
                        },
                        drawBackground: function(t, e, n, r, i) {
                            n.fillStyle = s(e.backgroundColor, i), n.strokeStyle = s(e.borderColor, i), n.lineWidth = e.borderWidth;
                            var o = e.xAlign,
                                a = e.yAlign,
                                l = t.x,
                                u = t.y,
                                c = r.width,
                                d = r.height,
                                f = e.cornerRadius;
                            n.beginPath(), n.moveTo(l + f, u), "top" === a && this.drawCaret(t, r), n.lineTo(l + c - f, u), n.quadraticCurveTo(l + c, u, l + c, u + f), "center" === a && "right" === o && this.drawCaret(t, r), n.lineTo(l + c, u + d - f), n.quadraticCurveTo(l + c, u + d, l + c - f, u + d), "bottom" === a && this.drawCaret(t, r), n.lineTo(l + f, u + d), n.quadraticCurveTo(l, u + d, l, u + d - f), "center" === a && "left" === o && this.drawCaret(t, r), n.lineTo(l, u + f), n.quadraticCurveTo(l, u, l + f, u), n.closePath(), n.fill(), e.borderWidth > 0 && n.stroke()
                        },
                        draw: function() {
                            var t = this._chart.ctx,
                                e = this._view;
                            if (0 !== e.opacity) {
                                var n = {
                                        width: e.width,
                                        height: e.height
                                    },
                                    r = {
                                        x: e.x,
                                        y: e.y
                                    },
                                    i = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                                    o = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                                this._options.enabled && o && (this.drawBackground(r, e, t, n, i), r.x += e.xPadding, r.y += e.yPadding, this.drawTitle(r, e, t, i), this.drawBody(r, e, t, i), this.drawFooter(r, e, t, i))
                            }
                        },
                        handleEvent: function(t) {
                            var e, n = this,
                                r = n._options;
                            return n._lastActive = n._lastActive || [], "mouseout" === t.type ? n._active = [] : n._active = n._chart.getElementsAtEventForMode(t, r.mode, r), (e = !o.arrayEquals(n._active, n._lastActive)) && (n._lastActive = n._active, (r.enabled || r.custom) && (n._eventPosition = {
                                x: t.x,
                                y: t.y
                            }, n.update(!0), n.pivot())), e
                        }
                    })).positioners = a
                }, {
                    26: 26,
                    27: 27,
                    46: 46
                }],
                37: [function(t, e, n) {
                    var r = t(26),
                        i = t(27),
                        o = t(46);
                    r._set("global", {
                        elements: {
                            arc: {
                                backgroundColor: r.global.defaultColor,
                                borderColor: "#fff",
                                borderWidth: 2
                            }
                        }
                    }), e.exports = i.extend({
                        inLabelRange: function(t) {
                            var e = this._view;
                            return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
                        },
                        inRange: function(t, e) {
                            var n = this._view;
                            if (n) {
                                for (var r = o.getAngleFromPoint(n, {
                                        x: t,
                                        y: e
                                    }), i = r.angle, a = r.distance, s = n.startAngle, l = n.endAngle; l < s;) l += 2 * Math.PI;
                                for (; i > l;) i -= 2 * Math.PI;
                                for (; i < s;) i += 2 * Math.PI;
                                var u = i >= s && i <= l,
                                    c = a >= n.innerRadius && a <= n.outerRadius;
                                return u && c
                            }
                            return !1
                        },
                        getCenterPoint: function() {
                            var t = this._view,
                                e = (t.startAngle + t.endAngle) / 2,
                                n = (t.innerRadius + t.outerRadius) / 2;
                            return {
                                x: t.x + Math.cos(e) * n,
                                y: t.y + Math.sin(e) * n
                            }
                        },
                        getArea: function() {
                            var t = this._view;
                            return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                        },
                        tooltipPosition: function() {
                            var t = this._view,
                                e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                                n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                            return {
                                x: t.x + Math.cos(e) * n,
                                y: t.y + Math.sin(e) * n
                            }
                        },
                        draw: function() {
                            var t = this._chart.ctx,
                                e = this._view,
                                n = e.startAngle,
                                r = e.endAngle;
                            t.beginPath(), t.arc(e.x, e.y, e.outerRadius, n, r), t.arc(e.x, e.y, e.innerRadius, r, n, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
                        }
                    })
                }, {
                    26: 26,
                    27: 27,
                    46: 46
                }],
                38: [function(t, e, n) {
                    var r = t(26),
                        i = t(27),
                        o = t(46),
                        a = r.global;
                    r._set("global", {
                        elements: {
                            line: {
                                tension: .4,
                                backgroundColor: a.defaultColor,
                                borderWidth: 3,
                                borderColor: a.defaultColor,
                                borderCapStyle: "butt",
                                borderDash: [],
                                borderDashOffset: 0,
                                borderJoinStyle: "miter",
                                capBezierPoints: !0,
                                fill: !0
                            }
                        }
                    }), e.exports = i.extend({
                        draw: function() {
                            var t, e, n, r, i = this._view,
                                s = this._chart.ctx,
                                l = i.spanGaps,
                                u = this._children.slice(),
                                c = a.elements.line,
                                d = -1;
                            for (this._loop && u.length && u.push(u[0]), s.save(), s.lineCap = i.borderCapStyle || c.borderCapStyle, s.setLineDash && s.setLineDash(i.borderDash || c.borderDash), s.lineDashOffset = i.borderDashOffset || c.borderDashOffset, s.lineJoin = i.borderJoinStyle || c.borderJoinStyle, s.lineWidth = i.borderWidth || c.borderWidth, s.strokeStyle = i.borderColor || a.defaultColor, s.beginPath(), d = -1, t = 0; t < u.length; ++t) e = u[t], n = o.previousItem(u, t), r = e._view, 0 === t ? r.skip || (s.moveTo(r.x, r.y), d = t) : (n = -1 === d ? n : u[d], r.skip || (d !== t - 1 && !l || -1 === d ? s.moveTo(r.x, r.y) : o.canvas.lineTo(s, n._view, e._view), d = t));
                            s.stroke(), s.restore()
                        }
                    })
                }, {
                    26: 26,
                    27: 27,
                    46: 46
                }],
                39: [function(t, e, n) {
                    var r = t(26),
                        i = t(27),
                        o = t(46),
                        a = r.global.defaultColor;

                    function s(t) {
                        var e = this._view;
                        return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
                    }
                    r._set("global", {
                        elements: {
                            point: {
                                radius: 3,
                                pointStyle: "circle",
                                backgroundColor: a,
                                borderColor: a,
                                borderWidth: 1,
                                hitRadius: 1,
                                hoverRadius: 4,
                                hoverBorderWidth: 1
                            }
                        }
                    }), e.exports = i.extend({
                        inRange: function(t, e) {
                            var n = this._view;
                            return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
                        },
                        inLabelRange: s,
                        inXRange: s,
                        inYRange: function(t) {
                            var e = this._view;
                            return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
                        },
                        getCenterPoint: function() {
                            var t = this._view;
                            return {
                                x: t.x,
                                y: t.y
                            }
                        },
                        getArea: function() {
                            return Math.PI * Math.pow(this._view.radius, 2)
                        },
                        tooltipPosition: function() {
                            var t = this._view;
                            return {
                                x: t.x,
                                y: t.y,
                                padding: t.radius + t.borderWidth
                            }
                        },
                        draw: function(t) {
                            var e = this._view,
                                n = this._model,
                                i = this._chart.ctx,
                                s = e.pointStyle,
                                l = e.rotation,
                                u = e.radius,
                                c = e.x,
                                d = e.y;
                            e.skip || (void 0 === t || n.x >= t.left && 1.01 * t.right >= n.x && n.y >= t.top && 1.01 * t.bottom >= n.y) && (i.strokeStyle = e.borderColor || a, i.lineWidth = o.valueOrDefault(e.borderWidth, r.global.elements.point.borderWidth), i.fillStyle = e.backgroundColor || a, o.canvas.drawPoint(i, s, u, c, d, l))
                        }
                    })
                }, {
                    26: 26,
                    27: 27,
                    46: 46
                }],
                40: [function(t, e, n) {
                    var r = t(26),
                        i = t(27);

                    function o(t) {
                        return void 0 !== t._view.width
                    }

                    function a(t) {
                        var e, n, r, i, a = t._view;
                        if (o(t)) {
                            var s = a.width / 2;
                            e = a.x - s, n = a.x + s, r = Math.min(a.y, a.base), i = Math.max(a.y, a.base)
                        } else {
                            var l = a.height / 2;
                            e = Math.min(a.x, a.base), n = Math.max(a.x, a.base), r = a.y - l, i = a.y + l
                        }
                        return {
                            left: e,
                            top: r,
                            right: n,
                            bottom: i
                        }
                    }
                    r._set("global", {
                        elements: {
                            rectangle: {
                                backgroundColor: r.global.defaultColor,
                                borderColor: r.global.defaultColor,
                                borderSkipped: "bottom",
                                borderWidth: 0
                            }
                        }
                    }), e.exports = i.extend({
                        draw: function() {
                            var t, e, n, r, i, o, a, s = this._chart.ctx,
                                l = this._view,
                                u = l.borderWidth;
                            if (l.horizontal ? (t = l.base, e = l.x, n = l.y - l.height / 2, r = l.y + l.height / 2, i = e > t ? 1 : -1, o = 1, a = l.borderSkipped || "left") : (t = l.x - l.width / 2, e = l.x + l.width / 2, n = l.y, i = 1, o = (r = l.base) > n ? 1 : -1, a = l.borderSkipped || "bottom"), u) {
                                var c = Math.min(Math.abs(t - e), Math.abs(n - r)),
                                    d = (u = u > c ? c : u) / 2,
                                    f = t + ("left" !== a ? d * i : 0),
                                    h = e + ("right" !== a ? -d * i : 0),
                                    p = n + ("top" !== a ? d * o : 0),
                                    g = r + ("bottom" !== a ? -d * o : 0);
                                f !== h && (n = p, r = g), p !== g && (t = f, e = h)
                            }
                            s.beginPath(), s.fillStyle = l.backgroundColor, s.strokeStyle = l.borderColor, s.lineWidth = u;
                            var v = [
                                    [t, r],
                                    [t, n],
                                    [e, n],
                                    [e, r]
                                ],
                                m = ["bottom", "left", "top", "right"].indexOf(a, 0);

                            function y(t) {
                                return v[(m + t) % 4]
                            } - 1 === m && (m = 0);
                            var b = y(0);
                            s.moveTo(b[0], b[1]);
                            for (var x = 1; x < 4; x++) b = y(x), s.lineTo(b[0], b[1]);
                            s.fill(), u && s.stroke()
                        },
                        height: function() {
                            var t = this._view;
                            return t.base - t.y
                        },
                        inRange: function(t, e) {
                            var n = !1;
                            if (this._view) {
                                var r = a(this);
                                n = t >= r.left && t <= r.right && e >= r.top && e <= r.bottom
                            }
                            return n
                        },
                        inLabelRange: function(t, e) {
                            if (!this._view) return !1;
                            var n = a(this);
                            return o(this) ? t >= n.left && t <= n.right : e >= n.top && e <= n.bottom
                        },
                        inXRange: function(t) {
                            var e = a(this);
                            return t >= e.left && t <= e.right
                        },
                        inYRange: function(t) {
                            var e = a(this);
                            return t >= e.top && t <= e.bottom
                        },
                        getCenterPoint: function() {
                            var t, e, n = this._view;
                            return o(this) ? (t = n.x, e = (n.y + n.base) / 2) : (t = (n.x + n.base) / 2, e = n.y), {
                                x: t,
                                y: e
                            }
                        },
                        getArea: function() {
                            var t = this._view;
                            return t.width * Math.abs(t.y - t.base)
                        },
                        tooltipPosition: function() {
                            var t = this._view;
                            return {
                                x: t.x,
                                y: t.y
                            }
                        }
                    })
                }, {
                    26: 26,
                    27: 27
                }],
                41: [function(t, e, n) {
                    e.exports = {}, e.exports.Arc = t(37), e.exports.Line = t(38), e.exports.Point = t(39), e.exports.Rectangle = t(40)
                }, {
                    37: 37,
                    38: 38,
                    39: 39,
                    40: 40
                }],
                42: [function(t, e, n) {
                    var r = t(43);
                    n = e.exports = {
                        clear: function(t) {
                            t.ctx.clearRect(0, 0, t.width, t.height)
                        },
                        roundedRect: function(t, e, n, r, i, o) {
                            if (o) {
                                var a = Math.min(o, i / 2 - 1e-7, r / 2 - 1e-7);
                                t.moveTo(e + a, n), t.lineTo(e + r - a, n), t.arcTo(e + r, n, e + r, n + a, a), t.lineTo(e + r, n + i - a), t.arcTo(e + r, n + i, e + r - a, n + i, a), t.lineTo(e + a, n + i), t.arcTo(e, n + i, e, n + i - a, a), t.lineTo(e, n + a), t.arcTo(e, n, e + a, n, a), t.closePath(), t.moveTo(e, n)
                            } else t.rect(e, n, r, i)
                        },
                        drawPoint: function(t, e, n, r, i, a) {
                            var s, l, u, c, d, f;
                            if (a = a || 0, !e || "object" !== o(e) || "[object HTMLImageElement]" !== (s = e.toString()) && "[object HTMLCanvasElement]" !== s) {
                                if (!(isNaN(n) || n <= 0)) {
                                    switch (t.save(), t.translate(r, i), t.rotate(a * Math.PI / 180), t.beginPath(), e) {
                                        default:
                                            t.arc(0, 0, n, 0, 2 * Math.PI), t.closePath();
                                            break;
                                        case "triangle":
                                            d = (l = 3 * n / Math.sqrt(3)) * Math.sqrt(3) / 2, t.moveTo(-l / 2, d / 3), t.lineTo(l / 2, d / 3), t.lineTo(0, -2 * d / 3), t.closePath();
                                            break;
                                        case "rect":
                                            f = 1 / Math.SQRT2 * n, t.rect(-f, -f, 2 * f, 2 * f);
                                            break;
                                        case "rectRounded":
                                            var h = n / Math.SQRT2,
                                                p = -h,
                                                g = -h,
                                                v = Math.SQRT2 * n;
                                            this.roundedRect(t, p, g, v, v, .425 * n);
                                            break;
                                        case "rectRot":
                                            f = 1 / Math.SQRT2 * n, t.moveTo(-f, 0), t.lineTo(0, f), t.lineTo(f, 0), t.lineTo(0, -f), t.closePath();
                                            break;
                                        case "cross":
                                            t.moveTo(0, n), t.lineTo(0, -n), t.moveTo(-n, 0), t.lineTo(n, 0);
                                            break;
                                        case "crossRot":
                                            u = Math.cos(Math.PI / 4) * n, c = Math.sin(Math.PI / 4) * n, t.moveTo(-u, -c), t.lineTo(u, c), t.moveTo(-u, c), t.lineTo(u, -c);
                                            break;
                                        case "star":
                                            t.moveTo(0, n), t.lineTo(0, -n), t.moveTo(-n, 0), t.lineTo(n, 0), u = Math.cos(Math.PI / 4) * n, c = Math.sin(Math.PI / 4) * n, t.moveTo(-u, -c), t.lineTo(u, c), t.moveTo(-u, c), t.lineTo(u, -c);
                                            break;
                                        case "line":
                                            t.moveTo(-n, 0), t.lineTo(n, 0);
                                            break;
                                        case "dash":
                                            t.moveTo(0, 0), t.lineTo(n, 0)
                                    }
                                    t.fill(), t.stroke(), t.restore()
                                }
                            } else t.drawImage(e, r - e.width / 2, i - e.height / 2, e.width, e.height)
                        },
                        clipArea: function(t, e) {
                            t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
                        },
                        unclipArea: function(t) {
                            t.restore()
                        },
                        lineTo: function(t, e, n, r) {
                            if (n.steppedLine) return "after" === n.steppedLine && !r || "after" !== n.steppedLine && r ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y), void t.lineTo(n.x, n.y);
                            n.tension ? t.bezierCurveTo(r ? e.controlPointPreviousX : e.controlPointNextX, r ? e.controlPointPreviousY : e.controlPointNextY, r ? n.controlPointNextX : n.controlPointPreviousX, r ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : t.lineTo(n.x, n.y)
                        }
                    };
                    r.clear = n.clear, r.drawRoundedRectangle = function(t) {
                        t.beginPath(), n.roundedRect.apply(n, arguments)
                    }
                }, {
                    43: 43
                }],
                43: [function(t, e, n) {
                    var r, i = {
                        noop: function() {},
                        uid: (r = 0, function() {
                            return r++
                        }),
                        isNullOrUndef: function(t) {
                            return null == t
                        },
                        isArray: Array.isArray ? Array.isArray : function(t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        },
                        isObject: function(t) {
                            return null !== t && "[object Object]" === Object.prototype.toString.call(t)
                        },
                        valueOrDefault: function(t, e) {
                            return void 0 === t ? e : t
                        },
                        valueAtIndexOrDefault: function(t, e, n) {
                            return i.valueOrDefault(i.isArray(t) ? t[e] : t, n)
                        },
                        callback: function(t, e, n) {
                            if (t && "function" == typeof t.call) return t.apply(n, e)
                        },
                        each: function(t, e, n, r) {
                            var o, a, s;
                            if (i.isArray(t))
                                if (a = t.length, r)
                                    for (o = a - 1; o >= 0; o--) e.call(n, t[o], o);
                                else
                                    for (o = 0; o < a; o++) e.call(n, t[o], o);
                            else if (i.isObject(t))
                                for (a = (s = Object.keys(t)).length, o = 0; o < a; o++) e.call(n, t[s[o]], s[o])
                        },
                        arrayEquals: function(t, e) {
                            var n, r, o, a;
                            if (!t || !e || t.length !== e.length) return !1;
                            for (n = 0, r = t.length; n < r; ++n)
                                if (o = t[n], a = e[n], o instanceof Array && a instanceof Array) {
                                    if (!i.arrayEquals(o, a)) return !1
                                } else if (o !== a) return !1;
                            return !0
                        },
                        clone: function(t) {
                            if (i.isArray(t)) return t.map(i.clone);
                            if (i.isObject(t)) {
                                for (var e = {}, n = Object.keys(t), r = n.length, o = 0; o < r; ++o) e[n[o]] = i.clone(t[n[o]]);
                                return e
                            }
                            return t
                        },
                        _merger: function(t, e, n, r) {
                            var o = e[t],
                                a = n[t];
                            i.isObject(o) && i.isObject(a) ? i.merge(o, a, r) : e[t] = i.clone(a)
                        },
                        _mergerIf: function(t, e, n) {
                            var r = e[t],
                                o = n[t];
                            i.isObject(r) && i.isObject(o) ? i.mergeIf(r, o) : e.hasOwnProperty(t) || (e[t] = i.clone(o))
                        },
                        merge: function(t, e, n) {
                            var r, o, a, s, l, u = i.isArray(e) ? e : [e],
                                c = u.length;
                            if (!i.isObject(t)) return t;
                            for (r = (n = n || {}).merger || i._merger, o = 0; o < c; ++o)
                                if (e = u[o], i.isObject(e))
                                    for (l = 0, s = (a = Object.keys(e)).length; l < s; ++l) r(a[l], t, e, n);
                            return t
                        },
                        mergeIf: function(t, e) {
                            return i.merge(t, e, {
                                merger: i._mergerIf
                            })
                        },
                        extend: function(t) {
                            for (var e = function(e, n) {
                                    t[n] = e
                                }, n = 1, r = arguments.length; n < r; ++n) i.each(arguments[n], e);
                            return t
                        },
                        inherits: function(t) {
                            var e = this,
                                n = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                                    return e.apply(this, arguments)
                                },
                                r = function() {
                                    this.constructor = n
                                };
                            return r.prototype = e.prototype, n.prototype = new r, n.extend = i.inherits, t && i.extend(n.prototype, t), n.__super__ = e.prototype, n
                        }
                    };
                    e.exports = i, i.callCallback = i.callback, i.indexOf = function(t, e, n) {
                        return Array.prototype.indexOf.call(t, e, n)
                    }, i.getValueOrDefault = i.valueOrDefault, i.getValueAtIndexOrDefault = i.valueAtIndexOrDefault
                }, {}],
                44: [function(t, e, n) {
                    var r = t(43),
                        i = {
                            linear: function(t) {
                                return t
                            },
                            easeInQuad: function(t) {
                                return t * t
                            },
                            easeOutQuad: function(t) {
                                return -t * (t - 2)
                            },
                            easeInOutQuad: function(t) {
                                return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                            },
                            easeInCubic: function(t) {
                                return t * t * t
                            },
                            easeOutCubic: function(t) {
                                return (t -= 1) * t * t + 1
                            },
                            easeInOutCubic: function(t) {
                                return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                            },
                            easeInQuart: function(t) {
                                return t * t * t * t
                            },
                            easeOutQuart: function(t) {
                                return -((t -= 1) * t * t * t - 1)
                            },
                            easeInOutQuart: function(t) {
                                return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                            },
                            easeInQuint: function(t) {
                                return t * t * t * t * t
                            },
                            easeOutQuint: function(t) {
                                return (t -= 1) * t * t * t * t + 1
                            },
                            easeInOutQuint: function(t) {
                                return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                            },
                            easeInSine: function(t) {
                                return 1 - Math.cos(t * (Math.PI / 2))
                            },
                            easeOutSine: function(t) {
                                return Math.sin(t * (Math.PI / 2))
                            },
                            easeInOutSine: function(t) {
                                return -.5 * (Math.cos(Math.PI * t) - 1)
                            },
                            easeInExpo: function(t) {
                                return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                            },
                            easeOutExpo: function(t) {
                                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                            },
                            easeInOutExpo: function(t) {
                                return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
                            },
                            easeInCirc: function(t) {
                                return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)
                            },
                            easeOutCirc: function(t) {
                                return Math.sqrt(1 - (t -= 1) * t)
                            },
                            easeInOutCirc: function(t) {
                                return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                            },
                            easeInElastic: function(t) {
                                var e = 1.70158,
                                    n = 0,
                                    r = 1;
                                return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r), -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n))
                            },
                            easeOutElastic: function(t) {
                                var e = 1.70158,
                                    n = 0,
                                    r = 1;
                                return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r), r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
                            },
                            easeInOutElastic: function(t) {
                                var e = 1.70158,
                                    n = 0,
                                    r = 1;
                                return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .45), r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r), t < 1 ? r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
                            },
                            easeInBack: function(t) {
                                var e = 1.70158;
                                return t * t * ((e + 1) * t - e)
                            },
                            easeOutBack: function(t) {
                                var e = 1.70158;
                                return (t -= 1) * t * ((e + 1) * t + e) + 1
                            },
                            easeInOutBack: function(t) {
                                var e = 1.70158;
                                return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                            },
                            easeInBounce: function(t) {
                                return 1 - i.easeOutBounce(1 - t)
                            },
                            easeOutBounce: function(t) {
                                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                            },
                            easeInOutBounce: function(t) {
                                return t < .5 ? .5 * i.easeInBounce(2 * t) : .5 * i.easeOutBounce(2 * t - 1) + .5
                            }
                        };
                    e.exports = {
                        effects: i
                    }, r.easingEffects = i
                }, {
                    43: 43
                }],
                45: [function(t, e, n) {
                    var r = t(43);
                    e.exports = {
                        toLineHeight: function(t, e) {
                            var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                            if (!n || "normal" === n[1]) return 1.2 * e;
                            switch (t = +n[2], n[3]) {
                                case "px":
                                    return t;
                                case "%":
                                    t /= 100
                            }
                            return e * t
                        },
                        toPadding: function(t) {
                            var e, n, i, o;
                            return r.isObject(t) ? (e = +t.top || 0, n = +t.right || 0, i = +t.bottom || 0, o = +t.left || 0) : e = n = i = o = +t || 0, {
                                top: e,
                                right: n,
                                bottom: i,
                                left: o,
                                height: e + i,
                                width: o + n
                            }
                        },
                        resolve: function(t, e, n) {
                            var i, o, a;
                            for (i = 0, o = t.length; i < o; ++i)
                                if (void 0 !== (a = t[i]) && (void 0 !== e && "function" == typeof a && (a = a(e)), void 0 !== n && r.isArray(a) && (a = a[n]), void 0 !== a)) return a
                        }
                    }
                }, {
                    43: 43
                }],
                46: [function(t, e, n) {
                    e.exports = t(43), e.exports.easing = t(44), e.exports.canvas = t(42), e.exports.options = t(45)
                }, {
                    42: 42,
                    43: 43,
                    44: 44,
                    45: 45
                }],
                47: [function(t, e, n) {
                    e.exports = {
                        acquireContext: function(t) {
                            return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
                        }
                    }
                }, {}],
                48: [function(t, e, n) {
                    var r = t(46),
                        i = "$chartjs",
                        o = "chartjs-",
                        a = o + "render-monitor",
                        s = o + "render-animation",
                        l = ["animationstart", "webkitAnimationStart"],
                        u = {
                            touchstart: "mousedown",
                            touchmove: "mousemove",
                            touchend: "mouseup",
                            pointerenter: "mouseenter",
                            pointerdown: "mousedown",
                            pointermove: "mousemove",
                            pointerup: "mouseup",
                            pointerleave: "mouseout",
                            pointerout: "mouseout"
                        };

                    function c(t, e) {
                        var n = r.getStyle(t, e),
                            i = n && n.match(/^(\d+)(\.\d+)?px$/);
                        return i ? Number(i[1]) : void 0
                    }
                    var d = !! function() {
                        var t = !1;
                        try {
                            var e = Object.defineProperty({}, "passive", {
                                get: function() {
                                    t = !0
                                }
                            });
                            window.addEventListener("e", null, e)
                        } catch (t) {}
                        return t
                    }() && {
                        passive: !0
                    };

                    function f(t, e, n) {
                        t.addEventListener(e, n, d)
                    }

                    function h(t, e, n) {
                        t.removeEventListener(e, n, d)
                    }

                    function p(t, e, n, r, i) {
                        return {
                            type: t,
                            chart: e,
                            native: i || null,
                            x: void 0 !== n ? n : null,
                            y: void 0 !== r ? r : null
                        }
                    }

                    function g(t, e, n) {
                        var u, c, d, h, g = t[i] || (t[i] = {}),
                            v = g.resizer = function(t) {
                                var e = document.createElement("div"),
                                    n = o + "size-monitor",
                                    r = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
                                e.style.cssText = r, e.className = n, e.innerHTML = '<div class="' + n + '-expand" style="' + r + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + n + '-shrink" style="' + r + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
                                var i = e.childNodes[0],
                                    a = e.childNodes[1];
                                e._reset = function() {
                                    i.scrollLeft = 1e6, i.scrollTop = 1e6, a.scrollLeft = 1e6, a.scrollTop = 1e6
                                };
                                var s = function() {
                                    e._reset(), t()
                                };
                                return f(i, "scroll", s.bind(i, "expand")), f(a, "scroll", s.bind(a, "shrink")), e
                            }((u = function() {
                                if (g.resizer) return e(p("resize", n))
                            }, d = !1, h = [], function() {
                                h = Array.prototype.slice.call(arguments), c = c || this, d || (d = !0, r.requestAnimFrame.call(window, (function() {
                                    d = !1, u.apply(c, h)
                                })))
                            }));
                        ! function(t, e) {
                            var n = t[i] || (t[i] = {}),
                                o = n.renderProxy = function(t) {
                                    t.animationName === s && e()
                                };
                            r.each(l, (function(e) {
                                f(t, e, o)
                            })), n.reflow = !!t.offsetParent, t.classList.add(a)
                        }(t, (function() {
                            if (g.resizer) {
                                var e = t.parentNode;
                                e && e !== v.parentNode && e.insertBefore(v, e.firstChild), v._reset()
                            }
                        }))
                    }

                    function v(t) {
                        var e = t[i] || {},
                            n = e.resizer;
                        delete e.resizer,
                            function(t) {
                                var e = t[i] || {},
                                    n = e.renderProxy;
                                n && (r.each(l, (function(e) {
                                    h(t, e, n)
                                })), delete e.renderProxy), t.classList.remove(a)
                            }(t), n && n.parentNode && n.parentNode.removeChild(n)
                    }
                    e.exports = {
                        _enabled: "undefined" != typeof window && "undefined" != typeof document,
                        initialize: function() {
                            var t, e, n, r = "from{opacity:0.99}to{opacity:1}";
                            e = "@-webkit-keyframes " + s + "{" + r + "}@keyframes " + s + "{" + r + "}." + a + "{-webkit-animation:" + s + " 0.001s;animation:" + s + " 0.001s;}", n = (t = this)._style || document.createElement("style"), t._style || (t._style = n, e = "/* Chart.js */\n" + e, n.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(n)), n.appendChild(document.createTextNode(e))
                        },
                        acquireContext: function(t, e) {
                            "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
                            var n = t && t.getContext && t.getContext("2d");
                            return n && n.canvas === t ? (function(t, e) {
                                var n = t.style,
                                    r = t.getAttribute("height"),
                                    o = t.getAttribute("width");
                                if (t[i] = {
                                        initial: {
                                            height: r,
                                            width: o,
                                            style: {
                                                display: n.display,
                                                height: n.height,
                                                width: n.width
                                            }
                                        }
                                    }, n.display = n.display || "block", null === o || "" === o) {
                                    var a = c(t, "width");
                                    void 0 !== a && (t.width = a)
                                }
                                if (null === r || "" === r)
                                    if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                                    else {
                                        var s = c(t, "height");
                                        void 0 !== a && (t.height = s)
                                    }
                            }(t, e), n) : null
                        },
                        releaseContext: function(t) {
                            var e = t.canvas;
                            if (e[i]) {
                                var n = e[i].initial;
                                ["height", "width"].forEach((function(t) {
                                    var i = n[t];
                                    r.isNullOrUndef(i) ? e.removeAttribute(t) : e.setAttribute(t, i)
                                })), r.each(n.style || {}, (function(t, n) {
                                    e.style[n] = t
                                })), e.width = e.width, delete e[i]
                            }
                        },
                        addEventListener: function(t, e, n) {
                            var o = t.canvas;
                            if ("resize" !== e) {
                                var a = n[i] || (n[i] = {});
                                f(o, e, (a.proxies || (a.proxies = {}))[t.id + "_" + e] = function(e) {
                                    n(function(t, e) {
                                        var n = u[t.type] || t.type,
                                            i = r.getRelativePosition(t, e);
                                        return p(n, e, i.x, i.y, t)
                                    }(e, t))
                                })
                            } else g(o, n, t)
                        },
                        removeEventListener: function(t, e, n) {
                            var r = t.canvas;
                            if ("resize" !== e) {
                                var o = ((n[i] || {}).proxies || {})[t.id + "_" + e];
                                o && h(r, e, o)
                            } else v(r)
                        }
                    }, r.addEvent = f, r.removeEvent = h
                }, {
                    46: 46
                }],
                49: [function(t, e, n) {
                    var r = t(46),
                        i = t(47),
                        o = t(48),
                        a = o._enabled ? o : i;
                    e.exports = r.extend({
                        initialize: function() {},
                        acquireContext: function() {},
                        releaseContext: function() {},
                        addEventListener: function() {},
                        removeEventListener: function() {}
                    }, a)
                }, {
                    46: 46,
                    47: 47,
                    48: 48
                }],
                50: [function(t, e, n) {
                    e.exports = {}, e.exports.filler = t(51), e.exports.legend = t(52), e.exports.title = t(53)
                }, {
                    51: 51,
                    52: 52,
                    53: 53
                }],
                51: [function(t, e, n) {
                    var r = t(26),
                        i = t(41),
                        o = t(46);
                    r._set("global", {
                        plugins: {
                            filler: {
                                propagate: !0
                            }
                        }
                    });
                    var a = {
                        dataset: function(t) {
                            var e = t.fill,
                                n = t.chart,
                                r = n.getDatasetMeta(e),
                                i = r && n.isDatasetVisible(e) && r.dataset._children || [],
                                o = i.length || 0;
                            return o ? function(t, e) {
                                return e < o && i[e]._view || null
                            } : null
                        },
                        boundary: function(t) {
                            var e = t.boundary,
                                n = e ? e.x : null,
                                r = e ? e.y : null;
                            return function(t) {
                                return {
                                    x: null === n ? t.x : n,
                                    y: null === r ? t.y : r
                                }
                            }
                        }
                    };

                    function s(t, e, n) {
                        var r, i = t._model || {},
                            o = i.fill;
                        if (void 0 === o && (o = !!i.backgroundColor), !1 === o || null === o) return !1;
                        if (!0 === o) return "origin";
                        if (r = parseFloat(o, 10), isFinite(r) && Math.floor(r) === r) return "-" !== o[0] && "+" !== o[0] || (r = e + r), !(r === e || r < 0 || r >= n) && r;
                        switch (o) {
                            case "bottom":
                                return "start";
                            case "top":
                                return "end";
                            case "zero":
                                return "origin";
                            case "origin":
                            case "start":
                            case "end":
                                return o;
                            default:
                                return !1
                        }
                    }

                    function l(t) {
                        var e, n = t.el._model || {},
                            r = t.el._scale || {},
                            i = t.fill,
                            o = null;
                        if (isFinite(i)) return null;
                        if ("start" === i ? o = void 0 === n.scaleBottom ? r.bottom : n.scaleBottom : "end" === i ? o = void 0 === n.scaleTop ? r.top : n.scaleTop : void 0 !== n.scaleZero ? o = n.scaleZero : r.getBasePosition ? o = r.getBasePosition() : r.getBasePixel && (o = r.getBasePixel()), null != o) {
                            if (void 0 !== o.x && void 0 !== o.y) return o;
                            if ("number" == typeof o && isFinite(o)) return {
                                x: (e = r.isHorizontal()) ? o : null,
                                y: e ? null : o
                            }
                        }
                        return null
                    }

                    function u(t, e, n) {
                        var r, i = t[e].fill,
                            o = [e];
                        if (!n) return i;
                        for (; !1 !== i && -1 === o.indexOf(i);) {
                            if (!isFinite(i)) return i;
                            if (!(r = t[i])) return !1;
                            if (r.visible) return i;
                            o.push(i), i = r.fill
                        }
                        return !1
                    }

                    function c(t) {
                        var e = t.fill,
                            n = "dataset";
                        return !1 === e ? null : (isFinite(e) || (n = "boundary"), a[n](t))
                    }

                    function d(t) {
                        return t && !t.skip
                    }

                    function f(t, e, n, r, i) {
                        var a;
                        if (r && i) {
                            for (t.moveTo(e[0].x, e[0].y), a = 1; a < r; ++a) o.canvas.lineTo(t, e[a - 1], e[a]);
                            for (t.lineTo(n[i - 1].x, n[i - 1].y), a = i - 1; a > 0; --a) o.canvas.lineTo(t, n[a], n[a - 1], !0)
                        }
                    }
                    e.exports = {
                        id: "filler",
                        afterDatasetsUpdate: function(t, e) {
                            var n, r, o, a, d = (t.data.datasets || []).length,
                                f = e.propagate,
                                h = [];
                            for (r = 0; r < d; ++r) a = null, (o = (n = t.getDatasetMeta(r)).dataset) && o._model && o instanceof i.Line && (a = {
                                visible: t.isDatasetVisible(r),
                                fill: s(o, r, d),
                                chart: t,
                                el: o
                            }), n.$filler = a, h.push(a);
                            for (r = 0; r < d; ++r)(a = h[r]) && (a.fill = u(h, r, f), a.boundary = l(a), a.mapper = c(a))
                        },
                        beforeDatasetDraw: function(t, e) {
                            var n = e.meta.$filler;
                            if (n) {
                                var i = t.ctx,
                                    a = n.el,
                                    s = a._view,
                                    l = a._children || [],
                                    u = n.mapper,
                                    c = s.backgroundColor || r.global.defaultColor;
                                u && c && l.length && (o.canvas.clipArea(i, t.chartArea), function(t, e, n, r, i, o) {
                                    var a, s, l, u, c, h, p, g = e.length,
                                        v = r.spanGaps,
                                        m = [],
                                        y = [],
                                        b = 0,
                                        x = 0;
                                    for (t.beginPath(), a = 0, s = g + !!o; a < s; ++a) c = n(u = e[l = a % g]._view, l, r), h = d(u), p = d(c), h && p ? (b = m.push(u), x = y.push(c)) : b && x && (v ? (h && m.push(u), p && y.push(c)) : (f(t, m, y, b, x), b = x = 0, m = [], y = []));
                                    f(t, m, y, b, x), t.closePath(), t.fillStyle = i, t.fill()
                                }(i, l, u, s, c, a._loop), o.canvas.unclipArea(i))
                            }
                        }
                    }
                }, {
                    26: 26,
                    41: 41,
                    46: 46
                }],
                52: [function(t, e, n) {
                    var r = t(26),
                        i = t(27),
                        o = t(46),
                        a = t(31),
                        s = o.noop;

                    function l(t, e) {
                        return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth
                    }
                    r._set("global", {
                        legend: {
                            display: !0,
                            position: "top",
                            fullWidth: !0,
                            reverse: !1,
                            weight: 1e3,
                            onClick: function(t, e) {
                                var n = e.datasetIndex,
                                    r = this.chart,
                                    i = r.getDatasetMeta(n);
                                i.hidden = null === i.hidden ? !r.data.datasets[n].hidden : null, r.update()
                            },
                            onHover: null,
                            labels: {
                                boxWidth: 40,
                                padding: 10,
                                generateLabels: function(t) {
                                    var e = t.data;
                                    return o.isArray(e.datasets) ? e.datasets.map((function(e, n) {
                                        return {
                                            text: e.label,
                                            fillStyle: o.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                                            hidden: !t.isDatasetVisible(n),
                                            lineCap: e.borderCapStyle,
                                            lineDash: e.borderDash,
                                            lineDashOffset: e.borderDashOffset,
                                            lineJoin: e.borderJoinStyle,
                                            lineWidth: e.borderWidth,
                                            strokeStyle: e.borderColor,
                                            pointStyle: e.pointStyle,
                                            datasetIndex: n
                                        }
                                    }), this) : []
                                }
                            }
                        },
                        legendCallback: function(t) {
                            var e = [];
                            e.push('<ul class="' + t.id + '-legend">');
                            for (var n = 0; n < t.data.datasets.length; n++) e.push('<li><span style="background-color:' + t.data.datasets[n].backgroundColor + '"></span>'), t.data.datasets[n].label && e.push(t.data.datasets[n].label), e.push("</li>");
                            return e.push("</ul>"), e.join("")
                        }
                    });
                    var u = i.extend({
                        initialize: function(t) {
                            o.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
                        },
                        beforeUpdate: s,
                        update: function(t, e, n) {
                            var r = this;
                            return r.beforeUpdate(), r.maxWidth = t, r.maxHeight = e, r.margins = n, r.beforeSetDimensions(), r.setDimensions(), r.afterSetDimensions(), r.beforeBuildLabels(), r.buildLabels(), r.afterBuildLabels(), r.beforeFit(), r.fit(), r.afterFit(), r.afterUpdate(), r.minSize
                        },
                        afterUpdate: s,
                        beforeSetDimensions: s,
                        setDimensions: function() {
                            var t = this;
                            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                                width: 0,
                                height: 0
                            }
                        },
                        afterSetDimensions: s,
                        beforeBuildLabels: s,
                        buildLabels: function() {
                            var t = this,
                                e = t.options.labels || {},
                                n = o.callback(e.generateLabels, [t.chart], t) || [];
                            e.filter && (n = n.filter((function(n) {
                                return e.filter(n, t.chart.data)
                            }))), t.options.reverse && n.reverse(), t.legendItems = n
                        },
                        afterBuildLabels: s,
                        beforeFit: s,
                        fit: function() {
                            var t = this,
                                e = t.options,
                                n = e.labels,
                                i = e.display,
                                a = t.ctx,
                                s = r.global,
                                u = o.valueOrDefault,
                                c = u(n.fontSize, s.defaultFontSize),
                                d = u(n.fontStyle, s.defaultFontStyle),
                                f = u(n.fontFamily, s.defaultFontFamily),
                                h = o.fontString(c, d, f),
                                p = t.legendHitBoxes = [],
                                g = t.minSize,
                                v = t.isHorizontal();
                            if (v ? (g.width = t.maxWidth, g.height = i ? 10 : 0) : (g.width = i ? 10 : 0, g.height = t.maxHeight), i)
                                if (a.font = h, v) {
                                    var m = t.lineWidths = [0],
                                        y = t.legendItems.length ? c + n.padding : 0;
                                    a.textAlign = "left", a.textBaseline = "top", o.each(t.legendItems, (function(e, r) {
                                        var i = l(n, c) + c / 2 + a.measureText(e.text).width;
                                        m[m.length - 1] + i + n.padding >= t.width && (y += c + n.padding, m[m.length] = t.left), p[r] = {
                                            left: 0,
                                            top: 0,
                                            width: i,
                                            height: c
                                        }, m[m.length - 1] += i + n.padding
                                    })), g.height += y
                                } else {
                                    var b = n.padding,
                                        x = t.columnWidths = [],
                                        w = n.padding,
                                        S = 0,
                                        k = 0,
                                        C = c + b;
                                    o.each(t.legendItems, (function(t, e) {
                                        var r = l(n, c) + c / 2 + a.measureText(t.text).width;
                                        k + C > g.height && (w += S + n.padding, x.push(S), S = 0, k = 0), S = Math.max(S, r), k += C, p[e] = {
                                            left: 0,
                                            top: 0,
                                            width: r,
                                            height: c
                                        }
                                    })), w += S, x.push(S), g.width += w
                                } t.width = g.width, t.height = g.height
                        },
                        afterFit: s,
                        isHorizontal: function() {
                            return "top" === this.options.position || "bottom" === this.options.position
                        },
                        draw: function() {
                            var t = this,
                                e = t.options,
                                n = e.labels,
                                i = r.global,
                                a = i.elements.line,
                                s = t.width,
                                u = t.lineWidths;
                            if (e.display) {
                                var c, d = t.ctx,
                                    f = o.valueOrDefault,
                                    h = f(n.fontColor, i.defaultFontColor),
                                    p = f(n.fontSize, i.defaultFontSize),
                                    g = f(n.fontStyle, i.defaultFontStyle),
                                    v = f(n.fontFamily, i.defaultFontFamily),
                                    m = o.fontString(p, g, v);
                                d.textAlign = "left", d.textBaseline = "middle", d.lineWidth = .5, d.strokeStyle = h, d.fillStyle = h, d.font = m;
                                var y = l(n, p),
                                    b = t.legendHitBoxes,
                                    x = t.isHorizontal();
                                c = x ? {
                                    x: t.left + (s - u[0]) / 2,
                                    y: t.top + n.padding,
                                    line: 0
                                } : {
                                    x: t.left + n.padding,
                                    y: t.top + n.padding,
                                    line: 0
                                };
                                var w = p + n.padding;
                                o.each(t.legendItems, (function(r, l) {
                                    var h = d.measureText(r.text).width,
                                        g = y + p / 2 + h,
                                        v = c.x,
                                        m = c.y;
                                    x ? v + g >= s && (m = c.y += w, c.line++, v = c.x = t.left + (s - u[c.line]) / 2) : m + w > t.bottom && (v = c.x = v + t.columnWidths[c.line] + n.padding, m = c.y = t.top + n.padding, c.line++),
                                        function(t, n, r) {
                                            if (!(isNaN(y) || y <= 0)) {
                                                d.save(), d.fillStyle = f(r.fillStyle, i.defaultColor), d.lineCap = f(r.lineCap, a.borderCapStyle), d.lineDashOffset = f(r.lineDashOffset, a.borderDashOffset), d.lineJoin = f(r.lineJoin, a.borderJoinStyle), d.lineWidth = f(r.lineWidth, a.borderWidth), d.strokeStyle = f(r.strokeStyle, i.defaultColor);
                                                var s = 0 === f(r.lineWidth, a.borderWidth);
                                                if (d.setLineDash && d.setLineDash(f(r.lineDash, a.borderDash)), e.labels && e.labels.usePointStyle) {
                                                    var l = p * Math.SQRT2 / 2,
                                                        u = l / Math.SQRT2,
                                                        c = t + u,
                                                        h = n + u;
                                                    o.canvas.drawPoint(d, r.pointStyle, l, c, h)
                                                } else s || d.strokeRect(t, n, y, p), d.fillRect(t, n, y, p);
                                                d.restore()
                                            }
                                        }(v, m, r), b[l].left = v, b[l].top = m,
                                        function(t, e, n, r) {
                                            var i = p / 2,
                                                o = y + i + t,
                                                a = e + i;
                                            d.fillText(n.text, o, a), n.hidden && (d.beginPath(), d.lineWidth = 2, d.moveTo(o, a), d.lineTo(o + r, a), d.stroke())
                                        }(v, m, r, h), x ? c.x += g + n.padding : c.y += w
                                }))
                            }
                        },
                        handleEvent: function(t) {
                            var e = this,
                                n = e.options,
                                r = "mouseup" === t.type ? "click" : t.type,
                                i = !1;
                            if ("mousemove" === r) {
                                if (!n.onHover) return
                            } else {
                                if ("click" !== r) return;
                                if (!n.onClick) return
                            }
                            var o = t.x,
                                a = t.y;
                            if (o >= e.left && o <= e.right && a >= e.top && a <= e.bottom)
                                for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
                                    var u = s[l];
                                    if (o >= u.left && o <= u.left + u.width && a >= u.top && a <= u.top + u.height) {
                                        if ("click" === r) {
                                            n.onClick.call(e, t.native, e.legendItems[l]), i = !0;
                                            break
                                        }
                                        if ("mousemove" === r) {
                                            n.onHover.call(e, t.native, e.legendItems[l]), i = !0;
                                            break
                                        }
                                    }
                                }
                            return i
                        }
                    });

                    function c(t, e) {
                        var n = new u({
                            ctx: t.ctx,
                            options: e,
                            chart: t
                        });
                        a.configure(t, n, e), a.addBox(t, n), t.legend = n
                    }
                    e.exports = {
                        id: "legend",
                        _element: u,
                        beforeInit: function(t) {
                            var e = t.options.legend;
                            e && c(t, e)
                        },
                        beforeUpdate: function(t) {
                            var e = t.options.legend,
                                n = t.legend;
                            e ? (o.mergeIf(e, r.global.legend), n ? (a.configure(t, n, e), n.options = e) : c(t, e)) : n && (a.removeBox(t, n), delete t.legend)
                        },
                        afterEvent: function(t, e) {
                            var n = t.legend;
                            n && n.handleEvent(e)
                        }
                    }
                }, {
                    26: 26,
                    27: 27,
                    31: 31,
                    46: 46
                }],
                53: [function(t, e, n) {
                    var r = t(26),
                        i = t(27),
                        o = t(46),
                        a = t(31),
                        s = o.noop;
                    r._set("global", {
                        title: {
                            display: !1,
                            fontStyle: "bold",
                            fullWidth: !0,
                            lineHeight: 1.2,
                            padding: 10,
                            position: "top",
                            text: "",
                            weight: 2e3
                        }
                    });
                    var l = i.extend({
                        initialize: function(t) {
                            o.extend(this, t), this.legendHitBoxes = []
                        },
                        beforeUpdate: s,
                        update: function(t, e, n) {
                            var r = this;
                            return r.beforeUpdate(), r.maxWidth = t, r.maxHeight = e, r.margins = n, r.beforeSetDimensions(), r.setDimensions(), r.afterSetDimensions(), r.beforeBuildLabels(), r.buildLabels(), r.afterBuildLabels(), r.beforeFit(), r.fit(), r.afterFit(), r.afterUpdate(), r.minSize
                        },
                        afterUpdate: s,
                        beforeSetDimensions: s,
                        setDimensions: function() {
                            var t = this;
                            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                                width: 0,
                                height: 0
                            }
                        },
                        afterSetDimensions: s,
                        beforeBuildLabels: s,
                        buildLabels: s,
                        afterBuildLabels: s,
                        beforeFit: s,
                        fit: function() {
                            var t = this,
                                e = o.valueOrDefault,
                                n = t.options,
                                i = n.display,
                                a = e(n.fontSize, r.global.defaultFontSize),
                                s = t.minSize,
                                l = o.isArray(n.text) ? n.text.length : 1,
                                u = o.options.toLineHeight(n.lineHeight, a),
                                c = i ? l * u + 2 * n.padding : 0;
                            t.isHorizontal() ? (s.width = t.maxWidth, s.height = c) : (s.width = c, s.height = t.maxHeight), t.width = s.width, t.height = s.height
                        },
                        afterFit: s,
                        isHorizontal: function() {
                            var t = this.options.position;
                            return "top" === t || "bottom" === t
                        },
                        draw: function() {
                            var t = this,
                                e = t.ctx,
                                n = o.valueOrDefault,
                                i = t.options,
                                a = r.global;
                            if (i.display) {
                                var s, l, u, c = n(i.fontSize, a.defaultFontSize),
                                    d = n(i.fontStyle, a.defaultFontStyle),
                                    f = n(i.fontFamily, a.defaultFontFamily),
                                    h = o.fontString(c, d, f),
                                    p = o.options.toLineHeight(i.lineHeight, c),
                                    g = p / 2 + i.padding,
                                    v = 0,
                                    m = t.top,
                                    y = t.left,
                                    b = t.bottom,
                                    x = t.right;
                                e.fillStyle = n(i.fontColor, a.defaultFontColor), e.font = h, t.isHorizontal() ? (l = y + (x - y) / 2, u = m + g, s = x - y) : (l = "left" === i.position ? y + g : x - g, u = m + (b - m) / 2, s = b - m, v = Math.PI * ("left" === i.position ? -.5 : .5)), e.save(), e.translate(l, u), e.rotate(v), e.textAlign = "center", e.textBaseline = "middle";
                                var w = i.text;
                                if (o.isArray(w))
                                    for (var S = 0, k = 0; k < w.length; ++k) e.fillText(w[k], 0, S, s), S += p;
                                else e.fillText(w, 0, 0, s);
                                e.restore()
                            }
                        }
                    });

                    function u(t, e) {
                        var n = new l({
                            ctx: t.ctx,
                            options: e,
                            chart: t
                        });
                        a.configure(t, n, e), a.addBox(t, n), t.titleBlock = n
                    }
                    e.exports = {
                        id: "title",
                        _element: l,
                        beforeInit: function(t) {
                            var e = t.options.title;
                            e && u(t, e)
                        },
                        beforeUpdate: function(t) {
                            var e = t.options.title,
                                n = t.titleBlock;
                            e ? (o.mergeIf(e, r.global.title), n ? (a.configure(t, n, e), n.options = e) : u(t, e)) : n && (a.removeBox(t, n), delete t.titleBlock)
                        }
                    }
                }, {
                    26: 26,
                    27: 27,
                    31: 31,
                    46: 46
                }],
                54: [function(t, e, n) {
                    var r = t(33),
                        i = t(34);
                    e.exports = function() {
                        var t = r.extend({
                            getLabels: function() {
                                var t = this.chart.data;
                                return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
                            },
                            determineDataLimits: function() {
                                var t, e = this,
                                    n = e.getLabels();
                                e.minIndex = 0, e.maxIndex = n.length - 1, void 0 !== e.options.ticks.min && (t = n.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = n.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = n[e.minIndex], e.max = n[e.maxIndex]
                            },
                            buildTicks: function() {
                                var t = this,
                                    e = t.getLabels();
                                t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
                            },
                            getLabelForIndex: function(t, e) {
                                var n = this,
                                    r = n.chart.data,
                                    i = n.isHorizontal();
                                return r.yLabels && !i ? n.getRightValue(r.datasets[e].data[t]) : n.ticks[t - n.minIndex]
                            },
                            getPixelForValue: function(t, e) {
                                var n, r = this,
                                    i = r.options.offset,
                                    o = Math.max(r.maxIndex + 1 - r.minIndex - (i ? 0 : 1), 1);
                                if (null != t && (n = r.isHorizontal() ? t.x : t.y), void 0 !== n || void 0 !== t && isNaN(e)) {
                                    t = n || t;
                                    var a = r.getLabels().indexOf(t);
                                    e = -1 !== a ? a : e
                                }
                                if (r.isHorizontal()) {
                                    var s = r.width / o,
                                        l = s * (e - r.minIndex);
                                    return i && (l += s / 2), r.left + Math.round(l)
                                }
                                var u = r.height / o,
                                    c = u * (e - r.minIndex);
                                return i && (c += u / 2), r.top + Math.round(c)
                            },
                            getPixelForTick: function(t) {
                                return this.getPixelForValue(this.ticks[t], t + this.minIndex, null)
                            },
                            getValueForPixel: function(t) {
                                var e = this,
                                    n = e.options.offset,
                                    r = Math.max(e._ticks.length - (n ? 0 : 1), 1),
                                    i = e.isHorizontal(),
                                    o = (i ? e.width : e.height) / r;
                                return t -= i ? e.left : e.top, n && (t -= o / 2), (t <= 0 ? 0 : Math.round(t / o)) + e.minIndex
                            },
                            getBasePixel: function() {
                                return this.bottom
                            }
                        });
                        i.registerScaleType("category", t, {
                            position: "bottom"
                        })
                    }
                }, {
                    33: 33,
                    34: 34
                }],
                55: [function(t, e, n) {
                    var r = t(26),
                        i = t(46),
                        o = t(34),
                        a = t(35);
                    e.exports = function(t) {
                        var e = {
                                position: "left",
                                ticks: {
                                    callback: a.formatters.linear
                                }
                            },
                            n = t.LinearScaleBase.extend({
                                determineDataLimits: function() {
                                    var t = this,
                                        e = t.options,
                                        n = t.chart,
                                        r = n.data.datasets,
                                        o = t.isHorizontal();

                                    function a(e) {
                                        return o ? e.xAxisID === t.id : e.yAxisID === t.id
                                    }
                                    t.min = null, t.max = null;
                                    var s = e.stacked;
                                    if (void 0 === s && i.each(r, (function(t, e) {
                                            if (!s) {
                                                var r = n.getDatasetMeta(e);
                                                n.isDatasetVisible(e) && a(r) && void 0 !== r.stack && (s = !0)
                                            }
                                        })), e.stacked || s) {
                                        var l = {};
                                        i.each(r, (function(r, o) {
                                            var s = n.getDatasetMeta(o),
                                                u = [s.type, void 0 === e.stacked && void 0 === s.stack ? o : "", s.stack].join(".");
                                            void 0 === l[u] && (l[u] = {
                                                positiveValues: [],
                                                negativeValues: []
                                            });
                                            var c = l[u].positiveValues,
                                                d = l[u].negativeValues;
                                            n.isDatasetVisible(o) && a(s) && i.each(r.data, (function(n, r) {
                                                var i = +t.getRightValue(n);
                                                isNaN(i) || s.data[r].hidden || (c[r] = c[r] || 0, d[r] = d[r] || 0, e.relativePoints ? c[r] = 100 : i < 0 ? d[r] += i : c[r] += i)
                                            }))
                                        })), i.each(l, (function(e) {
                                            var n = e.positiveValues.concat(e.negativeValues),
                                                r = i.min(n),
                                                o = i.max(n);
                                            t.min = null === t.min ? r : Math.min(t.min, r), t.max = null === t.max ? o : Math.max(t.max, o)
                                        }))
                                    } else i.each(r, (function(e, r) {
                                        var o = n.getDatasetMeta(r);
                                        n.isDatasetVisible(r) && a(o) && i.each(e.data, (function(e, n) {
                                            var r = +t.getRightValue(e);
                                            isNaN(r) || o.data[n].hidden || (null === t.min ? t.min = r : r < t.min && (t.min = r), null === t.max ? t.max = r : r > t.max && (t.max = r))
                                        }))
                                    }));
                                    t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions()
                                },
                                getTickLimit: function() {
                                    var t, e = this.options.ticks;
                                    if (this.isHorizontal()) t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.width / 50));
                                    else {
                                        var n = i.valueOrDefault(e.fontSize, r.global.defaultFontSize);
                                        t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.height / (2 * n)))
                                    }
                                    return t
                                },
                                handleDirectionalChanges: function() {
                                    this.isHorizontal() || this.ticks.reverse()
                                },
                                getLabelForIndex: function(t, e) {
                                    return +this.getRightValue(this.chart.data.datasets[e].data[t])
                                },
                                getPixelForValue: function(t) {
                                    var e = this,
                                        n = e.start,
                                        r = +e.getRightValue(t),
                                        i = e.end - n;
                                    return e.isHorizontal() ? e.left + e.width / i * (r - n) : e.bottom - e.height / i * (r - n)
                                },
                                getValueForPixel: function(t) {
                                    var e = this,
                                        n = e.isHorizontal(),
                                        r = n ? e.width : e.height,
                                        i = (n ? t - e.left : e.bottom - t) / r;
                                    return e.start + (e.end - e.start) * i
                                },
                                getPixelForTick: function(t) {
                                    return this.getPixelForValue(this.ticksAsNumbers[t])
                                }
                            });
                        o.registerScaleType("linear", n, e)
                    }
                }, {
                    26: 26,
                    34: 34,
                    35: 35,
                    46: 46
                }],
                56: [function(t, e, n) {
                    var r = t(46),
                        i = t(33);
                    e.exports = function(t) {
                        var e = r.noop;
                        t.LinearScaleBase = i.extend({
                            getRightValue: function(t) {
                                return "string" == typeof t ? +t : i.prototype.getRightValue.call(this, t)
                            },
                            handleTickRangeOptions: function() {
                                var t = this,
                                    e = t.options.ticks;
                                if (e.beginAtZero) {
                                    var n = r.sign(t.min),
                                        i = r.sign(t.max);
                                    n < 0 && i < 0 ? t.max = 0 : n > 0 && i > 0 && (t.min = 0)
                                }
                                var o = void 0 !== e.min || void 0 !== e.suggestedMin,
                                    a = void 0 !== e.max || void 0 !== e.suggestedMax;
                                void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), o !== a && t.min >= t.max && (o ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
                            },
                            getTickLimit: e,
                            handleDirectionalChanges: e,
                            buildTicks: function() {
                                var t = this,
                                    e = t.options.ticks,
                                    n = t.getTickLimit(),
                                    i = {
                                        maxTicks: n = Math.max(2, n),
                                        min: e.min,
                                        max: e.max,
                                        precision: e.precision,
                                        stepSize: r.valueOrDefault(e.fixedStepSize, e.stepSize)
                                    },
                                    o = t.ticks = function(t, e) {
                                        var n, i, o, a = [];
                                        if (t.stepSize && t.stepSize > 0) o = t.stepSize;
                                        else {
                                            var s = r.niceNum(e.max - e.min, !1);
                                            o = r.niceNum(s / (t.maxTicks - 1), !0), void 0 !== (i = t.precision) && (n = Math.pow(10, i), o = Math.ceil(o * n) / n)
                                        }
                                        var l = Math.floor(e.min / o) * o,
                                            u = Math.ceil(e.max / o) * o;
                                        r.isNullOrUndef(t.min) || r.isNullOrUndef(t.max) || !t.stepSize || r.almostWhole((t.max - t.min) / t.stepSize, o / 1e3) && (l = t.min, u = t.max);
                                        var c = (u - l) / o;
                                        c = r.almostEquals(c, Math.round(c), o / 1e3) ? Math.round(c) : Math.ceil(c), i = 1, o < 1 && (i = Math.pow(10, 1 - Math.floor(r.log10(o))), l = Math.round(l * i) / i, u = Math.round(u * i) / i), a.push(void 0 !== t.min ? t.min : l);
                                        for (var d = 1; d < c; ++d) a.push(Math.round((l + d * o) * i) / i);
                                        return a.push(void 0 !== t.max ? t.max : u), a
                                    }(i, t);
                                t.handleDirectionalChanges(), t.max = r.max(o), t.min = r.min(o), e.reverse ? (o.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                            },
                            convertTicksToLabels: function() {
                                var t = this;
                                t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), i.prototype.convertTicksToLabels.call(t)
                            }
                        })
                    }
                }, {
                    33: 33,
                    46: 46
                }],
                57: [function(t, e, n) {
                    var r = t(46),
                        i = t(33),
                        o = t(34),
                        a = t(35);
                    e.exports = function(t) {
                        var e = {
                                position: "left",
                                ticks: {
                                    callback: a.formatters.logarithmic
                                }
                            },
                            n = i.extend({
                                determineDataLimits: function() {
                                    var t = this,
                                        e = t.options,
                                        n = t.chart,
                                        i = n.data.datasets,
                                        o = t.isHorizontal();

                                    function a(e) {
                                        return o ? e.xAxisID === t.id : e.yAxisID === t.id
                                    }
                                    t.min = null, t.max = null, t.minNotZero = null;
                                    var s = e.stacked;
                                    if (void 0 === s && r.each(i, (function(t, e) {
                                            if (!s) {
                                                var r = n.getDatasetMeta(e);
                                                n.isDatasetVisible(e) && a(r) && void 0 !== r.stack && (s = !0)
                                            }
                                        })), e.stacked || s) {
                                        var l = {};
                                        r.each(i, (function(i, o) {
                                            var s = n.getDatasetMeta(o),
                                                u = [s.type, void 0 === e.stacked && void 0 === s.stack ? o : "", s.stack].join(".");
                                            n.isDatasetVisible(o) && a(s) && (void 0 === l[u] && (l[u] = []), r.each(i.data, (function(e, n) {
                                                var r = l[u],
                                                    i = +t.getRightValue(e);
                                                isNaN(i) || s.data[n].hidden || i < 0 || (r[n] = r[n] || 0, r[n] += i)
                                            })))
                                        })), r.each(l, (function(e) {
                                            if (e.length > 0) {
                                                var n = r.min(e),
                                                    i = r.max(e);
                                                t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? i : Math.max(t.max, i)
                                            }
                                        }))
                                    } else r.each(i, (function(e, i) {
                                        var o = n.getDatasetMeta(i);
                                        n.isDatasetVisible(i) && a(o) && r.each(e.data, (function(e, n) {
                                            var r = +t.getRightValue(e);
                                            isNaN(r) || o.data[n].hidden || r < 0 || (null === t.min ? t.min = r : r < t.min && (t.min = r), null === t.max ? t.max = r : r > t.max && (t.max = r), 0 !== r && (null === t.minNotZero || r < t.minNotZero) && (t.minNotZero = r))
                                        }))
                                    }));
                                    this.handleTickRangeOptions()
                                },
                                handleTickRangeOptions: function() {
                                    var t = this,
                                        e = t.options.ticks,
                                        n = r.valueOrDefault;
                                    t.min = n(e.min, t.min), t.max = n(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(r.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(r.log10(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(r.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(r.log10(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(r.log10(t.max))) : t.minNotZero = 1)
                                },
                                buildTicks: function() {
                                    var t = this,
                                        e = t.options.ticks,
                                        n = !t.isHorizontal(),
                                        i = {
                                            min: e.min,
                                            max: e.max
                                        },
                                        o = t.ticks = function(t, e) {
                                            var n, i, o = [],
                                                a = r.valueOrDefault,
                                                s = a(t.min, Math.pow(10, Math.floor(r.log10(e.min)))),
                                                l = Math.floor(r.log10(e.max)),
                                                u = Math.ceil(e.max / Math.pow(10, l));
                                            0 === s ? (n = Math.floor(r.log10(e.minNotZero)), i = Math.floor(e.minNotZero / Math.pow(10, n)), o.push(s), s = i * Math.pow(10, n)) : (n = Math.floor(r.log10(s)), i = Math.floor(s / Math.pow(10, n)));
                                            var c = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
                                            do {
                                                o.push(s), 10 === ++i && (i = 1, c = ++n >= 0 ? 1 : c), s = Math.round(i * Math.pow(10, n) * c) / c
                                            } while (n < l || n === l && i < u);
                                            var d = a(t.max, s);
                                            return o.push(d), o
                                        }(i, t);
                                    t.max = r.max(o), t.min = r.min(o), e.reverse ? (n = !n, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), n && o.reverse()
                                },
                                convertTicksToLabels: function() {
                                    this.tickValues = this.ticks.slice(), i.prototype.convertTicksToLabels.call(this)
                                },
                                getLabelForIndex: function(t, e) {
                                    return +this.getRightValue(this.chart.data.datasets[e].data[t])
                                },
                                getPixelForTick: function(t) {
                                    return this.getPixelForValue(this.tickValues[t])
                                },
                                _getFirstTickValue: function(t) {
                                    var e = Math.floor(r.log10(t));
                                    return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
                                },
                                getPixelForValue: function(e) {
                                    var n, i, o, a, s, l = this,
                                        u = l.options.ticks.reverse,
                                        c = r.log10,
                                        d = l._getFirstTickValue(l.minNotZero),
                                        f = 0;
                                    return e = +l.getRightValue(e), u ? (o = l.end, a = l.start, s = -1) : (o = l.start, a = l.end, s = 1), l.isHorizontal() ? (n = l.width, i = u ? l.right : l.left) : (n = l.height, s *= -1, i = u ? l.top : l.bottom), e !== o && (0 === o && (n -= f = r.getValueOrDefault(l.options.ticks.fontSize, t.defaults.global.defaultFontSize), o = d), 0 !== e && (f += n / (c(a) - c(o)) * (c(e) - c(o))), i += s * f), i
                                },
                                getValueForPixel: function(e) {
                                    var n, i, o, a, s = this,
                                        l = s.options.ticks.reverse,
                                        u = r.log10,
                                        c = s._getFirstTickValue(s.minNotZero);
                                    if (l ? (i = s.end, o = s.start) : (i = s.start, o = s.end), s.isHorizontal() ? (n = s.width, a = l ? s.right - e : e - s.left) : (n = s.height, a = l ? e - s.top : s.bottom - e), a !== i) {
                                        if (0 === i) {
                                            var d = r.getValueOrDefault(s.options.ticks.fontSize, t.defaults.global.defaultFontSize);
                                            a -= d, n -= d, i = c
                                        }
                                        a *= u(o) - u(i), a /= n, a = Math.pow(10, u(i) + a)
                                    }
                                    return a
                                }
                            });
                        o.registerScaleType("logarithmic", n, e)
                    }
                }, {
                    33: 33,
                    34: 34,
                    35: 35,
                    46: 46
                }],
                58: [function(t, e, n) {
                    var r = t(26),
                        i = t(46),
                        o = t(34),
                        a = t(35);
                    e.exports = function(t) {
                        var e = r.global,
                            n = {
                                display: !0,
                                animate: !0,
                                position: "chartArea",
                                angleLines: {
                                    display: !0,
                                    color: "rgba(0, 0, 0, 0.1)",
                                    lineWidth: 1
                                },
                                gridLines: {
                                    circular: !1
                                },
                                ticks: {
                                    showLabelBackdrop: !0,
                                    backdropColor: "rgba(255,255,255,0.75)",
                                    backdropPaddingY: 2,
                                    backdropPaddingX: 2,
                                    callback: a.formatters.linear
                                },
                                pointLabels: {
                                    display: !0,
                                    fontSize: 10,
                                    callback: function(t) {
                                        return t
                                    }
                                }
                            };

                        function s(t) {
                            var e = t.options;
                            return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0
                        }

                        function l(t) {
                            var n = t.options.pointLabels,
                                r = i.valueOrDefault(n.fontSize, e.defaultFontSize),
                                o = i.valueOrDefault(n.fontStyle, e.defaultFontStyle),
                                a = i.valueOrDefault(n.fontFamily, e.defaultFontFamily);
                            return {
                                size: r,
                                style: o,
                                family: a,
                                font: i.fontString(r, o, a)
                            }
                        }

                        function u(t, e, n, r, i) {
                            return t === r || t === i ? {
                                start: e - n / 2,
                                end: e + n / 2
                            } : t < r || t > i ? {
                                start: e - n - 5,
                                end: e
                            } : {
                                start: e,
                                end: e + n + 5
                            }
                        }

                        function c(t) {
                            return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
                        }

                        function d(t, e, n, r) {
                            if (i.isArray(e))
                                for (var o = n.y, a = 1.5 * r, s = 0; s < e.length; ++s) t.fillText(e[s], n.x, o), o += a;
                            else t.fillText(e, n.x, n.y)
                        }

                        function f(t, e, n) {
                            90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || t < 90) && (n.y -= e.h)
                        }

                        function h(t) {
                            return i.isNumber(t) ? t : 0
                        }
                        var p = t.LinearScaleBase.extend({
                            setDimensions: function() {
                                var t = this,
                                    n = t.options,
                                    r = n.ticks;
                                t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
                                var o = i.min([t.height, t.width]),
                                    a = i.valueOrDefault(r.fontSize, e.defaultFontSize);
                                t.drawingArea = n.display ? o / 2 - (a / 2 + r.backdropPaddingY) : o / 2
                            },
                            determineDataLimits: function() {
                                var t = this,
                                    e = t.chart,
                                    n = Number.POSITIVE_INFINITY,
                                    r = Number.NEGATIVE_INFINITY;
                                i.each(e.data.datasets, (function(o, a) {
                                    if (e.isDatasetVisible(a)) {
                                        var s = e.getDatasetMeta(a);
                                        i.each(o.data, (function(e, i) {
                                            var o = +t.getRightValue(e);
                                            isNaN(o) || s.data[i].hidden || (n = Math.min(o, n), r = Math.max(o, r))
                                        }))
                                    }
                                })), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = r === Number.NEGATIVE_INFINITY ? 0 : r, t.handleTickRangeOptions()
                            },
                            getTickLimit: function() {
                                var t = this.options.ticks,
                                    n = i.valueOrDefault(t.fontSize, e.defaultFontSize);
                                return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * n)))
                            },
                            convertTicksToLabels: function() {
                                var e = this;
                                t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e)
                            },
                            getLabelForIndex: function(t, e) {
                                return +this.getRightValue(this.chart.data.datasets[e].data[t])
                            },
                            fit: function() {
                                var t, e;
                                this.options.pointLabels.display ? function(t) {
                                    var e, n, r, o = l(t),
                                        a = Math.min(t.height / 2, t.width / 2),
                                        c = {
                                            r: t.width,
                                            l: 0,
                                            t: t.height,
                                            b: 0
                                        },
                                        d = {};
                                    t.ctx.font = o.font, t._pointLabelSizes = [];
                                    var f, h, p, g = s(t);
                                    for (e = 0; e < g; e++) {
                                        r = t.getPointPosition(e, a), f = t.ctx, h = o.size, p = t.pointLabels[e] || "", n = i.isArray(p) ? {
                                            w: i.longestText(f, f.font, p),
                                            h: p.length * h + 1.5 * (p.length - 1) * h
                                        } : {
                                            w: f.measureText(p).width,
                                            h: h
                                        }, t._pointLabelSizes[e] = n;
                                        var v = t.getIndexAngle(e),
                                            m = i.toDegrees(v) % 360,
                                            y = u(m, r.x, n.w, 0, 180),
                                            b = u(m, r.y, n.h, 90, 270);
                                        y.start < c.l && (c.l = y.start, d.l = v), y.end > c.r && (c.r = y.end, d.r = v), b.start < c.t && (c.t = b.start, d.t = v), b.end > c.b && (c.b = b.end, d.b = v)
                                    }
                                    t.setReductions(a, c, d)
                                }(this) : (t = this, e = Math.min(t.height / 2, t.width / 2), t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0))
                            },
                            setReductions: function(t, e, n) {
                                var r = e.l / Math.sin(n.l),
                                    i = Math.max(e.r - this.width, 0) / Math.sin(n.r),
                                    o = -e.t / Math.cos(n.t),
                                    a = -Math.max(e.b - this.height, 0) / Math.cos(n.b);
                                r = h(r), i = h(i), o = h(o), a = h(a), this.drawingArea = Math.min(Math.round(t - (r + i) / 2), Math.round(t - (o + a) / 2)), this.setCenterPoint(r, i, o, a)
                            },
                            setCenterPoint: function(t, e, n, r) {
                                var i = this,
                                    o = i.width - e - i.drawingArea,
                                    a = t + i.drawingArea,
                                    s = n + i.drawingArea,
                                    l = i.height - r - i.drawingArea;
                                i.xCenter = Math.round((a + o) / 2 + i.left), i.yCenter = Math.round((s + l) / 2 + i.top)
                            },
                            getIndexAngle: function(t) {
                                return t * (2 * Math.PI / s(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
                            },
                            getDistanceFromCenterForValue: function(t) {
                                var e = this;
                                if (null === t) return 0;
                                var n = e.drawingArea / (e.max - e.min);
                                return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n
                            },
                            getPointPosition: function(t, e) {
                                var n = this.getIndexAngle(t) - Math.PI / 2;
                                return {
                                    x: Math.round(Math.cos(n) * e) + this.xCenter,
                                    y: Math.round(Math.sin(n) * e) + this.yCenter
                                }
                            },
                            getPointPositionForValue: function(t, e) {
                                return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                            },
                            getBasePosition: function() {
                                var t = this.min,
                                    e = this.max;
                                return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0)
                            },
                            draw: function() {
                                var t = this,
                                    n = t.options,
                                    r = n.gridLines,
                                    o = n.ticks,
                                    a = i.valueOrDefault;
                                if (n.display) {
                                    var u = t.ctx,
                                        h = this.getIndexAngle(0),
                                        p = a(o.fontSize, e.defaultFontSize),
                                        g = a(o.fontStyle, e.defaultFontStyle),
                                        v = a(o.fontFamily, e.defaultFontFamily),
                                        m = i.fontString(p, g, v);
                                    i.each(t.ticks, (function(n, l) {
                                        if (l > 0 || o.reverse) {
                                            var c = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]);
                                            if (r.display && 0 !== l && function(t, e, n, r) {
                                                    var o = t.ctx;
                                                    if (o.strokeStyle = i.valueAtIndexOrDefault(e.color, r - 1), o.lineWidth = i.valueAtIndexOrDefault(e.lineWidth, r - 1), t.options.gridLines.circular) o.beginPath(), o.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI), o.closePath(), o.stroke();
                                                    else {
                                                        var a = s(t);
                                                        if (0 === a) return;
                                                        o.beginPath();
                                                        var l = t.getPointPosition(0, n);
                                                        o.moveTo(l.x, l.y);
                                                        for (var u = 1; u < a; u++) l = t.getPointPosition(u, n), o.lineTo(l.x, l.y);
                                                        o.closePath(), o.stroke()
                                                    }
                                                }(t, r, c, l), o.display) {
                                                var d = a(o.fontColor, e.defaultFontColor);
                                                if (u.font = m, u.save(), u.translate(t.xCenter, t.yCenter), u.rotate(h), o.showLabelBackdrop) {
                                                    var f = u.measureText(n).width;
                                                    u.fillStyle = o.backdropColor, u.fillRect(-f / 2 - o.backdropPaddingX, -c - p / 2 - o.backdropPaddingY, f + 2 * o.backdropPaddingX, p + 2 * o.backdropPaddingY)
                                                }
                                                u.textAlign = "center", u.textBaseline = "middle", u.fillStyle = d, u.fillText(n, 0, -c), u.restore()
                                            }
                                        }
                                    })), (n.angleLines.display || n.pointLabels.display) && function(t) {
                                        var n = t.ctx,
                                            r = t.options,
                                            o = r.angleLines,
                                            a = r.pointLabels;
                                        n.lineWidth = o.lineWidth, n.strokeStyle = o.color;
                                        var u = t.getDistanceFromCenterForValue(r.ticks.reverse ? t.min : t.max),
                                            h = l(t);
                                        n.textBaseline = "top";
                                        for (var p = s(t) - 1; p >= 0; p--) {
                                            if (o.display) {
                                                var g = t.getPointPosition(p, u);
                                                n.beginPath(), n.moveTo(t.xCenter, t.yCenter), n.lineTo(g.x, g.y), n.stroke(), n.closePath()
                                            }
                                            if (a.display) {
                                                var v = t.getPointPosition(p, u + 5),
                                                    m = i.valueAtIndexOrDefault(a.fontColor, p, e.defaultFontColor);
                                                n.font = h.font, n.fillStyle = m;
                                                var y = t.getIndexAngle(p),
                                                    b = i.toDegrees(y);
                                                n.textAlign = c(b), f(b, t._pointLabelSizes[p], v), d(n, t.pointLabels[p] || "", v, h.size)
                                            }
                                        }
                                    }(t)
                                }
                            }
                        });
                        o.registerScaleType("radialLinear", p, n)
                    }
                }, {
                    26: 26,
                    34: 34,
                    35: 35,
                    46: 46
                }],
                59: [function(t, e, n) {
                    var r = t(1);
                    r = "function" == typeof r ? r : window.moment;
                    var i = t(26),
                        o = t(46),
                        a = t(33),
                        s = t(34),
                        l = Number.MIN_SAFE_INTEGER || -9007199254740991,
                        u = Number.MAX_SAFE_INTEGER || 9007199254740991,
                        c = {
                            millisecond: {
                                common: !0,
                                size: 1,
                                steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
                            },
                            second: {
                                common: !0,
                                size: 1e3,
                                steps: [1, 2, 5, 10, 15, 30]
                            },
                            minute: {
                                common: !0,
                                size: 6e4,
                                steps: [1, 2, 5, 10, 15, 30]
                            },
                            hour: {
                                common: !0,
                                size: 36e5,
                                steps: [1, 2, 3, 6, 12]
                            },
                            day: {
                                common: !0,
                                size: 864e5,
                                steps: [1, 2, 5]
                            },
                            week: {
                                common: !1,
                                size: 6048e5,
                                steps: [1, 2, 3, 4]
                            },
                            month: {
                                common: !0,
                                size: 2628e6,
                                steps: [1, 2, 3]
                            },
                            quarter: {
                                common: !1,
                                size: 7884e6,
                                steps: [1, 2, 3, 4]
                            },
                            year: {
                                common: !0,
                                size: 3154e7
                            }
                        },
                        d = Object.keys(c);

                    function f(t, e) {
                        return t - e
                    }

                    function h(t) {
                        var e, n, r, i = {},
                            o = [];
                        for (e = 0, n = t.length; e < n; ++e) i[r = t[e]] || (i[r] = !0, o.push(r));
                        return o
                    }

                    function p(t, e, n, r) {
                        var i = function(t, e, n) {
                                for (var r, i, o, a = 0, s = t.length - 1; a >= 0 && a <= s;) {
                                    if (i = t[(r = a + s >> 1) - 1] || null, o = t[r], !i) return {
                                        lo: null,
                                        hi: o
                                    };
                                    if (o[e] < n) a = r + 1;
                                    else {
                                        if (!(i[e] > n)) return {
                                            lo: i,
                                            hi: o
                                        };
                                        s = r - 1
                                    }
                                }
                                return {
                                    lo: o,
                                    hi: null
                                }
                            }(t, e, n),
                            o = i.lo ? i.hi ? i.lo : t[t.length - 2] : t[0],
                            a = i.lo ? i.hi ? i.hi : t[t.length - 1] : t[1],
                            s = a[e] - o[e],
                            l = s ? (n - o[e]) / s : 0,
                            u = (a[r] - o[r]) * l;
                        return o[r] + u
                    }

                    function g(t, e) {
                        var n = e.parser,
                            i = e.parser || e.format;
                        return "function" == typeof n ? n(t) : "string" == typeof t && "string" == typeof i ? r(t, i) : (t instanceof r || (t = r(t)), t.isValid() ? t : "function" == typeof i ? i(t) : t)
                    }

                    function v(t, e) {
                        if (o.isNullOrUndef(t)) return null;
                        var n = e.options.time,
                            r = g(e.getRightValue(t), n);
                        return r.isValid() ? (n.round && r.startOf(n.round), r.valueOf()) : null
                    }

                    function m(t) {
                        for (var e = d.indexOf(t) + 1, n = d.length; e < n; ++e)
                            if (c[d[e]].common) return d[e]
                    }

                    function y(t, e, n, i) {
                        var a, s = i.time,
                            l = s.unit || function(t, e, n, r) {
                                var i, o, a, s = d.length;
                                for (i = d.indexOf(t); i < s - 1; ++i)
                                    if (a = (o = c[d[i]]).steps ? o.steps[o.steps.length - 1] : u, o.common && Math.ceil((n - e) / (a * o.size)) <= r) return d[i];
                                return d[s - 1]
                            }(s.minUnit, t, e, n),
                            f = m(l),
                            h = o.valueOrDefault(s.stepSize, s.unitStepSize),
                            p = "week" === l && s.isoWeekday,
                            g = i.ticks.major.enabled,
                            v = c[l],
                            y = r(t),
                            b = r(e),
                            x = [];
                        for (h || (h = function(t, e, n, r) {
                                var i, o, a, s = e - t,
                                    l = c[n],
                                    u = l.size,
                                    d = l.steps;
                                if (!d) return Math.ceil(s / (r * u));
                                for (i = 0, o = d.length; i < o && (a = d[i], !(Math.ceil(s / (u * a)) <= r)); ++i);
                                return a
                            }(t, e, l, n)), p && (y = y.isoWeekday(p), b = b.isoWeekday(p)), y = y.startOf(p ? "day" : l), (b = b.startOf(p ? "day" : l)) < e && b.add(1, l), a = r(y), g && f && !p && !s.round && (a.startOf(f), a.add(~~((y - a) / (v.size * h)) * h, l)); a < b; a.add(h, l)) x.push(+a);
                        return x.push(+a), x
                    }
                    e.exports = function() {
                        var t = a.extend({
                            initialize: function() {
                                if (!r) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                                this.mergeTicksOptions(), a.prototype.initialize.call(this)
                            },
                            update: function() {
                                var t = this,
                                    e = t.options;
                                return e.time && e.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), a.prototype.update.apply(t, arguments)
                            },
                            getRightValue: function(t) {
                                return t && void 0 !== t.t && (t = t.t), a.prototype.getRightValue.call(this, t)
                            },
                            determineDataLimits: function() {
                                var t, e, n, i, a, s, c = this,
                                    d = c.chart,
                                    p = c.options.time,
                                    g = p.unit || "day",
                                    m = u,
                                    y = l,
                                    b = [],
                                    x = [],
                                    w = [];
                                for (t = 0, n = d.data.labels.length; t < n; ++t) w.push(v(d.data.labels[t], c));
                                for (t = 0, n = (d.data.datasets || []).length; t < n; ++t)
                                    if (d.isDatasetVisible(t))
                                        if (a = d.data.datasets[t].data, o.isObject(a[0]))
                                            for (x[t] = [], e = 0, i = a.length; e < i; ++e) s = v(a[e], c), b.push(s), x[t][e] = s;
                                        else b.push.apply(b, w), x[t] = w.slice(0);
                                else x[t] = [];
                                w.length && (w = h(w).sort(f), m = Math.min(m, w[0]), y = Math.max(y, w[w.length - 1])), b.length && (b = h(b).sort(f), m = Math.min(m, b[0]), y = Math.max(y, b[b.length - 1])), m = v(p.min, c) || m, y = v(p.max, c) || y, m = m === u ? +r().startOf(g) : m, y = y === l ? +r().endOf(g) + 1 : y, c.min = Math.min(m, y), c.max = Math.max(m + 1, y), c._horizontal = c.isHorizontal(), c._table = [], c._timestamps = {
                                    data: b,
                                    datasets: x,
                                    labels: w
                                }
                            },
                            buildTicks: function() {
                                var t, e, n, i = this,
                                    o = i.min,
                                    a = i.max,
                                    s = i.options,
                                    l = s.time,
                                    u = [],
                                    f = [];
                                switch (s.ticks.source) {
                                    case "data":
                                        u = i._timestamps.data;
                                        break;
                                    case "labels":
                                        u = i._timestamps.labels;
                                        break;
                                    case "auto":
                                    default:
                                        u = y(o, a, i.getLabelCapacity(o), s)
                                }
                                for ("ticks" === s.bounds && u.length && (o = u[0], a = u[u.length - 1]), o = v(l.min, i) || o, a = v(l.max, i) || a, t = 0, e = u.length; t < e; ++t)(n = u[t]) >= o && n <= a && f.push(n);
                                return i.min = o, i.max = a, i._unit = l.unit || function(t, e, n, i) {
                                        var o, a, s = r.duration(r(i).diff(r(n)));
                                        for (o = d.length - 1; o >= d.indexOf(e); o--)
                                            if (a = d[o], c[a].common && s.as(a) >= t.length) return a;
                                        return d[e ? d.indexOf(e) : 0]
                                    }(f, l.minUnit, i.min, i.max), i._majorUnit = m(i._unit), i._table = function(t, e, n, r) {
                                        if ("linear" === r || !t.length) return [{
                                            time: e,
                                            pos: 0
                                        }, {
                                            time: n,
                                            pos: 1
                                        }];
                                        var i, o, a, s, l, u = [],
                                            c = [e];
                                        for (i = 0, o = t.length; i < o; ++i)(s = t[i]) > e && s < n && c.push(s);
                                        for (c.push(n), i = 0, o = c.length; i < o; ++i) l = c[i + 1], a = c[i - 1], s = c[i], void 0 !== a && void 0 !== l && Math.round((l + a) / 2) === s || u.push({
                                            time: s,
                                            pos: i / (o - 1)
                                        });
                                        return u
                                    }(i._timestamps.data, o, a, s.distribution), i._offsets = function(t, e, n, r, i) {
                                        var o, a, s = 0,
                                            l = 0;
                                        return i.offset && e.length && (i.time.min || (o = e.length > 1 ? e[1] : r, a = e[0], s = (p(t, "time", o, "pos") - p(t, "time", a, "pos")) / 2), i.time.max || (o = e[e.length - 1], a = e.length > 1 ? e[e.length - 2] : n, l = (p(t, "time", o, "pos") - p(t, "time", a, "pos")) / 2)), {
                                            left: s,
                                            right: l
                                        }
                                    }(i._table, f, o, a, s), i._labelFormat = function(t, e) {
                                        var n, r, i, o = t.length;
                                        for (n = 0; n < o; n++) {
                                            if (0 !== (r = g(t[n], e)).millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
                                            0 === r.second() && 0 === r.minute() && 0 === r.hour() || (i = !0)
                                        }
                                        return i ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY"
                                    }(i._timestamps.data, l),
                                    function(t, e) {
                                        var n, i, o, a, s = [];
                                        for (n = 0, i = t.length; n < i; ++n) o = t[n], a = !!e && o === +r(o).startOf(e), s.push({
                                            value: o,
                                            major: a
                                        });
                                        return s
                                    }(f, i._majorUnit)
                            },
                            getLabelForIndex: function(t, e) {
                                var n = this.chart.data,
                                    r = this.options.time,
                                    i = n.labels && t < n.labels.length ? n.labels[t] : "",
                                    a = n.datasets[e].data[t];
                                return o.isObject(a) && (i = this.getRightValue(a)), r.tooltipFormat ? g(i, r).format(r.tooltipFormat) : "string" == typeof i ? i : g(i, r).format(this._labelFormat)
                            },
                            tickFormatFunction: function(t, e, n, r) {
                                var i = this.options,
                                    a = t.valueOf(),
                                    s = i.time.displayFormats,
                                    l = s[this._unit],
                                    u = this._majorUnit,
                                    c = s[u],
                                    d = t.clone().startOf(u).valueOf(),
                                    f = i.ticks.major,
                                    h = f.enabled && u && c && a === d,
                                    p = t.format(r || (h ? c : l)),
                                    g = h ? f : i.ticks.minor,
                                    v = o.valueOrDefault(g.callback, g.userCallback);
                                return v ? v(p, e, n) : p
                            },
                            convertTicksToLabels: function(t) {
                                var e, n, i = [];
                                for (e = 0, n = t.length; e < n; ++e) i.push(this.tickFormatFunction(r(t[e].value), e, t));
                                return i
                            },
                            getPixelForOffset: function(t) {
                                var e = this,
                                    n = e._horizontal ? e.width : e.height,
                                    r = e._horizontal ? e.left : e.top,
                                    i = p(e._table, "time", t, "pos");
                                return r + n * (e._offsets.left + i) / (e._offsets.left + 1 + e._offsets.right)
                            },
                            getPixelForValue: function(t, e, n) {
                                var r = null;
                                if (void 0 !== e && void 0 !== n && (r = this._timestamps.datasets[n][e]), null === r && (r = v(t, this)), null !== r) return this.getPixelForOffset(r)
                            },
                            getPixelForTick: function(t) {
                                var e = this.getTicks();
                                return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null
                            },
                            getValueForPixel: function(t) {
                                var e = this,
                                    n = e._horizontal ? e.width : e.height,
                                    i = e._horizontal ? e.left : e.top,
                                    o = (n ? (t - i) / n : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
                                    a = p(e._table, "pos", o, "time");
                                return r(a)
                            },
                            getLabelWidth: function(t) {
                                var e = this.options.ticks,
                                    n = this.ctx.measureText(t).width,
                                    r = o.toRadians(e.maxRotation),
                                    a = Math.cos(r),
                                    s = Math.sin(r);
                                return n * a + o.valueOrDefault(e.fontSize, i.global.defaultFontSize) * s
                            },
                            getLabelCapacity: function(t) {
                                var e = this,
                                    n = e.options.time.displayFormats.millisecond,
                                    i = e.tickFormatFunction(r(t), 0, [], n),
                                    o = e.getLabelWidth(i),
                                    a = e.isHorizontal() ? e.width : e.height,
                                    s = Math.floor(a / o);
                                return s > 0 ? s : 1
                            }
                        });
                        s.registerScaleType("time", t, {
                            position: "bottom",
                            distribution: "linear",
                            bounds: "data",
                            time: {
                                parser: !1,
                                format: !1,
                                unit: !1,
                                round: !1,
                                displayFormat: !1,
                                isoWeekday: !1,
                                minUnit: "millisecond",
                                displayFormats: {
                                    millisecond: "h:mm:ss.SSS a",
                                    second: "h:mm:ss a",
                                    minute: "h:mm a",
                                    hour: "hA",
                                    day: "MMM D",
                                    week: "ll",
                                    month: "MMM YYYY",
                                    quarter: "[Q]Q - YYYY",
                                    year: "YYYY"
                                }
                            },
                            ticks: {
                                autoSkip: !1,
                                source: "auto",
                                major: {
                                    enabled: !1
                                }
                            }
                        })
                    }
                }, {
                    1: 1,
                    26: 26,
                    33: 33,
                    34: 34,
                    46: 46
                }]
            }, {}, [7])(7)
        }))
    }).call(this, n(89)(t), n(57))
}, function(t, e, n) {
    var r = n(3),
        i = n(126),
        o = n(62);
    r({
        target: "Array",
        proto: !0
    }, {
        fill: i
    }), o("fill")
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(25).findIndex,
        o = n(62),
        a = !0;
    "findIndex" in [] && Array(1).findIndex((function() {
        a = !1
    })), r({
        target: "Array",
        proto: !0,
        forced: a
    }, {
        findIndex: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), o("findIndex")
}, function(t, e, n) {
    var r = n(3),
        i = Math.log,
        o = Math.LOG10E;
    r({
        target: "Math",
        stat: !0
    }, {
        log10: function(t) {
            return i(t) * o
        }
    })
}, function(t, e, n) {
    n(3)({
        target: "Math",
        stat: !0
    }, {
        sign: n(151)
    })
}, function(t, e) {
    t.exports = Math.sign || function(t) {
        return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
    }
}, function(t, e, n) {
    n(3)({
        target: "Number",
        stat: !0
    }, {
        EPSILON: Math.pow(2, -52)
    })
}, function(t, e, n) {
    n(3)({
        target: "Number",
        stat: !0
    }, {
        MAX_SAFE_INTEGER: 9007199254740991
    })
}, function(t, e, n) {
    n(3)({
        target: "Number",
        stat: !0
    }, {
        MIN_SAFE_INTEGER: -9007199254740991
    })
}, function(t, e, n) {
    var r = n(3),
        i = n(16),
        o = n(53);
    r({
        target: "Object",
        stat: !0,
        forced: n(1)((function() {
            o(1)
        }))
    }, {
        keys: function(t) {
            return o(i(t))
        }
    })
}, function(t, e) {
    ! function(t) {
        t("body").on("shown.bs.modal", ".modal", (function() {
            t(".modal-backdrop").length || ($modal_dialog = t(this).children(".modal-dialog"), $modal_dialog.hasClass("modal-side") && (t(this).addClass("modal-scrolling"), t("body").addClass("scrollable")), $modal_dialog.hasClass("modal-frame") && (t(this).addClass("modal-content-clickable"), t("body").addClass("scrollable")))
        })), t("body").on("hidden.bs.modal", ".modal", (function() {
            t("body").removeClass("scrollable")
        }))
    }(jQuery)
}, function(t, e) {
    jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(t, e, n, r, i) {
            return jQuery.easing[jQuery.easing.def](t, e, n, r, i)
        },
        easeInQuad: function(t, e, n, r, i) {
            return r * (e /= i) * e + n
        },
        easeOutQuad: function(t, e, n, r, i) {
            return -r * (e /= i) * (e - 2) + n
        },
        easeInOutQuad: function(t, e, n, r, i) {
            return (e /= i / 2) < 1 ? r / 2 * e * e + n : -r / 2 * (--e * (e - 2) - 1) + n
        },
        easeInCubic: function(t, e, n, r, i) {
            return r * (e /= i) * e * e + n
        },
        easeOutCubic: function(t, e, n, r, i) {
            return r * ((e = e / i - 1) * e * e + 1) + n
        },
        easeInOutCubic: function(t, e, n, r, i) {
            return (e /= i / 2) < 1 ? r / 2 * e * e * e + n : r / 2 * ((e -= 2) * e * e + 2) + n
        },
        easeInQuart: function(t, e, n, r, i) {
            return r * (e /= i) * e * e * e + n
        },
        easeOutQuart: function(t, e, n, r, i) {
            return -r * ((e = e / i - 1) * e * e * e - 1) + n
        },
        easeInOutQuart: function(t, e, n, r, i) {
            return (e /= i / 2) < 1 ? r / 2 * e * e * e * e + n : -r / 2 * ((e -= 2) * e * e * e - 2) + n
        },
        easeInQuint: function(t, e, n, r, i) {
            return r * (e /= i) * e * e * e * e + n
        },
        easeOutQuint: function(t, e, n, r, i) {
            return r * ((e = e / i - 1) * e * e * e * e + 1) + n
        },
        easeInOutQuint: function(t, e, n, r, i) {
            return (e /= i / 2) < 1 ? r / 2 * e * e * e * e * e + n : r / 2 * ((e -= 2) * e * e * e * e + 2) + n
        },
        easeInSine: function(t, e, n, r, i) {
            return -r * Math.cos(e / i * (Math.PI / 2)) + r + n
        },
        easeOutSine: function(t, e, n, r, i) {
            return r * Math.sin(e / i * (Math.PI / 2)) + n
        },
        easeInOutSine: function(t, e, n, r, i) {
            return -r / 2 * (Math.cos(Math.PI * e / i) - 1) + n
        },
        easeInExpo: function(t, e, n, r, i) {
            return 0 == e ? n : r * Math.pow(2, 10 * (e / i - 1)) + n
        },
        easeOutExpo: function(t, e, n, r, i) {
            return e == i ? n + r : r * (1 - Math.pow(2, -10 * e / i)) + n
        },
        easeInOutExpo: function(t, e, n, r, i) {
            return 0 == e ? n : e == i ? n + r : (e /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (e - 1)) + n : r / 2 * (2 - Math.pow(2, -10 * --e)) + n
        },
        easeInCirc: function(t, e, n, r, i) {
            return -r * (Math.sqrt(1 - (e /= i) * e) - 1) + n
        },
        easeOutCirc: function(t, e, n, r, i) {
            return r * Math.sqrt(1 - (e = e / i - 1) * e) + n
        },
        easeInOutCirc: function(t, e, n, r, i) {
            return (e /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - e * e) - 1) + n : r / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
        },
        easeInElastic: function(t, e, n, r, i) {
            var o = 1.70158,
                a = 0,
                s = r;
            if (0 == e) return n;
            if (1 == (e /= i)) return n + r;
            if (a || (a = .3 * i), s < Math.abs(r)) {
                s = r;
                o = a / 4
            } else o = a / (2 * Math.PI) * Math.asin(r / s);
            return -s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * i - o) * (2 * Math.PI) / a) + n
        },
        easeOutElastic: function(t, e, n, r, i) {
            var o = 1.70158,
                a = 0,
                s = r;
            if (0 == e) return n;
            if (1 == (e /= i)) return n + r;
            if (a || (a = .3 * i), s < Math.abs(r)) {
                s = r;
                o = a / 4
            } else o = a / (2 * Math.PI) * Math.asin(r / s);
            return s * Math.pow(2, -10 * e) * Math.sin((e * i - o) * (2 * Math.PI) / a) + r + n
        },
        easeInOutElastic: function(t, e, n, r, i) {
            var o = 1.70158,
                a = 0,
                s = r;
            if (0 == e) return n;
            if (2 == (e /= i / 2)) return n + r;
            if (a || (a = i * (.3 * 1.5)), s < Math.abs(r)) {
                s = r;
                o = a / 4
            } else o = a / (2 * Math.PI) * Math.asin(r / s);
            return e < 1 ? s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * i - o) * (2 * Math.PI) / a) * -.5 + n : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * i - o) * (2 * Math.PI) / a) * .5 + r + n
        },
        easeInBack: function(t, e, n, r, i, o) {
            return null == o && (o = 1.70158), r * (e /= i) * e * ((o + 1) * e - o) + n
        },
        easeOutBack: function(t, e, n, r, i, o) {
            return null == o && (o = 1.70158), r * ((e = e / i - 1) * e * ((o + 1) * e + o) + 1) + n
        },
        easeInOutBack: function(t, e, n, r, i, o) {
            return null == o && (o = 1.70158), (e /= i / 2) < 1 ? r / 2 * (e * e * ((1 + (o *= 1.525)) * e - o)) + n : r / 2 * ((e -= 2) * e * ((1 + (o *= 1.525)) * e + o) + 2) + n
        },
        easeInBounce: function(t, e, n, r, i) {
            return r - jQuery.easing.easeOutBounce(t, i - e, 0, r, i) + n
        },
        easeOutBounce: function(t, e, n, r, i) {
            return (e /= i) < 1 / 2.75 ? r * (7.5625 * e * e) + n : e < 2 / 2.75 ? r * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : e < 2.5 / 2.75 ? r * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : r * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
        },
        easeInOutBounce: function(t, e, n, r, i) {
            return e < i / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, r, i) + n : .5 * jQuery.easing.easeOutBounce(t, 2 * e - i, 0, r, i) + .5 * r + n
        }
    })
}, function(t, e, n) {
    "use strict";
    (function(t) {
        var e;
        n(78), n(79), n(80), n(104), n(55), n(99), n(120), n(90), n(159), n(113), n(81), n(97), n(121), n(130), n(83), n(118), n(84), n(109), n(98), n(110), n(161), n(169), n(171), n(172), n(173), n(174), n(175), n(176), n(177), n(178), n(179), n(180), n(181), n(182), n(183), n(184), n(185), n(186), n(187), n(188), n(189), n(190), n(191), n(192), n(86);

        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        /*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
        /*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
        /*! Note that this has been modified by Materialize to confirm that Velocity is not already being imported. */
        jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function(t) {
            function e(t) {
                var e = t.length,
                    r = n.type(t);
                return "function" !== r && !n.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === r || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
            }
            if (!t.jQuery) {
                var n = function t(e, n) {
                    return new t.fn.init(e, n)
                };
                n.isWindow = function(t) {
                    return null != t && t == t.window
                }, n.type = function(t) {
                    return null == t ? t + "" : "object" == r(t) || "function" == typeof t ? o[s.call(t)] || "object" : r(t)
                }, n.isArray = Array.isArray || function(t) {
                    return "array" === n.type(t)
                }, n.isPlainObject = function(t) {
                    var e;
                    if (!t || "object" !== n.type(t) || t.nodeType || n.isWindow(t)) return !1;
                    try {
                        if (t.constructor && !a.call(t, "constructor") && !a.call(t.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (t) {
                        return !1
                    }
                    for (e in t);
                    return void 0 === e || a.call(t, e)
                }, n.each = function(t, n, r) {
                    var i = 0,
                        o = t.length,
                        a = e(t);
                    if (r) {
                        if (a)
                            for (; o > i && !1 !== n.apply(t[i], r); i++);
                        else
                            for (i in t)
                                if (!1 === n.apply(t[i], r)) break
                    } else if (a)
                        for (; o > i && !1 !== n.call(t[i], i, t[i]); i++);
                    else
                        for (i in t)
                            if (!1 === n.call(t[i], i, t[i])) break;
                    return t
                }, n.data = function(t, e, r) {
                    if (void 0 === r) {
                        var o = (a = t[n.expando]) && i[a];
                        if (void 0 === e) return o;
                        if (o && e in o) return o[e]
                    } else if (void 0 !== e) {
                        var a = t[n.expando] || (t[n.expando] = ++n.uuid);
                        return i[a] = i[a] || {}, i[a][e] = r, r
                    }
                }, n.removeData = function(t, e) {
                    var r = t[n.expando],
                        o = r && i[r];
                    o && n.each(e, (function(t, e) {
                        delete o[e]
                    }))
                }, n.extend = function() {
                    var t, e, i, o, a, s, l = arguments[0] || {},
                        u = 1,
                        c = arguments.length,
                        d = !1;
                    for ("boolean" == typeof l && (d = l, l = arguments[u] || {}, u++), "object" != r(l) && "function" !== n.type(l) && (l = {}), u === c && (l = this, u--); c > u; u++)
                        if (null != (a = arguments[u]))
                            for (o in a) t = l[o], l !== (i = a[o]) && (d && i && (n.isPlainObject(i) || (e = n.isArray(i))) ? (e ? (e = !1, s = t && n.isArray(t) ? t : []) : s = t && n.isPlainObject(t) ? t : {}, l[o] = n.extend(d, s, i)) : void 0 !== i && (l[o] = i));
                    return l
                }, n.queue = function(t, r, i) {
                    if (t) {
                        r = (r || "fx") + "queue";
                        var o = n.data(t, r);
                        return i ? (!o || n.isArray(i) ? o = n.data(t, r, function(t, n) {
                            var r = n || [];
                            return null != t && (e(Object(t)) ? function(t, e) {
                                for (var n = +e.length, r = 0, i = t.length; n > r;) t[i++] = e[r++];
                                if (n != n)
                                    for (; void 0 !== e[r];) t[i++] = e[r++];
                                t.length = i
                            }(r, "string" == typeof t ? [t] : t) : [].push.call(r, t)), r
                        }(i)) : o.push(i), o) : o || []
                    }
                }, n.dequeue = function(t, e) {
                    n.each(t.nodeType ? [t] : t, (function(t, r) {
                        e = e || "fx";
                        var i = n.queue(r, e),
                            o = i.shift();
                        "inprogress" === o && (o = i.shift()), o && ("fx" === e && i.unshift("inprogress"), o.call(r, (function() {
                            n.dequeue(r, e)
                        })))
                    }))
                }, n.fn = n.prototype = {
                    init: function(t) {
                        if (t.nodeType) return this[0] = t, this;
                        throw new Error("Not a DOM node.")
                    },
                    offset: function() {
                        var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                            top: 0,
                            left: 0
                        };
                        return {
                            top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                            left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                        }
                    },
                    position: function() {
                        function t() {
                            for (var t = this.offsetParent || document; t && "html" === !t.nodeType.toLowerCase && "static" === t.style.position;) t = t.offsetParent;
                            return t || document
                        }
                        var e = this[0],
                            t = t.apply(e),
                            r = this.offset(),
                            i = /^(?:body|html)$/i.test(t.nodeName) ? {
                                top: 0,
                                left: 0
                            } : n(t).offset();
                        return r.top -= parseFloat(e.style.marginTop) || 0, r.left -= parseFloat(e.style.marginLeft) || 0, t.style && (i.top += parseFloat(t.style.borderTopWidth) || 0, i.left += parseFloat(t.style.borderLeftWidth) || 0), {
                            top: r.top - i.top,
                            left: r.left - i.left
                        }
                    }
                };
                var i = {};
                n.expando = "velocity" + (new Date).getTime(), n.uuid = 0;
                for (var o = {}, a = o.hasOwnProperty, s = o.toString, l = "Boolean Number String Function Array Date RegExp Object Error".split(" "), u = 0; u < l.length; u++) o["[object " + l[u] + "]"] = l[u].toLowerCase();
                n.fn.init.prototype = n.fn, t.Velocity = {
                    Utilities: n
                }
            }
        }(window), e = function() {
            return function(t, e, n, i) {
                function o(t) {
                    return g.isWrapped(t) ? t = [].slice.call(t) : g.isNode(t) && (t = [t]), t
                }

                function a(t) {
                    var e = f.data(t, "velocity");
                    return null === e ? i : e
                }

                function s(t) {
                    return function(e) {
                        return Math.round(e * t) * (1 / t)
                    }
                }

                function l(t, n, r, i) {
                    function o(t, e) {
                        return 1 - 3 * e + 3 * t
                    }

                    function a(t, e) {
                        return 3 * e - 6 * t
                    }

                    function s(t) {
                        return 3 * t
                    }

                    function l(t, e, n) {
                        return ((o(e, n) * t + a(e, n)) * t + s(e)) * t
                    }

                    function u(t, e, n) {
                        return 3 * o(e, n) * t * t + 2 * a(e, n) * t + s(e)
                    }

                    function c(e, n) {
                        for (var i = 0; h > i; ++i) {
                            var o = u(n, t, r);
                            if (0 === o) return n;
                            n -= (l(n, t, r) - e) / o
                        }
                        return n
                    }

                    function d(e, n, i) {
                        var o, a, s = 0;
                        do {
                            (o = l(a = n + (i - n) / 2, t, r) - e) > 0 ? i = a : n = a
                        } while (Math.abs(o) > g && ++s < v);
                        return a
                    }

                    function f() {
                        S = !0, (t != n || r != i) && function() {
                            for (var e = 0; m > e; ++e) w[e] = l(e * y, t, r)
                        }()
                    }
                    var h = 4,
                        p = .001,
                        g = 1e-7,
                        v = 10,
                        m = 11,
                        y = 1 / (m - 1),
                        b = "Float32Array" in e;
                    if (4 !== arguments.length) return !1;
                    for (var x = 0; 4 > x; ++x)
                        if ("number" != typeof arguments[x] || isNaN(arguments[x]) || !isFinite(arguments[x])) return !1;
                    t = Math.min(t, 1), r = Math.min(r, 1), t = Math.max(t, 0), r = Math.max(r, 0);
                    var w = b ? new Float32Array(m) : new Array(m),
                        S = !1,
                        k = function(e) {
                            return S || f(), t === n && r === i ? e : 0 === e ? 0 : 1 === e ? 1 : l(function(e) {
                                for (var n = 0, i = 1, o = m - 1; i != o && w[i] <= e; ++i) n += y;
                                var a = n + (e - w[--i]) / (w[i + 1] - w[i]) * y,
                                    s = u(a, t, r);
                                return s >= p ? c(e, a) : 0 == s ? a : d(e, n, n + y)
                            }(e), n, i)
                        };
                    k.getControlPoints = function() {
                        return [{
                            x: t,
                            y: n
                        }, {
                            x: r,
                            y: i
                        }]
                    };
                    var C = "generateBezier(" + [t, n, r, i] + ")";
                    return k.toString = function() {
                        return C
                    }, k
                }

                function u(t, e) {
                    var n = t;
                    return g.isString(t) ? b.Easings[t] || (n = !1) : n = g.isArray(t) && 1 === t.length ? s.apply(null, t) : g.isArray(t) && 2 === t.length ? x.apply(null, t.concat([e])) : !(!g.isArray(t) || 4 !== t.length) && l.apply(null, t), !1 === n && (n = b.Easings[b.defaults.easing] ? b.defaults.easing : y), n
                }

                function c(t) {
                    if (t) {
                        var e = (new Date).getTime(),
                            n = b.State.calls.length;
                        n > 1e4 && (b.State.calls = function(t) {
                            for (var e = -1, n = t ? t.length : 0, r = []; ++e < n;) {
                                var i = t[e];
                                i && r.push(i)
                            }
                            return r
                        }(b.State.calls));
                        for (var r = 0; n > r; r++)
                            if (b.State.calls[r]) {
                                var o = b.State.calls[r],
                                    s = o[0],
                                    l = o[2],
                                    u = o[3],
                                    h = !!u,
                                    p = null;
                                u || (u = b.State.calls[r][3] = e - 16);
                                for (var v = Math.min((e - u) / l.duration, 1), m = 0, y = s.length; y > m; m++) {
                                    var x = s[m],
                                        S = x.element;
                                    if (a(S)) {
                                        var C = !1;
                                        for (var M in l.display !== i && null !== l.display && "none" !== l.display && ("flex" === l.display && f.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], (function(t, e) {
                                                w.setPropertyValue(S, "display", e)
                                            })), w.setPropertyValue(S, "display", l.display)), l.visibility !== i && "hidden" !== l.visibility && w.setPropertyValue(S, "visibility", l.visibility), x)
                                            if ("element" !== M) {
                                                var A, P = x[M],
                                                    T = g.isString(P.easing) ? b.Easings[P.easing] : P.easing;
                                                if (1 === v) A = P.endValue;
                                                else {
                                                    var I = P.endValue - P.startValue;
                                                    if (A = P.startValue + I * T(v, l, I), !h && A === P.currentValue) continue
                                                }
                                                if (P.currentValue = A, "tween" === M) p = A;
                                                else {
                                                    if (w.Hooks.registered[M]) {
                                                        var _ = w.Hooks.getRoot(M),
                                                            O = a(S).rootPropertyValueCache[_];
                                                        O && (P.rootPropertyValue = O)
                                                    }
                                                    var F = w.setPropertyValue(S, M, P.currentValue + (0 === parseFloat(A) ? "" : P.unitType), P.rootPropertyValue, P.scrollData);
                                                    w.Hooks.registered[M] && (a(S).rootPropertyValueCache[_] = w.Normalizations.registered[_] ? w.Normalizations.registered[_]("extract", null, F[1]) : F[1]), "transform" === F[0] && (C = !0)
                                                }
                                            } l.mobileHA && a(S).transformCache.translate3d === i && (a(S).transformCache.translate3d = "(0px, 0px, 0px)", C = !0), C && w.flushTransformCache(S)
                                    }
                                }
                                l.display !== i && "none" !== l.display && (b.State.calls[r][2].display = !1), l.visibility !== i && "hidden" !== l.visibility && (b.State.calls[r][2].visibility = !1), l.progress && l.progress.call(o[1], o[1], v, Math.max(0, u + l.duration - e), u, p), 1 === v && d(r)
                            }
                    }
                    b.State.isTicking && k(c)
                }

                function d(t, e) {
                    if (!b.State.calls[t]) return !1;
                    for (var n = b.State.calls[t][0], r = b.State.calls[t][1], o = b.State.calls[t][2], s = b.State.calls[t][4], l = !1, u = 0, c = n.length; c > u; u++) {
                        var d = n[u].element;
                        if (e || o.loop || ("none" === o.display && w.setPropertyValue(d, "display", o.display), "hidden" === o.visibility && w.setPropertyValue(d, "visibility", o.visibility)), !0 !== o.loop && (f.queue(d)[1] === i || !/\.velocityQueueEntryFlag/i.test(f.queue(d)[1])) && a(d)) {
                            a(d).isAnimating = !1, a(d).rootPropertyValueCache = {};
                            var h = !1;
                            f.each(w.Lists.transforms3D, (function(t, e) {
                                var n = /^scale/.test(e) ? 1 : 0,
                                    r = a(d).transformCache[e];
                                a(d).transformCache[e] !== i && new RegExp("^\\(" + n + "[^.]").test(r) && (h = !0, delete a(d).transformCache[e])
                            })), o.mobileHA && (h = !0, delete a(d).transformCache.translate3d), h && w.flushTransformCache(d), w.Values.removeClass(d, "velocity-animating")
                        }
                        if (!e && o.complete && !o.loop && u === c - 1) try {
                            o.complete.call(r, r)
                        } catch (t) {
                            setTimeout((function() {
                                throw t
                            }), 1)
                        }
                        s && !0 !== o.loop && s(r), a(d) && !0 === o.loop && !e && (f.each(a(d).tweensContainer, (function(t, e) {
                            /^rotate/.test(t) && 360 === parseFloat(e.endValue) && (e.endValue = 0, e.startValue = 360), /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100)
                        })), b(d, "reverse", {
                            loop: !0,
                            delay: o.delay
                        })), !1 !== o.queue && f.dequeue(d, o.queue)
                    }
                    b.State.calls[t] = !1;
                    for (var p = 0, g = b.State.calls.length; g > p; p++)
                        if (!1 !== b.State.calls[p]) {
                            l = !0;
                            break
                        }! 1 === l && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
                }
                var f, h = function() {
                        if (n.documentMode) return n.documentMode;
                        for (var t = 7; t > 4; t--) {
                            var e = n.createElement("div");
                            if (e.innerHTML = "\x3c!--[if IE " + t + "]><span></span><![endif]--\x3e", e.getElementsByTagName("span").length) return e = null, t
                        }
                        return i
                    }(),
                    p = function() {
                        var t = 0;
                        return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function(e) {
                            var n, r = (new Date).getTime();
                            return n = Math.max(0, 16 - (r - t)), t = r + n, setTimeout((function() {
                                e(r + n)
                            }), n)
                        }
                    }(),
                    g = {
                        isString: function(t) {
                            return "string" == typeof t
                        },
                        isArray: Array.isArray || function(t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        },
                        isFunction: function(t) {
                            return "[object Function]" === Object.prototype.toString.call(t)
                        },
                        isNode: function(t) {
                            return t && t.nodeType
                        },
                        isNodeList: function(t) {
                            return "object" == r(t) && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== i && (0 === t.length || "object" == r(t[0]) && t[0].nodeType > 0)
                        },
                        isWrapped: function(t) {
                            return t && (t.jquery || e.Zepto && e.Zepto.zepto.isZ(t))
                        },
                        isSVG: function(t) {
                            return e.SVGElement && t instanceof e.SVGElement
                        },
                        isEmptyObject: function(t) {
                            for (var e in t) return !1;
                            return !0
                        }
                    },
                    v = !1;
                if (t.fn && t.fn.jquery ? (f = t, v = !0) : f = e.Velocity.Utilities, 8 >= h && !v) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
                if (!(7 >= h)) {
                    var m = 400,
                        y = "swing",
                        b = {
                            State: {
                                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                                isAndroid: /Android/i.test(navigator.userAgent),
                                isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                                isChrome: e.chrome,
                                isFirefox: /Firefox/i.test(navigator.userAgent),
                                prefixElement: n.createElement("div"),
                                prefixMatches: {},
                                scrollAnchor: null,
                                scrollPropertyLeft: null,
                                scrollPropertyTop: null,
                                isTicking: !1,
                                calls: []
                            },
                            CSS: {},
                            Utilities: f,
                            Redirects: {},
                            Easings: {},
                            Promise: e.Promise,
                            defaults: {
                                queue: "",
                                duration: m,
                                easing: y,
                                begin: i,
                                complete: i,
                                progress: i,
                                display: i,
                                visibility: i,
                                loop: !1,
                                delay: !1,
                                mobileHA: !0,
                                _cacheValues: !0
                            },
                            init: function(t) {
                                f.data(t, "velocity", {
                                    isSVG: g.isSVG(t),
                                    isAnimating: !1,
                                    computedStyle: null,
                                    tweensContainer: null,
                                    rootPropertyValueCache: {},
                                    transformCache: {}
                                })
                            },
                            hook: null,
                            mock: !1,
                            version: {
                                major: 1,
                                minor: 2,
                                patch: 2
                            },
                            debug: !1
                        };
                    e.pageYOffset !== i ? (b.State.scrollAnchor = e, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
                    var x = function() {
                        function t(t) {
                            return -t.tension * t.x - t.friction * t.v
                        }

                        function e(e, n, r) {
                            var i = {
                                x: e.x + r.dx * n,
                                v: e.v + r.dv * n,
                                tension: e.tension,
                                friction: e.friction
                            };
                            return {
                                dx: i.v,
                                dv: t(i)
                            }
                        }

                        function n(n, r) {
                            var i = {
                                    dx: n.v,
                                    dv: t(n)
                                },
                                o = e(n, .5 * r, i),
                                a = e(n, .5 * r, o),
                                s = e(n, r, a),
                                l = 1 / 6 * (i.dx + 2 * (o.dx + a.dx) + s.dx),
                                u = 1 / 6 * (i.dv + 2 * (o.dv + a.dv) + s.dv);
                            return n.x = n.x + l * r, n.v = n.v + u * r, n
                        }
                        return function t(e, r, i) {
                            var o, a, s, l = {
                                    x: -1,
                                    v: 0,
                                    tension: null,
                                    friction: null
                                },
                                u = [0],
                                c = 0;
                            for (e = parseFloat(e) || 500, r = parseFloat(r) || 20, i = i || null, l.tension = e, l.friction = r, a = (o = null !== i) ? (c = t(e, r)) / i * .016 : .016; s = n(s || l, a), u.push(1 + s.x), c += 16, Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;);
                            return o ? function(t) {
                                return u[t * (u.length - 1) | 0]
                            } : c
                        }
                    }();
                    b.Easings = {
                        linear: function(t) {
                            return t
                        },
                        swing: function(t) {
                            return .5 - Math.cos(t * Math.PI) / 2
                        },
                        spring: function(t) {
                            return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
                        }
                    }, f.each([
                        ["ease", [.25, .1, .25, 1]],
                        ["ease-in", [.42, 0, 1, 1]],
                        ["ease-out", [0, 0, .58, 1]],
                        ["ease-in-out", [.42, 0, .58, 1]],
                        ["easeInSine", [.47, 0, .745, .715]],
                        ["easeOutSine", [.39, .575, .565, 1]],
                        ["easeInOutSine", [.445, .05, .55, .95]],
                        ["easeInQuad", [.55, .085, .68, .53]],
                        ["easeOutQuad", [.25, .46, .45, .94]],
                        ["easeInOutQuad", [.455, .03, .515, .955]],
                        ["easeInCubic", [.55, .055, .675, .19]],
                        ["easeOutCubic", [.215, .61, .355, 1]],
                        ["easeInOutCubic", [.645, .045, .355, 1]],
                        ["easeInQuart", [.895, .03, .685, .22]],
                        ["easeOutQuart", [.165, .84, .44, 1]],
                        ["easeInOutQuart", [.77, 0, .175, 1]],
                        ["easeInQuint", [.755, .05, .855, .06]],
                        ["easeOutQuint", [.23, 1, .32, 1]],
                        ["easeInOutQuint", [.86, 0, .07, 1]],
                        ["easeInExpo", [.95, .05, .795, .035]],
                        ["easeOutExpo", [.19, 1, .22, 1]],
                        ["easeInOutExpo", [1, 0, 0, 1]],
                        ["easeInCirc", [.6, .04, .98, .335]],
                        ["easeOutCirc", [.075, .82, .165, 1]],
                        ["easeInOutCirc", [.785, .135, .15, .86]]
                    ], (function(t, e) {
                        b.Easings[e[0]] = l.apply(null, e[1])
                    }));
                    var w = b.CSS = {
                        RegEx: {
                            isHex: /^#([A-f\d]{3}){1,2}$/i,
                            valueUnwrap: /^[A-z]+\((.*)\)$/i,
                            wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                            valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                        },
                        Lists: {
                            colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                            transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                            transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                        },
                        Hooks: {
                            templates: {
                                textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                                boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                                clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                                backgroundPosition: ["X Y", "0% 0%"],
                                transformOrigin: ["X Y Z", "50% 50% 0px"],
                                perspectiveOrigin: ["X Y", "50% 50%"]
                            },
                            registered: {},
                            register: function() {
                                for (var t = 0; t < w.Lists.colors.length; t++) {
                                    var e = "color" === w.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                                    w.Hooks.templates[w.Lists.colors[t]] = ["Red Green Blue Alpha", e]
                                }
                                var n, r, i;
                                if (h)
                                    for (n in w.Hooks.templates) {
                                        i = (r = w.Hooks.templates[n])[0].split(" ");
                                        var o = r[1].match(w.RegEx.valueSplit);
                                        "Color" === i[0] && (i.push(i.shift()), o.push(o.shift()), w.Hooks.templates[n] = [i.join(" "), o.join(" ")])
                                    }
                                for (n in w.Hooks.templates)
                                    for (var t in i = (r = w.Hooks.templates[n])[0].split(" ")) {
                                        var a = n + i[t],
                                            s = t;
                                        w.Hooks.registered[a] = [n, s]
                                    }
                            },
                            getRoot: function(t) {
                                var e = w.Hooks.registered[t];
                                return e ? e[0] : t
                            },
                            cleanRootPropertyValue: function(t, e) {
                                return w.RegEx.valueUnwrap.test(e) && (e = e.match(w.RegEx.valueUnwrap)[1]), w.Values.isCSSNullValue(e) && (e = w.Hooks.templates[t][1]), e
                            },
                            extractValue: function(t, e) {
                                var n = w.Hooks.registered[t];
                                if (n) {
                                    var r = n[0],
                                        i = n[1];
                                    return (e = w.Hooks.cleanRootPropertyValue(r, e)).toString().match(w.RegEx.valueSplit)[i]
                                }
                                return e
                            },
                            injectValue: function(t, e, n) {
                                var r = w.Hooks.registered[t];
                                if (r) {
                                    var i, o = r[0],
                                        a = r[1];
                                    return (i = (n = w.Hooks.cleanRootPropertyValue(o, n)).toString().match(w.RegEx.valueSplit))[a] = e, i.join(" ")
                                }
                                return n
                            }
                        },
                        Normalizations: {
                            registered: {
                                clip: function(t, e, n) {
                                    switch (t) {
                                        case "name":
                                            return "clip";
                                        case "extract":
                                            var r;
                                            return r = w.RegEx.wrappedValueAlreadyExtracted.test(n) ? n : (r = n.toString().match(w.RegEx.valueUnwrap)) ? r[1].replace(/,(\s+)?/g, " ") : n;
                                        case "inject":
                                            return "rect(" + n + ")"
                                    }
                                },
                                blur: function(t, e, n) {
                                    switch (t) {
                                        case "name":
                                            return b.State.isFirefox ? "filter" : "-webkit-filter";
                                        case "extract":
                                            var r = parseFloat(n);
                                            if (!r && 0 !== r) {
                                                var i = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                                r = i ? i[1] : 0
                                            }
                                            return r;
                                        case "inject":
                                            return parseFloat(n) ? "blur(" + n + ")" : "none"
                                    }
                                },
                                opacity: function(t, e, n) {
                                    if (8 >= h) switch (t) {
                                        case "name":
                                            return "filter";
                                        case "extract":
                                            var r = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                            return r ? r[1] / 100 : 1;
                                        case "inject":
                                            return e.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                                    } else switch (t) {
                                        case "name":
                                            return "opacity";
                                        case "extract":
                                        case "inject":
                                            return n
                                    }
                                }
                            },
                            register: function() {
                                9 >= h || b.State.isGingerbread || (w.Lists.transformsBase = w.Lists.transformsBase.concat(w.Lists.transforms3D));
                                for (var t = 0; t < w.Lists.transformsBase.length; t++) ! function() {
                                    var e = w.Lists.transformsBase[t];
                                    w.Normalizations.registered[e] = function(t, n, r) {
                                        switch (t) {
                                            case "name":
                                                return "transform";
                                            case "extract":
                                                return a(n) === i || a(n).transformCache[e] === i ? /^scale/i.test(e) ? 1 : 0 : a(n).transformCache[e].replace(/[()]/g, "");
                                            case "inject":
                                                var o = !1;
                                                switch (e.substr(0, e.length - 1)) {
                                                    case "translate":
                                                        o = !/(%|px|em|rem|vw|vh|\d)$/i.test(r);
                                                        break;
                                                    case "scal":
                                                    case "scale":
                                                        b.State.isAndroid && a(n).transformCache[e] === i && 1 > r && (r = 1), o = !/(\d)$/i.test(r);
                                                        break;
                                                    case "skew":
                                                        o = !/(deg|\d)$/i.test(r);
                                                        break;
                                                    case "rotate":
                                                        o = !/(deg|\d)$/i.test(r)
                                                }
                                                return o || (a(n).transformCache[e] = "(" + r + ")"), a(n).transformCache[e]
                                        }
                                    }
                                }();
                                for (t = 0; t < w.Lists.colors.length; t++) ! function() {
                                    var e = w.Lists.colors[t];
                                    w.Normalizations.registered[e] = function(t, n, r) {
                                        switch (t) {
                                            case "name":
                                                return e;
                                            case "extract":
                                                var o;
                                                if (w.RegEx.wrappedValueAlreadyExtracted.test(r)) o = r;
                                                else {
                                                    var a, s = {
                                                        black: "rgb(0, 0, 0)",
                                                        blue: "rgb(0, 0, 255)",
                                                        gray: "rgb(128, 128, 128)",
                                                        green: "rgb(0, 128, 0)",
                                                        red: "rgb(255, 0, 0)",
                                                        white: "rgb(255, 255, 255)"
                                                    };
                                                    /^[A-z]+$/i.test(r) ? a = s[r] !== i ? s[r] : s.black : w.RegEx.isHex.test(r) ? a = "rgb(" + w.Values.hexToRgb(r).join(" ") + ")" : /^rgba?\(/i.test(r) || (a = s.black), o = (a || r).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                                }
                                                return 8 >= h || 3 !== o.split(" ").length || (o += " 1"), o;
                                            case "inject":
                                                return 8 >= h ? 4 === r.split(" ").length && (r = r.split(/\s+/).slice(0, 3).join(" ")) : 3 === r.split(" ").length && (r += " 1"), (8 >= h ? "rgb" : "rgba") + "(" + r.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                        }
                                    }
                                }()
                            }
                        },
                        Names: {
                            camelCase: function(t) {
                                return t.replace(/-(\w)/g, (function(t, e) {
                                    return e.toUpperCase()
                                }))
                            },
                            SVGAttribute: function(t) {
                                var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                                return (h || b.State.isAndroid && !b.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t)
                            },
                            prefixCheck: function(t) {
                                if (b.State.prefixMatches[t]) return [b.State.prefixMatches[t], !0];
                                for (var e = ["", "Webkit", "Moz", "ms", "O"], n = 0, r = e.length; r > n; n++) {
                                    var i;
                                    if (i = 0 === n ? t : e[n] + t.replace(/^\w/, (function(t) {
                                            return t.toUpperCase()
                                        })), g.isString(b.State.prefixElement.style[i])) return b.State.prefixMatches[t] = i, [i, !0]
                                }
                                return [t, !1]
                            }
                        },
                        Values: {
                            hexToRgb: function(t) {
                                var e;
                                return t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(t, e, n, r) {
                                    return e + e + n + n + r + r
                                })), (e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t)) ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                            },
                            isCSSNullValue: function(t) {
                                return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                            },
                            getUnitType: function(t) {
                                return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                            },
                            getDisplayType: function(t) {
                                var e = t && t.tagName.toString().toLowerCase();
                                return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                            },
                            addClass: function(t, e) {
                                t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e
                            },
                            removeClass: function(t, e) {
                                t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                            }
                        },
                        getPropertyValue: function(t, n, r, o) {
                            function s(t, n) {
                                function r() {
                                    c && w.setPropertyValue(t, "display", "none")
                                }
                                var l = 0;
                                if (8 >= h) l = f.css(t, n);
                                else {
                                    var u, c = !1;
                                    if (/^(width|height)$/.test(n) && 0 === w.getPropertyValue(t, "display") && (c = !0, w.setPropertyValue(t, "display", w.Values.getDisplayType(t))), !o) {
                                        if ("height" === n && "border-box" !== w.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                            var d = t.offsetHeight - (parseFloat(w.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingBottom")) || 0);
                                            return r(), d
                                        }
                                        if ("width" === n && "border-box" !== w.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                            var p = t.offsetWidth - (parseFloat(w.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingRight")) || 0);
                                            return r(), p
                                        }
                                    }
                                    u = a(t) === i ? e.getComputedStyle(t, null) : a(t).computedStyle ? a(t).computedStyle : a(t).computedStyle = e.getComputedStyle(t, null), "borderColor" === n && (n = "borderTopColor"), ("" === (l = 9 === h && "filter" === n ? u.getPropertyValue(n) : u[n]) || null === l) && (l = t.style[n]), r()
                                }
                                if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
                                    var g = s(t, "position");
                                    ("fixed" === g || "absolute" === g && /top|left/i.test(n)) && (l = f(t).position()[n] + "px")
                                }
                                return l
                            }
                            var l;
                            if (w.Hooks.registered[n]) {
                                var u = n,
                                    c = w.Hooks.getRoot(u);
                                r === i && (r = w.getPropertyValue(t, w.Names.prefixCheck(c)[0])), w.Normalizations.registered[c] && (r = w.Normalizations.registered[c]("extract", t, r)), l = w.Hooks.extractValue(u, r)
                            } else if (w.Normalizations.registered[n]) {
                                var d, p;
                                "transform" !== (d = w.Normalizations.registered[n]("name", t)) && (p = s(t, w.Names.prefixCheck(d)[0]), w.Values.isCSSNullValue(p) && w.Hooks.templates[n] && (p = w.Hooks.templates[n][1])), l = w.Normalizations.registered[n]("extract", t, p)
                            }
                            if (!/^[\d-]/.test(l))
                                if (a(t) && a(t).isSVG && w.Names.SVGAttribute(n))
                                    if (/^(height|width)$/i.test(n)) try {
                                        l = t.getBBox()[n]
                                    } catch (t) {
                                        l = 0
                                    } else l = t.getAttribute(n);
                                    else l = s(t, w.Names.prefixCheck(n)[0]);
                            return w.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + n + ": " + l), l
                        },
                        setPropertyValue: function(t, n, r, i, o) {
                            var s = n;
                            if ("scroll" === n) o.container ? o.container["scroll" + o.direction] = r : "Left" === o.direction ? e.scrollTo(r, o.alternateValue) : e.scrollTo(o.alternateValue, r);
                            else if (w.Normalizations.registered[n] && "transform" === w.Normalizations.registered[n]("name", t)) w.Normalizations.registered[n]("inject", t, r), s = "transform", r = a(t).transformCache[n];
                            else {
                                if (w.Hooks.registered[n]) {
                                    var l = n,
                                        u = w.Hooks.getRoot(n);
                                    i = i || w.getPropertyValue(t, u), r = w.Hooks.injectValue(l, r, i), n = u
                                }
                                if (w.Normalizations.registered[n] && (r = w.Normalizations.registered[n]("inject", t, r), n = w.Normalizations.registered[n]("name", t)), s = w.Names.prefixCheck(n)[0], 8 >= h) try {
                                    t.style[s] = r
                                } catch (t) {
                                    b.debug && console.log("Browser does not support [" + r + "] for [" + s + "]")
                                } else a(t) && a(t).isSVG && w.Names.SVGAttribute(n) ? t.setAttribute(n, r) : t.style[s] = r;
                                b.debug >= 2 && console.log("Set " + n + " (" + s + "): " + r)
                            }
                            return [s, r]
                        },
                        flushTransformCache: function(t) {
                            function e(e) {
                                return parseFloat(w.getPropertyValue(t, e))
                            }
                            var n = "";
                            if ((h || b.State.isAndroid && !b.State.isChrome) && a(t).isSVG) {
                                var r = {
                                    translate: [e("translateX"), e("translateY")],
                                    skewX: [e("skewX")],
                                    skewY: [e("skewY")],
                                    scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")],
                                    rotate: [e("rotateZ"), 0, 0]
                                };
                                f.each(a(t).transformCache, (function(t) {
                                    /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), r[t] && (n += t + "(" + r[t].join(" ") + ") ", delete r[t])
                                }))
                            } else {
                                var i, o;
                                f.each(a(t).transformCache, (function(e) {
                                    return i = a(t).transformCache[e], "transformPerspective" === e ? (o = i, !0) : (9 === h && "rotateZ" === e && (e = "rotate"), void(n += e + i + " "))
                                })), o && (n = "perspective" + o + " " + n)
                            }
                            w.setPropertyValue(t, "transform", n)
                        }
                    };
                    w.Hooks.register(), w.Normalizations.register(), b.hook = function(t, e, n) {
                        var r = i;
                        return t = o(t), f.each(t, (function(t, o) {
                            if (a(o) === i && b.init(o), n === i) r === i && (r = b.CSS.getPropertyValue(o, e));
                            else {
                                var s = b.CSS.setPropertyValue(o, e, n);
                                "transform" === s[0] && b.CSS.flushTransformCache(o), r = s
                            }
                        })), r
                    };
                    var S = function t() {
                        function r() {
                            return l ? T.promise || null : h
                        }

                        function s() {
                            function t(t) {
                                function d(t, e) {
                                    var n = i,
                                        r = i,
                                        a = i;
                                    return g.isArray(t) ? (n = t[0], !g.isArray(t[1]) && /^[\d-]/.test(t[1]) || g.isFunction(t[1]) || w.RegEx.isHex.test(t[1]) ? a = t[1] : (g.isString(t[1]) && !w.RegEx.isHex.test(t[1]) || g.isArray(t[1])) && (r = e ? t[1] : u(t[1], s.duration), t[2] !== i && (a = t[2]))) : n = t, e || (r = r || s.easing), g.isFunction(n) && (n = n.call(o, C, k)), g.isFunction(a) && (a = a.call(o, C, k)), [n || 0, r, a]
                                }

                                function h(t, e) {
                                    var n, r;
                                    return r = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, (function(t) {
                                        return n = t, ""
                                    })), n || (n = w.Values.getUnitType(t)), [r, n]
                                }

                                function p() {
                                    var t = {
                                            myParent: o.parentNode || n.body,
                                            position: w.getPropertyValue(o, "position"),
                                            fontSize: w.getPropertyValue(o, "fontSize")
                                        },
                                        r = t.position === E.lastPosition && t.myParent === E.lastParent,
                                        i = t.fontSize === E.lastFontSize;
                                    E.lastParent = t.myParent, E.lastPosition = t.position, E.lastFontSize = t.fontSize;
                                    var s = 100,
                                        l = {};
                                    if (i && r) l.emToPx = E.lastEmToPx, l.percentToPxWidth = E.lastPercentToPxWidth, l.percentToPxHeight = E.lastPercentToPxHeight;
                                    else {
                                        var u = a(o).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                                        b.init(u), t.myParent.appendChild(u), f.each(["overflow", "overflowX", "overflowY"], (function(t, e) {
                                            b.CSS.setPropertyValue(u, e, "hidden")
                                        })), b.CSS.setPropertyValue(u, "position", t.position), b.CSS.setPropertyValue(u, "fontSize", t.fontSize), b.CSS.setPropertyValue(u, "boxSizing", "content-box"), f.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], (function(t, e) {
                                            b.CSS.setPropertyValue(u, e, s + "%")
                                        })), b.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = E.lastPercentToPxWidth = (parseFloat(w.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = E.lastPercentToPxHeight = (parseFloat(w.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = E.lastEmToPx = (parseFloat(w.getPropertyValue(u, "paddingLeft")) || 1) / s, t.myParent.removeChild(u)
                                    }
                                    return null === E.remToPx && (E.remToPx = parseFloat(w.getPropertyValue(n.body, "fontSize")) || 16), null === E.vwToPx && (E.vwToPx = parseFloat(e.innerWidth) / 100, E.vhToPx = parseFloat(e.innerHeight) / 100), l.remToPx = E.remToPx, l.vwToPx = E.vwToPx, l.vhToPx = E.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), l
                                }
                                if (s.begin && 0 === C) try {
                                    s.begin.call(v, v)
                                } catch (t) {
                                    setTimeout((function() {
                                        throw t
                                    }), 1)
                                }
                                if ("scroll" === P) {
                                    var m, S, M, A = /^x$/i.test(s.axis) ? "Left" : "Top",
                                        I = parseFloat(s.offset) || 0;
                                    s.container ? g.isWrapped(s.container) || g.isNode(s.container) ? (s.container = s.container[0] || s.container, M = (m = s.container["scroll" + A]) + f(o).position()[A.toLowerCase()] + I) : s.container = null : (m = b.State.scrollAnchor[b.State["scrollProperty" + A]], S = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === A ? "Top" : "Left")]], M = f(o).offset()[A.toLowerCase()] + I), l = {
                                        scroll: {
                                            rootPropertyValue: !1,
                                            startValue: m,
                                            currentValue: m,
                                            endValue: M,
                                            unitType: "",
                                            easing: s.easing,
                                            scrollData: {
                                                container: s.container,
                                                direction: A,
                                                alternateValue: S
                                            }
                                        },
                                        element: o
                                    }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, o)
                                } else if ("reverse" === P) {
                                    if (!a(o).tweensContainer) return void f.dequeue(o, s.queue);
                                    "none" === a(o).opts.display && (a(o).opts.display = "auto"), "hidden" === a(o).opts.visibility && (a(o).opts.visibility = "visible"), a(o).opts.loop = !1, a(o).opts.begin = null, a(o).opts.complete = null, x.easing || delete s.easing, x.duration || delete s.duration, s = f.extend({}, a(o).opts, s);
                                    var _ = f.extend(!0, {}, a(o).tweensContainer);
                                    for (var O in _)
                                        if ("element" !== O) {
                                            var F = _[O].startValue;
                                            _[O].startValue = _[O].currentValue = _[O].endValue, _[O].endValue = F, g.isEmptyObject(x) || (_[O].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + O + "): " + JSON.stringify(_[O]), o)
                                        } l = _
                                } else if ("start" === P) {
                                    for (var D in a(o).tweensContainer && !0 === a(o).isAnimating && (_ = a(o).tweensContainer), f.each(y, (function(t, e) {
                                            if (RegExp("^" + w.Lists.colors.join("$|^") + "$").test(t)) {
                                                var n = d(e, !0),
                                                    r = n[0],
                                                    o = n[1],
                                                    a = n[2];
                                                if (w.RegEx.isHex.test(r)) {
                                                    for (var s = ["Red", "Green", "Blue"], l = w.Values.hexToRgb(r), u = a ? w.Values.hexToRgb(a) : i, c = 0; c < s.length; c++) {
                                                        var f = [l[c]];
                                                        o && f.push(o), u !== i && f.push(u[c]), y[t + s[c]] = f
                                                    }
                                                    delete y[t]
                                                }
                                            }
                                        })), y) {
                                        var L = d(y[D]),
                                            N = L[0],
                                            V = L[1],
                                            z = L[2];
                                        D = w.Names.camelCase(D);
                                        var B = w.Hooks.getRoot(D),
                                            W = !1;
                                        if (a(o).isSVG || "tween" === B || !1 !== w.Names.prefixCheck(B)[1] || w.Normalizations.registered[B] !== i) {
                                            (s.display !== i && null !== s.display && "none" !== s.display || s.visibility !== i && "hidden" !== s.visibility) && /opacity|filter/.test(D) && !z && 0 !== N && (z = 0), s._cacheValues && _ && _[D] ? (z === i && (z = _[D].endValue + _[D].unitType), W = a(o).rootPropertyValueCache[B]) : w.Hooks.registered[D] ? z === i ? (W = w.getPropertyValue(o, B), z = w.getPropertyValue(o, D, W)) : W = w.Hooks.templates[B][1] : z === i && (z = w.getPropertyValue(o, D));
                                            var j, H, q, Y = !1;
                                            if (z = (j = h(D, z))[0], q = j[1], N = (j = h(D, N))[0].replace(/^([+-\/*])=/, (function(t, e) {
                                                    return Y = e, ""
                                                })), H = j[1], z = parseFloat(z) || 0, N = parseFloat(N) || 0, "%" === H && (/^(fontSize|lineHeight)$/.test(D) ? (N /= 100, H = "em") : /^scale/.test(D) ? (N /= 100, H = "") : /(Red|Green|Blue)$/i.test(D) && (N = N / 100 * 255, H = "")), /[\/*]/.test(Y)) H = q;
                                            else if (q !== H && 0 !== z)
                                                if (0 === N) H = q;
                                                else {
                                                    r = r || p();
                                                    var U = /margin|padding|left|right|width|text|word|letter/i.test(D) || /X$/.test(D) || "x" === D ? "x" : "y";
                                                    switch (q) {
                                                        case "%":
                                                            z *= "x" === U ? r.percentToPxWidth : r.percentToPxHeight;
                                                            break;
                                                        case "px":
                                                            break;
                                                        default:
                                                            z *= r[q + "ToPx"]
                                                    }
                                                    switch (H) {
                                                        case "%":
                                                            z *= 1 / ("x" === U ? r.percentToPxWidth : r.percentToPxHeight);
                                                            break;
                                                        case "px":
                                                            break;
                                                        default:
                                                            z *= 1 / r[H + "ToPx"]
                                                    }
                                                } switch (Y) {
                                                case "+":
                                                    N = z + N;
                                                    break;
                                                case "-":
                                                    N = z - N;
                                                    break;
                                                case "*":
                                                    N *= z;
                                                    break;
                                                case "/":
                                                    N = z / N
                                            }
                                            l[D] = {
                                                rootPropertyValue: W,
                                                startValue: z,
                                                currentValue: z,
                                                endValue: N,
                                                unitType: H,
                                                easing: V
                                            }, b.debug && console.log("tweensContainer (" + D + "): " + JSON.stringify(l[D]), o)
                                        } else b.debug && console.log("Skipping [" + B + "] due to a lack of browser support.")
                                    }
                                    l.element = o
                                }
                                l.element && (w.Values.addClass(o, "velocity-animating"), R.push(l), "" === s.queue && (a(o).tweensContainer = l, a(o).opts = s), a(o).isAnimating = !0, C === k - 1 ? (b.State.calls.push([R, v, s, null, T.resolver]), !1 === b.State.isTicking && (b.State.isTicking = !0, c())) : C++)
                            }
                            var r, o = this,
                                s = f.extend({}, b.defaults, x),
                                l = {};
                            switch (a(o) === i && b.init(o), parseFloat(s.delay) && !1 !== s.queue && f.queue(o, s.queue, (function(t) {
                                b.velocityQueueEntryFlag = !0, a(o).delayTimer = {
                                    setTimeout: setTimeout(t, parseFloat(s.delay)),
                                    next: t
                                }
                            })), s.duration.toString().toLowerCase()) {
                                case "fast":
                                    s.duration = 200;
                                    break;
                                case "normal":
                                    s.duration = m;
                                    break;
                                case "slow":
                                    s.duration = 600;
                                    break;
                                default:
                                    s.duration = parseFloat(s.duration) || 1
                            }!1 !== b.mock && (!0 === b.mock ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = u(s.easing, s.duration), s.begin && !g.isFunction(s.begin) && (s.begin = null), s.progress && !g.isFunction(s.progress) && (s.progress = null), s.complete && !g.isFunction(s.complete) && (s.complete = null), s.display !== i && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(o))), s.visibility !== i && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, !1 === s.queue ? s.delay ? setTimeout(t, s.delay) : t() : f.queue(o, s.queue, (function(e, n) {
                                return !0 === n ? (T.promise && T.resolver(v), !0) : (b.velocityQueueEntryFlag = !0, void t())
                            })), "" !== s.queue && "fx" !== s.queue || "inprogress" === f.queue(o)[0] || f.dequeue(o)
                        }
                        var l, h, p, v, y, x, S = arguments[0] && (arguments[0].p || f.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties));
                        if (g.isWrapped(this) ? (l = !1, p = 0, v = this, h = this) : (l = !0, p = 1, v = S ? arguments[0].elements || arguments[0].e : arguments[0]), v = o(v)) {
                            S ? (y = arguments[0].properties || arguments[0].p, x = arguments[0].options || arguments[0].o) : (y = arguments[p], x = arguments[p + 1]);
                            var k = v.length,
                                C = 0;
                            if (!/^(stop|finish)$/i.test(y) && !f.isPlainObject(x)) {
                                var M = p + 1;
                                x = {};
                                for (var A = M; A < arguments.length; A++) g.isArray(arguments[A]) || !/^(fast|normal|slow)$/i.test(arguments[A]) && !/^\d/.test(arguments[A]) ? g.isString(arguments[A]) || g.isArray(arguments[A]) ? x.easing = arguments[A] : g.isFunction(arguments[A]) && (x.complete = arguments[A]) : x.duration = arguments[A]
                            }
                            var P, T = {
                                promise: null,
                                resolver: null,
                                rejecter: null
                            };
                            switch (l && b.Promise && (T.promise = new b.Promise((function(t, e) {
                                T.resolver = t, T.rejecter = e
                            }))), y) {
                                case "scroll":
                                    P = "scroll";
                                    break;
                                case "reverse":
                                    P = "reverse";
                                    break;
                                case "finish":
                                case "stop":
                                    f.each(v, (function(t, e) {
                                        a(e) && a(e).delayTimer && (clearTimeout(a(e).delayTimer.setTimeout), a(e).delayTimer.next && a(e).delayTimer.next(), delete a(e).delayTimer)
                                    }));
                                    var I = [];
                                    return f.each(b.State.calls, (function(t, e) {
                                        e && f.each(e[1], (function(n, r) {
                                            var o = x === i ? "" : x;
                                            return !0 !== o && e[2].queue !== o && (x !== i || !1 !== e[2].queue) || void f.each(v, (function(n, i) {
                                                i === r && ((!0 === x || g.isString(x)) && (f.each(f.queue(i, g.isString(x) ? x : ""), (function(t, e) {
                                                    g.isFunction(e) && e(null, !0)
                                                })), f.queue(i, g.isString(x) ? x : "", [])), "stop" === y ? (a(i) && a(i).tweensContainer && !1 !== o && f.each(a(i).tweensContainer, (function(t, e) {
                                                    e.endValue = e.currentValue
                                                })), I.push(t)) : "finish" === y && (e[2].duration = 1))
                                            }))
                                        }))
                                    })), "stop" === y && (f.each(I, (function(t, e) {
                                        d(e, !0)
                                    })), T.promise && T.resolver(v)), r();
                                default:
                                    if (!f.isPlainObject(y) || g.isEmptyObject(y)) {
                                        if (g.isString(y) && b.Redirects[y]) {
                                            var _ = (L = f.extend({}, x)).duration,
                                                O = L.delay || 0;
                                            return !0 === L.backwards && (v = f.extend(!0, [], v).reverse()), f.each(v, (function(t, e) {
                                                parseFloat(L.stagger) ? L.delay = O + parseFloat(L.stagger) * t : g.isFunction(L.stagger) && (L.delay = O + L.stagger.call(e, t, k)), L.drag && (L.duration = parseFloat(_) || (/^(callout|transition)/.test(y) ? 1e3 : m), L.duration = Math.max(L.duration * (L.backwards ? 1 - t / k : (t + 1) / k), .75 * L.duration, 200)), b.Redirects[y].call(e, e, L || {}, t, k, v, T.promise ? T : i)
                                            })), r()
                                        }
                                        var F = "Velocity: First argument (" + y + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                        return T.promise ? T.rejecter(new Error(F)) : console.log(F), r()
                                    }
                                    P = "start"
                            }
                            var D, L, E = {
                                    lastParent: null,
                                    lastPosition: null,
                                    lastFontSize: null,
                                    lastPercentToPxWidth: null,
                                    lastPercentToPxHeight: null,
                                    lastEmToPx: null,
                                    remToPx: null,
                                    vwToPx: null,
                                    vhToPx: null
                                },
                                R = [];
                            if (f.each(v, (function(t, e) {
                                    g.isNode(e) && s.call(e)
                                })), (L = f.extend({}, b.defaults, x)).loop = parseInt(L.loop), D = 2 * L.loop - 1, L.loop)
                                for (var N = 0; D > N; N++) {
                                    var V = {
                                        delay: L.delay,
                                        progress: L.progress
                                    };
                                    N === D - 1 && (V.display = L.display, V.visibility = L.visibility, V.complete = L.complete), t(v, "reverse", V)
                                }
                            return r()
                        }
                    };
                    (b = f.extend(S, b)).animate = S;
                    var k = e.requestAnimationFrame || p;
                    return b.State.isMobile || n.hidden === i || n.addEventListener("visibilitychange", (function() {
                        n.hidden ? (k = function(t) {
                            return setTimeout((function() {
                                t(!0)
                            }), 16)
                        }, c()) : k = e.requestAnimationFrame || p
                    })), t.Velocity = b, t !== e && (t.fn.velocity = S, t.fn.velocity.defaults = b.defaults), f.each(["Down", "Up"], (function(t, e) {
                        b.Redirects["slide" + e] = function(t, n, r, o, a, s) {
                            var l = f.extend({}, n),
                                u = l.begin,
                                c = l.complete,
                                d = {
                                    height: "",
                                    marginTop: "",
                                    marginBottom: "",
                                    paddingTop: "",
                                    paddingBottom: ""
                                },
                                h = {};
                            l.display === i && (l.display = "Down" === e ? "inline" === b.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"), l.begin = function() {
                                for (var n in u && u.call(a, a), d) {
                                    h[n] = t.style[n];
                                    var r = b.CSS.getPropertyValue(t, n);
                                    d[n] = "Down" === e ? [r, 0] : [0, r]
                                }
                                h.overflow = t.style.overflow, t.style.overflow = "hidden"
                            }, l.complete = function() {
                                for (var e in h) t.style[e] = h[e];
                                c && c.call(a, a), s && s.resolver(a)
                            }, b(t, d, l)
                        }
                    })), f.each(["In", "Out"], (function(t, e) {
                        b.Redirects["fade" + e] = function(t, n, r, o, a, s) {
                            var l = f.extend({}, n),
                                u = {
                                    opacity: "In" === e ? 1 : 0
                                },
                                c = l.complete;
                            l.complete = r !== o - 1 ? l.begin = null : function() {
                                c && c.call(a, a), s && s.resolver(a)
                            }, l.display === i && (l.display = "In" === e ? "auto" : "none"), b(this, u, l)
                        }
                    })), b
                }
                jQuery.fn.velocity = jQuery.fn.animate
            }(window.jQuery || window.Zepto || window, window, document)
        }, "object" == r(t) && "object" == r(t.exports) ? t.exports = e() : "function" == typeof define && n(56) ? define(e) : e())
    }).call(this, n(89)(t))
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(1),
        o = n(138),
        a = n(8),
        s = n(31),
        l = n(11),
        u = n(103),
        c = o.ArrayBuffer,
        d = o.DataView,
        f = c.prototype.slice;
    r({
        target: "ArrayBuffer",
        proto: !0,
        unsafe: !0,
        forced: i((function() {
            return !new c(2).slice(1, void 0).byteLength
        }))
    }, {
        slice: function(t, e) {
            if (void 0 !== f && void 0 === e) return f.call(a(this), t);
            for (var n = a(this).byteLength, r = s(t, n), i = s(void 0 === e ? n : e, n), o = new(u(this, c))(l(i - r)), h = new d(this), p = new d(o), g = 0; r < i;) p.setUint8(g++, h.getUint8(r++));
            return o
        }
    })
}, function(t, e, n) {
    var r = n(15);
    t.exports = function(t, e, n) {
        for (var i in e) r(t, i, e[i], n);
        return t
    }
}, function(t, e, n) {
    n(162)("Float32", 4, (function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(0),
        o = n(7),
        a = n(163),
        s = n(40),
        l = n(138),
        u = n(139),
        c = n(17),
        d = n(6),
        f = n(11),
        h = n(140),
        p = n(141),
        g = n(19),
        v = n(4),
        m = n(82),
        y = n(5),
        b = n(33),
        x = n(69),
        w = n(27).f,
        S = n(166),
        k = n(25).forEach,
        C = n(122),
        M = n(9),
        A = n(24),
        P = n(22),
        T = P.get,
        I = P.set,
        _ = M.f,
        O = A.f,
        F = Math.round,
        D = i.RangeError,
        L = l.ArrayBuffer,
        E = l.DataView,
        R = s.NATIVE_ARRAY_BUFFER_VIEWS,
        N = s.TYPED_ARRAY_TAG,
        V = s.TypedArray,
        z = s.TypedArrayPrototype,
        B = s.aTypedArrayConstructor,
        W = s.isTypedArray,
        j = function(t, e) {
            for (var n = 0, r = e.length, i = new(B(t))(r); r > n;) i[n] = e[n++];
            return i
        },
        H = function(t, e) {
            _(t, e, {
                get: function() {
                    return T(this)[e]
                }
            })
        },
        q = function(t) {
            var e;
            return t instanceof L || "ArrayBuffer" == (e = m(t)) || "SharedArrayBuffer" == e
        },
        Y = function(t, e) {
            return W(t) && "symbol" != typeof e && e in t && String(+e) == String(e)
        },
        U = function(t, e) {
            return Y(t, e = g(e, !0)) ? c(2, t[e]) : O(t, e)
        },
        $ = function(t, e, n) {
            return !(Y(t, e = g(e, !0)) && y(n) && v(n, "value")) || v(n, "get") || v(n, "set") || n.configurable || v(n, "writable") && !n.writable || v(n, "enumerable") && !n.enumerable ? _(t, e, n) : (t[e] = n.value, t)
        };
    o ? (R || (A.f = U, M.f = $, H(z, "buffer"), H(z, "byteOffset"), H(z, "byteLength"), H(z, "length")), r({
        target: "Object",
        stat: !0,
        forced: !R
    }, {
        getOwnPropertyDescriptor: U,
        defineProperty: $
    }), t.exports = function(t, e, n, o) {
        var s = t + (o ? "Clamped" : "") + "Array",
            l = "get" + t,
            c = "set" + t,
            g = i[s],
            v = g,
            m = v && v.prototype,
            M = {},
            A = function(t, n) {
                _(t, n, {
                    get: function() {
                        return function(t, n) {
                            var r = T(t);
                            return r.view[l](n * e + r.byteOffset, !0)
                        }(this, n)
                    },
                    set: function(t) {
                        return function(t, n, r) {
                            var i = T(t);
                            o && (r = (r = F(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), i.view[c](n * e + i.byteOffset, r, !0)
                        }(this, n, t)
                    },
                    enumerable: !0
                })
            };
        R ? a && (v = n((function(t, n, r, i) {
            return u(t, v, s), y(n) ? q(n) ? void 0 !== i ? new g(n, p(r, e), i) : void 0 !== r ? new g(n, p(r, e)) : new g(n) : W(n) ? j(v, n) : S.call(v, n) : new g(h(n))
        })), x && x(v, V), k(w(g), (function(t) {
            t in v || d(v, t, g[t])
        })), v.prototype = m) : (v = n((function(t, n, r, i) {
            u(t, v, s);
            var o, a, l, c = 0,
                d = 0;
            if (y(n)) {
                if (!q(n)) return W(n) ? j(v, n) : S.call(v, n);
                o = n, d = p(r, e);
                var g = n.byteLength;
                if (void 0 === i) {
                    if (g % e) throw D("Wrong length");
                    if ((a = g - d) < 0) throw D("Wrong length")
                } else if ((a = f(i) * e) + d > g) throw D("Wrong length");
                l = a / e
            } else l = h(n), o = new L(a = l * e);
            for (I(t, {
                    buffer: o,
                    byteOffset: d,
                    byteLength: a,
                    length: l,
                    view: new E(o)
                }); c < l;) A(t, c++)
        })), x && x(v, V), m = v.prototype = b(z)), m.constructor !== v && d(m, "constructor", v), N && d(m, N, s), M[s] = v, r({
            global: !0,
            forced: v != g,
            sham: !R
        }, M), "BYTES_PER_ELEMENT" in v || d(v, "BYTES_PER_ELEMENT", e), "BYTES_PER_ELEMENT" in m || d(m, "BYTES_PER_ELEMENT", e), C(s)
    }) : t.exports = function() {}
}, function(t, e, n) {
    var r = n(0),
        i = n(1),
        o = n(164),
        a = n(40).NATIVE_ARRAY_BUFFER_VIEWS,
        s = r.ArrayBuffer,
        l = r.Int8Array;
    t.exports = !a || !i((function() {
        l(1)
    })) || !i((function() {
        new l(-1)
    })) || !o((function(t) {
        new l, new l(null), new l(1.5), new l(t)
    }), !0) || i((function() {
        return 1 !== new l(new s(2), 1, void 0).length
    }))
}, function(t, e, n) {
    var r = n(2)("iterator"),
        i = !1;
    try {
        var o = 0,
            a = {
                next: function() {
                    return {
                        done: !!o++
                    }
                },
                return: function() {
                    i = !0
                }
            };
        a[r] = function() {
            return this
        }, Array.from(a, (function() {
            throw 2
        }))
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !i) return !1;
        var n = !1;
        try {
            var o = {};
            o[r] = function() {
                return {
                    next: function() {
                        return {
                            done: n = !0
                        }
                    }
                }
            }, t(o)
        } catch (t) {}
        return n
    }
}, function(t, e, n) {
    var r = n(12);
    t.exports = function(t) {
        var e = r(t);
        if (e < 0) throw RangeError("The argument can't be less than 0");
        return e
    }
}, function(t, e, n) {
    var r = n(16),
        i = n(11),
        o = n(167),
        a = n(168),
        s = n(71),
        l = n(40).aTypedArrayConstructor;
    t.exports = function(t) {
        var e, n, u, c, d, f, h = r(t),
            p = arguments.length,
            g = p > 1 ? arguments[1] : void 0,
            v = void 0 !== g,
            m = o(h);
        if (null != m && !a(m))
            for (f = (d = m.call(h)).next, h = []; !(c = f.call(d)).done;) h.push(c.value);
        for (v && p > 2 && (g = s(g, arguments[2], 2)), n = i(h.length), u = new(l(this))(n), e = 0; n > e; e++) u[e] = v ? g(h[e], e) : h[e];
        return u
    }
}, function(t, e, n) {
    var r = n(82),
        i = n(48),
        o = n(2)("iterator");
    t.exports = function(t) {
        if (null != t) return t[o] || t["@@iterator"] || i[r(t)]
    }
}, function(t, e, n) {
    var r = n(2),
        i = n(48),
        o = r("iterator"),
        a = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (i.Array === t || a[o] === t)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(40),
        i = n(170),
        o = r.aTypedArray;
    r.exportProto("copyWithin", (function(t, e) {
        return i.call(o(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(16),
        i = n(31),
        o = n(11),
        a = Math.min;
    t.exports = [].copyWithin || function(t, e) {
        var n = r(this),
            s = o(n.length),
            l = i(t, s),
            u = i(e, s),
            c = arguments.length > 2 ? arguments[2] : void 0,
            d = a((void 0 === c ? s : i(c, s)) - u, s - l),
            f = 1;
        for (u < l && l < u + d && (f = -1, u += d - 1, l += d - 1); d-- > 0;) u in n ? n[l] = n[u] : delete n[l], l += f, u += f;
        return n
    }
}, function(t, e, n) {
    "use strict";
    var r = n(40),
        i = n(25).every,
        o = r.aTypedArray;
    r.exportProto("every", (function(t) {
        return i(o(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(40),
        i = n(126),
        o = r.aTypedArray;
    r.exportProto("fill", (function(t) {
        return i.apply(o(this), arguments)
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(40),
        i = n(25).filter,
        o = n(103),
        a = r.aTypedArray,
        s = r.aTypedArrayConstructor;
    r.exportProto("filter", (function(t) {
        for (var e = i(a(this), t, arguments.length > 1 ? arguments[1] : void 0), n = o(this, this.constructor), r = 0, l = e.length, u = new(s(n))(l); l > r;) u[r] = e[r++];
        return u
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(40),
        i = n(25).find,
        o = r.aTypedArray;
    r.exportProto("find", (function(t) {
        return i(o(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(40),
        i = n(25).findIndex,
        o = r.aTypedArray;
    r.exportProto("findIndex", (function(t) {
        return i(o(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(40),
        i = n(25).forEach,
        o = r.aTypedArray;
    r.exportProto("forEach", (function(t) {
        i(o(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(40),
        i = n(41).includes,
        o = r.aTypedArray;
    r.exportProto("includes", (function(t) {
        return i(o(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(40),
        i = n(41).indexOf,
        o = r.aTypedArray;
    r.exportProto("indexOf", (function(t) {
        return i(o(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(40),
        o = n(55),
        a = n(2)("iterator"),
        s = r.Uint8Array,
        l = o.values,
        u = o.keys,
        c = o.entries,
        d = i.aTypedArray,
        f = i.exportProto,
        h = s && s.prototype[a],
        p = !!h && ("values" == h.name || null == h.name),
        g = function() {
            return l.call(d(this))
        };
    f("entries", (function() {
        return c.call(d(this))
    })), f("keys", (function() {
        return u.call(d(this))
    })), f("values", g, !p), f(a, g, !p)
}, function(t, e, n) {
    "use strict";
    var r = n(40),
        i = r.aTypedArray,
        o = [].join;
    r.exportProto("join", (function(t) {
        return o.apply(i(this), arguments)
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(40),
        i = n(131),
        o = r.aTypedArray;
    r.exportProto("lastIndexOf", (function(t) {
        return i.apply(o(this), arguments)
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(40),
        i = n(25).map,
        o = n(103),
        a = r.aTypedArray,
        s = r.aTypedArrayConstructor;
    r.exportProto("map", (function(t) {
        return i(a(this), t, arguments.length > 1 ? arguments[1] : void 0, (function(t, e) {
            return new(s(o(t, t.constructor)))(e)
        }))
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(40),
        i = n(107).left,
        o = r.aTypedArray;
    r.exportProto("reduce", (function(t) {
        return i(o(this), t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(40),
        i = n(107).right,
        o = r.aTypedArray;
    r.exportProto("reduceRight", (function(t) {
        return i(o(this), t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(40),
        i = r.aTypedArray,
        o = Math.floor;
    r.exportProto("reverse", (function() {
        for (var t, e = i(this).length, n = o(e / 2), r = 0; r < n;) t = this[r], this[r++] = this[--e], this[e] = t;
        return this
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(40),
        i = n(11),
        o = n(141),
        a = n(16),
        s = n(1),
        l = r.aTypedArray,
        u = s((function() {
            new Int8Array(1).set({})
        }));
    r.exportProto("set", (function(t) {
        l(this);
        var e = o(arguments.length > 1 ? arguments[1] : void 0, 1),
            n = this.length,
            r = a(t),
            s = i(r.length),
            u = 0;
        if (s + e > n) throw RangeError("Wrong length");
        for (; u < s;) this[e + u] = r[u++]
    }), u)
}, function(t, e, n) {
    "use strict";
    var r = n(40),
        i = n(103),
        o = n(1),
        a = r.aTypedArray,
        s = r.aTypedArrayConstructor,
        l = [].slice,
        u = o((function() {
            new Int8Array(1).slice()
        }));
    r.exportProto("slice", (function(t, e) {
        for (var n = l.call(a(this), t, e), r = i(this, this.constructor), o = 0, u = n.length, c = new(s(r))(u); u > o;) c[o] = n[o++];
        return c
    }), u)
}, function(t, e, n) {
    "use strict";
    var r = n(40),
        i = n(25).some,
        o = r.aTypedArray;
    r.exportProto("some", (function(t) {
        return i(o(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(40),
        i = r.aTypedArray,
        o = [].sort;
    r.exportProto("sort", (function(t) {
        return o.call(i(this), t)
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(40),
        i = n(11),
        o = n(31),
        a = n(103),
        s = r.aTypedArray;
    r.exportProto("subarray", (function(t, e) {
        var n = s(this),
            r = n.length,
            l = o(t, r);
        return new(a(n, n.constructor))(n.buffer, n.byteOffset + l * n.BYTES_PER_ELEMENT, i((void 0 === e ? r : o(e, r)) - l))
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(40),
        o = n(1),
        a = r.Int8Array,
        s = i.aTypedArray,
        l = [].toLocaleString,
        u = [].slice,
        c = !!a && o((function() {
            l.call(new a(1))
        })),
        d = o((function() {
            return [1, 2].toLocaleString() != new a([1, 2]).toLocaleString()
        })) || !o((function() {
            a.prototype.toLocaleString.call([1, 2])
        }));
    i.exportProto("toLocaleString", (function() {
        return l.apply(c ? u.call(s(this)) : s(this), arguments)
    }), d)
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(40),
        o = n(1),
        a = r.Uint8Array,
        s = a && a.prototype,
        l = [].toString,
        u = [].join;
    o((function() {
        l.call({})
    })) && (l = function() {
        return u.call(this)
    }), i.exportProto("toString", l, (s || {}).toString != l)
}, function(t, e, n) {
    "use strict";
    (function(t) {
        n(78), n(79), n(80), n(92), n(55), n(99), n(113), n(114), n(81), n(118), n(84), n(86);

        function e(t) {
            return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        /*!
         * Waves v0.7.6
         * http://fian.my.id/Waves
         *
         * Copyright 2014-2018 Alfiana E. Sibuea and other contributors
         * Released under the MIT license
         * https://github.com/fians/Waves/blob/master/LICENSE
         */
        ! function(r, i) {
            "function" == typeof define && n(56) ? define([], (function() {
                return r.Waves = i.call(r), r.Waves
            })) : "object" === ("undefined" == typeof exports ? "undefined" : e(exports)) ? t.exports = i.call(r) : r.Waves = i.call(r)
        }("object" === ("undefined" == typeof window ? "undefined" : e(window)) ? window : void 0, (function() {
            var t = t || {},
                n = document.querySelectorAll.bind(document),
                r = Object.prototype.toString,
                i = "ontouchstart" in window;

            function o(t) {
                var n = e(t);
                return "function" === n || "object" === n && !!t
            }

            function a(t) {
                var e, i = r.call(t);
                return "[object String]" === i ? n(t) : o(t) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(i) && t.hasOwnProperty("length") ? t : o(e = t) && e.nodeType > 0 ? [t] : []
            }

            function s(t) {
                var n, r, i = {
                        top: 0,
                        left: 0
                    },
                    o = t && t.ownerDocument;
                return n = o.documentElement, "undefined" !== e(t.getBoundingClientRect) && (i = t.getBoundingClientRect()), r = function(t) {
                    return null !== (e = t) && e === e.window ? t : 9 === t.nodeType && t.defaultView;
                    var e
                }(o), {
                    top: i.top + r.pageYOffset - n.clientTop,
                    left: i.left + r.pageXOffset - n.clientLeft
                }
            }

            function l(t) {
                var e = "";
                for (var n in t) t.hasOwnProperty(n) && (e += n + ":" + t[n] + ";");
                return e
            }
            var u = {
                    duration: 750,
                    delay: 200,
                    show: function(t, e, n) {
                        if (2 === t.button) return !1;
                        e = e || this;
                        var r = document.createElement("div");
                        r.className = "waves-ripple waves-rippling", e.appendChild(r);
                        var i = s(e),
                            o = 0,
                            a = 0;
                        "touches" in t && t.touches.length ? (o = t.touches[0].pageY - i.top, a = t.touches[0].pageX - i.left) : (o = t.pageY - i.top, a = t.pageX - i.left), a = a >= 0 ? a : 0, o = o >= 0 ? o : 0;
                        var c = "scale(" + e.clientWidth / 100 * 3 + ")",
                            d = "translate(0,0)";
                        n && (d = "translate(" + n.x + "px, " + n.y + "px)"), r.setAttribute("data-hold", Date.now()), r.setAttribute("data-x", a), r.setAttribute("data-y", o), r.setAttribute("data-scale", c), r.setAttribute("data-translate", d);
                        var f = {
                            top: o + "px",
                            left: a + "px"
                        };
                        r.classList.add("waves-notransition"), r.setAttribute("style", l(f)), r.classList.remove("waves-notransition"), f["-webkit-transform"] = c + " " + d, f["-moz-transform"] = c + " " + d, f["-ms-transform"] = c + " " + d, f["-o-transform"] = c + " " + d, f.transform = c + " " + d, f.opacity = "1";
                        var h = "mousemove" === t.type ? 2500 : u.duration;
                        f["-webkit-transition-duration"] = h + "ms", f["-moz-transition-duration"] = h + "ms", f["-o-transition-duration"] = h + "ms", f["transition-duration"] = h + "ms", r.setAttribute("style", l(f))
                    },
                    hide: function(t, e) {
                        for (var n = (e = e || this).getElementsByClassName("waves-rippling"), r = 0, o = n.length; r < o; r++) d(t, e, n[r]);
                        i && (e.removeEventListener("touchend", u.hide), e.removeEventListener("touchcancel", u.hide)), e.removeEventListener("mouseup", u.hide), e.removeEventListener("mouseleave", u.hide)
                    }
                },
                c = {
                    input: function(t) {
                        var e = t.parentNode;
                        if ("span" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
                            var n = document.createElement("span");
                            n.className = "waves-input-wrapper", e.replaceChild(n, t), n.appendChild(t)
                        }
                    },
                    img: function(t) {
                        var e = t.parentNode;
                        if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
                            var n = document.createElement("i");
                            e.replaceChild(n, t), n.appendChild(t)
                        }
                    }
                };

            function d(t, e, n) {
                if (n) {
                    n.classList.remove("waves-rippling");
                    var r = n.getAttribute("data-x"),
                        i = n.getAttribute("data-y"),
                        o = n.getAttribute("data-scale"),
                        a = n.getAttribute("data-translate"),
                        s = 350 - (Date.now() - Number(n.getAttribute("data-hold")));
                    s < 0 && (s = 0), "mousemove" === t.type && (s = 150);
                    var c = "mousemove" === t.type ? 2500 : u.duration;
                    setTimeout((function() {
                        var t = {
                            top: i + "px",
                            left: r + "px",
                            opacity: "0",
                            "-webkit-transition-duration": c + "ms",
                            "-moz-transition-duration": c + "ms",
                            "-o-transition-duration": c + "ms",
                            "transition-duration": c + "ms",
                            "-webkit-transform": o + " " + a,
                            "-moz-transform": o + " " + a,
                            "-ms-transform": o + " " + a,
                            "-o-transform": o + " " + a,
                            transform: o + " " + a
                        };
                        n.setAttribute("style", l(t)), setTimeout((function() {
                            try {
                                e.removeChild(n)
                            } catch (t) {
                                return !1
                            }
                        }), c)
                    }), s)
                }
            }
            var f = {
                touches: 0,
                allowEvent: function(t) {
                    var e = !0;
                    return /^(mousedown|mousemove)$/.test(t.type) && f.touches && (e = !1), e
                },
                registerEvent: function(t) {
                    var e = t.type;
                    "touchstart" === e ? f.touches += 1 : /^(touchend|touchcancel)$/.test(e) && setTimeout((function() {
                        f.touches && (f.touches -= 1)
                    }), 500)
                }
            };

            function h(t) {
                var e = function(t) {
                    if (!1 === f.allowEvent(t)) return null;
                    for (var e = null, n = t.target || t.srcElement; n.parentElement;) {
                        if (!(n instanceof SVGElement) && n.classList.contains("waves-effect")) {
                            e = n;
                            break
                        }
                        n = n.parentElement
                    }
                    return e
                }(t);
                if (null !== e) {
                    if (e.disabled || e.getAttribute("disabled") || e.classList.contains("disabled")) return;
                    if (f.registerEvent(t), "touchstart" === t.type && u.delay) {
                        var n = !1,
                            r = setTimeout((function() {
                                r = null, u.show(t, e)
                            }), u.delay),
                            o = function(i) {
                                r && (clearTimeout(r), r = null, u.show(t, e)), n || (n = !0, u.hide(i, e)), s()
                            },
                            a = function(t) {
                                r && (clearTimeout(r), r = null), o(t), s()
                            };
                        e.addEventListener("touchmove", a, !1), e.addEventListener("touchend", o, !1), e.addEventListener("touchcancel", o, !1);
                        var s = function() {
                            e.removeEventListener("touchmove", a), e.removeEventListener("touchend", o), e.removeEventListener("touchcancel", o)
                        }
                    } else u.show(t, e), i && (e.addEventListener("touchend", u.hide, !1), e.addEventListener("touchcancel", u.hide, !1)), e.addEventListener("mouseup", u.hide, !1), e.addEventListener("mouseleave", u.hide, !1)
                }
            }
            return t.init = function(t) {
                var e = document.body;
                "duration" in (t = t || {}) && (u.duration = t.duration), "delay" in t && (u.delay = t.delay), i && (e.addEventListener("touchstart", h, !1), e.addEventListener("touchcancel", f.registerEvent, !1), e.addEventListener("touchend", f.registerEvent, !1)), e.addEventListener("mousedown", h, !1)
            }, t.attach = function(t, e) {
                var n, i;
                t = a(t), "[object Array]" === r.call(e) && (e = e.join(" ")), e = e ? " " + e : "";
                for (var o = 0, s = t.length; o < s; o++) i = (n = t[o]).tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(i) && (c[i](n), n = n.parentElement), -1 === n.className.indexOf("waves-effect") && (n.className += " waves-effect" + e)
            }, t.ripple = function(t, e) {
                var n = (t = a(t)).length;
                if ((e = e || {}).wait = e.wait || 0, e.position = e.position || null, n)
                    for (var r, i, o, l = {}, c = 0, d = {
                            type: "mousedown",
                            button: 1
                        }, f = function(t, e) {
                            return function() {
                                u.hide(t, e)
                            }
                        }; c < n; c++)
                        if (r = t[c], i = e.position || {
                                x: r.clientWidth / 2,
                                y: r.clientHeight / 2
                            }, o = s(r), l.x = o.left + i.x, l.y = o.top + i.y, d.pageX = l.x, d.pageY = l.y, u.show(d, r), e.wait >= 0 && null !== e.wait) {
                            setTimeout(f({
                                type: "mouseup",
                                button: 1
                            }, r), e.wait)
                        }
            }, t.calm = function(t) {
                for (var e = {
                        type: "mouseup",
                        button: 1
                    }, n = 0, r = (t = a(t)).length; n < r; n++) u.hide(e, t[n])
            }, t.displayEffect = function(e) {
                console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), t.init(e)
            }, t
        })), $(document).ready((function() {
            Waves.attach(".btn:not(.btn-flat), .btn-floating", ["waves-light"]), Waves.attach(".btn-flat", ["waves-effect"]), Waves.attach(".chip", ["waves-effect"]), Waves.attach(".view a .mask", ["waves-light"]), Waves.attach(".waves-light", ["waves-light"]), Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .nav-tabs .nav-item:not(.dropdown)", ["waves-light"]), Waves.attach(".pager li a", ["waves-light"]), Waves.attach(".pagination .page-item .page-link", ["waves-effect"]), Waves.init()
        }))
    }).call(this, n(89)(t))
}]);
;!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

;