(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7718,1664,329,8174],{48418:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==t.return||t.return()}finally{if(u)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var a,i=(a=t(67294))&&a.__esModule?a:{default:a},u=t(76273),l=t(90387),s=t(57190);var c={};function f(e,r,t,n){if(e&&u.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[r+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=l.useRouter(),a=i.default.useMemo((function(){var r=o(u.resolveHref(n,e.href,!0),2),t=r[0],a=r[1];return{href:t,as:e.as?u.resolveHref(n,e.as):a||t}}),[n,e.href,e.as]),d=a.href,v=a.as,p=e.children,y=e.replace,h=e.shallow,b=e.scroll,g=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var m=(r=i.default.Children.only(p))&&"object"===typeof r&&r.ref,w=o(s.useIntersection({rootMargin:"200px"}),2),P=w[0],k=w[1],C=i.default.useCallback((function(e){P(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,P]);i.default.useEffect((function(){var e=k&&t&&u.isLocalURL(d),r="undefined"!==typeof g?g:n&&n.locale,o=c[d+"%"+v+(r?"%"+r:"")];e&&!o&&f(n,d,v,{locale:r})}),[v,d,k,g,t,n]);var E={ref:C,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,a,i,l){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(t))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),r[o?"replace":"push"](t,n,{shallow:a,locale:l,scroll:i}))}(e,n,d,v,y,h,b,g)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),u.isLocalURL(d)&&f(n,d,v,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var S="undefined"!==typeof g?g:n&&n.locale,O=n&&n.isLocaleDomain&&u.getDomainLocale(v,S,n&&n.locales,n&&n.domainLocales);E.href=O||u.addBasePath(u.addLocale(v,S,n&&n.defaultLocale))}return i.default.cloneElement(r,E)};r.default=d},57190:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==t.return||t.return()}finally{if(u)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!u,n=a.useRef(),s=o(a.useState(!1),2),c=s[0],f=s[1],d=a.useCallback((function(e){n.current&&(n.current(),n.current=void 0),t||c||e&&e.tagName&&(n.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=l.get(r);if(t)return t;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return l.set(r,t={id:r,observer:o,elements:n}),t}(t),o=n.id,a=n.observer,i=n.elements;return i.set(e,r),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:r}))}),[t,r,c]);return a.useEffect((function(){if(!u&&!c){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[c]),[d,c]};var a=t(67294),i=t(9311),u="undefined"!==typeof IntersectionObserver;var l=new Map},41664:function(e,r,t){e.exports=t(48418)},71641:function(e,r,t){"use strict";t.d(r,{a:function(){return d}});var n=t(70655),o=t(67294),a=t(82152),i=t(28291),u=t(85317),l=t(30990),s=t(1644),c=t(14692),f=t(66252);function d(e,r){var t,i=(0,o.useContext)((0,u.K)()),d=(0,f.x)(null===r||void 0===r?void 0:r.client),p=d.defaultOptions.watchQuery;(0,c.Vp)(e,c.n_.Query);var y,h=(0,o.useState)((function(){var t=v(e,r,p),n=null;return i.renderPromises&&(n=i.renderPromises.getSSRObservable(t)),n||(n=d.watchQuery(t),i.renderPromises&&i.renderPromises.registerSSRObservable(n,t)),i.renderPromises&&!1!==(null===r||void 0===r?void 0:r.ssr)&&!(null===r||void 0===r?void 0:r.skip)&&n.getCurrentResult().loading&&i.renderPromises.addQueryPromise({getOptions:function(){return v(e,r,p)},fetchData:function(){return new Promise((function(e){var r=n.subscribe({next:function(t){t.loading||(e(),r.unsubscribe())},error:function(){e(),r.unsubscribe()},complete:function(){e()}})}))}},(function(){return null})),n})),b=h[0],g=h[1],m=(0,o.useState)((function(){var e,t,n=b.getCurrentResult();return!n.loading&&r&&(n.error?null===(e=r.onError)||void 0===e||e.call(r,n.error):n.data&&(null===(t=r.onCompleted)||void 0===t||t.call(r,n.data))),n})),w=m[0],P=m[1],k=(0,o.useRef)({client:d,query:e,options:r,result:w,previousData:void 0,watchQueryOptions:v(e,r,p)});(0,o.useEffect)((function(){var t,n,o,i=v(e,r,p);if(k.current.client===d&&(0,a.D)(k.current.query,e))(0,a.D)(k.current.watchQueryOptions,i)||(b.setOptions(i).catch((function(){})),o=b.getCurrentResult(),k.current.watchQueryOptions=i);else{var u=d.watchQuery(i);g(u),o=u.getCurrentResult()}if(o){var l=k.current.result;l.data&&(k.current.previousData=l.data),P(k.current.result=o),!o.loading&&r&&(o.error?null===(t=r.onError)||void 0===t||t.call(r,o.error):o.data&&(null===(n=r.onCompleted)||void 0===n||n.call(r,o.data)))}Object.assign(k.current,{client:d,query:e})}),[b,d,e,r]),(0,o.useEffect)((function(){if(!i.renderPromises){var e=b.subscribe(r,(function t(n){var o,i,u=b.last;e.unsubscribe();try{b.resetLastResults(),e=b.subscribe(r,t)}finally{b.last=u}if(!n.hasOwnProperty("graphQLErrors"))throw n;var l=k.current.result;(l&&l.loading||!(0,a.D)(n,l.error))&&(P(k.current.result={data:l.data,error:n,loading:!1,networkStatus:s.I.error}),null===(i=null===(o=k.current.options)||void 0===o?void 0:o.onError)||void 0===i||i.call(o,n))}));return function(){return e.unsubscribe()}}function r(){var e,r,t=k.current.result,n=b.getCurrentResult();t&&t.loading===n.loading&&t.networkStatus===n.networkStatus&&(0,a.D)(t.data,n.data)||(t.data&&(k.current.previousData=t.data),P(k.current.result=n),n.loading||null===(r=null===(e=k.current.options)||void 0===e?void 0:e.onCompleted)||void 0===r||r.call(e,n.data))}}),[b,i.renderPromises,d.disableNetworkFetches]),y=(t=w).partial,w=(0,n._T)(t,["partial"]),!y||!(null===r||void 0===r?void 0:r.partialRefetch)||w.loading||w.data&&0!==Object.keys(w.data).length||"cache-only"===b.options.fetchPolicy||(w=(0,n.pi)((0,n.pi)({},w),{loading:!0,networkStatus:s.I.refetch}),b.refetch()),i.renderPromises&&!1!==(null===r||void 0===r?void 0:r.ssr)&&!(null===r||void 0===r?void 0:r.skip)&&w.loading&&b.setOptions(v(e,r,p)).catch((function(){})),Object.assign(k.current,{options:r}),(i.renderPromises||d.disableNetworkFetches)&&!1===(null===r||void 0===r?void 0:r.ssr)?w=k.current.result={loading:!0,data:void 0,error:void 0,networkStatus:s.I.loading}:((null===r||void 0===r?void 0:r.skip)||"standby"===(null===r||void 0===r?void 0:r.fetchPolicy))&&(w={loading:!1,data:void 0,error:void 0,networkStatus:s.I.ready}),w.errors&&w.errors.length&&(w=(0,n.pi)((0,n.pi)({},w),{error:w.error||new l.c({graphQLErrors:w.errors})}));var C=(0,o.useMemo)((function(){return{refetch:b.refetch.bind(b),fetchMore:b.fetchMore.bind(b),updateQuery:b.updateQuery.bind(b),startPolling:b.startPolling.bind(b),stopPolling:b.stopPolling.bind(b),subscribeToMore:b.subscribeToMore.bind(b)}}),[b]);return(0,n.pi)((0,n.pi)((0,n.pi)({},C),{variables:v(e,r,p).variables,client:d,called:!0,previousData:k.current.previousData}),w)}function v(e,r,t){var o;void 0===r&&(r={});var a=r.skip,u=(r.ssr,r.onCompleted,r.onError,r.displayName,(0,n._T)(r,["skip","ssr","onCompleted","onError","displayName"])),l=(0,n.pi)({query:e},u);return t&&(l=(0,i.J)(t,l)),a?l.fetchPolicy="standby":(!(null===(o=l.context)||void 0===o?void 0:o.renderPromises)||"network-only"!==l.fetchPolicy&&"cache-and-network"!==l.fetchPolicy)&&l.fetchPolicy||(l.fetchPolicy="cache-first"),l.variables||(l.variables={}),l}}}]);