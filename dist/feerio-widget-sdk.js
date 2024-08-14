(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var jsxRuntime = {exports: {}};

	var reactJsxRuntime_production_min = {};

	var react = {exports: {}};

	var react_production_min = {};

	/**
	 * @license React
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReact_production_min;

	function requireReact_production_min () {
		if (hasRequiredReact_production_min) return react_production_min;
		hasRequiredReact_production_min = 1;
	var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return "function"===typeof a?a:null}
		var B={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}E.prototype.isReactComponent={};
		E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}var H=G.prototype=new F;
		H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
		function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
		function N(a,b){return {$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
		function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
		a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c);}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
		function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
		var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
		react_production_min.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S(a,function(){b++;});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E;react_production_min.Fragment=p;react_production_min.Profiler=r;react_production_min.PureComponent=G;react_production_min.StrictMode=q;react_production_min.Suspense=w;
		react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;react_production_min.act=X;
		react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
		for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M;react_production_min.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
		react_production_min.forwardRef=function(a){return {$$typeof:v,render:a}};react_production_min.isValidElement=O;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V.transition;V.transition={};try{a();}finally{V.transition=b;}};react_production_min.unstable_act=X;react_production_min.useCallback=function(a,b){return U.current.useCallback(a,b)};react_production_min.useContext=function(a){return U.current.useContext(a)};
		react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U.current.useEffect(a,b)};react_production_min.useId=function(){return U.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};react_production_min.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
		react_production_min.useMemo=function(a,b){return U.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U.current.useRef(a)};react_production_min.useState=function(a){return U.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};react_production_min.useTransition=function(){return U.current.useTransition()};react_production_min.version="18.3.1";
		return react_production_min;
	}

	{
	  react.exports = requireReact_production_min();
	}

	var reactExports = react.exports;
	var React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

	/**
	 * @license React
	 * react-jsx-runtime.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactJsxRuntime_production_min;

	function requireReactJsxRuntime_production_min () {
		if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
		hasRequiredReactJsxRuntime_production_min = 1;
	var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
		function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
		return reactJsxRuntime_production_min;
	}

	{
	  jsxRuntime.exports = requireReactJsxRuntime_production_min();
	}

	var jsxRuntimeExports = jsxRuntime.exports;

	var reactDom = {exports: {}};

	var reactDom_production_min = {};

	var scheduler$1 = {exports: {}};

	var scheduler_production_min = {};

	/**
	 * @license React
	 * scheduler.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredScheduler_production_min;

	function requireScheduler_production_min () {
		if (hasRequiredScheduler_production_min) return scheduler_production_min;
		hasRequiredScheduler_production_min = 1;
		(function (exports) {
	function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
			function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()};}else {var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q};}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
			"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t);}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else {var b=h(t);null!==b&&K(H,b.startTime-a);}}
			function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b);}else k(r);v=h(r);}if(null!==v)var w=!0;else {var m=h(t);null!==m&&K(H,m.startTime-b);w=!1;}return w}finally{v=null,y=c,z=!1;}}var N=!1,O=null,L=-1,P=5,Q=-1;
			function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a);}finally{b?S():(N=!1,O=null);}}else N=!1;}var S;if("function"===typeof F)S=function(){F(R);};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null);};}else S=function(){D(R,0);};function I(a){O=a;N||(N=!0,S());}function K(a,b){L=D(function(){a(exports.unstable_now());},b);}
			exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J));};
			exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5;};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y;}var c=y;y=b;try{return a()}finally{y=c;}};exports.unstable_pauseExecution=function(){};
			exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=y;y=a;try{return b()}finally{y=c;}};
			exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
			exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c;}}}; 
		} (scheduler_production_min));
		return scheduler_production_min;
	}

	var hasRequiredScheduler;

	function requireScheduler () {
		if (hasRequiredScheduler) return scheduler$1.exports;
		hasRequiredScheduler = 1;

		{
		  scheduler$1.exports = requireScheduler_production_min();
		}
		return scheduler$1.exports;
	}

	/**
	 * @license React
	 * react-dom.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactDom_production_min;

	function requireReactDom_production_min () {
		if (hasRequiredReactDom_production_min) return reactDom_production_min;
		hasRequiredReactDom_production_min = 1;
	var aa=reactExports,ca=requireScheduler();function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b);}
		function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a]);}
		var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
		{},ma={};function oa(a){if(ja.call(ma,a))return !0;if(ja.call(la,a))return !1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return !1}function pa(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
		function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g;}var z={};
		"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1);});
		["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1);});
		["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1);});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1);});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1);});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1);});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
		"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
		sa);z[b]=new v(b,1,!1,a,null,!1,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1);});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1);});
		z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0);});
		function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)));}
		var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");	var Ia=Symbol.for("react.offscreen");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return "function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||"";}return "\n"+La+a}var Na=!1;
		function Oa(a,b){if(!a||Na)return "";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[]);}catch(l){var d=l;}Reflect.construct(a,[],b);}else {try{b.call();}catch(l){d=l;}a.call(b.prototype);}else {try{throw Error();}catch(l){d=l;}a();}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
		f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c;}return (a=a?a.displayName||a.name:"")?Ma(a):""}
		function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return ""}}
		function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return "Fragment";case wa:return "Portal";case Aa:return "Profiler";case za:return "StrictMode";case Ea:return "Suspense";case Fa:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return (a.displayName||"Context")+".Consumer";case Ba:return (a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
		b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
		function Ra(a){var b=a.type;switch(a.tag){case 24:return "Cache";case 9:return (b.displayName||"Context")+".Consumer";case 10:return (b._context.displayName||"Context")+".Provider";case 18:return "DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return "Fragment";case 5:return b;case 4:return "Portal";case 3:return "Root";case 6:return "Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return "Offscreen";
		case 12:return "Profiler";case 21:return "Scope";case 13:return "Suspense";case 19:return "SuspenseList";case 25:return "TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return ""}}
		function Ta(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
		function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
		null;delete a[b];}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a));}function Wa(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
		function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1);}
		function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
		function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
		function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}var eb=Array.isArray;
		function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else {c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
		function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:Sa(c)};}
		function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}function kb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}
		function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
		var mb,nb=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else {mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
		function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
		var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
		zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a];});});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
		function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
		function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
		function vb(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;default:return !0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
		function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b));}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a;}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a]);}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb();}}
		function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;if(c&&"function"!==
		typeof c)throw Error(p(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0;}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb);}catch(a){Lb=!1;}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(m){this.onError(m);}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a;}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments);}
		function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null;}else throw Error(p(198));Qb||(Qb=!0,Rb=l);}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
		function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling;}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
		c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling;}return null}
		var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128));}catch(b){}}
		var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
		function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
		default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)));}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
		function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return -1;case 134217728:case 268435456:case 536870912:case 1073741824:return -1;default:return -1}}
		function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b);}else k<=b&&(a.expiredLanes|=h);f&=~h;}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
		function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c;}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f;}}
		function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e;}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
		function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId);}}
		function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
		function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return !0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return !1}
		function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c);});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}
		function Xc(a){if(null!==a.blockedOn)return !1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null;}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift();}return !0}function Zc(a,b,c){Xc(a)&&c.delete(b);}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc);}
		function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)));}
		function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift();}var cd=ua.ReactCurrentBatchConfig,dd=!0;
		function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}
		function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f;}null!==e&&d.stopPropagation();}else hd(a,b,d,null,c);}}var id=null;
		function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null;}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null;}else b!==a&&(a=null);id=a;return null}
		function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
		case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
		function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return !0}function qd(){return !1}
		function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
		(a.returnValue=!1),this.isDefaultPrevented=pd);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd);},persist:function(){},isPersistent:pd});return b}
		var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
		a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return "movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
		Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
		119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
		var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return "keypress"===a.type?od(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
		a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
		deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
		function ge(a,b){switch(a){case "keyup":return -1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return !0;default:return !1}}function he(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
		function ke(a,b){if(ie)return "compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
		var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}));}var pe=null,qe=null;function re(a){se(a,0);}function te(a){var b=ue(a);if(Wa(b))return a}
		function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput;}xe=ye;}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode);}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null);}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b);}}
		function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae();}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
		function Ie(a,b){if(He(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return !1}return !0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
		function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Je(c);}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
		function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=Xa(a.document);}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
		function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
		d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)));}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top;}}
		var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
		function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)));}
		function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
		ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
		function ff(a,b){df.set(a,b);fa(b,[a]);}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf);}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
		ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
		fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
		function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null;}
		function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
		function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d));}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b);}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a));});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b));}}
		function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd;}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1);}
		function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return;}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode;}}d=d.return;}Jb(function(){var d=f,e=xb(c),g=[];
		a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
		Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td;}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
		w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return;}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}));}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
		n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null;}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
		vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x);}t=null;}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0);}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else {na=De;var xa=Ce;}else (k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
		xa.controlled&&"number"===h.type&&cb(h,"number",h.value);}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e);}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
		break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0;}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
		0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a);}se(g,b);});}function tf(a,b,c){return {instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return;}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
		function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return;}0!==g.length&&a.push({event:b,listeners:g});}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return ("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
		var Cf=null,Df=null;function Ef(a,b){return "textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
		var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;});}
		function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--;}else "$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e;}while(c);bd(b);}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
		function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--;}else "/$"===c&&b++;}a=a.previousSibling;}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
		function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a);}return b}a=c;c=a.parentNode;}return null}function Cb(a){a=a[Of]||a[uf];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return {current:a}}
		function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--);}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b;}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
		function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H);}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c);}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
		function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return !0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c);}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a);}function ig(a){fg=!0;hg(a);}
		function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1;}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1;}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b;}
		function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a;}else rg=1<<f|c<<e|d,sg=a;}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0));}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null;}var xg=null,yg=null,I=!1,zg=null;
		function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c);}
		function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
		null,!0):!1;default:return !1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a);}}else {if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=!1;xg=a;}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a;}
		function Gg(a){if(a!==xg)return !1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling);}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--;}else "$"!==c&&"$!"!==c&&"$?"!==c||b++;}a=a.nextSibling;}yg=
		null;}}else yg=xg?Lf(a.stateNode.nextSibling):null;return !0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling);}function Ig(){yg=xg=null;I=!1;}function Jg(a){null===zg?zg=[a]:zg.push(a);}var Kg=ua.ReactCurrentBatchConfig;
		function Lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode;}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;null===a?delete b[f]:b[f]=a;};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
		function Mg(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Ng(a){var b=a._init;return b(a._payload)}
		function Og(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c);}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Pg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
		null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Qg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&Ng(f)===b.type))return d=e(b,c.props),d.ref=Lg(a,b,c),d.return=a,d;d=Rg(c.type,c.key,c.props,null,a.mode,d);d.ref=Lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
		b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=Sg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Tg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=Qg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=Rg(b.type,b.key,b.props,null,a.mode,c),
		c.ref=Lg(a,null,b),c.return=a,c;case wa:return b=Sg(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Tg(b,a.mode,c,null),b.return=a,b;Mg(a,b);}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
		b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);Mg(a,c);}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);Mg(b,d);}return null}
		function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x;}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
		x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x;}if(n.done)return c(e,
		m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
		f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&Ng(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=Lg(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling;}f.type===ya?(d=Tg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Rg(f.type,f.key,f.props,null,a.mode,h),h.ref=Lg(a,d,f),h.return=a,a=h);}return g(a);case wa:a:{for(l=f.key;null!==
		d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=d.sibling;}d=Sg(f,a.mode,h);d.return=a;a=d;}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);Mg(a,f);}return "string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
		(c(a,d),d=Qg(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Ug=Og(!0),Vg=Og(!1),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null;}function ah(a){var b=Wg.current;E(Wg);a._currentValue=b;}function bh(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return;}}
		function ch(a,b){Xg=a;Zg=Yg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(dh=!0),a.firstContext=null);}function eh(a){var b=a._currentValue;if(Zg!==a)if(a={context:a,memoizedValue:b,next:null},null===Yg){if(null===Xg)throw Error(p(308));Yg=a;Xg.dependencies={lanes:0,firstContext:a};}else Yg=Yg.next=a;return b}var fh=null;function gh(a){null===fh?fh=[a]:fh.push(a);}
		function hh(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,gh(b)):(c.next=e.next,e.next=c);b.interleaved=c;return ih(a,d)}function ih(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var jh=!1;function kh(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null};}
		function lh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function mh(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
		function nh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return ih(a,c)}e=d.interleaved;null===e?(b.next=b,gh(d)):(b.next=e.next,e.next=b);d.interleaved=b;return ih(a,c)}function oh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
		function ph(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
		b;c.lastBaseUpdate=b;}
		function qh(a,b,c,d){var e=a.updateQueue;jh=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k));}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
		next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:jh=!0;}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h));}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
		h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null;}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);rh|=g;a.lanes=g;a.memoizedState=q;}}
		function sh(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d);}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(a){if(a===th)throw Error(p(174));return a}
		function yh(a,b){G(wh,b);G(vh,a);G(uh,th);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a);}E(uh);G(uh,b);}function zh(){E(uh);E(vh);E(wh);}function Ah(a){xh(wh.current);var b=xh(uh.current);var c=lb(b,a.type);b!==c&&(G(vh,a),G(uh,c));}function Bh(a){vh.current===a&&(E(uh),E(vh));}var L=Uf(0);
		function Ch(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}var Dh=[];
		function Eh(){for(var a=0;a<Dh.length;a++)Dh[a]._workInProgressVersionPrimary=null;Dh.length=0;}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N=null,O=null,Ih=!1,Jh=!1,Kh=0,Lh=0;function P(){throw Error(p(321));}function Mh(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return !1;return !0}
		function Nh(a,b,c,d,e,f){Hh=f;M=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Fh.current=null===a||null===a.memoizedState?Oh:Ph;a=c(d,e);if(Jh){f=0;do{Jh=!1;Kh=0;if(25<=f)throw Error(p(301));f+=1;O=N=null;b.updateQueue=null;Fh.current=Qh;a=c(d,e);}while(Jh)}Fh.current=Rh;b=null!==N&&null!==N.next;Hh=0;O=N=M=null;Ih=!1;if(b)throw Error(p(300));return a}function Sh(){var a=0!==Kh;Kh=0;return a}
		function Th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===O?M.memoizedState=O=a:O=O.next=a;return O}function Uh(){if(null===N){var a=M.alternate;a=null!==a?a.memoizedState:null;}else a=N.next;var b=null===O?M.memoizedState:O.next;if(null!==b)O=b,N=a;else {if(null===a)throw Error(p(310));N=a;a={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null};null===O?M.memoizedState=O=a:O=O.next=a;}return O}
		function Vh(a,b){return "function"===typeof b?b(a):b}
		function Wh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=N,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Hh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else {var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
		eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;M.lanes|=m;rh|=m;}l=l.next;}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(dh=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d;}a=c.interleaved;if(null!==a){e=a;do f=e.lane,M.lanes|=f,rh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return [b.memoizedState,c.dispatch]}
		function Xh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(dh=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}function Yh(){}
		function Zh(a,b){var c=M,d=Uh(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,dh=!0);d=d.queue;$h(ai.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==O&&O.memoizedState.tag&1){c.flags|=2048;bi(9,ci.bind(null,c,d,e,b),void 0,null);if(null===Q)throw Error(p(349));0!==(Hh&30)||di(c,b,e);}return e}function di(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a));}
		function ci(a,b,c,d){b.value=c;b.getSnapshot=d;ei(b)&&fi(a);}function ai(a,b,c){return c(function(){ei(b)&&fi(a);})}function ei(a){var b=a.getSnapshot;a=a.value;try{var c=b();return !He(a,c)}catch(d){return !0}}function fi(a){var b=ih(a,1);null!==b&&gi(b,a,1,-1);}
		function hi(a){var b=Th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:a};b.queue=a;a=a.dispatch=ii.bind(null,M,a);return [b.memoizedState,a]}
		function bi(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function ji(){return Uh().memoizedState}function ki(a,b,c,d){var e=Th();M.flags|=a;e.memoizedState=bi(1|b,c,void 0,void 0===d?null:d);}
		function li(a,b,c,d){var e=Uh();d=void 0===d?null:d;var f=void 0;if(null!==N){var g=N.memoizedState;f=g.destroy;if(null!==d&&Mh(d,g.deps)){e.memoizedState=bi(b,c,f,d);return}}M.flags|=a;e.memoizedState=bi(1|b,c,f,d);}function mi(a,b){return ki(8390656,8,a,b)}function $h(a,b){return li(2048,8,a,b)}function ni(a,b){return li(4,2,a,b)}function oi(a,b){return li(4,4,a,b)}
		function pi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}function qi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return li(4,4,pi.bind(null,b,a),c)}function ri(){}function si(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
		function ti(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function ui(a,b,c){if(0===(Hh&21))return a.baseState&&(a.baseState=!1,dh=!0),a.memoizedState=c;He(c,b)||(c=yc(),M.lanes|=c,rh|=c,a.baseState=!0);return b}function vi(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Gh.transition;Gh.transition={};try{a(!1),b();}finally{C=c,Gh.transition=d;}}function wi(){return Uh().memoizedState}
		function xi(a,b,c){var d=yi(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,c);else if(c=hh(a,b,c,d),null!==c){var e=R();gi(c,a,d,e);Bi(c,b,d);}}
		function ii(a,b,c){var d=yi(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,e);else {var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,gh(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=hh(a,b,e,d);null!==c&&(e=R(),gi(c,a,d,e),Bi(c,b,d));}}
		function zi(a){var b=a.alternate;return a===M||null!==b&&b===M}function Ai(a,b){Jh=Ih=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}function Bi(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
		var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:!1},Oh={readContext:eh,useCallback:function(a,b){Th().memoizedState=[a,void 0===b?null:b];return a},useContext:eh,useEffect:mi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ki(4194308,
		4,pi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ki(4194308,4,a,b)},useInsertionEffect:function(a,b){return ki(4,2,a,b)},useMemo:function(a,b){var c=Th();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=xi.bind(null,M,a);return [d.memoizedState,a]},useRef:function(a){var b=
		Th();a={current:a};return b.memoizedState=a},useState:hi,useDebugValue:ri,useDeferredValue:function(a){return Th().memoizedState=a},useTransition:function(){var a=hi(!1),b=a[0];a=vi.bind(null,a[1]);Th().memoizedState=a;return [b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=M,e=Th();if(I){if(void 0===c)throw Error(p(407));c=c();}else {c=b();if(null===Q)throw Error(p(349));0!==(Hh&30)||di(d,b,c);}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;mi(ai.bind(null,d,
		f,a),[a]);d.flags|=2048;bi(9,ci.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Th(),b=Q.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Kh++;0<c&&(b+="H"+c.toString(32));b+=":";}else c=Lh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},
		useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return ui(b,N.memoizedState,a)},useTransition:function(){var a=Wh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return null===
		N?b.memoizedState=a:ui(b,N.memoizedState,a)},useTransition:function(){var a=Xh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1};function Ci(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}function Di(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}
		var Ei={isMounted:function(a){return (a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e));},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e));},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=R(),d=
		yi(a),e=mh(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=nh(a,e,d);null!==b&&(gi(b,a,d,c),oh(b,a,d));}};function Fi(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
		function Gi(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=eh(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Ei;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
		function Hi(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Ei.enqueueReplaceState(b,b.state,null);}
		function Ii(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};kh(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=eh(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Di(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
		"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Ei.enqueueReplaceState(e,e.state,null),qh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308);}function Ji(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e,digest:null}}
		function Ki(a,b,c){return {value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function Li(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Mi="function"===typeof WeakMap?WeakMap:Map;function Ni(a,b,c){c=mh(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Oi||(Oi=!0,Pi=d);Li(a,b);};return c}
		function Qi(a,b,c){c=mh(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Li(a,b);};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Li(a,b);"function"!==typeof d&&(null===Ri?Ri=new Set([this]):Ri.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}
		function Si(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Mi;var e=new Set;d.set(b,e);}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ti.bind(null,a,b,c),b.then(a,a));}function Ui(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return;}while(null!==a);return null}
		function Vi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=mh(-1,1),b.tag=2,nh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Wi=ua.ReactCurrentOwner,dh=!1;function Xi(a,b,c,d){b.child=null===a?Vg(b,null,c,d):Ug(b,a.child,c,d);}
		function Yi(a,b,c,d,e){c=c.render;var f=b.ref;ch(b,e);d=Nh(a,b,c,d,f,e);c=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&c&&vg(b);b.flags|=1;Xi(a,b,d,e);return b.child}
		function $i(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!aj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bj(a,b,f,d,e);a=Rg(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return Zi(a,b,e)}b.flags|=1;a=Pg(f,d);a.ref=b.ref;a.return=b;return b.child=a}
		function bj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(dh=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(dh=!0);else return b.lanes=a.lanes,Zi(a,b,e)}return cj(a,b,c,d,e)}
		function dj(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=c;else {if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(ej,fj),fj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(ej,fj);fj|=d;}else null!==
		f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(ej,fj),fj|=d;Xi(a,b,e,c);return b.child}function gj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152;}function cj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);ch(b,e);c=Nh(a,b,c,d,f,e);d=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&d&&vg(b);b.flags|=1;Xi(a,b,c,e);return b.child}
		function hj(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b);}else f=!1;ch(b,e);if(null===b.stateNode)ij(a,b),Gi(b,c,d),Ii(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=eh(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
		(h!==d||k!==l)&&Hi(b,g,d,l);jh=!1;var r=b.memoizedState;g.state=r;qh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||jh?("function"===typeof m&&(Di(b,c,m,d),k=b.memoizedState),(h=jh||Fi(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
		("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1);}else {g=b.stateNode;lh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Ci(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=eh(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
		"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&Hi(b,g,d,k);jh=!1;r=b.memoizedState;g.state=r;qh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||jh?("function"===typeof y&&(Di(b,c,y,d),n=b.memoizedState),(l=jh||Fi(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
		g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
		a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1);}return jj(a,b,c,d,f,e)}
		function jj(a,b,c,d,e,f){gj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),Zi(a,b,f);d=b.stateNode;Wi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Ug(b,a.child,null,f),b.child=Ug(b,null,h,f)):Xi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function kj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);yh(a,b.containerInfo);}
		function lj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Xi(a,b,c,d);return b.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(a){return {baseLanes:a,cachePool:null,transitions:null}}
		function oj(a,b,c){var d=b.pendingProps,e=L.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(L,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
		g):f=pj(g,d,0,null),a=Tg(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=nj(c),b.memoizedState=mj,a):qj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return rj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=Pg(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=Pg(h,f):(f=Tg(f,g,c,null),f.flags|=2);f.return=
		b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?nj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=mj;return d}f=a.child;a=f.sibling;d=Pg(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
		function qj(a,b){b=pj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sj(a,b,c,d){null!==d&&Jg(d);Ug(b,a.child,null,c);a=qj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
		function rj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Ki(Error(p(422))),sj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=pj({mode:"visible",children:d.children},e,0,null);f=Tg(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Ug(b,a.child,null,g);b.child.memoizedState=nj(g);b.memoizedState=mj;return f}if(0===(b.mode&1))return sj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
		if(d)var h=d.dgst;d=h;f=Error(p(419));d=Ki(f,d,void 0);return sj(a,b,g,d)}h=0!==(g&a.childLanes);if(dh||h){d=Q;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0;}e=0!==(e&(d.suspendedLanes|g))?0:e;
		0!==e&&e!==f.retryLane&&(f.retryLane=e,ih(a,e),gi(d,a,e,-1));}tj();d=Ki(Error(p(421)));return sj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=uj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=qj(b,d.children);b.flags|=4096;return b}function vj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);bh(a.return,b,c);}
		function wj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e);}
		function xj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Xi(a,b,d.children,c);d=L.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else {if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&vj(a,c,b);else if(19===a.tag)vj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}G(L,d);if(0===(b.mode&1))b.memoizedState=
		null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Ch(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);wj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Ch(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}wj(b,!0,c,null,f);break;case "together":wj(b,!1,null,null,void 0);break;default:b.memoizedState=null;}return b.child}
		function ij(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);}function Zi(a,b,c){null!==a&&(b.dependencies=a.dependencies);rh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=Pg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Pg(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}
		function yj(a,b,c){switch(b.tag){case 3:kj(b);Ig();break;case 5:Ah(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:yh(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Wg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(L,L.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return oj(a,b,c);G(L,L.current&1);a=Zi(a,b,c);return null!==a?a.sibling:null}G(L,L.current&1);break;case 19:d=0!==(c&
		b.childLanes);if(0!==(a.flags&128)){if(d)return xj(a,b,c);b.flags|=128;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(L,L.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dj(a,b,c)}return Zi(a,b,c)}var zj,Aj,Bj,Cj;
		zj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Aj=function(){};
		Bj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;xh(uh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf);}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
		(c||(c={}),c[g]="");}else "dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g]);}else c||(f||(f=[]),f.push(l,
		c)),c=k;else "dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k));}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4;}};Cj=function(a,b,c,d){c!==d&&(b.flags|=4);};
		function Dj(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
		function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
		function Ej(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;zh();E(Wf);E(H);Eh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Fj(zg),zg=null));Aj(a,b);S(b);return null;case 5:Bh(b);var e=xh(wh.current);
		c=b.type;if(null!==a&&null!=b.stateNode)Bj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else {if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
		d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d);}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
		h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d);}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf);}d=e;b.updateQueue=d;null!==d&&(b.flags|=4);}else {g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
		"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;zj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
		a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d;}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
		c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g));}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
		!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf);}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1;}}d&&(b.flags|=4);}null!==b.ref&&(b.flags|=512,b.flags|=2097152);}S(b);return null;case 6:if(a&&null!=b.stateNode)Cj(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=xh(wh.current);xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
		xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1));}f&&(b.flags|=4);}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d;}S(b);return null;case 13:E(L);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
		a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b;}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1;}else null!==zg&&(Fj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(L.current&1)?0===T&&(T=3):tj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return zh(),
		Aj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return ah(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(L);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dj(f,!1);else {if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Ch(a);if(null!==g){b.flags|=128;Dj(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
		g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(L,L.current&1|2);return b.child}a=
		a.sibling;}null!==f.tail&&B()>Gj&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304);}else {if(!d)if(a=Ch(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dj(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Gj&&1073741824!==c&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g);}if(null!==f.tail)return b=f.tail,f.rendering=
		b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=L.current,G(L,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Hj(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(fj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
		function Ij(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return zh(),E(Wf),E(H),Eh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Bh(b),null;case 13:E(L);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig();}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(L),null;case 4:return zh(),null;case 10:return ah(b.type._context),null;case 22:case 23:return Hj(),
		null;case 24:return null;default:return null}}var Jj=!1,U=!1,Kj="function"===typeof WeakSet?WeakSet:Set,V=null;function Lj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null);}catch(d){W(a,b,d);}else c.current=null;}function Mj(a,b,c){try{c();}catch(d){W(a,b,d);}}var Nj=!1;
		function Oj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType;}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
		q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y;}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode;}q=y;}c=-1===h||-1===k?null:{start:h,end:k};}else c=null;}c=c||{start:0,end:0};}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
		case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Ci(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w;}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F);}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return;}n=Nj;Nj=!1;return n}
		function Pj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Mj(b,c,f);}e=e.next;}while(e!==d)}}function Qj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d();}c=c.next;}while(c!==b)}}function Rj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c;}"function"===typeof b?b(a):b.current=a;}}
		function Sj(a){var b=a.alternate;null!==b&&(a.alternate=null,Sj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null;}function Tj(a){return 5===a.tag||3===a.tag||4===a.tag}
		function Uj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Tj(a.return))return null;a=a.return;}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child;}if(!(a.flags&2))return a.stateNode}}
		function Vj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Vj(a,b,c),a=a.sibling;null!==a;)Vj(a,b,c),a=a.sibling;}
		function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling;}var X=null,Xj=!1;function Yj(a,b,c){for(c=c.child;null!==c;)Zj(a,b,c),c=c.sibling;}
		function Zj(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c);}catch(h){}switch(c.tag){case 5:U||Lj(c,b);case 6:var d=X,e=Xj;X=null;Yj(a,b,c);X=d;Xj=e;null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Xj;X=c.stateNode.containerInfo;Xj=!0;
		Yj(a,b,c);X=d;Xj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Mj(c,b,g):0!==(f&4)&&Mj(c,b,g));e=e.next;}while(e!==d)}Yj(a,b,c);break;case 1:if(!U&&(Lj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount();}catch(h){W(c,b,h);}Yj(a,b,c);break;case 21:Yj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
		c.memoizedState,Yj(a,b,c),U=d):Yj(a,b,c);break;default:Yj(a,b,c);}}function ak(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Kj);b.forEach(function(b){var d=bk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
		function ck(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Xj=!1;break a;case 3:X=h.stateNode.containerInfo;Xj=!0;break a;case 4:X=h.stateNode.containerInfo;Xj=!0;break a}h=h.return;}if(null===X)throw Error(p(160));Zj(f,g,e);X=null;Xj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null;}catch(l){W(e,b,l);}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)dk(b,a),b=b.sibling;}
		function dk(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ck(b,a);ek(a);if(d&4){try{Pj(3,a,a.return),Qj(3,a);}catch(t){W(a,a.return,t);}try{Pj(5,a,a.return);}catch(t){W(a,a.return,t);}}break;case 1:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);break;case 5:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"");}catch(t){W(a,a.return,t);}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
		a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l);}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
		f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1));}e[Pf]=f;}catch(t){W(a,a.return,t);}}break;case 6:ck(b,a);ek(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f;}catch(t){W(a,a.return,t);}}break;case 3:ck(b,a);ek(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo);}catch(t){W(a,a.return,t);}break;case 4:ck(b,a);ek(a);break;case 13:ck(b,a);ek(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
		null!==e.alternate&&null!==e.alternate.memoizedState||(fk=B()));d&4&&ak(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,ck(b,a),U=l):ck(b,a);ek(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Pj(4,r,r.return);break;case 1:Lj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
		b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount();}catch(t){W(d,c,t);}}break;case 5:Lj(r,r.return);break;case 22:if(null!==r.memoizedState){gk(q);continue}}null!==y?(y.return=r,V=y):gk(q);}m=m.sibling;}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
		rb("display",g));}catch(t){W(a,a.return,t);}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps;}catch(t){W(a,a.return,t);}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return;}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling;}}break;case 19:ck(b,a);ek(a);d&4&&ak(a);break;case 21:break;default:ck(b,
		a),ek(a);}}function ek(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Tj(c)){var d=c;break a}c=c.return;}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Uj(a);Wj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Uj(a);Vj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k);}a.flags&=-3;}b&4096&&(a.flags&=-4097);}function hk(a,b,c){V=a;ik(a);}
		function ik(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Jj;var l=U;Jj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?jk(e):null!==k?(k.return=g,V=k):jk(e);for(;null!==f;)V=f,ik(f),f=f.sibling;V=e;Jj=h;U=l;}kk(a);}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):kk(a);}}
		function kk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Qj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else {var e=b.elementType===b.type?c.memoizedProps:Ci(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate);}var f=b.updateQueue;null!==f&&sh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
		b.child.stateNode;break;case 1:c=b.child.stateNode;}sh(b,g,c);}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src);}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q);}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
		default:throw Error(p(163));}U||b.flags&512&&Rj(b);}catch(r){W(b,b.return,r);}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return;}}function gk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return;}}
		function jk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Qj(4,b);}catch(k){W(b,c,k);}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount();}catch(k){W(b,e,k);}}var f=b.return;try{Rj(b);}catch(k){W(b,f,k);}break;case 5:var g=b.return;try{Rj(b);}catch(k){W(b,g,k);}}}catch(k){W(b,b.return,k);}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return;}}
		var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=Infinity,uk=null,Oi=!1,Pi=null,Ri=null,vk=!1,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return 0!==(K&6)?B():-1!==Ak?Ak:Ak=B()}
		function yi(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Bk&&(Bk=yc()),Bk;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function gi(a,b,c,d){if(50<yk)throw yk=0,zk=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==Q)a===Q&&(0===(K&2)&&(qk|=c),4===T&&Ck(a,Z)),Dk(a,d),1===c&&0===K&&0===(b.mode&1)&&(Gj=B()+500,fg&&jg());}
		function Dk(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===Q?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Ek.bind(null,a)):hg(Ek.bind(null,a)),Jf(function(){0===(K&6)&&jg();}),c=null;else {switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc;}c=Fk(c,Gk.bind(null,a));}a.callbackPriority=b;a.callbackNode=c;}}
		function Gk(a,b){Ak=-1;Bk=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Hk()&&a.callbackNode!==c)return null;var d=uc(a,a===Q?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Ik(a,d);else {b=d;var e=K;K|=2;var f=Jk();if(Q!==a||Z!==b)uk=null,Gj=B()+500,Kk(a,b);do try{Lk();break}catch(h){Mk(a,h);}while(1);$g();mk.current=f;K=e;null!==Y?b=0:(Q=null,Z=0,b=T);}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Nk(a,e)));if(1===b)throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;if(6===b)Ck(a,d);
		else {e=a.current.alternate;if(0===(d&30)&&!Ok(e)&&(b=Ik(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Nk(a,f))),1===b))throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Pk(a,tk,uk);break;case 3:Ck(a,d);if((d&130023424)===d&&(b=fk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){R();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),b);break}Pk(a,tk,uk);break;case 4:Ck(a,d);if((d&4194240)===
		d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f;}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*lk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),d);break}Pk(a,tk,uk);break;case 5:Pk(a,tk,uk);break;default:throw Error(p(329));}}}Dk(a,B());return a.callbackNode===c?Gk.bind(null,a):null}
		function Nk(a,b){var c=sk;a.current.memoizedState.isDehydrated&&(Kk(a,b).flags|=256);a=Ik(a,b);2!==a&&(b=tk,tk=c,null!==b&&Fj(b));return a}function Fj(a){null===tk?tk=a:tk.push.apply(tk,a);}
		function Ok(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return !1}catch(g){return !1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else {if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return !0;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return !0}
		function Ck(a,b){b&=~rk;b&=~qk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d;}}function Ek(a){if(0!==(K&6))throw Error(p(327));Hk();var b=uc(a,0);if(0===(b&1))return Dk(a,B()),null;var c=Ik(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Nk(a,d));}if(1===c)throw c=pk,Kk(a,0),Ck(a,b),Dk(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Pk(a,tk,uk);Dk(a,B());return null}
		function Qk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Gj=B()+500,fg&&jg());}}function Rk(a){null!==wk&&0===wk.tag&&0===(K&6)&&Hk();var b=K;K|=1;var c=ok.transition,d=C;try{if(ok.transition=null,C=1,a)return a()}finally{C=d,ok.transition=c,K=b,0===(K&6)&&jg();}}function Hj(){fj=ej.current;E(ej);}
		function Kk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:zh();E(Wf);E(H);Eh();break;case 5:Bh(d);break;case 4:zh();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(d.type._context);break;case 22:case 23:Hj();}c=c.return;}Q=a;Y=a=Pg(a.current,null);Z=fj=b;T=0;pk=null;rk=qk=rh=0;tk=sk=null;if(null!==fh){for(b=
		0;b<fh.length;b++)if(c=fh[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g;}c.pending=d;}fh=null;}return a}
		function Mk(a,b){do{var c=Y;try{$g();Fh.current=Rh;if(Ih){for(var d=M.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}Ih=!1;}Hh=0;O=N=M=null;Jh=!1;Kh=0;nk.current=null;if(null===c||null===c.return){T=1;pk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
		m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null);}var y=Ui(g);if(null!==y){y.flags&=-257;Vi(y,g,h,f,b);y.mode&1&&Si(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t;}else n.add(k);break a}else {if(0===(b&1)){Si(f,l,b);tj();break a}k=Error(p(426));}}else if(I&&h.mode&1){var J=Ui(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Vi(J,g,h,f,b);Jg(Ji(k,h));break a}}f=k=Ji(k,h);4!==T&&(T=2);null===sk?sk=[f]:sk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
		b&=-b;f.lanes|=b;var x=Ni(f,k,b);ph(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Ri||!Ri.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Qi(f,h,b);ph(f,F);break a}}f=f.return;}while(null!==f)}Sk(c);}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Jk(){var a=mk.current;mk.current=Rh;return null===a?Rh:a}
		function tj(){if(0===T||3===T||2===T)T=4;null===Q||0===(rh&268435455)&&0===(qk&268435455)||Ck(Q,Z);}function Ik(a,b){var c=K;K|=2;var d=Jk();if(Q!==a||Z!==b)uk=null,Kk(a,b);do try{Tk();break}catch(e){Mk(a,e);}while(1);$g();K=c;mk.current=d;if(null!==Y)throw Error(p(261));Q=null;Z=0;return T}function Tk(){for(;null!==Y;)Uk(Y);}function Lk(){for(;null!==Y&&!cc();)Uk(Y);}function Uk(a){var b=Vk(a.alternate,a,fj);a.memoizedProps=a.pendingProps;null===b?Sk(a):Y=b;nk.current=null;}
		function Sk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Ej(c,b,fj),null!==c){Y=c;return}}else {c=Ij(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else {T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a;}while(null!==b);0===T&&(T=5);}function Pk(a,b,c){var d=C,e=ok.transition;try{ok.transition=null,C=1,Wk(a,b,c,d);}finally{ok.transition=e,C=d;}return null}
		function Wk(a,b,c,d){do Hk();while(null!==wk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===Q&&(Y=Q=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||vk||(vk=!0,Fk(hc,function(){Hk();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ok.transition;ok.transition=null;
		var g=C;C=1;var h=K;K|=4;nk.current=null;Oj(a,c);dk(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;hk(c);dc();K=h;C=g;ok.transition=f;}else a.current=c;vk&&(vk=!1,wk=a,xk=e);f=a.pendingLanes;0===f&&(Ri=null);mc(c.stateNode);Dk(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Oi)throw Oi=!1,a=Pi,Pi=null,a;0!==(xk&1)&&0!==a.tag&&Hk();f=a.pendingLanes;0!==(f&1)?a===zk?yk++:(yk=0,zk=a):yk=0;jg();return null}
		function Hk(){if(null!==wk){var a=Dc(xk),b=ok.transition,c=C;try{ok.transition=null;C=16>a?16:a;if(null===wk)var d=!1;else {a=wk;wk=null;xk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Pj(8,m,f);}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Sj(m);if(m===
		l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y;}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J;}while(null!==t)}}V=f;}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Pj(9,f,f.return);}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return;}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
		u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Qj(9,h);}}catch(na){W(h,h.return,na);}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return;}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a);}catch(na){}d=!0;}return d}finally{C=c,ok.transition=b;}}return !1}function Xk(a,b,c){b=Ji(c,b);b=Ni(a,b,1);a=nh(a,b,1);b=R();null!==a&&(Ac(a,1,b),Dk(a,b));}
		function W(a,b,c){if(3===a.tag)Xk(a,a,c);else for(;null!==b;){if(3===b.tag){Xk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ri||!Ri.has(d))){a=Ji(c,a);a=Qi(b,a,1);b=nh(b,a,1);a=R();null!==b&&(Ac(b,1,a),Dk(b,a));break}}b=b.return;}}
		function Ti(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=R();a.pingedLanes|=a.suspendedLanes&c;Q===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-fk?Kk(a,0):rk|=c);Dk(a,b);}function Yk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=R();a=ih(a,b);null!==a&&(Ac(a,b,c),Dk(a,c));}function uj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Yk(a,c);}
		function bk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Yk(a,c);}var Vk;
		Vk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)dh=!0;else {if(0===(a.lanes&c)&&0===(b.flags&128))return dh=!1,yj(a,b,c);dh=0!==(a.flags&131072)?!0:!1;}else dh=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;ij(a,b);a=b.pendingProps;var e=Yf(b,H.current);ch(b,c);e=Nh(null,b,d,a,e,c);var f=Sh();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
		null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,kh(b),e.updater=Ei,b.stateNode=e,e._reactInternals=b,Ii(b,d,a,c),b=jj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Xi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{ij(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Zk(d);a=Ci(d,a);switch(e){case 0:b=cj(null,b,d,a,c);break a;case 1:b=hj(null,b,d,a,c);break a;case 11:b=Yi(null,b,d,a,c);break a;case 14:b=$i(null,b,d,Ci(d.type,a),c);break a}throw Error(p(306,
		d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),cj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),hj(a,b,d,e,c);case 3:a:{kj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;lh(a,b);qh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
		f,b.memoizedState=f,b.flags&256){e=Ji(Error(p(423)),b);b=lj(a,b,d,c,e);break a}else if(d!==e){e=Ji(Error(p(424)),b);b=lj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Vg(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else {Ig();if(d===e){b=Zi(a,b,c);break a}Xi(a,b,d,c);}b=b.child;}return b;case 5:return Ah(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
		gj(a,b),Xi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return oj(a,b,c);case 4:return yh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Ug(b,null,d,c):Xi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),Yi(a,b,d,e,c);case 7:return Xi(a,b,b.pendingProps,c),b.child;case 8:return Xi(a,b,b.pendingProps.children,c),b.child;case 12:return Xi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
		g=e.value;G(Wg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=Zi(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=mh(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k;}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);bh(f.return,
		c,b);h.lanes|=c;break}k=k.next;}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);bh(g,c,b);g=f.sibling;}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return;}f=g;}Xi(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,d=b.pendingProps.children,ch(b,c),e=eh(e),d=d(e),b.flags|=1,Xi(a,b,d,c),
		b.child;case 14:return d=b.type,e=Ci(d,b.pendingProps),e=Ci(d.type,e),$i(a,b,d,e,c);case 15:return bj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),ij(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,ch(b,c),Gi(b,d,e),Ii(b,d,e,c),jj(null,b,d,!0,a,c);case 19:return xj(a,b,c);case 22:return dj(a,b,c)}throw Error(p(156,b.tag));};function Fk(a,b){return ac(a,b)}
		function $k(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null;}function Bg(a,b,c,d){return new $k(a,b,c,d)}function aj(a){a=a.prototype;return !(!a||!a.isReactComponent)}
		function Zk(a){if("function"===typeof a)return aj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
		function Pg(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
		c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
		function Rg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)aj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Tg(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return pj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
		break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Tg(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function pj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function Qg(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
		function Sg(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
		function al(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
		null;}function bl(a,b,c,d,e,f,g,h,k){a=new al(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};kh(f);return a}function cl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
		function dl(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return;}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
		function el(a,b,c,d,e,f,g,h,k){a=bl(c,d,!0,a,e,f,g,h,k);a.context=dl(null);c=a.current;d=R();e=yi(c);f=mh(d,e);f.callback=void 0!==b&&null!==b?b:null;nh(c,f,e);a.current.lanes=e;Ac(a,e,d);Dk(a,d);return a}function fl(a,b,c,d){var e=b.current,f=R(),g=yi(e);c=dl(c);null===b.context?b.context=c:b.pendingContext=c;b=mh(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=nh(e,b,g);null!==a&&(gi(a,e,g,f),oh(a,e,g));return g}
		function gl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function hl(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function il(a,b){hl(a,b);(a=a.alternate)&&hl(a,b);}function jl(){return null}var kl="function"===typeof reportError?reportError:function(a){console.error(a);};function ll(a){this._internalRoot=a;}
		ml.prototype.render=ll.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));fl(a,b,null,null);};ml.prototype.unmount=ll.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Rk(function(){fl(null,a,null,null);});b[uf]=null;}};function ml(a){this._internalRoot=a;}
		ml.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a);}};function nl(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function ol(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function pl(){}
		function ql(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=gl(g);f.call(a);};}var g=el(b,d,a,0,null,!1,!1,"",pl);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Rk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=gl(k);h.call(a);};}var k=bl(a,0,!1,null,null,!1,!1,"",pl);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Rk(function(){fl(b,k,c,d);});return k}
		function rl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=gl(g);h.call(a);};}fl(b,g,a,e);}else g=ql(c,b,a,e,d);return gl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Dk(b,B()),0===(K&6)&&(Gj=B()+500,jg()));}break;case 13:Rk(function(){var b=ih(a,1);if(null!==b){var c=R();gi(b,a,1,c);}}),il(a,1);}};
		Fc=function(a){if(13===a.tag){var b=ih(a,134217728);if(null!==b){var c=R();gi(b,a,134217728,c);}il(a,134217728);}};Gc=function(a){if(13===a.tag){var b=yi(a),c=ih(a,b);if(null!==c){var d=R();gi(c,a,b,d);}il(a,b);}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c;}};
		yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e);}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1);}};Gb=Qk;Hb=Rk;
		var sl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"};
		var ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||
		jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl;}catch(a){}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;
		reactDom_production_min.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!nl(b))throw Error(p(200));return cl(a,b,null,c)};reactDom_production_min.createRoot=function(a,b){if(!nl(a))throw Error(p(299));var c=!1,d="",e=kl;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=bl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ll(b)};
		reactDom_production_min.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};reactDom_production_min.flushSync=function(a){return Rk(a)};reactDom_production_min.hydrate=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!0,c)};
		reactDom_production_min.hydrateRoot=function(a,b,c){if(!nl(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=kl;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=el(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
		e);return new ml(b)};reactDom_production_min.render=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!1,c)};reactDom_production_min.unmountComponentAtNode=function(a){if(!ol(a))throw Error(p(40));return a._reactRootContainer?(Rk(function(){rl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null;});}),!0):!1};reactDom_production_min.unstable_batchedUpdates=Qk;
		reactDom_production_min.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!ol(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return rl(a,b,c,!1,d)};reactDom_production_min.version="18.3.1-next-f1338f8080-20240426";
		return reactDom_production_min;
	}

	function checkDCE() {
	  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	  if (
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
	  ) {
	    return;
	  }
	  try {
	    // Verify that the code above has been dead code eliminated (DCE'd).
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    // DevTools shouldn't crash React, no matter what.
	    // We should still report in case we break this code.
	    console.error(err);
	  }
	}

	{
	  // DCE check should happen before ReactDOM bundle executes so that
	  // DevTools can report bad minification during injection.
	  checkDCE();
	  reactDom.exports = requireReactDom_production_min();
	}

	var reactDomExports = reactDom.exports;
	var ReactDOM = /*@__PURE__*/getDefaultExportFromCjs(reactDomExports);

	/******************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */

	function __awaiter(thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	}

	typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
	    var e = new Error(message);
	    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
	};

	function bind(fn, thisArg) {
	  return function wrap() {
	    return fn.apply(thisArg, arguments);
	  };
	}

	// utils is a library of generic helper functions non-specific to axios

	const {toString} = Object.prototype;
	const {getPrototypeOf: getPrototypeOf$1} = Object;

	const kindOf = (cache => thing => {
	    const str = toString.call(thing);
	    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
	})(Object.create(null));

	const kindOfTest = (type) => {
	  type = type.toLowerCase();
	  return (thing) => kindOf(thing) === type
	};

	const typeOfTest = type => thing => typeof thing === type;

	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 *
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	const {isArray} = Array;

	/**
	 * Determine if a value is undefined
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	const isUndefined = typeOfTest('undefined');

	/**
	 * Determine if a value is a Buffer
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a Buffer, otherwise false
	 */
	function isBuffer(val) {
	  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
	    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
	}

	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	const isArrayBuffer = kindOfTest('ArrayBuffer');


	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  let result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
	  }
	  return result;
	}

	/**
	 * Determine if a value is a String
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	const isString = typeOfTest('string');

	/**
	 * Determine if a value is a Function
	 *
	 * @param {*} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	const isFunction = typeOfTest('function');

	/**
	 * Determine if a value is a Number
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	const isNumber = typeOfTest('number');

	/**
	 * Determine if a value is an Object
	 *
	 * @param {*} thing The value to test
	 *
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	const isObject$5 = (thing) => thing !== null && typeof thing === 'object';

	/**
	 * Determine if a value is a Boolean
	 *
	 * @param {*} thing The value to test
	 * @returns {boolean} True if value is a Boolean, otherwise false
	 */
	const isBoolean = thing => thing === true || thing === false;

	/**
	 * Determine if a value is a plain Object
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a plain Object, otherwise false
	 */
	const isPlainObject$2 = (val) => {
	  if (kindOf(val) !== 'object') {
	    return false;
	  }

	  const prototype = getPrototypeOf$1(val);
	  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
	};

	/**
	 * Determine if a value is a Date
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	const isDate = kindOfTest('Date');

	/**
	 * Determine if a value is a File
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	const isFile = kindOfTest('File');

	/**
	 * Determine if a value is a Blob
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	const isBlob = kindOfTest('Blob');

	/**
	 * Determine if a value is a FileList
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	const isFileList = kindOfTest('FileList');

	/**
	 * Determine if a value is a Stream
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	const isStream = (val) => isObject$5(val) && isFunction(val.pipe);

	/**
	 * Determine if a value is a FormData
	 *
	 * @param {*} thing The value to test
	 *
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	const isFormData = (thing) => {
	  let kind;
	  return thing && (
	    (typeof FormData === 'function' && thing instanceof FormData) || (
	      isFunction(thing.append) && (
	        (kind = kindOf(thing)) === 'formdata' ||
	        // detect form-data instance
	        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
	      )
	    )
	  )
	};

	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	const isURLSearchParams = kindOfTest('URLSearchParams');

	const [isReadableStream, isRequest, isResponse, isHeaders] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(kindOfTest);

	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 *
	 * @returns {String} The String freed of excess whitespace
	 */
	const trim = (str) => str.trim ?
	  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 *
	 * @param {Boolean} [allOwnKeys = false]
	 * @returns {any}
	 */
	function forEach(obj, fn, {allOwnKeys = false} = {}) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }

	  let i;
	  let l;

	  // Force an array if not already something iterable
	  if (typeof obj !== 'object') {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }

	  if (isArray(obj)) {
	    // Iterate over array values
	    for (i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
	    const len = keys.length;
	    let key;

	    for (i = 0; i < len; i++) {
	      key = keys[i];
	      fn.call(null, obj[key], key, obj);
	    }
	  }
	}

	function findKey(obj, key) {
	  key = key.toLowerCase();
	  const keys = Object.keys(obj);
	  let i = keys.length;
	  let _key;
	  while (i-- > 0) {
	    _key = keys[i];
	    if (key === _key.toLowerCase()) {
	      return _key;
	    }
	  }
	  return null;
	}

	const _global = (() => {
	  /*eslint no-undef:0*/
	  if (typeof globalThis !== "undefined") return globalThis;
	  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
	})();

	const isContextDefined = (context) => !isUndefined(context) && context !== _global;

	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 *
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  const {caseless} = isContextDefined(this) && this || {};
	  const result = {};
	  const assignValue = (val, key) => {
	    const targetKey = caseless && findKey(result, key) || key;
	    if (isPlainObject$2(result[targetKey]) && isPlainObject$2(val)) {
	      result[targetKey] = merge(result[targetKey], val);
	    } else if (isPlainObject$2(val)) {
	      result[targetKey] = merge({}, val);
	    } else if (isArray(val)) {
	      result[targetKey] = val.slice();
	    } else {
	      result[targetKey] = val;
	    }
	  };

	  for (let i = 0, l = arguments.length; i < l; i++) {
	    arguments[i] && forEach(arguments[i], assignValue);
	  }
	  return result;
	}

	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 *
	 * @param {Boolean} [allOwnKeys]
	 * @returns {Object} The resulting value of object a
	 */
	const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
	  forEach(b, (val, key) => {
	    if (thisArg && isFunction(val)) {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  }, {allOwnKeys});
	  return a;
	};

	/**
	 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
	 *
	 * @param {string} content with BOM
	 *
	 * @returns {string} content value without BOM
	 */
	const stripBOM = (content) => {
	  if (content.charCodeAt(0) === 0xFEFF) {
	    content = content.slice(1);
	  }
	  return content;
	};

	/**
	 * Inherit the prototype methods from one constructor into another
	 * @param {function} constructor
	 * @param {function} superConstructor
	 * @param {object} [props]
	 * @param {object} [descriptors]
	 *
	 * @returns {void}
	 */
	const inherits = (constructor, superConstructor, props, descriptors) => {
	  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
	  constructor.prototype.constructor = constructor;
	  Object.defineProperty(constructor, 'super', {
	    value: superConstructor.prototype
	  });
	  props && Object.assign(constructor.prototype, props);
	};

	/**
	 * Resolve object with deep prototype chain to a flat object
	 * @param {Object} sourceObj source object
	 * @param {Object} [destObj]
	 * @param {Function|Boolean} [filter]
	 * @param {Function} [propFilter]
	 *
	 * @returns {Object}
	 */
	const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
	  let props;
	  let i;
	  let prop;
	  const merged = {};

	  destObj = destObj || {};
	  // eslint-disable-next-line no-eq-null,eqeqeq
	  if (sourceObj == null) return destObj;

	  do {
	    props = Object.getOwnPropertyNames(sourceObj);
	    i = props.length;
	    while (i-- > 0) {
	      prop = props[i];
	      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
	        destObj[prop] = sourceObj[prop];
	        merged[prop] = true;
	      }
	    }
	    sourceObj = filter !== false && getPrototypeOf$1(sourceObj);
	  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

	  return destObj;
	};

	/**
	 * Determines whether a string ends with the characters of a specified string
	 *
	 * @param {String} str
	 * @param {String} searchString
	 * @param {Number} [position= 0]
	 *
	 * @returns {boolean}
	 */
	const endsWith = (str, searchString, position) => {
	  str = String(str);
	  if (position === undefined || position > str.length) {
	    position = str.length;
	  }
	  position -= searchString.length;
	  const lastIndex = str.indexOf(searchString, position);
	  return lastIndex !== -1 && lastIndex === position;
	};


	/**
	 * Returns new array from array like object or null if failed
	 *
	 * @param {*} [thing]
	 *
	 * @returns {?Array}
	 */
	const toArray = (thing) => {
	  if (!thing) return null;
	  if (isArray(thing)) return thing;
	  let i = thing.length;
	  if (!isNumber(i)) return null;
	  const arr = new Array(i);
	  while (i-- > 0) {
	    arr[i] = thing[i];
	  }
	  return arr;
	};

	/**
	 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
	 * thing passed in is an instance of Uint8Array
	 *
	 * @param {TypedArray}
	 *
	 * @returns {Array}
	 */
	// eslint-disable-next-line func-names
	const isTypedArray = (TypedArray => {
	  // eslint-disable-next-line func-names
	  return thing => {
	    return TypedArray && thing instanceof TypedArray;
	  };
	})(typeof Uint8Array !== 'undefined' && getPrototypeOf$1(Uint8Array));

	/**
	 * For each entry in the object, call the function with the key and value.
	 *
	 * @param {Object<any, any>} obj - The object to iterate over.
	 * @param {Function} fn - The function to call for each entry.
	 *
	 * @returns {void}
	 */
	const forEachEntry = (obj, fn) => {
	  const generator = obj && obj[Symbol.iterator];

	  const iterator = generator.call(obj);

	  let result;

	  while ((result = iterator.next()) && !result.done) {
	    const pair = result.value;
	    fn.call(obj, pair[0], pair[1]);
	  }
	};

	/**
	 * It takes a regular expression and a string, and returns an array of all the matches
	 *
	 * @param {string} regExp - The regular expression to match against.
	 * @param {string} str - The string to search.
	 *
	 * @returns {Array<boolean>}
	 */
	const matchAll = (regExp, str) => {
	  let matches;
	  const arr = [];

	  while ((matches = regExp.exec(str)) !== null) {
	    arr.push(matches);
	  }

	  return arr;
	};

	/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
	const isHTMLForm = kindOfTest('HTMLFormElement');

	const toCamelCase = str => {
	  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
	    function replacer(m, p1, p2) {
	      return p1.toUpperCase() + p2;
	    }
	  );
	};

	/* Creating a function that will check if an object has a property. */
	const hasOwnProperty$1 = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

	/**
	 * Determine if a value is a RegExp object
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a RegExp object, otherwise false
	 */
	const isRegExp = kindOfTest('RegExp');

	const reduceDescriptors = (obj, reducer) => {
	  const descriptors = Object.getOwnPropertyDescriptors(obj);
	  const reducedDescriptors = {};

	  forEach(descriptors, (descriptor, name) => {
	    let ret;
	    if ((ret = reducer(descriptor, name, obj)) !== false) {
	      reducedDescriptors[name] = ret || descriptor;
	    }
	  });

	  Object.defineProperties(obj, reducedDescriptors);
	};

	/**
	 * Makes all methods read-only
	 * @param {Object} obj
	 */

	const freezeMethods = (obj) => {
	  reduceDescriptors(obj, (descriptor, name) => {
	    // skip restricted props in strict mode
	    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
	      return false;
	    }

	    const value = obj[name];

	    if (!isFunction(value)) return;

	    descriptor.enumerable = false;

	    if ('writable' in descriptor) {
	      descriptor.writable = false;
	      return;
	    }

	    if (!descriptor.set) {
	      descriptor.set = () => {
	        throw Error('Can not rewrite read-only method \'' + name + '\'');
	      };
	    }
	  });
	};

	const toObjectSet = (arrayOrString, delimiter) => {
	  const obj = {};

	  const define = (arr) => {
	    arr.forEach(value => {
	      obj[value] = true;
	    });
	  };

	  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

	  return obj;
	};

	const noop = () => {};

	const toFiniteNumber = (value, defaultValue) => {
	  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
	};

	const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

	const DIGIT = '0123456789';

	const ALPHABET = {
	  DIGIT,
	  ALPHA,
	  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
	};

	const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
	  let str = '';
	  const {length} = alphabet;
	  while (size--) {
	    str += alphabet[Math.random() * length|0];
	  }

	  return str;
	};

	/**
	 * If the thing is a FormData object, return true, otherwise return false.
	 *
	 * @param {unknown} thing - The thing to check.
	 *
	 * @returns {boolean}
	 */
	function isSpecCompliantForm(thing) {
	  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
	}

	const toJSONObject = (obj) => {
	  const stack = new Array(10);

	  const visit = (source, i) => {

	    if (isObject$5(source)) {
	      if (stack.indexOf(source) >= 0) {
	        return;
	      }

	      if(!('toJSON' in source)) {
	        stack[i] = source;
	        const target = isArray(source) ? [] : {};

	        forEach(source, (value, key) => {
	          const reducedValue = visit(value, i + 1);
	          !isUndefined(reducedValue) && (target[key] = reducedValue);
	        });

	        stack[i] = undefined;

	        return target;
	      }
	    }

	    return source;
	  };

	  return visit(obj, 0);
	};

	const isAsyncFn = kindOfTest('AsyncFunction');

	const isThenable = (thing) =>
	  thing && (isObject$5(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

	// original code
	// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34

	const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
	  if (setImmediateSupported) {
	    return setImmediate;
	  }

	  return postMessageSupported ? ((token, callbacks) => {
	    _global.addEventListener("message", ({source, data}) => {
	      if (source === _global && data === token) {
	        callbacks.length && callbacks.shift()();
	      }
	    }, false);

	    return (cb) => {
	      callbacks.push(cb);
	      _global.postMessage(token, "*");
	    }
	  })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
	})(
	  typeof setImmediate === 'function',
	  isFunction(_global.postMessage)
	);

	const asap = typeof queueMicrotask !== 'undefined' ?
	  queueMicrotask.bind(_global) : ( typeof process !== 'undefined' && process.nextTick || _setImmediate);

	// *********************

	var utils$1 = {
	  isArray,
	  isArrayBuffer,
	  isBuffer,
	  isFormData,
	  isArrayBufferView,
	  isString,
	  isNumber,
	  isBoolean,
	  isObject: isObject$5,
	  isPlainObject: isPlainObject$2,
	  isReadableStream,
	  isRequest,
	  isResponse,
	  isHeaders,
	  isUndefined,
	  isDate,
	  isFile,
	  isBlob,
	  isRegExp,
	  isFunction,
	  isStream,
	  isURLSearchParams,
	  isTypedArray,
	  isFileList,
	  forEach,
	  merge,
	  extend,
	  trim,
	  stripBOM,
	  inherits,
	  toFlatObject,
	  kindOf,
	  kindOfTest,
	  endsWith,
	  toArray,
	  forEachEntry,
	  matchAll,
	  isHTMLForm,
	  hasOwnProperty: hasOwnProperty$1,
	  hasOwnProp: hasOwnProperty$1, // an alias to avoid ESLint no-prototype-builtins detection
	  reduceDescriptors,
	  freezeMethods,
	  toObjectSet,
	  toCamelCase,
	  noop,
	  toFiniteNumber,
	  findKey,
	  global: _global,
	  isContextDefined,
	  ALPHABET,
	  generateString,
	  isSpecCompliantForm,
	  toJSONObject,
	  isAsyncFn,
	  isThenable,
	  setImmediate: _setImmediate,
	  asap
	};

	/**
	 * Create an Error with the specified message, config, error code, request and response.
	 *
	 * @param {string} message The error message.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [config] The config.
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 *
	 * @returns {Error} The created error.
	 */
	function AxiosError(message, code, config, request, response) {
	  Error.call(this);

	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, this.constructor);
	  } else {
	    this.stack = (new Error()).stack;
	  }

	  this.message = message;
	  this.name = 'AxiosError';
	  code && (this.code = code);
	  config && (this.config = config);
	  request && (this.request = request);
	  response && (this.response = response);
	}

	utils$1.inherits(AxiosError, Error, {
	  toJSON: function toJSON() {
	    return {
	      // Standard
	      message: this.message,
	      name: this.name,
	      // Microsoft
	      description: this.description,
	      number: this.number,
	      // Mozilla
	      fileName: this.fileName,
	      lineNumber: this.lineNumber,
	      columnNumber: this.columnNumber,
	      stack: this.stack,
	      // Axios
	      config: utils$1.toJSONObject(this.config),
	      code: this.code,
	      status: this.response && this.response.status ? this.response.status : null
	    };
	  }
	});

	const prototype$1 = AxiosError.prototype;
	const descriptors = {};

	[
	  'ERR_BAD_OPTION_VALUE',
	  'ERR_BAD_OPTION',
	  'ECONNABORTED',
	  'ETIMEDOUT',
	  'ERR_NETWORK',
	  'ERR_FR_TOO_MANY_REDIRECTS',
	  'ERR_DEPRECATED',
	  'ERR_BAD_RESPONSE',
	  'ERR_BAD_REQUEST',
	  'ERR_CANCELED',
	  'ERR_NOT_SUPPORT',
	  'ERR_INVALID_URL'
	// eslint-disable-next-line func-names
	].forEach(code => {
	  descriptors[code] = {value: code};
	});

	Object.defineProperties(AxiosError, descriptors);
	Object.defineProperty(prototype$1, 'isAxiosError', {value: true});

	// eslint-disable-next-line func-names
	AxiosError.from = (error, code, config, request, response, customProps) => {
	  const axiosError = Object.create(prototype$1);

	  utils$1.toFlatObject(error, axiosError, function filter(obj) {
	    return obj !== Error.prototype;
	  }, prop => {
	    return prop !== 'isAxiosError';
	  });

	  AxiosError.call(axiosError, error.message, code, config, request, response);

	  axiosError.cause = error;

	  axiosError.name = error.name;

	  customProps && Object.assign(axiosError, customProps);

	  return axiosError;
	};

	// eslint-disable-next-line strict
	var httpAdapter = null;

	/**
	 * Determines if the given thing is a array or js object.
	 *
	 * @param {string} thing - The object or array to be visited.
	 *
	 * @returns {boolean}
	 */
	function isVisitable(thing) {
	  return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
	}

	/**
	 * It removes the brackets from the end of a string
	 *
	 * @param {string} key - The key of the parameter.
	 *
	 * @returns {string} the key without the brackets.
	 */
	function removeBrackets(key) {
	  return utils$1.endsWith(key, '[]') ? key.slice(0, -2) : key;
	}

	/**
	 * It takes a path, a key, and a boolean, and returns a string
	 *
	 * @param {string} path - The path to the current key.
	 * @param {string} key - The key of the current object being iterated over.
	 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
	 *
	 * @returns {string} The path to the current key.
	 */
	function renderKey(path, key, dots) {
	  if (!path) return key;
	  return path.concat(key).map(function each(token, i) {
	    // eslint-disable-next-line no-param-reassign
	    token = removeBrackets(token);
	    return !dots && i ? '[' + token + ']' : token;
	  }).join(dots ? '.' : '');
	}

	/**
	 * If the array is an array and none of its elements are visitable, then it's a flat array.
	 *
	 * @param {Array<any>} arr - The array to check
	 *
	 * @returns {boolean}
	 */
	function isFlatArray(arr) {
	  return utils$1.isArray(arr) && !arr.some(isVisitable);
	}

	const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
	  return /^is[A-Z]/.test(prop);
	});

	/**
	 * Convert a data object to FormData
	 *
	 * @param {Object} obj
	 * @param {?Object} [formData]
	 * @param {?Object} [options]
	 * @param {Function} [options.visitor]
	 * @param {Boolean} [options.metaTokens = true]
	 * @param {Boolean} [options.dots = false]
	 * @param {?Boolean} [options.indexes = false]
	 *
	 * @returns {Object}
	 **/

	/**
	 * It converts an object into a FormData object
	 *
	 * @param {Object<any, any>} obj - The object to convert to form data.
	 * @param {string} formData - The FormData object to append to.
	 * @param {Object<string, any>} options
	 *
	 * @returns
	 */
	function toFormData(obj, formData, options) {
	  if (!utils$1.isObject(obj)) {
	    throw new TypeError('target must be an object');
	  }

	  // eslint-disable-next-line no-param-reassign
	  formData = formData || new (FormData)();

	  // eslint-disable-next-line no-param-reassign
	  options = utils$1.toFlatObject(options, {
	    metaTokens: true,
	    dots: false,
	    indexes: false
	  }, false, function defined(option, source) {
	    // eslint-disable-next-line no-eq-null,eqeqeq
	    return !utils$1.isUndefined(source[option]);
	  });

	  const metaTokens = options.metaTokens;
	  // eslint-disable-next-line no-use-before-define
	  const visitor = options.visitor || defaultVisitor;
	  const dots = options.dots;
	  const indexes = options.indexes;
	  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
	  const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);

	  if (!utils$1.isFunction(visitor)) {
	    throw new TypeError('visitor must be a function');
	  }

	  function convertValue(value) {
	    if (value === null) return '';

	    if (utils$1.isDate(value)) {
	      return value.toISOString();
	    }

	    if (!useBlob && utils$1.isBlob(value)) {
	      throw new AxiosError('Blob is not supported. Use a Buffer instead.');
	    }

	    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
	      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
	    }

	    return value;
	  }

	  /**
	   * Default visitor.
	   *
	   * @param {*} value
	   * @param {String|Number} key
	   * @param {Array<String|Number>} path
	   * @this {FormData}
	   *
	   * @returns {boolean} return true to visit the each prop of the value recursively
	   */
	  function defaultVisitor(value, key, path) {
	    let arr = value;

	    if (value && !path && typeof value === 'object') {
	      if (utils$1.endsWith(key, '{}')) {
	        // eslint-disable-next-line no-param-reassign
	        key = metaTokens ? key : key.slice(0, -2);
	        // eslint-disable-next-line no-param-reassign
	        value = JSON.stringify(value);
	      } else if (
	        (utils$1.isArray(value) && isFlatArray(value)) ||
	        ((utils$1.isFileList(value) || utils$1.endsWith(key, '[]')) && (arr = utils$1.toArray(value))
	        )) {
	        // eslint-disable-next-line no-param-reassign
	        key = removeBrackets(key);

	        arr.forEach(function each(el, index) {
	          !(utils$1.isUndefined(el) || el === null) && formData.append(
	            // eslint-disable-next-line no-nested-ternary
	            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
	            convertValue(el)
	          );
	        });
	        return false;
	      }
	    }

	    if (isVisitable(value)) {
	      return true;
	    }

	    formData.append(renderKey(path, key, dots), convertValue(value));

	    return false;
	  }

	  const stack = [];

	  const exposedHelpers = Object.assign(predicates, {
	    defaultVisitor,
	    convertValue,
	    isVisitable
	  });

	  function build(value, path) {
	    if (utils$1.isUndefined(value)) return;

	    if (stack.indexOf(value) !== -1) {
	      throw Error('Circular reference detected in ' + path.join('.'));
	    }

	    stack.push(value);

	    utils$1.forEach(value, function each(el, key) {
	      const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(
	        formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers
	      );

	      if (result === true) {
	        build(el, path ? path.concat(key) : [key]);
	      }
	    });

	    stack.pop();
	  }

	  if (!utils$1.isObject(obj)) {
	    throw new TypeError('data must be an object');
	  }

	  build(obj);

	  return formData;
	}

	/**
	 * It encodes a string by replacing all characters that are not in the unreserved set with
	 * their percent-encoded equivalents
	 *
	 * @param {string} str - The string to encode.
	 *
	 * @returns {string} The encoded string.
	 */
	function encode$1(str) {
	  const charMap = {
	    '!': '%21',
	    "'": '%27',
	    '(': '%28',
	    ')': '%29',
	    '~': '%7E',
	    '%20': '+',
	    '%00': '\x00'
	  };
	  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
	    return charMap[match];
	  });
	}

	/**
	 * It takes a params object and converts it to a FormData object
	 *
	 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
	 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
	 *
	 * @returns {void}
	 */
	function AxiosURLSearchParams(params, options) {
	  this._pairs = [];

	  params && toFormData(params, this, options);
	}

	const prototype = AxiosURLSearchParams.prototype;

	prototype.append = function append(name, value) {
	  this._pairs.push([name, value]);
	};

	prototype.toString = function toString(encoder) {
	  const _encode = encoder ? function(value) {
	    return encoder.call(this, value, encode$1);
	  } : encode$1;

	  return this._pairs.map(function each(pair) {
	    return _encode(pair[0]) + '=' + _encode(pair[1]);
	  }, '').join('&');
	};

	/**
	 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
	 * URI encoded counterparts
	 *
	 * @param {string} val The value to be encoded.
	 *
	 * @returns {string} The encoded value.
	 */
	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}

	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @param {?object} options
	 *
	 * @returns {string} The formatted url
	 */
	function buildURL(url, params, options) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }
	  
	  const _encode = options && options.encode || encode;

	  const serializeFn = options && options.serialize;

	  let serializedParams;

	  if (serializeFn) {
	    serializedParams = serializeFn(params, options);
	  } else {
	    serializedParams = utils$1.isURLSearchParams(params) ?
	      params.toString() :
	      new AxiosURLSearchParams(params, options).toString(_encode);
	  }

	  if (serializedParams) {
	    const hashmarkIndex = url.indexOf("#");

	    if (hashmarkIndex !== -1) {
	      url = url.slice(0, hashmarkIndex);
	    }
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }

	  return url;
	}

	class InterceptorManager {
	  constructor() {
	    this.handlers = [];
	  }

	  /**
	   * Add a new interceptor to the stack
	   *
	   * @param {Function} fulfilled The function to handle `then` for a `Promise`
	   * @param {Function} rejected The function to handle `reject` for a `Promise`
	   *
	   * @return {Number} An ID used to remove interceptor later
	   */
	  use(fulfilled, rejected, options) {
	    this.handlers.push({
	      fulfilled,
	      rejected,
	      synchronous: options ? options.synchronous : false,
	      runWhen: options ? options.runWhen : null
	    });
	    return this.handlers.length - 1;
	  }

	  /**
	   * Remove an interceptor from the stack
	   *
	   * @param {Number} id The ID that was returned by `use`
	   *
	   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
	   */
	  eject(id) {
	    if (this.handlers[id]) {
	      this.handlers[id] = null;
	    }
	  }

	  /**
	   * Clear all interceptors from the stack
	   *
	   * @returns {void}
	   */
	  clear() {
	    if (this.handlers) {
	      this.handlers = [];
	    }
	  }

	  /**
	   * Iterate over all the registered interceptors
	   *
	   * This method is particularly useful for skipping over any
	   * interceptors that may have become `null` calling `eject`.
	   *
	   * @param {Function} fn The function to call for each interceptor
	   *
	   * @returns {void}
	   */
	  forEach(fn) {
	    utils$1.forEach(this.handlers, function forEachHandler(h) {
	      if (h !== null) {
	        fn(h);
	      }
	    });
	  }
	}

	var InterceptorManager$1 = InterceptorManager;

	var transitionalDefaults = {
	  silentJSONParsing: true,
	  forcedJSONParsing: true,
	  clarifyTimeoutError: false
	};

	var URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;

	var FormData$1 = typeof FormData !== 'undefined' ? FormData : null;

	var Blob$1 = typeof Blob !== 'undefined' ? Blob : null;

	var platform$1 = {
	  isBrowser: true,
	  classes: {
	    URLSearchParams: URLSearchParams$1,
	    FormData: FormData$1,
	    Blob: Blob$1
	  },
	  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
	};

	const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  navigator.product -> 'ReactNative'
	 * nativescript
	 *  navigator.product -> 'NativeScript' or 'NS'
	 *
	 * @returns {boolean}
	 */
	const hasStandardBrowserEnv = (
	  (product) => {
	    return hasBrowserEnv && ['ReactNative', 'NativeScript', 'NS'].indexOf(product) < 0
	  })(typeof navigator !== 'undefined' && navigator.product);

	/**
	 * Determine if we're running in a standard browser webWorker environment
	 *
	 * Although the `isStandardBrowserEnv` method indicates that
	 * `allows axios to run in a web worker`, the WebWorker will still be
	 * filtered out due to its judgment standard
	 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
	 * This leads to a problem when axios post `FormData` in webWorker
	 */
	const hasStandardBrowserWebWorkerEnv = (() => {
	  return (
	    typeof WorkerGlobalScope !== 'undefined' &&
	    // eslint-disable-next-line no-undef
	    self instanceof WorkerGlobalScope &&
	    typeof self.importScripts === 'function'
	  );
	})();

	const origin = hasBrowserEnv && window.location.href || 'http://localhost';

	var utils = /*#__PURE__*/Object.freeze({
		__proto__: null,
		hasBrowserEnv: hasBrowserEnv,
		hasStandardBrowserWebWorkerEnv: hasStandardBrowserWebWorkerEnv,
		hasStandardBrowserEnv: hasStandardBrowserEnv,
		origin: origin
	});

	var platform = {
	  ...utils,
	  ...platform$1
	};

	function toURLEncodedForm(data, options) {
	  return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
	    visitor: function(value, key, path, helpers) {
	      if (platform.isNode && utils$1.isBuffer(value)) {
	        this.append(key, value.toString('base64'));
	        return false;
	      }

	      return helpers.defaultVisitor.apply(this, arguments);
	    }
	  }, options));
	}

	/**
	 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
	 *
	 * @param {string} name - The name of the property to get.
	 *
	 * @returns An array of strings.
	 */
	function parsePropPath(name) {
	  // foo[x][y][z]
	  // foo.x.y.z
	  // foo-x-y-z
	  // foo x y z
	  return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
	    return match[0] === '[]' ? '' : match[1] || match[0];
	  });
	}

	/**
	 * Convert an array to an object.
	 *
	 * @param {Array<any>} arr - The array to convert to an object.
	 *
	 * @returns An object with the same keys and values as the array.
	 */
	function arrayToObject(arr) {
	  const obj = {};
	  const keys = Object.keys(arr);
	  let i;
	  const len = keys.length;
	  let key;
	  for (i = 0; i < len; i++) {
	    key = keys[i];
	    obj[key] = arr[key];
	  }
	  return obj;
	}

	/**
	 * It takes a FormData object and returns a JavaScript object
	 *
	 * @param {string} formData The FormData object to convert to JSON.
	 *
	 * @returns {Object<string, any> | null} The converted object.
	 */
	function formDataToJSON(formData) {
	  function buildPath(path, value, target, index) {
	    let name = path[index++];

	    if (name === '__proto__') return true;

	    const isNumericKey = Number.isFinite(+name);
	    const isLast = index >= path.length;
	    name = !name && utils$1.isArray(target) ? target.length : name;

	    if (isLast) {
	      if (utils$1.hasOwnProp(target, name)) {
	        target[name] = [target[name], value];
	      } else {
	        target[name] = value;
	      }

	      return !isNumericKey;
	    }

	    if (!target[name] || !utils$1.isObject(target[name])) {
	      target[name] = [];
	    }

	    const result = buildPath(path, value, target[name], index);

	    if (result && utils$1.isArray(target[name])) {
	      target[name] = arrayToObject(target[name]);
	    }

	    return !isNumericKey;
	  }

	  if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
	    const obj = {};

	    utils$1.forEachEntry(formData, (name, value) => {
	      buildPath(parsePropPath(name), value, obj, 0);
	    });

	    return obj;
	  }

	  return null;
	}

	/**
	 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
	 * of the input
	 *
	 * @param {any} rawValue - The value to be stringified.
	 * @param {Function} parser - A function that parses a string into a JavaScript object.
	 * @param {Function} encoder - A function that takes a value and returns a string.
	 *
	 * @returns {string} A stringified version of the rawValue.
	 */
	function stringifySafely(rawValue, parser, encoder) {
	  if (utils$1.isString(rawValue)) {
	    try {
	      (parser || JSON.parse)(rawValue);
	      return utils$1.trim(rawValue);
	    } catch (e) {
	      if (e.name !== 'SyntaxError') {
	        throw e;
	      }
	    }
	  }

	  return (encoder || JSON.stringify)(rawValue);
	}

	const defaults = {

	  transitional: transitionalDefaults,

	  adapter: ['xhr', 'http', 'fetch'],

	  transformRequest: [function transformRequest(data, headers) {
	    const contentType = headers.getContentType() || '';
	    const hasJSONContentType = contentType.indexOf('application/json') > -1;
	    const isObjectPayload = utils$1.isObject(data);

	    if (isObjectPayload && utils$1.isHTMLForm(data)) {
	      data = new FormData(data);
	    }

	    const isFormData = utils$1.isFormData(data);

	    if (isFormData) {
	      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
	    }

	    if (utils$1.isArrayBuffer(data) ||
	      utils$1.isBuffer(data) ||
	      utils$1.isStream(data) ||
	      utils$1.isFile(data) ||
	      utils$1.isBlob(data) ||
	      utils$1.isReadableStream(data)
	    ) {
	      return data;
	    }
	    if (utils$1.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils$1.isURLSearchParams(data)) {
	      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
	      return data.toString();
	    }

	    let isFileList;

	    if (isObjectPayload) {
	      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
	        return toURLEncodedForm(data, this.formSerializer).toString();
	      }

	      if ((isFileList = utils$1.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
	        const _FormData = this.env && this.env.FormData;

	        return toFormData(
	          isFileList ? {'files[]': data} : data,
	          _FormData && new _FormData(),
	          this.formSerializer
	        );
	      }
	    }

	    if (isObjectPayload || hasJSONContentType ) {
	      headers.setContentType('application/json', false);
	      return stringifySafely(data);
	    }

	    return data;
	  }],

	  transformResponse: [function transformResponse(data) {
	    const transitional = this.transitional || defaults.transitional;
	    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
	    const JSONRequested = this.responseType === 'json';

	    if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
	      return data;
	    }

	    if (data && utils$1.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
	      const silentJSONParsing = transitional && transitional.silentJSONParsing;
	      const strictJSONParsing = !silentJSONParsing && JSONRequested;

	      try {
	        return JSON.parse(data);
	      } catch (e) {
	        if (strictJSONParsing) {
	          if (e.name === 'SyntaxError') {
	            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
	          }
	          throw e;
	        }
	      }
	    }

	    return data;
	  }],

	  /**
	   * A timeout in milliseconds to abort a request. If set to 0 (default) a
	   * timeout is not created.
	   */
	  timeout: 0,

	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',

	  maxContentLength: -1,
	  maxBodyLength: -1,

	  env: {
	    FormData: platform.classes.FormData,
	    Blob: platform.classes.Blob
	  },

	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  },

	  headers: {
	    common: {
	      'Accept': 'application/json, text/plain, */*',
	      'Content-Type': undefined
	    }
	  }
	};

	utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
	  defaults.headers[method] = {};
	});

	var defaults$1 = defaults;

	// RawAxiosHeaders whose duplicates are ignored by node
	// c.f. https://nodejs.org/api/http.html#http_message_headers
	const ignoreDuplicateOf = utils$1.toObjectSet([
	  'age', 'authorization', 'content-length', 'content-type', 'etag',
	  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
	  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
	  'referer', 'retry-after', 'user-agent'
	]);

	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} rawHeaders Headers needing to be parsed
	 *
	 * @returns {Object} Headers parsed into an object
	 */
	var parseHeaders = rawHeaders => {
	  const parsed = {};
	  let key;
	  let val;
	  let i;

	  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
	    i = line.indexOf(':');
	    key = line.substring(0, i).trim().toLowerCase();
	    val = line.substring(i + 1).trim();

	    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
	      return;
	    }

	    if (key === 'set-cookie') {
	      if (parsed[key]) {
	        parsed[key].push(val);
	      } else {
	        parsed[key] = [val];
	      }
	    } else {
	      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	    }
	  });

	  return parsed;
	};

	const $internals = Symbol('internals');

	function normalizeHeader(header) {
	  return header && String(header).trim().toLowerCase();
	}

	function normalizeValue(value) {
	  if (value === false || value == null) {
	    return value;
	  }

	  return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
	}

	function parseTokens(str) {
	  const tokens = Object.create(null);
	  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
	  let match;

	  while ((match = tokensRE.exec(str))) {
	    tokens[match[1]] = match[2];
	  }

	  return tokens;
	}

	const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

	function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
	  if (utils$1.isFunction(filter)) {
	    return filter.call(this, value, header);
	  }

	  if (isHeaderNameFilter) {
	    value = header;
	  }

	  if (!utils$1.isString(value)) return;

	  if (utils$1.isString(filter)) {
	    return value.indexOf(filter) !== -1;
	  }

	  if (utils$1.isRegExp(filter)) {
	    return filter.test(value);
	  }
	}

	function formatHeader(header) {
	  return header.trim()
	    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
	      return char.toUpperCase() + str;
	    });
	}

	function buildAccessors(obj, header) {
	  const accessorName = utils$1.toCamelCase(' ' + header);

	  ['get', 'set', 'has'].forEach(methodName => {
	    Object.defineProperty(obj, methodName + accessorName, {
	      value: function(arg1, arg2, arg3) {
	        return this[methodName].call(this, header, arg1, arg2, arg3);
	      },
	      configurable: true
	    });
	  });
	}

	class AxiosHeaders {
	  constructor(headers) {
	    headers && this.set(headers);
	  }

	  set(header, valueOrRewrite, rewrite) {
	    const self = this;

	    function setHeader(_value, _header, _rewrite) {
	      const lHeader = normalizeHeader(_header);

	      if (!lHeader) {
	        throw new Error('header name must be a non-empty string');
	      }

	      const key = utils$1.findKey(self, lHeader);

	      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
	        self[key || _header] = normalizeValue(_value);
	      }
	    }

	    const setHeaders = (headers, _rewrite) =>
	      utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

	    if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
	      setHeaders(header, valueOrRewrite);
	    } else if(utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
	      setHeaders(parseHeaders(header), valueOrRewrite);
	    } else if (utils$1.isHeaders(header)) {
	      for (const [key, value] of header.entries()) {
	        setHeader(value, key, rewrite);
	      }
	    } else {
	      header != null && setHeader(valueOrRewrite, header, rewrite);
	    }

	    return this;
	  }

	  get(header, parser) {
	    header = normalizeHeader(header);

	    if (header) {
	      const key = utils$1.findKey(this, header);

	      if (key) {
	        const value = this[key];

	        if (!parser) {
	          return value;
	        }

	        if (parser === true) {
	          return parseTokens(value);
	        }

	        if (utils$1.isFunction(parser)) {
	          return parser.call(this, value, key);
	        }

	        if (utils$1.isRegExp(parser)) {
	          return parser.exec(value);
	        }

	        throw new TypeError('parser must be boolean|regexp|function');
	      }
	    }
	  }

	  has(header, matcher) {
	    header = normalizeHeader(header);

	    if (header) {
	      const key = utils$1.findKey(this, header);

	      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
	    }

	    return false;
	  }

	  delete(header, matcher) {
	    const self = this;
	    let deleted = false;

	    function deleteHeader(_header) {
	      _header = normalizeHeader(_header);

	      if (_header) {
	        const key = utils$1.findKey(self, _header);

	        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
	          delete self[key];

	          deleted = true;
	        }
	      }
	    }

	    if (utils$1.isArray(header)) {
	      header.forEach(deleteHeader);
	    } else {
	      deleteHeader(header);
	    }

	    return deleted;
	  }

	  clear(matcher) {
	    const keys = Object.keys(this);
	    let i = keys.length;
	    let deleted = false;

	    while (i--) {
	      const key = keys[i];
	      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
	        delete this[key];
	        deleted = true;
	      }
	    }

	    return deleted;
	  }

	  normalize(format) {
	    const self = this;
	    const headers = {};

	    utils$1.forEach(this, (value, header) => {
	      const key = utils$1.findKey(headers, header);

	      if (key) {
	        self[key] = normalizeValue(value);
	        delete self[header];
	        return;
	      }

	      const normalized = format ? formatHeader(header) : String(header).trim();

	      if (normalized !== header) {
	        delete self[header];
	      }

	      self[normalized] = normalizeValue(value);

	      headers[normalized] = true;
	    });

	    return this;
	  }

	  concat(...targets) {
	    return this.constructor.concat(this, ...targets);
	  }

	  toJSON(asStrings) {
	    const obj = Object.create(null);

	    utils$1.forEach(this, (value, header) => {
	      value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(', ') : value);
	    });

	    return obj;
	  }

	  [Symbol.iterator]() {
	    return Object.entries(this.toJSON())[Symbol.iterator]();
	  }

	  toString() {
	    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
	  }

	  get [Symbol.toStringTag]() {
	    return 'AxiosHeaders';
	  }

	  static from(thing) {
	    return thing instanceof this ? thing : new this(thing);
	  }

	  static concat(first, ...targets) {
	    const computed = new this(first);

	    targets.forEach((target) => computed.set(target));

	    return computed;
	  }

	  static accessor(header) {
	    const internals = this[$internals] = (this[$internals] = {
	      accessors: {}
	    });

	    const accessors = internals.accessors;
	    const prototype = this.prototype;

	    function defineAccessor(_header) {
	      const lHeader = normalizeHeader(_header);

	      if (!accessors[lHeader]) {
	        buildAccessors(prototype, _header);
	        accessors[lHeader] = true;
	      }
	    }

	    utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

	    return this;
	  }
	}

	AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

	// reserved names hotfix
	utils$1.reduceDescriptors(AxiosHeaders.prototype, ({value}, key) => {
	  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
	  return {
	    get: () => value,
	    set(headerValue) {
	      this[mapped] = headerValue;
	    }
	  }
	});

	utils$1.freezeMethods(AxiosHeaders);

	var AxiosHeaders$1 = AxiosHeaders;

	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Array|Function} fns A single function or Array of functions
	 * @param {?Object} response The response object
	 *
	 * @returns {*} The resulting transformed data
	 */
	function transformData(fns, response) {
	  const config = this || defaults$1;
	  const context = response || config;
	  const headers = AxiosHeaders$1.from(context.headers);
	  let data = context.data;

	  utils$1.forEach(fns, function transform(fn) {
	    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
	  });

	  headers.normalize();

	  return data;
	}

	function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	}

	/**
	 * A `CanceledError` is an object that is thrown when an operation is canceled.
	 *
	 * @param {string=} message The message.
	 * @param {Object=} config The config.
	 * @param {Object=} request The request.
	 *
	 * @returns {CanceledError} The created error.
	 */
	function CanceledError(message, config, request) {
	  // eslint-disable-next-line no-eq-null,eqeqeq
	  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
	  this.name = 'CanceledError';
	}

	utils$1.inherits(CanceledError, AxiosError, {
	  __CANCEL__: true
	});

	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 *
	 * @returns {object} The response.
	 */
	function settle(resolve, reject, response) {
	  const validateStatus = response.config.validateStatus;
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(new AxiosError(
	      'Request failed with status code ' + response.status,
	      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
	      response.config,
	      response.request,
	      response
	    ));
	  }
	}

	function parseProtocol(url) {
	  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
	  return match && match[1] || '';
	}

	/**
	 * Calculate data maxRate
	 * @param {Number} [samplesCount= 10]
	 * @param {Number} [min= 1000]
	 * @returns {Function}
	 */
	function speedometer(samplesCount, min) {
	  samplesCount = samplesCount || 10;
	  const bytes = new Array(samplesCount);
	  const timestamps = new Array(samplesCount);
	  let head = 0;
	  let tail = 0;
	  let firstSampleTS;

	  min = min !== undefined ? min : 1000;

	  return function push(chunkLength) {
	    const now = Date.now();

	    const startedAt = timestamps[tail];

	    if (!firstSampleTS) {
	      firstSampleTS = now;
	    }

	    bytes[head] = chunkLength;
	    timestamps[head] = now;

	    let i = tail;
	    let bytesCount = 0;

	    while (i !== head) {
	      bytesCount += bytes[i++];
	      i = i % samplesCount;
	    }

	    head = (head + 1) % samplesCount;

	    if (head === tail) {
	      tail = (tail + 1) % samplesCount;
	    }

	    if (now - firstSampleTS < min) {
	      return;
	    }

	    const passed = startedAt && now - startedAt;

	    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
	  };
	}

	/**
	 * Throttle decorator
	 * @param {Function} fn
	 * @param {Number} freq
	 * @return {Function}
	 */
	function throttle$2(fn, freq) {
	  let timestamp = 0;
	  let threshold = 1000 / freq;
	  let lastArgs;
	  let timer;

	  const invoke = (args, now = Date.now()) => {
	    timestamp = now;
	    lastArgs = null;
	    if (timer) {
	      clearTimeout(timer);
	      timer = null;
	    }
	    fn.apply(null, args);
	  };

	  const throttled = (...args) => {
	    const now = Date.now();
	    const passed = now - timestamp;
	    if ( passed >= threshold) {
	      invoke(args, now);
	    } else {
	      lastArgs = args;
	      if (!timer) {
	        timer = setTimeout(() => {
	          timer = null;
	          invoke(lastArgs);
	        }, threshold - passed);
	      }
	    }
	  };

	  const flush = () => lastArgs && invoke(lastArgs);

	  return [throttled, flush];
	}

	const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
	  let bytesNotified = 0;
	  const _speedometer = speedometer(50, 250);

	  return throttle$2(e => {
	    const loaded = e.loaded;
	    const total = e.lengthComputable ? e.total : undefined;
	    const progressBytes = loaded - bytesNotified;
	    const rate = _speedometer(progressBytes);
	    const inRange = loaded <= total;

	    bytesNotified = loaded;

	    const data = {
	      loaded,
	      total,
	      progress: total ? (loaded / total) : undefined,
	      bytes: progressBytes,
	      rate: rate ? rate : undefined,
	      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
	      event: e,
	      lengthComputable: total != null,
	      [isDownloadStream ? 'download' : 'upload']: true
	    };

	    listener(data);
	  }, freq);
	};

	const progressEventDecorator = (total, throttled) => {
	  const lengthComputable = total != null;

	  return [(loaded) => throttled[0]({
	    lengthComputable,
	    total,
	    loaded
	  }), throttled[1]];
	};

	const asyncDecorator = (fn) => (...args) => utils$1.asap(() => fn(...args));

	var isURLSameOrigin = platform.hasStandardBrowserEnv ?

	// Standard browser envs have full support of the APIs needed to test
	// whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    const msie = /(msie|trident)/i.test(navigator.userAgent);
	    const urlParsingNode = document.createElement('a');
	    let originURL;

	    /**
	    * Parse a URL to discover its components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      let href = url;

	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }

	      urlParsingNode.setAttribute('href', href);

	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	          urlParsingNode.pathname :
	          '/' + urlParsingNode.pathname
	      };
	    }

	    originURL = resolveURL(window.location.href);

	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      const parsed = (utils$1.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	          parsed.host === originURL.host);
	    };
	  })() :

	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })();

	var cookies = platform.hasStandardBrowserEnv ?

	  // Standard browser envs support document.cookie
	  {
	    write(name, value, expires, path, domain, secure) {
	      const cookie = [name + '=' + encodeURIComponent(value)];

	      utils$1.isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());

	      utils$1.isString(path) && cookie.push('path=' + path);

	      utils$1.isString(domain) && cookie.push('domain=' + domain);

	      secure === true && cookie.push('secure');

	      document.cookie = cookie.join('; ');
	    },

	    read(name) {
	      const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	      return (match ? decodeURIComponent(match[3]) : null);
	    },

	    remove(name) {
	      this.write(name, '', Date.now() - 86400000);
	    }
	  }

	  :

	  // Non-standard browser env (web workers, react-native) lack needed support.
	  {
	    write() {},
	    read() {
	      return null;
	    },
	    remove() {}
	  };

	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 *
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
	}

	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 *
	 * @returns {string} The combined URL
	 */
	function combineURLs(baseURL, relativeURL) {
	  return relativeURL
	    ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '')
	    : baseURL;
	}

	/**
	 * Creates a new URL by combining the baseURL with the requestedURL,
	 * only when the requestedURL is not already an absolute URL.
	 * If the requestURL is absolute, this function returns the requestedURL untouched.
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} requestedURL Absolute or relative URL to combine
	 *
	 * @returns {string} The combined full path
	 */
	function buildFullPath(baseURL, requestedURL) {
	  if (baseURL && !isAbsoluteURL(requestedURL)) {
	    return combineURLs(baseURL, requestedURL);
	  }
	  return requestedURL;
	}

	const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? { ...thing } : thing;

	/**
	 * Config-specific merge-function which creates a new config-object
	 * by merging two configuration objects together.
	 *
	 * @param {Object} config1
	 * @param {Object} config2
	 *
	 * @returns {Object} New object resulting from merging config2 to config1
	 */
	function mergeConfig(config1, config2) {
	  // eslint-disable-next-line no-param-reassign
	  config2 = config2 || {};
	  const config = {};

	  function getMergedValue(target, source, caseless) {
	    if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
	      return utils$1.merge.call({caseless}, target, source);
	    } else if (utils$1.isPlainObject(source)) {
	      return utils$1.merge({}, source);
	    } else if (utils$1.isArray(source)) {
	      return source.slice();
	    }
	    return source;
	  }

	  // eslint-disable-next-line consistent-return
	  function mergeDeepProperties(a, b, caseless) {
	    if (!utils$1.isUndefined(b)) {
	      return getMergedValue(a, b, caseless);
	    } else if (!utils$1.isUndefined(a)) {
	      return getMergedValue(undefined, a, caseless);
	    }
	  }

	  // eslint-disable-next-line consistent-return
	  function valueFromConfig2(a, b) {
	    if (!utils$1.isUndefined(b)) {
	      return getMergedValue(undefined, b);
	    }
	  }

	  // eslint-disable-next-line consistent-return
	  function defaultToConfig2(a, b) {
	    if (!utils$1.isUndefined(b)) {
	      return getMergedValue(undefined, b);
	    } else if (!utils$1.isUndefined(a)) {
	      return getMergedValue(undefined, a);
	    }
	  }

	  // eslint-disable-next-line consistent-return
	  function mergeDirectKeys(a, b, prop) {
	    if (prop in config2) {
	      return getMergedValue(a, b);
	    } else if (prop in config1) {
	      return getMergedValue(undefined, a);
	    }
	  }

	  const mergeMap = {
	    url: valueFromConfig2,
	    method: valueFromConfig2,
	    data: valueFromConfig2,
	    baseURL: defaultToConfig2,
	    transformRequest: defaultToConfig2,
	    transformResponse: defaultToConfig2,
	    paramsSerializer: defaultToConfig2,
	    timeout: defaultToConfig2,
	    timeoutMessage: defaultToConfig2,
	    withCredentials: defaultToConfig2,
	    withXSRFToken: defaultToConfig2,
	    adapter: defaultToConfig2,
	    responseType: defaultToConfig2,
	    xsrfCookieName: defaultToConfig2,
	    xsrfHeaderName: defaultToConfig2,
	    onUploadProgress: defaultToConfig2,
	    onDownloadProgress: defaultToConfig2,
	    decompress: defaultToConfig2,
	    maxContentLength: defaultToConfig2,
	    maxBodyLength: defaultToConfig2,
	    beforeRedirect: defaultToConfig2,
	    transport: defaultToConfig2,
	    httpAgent: defaultToConfig2,
	    httpsAgent: defaultToConfig2,
	    cancelToken: defaultToConfig2,
	    socketPath: defaultToConfig2,
	    responseEncoding: defaultToConfig2,
	    validateStatus: mergeDirectKeys,
	    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
	  };

	  utils$1.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
	    const merge = mergeMap[prop] || mergeDeepProperties;
	    const configValue = merge(config1[prop], config2[prop], prop);
	    (utils$1.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
	  });

	  return config;
	}

	var resolveConfig = (config) => {
	  const newConfig = mergeConfig({}, config);

	  let {data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth} = newConfig;

	  newConfig.headers = headers = AxiosHeaders$1.from(headers);

	  newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url), config.params, config.paramsSerializer);

	  // HTTP basic authentication
	  if (auth) {
	    headers.set('Authorization', 'Basic ' +
	      btoa((auth.username || '') + ':' + (auth.password ? unescape(encodeURIComponent(auth.password)) : ''))
	    );
	  }

	  let contentType;

	  if (utils$1.isFormData(data)) {
	    if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
	      headers.setContentType(undefined); // Let the browser set it
	    } else if ((contentType = headers.getContentType()) !== false) {
	      // fix semicolon duplication issue for ReactNative FormData implementation
	      const [type, ...tokens] = contentType ? contentType.split(';').map(token => token.trim()).filter(Boolean) : [];
	      headers.setContentType([type || 'multipart/form-data', ...tokens].join('; '));
	    }
	  }

	  // Add xsrf header
	  // This is only done if running in a standard browser environment.
	  // Specifically not if we're in a web worker, or react-native.

	  if (platform.hasStandardBrowserEnv) {
	    withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));

	    if (withXSRFToken || (withXSRFToken !== false && isURLSameOrigin(newConfig.url))) {
	      // Add xsrf header
	      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);

	      if (xsrfValue) {
	        headers.set(xsrfHeaderName, xsrfValue);
	      }
	    }
	  }

	  return newConfig;
	};

	const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

	var xhrAdapter = isXHRAdapterSupported && function (config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    const _config = resolveConfig(config);
	    let requestData = _config.data;
	    const requestHeaders = AxiosHeaders$1.from(_config.headers).normalize();
	    let {responseType, onUploadProgress, onDownloadProgress} = _config;
	    let onCanceled;
	    let uploadThrottled, downloadThrottled;
	    let flushUpload, flushDownload;

	    function done() {
	      flushUpload && flushUpload(); // flush events
	      flushDownload && flushDownload(); // flush events

	      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);

	      _config.signal && _config.signal.removeEventListener('abort', onCanceled);
	    }

	    let request = new XMLHttpRequest();

	    request.open(_config.method.toUpperCase(), _config.url, true);

	    // Set the request timeout in MS
	    request.timeout = _config.timeout;

	    function onloadend() {
	      if (!request) {
	        return;
	      }
	      // Prepare the response
	      const responseHeaders = AxiosHeaders$1.from(
	        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
	      );
	      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
	        request.responseText : request.response;
	      const response = {
	        data: responseData,
	        status: request.status,
	        statusText: request.statusText,
	        headers: responseHeaders,
	        config,
	        request
	      };

	      settle(function _resolve(value) {
	        resolve(value);
	        done();
	      }, function _reject(err) {
	        reject(err);
	        done();
	      }, response);

	      // Clean up request
	      request = null;
	    }

	    if ('onloadend' in request) {
	      // Use onloadend if available
	      request.onloadend = onloadend;
	    } else {
	      // Listen for ready state to emulate onloadend
	      request.onreadystatechange = function handleLoad() {
	        if (!request || request.readyState !== 4) {
	          return;
	        }

	        // The request errored out and we didn't get a response, this will be
	        // handled by onerror instead
	        // With one exception: request that using file: protocol, most browsers
	        // will return status as 0 even though it's a successful request
	        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	          return;
	        }
	        // readystate handler is calling before onerror or ontimeout handlers,
	        // so we should call onloadend on the next 'tick'
	        setTimeout(onloadend);
	      };
	    }

	    // Handle browser request cancellation (as opposed to a manual cancellation)
	    request.onabort = function handleAbort() {
	      if (!request) {
	        return;
	      }

	      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

	      // Clean up request
	      request = null;
	    };

	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request));

	      // Clean up request
	      request = null;
	    };

	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      let timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
	      const transitional = _config.transitional || transitionalDefaults;
	      if (_config.timeoutErrorMessage) {
	        timeoutErrorMessage = _config.timeoutErrorMessage;
	      }
	      reject(new AxiosError(
	        timeoutErrorMessage,
	        transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
	        config,
	        request));

	      // Clean up request
	      request = null;
	    };

	    // Remove Content-Type if data is undefined
	    requestData === undefined && requestHeaders.setContentType(null);

	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
	        request.setRequestHeader(key, val);
	      });
	    }

	    // Add withCredentials to request if needed
	    if (!utils$1.isUndefined(_config.withCredentials)) {
	      request.withCredentials = !!_config.withCredentials;
	    }

	    // Add responseType to request if needed
	    if (responseType && responseType !== 'json') {
	      request.responseType = _config.responseType;
	    }

	    // Handle progress if needed
	    if (onDownloadProgress) {
	      ([downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true));
	      request.addEventListener('progress', downloadThrottled);
	    }

	    // Not all browsers support upload events
	    if (onUploadProgress && request.upload) {
	      ([uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress));

	      request.upload.addEventListener('progress', uploadThrottled);

	      request.upload.addEventListener('loadend', flushUpload);
	    }

	    if (_config.cancelToken || _config.signal) {
	      // Handle cancellation
	      // eslint-disable-next-line func-names
	      onCanceled = cancel => {
	        if (!request) {
	          return;
	        }
	        reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
	        request.abort();
	        request = null;
	      };

	      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
	      if (_config.signal) {
	        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
	      }
	    }

	    const protocol = parseProtocol(_config.url);

	    if (protocol && platform.protocols.indexOf(protocol) === -1) {
	      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
	      return;
	    }


	    // Send the request
	    request.send(requestData || null);
	  });
	};

	const composeSignals = (signals, timeout) => {
	  let controller = new AbortController();

	  let aborted;

	  const onabort = function (cancel) {
	    if (!aborted) {
	      aborted = true;
	      unsubscribe();
	      const err = cancel instanceof Error ? cancel : this.reason;
	      controller.abort(err instanceof AxiosError ? err : new CanceledError(err instanceof Error ? err.message : err));
	    }
	  };

	  let timer = timeout && setTimeout(() => {
	    onabort(new AxiosError(`timeout ${timeout} of ms exceeded`, AxiosError.ETIMEDOUT));
	  }, timeout);

	  const unsubscribe = () => {
	    if (signals) {
	      timer && clearTimeout(timer);
	      timer = null;
	      signals.forEach(signal => {
	        signal &&
	        (signal.removeEventListener ? signal.removeEventListener('abort', onabort) : signal.unsubscribe(onabort));
	      });
	      signals = null;
	    }
	  };

	  signals.forEach((signal) => signal && signal.addEventListener && signal.addEventListener('abort', onabort));

	  const {signal} = controller;

	  signal.unsubscribe = unsubscribe;

	  return [signal, () => {
	    timer && clearTimeout(timer);
	    timer = null;
	  }];
	};

	var composeSignals$1 = composeSignals;

	const streamChunk = function* (chunk, chunkSize) {
	  let len = chunk.byteLength;

	  if (!chunkSize || len < chunkSize) {
	    yield chunk;
	    return;
	  }

	  let pos = 0;
	  let end;

	  while (pos < len) {
	    end = pos + chunkSize;
	    yield chunk.slice(pos, end);
	    pos = end;
	  }
	};

	const readBytes = async function* (iterable, chunkSize, encode) {
	  for await (const chunk of iterable) {
	    yield* streamChunk(ArrayBuffer.isView(chunk) ? chunk : (await encode(String(chunk))), chunkSize);
	  }
	};

	const trackStream = (stream, chunkSize, onProgress, onFinish, encode) => {
	  const iterator = readBytes(stream, chunkSize, encode);

	  let bytes = 0;
	  let done;
	  let _onFinish = (e) => {
	    if (!done) {
	      done = true;
	      onFinish && onFinish(e);
	    }
	  };

	  return new ReadableStream({
	    async pull(controller) {
	      try {
	        const {done, value} = await iterator.next();

	        if (done) {
	         _onFinish();
	          controller.close();
	          return;
	        }

	        let len = value.byteLength;
	        if (onProgress) {
	          let loadedBytes = bytes += len;
	          onProgress(loadedBytes);
	        }
	        controller.enqueue(new Uint8Array(value));
	      } catch (err) {
	        _onFinish(err);
	        throw err;
	      }
	    },
	    cancel(reason) {
	      _onFinish(reason);
	      return iterator.return();
	    }
	  }, {
	    highWaterMark: 2
	  })
	};

	const isFetchSupported = typeof fetch === 'function' && typeof Request === 'function' && typeof Response === 'function';
	const isReadableStreamSupported = isFetchSupported && typeof ReadableStream === 'function';

	// used only inside the fetch adapter
	const encodeText = isFetchSupported && (typeof TextEncoder === 'function' ?
	    ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) :
	    async (str) => new Uint8Array(await new Response(str).arrayBuffer())
	);

	const test = (fn, ...args) => {
	  try {
	    return !!fn(...args);
	  } catch (e) {
	    return false
	  }
	};

	const supportsRequestStream = isReadableStreamSupported && test(() => {
	  let duplexAccessed = false;

	  const hasContentType = new Request(platform.origin, {
	    body: new ReadableStream(),
	    method: 'POST',
	    get duplex() {
	      duplexAccessed = true;
	      return 'half';
	    },
	  }).headers.has('Content-Type');

	  return duplexAccessed && !hasContentType;
	});

	const DEFAULT_CHUNK_SIZE = 64 * 1024;

	const supportsResponseStream = isReadableStreamSupported &&
	  test(() => utils$1.isReadableStream(new Response('').body));


	const resolvers = {
	  stream: supportsResponseStream && ((res) => res.body)
	};

	isFetchSupported && (((res) => {
	  ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach(type => {
	    !resolvers[type] && (resolvers[type] = utils$1.isFunction(res[type]) ? (res) => res[type]() :
	      (_, config) => {
	        throw new AxiosError(`Response type '${type}' is not supported`, AxiosError.ERR_NOT_SUPPORT, config);
	      });
	  });
	})(new Response));

	const getBodyLength = async (body) => {
	  if (body == null) {
	    return 0;
	  }

	  if(utils$1.isBlob(body)) {
	    return body.size;
	  }

	  if(utils$1.isSpecCompliantForm(body)) {
	    return (await new Request(body).arrayBuffer()).byteLength;
	  }

	  if(utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
	    return body.byteLength;
	  }

	  if(utils$1.isURLSearchParams(body)) {
	    body = body + '';
	  }

	  if(utils$1.isString(body)) {
	    return (await encodeText(body)).byteLength;
	  }
	};

	const resolveBodyLength = async (headers, body) => {
	  const length = utils$1.toFiniteNumber(headers.getContentLength());

	  return length == null ? getBodyLength(body) : length;
	};

	var fetchAdapter = isFetchSupported && (async (config) => {
	  let {
	    url,
	    method,
	    data,
	    signal,
	    cancelToken,
	    timeout,
	    onDownloadProgress,
	    onUploadProgress,
	    responseType,
	    headers,
	    withCredentials = 'same-origin',
	    fetchOptions
	  } = resolveConfig(config);

	  responseType = responseType ? (responseType + '').toLowerCase() : 'text';

	  let [composedSignal, stopTimeout] = (signal || cancelToken || timeout) ?
	    composeSignals$1([signal, cancelToken], timeout) : [];

	  let finished, request;

	  const onFinish = () => {
	    !finished && setTimeout(() => {
	      composedSignal && composedSignal.unsubscribe();
	    });

	    finished = true;
	  };

	  let requestContentLength;

	  try {
	    if (
	      onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head' &&
	      (requestContentLength = await resolveBodyLength(headers, data)) !== 0
	    ) {
	      let _request = new Request(url, {
	        method: 'POST',
	        body: data,
	        duplex: "half"
	      });

	      let contentTypeHeader;

	      if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
	        headers.setContentType(contentTypeHeader);
	      }

	      if (_request.body) {
	        const [onProgress, flush] = progressEventDecorator(
	          requestContentLength,
	          progressEventReducer(asyncDecorator(onUploadProgress))
	        );

	        data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush, encodeText);
	      }
	    }

	    if (!utils$1.isString(withCredentials)) {
	      withCredentials = withCredentials ? 'include' : 'omit';
	    }

	    request = new Request(url, {
	      ...fetchOptions,
	      signal: composedSignal,
	      method: method.toUpperCase(),
	      headers: headers.normalize().toJSON(),
	      body: data,
	      duplex: "half",
	      credentials: withCredentials
	    });

	    let response = await fetch(request);

	    const isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');

	    if (supportsResponseStream && (onDownloadProgress || isStreamResponse)) {
	      const options = {};

	      ['status', 'statusText', 'headers'].forEach(prop => {
	        options[prop] = response[prop];
	      });

	      const responseContentLength = utils$1.toFiniteNumber(response.headers.get('content-length'));

	      const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
	        responseContentLength,
	        progressEventReducer(asyncDecorator(onDownloadProgress), true)
	      ) || [];

	      response = new Response(
	        trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
	          flush && flush();
	          isStreamResponse && onFinish();
	        }, encodeText),
	        options
	      );
	    }

	    responseType = responseType || 'text';

	    let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || 'text'](response, config);

	    !isStreamResponse && onFinish();

	    stopTimeout && stopTimeout();

	    return await new Promise((resolve, reject) => {
	      settle(resolve, reject, {
	        data: responseData,
	        headers: AxiosHeaders$1.from(response.headers),
	        status: response.status,
	        statusText: response.statusText,
	        config,
	        request
	      });
	    })
	  } catch (err) {
	    onFinish();

	    if (err && err.name === 'TypeError' && /fetch/i.test(err.message)) {
	      throw Object.assign(
	        new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request),
	        {
	          cause: err.cause || err
	        }
	      )
	    }

	    throw AxiosError.from(err, err && err.code, config, request);
	  }
	});

	const knownAdapters = {
	  http: httpAdapter,
	  xhr: xhrAdapter,
	  fetch: fetchAdapter
	};

	utils$1.forEach(knownAdapters, (fn, value) => {
	  if (fn) {
	    try {
	      Object.defineProperty(fn, 'name', {value});
	    } catch (e) {
	      // eslint-disable-next-line no-empty
	    }
	    Object.defineProperty(fn, 'adapterName', {value});
	  }
	});

	const renderReason = (reason) => `- ${reason}`;

	const isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;

	var adapters = {
	  getAdapter: (adapters) => {
	    adapters = utils$1.isArray(adapters) ? adapters : [adapters];

	    const {length} = adapters;
	    let nameOrAdapter;
	    let adapter;

	    const rejectedReasons = {};

	    for (let i = 0; i < length; i++) {
	      nameOrAdapter = adapters[i];
	      let id;

	      adapter = nameOrAdapter;

	      if (!isResolvedHandle(nameOrAdapter)) {
	        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

	        if (adapter === undefined) {
	          throw new AxiosError(`Unknown adapter '${id}'`);
	        }
	      }

	      if (adapter) {
	        break;
	      }

	      rejectedReasons[id || '#' + i] = adapter;
	    }

	    if (!adapter) {

	      const reasons = Object.entries(rejectedReasons)
	        .map(([id, state]) => `adapter ${id} ` +
	          (state === false ? 'is not supported by the environment' : 'is not available in the build')
	        );

	      let s = length ?
	        (reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0])) :
	        'as no adapter specified';

	      throw new AxiosError(
	        `There is no suitable adapter to dispatch the request ` + s,
	        'ERR_NOT_SUPPORT'
	      );
	    }

	    return adapter;
	  },
	  adapters: knownAdapters
	};

	/**
	 * Throws a `CanceledError` if cancellation has been requested.
	 *
	 * @param {Object} config The config that is to be used for the request
	 *
	 * @returns {void}
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }

	  if (config.signal && config.signal.aborted) {
	    throw new CanceledError(null, config);
	  }
	}

	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 *
	 * @returns {Promise} The Promise to be fulfilled
	 */
	function dispatchRequest(config) {
	  throwIfCancellationRequested(config);

	  config.headers = AxiosHeaders$1.from(config.headers);

	  // Transform request data
	  config.data = transformData.call(
	    config,
	    config.transformRequest
	  );

	  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
	    config.headers.setContentType('application/x-www-form-urlencoded', false);
	  }

	  const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);

	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);

	    // Transform response data
	    response.data = transformData.call(
	      config,
	      config.transformResponse,
	      response
	    );

	    response.headers = AxiosHeaders$1.from(response.headers);

	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);

	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData.call(
	          config,
	          config.transformResponse,
	          reason.response
	        );
	        reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
	      }
	    }

	    return Promise.reject(reason);
	  });
	}

	const VERSION = "1.7.3";

	const validators$1 = {};

	// eslint-disable-next-line func-names
	['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
	  validators$1[type] = function validator(thing) {
	    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
	  };
	});

	const deprecatedWarnings = {};

	/**
	 * Transitional option validator
	 *
	 * @param {function|boolean?} validator - set to false if the transitional option has been removed
	 * @param {string?} version - deprecated version / removed since version
	 * @param {string?} message - some message with additional info
	 *
	 * @returns {function}
	 */
	validators$1.transitional = function transitional(validator, version, message) {
	  function formatMessage(opt, desc) {
	    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
	  }

	  // eslint-disable-next-line func-names
	  return (value, opt, opts) => {
	    if (validator === false) {
	      throw new AxiosError(
	        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
	        AxiosError.ERR_DEPRECATED
	      );
	    }

	    if (version && !deprecatedWarnings[opt]) {
	      deprecatedWarnings[opt] = true;
	      // eslint-disable-next-line no-console
	      console.warn(
	        formatMessage(
	          opt,
	          ' has been deprecated since v' + version + ' and will be removed in the near future'
	        )
	      );
	    }

	    return validator ? validator(value, opt, opts) : true;
	  };
	};

	/**
	 * Assert object's properties type
	 *
	 * @param {object} options
	 * @param {object} schema
	 * @param {boolean?} allowUnknown
	 *
	 * @returns {object}
	 */

	function assertOptions(options, schema, allowUnknown) {
	  if (typeof options !== 'object') {
	    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
	  }
	  const keys = Object.keys(options);
	  let i = keys.length;
	  while (i-- > 0) {
	    const opt = keys[i];
	    const validator = schema[opt];
	    if (validator) {
	      const value = options[opt];
	      const result = value === undefined || validator(value, opt, options);
	      if (result !== true) {
	        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
	      }
	      continue;
	    }
	    if (allowUnknown !== true) {
	      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
	    }
	  }
	}

	var validator = {
	  assertOptions,
	  validators: validators$1
	};

	const validators = validator.validators;

	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 *
	 * @return {Axios} A new instance of Axios
	 */
	class Axios {
	  constructor(instanceConfig) {
	    this.defaults = instanceConfig;
	    this.interceptors = {
	      request: new InterceptorManager$1(),
	      response: new InterceptorManager$1()
	    };
	  }

	  /**
	   * Dispatch a request
	   *
	   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
	   * @param {?Object} config
	   *
	   * @returns {Promise} The Promise to be fulfilled
	   */
	  async request(configOrUrl, config) {
	    try {
	      return await this._request(configOrUrl, config);
	    } catch (err) {
	      if (err instanceof Error) {
	        let dummy;

	        Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : (dummy = new Error());

	        // slice off the Error: ... line
	        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
	        try {
	          if (!err.stack) {
	            err.stack = stack;
	            // match without the 2 top stack lines
	          } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
	            err.stack += '\n' + stack;
	          }
	        } catch (e) {
	          // ignore the case where "stack" is an un-writable property
	        }
	      }

	      throw err;
	    }
	  }

	  _request(configOrUrl, config) {
	    /*eslint no-param-reassign:0*/
	    // Allow for axios('example/url'[, config]) a la fetch API
	    if (typeof configOrUrl === 'string') {
	      config = config || {};
	      config.url = configOrUrl;
	    } else {
	      config = configOrUrl || {};
	    }

	    config = mergeConfig(this.defaults, config);

	    const {transitional, paramsSerializer, headers} = config;

	    if (transitional !== undefined) {
	      validator.assertOptions(transitional, {
	        silentJSONParsing: validators.transitional(validators.boolean),
	        forcedJSONParsing: validators.transitional(validators.boolean),
	        clarifyTimeoutError: validators.transitional(validators.boolean)
	      }, false);
	    }

	    if (paramsSerializer != null) {
	      if (utils$1.isFunction(paramsSerializer)) {
	        config.paramsSerializer = {
	          serialize: paramsSerializer
	        };
	      } else {
	        validator.assertOptions(paramsSerializer, {
	          encode: validators.function,
	          serialize: validators.function
	        }, true);
	      }
	    }

	    // Set config.method
	    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

	    // Flatten headers
	    let contextHeaders = headers && utils$1.merge(
	      headers.common,
	      headers[config.method]
	    );

	    headers && utils$1.forEach(
	      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	      (method) => {
	        delete headers[method];
	      }
	    );

	    config.headers = AxiosHeaders$1.concat(contextHeaders, headers);

	    // filter out skipped interceptors
	    const requestInterceptorChain = [];
	    let synchronousRequestInterceptors = true;
	    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
	        return;
	      }

	      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

	      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
	    });

	    const responseInterceptorChain = [];
	    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
	    });

	    let promise;
	    let i = 0;
	    let len;

	    if (!synchronousRequestInterceptors) {
	      const chain = [dispatchRequest.bind(this), undefined];
	      chain.unshift.apply(chain, requestInterceptorChain);
	      chain.push.apply(chain, responseInterceptorChain);
	      len = chain.length;

	      promise = Promise.resolve(config);

	      while (i < len) {
	        promise = promise.then(chain[i++], chain[i++]);
	      }

	      return promise;
	    }

	    len = requestInterceptorChain.length;

	    let newConfig = config;

	    i = 0;

	    while (i < len) {
	      const onFulfilled = requestInterceptorChain[i++];
	      const onRejected = requestInterceptorChain[i++];
	      try {
	        newConfig = onFulfilled(newConfig);
	      } catch (error) {
	        onRejected.call(this, error);
	        break;
	      }
	    }

	    try {
	      promise = dispatchRequest.call(this, newConfig);
	    } catch (error) {
	      return Promise.reject(error);
	    }

	    i = 0;
	    len = responseInterceptorChain.length;

	    while (i < len) {
	      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
	    }

	    return promise;
	  }

	  getUri(config) {
	    config = mergeConfig(this.defaults, config);
	    const fullPath = buildFullPath(config.baseURL, config.url);
	    return buildURL(fullPath, config.params, config.paramsSerializer);
	  }
	}

	// Provide aliases for supported request methods
	utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(mergeConfig(config || {}, {
	      method,
	      url,
	      data: (config || {}).data
	    }));
	  };
	});

	utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/

	  function generateHTTPMethod(isForm) {
	    return function httpMethod(url, data, config) {
	      return this.request(mergeConfig(config || {}, {
	        method,
	        headers: isForm ? {
	          'Content-Type': 'multipart/form-data'
	        } : {},
	        url,
	        data
	      }));
	    };
	  }

	  Axios.prototype[method] = generateHTTPMethod();

	  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
	});

	var Axios$1 = Axios;

	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @param {Function} executor The executor function.
	 *
	 * @returns {CancelToken}
	 */
	class CancelToken {
	  constructor(executor) {
	    if (typeof executor !== 'function') {
	      throw new TypeError('executor must be a function.');
	    }

	    let resolvePromise;

	    this.promise = new Promise(function promiseExecutor(resolve) {
	      resolvePromise = resolve;
	    });

	    const token = this;

	    // eslint-disable-next-line func-names
	    this.promise.then(cancel => {
	      if (!token._listeners) return;

	      let i = token._listeners.length;

	      while (i-- > 0) {
	        token._listeners[i](cancel);
	      }
	      token._listeners = null;
	    });

	    // eslint-disable-next-line func-names
	    this.promise.then = onfulfilled => {
	      let _resolve;
	      // eslint-disable-next-line func-names
	      const promise = new Promise(resolve => {
	        token.subscribe(resolve);
	        _resolve = resolve;
	      }).then(onfulfilled);

	      promise.cancel = function reject() {
	        token.unsubscribe(_resolve);
	      };

	      return promise;
	    };

	    executor(function cancel(message, config, request) {
	      if (token.reason) {
	        // Cancellation has already been requested
	        return;
	      }

	      token.reason = new CanceledError(message, config, request);
	      resolvePromise(token.reason);
	    });
	  }

	  /**
	   * Throws a `CanceledError` if cancellation has been requested.
	   */
	  throwIfRequested() {
	    if (this.reason) {
	      throw this.reason;
	    }
	  }

	  /**
	   * Subscribe to the cancel signal
	   */

	  subscribe(listener) {
	    if (this.reason) {
	      listener(this.reason);
	      return;
	    }

	    if (this._listeners) {
	      this._listeners.push(listener);
	    } else {
	      this._listeners = [listener];
	    }
	  }

	  /**
	   * Unsubscribe from the cancel signal
	   */

	  unsubscribe(listener) {
	    if (!this._listeners) {
	      return;
	    }
	    const index = this._listeners.indexOf(listener);
	    if (index !== -1) {
	      this._listeners.splice(index, 1);
	    }
	  }

	  /**
	   * Returns an object that contains a new `CancelToken` and a function that, when called,
	   * cancels the `CancelToken`.
	   */
	  static source() {
	    let cancel;
	    const token = new CancelToken(function executor(c) {
	      cancel = c;
	    });
	    return {
	      token,
	      cancel
	    };
	  }
	}

	var CancelToken$1 = CancelToken;

	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 *
	 * @returns {Function}
	 */
	function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	}

	/**
	 * Determines whether the payload is an error thrown by Axios
	 *
	 * @param {*} payload The value to test
	 *
	 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
	 */
	function isAxiosError(payload) {
	  return utils$1.isObject(payload) && (payload.isAxiosError === true);
	}

	const HttpStatusCode = {
	  Continue: 100,
	  SwitchingProtocols: 101,
	  Processing: 102,
	  EarlyHints: 103,
	  Ok: 200,
	  Created: 201,
	  Accepted: 202,
	  NonAuthoritativeInformation: 203,
	  NoContent: 204,
	  ResetContent: 205,
	  PartialContent: 206,
	  MultiStatus: 207,
	  AlreadyReported: 208,
	  ImUsed: 226,
	  MultipleChoices: 300,
	  MovedPermanently: 301,
	  Found: 302,
	  SeeOther: 303,
	  NotModified: 304,
	  UseProxy: 305,
	  Unused: 306,
	  TemporaryRedirect: 307,
	  PermanentRedirect: 308,
	  BadRequest: 400,
	  Unauthorized: 401,
	  PaymentRequired: 402,
	  Forbidden: 403,
	  NotFound: 404,
	  MethodNotAllowed: 405,
	  NotAcceptable: 406,
	  ProxyAuthenticationRequired: 407,
	  RequestTimeout: 408,
	  Conflict: 409,
	  Gone: 410,
	  LengthRequired: 411,
	  PreconditionFailed: 412,
	  PayloadTooLarge: 413,
	  UriTooLong: 414,
	  UnsupportedMediaType: 415,
	  RangeNotSatisfiable: 416,
	  ExpectationFailed: 417,
	  ImATeapot: 418,
	  MisdirectedRequest: 421,
	  UnprocessableEntity: 422,
	  Locked: 423,
	  FailedDependency: 424,
	  TooEarly: 425,
	  UpgradeRequired: 426,
	  PreconditionRequired: 428,
	  TooManyRequests: 429,
	  RequestHeaderFieldsTooLarge: 431,
	  UnavailableForLegalReasons: 451,
	  InternalServerError: 500,
	  NotImplemented: 501,
	  BadGateway: 502,
	  ServiceUnavailable: 503,
	  GatewayTimeout: 504,
	  HttpVersionNotSupported: 505,
	  VariantAlsoNegotiates: 506,
	  InsufficientStorage: 507,
	  LoopDetected: 508,
	  NotExtended: 510,
	  NetworkAuthenticationRequired: 511,
	};

	Object.entries(HttpStatusCode).forEach(([key, value]) => {
	  HttpStatusCode[value] = key;
	});

	var HttpStatusCode$1 = HttpStatusCode;

	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 *
	 * @returns {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  const context = new Axios$1(defaultConfig);
	  const instance = bind(Axios$1.prototype.request, context);

	  // Copy axios.prototype to instance
	  utils$1.extend(instance, Axios$1.prototype, context, {allOwnKeys: true});

	  // Copy context to instance
	  utils$1.extend(instance, context, null, {allOwnKeys: true});

	  // Factory for creating new instances
	  instance.create = function create(instanceConfig) {
	    return createInstance(mergeConfig(defaultConfig, instanceConfig));
	  };

	  return instance;
	}

	// Create the default instance to be exported
	const axios = createInstance(defaults$1);

	// Expose Axios class to allow class inheritance
	axios.Axios = Axios$1;

	// Expose Cancel & CancelToken
	axios.CanceledError = CanceledError;
	axios.CancelToken = CancelToken$1;
	axios.isCancel = isCancel;
	axios.VERSION = VERSION;
	axios.toFormData = toFormData;

	// Expose AxiosError class
	axios.AxiosError = AxiosError;

	// alias for CanceledError for backward compatibility
	axios.Cancel = axios.CanceledError;

	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};

	axios.spread = spread;

	// Expose isAxiosError
	axios.isAxiosError = isAxiosError;

	// Expose mergeConfig
	axios.mergeConfig = mergeConfig;

	axios.AxiosHeaders = AxiosHeaders$1;

	axios.formToJSON = thing => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);

	axios.getAdapter = adapters.getAdapter;

	axios.HttpStatusCode = HttpStatusCode$1;

	axios.default = axios;

	// this module should only have a default export
	var axios$1 = axios;

	var DefaultContext = {
	  color: undefined,
	  size: undefined,
	  className: undefined,
	  style: undefined,
	  attr: undefined
	};
	var IconContext = React.createContext && /*#__PURE__*/React.createContext(DefaultContext);

	var _excluded$6 = ["attr", "size", "title"];
	function _objectWithoutProperties$2(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
	function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
	function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
	function ownKeys$g(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread$g(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$g(Object(t), !0).forEach(function (r) { _defineProperty$2(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$g(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	function _defineProperty$2(obj, key, value) { key = _toPropertyKey$2(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	function _toPropertyKey$2(t) { var i = _toPrimitive$2(t, "string"); return "symbol" == typeof i ? i : i + ""; }
	function _toPrimitive$2(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
	function Tree2Element(tree) {
	  return tree && tree.map((node, i) => /*#__PURE__*/React.createElement(node.tag, _objectSpread$g({
	    key: i
	  }, node.attr), Tree2Element(node.child)));
	}
	function GenIcon(data) {
	  return props => /*#__PURE__*/React.createElement(IconBase, _extends({
	    attr: _objectSpread$g({}, data.attr)
	  }, props), Tree2Element(data.child));
	}
	function IconBase(props) {
	  var elem = conf => {
	    var {
	        attr,
	        size,
	        title
	      } = props,
	      svgProps = _objectWithoutProperties$2(props, _excluded$6);
	    var computedSize = size || conf.size || "1em";
	    var className;
	    if (conf.className) className = conf.className;
	    if (props.className) className = (className ? className + " " : "") + props.className;
	    return /*#__PURE__*/React.createElement("svg", _extends({
	      stroke: "currentColor",
	      fill: "currentColor",
	      strokeWidth: "0"
	    }, conf.attr, attr, svgProps, {
	      className: className,
	      style: _objectSpread$g(_objectSpread$g({
	        color: props.color || conf.color
	      }, conf.style), props.style),
	      height: computedSize,
	      width: computedSize,
	      xmlns: "http://www.w3.org/2000/svg"
	    }), title && /*#__PURE__*/React.createElement("title", null, title), props.children);
	  };
	  return IconContext !== undefined ? /*#__PURE__*/React.createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
	}

	// THIS FILE IS AUTO GENERATED
	function HiOutlineArrowNarrowLeft (props) {
	  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 16l-4-4m0 0l4-4m-4 4h18"},"child":[]}]})(props);
	}

	// THIS FILE IS AUTO GENERATED
	function RxCross2 (props) {
	  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 15 15","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z","fill":"currentColor"},"child":[]}]})(props);
	}

	const ENV = "PROD";
	// export const ENV = "STAGE" as "PROD" | "DEV" | "STAGE";
	// export const ENV = "DEV" as "PROD" | "DEV" | "STAGE";
	const URLS = {
	    DEV: {
	        BASE: "http://feerio.localhost:5000/api/v1/feerio",
	    },
	    STAGE: {
	        BASE: "https://app.backend.feerio.live/api/v1/feerio",
	    },
	    PROD: {
	        BASE: "https://app.backend.feerio.io/api/v1/feerio",
	    },
	};
	const PLAIN_DOMAIN = {
	    DEV: ".feerio.localhost:3000",
	    STAGE: ".feerio.live",
	    PROD: ".feerio.io",
	};
	const BASE_URL = URLS[ENV].BASE;
	const PLAIN_DOMAIN_URL = PLAIN_DOMAIN[ENV];

	const formatDate = (dateInput) => {
	    // Convert string to Date object if necessary
	    const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
	    const options = {
	        day: "numeric",
	        month: "short",
	    };
	    // If invalid date is passed, return empty string
	    if (isNaN(date.getTime())) {
	        console.log("Invalid date");
	        return "";
	    }
	    const dayMonth = new Intl.DateTimeFormat("en-GB", options).format(date);
	    const year = date.getFullYear();
	    console.log(`${dayMonth}, ${year}`);
	    return `${dayMonth}, ${year}`;
	};

	function styleInject(css, ref) {
	  if ( ref === void 0 ) ref = {};
	  var insertAt = ref.insertAt;

	  if (!css || typeof document === 'undefined') { return; }

	  var head = document.head || document.getElementsByTagName('head')[0];
	  var style = document.createElement('style');
	  style.type = 'text/css';

	  if (insertAt === 'top') {
	    if (head.firstChild) {
	      head.insertBefore(style, head.firstChild);
	    } else {
	      head.appendChild(style);
	    }
	  } else {
	    head.appendChild(style);
	  }

	  if (style.styleSheet) {
	    style.styleSheet.cssText = css;
	  } else {
	    style.appendChild(document.createTextNode(css));
	  }
	}

	var css_248z$1 = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap\");\r\n\r\n.ChangelogWidget-module_changelogWidget__gj8Em {\r\n  --bg-color: #191919;\r\n  --text-color: #ffffff;\r\n  --border-color: #333;\r\n  --description-color: #a0a0a0;\r\n  --meta-color: #666;\r\n  --link-color: #108f62;\r\n  --scrollbar-bg: #f1f1f1;\r\n  --scrollbar-thumb: #888;\r\n  --hover-bg: rgba(192, 192, 192, 0.068);\r\n\r\n  position: absolute;\r\n  width: 330px;\r\n  height: 420px;\r\n  border-radius: 4px;\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n  background-color: var(--bg-color);\r\n  color: var(--text-color);\r\n  animation: ChangelogWidget-module_fadeUp__DY6mJ 0.3s ease;\r\n  font-family: \"Poppins\", sans-serif;\r\n  transition: all 0.1s ease;\r\n  overflow: hidden;\r\n  border: 1px solid var(--border-color);\r\n}\r\n\r\n.ChangelogWidget-module_changelogWidget__gj8Em.ChangelogWidget-module_light__nyxBe {\r\n  --bg-color: #ffffff;\r\n  --text-color: #333333;\r\n  --border-color: #e0e0e0;\r\n  --description-color: #666666;\r\n  --meta-color: #888888;\r\n  --link-color: #0077b6;\r\n  --scrollbar-bg: #f1f1f1;\r\n  --scrollbar-thumb: #c1c1c1;\r\n  --hover-bg: rgba(27, 24, 24, 0.068);\r\n}\r\n\r\n.ChangelogWidget-module_title__G2GEB {\r\n  /* height: 24px; */\r\n  font-size: 15px;\r\n  font-weight: 500;\r\n  padding: 12px;\r\n  border-bottom: 1px solid var(--border-color);\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.ChangelogWidget-module_backButton__VASBI {\r\n  color: var(--text-color);\r\n  border: none;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease-in-out;\r\n  position: absolute;\r\n  left: 18px;\r\n  margin-top: 4px;\r\n}\r\n.ChangelogWidget-module_closeButton__LZX7q {\r\n  color: var(--text-color);\r\n  border: none;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease-in-out;\r\n  position: absolute;\r\n  right: 18px;\r\n  margin-top: 4px;\r\n}\r\n.ChangelogWidget-module_closeButton__LZX7q:hover,\r\n.ChangelogWidget-module_backButton__VASBI:hover {\r\n  color: var(--link-color);\r\n}\r\n\r\n.ChangelogWidget-module_detailsContainer__5A3py {\r\n  height: 337px;\r\n  position: relative;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.ChangelogWidget-module_changelogList__T8cTJ {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.ChangelogWidget-module_changelogItem__dS8zY {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  gap: 8px;\r\n  padding: 12px;\r\n  border-bottom: 1px solid var(--border-color);\r\n  /* max-height: 124px; */\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.ChangelogWidget-module_changelogItem__dS8zY:hover {\r\n  background-color: rgba(212, 203, 203, 0.726);\r\n}\r\n/* // for dark mode */\r\n.ChangelogWidget-module_changelogItem__dS8zY:hover {\r\n  background-color: var(--hover-bg);\r\n}\r\n\r\n.ChangelogWidget-module_changelogLabels__4Wd3i {\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  text-transform: uppercase;\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 4px;\r\n}\r\n\r\n.ChangelogWidget-module_label__OtlCM {\r\n  padding: 2px 4px;\r\n  border-radius: 4px;\r\n  color: #ffffff;\r\n}\r\n\r\n.ChangelogWidget-module_changelogContent__tnOXH {\r\n  flex-grow: 1;\r\n}\r\n\r\n.ChangelogWidget-module_changelogTitle__Do01T {\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  margin-bottom: 4px;\r\n  display: flex;\r\n  gap: 4px;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.ChangelogWidget-module_changelogDescription__oBiG- {\r\n  font-size: 13px;\r\n  color: var(--description-color);\r\n  line-height: 1.3;\r\n}\r\n\r\n.ChangelogWidget-module_changelogMeta__aSNB9 {\r\n  font-size: 10px;\r\n  color: var(--meta-color);\r\n  display: flex;\r\n  gap: 8px;\r\n  align-items: center;\r\n}\r\n\r\n.ChangelogWidget-module_footer__CxPIL {\r\n  font-size: 12px;\r\n  color: var(--meta-color);\r\n  padding: 8px 16px;\r\n  border-top: 1px solid var(--border-color);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  position: sticky;\r\n  bottom: 0;\r\n}\r\n\r\n.ChangelogWidget-module_poweredBy__2jAss {\r\n  font-style: italic;\r\n}\r\n\r\na,\r\n.ChangelogWidget-module_link__jgXj4 {\r\n  color: var(--link-color);\r\n  text-decoration: none;\r\n}\r\n\r\n.ChangelogWidget-module_link__jgXj4:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.ChangelogWidget-module_noData__d-Fov {\r\n  padding: 4px;\r\n  text-align: center;\r\n  font-size: 12px;\r\n}\r\n\r\n.ChangelogWidget-module_no-scrollbar__CGyym::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.ChangelogWidget-module_thinScrollbar__Kh3Ry::-webkit-scrollbar {\r\n  width: 5px;\r\n  height: 5px;\r\n}\r\n\r\n.ChangelogWidget-module_thinScrollbar__Kh3Ry::-webkit-scrollbar-track {\r\n  background-color: var(--scrollbar-bg);\r\n}\r\n\r\n.ChangelogWidget-module_thinScrollbar__Kh3Ry::-webkit-scrollbar-thumb {\r\n  background-color: var(--scrollbar-thumb);\r\n}\r\n\r\n/* -----change log details----- */\r\n\r\n.ChangelogWidget-module_changelogDetails__KUe3z {\r\n  overflow-y: auto;\r\n  border-radius: 8px;\r\n  animation: ChangelogWidget-module_slideLeft__7sULw 0.5s ease;\r\n  font-family: \"Poppins\", sans-serif;\r\n  transition: all 0.1s ease;\r\n}\r\n\r\n/* ------ slide animations ------ */\r\n\r\n.ChangelogWidget-module_changelogList__T8cTJ,\r\n.ChangelogWidget-module_changelogDetails__KUe3z {\r\n  transition: transform 0.3s ease-in-out;\r\n  width: 100%;\r\n}\r\n\r\n.ChangelogWidget-module_changelogList__T8cTJ {\r\n  transform: translateX(0);\r\n}\r\n\r\n.ChangelogWidget-module_changelogDetails__KUe3z {\r\n  position: absolute;\r\n  left: 100%;\r\n  top: 0;\r\n  transform: translateX(100%);\r\n}\r\n\r\n/* Sliding animations */\r\n.ChangelogWidget-module_slideOut__-h1DS {\r\n  transform: translateX(-100%);\r\n}\r\n\r\n.ChangelogWidget-module_slideIn__9A2ri {\r\n  transform: translateX(-100%);\r\n}\r\n\r\n/* Fade animation for the back button */\r\n.ChangelogWidget-module_backButton__VASBI {\r\n  opacity: 0;\r\n  transition: opacity 0.3s ease-in-out;\r\n}\r\n\r\n.ChangelogWidget-module_backButton__VASBI.ChangelogWidget-module_visible__nPxtF {\r\n  opacity: 1;\r\n}\r\n\r\n/* ---- animation.css ---- */\r\n\r\n@keyframes ChangelogWidget-module_fadeUp__DY6mJ {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(20px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n/* animation for slide :left */\r\n@keyframes ChangelogWidget-module_slideLeft__7sULw {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateX(20px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .ChangelogWidget-module_changelogWidget__gj8Em {\r\n    min-height: 100vh !important;\r\n    width: 100vw !important;\r\n    border-radius: 0px !important;\r\n  }\r\n  .ChangelogWidget-module_detailsContainer__5A3py {\r\n    /*min height should be 100vh - 83px (title + footer height)  */\r\n    height: calc(100vh - 84px) !important;\r\n  }\r\n}\r\n";
	var styles$1 = {"changelogWidget":"ChangelogWidget-module_changelogWidget__gj8Em","fadeUp":"ChangelogWidget-module_fadeUp__DY6mJ","light":"ChangelogWidget-module_light__nyxBe","title":"ChangelogWidget-module_title__G2GEB","backButton":"ChangelogWidget-module_backButton__VASBI","closeButton":"ChangelogWidget-module_closeButton__LZX7q","detailsContainer":"ChangelogWidget-module_detailsContainer__5A3py","changelogList":"ChangelogWidget-module_changelogList__T8cTJ","changelogItem":"ChangelogWidget-module_changelogItem__dS8zY","changelogLabels":"ChangelogWidget-module_changelogLabels__4Wd3i","label":"ChangelogWidget-module_label__OtlCM","changelogContent":"ChangelogWidget-module_changelogContent__tnOXH","changelogTitle":"ChangelogWidget-module_changelogTitle__Do01T","changelogDescription":"ChangelogWidget-module_changelogDescription__oBiG-","changelogMeta":"ChangelogWidget-module_changelogMeta__aSNB9","footer":"ChangelogWidget-module_footer__CxPIL","poweredBy":"ChangelogWidget-module_poweredBy__2jAss","link":"ChangelogWidget-module_link__jgXj4","noData":"ChangelogWidget-module_noData__d-Fov","no-scrollbar":"ChangelogWidget-module_no-scrollbar__CGyym","thinScrollbar":"ChangelogWidget-module_thinScrollbar__Kh3Ry","changelogDetails":"ChangelogWidget-module_changelogDetails__KUe3z","slideLeft":"ChangelogWidget-module_slideLeft__7sULw","slideOut":"ChangelogWidget-module_slideOut__-h1DS","slideIn":"ChangelogWidget-module_slideIn__9A2ri","visible":"ChangelogWidget-module_visible__nPxtF"};
	styleInject(css_248z$1);

	/*!
	 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */

	function isObject$4(o) {
	  return Object.prototype.toString.call(o) === '[object Object]';
	}

	function isPlainObject$1(o) {
	  var ctor,prot;

	  if (isObject$4(o) === false) return false;

	  // If has modified constructor
	  ctor = o.constructor;
	  if (ctor === undefined) return true;

	  // If has modified prototype
	  prot = ctor.prototype;
	  if (isObject$4(prot) === false) return false;

	  // If constructor does not have an Object-specific method
	  if (prot.hasOwnProperty('isPrototypeOf') === false) {
	    return false;
	  }

	  // Most likely a plain Object
	  return true;
	}

	// src/utils/env.ts
	var NOTHING = Symbol.for("immer-nothing");
	var DRAFTABLE = Symbol.for("immer-draftable");
	var DRAFT_STATE = Symbol.for("immer-state");
	function die(error, ...args) {
	  throw new Error(
	    `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
	  );
	}

	// src/utils/common.ts
	var getPrototypeOf = Object.getPrototypeOf;
	function isDraft(value) {
	  return !!value && !!value[DRAFT_STATE];
	}
	function isDraftable(value) {
	  if (!value)
	    return false;
	  return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
	}
	var objectCtorString = Object.prototype.constructor.toString();
	function isPlainObject(value) {
	  if (!value || typeof value !== "object")
	    return false;
	  const proto = getPrototypeOf(value);
	  if (proto === null) {
	    return true;
	  }
	  const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
	  if (Ctor === Object)
	    return true;
	  return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
	}
	function each(obj, iter) {
	  if (getArchtype(obj) === 0 /* Object */) {
	    Reflect.ownKeys(obj).forEach((key) => {
	      iter(key, obj[key], obj);
	    });
	  } else {
	    obj.forEach((entry, index) => iter(index, entry, obj));
	  }
	}
	function getArchtype(thing) {
	  const state = thing[DRAFT_STATE];
	  return state ? state.type_ : Array.isArray(thing) ? 1 /* Array */ : isMap(thing) ? 2 /* Map */ : isSet(thing) ? 3 /* Set */ : 0 /* Object */;
	}
	function has(thing, prop) {
	  return getArchtype(thing) === 2 /* Map */ ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
	}
	function set(thing, propOrOldValue, value) {
	  const t = getArchtype(thing);
	  if (t === 2 /* Map */)
	    thing.set(propOrOldValue, value);
	  else if (t === 3 /* Set */) {
	    thing.add(value);
	  } else
	    thing[propOrOldValue] = value;
	}
	function is(x, y) {
	  if (x === y) {
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    return x !== x && y !== y;
	  }
	}
	function isMap(target) {
	  return target instanceof Map;
	}
	function isSet(target) {
	  return target instanceof Set;
	}
	function latest(state) {
	  return state.copy_ || state.base_;
	}
	function shallowCopy(base, strict) {
	  if (isMap(base)) {
	    return new Map(base);
	  }
	  if (isSet(base)) {
	    return new Set(base);
	  }
	  if (Array.isArray(base))
	    return Array.prototype.slice.call(base);
	  const isPlain = isPlainObject(base);
	  if (strict === true || strict === "class_only" && !isPlain) {
	    const descriptors = Object.getOwnPropertyDescriptors(base);
	    delete descriptors[DRAFT_STATE];
	    let keys = Reflect.ownKeys(descriptors);
	    for (let i = 0; i < keys.length; i++) {
	      const key = keys[i];
	      const desc = descriptors[key];
	      if (desc.writable === false) {
	        desc.writable = true;
	        desc.configurable = true;
	      }
	      if (desc.get || desc.set)
	        descriptors[key] = {
	          configurable: true,
	          writable: true,
	          // could live with !!desc.set as well here...
	          enumerable: desc.enumerable,
	          value: base[key]
	        };
	    }
	    return Object.create(getPrototypeOf(base), descriptors);
	  } else {
	    const proto = getPrototypeOf(base);
	    if (proto !== null && isPlain) {
	      return { ...base };
	    }
	    const obj = Object.create(proto);
	    return Object.assign(obj, base);
	  }
	}
	function freeze$1(obj, deep = false) {
	  if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
	    return obj;
	  if (getArchtype(obj) > 1) {
	    obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
	  }
	  Object.freeze(obj);
	  if (deep)
	    Object.entries(obj).forEach(([key, value]) => freeze$1(value, true));
	  return obj;
	}
	function dontMutateFrozenCollections() {
	  die(2);
	}
	function isFrozen(obj) {
	  return Object.isFrozen(obj);
	}

	// src/utils/plugins.ts
	var plugins = {};
	function getPlugin(pluginKey) {
	  const plugin = plugins[pluginKey];
	  if (!plugin) {
	    die(0, pluginKey);
	  }
	  return plugin;
	}

	// src/core/scope.ts
	var currentScope;
	function getCurrentScope() {
	  return currentScope;
	}
	function createScope(parent_, immer_) {
	  return {
	    drafts_: [],
	    parent_,
	    immer_,
	    // Whenever the modified draft contains a draft from another scope, we
	    // need to prevent auto-freezing so the unowned draft can be finalized.
	    canAutoFreeze_: true,
	    unfinalizedDrafts_: 0
	  };
	}
	function usePatchesInScope(scope, patchListener) {
	  if (patchListener) {
	    getPlugin("Patches");
	    scope.patches_ = [];
	    scope.inversePatches_ = [];
	    scope.patchListener_ = patchListener;
	  }
	}
	function revokeScope(scope) {
	  leaveScope(scope);
	  scope.drafts_.forEach(revokeDraft);
	  scope.drafts_ = null;
	}
	function leaveScope(scope) {
	  if (scope === currentScope) {
	    currentScope = scope.parent_;
	  }
	}
	function enterScope(immer2) {
	  return currentScope = createScope(currentScope, immer2);
	}
	function revokeDraft(draft) {
	  const state = draft[DRAFT_STATE];
	  if (state.type_ === 0 /* Object */ || state.type_ === 1 /* Array */)
	    state.revoke_();
	  else
	    state.revoked_ = true;
	}

	// src/core/finalize.ts
	function processResult(result, scope) {
	  scope.unfinalizedDrafts_ = scope.drafts_.length;
	  const baseDraft = scope.drafts_[0];
	  const isReplaced = result !== void 0 && result !== baseDraft;
	  if (isReplaced) {
	    if (baseDraft[DRAFT_STATE].modified_) {
	      revokeScope(scope);
	      die(4);
	    }
	    if (isDraftable(result)) {
	      result = finalize(scope, result);
	      if (!scope.parent_)
	        maybeFreeze(scope, result);
	    }
	    if (scope.patches_) {
	      getPlugin("Patches").generateReplacementPatches_(
	        baseDraft[DRAFT_STATE].base_,
	        result,
	        scope.patches_,
	        scope.inversePatches_
	      );
	    }
	  } else {
	    result = finalize(scope, baseDraft, []);
	  }
	  revokeScope(scope);
	  if (scope.patches_) {
	    scope.patchListener_(scope.patches_, scope.inversePatches_);
	  }
	  return result !== NOTHING ? result : void 0;
	}
	function finalize(rootScope, value, path) {
	  if (isFrozen(value))
	    return value;
	  const state = value[DRAFT_STATE];
	  if (!state) {
	    each(
	      value,
	      (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path)
	    );
	    return value;
	  }
	  if (state.scope_ !== rootScope)
	    return value;
	  if (!state.modified_) {
	    maybeFreeze(rootScope, state.base_, true);
	    return state.base_;
	  }
	  if (!state.finalized_) {
	    state.finalized_ = true;
	    state.scope_.unfinalizedDrafts_--;
	    const result = state.copy_;
	    let resultEach = result;
	    let isSet2 = false;
	    if (state.type_ === 3 /* Set */) {
	      resultEach = new Set(result);
	      result.clear();
	      isSet2 = true;
	    }
	    each(
	      resultEach,
	      (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path, isSet2)
	    );
	    maybeFreeze(rootScope, result, false);
	    if (path && rootScope.patches_) {
	      getPlugin("Patches").generatePatches_(
	        state,
	        path,
	        rootScope.patches_,
	        rootScope.inversePatches_
	      );
	    }
	  }
	  return state.copy_;
	}
	function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
	  if (isDraft(childValue)) {
	    const path = rootPath && parentState && parentState.type_ !== 3 /* Set */ && // Set objects are atomic since they have no keys.
	    !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
	    const res = finalize(rootScope, childValue, path);
	    set(targetObject, prop, res);
	    if (isDraft(res)) {
	      rootScope.canAutoFreeze_ = false;
	    } else
	      return;
	  } else if (targetIsSet) {
	    targetObject.add(childValue);
	  }
	  if (isDraftable(childValue) && !isFrozen(childValue)) {
	    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
	      return;
	    }
	    finalize(rootScope, childValue);
	    if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && Object.prototype.propertyIsEnumerable.call(targetObject, prop))
	      maybeFreeze(rootScope, childValue);
	  }
	}
	function maybeFreeze(scope, value, deep = false) {
	  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
	    freeze$1(value, deep);
	  }
	}

	// src/core/proxy.ts
	function createProxyProxy(base, parent) {
	  const isArray = Array.isArray(base);
	  const state = {
	    type_: isArray ? 1 /* Array */ : 0 /* Object */,
	    // Track which produce call this is associated with.
	    scope_: parent ? parent.scope_ : getCurrentScope(),
	    // True for both shallow and deep changes.
	    modified_: false,
	    // Used during finalization.
	    finalized_: false,
	    // Track which properties have been assigned (true) or deleted (false).
	    assigned_: {},
	    // The parent draft state.
	    parent_: parent,
	    // The base state.
	    base_: base,
	    // The base proxy.
	    draft_: null,
	    // set below
	    // The base copy with any updated values.
	    copy_: null,
	    // Called by the `produce` function.
	    revoke_: null,
	    isManual_: false
	  };
	  let target = state;
	  let traps = objectTraps;
	  if (isArray) {
	    target = [state];
	    traps = arrayTraps;
	  }
	  const { revoke, proxy } = Proxy.revocable(target, traps);
	  state.draft_ = proxy;
	  state.revoke_ = revoke;
	  return proxy;
	}
	var objectTraps = {
	  get(state, prop) {
	    if (prop === DRAFT_STATE)
	      return state;
	    const source = latest(state);
	    if (!has(source, prop)) {
	      return readPropFromProto(state, source, prop);
	    }
	    const value = source[prop];
	    if (state.finalized_ || !isDraftable(value)) {
	      return value;
	    }
	    if (value === peek(state.base_, prop)) {
	      prepareCopy(state);
	      return state.copy_[prop] = createProxy(value, state);
	    }
	    return value;
	  },
	  has(state, prop) {
	    return prop in latest(state);
	  },
	  ownKeys(state) {
	    return Reflect.ownKeys(latest(state));
	  },
	  set(state, prop, value) {
	    const desc = getDescriptorFromProto(latest(state), prop);
	    if (desc?.set) {
	      desc.set.call(state.draft_, value);
	      return true;
	    }
	    if (!state.modified_) {
	      const current2 = peek(latest(state), prop);
	      const currentState = current2?.[DRAFT_STATE];
	      if (currentState && currentState.base_ === value) {
	        state.copy_[prop] = value;
	        state.assigned_[prop] = false;
	        return true;
	      }
	      if (is(value, current2) && (value !== void 0 || has(state.base_, prop)))
	        return true;
	      prepareCopy(state);
	      markChanged(state);
	    }
	    if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
	    (value !== void 0 || prop in state.copy_) || // special case: NaN
	    Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
	      return true;
	    state.copy_[prop] = value;
	    state.assigned_[prop] = true;
	    return true;
	  },
	  deleteProperty(state, prop) {
	    if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
	      state.assigned_[prop] = false;
	      prepareCopy(state);
	      markChanged(state);
	    } else {
	      delete state.assigned_[prop];
	    }
	    if (state.copy_) {
	      delete state.copy_[prop];
	    }
	    return true;
	  },
	  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
	  // the same guarantee in ES5 mode.
	  getOwnPropertyDescriptor(state, prop) {
	    const owner = latest(state);
	    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
	    if (!desc)
	      return desc;
	    return {
	      writable: true,
	      configurable: state.type_ !== 1 /* Array */ || prop !== "length",
	      enumerable: desc.enumerable,
	      value: owner[prop]
	    };
	  },
	  defineProperty() {
	    die(11);
	  },
	  getPrototypeOf(state) {
	    return getPrototypeOf(state.base_);
	  },
	  setPrototypeOf() {
	    die(12);
	  }
	};
	var arrayTraps = {};
	each(objectTraps, (key, fn) => {
	  arrayTraps[key] = function() {
	    arguments[0] = arguments[0][0];
	    return fn.apply(this, arguments);
	  };
	});
	arrayTraps.deleteProperty = function(state, prop) {
	  return arrayTraps.set.call(this, state, prop, void 0);
	};
	arrayTraps.set = function(state, prop, value) {
	  return objectTraps.set.call(this, state[0], prop, value, state[0]);
	};
	function peek(draft, prop) {
	  const state = draft[DRAFT_STATE];
	  const source = state ? latest(state) : draft;
	  return source[prop];
	}
	function readPropFromProto(state, source, prop) {
	  const desc = getDescriptorFromProto(source, prop);
	  return desc ? `value` in desc ? desc.value : (
	    // This is a very special case, if the prop is a getter defined by the
	    // prototype, we should invoke it with the draft as context!
	    desc.get?.call(state.draft_)
	  ) : void 0;
	}
	function getDescriptorFromProto(source, prop) {
	  if (!(prop in source))
	    return void 0;
	  let proto = getPrototypeOf(source);
	  while (proto) {
	    const desc = Object.getOwnPropertyDescriptor(proto, prop);
	    if (desc)
	      return desc;
	    proto = getPrototypeOf(proto);
	  }
	  return void 0;
	}
	function markChanged(state) {
	  if (!state.modified_) {
	    state.modified_ = true;
	    if (state.parent_) {
	      markChanged(state.parent_);
	    }
	  }
	}
	function prepareCopy(state) {
	  if (!state.copy_) {
	    state.copy_ = shallowCopy(
	      state.base_,
	      state.scope_.immer_.useStrictShallowCopy_
	    );
	  }
	}

	// src/core/immerClass.ts
	var Immer2 = class {
	  constructor(config) {
	    this.autoFreeze_ = true;
	    this.useStrictShallowCopy_ = false;
	    /**
	     * The `produce` function takes a value and a "recipe function" (whose
	     * return value often depends on the base state). The recipe function is
	     * free to mutate its first argument however it wants. All mutations are
	     * only ever applied to a __copy__ of the base state.
	     *
	     * Pass only a function to create a "curried producer" which relieves you
	     * from passing the recipe function every time.
	     *
	     * Only plain objects and arrays are made mutable. All other objects are
	     * considered uncopyable.
	     *
	     * Note: This function is __bound__ to its `Immer` instance.
	     *
	     * @param {any} base - the initial state
	     * @param {Function} recipe - function that receives a proxy of the base state as first argument and which can be freely modified
	     * @param {Function} patchListener - optional function that will be called with all the patches produced here
	     * @returns {any} a new state, or the initial state if nothing was modified
	     */
	    this.produce = (base, recipe, patchListener) => {
	      if (typeof base === "function" && typeof recipe !== "function") {
	        const defaultBase = recipe;
	        recipe = base;
	        const self = this;
	        return function curriedProduce(base2 = defaultBase, ...args) {
	          return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
	        };
	      }
	      if (typeof recipe !== "function")
	        die(6);
	      if (patchListener !== void 0 && typeof patchListener !== "function")
	        die(7);
	      let result;
	      if (isDraftable(base)) {
	        const scope = enterScope(this);
	        const proxy = createProxy(base, void 0);
	        let hasError = true;
	        try {
	          result = recipe(proxy);
	          hasError = false;
	        } finally {
	          if (hasError)
	            revokeScope(scope);
	          else
	            leaveScope(scope);
	        }
	        usePatchesInScope(scope, patchListener);
	        return processResult(result, scope);
	      } else if (!base || typeof base !== "object") {
	        result = recipe(base);
	        if (result === void 0)
	          result = base;
	        if (result === NOTHING)
	          result = void 0;
	        if (this.autoFreeze_)
	          freeze$1(result, true);
	        if (patchListener) {
	          const p = [];
	          const ip = [];
	          getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
	          patchListener(p, ip);
	        }
	        return result;
	      } else
	        die(1, base);
	    };
	    this.produceWithPatches = (base, recipe) => {
	      if (typeof base === "function") {
	        return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
	      }
	      let patches, inversePatches;
	      const result = this.produce(base, recipe, (p, ip) => {
	        patches = p;
	        inversePatches = ip;
	      });
	      return [result, patches, inversePatches];
	    };
	    if (typeof config?.autoFreeze === "boolean")
	      this.setAutoFreeze(config.autoFreeze);
	    if (typeof config?.useStrictShallowCopy === "boolean")
	      this.setUseStrictShallowCopy(config.useStrictShallowCopy);
	  }
	  createDraft(base) {
	    if (!isDraftable(base))
	      die(8);
	    if (isDraft(base))
	      base = current(base);
	    const scope = enterScope(this);
	    const proxy = createProxy(base, void 0);
	    proxy[DRAFT_STATE].isManual_ = true;
	    leaveScope(scope);
	    return proxy;
	  }
	  finishDraft(draft, patchListener) {
	    const state = draft && draft[DRAFT_STATE];
	    if (!state || !state.isManual_)
	      die(9);
	    const { scope_: scope } = state;
	    usePatchesInScope(scope, patchListener);
	    return processResult(void 0, scope);
	  }
	  /**
	   * Pass true to automatically freeze all copies created by Immer.
	   *
	   * By default, auto-freezing is enabled.
	   */
	  setAutoFreeze(value) {
	    this.autoFreeze_ = value;
	  }
	  /**
	   * Pass true to enable strict shallow copy.
	   *
	   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
	   */
	  setUseStrictShallowCopy(value) {
	    this.useStrictShallowCopy_ = value;
	  }
	  applyPatches(base, patches) {
	    let i;
	    for (i = patches.length - 1; i >= 0; i--) {
	      const patch = patches[i];
	      if (patch.path.length === 0 && patch.op === "replace") {
	        base = patch.value;
	        break;
	      }
	    }
	    if (i > -1) {
	      patches = patches.slice(i + 1);
	    }
	    const applyPatchesImpl = getPlugin("Patches").applyPatches_;
	    if (isDraft(base)) {
	      return applyPatchesImpl(base, patches);
	    }
	    return this.produce(
	      base,
	      (draft) => applyPatchesImpl(draft, patches)
	    );
	  }
	};
	function createProxy(value, parent) {
	  const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
	  const scope = parent ? parent.scope_ : getCurrentScope();
	  scope.drafts_.push(draft);
	  return draft;
	}

	// src/core/current.ts
	function current(value) {
	  if (!isDraft(value))
	    die(10, value);
	  return currentImpl(value);
	}
	function currentImpl(value) {
	  if (!isDraftable(value) || isFrozen(value))
	    return value;
	  const state = value[DRAFT_STATE];
	  let copy;
	  if (state) {
	    if (!state.modified_)
	      return state.base_;
	    state.finalized_ = true;
	    copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
	  } else {
	    copy = shallowCopy(value, true);
	  }
	  each(copy, (key, childValue) => {
	    set(copy, key, currentImpl(childValue));
	  });
	  if (state) {
	    state.finalized_ = false;
	  }
	  return copy;
	}

	// src/immer.ts
	var immer = new Immer2();
	var produce = immer.produce;
	immer.produceWithPatches.bind(
	  immer
	);
	immer.setAutoFreeze.bind(immer);
	immer.setUseStrictShallowCopy.bind(immer);
	immer.applyPatches.bind(immer);
	var createDraft = immer.createDraft.bind(immer);
	var finishDraft = immer.finishDraft.bind(immer);

	// eslint-disable-next-line no-redeclare
	var PathRef = {
	  transform(ref, op) {
	    var {
	      current,
	      affinity
	    } = ref;
	    if (current == null) {
	      return;
	    }
	    var path = Path.transform(current, op, {
	      affinity
	    });
	    ref.current = path;
	    if (path == null) {
	      ref.unref();
	    }
	  }
	};

	// eslint-disable-next-line no-redeclare
	var PointRef = {
	  transform(ref, op) {
	    var {
	      current,
	      affinity
	    } = ref;
	    if (current == null) {
	      return;
	    }
	    var point = Point.transform(current, op, {
	      affinity
	    });
	    ref.current = point;
	    if (point == null) {
	      ref.unref();
	    }
	  }
	};

	// eslint-disable-next-line no-redeclare
	var RangeRef = {
	  transform(ref, op) {
	    var {
	      current,
	      affinity
	    } = ref;
	    if (current == null) {
	      return;
	    }
	    var path = Range.transform(current, op, {
	      affinity
	    });
	    ref.current = path;
	    if (path == null) {
	      ref.unref();
	    }
	  }
	};

	var DIRTY_PATHS = new WeakMap();
	var DIRTY_PATH_KEYS = new WeakMap();
	var FLUSHING = new WeakMap();
	var NORMALIZING = new WeakMap();
	var PATH_REFS = new WeakMap();
	var POINT_REFS = new WeakMap();
	var RANGE_REFS = new WeakMap();

	// eslint-disable-next-line no-redeclare
	var Path = {
	  ancestors(path) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var {
	      reverse = false
	    } = options;
	    var paths = Path.levels(path, options);
	    if (reverse) {
	      paths = paths.slice(1);
	    } else {
	      paths = paths.slice(0, -1);
	    }
	    return paths;
	  },
	  common(path, another) {
	    var common = [];
	    for (var i = 0; i < path.length && i < another.length; i++) {
	      var av = path[i];
	      var bv = another[i];
	      if (av !== bv) {
	        break;
	      }
	      common.push(av);
	    }
	    return common;
	  },
	  compare(path, another) {
	    var min = Math.min(path.length, another.length);
	    for (var i = 0; i < min; i++) {
	      if (path[i] < another[i]) return -1;
	      if (path[i] > another[i]) return 1;
	    }
	    return 0;
	  },
	  endsAfter(path, another) {
	    var i = path.length - 1;
	    var as = path.slice(0, i);
	    var bs = another.slice(0, i);
	    var av = path[i];
	    var bv = another[i];
	    return Path.equals(as, bs) && av > bv;
	  },
	  endsAt(path, another) {
	    var i = path.length;
	    var as = path.slice(0, i);
	    var bs = another.slice(0, i);
	    return Path.equals(as, bs);
	  },
	  endsBefore(path, another) {
	    var i = path.length - 1;
	    var as = path.slice(0, i);
	    var bs = another.slice(0, i);
	    var av = path[i];
	    var bv = another[i];
	    return Path.equals(as, bs) && av < bv;
	  },
	  equals(path, another) {
	    return path.length === another.length && path.every((n, i) => n === another[i]);
	  },
	  hasPrevious(path) {
	    return path[path.length - 1] > 0;
	  },
	  isAfter(path, another) {
	    return Path.compare(path, another) === 1;
	  },
	  isAncestor(path, another) {
	    return path.length < another.length && Path.compare(path, another) === 0;
	  },
	  isBefore(path, another) {
	    return Path.compare(path, another) === -1;
	  },
	  isChild(path, another) {
	    return path.length === another.length + 1 && Path.compare(path, another) === 0;
	  },
	  isCommon(path, another) {
	    return path.length <= another.length && Path.compare(path, another) === 0;
	  },
	  isDescendant(path, another) {
	    return path.length > another.length && Path.compare(path, another) === 0;
	  },
	  isParent(path, another) {
	    return path.length + 1 === another.length && Path.compare(path, another) === 0;
	  },
	  isPath(value) {
	    return Array.isArray(value) && (value.length === 0 || typeof value[0] === 'number');
	  },
	  isSibling(path, another) {
	    if (path.length !== another.length) {
	      return false;
	    }
	    var as = path.slice(0, -1);
	    var bs = another.slice(0, -1);
	    var al = path[path.length - 1];
	    var bl = another[another.length - 1];
	    return al !== bl && Path.equals(as, bs);
	  },
	  levels(path) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var {
	      reverse = false
	    } = options;
	    var list = [];
	    for (var i = 0; i <= path.length; i++) {
	      list.push(path.slice(0, i));
	    }
	    if (reverse) {
	      list.reverse();
	    }
	    return list;
	  },
	  next(path) {
	    if (path.length === 0) {
	      throw new Error("Cannot get the next path of a root path [".concat(path, "], because it has no next index."));
	    }
	    var last = path[path.length - 1];
	    return path.slice(0, -1).concat(last + 1);
	  },
	  operationCanTransformPath(operation) {
	    switch (operation.type) {
	      case 'insert_node':
	      case 'remove_node':
	      case 'merge_node':
	      case 'split_node':
	      case 'move_node':
	        return true;
	      default:
	        return false;
	    }
	  },
	  parent(path) {
	    if (path.length === 0) {
	      throw new Error("Cannot get the parent path of the root path [".concat(path, "]."));
	    }
	    return path.slice(0, -1);
	  },
	  previous(path) {
	    if (path.length === 0) {
	      throw new Error("Cannot get the previous path of a root path [".concat(path, "], because it has no previous index."));
	    }
	    var last = path[path.length - 1];
	    if (last <= 0) {
	      throw new Error("Cannot get the previous path of a first child path [".concat(path, "] because it would result in a negative index."));
	    }
	    return path.slice(0, -1).concat(last - 1);
	  },
	  relative(path, ancestor) {
	    if (!Path.isAncestor(ancestor, path) && !Path.equals(path, ancestor)) {
	      throw new Error("Cannot get the relative path of [".concat(path, "] inside ancestor [").concat(ancestor, "], because it is not above or equal to the path."));
	    }
	    return path.slice(ancestor.length);
	  },
	  transform(path, operation) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    if (!path) return null;
	    // PERF: use destructing instead of immer
	    var p = [...path];
	    var {
	      affinity = 'forward'
	    } = options;
	    // PERF: Exit early if the operation is guaranteed not to have an effect.
	    if (path.length === 0) {
	      return p;
	    }
	    switch (operation.type) {
	      case 'insert_node':
	        {
	          var {
	            path: op
	          } = operation;
	          if (Path.equals(op, p) || Path.endsBefore(op, p) || Path.isAncestor(op, p)) {
	            p[op.length - 1] += 1;
	          }
	          break;
	        }
	      case 'remove_node':
	        {
	          var {
	            path: _op
	          } = operation;
	          if (Path.equals(_op, p) || Path.isAncestor(_op, p)) {
	            return null;
	          } else if (Path.endsBefore(_op, p)) {
	            p[_op.length - 1] -= 1;
	          }
	          break;
	        }
	      case 'merge_node':
	        {
	          var {
	            path: _op2,
	            position
	          } = operation;
	          if (Path.equals(_op2, p) || Path.endsBefore(_op2, p)) {
	            p[_op2.length - 1] -= 1;
	          } else if (Path.isAncestor(_op2, p)) {
	            p[_op2.length - 1] -= 1;
	            p[_op2.length] += position;
	          }
	          break;
	        }
	      case 'split_node':
	        {
	          var {
	            path: _op3,
	            position: _position
	          } = operation;
	          if (Path.equals(_op3, p)) {
	            if (affinity === 'forward') {
	              p[p.length - 1] += 1;
	            } else if (affinity === 'backward') ; else {
	              return null;
	            }
	          } else if (Path.endsBefore(_op3, p)) {
	            p[_op3.length - 1] += 1;
	          } else if (Path.isAncestor(_op3, p) && path[_op3.length] >= _position) {
	            p[_op3.length - 1] += 1;
	            p[_op3.length] -= _position;
	          }
	          break;
	        }
	      case 'move_node':
	        {
	          var {
	            path: _op4,
	            newPath: onp
	          } = operation;
	          // If the old and new path are the same, it's a no-op.
	          if (Path.equals(_op4, onp)) {
	            return p;
	          }
	          if (Path.isAncestor(_op4, p) || Path.equals(_op4, p)) {
	            var copy = onp.slice();
	            if (Path.endsBefore(_op4, onp) && _op4.length < onp.length) {
	              copy[_op4.length - 1] -= 1;
	            }
	            return copy.concat(p.slice(_op4.length));
	          } else if (Path.isSibling(_op4, onp) && (Path.isAncestor(onp, p) || Path.equals(onp, p))) {
	            if (Path.endsBefore(_op4, p)) {
	              p[_op4.length - 1] -= 1;
	            } else {
	              p[_op4.length - 1] += 1;
	            }
	          } else if (Path.endsBefore(onp, p) || Path.equals(onp, p) || Path.isAncestor(onp, p)) {
	            if (Path.endsBefore(_op4, p)) {
	              p[_op4.length - 1] -= 1;
	            }
	            p[onp.length - 1] += 1;
	          } else if (Path.endsBefore(_op4, p)) {
	            if (Path.equals(onp, p)) {
	              p[onp.length - 1] += 1;
	            }
	            p[_op4.length - 1] -= 1;
	          }
	          break;
	        }
	    }
	    return p;
	  }
	};

	function _typeof$1(o) {
	  "@babel/helpers - typeof";

	  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
	    return typeof o;
	  } : function (o) {
	    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	  }, _typeof$1(o);
	}

	function _toPrimitive$1(input, hint) {
	  if (_typeof$1(input) !== "object" || input === null) return input;
	  var prim = input[Symbol.toPrimitive];
	  if (prim !== undefined) {
	    var res = prim.call(input, hint || "default");
	    if (_typeof$1(res) !== "object") return res;
	    throw new TypeError("@@toPrimitive must return a primitive value.");
	  }
	  return (hint === "string" ? String : Number)(input);
	}

	function _toPropertyKey$1(arg) {
	  var key = _toPrimitive$1(arg, "string");
	  return _typeof$1(key) === "symbol" ? key : String(key);
	}

	function _defineProperty$1(obj, key, value) {
	  key = _toPropertyKey$1(key);
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

	function ownKeys$e(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread$e(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$e(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$e(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	var applyToDraft = (editor, selection, op) => {
	  switch (op.type) {
	    case 'insert_node':
	      {
	        var {
	          path,
	          node
	        } = op;
	        var parent = Node.parent(editor, path);
	        var index = path[path.length - 1];
	        if (index > parent.children.length) {
	          throw new Error("Cannot apply an \"insert_node\" operation at path [".concat(path, "] because the destination is past the end of the node."));
	        }
	        parent.children.splice(index, 0, node);
	        if (selection) {
	          for (var [point, key] of Range.points(selection)) {
	            selection[key] = Point.transform(point, op);
	          }
	        }
	        break;
	      }
	    case 'insert_text':
	      {
	        var {
	          path: _path,
	          offset,
	          text
	        } = op;
	        if (text.length === 0) break;
	        var _node = Node.leaf(editor, _path);
	        var before = _node.text.slice(0, offset);
	        var after = _node.text.slice(offset);
	        _node.text = before + text + after;
	        if (selection) {
	          for (var [_point, _key] of Range.points(selection)) {
	            selection[_key] = Point.transform(_point, op);
	          }
	        }
	        break;
	      }
	    case 'merge_node':
	      {
	        var {
	          path: _path2
	        } = op;
	        var _node2 = Node.get(editor, _path2);
	        var prevPath = Path.previous(_path2);
	        var prev = Node.get(editor, prevPath);
	        var _parent = Node.parent(editor, _path2);
	        var _index = _path2[_path2.length - 1];
	        if (Text$1.isText(_node2) && Text$1.isText(prev)) {
	          prev.text += _node2.text;
	        } else if (!Text$1.isText(_node2) && !Text$1.isText(prev)) {
	          prev.children.push(..._node2.children);
	        } else {
	          throw new Error("Cannot apply a \"merge_node\" operation at path [".concat(_path2, "] to nodes of different interfaces: ").concat(Scrubber.stringify(_node2), " ").concat(Scrubber.stringify(prev)));
	        }
	        _parent.children.splice(_index, 1);
	        if (selection) {
	          for (var [_point2, _key2] of Range.points(selection)) {
	            selection[_key2] = Point.transform(_point2, op);
	          }
	        }
	        break;
	      }
	    case 'move_node':
	      {
	        var {
	          path: _path3,
	          newPath
	        } = op;
	        if (Path.isAncestor(_path3, newPath)) {
	          throw new Error("Cannot move a path [".concat(_path3, "] to new path [").concat(newPath, "] because the destination is inside itself."));
	        }
	        var _node3 = Node.get(editor, _path3);
	        var _parent2 = Node.parent(editor, _path3);
	        var _index2 = _path3[_path3.length - 1];
	        // This is tricky, but since the `path` and `newPath` both refer to
	        // the same snapshot in time, there's a mismatch. After either
	        // removing the original position, the second step's path can be out
	        // of date. So instead of using the `op.newPath` directly, we
	        // transform `op.path` to ascertain what the `newPath` would be after
	        // the operation was applied.
	        _parent2.children.splice(_index2, 1);
	        var truePath = Path.transform(_path3, op);
	        var newParent = Node.get(editor, Path.parent(truePath));
	        var newIndex = truePath[truePath.length - 1];
	        newParent.children.splice(newIndex, 0, _node3);
	        if (selection) {
	          for (var [_point3, _key3] of Range.points(selection)) {
	            selection[_key3] = Point.transform(_point3, op);
	          }
	        }
	        break;
	      }
	    case 'remove_node':
	      {
	        var {
	          path: _path4
	        } = op;
	        var _index3 = _path4[_path4.length - 1];
	        var _parent3 = Node.parent(editor, _path4);
	        _parent3.children.splice(_index3, 1);
	        // Transform all the points in the value, but if the point was in the
	        // node that was removed we need to update the range or remove it.
	        if (selection) {
	          for (var [_point4, _key4] of Range.points(selection)) {
	            var result = Point.transform(_point4, op);
	            if (selection != null && result != null) {
	              selection[_key4] = result;
	            } else {
	              var _prev = void 0;
	              var next = void 0;
	              for (var [n, p] of Node.texts(editor)) {
	                if (Path.compare(p, _path4) === -1) {
	                  _prev = [n, p];
	                } else {
	                  next = [n, p];
	                  break;
	                }
	              }
	              var preferNext = false;
	              if (_prev && next) {
	                if (Path.equals(next[1], _path4)) {
	                  preferNext = !Path.hasPrevious(next[1]);
	                } else {
	                  preferNext = Path.common(_prev[1], _path4).length < Path.common(next[1], _path4).length;
	                }
	              }
	              if (_prev && !preferNext) {
	                _point4.path = _prev[1];
	                _point4.offset = _prev[0].text.length;
	              } else if (next) {
	                _point4.path = next[1];
	                _point4.offset = 0;
	              } else {
	                selection = null;
	              }
	            }
	          }
	        }
	        break;
	      }
	    case 'remove_text':
	      {
	        var {
	          path: _path5,
	          offset: _offset,
	          text: _text
	        } = op;
	        if (_text.length === 0) break;
	        var _node4 = Node.leaf(editor, _path5);
	        var _before = _node4.text.slice(0, _offset);
	        var _after = _node4.text.slice(_offset + _text.length);
	        _node4.text = _before + _after;
	        if (selection) {
	          for (var [_point5, _key5] of Range.points(selection)) {
	            selection[_key5] = Point.transform(_point5, op);
	          }
	        }
	        break;
	      }
	    case 'set_node':
	      {
	        var {
	          path: _path6,
	          properties,
	          newProperties
	        } = op;
	        if (_path6.length === 0) {
	          throw new Error("Cannot set properties on the root node!");
	        }
	        var _node5 = Node.get(editor, _path6);
	        for (var _key6 in newProperties) {
	          if (_key6 === 'children' || _key6 === 'text') {
	            throw new Error("Cannot set the \"".concat(_key6, "\" property of nodes!"));
	          }
	          var value = newProperties[_key6];
	          if (value == null) {
	            delete _node5[_key6];
	          } else {
	            _node5[_key6] = value;
	          }
	        }
	        // properties that were previously defined, but are now missing, must be deleted
	        for (var _key7 in properties) {
	          if (!newProperties.hasOwnProperty(_key7)) {
	            delete _node5[_key7];
	          }
	        }
	        break;
	      }
	    case 'set_selection':
	      {
	        var {
	          newProperties: _newProperties
	        } = op;
	        if (_newProperties == null) {
	          selection = _newProperties;
	        } else {
	          if (selection == null) {
	            if (!Range.isRange(_newProperties)) {
	              throw new Error("Cannot apply an incomplete \"set_selection\" operation properties ".concat(Scrubber.stringify(_newProperties), " when there is no current selection."));
	            }
	            selection = _objectSpread$e({}, _newProperties);
	          }
	          for (var _key8 in _newProperties) {
	            var _value = _newProperties[_key8];
	            if (_value == null) {
	              if (_key8 === 'anchor' || _key8 === 'focus') {
	                throw new Error("Cannot remove the \"".concat(_key8, "\" selection property"));
	              }
	              delete selection[_key8];
	            } else {
	              selection[_key8] = _value;
	            }
	          }
	        }
	        break;
	      }
	    case 'split_node':
	      {
	        var {
	          path: _path7,
	          position,
	          properties: _properties
	        } = op;
	        if (_path7.length === 0) {
	          throw new Error("Cannot apply a \"split_node\" operation at path [".concat(_path7, "] because the root node cannot be split."));
	        }
	        var _node6 = Node.get(editor, _path7);
	        var _parent4 = Node.parent(editor, _path7);
	        var _index4 = _path7[_path7.length - 1];
	        var newNode;
	        if (Text$1.isText(_node6)) {
	          var _before2 = _node6.text.slice(0, position);
	          var _after2 = _node6.text.slice(position);
	          _node6.text = _before2;
	          newNode = _objectSpread$e(_objectSpread$e({}, _properties), {}, {
	            text: _after2
	          });
	        } else {
	          var _before3 = _node6.children.slice(0, position);
	          var _after3 = _node6.children.slice(position);
	          _node6.children = _before3;
	          newNode = _objectSpread$e(_objectSpread$e({}, _properties), {}, {
	            children: _after3
	          });
	        }
	        _parent4.children.splice(_index4 + 1, 0, newNode);
	        if (selection) {
	          for (var [_point6, _key9] of Range.points(selection)) {
	            selection[_key9] = Point.transform(_point6, op);
	          }
	        }
	        break;
	      }
	  }
	  return selection;
	};
	// eslint-disable-next-line no-redeclare
	var GeneralTransforms = {
	  transform(editor, op) {
	    editor.children = createDraft(editor.children);
	    var selection = editor.selection && createDraft(editor.selection);
	    try {
	      selection = applyToDraft(editor, selection, op);
	    } finally {
	      editor.children = finishDraft(editor.children);
	      if (selection) {
	        editor.selection = isDraft(selection) ? finishDraft(selection) : selection;
	      } else {
	        editor.selection = null;
	      }
	    }
	  }
	};

	// eslint-disable-next-line no-redeclare
	var NodeTransforms = {
	  insertNodes(editor, nodes, options) {
	    editor.insertNodes(nodes, options);
	  },
	  liftNodes(editor, options) {
	    editor.liftNodes(options);
	  },
	  mergeNodes(editor, options) {
	    editor.mergeNodes(options);
	  },
	  moveNodes(editor, options) {
	    editor.moveNodes(options);
	  },
	  removeNodes(editor, options) {
	    editor.removeNodes(options);
	  },
	  setNodes(editor, props, options) {
	    editor.setNodes(props, options);
	  },
	  splitNodes(editor, options) {
	    editor.splitNodes(options);
	  },
	  unsetNodes(editor, props, options) {
	    editor.unsetNodes(props, options);
	  },
	  unwrapNodes(editor, options) {
	    editor.unwrapNodes(options);
	  },
	  wrapNodes(editor, element, options) {
	    editor.wrapNodes(element, options);
	  }
	};

	// eslint-disable-next-line no-redeclare
	var SelectionTransforms = {
	  collapse(editor, options) {
	    editor.collapse(options);
	  },
	  deselect(editor) {
	    editor.deselect();
	  },
	  move(editor, options) {
	    editor.move(options);
	  },
	  select(editor, target) {
	    editor.select(target);
	  },
	  setPoint(editor, props, options) {
	    editor.setPoint(props, options);
	  },
	  setSelection(editor, props) {
	    editor.setSelection(props);
	  }
	};

	/*
	  Custom deep equal comparison for Slate nodes.

	  We don't need general purpose deep equality;
	  Slate only supports plain values, Arrays, and nested objects.
	  Complex values nested inside Arrays are not supported.

	  Slate objects are designed to be serialised, so
	  missing keys are deliberately normalised to undefined.
	 */
	var isDeepEqual = (node, another) => {
	  for (var key in node) {
	    var a = node[key];
	    var b = another[key];
	    if (isPlainObject$1(a) && isPlainObject$1(b)) {
	      if (!isDeepEqual(a, b)) return false;
	    } else if (Array.isArray(a) && Array.isArray(b)) {
	      if (a.length !== b.length) return false;
	      for (var i = 0; i < a.length; i++) {
	        if (a[i] !== b[i]) return false;
	      }
	    } else if (a !== b) {
	      return false;
	    }
	  }
	  /*
	    Deep object equality is only necessary in one direction; in the reverse direction
	    we are only looking for keys that are missing.
	    As above, undefined keys are normalised to missing.
	  */
	  for (var _key in another) {
	    if (node[_key] === undefined && another[_key] !== undefined) {
	      return false;
	    }
	  }
	  return true;
	};

	function _objectWithoutPropertiesLoose$1(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;
	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }
	  return target;
	}

	function _objectWithoutProperties$1(source, excluded) {
	  if (source == null) return {};
	  var target = _objectWithoutPropertiesLoose$1(source, excluded);
	  var key, i;
	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }
	  return target;
	}

	var _excluded$4 = ["anchor", "focus"];
	function ownKeys$d(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread$d(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$d(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$d(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	// eslint-disable-next-line no-redeclare
	var Range = {
	  edges(range) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var {
	      reverse = false
	    } = options;
	    var {
	      anchor,
	      focus
	    } = range;
	    return Range.isBackward(range) === reverse ? [anchor, focus] : [focus, anchor];
	  },
	  end(range) {
	    var [, end] = Range.edges(range);
	    return end;
	  },
	  equals(range, another) {
	    return Point.equals(range.anchor, another.anchor) && Point.equals(range.focus, another.focus);
	  },
	  includes(range, target) {
	    if (Range.isRange(target)) {
	      if (Range.includes(range, target.anchor) || Range.includes(range, target.focus)) {
	        return true;
	      }
	      var [rs, re] = Range.edges(range);
	      var [ts, te] = Range.edges(target);
	      return Point.isBefore(rs, ts) && Point.isAfter(re, te);
	    }
	    var [start, end] = Range.edges(range);
	    var isAfterStart = false;
	    var isBeforeEnd = false;
	    if (Point.isPoint(target)) {
	      isAfterStart = Point.compare(target, start) >= 0;
	      isBeforeEnd = Point.compare(target, end) <= 0;
	    } else {
	      isAfterStart = Path.compare(target, start.path) >= 0;
	      isBeforeEnd = Path.compare(target, end.path) <= 0;
	    }
	    return isAfterStart && isBeforeEnd;
	  },
	  intersection(range, another) {
	    var rest = _objectWithoutProperties$1(range, _excluded$4);
	    var [s1, e1] = Range.edges(range);
	    var [s2, e2] = Range.edges(another);
	    var start = Point.isBefore(s1, s2) ? s2 : s1;
	    var end = Point.isBefore(e1, e2) ? e1 : e2;
	    if (Point.isBefore(end, start)) {
	      return null;
	    } else {
	      return _objectSpread$d({
	        anchor: start,
	        focus: end
	      }, rest);
	    }
	  },
	  isBackward(range) {
	    var {
	      anchor,
	      focus
	    } = range;
	    return Point.isAfter(anchor, focus);
	  },
	  isCollapsed(range) {
	    var {
	      anchor,
	      focus
	    } = range;
	    return Point.equals(anchor, focus);
	  },
	  isExpanded(range) {
	    return !Range.isCollapsed(range);
	  },
	  isForward(range) {
	    return !Range.isBackward(range);
	  },
	  isRange(value) {
	    return isPlainObject$1(value) && Point.isPoint(value.anchor) && Point.isPoint(value.focus);
	  },
	  *points(range) {
	    yield [range.anchor, 'anchor'];
	    yield [range.focus, 'focus'];
	  },
	  start(range) {
	    var [start] = Range.edges(range);
	    return start;
	  },
	  transform(range, op) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    return produce(range, r => {
	      if (r === null) {
	        return null;
	      }
	      var {
	        affinity = 'inward'
	      } = options;
	      var affinityAnchor;
	      var affinityFocus;
	      if (affinity === 'inward') {
	        // If the range is collapsed, make sure to use the same affinity to
	        // avoid the two points passing each other and expanding in the opposite
	        // direction
	        var isCollapsed = Range.isCollapsed(r);
	        if (Range.isForward(r)) {
	          affinityAnchor = 'forward';
	          affinityFocus = isCollapsed ? affinityAnchor : 'backward';
	        } else {
	          affinityAnchor = 'backward';
	          affinityFocus = isCollapsed ? affinityAnchor : 'forward';
	        }
	      } else if (affinity === 'outward') {
	        if (Range.isForward(r)) {
	          affinityAnchor = 'backward';
	          affinityFocus = 'forward';
	        } else {
	          affinityAnchor = 'forward';
	          affinityFocus = 'backward';
	        }
	      } else {
	        affinityAnchor = affinity;
	        affinityFocus = affinity;
	      }
	      var anchor = Point.transform(r.anchor, op, {
	        affinity: affinityAnchor
	      });
	      var focus = Point.transform(r.focus, op, {
	        affinity: affinityFocus
	      });
	      if (!anchor || !focus) {
	        return null;
	      }
	      r.anchor = anchor;
	      r.focus = focus;
	    });
	  }
	};

	/**
	 * Shared the function with isElementType utility
	 */
	var isElement$1 = value => {
	  return isPlainObject$1(value) && Node.isNodeList(value.children) && !Editor.isEditor(value);
	};
	// eslint-disable-next-line no-redeclare
	var Element$3 = {
	  isAncestor(value) {
	    return isPlainObject$1(value) && Node.isNodeList(value.children);
	  },
	  isElement: isElement$1,
	  isElementList(value) {
	    return Array.isArray(value) && value.every(val => Element$3.isElement(val));
	  },
	  isElementProps(props) {
	    return props.children !== undefined;
	  },
	  isElementType: function isElementType(value, elementVal) {
	    var elementKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'type';
	    return isElement$1(value) && value[elementKey] === elementVal;
	  },
	  matches(element, props) {
	    for (var key in props) {
	      if (key === 'children') {
	        continue;
	      }
	      if (element[key] !== props[key]) {
	        return false;
	      }
	    }
	    return true;
	  }
	};

	var _excluded$3$1 = ["children"],
	  _excluded2$3 = ["text"];
	var IS_NODE_LIST_CACHE = new WeakMap();
	// eslint-disable-next-line no-redeclare
	var Node = {
	  ancestor(root, path) {
	    var node = Node.get(root, path);
	    if (Text$1.isText(node)) {
	      throw new Error("Cannot get the ancestor node at path [".concat(path, "] because it refers to a text node instead: ").concat(Scrubber.stringify(node)));
	    }
	    return node;
	  },
	  ancestors(root, path) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    return function* () {
	      for (var p of Path.ancestors(path, options)) {
	        var n = Node.ancestor(root, p);
	        var entry = [n, p];
	        yield entry;
	      }
	    }();
	  },
	  child(root, index) {
	    if (Text$1.isText(root)) {
	      throw new Error("Cannot get the child of a text node: ".concat(Scrubber.stringify(root)));
	    }
	    var c = root.children[index];
	    if (c == null) {
	      throw new Error("Cannot get child at index `".concat(index, "` in node: ").concat(Scrubber.stringify(root)));
	    }
	    return c;
	  },
	  children(root, path) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    return function* () {
	      var {
	        reverse = false
	      } = options;
	      var ancestor = Node.ancestor(root, path);
	      var {
	        children
	      } = ancestor;
	      var index = reverse ? children.length - 1 : 0;
	      while (reverse ? index >= 0 : index < children.length) {
	        var child = Node.child(ancestor, index);
	        var childPath = path.concat(index);
	        yield [child, childPath];
	        index = reverse ? index - 1 : index + 1;
	      }
	    }();
	  },
	  common(root, path, another) {
	    var p = Path.common(path, another);
	    var n = Node.get(root, p);
	    return [n, p];
	  },
	  descendant(root, path) {
	    var node = Node.get(root, path);
	    if (Editor.isEditor(node)) {
	      throw new Error("Cannot get the descendant node at path [".concat(path, "] because it refers to the root editor node instead: ").concat(Scrubber.stringify(node)));
	    }
	    return node;
	  },
	  descendants(root) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    return function* () {
	      for (var [node, path] of Node.nodes(root, options)) {
	        if (path.length !== 0) {
	          // NOTE: we have to coerce here because checking the path's length does
	          // guarantee that `node` is not a `Editor`, but TypeScript doesn't know.
	          yield [node, path];
	        }
	      }
	    }();
	  },
	  elements(root) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    return function* () {
	      for (var [node, path] of Node.nodes(root, options)) {
	        if (Element$3.isElement(node)) {
	          yield [node, path];
	        }
	      }
	    }();
	  },
	  extractProps(node) {
	    if (Element$3.isAncestor(node)) {
	      var properties = _objectWithoutProperties$1(node, _excluded$3$1);
	      return properties;
	    } else {
	      var properties = _objectWithoutProperties$1(node, _excluded2$3);
	      return properties;
	    }
	  },
	  first(root, path) {
	    var p = path.slice();
	    var n = Node.get(root, p);
	    while (n) {
	      if (Text$1.isText(n) || n.children.length === 0) {
	        break;
	      } else {
	        n = n.children[0];
	        p.push(0);
	      }
	    }
	    return [n, p];
	  },
	  fragment(root, range) {
	    if (Text$1.isText(root)) {
	      throw new Error("Cannot get a fragment starting from a root text node: ".concat(Scrubber.stringify(root)));
	    }
	    var newRoot = produce({
	      children: root.children
	    }, r => {
	      var [start, end] = Range.edges(range);
	      var nodeEntries = Node.nodes(r, {
	        reverse: true,
	        pass: _ref => {
	          var [, path] = _ref;
	          return !Range.includes(range, path);
	        }
	      });
	      for (var [, path] of nodeEntries) {
	        if (!Range.includes(range, path)) {
	          var parent = Node.parent(r, path);
	          var index = path[path.length - 1];
	          parent.children.splice(index, 1);
	        }
	        if (Path.equals(path, end.path)) {
	          var leaf = Node.leaf(r, path);
	          leaf.text = leaf.text.slice(0, end.offset);
	        }
	        if (Path.equals(path, start.path)) {
	          var _leaf = Node.leaf(r, path);
	          _leaf.text = _leaf.text.slice(start.offset);
	        }
	      }
	      if (Editor.isEditor(r)) {
	        r.selection = null;
	      }
	    });
	    return newRoot.children;
	  },
	  get(root, path) {
	    var node = root;
	    for (var i = 0; i < path.length; i++) {
	      var p = path[i];
	      if (Text$1.isText(node) || !node.children[p]) {
	        throw new Error("Cannot find a descendant at path [".concat(path, "] in node: ").concat(Scrubber.stringify(root)));
	      }
	      node = node.children[p];
	    }
	    return node;
	  },
	  has(root, path) {
	    var node = root;
	    for (var i = 0; i < path.length; i++) {
	      var p = path[i];
	      if (Text$1.isText(node) || !node.children[p]) {
	        return false;
	      }
	      node = node.children[p];
	    }
	    return true;
	  },
	  isNode(value) {
	    return Text$1.isText(value) || Element$3.isElement(value) || Editor.isEditor(value);
	  },
	  isNodeList(value) {
	    if (!Array.isArray(value)) {
	      return false;
	    }
	    var cachedResult = IS_NODE_LIST_CACHE.get(value);
	    if (cachedResult !== undefined) {
	      return cachedResult;
	    }
	    var isNodeList = value.every(val => Node.isNode(val));
	    IS_NODE_LIST_CACHE.set(value, isNodeList);
	    return isNodeList;
	  },
	  last(root, path) {
	    var p = path.slice();
	    var n = Node.get(root, p);
	    while (n) {
	      if (Text$1.isText(n) || n.children.length === 0) {
	        break;
	      } else {
	        var i = n.children.length - 1;
	        n = n.children[i];
	        p.push(i);
	      }
	    }
	    return [n, p];
	  },
	  leaf(root, path) {
	    var node = Node.get(root, path);
	    if (!Text$1.isText(node)) {
	      throw new Error("Cannot get the leaf node at path [".concat(path, "] because it refers to a non-leaf node: ").concat(Scrubber.stringify(node)));
	    }
	    return node;
	  },
	  levels(root, path) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    return function* () {
	      for (var p of Path.levels(path, options)) {
	        var n = Node.get(root, p);
	        yield [n, p];
	      }
	    }();
	  },
	  matches(node, props) {
	    return Element$3.isElement(node) && Element$3.isElementProps(props) && Element$3.matches(node, props) || Text$1.isText(node) && Text$1.isTextProps(props) && Text$1.matches(node, props);
	  },
	  nodes(root) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    return function* () {
	      var {
	        pass,
	        reverse = false
	      } = options;
	      var {
	        from = [],
	        to
	      } = options;
	      var visited = new Set();
	      var p = [];
	      var n = root;
	      while (true) {
	        if (to && (reverse ? Path.isBefore(p, to) : Path.isAfter(p, to))) {
	          break;
	        }
	        if (!visited.has(n)) {
	          yield [n, p];
	        }
	        // If we're allowed to go downward and we haven't descended yet, do.
	        if (!visited.has(n) && !Text$1.isText(n) && n.children.length !== 0 && (pass == null || pass([n, p]) === false)) {
	          visited.add(n);
	          var nextIndex = reverse ? n.children.length - 1 : 0;
	          if (Path.isAncestor(p, from)) {
	            nextIndex = from[p.length];
	          }
	          p = p.concat(nextIndex);
	          n = Node.get(root, p);
	          continue;
	        }
	        // If we're at the root and we can't go down, we're done.
	        if (p.length === 0) {
	          break;
	        }
	        // If we're going forward...
	        if (!reverse) {
	          var newPath = Path.next(p);
	          if (Node.has(root, newPath)) {
	            p = newPath;
	            n = Node.get(root, p);
	            continue;
	          }
	        }
	        // If we're going backward...
	        if (reverse && p[p.length - 1] !== 0) {
	          var _newPath = Path.previous(p);
	          p = _newPath;
	          n = Node.get(root, p);
	          continue;
	        }
	        // Otherwise we're going upward...
	        p = Path.parent(p);
	        n = Node.get(root, p);
	        visited.add(n);
	      }
	    }();
	  },
	  parent(root, path) {
	    var parentPath = Path.parent(path);
	    var p = Node.get(root, parentPath);
	    if (Text$1.isText(p)) {
	      throw new Error("Cannot get the parent of path [".concat(path, "] because it does not exist in the root."));
	    }
	    return p;
	  },
	  string(node) {
	    if (Text$1.isText(node)) {
	      return node.text;
	    } else {
	      return node.children.map(Node.string).join('');
	    }
	  },
	  texts(root) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    return function* () {
	      for (var [node, path] of Node.nodes(root, options)) {
	        if (Text$1.isText(node)) {
	          yield [node, path];
	        }
	      }
	    }();
	  }
	};

	function ownKeys$c(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread$c(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$c(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$c(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	// eslint-disable-next-line no-redeclare
	var Operation = {
	  isNodeOperation(value) {
	    return Operation.isOperation(value) && value.type.endsWith('_node');
	  },
	  isOperation(value) {
	    if (!isPlainObject$1(value)) {
	      return false;
	    }
	    switch (value.type) {
	      case 'insert_node':
	        return Path.isPath(value.path) && Node.isNode(value.node);
	      case 'insert_text':
	        return typeof value.offset === 'number' && typeof value.text === 'string' && Path.isPath(value.path);
	      case 'merge_node':
	        return typeof value.position === 'number' && Path.isPath(value.path) && isPlainObject$1(value.properties);
	      case 'move_node':
	        return Path.isPath(value.path) && Path.isPath(value.newPath);
	      case 'remove_node':
	        return Path.isPath(value.path) && Node.isNode(value.node);
	      case 'remove_text':
	        return typeof value.offset === 'number' && typeof value.text === 'string' && Path.isPath(value.path);
	      case 'set_node':
	        return Path.isPath(value.path) && isPlainObject$1(value.properties) && isPlainObject$1(value.newProperties);
	      case 'set_selection':
	        return value.properties === null && Range.isRange(value.newProperties) || value.newProperties === null && Range.isRange(value.properties) || isPlainObject$1(value.properties) && isPlainObject$1(value.newProperties);
	      case 'split_node':
	        return Path.isPath(value.path) && typeof value.position === 'number' && isPlainObject$1(value.properties);
	      default:
	        return false;
	    }
	  },
	  isOperationList(value) {
	    return Array.isArray(value) && value.every(val => Operation.isOperation(val));
	  },
	  isSelectionOperation(value) {
	    return Operation.isOperation(value) && value.type.endsWith('_selection');
	  },
	  isTextOperation(value) {
	    return Operation.isOperation(value) && value.type.endsWith('_text');
	  },
	  inverse(op) {
	    switch (op.type) {
	      case 'insert_node':
	        {
	          return _objectSpread$c(_objectSpread$c({}, op), {}, {
	            type: 'remove_node'
	          });
	        }
	      case 'insert_text':
	        {
	          return _objectSpread$c(_objectSpread$c({}, op), {}, {
	            type: 'remove_text'
	          });
	        }
	      case 'merge_node':
	        {
	          return _objectSpread$c(_objectSpread$c({}, op), {}, {
	            type: 'split_node',
	            path: Path.previous(op.path)
	          });
	        }
	      case 'move_node':
	        {
	          var {
	            newPath,
	            path
	          } = op;
	          // PERF: in this case the move operation is a no-op anyways.
	          if (Path.equals(newPath, path)) {
	            return op;
	          }
	          // If the move happens completely within a single parent the path and
	          // newPath are stable with respect to each other.
	          if (Path.isSibling(path, newPath)) {
	            return _objectSpread$c(_objectSpread$c({}, op), {}, {
	              path: newPath,
	              newPath: path
	            });
	          }
	          // If the move does not happen within a single parent it is possible
	          // for the move to impact the true path to the location where the node
	          // was removed from and where it was inserted. We have to adjust for this
	          // and find the original path. We can accomplish this (only in non-sibling)
	          // moves by looking at the impact of the move operation on the node
	          // after the original move path.
	          var inversePath = Path.transform(path, op);
	          var inverseNewPath = Path.transform(Path.next(path), op);
	          return _objectSpread$c(_objectSpread$c({}, op), {}, {
	            path: inversePath,
	            newPath: inverseNewPath
	          });
	        }
	      case 'remove_node':
	        {
	          return _objectSpread$c(_objectSpread$c({}, op), {}, {
	            type: 'insert_node'
	          });
	        }
	      case 'remove_text':
	        {
	          return _objectSpread$c(_objectSpread$c({}, op), {}, {
	            type: 'insert_text'
	          });
	        }
	      case 'set_node':
	        {
	          var {
	            properties,
	            newProperties
	          } = op;
	          return _objectSpread$c(_objectSpread$c({}, op), {}, {
	            properties: newProperties,
	            newProperties: properties
	          });
	        }
	      case 'set_selection':
	        {
	          var {
	            properties: _properties,
	            newProperties: _newProperties
	          } = op;
	          if (_properties == null) {
	            return _objectSpread$c(_objectSpread$c({}, op), {}, {
	              properties: _newProperties,
	              newProperties: null
	            });
	          } else if (_newProperties == null) {
	            return _objectSpread$c(_objectSpread$c({}, op), {}, {
	              properties: null,
	              newProperties: _properties
	            });
	          } else {
	            return _objectSpread$c(_objectSpread$c({}, op), {}, {
	              properties: _newProperties,
	              newProperties: _properties
	            });
	          }
	        }
	      case 'split_node':
	        {
	          return _objectSpread$c(_objectSpread$c({}, op), {}, {
	            type: 'merge_node',
	            path: Path.next(op.path)
	          });
	        }
	    }
	  }
	};

	var IS_EDITOR_CACHE = new WeakMap();
	var isEditor = value => {
	  var cachedIsEditor = IS_EDITOR_CACHE.get(value);
	  if (cachedIsEditor !== undefined) {
	    return cachedIsEditor;
	  }
	  if (!isPlainObject$1(value)) {
	    return false;
	  }
	  var isEditor = typeof value.addMark === 'function' && typeof value.apply === 'function' && typeof value.deleteFragment === 'function' && typeof value.insertBreak === 'function' && typeof value.insertSoftBreak === 'function' && typeof value.insertFragment === 'function' && typeof value.insertNode === 'function' && typeof value.insertText === 'function' && typeof value.isElementReadOnly === 'function' && typeof value.isInline === 'function' && typeof value.isSelectable === 'function' && typeof value.isVoid === 'function' && typeof value.normalizeNode === 'function' && typeof value.onChange === 'function' && typeof value.removeMark === 'function' && typeof value.getDirtyPaths === 'function' && (value.marks === null || isPlainObject$1(value.marks)) && (value.selection === null || Range.isRange(value.selection)) && Node.isNodeList(value.children) && Operation.isOperationList(value.operations);
	  IS_EDITOR_CACHE.set(value, isEditor);
	  return isEditor;
	};

	// eslint-disable-next-line no-redeclare
	var Editor = {
	  above(editor, options) {
	    return editor.above(options);
	  },
	  addMark(editor, key, value) {
	    editor.addMark(key, value);
	  },
	  after(editor, at, options) {
	    return editor.after(at, options);
	  },
	  before(editor, at, options) {
	    return editor.before(at, options);
	  },
	  deleteBackward(editor) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var {
	      unit = 'character'
	    } = options;
	    editor.deleteBackward(unit);
	  },
	  deleteForward(editor) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var {
	      unit = 'character'
	    } = options;
	    editor.deleteForward(unit);
	  },
	  deleteFragment(editor, options) {
	    editor.deleteFragment(options);
	  },
	  edges(editor, at) {
	    return editor.edges(at);
	  },
	  elementReadOnly(editor) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    return editor.elementReadOnly(options);
	  },
	  end(editor, at) {
	    return editor.end(at);
	  },
	  first(editor, at) {
	    return editor.first(at);
	  },
	  fragment(editor, at) {
	    return editor.fragment(at);
	  },
	  hasBlocks(editor, element) {
	    return editor.hasBlocks(element);
	  },
	  hasInlines(editor, element) {
	    return editor.hasInlines(element);
	  },
	  hasPath(editor, path) {
	    return editor.hasPath(path);
	  },
	  hasTexts(editor, element) {
	    return editor.hasTexts(element);
	  },
	  insertBreak(editor) {
	    editor.insertBreak();
	  },
	  insertFragment(editor, fragment, options) {
	    editor.insertFragment(fragment, options);
	  },
	  insertNode(editor, node) {
	    editor.insertNode(node);
	  },
	  insertSoftBreak(editor) {
	    editor.insertSoftBreak();
	  },
	  insertText(editor, text) {
	    editor.insertText(text);
	  },
	  isBlock(editor, value) {
	    return editor.isBlock(value);
	  },
	  isEdge(editor, point, at) {
	    return editor.isEdge(point, at);
	  },
	  isEditor(value) {
	    return isEditor(value);
	  },
	  isElementReadOnly(editor, element) {
	    return editor.isElementReadOnly(element);
	  },
	  isEmpty(editor, element) {
	    return editor.isEmpty(element);
	  },
	  isEnd(editor, point, at) {
	    return editor.isEnd(point, at);
	  },
	  isInline(editor, value) {
	    return editor.isInline(value);
	  },
	  isNormalizing(editor) {
	    return editor.isNormalizing();
	  },
	  isSelectable(editor, value) {
	    return editor.isSelectable(value);
	  },
	  isStart(editor, point, at) {
	    return editor.isStart(point, at);
	  },
	  isVoid(editor, value) {
	    return editor.isVoid(value);
	  },
	  last(editor, at) {
	    return editor.last(at);
	  },
	  leaf(editor, at, options) {
	    return editor.leaf(at, options);
	  },
	  levels(editor, options) {
	    return editor.levels(options);
	  },
	  marks(editor) {
	    return editor.getMarks();
	  },
	  next(editor, options) {
	    return editor.next(options);
	  },
	  node(editor, at, options) {
	    return editor.node(at, options);
	  },
	  nodes(editor, options) {
	    return editor.nodes(options);
	  },
	  normalize(editor, options) {
	    editor.normalize(options);
	  },
	  parent(editor, at, options) {
	    return editor.parent(at, options);
	  },
	  path(editor, at, options) {
	    return editor.path(at, options);
	  },
	  pathRef(editor, path, options) {
	    return editor.pathRef(path, options);
	  },
	  pathRefs(editor) {
	    return editor.pathRefs();
	  },
	  point(editor, at, options) {
	    return editor.point(at, options);
	  },
	  pointRef(editor, point, options) {
	    return editor.pointRef(point, options);
	  },
	  pointRefs(editor) {
	    return editor.pointRefs();
	  },
	  positions(editor, options) {
	    return editor.positions(options);
	  },
	  previous(editor, options) {
	    return editor.previous(options);
	  },
	  range(editor, at, to) {
	    return editor.range(at, to);
	  },
	  rangeRef(editor, range, options) {
	    return editor.rangeRef(range, options);
	  },
	  rangeRefs(editor) {
	    return editor.rangeRefs();
	  },
	  removeMark(editor, key) {
	    editor.removeMark(key);
	  },
	  setNormalizing(editor, isNormalizing) {
	    editor.setNormalizing(isNormalizing);
	  },
	  start(editor, at) {
	    return editor.start(at);
	  },
	  string(editor, at, options) {
	    return editor.string(at, options);
	  },
	  unhangRange(editor, range, options) {
	    return editor.unhangRange(range, options);
	  },
	  void(editor, options) {
	    return editor.void(options);
	  },
	  withoutNormalizing(editor, fn) {
	    editor.withoutNormalizing(fn);
	  },
	  shouldMergeNodesRemovePrevNode: (editor, prevNode, curNode) => {
	    return editor.shouldMergeNodesRemovePrevNode(prevNode, curNode);
	  }
	};
	// eslint-disable-next-line no-redeclare
	var Span = {
	  isSpan(value) {
	    return Array.isArray(value) && value.length === 2 && value.every(Path.isPath);
	  }
	};

	function ownKeys$b(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread$b(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$b(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$b(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	// eslint-disable-next-line no-redeclare
	var Point = {
	  compare(point, another) {
	    var result = Path.compare(point.path, another.path);
	    if (result === 0) {
	      if (point.offset < another.offset) return -1;
	      if (point.offset > another.offset) return 1;
	      return 0;
	    }
	    return result;
	  },
	  isAfter(point, another) {
	    return Point.compare(point, another) === 1;
	  },
	  isBefore(point, another) {
	    return Point.compare(point, another) === -1;
	  },
	  equals(point, another) {
	    // PERF: ensure the offsets are equal first since they are cheaper to check.
	    return point.offset === another.offset && Path.equals(point.path, another.path);
	  },
	  isPoint(value) {
	    return isPlainObject$1(value) && typeof value.offset === 'number' && Path.isPath(value.path);
	  },
	  transform(point, op) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    return produce(point, p => {
	      if (p === null) {
	        return null;
	      }
	      var {
	        affinity = 'forward'
	      } = options;
	      var {
	        path,
	        offset
	      } = p;
	      switch (op.type) {
	        case 'insert_node':
	        case 'move_node':
	          {
	            p.path = Path.transform(path, op, options);
	            break;
	          }
	        case 'insert_text':
	          {
	            if (Path.equals(op.path, path) && (op.offset < offset || op.offset === offset && affinity === 'forward')) {
	              p.offset += op.text.length;
	            }
	            break;
	          }
	        case 'merge_node':
	          {
	            if (Path.equals(op.path, path)) {
	              p.offset += op.position;
	            }
	            p.path = Path.transform(path, op, options);
	            break;
	          }
	        case 'remove_text':
	          {
	            if (Path.equals(op.path, path) && op.offset <= offset) {
	              p.offset -= Math.min(offset - op.offset, op.text.length);
	            }
	            break;
	          }
	        case 'remove_node':
	          {
	            if (Path.equals(op.path, path) || Path.isAncestor(op.path, path)) {
	              return null;
	            }
	            p.path = Path.transform(path, op, options);
	            break;
	          }
	        case 'split_node':
	          {
	            if (Path.equals(op.path, path)) {
	              if (op.position === offset && affinity == null) {
	                return null;
	              } else if (op.position < offset || op.position === offset && affinity === 'forward') {
	                p.offset -= op.position;
	                p.path = Path.transform(path, op, _objectSpread$b(_objectSpread$b({}, options), {}, {
	                  affinity: 'forward'
	                }));
	              }
	            } else {
	              p.path = Path.transform(path, op, options);
	            }
	            break;
	          }
	      }
	    });
	  }
	};

	var _scrubber = undefined;
	/**
	 * This interface implements a stringify() function, which is used by Slate
	 * internally when generating exceptions containing end user data. Developers
	 * using Slate may call Scrubber.setScrubber() to alter the behavior of this
	 * stringify() function.
	 *
	 * For example, to prevent the cleartext logging of 'text' fields within Nodes:
	 *
	 *    import { Scrubber } from 'slate';
	 *    Scrubber.setScrubber((key, val) => {
	 *      if (key === 'text') return '...scrubbed...'
	 *      return val
	 *    });
	 *
	 */
	// eslint-disable-next-line no-redeclare
	var Scrubber = {
	  setScrubber(scrubber) {
	    _scrubber = scrubber;
	  },
	  stringify(value) {
	    return JSON.stringify(value, _scrubber);
	  }
	};

	var _excluded$2$1 = ["text"],
	  _excluded2$2 = ["anchor", "focus"];
	function ownKeys$a(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread$a(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$a(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$a(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	// eslint-disable-next-line no-redeclare
	var Text$1 = {
	  equals(text, another) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    var {
	      loose = false
	    } = options;
	    function omitText(obj) {
	      var rest = _objectWithoutProperties$1(obj, _excluded$2$1);
	      return rest;
	    }
	    return isDeepEqual(loose ? omitText(text) : text, loose ? omitText(another) : another);
	  },
	  isText(value) {
	    return isPlainObject$1(value) && typeof value.text === 'string';
	  },
	  isTextList(value) {
	    return Array.isArray(value) && value.every(val => Text$1.isText(val));
	  },
	  isTextProps(props) {
	    return props.text !== undefined;
	  },
	  matches(text, props) {
	    for (var key in props) {
	      if (key === 'text') {
	        continue;
	      }
	      if (!text.hasOwnProperty(key) || text[key] !== props[key]) {
	        return false;
	      }
	    }
	    return true;
	  },
	  decorations(node, decorations) {
	    var leaves = [_objectSpread$a({}, node)];
	    for (var dec of decorations) {
	      var rest = _objectWithoutProperties$1(dec, _excluded2$2);
	      var [start, end] = Range.edges(dec);
	      var next = [];
	      var leafEnd = 0;
	      var decorationStart = start.offset;
	      var decorationEnd = end.offset;
	      for (var leaf of leaves) {
	        var {
	          length
	        } = leaf.text;
	        var leafStart = leafEnd;
	        leafEnd += length;
	        // If the range encompasses the entire leaf, add the range.
	        if (decorationStart <= leafStart && leafEnd <= decorationEnd) {
	          Object.assign(leaf, rest);
	          next.push(leaf);
	          continue;
	        }
	        // If the range expanded and match the leaf, or starts after, or ends before it, continue.
	        if (decorationStart !== decorationEnd && (decorationStart === leafEnd || decorationEnd === leafStart) || decorationStart > leafEnd || decorationEnd < leafStart || decorationEnd === leafStart && leafStart !== 0) {
	          next.push(leaf);
	          continue;
	        }
	        // Otherwise we need to split the leaf, at the start, end, or both,
	        // and add the range to the middle intersecting section. Do the end
	        // split first since we don't need to update the offset that way.
	        var middle = leaf;
	        var before = void 0;
	        var after = void 0;
	        if (decorationEnd < leafEnd) {
	          var off = decorationEnd - leafStart;
	          after = _objectSpread$a(_objectSpread$a({}, middle), {}, {
	            text: middle.text.slice(off)
	          });
	          middle = _objectSpread$a(_objectSpread$a({}, middle), {}, {
	            text: middle.text.slice(0, off)
	          });
	        }
	        if (decorationStart > leafStart) {
	          var _off = decorationStart - leafStart;
	          before = _objectSpread$a(_objectSpread$a({}, middle), {}, {
	            text: middle.text.slice(0, _off)
	          });
	          middle = _objectSpread$a(_objectSpread$a({}, middle), {}, {
	            text: middle.text.slice(_off)
	          });
	        }
	        Object.assign(middle, rest);
	        if (before) {
	          next.push(before);
	        }
	        next.push(middle);
	        if (after) {
	          next.push(after);
	        }
	      }
	      leaves = next;
	    }
	    return leaves;
	  }
	};

	/**
	 * Get the default location to insert content into the editor.
	 * By default, use the selection as the target location. But if there is
	 * no selection, insert at the end of the document since that is such a
	 * common use case when inserting from a non-selected state.
	 */
	var getDefaultInsertLocation = editor => {
	  if (editor.selection) {
	    return editor.selection;
	  } else if (editor.children.length > 0) {
	    return Editor.end(editor, []);
	  } else {
	    return [0];
	  }
	};

	var matchPath = (editor, path) => {
	  var [node] = Editor.node(editor, path);
	  return n => n === node;
	};

	// Character (grapheme cluster) boundaries are determined according to
	// the default grapheme cluster boundary specification, extended grapheme clusters variant[1].
	//
	// References:
	//
	// [1] https://www.unicode.org/reports/tr29/#Default_Grapheme_Cluster_Table
	// [2] https://www.unicode.org/Public/UCD/latest/ucd/auxiliary/GraphemeBreakProperty.txt
	// [3] https://www.unicode.org/Public/UCD/latest/ucd/auxiliary/GraphemeBreakTest.html
	// [4] https://www.unicode.org/Public/UCD/latest/ucd/auxiliary/GraphemeBreakTest.txt
	/**
	 * Get the distance to the end of the first character in a string of text.
	 */
	var getCharacterDistance = function getCharacterDistance(str) {
	  var isRTL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	  var isLTR = !isRTL;
	  var codepoints = isRTL ? codepointsIteratorRTL(str) : str;
	  var left = CodepointType.None;
	  var right = CodepointType.None;
	  var distance = 0;
	  // Evaluation of these conditions are deferred.
	  var gb11 = null; // Is GB11 applicable?
	  var gb12Or13 = null; // Is GB12 or GB13 applicable?
	  for (var char of codepoints) {
	    var code = char.codePointAt(0);
	    if (!code) break;
	    var type = getCodepointType(char, code);
	    [left, right] = isLTR ? [right, type] : [type, left];
	    if (intersects(left, CodepointType.ZWJ) && intersects(right, CodepointType.ExtPict)) {
	      if (isLTR) {
	        gb11 = endsWithEmojiZWJ(str.substring(0, distance));
	      } else {
	        gb11 = endsWithEmojiZWJ(str.substring(0, str.length - distance));
	      }
	      if (!gb11) break;
	    }
	    if (intersects(left, CodepointType.RI) && intersects(right, CodepointType.RI)) {
	      if (gb12Or13 !== null) {
	        gb12Or13 = !gb12Or13;
	      } else {
	        if (isLTR) {
	          gb12Or13 = true;
	        } else {
	          gb12Or13 = endsWithOddNumberOfRIs(str.substring(0, str.length - distance));
	        }
	      }
	      if (!gb12Or13) break;
	    }
	    if (left !== CodepointType.None && right !== CodepointType.None && isBoundaryPair(left, right)) {
	      break;
	    }
	    distance += char.length;
	  }
	  return distance || 1;
	};
	var SPACE = /\s/;
	var PUNCTUATION = /[\u002B\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
	var CHAMELEON = /['\u2018\u2019]/;
	/**
	 * Get the distance to the end of the first word in a string of text.
	 */
	var getWordDistance = function getWordDistance(text) {
	  var isRTL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	  var dist = 0;
	  var started = false;
	  while (text.length > 0) {
	    var charDist = getCharacterDistance(text, isRTL);
	    var [char, remaining] = splitByCharacterDistance(text, charDist, isRTL);
	    if (isWordCharacter(char, remaining, isRTL)) {
	      started = true;
	      dist += charDist;
	    } else if (!started) {
	      dist += charDist;
	    } else {
	      break;
	    }
	    text = remaining;
	  }
	  return dist;
	};
	/**
	 * Split a string in two parts at a given distance starting from the end when
	 * `isRTL` is set to `true`.
	 */
	var splitByCharacterDistance = (str, dist, isRTL) => {
	  if (isRTL) {
	    var at = str.length - dist;
	    return [str.slice(at, str.length), str.slice(0, at)];
	  }
	  return [str.slice(0, dist), str.slice(dist)];
	};
	/**
	 * Check if a character is a word character. The `remaining` argument is used
	 * because sometimes you must read subsequent characters to truly determine it.
	 */
	var isWordCharacter = function isWordCharacter(char, remaining) {
	  var isRTL = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	  if (SPACE.test(char)) {
	    return false;
	  }
	  // Chameleons count as word characters as long as they're in a word, so
	  // recurse to see if the next one is a word character or not.
	  if (CHAMELEON.test(char)) {
	    var charDist = getCharacterDistance(remaining, isRTL);
	    var [nextChar, nextRemaining] = splitByCharacterDistance(remaining, charDist, isRTL);
	    if (isWordCharacter(nextChar, nextRemaining, isRTL)) {
	      return true;
	    }
	  }
	  if (PUNCTUATION.test(char)) {
	    return false;
	  }
	  return true;
	};
	/**
	 * Iterate on codepoints from right to left.
	 */
	var codepointsIteratorRTL = function* codepointsIteratorRTL(str) {
	  var end = str.length - 1;
	  for (var i = 0; i < str.length; i++) {
	    var char1 = str.charAt(end - i);
	    if (isLowSurrogate(char1.charCodeAt(0))) {
	      var char2 = str.charAt(end - i - 1);
	      if (isHighSurrogate(char2.charCodeAt(0))) {
	        yield char2 + char1;
	        i++;
	        continue;
	      }
	    }
	    yield char1;
	  }
	};
	/**
	 * Is `charCode` a high surrogate.
	 *
	 * https://en.wikipedia.org/wiki/Universal_Character_Set_characters#Surrogates
	 */
	var isHighSurrogate = charCode => {
	  return charCode >= 0xd800 && charCode <= 0xdbff;
	};
	/**
	 * Is `charCode` a low surrogate.
	 *
	 * https://en.wikipedia.org/wiki/Universal_Character_Set_characters#Surrogates
	 */
	var isLowSurrogate = charCode => {
	  return charCode >= 0xdc00 && charCode <= 0xdfff;
	};
	var CodepointType;
	(function (CodepointType) {
	  CodepointType[CodepointType["None"] = 0] = "None";
	  CodepointType[CodepointType["Extend"] = 1] = "Extend";
	  CodepointType[CodepointType["ZWJ"] = 2] = "ZWJ";
	  CodepointType[CodepointType["RI"] = 4] = "RI";
	  CodepointType[CodepointType["Prepend"] = 8] = "Prepend";
	  CodepointType[CodepointType["SpacingMark"] = 16] = "SpacingMark";
	  CodepointType[CodepointType["L"] = 32] = "L";
	  CodepointType[CodepointType["V"] = 64] = "V";
	  CodepointType[CodepointType["T"] = 128] = "T";
	  CodepointType[CodepointType["LV"] = 256] = "LV";
	  CodepointType[CodepointType["LVT"] = 512] = "LVT";
	  CodepointType[CodepointType["ExtPict"] = 1024] = "ExtPict";
	  CodepointType[CodepointType["Any"] = 2048] = "Any";
	})(CodepointType || (CodepointType = {}));
	var reExtend = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/;
	var rePrepend = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/;
	var reSpacingMark = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/;
	var reL = /^[\u1100-\u115F\uA960-\uA97C]$/;
	var reV = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/;
	var reT = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/;
	var reLV = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/;
	var reLVT = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/;
	var reExtPict = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/;
	var getCodepointType = (char, code) => {
	  var type = CodepointType.Any;
	  if (char.search(reExtend) !== -1) {
	    type |= CodepointType.Extend;
	  }
	  if (code === 0x200d) {
	    type |= CodepointType.ZWJ;
	  }
	  if (code >= 0x1f1e6 && code <= 0x1f1ff) {
	    type |= CodepointType.RI;
	  }
	  if (char.search(rePrepend) !== -1) {
	    type |= CodepointType.Prepend;
	  }
	  if (char.search(reSpacingMark) !== -1) {
	    type |= CodepointType.SpacingMark;
	  }
	  if (char.search(reL) !== -1) {
	    type |= CodepointType.L;
	  }
	  if (char.search(reV) !== -1) {
	    type |= CodepointType.V;
	  }
	  if (char.search(reT) !== -1) {
	    type |= CodepointType.T;
	  }
	  if (char.search(reLV) !== -1) {
	    type |= CodepointType.LV;
	  }
	  if (char.search(reLVT) !== -1) {
	    type |= CodepointType.LVT;
	  }
	  if (char.search(reExtPict) !== -1) {
	    type |= CodepointType.ExtPict;
	  }
	  return type;
	};
	function intersects(x, y) {
	  return (x & y) !== 0;
	}
	var NonBoundaryPairs = [
	// GB6
	[CodepointType.L, CodepointType.L | CodepointType.V | CodepointType.LV | CodepointType.LVT],
	// GB7
	[CodepointType.LV | CodepointType.V, CodepointType.V | CodepointType.T],
	// GB8
	[CodepointType.LVT | CodepointType.T, CodepointType.T],
	// GB9
	[CodepointType.Any, CodepointType.Extend | CodepointType.ZWJ],
	// GB9a
	[CodepointType.Any, CodepointType.SpacingMark],
	// GB9b
	[CodepointType.Prepend, CodepointType.Any],
	// GB11
	[CodepointType.ZWJ, CodepointType.ExtPict],
	// GB12 and GB13
	[CodepointType.RI, CodepointType.RI]];
	function isBoundaryPair(left, right) {
	  return NonBoundaryPairs.findIndex(r => intersects(left, r[0]) && intersects(right, r[1])) === -1;
	}
	var endingEmojiZWJ = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/;
	var endsWithEmojiZWJ = str => {
	  return str.search(endingEmojiZWJ) !== -1;
	};
	var endingRIs = /(?:\uD83C[\uDDE6-\uDDFF])+$/g;
	var endsWithOddNumberOfRIs = str => {
	  var match = str.match(endingRIs);
	  if (match === null) {
	    return false;
	  } else {
	    // A RI is represented by a surrogate pair.
	    var numRIs = match[0].length / 2;
	    return numRIs % 2 === 1;
	  }
	};

	// eslint-disable-next-line no-redeclare
	var TextTransforms = {
	  delete(editor, options) {
	    editor.delete(options);
	  },
	  insertFragment(editor, fragment, options) {
	    editor.insertFragment(fragment, options);
	  },
	  insertText(editor, text) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    Editor.withoutNormalizing(editor, () => {
	      var {
	        voids = false
	      } = options;
	      var {
	        at = getDefaultInsertLocation(editor)
	      } = options;
	      if (Path.isPath(at)) {
	        at = Editor.range(editor, at);
	      }
	      if (Range.isRange(at)) {
	        if (Range.isCollapsed(at)) {
	          at = at.anchor;
	        } else {
	          var end = Range.end(at);
	          if (!voids && Editor.void(editor, {
	            at: end
	          })) {
	            return;
	          }
	          var start = Range.start(at);
	          var startRef = Editor.pointRef(editor, start);
	          var endRef = Editor.pointRef(editor, end);
	          Transforms.delete(editor, {
	            at,
	            voids
	          });
	          var startPoint = startRef.unref();
	          var endPoint = endRef.unref();
	          at = startPoint || endPoint;
	          Transforms.setSelection(editor, {
	            anchor: at,
	            focus: at
	          });
	        }
	      }
	      if (!voids && Editor.void(editor, {
	        at
	      }) || Editor.elementReadOnly(editor, {
	        at
	      })) {
	        return;
	      }
	      var {
	        path,
	        offset
	      } = at;
	      if (text.length > 0) editor.apply({
	        type: 'insert_text',
	        path,
	        offset,
	        text
	      });
	    });
	  }
	};

	function ownKeys$9(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread$9(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$9(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	var Transforms = _objectSpread$9(_objectSpread$9(_objectSpread$9(_objectSpread$9({}, GeneralTransforms), NodeTransforms), SelectionTransforms), TextTransforms);

	// perf
	var BATCHING_DIRTY_PATHS = new WeakMap();
	var isBatchingDirtyPaths = editor => {
	  return BATCHING_DIRTY_PATHS.get(editor) || false;
	};
	var batchDirtyPaths = (editor, fn, update) => {
	  var value = BATCHING_DIRTY_PATHS.get(editor) || false;
	  BATCHING_DIRTY_PATHS.set(editor, true);
	  try {
	    fn();
	    update();
	  } finally {
	    BATCHING_DIRTY_PATHS.set(editor, value);
	  }
	};

	/**
	 * update editor dirty paths
	 *
	 * @param newDirtyPaths: Path[]; new dirty paths
	 * @param transform: (p: Path) => Path | null; how to transform existing dirty paths
	 */
	function updateDirtyPaths(editor, newDirtyPaths, transform) {
	  var oldDirtyPaths = DIRTY_PATHS.get(editor) || [];
	  var oldDirtyPathKeys = DIRTY_PATH_KEYS.get(editor) || new Set();
	  var dirtyPaths;
	  var dirtyPathKeys;
	  var add = path => {
	    if (path) {
	      var key = path.join(',');
	      if (!dirtyPathKeys.has(key)) {
	        dirtyPathKeys.add(key);
	        dirtyPaths.push(path);
	      }
	    }
	  };
	  if (transform) {
	    dirtyPaths = [];
	    dirtyPathKeys = new Set();
	    for (var path of oldDirtyPaths) {
	      var newPath = transform(path);
	      add(newPath);
	    }
	  } else {
	    dirtyPaths = oldDirtyPaths;
	    dirtyPathKeys = oldDirtyPathKeys;
	  }
	  for (var _path of newDirtyPaths) {
	    add(_path);
	  }
	  DIRTY_PATHS.set(editor, dirtyPaths);
	  DIRTY_PATH_KEYS.set(editor, dirtyPathKeys);
	}

	var apply = (editor, op) => {
	  for (var ref of Editor.pathRefs(editor)) {
	    PathRef.transform(ref, op);
	  }
	  for (var _ref of Editor.pointRefs(editor)) {
	    PointRef.transform(_ref, op);
	  }
	  for (var _ref2 of Editor.rangeRefs(editor)) {
	    RangeRef.transform(_ref2, op);
	  }
	  // update dirty paths
	  if (!isBatchingDirtyPaths(editor)) {
	    var transform = Path.operationCanTransformPath(op) ? p => Path.transform(p, op) : undefined;
	    updateDirtyPaths(editor, editor.getDirtyPaths(op), transform);
	  }
	  Transforms.transform(editor, op);
	  editor.operations.push(op);
	  Editor.normalize(editor, {
	    operation: op
	  });
	  // Clear any formats applied to the cursor if the selection changes.
	  if (op.type === 'set_selection') {
	    editor.marks = null;
	  }
	  if (!FLUSHING.get(editor)) {
	    FLUSHING.set(editor, true);
	    Promise.resolve().then(() => {
	      FLUSHING.set(editor, false);
	      editor.onChange({
	        operation: op
	      });
	      editor.operations = [];
	    });
	  }
	};

	/**
	 * Get the "dirty" paths generated from an operation.
	 */
	var getDirtyPaths = (editor, op) => {
	  switch (op.type) {
	    case 'insert_text':
	    case 'remove_text':
	    case 'set_node':
	      {
	        var {
	          path
	        } = op;
	        return Path.levels(path);
	      }
	    case 'insert_node':
	      {
	        var {
	          node,
	          path: _path
	        } = op;
	        var levels = Path.levels(_path);
	        var descendants = Text$1.isText(node) ? [] : Array.from(Node.nodes(node), _ref => {
	          var [, p] = _ref;
	          return _path.concat(p);
	        });
	        return [...levels, ...descendants];
	      }
	    case 'merge_node':
	      {
	        var {
	          path: _path2
	        } = op;
	        var ancestors = Path.ancestors(_path2);
	        var previousPath = Path.previous(_path2);
	        return [...ancestors, previousPath];
	      }
	    case 'move_node':
	      {
	        var {
	          path: _path3,
	          newPath
	        } = op;
	        if (Path.equals(_path3, newPath)) {
	          return [];
	        }
	        var oldAncestors = [];
	        var newAncestors = [];
	        for (var ancestor of Path.ancestors(_path3)) {
	          var p = Path.transform(ancestor, op);
	          oldAncestors.push(p);
	        }
	        for (var _ancestor of Path.ancestors(newPath)) {
	          var _p = Path.transform(_ancestor, op);
	          newAncestors.push(_p);
	        }
	        var newParent = newAncestors[newAncestors.length - 1];
	        var newIndex = newPath[newPath.length - 1];
	        var resultPath = newParent.concat(newIndex);
	        return [...oldAncestors, ...newAncestors, resultPath];
	      }
	    case 'remove_node':
	      {
	        var {
	          path: _path4
	        } = op;
	        var _ancestors = Path.ancestors(_path4);
	        return [..._ancestors];
	      }
	    case 'split_node':
	      {
	        var {
	          path: _path5
	        } = op;
	        var _levels = Path.levels(_path5);
	        var nextPath = Path.next(_path5);
	        return [..._levels, nextPath];
	      }
	    default:
	      {
	        return [];
	      }
	  }
	};

	var getFragment = editor => {
	  var {
	    selection
	  } = editor;
	  if (selection) {
	    return Node.fragment(editor, selection);
	  }
	  return [];
	};

	var normalizeNode = (editor, entry) => {
	  var [node, path] = entry;
	  // There are no core normalizations for text nodes.
	  if (Text$1.isText(node)) {
	    return;
	  }
	  // Ensure that block and inline nodes have at least one text child.
	  if (Element$3.isElement(node) && node.children.length === 0) {
	    var child = {
	      text: ''
	    };
	    Transforms.insertNodes(editor, child, {
	      at: path.concat(0),
	      voids: true
	    });
	    return;
	  }
	  // Determine whether the node should have block or inline children.
	  var shouldHaveInlines = Editor.isEditor(node) ? false : Element$3.isElement(node) && (editor.isInline(node) || node.children.length === 0 || Text$1.isText(node.children[0]) || editor.isInline(node.children[0]));
	  // Since we'll be applying operations while iterating, keep track of an
	  // index that accounts for any added/removed nodes.
	  var n = 0;
	  for (var i = 0; i < node.children.length; i++, n++) {
	    var currentNode = Node.get(editor, path);
	    if (Text$1.isText(currentNode)) continue;
	    var _child = currentNode.children[n];
	    var prev = currentNode.children[n - 1];
	    var isLast = i === node.children.length - 1;
	    var isInlineOrText = Text$1.isText(_child) || Element$3.isElement(_child) && editor.isInline(_child);
	    // Only allow block nodes in the top-level children and parent blocks
	    // that only contain block nodes. Similarly, only allow inline nodes in
	    // other inline nodes, or parent blocks that only contain inlines and
	    // text.
	    if (isInlineOrText !== shouldHaveInlines) {
	      Transforms.removeNodes(editor, {
	        at: path.concat(n),
	        voids: true
	      });
	      n--;
	    } else if (Element$3.isElement(_child)) {
	      // Ensure that inline nodes are surrounded by text nodes.
	      if (editor.isInline(_child)) {
	        if (prev == null || !Text$1.isText(prev)) {
	          var newChild = {
	            text: ''
	          };
	          Transforms.insertNodes(editor, newChild, {
	            at: path.concat(n),
	            voids: true
	          });
	          n++;
	        } else if (isLast) {
	          var _newChild = {
	            text: ''
	          };
	          Transforms.insertNodes(editor, _newChild, {
	            at: path.concat(n + 1),
	            voids: true
	          });
	          n++;
	        }
	      }
	    } else {
	      // If the child is not a text node, and doesn't have a `children` field,
	      // then we have an invalid node that will upset slate.
	      //
	      // eg: `{ type: 'some_node' }`.
	      //
	      // To prevent slate from breaking, we can add the `children` field,
	      // and now that it is valid, we can to many more operations easily,
	      // such as extend normalizers to fix erronous structure.
	      if (!Text$1.isText(_child) && !('children' in _child)) {
	        var elementChild = _child;
	        elementChild.children = [];
	      }
	      // Merge adjacent text nodes that are empty or match.
	      if (prev != null && Text$1.isText(prev)) {
	        if (Text$1.equals(_child, prev, {
	          loose: true
	        })) {
	          Transforms.mergeNodes(editor, {
	            at: path.concat(n),
	            voids: true
	          });
	          n--;
	        } else if (prev.text === '') {
	          Transforms.removeNodes(editor, {
	            at: path.concat(n - 1),
	            voids: true
	          });
	          n--;
	        } else if (_child.text === '') {
	          Transforms.removeNodes(editor, {
	            at: path.concat(n),
	            voids: true
	          });
	          n--;
	        }
	      }
	    }
	  }
	};

	var shouldNormalize = (editor, _ref) => {
	  var {
	    iteration,
	    initialDirtyPathsLength
	  } = _ref;
	  var maxIterations = initialDirtyPathsLength * 42; // HACK: better way?
	  if (iteration > maxIterations) {
	    throw new Error("Could not completely normalize the editor after ".concat(maxIterations, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state."));
	  }
	  return true;
	};

	var above = function above(editor) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var {
	    voids = false,
	    mode = 'lowest',
	    at = editor.selection,
	    match
	  } = options;
	  if (!at) {
	    return;
	  }
	  var path = Editor.path(editor, at);
	  var reverse = mode === 'lowest';
	  for (var [n, p] of Editor.levels(editor, {
	    at: path,
	    voids,
	    match,
	    reverse
	  })) {
	    if (Text$1.isText(n)) continue;
	    if (Range.isRange(at)) {
	      if (Path.isAncestor(p, at.anchor.path) && Path.isAncestor(p, at.focus.path)) {
	        return [n, p];
	      }
	    } else {
	      if (!Path.equals(path, p)) {
	        return [n, p];
	      }
	    }
	  }
	};

	function ownKeys$8(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread$8(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$8(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	var addMark = (editor, key, value) => {
	  var {
	    selection
	  } = editor;
	  if (selection) {
	    var match = (node, path) => {
	      if (!Text$1.isText(node)) {
	        return false; // marks can only be applied to text
	      }

	      var [parentNode, parentPath] = Editor.parent(editor, path);
	      return !editor.isVoid(parentNode) || editor.markableVoid(parentNode);
	    };
	    var expandedSelection = Range.isExpanded(selection);
	    var markAcceptingVoidSelected = false;
	    if (!expandedSelection) {
	      var [selectedNode, selectedPath] = Editor.node(editor, selection);
	      if (selectedNode && match(selectedNode, selectedPath)) {
	        var [parentNode] = Editor.parent(editor, selectedPath);
	        markAcceptingVoidSelected = parentNode && editor.markableVoid(parentNode);
	      }
	    }
	    if (expandedSelection || markAcceptingVoidSelected) {
	      Transforms.setNodes(editor, {
	        [key]: value
	      }, {
	        match,
	        split: true,
	        voids: true
	      });
	    } else {
	      var marks = _objectSpread$8(_objectSpread$8({}, Editor.marks(editor) || {}), {}, {
	        [key]: value
	      });
	      editor.marks = marks;
	      if (!FLUSHING.get(editor)) {
	        editor.onChange();
	      }
	    }
	  }
	};

	function ownKeys$7(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread$7(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$7(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	var after = function after(editor, at) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var anchor = Editor.point(editor, at, {
	    edge: 'end'
	  });
	  var focus = Editor.end(editor, []);
	  var range = {
	    anchor,
	    focus
	  };
	  var {
	    distance = 1
	  } = options;
	  var d = 0;
	  var target;
	  for (var p of Editor.positions(editor, _objectSpread$7(_objectSpread$7({}, options), {}, {
	    at: range
	  }))) {
	    if (d > distance) {
	      break;
	    }
	    if (d !== 0) {
	      target = p;
	    }
	    d++;
	  }
	  return target;
	};

	function ownKeys$6$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread$6$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$6$1(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	var before = function before(editor, at) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var anchor = Editor.start(editor, []);
	  var focus = Editor.point(editor, at, {
	    edge: 'start'
	  });
	  var range = {
	    anchor,
	    focus
	  };
	  var {
	    distance = 1
	  } = options;
	  var d = 0;
	  var target;
	  for (var p of Editor.positions(editor, _objectSpread$6$1(_objectSpread$6$1({}, options), {}, {
	    at: range,
	    reverse: true
	  }))) {
	    if (d > distance) {
	      break;
	    }
	    if (d !== 0) {
	      target = p;
	    }
	    d++;
	  }
	  return target;
	};

	var deleteBackward = (editor, unit) => {
	  var {
	    selection
	  } = editor;
	  if (selection && Range.isCollapsed(selection)) {
	    Transforms.delete(editor, {
	      unit,
	      reverse: true
	    });
	  }
	};

	var deleteForward = (editor, unit) => {
	  var {
	    selection
	  } = editor;
	  if (selection && Range.isCollapsed(selection)) {
	    Transforms.delete(editor, {
	      unit
	    });
	  }
	};

	var deleteFragment = function deleteFragment(editor) {
	  var {
	    direction = 'forward'
	  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var {
	    selection
	  } = editor;
	  if (selection && Range.isExpanded(selection)) {
	    Transforms.delete(editor, {
	      reverse: direction === 'backward'
	    });
	  }
	};

	var edges = (editor, at) => {
	  return [Editor.start(editor, at), Editor.end(editor, at)];
	};

	function ownKeys$5$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread$5$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$5$1(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	var elementReadOnly = function elementReadOnly(editor) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  return Editor.above(editor, _objectSpread$5$1(_objectSpread$5$1({}, options), {}, {
	    match: n => Element$3.isElement(n) && Editor.isElementReadOnly(editor, n)
	  }));
	};

	var end = (editor, at) => {
	  return Editor.point(editor, at, {
	    edge: 'end'
	  });
	};

	var first = (editor, at) => {
	  var path = Editor.path(editor, at, {
	    edge: 'start'
	  });
	  return Editor.node(editor, path);
	};

	var fragment = (editor, at) => {
	  var range = Editor.range(editor, at);
	  return Node.fragment(editor, range);
	};

	function ownKeys$4$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread$4$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$4$1(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	var getVoid = function getVoid(editor) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  return Editor.above(editor, _objectSpread$4$1(_objectSpread$4$1({}, options), {}, {
	    match: n => Element$3.isElement(n) && Editor.isVoid(editor, n)
	  }));
	};

	var hasBlocks = (editor, element) => {
	  return element.children.some(n => Element$3.isElement(n) && Editor.isBlock(editor, n));
	};

	var hasInlines = (editor, element) => {
	  return element.children.some(n => Text$1.isText(n) || Editor.isInline(editor, n));
	};

	var hasPath = (editor, path) => {
	  return Node.has(editor, path);
	};

	var hasTexts = (editor, element) => {
	  return element.children.every(n => Text$1.isText(n));
	};

	var insertBreak = editor => {
	  Transforms.splitNodes(editor, {
	    always: true
	  });
	};

	var insertNode = (editor, node, options) => {
	  Transforms.insertNodes(editor, node, options);
	};

	var insertSoftBreak = editor => {
	  Transforms.splitNodes(editor, {
	    always: true
	  });
	};

	function ownKeys$3$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread$3$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$3$1(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	var insertText = function insertText(editor, text) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var {
	    selection,
	    marks
	  } = editor;
	  if (selection) {
	    if (marks) {
	      var node = _objectSpread$3$1({
	        text
	      }, marks);
	      Transforms.insertNodes(editor, node, {
	        at: options.at,
	        voids: options.voids
	      });
	    } else {
	      Transforms.insertText(editor, text, options);
	    }
	    editor.marks = null;
	  }
	};

	var isBlock = (editor, value) => {
	  return !editor.isInline(value);
	};

	var isEdge = (editor, point, at) => {
	  return Editor.isStart(editor, point, at) || Editor.isEnd(editor, point, at);
	};

	var isEmpty = (editor, element) => {
	  var {
	    children
	  } = element;
	  var [first] = children;
	  return children.length === 0 || children.length === 1 && Text$1.isText(first) && first.text === '' && !editor.isVoid(element);
	};

	var isEnd = (editor, point, at) => {
	  var end = Editor.end(editor, at);
	  return Point.equals(point, end);
	};

	var isNormalizing = editor => {
	  var isNormalizing = NORMALIZING.get(editor);
	  return isNormalizing === undefined ? true : isNormalizing;
	};

	var isStart = (editor, point, at) => {
	  // PERF: If the offset isn't `0` we know it's not the start.
	  if (point.offset !== 0) {
	    return false;
	  }
	  var start = Editor.start(editor, at);
	  return Point.equals(point, start);
	};

	var last = (editor, at) => {
	  var path = Editor.path(editor, at, {
	    edge: 'end'
	  });
	  return Editor.node(editor, path);
	};

	var leaf = function leaf(editor, at) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var path = Editor.path(editor, at, options);
	  var node = Node.leaf(editor, path);
	  return [node, path];
	};

	function levels(editor) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  return function* () {
	    var {
	      at = editor.selection,
	      reverse = false,
	      voids = false
	    } = options;
	    var {
	      match
	    } = options;
	    if (match == null) {
	      match = () => true;
	    }
	    if (!at) {
	      return;
	    }
	    var levels = [];
	    var path = Editor.path(editor, at);
	    for (var [n, p] of Node.levels(editor, path)) {
	      if (!match(n, p)) {
	        continue;
	      }
	      levels.push([n, p]);
	      if (!voids && Element$3.isElement(n) && Editor.isVoid(editor, n)) {
	        break;
	      }
	    }
	    if (reverse) {
	      levels.reverse();
	    }
	    yield* levels;
	  }();
	}

	var _excluded$1$1 = ["text"],
	  _excluded2$1$1 = ["text"];
	var marks = function marks(editor) {
	  var {
	    marks,
	    selection
	  } = editor;
	  if (!selection) {
	    return null;
	  }
	  var {
	    anchor,
	    focus
	  } = selection;
	  if (marks) {
	    return marks;
	  }
	  if (Range.isExpanded(selection)) {
	    /**
	     * COMPAT: Make sure hanging ranges (caused by double clicking in Firefox)
	     * do not adversely affect the returned marks.
	     */
	    var isEnd = Editor.isEnd(editor, anchor, anchor.path);
	    if (isEnd) {
	      var after = Editor.after(editor, anchor);
	      if (after) {
	        anchor = after;
	      }
	    }
	    var [match] = Editor.nodes(editor, {
	      match: Text$1.isText,
	      at: {
	        anchor,
	        focus
	      }
	    });
	    if (match) {
	      var [_node] = match;
	      var _rest = _objectWithoutProperties$1(_node, _excluded$1$1);
	      return _rest;
	    } else {
	      return {};
	    }
	  }
	  var {
	    path
	  } = anchor;
	  var [node] = Editor.leaf(editor, path);
	  if (anchor.offset === 0) {
	    var prev = Editor.previous(editor, {
	      at: path,
	      match: Text$1.isText
	    });
	    var markedVoid = Editor.above(editor, {
	      match: n => Element$3.isElement(n) && Editor.isVoid(editor, n) && editor.markableVoid(n)
	    });
	    if (!markedVoid) {
	      var block = Editor.above(editor, {
	        match: n => Element$3.isElement(n) && Editor.isBlock(editor, n)
	      });
	      if (prev && block) {
	        var [prevNode, prevPath] = prev;
	        var [, blockPath] = block;
	        if (Path.isAncestor(blockPath, prevPath)) {
	          node = prevNode;
	        }
	      }
	    }
	  }
	  var rest = _objectWithoutProperties$1(node, _excluded2$1$1);
	  return rest;
	};

	var next = function next(editor) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var {
	    mode = 'lowest',
	    voids = false
	  } = options;
	  var {
	    match,
	    at = editor.selection
	  } = options;
	  if (!at) {
	    return;
	  }
	  var pointAfterLocation = Editor.after(editor, at, {
	    voids
	  });
	  if (!pointAfterLocation) return;
	  var [, to] = Editor.last(editor, []);
	  var span = [pointAfterLocation.path, to];
	  if (Path.isPath(at) && at.length === 0) {
	    throw new Error("Cannot get the next node from the root node!");
	  }
	  if (match == null) {
	    if (Path.isPath(at)) {
	      var [parent] = Editor.parent(editor, at);
	      match = n => parent.children.includes(n);
	    } else {
	      match = () => true;
	    }
	  }
	  var [next] = Editor.nodes(editor, {
	    at: span,
	    match,
	    mode,
	    voids
	  });
	  return next;
	};

	var node = function node(editor, at) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var path = Editor.path(editor, at, options);
	  var node = Node.get(editor, path);
	  return [node, path];
	};

	function nodes(editor) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  return function* () {
	    var {
	      at = editor.selection,
	      mode = 'all',
	      universal = false,
	      reverse = false,
	      voids = false,
	      ignoreNonSelectable = false
	    } = options;
	    var {
	      match
	    } = options;
	    if (!match) {
	      match = () => true;
	    }
	    if (!at) {
	      return;
	    }
	    var from;
	    var to;
	    if (Span.isSpan(at)) {
	      from = at[0];
	      to = at[1];
	    } else {
	      var first = Editor.path(editor, at, {
	        edge: 'start'
	      });
	      var last = Editor.path(editor, at, {
	        edge: 'end'
	      });
	      from = reverse ? last : first;
	      to = reverse ? first : last;
	    }
	    var nodeEntries = Node.nodes(editor, {
	      reverse,
	      from,
	      to,
	      pass: _ref => {
	        var [node] = _ref;
	        if (!Element$3.isElement(node)) return false;
	        if (!voids && (Editor.isVoid(editor, node) || Editor.isElementReadOnly(editor, node))) return true;
	        if (ignoreNonSelectable && !Editor.isSelectable(editor, node)) return true;
	        return false;
	      }
	    });
	    var matches = [];
	    var hit;
	    for (var [node, path] of nodeEntries) {
	      if (ignoreNonSelectable && Element$3.isElement(node) && !Editor.isSelectable(editor, node)) {
	        continue;
	      }
	      var isLower = hit && Path.compare(path, hit[1]) === 0;
	      // In highest mode any node lower than the last hit is not a match.
	      if (mode === 'highest' && isLower) {
	        continue;
	      }
	      if (!match(node, path)) {
	        // If we've arrived at a leaf text node that is not lower than the last
	        // hit, then we've found a branch that doesn't include a match, which
	        // means the match is not universal.
	        if (universal && !isLower && Text$1.isText(node)) {
	          return;
	        } else {
	          continue;
	        }
	      }
	      // If there's a match and it's lower than the last, update the hit.
	      if (mode === 'lowest' && isLower) {
	        hit = [node, path];
	        continue;
	      }
	      // In lowest mode we emit the last hit, once it's guaranteed lowest.
	      var emit = mode === 'lowest' ? hit : [node, path];
	      if (emit) {
	        if (universal) {
	          matches.push(emit);
	        } else {
	          yield emit;
	        }
	      }
	      hit = [node, path];
	    }
	    // Since lowest is always emitting one behind, catch up at the end.
	    if (mode === 'lowest' && hit) {
	      if (universal) {
	        matches.push(hit);
	      } else {
	        yield hit;
	      }
	    }
	    // Universal defers to ensure that the match occurs in every branch, so we
	    // yield all of the matches after iterating.
	    if (universal) {
	      yield* matches;
	    }
	  }();
	}

	var normalize = function normalize(editor) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var {
	    force = false,
	    operation
	  } = options;
	  var getDirtyPaths = editor => {
	    return DIRTY_PATHS.get(editor) || [];
	  };
	  var getDirtyPathKeys = editor => {
	    return DIRTY_PATH_KEYS.get(editor) || new Set();
	  };
	  var popDirtyPath = editor => {
	    var path = getDirtyPaths(editor).pop();
	    var key = path.join(',');
	    getDirtyPathKeys(editor).delete(key);
	    return path;
	  };
	  if (!Editor.isNormalizing(editor)) {
	    return;
	  }
	  if (force) {
	    var allPaths = Array.from(Node.nodes(editor), _ref => {
	      var [, p] = _ref;
	      return p;
	    });
	    var allPathKeys = new Set(allPaths.map(p => p.join(',')));
	    DIRTY_PATHS.set(editor, allPaths);
	    DIRTY_PATH_KEYS.set(editor, allPathKeys);
	  }
	  if (getDirtyPaths(editor).length === 0) {
	    return;
	  }
	  Editor.withoutNormalizing(editor, () => {
	    /*
	      Fix dirty elements with no children.
	      editor.normalizeNode() does fix this, but some normalization fixes also require it to work.
	      Running an initial pass avoids the catch-22 race condition.
	    */
	    for (var dirtyPath of getDirtyPaths(editor)) {
	      if (Node.has(editor, dirtyPath)) {
	        var entry = Editor.node(editor, dirtyPath);
	        var [node, _] = entry;
	        /*
	          The default normalizer inserts an empty text node in this scenario, but it can be customised.
	          So there is some risk here.
	                   As long as the normalizer only inserts child nodes for this case it is safe to do in any order;
	          by definition adding children to an empty node can't cause other paths to change.
	        */
	        if (Element$3.isElement(node) && node.children.length === 0) {
	          editor.normalizeNode(entry, {
	            operation
	          });
	        }
	      }
	    }
	    var dirtyPaths = getDirtyPaths(editor);
	    var initialDirtyPathsLength = dirtyPaths.length;
	    var iteration = 0;
	    while (dirtyPaths.length !== 0) {
	      if (!editor.shouldNormalize({
	        dirtyPaths,
	        iteration,
	        initialDirtyPathsLength,
	        operation
	      })) {
	        return;
	      }
	      var _dirtyPath = popDirtyPath(editor);
	      // If the node doesn't exist in the tree, it does not need to be normalized.
	      if (Node.has(editor, _dirtyPath)) {
	        var _entry = Editor.node(editor, _dirtyPath);
	        editor.normalizeNode(_entry, {
	          operation
	        });
	      }
	      iteration++;
	      dirtyPaths = getDirtyPaths(editor);
	    }
	  });
	};

	var parent = function parent(editor, at) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var path = Editor.path(editor, at, options);
	  var parentPath = Path.parent(path);
	  var entry = Editor.node(editor, parentPath);
	  return entry;
	};

	var pathRef = function pathRef(editor, path) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var {
	    affinity = 'forward'
	  } = options;
	  var ref = {
	    current: path,
	    affinity,
	    unref() {
	      var {
	        current
	      } = ref;
	      var pathRefs = Editor.pathRefs(editor);
	      pathRefs.delete(ref);
	      ref.current = null;
	      return current;
	    }
	  };
	  var refs = Editor.pathRefs(editor);
	  refs.add(ref);
	  return ref;
	};

	var pathRefs = editor => {
	  var refs = PATH_REFS.get(editor);
	  if (!refs) {
	    refs = new Set();
	    PATH_REFS.set(editor, refs);
	  }
	  return refs;
	};

	var path = function path(editor, at) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var {
	    depth,
	    edge
	  } = options;
	  if (Path.isPath(at)) {
	    if (edge === 'start') {
	      var [, firstPath] = Node.first(editor, at);
	      at = firstPath;
	    } else if (edge === 'end') {
	      var [, lastPath] = Node.last(editor, at);
	      at = lastPath;
	    }
	  }
	  if (Range.isRange(at)) {
	    if (edge === 'start') {
	      at = Range.start(at);
	    } else if (edge === 'end') {
	      at = Range.end(at);
	    } else {
	      at = Path.common(at.anchor.path, at.focus.path);
	    }
	  }
	  if (Point.isPoint(at)) {
	    at = at.path;
	  }
	  if (depth != null) {
	    at = at.slice(0, depth);
	  }
	  return at;
	};

	var pointRef = function pointRef(editor, point) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var {
	    affinity = 'forward'
	  } = options;
	  var ref = {
	    current: point,
	    affinity,
	    unref() {
	      var {
	        current
	      } = ref;
	      var pointRefs = Editor.pointRefs(editor);
	      pointRefs.delete(ref);
	      ref.current = null;
	      return current;
	    }
	  };
	  var refs = Editor.pointRefs(editor);
	  refs.add(ref);
	  return ref;
	};

	var pointRefs = editor => {
	  var refs = POINT_REFS.get(editor);
	  if (!refs) {
	    refs = new Set();
	    POINT_REFS.set(editor, refs);
	  }
	  return refs;
	};

	var point = function point(editor, at) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var {
	    edge = 'start'
	  } = options;
	  if (Path.isPath(at)) {
	    var path;
	    if (edge === 'end') {
	      var [, lastPath] = Node.last(editor, at);
	      path = lastPath;
	    } else {
	      var [, firstPath] = Node.first(editor, at);
	      path = firstPath;
	    }
	    var node = Node.get(editor, path);
	    if (!Text$1.isText(node)) {
	      throw new Error("Cannot get the ".concat(edge, " point in the node at path [").concat(at, "] because it has no ").concat(edge, " text node."));
	    }
	    return {
	      path,
	      offset: edge === 'end' ? node.text.length : 0
	    };
	  }
	  if (Range.isRange(at)) {
	    var [start, end] = Range.edges(at);
	    return edge === 'start' ? start : end;
	  }
	  return at;
	};

	function positions(editor) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  return function* () {
	    var {
	      at = editor.selection,
	      unit = 'offset',
	      reverse = false,
	      voids = false,
	      ignoreNonSelectable = false
	    } = options;
	    if (!at) {
	      return;
	    }
	    /**
	     * Algorithm notes:
	     *
	     * Each step `distance` is dynamic depending on the underlying text
	     * and the `unit` specified.  Each step, e.g., a line or word, may
	     * span multiple text nodes, so we iterate through the text both on
	     * two levels in step-sync:
	     *
	     * `leafText` stores the text on a text leaf level, and is advanced
	     * through using the counters `leafTextOffset` and `leafTextRemaining`.
	     *
	     * `blockText` stores the text on a block level, and is shortened
	     * by `distance` every time it is advanced.
	     *
	     * We only maintain a window of one blockText and one leafText because
	     * a block node always appears before all of its leaf nodes.
	     */
	    var range = Editor.range(editor, at);
	    var [start, end] = Range.edges(range);
	    var first = reverse ? end : start;
	    var isNewBlock = false;
	    var blockText = '';
	    var distance = 0; // Distance for leafText to catch up to blockText.
	    var leafTextRemaining = 0;
	    var leafTextOffset = 0;
	    // Iterate through all nodes in range, grabbing entire textual content
	    // of block nodes in blockText, and text nodes in leafText.
	    // Exploits the fact that nodes are sequenced in such a way that we first
	    // encounter the block node, then all of its text nodes, so when iterating
	    // through the blockText and leafText we just need to remember a window of
	    // one block node and leaf node, respectively.
	    for (var [node, path] of Editor.nodes(editor, {
	      at,
	      reverse,
	      voids,
	      ignoreNonSelectable
	    })) {
	      /*
	       * ELEMENT NODE - Yield position(s) for voids, collect blockText for blocks
	       */
	      if (Element$3.isElement(node)) {
	        // Void nodes are a special case, so by default we will always
	        // yield their first point. If the `voids` option is set to true,
	        // then we will iterate over their content.
	        if (!voids && (editor.isVoid(node) || editor.isElementReadOnly(node))) {
	          yield Editor.start(editor, path);
	          continue;
	        }
	        // Inline element nodes are ignored as they don't themselves
	        // contribute to `blockText` or `leafText` - their parent and
	        // children do.
	        if (editor.isInline(node)) continue;
	        // Block element node - set `blockText` to its text content.
	        if (Editor.hasInlines(editor, node)) {
	          // We always exhaust block nodes before encountering a new one:
	          //   console.assert(blockText === '',
	          //     `blockText='${blockText}' - `+
	          //     `not exhausted before new block node`, path)
	          // Ensure range considered is capped to `range`, in the
	          // start/end edge cases where block extends beyond range.
	          // Equivalent to this, but presumably more performant:
	          //   blockRange = Editor.range(editor, ...Editor.edges(editor, path))
	          //   blockRange = Range.intersection(range, blockRange) // intersect
	          //   blockText = Editor.string(editor, blockRange, { voids })
	          var e = Path.isAncestor(path, end.path) ? end : Editor.end(editor, path);
	          var s = Path.isAncestor(path, start.path) ? start : Editor.start(editor, path);
	          blockText = Editor.string(editor, {
	            anchor: s,
	            focus: e
	          }, {
	            voids
	          });
	          isNewBlock = true;
	        }
	      }
	      /*
	       * TEXT LEAF NODE - Iterate through text content, yielding
	       * positions every `distance` offset according to `unit`.
	       */
	      if (Text$1.isText(node)) {
	        var isFirst = Path.equals(path, first.path);
	        // Proof that we always exhaust text nodes before encountering a new one:
	        //   console.assert(leafTextRemaining <= 0,
	        //     `leafTextRemaining=${leafTextRemaining} - `+
	        //     `not exhausted before new leaf text node`, path)
	        // Reset `leafText` counters for new text node.
	        if (isFirst) {
	          leafTextRemaining = reverse ? first.offset : node.text.length - first.offset;
	          leafTextOffset = first.offset; // Works for reverse too.
	        } else {
	          leafTextRemaining = node.text.length;
	          leafTextOffset = reverse ? leafTextRemaining : 0;
	        }
	        // Yield position at the start of node (potentially).
	        if (isFirst || isNewBlock || unit === 'offset') {
	          yield {
	            path,
	            offset: leafTextOffset
	          };
	          isNewBlock = false;
	        }
	        // Yield positions every (dynamically calculated) `distance` offset.
	        while (true) {
	          // If `leafText` has caught up with `blockText` (distance=0),
	          // and if blockText is exhausted, break to get another block node,
	          // otherwise advance blockText forward by the new `distance`.
	          if (distance === 0) {
	            if (blockText === '') break;
	            distance = calcDistance(blockText, unit, reverse);
	            // Split the string at the previously found distance and use the
	            // remaining string for the next iteration.
	            blockText = splitByCharacterDistance(blockText, distance, reverse)[1];
	          }
	          // Advance `leafText` by the current `distance`.
	          leafTextOffset = reverse ? leafTextOffset - distance : leafTextOffset + distance;
	          leafTextRemaining = leafTextRemaining - distance;
	          // If `leafText` is exhausted, break to get a new leaf node
	          // and set distance to the overflow amount, so we'll (maybe)
	          // catch up to blockText in the next leaf text node.
	          if (leafTextRemaining < 0) {
	            distance = -leafTextRemaining;
	            break;
	          }
	          // Successfully walked `distance` offsets through `leafText`
	          // to catch up with `blockText`, so we can reset `distance`
	          // and yield this position in this node.
	          distance = 0;
	          yield {
	            path,
	            offset: leafTextOffset
	          };
	        }
	      }
	    }
	    // Proof that upon completion, we've exahusted both leaf and block text:
	    //   console.assert(leafTextRemaining <= 0, "leafText wasn't exhausted")
	    //   console.assert(blockText === '', "blockText wasn't exhausted")
	    // Helper:
	    // Return the distance in offsets for a step of size `unit` on given string.
	    function calcDistance(text, unit, reverse) {
	      if (unit === 'character') {
	        return getCharacterDistance(text, reverse);
	      } else if (unit === 'word') {
	        return getWordDistance(text, reverse);
	      } else if (unit === 'line' || unit === 'block') {
	        return text.length;
	      }
	      return 1;
	    }
	  }();
	}

	var previous = function previous(editor) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var {
	    mode = 'lowest',
	    voids = false
	  } = options;
	  var {
	    match,
	    at = editor.selection
	  } = options;
	  if (!at) {
	    return;
	  }
	  var pointBeforeLocation = Editor.before(editor, at, {
	    voids
	  });
	  if (!pointBeforeLocation) {
	    return;
	  }
	  var [, to] = Editor.first(editor, []);
	  // The search location is from the start of the document to the path of
	  // the point before the location passed in
	  var span = [pointBeforeLocation.path, to];
	  if (Path.isPath(at) && at.length === 0) {
	    throw new Error("Cannot get the previous node from the root node!");
	  }
	  if (match == null) {
	    if (Path.isPath(at)) {
	      var [parent] = Editor.parent(editor, at);
	      match = n => parent.children.includes(n);
	    } else {
	      match = () => true;
	    }
	  }
	  var [previous] = Editor.nodes(editor, {
	    reverse: true,
	    at: span,
	    match,
	    mode,
	    voids
	  });
	  return previous;
	};

	var rangeRef = function rangeRef(editor, range) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var {
	    affinity = 'forward'
	  } = options;
	  var ref = {
	    current: range,
	    affinity,
	    unref() {
	      var {
	        current
	      } = ref;
	      var rangeRefs = Editor.rangeRefs(editor);
	      rangeRefs.delete(ref);
	      ref.current = null;
	      return current;
	    }
	  };
	  var refs = Editor.rangeRefs(editor);
	  refs.add(ref);
	  return ref;
	};

	var rangeRefs = editor => {
	  var refs = RANGE_REFS.get(editor);
	  if (!refs) {
	    refs = new Set();
	    RANGE_REFS.set(editor, refs);
	  }
	  return refs;
	};

	var range = (editor, at, to) => {
	  if (Range.isRange(at) && !to) {
	    return at;
	  }
	  var start = Editor.start(editor, at);
	  var end = Editor.end(editor, to || at);
	  return {
	    anchor: start,
	    focus: end
	  };
	};

	function ownKeys$2$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread$2$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2$1(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	var removeMark = (editor, key) => {
	  var {
	    selection
	  } = editor;
	  if (selection) {
	    var match = (node, path) => {
	      if (!Text$1.isText(node)) {
	        return false; // marks can only be applied to text
	      }

	      var [parentNode, parentPath] = Editor.parent(editor, path);
	      return !editor.isVoid(parentNode) || editor.markableVoid(parentNode);
	    };
	    var expandedSelection = Range.isExpanded(selection);
	    var markAcceptingVoidSelected = false;
	    if (!expandedSelection) {
	      var [selectedNode, selectedPath] = Editor.node(editor, selection);
	      if (selectedNode && match(selectedNode, selectedPath)) {
	        var [parentNode] = Editor.parent(editor, selectedPath);
	        markAcceptingVoidSelected = parentNode && editor.markableVoid(parentNode);
	      }
	    }
	    if (expandedSelection || markAcceptingVoidSelected) {
	      Transforms.unsetNodes(editor, key, {
	        match,
	        split: true,
	        voids: true
	      });
	    } else {
	      var marks = _objectSpread$2$1({}, Editor.marks(editor) || {});
	      delete marks[key];
	      editor.marks = marks;
	      if (!FLUSHING.get(editor)) {
	        editor.onChange();
	      }
	    }
	  }
	};

	var setNormalizing = (editor, isNormalizing) => {
	  NORMALIZING.set(editor, isNormalizing);
	};

	var start = (editor, at) => {
	  return Editor.point(editor, at, {
	    edge: 'start'
	  });
	};

	var string = function string(editor, at) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var {
	    voids = false
	  } = options;
	  var range = Editor.range(editor, at);
	  var [start, end] = Range.edges(range);
	  var text = '';
	  for (var [node, path] of Editor.nodes(editor, {
	    at: range,
	    match: Text$1.isText,
	    voids
	  })) {
	    var t = node.text;
	    if (Path.equals(path, end.path)) {
	      t = t.slice(0, end.offset);
	    }
	    if (Path.equals(path, start.path)) {
	      t = t.slice(start.offset);
	    }
	    text += t;
	  }
	  return text;
	};

	var unhangRange = function unhangRange(editor, range) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var {
	    voids = false
	  } = options;
	  var [start, end] = Range.edges(range);
	  // PERF: exit early if we can guarantee that the range isn't hanging.
	  if (start.offset !== 0 || end.offset !== 0 || Range.isCollapsed(range) || Path.hasPrevious(end.path)) {
	    return range;
	  }
	  var endBlock = Editor.above(editor, {
	    at: end,
	    match: n => Element$3.isElement(n) && Editor.isBlock(editor, n),
	    voids
	  });
	  var blockPath = endBlock ? endBlock[1] : [];
	  var first = Editor.start(editor, start);
	  var before = {
	    anchor: first,
	    focus: end
	  };
	  var skip = true;
	  for (var [node, path] of Editor.nodes(editor, {
	    at: before,
	    match: Text$1.isText,
	    reverse: true,
	    voids
	  })) {
	    if (skip) {
	      skip = false;
	      continue;
	    }
	    if (node.text !== '' || Path.isBefore(path, blockPath)) {
	      end = {
	        path,
	        offset: node.text.length
	      };
	      break;
	    }
	  }
	  return {
	    anchor: start,
	    focus: end
	  };
	};

	var withoutNormalizing = (editor, fn) => {
	  var value = Editor.isNormalizing(editor);
	  Editor.setNormalizing(editor, false);
	  try {
	    fn();
	  } finally {
	    Editor.setNormalizing(editor, value);
	  }
	  Editor.normalize(editor);
	};

	var shouldMergeNodesRemovePrevNode = (editor, _ref, _ref2) => {
	  var [prevNode, prevPath] = _ref;
	  // If the target node that we're merging with is empty, remove it instead
	  // of merging the two. This is a common rich text editor behavior to
	  // prevent losing formatting when deleting entire nodes when you have a
	  // hanging selection.
	  // if prevNode is first child in parent,don't remove it.
	  return Element$3.isElement(prevNode) && Editor.isEmpty(editor, prevNode) || Text$1.isText(prevNode) && prevNode.text === '' && prevPath[prevPath.length - 1] !== 0;
	};

	var deleteText = function deleteText(editor) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  Editor.withoutNormalizing(editor, () => {
	    var _Editor$void, _Editor$void2;
	    var {
	      reverse = false,
	      unit = 'character',
	      distance = 1,
	      voids = false
	    } = options;
	    var {
	      at = editor.selection,
	      hanging = false
	    } = options;
	    if (!at) {
	      return;
	    }
	    var isCollapsed = false;
	    if (Range.isRange(at) && Range.isCollapsed(at)) {
	      isCollapsed = true;
	      at = at.anchor;
	    }
	    if (Point.isPoint(at)) {
	      var furthestVoid = Editor.void(editor, {
	        at,
	        mode: 'highest'
	      });
	      if (!voids && furthestVoid) {
	        var [, voidPath] = furthestVoid;
	        at = voidPath;
	      } else {
	        var opts = {
	          unit,
	          distance
	        };
	        var target = reverse ? Editor.before(editor, at, opts) || Editor.start(editor, []) : Editor.after(editor, at, opts) || Editor.end(editor, []);
	        at = {
	          anchor: at,
	          focus: target
	        };
	        hanging = true;
	      }
	    }
	    if (Path.isPath(at)) {
	      Transforms.removeNodes(editor, {
	        at,
	        voids
	      });
	      return;
	    }
	    if (Range.isCollapsed(at)) {
	      return;
	    }
	    if (!hanging) {
	      var [, _end] = Range.edges(at);
	      var endOfDoc = Editor.end(editor, []);
	      if (!Point.equals(_end, endOfDoc)) {
	        at = Editor.unhangRange(editor, at, {
	          voids
	        });
	      }
	    }
	    var [start, end] = Range.edges(at);
	    var startBlock = Editor.above(editor, {
	      match: n => Element$3.isElement(n) && Editor.isBlock(editor, n),
	      at: start,
	      voids
	    });
	    var endBlock = Editor.above(editor, {
	      match: n => Element$3.isElement(n) && Editor.isBlock(editor, n),
	      at: end,
	      voids
	    });
	    var isAcrossBlocks = startBlock && endBlock && !Path.equals(startBlock[1], endBlock[1]);
	    var isSingleText = Path.equals(start.path, end.path);
	    var startNonEditable = voids ? null : (_Editor$void = Editor.void(editor, {
	      at: start,
	      mode: 'highest'
	    })) !== null && _Editor$void !== void 0 ? _Editor$void : Editor.elementReadOnly(editor, {
	      at: start,
	      mode: 'highest'
	    });
	    var endNonEditable = voids ? null : (_Editor$void2 = Editor.void(editor, {
	      at: end,
	      mode: 'highest'
	    })) !== null && _Editor$void2 !== void 0 ? _Editor$void2 : Editor.elementReadOnly(editor, {
	      at: end,
	      mode: 'highest'
	    });
	    // If the start or end points are inside an inline void, nudge them out.
	    if (startNonEditable) {
	      var before = Editor.before(editor, start);
	      if (before && startBlock && Path.isAncestor(startBlock[1], before.path)) {
	        start = before;
	      }
	    }
	    if (endNonEditable) {
	      var after = Editor.after(editor, end);
	      if (after && endBlock && Path.isAncestor(endBlock[1], after.path)) {
	        end = after;
	      }
	    }
	    // Get the highest nodes that are completely inside the range, as well as
	    // the start and end nodes.
	    var matches = [];
	    var lastPath;
	    for (var entry of Editor.nodes(editor, {
	      at,
	      voids
	    })) {
	      var [node, path] = entry;
	      if (lastPath && Path.compare(path, lastPath) === 0) {
	        continue;
	      }
	      if (!voids && Element$3.isElement(node) && (Editor.isVoid(editor, node) || Editor.isElementReadOnly(editor, node)) || !Path.isCommon(path, start.path) && !Path.isCommon(path, end.path)) {
	        matches.push(entry);
	        lastPath = path;
	      }
	    }
	    var pathRefs = Array.from(matches, _ref => {
	      var [, p] = _ref;
	      return Editor.pathRef(editor, p);
	    });
	    var startRef = Editor.pointRef(editor, start);
	    var endRef = Editor.pointRef(editor, end);
	    var removedText = '';
	    if (!isSingleText && !startNonEditable) {
	      var _point = startRef.current;
	      var [_node] = Editor.leaf(editor, _point);
	      var {
	        path: _path
	      } = _point;
	      var {
	        offset
	      } = start;
	      var text = _node.text.slice(offset);
	      if (text.length > 0) {
	        editor.apply({
	          type: 'remove_text',
	          path: _path,
	          offset,
	          text
	        });
	        removedText = text;
	      }
	    }
	    pathRefs.reverse().map(r => r.unref()).filter(r => r !== null).forEach(p => Transforms.removeNodes(editor, {
	      at: p,
	      voids
	    }));
	    if (!endNonEditable) {
	      var _point2 = endRef.current;
	      var [_node2] = Editor.leaf(editor, _point2);
	      var {
	        path: _path2
	      } = _point2;
	      var _offset = isSingleText ? start.offset : 0;
	      var _text = _node2.text.slice(_offset, end.offset);
	      if (_text.length > 0) {
	        editor.apply({
	          type: 'remove_text',
	          path: _path2,
	          offset: _offset,
	          text: _text
	        });
	        removedText = _text;
	      }
	    }
	    if (!isSingleText && isAcrossBlocks && endRef.current && startRef.current) {
	      Transforms.mergeNodes(editor, {
	        at: endRef.current,
	        hanging: true,
	        voids
	      });
	    }
	    // For Thai script, deleting N character(s) backward should delete
	    // N code point(s) instead of an entire grapheme cluster.
	    // Therefore, the remaining code points should be inserted back.
	    if (isCollapsed && reverse && unit === 'character' && removedText.length > 1 && removedText.match(/[\u0E00-\u0E7F]+/)) {
	      Transforms.insertText(editor, removedText.slice(0, removedText.length - distance));
	    }
	    var startUnref = startRef.unref();
	    var endUnref = endRef.unref();
	    var point = reverse ? startUnref || endUnref : endUnref || startUnref;
	    if (options.at == null && point) {
	      Transforms.select(editor, point);
	    }
	  });
	};

	var insertFragment = function insertFragment(editor, fragment) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  Editor.withoutNormalizing(editor, () => {
	    var {
	      hanging = false,
	      voids = false
	    } = options;
	    var {
	      at = getDefaultInsertLocation(editor),
	      batchDirty = true
	    } = options;
	    if (!fragment.length) {
	      return;
	    }
	    if (Range.isRange(at)) {
	      if (!hanging) {
	        at = Editor.unhangRange(editor, at, {
	          voids
	        });
	      }
	      if (Range.isCollapsed(at)) {
	        at = at.anchor;
	      } else {
	        var [, end] = Range.edges(at);
	        if (!voids && Editor.void(editor, {
	          at: end
	        })) {
	          return;
	        }
	        var pointRef = Editor.pointRef(editor, end);
	        Transforms.delete(editor, {
	          at
	        });
	        at = pointRef.unref();
	      }
	    } else if (Path.isPath(at)) {
	      at = Editor.start(editor, at);
	    }
	    if (!voids && Editor.void(editor, {
	      at
	    })) {
	      return;
	    }
	    // If the insert point is at the edge of an inline node, move it outside
	    // instead since it will need to be split otherwise.
	    var inlineElementMatch = Editor.above(editor, {
	      at,
	      match: n => Element$3.isElement(n) && Editor.isInline(editor, n),
	      mode: 'highest',
	      voids
	    });
	    if (inlineElementMatch) {
	      var [, _inlinePath] = inlineElementMatch;
	      if (Editor.isEnd(editor, at, _inlinePath)) {
	        var after = Editor.after(editor, _inlinePath);
	        at = after;
	      } else if (Editor.isStart(editor, at, _inlinePath)) {
	        var before = Editor.before(editor, _inlinePath);
	        at = before;
	      }
	    }
	    var blockMatch = Editor.above(editor, {
	      match: n => Element$3.isElement(n) && Editor.isBlock(editor, n),
	      at,
	      voids
	    });
	    var [, blockPath] = blockMatch;
	    var isBlockStart = Editor.isStart(editor, at, blockPath);
	    var isBlockEnd = Editor.isEnd(editor, at, blockPath);
	    var isBlockEmpty = isBlockStart && isBlockEnd;
	    var mergeStart = !isBlockStart || isBlockStart && isBlockEnd;
	    var mergeEnd = !isBlockEnd;
	    var [, firstPath] = Node.first({
	      children: fragment
	    }, []);
	    var [, lastPath] = Node.last({
	      children: fragment
	    }, []);
	    var matches = [];
	    var matcher = _ref => {
	      var [n, p] = _ref;
	      var isRoot = p.length === 0;
	      if (isRoot) {
	        return false;
	      }
	      if (isBlockEmpty) {
	        return true;
	      }
	      if (mergeStart && Path.isAncestor(p, firstPath) && Element$3.isElement(n) && !editor.isVoid(n) && !editor.isInline(n)) {
	        return false;
	      }
	      if (mergeEnd && Path.isAncestor(p, lastPath) && Element$3.isElement(n) && !editor.isVoid(n) && !editor.isInline(n)) {
	        return false;
	      }
	      return true;
	    };
	    for (var entry of Node.nodes({
	      children: fragment
	    }, {
	      pass: matcher
	    })) {
	      if (matcher(entry)) {
	        matches.push(entry);
	      }
	    }
	    var starts = [];
	    var middles = [];
	    var ends = [];
	    var starting = true;
	    var hasBlocks = false;
	    for (var [node] of matches) {
	      if (Element$3.isElement(node) && !editor.isInline(node)) {
	        starting = false;
	        hasBlocks = true;
	        middles.push(node);
	      } else if (starting) {
	        starts.push(node);
	      } else {
	        ends.push(node);
	      }
	    }
	    var [inlineMatch] = Editor.nodes(editor, {
	      at,
	      match: n => Text$1.isText(n) || Editor.isInline(editor, n),
	      mode: 'highest',
	      voids
	    });
	    var [, inlinePath] = inlineMatch;
	    var isInlineStart = Editor.isStart(editor, at, inlinePath);
	    var isInlineEnd = Editor.isEnd(editor, at, inlinePath);
	    var middleRef = Editor.pathRef(editor, isBlockEnd && !ends.length ? Path.next(blockPath) : blockPath);
	    var endRef = Editor.pathRef(editor, isInlineEnd ? Path.next(inlinePath) : inlinePath);
	    Transforms.splitNodes(editor, {
	      at,
	      match: n => hasBlocks ? Element$3.isElement(n) && Editor.isBlock(editor, n) : Text$1.isText(n) || Editor.isInline(editor, n),
	      mode: hasBlocks ? 'lowest' : 'highest',
	      always: hasBlocks && (!isBlockStart || starts.length > 0) && (!isBlockEnd || ends.length > 0),
	      voids
	    });
	    var startRef = Editor.pathRef(editor, !isInlineStart || isInlineStart && isInlineEnd ? Path.next(inlinePath) : inlinePath);
	    Transforms.insertNodes(editor, starts, {
	      at: startRef.current,
	      match: n => Text$1.isText(n) || Editor.isInline(editor, n),
	      mode: 'highest',
	      voids,
	      batchDirty
	    });
	    if (isBlockEmpty && !starts.length && middles.length && !ends.length) {
	      Transforms.delete(editor, {
	        at: blockPath,
	        voids
	      });
	    }
	    Transforms.insertNodes(editor, middles, {
	      at: middleRef.current,
	      match: n => Element$3.isElement(n) && Editor.isBlock(editor, n),
	      mode: 'lowest',
	      voids,
	      batchDirty
	    });
	    Transforms.insertNodes(editor, ends, {
	      at: endRef.current,
	      match: n => Text$1.isText(n) || Editor.isInline(editor, n),
	      mode: 'highest',
	      voids,
	      batchDirty
	    });
	    if (!options.at) {
	      var path;
	      if (ends.length > 0 && endRef.current) {
	        path = Path.previous(endRef.current);
	      } else if (middles.length > 0 && middleRef.current) {
	        path = Path.previous(middleRef.current);
	      } else if (startRef.current) {
	        path = Path.previous(startRef.current);
	      }
	      if (path) {
	        var _end = Editor.end(editor, path);
	        Transforms.select(editor, _end);
	      }
	    }
	    startRef.unref();
	    middleRef.unref();
	    endRef.unref();
	  });
	};

	var collapse = function collapse(editor) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var {
	    edge = 'anchor'
	  } = options;
	  var {
	    selection
	  } = editor;
	  if (!selection) {
	    return;
	  } else if (edge === 'anchor') {
	    Transforms.select(editor, selection.anchor);
	  } else if (edge === 'focus') {
	    Transforms.select(editor, selection.focus);
	  } else if (edge === 'start') {
	    var [start] = Range.edges(selection);
	    Transforms.select(editor, start);
	  } else if (edge === 'end') {
	    var [, end] = Range.edges(selection);
	    Transforms.select(editor, end);
	  }
	};

	var deselect = editor => {
	  var {
	    selection
	  } = editor;
	  if (selection) {
	    editor.apply({
	      type: 'set_selection',
	      properties: selection,
	      newProperties: null
	    });
	  }
	};

	var move = function move(editor) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var {
	    selection
	  } = editor;
	  var {
	    distance = 1,
	    unit = 'character',
	    reverse = false
	  } = options;
	  var {
	    edge = null
	  } = options;
	  if (!selection) {
	    return;
	  }
	  if (edge === 'start') {
	    edge = Range.isBackward(selection) ? 'focus' : 'anchor';
	  }
	  if (edge === 'end') {
	    edge = Range.isBackward(selection) ? 'anchor' : 'focus';
	  }
	  var {
	    anchor,
	    focus
	  } = selection;
	  var opts = {
	    distance,
	    unit,
	    ignoreNonSelectable: true
	  };
	  var props = {};
	  if (edge == null || edge === 'anchor') {
	    var point = reverse ? Editor.before(editor, anchor, opts) : Editor.after(editor, anchor, opts);
	    if (point) {
	      props.anchor = point;
	    }
	  }
	  if (edge == null || edge === 'focus') {
	    var _point = reverse ? Editor.before(editor, focus, opts) : Editor.after(editor, focus, opts);
	    if (_point) {
	      props.focus = _point;
	    }
	  }
	  Transforms.setSelection(editor, props);
	};

	var select = (editor, target) => {
	  var {
	    selection
	  } = editor;
	  target = Editor.range(editor, target);
	  if (selection) {
	    Transforms.setSelection(editor, target);
	    return;
	  }
	  if (!Range.isRange(target)) {
	    throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(Scrubber.stringify(target)));
	  }
	  editor.apply({
	    type: 'set_selection',
	    properties: selection,
	    newProperties: target
	  });
	};

	function ownKeys$1$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread$1$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1$1(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	var setPoint = function setPoint(editor, props) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var {
	    selection
	  } = editor;
	  var {
	    edge = 'both'
	  } = options;
	  if (!selection) {
	    return;
	  }
	  if (edge === 'start') {
	    edge = Range.isBackward(selection) ? 'focus' : 'anchor';
	  }
	  if (edge === 'end') {
	    edge = Range.isBackward(selection) ? 'anchor' : 'focus';
	  }
	  var {
	    anchor,
	    focus
	  } = selection;
	  var point = edge === 'anchor' ? anchor : focus;
	  Transforms.setSelection(editor, {
	    [edge === 'anchor' ? 'anchor' : 'focus']: _objectSpread$1$1(_objectSpread$1$1({}, point), props)
	  });
	};

	var setSelection = (editor, props) => {
	  var {
	    selection
	  } = editor;
	  var oldProps = {};
	  var newProps = {};
	  if (!selection) {
	    return;
	  }
	  for (var k in props) {
	    if (k === 'anchor' && props.anchor != null && !Point.equals(props.anchor, selection.anchor) || k === 'focus' && props.focus != null && !Point.equals(props.focus, selection.focus) || k !== 'anchor' && k !== 'focus' && props[k] !== selection[k]) {
	      oldProps[k] = selection[k];
	      newProps[k] = props[k];
	    }
	  }
	  if (Object.keys(oldProps).length > 0) {
	    editor.apply({
	      type: 'set_selection',
	      properties: oldProps,
	      newProperties: newProps
	    });
	  }
	};

	var insertNodes = function insertNodes(editor, nodes) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  Editor.withoutNormalizing(editor, () => {
	    var {
	      hanging = false,
	      voids = false,
	      mode = 'lowest',
	      batchDirty = true
	    } = options;
	    var {
	      at,
	      match,
	      select
	    } = options;
	    if (Node.isNode(nodes)) {
	      nodes = [nodes];
	    }
	    if (nodes.length === 0) {
	      return;
	    }
	    var [node] = nodes;
	    if (!at) {
	      at = getDefaultInsertLocation(editor);
	      if (select !== false) {
	        select = true;
	      }
	    }
	    if (select == null) {
	      select = false;
	    }
	    if (Range.isRange(at)) {
	      if (!hanging) {
	        at = Editor.unhangRange(editor, at, {
	          voids
	        });
	      }
	      if (Range.isCollapsed(at)) {
	        at = at.anchor;
	      } else {
	        var [, end] = Range.edges(at);
	        var pointRef = Editor.pointRef(editor, end);
	        Transforms.delete(editor, {
	          at
	        });
	        at = pointRef.unref();
	      }
	    }
	    if (Point.isPoint(at)) {
	      if (match == null) {
	        if (Text$1.isText(node)) {
	          match = n => Text$1.isText(n);
	        } else if (editor.isInline(node)) {
	          match = n => Text$1.isText(n) || Editor.isInline(editor, n);
	        } else {
	          match = n => Element$3.isElement(n) && Editor.isBlock(editor, n);
	        }
	      }
	      var [entry] = Editor.nodes(editor, {
	        at: at.path,
	        match,
	        mode,
	        voids
	      });
	      if (entry) {
	        var [, matchPath] = entry;
	        var pathRef = Editor.pathRef(editor, matchPath);
	        var isAtEnd = Editor.isEnd(editor, at, matchPath);
	        Transforms.splitNodes(editor, {
	          at,
	          match,
	          mode,
	          voids
	        });
	        var path = pathRef.unref();
	        at = isAtEnd ? Path.next(path) : path;
	      } else {
	        return;
	      }
	    }
	    var parentPath = Path.parent(at);
	    var index = at[at.length - 1];
	    if (!voids && Editor.void(editor, {
	      at: parentPath
	    })) {
	      return;
	    }
	    if (batchDirty) {
	      // PERF: batch update dirty paths
	      // batched ops used to transform existing dirty paths
	      var batchedOps = [];
	      var newDirtyPaths = Path.levels(parentPath);
	      batchDirtyPaths(editor, () => {
	        var _loop = function _loop() {
	          var path = parentPath.concat(index);
	          index++;
	          var op = {
	            type: 'insert_node',
	            path,
	            node: _node
	          };
	          editor.apply(op);
	          at = Path.next(at);
	          batchedOps.push(op);
	          if (!Text$1.isText) {
	            newDirtyPaths.push(path);
	          } else {
	            newDirtyPaths.push(...Array.from(Node.nodes(_node), _ref => {
	              var [, p] = _ref;
	              return path.concat(p);
	            }));
	          }
	        };
	        for (var _node of nodes) {
	          _loop();
	        }
	      }, () => {
	        updateDirtyPaths(editor, newDirtyPaths, p => {
	          var newPath = p;
	          for (var op of batchedOps) {
	            if (Path.operationCanTransformPath(op)) {
	              newPath = Path.transform(newPath, op);
	              if (!newPath) {
	                return null;
	              }
	            }
	          }
	          return newPath;
	        });
	      });
	    } else {
	      for (var _node2 of nodes) {
	        var _path = parentPath.concat(index);
	        index++;
	        editor.apply({
	          type: 'insert_node',
	          path: _path,
	          node: _node2
	        });
	        at = Path.next(at);
	      }
	    }
	    at = Path.previous(at);
	    if (select) {
	      var point = Editor.end(editor, at);
	      if (point) {
	        Transforms.select(editor, point);
	      }
	    }
	  });
	};

	var liftNodes = function liftNodes(editor) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  Editor.withoutNormalizing(editor, () => {
	    var {
	      at = editor.selection,
	      mode = 'lowest',
	      voids = false
	    } = options;
	    var {
	      match
	    } = options;
	    if (match == null) {
	      match = Path.isPath(at) ? matchPath(editor, at) : n => Element$3.isElement(n) && Editor.isBlock(editor, n);
	    }
	    if (!at) {
	      return;
	    }
	    var matches = Editor.nodes(editor, {
	      at,
	      match,
	      mode,
	      voids
	    });
	    var pathRefs = Array.from(matches, _ref => {
	      var [, p] = _ref;
	      return Editor.pathRef(editor, p);
	    });
	    for (var pathRef of pathRefs) {
	      var path = pathRef.unref();
	      if (path.length < 2) {
	        throw new Error("Cannot lift node at a path [".concat(path, "] because it has a depth of less than `2`."));
	      }
	      var parentNodeEntry = Editor.node(editor, Path.parent(path));
	      var [parent, parentPath] = parentNodeEntry;
	      var index = path[path.length - 1];
	      var {
	        length
	      } = parent.children;
	      if (length === 1) {
	        var toPath = Path.next(parentPath);
	        Transforms.moveNodes(editor, {
	          at: path,
	          to: toPath,
	          voids
	        });
	        Transforms.removeNodes(editor, {
	          at: parentPath,
	          voids
	        });
	      } else if (index === 0) {
	        Transforms.moveNodes(editor, {
	          at: path,
	          to: parentPath,
	          voids
	        });
	      } else if (index === length - 1) {
	        var _toPath = Path.next(parentPath);
	        Transforms.moveNodes(editor, {
	          at: path,
	          to: _toPath,
	          voids
	        });
	      } else {
	        var splitPath = Path.next(path);
	        var _toPath2 = Path.next(parentPath);
	        Transforms.splitNodes(editor, {
	          at: splitPath,
	          voids
	        });
	        Transforms.moveNodes(editor, {
	          at: path,
	          to: _toPath2,
	          voids
	        });
	      }
	    }
	  });
	};

	var _excluded$5 = ["text"],
	  _excluded2$4 = ["children"];
	var hasSingleChildNest = (editor, node) => {
	  if (Element$3.isElement(node)) {
	    var element = node;
	    if (Editor.isVoid(editor, node)) {
	      return true;
	    } else if (element.children.length === 1) {
	      return hasSingleChildNest(editor, element.children[0]);
	    } else {
	      return false;
	    }
	  } else if (Editor.isEditor(node)) {
	    return false;
	  } else {
	    return true;
	  }
	};
	var mergeNodes = function mergeNodes(editor) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  Editor.withoutNormalizing(editor, () => {
	    var {
	      match,
	      at = editor.selection
	    } = options;
	    var {
	      hanging = false,
	      voids = false,
	      mode = 'lowest'
	    } = options;
	    if (!at) {
	      return;
	    }
	    if (match == null) {
	      if (Path.isPath(at)) {
	        var [parent] = Editor.parent(editor, at);
	        match = n => parent.children.includes(n);
	      } else {
	        match = n => Element$3.isElement(n) && Editor.isBlock(editor, n);
	      }
	    }
	    if (!hanging && Range.isRange(at)) {
	      at = Editor.unhangRange(editor, at, {
	        voids
	      });
	    }
	    if (Range.isRange(at)) {
	      if (Range.isCollapsed(at)) {
	        at = at.anchor;
	      } else {
	        var [, end] = Range.edges(at);
	        var pointRef = Editor.pointRef(editor, end);
	        Transforms.delete(editor, {
	          at
	        });
	        at = pointRef.unref();
	        if (options.at == null) {
	          Transforms.select(editor, at);
	        }
	      }
	    }
	    var [current] = Editor.nodes(editor, {
	      at,
	      match,
	      voids,
	      mode
	    });
	    var prev = Editor.previous(editor, {
	      at,
	      match,
	      voids,
	      mode
	    });
	    if (!current || !prev) {
	      return;
	    }
	    var [node, path] = current;
	    var [prevNode, prevPath] = prev;
	    if (path.length === 0 || prevPath.length === 0) {
	      return;
	    }
	    var newPath = Path.next(prevPath);
	    var commonPath = Path.common(path, prevPath);
	    var isPreviousSibling = Path.isSibling(path, prevPath);
	    var levels = Array.from(Editor.levels(editor, {
	      at: path
	    }), _ref => {
	      var [n] = _ref;
	      return n;
	    }).slice(commonPath.length).slice(0, -1);
	    // Determine if the merge will leave an ancestor of the path empty as a
	    // result, in which case we'll want to remove it after merging.
	    var emptyAncestor = Editor.above(editor, {
	      at: path,
	      mode: 'highest',
	      match: n => levels.includes(n) && hasSingleChildNest(editor, n)
	    });
	    var emptyRef = emptyAncestor && Editor.pathRef(editor, emptyAncestor[1]);
	    var properties;
	    var position;
	    // Ensure that the nodes are equivalent, and figure out what the position
	    // and extra properties of the merge will be.
	    if (Text$1.isText(node) && Text$1.isText(prevNode)) {
	      var rest = _objectWithoutProperties$1(node, _excluded$5);
	      position = prevNode.text.length;
	      properties = rest;
	    } else if (Element$3.isElement(node) && Element$3.isElement(prevNode)) {
	      var rest = _objectWithoutProperties$1(node, _excluded2$4);
	      position = prevNode.children.length;
	      properties = rest;
	    } else {
	      throw new Error("Cannot merge the node at path [".concat(path, "] with the previous sibling because it is not the same kind: ").concat(Scrubber.stringify(node), " ").concat(Scrubber.stringify(prevNode)));
	    }
	    // If the node isn't already the next sibling of the previous node, move
	    // it so that it is before merging.
	    if (!isPreviousSibling) {
	      Transforms.moveNodes(editor, {
	        at: path,
	        to: newPath,
	        voids
	      });
	    }
	    // If there was going to be an empty ancestor of the node that was merged,
	    // we remove it from the tree.
	    if (emptyRef) {
	      Transforms.removeNodes(editor, {
	        at: emptyRef.current,
	        voids
	      });
	    }
	    if (Editor.shouldMergeNodesRemovePrevNode(editor, prev, current)) {
	      Transforms.removeNodes(editor, {
	        at: prevPath,
	        voids
	      });
	    } else {
	      editor.apply({
	        type: 'merge_node',
	        path: newPath,
	        position,
	        properties
	      });
	    }
	    if (emptyRef) {
	      emptyRef.unref();
	    }
	  });
	};

	var moveNodes = (editor, options) => {
	  Editor.withoutNormalizing(editor, () => {
	    var {
	      to,
	      at = editor.selection,
	      mode = 'lowest',
	      voids = false
	    } = options;
	    var {
	      match
	    } = options;
	    if (!at) {
	      return;
	    }
	    if (match == null) {
	      match = Path.isPath(at) ? matchPath(editor, at) : n => Element$3.isElement(n) && Editor.isBlock(editor, n);
	    }
	    var toRef = Editor.pathRef(editor, to);
	    var targets = Editor.nodes(editor, {
	      at,
	      match,
	      mode,
	      voids
	    });
	    var pathRefs = Array.from(targets, _ref => {
	      var [, p] = _ref;
	      return Editor.pathRef(editor, p);
	    });
	    for (var pathRef of pathRefs) {
	      var path = pathRef.unref();
	      var newPath = toRef.current;
	      if (path.length !== 0) {
	        editor.apply({
	          type: 'move_node',
	          path,
	          newPath
	        });
	      }
	      if (toRef.current && Path.isSibling(newPath, path) && Path.isAfter(newPath, path)) {
	        // When performing a sibling move to a later index, the path at the destination is shifted
	        // to before the insertion point instead of after. To ensure our group of nodes are inserted
	        // in the correct order we increment toRef to account for that
	        toRef.current = Path.next(toRef.current);
	      }
	    }
	    toRef.unref();
	  });
	};

	var removeNodes = function removeNodes(editor) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  Editor.withoutNormalizing(editor, () => {
	    var {
	      hanging = false,
	      voids = false,
	      mode = 'lowest'
	    } = options;
	    var {
	      at = editor.selection,
	      match
	    } = options;
	    if (!at) {
	      return;
	    }
	    if (match == null) {
	      match = Path.isPath(at) ? matchPath(editor, at) : n => Element$3.isElement(n) && Editor.isBlock(editor, n);
	    }
	    if (!hanging && Range.isRange(at)) {
	      at = Editor.unhangRange(editor, at, {
	        voids
	      });
	    }
	    var depths = Editor.nodes(editor, {
	      at,
	      match,
	      mode,
	      voids
	    });
	    var pathRefs = Array.from(depths, _ref => {
	      var [, p] = _ref;
	      return Editor.pathRef(editor, p);
	    });
	    for (var pathRef of pathRefs) {
	      var path = pathRef.unref();
	      if (path) {
	        var [node] = Editor.node(editor, path);
	        editor.apply({
	          type: 'remove_node',
	          path,
	          node
	        });
	      }
	    }
	  });
	};

	var setNodes = function setNodes(editor, props) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  Editor.withoutNormalizing(editor, () => {
	    var {
	      match,
	      at = editor.selection,
	      compare,
	      merge
	    } = options;
	    var {
	      hanging = false,
	      mode = 'lowest',
	      split = false,
	      voids = false
	    } = options;
	    if (!at) {
	      return;
	    }
	    if (match == null) {
	      match = Path.isPath(at) ? matchPath(editor, at) : n => Element$3.isElement(n) && Editor.isBlock(editor, n);
	    }
	    if (!hanging && Range.isRange(at)) {
	      at = Editor.unhangRange(editor, at, {
	        voids
	      });
	    }
	    if (split && Range.isRange(at)) {
	      if (Range.isCollapsed(at) && Editor.leaf(editor, at.anchor)[0].text.length > 0) {
	        // If the range is collapsed in a non-empty node and 'split' is true, there's nothing to
	        // set that won't get normalized away
	        return;
	      }
	      var rangeRef = Editor.rangeRef(editor, at, {
	        affinity: 'inward'
	      });
	      var [start, end] = Range.edges(at);
	      var splitMode = mode === 'lowest' ? 'lowest' : 'highest';
	      var endAtEndOfNode = Editor.isEnd(editor, end, end.path);
	      Transforms.splitNodes(editor, {
	        at: end,
	        match,
	        mode: splitMode,
	        voids,
	        always: !endAtEndOfNode
	      });
	      var startAtStartOfNode = Editor.isStart(editor, start, start.path);
	      Transforms.splitNodes(editor, {
	        at: start,
	        match,
	        mode: splitMode,
	        voids,
	        always: !startAtStartOfNode
	      });
	      at = rangeRef.unref();
	      if (options.at == null) {
	        Transforms.select(editor, at);
	      }
	    }
	    if (!compare) {
	      compare = (prop, nodeProp) => prop !== nodeProp;
	    }
	    for (var [node, path] of Editor.nodes(editor, {
	      at,
	      match,
	      mode,
	      voids
	    })) {
	      var properties = {};
	      // FIXME: is this correct?
	      var newProperties = {};
	      // You can't set properties on the editor node.
	      if (path.length === 0) {
	        continue;
	      }
	      var hasChanges = false;
	      for (var k in props) {
	        if (k === 'children' || k === 'text') {
	          continue;
	        }
	        if (compare(props[k], node[k])) {
	          hasChanges = true;
	          // Omit new properties from the old properties list
	          if (node.hasOwnProperty(k)) properties[k] = node[k];
	          // Omit properties that have been removed from the new properties list
	          if (merge) {
	            if (props[k] != null) newProperties[k] = merge(node[k], props[k]);
	          } else {
	            if (props[k] != null) newProperties[k] = props[k];
	          }
	        }
	      }
	      if (hasChanges) {
	        editor.apply({
	          type: 'set_node',
	          path,
	          properties,
	          newProperties
	        });
	      }
	    }
	  });
	};

	/**
	 * Convert a range into a point by deleting it's content.
	 */
	var deleteRange = (editor, range) => {
	  if (Range.isCollapsed(range)) {
	    return range.anchor;
	  } else {
	    var [, end] = Range.edges(range);
	    var pointRef = Editor.pointRef(editor, end);
	    Transforms.delete(editor, {
	      at: range
	    });
	    return pointRef.unref();
	  }
	};
	var splitNodes = function splitNodes(editor) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  Editor.withoutNormalizing(editor, () => {
	    var {
	      mode = 'lowest',
	      voids = false
	    } = options;
	    var {
	      match,
	      at = editor.selection,
	      height = 0,
	      always = false
	    } = options;
	    if (match == null) {
	      match = n => Element$3.isElement(n) && Editor.isBlock(editor, n);
	    }
	    if (Range.isRange(at)) {
	      at = deleteRange(editor, at);
	    }
	    // If the target is a path, the default height-skipping and position
	    // counters need to account for us potentially splitting at a non-leaf.
	    if (Path.isPath(at)) {
	      var path = at;
	      var point = Editor.point(editor, path);
	      var [parent] = Editor.parent(editor, path);
	      match = n => n === parent;
	      height = point.path.length - path.length + 1;
	      at = point;
	      always = true;
	    }
	    if (!at) {
	      return;
	    }
	    var beforeRef = Editor.pointRef(editor, at, {
	      affinity: 'backward'
	    });
	    var afterRef;
	    try {
	      var [highest] = Editor.nodes(editor, {
	        at,
	        match,
	        mode,
	        voids
	      });
	      if (!highest) {
	        return;
	      }
	      var voidMatch = Editor.void(editor, {
	        at,
	        mode: 'highest'
	      });
	      var nudge = 0;
	      if (!voids && voidMatch) {
	        var [voidNode, voidPath] = voidMatch;
	        if (Element$3.isElement(voidNode) && editor.isInline(voidNode)) {
	          var after = Editor.after(editor, voidPath);
	          if (!after) {
	            var text = {
	              text: ''
	            };
	            var afterPath = Path.next(voidPath);
	            Transforms.insertNodes(editor, text, {
	              at: afterPath,
	              voids
	            });
	            after = Editor.point(editor, afterPath);
	          }
	          at = after;
	          always = true;
	        }
	        var siblingHeight = at.path.length - voidPath.length;
	        height = siblingHeight + 1;
	        always = true;
	      }
	      afterRef = Editor.pointRef(editor, at);
	      var depth = at.path.length - height;
	      var [, highestPath] = highest;
	      var lowestPath = at.path.slice(0, depth);
	      var position = height === 0 ? at.offset : at.path[depth] + nudge;
	      for (var [node, _path] of Editor.levels(editor, {
	        at: lowestPath,
	        reverse: true,
	        voids
	      })) {
	        var split = false;
	        if (_path.length < highestPath.length || _path.length === 0 || !voids && Element$3.isElement(node) && Editor.isVoid(editor, node)) {
	          break;
	        }
	        var _point = beforeRef.current;
	        var isEnd = Editor.isEnd(editor, _point, _path);
	        if (always || !beforeRef || !Editor.isEdge(editor, _point, _path)) {
	          split = true;
	          var properties = Node.extractProps(node);
	          editor.apply({
	            type: 'split_node',
	            path: _path,
	            position,
	            properties
	          });
	        }
	        position = _path[_path.length - 1] + (split || isEnd ? 1 : 0);
	      }
	      if (options.at == null) {
	        var _point2 = afterRef.current || Editor.end(editor, []);
	        Transforms.select(editor, _point2);
	      }
	    } finally {
	      var _afterRef;
	      beforeRef.unref();
	      (_afterRef = afterRef) === null || _afterRef === void 0 || _afterRef.unref();
	    }
	  });
	};

	var unsetNodes = function unsetNodes(editor, props) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  if (!Array.isArray(props)) {
	    props = [props];
	  }
	  var obj = {};
	  for (var key of props) {
	    obj[key] = null;
	  }
	  Transforms.setNodes(editor, obj, options);
	};

	var unwrapNodes = function unwrapNodes(editor) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  Editor.withoutNormalizing(editor, () => {
	    var {
	      mode = 'lowest',
	      split = false,
	      voids = false
	    } = options;
	    var {
	      at = editor.selection,
	      match
	    } = options;
	    if (!at) {
	      return;
	    }
	    if (match == null) {
	      match = Path.isPath(at) ? matchPath(editor, at) : n => Element$3.isElement(n) && Editor.isBlock(editor, n);
	    }
	    if (Path.isPath(at)) {
	      at = Editor.range(editor, at);
	    }
	    var rangeRef = Range.isRange(at) ? Editor.rangeRef(editor, at) : null;
	    var matches = Editor.nodes(editor, {
	      at,
	      match,
	      mode,
	      voids
	    });
	    var pathRefs = Array.from(matches, _ref => {
	      var [, p] = _ref;
	      return Editor.pathRef(editor, p);
	    }
	    // unwrapNode will call liftNode which does not support splitting the node when nested.
	    // If we do not reverse the order and call it from top to the bottom, it will remove all blocks
	    // that wrap target node. So we reverse the order.
	    ).reverse();
	    var _loop = function _loop() {
	      var path = pathRef.unref();
	      var [node] = Editor.node(editor, path);
	      var range = Editor.range(editor, path);
	      if (split && rangeRef) {
	        range = Range.intersection(rangeRef.current, range);
	      }
	      Transforms.liftNodes(editor, {
	        at: range,
	        match: n => Element$3.isAncestor(node) && node.children.includes(n),
	        voids
	      });
	    };
	    for (var pathRef of pathRefs) {
	      _loop();
	    }
	    if (rangeRef) {
	      rangeRef.unref();
	    }
	  });
	};

	function ownKeys$f(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread$f(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$f(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$f(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	var wrapNodes = function wrapNodes(editor, element) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  Editor.withoutNormalizing(editor, () => {
	    var {
	      mode = 'lowest',
	      split = false,
	      voids = false
	    } = options;
	    var {
	      match,
	      at = editor.selection
	    } = options;
	    if (!at) {
	      return;
	    }
	    if (match == null) {
	      if (Path.isPath(at)) {
	        match = matchPath(editor, at);
	      } else if (editor.isInline(element)) {
	        match = n => Element$3.isElement(n) && Editor.isInline(editor, n) || Text$1.isText(n);
	      } else {
	        match = n => Element$3.isElement(n) && Editor.isBlock(editor, n);
	      }
	    }
	    if (split && Range.isRange(at)) {
	      var [start, end] = Range.edges(at);
	      var rangeRef = Editor.rangeRef(editor, at, {
	        affinity: 'inward'
	      });
	      Transforms.splitNodes(editor, {
	        at: end,
	        match,
	        voids
	      });
	      Transforms.splitNodes(editor, {
	        at: start,
	        match,
	        voids
	      });
	      at = rangeRef.unref();
	      if (options.at == null) {
	        Transforms.select(editor, at);
	      }
	    }
	    var roots = Array.from(Editor.nodes(editor, {
	      at,
	      match: editor.isInline(element) ? n => Element$3.isElement(n) && Editor.isBlock(editor, n) : n => Editor.isEditor(n),
	      mode: 'lowest',
	      voids
	    }));
	    var _loop = function _loop() {
	        var a = Range.isRange(at) ? Range.intersection(at, Editor.range(editor, rootPath)) : at;
	        if (!a) {
	          return 0; // continue
	        }
	        var matches = Array.from(Editor.nodes(editor, {
	          at: a,
	          match,
	          mode,
	          voids
	        }));
	        if (matches.length > 0) {
	          var [first] = matches;
	          var last = matches[matches.length - 1];
	          var [, firstPath] = first;
	          var [, lastPath] = last;
	          if (firstPath.length === 0 && lastPath.length === 0) {
	            // if there's no matching parent - usually means the node is an editor - don't do anything
	            return 0; // continue
	          }
	          var commonPath = Path.equals(firstPath, lastPath) ? Path.parent(firstPath) : Path.common(firstPath, lastPath);
	          var range = Editor.range(editor, firstPath, lastPath);
	          var commonNodeEntry = Editor.node(editor, commonPath);
	          var [commonNode] = commonNodeEntry;
	          var depth = commonPath.length + 1;
	          var wrapperPath = Path.next(lastPath.slice(0, depth));
	          var wrapper = _objectSpread$f(_objectSpread$f({}, element), {}, {
	            children: []
	          });
	          Transforms.insertNodes(editor, wrapper, {
	            at: wrapperPath,
	            voids
	          });
	          Transforms.moveNodes(editor, {
	            at: range,
	            match: n => Element$3.isAncestor(commonNode) && commonNode.children.includes(n),
	            to: wrapperPath.concat(0),
	            voids
	          });
	        }
	      },
	      _ret;
	    for (var [, rootPath] of roots) {
	      _ret = _loop();
	      if (_ret === 0) continue;
	    }
	  });
	};

	/**
	 * Create a new Slate `Editor` object.
	 */
	var createEditor = () => {
	  var editor = {
	    children: [],
	    operations: [],
	    selection: null,
	    marks: null,
	    isElementReadOnly: () => false,
	    isInline: () => false,
	    isSelectable: () => true,
	    isVoid: () => false,
	    markableVoid: () => false,
	    onChange: () => {},
	    // Core
	    apply: function apply$1() {
	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	      return apply(editor, ...args);
	    },
	    // Editor
	    addMark: function addMark$1() {
	      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	      return addMark(editor, ...args);
	    },
	    deleteBackward: function deleteBackward$1() {
	      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	      }
	      return deleteBackward(editor, ...args);
	    },
	    deleteForward: function deleteForward$1() {
	      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        args[_key4] = arguments[_key4];
	      }
	      return deleteForward(editor, ...args);
	    },
	    deleteFragment: function deleteFragment$1() {
	      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	        args[_key5] = arguments[_key5];
	      }
	      return deleteFragment(editor, ...args);
	    },
	    getFragment: function getFragment$1() {
	      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	        args[_key6] = arguments[_key6];
	      }
	      return getFragment(editor, ...args);
	    },
	    insertBreak: function insertBreak$1() {
	      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	        args[_key7] = arguments[_key7];
	      }
	      return insertBreak(editor, ...args);
	    },
	    insertSoftBreak: function insertSoftBreak$1() {
	      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
	        args[_key8] = arguments[_key8];
	      }
	      return insertSoftBreak(editor, ...args);
	    },
	    insertFragment: function insertFragment$1() {
	      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
	        args[_key9] = arguments[_key9];
	      }
	      return insertFragment(editor, ...args);
	    },
	    insertNode: function insertNode$1() {
	      for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
	        args[_key10] = arguments[_key10];
	      }
	      return insertNode(editor, ...args);
	    },
	    insertText: function insertText$1() {
	      for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
	        args[_key11] = arguments[_key11];
	      }
	      return insertText(editor, ...args);
	    },
	    normalizeNode: function normalizeNode$1() {
	      for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
	        args[_key12] = arguments[_key12];
	      }
	      return normalizeNode(editor, ...args);
	    },
	    removeMark: function removeMark$1() {
	      for (var _len13 = arguments.length, args = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
	        args[_key13] = arguments[_key13];
	      }
	      return removeMark(editor, ...args);
	    },
	    getDirtyPaths: function getDirtyPaths$1() {
	      for (var _len14 = arguments.length, args = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
	        args[_key14] = arguments[_key14];
	      }
	      return getDirtyPaths(editor, ...args);
	    },
	    shouldNormalize: function shouldNormalize$1() {
	      for (var _len15 = arguments.length, args = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
	        args[_key15] = arguments[_key15];
	      }
	      return shouldNormalize(editor, ...args);
	    },
	    // Editor interface
	    above: function above$1() {
	      for (var _len16 = arguments.length, args = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
	        args[_key16] = arguments[_key16];
	      }
	      return above(editor, ...args);
	    },
	    after: function after$1() {
	      for (var _len17 = arguments.length, args = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
	        args[_key17] = arguments[_key17];
	      }
	      return after(editor, ...args);
	    },
	    before: function before$1() {
	      for (var _len18 = arguments.length, args = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
	        args[_key18] = arguments[_key18];
	      }
	      return before(editor, ...args);
	    },
	    collapse: function collapse$1() {
	      for (var _len19 = arguments.length, args = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
	        args[_key19] = arguments[_key19];
	      }
	      return collapse(editor, ...args);
	    },
	    delete: function _delete() {
	      for (var _len20 = arguments.length, args = new Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
	        args[_key20] = arguments[_key20];
	      }
	      return deleteText(editor, ...args);
	    },
	    deselect: function deselect$1() {
	      for (var _len21 = arguments.length, args = new Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
	        args[_key21] = arguments[_key21];
	      }
	      return deselect(editor, ...args);
	    },
	    edges: function edges$1() {
	      for (var _len22 = arguments.length, args = new Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
	        args[_key22] = arguments[_key22];
	      }
	      return edges(editor, ...args);
	    },
	    elementReadOnly: function elementReadOnly$1() {
	      for (var _len23 = arguments.length, args = new Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
	        args[_key23] = arguments[_key23];
	      }
	      return elementReadOnly(editor, ...args);
	    },
	    end: function end$1() {
	      for (var _len24 = arguments.length, args = new Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
	        args[_key24] = arguments[_key24];
	      }
	      return end(editor, ...args);
	    },
	    first: function first$1() {
	      for (var _len25 = arguments.length, args = new Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
	        args[_key25] = arguments[_key25];
	      }
	      return first(editor, ...args);
	    },
	    fragment: function fragment$1() {
	      for (var _len26 = arguments.length, args = new Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
	        args[_key26] = arguments[_key26];
	      }
	      return fragment(editor, ...args);
	    },
	    getMarks: function getMarks() {
	      for (var _len27 = arguments.length, args = new Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
	        args[_key27] = arguments[_key27];
	      }
	      return marks(editor, ...args);
	    },
	    hasBlocks: function hasBlocks$1() {
	      for (var _len28 = arguments.length, args = new Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
	        args[_key28] = arguments[_key28];
	      }
	      return hasBlocks(editor, ...args);
	    },
	    hasInlines: function hasInlines$1() {
	      for (var _len29 = arguments.length, args = new Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {
	        args[_key29] = arguments[_key29];
	      }
	      return hasInlines(editor, ...args);
	    },
	    hasPath: function hasPath$1() {
	      for (var _len30 = arguments.length, args = new Array(_len30), _key30 = 0; _key30 < _len30; _key30++) {
	        args[_key30] = arguments[_key30];
	      }
	      return hasPath(editor, ...args);
	    },
	    hasTexts: function hasTexts$1() {
	      for (var _len31 = arguments.length, args = new Array(_len31), _key31 = 0; _key31 < _len31; _key31++) {
	        args[_key31] = arguments[_key31];
	      }
	      return hasTexts(editor, ...args);
	    },
	    insertNodes: function insertNodes$1() {
	      for (var _len32 = arguments.length, args = new Array(_len32), _key32 = 0; _key32 < _len32; _key32++) {
	        args[_key32] = arguments[_key32];
	      }
	      return insertNodes(editor, ...args);
	    },
	    isBlock: function isBlock$1() {
	      for (var _len33 = arguments.length, args = new Array(_len33), _key33 = 0; _key33 < _len33; _key33++) {
	        args[_key33] = arguments[_key33];
	      }
	      return isBlock(editor, ...args);
	    },
	    isEdge: function isEdge$1() {
	      for (var _len34 = arguments.length, args = new Array(_len34), _key34 = 0; _key34 < _len34; _key34++) {
	        args[_key34] = arguments[_key34];
	      }
	      return isEdge(editor, ...args);
	    },
	    isEmpty: function isEmpty$1() {
	      for (var _len35 = arguments.length, args = new Array(_len35), _key35 = 0; _key35 < _len35; _key35++) {
	        args[_key35] = arguments[_key35];
	      }
	      return isEmpty(editor, ...args);
	    },
	    isEnd: function isEnd$1() {
	      for (var _len36 = arguments.length, args = new Array(_len36), _key36 = 0; _key36 < _len36; _key36++) {
	        args[_key36] = arguments[_key36];
	      }
	      return isEnd(editor, ...args);
	    },
	    isNormalizing: function isNormalizing$1() {
	      for (var _len37 = arguments.length, args = new Array(_len37), _key37 = 0; _key37 < _len37; _key37++) {
	        args[_key37] = arguments[_key37];
	      }
	      return isNormalizing(editor, ...args);
	    },
	    isStart: function isStart$1() {
	      for (var _len38 = arguments.length, args = new Array(_len38), _key38 = 0; _key38 < _len38; _key38++) {
	        args[_key38] = arguments[_key38];
	      }
	      return isStart(editor, ...args);
	    },
	    last: function last$1() {
	      for (var _len39 = arguments.length, args = new Array(_len39), _key39 = 0; _key39 < _len39; _key39++) {
	        args[_key39] = arguments[_key39];
	      }
	      return last(editor, ...args);
	    },
	    leaf: function leaf$1() {
	      for (var _len40 = arguments.length, args = new Array(_len40), _key40 = 0; _key40 < _len40; _key40++) {
	        args[_key40] = arguments[_key40];
	      }
	      return leaf(editor, ...args);
	    },
	    levels: function levels$1() {
	      for (var _len41 = arguments.length, args = new Array(_len41), _key41 = 0; _key41 < _len41; _key41++) {
	        args[_key41] = arguments[_key41];
	      }
	      return levels(editor, ...args);
	    },
	    liftNodes: function liftNodes$1() {
	      for (var _len42 = arguments.length, args = new Array(_len42), _key42 = 0; _key42 < _len42; _key42++) {
	        args[_key42] = arguments[_key42];
	      }
	      return liftNodes(editor, ...args);
	    },
	    mergeNodes: function mergeNodes$1() {
	      for (var _len43 = arguments.length, args = new Array(_len43), _key43 = 0; _key43 < _len43; _key43++) {
	        args[_key43] = arguments[_key43];
	      }
	      return mergeNodes(editor, ...args);
	    },
	    move: function move$1() {
	      for (var _len44 = arguments.length, args = new Array(_len44), _key44 = 0; _key44 < _len44; _key44++) {
	        args[_key44] = arguments[_key44];
	      }
	      return move(editor, ...args);
	    },
	    moveNodes: function moveNodes$1() {
	      for (var _len45 = arguments.length, args = new Array(_len45), _key45 = 0; _key45 < _len45; _key45++) {
	        args[_key45] = arguments[_key45];
	      }
	      return moveNodes(editor, ...args);
	    },
	    next: function next$1() {
	      for (var _len46 = arguments.length, args = new Array(_len46), _key46 = 0; _key46 < _len46; _key46++) {
	        args[_key46] = arguments[_key46];
	      }
	      return next(editor, ...args);
	    },
	    node: function node$1() {
	      for (var _len47 = arguments.length, args = new Array(_len47), _key47 = 0; _key47 < _len47; _key47++) {
	        args[_key47] = arguments[_key47];
	      }
	      return node(editor, ...args);
	    },
	    nodes: function nodes$1() {
	      for (var _len48 = arguments.length, args = new Array(_len48), _key48 = 0; _key48 < _len48; _key48++) {
	        args[_key48] = arguments[_key48];
	      }
	      return nodes(editor, ...args);
	    },
	    normalize: function normalize$1() {
	      for (var _len49 = arguments.length, args = new Array(_len49), _key49 = 0; _key49 < _len49; _key49++) {
	        args[_key49] = arguments[_key49];
	      }
	      return normalize(editor, ...args);
	    },
	    parent: function parent$1() {
	      for (var _len50 = arguments.length, args = new Array(_len50), _key50 = 0; _key50 < _len50; _key50++) {
	        args[_key50] = arguments[_key50];
	      }
	      return parent(editor, ...args);
	    },
	    path: function path$1() {
	      for (var _len51 = arguments.length, args = new Array(_len51), _key51 = 0; _key51 < _len51; _key51++) {
	        args[_key51] = arguments[_key51];
	      }
	      return path(editor, ...args);
	    },
	    pathRef: function pathRef$1() {
	      for (var _len52 = arguments.length, args = new Array(_len52), _key52 = 0; _key52 < _len52; _key52++) {
	        args[_key52] = arguments[_key52];
	      }
	      return pathRef(editor, ...args);
	    },
	    pathRefs: function pathRefs$1() {
	      for (var _len53 = arguments.length, args = new Array(_len53), _key53 = 0; _key53 < _len53; _key53++) {
	        args[_key53] = arguments[_key53];
	      }
	      return pathRefs(editor, ...args);
	    },
	    point: function point$1() {
	      for (var _len54 = arguments.length, args = new Array(_len54), _key54 = 0; _key54 < _len54; _key54++) {
	        args[_key54] = arguments[_key54];
	      }
	      return point(editor, ...args);
	    },
	    pointRef: function pointRef$1() {
	      for (var _len55 = arguments.length, args = new Array(_len55), _key55 = 0; _key55 < _len55; _key55++) {
	        args[_key55] = arguments[_key55];
	      }
	      return pointRef(editor, ...args);
	    },
	    pointRefs: function pointRefs$1() {
	      for (var _len56 = arguments.length, args = new Array(_len56), _key56 = 0; _key56 < _len56; _key56++) {
	        args[_key56] = arguments[_key56];
	      }
	      return pointRefs(editor, ...args);
	    },
	    positions: function positions$1() {
	      for (var _len57 = arguments.length, args = new Array(_len57), _key57 = 0; _key57 < _len57; _key57++) {
	        args[_key57] = arguments[_key57];
	      }
	      return positions(editor, ...args);
	    },
	    previous: function previous$1() {
	      for (var _len58 = arguments.length, args = new Array(_len58), _key58 = 0; _key58 < _len58; _key58++) {
	        args[_key58] = arguments[_key58];
	      }
	      return previous(editor, ...args);
	    },
	    range: function range$1() {
	      for (var _len59 = arguments.length, args = new Array(_len59), _key59 = 0; _key59 < _len59; _key59++) {
	        args[_key59] = arguments[_key59];
	      }
	      return range(editor, ...args);
	    },
	    rangeRef: function rangeRef$1() {
	      for (var _len60 = arguments.length, args = new Array(_len60), _key60 = 0; _key60 < _len60; _key60++) {
	        args[_key60] = arguments[_key60];
	      }
	      return rangeRef(editor, ...args);
	    },
	    rangeRefs: function rangeRefs$1() {
	      for (var _len61 = arguments.length, args = new Array(_len61), _key61 = 0; _key61 < _len61; _key61++) {
	        args[_key61] = arguments[_key61];
	      }
	      return rangeRefs(editor, ...args);
	    },
	    removeNodes: function removeNodes$1() {
	      for (var _len62 = arguments.length, args = new Array(_len62), _key62 = 0; _key62 < _len62; _key62++) {
	        args[_key62] = arguments[_key62];
	      }
	      return removeNodes(editor, ...args);
	    },
	    select: function select$1() {
	      for (var _len63 = arguments.length, args = new Array(_len63), _key63 = 0; _key63 < _len63; _key63++) {
	        args[_key63] = arguments[_key63];
	      }
	      return select(editor, ...args);
	    },
	    setNodes: function setNodes$1() {
	      for (var _len64 = arguments.length, args = new Array(_len64), _key64 = 0; _key64 < _len64; _key64++) {
	        args[_key64] = arguments[_key64];
	      }
	      return setNodes(editor, ...args);
	    },
	    setNormalizing: function setNormalizing$1() {
	      for (var _len65 = arguments.length, args = new Array(_len65), _key65 = 0; _key65 < _len65; _key65++) {
	        args[_key65] = arguments[_key65];
	      }
	      return setNormalizing(editor, ...args);
	    },
	    setPoint: function setPoint$1() {
	      for (var _len66 = arguments.length, args = new Array(_len66), _key66 = 0; _key66 < _len66; _key66++) {
	        args[_key66] = arguments[_key66];
	      }
	      return setPoint(editor, ...args);
	    },
	    setSelection: function setSelection$1() {
	      for (var _len67 = arguments.length, args = new Array(_len67), _key67 = 0; _key67 < _len67; _key67++) {
	        args[_key67] = arguments[_key67];
	      }
	      return setSelection(editor, ...args);
	    },
	    splitNodes: function splitNodes$1() {
	      for (var _len68 = arguments.length, args = new Array(_len68), _key68 = 0; _key68 < _len68; _key68++) {
	        args[_key68] = arguments[_key68];
	      }
	      return splitNodes(editor, ...args);
	    },
	    start: function start$1() {
	      for (var _len69 = arguments.length, args = new Array(_len69), _key69 = 0; _key69 < _len69; _key69++) {
	        args[_key69] = arguments[_key69];
	      }
	      return start(editor, ...args);
	    },
	    string: function string$1() {
	      for (var _len70 = arguments.length, args = new Array(_len70), _key70 = 0; _key70 < _len70; _key70++) {
	        args[_key70] = arguments[_key70];
	      }
	      return string(editor, ...args);
	    },
	    unhangRange: function unhangRange$1() {
	      for (var _len71 = arguments.length, args = new Array(_len71), _key71 = 0; _key71 < _len71; _key71++) {
	        args[_key71] = arguments[_key71];
	      }
	      return unhangRange(editor, ...args);
	    },
	    unsetNodes: function unsetNodes$1() {
	      for (var _len72 = arguments.length, args = new Array(_len72), _key72 = 0; _key72 < _len72; _key72++) {
	        args[_key72] = arguments[_key72];
	      }
	      return unsetNodes(editor, ...args);
	    },
	    unwrapNodes: function unwrapNodes$1() {
	      for (var _len73 = arguments.length, args = new Array(_len73), _key73 = 0; _key73 < _len73; _key73++) {
	        args[_key73] = arguments[_key73];
	      }
	      return unwrapNodes(editor, ...args);
	    },
	    void: function _void() {
	      for (var _len74 = arguments.length, args = new Array(_len74), _key74 = 0; _key74 < _len74; _key74++) {
	        args[_key74] = arguments[_key74];
	      }
	      return getVoid(editor, ...args);
	    },
	    withoutNormalizing: function withoutNormalizing$1() {
	      for (var _len75 = arguments.length, args = new Array(_len75), _key75 = 0; _key75 < _len75; _key75++) {
	        args[_key75] = arguments[_key75];
	      }
	      return withoutNormalizing(editor, ...args);
	    },
	    wrapNodes: function wrapNodes$1() {
	      for (var _len76 = arguments.length, args = new Array(_len76), _key76 = 0; _key76 < _len76; _key76++) {
	        args[_key76] = arguments[_key76];
	      }
	      return wrapNodes(editor, ...args);
	    },
	    shouldMergeNodesRemovePrevNode: function shouldMergeNodesRemovePrevNode$1() {
	      for (var _len77 = arguments.length, args = new Array(_len77), _key77 = 0; _key77 < _len77; _key77++) {
	        args[_key77] = arguments[_key77];
	      }
	      return shouldMergeNodesRemovePrevNode(editor, ...args);
	    }
	  };
	  return editor;
	};

	var direction_1 = direction;

	var RTL = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC';
	var LTR =
	  'A-Za-z\u00C0-\u00D6\u00D8-\u00F6' +
	  '\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C' +
	  '\uFE00-\uFE6F\uFEFD-\uFFFF';

	var rtl = new RegExp('^[^' + LTR + ']*[' + RTL + ']');
	var ltr = new RegExp('^[^' + RTL + ']*[' + LTR + ']');

	function direction(value) {
	  value = String(value || '');

	  if (rtl.test(value)) {
	    return 'rtl'
	  }

	  if (ltr.test(value)) {
	    return 'ltr'
	  }

	  return 'neutral'
	}

	var getDirection = /*@__PURE__*/getDefaultExportFromCjs(direction_1);

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */

	function isObject$3(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var isObject_1 = isObject$3;

	/** Detect free variable `global` from Node.js. */

	var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	var _freeGlobal = freeGlobal$1;

	var freeGlobal = _freeGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root$2 = freeGlobal || freeSelf || Function('return this')();

	var _root = root$2;

	var root$1 = _root;

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now$1 = function() {
	  return root$1.Date.now();
	};

	var now_1 = now$1;

	/** Used to match a single whitespace character. */

	var reWhitespace = /\s/;

	/**
	 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
	 * character of `string`.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {number} Returns the index of the last non-whitespace character.
	 */
	function trimmedEndIndex$1(string) {
	  var index = string.length;

	  while (index-- && reWhitespace.test(string.charAt(index))) {}
	  return index;
	}

	var _trimmedEndIndex = trimmedEndIndex$1;

	var trimmedEndIndex = _trimmedEndIndex;

	/** Used to match leading whitespace. */
	var reTrimStart = /^\s+/;

	/**
	 * The base implementation of `_.trim`.
	 *
	 * @private
	 * @param {string} string The string to trim.
	 * @returns {string} Returns the trimmed string.
	 */
	function baseTrim$1(string) {
	  return string
	    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
	    : string;
	}

	var _baseTrim = baseTrim$1;

	var root = _root;

	/** Built-in value references. */
	var Symbol$3 = root.Symbol;

	var _Symbol = Symbol$3;

	var Symbol$2 = _Symbol;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto$1.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$1.toString;

	/** Built-in value references. */
	var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag$1(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
	      tag = value[symToStringTag$1];

	  try {
	    value[symToStringTag$1] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString$1.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag$1] = tag;
	    } else {
	      delete value[symToStringTag$1];
	    }
	  }
	  return result;
	}

	var _getRawTag = getRawTag$1;

	/** Used for built-in method references. */

	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString$1(value) {
	  return nativeObjectToString.call(value);
	}

	var _objectToString = objectToString$1;

	var Symbol$1 = _Symbol,
	    getRawTag = _getRawTag,
	    objectToString = _objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag$1(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	var _baseGetTag = baseGetTag$1;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */

	function isObjectLike$1(value) {
	  return value != null && typeof value == 'object';
	}

	var isObjectLike_1 = isObjectLike$1;

	var baseGetTag = _baseGetTag,
	    isObjectLike = isObjectLike_1;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol$1(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	var isSymbol_1 = isSymbol$1;

	var baseTrim = _baseTrim,
	    isObject$2 = isObject_1,
	    isSymbol = isSymbol_1;

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber$1(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject$2(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject$2(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = baseTrim(value);
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	var toNumber_1 = toNumber$1;

	var isObject$1 = isObject_1,
	    now = now_1,
	    toNumber = toNumber_1;

	/** Error message constants. */
	var FUNC_ERROR_TEXT$1 = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce$1(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT$1);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject$1(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        timeWaiting = wait - timeSinceLastCall;

	    return maxing
	      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
	      : timeWaiting;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }

	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        clearTimeout(timerId);
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	var debounce_1 = debounce$1;

	var debounce$2 = /*@__PURE__*/getDefaultExportFromCjs(debounce_1);

	var debounce = debounce_1,
	    isObject = isObject_1;

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}

	var throttle_1 = throttle;

	var throttle$1 = /*@__PURE__*/getDefaultExportFromCjs(throttle_1);

	const t=t=>"object"==typeof t&&null!=t&&1===t.nodeType,e$1=(t,e)=>(!e||"hidden"!==t)&&("visible"!==t&&"clip"!==t),n$1=(t,n)=>{if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){const o=getComputedStyle(t,null);return e$1(o.overflowY,n)||e$1(o.overflowX,n)||(t=>{const e=(t=>{if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}})(t);return !!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)})(t)}return !1},o$1=(t,e,n,o,l,r,i,s)=>r<t&&i>e||r>t&&i<e?0:r<=t&&s<=n||i>=e&&s>=n?r-t-o:i>e&&s<n||r<t&&s>n?i-e+l:0,l=t=>{const e=t.parentElement;return null==e?t.getRootNode().host||null:e},r=(e,r)=>{var i,s,d,h;if("undefined"==typeof document)return [];const{scrollMode:c,block:f,inline:u,boundary:a,skipOverflowHiddenElements:g}=r,p="function"==typeof a?a:t=>t!==a;if(!t(e))throw new TypeError("Invalid target");const m=document.scrollingElement||document.documentElement,w=[];let W=e;for(;t(W)&&p(W);){if(W=l(W),W===m){w.push(W);break}null!=W&&W===document.body&&n$1(W)&&!n$1(document.documentElement)||null!=W&&n$1(W,g)&&w.push(W);}const b=null!=(s=null==(i=window.visualViewport)?void 0:i.width)?s:innerWidth,H=null!=(h=null==(d=window.visualViewport)?void 0:d.height)?h:innerHeight,{scrollX:y,scrollY:M}=window,{height:v,width:E,top:x,right:C,bottom:I,left:R}=e.getBoundingClientRect(),{top:T,right:B,bottom:F,left:V}=(t=>{const e=window.getComputedStyle(t);return {top:parseFloat(e.scrollMarginTop)||0,right:parseFloat(e.scrollMarginRight)||0,bottom:parseFloat(e.scrollMarginBottom)||0,left:parseFloat(e.scrollMarginLeft)||0}})(e);let k="start"===f||"nearest"===f?x-T:"end"===f?I+F:x+v/2-T+F,D="center"===u?R+E/2-V+B:"end"===u?C+B:R-V;const L=[];for(let t=0;t<w.length;t++){const e=w[t],{height:n,width:l,top:r,right:i,bottom:s,left:d}=e.getBoundingClientRect();if("if-needed"===c&&x>=0&&R>=0&&I<=H&&C<=b&&x>=r&&I<=s&&R>=d&&C<=i)return L;const h=getComputedStyle(e),a=parseInt(h.borderLeftWidth,10),g=parseInt(h.borderTopWidth,10),p=parseInt(h.borderRightWidth,10),W=parseInt(h.borderBottomWidth,10);let T=0,B=0;const F="offsetWidth"in e?e.offsetWidth-e.clientWidth-a-p:0,V="offsetHeight"in e?e.offsetHeight-e.clientHeight-g-W:0,S="offsetWidth"in e?0===e.offsetWidth?0:l/e.offsetWidth:0,X="offsetHeight"in e?0===e.offsetHeight?0:n/e.offsetHeight:0;if(m===e)T="start"===f?k:"end"===f?k-H:"nearest"===f?o$1(M,M+H,H,g,W,M+k,M+k+v,v):k-H/2,B="start"===u?D:"center"===u?D-b/2:"end"===u?D-b:o$1(y,y+b,b,a,p,y+D,y+D+E,E),T=Math.max(0,T+M),B=Math.max(0,B+y);else {T="start"===f?k-r-g:"end"===f?k-s+W+V:"nearest"===f?o$1(r,s,n,g,W+V,k,k+v,v):k-(r+n/2)+V/2,B="start"===u?D-d-a:"center"===u?D-(d+l/2)+F/2:"end"===u?D-i+p+F:o$1(d,i,l,a,p+F,D,D+E,E);const{scrollLeft:t,scrollTop:h}=e;T=0===X?0:Math.max(0,Math.min(h+T/X,e.scrollHeight-n/X+V)),B=0===S?0:Math.max(0,Math.min(t+B/S,e.scrollWidth-l/S+F)),k+=h-T,D+=t-B;}L.push({el:e,top:T,left:B});}return L};

	const o=t=>!1===t?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&0!==Object.keys(t).length)(t)?t:{block:"start",inline:"nearest"};function e(e,r$1){if(!e.isConnected||!(t=>{let o=t;for(;o&&o.parentNode;){if(o.parentNode===document)return !0;o=o.parentNode instanceof ShadowRoot?o.parentNode.host:o.parentNode;}return !1})(e))return;const n=(t=>{const o=window.getComputedStyle(t);return {top:parseFloat(o.scrollMarginTop)||0,right:parseFloat(o.scrollMarginRight)||0,bottom:parseFloat(o.scrollMarginBottom)||0,left:parseFloat(o.scrollMarginLeft)||0}})(e);if((t=>"object"==typeof t&&"function"==typeof t.behavior)(r$1))return r$1.behavior(r(e,r$1));const l="boolean"==typeof r$1||null==r$1?void 0:r$1.behavior;for(const{el:a,top:i,left:s}of r(e,o(r$1))){const t=i-n.top+n.bottom,o=s-n.left+n.right;a.scroll({top:t,left:o,behavior:l});}}

	var resizeObservers = [];

	var hasActiveObservations = function () {
	    return resizeObservers.some(function (ro) { return ro.activeTargets.length > 0; });
	};

	var hasSkippedObservations = function () {
	    return resizeObservers.some(function (ro) { return ro.skippedTargets.length > 0; });
	};

	var msg = 'ResizeObserver loop completed with undelivered notifications.';
	var deliverResizeLoopError = function () {
	    var event;
	    if (typeof ErrorEvent === 'function') {
	        event = new ErrorEvent('error', {
	            message: msg
	        });
	    }
	    else {
	        event = document.createEvent('Event');
	        event.initEvent('error', false, false);
	        event.message = msg;
	    }
	    window.dispatchEvent(event);
	};

	var ResizeObserverBoxOptions;
	(function (ResizeObserverBoxOptions) {
	    ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
	    ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
	    ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
	})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));

	var freeze = function (obj) { return Object.freeze(obj); };

	var ResizeObserverSize = (function () {
	    function ResizeObserverSize(inlineSize, blockSize) {
	        this.inlineSize = inlineSize;
	        this.blockSize = blockSize;
	        freeze(this);
	    }
	    return ResizeObserverSize;
	}());

	var DOMRectReadOnly = (function () {
	    function DOMRectReadOnly(x, y, width, height) {
	        this.x = x;
	        this.y = y;
	        this.width = width;
	        this.height = height;
	        this.top = this.y;
	        this.left = this.x;
	        this.bottom = this.top + this.height;
	        this.right = this.left + this.width;
	        return freeze(this);
	    }
	    DOMRectReadOnly.prototype.toJSON = function () {
	        var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
	        return { x: x, y: y, top: top, right: right, bottom: bottom, left: left, width: width, height: height };
	    };
	    DOMRectReadOnly.fromRect = function (rectangle) {
	        return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
	    };
	    return DOMRectReadOnly;
	}());

	var isSVG = function (target) { return target instanceof SVGElement && 'getBBox' in target; };
	var isHidden = function (target) {
	    if (isSVG(target)) {
	        var _a = target.getBBox(), width = _a.width, height = _a.height;
	        return !width && !height;
	    }
	    var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
	    return !(offsetWidth || offsetHeight || target.getClientRects().length);
	};
	var isElement = function (obj) {
	    var _a;
	    if (obj instanceof Element) {
	        return true;
	    }
	    var scope = (_a = obj === null || obj === void 0 ? void 0 : obj.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView;
	    return !!(scope && obj instanceof scope.Element);
	};
	var isReplacedElement = function (target) {
	    switch (target.tagName) {
	        case 'INPUT':
	            if (target.type !== 'image') {
	                break;
	            }
	        case 'VIDEO':
	        case 'AUDIO':
	        case 'EMBED':
	        case 'OBJECT':
	        case 'CANVAS':
	        case 'IFRAME':
	        case 'IMG':
	            return true;
	    }
	    return false;
	};

	var global$1 = typeof window !== 'undefined' ? window : {};

	var cache = new WeakMap();
	var scrollRegexp = /auto|scroll/;
	var verticalRegexp = /^tb|vertical/;
	var IE = (/msie|trident/i).test(global$1.navigator && global$1.navigator.userAgent);
	var parseDimension = function (pixel) { return parseFloat(pixel || '0'); };
	var size = function (inlineSize, blockSize, switchSizes) {
	    if (inlineSize === void 0) { inlineSize = 0; }
	    if (blockSize === void 0) { blockSize = 0; }
	    if (switchSizes === void 0) { switchSizes = false; }
	    return new ResizeObserverSize((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
	};
	var zeroBoxes = freeze({
	    devicePixelContentBoxSize: size(),
	    borderBoxSize: size(),
	    contentBoxSize: size(),
	    contentRect: new DOMRectReadOnly(0, 0, 0, 0)
	});
	var calculateBoxSizes = function (target, forceRecalculation) {
	    if (forceRecalculation === void 0) { forceRecalculation = false; }
	    if (cache.has(target) && !forceRecalculation) {
	        return cache.get(target);
	    }
	    if (isHidden(target)) {
	        cache.set(target, zeroBoxes);
	        return zeroBoxes;
	    }
	    var cs = getComputedStyle(target);
	    var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
	    var removePadding = !IE && cs.boxSizing === 'border-box';
	    var switchSizes = verticalRegexp.test(cs.writingMode || '');
	    var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || '');
	    var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || '');
	    var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
	    var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
	    var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
	    var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
	    var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
	    var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
	    var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
	    var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
	    var horizontalPadding = paddingLeft + paddingRight;
	    var verticalPadding = paddingTop + paddingBottom;
	    var horizontalBorderArea = borderLeft + borderRight;
	    var verticalBorderArea = borderTop + borderBottom;
	    var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
	    var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
	    var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
	    var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
	    var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
	    var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
	    var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
	    var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
	    var boxes = freeze({
	        devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
	        borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
	        contentBoxSize: size(contentWidth, contentHeight, switchSizes),
	        contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
	    });
	    cache.set(target, boxes);
	    return boxes;
	};
	var calculateBoxSize = function (target, observedBox, forceRecalculation) {
	    var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
	    switch (observedBox) {
	        case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
	            return devicePixelContentBoxSize;
	        case ResizeObserverBoxOptions.BORDER_BOX:
	            return borderBoxSize;
	        default:
	            return contentBoxSize;
	    }
	};

	var ResizeObserverEntry = (function () {
	    function ResizeObserverEntry(target) {
	        var boxes = calculateBoxSizes(target);
	        this.target = target;
	        this.contentRect = boxes.contentRect;
	        this.borderBoxSize = freeze([boxes.borderBoxSize]);
	        this.contentBoxSize = freeze([boxes.contentBoxSize]);
	        this.devicePixelContentBoxSize = freeze([boxes.devicePixelContentBoxSize]);
	    }
	    return ResizeObserverEntry;
	}());

	var calculateDepthForNode = function (node) {
	    if (isHidden(node)) {
	        return Infinity;
	    }
	    var depth = 0;
	    var parent = node.parentNode;
	    while (parent) {
	        depth += 1;
	        parent = parent.parentNode;
	    }
	    return depth;
	};

	var broadcastActiveObservations = function () {
	    var shallowestDepth = Infinity;
	    var callbacks = [];
	    resizeObservers.forEach(function processObserver(ro) {
	        if (ro.activeTargets.length === 0) {
	            return;
	        }
	        var entries = [];
	        ro.activeTargets.forEach(function processTarget(ot) {
	            var entry = new ResizeObserverEntry(ot.target);
	            var targetDepth = calculateDepthForNode(ot.target);
	            entries.push(entry);
	            ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
	            if (targetDepth < shallowestDepth) {
	                shallowestDepth = targetDepth;
	            }
	        });
	        callbacks.push(function resizeObserverCallback() {
	            ro.callback.call(ro.observer, entries, ro.observer);
	        });
	        ro.activeTargets.splice(0, ro.activeTargets.length);
	    });
	    for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
	        var callback = callbacks_1[_i];
	        callback();
	    }
	    return shallowestDepth;
	};

	var gatherActiveObservationsAtDepth = function (depth) {
	    resizeObservers.forEach(function processObserver(ro) {
	        ro.activeTargets.splice(0, ro.activeTargets.length);
	        ro.skippedTargets.splice(0, ro.skippedTargets.length);
	        ro.observationTargets.forEach(function processTarget(ot) {
	            if (ot.isActive()) {
	                if (calculateDepthForNode(ot.target) > depth) {
	                    ro.activeTargets.push(ot);
	                }
	                else {
	                    ro.skippedTargets.push(ot);
	                }
	            }
	        });
	    });
	};

	var process$1 = function () {
	    var depth = 0;
	    gatherActiveObservationsAtDepth(depth);
	    while (hasActiveObservations()) {
	        depth = broadcastActiveObservations();
	        gatherActiveObservationsAtDepth(depth);
	    }
	    if (hasSkippedObservations()) {
	        deliverResizeLoopError();
	    }
	    return depth > 0;
	};

	var trigger;
	var callbacks = [];
	var notify = function () { return callbacks.splice(0).forEach(function (cb) { return cb(); }); };
	var queueMicroTask = function (callback) {
	    if (!trigger) {
	        var toggle_1 = 0;
	        var el_1 = document.createTextNode('');
	        var config = { characterData: true };
	        new MutationObserver(function () { return notify(); }).observe(el_1, config);
	        trigger = function () { el_1.textContent = "".concat(toggle_1 ? toggle_1-- : toggle_1++); };
	    }
	    callbacks.push(callback);
	    trigger();
	};

	var queueResizeObserver = function (cb) {
	    queueMicroTask(function ResizeObserver() {
	        requestAnimationFrame(cb);
	    });
	};

	var watching = 0;
	var isWatching = function () { return !!watching; };
	var CATCH_PERIOD = 250;
	var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
	var events = [
	    'resize',
	    'load',
	    'transitionend',
	    'animationend',
	    'animationstart',
	    'animationiteration',
	    'keyup',
	    'keydown',
	    'mouseup',
	    'mousedown',
	    'mouseover',
	    'mouseout',
	    'blur',
	    'focus'
	];
	var time = function (timeout) {
	    if (timeout === void 0) { timeout = 0; }
	    return Date.now() + timeout;
	};
	var scheduled = false;
	var Scheduler = (function () {
	    function Scheduler() {
	        var _this = this;
	        this.stopped = true;
	        this.listener = function () { return _this.schedule(); };
	    }
	    Scheduler.prototype.run = function (timeout) {
	        var _this = this;
	        if (timeout === void 0) { timeout = CATCH_PERIOD; }
	        if (scheduled) {
	            return;
	        }
	        scheduled = true;
	        var until = time(timeout);
	        queueResizeObserver(function () {
	            var elementsHaveResized = false;
	            try {
	                elementsHaveResized = process$1();
	            }
	            finally {
	                scheduled = false;
	                timeout = until - time();
	                if (!isWatching()) {
	                    return;
	                }
	                if (elementsHaveResized) {
	                    _this.run(1000);
	                }
	                else if (timeout > 0) {
	                    _this.run(timeout);
	                }
	                else {
	                    _this.start();
	                }
	            }
	        });
	    };
	    Scheduler.prototype.schedule = function () {
	        this.stop();
	        this.run();
	    };
	    Scheduler.prototype.observe = function () {
	        var _this = this;
	        var cb = function () { return _this.observer && _this.observer.observe(document.body, observerConfig); };
	        document.body ? cb() : global$1.addEventListener('DOMContentLoaded', cb);
	    };
	    Scheduler.prototype.start = function () {
	        var _this = this;
	        if (this.stopped) {
	            this.stopped = false;
	            this.observer = new MutationObserver(this.listener);
	            this.observe();
	            events.forEach(function (name) { return global$1.addEventListener(name, _this.listener, true); });
	        }
	    };
	    Scheduler.prototype.stop = function () {
	        var _this = this;
	        if (!this.stopped) {
	            this.observer && this.observer.disconnect();
	            events.forEach(function (name) { return global$1.removeEventListener(name, _this.listener, true); });
	            this.stopped = true;
	        }
	    };
	    return Scheduler;
	}());
	var scheduler = new Scheduler();
	var updateCount = function (n) {
	    !watching && n > 0 && scheduler.start();
	    watching += n;
	    !watching && scheduler.stop();
	};

	var skipNotifyOnElement = function (target) {
	    return !isSVG(target)
	        && !isReplacedElement(target)
	        && getComputedStyle(target).display === 'inline';
	};
	var ResizeObservation = (function () {
	    function ResizeObservation(target, observedBox) {
	        this.target = target;
	        this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
	        this.lastReportedSize = {
	            inlineSize: 0,
	            blockSize: 0
	        };
	    }
	    ResizeObservation.prototype.isActive = function () {
	        var size = calculateBoxSize(this.target, this.observedBox, true);
	        if (skipNotifyOnElement(this.target)) {
	            this.lastReportedSize = size;
	        }
	        if (this.lastReportedSize.inlineSize !== size.inlineSize
	            || this.lastReportedSize.blockSize !== size.blockSize) {
	            return true;
	        }
	        return false;
	    };
	    return ResizeObservation;
	}());

	var ResizeObserverDetail = (function () {
	    function ResizeObserverDetail(resizeObserver, callback) {
	        this.activeTargets = [];
	        this.skippedTargets = [];
	        this.observationTargets = [];
	        this.observer = resizeObserver;
	        this.callback = callback;
	    }
	    return ResizeObserverDetail;
	}());

	var observerMap = new WeakMap();
	var getObservationIndex = function (observationTargets, target) {
	    for (var i = 0; i < observationTargets.length; i += 1) {
	        if (observationTargets[i].target === target) {
	            return i;
	        }
	    }
	    return -1;
	};
	var ResizeObserverController = (function () {
	    function ResizeObserverController() {
	    }
	    ResizeObserverController.connect = function (resizeObserver, callback) {
	        var detail = new ResizeObserverDetail(resizeObserver, callback);
	        observerMap.set(resizeObserver, detail);
	    };
	    ResizeObserverController.observe = function (resizeObserver, target, options) {
	        var detail = observerMap.get(resizeObserver);
	        var firstObservation = detail.observationTargets.length === 0;
	        if (getObservationIndex(detail.observationTargets, target) < 0) {
	            firstObservation && resizeObservers.push(detail);
	            detail.observationTargets.push(new ResizeObservation(target, options && options.box));
	            updateCount(1);
	            scheduler.schedule();
	        }
	    };
	    ResizeObserverController.unobserve = function (resizeObserver, target) {
	        var detail = observerMap.get(resizeObserver);
	        var index = getObservationIndex(detail.observationTargets, target);
	        var lastObservation = detail.observationTargets.length === 1;
	        if (index >= 0) {
	            lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1);
	            detail.observationTargets.splice(index, 1);
	            updateCount(-1);
	        }
	    };
	    ResizeObserverController.disconnect = function (resizeObserver) {
	        var _this = this;
	        var detail = observerMap.get(resizeObserver);
	        detail.observationTargets.slice().forEach(function (ot) { return _this.unobserve(resizeObserver, ot.target); });
	        detail.activeTargets.splice(0, detail.activeTargets.length);
	    };
	    return ResizeObserverController;
	}());

	var ResizeObserver = (function () {
	    function ResizeObserver(callback) {
	        if (arguments.length === 0) {
	            throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
	        }
	        if (typeof callback !== 'function') {
	            throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
	        }
	        ResizeObserverController.connect(this, callback);
	    }
	    ResizeObserver.prototype.observe = function (target, options) {
	        if (arguments.length === 0) {
	            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
	        }
	        if (!isElement(target)) {
	            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
	        }
	        ResizeObserverController.observe(this, target, options);
	    };
	    ResizeObserver.prototype.unobserve = function (target) {
	        if (arguments.length === 0) {
	            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
	        }
	        if (!isElement(target)) {
	            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
	        }
	        ResizeObserverController.unobserve(this, target);
	    };
	    ResizeObserver.prototype.disconnect = function () {
	        ResizeObserverController.disconnect(this);
	    };
	    ResizeObserver.toString = function () {
	        return 'function ResizeObserver () { [polyfill code] }';
	    };
	    return ResizeObserver;
	}());

	var lib = {};

	Object.defineProperty(lib, "__esModule", {
	  value: true
	});

	/**
	 * Constants.
	 */

	var IS_MAC = typeof window != 'undefined' && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);

	var MODIFIERS = {
	  alt: 'altKey',
	  control: 'ctrlKey',
	  meta: 'metaKey',
	  shift: 'shiftKey'
	};

	var ALIASES = {
	  add: '+',
	  break: 'pause',
	  cmd: 'meta',
	  command: 'meta',
	  ctl: 'control',
	  ctrl: 'control',
	  del: 'delete',
	  down: 'arrowdown',
	  esc: 'escape',
	  ins: 'insert',
	  left: 'arrowleft',
	  mod: IS_MAC ? 'meta' : 'control',
	  opt: 'alt',
	  option: 'alt',
	  return: 'enter',
	  right: 'arrowright',
	  space: ' ',
	  spacebar: ' ',
	  up: 'arrowup',
	  win: 'meta',
	  windows: 'meta'
	};

	var CODES = {
	  backspace: 8,
	  tab: 9,
	  enter: 13,
	  shift: 16,
	  control: 17,
	  alt: 18,
	  pause: 19,
	  capslock: 20,
	  escape: 27,
	  ' ': 32,
	  pageup: 33,
	  pagedown: 34,
	  end: 35,
	  home: 36,
	  arrowleft: 37,
	  arrowup: 38,
	  arrowright: 39,
	  arrowdown: 40,
	  insert: 45,
	  delete: 46,
	  meta: 91,
	  numlock: 144,
	  scrolllock: 145,
	  ';': 186,
	  '=': 187,
	  ',': 188,
	  '-': 189,
	  '.': 190,
	  '/': 191,
	  '`': 192,
	  '[': 219,
	  '\\': 220,
	  ']': 221,
	  '\'': 222
	};

	for (var f = 1; f < 20; f++) {
	  CODES['f' + f] = 111 + f;
	}

	/**
	 * Is hotkey?
	 */

	function isHotkey(hotkey, options, event) {
	  if (options && !('byKey' in options)) {
	    event = options;
	    options = null;
	  }

	  if (!Array.isArray(hotkey)) {
	    hotkey = [hotkey];
	  }

	  var array = hotkey.map(function (string) {
	    return parseHotkey(string, options);
	  });
	  var check = function check(e) {
	    return array.some(function (object) {
	      return compareHotkey(object, e);
	    });
	  };
	  var ret = event == null ? check : check(event);
	  return ret;
	}

	function isCodeHotkey(hotkey, event) {
	  return isHotkey(hotkey, event);
	}

	function isKeyHotkey(hotkey, event) {
	  return isHotkey(hotkey, { byKey: true }, event);
	}

	/**
	 * Parse.
	 */

	function parseHotkey(hotkey, options) {
	  var byKey = options && options.byKey;
	  var ret = {};

	  // Special case to handle the `+` key since we use it as a separator.
	  hotkey = hotkey.replace('++', '+add');
	  var values = hotkey.split('+');
	  var length = values.length;

	  // Ensure that all the modifiers are set to false unless the hotkey has them.

	  for (var k in MODIFIERS) {
	    ret[MODIFIERS[k]] = false;
	  }

	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var value = _step.value;

	      var optional = value.endsWith('?') && value.length > 1;

	      if (optional) {
	        value = value.slice(0, -1);
	      }

	      var name = toKeyName(value);
	      var modifier = MODIFIERS[name];

	      if (value.length > 1 && !modifier && !ALIASES[value] && !CODES[name]) {
	        throw new TypeError('Unknown modifier: "' + value + '"');
	      }

	      if (length === 1 || !modifier) {
	        if (byKey) {
	          ret.key = name;
	        } else {
	          ret.which = toKeyCode(value);
	        }
	      }

	      if (modifier) {
	        ret[modifier] = optional ? null : true;
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  return ret;
	}

	/**
	 * Compare.
	 */

	function compareHotkey(object, event) {
	  for (var key in object) {
	    var expected = object[key];
	    var actual = void 0;

	    if (expected == null) {
	      continue;
	    }

	    if (key === 'key' && event.key != null) {
	      actual = event.key.toLowerCase();
	    } else if (key === 'which') {
	      actual = expected === 91 && event.which === 93 ? 91 : event.which;
	    } else {
	      actual = event[key];
	    }

	    if (actual == null && expected === false) {
	      continue;
	    }

	    if (actual !== expected) {
	      return false;
	    }
	  }

	  return true;
	}

	/**
	 * Utils.
	 */

	function toKeyCode(name) {
	  name = toKeyName(name);
	  var code = CODES[name] || name.toUpperCase().charCodeAt(0);
	  return code;
	}

	function toKeyName(name) {
	  name = name.toLowerCase();
	  name = ALIASES[name] || name;
	  return name;
	}

	/**
	 * Export.
	 */

	lib.default = isHotkey;
	var isHotkey_1 = lib.isHotkey = isHotkey;
	lib.isCodeHotkey = isCodeHotkey;
	lib.isKeyHotkey = isKeyHotkey;
	lib.parseHotkey = parseHotkey;
	lib.compareHotkey = compareHotkey;
	lib.toKeyCode = toKeyCode;
	lib.toKeyName = toKeyName;

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;
	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }
	  return target;
	}

	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};
	  var target = _objectWithoutPropertiesLoose(source, excluded);
	  var key, i;
	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }
	  return target;
	}

	function _typeof(o) {
	  "@babel/helpers - typeof";

	  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
	    return typeof o;
	  } : function (o) {
	    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	  }, _typeof(o);
	}

	function _toPrimitive(input, hint) {
	  if (_typeof(input) !== "object" || input === null) return input;
	  var prim = input[Symbol.toPrimitive];
	  if (prim !== undefined) {
	    var res = prim.call(input, hint || "default");
	    if (_typeof(res) !== "object") return res;
	    throw new TypeError("@@toPrimitive must return a primitive value.");
	  }
	  return (hint === "string" ? String : Number)(input);
	}

	function _toPropertyKey(arg) {
	  var key = _toPrimitive(arg, "string");
	  return _typeof(key) === "symbol" ? key : String(key);
	}

	function _defineProperty(obj, key, value) {
	  key = _toPropertyKey(key);
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

	/**
	 * A React context for sharing the editor object.
	 */
	var EditorContext = /*#__PURE__*/reactExports.createContext(null);
	/**
	 * Get the current editor object from the React context.
	 */
	var useSlateStatic = () => {
	  var editor = reactExports.useContext(EditorContext);
	  if (!editor) {
	    throw new Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
	  }
	  return editor;
	};

	var _navigator$userAgent$, _navigator$userAgent$2;
	var REACT_MAJOR_VERSION = parseInt(React.version.split('.')[0], 10);
	var IS_IOS = typeof navigator !== 'undefined' && typeof window !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	var IS_APPLE = typeof navigator !== 'undefined' && /Mac OS X/.test(navigator.userAgent);
	var IS_ANDROID = typeof navigator !== 'undefined' && /Android/.test(navigator.userAgent);
	var IS_FIREFOX = typeof navigator !== 'undefined' && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
	var IS_WEBKIT = typeof navigator !== 'undefined' && /AppleWebKit(?!.*Chrome)/i.test(navigator.userAgent);
	// "modern" Edge was released at 79.x
	var IS_EDGE_LEGACY = typeof navigator !== 'undefined' && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent);
	var IS_CHROME = typeof navigator !== 'undefined' && /Chrome/i.test(navigator.userAgent);
	// Native `beforeInput` events don't work well with react on Chrome 75
	// and older, Chrome 76+ can use `beforeInput` though.
	var IS_CHROME_LEGACY = typeof navigator !== 'undefined' && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent);
	var IS_ANDROID_CHROME_LEGACY = IS_ANDROID && typeof navigator !== 'undefined' && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent);
	// Firefox did not support `beforeInput` until `v87`.
	var IS_FIREFOX_LEGACY = typeof navigator !== 'undefined' && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent);
	// UC mobile browser
	var IS_UC_MOBILE = typeof navigator !== 'undefined' && /.*UCBrowser/.test(navigator.userAgent);
	// Wechat browser (not including mac wechat)
	var IS_WECHATBROWSER = typeof navigator !== 'undefined' && /.*Wechat/.test(navigator.userAgent) && !/.*MacWechat/.test(navigator.userAgent); // avoid lookbehind (buggy in safari < 16.4)
	// Check if DOM is available as React does internally.
	// https://github.com/facebook/react/blob/master/packages/shared/ExecutionEnvironment.js
	var CAN_USE_DOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
	// Check if the browser is Safari and older than 17
	typeof navigator !== 'undefined' && /Safari/.test(navigator.userAgent) && /Version\/(\d+)/.test(navigator.userAgent) && ((_navigator$userAgent$ = navigator.userAgent.match(/Version\/(\d+)/)) !== null && _navigator$userAgent$ !== void 0 && _navigator$userAgent$[1] ? parseInt((_navigator$userAgent$2 = navigator.userAgent.match(/Version\/(\d+)/)) === null || _navigator$userAgent$2 === void 0 ? void 0 : _navigator$userAgent$2[1], 10) < 17 : false);
	// COMPAT: Firefox/Edge Legacy don't support the `beforeinput` event
	// Chrome Legacy doesn't support `beforeinput` correctly
	var HAS_BEFORE_INPUT_SUPPORT = (!IS_CHROME_LEGACY || !IS_ANDROID_CHROME_LEGACY) && !IS_EDGE_LEGACY &&
	// globalThis is undefined in older browsers
	typeof globalThis !== 'undefined' && globalThis.InputEvent &&
	// @ts-ignore The `getTargetRanges` property isn't recognized.
	typeof globalThis.InputEvent.prototype.getTargetRanges === 'function';

	/**
	 * Two weak maps that allow us rebuild a path given a node. They are populated
	 * at render time such that after a render occurs we can always backtrack.
	 */
	var NODE_TO_INDEX = new WeakMap();
	var NODE_TO_PARENT = new WeakMap();
	/**
	 * Weak maps that allow us to go between Slate nodes and DOM nodes. These
	 * are used to resolve DOM event-related logic into Slate actions.
	 */
	var EDITOR_TO_WINDOW = new WeakMap();
	var EDITOR_TO_ELEMENT = new WeakMap();
	var EDITOR_TO_PLACEHOLDER_ELEMENT = new WeakMap();
	var ELEMENT_TO_NODE = new WeakMap();
	var NODE_TO_ELEMENT = new WeakMap();
	var NODE_TO_KEY = new WeakMap();
	var EDITOR_TO_KEY_TO_ELEMENT = new WeakMap();
	/**
	 * Weak maps for storing editor-related state.
	 */
	var IS_READ_ONLY = new WeakMap();
	var IS_FOCUSED = new WeakMap();
	var IS_COMPOSING = new WeakMap();
	var EDITOR_TO_USER_SELECTION = new WeakMap();
	/**
	 * Weak map for associating the context `onChange` context with the plugin.
	 */
	var EDITOR_TO_ON_CHANGE = new WeakMap();
	/**
	 * Weak maps for saving pending state on composition stage.
	 */
	var EDITOR_TO_SCHEDULE_FLUSH = new WeakMap();
	var EDITOR_TO_PENDING_INSERTION_MARKS = new WeakMap();
	var EDITOR_TO_USER_MARKS = new WeakMap();
	/**
	 * Android input handling specific weak-maps
	 */
	var EDITOR_TO_PENDING_DIFFS = new WeakMap();
	var EDITOR_TO_PENDING_ACTION = new WeakMap();
	var EDITOR_TO_PENDING_SELECTION = new WeakMap();
	var EDITOR_TO_FORCE_RENDER = new WeakMap();
	/**
	 * Symbols.
	 */
	var PLACEHOLDER_SYMBOL = Symbol('placeholder');
	var MARK_PLACEHOLDER_SYMBOL = Symbol('mark-placeholder');

	/**
	 * Types.
	 */
	// COMPAT: This is required to prevent TypeScript aliases from doing some very
	// weird things for Slate's types with the same name as globals. (2019/11/27)
	// https://github.com/microsoft/TypeScript/issues/35002
	var DOMText = globalThis.Text;
	/**
	 * Returns the host window of a DOM node
	 */
	var getDefaultView = value => {
	  return value && value.ownerDocument && value.ownerDocument.defaultView || null;
	};
	/**
	 * Check if a DOM node is a comment node.
	 */
	var isDOMComment = value => {
	  return isDOMNode(value) && value.nodeType === 8;
	};
	/**
	 * Check if a DOM node is an element node.
	 */
	var isDOMElement = value => {
	  return isDOMNode(value) && value.nodeType === 1;
	};
	/**
	 * Check if a value is a DOM node.
	 */
	var isDOMNode = value => {
	  var window = getDefaultView(value);
	  return !!window && value instanceof window.Node;
	};
	/**
	 * Check if a value is a DOM selection.
	 */
	var isDOMSelection = value => {
	  var window = value && value.anchorNode && getDefaultView(value.anchorNode);
	  return !!window && value instanceof window.Selection;
	};
	/**
	 * Check if a DOM node is an element node.
	 */
	var isDOMText = value => {
	  return isDOMNode(value) && value.nodeType === 3;
	};
	/**
	 * Checks whether a paste event is a plaintext-only event.
	 */
	var isPlainTextOnlyPaste = event => {
	  return event.clipboardData && event.clipboardData.getData('text/plain') !== '' && event.clipboardData.types.length === 1;
	};
	/**
	 * Normalize a DOM point so that it always refers to a text node.
	 */
	var normalizeDOMPoint = domPoint => {
	  var [node, offset] = domPoint;
	  // If it's an element node, its offset refers to the index of its children
	  // including comment nodes, so try to find the right text child node.
	  if (isDOMElement(node) && node.childNodes.length) {
	    var isLast = offset === node.childNodes.length;
	    var index = isLast ? offset - 1 : offset;
	    [node, index] = getEditableChildAndIndex(node, index, isLast ? 'backward' : 'forward');
	    // If the editable child found is in front of input offset, we instead seek to its end
	    isLast = index < offset;
	    // If the node has children, traverse until we have a leaf node. Leaf nodes
	    // can be either text nodes, or other void DOM nodes.
	    while (isDOMElement(node) && node.childNodes.length) {
	      var i = isLast ? node.childNodes.length - 1 : 0;
	      node = getEditableChild(node, i, isLast ? 'backward' : 'forward');
	    }
	    // Determine the new offset inside the text node.
	    offset = isLast && node.textContent != null ? node.textContent.length : 0;
	  }
	  // Return the node and offset.
	  return [node, offset];
	};
	/**
	 * Determines whether the active element is nested within a shadowRoot
	 */
	var hasShadowRoot = node => {
	  var parent = node && node.parentNode;
	  while (parent) {
	    if (parent.toString() === '[object ShadowRoot]') {
	      return true;
	    }
	    parent = parent.parentNode;
	  }
	  return false;
	};
	/**
	 * Get the nearest editable child and index at `index` in a `parent`, preferring
	 * `direction`.
	 */
	var getEditableChildAndIndex = (parent, index, direction) => {
	  var {
	    childNodes
	  } = parent;
	  var child = childNodes[index];
	  var i = index;
	  var triedForward = false;
	  var triedBackward = false;
	  // While the child is a comment node, or an element node with no children,
	  // keep iterating to find a sibling non-void, non-comment node.
	  while (isDOMComment(child) || isDOMElement(child) && child.childNodes.length === 0 || isDOMElement(child) && child.getAttribute('contenteditable') === 'false') {
	    if (triedForward && triedBackward) {
	      break;
	    }
	    if (i >= childNodes.length) {
	      triedForward = true;
	      i = index - 1;
	      direction = 'backward';
	      continue;
	    }
	    if (i < 0) {
	      triedBackward = true;
	      i = index + 1;
	      direction = 'forward';
	      continue;
	    }
	    child = childNodes[i];
	    index = i;
	    i += direction === 'forward' ? 1 : -1;
	  }
	  return [child, index];
	};
	/**
	 * Get the nearest editable child at `index` in a `parent`, preferring
	 * `direction`.
	 */
	var getEditableChild = (parent, index, direction) => {
	  var [child] = getEditableChildAndIndex(parent, index, direction);
	  return child;
	};
	/**
	 * Get a plaintext representation of the content of a node, accounting for block
	 * elements which get a newline appended.
	 *
	 * The domNode must be attached to the DOM.
	 */
	var getPlainText = domNode => {
	  var text = '';
	  if (isDOMText(domNode) && domNode.nodeValue) {
	    return domNode.nodeValue;
	  }
	  if (isDOMElement(domNode)) {
	    for (var childNode of Array.from(domNode.childNodes)) {
	      text += getPlainText(childNode);
	    }
	    var display = getComputedStyle(domNode).getPropertyValue('display');
	    if (display === 'block' || display === 'list' || domNode.tagName === 'BR') {
	      text += '\n';
	    }
	  }
	  return text;
	};
	/**
	 * Get x-slate-fragment attribute from data-slate-fragment
	 */
	var catchSlateFragment = /data-slate-fragment="(.+?)"/m;
	var getSlateFragmentAttribute = dataTransfer => {
	  var htmlData = dataTransfer.getData('text/html');
	  var [, fragment] = htmlData.match(catchSlateFragment) || [];
	  return fragment;
	};
	/**
	 * Get the dom selection from Shadow Root if possible, otherwise from the document
	 */
	var getSelection = root => {
	  if (root.getSelection != null) {
	    return root.getSelection();
	  }
	  return document.getSelection();
	};
	/**
	 * Check whether a mutation originates from a editable element inside the editor.
	 */
	var isTrackedMutation = (editor, mutation, batch) => {
	  var {
	    target
	  } = mutation;
	  if (isDOMElement(target) && target.matches('[contentEditable="false"]')) {
	    return false;
	  }
	  var {
	    document
	  } = ReactEditor.getWindow(editor);
	  if (document.contains(target)) {
	    return ReactEditor.hasDOMNode(editor, target, {
	      editable: true
	    });
	  }
	  var parentMutation = batch.find(_ref => {
	    var {
	      addedNodes,
	      removedNodes
	    } = _ref;
	    for (var node of addedNodes) {
	      if (node === target || node.contains(target)) {
	        return true;
	      }
	    }
	    for (var _node of removedNodes) {
	      if (_node === target || _node.contains(target)) {
	        return true;
	      }
	    }
	  });
	  if (!parentMutation || parentMutation === mutation) {
	    return false;
	  }
	  // Target add/remove is tracked. Track the mutation if we track the parent mutation.
	  return isTrackedMutation(editor, parentMutation, batch);
	};
	/**
	 * Retrieves the deepest active element in the DOM, considering nested shadow DOMs.
	 */
	var getActiveElement = () => {
	  var activeElement = document.activeElement;
	  while ((_activeElement = activeElement) !== null && _activeElement !== void 0 && _activeElement.shadowRoot && (_activeElement$shadow = activeElement.shadowRoot) !== null && _activeElement$shadow !== void 0 && _activeElement$shadow.activeElement) {
	    var _activeElement, _activeElement$shadow, _activeElement2;
	    activeElement = (_activeElement2 = activeElement) === null || _activeElement2 === void 0 || (_activeElement2 = _activeElement2.shadowRoot) === null || _activeElement2 === void 0 ? void 0 : _activeElement2.activeElement;
	  }
	  return activeElement;
	};

	/**
	 * An auto-incrementing identifier for keys.
	 */
	var n = 0;
	/**
	 * A class that keeps track of a key string. We use a full class here because we
	 * want to be able to use them as keys in `WeakMap` objects.
	 */
	class Key {
	  constructor() {
	    _defineProperty(this, "id", void 0);
	    this.id = "".concat(n++);
	  }
	}

	// eslint-disable-next-line no-redeclare
	var ReactEditor = {
	  androidPendingDiffs: editor => EDITOR_TO_PENDING_DIFFS.get(editor),
	  androidScheduleFlush: editor => {
	    var _EDITOR_TO_SCHEDULE_F;
	    (_EDITOR_TO_SCHEDULE_F = EDITOR_TO_SCHEDULE_FLUSH.get(editor)) === null || _EDITOR_TO_SCHEDULE_F === void 0 || _EDITOR_TO_SCHEDULE_F();
	  },
	  blur: editor => {
	    var el = ReactEditor.toDOMNode(editor, editor);
	    var root = ReactEditor.findDocumentOrShadowRoot(editor);
	    IS_FOCUSED.set(editor, false);
	    if (root.activeElement === el) {
	      el.blur();
	    }
	  },
	  deselect: editor => {
	    var {
	      selection
	    } = editor;
	    var root = ReactEditor.findDocumentOrShadowRoot(editor);
	    var domSelection = getSelection(root);
	    if (domSelection && domSelection.rangeCount > 0) {
	      domSelection.removeAllRanges();
	    }
	    if (selection) {
	      Transforms.deselect(editor);
	    }
	  },
	  findDocumentOrShadowRoot: editor => {
	    var el = ReactEditor.toDOMNode(editor, editor);
	    var root = el.getRootNode();
	    if (root instanceof Document || root instanceof ShadowRoot) {
	      return root;
	    }
	    return el.ownerDocument;
	  },
	  findEventRange: (editor, event) => {
	    if ('nativeEvent' in event) {
	      event = event.nativeEvent;
	    }
	    var {
	      clientX: x,
	      clientY: y,
	      target
	    } = event;
	    if (x == null || y == null) {
	      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(event));
	    }
	    var node = ReactEditor.toSlateNode(editor, event.target);
	    var path = ReactEditor.findPath(editor, node);
	    // If the drop target is inside a void node, move it into either the
	    // next or previous node, depending on which side the `x` and `y`
	    // coordinates are closest to.
	    if (Element$3.isElement(node) && Editor.isVoid(editor, node)) {
	      var rect = target.getBoundingClientRect();
	      var isPrev = editor.isInline(node) ? x - rect.left < rect.left + rect.width - x : y - rect.top < rect.top + rect.height - y;
	      var edge = Editor.point(editor, path, {
	        edge: isPrev ? 'start' : 'end'
	      });
	      var point = isPrev ? Editor.before(editor, edge) : Editor.after(editor, edge);
	      if (point) {
	        var _range = Editor.range(editor, point);
	        return _range;
	      }
	    }
	    // Else resolve a range from the caret position where the drop occured.
	    var domRange;
	    var {
	      document
	    } = ReactEditor.getWindow(editor);
	    // COMPAT: In Firefox, `caretRangeFromPoint` doesn't exist. (2016/07/25)
	    if (document.caretRangeFromPoint) {
	      domRange = document.caretRangeFromPoint(x, y);
	    } else {
	      var position = document.caretPositionFromPoint(x, y);
	      if (position) {
	        domRange = document.createRange();
	        domRange.setStart(position.offsetNode, position.offset);
	        domRange.setEnd(position.offsetNode, position.offset);
	      }
	    }
	    if (!domRange) {
	      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(event));
	    }
	    // Resolve a Slate range from the DOM range.
	    var range = ReactEditor.toSlateRange(editor, domRange, {
	      exactMatch: false,
	      suppressThrow: false
	    });
	    return range;
	  },
	  findKey: (editor, node) => {
	    var key = NODE_TO_KEY.get(node);
	    if (!key) {
	      key = new Key();
	      NODE_TO_KEY.set(node, key);
	    }
	    return key;
	  },
	  findPath: (editor, node) => {
	    var path = [];
	    var child = node;
	    while (true) {
	      var parent = NODE_TO_PARENT.get(child);
	      if (parent == null) {
	        if (Editor.isEditor(child)) {
	          return path;
	        } else {
	          break;
	        }
	      }
	      var i = NODE_TO_INDEX.get(child);
	      if (i == null) {
	        break;
	      }
	      path.unshift(i);
	      child = parent;
	    }
	    throw new Error("Unable to find the path for Slate node: ".concat(Scrubber.stringify(node)));
	  },
	  focus: function focus(editor) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	      retries: 5
	    };
	    // Return if already focused
	    if (IS_FOCUSED.get(editor)) {
	      return;
	    }
	    // Retry setting focus if the editor has pending operations.
	    // The DOM (selection) is unstable while changes are applied.
	    // Retry until retries are exhausted or editor is focused.
	    if (options.retries <= 0) {
	      throw new Error('Could not set focus, editor seems stuck with pending operations');
	    }
	    if (editor.operations.length > 0) {
	      setTimeout(() => {
	        ReactEditor.focus(editor, {
	          retries: options.retries - 1
	        });
	      }, 10);
	      return;
	    }
	    var el = ReactEditor.toDOMNode(editor, editor);
	    var root = ReactEditor.findDocumentOrShadowRoot(editor);
	    if (root.activeElement !== el) {
	      // Ensure that the DOM selection state is set to the editor's selection
	      if (editor.selection && root instanceof Document) {
	        var domSelection = getSelection(root);
	        var domRange = ReactEditor.toDOMRange(editor, editor.selection);
	        domSelection === null || domSelection === void 0 || domSelection.removeAllRanges();
	        domSelection === null || domSelection === void 0 || domSelection.addRange(domRange);
	      }
	      // Create a new selection in the top of the document if missing
	      if (!editor.selection) {
	        Transforms.select(editor, Editor.start(editor, []));
	      }
	      // IS_FOCUSED should be set before calling el.focus() to ensure that
	      // FocusedContext is updated to the correct value
	      IS_FOCUSED.set(editor, true);
	      el.focus({
	        preventScroll: true
	      });
	    }
	  },
	  getWindow: editor => {
	    var window = EDITOR_TO_WINDOW.get(editor);
	    if (!window) {
	      throw new Error('Unable to find a host window element for this editor');
	    }
	    return window;
	  },
	  hasDOMNode: function hasDOMNode(editor, target) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    var {
	      editable = false
	    } = options;
	    var editorEl = ReactEditor.toDOMNode(editor, editor);
	    var targetEl;
	    // COMPAT: In Firefox, reading `target.nodeType` will throw an error if
	    // target is originating from an internal "restricted" element (e.g. a
	    // stepper arrow on a number input). (2018/05/04)
	    // https://github.com/ianstormtaylor/slate/issues/1819
	    try {
	      targetEl = isDOMElement(target) ? target : target.parentElement;
	    } catch (err) {
	      if (err instanceof Error && !err.message.includes('Permission denied to access property "nodeType"')) {
	        throw err;
	      }
	    }
	    if (!targetEl) {
	      return false;
	    }
	    return targetEl.closest("[data-slate-editor]") === editorEl && (!editable || targetEl.isContentEditable ? true : typeof targetEl.isContentEditable === 'boolean' &&
	    // isContentEditable exists only on HTMLElement, and on other nodes it will be undefined
	    // this is the core logic that lets you know you got the right editor.selection instead of null when editor is contenteditable="false"(readOnly)
	    targetEl.closest('[contenteditable="false"]') === editorEl || !!targetEl.getAttribute('data-slate-zero-width'));
	  },
	  hasEditableTarget: (editor, target) => isDOMNode(target) && ReactEditor.hasDOMNode(editor, target, {
	    editable: true
	  }),
	  hasRange: (editor, range) => {
	    var {
	      anchor,
	      focus
	    } = range;
	    return Editor.hasPath(editor, anchor.path) && Editor.hasPath(editor, focus.path);
	  },
	  hasSelectableTarget: (editor, target) => ReactEditor.hasEditableTarget(editor, target) || ReactEditor.isTargetInsideNonReadonlyVoid(editor, target),
	  hasTarget: (editor, target) => isDOMNode(target) && ReactEditor.hasDOMNode(editor, target),
	  insertData: (editor, data) => {
	    editor.insertData(data);
	  },
	  insertFragmentData: (editor, data) => editor.insertFragmentData(data),
	  insertTextData: (editor, data) => editor.insertTextData(data),
	  isComposing: editor => {
	    return !!IS_COMPOSING.get(editor);
	  },
	  isFocused: editor => !!IS_FOCUSED.get(editor),
	  isReadOnly: editor => !!IS_READ_ONLY.get(editor),
	  isTargetInsideNonReadonlyVoid: (editor, target) => {
	    if (IS_READ_ONLY.get(editor)) return false;
	    var slateNode = ReactEditor.hasTarget(editor, target) && ReactEditor.toSlateNode(editor, target);
	    return Element$3.isElement(slateNode) && Editor.isVoid(editor, slateNode);
	  },
	  setFragmentData: (editor, data, originEvent) => editor.setFragmentData(data, originEvent),
	  toDOMNode: (editor, node) => {
	    var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor);
	    var domNode = Editor.isEditor(node) ? EDITOR_TO_ELEMENT.get(editor) : KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.get(ReactEditor.findKey(editor, node));
	    if (!domNode) {
	      throw new Error("Cannot resolve a DOM node from Slate node: ".concat(Scrubber.stringify(node)));
	    }
	    return domNode;
	  },
	  toDOMPoint: (editor, point) => {
	    var [node] = Editor.node(editor, point.path);
	    var el = ReactEditor.toDOMNode(editor, node);
	    var domPoint;
	    // If we're inside a void node, force the offset to 0, otherwise the zero
	    // width spacing character will result in an incorrect offset of 1
	    if (Editor.void(editor, {
	      at: point
	    })) {
	      point = {
	        path: point.path,
	        offset: 0
	      };
	    }
	    // For each leaf, we need to isolate its content, which means filtering
	    // to its direct text and zero-width spans. (We have to filter out any
	    // other siblings that may have been rendered alongside them.)
	    var selector = "[data-slate-string], [data-slate-zero-width]";
	    var texts = Array.from(el.querySelectorAll(selector));
	    var start = 0;
	    for (var i = 0; i < texts.length; i++) {
	      var text = texts[i];
	      var domNode = text.childNodes[0];
	      if (domNode == null || domNode.textContent == null) {
	        continue;
	      }
	      var {
	        length
	      } = domNode.textContent;
	      var attr = text.getAttribute('data-slate-length');
	      var trueLength = attr == null ? length : parseInt(attr, 10);
	      var end = start + trueLength;
	      // Prefer putting the selection inside the mark placeholder to ensure
	      // composed text is displayed with the correct marks.
	      var nextText = texts[i + 1];
	      if (point.offset === end && nextText !== null && nextText !== void 0 && nextText.hasAttribute('data-slate-mark-placeholder')) {
	        var _nextText$textContent;
	        var domText = nextText.childNodes[0];
	        domPoint = [
	        // COMPAT: If we don't explicity set the dom point to be on the actual
	        // dom text element, chrome will put the selection behind the actual dom
	        // text element, causing domRange.getBoundingClientRect() calls on a collapsed
	        // selection to return incorrect zero values (https://bugs.chromium.org/p/chromium/issues/detail?id=435438)
	        // which will cause issues when scrolling to it.
	        domText instanceof DOMText ? domText : nextText, (_nextText$textContent = nextText.textContent) !== null && _nextText$textContent !== void 0 && _nextText$textContent.startsWith('\uFEFF') ? 1 : 0];
	        break;
	      }
	      if (point.offset <= end) {
	        var offset = Math.min(length, Math.max(0, point.offset - start));
	        domPoint = [domNode, offset];
	        break;
	      }
	      start = end;
	    }
	    if (!domPoint) {
	      throw new Error("Cannot resolve a DOM point from Slate point: ".concat(Scrubber.stringify(point)));
	    }
	    return domPoint;
	  },
	  toDOMRange: (editor, range) => {
	    var {
	      anchor,
	      focus
	    } = range;
	    var isBackward = Range.isBackward(range);
	    var domAnchor = ReactEditor.toDOMPoint(editor, anchor);
	    var domFocus = Range.isCollapsed(range) ? domAnchor : ReactEditor.toDOMPoint(editor, focus);
	    var window = ReactEditor.getWindow(editor);
	    var domRange = window.document.createRange();
	    var [startNode, startOffset] = isBackward ? domFocus : domAnchor;
	    var [endNode, endOffset] = isBackward ? domAnchor : domFocus;
	    // A slate Point at zero-width Leaf always has an offset of 0 but a native DOM selection at
	    // zero-width node has an offset of 1 so we have to check if we are in a zero-width node and
	    // adjust the offset accordingly.
	    var startEl = isDOMElement(startNode) ? startNode : startNode.parentElement;
	    var isStartAtZeroWidth = !!startEl.getAttribute('data-slate-zero-width');
	    var endEl = isDOMElement(endNode) ? endNode : endNode.parentElement;
	    var isEndAtZeroWidth = !!endEl.getAttribute('data-slate-zero-width');
	    domRange.setStart(startNode, isStartAtZeroWidth ? 1 : startOffset);
	    domRange.setEnd(endNode, isEndAtZeroWidth ? 1 : endOffset);
	    return domRange;
	  },
	  toSlateNode: (editor, domNode) => {
	    var domEl = isDOMElement(domNode) ? domNode : domNode.parentElement;
	    if (domEl && !domEl.hasAttribute('data-slate-node')) {
	      domEl = domEl.closest("[data-slate-node]");
	    }
	    var node = domEl ? ELEMENT_TO_NODE.get(domEl) : null;
	    if (!node) {
	      throw new Error("Cannot resolve a Slate node from DOM node: ".concat(domEl));
	    }
	    return node;
	  },
	  toSlatePoint: (editor, domPoint, options) => {
	    var {
	      exactMatch,
	      suppressThrow
	    } = options;
	    var [nearestNode, nearestOffset] = exactMatch ? domPoint : normalizeDOMPoint(domPoint);
	    var parentNode = nearestNode.parentNode;
	    var textNode = null;
	    var offset = 0;
	    if (parentNode) {
	      var _domNode$textContent, _domNode$textContent2;
	      var editorEl = ReactEditor.toDOMNode(editor, editor);
	      var potentialVoidNode = parentNode.closest('[data-slate-void="true"]');
	      // Need to ensure that the closest void node is actually a void node
	      // within this editor, and not a void node within some parent editor. This can happen
	      // if this editor is within a void node of another editor ("nested editors", like in
	      // the "Editable Voids" example on the docs site).
	      var voidNode = potentialVoidNode && editorEl.contains(potentialVoidNode) ? potentialVoidNode : null;
	      var leafNode = parentNode.closest('[data-slate-leaf]');
	      var domNode = null;
	      // Calculate how far into the text node the `nearestNode` is, so that we
	      // can determine what the offset relative to the text node is.
	      if (leafNode) {
	        textNode = leafNode.closest('[data-slate-node="text"]');
	        if (textNode) {
	          var window = ReactEditor.getWindow(editor);
	          var range = window.document.createRange();
	          range.setStart(textNode, 0);
	          range.setEnd(nearestNode, nearestOffset);
	          var contents = range.cloneContents();
	          var removals = [...Array.prototype.slice.call(contents.querySelectorAll('[data-slate-zero-width]')), ...Array.prototype.slice.call(contents.querySelectorAll('[contenteditable=false]'))];
	          removals.forEach(el => {
	            // COMPAT: While composing at the start of a text node, some keyboards put
	            // the text content inside the zero width space.
	            if (IS_ANDROID && !exactMatch && el.hasAttribute('data-slate-zero-width') && el.textContent.length > 0 && el.textContext !== '\uFEFF') {
	              if (el.textContent.startsWith('\uFEFF')) {
	                el.textContent = el.textContent.slice(1);
	              }
	              return;
	            }
	            el.parentNode.removeChild(el);
	          });
	          // COMPAT: Edge has a bug where Range.prototype.toString() will
	          // convert \n into \r\n. The bug causes a loop when slate-react
	          // attempts to reposition its cursor to match the native position. Use
	          // textContent.length instead.
	          // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10291116/
	          offset = contents.textContent.length;
	          domNode = textNode;
	        }
	      } else if (voidNode) {
	        // For void nodes, the element with the offset key will be a cousin, not an
	        // ancestor, so find it by going down from the nearest void parent and taking the
	        // first one that isn't inside a nested editor.
	        var leafNodes = voidNode.querySelectorAll('[data-slate-leaf]');
	        for (var index = 0; index < leafNodes.length; index++) {
	          var current = leafNodes[index];
	          if (ReactEditor.hasDOMNode(editor, current)) {
	            leafNode = current;
	            break;
	          }
	        }
	        // COMPAT: In read-only editors the leaf is not rendered.
	        if (!leafNode) {
	          offset = 1;
	        } else {
	          textNode = leafNode.closest('[data-slate-node="text"]');
	          domNode = leafNode;
	          offset = domNode.textContent.length;
	          domNode.querySelectorAll('[data-slate-zero-width]').forEach(el => {
	            offset -= el.textContent.length;
	          });
	        }
	      }
	      if (domNode && offset === domNode.textContent.length &&
	      // COMPAT: Android IMEs might remove the zero width space while composing,
	      // and we don't add it for line-breaks.
	      IS_ANDROID && domNode.getAttribute('data-slate-zero-width') === 'z' && (_domNode$textContent = domNode.textContent) !== null && _domNode$textContent !== void 0 && _domNode$textContent.startsWith('\uFEFF') && (
	      // COMPAT: If the parent node is a Slate zero-width space, editor is
	      // because the text node should have no characters. However, during IME
	      // composition the ASCII characters will be prepended to the zero-width
	      // space, so subtract 1 from the offset to account for the zero-width
	      // space character.
	      parentNode.hasAttribute('data-slate-zero-width') ||
	      // COMPAT: In Firefox, `range.cloneContents()` returns an extra trailing '\n'
	      // when the document ends with a new-line character. This results in the offset
	      // length being off by one, so we need to subtract one to account for this.
	      IS_FIREFOX && (_domNode$textContent2 = domNode.textContent) !== null && _domNode$textContent2 !== void 0 && _domNode$textContent2.endsWith('\n\n'))) {
	        offset--;
	      }
	    }
	    if (IS_ANDROID && !textNode && !exactMatch) {
	      var node = parentNode.hasAttribute('data-slate-node') ? parentNode : parentNode.closest('[data-slate-node]');
	      if (node && ReactEditor.hasDOMNode(editor, node, {
	        editable: true
	      })) {
	        var _slateNode = ReactEditor.toSlateNode(editor, node);
	        var {
	          path: _path,
	          offset: _offset
	        } = Editor.start(editor, ReactEditor.findPath(editor, _slateNode));
	        if (!node.querySelector('[data-slate-leaf]')) {
	          _offset = nearestOffset;
	        }
	        return {
	          path: _path,
	          offset: _offset
	        };
	      }
	    }
	    if (!textNode) {
	      if (suppressThrow) {
	        return null;
	      }
	      throw new Error("Cannot resolve a Slate point from DOM point: ".concat(domPoint));
	    }
	    // COMPAT: If someone is clicking from one Slate editor into another,
	    // the select event fires twice, once for the old editor's `element`
	    // first, and then afterwards for the correct `element`. (2017/03/03)
	    var slateNode = ReactEditor.toSlateNode(editor, textNode);
	    var path = ReactEditor.findPath(editor, slateNode);
	    return {
	      path,
	      offset
	    };
	  },
	  toSlateRange: (editor, domRange, options) => {
	    var _focusNode$textConten;
	    var {
	      exactMatch,
	      suppressThrow
	    } = options;
	    var el = isDOMSelection(domRange) ? domRange.anchorNode : domRange.startContainer;
	    var anchorNode;
	    var anchorOffset;
	    var focusNode;
	    var focusOffset;
	    var isCollapsed;
	    if (el) {
	      if (isDOMSelection(domRange)) {
	        // COMPAT: In firefox the normal seletion way does not work
	        // (https://github.com/ianstormtaylor/slate/pull/5486#issue-1820720223)
	        if (IS_FIREFOX && domRange.rangeCount > 1) {
	          focusNode = domRange.focusNode; // Focus node works fine
	          var firstRange = domRange.getRangeAt(0);
	          var lastRange = domRange.getRangeAt(domRange.rangeCount - 1);
	          // Here we are in the contenteditable mode of a table in firefox
	          if (focusNode instanceof HTMLTableRowElement && firstRange.startContainer instanceof HTMLTableRowElement && lastRange.startContainer instanceof HTMLTableRowElement) {
	            // HTMLElement, becouse Element is a slate element
	            function getLastChildren(element) {
	              if (element.childElementCount > 0) {
	                return getLastChildren(element.children[0]);
	              } else {
	                return element;
	              }
	            }
	            var firstNodeRow = firstRange.startContainer;
	            var lastNodeRow = lastRange.startContainer;
	            // This should never fail as "The HTMLElement interface represents any HTML element."
	            var firstNode = getLastChildren(firstNodeRow.children[firstRange.startOffset]);
	            var lastNode = getLastChildren(lastNodeRow.children[lastRange.startOffset]);
	            // Zero, as we allways take the right one as the anchor point
	            focusOffset = 0;
	            if (lastNode.childNodes.length > 0) {
	              anchorNode = lastNode.childNodes[0];
	            } else {
	              anchorNode = lastNode;
	            }
	            if (firstNode.childNodes.length > 0) {
	              focusNode = firstNode.childNodes[0];
	            } else {
	              focusNode = firstNode;
	            }
	            if (lastNode instanceof HTMLElement) {
	              anchorOffset = lastNode.innerHTML.length;
	            } else {
	              // Fallback option
	              anchorOffset = 0;
	            }
	          } else {
	            // This is the read only mode of a firefox table
	            // Right to left
	            if (firstRange.startContainer === focusNode) {
	              anchorNode = lastRange.endContainer;
	              anchorOffset = lastRange.endOffset;
	              focusOffset = firstRange.startOffset;
	            } else {
	              // Left to right
	              anchorNode = firstRange.startContainer;
	              anchorOffset = firstRange.endOffset;
	              focusOffset = lastRange.startOffset;
	            }
	          }
	        } else {
	          anchorNode = domRange.anchorNode;
	          anchorOffset = domRange.anchorOffset;
	          focusNode = domRange.focusNode;
	          focusOffset = domRange.focusOffset;
	        }
	        // COMPAT: There's a bug in chrome that always returns `true` for
	        // `isCollapsed` for a Selection that comes from a ShadowRoot.
	        // (2020/08/08)
	        // https://bugs.chromium.org/p/chromium/issues/detail?id=447523
	        // IsCollapsed might not work in firefox, but this will
	        if (IS_CHROME && hasShadowRoot(anchorNode) || IS_FIREFOX) {
	          isCollapsed = domRange.anchorNode === domRange.focusNode && domRange.anchorOffset === domRange.focusOffset;
	        } else {
	          isCollapsed = domRange.isCollapsed;
	        }
	      } else {
	        anchorNode = domRange.startContainer;
	        anchorOffset = domRange.startOffset;
	        focusNode = domRange.endContainer;
	        focusOffset = domRange.endOffset;
	        isCollapsed = domRange.collapsed;
	      }
	    }
	    if (anchorNode == null || focusNode == null || anchorOffset == null || focusOffset == null) {
	      throw new Error("Cannot resolve a Slate range from DOM range: ".concat(domRange));
	    }
	    // COMPAT: Firefox sometimes includes an extra \n (rendered by TextString
	    // when isTrailing is true) in the focusOffset, resulting in an invalid
	    // Slate point. (2023/11/01)
	    if (IS_FIREFOX && (_focusNode$textConten = focusNode.textContent) !== null && _focusNode$textConten !== void 0 && _focusNode$textConten.endsWith('\n\n') && focusOffset === focusNode.textContent.length) {
	      focusOffset--;
	    }
	    // COMPAT: Triple-clicking a word in chrome will sometimes place the focus
	    // inside a `contenteditable="false"` DOM node following the word, which
	    // will cause `toSlatePoint` to throw an error. (2023/03/07)
	    if ('getAttribute' in focusNode && focusNode.getAttribute('contenteditable') === 'false' && focusNode.getAttribute('data-slate-void') !== 'true') {
	      var _anchorNode$textConte;
	      focusNode = anchorNode;
	      focusOffset = ((_anchorNode$textConte = anchorNode.textContent) === null || _anchorNode$textConte === void 0 ? void 0 : _anchorNode$textConte.length) || 0;
	    }
	    var anchor = ReactEditor.toSlatePoint(editor, [anchorNode, anchorOffset], {
	      exactMatch,
	      suppressThrow
	    });
	    if (!anchor) {
	      return null;
	    }
	    var focus = isCollapsed ? anchor : ReactEditor.toSlatePoint(editor, [focusNode, focusOffset], {
	      exactMatch,
	      suppressThrow
	    });
	    if (!focus) {
	      return null;
	    }
	    var range = {
	      anchor: anchor,
	      focus: focus
	    };
	    // if the selection is a hanging range that ends in a void
	    // and the DOM focus is an Element
	    // (meaning that the selection ends before the element)
	    // unhang the range to avoid mistakenly including the void
	    if (Range.isExpanded(range) && Range.isForward(range) && isDOMElement(focusNode) && Editor.void(editor, {
	      at: range.focus,
	      mode: 'highest'
	    })) {
	      range = Editor.unhangRange(editor, range, {
	        voids: true
	      });
	    }
	    return range;
	  }
	};

	/**
	 * Check whether a text diff was applied in a way we can perform the pending action on /
	 * recover the pending selection.
	 */
	function verifyDiffState(editor, textDiff) {
	  var {
	    path,
	    diff
	  } = textDiff;
	  if (!Editor.hasPath(editor, path)) {
	    return false;
	  }
	  var node = Node.get(editor, path);
	  if (!Text$1.isText(node)) {
	    return false;
	  }
	  if (diff.start !== node.text.length || diff.text.length === 0) {
	    return node.text.slice(diff.start, diff.start + diff.text.length) === diff.text;
	  }
	  var nextPath = Path.next(path);
	  if (!Editor.hasPath(editor, nextPath)) {
	    return false;
	  }
	  var nextNode = Node.get(editor, nextPath);
	  return Text$1.isText(nextNode) && nextNode.text.startsWith(diff.text);
	}
	function applyStringDiff(text) {
	  for (var _len = arguments.length, diffs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    diffs[_key - 1] = arguments[_key];
	  }
	  return diffs.reduce((text, diff) => text.slice(0, diff.start) + diff.text + text.slice(diff.end), text);
	}
	function longestCommonPrefixLength(str, another) {
	  var length = Math.min(str.length, another.length);
	  for (var i = 0; i < length; i++) {
	    if (str.charAt(i) !== another.charAt(i)) {
	      return i;
	    }
	  }
	  return length;
	}
	function longestCommonSuffixLength(str, another, max) {
	  var length = Math.min(str.length, another.length, max);
	  for (var i = 0; i < length; i++) {
	    if (str.charAt(str.length - i - 1) !== another.charAt(another.length - i - 1)) {
	      return i;
	    }
	  }
	  return length;
	}
	/**
	 * Remove redundant changes from the diff so that it spans the minimal possible range
	 */
	function normalizeStringDiff(targetText, diff) {
	  var {
	    start,
	    end,
	    text
	  } = diff;
	  var removedText = targetText.slice(start, end);
	  var prefixLength = longestCommonPrefixLength(removedText, text);
	  var max = Math.min(removedText.length - prefixLength, text.length - prefixLength);
	  var suffixLength = longestCommonSuffixLength(removedText, text, max);
	  var normalized = {
	    start: start + prefixLength,
	    end: end - suffixLength,
	    text: text.slice(prefixLength, text.length - suffixLength)
	  };
	  if (normalized.start === normalized.end && normalized.text.length === 0) {
	    return null;
	  }
	  return normalized;
	}
	/**
	 * Return a string diff that is equivalent to applying b after a spanning the range of
	 * both changes
	 */
	function mergeStringDiffs(targetText, a, b) {
	  var start = Math.min(a.start, b.start);
	  var overlap = Math.max(0, Math.min(a.start + a.text.length, b.end) - b.start);
	  var applied = applyStringDiff(targetText, a, b);
	  var sliceEnd = Math.max(b.start + b.text.length, a.start + a.text.length + (a.start + a.text.length > b.start ? b.text.length : 0) - overlap);
	  var text = applied.slice(start, sliceEnd);
	  var end = Math.max(a.end, b.end - a.text.length + (a.end - a.start));
	  return normalizeStringDiff(targetText, {
	    start,
	    end,
	    text
	  });
	}
	/**
	 * Get the slate range the text diff spans.
	 */
	function targetRange(textDiff) {
	  var {
	    path,
	    diff
	  } = textDiff;
	  return {
	    anchor: {
	      path,
	      offset: diff.start
	    },
	    focus: {
	      path,
	      offset: diff.end
	    }
	  };
	}
	/**
	 * Normalize a 'pending point' a.k.a a point based on the dom state before applying
	 * the pending diffs. Since the pending diffs might have been inserted with different
	 * marks we have to 'walk' the offset from the starting position to ensure we still
	 * have a valid point inside the document
	 */
	function normalizePoint(editor, point) {
	  var {
	    path,
	    offset
	  } = point;
	  if (!Editor.hasPath(editor, path)) {
	    return null;
	  }
	  var leaf = Node.get(editor, path);
	  if (!Text$1.isText(leaf)) {
	    return null;
	  }
	  var parentBlock = Editor.above(editor, {
	    match: n => Element$3.isElement(n) && Editor.isBlock(editor, n),
	    at: path
	  });
	  if (!parentBlock) {
	    return null;
	  }
	  while (offset > leaf.text.length) {
	    var entry = Editor.next(editor, {
	      at: path,
	      match: Text$1.isText
	    });
	    if (!entry || !Path.isDescendant(entry[1], parentBlock[1])) {
	      return null;
	    }
	    offset -= leaf.text.length;
	    leaf = entry[0];
	    path = entry[1];
	  }
	  return {
	    path,
	    offset
	  };
	}
	/**
	 * Normalize a 'pending selection' to ensure it's valid in the current document state.
	 */
	function normalizeRange(editor, range) {
	  var anchor = normalizePoint(editor, range.anchor);
	  if (!anchor) {
	    return null;
	  }
	  if (Range.isCollapsed(range)) {
	    return {
	      anchor,
	      focus: anchor
	    };
	  }
	  var focus = normalizePoint(editor, range.focus);
	  if (!focus) {
	    return null;
	  }
	  return {
	    anchor,
	    focus
	  };
	}
	function transformPendingPoint(editor, point, op) {
	  var pendingDiffs = EDITOR_TO_PENDING_DIFFS.get(editor);
	  var textDiff = pendingDiffs === null || pendingDiffs === void 0 ? void 0 : pendingDiffs.find(_ref => {
	    var {
	      path
	    } = _ref;
	    return Path.equals(path, point.path);
	  });
	  if (!textDiff || point.offset <= textDiff.diff.start) {
	    return Point.transform(point, op, {
	      affinity: 'backward'
	    });
	  }
	  var {
	    diff
	  } = textDiff;
	  // Point references location inside the diff => transform the point based on the location
	  // the diff will be applied to and add the offset inside the diff.
	  if (point.offset <= diff.start + diff.text.length) {
	    var _anchor = {
	      path: point.path,
	      offset: diff.start
	    };
	    var _transformed = Point.transform(_anchor, op, {
	      affinity: 'backward'
	    });
	    if (!_transformed) {
	      return null;
	    }
	    return {
	      path: _transformed.path,
	      offset: _transformed.offset + point.offset - diff.start
	    };
	  }
	  // Point references location after the diff
	  var anchor = {
	    path: point.path,
	    offset: point.offset - diff.text.length + diff.end - diff.start
	  };
	  var transformed = Point.transform(anchor, op, {
	    affinity: 'backward'
	  });
	  if (!transformed) {
	    return null;
	  }
	  if (op.type === 'split_node' && Path.equals(op.path, point.path) && anchor.offset < op.position && diff.start < op.position) {
	    return transformed;
	  }
	  return {
	    path: transformed.path,
	    offset: transformed.offset + diff.text.length - diff.end + diff.start
	  };
	}
	function transformPendingRange(editor, range, op) {
	  var anchor = transformPendingPoint(editor, range.anchor, op);
	  if (!anchor) {
	    return null;
	  }
	  if (Range.isCollapsed(range)) {
	    return {
	      anchor,
	      focus: anchor
	    };
	  }
	  var focus = transformPendingPoint(editor, range.focus, op);
	  if (!focus) {
	    return null;
	  }
	  return {
	    anchor,
	    focus
	  };
	}
	function transformTextDiff(textDiff, op) {
	  var {
	    path,
	    diff,
	    id
	  } = textDiff;
	  switch (op.type) {
	    case 'insert_text':
	      {
	        if (!Path.equals(op.path, path) || op.offset >= diff.end) {
	          return textDiff;
	        }
	        if (op.offset <= diff.start) {
	          return {
	            diff: {
	              start: op.text.length + diff.start,
	              end: op.text.length + diff.end,
	              text: diff.text
	            },
	            id,
	            path
	          };
	        }
	        return {
	          diff: {
	            start: diff.start,
	            end: diff.end + op.text.length,
	            text: diff.text
	          },
	          id,
	          path
	        };
	      }
	    case 'remove_text':
	      {
	        if (!Path.equals(op.path, path) || op.offset >= diff.end) {
	          return textDiff;
	        }
	        if (op.offset + op.text.length <= diff.start) {
	          return {
	            diff: {
	              start: diff.start - op.text.length,
	              end: diff.end - op.text.length,
	              text: diff.text
	            },
	            id,
	            path
	          };
	        }
	        return {
	          diff: {
	            start: diff.start,
	            end: diff.end - op.text.length,
	            text: diff.text
	          },
	          id,
	          path
	        };
	      }
	    case 'split_node':
	      {
	        if (!Path.equals(op.path, path) || op.position >= diff.end) {
	          return {
	            diff,
	            id,
	            path: Path.transform(path, op, {
	              affinity: 'backward'
	            })
	          };
	        }
	        if (op.position > diff.start) {
	          return {
	            diff: {
	              start: diff.start,
	              end: Math.min(op.position, diff.end),
	              text: diff.text
	            },
	            id,
	            path
	          };
	        }
	        return {
	          diff: {
	            start: diff.start - op.position,
	            end: diff.end - op.position,
	            text: diff.text
	          },
	          id,
	          path: Path.transform(path, op, {
	            affinity: 'forward'
	          })
	        };
	      }
	    case 'merge_node':
	      {
	        if (!Path.equals(op.path, path)) {
	          return {
	            diff,
	            id,
	            path: Path.transform(path, op)
	          };
	        }
	        return {
	          diff: {
	            start: diff.start + op.position,
	            end: diff.end + op.position,
	            text: diff.text
	          },
	          id,
	          path: Path.transform(path, op)
	        };
	      }
	  }
	  var newPath = Path.transform(path, op);
	  if (!newPath) {
	    return null;
	  }
	  return {
	    diff,
	    path: newPath,
	    id
	  };
	}

	function ownKeys$6(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread$6(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$6(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	// https://github.com/facebook/draft-js/blob/main/src/component/handlers/composition/DraftEditorCompositionHandler.js#L41
	// When using keyboard English association function, conpositionEnd triggered too fast, resulting in after `insertText` still maintain association state.
	var RESOLVE_DELAY = 25;
	// Time with no user interaction before the current user action is considered as done.
	var FLUSH_DELAY = 200;
	// Replace with `const debug = console.log` to debug
	var debug = function debug() {};
	// Type guard to check if a value is a DataTransfer
	var isDataTransfer = value => (value === null || value === void 0 ? void 0 : value.constructor.name) === 'DataTransfer';
	function createAndroidInputManager(_ref) {
	  var {
	    editor,
	    scheduleOnDOMSelectionChange,
	    onDOMSelectionChange
	  } = _ref;
	  var flushing = false;
	  var compositionEndTimeoutId = null;
	  var flushTimeoutId = null;
	  var actionTimeoutId = null;
	  var idCounter = 0;
	  var insertPositionHint = false;
	  var applyPendingSelection = () => {
	    var pendingSelection = EDITOR_TO_PENDING_SELECTION.get(editor);
	    EDITOR_TO_PENDING_SELECTION.delete(editor);
	    if (pendingSelection) {
	      var {
	        selection
	      } = editor;
	      var normalized = normalizeRange(editor, pendingSelection);
	      if (normalized && (!selection || !Range.equals(normalized, selection))) {
	        Transforms.select(editor, normalized);
	      }
	    }
	  };
	  var performAction = () => {
	    var action = EDITOR_TO_PENDING_ACTION.get(editor);
	    EDITOR_TO_PENDING_ACTION.delete(editor);
	    if (!action) {
	      return;
	    }
	    if (action.at) {
	      var target = Point.isPoint(action.at) ? normalizePoint(editor, action.at) : normalizeRange(editor, action.at);
	      if (!target) {
	        return;
	      }
	      var _targetRange = Editor.range(editor, target);
	      if (!editor.selection || !Range.equals(editor.selection, _targetRange)) {
	        Transforms.select(editor, target);
	      }
	    }
	    action.run();
	  };
	  var flush = () => {
	    if (flushTimeoutId) {
	      clearTimeout(flushTimeoutId);
	      flushTimeoutId = null;
	    }
	    if (actionTimeoutId) {
	      clearTimeout(actionTimeoutId);
	      actionTimeoutId = null;
	    }
	    if (!hasPendingDiffs() && !hasPendingAction()) {
	      applyPendingSelection();
	      return;
	    }
	    if (!flushing) {
	      flushing = true;
	      setTimeout(() => flushing = false);
	    }
	    if (hasPendingAction()) {
	      flushing = 'action';
	    }
	    var selectionRef = editor.selection && Editor.rangeRef(editor, editor.selection, {
	      affinity: 'forward'
	    });
	    EDITOR_TO_USER_MARKS.set(editor, editor.marks);
	    debug('flush', EDITOR_TO_PENDING_ACTION.get(editor), EDITOR_TO_PENDING_DIFFS.get(editor));
	    var scheduleSelectionChange = hasPendingDiffs();
	    var diff;
	    while (diff = (_EDITOR_TO_PENDING_DI = EDITOR_TO_PENDING_DIFFS.get(editor)) === null || _EDITOR_TO_PENDING_DI === void 0 ? void 0 : _EDITOR_TO_PENDING_DI[0]) {
	      var _EDITOR_TO_PENDING_DI, _EDITOR_TO_PENDING_DI2;
	      var pendingMarks = EDITOR_TO_PENDING_INSERTION_MARKS.get(editor);
	      if (pendingMarks !== undefined) {
	        EDITOR_TO_PENDING_INSERTION_MARKS.delete(editor);
	        editor.marks = pendingMarks;
	      }
	      if (pendingMarks && insertPositionHint === false) {
	        insertPositionHint = null;
	      }
	      var range = targetRange(diff);
	      if (!editor.selection || !Range.equals(editor.selection, range)) {
	        Transforms.select(editor, range);
	      }
	      if (diff.diff.text) {
	        Editor.insertText(editor, diff.diff.text);
	      } else {
	        Editor.deleteFragment(editor);
	      }
	      // Remove diff only after we have applied it to account for it when transforming
	      // pending ranges.
	      EDITOR_TO_PENDING_DIFFS.set(editor, (_EDITOR_TO_PENDING_DI2 = EDITOR_TO_PENDING_DIFFS.get(editor)) === null || _EDITOR_TO_PENDING_DI2 === void 0 ? void 0 : _EDITOR_TO_PENDING_DI2.filter(_ref2 => {
	        var {
	          id
	        } = _ref2;
	        return id !== diff.id;
	      }));
	      if (!verifyDiffState(editor, diff)) {
	        scheduleSelectionChange = false;
	        EDITOR_TO_PENDING_ACTION.delete(editor);
	        EDITOR_TO_USER_MARKS.delete(editor);
	        flushing = 'action';
	        // Ensure we don't restore the pending user (dom) selection
	        // since the document and dom state do not match.
	        EDITOR_TO_PENDING_SELECTION.delete(editor);
	        scheduleOnDOMSelectionChange.cancel();
	        onDOMSelectionChange.cancel();
	        selectionRef === null || selectionRef === void 0 || selectionRef.unref();
	      }
	    }
	    var selection = selectionRef === null || selectionRef === void 0 ? void 0 : selectionRef.unref();
	    if (selection && !EDITOR_TO_PENDING_SELECTION.get(editor) && (!editor.selection || !Range.equals(selection, editor.selection))) {
	      Transforms.select(editor, selection);
	    }
	    if (hasPendingAction()) {
	      performAction();
	      return;
	    }
	    // COMPAT: The selectionChange event is fired after the action is performed,
	    // so we have to manually schedule it to ensure we don't 'throw away' the selection
	    // while rendering if we have pending changes.
	    if (scheduleSelectionChange) {
	      scheduleOnDOMSelectionChange();
	    }
	    scheduleOnDOMSelectionChange.flush();
	    onDOMSelectionChange.flush();
	    applyPendingSelection();
	    var userMarks = EDITOR_TO_USER_MARKS.get(editor);
	    EDITOR_TO_USER_MARKS.delete(editor);
	    if (userMarks !== undefined) {
	      editor.marks = userMarks;
	      editor.onChange();
	    }
	  };
	  var handleCompositionEnd = _event => {
	    if (compositionEndTimeoutId) {
	      clearTimeout(compositionEndTimeoutId);
	    }
	    compositionEndTimeoutId = setTimeout(() => {
	      IS_COMPOSING.set(editor, false);
	      flush();
	    }, RESOLVE_DELAY);
	  };
	  var handleCompositionStart = _event => {
	    IS_COMPOSING.set(editor, true);
	    if (compositionEndTimeoutId) {
	      clearTimeout(compositionEndTimeoutId);
	      compositionEndTimeoutId = null;
	    }
	  };
	  var updatePlaceholderVisibility = function updatePlaceholderVisibility() {
	    var forceHide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	    var placeholderElement = EDITOR_TO_PLACEHOLDER_ELEMENT.get(editor);
	    if (!placeholderElement) {
	      return;
	    }
	    if (hasPendingDiffs() || forceHide) {
	      placeholderElement.style.display = 'none';
	      return;
	    }
	    placeholderElement.style.removeProperty('display');
	  };
	  var storeDiff = (path, diff) => {
	    var _EDITOR_TO_PENDING_DI3;
	    var pendingDiffs = (_EDITOR_TO_PENDING_DI3 = EDITOR_TO_PENDING_DIFFS.get(editor)) !== null && _EDITOR_TO_PENDING_DI3 !== void 0 ? _EDITOR_TO_PENDING_DI3 : [];
	    EDITOR_TO_PENDING_DIFFS.set(editor, pendingDiffs);
	    var target = Node.leaf(editor, path);
	    var idx = pendingDiffs.findIndex(change => Path.equals(change.path, path));
	    if (idx < 0) {
	      var normalized = normalizeStringDiff(target.text, diff);
	      if (normalized) {
	        pendingDiffs.push({
	          path,
	          diff,
	          id: idCounter++
	        });
	      }
	      updatePlaceholderVisibility();
	      return;
	    }
	    var merged = mergeStringDiffs(target.text, pendingDiffs[idx].diff, diff);
	    if (!merged) {
	      pendingDiffs.splice(idx, 1);
	      updatePlaceholderVisibility();
	      return;
	    }
	    pendingDiffs[idx] = _objectSpread$6(_objectSpread$6({}, pendingDiffs[idx]), {}, {
	      diff: merged
	    });
	  };
	  var scheduleAction = function scheduleAction(run) {
	    var {
	      at
	    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    insertPositionHint = false;
	    EDITOR_TO_PENDING_SELECTION.delete(editor);
	    scheduleOnDOMSelectionChange.cancel();
	    onDOMSelectionChange.cancel();
	    if (hasPendingAction()) {
	      flush();
	    }
	    EDITOR_TO_PENDING_ACTION.set(editor, {
	      at,
	      run
	    });
	    // COMPAT: When deleting before a non-contenteditable element chrome only fires a beforeinput,
	    // (no input) and doesn't perform any dom mutations. Without a flush timeout we would never flush
	    // in this case and thus never actually perform the action.
	    actionTimeoutId = setTimeout(flush);
	  };
	  var handleDOMBeforeInput = event => {
	    var _targetRange2;
	    if (flushTimeoutId) {
	      clearTimeout(flushTimeoutId);
	      flushTimeoutId = null;
	    }
	    var {
	      inputType: type
	    } = event;
	    var targetRange = null;
	    var data = event.dataTransfer || event.data || undefined;
	    if (insertPositionHint !== false && type !== 'insertText' && type !== 'insertCompositionText') {
	      insertPositionHint = false;
	    }
	    var [nativeTargetRange] = event.getTargetRanges();
	    if (nativeTargetRange) {
	      targetRange = ReactEditor.toSlateRange(editor, nativeTargetRange, {
	        exactMatch: false,
	        suppressThrow: true
	      });
	    }
	    // COMPAT: SelectionChange event is fired after the action is performed, so we
	    // have to manually get the selection here to ensure it's up-to-date.
	    var window = ReactEditor.getWindow(editor);
	    var domSelection = window.getSelection();
	    if (!targetRange && domSelection) {
	      nativeTargetRange = domSelection;
	      targetRange = ReactEditor.toSlateRange(editor, domSelection, {
	        exactMatch: false,
	        suppressThrow: true
	      });
	    }
	    targetRange = (_targetRange2 = targetRange) !== null && _targetRange2 !== void 0 ? _targetRange2 : editor.selection;
	    if (!targetRange) {
	      return;
	    }
	    // By default, the input manager tries to store text diffs so that we can
	    // defer flushing them at a later point in time. We don't want to flush
	    // for every input event as this can be expensive. However, there are some
	    // scenarios where we cannot safely store the text diff and must instead
	    // schedule an action to let Slate normalize the editor state.
	    var canStoreDiff = true;
	    if (type.startsWith('delete')) {
	      if (Range.isExpanded(targetRange)) {
	        var [_start, _end] = Range.edges(targetRange);
	        var _leaf = Node.leaf(editor, _start.path);
	        if (_leaf.text.length === _start.offset && _end.offset === 0) {
	          var next = Editor.next(editor, {
	            at: _start.path,
	            match: Text$1.isText
	          });
	          if (next && Path.equals(next[1], _end.path)) {
	            targetRange = {
	              anchor: _end,
	              focus: _end
	            };
	          }
	        }
	      }
	      var direction = type.endsWith('Backward') ? 'backward' : 'forward';
	      var [start, end] = Range.edges(targetRange);
	      var [leaf, path] = Editor.leaf(editor, start.path);
	      var diff = {
	        text: '',
	        start: start.offset,
	        end: end.offset
	      };
	      var pendingDiffs = EDITOR_TO_PENDING_DIFFS.get(editor);
	      var relevantPendingDiffs = pendingDiffs === null || pendingDiffs === void 0 ? void 0 : pendingDiffs.find(change => Path.equals(change.path, path));
	      var diffs = relevantPendingDiffs ? [relevantPendingDiffs.diff, diff] : [diff];
	      var text = applyStringDiff(leaf.text, ...diffs);
	      if (text.length === 0) {
	        // Text leaf will be removed, so we need to schedule an
	        // action to remove it so that Slate can normalize instead
	        // of storing as a diff
	        canStoreDiff = false;
	      }
	      if (Range.isExpanded(targetRange)) {
	        if (canStoreDiff && Path.equals(targetRange.anchor.path, targetRange.focus.path)) {
	          var point = {
	            path: targetRange.anchor.path,
	            offset: start.offset
	          };
	          var range = Editor.range(editor, point, point);
	          handleUserSelect(range);
	          return storeDiff(targetRange.anchor.path, {
	            text: '',
	            end: end.offset,
	            start: start.offset
	          });
	        }
	        return scheduleAction(() => Editor.deleteFragment(editor, {
	          direction
	        }), {
	          at: targetRange
	        });
	      }
	    }
	    switch (type) {
	      case 'deleteByComposition':
	      case 'deleteByCut':
	      case 'deleteByDrag':
	        {
	          return scheduleAction(() => Editor.deleteFragment(editor), {
	            at: targetRange
	          });
	        }
	      case 'deleteContent':
	      case 'deleteContentForward':
	        {
	          var {
	            anchor
	          } = targetRange;
	          if (canStoreDiff && Range.isCollapsed(targetRange)) {
	            var targetNode = Node.leaf(editor, anchor.path);
	            if (anchor.offset < targetNode.text.length) {
	              return storeDiff(anchor.path, {
	                text: '',
	                start: anchor.offset,
	                end: anchor.offset + 1
	              });
	            }
	          }
	          return scheduleAction(() => Editor.deleteForward(editor), {
	            at: targetRange
	          });
	        }
	      case 'deleteContentBackward':
	        {
	          var _nativeTargetRange;
	          var {
	            anchor: _anchor
	          } = targetRange;
	          // If we have a mismatch between the native and slate selection being collapsed
	          // we are most likely deleting a zero-width placeholder and thus should perform it
	          // as an action to ensure correct behavior (mostly happens with mark placeholders)
	          var nativeCollapsed = isDOMSelection(nativeTargetRange) ? nativeTargetRange.isCollapsed : !!((_nativeTargetRange = nativeTargetRange) !== null && _nativeTargetRange !== void 0 && _nativeTargetRange.collapsed);
	          if (canStoreDiff && nativeCollapsed && Range.isCollapsed(targetRange) && _anchor.offset > 0) {
	            return storeDiff(_anchor.path, {
	              text: '',
	              start: _anchor.offset - 1,
	              end: _anchor.offset
	            });
	          }
	          return scheduleAction(() => Editor.deleteBackward(editor), {
	            at: targetRange
	          });
	        }
	      case 'deleteEntireSoftLine':
	        {
	          return scheduleAction(() => {
	            Editor.deleteBackward(editor, {
	              unit: 'line'
	            });
	            Editor.deleteForward(editor, {
	              unit: 'line'
	            });
	          }, {
	            at: targetRange
	          });
	        }
	      case 'deleteHardLineBackward':
	        {
	          return scheduleAction(() => Editor.deleteBackward(editor, {
	            unit: 'block'
	          }), {
	            at: targetRange
	          });
	        }
	      case 'deleteSoftLineBackward':
	        {
	          return scheduleAction(() => Editor.deleteBackward(editor, {
	            unit: 'line'
	          }), {
	            at: targetRange
	          });
	        }
	      case 'deleteHardLineForward':
	        {
	          return scheduleAction(() => Editor.deleteForward(editor, {
	            unit: 'block'
	          }), {
	            at: targetRange
	          });
	        }
	      case 'deleteSoftLineForward':
	        {
	          return scheduleAction(() => Editor.deleteForward(editor, {
	            unit: 'line'
	          }), {
	            at: targetRange
	          });
	        }
	      case 'deleteWordBackward':
	        {
	          return scheduleAction(() => Editor.deleteBackward(editor, {
	            unit: 'word'
	          }), {
	            at: targetRange
	          });
	        }
	      case 'deleteWordForward':
	        {
	          return scheduleAction(() => Editor.deleteForward(editor, {
	            unit: 'word'
	          }), {
	            at: targetRange
	          });
	        }
	      case 'insertLineBreak':
	        {
	          return scheduleAction(() => Editor.insertSoftBreak(editor), {
	            at: targetRange
	          });
	        }
	      case 'insertParagraph':
	        {
	          return scheduleAction(() => Editor.insertBreak(editor), {
	            at: targetRange
	          });
	        }
	      case 'insertCompositionText':
	      case 'deleteCompositionText':
	      case 'insertFromComposition':
	      case 'insertFromDrop':
	      case 'insertFromPaste':
	      case 'insertFromYank':
	      case 'insertReplacementText':
	      case 'insertText':
	        {
	          if (isDataTransfer(data)) {
	            return scheduleAction(() => ReactEditor.insertData(editor, data), {
	              at: targetRange
	            });
	          }
	          var _text = data !== null && data !== void 0 ? data : '';
	          // COMPAT: If we are writing inside a placeholder, the ime inserts the text inside
	          // the placeholder itself and thus includes the zero-width space inside edit events.
	          if (EDITOR_TO_PENDING_INSERTION_MARKS.get(editor)) {
	            _text = _text.replace('\uFEFF', '');
	          }
	          // Pastes from the Android clipboard will generate `insertText` events.
	          // If the copied text contains any newlines, Android will append an
	          // extra newline to the end of the copied text.
	          if (type === 'insertText' && /.*\n.*\n$/.test(_text)) {
	            _text = _text.slice(0, -1);
	          }
	          // If the text includes a newline, split it at newlines and paste each component
	          // string, with soft breaks in between each.
	          if (_text.includes('\n')) {
	            return scheduleAction(() => {
	              var parts = _text.split('\n');
	              parts.forEach((line, i) => {
	                if (line) {
	                  Editor.insertText(editor, line);
	                }
	                if (i !== parts.length - 1) {
	                  Editor.insertSoftBreak(editor);
	                }
	              });
	            }, {
	              at: targetRange
	            });
	          }
	          if (Path.equals(targetRange.anchor.path, targetRange.focus.path)) {
	            var [_start2, _end2] = Range.edges(targetRange);
	            var _diff = {
	              start: _start2.offset,
	              end: _end2.offset,
	              text: _text
	            };
	            // COMPAT: Swiftkey has a weird bug where the target range of the 2nd word
	            // inserted after a mark placeholder is inserted with an anchor offset off by 1.
	            // So writing 'some text' will result in 'some ttext'. Luckily all 'normal' insert
	            // text events are fired with the correct target ranges, only the final 'insertComposition'
	            // isn't, so we can adjust the target range start offset if we are confident this is the
	            // swiftkey insert causing the issue.
	            if (_text && insertPositionHint && type === 'insertCompositionText') {
	              var hintPosition = insertPositionHint.start + insertPositionHint.text.search(/\S|$/);
	              var diffPosition = _diff.start + _diff.text.search(/\S|$/);
	              if (diffPosition === hintPosition + 1 && _diff.end === insertPositionHint.start + insertPositionHint.text.length) {
	                _diff.start -= 1;
	                insertPositionHint = null;
	                scheduleFlush();
	              } else {
	                insertPositionHint = false;
	              }
	            } else if (type === 'insertText') {
	              if (insertPositionHint === null) {
	                insertPositionHint = _diff;
	              } else if (insertPositionHint && Range.isCollapsed(targetRange) && insertPositionHint.end + insertPositionHint.text.length === _start2.offset) {
	                insertPositionHint = _objectSpread$6(_objectSpread$6({}, insertPositionHint), {}, {
	                  text: insertPositionHint.text + _text
	                });
	              } else {
	                insertPositionHint = false;
	              }
	            } else {
	              insertPositionHint = false;
	            }
	            if (canStoreDiff) {
	              storeDiff(_start2.path, _diff);
	              return;
	            }
	          }
	          return scheduleAction(() => Editor.insertText(editor, _text), {
	            at: targetRange
	          });
	        }
	    }
	  };
	  var hasPendingAction = () => {
	    return !!EDITOR_TO_PENDING_ACTION.get(editor);
	  };
	  var hasPendingDiffs = () => {
	    var _EDITOR_TO_PENDING_DI4;
	    return !!((_EDITOR_TO_PENDING_DI4 = EDITOR_TO_PENDING_DIFFS.get(editor)) !== null && _EDITOR_TO_PENDING_DI4 !== void 0 && _EDITOR_TO_PENDING_DI4.length);
	  };
	  var hasPendingChanges = () => {
	    return hasPendingAction() || hasPendingDiffs();
	  };
	  var isFlushing = () => {
	    return flushing;
	  };
	  var handleUserSelect = range => {
	    EDITOR_TO_PENDING_SELECTION.set(editor, range);
	    if (flushTimeoutId) {
	      clearTimeout(flushTimeoutId);
	      flushTimeoutId = null;
	    }
	    var {
	      selection
	    } = editor;
	    if (!range) {
	      return;
	    }
	    var pathChanged = !selection || !Path.equals(selection.anchor.path, range.anchor.path);
	    var parentPathChanged = !selection || !Path.equals(selection.anchor.path.slice(0, -1), range.anchor.path.slice(0, -1));
	    if (pathChanged && insertPositionHint || parentPathChanged) {
	      insertPositionHint = false;
	    }
	    if (pathChanged || hasPendingDiffs()) {
	      flushTimeoutId = setTimeout(flush, FLUSH_DELAY);
	    }
	  };
	  var handleInput = () => {
	    if (hasPendingAction() || !hasPendingDiffs()) {
	      flush();
	    }
	  };
	  var handleKeyDown = _ => {
	    // COMPAT: Swiftkey closes the keyboard when typing inside a empty node
	    // directly next to a non-contenteditable element (= the placeholder).
	    // The only event fired soon enough for us to allow hiding the placeholder
	    // without swiftkey picking it up is the keydown event, so we have to hide it
	    // here. See https://github.com/ianstormtaylor/slate/pull/4988#issuecomment-1201050535
	    if (!hasPendingDiffs()) {
	      updatePlaceholderVisibility(true);
	      setTimeout(updatePlaceholderVisibility);
	    }
	  };
	  var scheduleFlush = () => {
	    if (!hasPendingAction()) {
	      actionTimeoutId = setTimeout(flush);
	    }
	  };
	  var handleDomMutations = mutations => {
	    if (hasPendingDiffs() || hasPendingAction()) {
	      return;
	    }
	    if (mutations.some(mutation => isTrackedMutation(editor, mutation, mutations))) {
	      var _EDITOR_TO_FORCE_REND;
	      // Cause a re-render to restore the dom state if we encounter tracked mutations without
	      // a corresponding pending action.
	      (_EDITOR_TO_FORCE_REND = EDITOR_TO_FORCE_RENDER.get(editor)) === null || _EDITOR_TO_FORCE_REND === void 0 || _EDITOR_TO_FORCE_REND();
	    }
	  };
	  return {
	    flush,
	    scheduleFlush,
	    hasPendingDiffs,
	    hasPendingAction,
	    hasPendingChanges,
	    isFlushing,
	    handleUserSelect,
	    handleCompositionEnd,
	    handleCompositionStart,
	    handleDOMBeforeInput,
	    handleKeyDown,
	    handleDomMutations,
	    handleInput
	  };
	}

	function useIsMounted() {
	  var isMountedRef = reactExports.useRef(false);
	  reactExports.useEffect(() => {
	    isMountedRef.current = true;
	    return () => {
	      isMountedRef.current = false;
	    };
	  }, []);
	  return isMountedRef.current;
	}

	/**
	 * Prevent warning on SSR by falling back to useEffect when DOM isn't available
	 */
	var useIsomorphicLayoutEffect = CAN_USE_DOM ? reactExports.useLayoutEffect : reactExports.useEffect;

	function useMutationObserver(node, callback, options) {
	  var [mutationObserver] = reactExports.useState(() => new MutationObserver(callback));
	  useIsomorphicLayoutEffect(() => {
	    // Discard mutations caused during render phase. This works due to react calling
	    // useLayoutEffect synchronously after the render phase before the next tick.
	    mutationObserver.takeRecords();
	  });
	  reactExports.useEffect(() => {
	    if (!node.current) {
	      throw new Error('Failed to attach MutationObserver, `node` is undefined');
	    }
	    mutationObserver.observe(node.current, options);
	    return () => mutationObserver.disconnect();
	  }, [mutationObserver, node, options]);
	}

	var _excluded$3 = ["node"];
	function ownKeys$5(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread$5(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$5(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	var MUTATION_OBSERVER_CONFIG$1 = {
	  subtree: true,
	  childList: true,
	  characterData: true
	};
	var useAndroidInputManager = !IS_ANDROID ? () => null : _ref => {
	  var {
	      node
	    } = _ref,
	    options = _objectWithoutProperties(_ref, _excluded$3);
	  if (!IS_ANDROID) {
	    return null;
	  }
	  var editor = useSlateStatic();
	  var isMounted = useIsMounted();
	  var [inputManager] = reactExports.useState(() => createAndroidInputManager(_objectSpread$5({
	    editor
	  }, options)));
	  useMutationObserver(node, inputManager.handleDomMutations, MUTATION_OBSERVER_CONFIG$1);
	  EDITOR_TO_SCHEDULE_FLUSH.set(editor, inputManager.scheduleFlush);
	  if (isMounted) {
	    inputManager.flush();
	  }
	  return inputManager;
	};

	var _excluded$2 = ["anchor", "focus"],
	  _excluded2$1 = ["anchor", "focus"];
	var shallowCompare = (obj1, obj2) => Object.keys(obj1).length === Object.keys(obj2).length && Object.keys(obj1).every(key => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);
	var isDecorationFlagsEqual = (range, other) => {
	  var rangeOwnProps = _objectWithoutProperties(range, _excluded$2);
	  var otherOwnProps = _objectWithoutProperties(other, _excluded2$1);
	  return range[PLACEHOLDER_SYMBOL] === other[PLACEHOLDER_SYMBOL] && shallowCompare(rangeOwnProps, otherOwnProps);
	};
	/**
	 * Check if a list of decorator ranges are equal to another.
	 *
	 * PERF: this requires the two lists to also have the ranges inside them in the
	 * same order, but this is an okay constraint for us since decorations are
	 * kept in order, and the odd case where they aren't is okay to re-render for.
	 */
	var isElementDecorationsEqual = (list, another) => {
	  if (list.length !== another.length) {
	    return false;
	  }
	  for (var i = 0; i < list.length; i++) {
	    var range = list[i];
	    var other = another[i];
	    if (!Range.equals(range, other) || !isDecorationFlagsEqual(range, other)) {
	      return false;
	    }
	  }
	  return true;
	};
	/**
	 * Check if a list of decorator ranges are equal to another.
	 *
	 * PERF: this requires the two lists to also have the ranges inside them in the
	 * same order, but this is an okay constraint for us since decorations are
	 * kept in order, and the odd case where they aren't is okay to re-render for.
	 */
	var isTextDecorationsEqual = (list, another) => {
	  if (list.length !== another.length) {
	    return false;
	  }
	  for (var i = 0; i < list.length; i++) {
	    var range = list[i];
	    var other = another[i];
	    // compare only offsets because paths doesn't matter for text
	    if (range.anchor.offset !== other.anchor.offset || range.focus.offset !== other.focus.offset || !isDecorationFlagsEqual(range, other)) {
	      return false;
	    }
	  }
	  return true;
	};

	function ownKeys$4(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread$4(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$4(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	/**
	 * Leaf content strings.
	 */
	var String$1 = props => {
	  var {
	    isLast,
	    leaf,
	    parent,
	    text
	  } = props;
	  var editor = useSlateStatic();
	  var path = ReactEditor.findPath(editor, text);
	  var parentPath = Path.parent(path);
	  var isMarkPlaceholder = Boolean(leaf[MARK_PLACEHOLDER_SYMBOL]);
	  // COMPAT: Render text inside void nodes with a zero-width space.
	  // So the node can contain selection but the text is not visible.
	  if (editor.isVoid(parent)) {
	    return /*#__PURE__*/React.createElement(ZeroWidthString, {
	      length: Node.string(parent).length
	    });
	  }
	  // COMPAT: If this is the last text node in an empty block, render a zero-
	  // width space that will convert into a line break when copying and pasting
	  // to support expected plain text.
	  if (leaf.text === '' && parent.children[parent.children.length - 1] === text && !editor.isInline(parent) && Editor.string(editor, parentPath) === '') {
	    return /*#__PURE__*/React.createElement(ZeroWidthString, {
	      isLineBreak: true,
	      isMarkPlaceholder: isMarkPlaceholder
	    });
	  }
	  // COMPAT: If the text is empty, it's because it's on the edge of an inline
	  // node, so we render a zero-width space so that the selection can be
	  // inserted next to it still.
	  if (leaf.text === '') {
	    return /*#__PURE__*/React.createElement(ZeroWidthString, {
	      isMarkPlaceholder: isMarkPlaceholder
	    });
	  }
	  // COMPAT: Browsers will collapse trailing new lines at the end of blocks,
	  // so we need to add an extra trailing new lines to prevent that.
	  if (isLast && leaf.text.slice(-1) === '\n') {
	    return /*#__PURE__*/React.createElement(TextString, {
	      isTrailing: true,
	      text: leaf.text
	    });
	  }
	  return /*#__PURE__*/React.createElement(TextString, {
	    text: leaf.text
	  });
	};
	/**
	 * Leaf strings with text in them.
	 */
	var TextString = props => {
	  var {
	    text,
	    isTrailing = false
	  } = props;
	  var ref = reactExports.useRef(null);
	  var getTextContent = () => {
	    return "".concat(text !== null && text !== void 0 ? text : '').concat(isTrailing ? '\n' : '');
	  };
	  var [initialText] = reactExports.useState(getTextContent);
	  // This is the actual text rendering boundary where we interface with the DOM
	  // The text is not rendered as part of the virtual DOM, as since we handle basic character insertions natively,
	  // updating the DOM is not a one way dataflow anymore. What we need here is not reconciliation and diffing
	  // with previous version of the virtual DOM, but rather diffing with the actual DOM element, and replace the DOM <span> content
	  // exactly if and only if its current content does not match our current virtual DOM.
	  // Otherwise the DOM TextNode would always be replaced by React as the user types, which interferes with native text features,
	  // eg makes native spellcheck opt out from checking the text node.
	  // useLayoutEffect: updating our span before browser paint
	  useIsomorphicLayoutEffect(() => {
	    // null coalescing text to make sure we're not outputing "null" as a string in the extreme case it is nullish at runtime
	    var textWithTrailing = getTextContent();
	    if (ref.current && ref.current.textContent !== textWithTrailing) {
	      ref.current.textContent = textWithTrailing;
	    }
	    // intentionally not specifying dependencies, so that this effect runs on every render
	    // as this effectively replaces "specifying the text in the virtual DOM under the <span> below" on each render
	  });
	  // We intentionally render a memoized <span> that only receives the initial text content when the component is mounted.
	  // We defer to the layout effect above to update the `textContent` of the span element when needed.
	  return /*#__PURE__*/React.createElement(MemoizedText$1, {
	    ref: ref
	  }, initialText);
	};
	var MemoizedText$1 = /*#__PURE__*/reactExports.memo( /*#__PURE__*/reactExports.forwardRef((props, ref) => {
	  return /*#__PURE__*/React.createElement("span", {
	    "data-slate-string": true,
	    ref: ref
	  }, props.children);
	}));
	/**
	 * Leaf strings without text, render as zero-width strings.
	 */
	var ZeroWidthString = props => {
	  var {
	    length = 0,
	    isLineBreak = false,
	    isMarkPlaceholder = false
	  } = props;
	  var attributes = {
	    'data-slate-zero-width': isLineBreak ? 'n' : 'z',
	    'data-slate-length': length
	  };
	  if (isMarkPlaceholder) {
	    attributes['data-slate-mark-placeholder'] = true;
	  }
	  return /*#__PURE__*/React.createElement("span", _objectSpread$4({}, attributes), !(IS_ANDROID || IS_IOS) || !isLineBreak ? '\uFEFF' : null, isLineBreak ? /*#__PURE__*/React.createElement("br", null) : null);
	};

	function ownKeys$3(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread$3(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$3(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	// Delay the placeholder on Android to prevent the keyboard from closing.
	// (https://github.com/ianstormtaylor/slate/pull/5368)
	var PLACEHOLDER_DELAY = IS_ANDROID ? 300 : 0;
	function disconnectPlaceholderResizeObserver(placeholderResizeObserver, releaseObserver) {
	  if (placeholderResizeObserver.current) {
	    placeholderResizeObserver.current.disconnect();
	    if (releaseObserver) {
	      placeholderResizeObserver.current = null;
	    }
	  }
	}
	function clearTimeoutRef(timeoutRef) {
	  if (timeoutRef.current) {
	    clearTimeout(timeoutRef.current);
	    timeoutRef.current = null;
	  }
	}
	/**
	 * Individual leaves in a text node with unique formatting.
	 */
	var Leaf$1 = props => {
	  var {
	    leaf,
	    isLast,
	    text,
	    parent,
	    renderPlaceholder,
	    renderLeaf = props => /*#__PURE__*/React.createElement(DefaultLeaf, _objectSpread$3({}, props))
	  } = props;
	  var editor = useSlateStatic();
	  var placeholderResizeObserver = reactExports.useRef(null);
	  var placeholderRef = reactExports.useRef(null);
	  var [showPlaceholder, setShowPlaceholder] = reactExports.useState(false);
	  var showPlaceholderTimeoutRef = reactExports.useRef(null);
	  var callbackPlaceholderRef = reactExports.useCallback(placeholderEl => {
	    disconnectPlaceholderResizeObserver(placeholderResizeObserver, placeholderEl == null);
	    if (placeholderEl == null) {
	      var _leaf$onPlaceholderRe;
	      EDITOR_TO_PLACEHOLDER_ELEMENT.delete(editor);
	      (_leaf$onPlaceholderRe = leaf.onPlaceholderResize) === null || _leaf$onPlaceholderRe === void 0 || _leaf$onPlaceholderRe.call(leaf, null);
	    } else {
	      EDITOR_TO_PLACEHOLDER_ELEMENT.set(editor, placeholderEl);
	      if (!placeholderResizeObserver.current) {
	        // Create a new observer and observe the placeholder element.
	        var ResizeObserver$1 = window.ResizeObserver || ResizeObserver;
	        placeholderResizeObserver.current = new ResizeObserver$1(() => {
	          var _leaf$onPlaceholderRe2;
	          (_leaf$onPlaceholderRe2 = leaf.onPlaceholderResize) === null || _leaf$onPlaceholderRe2 === void 0 || _leaf$onPlaceholderRe2.call(leaf, placeholderEl);
	        });
	      }
	      placeholderResizeObserver.current.observe(placeholderEl);
	      placeholderRef.current = placeholderEl;
	    }
	  }, [placeholderRef, leaf, editor]);
	  var children = /*#__PURE__*/React.createElement(String$1, {
	    isLast: isLast,
	    leaf: leaf,
	    parent: parent,
	    text: text
	  });
	  var leafIsPlaceholder = Boolean(leaf[PLACEHOLDER_SYMBOL]);
	  reactExports.useEffect(() => {
	    if (leafIsPlaceholder) {
	      if (!showPlaceholderTimeoutRef.current) {
	        // Delay the placeholder, so it will not render in a selection
	        showPlaceholderTimeoutRef.current = setTimeout(() => {
	          setShowPlaceholder(true);
	          showPlaceholderTimeoutRef.current = null;
	        }, PLACEHOLDER_DELAY);
	      }
	    } else {
	      clearTimeoutRef(showPlaceholderTimeoutRef);
	      setShowPlaceholder(false);
	    }
	    return () => clearTimeoutRef(showPlaceholderTimeoutRef);
	  }, [leafIsPlaceholder, setShowPlaceholder]);
	  if (leafIsPlaceholder && showPlaceholder) {
	    var placeholderProps = {
	      children: leaf.placeholder,
	      attributes: {
	        'data-slate-placeholder': true,
	        style: {
	          position: 'absolute',
	          top: 0,
	          pointerEvents: 'none',
	          width: '100%',
	          maxWidth: '100%',
	          display: 'block',
	          opacity: '0.333',
	          userSelect: 'none',
	          textDecoration: 'none',
	          // Fixes https://github.com/udecode/plate/issues/2315
	          WebkitUserModify: IS_WEBKIT ? 'inherit' : undefined
	        },
	        contentEditable: false,
	        ref: callbackPlaceholderRef
	      }
	    };
	    children = /*#__PURE__*/React.createElement(React.Fragment, null, renderPlaceholder(placeholderProps), children);
	  }
	  // COMPAT: Having the `data-` attributes on these leaf elements ensures that
	  // in certain misbehaving browsers they aren't weirdly cloned/destroyed by
	  // contenteditable behaviors. (2019/05/08)
	  var attributes = {
	    'data-slate-leaf': true
	  };
	  return renderLeaf({
	    attributes,
	    children,
	    leaf,
	    text
	  });
	};
	var MemoizedLeaf = /*#__PURE__*/React.memo(Leaf$1, (prev, next) => {
	  return next.parent === prev.parent && next.isLast === prev.isLast && next.renderLeaf === prev.renderLeaf && next.renderPlaceholder === prev.renderPlaceholder && next.text === prev.text && Text$1.equals(next.leaf, prev.leaf) && next.leaf[PLACEHOLDER_SYMBOL] === prev.leaf[PLACEHOLDER_SYMBOL];
	});
	var DefaultLeaf = props => {
	  var {
	    attributes,
	    children
	  } = props;
	  return /*#__PURE__*/React.createElement("span", _objectSpread$3({}, attributes), children);
	};

	/**
	 * Text.
	 */
	var Text = props => {
	  var {
	    decorations,
	    isLast,
	    parent,
	    renderPlaceholder,
	    renderLeaf,
	    text
	  } = props;
	  var editor = useSlateStatic();
	  var ref = reactExports.useRef(null);
	  var leaves = Text$1.decorations(text, decorations);
	  var key = ReactEditor.findKey(editor, text);
	  var children = [];
	  for (var i = 0; i < leaves.length; i++) {
	    var leaf = leaves[i];
	    children.push( /*#__PURE__*/React.createElement(MemoizedLeaf, {
	      isLast: isLast && i === leaves.length - 1,
	      key: "".concat(key.id, "-").concat(i),
	      renderPlaceholder: renderPlaceholder,
	      leaf: leaf,
	      text: text,
	      parent: parent,
	      renderLeaf: renderLeaf
	    }));
	  }
	  // Update element-related weak maps with the DOM element ref.
	  var callbackRef = reactExports.useCallback(span => {
	    var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor);
	    if (span) {
	      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 || KEY_TO_ELEMENT.set(key, span);
	      NODE_TO_ELEMENT.set(text, span);
	      ELEMENT_TO_NODE.set(span, text);
	    } else {
	      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 || KEY_TO_ELEMENT.delete(key);
	      NODE_TO_ELEMENT.delete(text);
	      if (ref.current) {
	        ELEMENT_TO_NODE.delete(ref.current);
	      }
	    }
	    ref.current = span;
	  }, [ref, editor, key, text]);
	  return /*#__PURE__*/React.createElement("span", {
	    "data-slate-node": "text",
	    ref: callbackRef
	  }, children);
	};
	var MemoizedText = /*#__PURE__*/React.memo(Text, (prev, next) => {
	  return next.parent === prev.parent && next.isLast === prev.isLast && next.renderLeaf === prev.renderLeaf && next.renderPlaceholder === prev.renderPlaceholder && next.text === prev.text && isTextDecorationsEqual(next.decorations, prev.decorations);
	});

	function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	/**
	 * Element.
	 */
	var Element$2 = props => {
	  var {
	    decorations,
	    element,
	    renderElement = p => /*#__PURE__*/React.createElement(DefaultElement, _objectSpread$2({}, p)),
	    renderPlaceholder,
	    renderLeaf,
	    selection
	  } = props;
	  var editor = useSlateStatic();
	  var readOnly = useReadOnly();
	  var isInline = editor.isInline(element);
	  var key = ReactEditor.findKey(editor, element);
	  var ref = reactExports.useCallback(ref => {
	    // Update element-related weak maps with the DOM element ref.
	    var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor);
	    if (ref) {
	      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 || KEY_TO_ELEMENT.set(key, ref);
	      NODE_TO_ELEMENT.set(element, ref);
	      ELEMENT_TO_NODE.set(ref, element);
	    } else {
	      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 || KEY_TO_ELEMENT.delete(key);
	      NODE_TO_ELEMENT.delete(element);
	    }
	  }, [editor, key, element]);
	  var children = useChildren({
	    decorations,
	    node: element,
	    renderElement,
	    renderPlaceholder,
	    renderLeaf,
	    selection
	  });
	  // Attributes that the developer must mix into the element in their
	  // custom node renderer component.
	  var attributes = {
	    'data-slate-node': 'element',
	    ref
	  };
	  if (isInline) {
	    attributes['data-slate-inline'] = true;
	  }
	  // If it's a block node with inline children, add the proper `dir` attribute
	  // for text direction.
	  if (!isInline && Editor.hasInlines(editor, element)) {
	    var text = Node.string(element);
	    var dir = getDirection(text);
	    if (dir === 'rtl') {
	      attributes.dir = dir;
	    }
	  }
	  // If it's a void node, wrap the children in extra void-specific elements.
	  if (Editor.isVoid(editor, element)) {
	    attributes['data-slate-void'] = true;
	    if (!readOnly && isInline) {
	      attributes.contentEditable = false;
	    }
	    var Tag = isInline ? 'span' : 'div';
	    var [[_text]] = Node.texts(element);
	    children = /*#__PURE__*/React.createElement(Tag, {
	      "data-slate-spacer": true,
	      style: {
	        height: '0',
	        color: 'transparent',
	        outline: 'none',
	        position: 'absolute'
	      }
	    }, /*#__PURE__*/React.createElement(MemoizedText, {
	      renderPlaceholder: renderPlaceholder,
	      decorations: [],
	      isLast: false,
	      parent: element,
	      text: _text
	    }));
	    NODE_TO_INDEX.set(_text, 0);
	    NODE_TO_PARENT.set(_text, element);
	  }
	  return renderElement({
	    attributes,
	    children,
	    element
	  });
	};
	var MemoizedElement = /*#__PURE__*/React.memo(Element$2, (prev, next) => {
	  return prev.element === next.element && prev.renderElement === next.renderElement && prev.renderLeaf === next.renderLeaf && prev.renderPlaceholder === next.renderPlaceholder && isElementDecorationsEqual(prev.decorations, next.decorations) && (prev.selection === next.selection || !!prev.selection && !!next.selection && Range.equals(prev.selection, next.selection));
	});
	/**
	 * The default element renderer.
	 */
	var DefaultElement = props => {
	  var {
	    attributes,
	    children,
	    element
	  } = props;
	  var editor = useSlateStatic();
	  var Tag = editor.isInline(element) ? 'span' : 'div';
	  return /*#__PURE__*/React.createElement(Tag, _objectSpread$2(_objectSpread$2({}, attributes), {}, {
	    style: {
	      position: 'relative'
	    }
	  }), children);
	};

	/**
	 * A React context for sharing the `decorate` prop of the editable.
	 */
	var DecorateContext = /*#__PURE__*/reactExports.createContext(() => []);
	/**
	 * Get the current `decorate` prop of the editable.
	 */
	var useDecorate = () => {
	  return reactExports.useContext(DecorateContext);
	};

	/**
	 * A React context for sharing the `selected` state of an element.
	 */
	var SelectedContext = /*#__PURE__*/reactExports.createContext(false);

	/**
	 * Children.
	 */
	var useChildren = props => {
	  var {
	    decorations,
	    node,
	    renderElement,
	    renderPlaceholder,
	    renderLeaf,
	    selection
	  } = props;
	  var decorate = useDecorate();
	  var editor = useSlateStatic();
	  var path = ReactEditor.findPath(editor, node);
	  var children = [];
	  var isLeafBlock = Element$3.isElement(node) && !editor.isInline(node) && Editor.hasInlines(editor, node);
	  for (var i = 0; i < node.children.length; i++) {
	    var p = path.concat(i);
	    var n = node.children[i];
	    var key = ReactEditor.findKey(editor, n);
	    var range = Editor.range(editor, p);
	    var sel = selection && Range.intersection(range, selection);
	    var ds = decorate([n, p]);
	    for (var dec of decorations) {
	      var d = Range.intersection(dec, range);
	      if (d) {
	        ds.push(d);
	      }
	    }
	    if (Element$3.isElement(n)) {
	      children.push( /*#__PURE__*/React.createElement(SelectedContext.Provider, {
	        key: "provider-".concat(key.id),
	        value: !!sel
	      }, /*#__PURE__*/React.createElement(MemoizedElement, {
	        decorations: ds,
	        element: n,
	        key: key.id,
	        renderElement: renderElement,
	        renderPlaceholder: renderPlaceholder,
	        renderLeaf: renderLeaf,
	        selection: sel
	      })));
	    } else {
	      children.push( /*#__PURE__*/React.createElement(MemoizedText, {
	        decorations: ds,
	        key: key.id,
	        isLast: isLeafBlock && i === node.children.length - 1,
	        parent: node,
	        renderPlaceholder: renderPlaceholder,
	        renderLeaf: renderLeaf,
	        text: n
	      }));
	    }
	    NODE_TO_INDEX.set(n, i);
	    NODE_TO_PARENT.set(n, node);
	  }
	  return children;
	};

	/**
	 * A React context for sharing the `readOnly` state of the editor.
	 */
	var ReadOnlyContext = /*#__PURE__*/reactExports.createContext(false);
	/**
	 * Get the current `readOnly` state of the editor.
	 */
	var useReadOnly = () => {
	  return reactExports.useContext(ReadOnlyContext);
	};

	var SlateContext = /*#__PURE__*/reactExports.createContext(null);
	/**
	 * Get the current editor object from the React context.
	 */
	var useSlate = () => {
	  var context = reactExports.useContext(SlateContext);
	  if (!context) {
	    throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
	  }
	  var {
	    editor
	  } = context;
	  return editor;
	};

	function useTrackUserInput() {
	  var editor = useSlateStatic();
	  var receivedUserInput = reactExports.useRef(false);
	  var animationFrameIdRef = reactExports.useRef(0);
	  var onUserInput = reactExports.useCallback(() => {
	    if (receivedUserInput.current) {
	      return;
	    }
	    receivedUserInput.current = true;
	    var window = ReactEditor.getWindow(editor);
	    window.cancelAnimationFrame(animationFrameIdRef.current);
	    animationFrameIdRef.current = window.requestAnimationFrame(() => {
	      receivedUserInput.current = false;
	    });
	  }, [editor]);
	  reactExports.useEffect(() => () => cancelAnimationFrame(animationFrameIdRef.current), []);
	  return {
	    receivedUserInput,
	    onUserInput
	  };
	}

	var TRIPLE_CLICK = 3;

	/**
	 * Hotkey mappings for each platform.
	 */
	var HOTKEYS = {
	  bold: 'mod+b',
	  compose: ['down', 'left', 'right', 'up', 'backspace', 'enter'],
	  moveBackward: 'left',
	  moveForward: 'right',
	  moveWordBackward: 'ctrl+left',
	  moveWordForward: 'ctrl+right',
	  deleteBackward: 'shift?+backspace',
	  deleteForward: 'shift?+delete',
	  extendBackward: 'shift+left',
	  extendForward: 'shift+right',
	  italic: 'mod+i',
	  insertSoftBreak: 'shift+enter',
	  splitBlock: 'enter',
	  undo: 'mod+z'
	};
	var APPLE_HOTKEYS = {
	  moveLineBackward: 'opt+up',
	  moveLineForward: 'opt+down',
	  moveWordBackward: 'opt+left',
	  moveWordForward: 'opt+right',
	  deleteBackward: ['ctrl+backspace', 'ctrl+h'],
	  deleteForward: ['ctrl+delete', 'ctrl+d'],
	  deleteLineBackward: 'cmd+shift?+backspace',
	  deleteLineForward: ['cmd+shift?+delete', 'ctrl+k'],
	  deleteWordBackward: 'opt+shift?+backspace',
	  deleteWordForward: 'opt+shift?+delete',
	  extendLineBackward: 'opt+shift+up',
	  extendLineForward: 'opt+shift+down',
	  redo: 'cmd+shift+z',
	  transposeCharacter: 'ctrl+t'
	};
	var WINDOWS_HOTKEYS = {
	  deleteWordBackward: 'ctrl+shift?+backspace',
	  deleteWordForward: 'ctrl+shift?+delete',
	  redo: ['ctrl+y', 'ctrl+shift+z']
	};
	/**
	 * Create a platform-aware hotkey checker.
	 */
	var create = key => {
	  var generic = HOTKEYS[key];
	  var apple = APPLE_HOTKEYS[key];
	  var windows = WINDOWS_HOTKEYS[key];
	  var isGeneric = generic && isHotkey_1(generic);
	  var isApple = apple && isHotkey_1(apple);
	  var isWindows = windows && isHotkey_1(windows);
	  return event => {
	    if (isGeneric && isGeneric(event)) return true;
	    if (IS_APPLE && isApple && isApple(event)) return true;
	    if (!IS_APPLE && isWindows && isWindows(event)) return true;
	    return false;
	  };
	};
	/**
	 * Hotkeys.
	 */
	var Hotkeys = {
	  isBold: create('bold'),
	  isCompose: create('compose'),
	  isMoveBackward: create('moveBackward'),
	  isMoveForward: create('moveForward'),
	  isDeleteBackward: create('deleteBackward'),
	  isDeleteForward: create('deleteForward'),
	  isDeleteLineBackward: create('deleteLineBackward'),
	  isDeleteLineForward: create('deleteLineForward'),
	  isDeleteWordBackward: create('deleteWordBackward'),
	  isDeleteWordForward: create('deleteWordForward'),
	  isExtendBackward: create('extendBackward'),
	  isExtendForward: create('extendForward'),
	  isExtendLineBackward: create('extendLineBackward'),
	  isExtendLineForward: create('extendLineForward'),
	  isItalic: create('italic'),
	  isMoveLineBackward: create('moveLineBackward'),
	  isMoveLineForward: create('moveLineForward'),
	  isMoveWordBackward: create('moveWordBackward'),
	  isMoveWordForward: create('moveWordForward'),
	  isRedo: create('redo'),
	  isSoftBreak: create('insertSoftBreak'),
	  isSplitBlock: create('splitBlock'),
	  isTransposeCharacter: create('transposeCharacter'),
	  isUndo: create('undo')
	};

	var createRestoreDomManager = (editor, receivedUserInput) => {
	  var bufferedMutations = [];
	  var clear = () => {
	    bufferedMutations = [];
	  };
	  var registerMutations = mutations => {
	    if (!receivedUserInput.current) {
	      return;
	    }
	    var trackedMutations = mutations.filter(mutation => isTrackedMutation(editor, mutation, mutations));
	    bufferedMutations.push(...trackedMutations);
	  };
	  function restoreDOM() {
	    if (bufferedMutations.length > 0) {
	      bufferedMutations.reverse().forEach(mutation => {
	        if (mutation.type === 'characterData') {
	          // We don't want to restore the DOM for characterData mutations
	          // because this interrupts the composition.
	          return;
	        }
	        mutation.removedNodes.forEach(node => {
	          mutation.target.insertBefore(node, mutation.nextSibling);
	        });
	        mutation.addedNodes.forEach(node => {
	          mutation.target.removeChild(node);
	        });
	      });
	      // Clear buffered mutations to ensure we don't undo them twice
	      clear();
	    }
	  }
	  return {
	    registerMutations,
	    restoreDOM,
	    clear
	  };
	};

	var MUTATION_OBSERVER_CONFIG = {
	  subtree: true,
	  childList: true,
	  characterData: true,
	  characterDataOldValue: true
	};
	// We have to use a class component here since we rely on `getSnapshotBeforeUpdate` which has no FC equivalent
	// to run code synchronously immediately before react commits the component update to the DOM.
	class RestoreDOMComponent extends reactExports.Component {
	  constructor() {
	    super(...arguments);
	    _defineProperty(this, "context", null);
	    _defineProperty(this, "manager", null);
	    _defineProperty(this, "mutationObserver", null);
	  }
	  observe() {
	    var _this$mutationObserve;
	    var {
	      node
	    } = this.props;
	    if (!node.current) {
	      throw new Error('Failed to attach MutationObserver, `node` is undefined');
	    }
	    (_this$mutationObserve = this.mutationObserver) === null || _this$mutationObserve === void 0 || _this$mutationObserve.observe(node.current, MUTATION_OBSERVER_CONFIG);
	  }
	  componentDidMount() {
	    var {
	      receivedUserInput
	    } = this.props;
	    var editor = this.context;
	    this.manager = createRestoreDomManager(editor, receivedUserInput);
	    this.mutationObserver = new MutationObserver(this.manager.registerMutations);
	    this.observe();
	  }
	  getSnapshotBeforeUpdate() {
	    var _this$mutationObserve2, _this$mutationObserve3, _this$manager2;
	    var pendingMutations = (_this$mutationObserve2 = this.mutationObserver) === null || _this$mutationObserve2 === void 0 ? void 0 : _this$mutationObserve2.takeRecords();
	    if (pendingMutations !== null && pendingMutations !== void 0 && pendingMutations.length) {
	      var _this$manager;
	      (_this$manager = this.manager) === null || _this$manager === void 0 || _this$manager.registerMutations(pendingMutations);
	    }
	    (_this$mutationObserve3 = this.mutationObserver) === null || _this$mutationObserve3 === void 0 || _this$mutationObserve3.disconnect();
	    (_this$manager2 = this.manager) === null || _this$manager2 === void 0 || _this$manager2.restoreDOM();
	    return null;
	  }
	  componentDidUpdate() {
	    var _this$manager3;
	    (_this$manager3 = this.manager) === null || _this$manager3 === void 0 || _this$manager3.clear();
	    this.observe();
	  }
	  componentWillUnmount() {
	    var _this$mutationObserve4;
	    (_this$mutationObserve4 = this.mutationObserver) === null || _this$mutationObserve4 === void 0 || _this$mutationObserve4.disconnect();
	  }
	  render() {
	    return this.props.children;
	  }
	}
	_defineProperty(RestoreDOMComponent, "contextType", EditorContext);
	var RestoreDOM = IS_ANDROID ? RestoreDOMComponent : _ref => {
	  var {
	    children
	  } = _ref;
	  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
	};

	var _excluded$1 = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"],
	  _excluded2 = ["text"];
	function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	var Children = props => /*#__PURE__*/React.createElement(React.Fragment, null, useChildren(props));
	/**
	 * Editable.
	 */
	var Editable = props => {
	  var defaultRenderPlaceholder = reactExports.useCallback(props => /*#__PURE__*/React.createElement(DefaultPlaceholder, _objectSpread$1({}, props)), []);
	  var {
	      autoFocus,
	      decorate = defaultDecorate,
	      onDOMBeforeInput: propsOnDOMBeforeInput,
	      placeholder,
	      readOnly = false,
	      renderElement,
	      renderLeaf,
	      renderPlaceholder = defaultRenderPlaceholder,
	      scrollSelectionIntoView = defaultScrollSelectionIntoView,
	      style: userStyle = {},
	      as: Component = 'div',
	      disableDefaultStyles = false
	    } = props,
	    attributes = _objectWithoutProperties(props, _excluded$1);
	  var editor = useSlate();
	  // Rerender editor when composition status changed
	  var [isComposing, setIsComposing] = reactExports.useState(false);
	  var ref = reactExports.useRef(null);
	  var deferredOperations = reactExports.useRef([]);
	  var [placeholderHeight, setPlaceholderHeight] = reactExports.useState();
	  var processing = reactExports.useRef(false);
	  var {
	    onUserInput,
	    receivedUserInput
	  } = useTrackUserInput();
	  var [, forceRender] = reactExports.useReducer(s => s + 1, 0);
	  EDITOR_TO_FORCE_RENDER.set(editor, forceRender);
	  // Update internal state on each render.
	  IS_READ_ONLY.set(editor, readOnly);
	  // Keep track of some state for the event handler logic.
	  var state = reactExports.useMemo(() => ({
	    isDraggingInternally: false,
	    isUpdatingSelection: false,
	    latestElement: null,
	    hasMarkPlaceholder: false
	  }), []);
	  // The autoFocus TextareaHTMLAttribute doesn't do anything on a div, so it
	  // needs to be manually focused.
	  reactExports.useEffect(() => {
	    if (ref.current && autoFocus) {
	      ref.current.focus();
	    }
	  }, [autoFocus]);
	  /**
	   * The AndroidInputManager object has a cyclical dependency on onDOMSelectionChange
	   *
	   * It is defined as a reference to simplify hook dependencies and clarify that
	   * it needs to be initialized.
	   */
	  var androidInputManagerRef = reactExports.useRef();
	  // Listen on the native `selectionchange` event to be able to update any time
	  // the selection changes. This is required because React's `onSelect` is leaky
	  // and non-standard so it doesn't fire until after a selection has been
	  // released. This causes issues in situations where another change happens
	  // while a selection is being dragged.
	  var onDOMSelectionChange = reactExports.useMemo(() => throttle$1(() => {
	    var el = ReactEditor.toDOMNode(editor, editor);
	    var root = el.getRootNode();
	    if (!processing.current && IS_WEBKIT && root instanceof ShadowRoot) {
	      processing.current = true;
	      var active = getActiveElement();
	      if (active) {
	        document.execCommand('indent');
	      } else {
	        Transforms.deselect(editor);
	      }
	      processing.current = false;
	      return;
	    }
	    var androidInputManager = androidInputManagerRef.current;
	    if ((IS_ANDROID || !ReactEditor.isComposing(editor)) && (!state.isUpdatingSelection || androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.isFlushing()) && !state.isDraggingInternally) {
	      var _root = ReactEditor.findDocumentOrShadowRoot(editor);
	      var {
	        activeElement
	      } = _root;
	      var _el = ReactEditor.toDOMNode(editor, editor);
	      var domSelection = getSelection(_root);
	      if (activeElement === _el) {
	        state.latestElement = activeElement;
	        IS_FOCUSED.set(editor, true);
	      } else {
	        IS_FOCUSED.delete(editor);
	      }
	      if (!domSelection) {
	        return Transforms.deselect(editor);
	      }
	      var {
	        anchorNode,
	        focusNode
	      } = domSelection;
	      var anchorNodeSelectable = ReactEditor.hasEditableTarget(editor, anchorNode) || ReactEditor.isTargetInsideNonReadonlyVoid(editor, anchorNode);
	      var focusNodeSelectable = ReactEditor.hasEditableTarget(editor, focusNode) || ReactEditor.isTargetInsideNonReadonlyVoid(editor, focusNode);
	      if (anchorNodeSelectable && focusNodeSelectable) {
	        var range = ReactEditor.toSlateRange(editor, domSelection, {
	          exactMatch: false,
	          suppressThrow: true
	        });
	        if (range) {
	          if (!ReactEditor.isComposing(editor) && !(androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.hasPendingChanges()) && !(androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.isFlushing())) {
	            Transforms.select(editor, range);
	          } else {
	            androidInputManager === null || androidInputManager === void 0 || androidInputManager.handleUserSelect(range);
	          }
	        }
	      }
	      // Deselect the editor if the dom selection is not selectable in readonly mode
	      if (readOnly && (!anchorNodeSelectable || !focusNodeSelectable)) {
	        Transforms.deselect(editor);
	      }
	    }
	  }, 100), [editor, readOnly, state]);
	  var scheduleOnDOMSelectionChange = reactExports.useMemo(() => debounce$2(onDOMSelectionChange, 0), [onDOMSelectionChange]);
	  androidInputManagerRef.current = useAndroidInputManager({
	    node: ref,
	    onDOMSelectionChange,
	    scheduleOnDOMSelectionChange
	  });
	  useIsomorphicLayoutEffect(() => {
	    var _androidInputManagerR, _androidInputManagerR2;
	    // Update element-related weak maps with the DOM element ref.
	    var window;
	    if (ref.current && (window = getDefaultView(ref.current))) {
	      EDITOR_TO_WINDOW.set(editor, window);
	      EDITOR_TO_ELEMENT.set(editor, ref.current);
	      NODE_TO_ELEMENT.set(editor, ref.current);
	      ELEMENT_TO_NODE.set(ref.current, editor);
	    } else {
	      NODE_TO_ELEMENT.delete(editor);
	    }
	    // Make sure the DOM selection state is in sync.
	    var {
	      selection
	    } = editor;
	    var root = ReactEditor.findDocumentOrShadowRoot(editor);
	    var domSelection = getSelection(root);
	    if (!domSelection || !ReactEditor.isFocused(editor) || (_androidInputManagerR = androidInputManagerRef.current) !== null && _androidInputManagerR !== void 0 && _androidInputManagerR.hasPendingAction()) {
	      return;
	    }
	    var setDomSelection = forceChange => {
	      var hasDomSelection = domSelection.type !== 'None';
	      // If the DOM selection is properly unset, we're done.
	      if (!selection && !hasDomSelection) {
	        return;
	      }
	      // Get anchorNode and focusNode
	      var focusNode = domSelection.focusNode;
	      var anchorNode;
	      // COMPAT: In firefox the normal seletion way does not work
	      // (https://github.com/ianstormtaylor/slate/pull/5486#issue-1820720223)
	      if (IS_FIREFOX && domSelection.rangeCount > 1) {
	        var firstRange = domSelection.getRangeAt(0);
	        var lastRange = domSelection.getRangeAt(domSelection.rangeCount - 1);
	        // Right to left
	        if (firstRange.startContainer === focusNode) {
	          anchorNode = lastRange.endContainer;
	        } else {
	          // Left to right
	          anchorNode = firstRange.startContainer;
	        }
	      } else {
	        anchorNode = domSelection.anchorNode;
	      }
	      // verify that the dom selection is in the editor
	      var editorElement = EDITOR_TO_ELEMENT.get(editor);
	      var hasDomSelectionInEditor = false;
	      if (editorElement.contains(anchorNode) && editorElement.contains(focusNode)) {
	        hasDomSelectionInEditor = true;
	      }
	      // If the DOM selection is in the editor and the editor selection is already correct, we're done.
	      if (hasDomSelection && hasDomSelectionInEditor && selection && !forceChange) {
	        var slateRange = ReactEditor.toSlateRange(editor, domSelection, {
	          exactMatch: true,
	          // domSelection is not necessarily a valid Slate range
	          // (e.g. when clicking on contentEditable:false element)
	          suppressThrow: true
	        });
	        if (slateRange && Range.equals(slateRange, selection)) {
	          var _anchorNode;
	          if (!state.hasMarkPlaceholder) {
	            return;
	          }
	          // Ensure selection is inside the mark placeholder
	          if ((_anchorNode = anchorNode) !== null && _anchorNode !== void 0 && (_anchorNode = _anchorNode.parentElement) !== null && _anchorNode !== void 0 && _anchorNode.hasAttribute('data-slate-mark-placeholder')) {
	            return;
	          }
	        }
	      }
	      // when <Editable/> is being controlled through external value
	      // then its children might just change - DOM responds to it on its own
	      // but Slate's value is not being updated through any operation
	      // and thus it doesn't transform selection on its own
	      if (selection && !ReactEditor.hasRange(editor, selection)) {
	        editor.selection = ReactEditor.toSlateRange(editor, domSelection, {
	          exactMatch: false,
	          suppressThrow: true
	        });
	        return;
	      }
	      // Otherwise the DOM selection is out of sync, so update it.
	      state.isUpdatingSelection = true;
	      var newDomRange = selection && ReactEditor.toDOMRange(editor, selection);
	      if (newDomRange) {
	        if (ReactEditor.isComposing(editor) && !IS_ANDROID) {
	          domSelection.collapseToEnd();
	        } else if (Range.isBackward(selection)) {
	          domSelection.setBaseAndExtent(newDomRange.endContainer, newDomRange.endOffset, newDomRange.startContainer, newDomRange.startOffset);
	        } else {
	          domSelection.setBaseAndExtent(newDomRange.startContainer, newDomRange.startOffset, newDomRange.endContainer, newDomRange.endOffset);
	        }
	        scrollSelectionIntoView(editor, newDomRange);
	      } else {
	        domSelection.removeAllRanges();
	      }
	      return newDomRange;
	    };
	    // In firefox if there is more then 1 range and we call setDomSelection we remove the ability to select more cells in a table
	    if (domSelection.rangeCount <= 1) {
	      setDomSelection();
	    }
	    var ensureSelection = ((_androidInputManagerR2 = androidInputManagerRef.current) === null || _androidInputManagerR2 === void 0 ? void 0 : _androidInputManagerR2.isFlushing()) === 'action';
	    if (!IS_ANDROID || !ensureSelection) {
	      setTimeout(() => {
	        state.isUpdatingSelection = false;
	      });
	      return;
	    }
	    var timeoutId = null;
	    var animationFrameId = requestAnimationFrame(() => {
	      if (ensureSelection) {
	        var ensureDomSelection = forceChange => {
	          try {
	            var el = ReactEditor.toDOMNode(editor, editor);
	            el.focus();
	            setDomSelection(forceChange);
	          } catch (e) {
	            // Ignore, dom and state might be out of sync
	          }
	        };
	        // Compat: Android IMEs try to force their selection by manually re-applying it even after we set it.
	        // This essentially would make setting the slate selection during an update meaningless, so we force it
	        // again here. We can't only do it in the setTimeout after the animation frame since that would cause a
	        // visible flicker.
	        ensureDomSelection();
	        timeoutId = setTimeout(() => {
	          // COMPAT: While setting the selection in an animation frame visually correctly sets the selection,
	          // it doesn't update GBoards spellchecker state. We have to manually trigger a selection change after
	          // the animation frame to ensure it displays the correct state.
	          ensureDomSelection(true);
	          state.isUpdatingSelection = false;
	        });
	      }
	    });
	    return () => {
	      cancelAnimationFrame(animationFrameId);
	      if (timeoutId) {
	        clearTimeout(timeoutId);
	      }
	    };
	  });
	  // Listen on the native `beforeinput` event to get real "Level 2" events. This
	  // is required because React's `beforeinput` is fake and never really attaches
	  // to the real event sadly. (2019/11/01)
	  // https://github.com/facebook/react/issues/11211
	  var onDOMBeforeInput = reactExports.useCallback(event => {
	    var el = ReactEditor.toDOMNode(editor, editor);
	    var root = el.getRootNode();
	    if (processing !== null && processing !== void 0 && processing.current && IS_WEBKIT && root instanceof ShadowRoot) {
	      var ranges = event.getTargetRanges();
	      var range = ranges[0];
	      var newRange = new window.Range();
	      newRange.setStart(range.startContainer, range.startOffset);
	      newRange.setEnd(range.endContainer, range.endOffset);
	      // Translate the DOM Range into a Slate Range
	      var slateRange = ReactEditor.toSlateRange(editor, newRange, {
	        exactMatch: false,
	        suppressThrow: false
	      });
	      Transforms.select(editor, slateRange);
	      event.preventDefault();
	      event.stopImmediatePropagation();
	      return;
	    }
	    onUserInput();
	    if (!readOnly && ReactEditor.hasEditableTarget(editor, event.target) && !isDOMEventHandled(event, propsOnDOMBeforeInput)) {
	      var _EDITOR_TO_USER_SELEC;
	      // COMPAT: BeforeInput events aren't cancelable on android, so we have to handle them differently using the android input manager.
	      if (androidInputManagerRef.current) {
	        return androidInputManagerRef.current.handleDOMBeforeInput(event);
	      }
	      // Some IMEs/Chrome extensions like e.g. Grammarly set the selection immediately before
	      // triggering a `beforeinput` expecting the change to be applied to the immediately before
	      // set selection.
	      scheduleOnDOMSelectionChange.flush();
	      onDOMSelectionChange.flush();
	      var {
	        selection
	      } = editor;
	      var {
	        inputType: type
	      } = event;
	      var data = event.dataTransfer || event.data || undefined;
	      var isCompositionChange = type === 'insertCompositionText' || type === 'deleteCompositionText';
	      // COMPAT: use composition change events as a hint to where we should insert
	      // composition text if we aren't composing to work around https://github.com/ianstormtaylor/slate/issues/5038
	      if (isCompositionChange && ReactEditor.isComposing(editor)) {
	        return;
	      }
	      var native = false;
	      if (type === 'insertText' && selection && Range.isCollapsed(selection) &&
	      // Only use native character insertion for single characters a-z or space for now.
	      // Long-press events (hold a + press 4 = ä) to choose a special character otherwise
	      // causes duplicate inserts.
	      event.data && event.data.length === 1 && /[a-z ]/i.test(event.data) &&
	      // Chrome has issues correctly editing the start of nodes: https://bugs.chromium.org/p/chromium/issues/detail?id=1249405
	      // When there is an inline element, e.g. a link, and you select
	      // right after it (the start of the next node).
	      selection.anchor.offset !== 0) {
	        var _node$parentElement, _window$getComputedSt;
	        native = true;
	        // Skip native if there are marks, as
	        // `insertText` will insert a node, not just text.
	        if (editor.marks) {
	          native = false;
	        }
	        // Chrome also has issues correctly editing the end of anchor elements: https://bugs.chromium.org/p/chromium/issues/detail?id=1259100
	        // Therefore we don't allow native events to insert text at the end of anchor nodes.
	        var {
	          anchor
	        } = selection;
	        var [node, offset] = ReactEditor.toDOMPoint(editor, anchor);
	        var anchorNode = (_node$parentElement = node.parentElement) === null || _node$parentElement === void 0 ? void 0 : _node$parentElement.closest('a');
	        var _window = ReactEditor.getWindow(editor);
	        if (native && anchorNode && ReactEditor.hasDOMNode(editor, anchorNode)) {
	          var _lastText$textContent;
	          // Find the last text node inside the anchor.
	          var lastText = _window === null || _window === void 0 ? void 0 : _window.document.createTreeWalker(anchorNode, NodeFilter.SHOW_TEXT).lastChild();
	          if (lastText === node && ((_lastText$textContent = lastText.textContent) === null || _lastText$textContent === void 0 ? void 0 : _lastText$textContent.length) === offset) {
	            native = false;
	          }
	        }
	        // Chrome has issues with the presence of tab characters inside elements with whiteSpace = 'pre'
	        // causing abnormal insert behavior: https://bugs.chromium.org/p/chromium/issues/detail?id=1219139
	        if (native && node.parentElement && (_window === null || _window === void 0 || (_window$getComputedSt = _window.getComputedStyle(node.parentElement)) === null || _window$getComputedSt === void 0 ? void 0 : _window$getComputedSt.whiteSpace) === 'pre') {
	          var block = Editor.above(editor, {
	            at: anchor.path,
	            match: n => Element$3.isElement(n) && Editor.isBlock(editor, n)
	          });
	          if (block && Node.string(block[0]).includes('\t')) {
	            native = false;
	          }
	        }
	      }
	      // COMPAT: For the deleting forward/backward input types we don't want
	      // to change the selection because it is the range that will be deleted,
	      // and those commands determine that for themselves.
	      if (!type.startsWith('delete') || type.startsWith('deleteBy')) {
	        var [targetRange] = event.getTargetRanges();
	        if (targetRange) {
	          var _range = ReactEditor.toSlateRange(editor, targetRange, {
	            exactMatch: false,
	            suppressThrow: false
	          });
	          if (!selection || !Range.equals(selection, _range)) {
	            native = false;
	            var selectionRef = !isCompositionChange && editor.selection && Editor.rangeRef(editor, editor.selection);
	            Transforms.select(editor, _range);
	            if (selectionRef) {
	              EDITOR_TO_USER_SELECTION.set(editor, selectionRef);
	            }
	          }
	        }
	      }
	      // Composition change types occur while a user is composing text and can't be
	      // cancelled. Let them through and wait for the composition to end.
	      if (isCompositionChange) {
	        return;
	      }
	      if (!native) {
	        event.preventDefault();
	      }
	      // COMPAT: If the selection is expanded, even if the command seems like
	      // a delete forward/backward command it should delete the selection.
	      if (selection && Range.isExpanded(selection) && type.startsWith('delete')) {
	        var direction = type.endsWith('Backward') ? 'backward' : 'forward';
	        Editor.deleteFragment(editor, {
	          direction
	        });
	        return;
	      }
	      switch (type) {
	        case 'deleteByComposition':
	        case 'deleteByCut':
	        case 'deleteByDrag':
	          {
	            Editor.deleteFragment(editor);
	            break;
	          }
	        case 'deleteContent':
	        case 'deleteContentForward':
	          {
	            Editor.deleteForward(editor);
	            break;
	          }
	        case 'deleteContentBackward':
	          {
	            Editor.deleteBackward(editor);
	            break;
	          }
	        case 'deleteEntireSoftLine':
	          {
	            Editor.deleteBackward(editor, {
	              unit: 'line'
	            });
	            Editor.deleteForward(editor, {
	              unit: 'line'
	            });
	            break;
	          }
	        case 'deleteHardLineBackward':
	          {
	            Editor.deleteBackward(editor, {
	              unit: 'block'
	            });
	            break;
	          }
	        case 'deleteSoftLineBackward':
	          {
	            Editor.deleteBackward(editor, {
	              unit: 'line'
	            });
	            break;
	          }
	        case 'deleteHardLineForward':
	          {
	            Editor.deleteForward(editor, {
	              unit: 'block'
	            });
	            break;
	          }
	        case 'deleteSoftLineForward':
	          {
	            Editor.deleteForward(editor, {
	              unit: 'line'
	            });
	            break;
	          }
	        case 'deleteWordBackward':
	          {
	            Editor.deleteBackward(editor, {
	              unit: 'word'
	            });
	            break;
	          }
	        case 'deleteWordForward':
	          {
	            Editor.deleteForward(editor, {
	              unit: 'word'
	            });
	            break;
	          }
	        case 'insertLineBreak':
	          Editor.insertSoftBreak(editor);
	          break;
	        case 'insertParagraph':
	          {
	            Editor.insertBreak(editor);
	            break;
	          }
	        case 'insertFromComposition':
	        case 'insertFromDrop':
	        case 'insertFromPaste':
	        case 'insertFromYank':
	        case 'insertReplacementText':
	        case 'insertText':
	          {
	            if (type === 'insertFromComposition') {
	              // COMPAT: in Safari, `compositionend` is dispatched after the
	              // `beforeinput` for "insertFromComposition". But if we wait for it
	              // then we will abort because we're still composing and the selection
	              // won't be updated properly.
	              // https://www.w3.org/TR/input-events-2/
	              if (ReactEditor.isComposing(editor)) {
	                setIsComposing(false);
	                IS_COMPOSING.set(editor, false);
	              }
	            }
	            // use a weak comparison instead of 'instanceof' to allow
	            // programmatic access of paste events coming from external windows
	            // like cypress where cy.window does not work realibly
	            if ((data === null || data === void 0 ? void 0 : data.constructor.name) === 'DataTransfer') {
	              ReactEditor.insertData(editor, data);
	            } else if (typeof data === 'string') {
	              // Only insertText operations use the native functionality, for now.
	              // Potentially expand to single character deletes, as well.
	              if (native) {
	                deferredOperations.current.push(() => Editor.insertText(editor, data));
	              } else {
	                Editor.insertText(editor, data);
	              }
	            }
	            break;
	          }
	      }
	      // Restore the actual user section if nothing manually set it.
	      var toRestore = (_EDITOR_TO_USER_SELEC = EDITOR_TO_USER_SELECTION.get(editor)) === null || _EDITOR_TO_USER_SELEC === void 0 ? void 0 : _EDITOR_TO_USER_SELEC.unref();
	      EDITOR_TO_USER_SELECTION.delete(editor);
	      if (toRestore && (!editor.selection || !Range.equals(editor.selection, toRestore))) {
	        Transforms.select(editor, toRestore);
	      }
	    }
	  }, [editor, onDOMSelectionChange, onUserInput, propsOnDOMBeforeInput, readOnly, scheduleOnDOMSelectionChange]);
	  var callbackRef = reactExports.useCallback(node => {
	    if (node == null) {
	      onDOMSelectionChange.cancel();
	      scheduleOnDOMSelectionChange.cancel();
	      EDITOR_TO_ELEMENT.delete(editor);
	      NODE_TO_ELEMENT.delete(editor);
	      if (ref.current && HAS_BEFORE_INPUT_SUPPORT) {
	        // @ts-ignore The `beforeinput` event isn't recognized.
	        ref.current.removeEventListener('beforeinput', onDOMBeforeInput);
	      }
	    } else {
	      // Attach a native DOM event handler for `beforeinput` events, because React's
	      // built-in `onBeforeInput` is actually a leaky polyfill that doesn't expose
	      // real `beforeinput` events sadly... (2019/11/04)
	      // https://github.com/facebook/react/issues/11211
	      if (HAS_BEFORE_INPUT_SUPPORT) {
	        // @ts-ignore The `beforeinput` event isn't recognized.
	        node.addEventListener('beforeinput', onDOMBeforeInput);
	      }
	    }
	    ref.current = node;
	  }, [onDOMSelectionChange, scheduleOnDOMSelectionChange, editor, onDOMBeforeInput]);
	  useIsomorphicLayoutEffect(() => {
	    var window = ReactEditor.getWindow(editor);
	    // Attach a native DOM event handler for `selectionchange`, because React's
	    // built-in `onSelect` handler doesn't fire for all selection changes. It's
	    // a leaky polyfill that only fires on keypresses or clicks. Instead, we
	    // want to fire for any change to the selection inside the editor.
	    // (2019/11/04) https://github.com/facebook/react/issues/5785
	    window.document.addEventListener('selectionchange', scheduleOnDOMSelectionChange);
	    // Listen for dragend and drop globally. In Firefox, if a drop handler
	    // initiates an operation that causes the originally dragged element to
	    // unmount, that element will not emit a dragend event. (2024/06/21)
	    var stoppedDragging = () => {
	      state.isDraggingInternally = false;
	    };
	    window.document.addEventListener('dragend', stoppedDragging);
	    window.document.addEventListener('drop', stoppedDragging);
	    return () => {
	      window.document.removeEventListener('selectionchange', scheduleOnDOMSelectionChange);
	      window.document.removeEventListener('dragend', stoppedDragging);
	      window.document.removeEventListener('drop', stoppedDragging);
	    };
	  }, [scheduleOnDOMSelectionChange, state]);
	  var decorations = decorate([editor, []]);
	  var showPlaceholder = placeholder && editor.children.length === 1 && Array.from(Node.texts(editor)).length === 1 && Node.string(editor) === '' && !isComposing;
	  var placeHolderResizeHandler = reactExports.useCallback(placeholderEl => {
	    if (placeholderEl && showPlaceholder) {
	      var _placeholderEl$getBou;
	      setPlaceholderHeight((_placeholderEl$getBou = placeholderEl.getBoundingClientRect()) === null || _placeholderEl$getBou === void 0 ? void 0 : _placeholderEl$getBou.height);
	    } else {
	      setPlaceholderHeight(undefined);
	    }
	  }, [showPlaceholder]);
	  if (showPlaceholder) {
	    var start = Editor.start(editor, []);
	    decorations.push({
	      [PLACEHOLDER_SYMBOL]: true,
	      placeholder,
	      onPlaceholderResize: placeHolderResizeHandler,
	      anchor: start,
	      focus: start
	    });
	  }
	  var {
	    marks
	  } = editor;
	  state.hasMarkPlaceholder = false;
	  if (editor.selection && Range.isCollapsed(editor.selection) && marks) {
	    var {
	      anchor
	    } = editor.selection;
	    var leaf = Node.leaf(editor, anchor.path);
	    var rest = _objectWithoutProperties(leaf, _excluded2);
	    // While marks isn't a 'complete' text, we can still use loose Text.equals
	    // here which only compares marks anyway.
	    if (!Text$1.equals(leaf, marks, {
	      loose: true
	    })) {
	      state.hasMarkPlaceholder = true;
	      var unset = Object.fromEntries(Object.keys(rest).map(mark => [mark, null]));
	      decorations.push(_objectSpread$1(_objectSpread$1(_objectSpread$1({
	        [MARK_PLACEHOLDER_SYMBOL]: true
	      }, unset), marks), {}, {
	        anchor,
	        focus: anchor
	      }));
	    }
	  }
	  // Update EDITOR_TO_MARK_PLACEHOLDER_MARKS in setTimeout useEffect to ensure we don't set it
	  // before we receive the composition end event.
	  reactExports.useEffect(() => {
	    setTimeout(() => {
	      var {
	        selection
	      } = editor;
	      if (selection) {
	        var {
	          anchor: _anchor
	        } = selection;
	        var _text = Node.leaf(editor, _anchor.path);
	        // While marks isn't a 'complete' text, we can still use loose Text.equals
	        // here which only compares marks anyway.
	        if (marks && !Text$1.equals(_text, marks, {
	          loose: true
	        })) {
	          EDITOR_TO_PENDING_INSERTION_MARKS.set(editor, marks);
	          return;
	        }
	      }
	      EDITOR_TO_PENDING_INSERTION_MARKS.delete(editor);
	    });
	  });
	  return /*#__PURE__*/React.createElement(ReadOnlyContext.Provider, {
	    value: readOnly
	  }, /*#__PURE__*/React.createElement(DecorateContext.Provider, {
	    value: decorate
	  }, /*#__PURE__*/React.createElement(RestoreDOM, {
	    node: ref,
	    receivedUserInput: receivedUserInput
	  }, /*#__PURE__*/React.createElement(Component, _objectSpread$1(_objectSpread$1({
	    role: readOnly ? undefined : 'textbox',
	    "aria-multiline": readOnly ? undefined : true
	  }, attributes), {}, {
	    // COMPAT: Certain browsers don't support the `beforeinput` event, so we'd
	    // have to use hacks to make these replacement-based features work.
	    // For SSR situations HAS_BEFORE_INPUT_SUPPORT is false and results in prop
	    // mismatch warning app moves to browser. Pass-through consumer props when
	    // not CAN_USE_DOM (SSR) and default to falsy value
	    spellCheck: HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM ? attributes.spellCheck : false,
	    autoCorrect: HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM ? attributes.autoCorrect : 'false',
	    autoCapitalize: HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM ? attributes.autoCapitalize : 'false',
	    "data-slate-editor": true,
	    "data-slate-node": "value",
	    // explicitly set this
	    contentEditable: !readOnly,
	    // in some cases, a decoration needs access to the range / selection to decorate a text node,
	    // then you will select the whole text node when you select part the of text
	    // this magic zIndex="-1" will fix it
	    zindex: -1,
	    suppressContentEditableWarning: true,
	    ref: callbackRef,
	    style: _objectSpread$1(_objectSpread$1({}, disableDefaultStyles ? {} : _objectSpread$1({
	      // Allow positioning relative to the editable element.
	      position: 'relative',
	      // Preserve adjacent whitespace and new lines.
	      whiteSpace: 'pre-wrap',
	      // Allow words to break if they are too long.
	      wordWrap: 'break-word'
	    }, placeholderHeight ? {
	      minHeight: placeholderHeight
	    } : {})), userStyle),
	    onBeforeInput: reactExports.useCallback(event => {
	      // COMPAT: Certain browsers don't support the `beforeinput` event, so we
	      // fall back to React's leaky polyfill instead just for it. It
	      // only works for the `insertText` input type.
	      if (!HAS_BEFORE_INPUT_SUPPORT && !readOnly && !isEventHandled(event, attributes.onBeforeInput) && ReactEditor.hasSelectableTarget(editor, event.target)) {
	        event.preventDefault();
	        if (!ReactEditor.isComposing(editor)) {
	          var _text2 = event.data;
	          Editor.insertText(editor, _text2);
	        }
	      }
	    }, [attributes.onBeforeInput, editor, readOnly]),
	    onInput: reactExports.useCallback(event => {
	      if (isEventHandled(event, attributes.onInput)) {
	        return;
	      }
	      if (androidInputManagerRef.current) {
	        androidInputManagerRef.current.handleInput();
	        return;
	      }
	      // Flush native operations, as native events will have propogated
	      // and we can correctly compare DOM text values in components
	      // to stop rendering, so that browser functions like autocorrect
	      // and spellcheck work as expected.
	      for (var op of deferredOperations.current) {
	        op();
	      }
	      deferredOperations.current = [];
	    }, [attributes.onInput]),
	    onBlur: reactExports.useCallback(event => {
	      if (readOnly || state.isUpdatingSelection || !ReactEditor.hasSelectableTarget(editor, event.target) || isEventHandled(event, attributes.onBlur)) {
	        return;
	      }
	      // COMPAT: If the current `activeElement` is still the previous
	      // one, this is due to the window being blurred when the tab
	      // itself becomes unfocused, so we want to abort early to allow to
	      // editor to stay focused when the tab becomes focused again.
	      var root = ReactEditor.findDocumentOrShadowRoot(editor);
	      if (state.latestElement === root.activeElement) {
	        return;
	      }
	      var {
	        relatedTarget
	      } = event;
	      var el = ReactEditor.toDOMNode(editor, editor);
	      // COMPAT: The event should be ignored if the focus is returning
	      // to the editor from an embedded editable element (eg. an <input>
	      // element inside a void node).
	      if (relatedTarget === el) {
	        return;
	      }
	      // COMPAT: The event should be ignored if the focus is moving from
	      // the editor to inside a void node's spacer element.
	      if (isDOMElement(relatedTarget) && relatedTarget.hasAttribute('data-slate-spacer')) {
	        return;
	      }
	      // COMPAT: The event should be ignored if the focus is moving to a
	      // non- editable section of an element that isn't a void node (eg.
	      // a list item of the check list example).
	      if (relatedTarget != null && isDOMNode(relatedTarget) && ReactEditor.hasDOMNode(editor, relatedTarget)) {
	        var node = ReactEditor.toSlateNode(editor, relatedTarget);
	        if (Element$3.isElement(node) && !editor.isVoid(node)) {
	          return;
	        }
	      }
	      // COMPAT: Safari doesn't always remove the selection even if the content-
	      // editable element no longer has focus. Refer to:
	      // https://stackoverflow.com/questions/12353247/force-contenteditable-div-to-stop-accepting-input-after-it-loses-focus-under-web
	      if (IS_WEBKIT) {
	        var domSelection = getSelection(root);
	        domSelection === null || domSelection === void 0 || domSelection.removeAllRanges();
	      }
	      IS_FOCUSED.delete(editor);
	    }, [readOnly, state.isUpdatingSelection, state.latestElement, editor, attributes.onBlur]),
	    onClick: reactExports.useCallback(event => {
	      if (ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onClick) && isDOMNode(event.target)) {
	        var node = ReactEditor.toSlateNode(editor, event.target);
	        var path = ReactEditor.findPath(editor, node);
	        // At this time, the Slate document may be arbitrarily different,
	        // because onClick handlers can change the document before we get here.
	        // Therefore we must check that this path actually exists,
	        // and that it still refers to the same node.
	        if (!Editor.hasPath(editor, path) || Node.get(editor, path) !== node) {
	          return;
	        }
	        if (event.detail === TRIPLE_CLICK && path.length >= 1) {
	          var blockPath = path;
	          if (!(Element$3.isElement(node) && Editor.isBlock(editor, node))) {
	            var _block$;
	            var block = Editor.above(editor, {
	              match: n => Element$3.isElement(n) && Editor.isBlock(editor, n),
	              at: path
	            });
	            blockPath = (_block$ = block === null || block === void 0 ? void 0 : block[1]) !== null && _block$ !== void 0 ? _block$ : path.slice(0, 1);
	          }
	          var range = Editor.range(editor, blockPath);
	          Transforms.select(editor, range);
	          return;
	        }
	        if (readOnly) {
	          return;
	        }
	        var _start = Editor.start(editor, path);
	        var end = Editor.end(editor, path);
	        var startVoid = Editor.void(editor, {
	          at: _start
	        });
	        var endVoid = Editor.void(editor, {
	          at: end
	        });
	        if (startVoid && endVoid && Path.equals(startVoid[1], endVoid[1])) {
	          var _range2 = Editor.range(editor, _start);
	          Transforms.select(editor, _range2);
	        }
	      }
	    }, [editor, attributes.onClick, readOnly]),
	    onCompositionEnd: reactExports.useCallback(event => {
	      if (ReactEditor.hasSelectableTarget(editor, event.target)) {
	        var _androidInputManagerR3;
	        if (ReactEditor.isComposing(editor)) {
	          Promise.resolve().then(() => {
	            setIsComposing(false);
	            IS_COMPOSING.set(editor, false);
	          });
	        }
	        (_androidInputManagerR3 = androidInputManagerRef.current) === null || _androidInputManagerR3 === void 0 || _androidInputManagerR3.handleCompositionEnd(event);
	        if (isEventHandled(event, attributes.onCompositionEnd) || IS_ANDROID) {
	          return;
	        }
	        // COMPAT: In Chrome, `beforeinput` events for compositions
	        // aren't correct and never fire the "insertFromComposition"
	        // type that we need. So instead, insert whenever a composition
	        // ends since it will already have been committed to the DOM.
	        if (!IS_WEBKIT && !IS_FIREFOX_LEGACY && !IS_IOS && !IS_WECHATBROWSER && !IS_UC_MOBILE && event.data) {
	          var placeholderMarks = EDITOR_TO_PENDING_INSERTION_MARKS.get(editor);
	          EDITOR_TO_PENDING_INSERTION_MARKS.delete(editor);
	          // Ensure we insert text with the marks the user was actually seeing
	          if (placeholderMarks !== undefined) {
	            EDITOR_TO_USER_MARKS.set(editor, editor.marks);
	            editor.marks = placeholderMarks;
	          }
	          Editor.insertText(editor, event.data);
	          var userMarks = EDITOR_TO_USER_MARKS.get(editor);
	          EDITOR_TO_USER_MARKS.delete(editor);
	          if (userMarks !== undefined) {
	            editor.marks = userMarks;
	          }
	        }
	      }
	    }, [attributes.onCompositionEnd, editor]),
	    onCompositionUpdate: reactExports.useCallback(event => {
	      if (ReactEditor.hasSelectableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionUpdate)) {
	        if (!ReactEditor.isComposing(editor)) {
	          setIsComposing(true);
	          IS_COMPOSING.set(editor, true);
	        }
	      }
	    }, [attributes.onCompositionUpdate, editor]),
	    onCompositionStart: reactExports.useCallback(event => {
	      if (ReactEditor.hasSelectableTarget(editor, event.target)) {
	        var _androidInputManagerR4;
	        (_androidInputManagerR4 = androidInputManagerRef.current) === null || _androidInputManagerR4 === void 0 || _androidInputManagerR4.handleCompositionStart(event);
	        if (isEventHandled(event, attributes.onCompositionStart) || IS_ANDROID) {
	          return;
	        }
	        setIsComposing(true);
	        var {
	          selection
	        } = editor;
	        if (selection && Range.isExpanded(selection)) {
	          Editor.deleteFragment(editor);
	          return;
	        }
	      }
	    }, [attributes.onCompositionStart, editor]),
	    onCopy: reactExports.useCallback(event => {
	      if (ReactEditor.hasSelectableTarget(editor, event.target) && !isEventHandled(event, attributes.onCopy) && !isDOMEventTargetInput(event)) {
	        event.preventDefault();
	        ReactEditor.setFragmentData(editor, event.clipboardData, 'copy');
	      }
	    }, [attributes.onCopy, editor]),
	    onCut: reactExports.useCallback(event => {
	      if (!readOnly && ReactEditor.hasSelectableTarget(editor, event.target) && !isEventHandled(event, attributes.onCut) && !isDOMEventTargetInput(event)) {
	        event.preventDefault();
	        ReactEditor.setFragmentData(editor, event.clipboardData, 'cut');
	        var {
	          selection
	        } = editor;
	        if (selection) {
	          if (Range.isExpanded(selection)) {
	            Editor.deleteFragment(editor);
	          } else {
	            var node = Node.parent(editor, selection.anchor.path);
	            if (Editor.isVoid(editor, node)) {
	              Transforms.delete(editor);
	            }
	          }
	        }
	      }
	    }, [readOnly, editor, attributes.onCut]),
	    onDragOver: reactExports.useCallback(event => {
	      if (ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDragOver)) {
	        // Only when the target is void, call `preventDefault` to signal
	        // that drops are allowed. Editable content is droppable by
	        // default, and calling `preventDefault` hides the cursor.
	        var node = ReactEditor.toSlateNode(editor, event.target);
	        if (Element$3.isElement(node) && Editor.isVoid(editor, node)) {
	          event.preventDefault();
	        }
	      }
	    }, [attributes.onDragOver, editor]),
	    onDragStart: reactExports.useCallback(event => {
	      if (!readOnly && ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDragStart)) {
	        var node = ReactEditor.toSlateNode(editor, event.target);
	        var path = ReactEditor.findPath(editor, node);
	        var voidMatch = Element$3.isElement(node) && Editor.isVoid(editor, node) || Editor.void(editor, {
	          at: path,
	          voids: true
	        });
	        // If starting a drag on a void node, make sure it is selected
	        // so that it shows up in the selection's fragment.
	        if (voidMatch) {
	          var range = Editor.range(editor, path);
	          Transforms.select(editor, range);
	        }
	        state.isDraggingInternally = true;
	        ReactEditor.setFragmentData(editor, event.dataTransfer, 'drag');
	      }
	    }, [readOnly, editor, attributes.onDragStart, state]),
	    onDrop: reactExports.useCallback(event => {
	      if (!readOnly && ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDrop)) {
	        event.preventDefault();
	        // Keep a reference to the dragged range before updating selection
	        var draggedRange = editor.selection;
	        // Find the range where the drop happened
	        var range = ReactEditor.findEventRange(editor, event);
	        var data = event.dataTransfer;
	        Transforms.select(editor, range);
	        if (state.isDraggingInternally) {
	          if (draggedRange && !Range.equals(draggedRange, range) && !Editor.void(editor, {
	            at: range,
	            voids: true
	          })) {
	            Transforms.delete(editor, {
	              at: draggedRange
	            });
	          }
	        }
	        ReactEditor.insertData(editor, data);
	        // When dragging from another source into the editor, it's possible
	        // that the current editor does not have focus.
	        if (!ReactEditor.isFocused(editor)) {
	          ReactEditor.focus(editor);
	        }
	      }
	    }, [readOnly, editor, attributes.onDrop, state]),
	    onDragEnd: reactExports.useCallback(event => {
	      if (!readOnly && state.isDraggingInternally && attributes.onDragEnd && ReactEditor.hasTarget(editor, event.target)) {
	        attributes.onDragEnd(event);
	      }
	    }, [readOnly, state, attributes, editor]),
	    onFocus: reactExports.useCallback(event => {
	      if (!readOnly && !state.isUpdatingSelection && ReactEditor.hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onFocus)) {
	        var el = ReactEditor.toDOMNode(editor, editor);
	        var root = ReactEditor.findDocumentOrShadowRoot(editor);
	        state.latestElement = root.activeElement;
	        // COMPAT: If the editor has nested editable elements, the focus
	        // can go to them. In Firefox, this must be prevented because it
	        // results in issues with keyboard navigation. (2017/03/30)
	        if (IS_FIREFOX && event.target !== el) {
	          el.focus();
	          return;
	        }
	        IS_FOCUSED.set(editor, true);
	      }
	    }, [readOnly, state, editor, attributes.onFocus]),
	    onKeyDown: reactExports.useCallback(event => {
	      if (!readOnly && ReactEditor.hasEditableTarget(editor, event.target)) {
	        var _androidInputManagerR5;
	        (_androidInputManagerR5 = androidInputManagerRef.current) === null || _androidInputManagerR5 === void 0 || _androidInputManagerR5.handleKeyDown(event);
	        var {
	          nativeEvent
	        } = event;
	        // COMPAT: The composition end event isn't fired reliably in all browsers,
	        // so we sometimes might end up stuck in a composition state even though we
	        // aren't composing any more.
	        if (ReactEditor.isComposing(editor) && nativeEvent.isComposing === false) {
	          IS_COMPOSING.set(editor, false);
	          setIsComposing(false);
	        }
	        if (isEventHandled(event, attributes.onKeyDown) || ReactEditor.isComposing(editor)) {
	          return;
	        }
	        var {
	          selection
	        } = editor;
	        var element = editor.children[selection !== null ? selection.focus.path[0] : 0];
	        var isRTL = getDirection(Node.string(element)) === 'rtl';
	        // COMPAT: Since we prevent the default behavior on
	        // `beforeinput` events, the browser doesn't think there's ever
	        // any history stack to undo or redo, so we have to manage these
	        // hotkeys ourselves. (2019/11/06)
	        if (Hotkeys.isRedo(nativeEvent)) {
	          event.preventDefault();
	          var maybeHistoryEditor = editor;
	          if (typeof maybeHistoryEditor.redo === 'function') {
	            maybeHistoryEditor.redo();
	          }
	          return;
	        }
	        if (Hotkeys.isUndo(nativeEvent)) {
	          event.preventDefault();
	          var _maybeHistoryEditor = editor;
	          if (typeof _maybeHistoryEditor.undo === 'function') {
	            _maybeHistoryEditor.undo();
	          }
	          return;
	        }
	        // COMPAT: Certain browsers don't handle the selection updates
	        // properly. In Chrome, the selection isn't properly extended.
	        // And in Firefox, the selection isn't properly collapsed.
	        // (2017/10/17)
	        if (Hotkeys.isMoveLineBackward(nativeEvent)) {
	          event.preventDefault();
	          Transforms.move(editor, {
	            unit: 'line',
	            reverse: true
	          });
	          return;
	        }
	        if (Hotkeys.isMoveLineForward(nativeEvent)) {
	          event.preventDefault();
	          Transforms.move(editor, {
	            unit: 'line'
	          });
	          return;
	        }
	        if (Hotkeys.isExtendLineBackward(nativeEvent)) {
	          event.preventDefault();
	          Transforms.move(editor, {
	            unit: 'line',
	            edge: 'focus',
	            reverse: true
	          });
	          return;
	        }
	        if (Hotkeys.isExtendLineForward(nativeEvent)) {
	          event.preventDefault();
	          Transforms.move(editor, {
	            unit: 'line',
	            edge: 'focus'
	          });
	          return;
	        }
	        // COMPAT: If a void node is selected, or a zero-width text node
	        // adjacent to an inline is selected, we need to handle these
	        // hotkeys manually because browsers won't be able to skip over
	        // the void node with the zero-width space not being an empty
	        // string.
	        if (Hotkeys.isMoveBackward(nativeEvent)) {
	          event.preventDefault();
	          if (selection && Range.isCollapsed(selection)) {
	            Transforms.move(editor, {
	              reverse: !isRTL
	            });
	          } else {
	            Transforms.collapse(editor, {
	              edge: isRTL ? 'end' : 'start'
	            });
	          }
	          return;
	        }
	        if (Hotkeys.isMoveForward(nativeEvent)) {
	          event.preventDefault();
	          if (selection && Range.isCollapsed(selection)) {
	            Transforms.move(editor, {
	              reverse: isRTL
	            });
	          } else {
	            Transforms.collapse(editor, {
	              edge: isRTL ? 'start' : 'end'
	            });
	          }
	          return;
	        }
	        if (Hotkeys.isMoveWordBackward(nativeEvent)) {
	          event.preventDefault();
	          if (selection && Range.isExpanded(selection)) {
	            Transforms.collapse(editor, {
	              edge: 'focus'
	            });
	          }
	          Transforms.move(editor, {
	            unit: 'word',
	            reverse: !isRTL
	          });
	          return;
	        }
	        if (Hotkeys.isMoveWordForward(nativeEvent)) {
	          event.preventDefault();
	          if (selection && Range.isExpanded(selection)) {
	            Transforms.collapse(editor, {
	              edge: 'focus'
	            });
	          }
	          Transforms.move(editor, {
	            unit: 'word',
	            reverse: isRTL
	          });
	          return;
	        }
	        // COMPAT: Certain browsers don't support the `beforeinput` event, so we
	        // fall back to guessing at the input intention for hotkeys.
	        // COMPAT: In iOS, some of these hotkeys are handled in the
	        if (!HAS_BEFORE_INPUT_SUPPORT) {
	          // We don't have a core behavior for these, but they change the
	          // DOM if we don't prevent them, so we have to.
	          if (Hotkeys.isBold(nativeEvent) || Hotkeys.isItalic(nativeEvent) || Hotkeys.isTransposeCharacter(nativeEvent)) {
	            event.preventDefault();
	            return;
	          }
	          if (Hotkeys.isSoftBreak(nativeEvent)) {
	            event.preventDefault();
	            Editor.insertSoftBreak(editor);
	            return;
	          }
	          if (Hotkeys.isSplitBlock(nativeEvent)) {
	            event.preventDefault();
	            Editor.insertBreak(editor);
	            return;
	          }
	          if (Hotkeys.isDeleteBackward(nativeEvent)) {
	            event.preventDefault();
	            if (selection && Range.isExpanded(selection)) {
	              Editor.deleteFragment(editor, {
	                direction: 'backward'
	              });
	            } else {
	              Editor.deleteBackward(editor);
	            }
	            return;
	          }
	          if (Hotkeys.isDeleteForward(nativeEvent)) {
	            event.preventDefault();
	            if (selection && Range.isExpanded(selection)) {
	              Editor.deleteFragment(editor, {
	                direction: 'forward'
	              });
	            } else {
	              Editor.deleteForward(editor);
	            }
	            return;
	          }
	          if (Hotkeys.isDeleteLineBackward(nativeEvent)) {
	            event.preventDefault();
	            if (selection && Range.isExpanded(selection)) {
	              Editor.deleteFragment(editor, {
	                direction: 'backward'
	              });
	            } else {
	              Editor.deleteBackward(editor, {
	                unit: 'line'
	              });
	            }
	            return;
	          }
	          if (Hotkeys.isDeleteLineForward(nativeEvent)) {
	            event.preventDefault();
	            if (selection && Range.isExpanded(selection)) {
	              Editor.deleteFragment(editor, {
	                direction: 'forward'
	              });
	            } else {
	              Editor.deleteForward(editor, {
	                unit: 'line'
	              });
	            }
	            return;
	          }
	          if (Hotkeys.isDeleteWordBackward(nativeEvent)) {
	            event.preventDefault();
	            if (selection && Range.isExpanded(selection)) {
	              Editor.deleteFragment(editor, {
	                direction: 'backward'
	              });
	            } else {
	              Editor.deleteBackward(editor, {
	                unit: 'word'
	              });
	            }
	            return;
	          }
	          if (Hotkeys.isDeleteWordForward(nativeEvent)) {
	            event.preventDefault();
	            if (selection && Range.isExpanded(selection)) {
	              Editor.deleteFragment(editor, {
	                direction: 'forward'
	              });
	            } else {
	              Editor.deleteForward(editor, {
	                unit: 'word'
	              });
	            }
	            return;
	          }
	        } else {
	          if (IS_CHROME || IS_WEBKIT) {
	            // COMPAT: Chrome and Safari support `beforeinput` event but do not fire
	            // an event when deleting backwards in a selected void inline node
	            if (selection && (Hotkeys.isDeleteBackward(nativeEvent) || Hotkeys.isDeleteForward(nativeEvent)) && Range.isCollapsed(selection)) {
	              var currentNode = Node.parent(editor, selection.anchor.path);
	              if (Element$3.isElement(currentNode) && Editor.isVoid(editor, currentNode) && (Editor.isInline(editor, currentNode) || Editor.isBlock(editor, currentNode))) {
	                event.preventDefault();
	                Editor.deleteBackward(editor, {
	                  unit: 'block'
	                });
	                return;
	              }
	            }
	          }
	        }
	      }
	    }, [readOnly, editor, attributes.onKeyDown]),
	    onPaste: reactExports.useCallback(event => {
	      if (!readOnly && ReactEditor.hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onPaste)) {
	        // COMPAT: Certain browsers don't support the `beforeinput` event, so we
	        // fall back to React's `onPaste` here instead.
	        // COMPAT: Firefox, Chrome and Safari don't emit `beforeinput` events
	        // when "paste without formatting" is used, so fallback. (2020/02/20)
	        // COMPAT: Safari InputEvents generated by pasting won't include
	        // application/x-slate-fragment items, so use the
	        // ClipboardEvent here. (2023/03/15)
	        if (!HAS_BEFORE_INPUT_SUPPORT || isPlainTextOnlyPaste(event.nativeEvent) || IS_WEBKIT) {
	          event.preventDefault();
	          ReactEditor.insertData(editor, event.clipboardData);
	        }
	      }
	    }, [readOnly, editor, attributes.onPaste])
	  }), /*#__PURE__*/React.createElement(Children, {
	    decorations: decorations,
	    node: editor,
	    renderElement: renderElement,
	    renderPlaceholder: renderPlaceholder,
	    renderLeaf: renderLeaf,
	    selection: editor.selection
	  })))));
	};
	/**
	 * The default placeholder element
	 */
	var DefaultPlaceholder = _ref => {
	  var {
	    attributes,
	    children
	  } = _ref;
	  return (
	    /*#__PURE__*/
	    // COMPAT: Artificially add a line-break to the end on the placeholder element
	    // to prevent Android IMEs to pick up its content in autocorrect and to auto-capitalize the first letter
	    React.createElement("span", _objectSpread$1({}, attributes), children, IS_ANDROID && /*#__PURE__*/React.createElement("br", null))
	  );
	};
	/**
	 * A default memoized decorate function.
	 */
	var defaultDecorate = () => [];
	/**
	 * A default implement to scroll dom range into view.
	 */
	var defaultScrollSelectionIntoView = (editor, domRange) => {
	  // This was affecting the selection of multiple blocks and dragging behavior,
	  // so enabled only if the selection has been collapsed.
	  if (domRange.getBoundingClientRect && (!editor.selection || editor.selection && Range.isCollapsed(editor.selection))) {
	    var leafEl = domRange.startContainer.parentElement;
	    leafEl.getBoundingClientRect = domRange.getBoundingClientRect.bind(domRange);
	    e(leafEl, {
	      scrollMode: 'if-needed'
	    });
	    // @ts-expect-error an unorthodox delete D:
	    delete leafEl.getBoundingClientRect;
	  }
	};
	/**
	 * Check if an event is overrided by a handler.
	 */
	var isEventHandled = (event, handler) => {
	  if (!handler) {
	    return false;
	  }
	  // The custom event handler may return a boolean to specify whether the event
	  // shall be treated as being handled or not.
	  var shouldTreatEventAsHandled = handler(event);
	  if (shouldTreatEventAsHandled != null) {
	    return shouldTreatEventAsHandled;
	  }
	  return event.isDefaultPrevented() || event.isPropagationStopped();
	};
	/**
	 * Check if the event's target is an input element
	 */
	var isDOMEventTargetInput = event => {
	  return isDOMNode(event.target) && (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement);
	};
	/**
	 * Check if a DOM event is overrided by a handler.
	 */
	var isDOMEventHandled = (event, handler) => {
	  if (!handler) {
	    return false;
	  }
	  // The custom event handler may return a boolean to specify whether the event
	  // shall be treated as being handled or not.
	  var shouldTreatEventAsHandled = handler(event);
	  if (shouldTreatEventAsHandled != null) {
	    return shouldTreatEventAsHandled;
	  }
	  return event.defaultPrevented;
	};

	/**
	 * A React context for sharing the `focused` state of the editor.
	 */
	var FocusedContext = /*#__PURE__*/reactExports.createContext(false);
	/**
	 * A React context for sharing the editor selector context in a way to control rerenders
	 */
	var SlateSelectorContext = /*#__PURE__*/reactExports.createContext({});
	/**
	 * Create selector context with editor updating on every editor change
	 */
	function useSelectorContext(editor) {
	  var eventListeners = reactExports.useRef([]).current;
	  var slateRef = reactExports.useRef({
	    editor
	  }).current;
	  var onChange = reactExports.useCallback(editor => {
	    slateRef.editor = editor;
	    eventListeners.forEach(listener => listener(editor));
	  }, [eventListeners, slateRef]);
	  var selectorContext = reactExports.useMemo(() => {
	    return {
	      getSlate: () => slateRef.editor,
	      addEventListener: callback => {
	        eventListeners.push(callback);
	        return () => {
	          eventListeners.splice(eventListeners.indexOf(callback), 1);
	        };
	      }
	    };
	  }, [eventListeners, slateRef]);
	  return {
	    selectorContext,
	    onChange
	  };
	}

	var _excluded = ["editor", "children", "onChange", "onSelectionChange", "onValueChange", "initialValue"];
	/**
	 * A wrapper around the provider to handle `onChange` events, because the editor
	 * is a mutable singleton so it won't ever register as "changed" otherwise.
	 */
	var Slate = props => {
	  var {
	      editor,
	      children,
	      onChange,
	      onSelectionChange,
	      onValueChange,
	      initialValue
	    } = props,
	    rest = _objectWithoutProperties(props, _excluded);
	  var [context, setContext] = React.useState(() => {
	    if (!Node.isNodeList(initialValue)) {
	      throw new Error("[Slate] initialValue is invalid! Expected a list of elements but got: ".concat(Scrubber.stringify(initialValue)));
	    }
	    if (!Editor.isEditor(editor)) {
	      throw new Error("[Slate] editor is invalid! You passed: ".concat(Scrubber.stringify(editor)));
	    }
	    editor.children = initialValue;
	    Object.assign(editor, rest);
	    return {
	      v: 0,
	      editor
	    };
	  });
	  var {
	    selectorContext,
	    onChange: handleSelectorChange
	  } = useSelectorContext(editor);
	  var onContextChange = reactExports.useCallback(options => {
	    var _options$operation;
	    if (onChange) {
	      onChange(editor.children);
	    }
	    switch (options === null || options === void 0 || (_options$operation = options.operation) === null || _options$operation === void 0 ? void 0 : _options$operation.type) {
	      case 'set_selection':
	        onSelectionChange === null || onSelectionChange === void 0 || onSelectionChange(editor.selection);
	        break;
	      default:
	        onValueChange === null || onValueChange === void 0 || onValueChange(editor.children);
	    }
	    setContext(prevContext => ({
	      v: prevContext.v + 1,
	      editor
	    }));
	    handleSelectorChange(editor);
	  }, [editor, handleSelectorChange, onChange, onSelectionChange, onValueChange]);
	  reactExports.useEffect(() => {
	    EDITOR_TO_ON_CHANGE.set(editor, onContextChange);
	    return () => {
	      EDITOR_TO_ON_CHANGE.set(editor, () => {});
	    };
	  }, [editor, onContextChange]);
	  var [isFocused, setIsFocused] = reactExports.useState(ReactEditor.isFocused(editor));
	  reactExports.useEffect(() => {
	    setIsFocused(ReactEditor.isFocused(editor));
	  }, [editor]);
	  useIsomorphicLayoutEffect(() => {
	    var fn = () => setIsFocused(ReactEditor.isFocused(editor));
	    if (REACT_MAJOR_VERSION >= 17) {
	      // In React >= 17 onFocus and onBlur listen to the focusin and focusout events during the bubbling phase.
	      // Therefore in order for <Editable />'s handlers to run first, which is necessary for ReactEditor.isFocused(editor)
	      // to return the correct value, we have to listen to the focusin and focusout events without useCapture here.
	      document.addEventListener('focusin', fn);
	      document.addEventListener('focusout', fn);
	      return () => {
	        document.removeEventListener('focusin', fn);
	        document.removeEventListener('focusout', fn);
	      };
	    } else {
	      document.addEventListener('focus', fn, true);
	      document.addEventListener('blur', fn, true);
	      return () => {
	        document.removeEventListener('focus', fn, true);
	        document.removeEventListener('blur', fn, true);
	      };
	    }
	  }, []);
	  return /*#__PURE__*/React.createElement(SlateSelectorContext.Provider, {
	    value: selectorContext
	  }, /*#__PURE__*/React.createElement(SlateContext.Provider, {
	    value: context
	  }, /*#__PURE__*/React.createElement(EditorContext.Provider, {
	    value: context.editor
	  }, /*#__PURE__*/React.createElement(FocusedContext.Provider, {
	    value: isFocused
	  }, children))));
	};

	/**
	 * Utilities for single-line deletion
	 */
	var doRectsIntersect = (rect, compareRect) => {
	  var middle = (compareRect.top + compareRect.bottom) / 2;
	  return rect.top <= middle && rect.bottom >= middle;
	};
	var areRangesSameLine = (editor, range1, range2) => {
	  var rect1 = ReactEditor.toDOMRange(editor, range1).getBoundingClientRect();
	  var rect2 = ReactEditor.toDOMRange(editor, range2).getBoundingClientRect();
	  return doRectsIntersect(rect1, rect2) && doRectsIntersect(rect2, rect1);
	};
	/**
	 * A helper utility that returns the end portion of a `Range`
	 * which is located on a single line.
	 *
	 * @param {Editor} editor The editor object to compare against
	 * @param {Range} parentRange The parent range to compare against
	 * @returns {Range} A valid portion of the parentRange which is one a single line
	 */
	var findCurrentLineRange = (editor, parentRange) => {
	  var parentRangeBoundary = Editor.range(editor, Range.end(parentRange));
	  var positions = Array.from(Editor.positions(editor, {
	    at: parentRange
	  }));
	  var left = 0;
	  var right = positions.length;
	  var middle = Math.floor(right / 2);
	  if (areRangesSameLine(editor, Editor.range(editor, positions[left]), parentRangeBoundary)) {
	    return Editor.range(editor, positions[left], parentRangeBoundary);
	  }
	  if (positions.length < 2) {
	    return Editor.range(editor, positions[positions.length - 1], parentRangeBoundary);
	  }
	  while (middle !== positions.length && middle !== left) {
	    if (areRangesSameLine(editor, Editor.range(editor, positions[middle]), parentRangeBoundary)) {
	      right = middle;
	    } else {
	      left = middle;
	    }
	    middle = Math.floor((left + right) / 2);
	  }
	  return Editor.range(editor, positions[right], parentRangeBoundary);
	};

	function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	/**
	 * `withReact` adds React and DOM specific behaviors to the editor.
	 *
	 * If you are using TypeScript, you must extend Slate's CustomTypes to use
	 * this plugin.
	 *
	 * See https://docs.slatejs.org/concepts/11-typescript to learn how.
	 */
	var withReact = function withReact(editor) {
	  var clipboardFormatKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x-slate-fragment';
	  var e = editor;
	  var {
	    apply,
	    onChange,
	    deleteBackward,
	    addMark,
	    removeMark
	  } = e;
	  // The WeakMap which maps a key to a specific HTMLElement must be scoped to the editor instance to
	  // avoid collisions between editors in the DOM that share the same value.
	  EDITOR_TO_KEY_TO_ELEMENT.set(e, new WeakMap());
	  e.addMark = (key, value) => {
	    var _EDITOR_TO_SCHEDULE_F, _EDITOR_TO_PENDING_DI;
	    (_EDITOR_TO_SCHEDULE_F = EDITOR_TO_SCHEDULE_FLUSH.get(e)) === null || _EDITOR_TO_SCHEDULE_F === void 0 || _EDITOR_TO_SCHEDULE_F();
	    if (!EDITOR_TO_PENDING_INSERTION_MARKS.get(e) && (_EDITOR_TO_PENDING_DI = EDITOR_TO_PENDING_DIFFS.get(e)) !== null && _EDITOR_TO_PENDING_DI !== void 0 && _EDITOR_TO_PENDING_DI.length) {
	      // Ensure the current pending diffs originating from changes before the addMark
	      // are applied with the current formatting
	      EDITOR_TO_PENDING_INSERTION_MARKS.set(e, null);
	    }
	    EDITOR_TO_USER_MARKS.delete(e);
	    addMark(key, value);
	  };
	  e.removeMark = key => {
	    var _EDITOR_TO_PENDING_DI2;
	    if (!EDITOR_TO_PENDING_INSERTION_MARKS.get(e) && (_EDITOR_TO_PENDING_DI2 = EDITOR_TO_PENDING_DIFFS.get(e)) !== null && _EDITOR_TO_PENDING_DI2 !== void 0 && _EDITOR_TO_PENDING_DI2.length) {
	      // Ensure the current pending diffs originating from changes before the addMark
	      // are applied with the current formatting
	      EDITOR_TO_PENDING_INSERTION_MARKS.set(e, null);
	    }
	    EDITOR_TO_USER_MARKS.delete(e);
	    removeMark(key);
	  };
	  e.deleteBackward = unit => {
	    if (unit !== 'line') {
	      return deleteBackward(unit);
	    }
	    if (e.selection && Range.isCollapsed(e.selection)) {
	      var parentBlockEntry = Editor.above(e, {
	        match: n => Element$3.isElement(n) && Editor.isBlock(e, n),
	        at: e.selection
	      });
	      if (parentBlockEntry) {
	        var [, parentBlockPath] = parentBlockEntry;
	        var parentElementRange = Editor.range(e, parentBlockPath, e.selection.anchor);
	        var currentLineRange = findCurrentLineRange(e, parentElementRange);
	        if (!Range.isCollapsed(currentLineRange)) {
	          Transforms.delete(e, {
	            at: currentLineRange
	          });
	        }
	      }
	    }
	  };
	  // This attempts to reset the NODE_TO_KEY entry to the correct value
	  // as apply() changes the object reference and hence invalidates the NODE_TO_KEY entry
	  e.apply = op => {
	    var matches = [];
	    var pathRefMatches = [];
	    var pendingDiffs = EDITOR_TO_PENDING_DIFFS.get(e);
	    if (pendingDiffs !== null && pendingDiffs !== void 0 && pendingDiffs.length) {
	      var transformed = pendingDiffs.map(textDiff => transformTextDiff(textDiff, op)).filter(Boolean);
	      EDITOR_TO_PENDING_DIFFS.set(e, transformed);
	    }
	    var pendingSelection = EDITOR_TO_PENDING_SELECTION.get(e);
	    if (pendingSelection) {
	      EDITOR_TO_PENDING_SELECTION.set(e, transformPendingRange(e, pendingSelection, op));
	    }
	    var pendingAction = EDITOR_TO_PENDING_ACTION.get(e);
	    if (pendingAction !== null && pendingAction !== void 0 && pendingAction.at) {
	      var at = Point.isPoint(pendingAction === null || pendingAction === void 0 ? void 0 : pendingAction.at) ? transformPendingPoint(e, pendingAction.at, op) : transformPendingRange(e, pendingAction.at, op);
	      EDITOR_TO_PENDING_ACTION.set(e, at ? _objectSpread(_objectSpread({}, pendingAction), {}, {
	        at
	      }) : null);
	    }
	    switch (op.type) {
	      case 'insert_text':
	      case 'remove_text':
	      case 'set_node':
	      case 'split_node':
	        {
	          matches.push(...getMatches(e, op.path));
	          break;
	        }
	      case 'set_selection':
	        {
	          var _EDITOR_TO_USER_SELEC;
	          // Selection was manually set, don't restore the user selection after the change.
	          (_EDITOR_TO_USER_SELEC = EDITOR_TO_USER_SELECTION.get(e)) === null || _EDITOR_TO_USER_SELEC === void 0 || _EDITOR_TO_USER_SELEC.unref();
	          EDITOR_TO_USER_SELECTION.delete(e);
	          break;
	        }
	      case 'insert_node':
	      case 'remove_node':
	        {
	          matches.push(...getMatches(e, Path.parent(op.path)));
	          break;
	        }
	      case 'merge_node':
	        {
	          var prevPath = Path.previous(op.path);
	          matches.push(...getMatches(e, prevPath));
	          break;
	        }
	      case 'move_node':
	        {
	          var commonPath = Path.common(Path.parent(op.path), Path.parent(op.newPath));
	          matches.push(...getMatches(e, commonPath));
	          var changedPath;
	          if (Path.isBefore(op.path, op.newPath)) {
	            matches.push(...getMatches(e, Path.parent(op.path)));
	            changedPath = op.newPath;
	          } else {
	            matches.push(...getMatches(e, Path.parent(op.newPath)));
	            changedPath = op.path;
	          }
	          var changedNode = Node.get(editor, Path.parent(changedPath));
	          var changedNodeKey = ReactEditor.findKey(e, changedNode);
	          var changedPathRef = Editor.pathRef(e, Path.parent(changedPath));
	          pathRefMatches.push([changedPathRef, changedNodeKey]);
	          break;
	        }
	    }
	    apply(op);
	    for (var [path, key] of matches) {
	      var [node] = Editor.node(e, path);
	      NODE_TO_KEY.set(node, key);
	    }
	    for (var [pathRef, _key] of pathRefMatches) {
	      if (pathRef.current) {
	        var [_node] = Editor.node(e, pathRef.current);
	        NODE_TO_KEY.set(_node, _key);
	      }
	    }
	  };
	  e.setFragmentData = data => {
	    var {
	      selection
	    } = e;
	    if (!selection) {
	      return;
	    }
	    var [start, end] = Range.edges(selection);
	    var startVoid = Editor.void(e, {
	      at: start.path
	    });
	    var endVoid = Editor.void(e, {
	      at: end.path
	    });
	    if (Range.isCollapsed(selection) && !startVoid) {
	      return;
	    }
	    // Create a fake selection so that we can add a Base64-encoded copy of the
	    // fragment to the HTML, to decode on future pastes.
	    var domRange = ReactEditor.toDOMRange(e, selection);
	    var contents = domRange.cloneContents();
	    var attach = contents.childNodes[0];
	    // Make sure attach is non-empty, since empty nodes will not get copied.
	    contents.childNodes.forEach(node => {
	      if (node.textContent && node.textContent.trim() !== '') {
	        attach = node;
	      }
	    });
	    // COMPAT: If the end node is a void node, we need to move the end of the
	    // range from the void node's spacer span, to the end of the void node's
	    // content, since the spacer is before void's content in the DOM.
	    if (endVoid) {
	      var [voidNode] = endVoid;
	      var r = domRange.cloneRange();
	      var domNode = ReactEditor.toDOMNode(e, voidNode);
	      r.setEndAfter(domNode);
	      contents = r.cloneContents();
	    }
	    // COMPAT: If the start node is a void node, we need to attach the encoded
	    // fragment to the void node's content node instead of the spacer, because
	    // attaching it to empty `<div>/<span>` nodes will end up having it erased by
	    // most browsers. (2018/04/27)
	    if (startVoid) {
	      attach = contents.querySelector('[data-slate-spacer]');
	    }
	    // Remove any zero-width space spans from the cloned DOM so that they don't
	    // show up elsewhere when pasted.
	    Array.from(contents.querySelectorAll('[data-slate-zero-width]')).forEach(zw => {
	      var isNewline = zw.getAttribute('data-slate-zero-width') === 'n';
	      zw.textContent = isNewline ? '\n' : '';
	    });
	    // Set a `data-slate-fragment` attribute on a non-empty node, so it shows up
	    // in the HTML, and can be used for intra-Slate pasting. If it's a text
	    // node, wrap it in a `<span>` so we have something to set an attribute on.
	    if (isDOMText(attach)) {
	      var span = attach.ownerDocument.createElement('span');
	      // COMPAT: In Chrome and Safari, if we don't add the `white-space` style
	      // then leading and trailing spaces will be ignored. (2017/09/21)
	      span.style.whiteSpace = 'pre';
	      span.appendChild(attach);
	      contents.appendChild(span);
	      attach = span;
	    }
	    var fragment = e.getFragment();
	    var string = JSON.stringify(fragment);
	    var encoded = window.btoa(encodeURIComponent(string));
	    attach.setAttribute('data-slate-fragment', encoded);
	    data.setData("application/".concat(clipboardFormatKey), encoded);
	    // Add the content to a <div> so that we can get its inner HTML.
	    var div = contents.ownerDocument.createElement('div');
	    div.appendChild(contents);
	    div.setAttribute('hidden', 'true');
	    contents.ownerDocument.body.appendChild(div);
	    data.setData('text/html', div.innerHTML);
	    data.setData('text/plain', getPlainText(div));
	    contents.ownerDocument.body.removeChild(div);
	    return data;
	  };
	  e.insertData = data => {
	    if (!e.insertFragmentData(data)) {
	      e.insertTextData(data);
	    }
	  };
	  e.insertFragmentData = data => {
	    /**
	     * Checking copied fragment from application/x-slate-fragment or data-slate-fragment
	     */
	    var fragment = data.getData("application/".concat(clipboardFormatKey)) || getSlateFragmentAttribute(data);
	    if (fragment) {
	      var decoded = decodeURIComponent(window.atob(fragment));
	      var parsed = JSON.parse(decoded);
	      e.insertFragment(parsed);
	      return true;
	    }
	    return false;
	  };
	  e.insertTextData = data => {
	    var text = data.getData('text/plain');
	    if (text) {
	      var lines = text.split(/\r\n|\r|\n/);
	      var split = false;
	      for (var line of lines) {
	        if (split) {
	          Transforms.splitNodes(e, {
	            always: true
	          });
	        }
	        e.insertText(line);
	        split = true;
	      }
	      return true;
	    }
	    return false;
	  };
	  e.onChange = options => {
	    // COMPAT: React < 18 doesn't batch `setState` hook calls, which means
	    // that the children and selection can get out of sync for one render
	    // pass. So we have to use this unstable API to ensure it batches them.
	    // (2019/12/03)
	    // https://github.com/facebook/react/issues/14259#issuecomment-439702367
	    var maybeBatchUpdates = REACT_MAJOR_VERSION < 18 ? ReactDOM.unstable_batchedUpdates : callback => callback();
	    maybeBatchUpdates(() => {
	      var onContextChange = EDITOR_TO_ON_CHANGE.get(e);
	      if (onContextChange) {
	        onContextChange(options);
	      }
	      onChange(options);
	    });
	  };
	  return e;
	};
	var getMatches = (e, path) => {
	  var matches = [];
	  for (var [n, p] of Editor.levels(e, {
	    at: path
	  })) {
	    var key = ReactEditor.findKey(e, n);
	    matches.push([p, key]);
	  }
	  return matches;
	};

	var css_248z = ".ChangelogWidgetDetails-module_editor__AGUF4 {\r\n  position: relative;\r\n  height: fit-content;\r\n  font-size: 14px;\r\n  border-radius: 4px;\r\n  overflow-y: auto;\r\n  outline: none;\r\n  white-space: pre-wrap;\r\n  padding: 12px;\r\n}\r\n\r\n.ChangelogWidgetDetails-module_editor__AGUF4::-webkit-scrollbar {\r\n  width: 6px;\r\n}\r\n\r\n.ChangelogWidgetDetails-module_editor__AGUF4::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.ChangelogWidgetDetails-module_editor__AGUF4::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n  border-radius: 3px;\r\n}\r\n\r\n.ChangelogWidgetDetails-module_editor__AGUF4::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n.ChangelogWidgetDetails-module_blockquote__Jtykq {\r\n  border-left: 2px solid #ccc;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  padding-left: 10px;\r\n  color: #666;\r\n  font-style: italic;\r\n  padding: 12px;\r\n}\r\n\r\n.ChangelogWidgetDetails-module_heading__lh-zJ {\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  margin: 10px 0;\r\n}\r\n\r\n.ChangelogWidgetDetails-module_orderedList__m-yxm {\r\n  list-style-type: decimal;\r\n  margin-left: 20px;\r\n}\r\n\r\n.ChangelogWidgetDetails-module_unorderedList__H-kCW {\r\n  list-style-type: disc;\r\n  margin-left: 20px;\r\n}\r\n\r\n.ChangelogWidgetDetails-module_imageContainer__XgrW0 {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.ChangelogWidgetDetails-module_image__v1mzF {\r\n  display: block;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  border-radius: 4px;\r\n  object-fit: cover;\r\n  width: 100%;\r\n}\r\n";
	var styles = {"editor":"ChangelogWidgetDetails-module_editor__AGUF4","blockquote":"ChangelogWidgetDetails-module_blockquote__Jtykq","heading":"ChangelogWidgetDetails-module_heading__lh-zJ","orderedList":"ChangelogWidgetDetails-module_orderedList__m-yxm","unorderedList":"ChangelogWidgetDetails-module_unorderedList__H-kCW","imageContainer":"ChangelogWidgetDetails-module_imageContainer__XgrW0","image":"ChangelogWidgetDetails-module_image__v1mzF"};
	styleInject(css_248z);

	const ChangelogDetailsCard = ({ initialValue_ }) => {
	    const [initialValue] = reactExports.useState(JSON.parse(initialValue_));
	    const renderElement = reactExports.useCallback((props) => jsxRuntimeExports.jsx(Element$1, Object.assign({}, props)), []);
	    const renderLeaf = reactExports.useCallback((props) => jsxRuntimeExports.jsx(Leaf, Object.assign({}, props)), []);
	    const editor = reactExports.useMemo(() => withImages(withReact(createEditor())), []);
	    return (jsxRuntimeExports.jsx(Slate, Object.assign({ editor: editor, initialValue: initialValue }, { children: jsxRuntimeExports.jsx(Editable, { className: styles.editor, disableDefaultStyles: true, renderElement: renderElement, renderLeaf: renderLeaf, readOnly: true }) })));
	};
	const withImages = (editor) => {
	    const { isVoid } = editor;
	    editor.isVoid = (element) => {
	        return element.type === "image" ? true : isVoid(element);
	    };
	    return editor;
	};
	const Image = React.forwardRef(({ attributes, children, element, }, ref) => {
	    return (jsxRuntimeExports.jsxs("div", Object.assign({}, attributes, { children: [children, jsxRuntimeExports.jsx("div", Object.assign({ className: styles.imageContainer, contentEditable: false }, { children: jsxRuntimeExports.jsx("img", { src: element.url, alt: "changelog", className: styles.image }) }))] })));
	});
	const Element$1 = ({ attributes, children, element, }) => {
	    const style = { textAlign: element.align };
	    switch (element.type) {
	        case "block-quote":
	            return (jsxRuntimeExports.jsx("blockquote", Object.assign({ className: styles.blockquote, style: style }, attributes, { children: children })));
	        case "heading-one":
	            return (jsxRuntimeExports.jsx("h1", Object.assign({ className: styles.heading, style: style }, attributes, { children: children })));
	        case "list-item":
	            return (jsxRuntimeExports.jsx("li", Object.assign({ style: style }, attributes, { children: children })));
	        case "numbered-list":
	            return (jsxRuntimeExports.jsx("ol", Object.assign({ className: styles.orderedList, style: style }, attributes, { children: children })));
	        case "bulleted-list":
	            return (jsxRuntimeExports.jsx("ul", Object.assign({ className: styles.unorderedList, style: style }, attributes, { children: children })));
	        case "image":
	            return (jsxRuntimeExports.jsx(Image, Object.assign({ element: element }, attributes, { children: children })));
	        default:
	            return (jsxRuntimeExports.jsx("div", Object.assign({ style: style }, attributes, { children: children })));
	    }
	};
	const Leaf = ({ attributes, children, leaf, }) => {
	    if (leaf.bold) {
	        children = jsxRuntimeExports.jsx("strong", { children: children });
	    }
	    if (leaf.code) {
	        children = jsxRuntimeExports.jsx("code", { children: children });
	    }
	    if (leaf.italic) {
	        children = jsxRuntimeExports.jsx("em", { children: children });
	    }
	    return jsxRuntimeExports.jsx("span", Object.assign({}, attributes, { children: children }));
	};

	const ChangelogWidget = ({ title, workspaceId, workspaceSubdomain, theme = "light", }) => {
	    const [changelogLists, setChangelogLists] = reactExports.useState([]);
	    const [fetching, setFetching] = reactExports.useState(false);
	    const [showingDetails, setShowingDetails] = reactExports.useState(false);
	    const [selectedChangeLog, setSelectedChangeLog] = reactExports.useState(null);
	    reactExports.useEffect(() => {
	        const fetchChangelogsHandler = () => __awaiter(void 0, void 0, void 0, function* () {
	            try {
	                setFetching(true);
	                const { data: fetchedData } = yield axios$1.post(`${BASE_URL}/sdk/fetch-changelogs`, {
	                    workspaceId: workspaceId || "",
	                    skip: 0,
	                    limit: 3,
	                    tags: [],
	                    labels: [],
	                });
	                if (!fetchedData.success) {
	                    throw new Error(fetchedData.message);
	                }
	                setFetching(false);
	                setChangelogLists(fetchedData.changelogs);
	            }
	            catch (e) {
	                setFetching(false);
	                setChangelogLists([]);
	            }
	        });
	        fetchChangelogsHandler();
	    }, [workspaceId]);
	    return (jsxRuntimeExports.jsxs("div", Object.assign({ className: `${styles$1.changelogWidget} ${theme === "light" ? styles$1.light : ""}` }, { children: [jsxRuntimeExports.jsxs("div", Object.assign({ className: styles$1.title }, { children: [jsxRuntimeExports.jsx("div", Object.assign({ className: `${styles$1.backButton} ${showingDetails ? styles$1.visible : ""}`, onClick: (e) => {
	                            e.preventDefault();
	                            e.stopPropagation();
	                            setShowingDetails(false);
	                            setTimeout(() => setSelectedChangeLog(null), 300); // Wait for animation to finish
	                        } }, { children: jsxRuntimeExports.jsx(HiOutlineArrowNarrowLeft, { size: 18 }) })), !showingDetails
	                        ? `${title.length > 28 ? `${title.slice(0, 28)}...` : title} `
	                        : selectedChangeLog && (selectedChangeLog === null || selectedChangeLog === void 0 ? void 0 : selectedChangeLog.title.length) > 28
	                            ? `${selectedChangeLog === null || selectedChangeLog === void 0 ? void 0 : selectedChangeLog.title.slice(0, 28)}...`
	                            : selectedChangeLog === null || selectedChangeLog === void 0 ? void 0 : selectedChangeLog.title, jsxRuntimeExports.jsx("div", Object.assign({ className: `${styles$1.closeButton}`, id: "fcb-sdk" }, { children: jsxRuntimeExports.jsx(RxCross2, { size: 22 }) }))] })), jsxRuntimeExports.jsxs("div", Object.assign({ className: `${styles$1.detailsContainer} ${styles$1.thinScrollbar}` }, { children: [fetching && jsxRuntimeExports.jsx("div", Object.assign({ className: styles$1.noData }, { children: "Loading..." })), changelogLists.length === 0 && !fetching && (jsxRuntimeExports.jsx("div", Object.assign({ className: styles$1.noData }, { children: "No data found. Please check back later." }))), (changelogLists === null || changelogLists === void 0 ? void 0 : changelogLists.length) > 0 && (jsxRuntimeExports.jsx("div", Object.assign({ className: `${styles$1.changelogList} ${showingDetails ? styles$1.slideOut : ""}` }, { children: jsxRuntimeExports.jsx("div", Object.assign({ className: styles$1.changelogList }, { children: changelogLists &&
	                                changelogLists.map((changelog, index) => (jsxRuntimeExports.jsx("div", Object.assign({ className: styles$1.changelogItem, onClick: (e) => {
	                                        e.preventDefault();
	                                        e.stopPropagation();
	                                        setSelectedChangeLog(changelog);
	                                        setShowingDetails(true);
	                                    } }, { children: jsxRuntimeExports.jsxs("div", Object.assign({ className: styles$1.changelogContent }, { children: [jsxRuntimeExports.jsxs("div", Object.assign({ className: styles$1.changelogTitle }, { children: [changelog.tags.length > 0 && (jsxRuntimeExports.jsx("div", Object.assign({ className: styles$1.changelogLabels }, { children: changelog.tags.map((tag, index) => (jsxRuntimeExports.jsx("div", Object.assign({ className: styles$1.label, style: {
	                                                                backgroundColor: tag === "Fixed"
	                                                                    ? "#ef4444" // red-500
	                                                                    : tag === "Feature"
	                                                                        ? "#22c55e" // green-500
	                                                                        : tag === "Improvement"
	                                                                            ? "#7c3aed" // indigo-600
	                                                                            : tag === "Documentation"
	                                                                                ? "#f59e0b" // amber-500
	                                                                                : "#44403c", // stone-600
	                                                            } }, { children: tag }), index))) }))), changelog.title] })), jsxRuntimeExports.jsx("div", Object.assign({ className: styles$1.changelogDescription }, { children: changelog.plainTextContent.length > 100
	                                                    ? changelog.plainTextContent.slice(0, 100) + "..."
	                                                    : changelog.plainTextContent })), jsxRuntimeExports.jsx("div", Object.assign({ className: styles$1.changelogMeta }, { children: formatDate(changelog.createdAt) }))] })) }), index))) })) }))), jsxRuntimeExports.jsx("div", Object.assign({ className: `${styles$1.changelogDetails}  ${showingDetails ? styles$1.slideIn : ""}` }, { children: selectedChangeLog && (jsxRuntimeExports.jsx(ChangelogDetailsCard, { initialValue_: selectedChangeLog.slateJsDescendantContent })) }))] })), jsxRuntimeExports.jsxs("div", Object.assign({ className: styles$1.footer }, { children: [jsxRuntimeExports.jsx("span", Object.assign({ className: styles$1.poweredBy }, { children: jsxRuntimeExports.jsx("a", Object.assign({ href: "https://feerio.io", target: "_blank", rel: "noreferrer" }, { children: "Powered by Feerio" })) })), jsxRuntimeExports.jsx("a", Object.assign({ href: "https://feedback.feerio.io/dashboard/changelog", target: "_blank", rel: "noreferrer", className: styles$1.link }, { children: "Help" })), jsxRuntimeExports.jsx("a", Object.assign({ href: `https://${workspaceSubdomain}${PLAIN_DOMAIN_URL}/dashboard/changelogs`, target: "_blank", rel: "noreferrer", className: styles$1.link }, { children: "See all changes" }))] }))] })));
	};

	const renderChangelogWidget = (container, props) => {
	    ReactDOM.render(jsxRuntimeExports.jsx(ChangelogWidget, Object.assign({}, props)), container);
	};
	const handleOutsideClick = (event, container) => {
	    let closeButton = document.getElementById("fcb-sdk");
	    if (!container.contains(event.target) ||
	        (closeButton === null || closeButton === void 0 ? void 0 : closeButton.contains(event.target))) {
	        ReactDOM.unmountComponentAtNode(container);
	        container.remove();
	        document.removeEventListener("click", (e) => container && handleOutsideClick(e, container));
	    }
	};
	const handleButtonClickForChangelogTrigger = (event, options) => {
	    event.stopPropagation(); // Prevent immediate triggering of outside click
	    if (!(options === null || options === void 0 ? void 0 : options.position) ||
	        ![
	            "top-right",
	            "top-left",
	            "bottom-right",
	            "bottom-left",
	            "left",
	            "right",
	            "top-center",
	            "bottom-center",
	        ].includes(options.position)) {
	        options.position = "bottom-right";
	    }
	    const target = event.currentTarget;
	    const elementId = "changelog-root";
	    let container = document.getElementById(elementId);
	    if (container) {
	        ReactDOM.unmountComponentAtNode(container);
	        container.remove();
	        document.removeEventListener("click", (e) => container && handleOutsideClick(e, container));
	    }
	    else {
	        container = document.createElement("div");
	        container.id = elementId;
	        container.style.position = "absolute";
	        container.style.zIndex = "9999";
	        const rect = target.getBoundingClientRect();
	        let mainContainerWidth = 350; // default width
	        let mainContainerHeight = 420; // default height
	        switch (options.position) {
	            case "top-right": //  done
	                container.style.top = `${rect.top - mainContainerHeight + 20}px`;
	                container.style.left = `${rect.left}px`;
	                break;
	            case "top-left": // done
	                container.style.top = `${rect.top - mainContainerHeight + 20}px`;
	                container.style.left = `${rect.right - mainContainerWidth}px`;
	                break;
	            case "bottom-right": // done
	                container.style.top = `${rect.bottom + 10}px`;
	                container.style.left = `${rect.left}px`;
	                break;
	            case "bottom-left": // done
	                container.style.top = `${rect.bottom + 10}px`;
	                container.style.left = `${rect.right - mainContainerWidth}px`;
	                break;
	            case "left": // done
	                container.style.top = `${rect.top}px`;
	                container.style.left = `${rect.left - mainContainerWidth - 10}px`;
	                break;
	            case "right": // done
	                container.style.top = `${rect.top}px`;
	                container.style.left = `${rect.right + 10}px`;
	                break;
	            case "top-center": // done
	                container.style.top = `${rect.top - mainContainerHeight + 20}px`;
	                container.style.left = `${rect.left + (rect.width - mainContainerWidth) / 2}px`;
	                break;
	            case "bottom-center": // done
	                container.style.top = `${rect.bottom + 10}px`;
	                container.style.left = `${rect.left + (rect.width - mainContainerWidth) / 2}px`;
	                break;
	            default: // done
	                // Default to bottom-right if an invalid position is provided
	                container.style.top = `${rect.bottom + 10}px`;
	                container.style.left = `${rect.left}px`;
	                break;
	        }
	        //When in mobile screen make sure no top and left is set
	        if (window.innerWidth < 768) {
	            container.style.top = "0";
	            container.style.left = "0";
	            container.style.width = "100vw";
	            container.style.height = "100vh";
	            document.body.style.overflow = "hidden";
	        }
	        document.body.appendChild(container);
	        renderChangelogWidget(container, {
	            title: (options === null || options === void 0 ? void 0 : options.title) || "Changelog",
	            theme: (options === null || options === void 0 ? void 0 : options.theme) || "light",
	            workspaceId: options === null || options === void 0 ? void 0 : options.workspaceId,
	            workspaceSubdomain: options === null || options === void 0 ? void 0 : options.workspaceSubdomain,
	        });
	        // Add a slight delay before adding the click listener to prevent immediate closing
	        setTimeout(() => {
	            document.addEventListener("click", (e) => container && handleOutsideClick(e, container));
	        }, 0);
	    }
	};

	const generateIframeComponent = (options) => {
	    let { workspaceSubdomain, boardUrls = [] } = options;
	    // if boardUrls element is empty string remove that element
	    boardUrls = boardUrls.filter((url) => url !== "");
	    let boardUrlParam = boardUrls.length > 0 ? `?b=${boardUrls[0]}` : "";
	    let iframeSrc = `${"https:"}//${workspaceSubdomain}${PLAIN_DOMAIN_URL}/widgets/public-board${boardUrlParam}`;
	    /* <iframe src="${iframeSrc}" style="width: 100%; height: 100%; border: none;"></iframe> */
	    let iframe = document.createElement("iframe");
	    iframe.src = iframeSrc;
	    iframe.style.width = "100%";
	    iframe.style.height = "1000px";
	    iframe.style.overflow = "scroll";
	    iframe.style.border = "none";
	    return iframe;
	};
	const renderPublicBoard = (options) => {
	    //   ReactDOM.render(<PublicBoardWidget />, container);
	    // instead of rendering the component render a iframe div with this url https://feedback.feerio.io/dashboard/board?b=integrations
	    let { workspaceSubdomain, boardUrls = [] } = options;
	    boardUrls = boardUrls.filter((url) => url !== "");
	    boardUrls.forEach((url) => {
	        let dataAttributeStringForTheBoard = `data-feerio-board-${url}`;
	        let element = document.querySelector(`[${dataAttributeStringForTheBoard}]`);
	        if (!element) {
	            console.error("Element not found for the board url", url);
	            return;
	        }
	        let iframeComponent = generateIframeComponent({
	            workspaceSubdomain,
	            boardUrls: [url],
	        });
	        element.appendChild(iframeComponent);
	    });
	    let htmlElementForAllBoards = document.querySelector("[data-feerio-all-boards]");
	    if (htmlElementForAllBoards) {
	        let iframeComponent = generateIframeComponent({
	            workspaceSubdomain,
	            boardUrls,
	        });
	        htmlElementForAllBoards.appendChild(iframeComponent);
	    }
	};

	var _a;
	// Wrap the handler in a closure to pass the options
	function createClickHandler(options) {
	    return function (event) {
	        handleButtonClickForChangelogTrigger(event, options);
	    };
	}
	const initializeChangelog = (options) => {
	    console.log("====INITIALIZE CHANGELOG====");
	    document.querySelectorAll("[data-feerio-changelog]").forEach((button) => {
	        // button.addEventListener("click", (event) =>
	        //   handleButtonClickForChangelogTrigger(event as MouseEvent, options)
	        // );
	        // we need to remove the previous event listener if it exists and add the new event listener with the updated options
	        // Remove the previous event listener if it exists
	        button.removeEventListener("click", createClickHandler(options));
	        // Add the new event listener
	        button.addEventListener("click", createClickHandler(options));
	    });
	};
	const initializePublicBoard = (options) => {
	    console.log("====INITIALIZE PUBLIC BOARD====");
	    renderPublicBoard(options);
	};
	// window.Feerio = { initializeChangelog };
	/*
	NOTE: When the script is loading, anyway the methods for Feerio (i.e initializeChangelog) will be called before the script is loaded. Thus we are maintaining a queue of functions that will store the functions that are called before the script is loaded. Once the script is loaded, we will call all the functions in the queue.

	now for that we have 2 ways
	1. We can use a global variable to store the queue of functions and when the script is loaded, we will assign that to the window.Feerio.fq. This way we can access the queue of functions from the script tag inside the onLoad function and run a while loop to call all the functions in the queue.

	if (w.Feerio.q) {
	    while (w.Feerio.q.length) {
	        var args = w.Feerio.q.shift();
	        var method = args[0];
	        var params = args[1];

	        if (w.Feerio[method]) {
	            w.Feerio[method](params);
	        } else {
	            console.warn(`Feerio method ${methodExist.`);
	        }
	    }
	}

	2. Instead of doing the queue loop inside the script tag, we can call the functions here in the index.tsx file itself. This way we can avoid the while loop inside the script tag.


	*/
	// for now we are approaching the 1st way
	// VERSION ************ 2.0.2 ************
	window.Feerio = {
	    initializeChangelog,
	    initializePublicBoard,
	    fq: ((_a = window.Feerio) === null || _a === void 0 ? void 0 : _a.fq) || [],
	};

})();
