
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var bundle = (function (exports) {
    'use strict';

    const S=/<([a-z]+-[a-z]+)([^/>]*)\/>/g;function E(e,t){let r=[];return {source:e.reduce((i,n,u)=>{var f;const a=(f=t[u])!=null?f:"";let p;if(p=n.match(/ ([A-Za-z]*)=$/))return r.push({name:p[1],value:a}),i+n+'"{{a}}"';if(b(a))return r=r.concat(a.data),i+n+a.source;if(R(a)){let l="";for(let c of a)r=r.concat(c.data),l+=c.source;return i+n+l}else if(Array.isArray(a)){let l="";for(let c of a)l+=c;return i+n+l}else return i+n+a},"").replace(S,"<$1$2></$1>"),data:r}}function O({source:e,data:t}){var r,s;const i=document.createElement("template");i.innerHTML=e;const n=document.createTreeWalker(i.content,1);let u,f=0;for(;u=n.nextNode();)if(u.hasAttributes()){const a=u.attributes,p=a.length-1;for(let l=p;l>=0;--l){const c=a[l];if(c.value=="{{a}}"){const h=t[f++];h.name.startsWith("on")?(u.addEventListener(h.name.slice(2),h.value),u.removeAttribute(h.name)):(u.props=(r=u.props)!=null?r:{},u.props[h.name]=h.value,typeof h.value!="string"&&u.removeAttribute(h.name));}else u.props=(s=u.props)!=null?s:{},u.props[c.localName]=c.value;}}return i.content}function b(e){return typeof e=="object"&&e.source&&e.data}function R(e){return Array.isArray(e)&&b(e[0])}class U{set(t){this.prototype=Object.assign(this,t);}}function o(e,t){const r=new Proxy(new U,v(t));return r.set(e),r}function V(e,t){return new Proxy(e,v(t,!0))}function v(e,t=!1){return {set:(r,s,i)=>s=="prototype"||r[s]==i?!0:r[s]!=null?(r[s]=i,e(s,i),!0):Array.isArray(i)?(r[s]=V(i,e),!0):(r[s]=i,t&&e(s,i),!0)}}function y(e,t,r={}){e=e!=null?e:{source:"",data:[]},r.styles&&(e.source+=`<style>${r.styles}</style>`);const s=O(e);if(t.childElementCount==0){t.appendChild(s);return}_(s,t),C(s,t);}function m(e,t){return t?e?e.tagName!=t.tagName?e:(_(e,t),!e.shadowRoot&&e.childNodes.length>0&&C(e,t),t):null:e}function _(e,t){let r=e.nodeType,s=e.nodeName;r==1?(x(e,t),j(e,t)):(r==3||r==8)&&t.nodeValue!=e.nodeValue&&(t.nodeValue=e.nodeValue),s=="INPUT"?P(e,t):s=="OPTION"?A(e,t,"selected"):s=="TEXTAREA"&&q(e,t);}function x(e,t){const r=e.attributes,s=t.attributes;let i=r.length-1;for(let n=i;n>=0;--n){const{localName:u,value:f,namespaceURI:a}=r[n];a?t.getAttributeNS(a,u)==f&&t.setAttributeNS(a,u,f):t.hasAttribute(u)?t.getAttribute(u)!=f&&(f=="null"||f=="undefined"?t.removeAttribute(u):t.setAttribute(u,f)):t.setAttribute(u,f);}i=s.length-1;for(let n=i;n>=0;--n){const u=s[n];if(u.specified){const{localName:f,namespaceURI:a}=u;a?e.hasAttributeNS(a,f)||t.removeAttributeNS(a,f):e.hasAttribute(f)||t.removeAttribute(f);}}}function j(e,t){const r=e.props,s=t.props;if(r&&s){const i=Object.keys(r);for(let n of i)s[n]!=r[n]&&(t.props[n]=r[n]);}}function C(e,t){let r=0;for(let s=0;;s++){const i=t.childNodes[s],n=e.childNodes[s-r];if(!i&&!n)break;if(!n)t.removeChild(i),s--;else if(!i)t.appendChild(n),r++;else if(T(n,i)){const u=m(n,i);u!=i&&(t.replaceChild(u,i),r++);}else {let u=null;const f=t.childNodes.length;for(let a=s;a<f;a++)if(T(t.childNodes[a],n)){u=t.childNodes[s];break}if(u){const a=m(n,i);a!=u&&(t.replaceChild(a,i),r++);}else if(!n.id&&!i.id){const a=m(n,i);a!=i&&(t.replaceChild(a,i),r++);}else t.insertBefore(n,i),r++;}}}function A(e,t,r){e[r]!=t[r]&&(t[r]=e[r],e[r]?t.setAttribute(r,""):t.removeAttribute(r));}function P(e,t){const r=e.value,s=t.value;A(e,t,"checked"),A(e,t,"disabled"),e.indeterminate!=t.indeterminate&&(t.indeterminate=e.indeterminate),t.type!="file"&&(r!=s&&(t.setAttribute("value",r),t.value=r),r=="null"&&(t.value="",t.removeAttribute("value")),e.hasAttribute("value")?t.type=="range"&&t.value==r:t.removeAttribute("value"));}function q(e,t){const r=e.value;r!=t.value&&(t.value=r),t.firstChild&&t.firstChild.nodeValue!=r&&(t.firstChild.nodeValue=r);}function T(e,t){return e.id?e.id==t.id:e.tagName!=t.tagName?!1:e.nodeType==3?e.nodeValue==t.nodeValue:!1}var g=Object.assign;class I extends HTMLElement{constructor(){super();const{useShadow:t,styles:r}=this.constructor._options;this._styles=r.join(""),this._refCount=0,this.root=t?this.attachShadow({mode:"open"}):this;}connectedCallback(){this.props=o(this.props,this._requestUpdate()),this.state&&(this.state=o(this.state,this._requestUpdate())),y(this.render(this.props),this.root,{styles:this._styles}),this._parseRefs(),this.mount();}disconnectedCallback(){this.unmount();}_requestUpdate(){return (t,r)=>{this.shouldUpdate(t,r)&&(y(this.render(this.props),this.root,{styles:this._styles}),this._parseRefs(),this.onUpdate(t,r));}}_parseRefs(){this._refCount>0&&this.root.querySelectorAll("[ref]").forEach(t=>{this[t.getAttribute("ref")]=t,t.removeAttribute("ref");});}createRef(){return this._refCount++,null}useContext(t){t._components.push(this._requestUpdate());}render(){}mount(){}unmount(){}onUpdate(){}shouldUpdate(){return !0}static create(t,r){const s={styles:[],useShadow:!0};if(r._options=g(g({},s),t),!t.name){console.error("Exalt: ComponentOptions.name is required.");return}window.customElements.define(t.name,r);}}function L(e,...t){return E(e,t)}

    var style$2 = "*[inactive] {\n    display: none;\n}\n\n.megaPosts {\n    display: grid;\n    grid-template-columns: 20% 20% 20% 20% 20%;\n}\n\n[invisible] {\n    display: none;\n}";

    /*! *****************************************************************************
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
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Do a deep-copy of basic JavaScript Objects or Arrays.
     */
    function deepCopy(value) {
        return deepExtend(undefined, value);
    }
    /**
     * Copy properties from source to target (recursively allows extension
     * of Objects and Arrays).  Scalar values in the target are over-written.
     * If target is undefined, an object of the appropriate type will be created
     * (and returned).
     *
     * We recursively copy all child properties of plain Objects in the source- so
     * that namespace- like dictionaries are merged.
     *
     * Note that the target can be a function, in which case the properties in
     * the source Object are copied onto it as static properties of the Function.
     *
     * Note: we don't merge __proto__ to prevent prototype pollution
     */
    function deepExtend(target, source) {
        if (!(source instanceof Object)) {
            return source;
        }
        switch (source.constructor) {
            case Date:
                // Treat Dates like scalars; if the target date object had any child
                // properties - they will be lost!
                var dateValue = source;
                return new Date(dateValue.getTime());
            case Object:
                if (target === undefined) {
                    target = {};
                }
                break;
            case Array:
                // Always copy the array source and overwrite the target.
                target = [];
                break;
            default:
                // Not a plain Object - treat it as a scalar.
                return source;
        }
        for (var prop in source) {
            // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
            if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
                continue;
            }
            target[prop] = deepExtend(target[prop], source[prop]);
        }
        return target;
    }
    function isValidKey(key) {
        return key !== '__proto__';
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var Deferred = /** @class */ (function () {
        function Deferred() {
            var _this = this;
            this.reject = function () { };
            this.resolve = function () { };
            this.promise = new Promise(function (resolve, reject) {
                _this.resolve = resolve;
                _this.reject = reject;
            });
        }
        /**
         * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
         * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
         * and returns a node-style callback which will resolve or reject the Deferred's promise.
         */
        Deferred.prototype.wrapCallback = function (callback) {
            var _this = this;
            return function (error, value) {
                if (error) {
                    _this.reject(error);
                }
                else {
                    _this.resolve(value);
                }
                if (typeof callback === 'function') {
                    // Attaching noop handler just in case developer wasn't expecting
                    // promises
                    _this.promise.catch(function () { });
                    // Some of our callbacks don't expect a value and our own tests
                    // assert that the parameter length is 1
                    if (callback.length === 1) {
                        callback(error);
                    }
                    else {
                        callback(error, value);
                    }
                }
            };
        };
        return Deferred;
    }());
    /**
     * Detect Node.js.
     *
     * @return true if Node.js environment is detected.
     */
    // Node detection logic from: https://github.com/iliakan/detect-node/
    function isNode() {
        try {
            return (Object.prototype.toString.call(global.process) === '[object process]');
        }
        catch (e) {
            return false;
        }
    }
    /**
     * Detect Browser Environment
     */
    function isBrowser() {
        return typeof self === 'object' && self.self === self;
    }
    function isBrowserExtension() {
        var runtime = typeof chrome === 'object'
            ? chrome.runtime
            : typeof browser === 'object'
                ? browser.runtime
                : undefined;
        return typeof runtime === 'object' && runtime.id !== undefined;
    }
    /**
     * This method checks if indexedDB is supported by current browser/service worker context
     * @return true if indexedDB is supported by current browser/service worker context
     */
    function isIndexedDBAvailable() {
        return 'indexedDB' in self && indexedDB != null;
    }
    /**
     * This method validates browser context for indexedDB by opening a dummy indexedDB database and reject
     * if errors occur during the database open operation.
     */
    function validateIndexedDBOpenable() {
        return new Promise(function (resolve, reject) {
            try {
                var preExist_1 = true;
                var DB_CHECK_NAME_1 = 'validate-browser-context-for-indexeddb-analytics-module';
                var request_1 = window.indexedDB.open(DB_CHECK_NAME_1);
                request_1.onsuccess = function () {
                    request_1.result.close();
                    // delete database only when it doesn't pre-exist
                    if (!preExist_1) {
                        window.indexedDB.deleteDatabase(DB_CHECK_NAME_1);
                    }
                    resolve(true);
                };
                request_1.onupgradeneeded = function () {
                    preExist_1 = false;
                };
                request_1.onerror = function () {
                    var _a;
                    reject(((_a = request_1.error) === null || _a === void 0 ? void 0 : _a.message) || '');
                };
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
     *
     * This method checks whether cookie is enabled within current browser
     * @return true if cookie is enabled within current browser
     */
    function areCookiesEnabled() {
        if (!navigator || !navigator.cookieEnabled) {
            return false;
        }
        return true;
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var ERROR_NAME = 'FirebaseError';
    // Based on code from:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
    var FirebaseError = /** @class */ (function (_super) {
        __extends(FirebaseError, _super);
        function FirebaseError(code, message, customData) {
            var _this = _super.call(this, message) || this;
            _this.code = code;
            _this.customData = customData;
            _this.name = ERROR_NAME;
            // Fix For ES5
            // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
            Object.setPrototypeOf(_this, FirebaseError.prototype);
            // Maintains proper stack trace for where our error was thrown.
            // Only available on V8.
            if (Error.captureStackTrace) {
                Error.captureStackTrace(_this, ErrorFactory.prototype.create);
            }
            return _this;
        }
        return FirebaseError;
    }(Error));
    var ErrorFactory = /** @class */ (function () {
        function ErrorFactory(service, serviceName, errors) {
            this.service = service;
            this.serviceName = serviceName;
            this.errors = errors;
        }
        ErrorFactory.prototype.create = function (code) {
            var data = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                data[_i - 1] = arguments[_i];
            }
            var customData = data[0] || {};
            var fullCode = this.service + "/" + code;
            var template = this.errors[code];
            var message = template ? replaceTemplate(template, customData) : 'Error';
            // Service Name: Error message (service/code).
            var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
            var error = new FirebaseError(fullCode, fullMessage, customData);
            return error;
        };
        return ErrorFactory;
    }());
    function replaceTemplate(template, data) {
        return template.replace(PATTERN, function (_, key) {
            var value = data[key];
            return value != null ? String(value) : "<" + key + "?>";
        });
    }
    var PATTERN = /\{\$([^}]+)}/g;

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function contains(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
    }

    /**
     * Helper to make a Subscribe function (just like Promise helps make a
     * Thenable).
     *
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    function createSubscribe(executor, onNoObservers) {
        var proxy = new ObserverProxy(executor, onNoObservers);
        return proxy.subscribe.bind(proxy);
    }
    /**
     * Implement fan-out for any number of Observers attached via a subscribe
     * function.
     */
    var ObserverProxy = /** @class */ (function () {
        /**
         * @param executor Function which can make calls to a single Observer
         *     as a proxy.
         * @param onNoObservers Callback when count of Observers goes to zero.
         */
        function ObserverProxy(executor, onNoObservers) {
            var _this = this;
            this.observers = [];
            this.unsubscribes = [];
            this.observerCount = 0;
            // Micro-task scheduling by calling task.then().
            this.task = Promise.resolve();
            this.finalized = false;
            this.onNoObservers = onNoObservers;
            // Call the executor asynchronously so subscribers that are called
            // synchronously after the creation of the subscribe function
            // can still receive the very first value generated in the executor.
            this.task
                .then(function () {
                executor(_this);
            })
                .catch(function (e) {
                _this.error(e);
            });
        }
        ObserverProxy.prototype.next = function (value) {
            this.forEachObserver(function (observer) {
                observer.next(value);
            });
        };
        ObserverProxy.prototype.error = function (error) {
            this.forEachObserver(function (observer) {
                observer.error(error);
            });
            this.close(error);
        };
        ObserverProxy.prototype.complete = function () {
            this.forEachObserver(function (observer) {
                observer.complete();
            });
            this.close();
        };
        /**
         * Subscribe function that can be used to add an Observer to the fan-out list.
         *
         * - We require that no event is sent to a subscriber sychronously to their
         *   call to subscribe().
         */
        ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
            var _this = this;
            var observer;
            if (nextOrObserver === undefined &&
                error === undefined &&
                complete === undefined) {
                throw new Error('Missing Observer.');
            }
            // Assemble an Observer object when passed as callback functions.
            if (implementsAnyMethods(nextOrObserver, [
                'next',
                'error',
                'complete'
            ])) {
                observer = nextOrObserver;
            }
            else {
                observer = {
                    next: nextOrObserver,
                    error: error,
                    complete: complete
                };
            }
            if (observer.next === undefined) {
                observer.next = noop;
            }
            if (observer.error === undefined) {
                observer.error = noop;
            }
            if (observer.complete === undefined) {
                observer.complete = noop;
            }
            var unsub = this.unsubscribeOne.bind(this, this.observers.length);
            // Attempt to subscribe to a terminated Observable - we
            // just respond to the Observer with the final error or complete
            // event.
            if (this.finalized) {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                this.task.then(function () {
                    try {
                        if (_this.finalError) {
                            observer.error(_this.finalError);
                        }
                        else {
                            observer.complete();
                        }
                    }
                    catch (e) {
                        // nothing
                    }
                    return;
                });
            }
            this.observers.push(observer);
            return unsub;
        };
        // Unsubscribe is synchronous - we guarantee that no events are sent to
        // any unsubscribed Observer.
        ObserverProxy.prototype.unsubscribeOne = function (i) {
            if (this.observers === undefined || this.observers[i] === undefined) {
                return;
            }
            delete this.observers[i];
            this.observerCount -= 1;
            if (this.observerCount === 0 && this.onNoObservers !== undefined) {
                this.onNoObservers(this);
            }
        };
        ObserverProxy.prototype.forEachObserver = function (fn) {
            if (this.finalized) {
                // Already closed by previous event....just eat the additional values.
                return;
            }
            // Since sendOne calls asynchronously - there is no chance that
            // this.observers will become undefined.
            for (var i = 0; i < this.observers.length; i++) {
                this.sendOne(i, fn);
            }
        };
        // Call the Observer via one of it's callback function. We are careful to
        // confirm that the observe has not been unsubscribed since this asynchronous
        // function had been queued.
        ObserverProxy.prototype.sendOne = function (i, fn) {
            var _this = this;
            // Execute the callback asynchronously
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(function () {
                if (_this.observers !== undefined && _this.observers[i] !== undefined) {
                    try {
                        fn(_this.observers[i]);
                    }
                    catch (e) {
                        // Ignore exceptions raised in Observers or missing methods of an
                        // Observer.
                        // Log error to console. b/31404806
                        if (typeof console !== 'undefined' && console.error) {
                            console.error(e);
                        }
                    }
                }
            });
        };
        ObserverProxy.prototype.close = function (err) {
            var _this = this;
            if (this.finalized) {
                return;
            }
            this.finalized = true;
            if (err !== undefined) {
                this.finalError = err;
            }
            // Proxy is no longer needed - garbage collect references
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(function () {
                _this.observers = undefined;
                _this.onNoObservers = undefined;
            });
        };
        return ObserverProxy;
    }());
    /**
     * Return true if the object passed in implements any of the named methods.
     */
    function implementsAnyMethods(obj, methods) {
        if (typeof obj !== 'object' || obj === null) {
            return false;
        }
        for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
            var method = methods_1[_i];
            if (method in obj && typeof obj[method] === 'function') {
                return true;
            }
        }
        return false;
    }
    function noop() {
        // do nothing
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * The amount of milliseconds to exponentially increase.
     */
    var DEFAULT_INTERVAL_MILLIS = 1000;
    /**
     * The factor to backoff by.
     * Should be a number greater than 1.
     */
    var DEFAULT_BACKOFF_FACTOR = 2;
    /**
     * The maximum milliseconds to increase to.
     *
     * <p>Visible for testing
     */
    var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000; // Four hours, like iOS and Android.
    /**
     * The percentage of backoff time to randomize by.
     * See
     * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
     * for context.
     *
     * <p>Visible for testing
     */
    var RANDOM_FACTOR = 0.5;
    /**
     * Based on the backoff method from
     * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
     * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
     */
    function calculateBackoffMillis(backoffCount, intervalMillis, backoffFactor) {
        if (intervalMillis === void 0) { intervalMillis = DEFAULT_INTERVAL_MILLIS; }
        if (backoffFactor === void 0) { backoffFactor = DEFAULT_BACKOFF_FACTOR; }
        // Calculates an exponentially increasing value.
        // Deviation: calculates value from count and a constant interval, so we only need to save value
        // and count to restore state.
        var currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
        // A random "fuzz" to avoid waves of retries.
        // Deviation: randomFactor is required.
        var randomWait = Math.round(
        // A fraction of the backoff value to add/subtract.
        // Deviation: changes multiplication order to improve readability.
        RANDOM_FACTOR *
            currBaseValue *
            // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
            // if we add or subtract.
            (Math.random() - 0.5) *
            2);
        // Limits backoff to max to avoid effectively permanent backoff.
        return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
    }

    /**
     * Component for service name T, e.g. `auth`, `auth-internal`
     */
    var Component = /** @class */ (function () {
        /**
         *
         * @param name The public service name, e.g. app, auth, firestore, database
         * @param instanceFactory Service factory responsible for creating the public interface
         * @param type whether the service provided by the component is public or private
         */
        function Component(name, instanceFactory, type) {
            this.name = name;
            this.instanceFactory = instanceFactory;
            this.type = type;
            this.multipleInstances = false;
            /**
             * Properties to be added to the service namespace
             */
            this.serviceProps = {};
            this.instantiationMode = "LAZY" /* LAZY */;
        }
        Component.prototype.setInstantiationMode = function (mode) {
            this.instantiationMode = mode;
            return this;
        };
        Component.prototype.setMultipleInstances = function (multipleInstances) {
            this.multipleInstances = multipleInstances;
            return this;
        };
        Component.prototype.setServiceProps = function (props) {
            this.serviceProps = props;
            return this;
        };
        return Component;
    }());

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var DEFAULT_ENTRY_NAME$1 = '[DEFAULT]';

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
     * NameServiceMapping[T] is an alias for the type of the instance
     */
    var Provider = /** @class */ (function () {
        function Provider(name, container) {
            this.name = name;
            this.container = container;
            this.component = null;
            this.instances = new Map();
            this.instancesDeferred = new Map();
        }
        /**
         * @param identifier A provider can provide mulitple instances of a service
         * if this.component.multipleInstances is true.
         */
        Provider.prototype.get = function (identifier) {
            if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME$1; }
            // if multipleInstances is not supported, use the default name
            var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
            if (!this.instancesDeferred.has(normalizedIdentifier)) {
                var deferred = new Deferred();
                this.instancesDeferred.set(normalizedIdentifier, deferred);
                // If the service instance is available, resolve the promise with it immediately
                try {
                    var instance = this.getOrInitializeService({
                        instanceIdentifier: normalizedIdentifier
                    });
                    if (instance) {
                        deferred.resolve(instance);
                    }
                }
                catch (e) {
                    // when the instance factory throws an exception during get(), it should not cause
                    // a fatal error. We just return the unresolved promise in this case.
                }
            }
            return this.instancesDeferred.get(normalizedIdentifier).promise;
        };
        Provider.prototype.getImmediate = function (options) {
            var _a = __assign({ identifier: DEFAULT_ENTRY_NAME$1, optional: false }, options), identifier = _a.identifier, optional = _a.optional;
            // if multipleInstances is not supported, use the default name
            var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
            try {
                var instance = this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
                if (!instance) {
                    if (optional) {
                        return null;
                    }
                    throw Error("Service " + this.name + " is not available");
                }
                return instance;
            }
            catch (e) {
                if (optional) {
                    return null;
                }
                else {
                    throw e;
                }
            }
        };
        Provider.prototype.getComponent = function () {
            return this.component;
        };
        Provider.prototype.setComponent = function (component) {
            var e_1, _a;
            if (component.name !== this.name) {
                throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
            }
            if (this.component) {
                throw Error("Component for " + this.name + " has already been provided");
            }
            this.component = component;
            // if the service is eager, initialize the default instance
            if (isComponentEager(component)) {
                try {
                    this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME$1 });
                }
                catch (e) {
                    // when the instance factory for an eager Component throws an exception during the eager
                    // initialization, it should not cause a fatal error.
                    // TODO: Investigate if we need to make it configurable, because some component may want to cause
                    // a fatal error in this case?
                }
            }
            try {
                // Create service instances for the pending promises and resolve them
                // NOTE: if this.multipleInstances is false, only the default instance will be created
                // and all promises with resolve with it regardless of the identifier.
                for (var _b = __values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
                    var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                    try {
                        // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                        var instance = this.getOrInitializeService({
                            instanceIdentifier: normalizedIdentifier
                        });
                        instanceDeferred.resolve(instance);
                    }
                    catch (e) {
                        // when the instance factory throws an exception, it should not cause
                        // a fatal error. We just leave the promise unresolved.
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        Provider.prototype.clearInstance = function (identifier) {
            if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME$1; }
            this.instancesDeferred.delete(identifier);
            this.instances.delete(identifier);
        };
        // app.delete() will call this method on every provider to delete the services
        // TODO: should we mark the provider as deleted?
        Provider.prototype.delete = function () {
            return __awaiter(this, void 0, void 0, function () {
                var services;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            services = Array.from(this.instances.values());
                            return [4 /*yield*/, Promise.all(__spreadArray(__spreadArray([], __read(services
                                    .filter(function (service) { return 'INTERNAL' in service; }) // legacy services
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    .map(function (service) { return service.INTERNAL.delete(); }))), __read(services
                                    .filter(function (service) { return '_delete' in service; }) // modularized services
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    .map(function (service) { return service._delete(); }))))];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Provider.prototype.isComponentSet = function () {
            return this.component != null;
        };
        Provider.prototype.isInitialized = function (identifier) {
            if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME$1; }
            return this.instances.has(identifier);
        };
        Provider.prototype.initialize = function (opts) {
            if (opts === void 0) { opts = {}; }
            var _a = opts.instanceIdentifier, instanceIdentifier = _a === void 0 ? DEFAULT_ENTRY_NAME$1 : _a, _b = opts.options, options = _b === void 0 ? {} : _b;
            var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            if (this.isInitialized(normalizedIdentifier)) {
                throw Error(this.name + "(" + normalizedIdentifier + ") has already been initialized");
            }
            if (!this.isComponentSet()) {
                throw Error("Component " + this.name + " has not been registered yet");
            }
            return this.getOrInitializeService({
                instanceIdentifier: normalizedIdentifier,
                options: options
            });
        };
        Provider.prototype.getOrInitializeService = function (_a) {
            var instanceIdentifier = _a.instanceIdentifier, _b = _a.options, options = _b === void 0 ? {} : _b;
            var instance = this.instances.get(instanceIdentifier);
            if (!instance && this.component) {
                instance = this.component.instanceFactory(this.container, {
                    instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
                    options: options
                });
                this.instances.set(instanceIdentifier, instance);
            }
            return instance || null;
        };
        Provider.prototype.normalizeInstanceIdentifier = function (identifier) {
            if (this.component) {
                return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME$1;
            }
            else {
                return identifier; // assume multiple instances are supported before the component is provided.
            }
        };
        return Provider;
    }());
    // undefined should be passed to the service factory for the default instance
    function normalizeIdentifierForFactory(identifier) {
        return identifier === DEFAULT_ENTRY_NAME$1 ? undefined : identifier;
    }
    function isComponentEager(component) {
        return component.instantiationMode === "EAGER" /* EAGER */;
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
     */
    var ComponentContainer = /** @class */ (function () {
        function ComponentContainer(name) {
            this.name = name;
            this.providers = new Map();
        }
        /**
         *
         * @param component Component being added
         * @param overwrite When a component with the same name has already been registered,
         * if overwrite is true: overwrite the existing component with the new component and create a new
         * provider with the new component. It can be useful in tests where you want to use different mocks
         * for different tests.
         * if overwrite is false: throw an exception
         */
        ComponentContainer.prototype.addComponent = function (component) {
            var provider = this.getProvider(component.name);
            if (provider.isComponentSet()) {
                throw new Error("Component " + component.name + " has already been registered with " + this.name);
            }
            provider.setComponent(component);
        };
        ComponentContainer.prototype.addOrOverwriteComponent = function (component) {
            var provider = this.getProvider(component.name);
            if (provider.isComponentSet()) {
                // delete the existing provider from the container, so we can register the new component
                this.providers.delete(component.name);
            }
            this.addComponent(component);
        };
        /**
         * getProvider provides a type safe interface where it can only be called with a field name
         * present in NameServiceMapping interface.
         *
         * Firebase SDKs providing services should extend NameServiceMapping interface to register
         * themselves.
         */
        ComponentContainer.prototype.getProvider = function (name) {
            if (this.providers.has(name)) {
                return this.providers.get(name);
            }
            // create a Provider for a service that hasn't registered with Firebase
            var provider = new Provider(name, this);
            this.providers.set(name, provider);
            return provider;
        };
        ComponentContainer.prototype.getProviders = function () {
            return Array.from(this.providers.values());
        };
        return ComponentContainer;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var _a$3;
    /**
     * A container for all of the Logger instances
     */
    var instances = [];
    /**
     * The JS SDK supports 5 log levels and also allows a user the ability to
     * silence the logs altogether.
     *
     * The order is a follows:
     * DEBUG < VERBOSE < INFO < WARN < ERROR
     *
     * All of the log types above the current log level will be captured (i.e. if
     * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
     * `VERBOSE` logs will not)
     */
    var LogLevel;
    (function (LogLevel) {
        LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
        LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
        LogLevel[LogLevel["INFO"] = 2] = "INFO";
        LogLevel[LogLevel["WARN"] = 3] = "WARN";
        LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
        LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
    })(LogLevel || (LogLevel = {}));
    var levelStringToEnum = {
        'debug': LogLevel.DEBUG,
        'verbose': LogLevel.VERBOSE,
        'info': LogLevel.INFO,
        'warn': LogLevel.WARN,
        'error': LogLevel.ERROR,
        'silent': LogLevel.SILENT
    };
    /**
     * The default log level
     */
    var defaultLogLevel = LogLevel.INFO;
    /**
     * By default, `console.debug` is not displayed in the developer console (in
     * chrome). To avoid forcing users to have to opt-in to these logs twice
     * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
     * logs to the `console.log` function.
     */
    var ConsoleMethod = (_a$3 = {},
        _a$3[LogLevel.DEBUG] = 'log',
        _a$3[LogLevel.VERBOSE] = 'log',
        _a$3[LogLevel.INFO] = 'info',
        _a$3[LogLevel.WARN] = 'warn',
        _a$3[LogLevel.ERROR] = 'error',
        _a$3);
    /**
     * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
     * messages on to their corresponding console counterparts (if the log method
     * is supported by the current log level)
     */
    var defaultLogHandler = function (instance, logType) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        if (logType < instance.logLevel) {
            return;
        }
        var now = new Date().toISOString();
        var method = ConsoleMethod[logType];
        if (method) {
            console[method].apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
        }
        else {
            throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
        }
    };
    var Logger = /** @class */ (function () {
        /**
         * Gives you an instance of a Logger to capture messages according to
         * Firebase's logging scheme.
         *
         * @param name The name that the logs will be associated with
         */
        function Logger(name) {
            this.name = name;
            /**
             * The log level of the given Logger instance.
             */
            this._logLevel = defaultLogLevel;
            /**
             * The main (internal) log handler for the Logger instance.
             * Can be set to a new function in internal package code but not by user.
             */
            this._logHandler = defaultLogHandler;
            /**
             * The optional, additional, user-defined log handler for the Logger instance.
             */
            this._userLogHandler = null;
            /**
             * Capture the current instance for later use
             */
            instances.push(this);
        }
        Object.defineProperty(Logger.prototype, "logLevel", {
            get: function () {
                return this._logLevel;
            },
            set: function (val) {
                if (!(val in LogLevel)) {
                    throw new TypeError("Invalid value \"" + val + "\" assigned to `logLevel`");
                }
                this._logLevel = val;
            },
            enumerable: false,
            configurable: true
        });
        // Workaround for setter/getter having to be the same type.
        Logger.prototype.setLogLevel = function (val) {
            this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
        };
        Object.defineProperty(Logger.prototype, "logHandler", {
            get: function () {
                return this._logHandler;
            },
            set: function (val) {
                if (typeof val !== 'function') {
                    throw new TypeError('Value assigned to `logHandler` must be a function');
                }
                this._logHandler = val;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Logger.prototype, "userLogHandler", {
            get: function () {
                return this._userLogHandler;
            },
            set: function (val) {
                this._userLogHandler = val;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * The functions below are all based on the `console` interface
         */
        Logger.prototype.debug = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
            this._logHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
        };
        Logger.prototype.log = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
            this._logHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
        };
        Logger.prototype.info = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
            this._logHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
        };
        Logger.prototype.warn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
            this._logHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
        };
        Logger.prototype.error = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
            this._logHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
        };
        return Logger;
    }());
    function setLogLevel(level) {
        instances.forEach(function (inst) {
            inst.setLogLevel(level);
        });
    }
    function setUserLogHandler(logCallback, options) {
        var _loop_1 = function (instance) {
            var customLogLevel = null;
            if (options && options.level) {
                customLogLevel = levelStringToEnum[options.level];
            }
            if (logCallback === null) {
                instance.userLogHandler = null;
            }
            else {
                instance.userLogHandler = function (instance, level) {
                    var args = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        args[_i - 2] = arguments[_i];
                    }
                    var message = args
                        .map(function (arg) {
                        if (arg == null) {
                            return null;
                        }
                        else if (typeof arg === 'string') {
                            return arg;
                        }
                        else if (typeof arg === 'number' || typeof arg === 'boolean') {
                            return arg.toString();
                        }
                        else if (arg instanceof Error) {
                            return arg.message;
                        }
                        else {
                            try {
                                return JSON.stringify(arg);
                            }
                            catch (ignored) {
                                return null;
                            }
                        }
                    })
                        .filter(function (arg) { return arg; })
                        .join(' ');
                    if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
                        logCallback({
                            level: LogLevel[level].toLowerCase(),
                            message: message,
                            args: args,
                            type: instance.name
                        });
                    }
                };
            }
        };
        for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
            var instance = instances_1[_i];
            _loop_1(instance);
        }
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var _a$2;
    var ERRORS$1 = (_a$2 = {},
        _a$2["no-app" /* NO_APP */] = "No Firebase App '{$appName}' has been created - " +
            'call Firebase App.initializeApp()',
        _a$2["bad-app-name" /* BAD_APP_NAME */] = "Illegal App name: '{$appName}",
        _a$2["duplicate-app" /* DUPLICATE_APP */] = "Firebase App named '{$appName}' already exists",
        _a$2["app-deleted" /* APP_DELETED */] = "Firebase App named '{$appName}' already deleted",
        _a$2["invalid-app-argument" /* INVALID_APP_ARGUMENT */] = 'firebase.{$appName}() takes either no argument or a ' +
            'Firebase App instance.',
        _a$2["invalid-log-argument" /* INVALID_LOG_ARGUMENT */] = 'First argument to `onLog` must be null or a function.',
        _a$2);
    var ERROR_FACTORY$2 = new ErrorFactory('app', 'Firebase', ERRORS$1);

    var name$4 = "@firebase/app";
    var version$4 = "0.6.17";

    var name$1$1 = "@firebase/analytics";

    var name$2$1 = "@firebase/auth";

    var name$3$1 = "@firebase/database";

    var name$4$1 = "@firebase/functions";

    var name$5 = "@firebase/installations";

    var name$6 = "@firebase/messaging";

    var name$7 = "@firebase/performance";

    var name$8 = "@firebase/remote-config";

    var name$9 = "@firebase/storage";

    var name$a = "@firebase/firestore";

    var name$b = "firebase-wrapper";

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var _a$1$1;
    var DEFAULT_ENTRY_NAME = '[DEFAULT]';
    var PLATFORM_LOG_STRING = (_a$1$1 = {},
        _a$1$1[name$4] = 'fire-core',
        _a$1$1[name$1$1] = 'fire-analytics',
        _a$1$1[name$2$1] = 'fire-auth',
        _a$1$1[name$3$1] = 'fire-rtdb',
        _a$1$1[name$4$1] = 'fire-fn',
        _a$1$1[name$5] = 'fire-iid',
        _a$1$1[name$6] = 'fire-fcm',
        _a$1$1[name$7] = 'fire-perf',
        _a$1$1[name$8] = 'fire-rc',
        _a$1$1[name$9] = 'fire-gcs',
        _a$1$1[name$a] = 'fire-fst',
        _a$1$1['fire-js'] = 'fire-js',
        _a$1$1[name$b] = 'fire-js-all',
        _a$1$1);

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var logger$1 = new Logger('@firebase/app');

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Global context object for a collection of services using
     * a shared authentication state.
     */
    var FirebaseAppImpl = /** @class */ (function () {
        function FirebaseAppImpl(options, config, firebase_) {
            var _this = this;
            this.firebase_ = firebase_;
            this.isDeleted_ = false;
            this.name_ = config.name;
            this.automaticDataCollectionEnabled_ =
                config.automaticDataCollectionEnabled || false;
            this.options_ = deepCopy(options);
            this.container = new ComponentContainer(config.name);
            // add itself to container
            this._addComponent(new Component('app', function () { return _this; }, "PUBLIC" /* PUBLIC */));
            // populate ComponentContainer with existing components
            this.firebase_.INTERNAL.components.forEach(function (component) {
                return _this._addComponent(component);
            });
        }
        Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
            get: function () {
                this.checkDestroyed_();
                return this.automaticDataCollectionEnabled_;
            },
            set: function (val) {
                this.checkDestroyed_();
                this.automaticDataCollectionEnabled_ = val;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FirebaseAppImpl.prototype, "name", {
            get: function () {
                this.checkDestroyed_();
                return this.name_;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FirebaseAppImpl.prototype, "options", {
            get: function () {
                this.checkDestroyed_();
                return this.options_;
            },
            enumerable: false,
            configurable: true
        });
        FirebaseAppImpl.prototype.delete = function () {
            var _this = this;
            return new Promise(function (resolve) {
                _this.checkDestroyed_();
                resolve();
            })
                .then(function () {
                _this.firebase_.INTERNAL.removeApp(_this.name_);
                return Promise.all(_this.container.getProviders().map(function (provider) { return provider.delete(); }));
            })
                .then(function () {
                _this.isDeleted_ = true;
            });
        };
        /**
         * Return a service instance associated with this app (creating it
         * on demand), identified by the passed instanceIdentifier.
         *
         * NOTE: Currently storage and functions are the only ones that are leveraging this
         * functionality. They invoke it by calling:
         *
         * ```javascript
         * firebase.app().storage('STORAGE BUCKET ID')
         * ```
         *
         * The service name is passed to this already
         * @internal
         */
        FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) {
            if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
            this.checkDestroyed_();
            // getImmediate will always succeed because _getService is only called for registered components.
            return this.container.getProvider(name).getImmediate({
                identifier: instanceIdentifier
            });
        };
        /**
         * Remove a service instance from the cache, so we will create a new instance for this service
         * when people try to get this service again.
         *
         * NOTE: currently only firestore is using this functionality to support firestore shutdown.
         *
         * @param name The service name
         * @param instanceIdentifier instance identifier in case multiple instances are allowed
         * @internal
         */
        FirebaseAppImpl.prototype._removeServiceInstance = function (name, instanceIdentifier) {
            if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.container.getProvider(name).clearInstance(instanceIdentifier);
        };
        /**
         * @param component the component being added to this app's container
         */
        FirebaseAppImpl.prototype._addComponent = function (component) {
            try {
                this.container.addComponent(component);
            }
            catch (e) {
                logger$1.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, e);
            }
        };
        FirebaseAppImpl.prototype._addOrOverwriteComponent = function (component) {
            this.container.addOrOverwriteComponent(component);
        };
        FirebaseAppImpl.prototype.toJSON = function () {
            return {
                name: this.name,
                automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
                options: this.options
            };
        };
        /**
         * This function will throw an Error if the App has already been deleted -
         * use before performing API actions on the App.
         */
        FirebaseAppImpl.prototype.checkDestroyed_ = function () {
            if (this.isDeleted_) {
                throw ERROR_FACTORY$2.create("app-deleted" /* APP_DELETED */, { appName: this.name_ });
            }
        };
        return FirebaseAppImpl;
    }());
    // Prevent dead-code elimination of these methods w/o invalid property
    // copying.
    (FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options) ||
        FirebaseAppImpl.prototype.delete ||
        console.log('dc');

    var version$1$1 = "8.3.1";

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Because auth can't share code with other components, we attach the utility functions
     * in an internal namespace to share code.
     * This function return a firebase namespace object without
     * any utility functions, so it can be shared between the regular firebaseNamespace and
     * the lite version.
     */
    function createFirebaseNamespaceCore(firebaseAppImpl) {
        var apps = {};
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var components = new Map();
        // A namespace is a plain JavaScript Object.
        var namespace = {
            // Hack to prevent Babel from modifying the object returned
            // as the firebase namespace.
            // @ts-ignore
            __esModule: true,
            initializeApp: initializeApp,
            // @ts-ignore
            app: app,
            registerVersion: registerVersion,
            setLogLevel: setLogLevel,
            onLog: onLog,
            // @ts-ignore
            apps: null,
            SDK_VERSION: version$1$1,
            INTERNAL: {
                registerComponent: registerComponent,
                removeApp: removeApp,
                components: components,
                useAsService: useAsService
            }
        };
        // Inject a circular default export to allow Babel users who were previously
        // using:
        //
        //   import firebase from 'firebase';
        //   which becomes: var firebase = require('firebase').default;
        //
        // instead of
        //
        //   import * as firebase from 'firebase';
        //   which becomes: var firebase = require('firebase');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        namespace['default'] = namespace;
        // firebase.apps is a read-only getter.
        Object.defineProperty(namespace, 'apps', {
            get: getApps
        });
        /**
         * Called by App.delete() - but before any services associated with the App
         * are deleted.
         */
        function removeApp(name) {
            delete apps[name];
        }
        /**
         * Get the App object for a given name (or DEFAULT).
         */
        function app(name) {
            name = name || DEFAULT_ENTRY_NAME;
            if (!contains(apps, name)) {
                throw ERROR_FACTORY$2.create("no-app" /* NO_APP */, { appName: name });
            }
            return apps[name];
        }
        // @ts-ignore
        app['App'] = firebaseAppImpl;
        function initializeApp(options, rawConfig) {
            if (rawConfig === void 0) { rawConfig = {}; }
            if (typeof rawConfig !== 'object' || rawConfig === null) {
                var name_1 = rawConfig;
                rawConfig = { name: name_1 };
            }
            var config = rawConfig;
            if (config.name === undefined) {
                config.name = DEFAULT_ENTRY_NAME;
            }
            var name = config.name;
            if (typeof name !== 'string' || !name) {
                throw ERROR_FACTORY$2.create("bad-app-name" /* BAD_APP_NAME */, {
                    appName: String(name)
                });
            }
            if (contains(apps, name)) {
                throw ERROR_FACTORY$2.create("duplicate-app" /* DUPLICATE_APP */, { appName: name });
            }
            var app = new firebaseAppImpl(options, config, namespace);
            apps[name] = app;
            return app;
        }
        /*
         * Return an array of all the non-deleted FirebaseApps.
         */
        function getApps() {
            // Make a copy so caller cannot mutate the apps list.
            return Object.keys(apps).map(function (name) { return apps[name]; });
        }
        function registerComponent(component) {
            var componentName = component.name;
            if (components.has(componentName)) {
                logger$1.debug("There were multiple attempts to register component " + componentName + ".");
                return component.type === "PUBLIC" /* PUBLIC */
                    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        namespace[componentName]
                    : null;
            }
            components.set(componentName, component);
            // create service namespace for public components
            if (component.type === "PUBLIC" /* PUBLIC */) {
                // The Service namespace is an accessor function ...
                var serviceNamespace = function (appArg) {
                    if (appArg === void 0) { appArg = app(); }
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    if (typeof appArg[componentName] !== 'function') {
                        // Invalid argument.
                        // This happens in the following case: firebase.storage('gs:/')
                        throw ERROR_FACTORY$2.create("invalid-app-argument" /* INVALID_APP_ARGUMENT */, {
                            appName: componentName
                        });
                    }
                    // Forward service instance lookup to the FirebaseApp.
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    return appArg[componentName]();
                };
                // ... and a container for service-level properties.
                if (component.serviceProps !== undefined) {
                    deepExtend(serviceNamespace, component.serviceProps);
                }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                namespace[componentName] = serviceNamespace;
                // Patch the FirebaseAppImpl prototype
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                firebaseAppImpl.prototype[componentName] =
                    // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
                    // option added to the no-explicit-any rule when ESlint releases it.
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var serviceFxn = this._getService.bind(this, componentName);
                        return serviceFxn.apply(this, component.multipleInstances ? args : []);
                    };
            }
            // add the component to existing app instances
            for (var _i = 0, _a = Object.keys(apps); _i < _a.length; _i++) {
                var appName = _a[_i];
                apps[appName]._addComponent(component);
            }
            return component.type === "PUBLIC" /* PUBLIC */
                ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    namespace[componentName]
                : null;
        }
        function registerVersion(libraryKeyOrName, version, variant) {
            var _a;
            // TODO: We can use this check to whitelist strings when/if we set up
            // a good whitelist system.
            var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
            if (variant) {
                library += "-" + variant;
            }
            var libraryMismatch = library.match(/\s|\//);
            var versionMismatch = version.match(/\s|\//);
            if (libraryMismatch || versionMismatch) {
                var warning = [
                    "Unable to register library \"" + library + "\" with version \"" + version + "\":"
                ];
                if (libraryMismatch) {
                    warning.push("library name \"" + library + "\" contains illegal characters (whitespace or \"/\")");
                }
                if (libraryMismatch && versionMismatch) {
                    warning.push('and');
                }
                if (versionMismatch) {
                    warning.push("version name \"" + version + "\" contains illegal characters (whitespace or \"/\")");
                }
                logger$1.warn(warning.join(' '));
                return;
            }
            registerComponent(new Component(library + "-version", function () { return ({ library: library, version: version }); }, "VERSION" /* VERSION */));
        }
        function onLog(logCallback, options) {
            if (logCallback !== null && typeof logCallback !== 'function') {
                throw ERROR_FACTORY$2.create("invalid-log-argument" /* INVALID_LOG_ARGUMENT */);
            }
            setUserLogHandler(logCallback, options);
        }
        // Map the requested service to a registered service name
        // (used to map auth to serverAuth service when needed).
        function useAsService(app, name) {
            if (name === 'serverAuth') {
                return null;
            }
            var useService = name;
            return useService;
        }
        return namespace;
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Return a firebase namespace object.
     *
     * In production, this will be called exactly once and the result
     * assigned to the 'firebase' global.  It may be called multiple times
     * in unit tests.
     */
    function createFirebaseNamespace() {
        var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
        namespace.INTERNAL = __assign(__assign({}, namespace.INTERNAL), { createFirebaseNamespace: createFirebaseNamespace,
            extendNamespace: extendNamespace,
            createSubscribe: createSubscribe,
            ErrorFactory: ErrorFactory,
            deepExtend: deepExtend });
        /**
         * Patch the top-level firebase namespace with additional properties.
         *
         * firebase.INTERNAL.extendNamespace()
         */
        function extendNamespace(props) {
            deepExtend(namespace, props);
        }
        return namespace;
    }
    var firebase = createFirebaseNamespace();

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var PlatformLoggerService = /** @class */ (function () {
        function PlatformLoggerService(container) {
            this.container = container;
        }
        // In initial implementation, this will be called by installations on
        // auth token refresh, and installations will send this string.
        PlatformLoggerService.prototype.getPlatformInfoString = function () {
            var providers = this.container.getProviders();
            // Loop through providers and get library/version pairs from any that are
            // version components.
            return providers
                .map(function (provider) {
                if (isVersionServiceProvider(provider)) {
                    var service = provider.getImmediate();
                    return service.library + "/" + service.version;
                }
                else {
                    return null;
                }
            })
                .filter(function (logString) { return logString; })
                .join(' ');
        };
        return PlatformLoggerService;
    }());
    /**
     *
     * @param provider check if this provider provides a VersionService
     *
     * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
     * provides VersionService. The provider is not necessarily a 'app-version'
     * provider.
     */
    function isVersionServiceProvider(provider) {
        var component = provider.getComponent();
        return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* VERSION */;
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function registerCoreComponents(firebase, variant) {
        firebase.INTERNAL.registerComponent(new Component('platform-logger', function (container) { return new PlatformLoggerService(container); }, "PRIVATE" /* PRIVATE */));
        // Register `app` package.
        firebase.registerVersion(name$4, version$4, variant);
        // Register platform SDK identifier (no version).
        firebase.registerVersion('fire-js', '');
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // Firebase Lite detection test
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (isBrowser() && self.firebase !== undefined) {
        logger$1.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
        // eslint-disable-next-line
        var sdkVersion = self.firebase.SDK_VERSION;
        if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
            logger$1.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
        }
    }
    var initializeApp = firebase.initializeApp;
    // TODO: This disable can be removed and the 'ignoreRestArgs' option added to
    // the no-explicit-any rule when ESlint releases it.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    firebase.initializeApp = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // Environment check before initializing app
        // Do the check in initializeApp, so people have a chance to disable it by setting logLevel
        // in @firebase/logger
        if (isNode()) {
            logger$1.warn("\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the \"main\" field in package.json.\n      \n      If you are using Webpack, you can specify \"main\" as the first item in\n      \"resolve.mainFields\":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify \"main\"\n      as the first item in \"mainFields\", e.g. ['main', 'module'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      ");
        }
        return initializeApp.apply(undefined, args);
    };
    var firebase$1 = firebase;
    registerCoreComponents(firebase$1);

    var name$3 = "firebase";
    var version$3 = "8.3.1";

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    firebase$1.registerVersion(name$3, version$3, 'app');

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn) {
      var module = { exports: {} };
    	return fn(module, module.exports), module.exports;
    }

    var idb = createCommonjsModule(function (module, exports) {
    (function (global, factory) {
      factory(exports) ;
    }(commonjsGlobal, function (exports) {
      function toArray(arr) {
        return Array.prototype.slice.call(arr);
      }

      function promisifyRequest(request) {
        return new Promise(function(resolve, reject) {
          request.onsuccess = function() {
            resolve(request.result);
          };

          request.onerror = function() {
            reject(request.error);
          };
        });
      }

      function promisifyRequestCall(obj, method, args) {
        var request;
        var p = new Promise(function(resolve, reject) {
          request = obj[method].apply(obj, args);
          promisifyRequest(request).then(resolve, reject);
        });

        p.request = request;
        return p;
      }

      function promisifyCursorRequestCall(obj, method, args) {
        var p = promisifyRequestCall(obj, method, args);
        return p.then(function(value) {
          if (!value) return;
          return new Cursor(value, p.request);
        });
      }

      function proxyProperties(ProxyClass, targetProp, properties) {
        properties.forEach(function(prop) {
          Object.defineProperty(ProxyClass.prototype, prop, {
            get: function() {
              return this[targetProp][prop];
            },
            set: function(val) {
              this[targetProp][prop] = val;
            }
          });
        });
      }

      function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
        properties.forEach(function(prop) {
          if (!(prop in Constructor.prototype)) return;
          ProxyClass.prototype[prop] = function() {
            return promisifyRequestCall(this[targetProp], prop, arguments);
          };
        });
      }

      function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
        properties.forEach(function(prop) {
          if (!(prop in Constructor.prototype)) return;
          ProxyClass.prototype[prop] = function() {
            return this[targetProp][prop].apply(this[targetProp], arguments);
          };
        });
      }

      function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
        properties.forEach(function(prop) {
          if (!(prop in Constructor.prototype)) return;
          ProxyClass.prototype[prop] = function() {
            return promisifyCursorRequestCall(this[targetProp], prop, arguments);
          };
        });
      }

      function Index(index) {
        this._index = index;
      }

      proxyProperties(Index, '_index', [
        'name',
        'keyPath',
        'multiEntry',
        'unique'
      ]);

      proxyRequestMethods(Index, '_index', IDBIndex, [
        'get',
        'getKey',
        'getAll',
        'getAllKeys',
        'count'
      ]);

      proxyCursorRequestMethods(Index, '_index', IDBIndex, [
        'openCursor',
        'openKeyCursor'
      ]);

      function Cursor(cursor, request) {
        this._cursor = cursor;
        this._request = request;
      }

      proxyProperties(Cursor, '_cursor', [
        'direction',
        'key',
        'primaryKey',
        'value'
      ]);

      proxyRequestMethods(Cursor, '_cursor', IDBCursor, [
        'update',
        'delete'
      ]);

      // proxy 'next' methods
      ['advance', 'continue', 'continuePrimaryKey'].forEach(function(methodName) {
        if (!(methodName in IDBCursor.prototype)) return;
        Cursor.prototype[methodName] = function() {
          var cursor = this;
          var args = arguments;
          return Promise.resolve().then(function() {
            cursor._cursor[methodName].apply(cursor._cursor, args);
            return promisifyRequest(cursor._request).then(function(value) {
              if (!value) return;
              return new Cursor(value, cursor._request);
            });
          });
        };
      });

      function ObjectStore(store) {
        this._store = store;
      }

      ObjectStore.prototype.createIndex = function() {
        return new Index(this._store.createIndex.apply(this._store, arguments));
      };

      ObjectStore.prototype.index = function() {
        return new Index(this._store.index.apply(this._store, arguments));
      };

      proxyProperties(ObjectStore, '_store', [
        'name',
        'keyPath',
        'indexNames',
        'autoIncrement'
      ]);

      proxyRequestMethods(ObjectStore, '_store', IDBObjectStore, [
        'put',
        'add',
        'delete',
        'clear',
        'get',
        'getAll',
        'getKey',
        'getAllKeys',
        'count'
      ]);

      proxyCursorRequestMethods(ObjectStore, '_store', IDBObjectStore, [
        'openCursor',
        'openKeyCursor'
      ]);

      proxyMethods(ObjectStore, '_store', IDBObjectStore, [
        'deleteIndex'
      ]);

      function Transaction(idbTransaction) {
        this._tx = idbTransaction;
        this.complete = new Promise(function(resolve, reject) {
          idbTransaction.oncomplete = function() {
            resolve();
          };
          idbTransaction.onerror = function() {
            reject(idbTransaction.error);
          };
          idbTransaction.onabort = function() {
            reject(idbTransaction.error);
          };
        });
      }

      Transaction.prototype.objectStore = function() {
        return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
      };

      proxyProperties(Transaction, '_tx', [
        'objectStoreNames',
        'mode'
      ]);

      proxyMethods(Transaction, '_tx', IDBTransaction, [
        'abort'
      ]);

      function UpgradeDB(db, oldVersion, transaction) {
        this._db = db;
        this.oldVersion = oldVersion;
        this.transaction = new Transaction(transaction);
      }

      UpgradeDB.prototype.createObjectStore = function() {
        return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
      };

      proxyProperties(UpgradeDB, '_db', [
        'name',
        'version',
        'objectStoreNames'
      ]);

      proxyMethods(UpgradeDB, '_db', IDBDatabase, [
        'deleteObjectStore',
        'close'
      ]);

      function DB(db) {
        this._db = db;
      }

      DB.prototype.transaction = function() {
        return new Transaction(this._db.transaction.apply(this._db, arguments));
      };

      proxyProperties(DB, '_db', [
        'name',
        'version',
        'objectStoreNames'
      ]);

      proxyMethods(DB, '_db', IDBDatabase, [
        'close'
      ]);

      // Add cursor iterators
      // TODO: remove this once browsers do the right thing with promises
      ['openCursor', 'openKeyCursor'].forEach(function(funcName) {
        [ObjectStore, Index].forEach(function(Constructor) {
          // Don't create iterateKeyCursor if openKeyCursor doesn't exist.
          if (!(funcName in Constructor.prototype)) return;

          Constructor.prototype[funcName.replace('open', 'iterate')] = function() {
            var args = toArray(arguments);
            var callback = args[args.length - 1];
            var nativeObject = this._store || this._index;
            var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));
            request.onsuccess = function() {
              callback(request.result);
            };
          };
        });
      });

      // polyfill getAll
      [Index, ObjectStore].forEach(function(Constructor) {
        if (Constructor.prototype.getAll) return;
        Constructor.prototype.getAll = function(query, count) {
          var instance = this;
          var items = [];

          return new Promise(function(resolve) {
            instance.iterateCursor(query, function(cursor) {
              if (!cursor) {
                resolve(items);
                return;
              }
              items.push(cursor.value);

              if (count !== undefined && items.length == count) {
                resolve(items);
                return;
              }
              cursor.continue();
            });
          });
        };
      });

      function openDb(name, version, upgradeCallback) {
        var p = promisifyRequestCall(indexedDB, 'open', [name, version]);
        var request = p.request;

        if (request) {
          request.onupgradeneeded = function(event) {
            if (upgradeCallback) {
              upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
            }
          };
        }

        return p.then(function(db) {
          return new DB(db);
        });
      }

      function deleteDb(name) {
        return promisifyRequestCall(indexedDB, 'deleteDatabase', [name]);
      }

      exports.openDb = openDb;
      exports.deleteDb = deleteDb;

      Object.defineProperty(exports, '__esModule', { value: true });

    }));
    });

    var name$2 = "@firebase/installations";
    var version$2 = "0.4.22";

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var PENDING_TIMEOUT_MS = 10000;
    var PACKAGE_VERSION = "w:" + version$2;
    var INTERNAL_AUTH_VERSION = 'FIS_v2';
    var INSTALLATIONS_API_URL = 'https://firebaseinstallations.googleapis.com/v1';
    var TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1000; // One hour
    var SERVICE = 'installations';
    var SERVICE_NAME = 'Installations';

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var _a$1;
    var ERROR_DESCRIPTION_MAP = (_a$1 = {},
        _a$1["missing-app-config-values" /* MISSING_APP_CONFIG_VALUES */] = 'Missing App configuration value: "{$valueName}"',
        _a$1["not-registered" /* NOT_REGISTERED */] = 'Firebase Installation is not registered.',
        _a$1["installation-not-found" /* INSTALLATION_NOT_FOUND */] = 'Firebase Installation not found.',
        _a$1["request-failed" /* REQUEST_FAILED */] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        _a$1["app-offline" /* APP_OFFLINE */] = 'Could not process request. Application offline.',
        _a$1["delete-pending-registration" /* DELETE_PENDING_REGISTRATION */] = "Can't delete installation while there is a pending registration request.",
        _a$1);
    var ERROR_FACTORY$1 = new ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
    /** Returns true if error is a FirebaseError that is based on an error from the server. */
    function isServerError(error) {
        return (error instanceof FirebaseError &&
            error.code.includes("request-failed" /* REQUEST_FAILED */));
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function getInstallationsEndpoint(_a) {
        var projectId = _a.projectId;
        return INSTALLATIONS_API_URL + "/projects/" + projectId + "/installations";
    }
    function extractAuthTokenInfoFromResponse(response) {
        return {
            token: response.token,
            requestStatus: 2 /* COMPLETED */,
            expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
            creationTime: Date.now()
        };
    }
    function getErrorFromResponse(requestName, response) {
        return __awaiter(this, void 0, void 0, function () {
            var responseJson, errorData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, response.json()];
                    case 1:
                        responseJson = _a.sent();
                        errorData = responseJson.error;
                        return [2 /*return*/, ERROR_FACTORY$1.create("request-failed" /* REQUEST_FAILED */, {
                                requestName: requestName,
                                serverCode: errorData.code,
                                serverMessage: errorData.message,
                                serverStatus: errorData.status
                            })];
                }
            });
        });
    }
    function getHeaders$1(_a) {
        var apiKey = _a.apiKey;
        return new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-goog-api-key': apiKey
        });
    }
    function getHeadersWithAuth(appConfig, _a) {
        var refreshToken = _a.refreshToken;
        var headers = getHeaders$1(appConfig);
        headers.append('Authorization', getAuthorizationHeader(refreshToken));
        return headers;
    }
    /**
     * Calls the passed in fetch wrapper and returns the response.
     * If the returned response has a status of 5xx, re-runs the function once and
     * returns the response.
     */
    function retryIfServerError(fn) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fn()];
                    case 1:
                        result = _a.sent();
                        if (result.status >= 500 && result.status < 600) {
                            // Internal Server Error. Retry request.
                            return [2 /*return*/, fn()];
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    }
    function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
        // This works because the server will never respond with fractions of a second.
        return Number(responseExpiresIn.replace('s', '000'));
    }
    function getAuthorizationHeader(refreshToken) {
        return INTERNAL_AUTH_VERSION + " " + refreshToken;
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function createInstallationRequest(appConfig, _a) {
        var fid = _a.fid;
        return __awaiter(this, void 0, void 0, function () {
            var endpoint, headers, body, request, response, responseValue, registeredInstallationEntry;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        endpoint = getInstallationsEndpoint(appConfig);
                        headers = getHeaders$1(appConfig);
                        body = {
                            fid: fid,
                            authVersion: INTERNAL_AUTH_VERSION,
                            appId: appConfig.appId,
                            sdkVersion: PACKAGE_VERSION
                        };
                        request = {
                            method: 'POST',
                            headers: headers,
                            body: JSON.stringify(body)
                        };
                        return [4 /*yield*/, retryIfServerError(function () { return fetch(endpoint, request); })];
                    case 1:
                        response = _b.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        responseValue = _b.sent();
                        registeredInstallationEntry = {
                            fid: responseValue.fid || fid,
                            registrationStatus: 2 /* COMPLETED */,
                            refreshToken: responseValue.refreshToken,
                            authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
                        };
                        return [2 /*return*/, registeredInstallationEntry];
                    case 3: return [4 /*yield*/, getErrorFromResponse('Create Installation', response)];
                    case 4: throw _b.sent();
                }
            });
        });
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /** Returns a promise that resolves after given time passes. */
    function sleep(ms) {
        return new Promise(function (resolve) {
            setTimeout(resolve, ms);
        });
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function bufferToBase64UrlSafe(array) {
        var b64 = btoa(String.fromCharCode.apply(String, __spreadArray([], __read(array))));
        return b64.replace(/\+/g, '-').replace(/\//g, '_');
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
    var INVALID_FID = '';
    /**
     * Generates a new FID using random values from Web Crypto API.
     * Returns an empty string if FID generation fails for any reason.
     */
    function generateFid() {
        try {
            // A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
            // bytes. our implementation generates a 17 byte array instead.
            var fidByteArray = new Uint8Array(17);
            var crypto_1 = self.crypto || self.msCrypto;
            crypto_1.getRandomValues(fidByteArray);
            // Replace the first 4 random bits with the constant FID header of 0b0111.
            fidByteArray[0] = 112 + (fidByteArray[0] % 16);
            var fid = encode(fidByteArray);
            return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
        }
        catch (_a) {
            // FID generation errored
            return INVALID_FID;
        }
    }
    /** Converts a FID Uint8Array to a base64 string representation. */
    function encode(fidByteArray) {
        var b64String = bufferToBase64UrlSafe(fidByteArray);
        // Remove the 23rd character that was added because of the extra 4 bits at the
        // end of our 17 byte array, and the '=' padding.
        return b64String.substr(0, 22);
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /** Returns a string key that can be used to identify the app. */
    function getKey(appConfig) {
        return appConfig.appName + "!" + appConfig.appId;
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var fidChangeCallbacks = new Map();
    /**
     * Calls the onIdChange callbacks with the new FID value, and broadcasts the
     * change to other tabs.
     */
    function fidChanged(appConfig, fid) {
        var key = getKey(appConfig);
        callFidChangeCallbacks(key, fid);
        broadcastFidChange(key, fid);
    }
    function addCallback(appConfig, callback) {
        // Open the broadcast channel if it's not already open,
        // to be able to listen to change events from other tabs.
        getBroadcastChannel();
        var key = getKey(appConfig);
        var callbackSet = fidChangeCallbacks.get(key);
        if (!callbackSet) {
            callbackSet = new Set();
            fidChangeCallbacks.set(key, callbackSet);
        }
        callbackSet.add(callback);
    }
    function removeCallback(appConfig, callback) {
        var key = getKey(appConfig);
        var callbackSet = fidChangeCallbacks.get(key);
        if (!callbackSet) {
            return;
        }
        callbackSet.delete(callback);
        if (callbackSet.size === 0) {
            fidChangeCallbacks.delete(key);
        }
        // Close broadcast channel if there are no more callbacks.
        closeBroadcastChannel();
    }
    function callFidChangeCallbacks(key, fid) {
        var e_1, _a;
        var callbacks = fidChangeCallbacks.get(key);
        if (!callbacks) {
            return;
        }
        try {
            for (var callbacks_1 = __values(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
                var callback = callbacks_1_1.value;
                callback(fid);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (callbacks_1_1 && !callbacks_1_1.done && (_a = callbacks_1.return)) _a.call(callbacks_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    function broadcastFidChange(key, fid) {
        var channel = getBroadcastChannel();
        if (channel) {
            channel.postMessage({ key: key, fid: fid });
        }
        closeBroadcastChannel();
    }
    var broadcastChannel = null;
    /** Opens and returns a BroadcastChannel if it is supported by the browser. */
    function getBroadcastChannel() {
        if (!broadcastChannel && 'BroadcastChannel' in self) {
            broadcastChannel = new BroadcastChannel('[Firebase] FID Change');
            broadcastChannel.onmessage = function (e) {
                callFidChangeCallbacks(e.data.key, e.data.fid);
            };
        }
        return broadcastChannel;
    }
    function closeBroadcastChannel() {
        if (fidChangeCallbacks.size === 0 && broadcastChannel) {
            broadcastChannel.close();
            broadcastChannel = null;
        }
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var DATABASE_NAME = 'firebase-installations-database';
    var DATABASE_VERSION = 1;
    var OBJECT_STORE_NAME = 'firebase-installations-store';
    var dbPromise = null;
    function getDbPromise() {
        if (!dbPromise) {
            dbPromise = idb.openDb(DATABASE_NAME, DATABASE_VERSION, function (upgradeDB) {
                // We don't use 'break' in this switch statement, the fall-through
                // behavior is what we want, because if there are multiple versions between
                // the old version and the current version, we want ALL the migrations
                // that correspond to those versions to run, not only the last one.
                // eslint-disable-next-line default-case
                switch (upgradeDB.oldVersion) {
                    case 0:
                        upgradeDB.createObjectStore(OBJECT_STORE_NAME);
                }
            });
        }
        return dbPromise;
    }
    /** Assigns or overwrites the record for the given key with the given value. */
    function set(appConfig, value) {
        return __awaiter(this, void 0, void 0, function () {
            var key, db, tx, objectStore, oldValue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        key = getKey(appConfig);
                        return [4 /*yield*/, getDbPromise()];
                    case 1:
                        db = _a.sent();
                        tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                        objectStore = tx.objectStore(OBJECT_STORE_NAME);
                        return [4 /*yield*/, objectStore.get(key)];
                    case 2:
                        oldValue = _a.sent();
                        return [4 /*yield*/, objectStore.put(value, key)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, tx.complete];
                    case 4:
                        _a.sent();
                        if (!oldValue || oldValue.fid !== value.fid) {
                            fidChanged(appConfig, value.fid);
                        }
                        return [2 /*return*/, value];
                }
            });
        });
    }
    /** Removes record(s) from the objectStore that match the given key. */
    function remove(appConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var key, db, tx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        key = getKey(appConfig);
                        return [4 /*yield*/, getDbPromise()];
                    case 1:
                        db = _a.sent();
                        tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                        return [4 /*yield*/, tx.objectStore(OBJECT_STORE_NAME).delete(key)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, tx.complete];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    /**
     * Atomically updates a record with the result of updateFn, which gets
     * called with the current value. If newValue is undefined, the record is
     * deleted instead.
     * @return Updated value
     */
    function update(appConfig, updateFn) {
        return __awaiter(this, void 0, void 0, function () {
            var key, db, tx, store, oldValue, newValue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        key = getKey(appConfig);
                        return [4 /*yield*/, getDbPromise()];
                    case 1:
                        db = _a.sent();
                        tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                        store = tx.objectStore(OBJECT_STORE_NAME);
                        return [4 /*yield*/, store.get(key)];
                    case 2:
                        oldValue = _a.sent();
                        newValue = updateFn(oldValue);
                        if (!(newValue === undefined)) return [3 /*break*/, 4];
                        return [4 /*yield*/, store.delete(key)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, store.put(newValue, key)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [4 /*yield*/, tx.complete];
                    case 7:
                        _a.sent();
                        if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
                            fidChanged(appConfig, newValue.fid);
                        }
                        return [2 /*return*/, newValue];
                }
            });
        });
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Updates and returns the InstallationEntry from the database.
     * Also triggers a registration request if it is necessary and possible.
     */
    function getInstallationEntry(appConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var registrationPromise, installationEntry;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, update(appConfig, function (oldEntry) {
                            var installationEntry = updateOrCreateInstallationEntry(oldEntry);
                            var entryWithPromise = triggerRegistrationIfNecessary(appConfig, installationEntry);
                            registrationPromise = entryWithPromise.registrationPromise;
                            return entryWithPromise.installationEntry;
                        })];
                    case 1:
                        installationEntry = _b.sent();
                        if (!(installationEntry.fid === INVALID_FID)) return [3 /*break*/, 3];
                        _a = {};
                        return [4 /*yield*/, registrationPromise];
                    case 2: 
                    // FID generation failed. Waiting for the FID from the server.
                    return [2 /*return*/, (_a.installationEntry = _b.sent(), _a)];
                    case 3: return [2 /*return*/, {
                            installationEntry: installationEntry,
                            registrationPromise: registrationPromise
                        }];
                }
            });
        });
    }
    /**
     * Creates a new Installation Entry if one does not exist.
     * Also clears timed out pending requests.
     */
    function updateOrCreateInstallationEntry(oldEntry) {
        var entry = oldEntry || {
            fid: generateFid(),
            registrationStatus: 0 /* NOT_STARTED */
        };
        return clearTimedOutRequest(entry);
    }
    /**
     * If the Firebase Installation is not registered yet, this will trigger the
     * registration and return an InProgressInstallationEntry.
     *
     * If registrationPromise does not exist, the installationEntry is guaranteed
     * to be registered.
     */
    function triggerRegistrationIfNecessary(appConfig, installationEntry) {
        if (installationEntry.registrationStatus === 0 /* NOT_STARTED */) {
            if (!navigator.onLine) {
                // Registration required but app is offline.
                var registrationPromiseWithError = Promise.reject(ERROR_FACTORY$1.create("app-offline" /* APP_OFFLINE */));
                return {
                    installationEntry: installationEntry,
                    registrationPromise: registrationPromiseWithError
                };
            }
            // Try registering. Change status to IN_PROGRESS.
            var inProgressEntry = {
                fid: installationEntry.fid,
                registrationStatus: 1 /* IN_PROGRESS */,
                registrationTime: Date.now()
            };
            var registrationPromise = registerInstallation(appConfig, inProgressEntry);
            return { installationEntry: inProgressEntry, registrationPromise: registrationPromise };
        }
        else if (installationEntry.registrationStatus === 1 /* IN_PROGRESS */) {
            return {
                installationEntry: installationEntry,
                registrationPromise: waitUntilFidRegistration(appConfig)
            };
        }
        else {
            return { installationEntry: installationEntry };
        }
    }
    /** This will be executed only once for each new Firebase Installation. */
    function registerInstallation(appConfig, installationEntry) {
        return __awaiter(this, void 0, void 0, function () {
            var registeredInstallationEntry, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 7]);
                        return [4 /*yield*/, createInstallationRequest(appConfig, installationEntry)];
                    case 1:
                        registeredInstallationEntry = _a.sent();
                        return [2 /*return*/, set(appConfig, registeredInstallationEntry)];
                    case 2:
                        e_1 = _a.sent();
                        if (!(isServerError(e_1) && e_1.customData.serverCode === 409)) return [3 /*break*/, 4];
                        // Server returned a "FID can not be used" error.
                        // Generate a new ID next time.
                        return [4 /*yield*/, remove(appConfig)];
                    case 3:
                        // Server returned a "FID can not be used" error.
                        // Generate a new ID next time.
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4: 
                    // Registration failed. Set FID as not registered.
                    return [4 /*yield*/, set(appConfig, {
                            fid: installationEntry.fid,
                            registrationStatus: 0 /* NOT_STARTED */
                        })];
                    case 5:
                        // Registration failed. Set FID as not registered.
                        _a.sent();
                        _a.label = 6;
                    case 6: throw e_1;
                    case 7: return [2 /*return*/];
                }
            });
        });
    }
    /** Call if FID registration is pending in another request. */
    function waitUntilFidRegistration(appConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var entry, _a, installationEntry, registrationPromise;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, updateInstallationRequest(appConfig)];
                    case 1:
                        entry = _b.sent();
                        _b.label = 2;
                    case 2:
                        if (!(entry.registrationStatus === 1 /* IN_PROGRESS */)) return [3 /*break*/, 5];
                        // createInstallation request still in progress.
                        return [4 /*yield*/, sleep(100)];
                    case 3:
                        // createInstallation request still in progress.
                        _b.sent();
                        return [4 /*yield*/, updateInstallationRequest(appConfig)];
                    case 4:
                        entry = _b.sent();
                        return [3 /*break*/, 2];
                    case 5:
                        if (!(entry.registrationStatus === 0 /* NOT_STARTED */)) return [3 /*break*/, 7];
                        return [4 /*yield*/, getInstallationEntry(appConfig)];
                    case 6:
                        _a = _b.sent(), installationEntry = _a.installationEntry, registrationPromise = _a.registrationPromise;
                        if (registrationPromise) {
                            return [2 /*return*/, registrationPromise];
                        }
                        else {
                            // if there is no registrationPromise, entry is registered.
                            return [2 /*return*/, installationEntry];
                        }
                    case 7: return [2 /*return*/, entry];
                }
            });
        });
    }
    /**
     * Called only if there is a CreateInstallation request in progress.
     *
     * Updates the InstallationEntry in the DB based on the status of the
     * CreateInstallation request.
     *
     * Returns the updated InstallationEntry.
     */
    function updateInstallationRequest(appConfig) {
        return update(appConfig, function (oldEntry) {
            if (!oldEntry) {
                throw ERROR_FACTORY$1.create("installation-not-found" /* INSTALLATION_NOT_FOUND */);
            }
            return clearTimedOutRequest(oldEntry);
        });
    }
    function clearTimedOutRequest(entry) {
        if (hasInstallationRequestTimedOut(entry)) {
            return {
                fid: entry.fid,
                registrationStatus: 0 /* NOT_STARTED */
            };
        }
        return entry;
    }
    function hasInstallationRequestTimedOut(installationEntry) {
        return (installationEntry.registrationStatus === 1 /* IN_PROGRESS */ &&
            installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now());
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function generateAuthTokenRequest(_a, installationEntry) {
        var appConfig = _a.appConfig, platformLoggerProvider = _a.platformLoggerProvider;
        return __awaiter(this, void 0, void 0, function () {
            var endpoint, headers, platformLogger, body, request, response, responseValue, completedAuthToken;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
                        headers = getHeadersWithAuth(appConfig, installationEntry);
                        platformLogger = platformLoggerProvider.getImmediate({
                            optional: true
                        });
                        if (platformLogger) {
                            headers.append('x-firebase-client', platformLogger.getPlatformInfoString());
                        }
                        body = {
                            installation: {
                                sdkVersion: PACKAGE_VERSION
                            }
                        };
                        request = {
                            method: 'POST',
                            headers: headers,
                            body: JSON.stringify(body)
                        };
                        return [4 /*yield*/, retryIfServerError(function () { return fetch(endpoint, request); })];
                    case 1:
                        response = _b.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        responseValue = _b.sent();
                        completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
                        return [2 /*return*/, completedAuthToken];
                    case 3: return [4 /*yield*/, getErrorFromResponse('Generate Auth Token', response)];
                    case 4: throw _b.sent();
                }
            });
        });
    }
    function getGenerateAuthTokenEndpoint(appConfig, _a) {
        var fid = _a.fid;
        return getInstallationsEndpoint(appConfig) + "/" + fid + "/authTokens:generate";
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Returns a valid authentication token for the installation. Generates a new
     * token if one doesn't exist, is expired or about to expire.
     *
     * Should only be called if the Firebase Installation is registered.
     */
    function refreshAuthToken(dependencies, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = false; }
        return __awaiter(this, void 0, void 0, function () {
            var tokenPromise, entry, authToken, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, update(dependencies.appConfig, function (oldEntry) {
                            if (!isEntryRegistered(oldEntry)) {
                                throw ERROR_FACTORY$1.create("not-registered" /* NOT_REGISTERED */);
                            }
                            var oldAuthToken = oldEntry.authToken;
                            if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
                                // There is a valid token in the DB.
                                return oldEntry;
                            }
                            else if (oldAuthToken.requestStatus === 1 /* IN_PROGRESS */) {
                                // There already is a token request in progress.
                                tokenPromise = waitUntilAuthTokenRequest(dependencies, forceRefresh);
                                return oldEntry;
                            }
                            else {
                                // No token or token expired.
                                if (!navigator.onLine) {
                                    throw ERROR_FACTORY$1.create("app-offline" /* APP_OFFLINE */);
                                }
                                var inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
                                tokenPromise = fetchAuthTokenFromServer(dependencies, inProgressEntry);
                                return inProgressEntry;
                            }
                        })];
                    case 1:
                        entry = _b.sent();
                        if (!tokenPromise) return [3 /*break*/, 3];
                        return [4 /*yield*/, tokenPromise];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = entry.authToken;
                        _b.label = 4;
                    case 4:
                        authToken = _a;
                        return [2 /*return*/, authToken];
                }
            });
        });
    }
    /**
     * Call only if FID is registered and Auth Token request is in progress.
     *
     * Waits until the current pending request finishes. If the request times out,
     * tries once in this thread as well.
     */
    function waitUntilAuthTokenRequest(dependencies, forceRefresh) {
        return __awaiter(this, void 0, void 0, function () {
            var entry, authToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, updateAuthTokenRequest(dependencies.appConfig)];
                    case 1:
                        entry = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!(entry.authToken.requestStatus === 1 /* IN_PROGRESS */)) return [3 /*break*/, 5];
                        // generateAuthToken still in progress.
                        return [4 /*yield*/, sleep(100)];
                    case 3:
                        // generateAuthToken still in progress.
                        _a.sent();
                        return [4 /*yield*/, updateAuthTokenRequest(dependencies.appConfig)];
                    case 4:
                        entry = _a.sent();
                        return [3 /*break*/, 2];
                    case 5:
                        authToken = entry.authToken;
                        if (authToken.requestStatus === 0 /* NOT_STARTED */) {
                            // The request timed out or failed in a different call. Try again.
                            return [2 /*return*/, refreshAuthToken(dependencies, forceRefresh)];
                        }
                        else {
                            return [2 /*return*/, authToken];
                        }
                }
            });
        });
    }
    /**
     * Called only if there is a GenerateAuthToken request in progress.
     *
     * Updates the InstallationEntry in the DB based on the status of the
     * GenerateAuthToken request.
     *
     * Returns the updated InstallationEntry.
     */
    function updateAuthTokenRequest(appConfig) {
        return update(appConfig, function (oldEntry) {
            if (!isEntryRegistered(oldEntry)) {
                throw ERROR_FACTORY$1.create("not-registered" /* NOT_REGISTERED */);
            }
            var oldAuthToken = oldEntry.authToken;
            if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
                return __assign(__assign({}, oldEntry), { authToken: { requestStatus: 0 /* NOT_STARTED */ } });
            }
            return oldEntry;
        });
    }
    function fetchAuthTokenFromServer(dependencies, installationEntry) {
        return __awaiter(this, void 0, void 0, function () {
            var authToken, updatedInstallationEntry, e_1, updatedInstallationEntry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 8]);
                        return [4 /*yield*/, generateAuthTokenRequest(dependencies, installationEntry)];
                    case 1:
                        authToken = _a.sent();
                        updatedInstallationEntry = __assign(__assign({}, installationEntry), { authToken: authToken });
                        return [4 /*yield*/, set(dependencies.appConfig, updatedInstallationEntry)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, authToken];
                    case 3:
                        e_1 = _a.sent();
                        if (!(isServerError(e_1) &&
                            (e_1.customData.serverCode === 401 || e_1.customData.serverCode === 404))) return [3 /*break*/, 5];
                        // Server returned a "FID not found" or a "Invalid authentication" error.
                        // Generate a new ID next time.
                        return [4 /*yield*/, remove(dependencies.appConfig)];
                    case 4:
                        // Server returned a "FID not found" or a "Invalid authentication" error.
                        // Generate a new ID next time.
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 5:
                        updatedInstallationEntry = __assign(__assign({}, installationEntry), { authToken: { requestStatus: 0 /* NOT_STARTED */ } });
                        return [4 /*yield*/, set(dependencies.appConfig, updatedInstallationEntry)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: throw e_1;
                    case 8: return [2 /*return*/];
                }
            });
        });
    }
    function isEntryRegistered(installationEntry) {
        return (installationEntry !== undefined &&
            installationEntry.registrationStatus === 2 /* COMPLETED */);
    }
    function isAuthTokenValid(authToken) {
        return (authToken.requestStatus === 2 /* COMPLETED */ &&
            !isAuthTokenExpired(authToken));
    }
    function isAuthTokenExpired(authToken) {
        var now = Date.now();
        return (now < authToken.creationTime ||
            authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER);
    }
    /** Returns an updated InstallationEntry with an InProgressAuthToken. */
    function makeAuthTokenRequestInProgressEntry(oldEntry) {
        var inProgressAuthToken = {
            requestStatus: 1 /* IN_PROGRESS */,
            requestTime: Date.now()
        };
        return __assign(__assign({}, oldEntry), { authToken: inProgressAuthToken });
    }
    function hasAuthTokenRequestTimedOut(authToken) {
        return (authToken.requestStatus === 1 /* IN_PROGRESS */ &&
            authToken.requestTime + PENDING_TIMEOUT_MS < Date.now());
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function getId(dependencies) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, installationEntry, registrationPromise;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, getInstallationEntry(dependencies.appConfig)];
                    case 1:
                        _a = _b.sent(), installationEntry = _a.installationEntry, registrationPromise = _a.registrationPromise;
                        if (registrationPromise) {
                            registrationPromise.catch(console.error);
                        }
                        else {
                            // If the installation is already registered, update the authentication
                            // token if needed.
                            refreshAuthToken(dependencies).catch(console.error);
                        }
                        return [2 /*return*/, installationEntry.fid];
                }
            });
        });
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function getToken(dependencies, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = false; }
        return __awaiter(this, void 0, void 0, function () {
            var authToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, completeInstallationRegistration(dependencies.appConfig)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, refreshAuthToken(dependencies, forceRefresh)];
                    case 2:
                        authToken = _a.sent();
                        return [2 /*return*/, authToken.token];
                }
            });
        });
    }
    function completeInstallationRegistration(appConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var registrationPromise;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getInstallationEntry(appConfig)];
                    case 1:
                        registrationPromise = (_a.sent()).registrationPromise;
                        if (!registrationPromise) return [3 /*break*/, 3];
                        // A createInstallation request is in progress. Wait until it finishes.
                        return [4 /*yield*/, registrationPromise];
                    case 2:
                        // A createInstallation request is in progress. Wait until it finishes.
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function deleteInstallationRequest(appConfig, installationEntry) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint, headers, request, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = getDeleteEndpoint(appConfig, installationEntry);
                        headers = getHeadersWithAuth(appConfig, installationEntry);
                        request = {
                            method: 'DELETE',
                            headers: headers
                        };
                        return [4 /*yield*/, retryIfServerError(function () { return fetch(endpoint, request); })];
                    case 1:
                        response = _a.sent();
                        if (!!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, getErrorFromResponse('Delete Installation', response)];
                    case 2: throw _a.sent();
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function getDeleteEndpoint(appConfig, _a) {
        var fid = _a.fid;
        return getInstallationsEndpoint(appConfig) + "/" + fid;
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function deleteInstallation(dependencies) {
        return __awaiter(this, void 0, void 0, function () {
            var appConfig, entry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        appConfig = dependencies.appConfig;
                        return [4 /*yield*/, update(appConfig, function (oldEntry) {
                                if (oldEntry && oldEntry.registrationStatus === 0 /* NOT_STARTED */) {
                                    // Delete the unregistered entry without sending a deleteInstallation request.
                                    return undefined;
                                }
                                return oldEntry;
                            })];
                    case 1:
                        entry = _a.sent();
                        if (!entry) return [3 /*break*/, 6];
                        if (!(entry.registrationStatus === 1 /* IN_PROGRESS */)) return [3 /*break*/, 2];
                        // Can't delete while trying to register.
                        throw ERROR_FACTORY$1.create("delete-pending-registration" /* DELETE_PENDING_REGISTRATION */);
                    case 2:
                        if (!(entry.registrationStatus === 2 /* COMPLETED */)) return [3 /*break*/, 6];
                        if (!!navigator.onLine) return [3 /*break*/, 3];
                        throw ERROR_FACTORY$1.create("app-offline" /* APP_OFFLINE */);
                    case 3: return [4 /*yield*/, deleteInstallationRequest(appConfig, entry)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, remove(appConfig)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Sets a new callback that will get called when Installation ID changes.
     * Returns an unsubscribe function that will remove the callback when called.
     */
    function onIdChange(_a, callback) {
        var appConfig = _a.appConfig;
        addCallback(appConfig, callback);
        return function () {
            removeCallback(appConfig, callback);
        };
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function extractAppConfig(app) {
        var e_1, _a;
        if (!app || !app.options) {
            throw getMissingValueError('App Configuration');
        }
        if (!app.name) {
            throw getMissingValueError('App Name');
        }
        // Required app config keys
        var configKeys = [
            'projectId',
            'apiKey',
            'appId'
        ];
        try {
            for (var configKeys_1 = __values(configKeys), configKeys_1_1 = configKeys_1.next(); !configKeys_1_1.done; configKeys_1_1 = configKeys_1.next()) {
                var keyName = configKeys_1_1.value;
                if (!app.options[keyName]) {
                    throw getMissingValueError(keyName);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (configKeys_1_1 && !configKeys_1_1.done && (_a = configKeys_1.return)) _a.call(configKeys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return {
            appName: app.name,
            projectId: app.options.projectId,
            apiKey: app.options.apiKey,
            appId: app.options.appId
        };
    }
    function getMissingValueError(valueName) {
        return ERROR_FACTORY$1.create("missing-app-config-values" /* MISSING_APP_CONFIG_VALUES */, {
            valueName: valueName
        });
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function registerInstallations(instance) {
        var installationsName = 'installations';
        instance.INTERNAL.registerComponent(new Component(installationsName, function (container) {
            var app = container.getProvider('app').getImmediate();
            // Throws if app isn't configured properly.
            var appConfig = extractAppConfig(app);
            var platformLoggerProvider = container.getProvider('platform-logger');
            var dependencies = {
                appConfig: appConfig,
                platformLoggerProvider: platformLoggerProvider
            };
            var installations = {
                app: app,
                getId: function () { return getId(dependencies); },
                getToken: function (forceRefresh) {
                    return getToken(dependencies, forceRefresh);
                },
                delete: function () { return deleteInstallation(dependencies); },
                onIdChange: function (callback) {
                    return onIdChange(dependencies, callback);
                }
            };
            return installations;
        }, "PUBLIC" /* PUBLIC */));
        instance.registerVersion(name$2, version$2);
    }
    registerInstallations(firebase$1);

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // Key to attach FID to in gtag params.
    var GA_FID_KEY = 'firebase_id';
    var ORIGIN_KEY = 'origin';
    var FETCH_TIMEOUT_MILLIS = 60 * 1000;
    var DYNAMIC_CONFIG_URL = 'https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig';
    var GTAG_URL = 'https://www.googletagmanager.com/gtag/js';
    var GtagCommand;
    (function (GtagCommand) {
        GtagCommand["EVENT"] = "event";
        GtagCommand["SET"] = "set";
        GtagCommand["CONFIG"] = "config";
    })(GtagCommand || (GtagCommand = {}));
    /**
     * Officially recommended event names for gtag.js
     * Any other string is also allowed.
     *
     * @public
     */
    var EventName;
    (function (EventName) {
        EventName["ADD_SHIPPING_INFO"] = "add_shipping_info";
        EventName["ADD_PAYMENT_INFO"] = "add_payment_info";
        EventName["ADD_TO_CART"] = "add_to_cart";
        EventName["ADD_TO_WISHLIST"] = "add_to_wishlist";
        EventName["BEGIN_CHECKOUT"] = "begin_checkout";
        /**
         * @deprecated
         * This event name is deprecated and is unsupported in updated
         * Enhanced Ecommerce reports.
         */
        EventName["CHECKOUT_PROGRESS"] = "checkout_progress";
        EventName["EXCEPTION"] = "exception";
        EventName["GENERATE_LEAD"] = "generate_lead";
        EventName["LOGIN"] = "login";
        EventName["PAGE_VIEW"] = "page_view";
        EventName["PURCHASE"] = "purchase";
        EventName["REFUND"] = "refund";
        EventName["REMOVE_FROM_CART"] = "remove_from_cart";
        EventName["SCREEN_VIEW"] = "screen_view";
        EventName["SEARCH"] = "search";
        EventName["SELECT_CONTENT"] = "select_content";
        EventName["SELECT_ITEM"] = "select_item";
        EventName["SELECT_PROMOTION"] = "select_promotion";
        /** @deprecated */
        EventName["SET_CHECKOUT_OPTION"] = "set_checkout_option";
        EventName["SHARE"] = "share";
        EventName["SIGN_UP"] = "sign_up";
        EventName["TIMING_COMPLETE"] = "timing_complete";
        EventName["VIEW_CART"] = "view_cart";
        EventName["VIEW_ITEM"] = "view_item";
        EventName["VIEW_ITEM_LIST"] = "view_item_list";
        EventName["VIEW_PROMOTION"] = "view_promotion";
        EventName["VIEW_SEARCH_RESULTS"] = "view_search_results";
    })(EventName || (EventName = {}));

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Logs an analytics event through the Firebase SDK.
     *
     * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
     * @param eventName Google Analytics event name, choose from standard list or use a custom string.
     * @param eventParams Analytics event parameters.
     */
    function logEvent(gtagFunction, initializationPromise, eventName, eventParams, options) {
        return __awaiter(this, void 0, void 0, function () {
            var measurementId, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(options && options.global)) return [3 /*break*/, 1];
                        gtagFunction(GtagCommand.EVENT, eventName, eventParams);
                        return [2 /*return*/];
                    case 1: return [4 /*yield*/, initializationPromise];
                    case 2:
                        measurementId = _a.sent();
                        params = __assign(__assign({}, eventParams), { 'send_to': measurementId });
                        gtagFunction(GtagCommand.EVENT, eventName, params);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    /**
     * Set screen_name parameter for this Google Analytics ID.
     *
     * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
     * @param screenName Screen name string to set.
     */
    function setCurrentScreen(gtagFunction, initializationPromise, screenName, options) {
        return __awaiter(this, void 0, void 0, function () {
            var measurementId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(options && options.global)) return [3 /*break*/, 1];
                        gtagFunction(GtagCommand.SET, { 'screen_name': screenName });
                        return [2 /*return*/, Promise.resolve()];
                    case 1: return [4 /*yield*/, initializationPromise];
                    case 2:
                        measurementId = _a.sent();
                        gtagFunction(GtagCommand.CONFIG, measurementId, {
                            update: true,
                            'screen_name': screenName
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    /**
     * Set user_id parameter for this Google Analytics ID.
     *
     * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
     * @param id User ID string to set
     */
    function setUserId(gtagFunction, initializationPromise, id, options) {
        return __awaiter(this, void 0, void 0, function () {
            var measurementId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(options && options.global)) return [3 /*break*/, 1];
                        gtagFunction(GtagCommand.SET, { 'user_id': id });
                        return [2 /*return*/, Promise.resolve()];
                    case 1: return [4 /*yield*/, initializationPromise];
                    case 2:
                        measurementId = _a.sent();
                        gtagFunction(GtagCommand.CONFIG, measurementId, {
                            update: true,
                            'user_id': id
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    /**
     * Set all other user properties other than user_id and screen_name.
     *
     * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
     * @param properties Map of user properties to set
     */
    function setUserProperties(gtagFunction, initializationPromise, properties, options) {
        return __awaiter(this, void 0, void 0, function () {
            var flatProperties, _i, _a, key, measurementId;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(options && options.global)) return [3 /*break*/, 1];
                        flatProperties = {};
                        for (_i = 0, _a = Object.keys(properties); _i < _a.length; _i++) {
                            key = _a[_i];
                            // use dot notation for merge behavior in gtag.js
                            flatProperties["user_properties." + key] = properties[key];
                        }
                        gtagFunction(GtagCommand.SET, flatProperties);
                        return [2 /*return*/, Promise.resolve()];
                    case 1: return [4 /*yield*/, initializationPromise];
                    case 2:
                        measurementId = _b.sent();
                        gtagFunction(GtagCommand.CONFIG, measurementId, {
                            update: true,
                            'user_properties': properties
                        });
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    /**
     * Set whether collection is enabled for this ID.
     *
     * @param enabled If true, collection is enabled for this ID.
     */
    function setAnalyticsCollectionEnabled(initializationPromise, enabled) {
        return __awaiter(this, void 0, void 0, function () {
            var measurementId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, initializationPromise];
                    case 1:
                        measurementId = _a.sent();
                        window["ga-disable-" + measurementId] = !enabled;
                        return [2 /*return*/];
                }
            });
        });
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var logger = new Logger('@firebase/analytics');

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Inserts gtag script tag into the page to asynchronously download gtag.
     * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
     */
    function insertScriptTag(dataLayerName, measurementId) {
        var script = document.createElement('script');
        script.src = GTAG_URL + "?l=" + dataLayerName + "&id=" + measurementId;
        script.async = true;
        document.head.appendChild(script);
    }
    /**
     * Get reference to, or create, global datalayer.
     * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
     */
    function getOrCreateDataLayer(dataLayerName) {
        // Check for existing dataLayer and create if needed.
        var dataLayer = [];
        if (Array.isArray(window[dataLayerName])) {
            dataLayer = window[dataLayerName];
        }
        else {
            window[dataLayerName] = dataLayer;
        }
        return dataLayer;
    }
    /**
     * Wrapped gtag logic when gtag is called with 'config' command.
     *
     * @param gtagCore Basic gtag function that just appends to dataLayer.
     * @param initializationPromisesMap Map of appIds to their initialization promises.
     * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
     * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
     * @param measurementId GA Measurement ID to set config for.
     * @param gtagParams Gtag config params to set.
     */
    function gtagOnConfig(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, measurementId, gtagParams) {
        return __awaiter(this, void 0, void 0, function () {
            var correspondingAppId, dynamicConfigResults, foundConfig, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        correspondingAppId = measurementIdToAppId[measurementId];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        if (!correspondingAppId) return [3 /*break*/, 3];
                        return [4 /*yield*/, initializationPromisesMap[correspondingAppId]];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, Promise.all(dynamicConfigPromisesList)];
                    case 4:
                        dynamicConfigResults = _a.sent();
                        foundConfig = dynamicConfigResults.find(function (config) { return config.measurementId === measurementId; });
                        if (!foundConfig) return [3 /*break*/, 6];
                        return [4 /*yield*/, initializationPromisesMap[foundConfig.appId]];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        e_1 = _a.sent();
                        logger.error(e_1);
                        return [3 /*break*/, 8];
                    case 8:
                        gtagCore(GtagCommand.CONFIG, measurementId, gtagParams);
                        return [2 /*return*/];
                }
            });
        });
    }
    /**
     * Wrapped gtag logic when gtag is called with 'event' command.
     *
     * @param gtagCore Basic gtag function that just appends to dataLayer.
     * @param initializationPromisesMap Map of appIds to their initialization promises.
     * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
     * @param measurementId GA Measurement ID to log event to.
     * @param gtagParams Params to log with this event.
     */
    function gtagOnEvent(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementId, gtagParams) {
        return __awaiter(this, void 0, void 0, function () {
            var initializationPromisesToWaitFor, gaSendToList, dynamicConfigResults, _loop_1, _i, gaSendToList_1, sendToId, state_1, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        initializationPromisesToWaitFor = [];
                        if (!(gtagParams && gtagParams['send_to'])) return [3 /*break*/, 2];
                        gaSendToList = gtagParams['send_to'];
                        // Make it an array if is isn't, so it can be dealt with the same way.
                        if (!Array.isArray(gaSendToList)) {
                            gaSendToList = [gaSendToList];
                        }
                        return [4 /*yield*/, Promise.all(dynamicConfigPromisesList)];
                    case 1:
                        dynamicConfigResults = _a.sent();
                        _loop_1 = function (sendToId) {
                            // Any fetched dynamic measurement ID that matches this 'send_to' ID
                            var foundConfig = dynamicConfigResults.find(function (config) { return config.measurementId === sendToId; });
                            var initializationPromise = foundConfig && initializationPromisesMap[foundConfig.appId];
                            if (initializationPromise) {
                                initializationPromisesToWaitFor.push(initializationPromise);
                            }
                            else {
                                // Found an item in 'send_to' that is not associated
                                // directly with an FID, possibly a group.  Empty this array,
                                // exit the loop early, and let it get populated below.
                                initializationPromisesToWaitFor = [];
                                return "break";
                            }
                        };
                        for (_i = 0, gaSendToList_1 = gaSendToList; _i < gaSendToList_1.length; _i++) {
                            sendToId = gaSendToList_1[_i];
                            state_1 = _loop_1(sendToId);
                            if (state_1 === "break")
                                break;
                        }
                        _a.label = 2;
                    case 2:
                        // This will be unpopulated if there was no 'send_to' field , or
                        // if not all entries in the 'send_to' field could be mapped to
                        // a FID. In these cases, wait on all pending initialization promises.
                        if (initializationPromisesToWaitFor.length === 0) {
                            initializationPromisesToWaitFor = Object.values(initializationPromisesMap);
                        }
                        // Run core gtag function with args after all relevant initialization
                        // promises have been resolved.
                        return [4 /*yield*/, Promise.all(initializationPromisesToWaitFor)];
                    case 3:
                        // Run core gtag function with args after all relevant initialization
                        // promises have been resolved.
                        _a.sent();
                        // Workaround for http://b/141370449 - third argument cannot be undefined.
                        gtagCore(GtagCommand.EVENT, measurementId, gtagParams || {});
                        return [3 /*break*/, 5];
                    case 4:
                        e_2 = _a.sent();
                        logger.error(e_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
    /**
     * Wraps a standard gtag function with extra code to wait for completion of
     * relevant initialization promises before sending requests.
     *
     * @param gtagCore Basic gtag function that just appends to dataLayer.
     * @param initializationPromisesMap Map of appIds to their initialization promises.
     * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
     * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
     */
    function wrapGtag(gtagCore, 
    /**
     * Allows wrapped gtag calls to wait on whichever intialization promises are required,
     * depending on the contents of the gtag params' `send_to` field, if any.
     */
    initializationPromisesMap, 
    /**
     * Wrapped gtag calls sometimes require all dynamic config fetches to have returned
     * before determining what initialization promises (which include FIDs) to wait for.
     */
    dynamicConfigPromisesList, 
    /**
     * Wrapped gtag config calls can narrow down which initialization promise (with FID)
     * to wait for if the measurementId is already fetched, by getting the corresponding appId,
     * which is the key for the initialization promises map.
     */
    measurementIdToAppId) {
        /**
         * Wrapper around gtag that ensures FID is sent with gtag calls.
         * @param command Gtag command type.
         * @param idOrNameOrParams Measurement ID if command is EVENT/CONFIG, params if command is SET.
         * @param gtagParams Params if event is EVENT/CONFIG.
         */
        function gtagWrapper(command, idOrNameOrParams, gtagParams) {
            return __awaiter(this, void 0, void 0, function () {
                var e_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 6, , 7]);
                            if (!(command === GtagCommand.EVENT)) return [3 /*break*/, 2];
                            // If EVENT, second arg must be measurementId.
                            return [4 /*yield*/, gtagOnEvent(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, idOrNameOrParams, gtagParams)];
                        case 1:
                            // If EVENT, second arg must be measurementId.
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 2:
                            if (!(command === GtagCommand.CONFIG)) return [3 /*break*/, 4];
                            // If CONFIG, second arg must be measurementId.
                            return [4 /*yield*/, gtagOnConfig(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, idOrNameOrParams, gtagParams)];
                        case 3:
                            // If CONFIG, second arg must be measurementId.
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            // If SET, second arg must be params.
                            gtagCore(GtagCommand.SET, idOrNameOrParams);
                            _a.label = 5;
                        case 5: return [3 /*break*/, 7];
                        case 6:
                            e_3 = _a.sent();
                            logger.error(e_3);
                            return [3 /*break*/, 7];
                        case 7: return [2 /*return*/];
                    }
                });
            });
        }
        return gtagWrapper;
    }
    /**
     * Creates global gtag function or wraps existing one if found.
     * This wrapped function attaches Firebase instance ID (FID) to gtag 'config' and
     * 'event' calls that belong to the GAID associated with this Firebase instance.
     *
     * @param initializationPromisesMap Map of appIds to their initialization promises.
     * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
     * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
     * @param dataLayerName Name of global GA datalayer array.
     * @param gtagFunctionName Name of global gtag function ("gtag" if not user-specified).
     */
    function wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagFunctionName) {
        // Create a basic core gtag function
        var gtagCore = function () {
            var _args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _args[_i] = arguments[_i];
            }
            // Must push IArguments object, not an array.
            window[dataLayerName].push(arguments);
        };
        // Replace it with existing one if found
        if (window[gtagFunctionName] &&
            typeof window[gtagFunctionName] === 'function') {
            // @ts-ignore
            gtagCore = window[gtagFunctionName];
        }
        window[gtagFunctionName] = wrapGtag(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId);
        return {
            gtagCore: gtagCore,
            wrappedGtag: window[gtagFunctionName]
        };
    }
    /**
     * Returns first script tag in DOM matching our gtag url pattern.
     */
    function findGtagScriptOnPage() {
        var scriptTags = window.document.getElementsByTagName('script');
        for (var _i = 0, _a = Object.values(scriptTags); _i < _a.length; _i++) {
            var tag = _a[_i];
            if (tag.src && tag.src.includes(GTAG_URL)) {
                return tag;
            }
        }
        return null;
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var _a;
    var ERRORS = (_a = {},
        _a["already-exists" /* ALREADY_EXISTS */] = 'A Firebase Analytics instance with the appId {$id} ' +
            ' already exists. ' +
            'Only one Firebase Analytics instance can be created for each appId.',
        _a["already-initialized" /* ALREADY_INITIALIZED */] = 'Firebase Analytics has already been initialized.' +
            'settings() must be called before initializing any Analytics instance' +
            'or it will have no effect.',
        _a["interop-component-reg-failed" /* INTEROP_COMPONENT_REG_FAILED */] = 'Firebase Analytics Interop Component failed to instantiate: {$reason}',
        _a["invalid-analytics-context" /* INVALID_ANALYTICS_CONTEXT */] = 'Firebase Analytics is not supported in this environment. ' +
            'Wrap initialization of analytics in analytics.isSupported() ' +
            'to prevent initialization in unsupported environments. Details: {$errorInfo}',
        _a["indexeddb-unavailable" /* INDEXEDDB_UNAVAILABLE */] = 'IndexedDB unavailable or restricted in this environment. ' +
            'Wrap initialization of analytics in analytics.isSupported() ' +
            'to prevent initialization in unsupported environments. Details: {$errorInfo}',
        _a["fetch-throttle" /* FETCH_THROTTLE */] = 'The config fetch request timed out while in an exponential backoff state.' +
            ' Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',
        _a["config-fetch-failed" /* CONFIG_FETCH_FAILED */] = 'Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}',
        _a["no-api-key" /* NO_API_KEY */] = 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field to' +
            'contain a valid API key.',
        _a["no-app-id" /* NO_APP_ID */] = 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field to' +
            'contain a valid app ID.',
        _a);
    var ERROR_FACTORY = new ErrorFactory('analytics', 'Analytics', ERRORS);

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Backoff factor for 503 errors, which we want to be conservative about
     * to avoid overloading servers. Each retry interval will be
     * BASE_INTERVAL_MILLIS * LONG_RETRY_FACTOR ^ retryCount, so the second one
     * will be ~30 seconds (with fuzzing).
     */
    var LONG_RETRY_FACTOR = 30;
    /**
     * Base wait interval to multiplied by backoffFactor^backoffCount.
     */
    var BASE_INTERVAL_MILLIS = 1000;
    /**
     * Stubbable retry data storage class.
     */
    var RetryData = /** @class */ (function () {
        function RetryData(throttleMetadata, intervalMillis) {
            if (throttleMetadata === void 0) { throttleMetadata = {}; }
            if (intervalMillis === void 0) { intervalMillis = BASE_INTERVAL_MILLIS; }
            this.throttleMetadata = throttleMetadata;
            this.intervalMillis = intervalMillis;
        }
        RetryData.prototype.getThrottleMetadata = function (appId) {
            return this.throttleMetadata[appId];
        };
        RetryData.prototype.setThrottleMetadata = function (appId, metadata) {
            this.throttleMetadata[appId] = metadata;
        };
        RetryData.prototype.deleteThrottleMetadata = function (appId) {
            delete this.throttleMetadata[appId];
        };
        return RetryData;
    }());
    var defaultRetryData = new RetryData();
    /**
     * Set GET request headers.
     * @param apiKey App API key.
     */
    function getHeaders(apiKey) {
        return new Headers({
            Accept: 'application/json',
            'x-goog-api-key': apiKey
        });
    }
    /**
     * Fetches dynamic config from backend.
     * @param app Firebase app to fetch config for.
     */
    function fetchDynamicConfig(appFields) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var appId, apiKey, request, appUrl, response, errorMessage, jsonResponse;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        appId = appFields.appId, apiKey = appFields.apiKey;
                        request = {
                            method: 'GET',
                            headers: getHeaders(apiKey)
                        };
                        appUrl = DYNAMIC_CONFIG_URL.replace('{app-id}', appId);
                        return [4 /*yield*/, fetch(appUrl, request)];
                    case 1:
                        response = _b.sent();
                        if (!(response.status !== 200 && response.status !== 304)) return [3 /*break*/, 6];
                        errorMessage = '';
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, response.json()];
                    case 3:
                        jsonResponse = (_b.sent());
                        if ((_a = jsonResponse.error) === null || _a === void 0 ? void 0 : _a.message) {
                            errorMessage = jsonResponse.error.message;
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 5: throw ERROR_FACTORY.create("config-fetch-failed" /* CONFIG_FETCH_FAILED */, {
                        httpStatus: response.status,
                        responseMessage: errorMessage
                    });
                    case 6: return [2 /*return*/, response.json()];
                }
            });
        });
    }
    /**
     * Fetches dynamic config from backend, retrying if failed.
     * @param app Firebase app to fetch config for.
     */
    function fetchDynamicConfigWithRetry(app, 
    // retryData and timeoutMillis are parameterized to allow passing a different value for testing.
    retryData, timeoutMillis) {
        if (retryData === void 0) { retryData = defaultRetryData; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, appId, apiKey, measurementId, throttleMetadata, signal;
            var _this = this;
            return __generator(this, function (_b) {
                _a = app.options, appId = _a.appId, apiKey = _a.apiKey, measurementId = _a.measurementId;
                if (!appId) {
                    throw ERROR_FACTORY.create("no-app-id" /* NO_APP_ID */);
                }
                if (!apiKey) {
                    if (measurementId) {
                        return [2 /*return*/, {
                                measurementId: measurementId,
                                appId: appId
                            }];
                    }
                    throw ERROR_FACTORY.create("no-api-key" /* NO_API_KEY */);
                }
                throttleMetadata = retryData.getThrottleMetadata(appId) || {
                    backoffCount: 0,
                    throttleEndTimeMillis: Date.now()
                };
                signal = new AnalyticsAbortSignal();
                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // Note a very low delay, eg < 10ms, can elapse before listeners are initialized.
                        signal.abort();
                        return [2 /*return*/];
                    });
                }); }, timeoutMillis !== undefined ? timeoutMillis : FETCH_TIMEOUT_MILLIS);
                return [2 /*return*/, attemptFetchDynamicConfigWithRetry({ appId: appId, apiKey: apiKey, measurementId: measurementId }, throttleMetadata, signal, retryData)];
            });
        });
    }
    /**
     * Runs one retry attempt.
     * @param appFields Necessary app config fields.
     * @param throttleMetadata Ongoing metadata to determine throttling times.
     * @param signal Abort signal.
     */
    function attemptFetchDynamicConfigWithRetry(appFields, _a, signal, retryData // for testing
    ) {
        var throttleEndTimeMillis = _a.throttleEndTimeMillis, backoffCount = _a.backoffCount;
        if (retryData === void 0) { retryData = defaultRetryData; }
        return __awaiter(this, void 0, void 0, function () {
            var appId, measurementId, e_1, response, e_2, backoffMillis, throttleMetadata;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        appId = appFields.appId, measurementId = appFields.measurementId;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, setAbortableTimeout(signal, throttleEndTimeMillis)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        if (measurementId) {
                            logger.warn("Timed out fetching this Firebase app's measurement ID from the server." +
                                (" Falling back to the measurement ID " + measurementId) +
                                (" provided in the \"measurementId\" field in the local Firebase config. [" + e_1.message + "]"));
                            return [2 /*return*/, { appId: appId, measurementId: measurementId }];
                        }
                        throw e_1;
                    case 4:
                        _b.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, fetchDynamicConfig(appFields)];
                    case 5:
                        response = _b.sent();
                        // Note the SDK only clears throttle state if response is success or non-retriable.
                        retryData.deleteThrottleMetadata(appId);
                        return [2 /*return*/, response];
                    case 6:
                        e_2 = _b.sent();
                        if (!isRetriableError(e_2)) {
                            retryData.deleteThrottleMetadata(appId);
                            if (measurementId) {
                                logger.warn("Failed to fetch this Firebase app's measurement ID from the server." +
                                    (" Falling back to the measurement ID " + measurementId) +
                                    (" provided in the \"measurementId\" field in the local Firebase config. [" + e_2.message + "]"));
                                return [2 /*return*/, { appId: appId, measurementId: measurementId }];
                            }
                            else {
                                throw e_2;
                            }
                        }
                        backoffMillis = Number(e_2.customData.httpStatus) === 503
                            ? calculateBackoffMillis(backoffCount, retryData.intervalMillis, LONG_RETRY_FACTOR)
                            : calculateBackoffMillis(backoffCount, retryData.intervalMillis);
                        throttleMetadata = {
                            throttleEndTimeMillis: Date.now() + backoffMillis,
                            backoffCount: backoffCount + 1
                        };
                        // Persists state.
                        retryData.setThrottleMetadata(appId, throttleMetadata);
                        logger.debug("Calling attemptFetch again in " + backoffMillis + " millis");
                        return [2 /*return*/, attemptFetchDynamicConfigWithRetry(appFields, throttleMetadata, signal, retryData)];
                    case 7: return [2 /*return*/];
                }
            });
        });
    }
    /**
     * Supports waiting on a backoff by:
     *
     * <ul>
     *   <li>Promisifying setTimeout, so we can set a timeout in our Promise chain</li>
     *   <li>Listening on a signal bus for abort events, just like the Fetch API</li>
     *   <li>Failing in the same way the Fetch API fails, so timing out a live request and a throttled
     *       request appear the same.</li>
     * </ul>
     *
     * <p>Visible for testing.
     */
    function setAbortableTimeout(signal, throttleEndTimeMillis) {
        return new Promise(function (resolve, reject) {
            // Derives backoff from given end time, normalizing negative numbers to zero.
            var backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
            var timeout = setTimeout(resolve, backoffMillis);
            // Adds listener, rather than sets onabort, because signal is a shared object.
            signal.addEventListener(function () {
                clearTimeout(timeout);
                // If the request completes before this timeout, the rejection has no effect.
                reject(ERROR_FACTORY.create("fetch-throttle" /* FETCH_THROTTLE */, {
                    throttleEndTimeMillis: throttleEndTimeMillis
                }));
            });
        });
    }
    /**
     * Returns true if the {@link Error} indicates a fetch request may succeed later.
     */
    function isRetriableError(e) {
        if (!(e instanceof FirebaseError) || !e.customData) {
            return false;
        }
        // Uses string index defined by ErrorData, which FirebaseError implements.
        var httpStatus = Number(e.customData['httpStatus']);
        return (httpStatus === 429 ||
            httpStatus === 500 ||
            httpStatus === 503 ||
            httpStatus === 504);
    }
    /**
     * Shims a minimal AbortSignal (copied from Remote Config).
     *
     * <p>AbortController's AbortSignal conveniently decouples fetch timeout logic from other aspects
     * of networking, such as retries. Firebase doesn't use AbortController enough to justify a
     * polyfill recommendation, like we do with the Fetch API, but this minimal shim can easily be
     * swapped out if/when we do.
     */
    var AnalyticsAbortSignal = /** @class */ (function () {
        function AnalyticsAbortSignal() {
            this.listeners = [];
        }
        AnalyticsAbortSignal.prototype.addEventListener = function (listener) {
            this.listeners.push(listener);
        };
        AnalyticsAbortSignal.prototype.abort = function () {
            this.listeners.forEach(function (listener) { return listener(); });
        };
        return AnalyticsAbortSignal;
    }());

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function validateIndexedDB() {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!isIndexedDBAvailable()) return [3 /*break*/, 1];
                        logger.warn(ERROR_FACTORY.create("indexeddb-unavailable" /* INDEXEDDB_UNAVAILABLE */, {
                            errorInfo: 'IndexedDB is not available in this environment.'
                        }).message);
                        return [2 /*return*/, false];
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, validateIndexedDBOpenable()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        logger.warn(ERROR_FACTORY.create("indexeddb-unavailable" /* INDEXEDDB_UNAVAILABLE */, {
                            errorInfo: e_1
                        }).message);
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/, true];
                }
            });
        });
    }
    /**
     * Initialize the analytics instance in gtag.js by calling config command with fid.
     *
     * NOTE: We combine analytics initialization and setting fid together because we want fid to be
     * part of the `page_view` event that's sent during the initialization
     * @param app Firebase app
     * @param gtagCore The gtag function that's not wrapped.
     * @param dynamicConfigPromisesList Array of all dynamic config promises.
     * @param measurementIdToAppId Maps measurementID to appID.
     * @param installations FirebaseInstallations instance.
     *
     * @returns Measurement ID.
     */
    function initializeIds(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCore, dataLayerName) {
        return __awaiter(this, void 0, void 0, function () {
            var dynamicConfigPromise, fidPromise, _a, dynamicConfig, fid, configProperties;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        dynamicConfigPromise = fetchDynamicConfigWithRetry(app);
                        // Once fetched, map measurementIds to appId, for ease of lookup in wrapped gtag function.
                        dynamicConfigPromise
                            .then(function (config) {
                            measurementIdToAppId[config.measurementId] = config.appId;
                            if (app.options.measurementId &&
                                config.measurementId !== app.options.measurementId) {
                                logger.warn("The measurement ID in the local Firebase config (" + app.options.measurementId + ")" +
                                    (" does not match the measurement ID fetched from the server (" + config.measurementId + ").") +
                                    " To ensure analytics events are always sent to the correct Analytics property," +
                                    " update the" +
                                    " measurement ID field in the local config or remove it from the local config.");
                            }
                        })
                            .catch(function (e) { return logger.error(e); });
                        // Add to list to track state of all dynamic config promises.
                        dynamicConfigPromisesList.push(dynamicConfigPromise);
                        fidPromise = validateIndexedDB().then(function (envIsValid) {
                            if (envIsValid) {
                                return installations.getId();
                            }
                            else {
                                return undefined;
                            }
                        });
                        return [4 /*yield*/, Promise.all([
                                dynamicConfigPromise,
                                fidPromise
                            ])];
                    case 1:
                        _a = _c.sent(), dynamicConfig = _a[0], fid = _a[1];
                        // Detect if user has already put the gtag <script> tag on this page.
                        if (!findGtagScriptOnPage()) {
                            insertScriptTag(dataLayerName, dynamicConfig.measurementId);
                        }
                        // This command initializes gtag.js and only needs to be called once for the entire web app,
                        // but since it is idempotent, we can call it multiple times.
                        // We keep it together with other initialization logic for better code structure.
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        gtagCore('js', new Date());
                        configProperties = (_b = {},
                            // guard against developers accidentally setting properties with prefix `firebase_`
                            _b[ORIGIN_KEY] = 'firebase',
                            _b.update = true,
                            _b);
                        if (fid != null) {
                            configProperties[GA_FID_KEY] = fid;
                        }
                        // It should be the first config command called on this GA-ID
                        // Initialize this GA-ID and set FID on it using the gtag config API.
                        // Note: This will trigger a page_view event unless 'send_page_view' is set to false in
                        // `configProperties`.
                        gtagCore(GtagCommand.CONFIG, dynamicConfig.measurementId, configProperties);
                        return [2 /*return*/, dynamicConfig.measurementId];
                }
            });
        });
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Maps appId to full initialization promise. Wrapped gtag calls must wait on
     * all or some of these, depending on the call's `send_to` param and the status
     * of the dynamic config fetches (see below).
     */
    var initializationPromisesMap = {};
    /**
     * List of dynamic config fetch promises. In certain cases, wrapped gtag calls
     * wait on all these to be complete in order to determine if it can selectively
     * wait for only certain initialization (FID) promises or if it must wait for all.
     */
    var dynamicConfigPromisesList = [];
    /**
     * Maps fetched measurementIds to appId. Populated when the app's dynamic config
     * fetch completes. If already populated, gtag config calls can use this to
     * selectively wait for only this app's initialization promise (FID) instead of all
     * initialization promises.
     */
    var measurementIdToAppId = {};
    /**
     * Name for window global data layer array used by GA: defaults to 'dataLayer'.
     */
    var dataLayerName = 'dataLayer';
    /**
     * Name for window global gtag function used by GA: defaults to 'gtag'.
     */
    var gtagName = 'gtag';
    /**
     * Reproduction of standard gtag function or reference to existing
     * gtag function on window object.
     */
    var gtagCoreFunction;
    /**
     * Wrapper around gtag function that ensures FID is sent with all
     * relevant event and config calls.
     */
    var wrappedGtagFunction;
    /**
     * Flag to ensure page initialization steps (creation or wrapping of
     * dataLayer and gtag script) are only run once per page load.
     */
    var globalInitDone = false;
    /**
     * This must be run before calling firebase.analytics() or it won't
     * have any effect.
     * @param options Custom gtag and dataLayer names.
     */
    function settings(options) {
        if (globalInitDone) {
            throw ERROR_FACTORY.create("already-initialized" /* ALREADY_INITIALIZED */);
        }
        if (options.dataLayerName) {
            dataLayerName = options.dataLayerName;
        }
        if (options.gtagName) {
            gtagName = options.gtagName;
        }
    }
    /**
     * Returns true if no environment mismatch is found.
     * If environment mismatches are found, throws an INVALID_ANALYTICS_CONTEXT
     * error that also lists details for each mismatch found.
     */
    function warnOnBrowserContextMismatch() {
        var mismatchedEnvMessages = [];
        if (isBrowserExtension()) {
            mismatchedEnvMessages.push('This is a browser extension environment.');
        }
        if (!areCookiesEnabled()) {
            mismatchedEnvMessages.push('Cookies are not available.');
        }
        if (mismatchedEnvMessages.length > 0) {
            var details = mismatchedEnvMessages
                .map(function (message, index) { return "(" + (index + 1) + ") " + message; })
                .join(' ');
            var err = ERROR_FACTORY.create("invalid-analytics-context" /* INVALID_ANALYTICS_CONTEXT */, {
                errorInfo: details
            });
            logger.warn(err.message);
        }
    }
    function factory$1(app, installations) {
        warnOnBrowserContextMismatch();
        var appId = app.options.appId;
        if (!appId) {
            throw ERROR_FACTORY.create("no-app-id" /* NO_APP_ID */);
        }
        if (!app.options.apiKey) {
            if (app.options.measurementId) {
                logger.warn("The \"apiKey\" field is empty in the local Firebase config. This is needed to fetch the latest" +
                    (" measurement ID for this Firebase app. Falling back to the measurement ID " + app.options.measurementId) +
                    " provided in the \"measurementId\" field in the local Firebase config.");
            }
            else {
                throw ERROR_FACTORY.create("no-api-key" /* NO_API_KEY */);
            }
        }
        if (initializationPromisesMap[appId] != null) {
            throw ERROR_FACTORY.create("already-exists" /* ALREADY_EXISTS */, {
                id: appId
            });
        }
        if (!globalInitDone) {
            // Steps here should only be done once per page: creation or wrapping
            // of dataLayer and global gtag function.
            getOrCreateDataLayer(dataLayerName);
            var _a = wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagName), wrappedGtag = _a.wrappedGtag, gtagCore = _a.gtagCore;
            wrappedGtagFunction = wrappedGtag;
            gtagCoreFunction = gtagCore;
            globalInitDone = true;
        }
        // Async but non-blocking.
        // This map reflects the completion state of all promises for each appId.
        initializationPromisesMap[appId] = initializeIds(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCoreFunction, dataLayerName);
        var analyticsInstance = {
            app: app,
            // Public methods return void for API simplicity and to better match gtag,
            // while internal implementations return promises.
            logEvent: function (eventName, eventParams, options) {
                logEvent(wrappedGtagFunction, initializationPromisesMap[appId], eventName, eventParams, options).catch(function (e) { return logger.error(e); });
            },
            setCurrentScreen: function (screenName, options) {
                setCurrentScreen(wrappedGtagFunction, initializationPromisesMap[appId], screenName, options).catch(function (e) { return logger.error(e); });
            },
            setUserId: function (id, options) {
                setUserId(wrappedGtagFunction, initializationPromisesMap[appId], id, options).catch(function (e) { return logger.error(e); });
            },
            setUserProperties: function (properties, options) {
                setUserProperties(wrappedGtagFunction, initializationPromisesMap[appId], properties, options).catch(function (e) { return logger.error(e); });
            },
            setAnalyticsCollectionEnabled: function (enabled) {
                setAnalyticsCollectionEnabled(initializationPromisesMap[appId], enabled).catch(function (e) { return logger.error(e); });
            },
            INTERNAL: {
                delete: function () {
                    delete initializationPromisesMap[appId];
                    return Promise.resolve();
                }
            }
        };
        return analyticsInstance;
    }

    var name$1 = "@firebase/analytics";
    var version$1 = "0.6.6";

    /**
     * Type constant for Firebase Analytics.
     */
    var ANALYTICS_TYPE = 'analytics';
    function registerAnalytics(instance) {
        instance.INTERNAL.registerComponent(new Component(ANALYTICS_TYPE, function (container) {
            // getImmediate for FirebaseApp will always succeed
            var app = container.getProvider('app').getImmediate();
            var installations = container
                .getProvider('installations')
                .getImmediate();
            return factory$1(app, installations);
        }, "PUBLIC" /* PUBLIC */).setServiceProps({
            settings: settings,
            EventName: EventName,
            isSupported: isSupported
        }));
        instance.INTERNAL.registerComponent(new Component('analytics-internal', internalFactory, "PRIVATE" /* PRIVATE */));
        instance.registerVersion(name$1, version$1);
        function internalFactory(container) {
            try {
                var analytics = container.getProvider(ANALYTICS_TYPE).getImmediate();
                return {
                    logEvent: analytics.logEvent
                };
            }
            catch (e) {
                throw ERROR_FACTORY.create("interop-component-reg-failed" /* INTEROP_COMPONENT_REG_FAILED */, {
                    reason: e
                });
            }
        }
    }
    registerAnalytics(firebase$1);
    /**
     * this is a public static method provided to users that wraps four different checks:
     *
     * 1. check if it's not a browser extension environment.
     * 1. check if cookie is enabled in current browser.
     * 3. check if IndexedDB is supported by the browser environment.
     * 4. check if the current browser context is valid for using IndexedDB.
     *
     */
    function isSupported() {
        return __awaiter(this, void 0, void 0, function () {
            var isDBOpenable;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (isBrowserExtension()) {
                            return [2 /*return*/, false];
                        }
                        if (!areCookiesEnabled()) {
                            return [2 /*return*/, false];
                        }
                        if (!isIndexedDBAvailable()) {
                            return [2 /*return*/, false];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, validateIndexedDBOpenable()];
                    case 2:
                        isDBOpenable = _a.sent();
                        return [2 /*return*/, isDBOpenable];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @fileoverview Constants used in the Firebase Storage library.
     */
    /**
     * Domain name for firebase storage.
     */
    var DEFAULT_HOST = 'firebasestorage.googleapis.com';
    /**
     * The key in Firebase config json for the storage bucket.
     */
    var CONFIG_STORAGE_BUCKET_KEY = 'storageBucket';
    /**
     * 2 minutes
     *
     * The timeout for all operations except upload.
     */
    var DEFAULT_MAX_OPERATION_RETRY_TIME = 2 * 60 * 1000;
    /**
     * 10 minutes
     *
     * The timeout for upload.
     */
    var DEFAULT_MAX_UPLOAD_RETRY_TIME = 10 * 60 * 1000;

    /**
     * An error returned by the Firebase Storage SDK.
     * @public
     */
    var FirebaseStorageError = /** @class */ (function (_super) {
        __extends(FirebaseStorageError, _super);
        /**
         * @param code - A StorageErrorCode string to be prefixed with 'storage/' and
         *  added to the end of the message.
         * @param message  - Error message.
         */
        function FirebaseStorageError(code, message) {
            var _this = _super.call(this, prependCode(code), "Firebase Storage: " + message + " (" + prependCode(code) + ")") || this;
            /**
             * Stores custom error data unque to FirebaseStorageError.
             */
            _this.customData = { serverResponse: null };
            // Without this, `instanceof FirebaseStorageError`, in tests for example,
            // returns false.
            Object.setPrototypeOf(_this, FirebaseStorageError.prototype);
            return _this;
        }
        /**
         * Compares a StorageErrorCode against this error's code, filtering out the prefix.
         */
        FirebaseStorageError.prototype._codeEquals = function (code) {
            return prependCode(code) === this.code;
        };
        Object.defineProperty(FirebaseStorageError.prototype, "message", {
            /**
             * Error message including serverResponse if available.
             */
            get: function () {
                if (this.customData.serverResponse) {
                    return this.message + "\n" + this.customData.serverResponse;
                }
                else {
                    return this.message;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FirebaseStorageError.prototype, "serverResponse", {
            /**
             * Optional response message that was added by the server.
             */
            get: function () {
                return this.customData.serverResponse;
            },
            set: function (serverResponse) {
                this.customData.serverResponse = serverResponse;
            },
            enumerable: false,
            configurable: true
        });
        return FirebaseStorageError;
    }(FirebaseError));
    function prependCode(code) {
        return 'storage/' + code;
    }
    function unknown() {
        var message = 'An unknown error occurred, please check the error payload for ' +
            'server response.';
        return new FirebaseStorageError("unknown" /* UNKNOWN */, message);
    }
    function objectNotFound(path) {
        return new FirebaseStorageError("object-not-found" /* OBJECT_NOT_FOUND */, "Object '" + path + "' does not exist.");
    }
    function quotaExceeded(bucket) {
        return new FirebaseStorageError("quota-exceeded" /* QUOTA_EXCEEDED */, "Quota for bucket '" +
            bucket +
            "' exceeded, please view quota on " +
            'https://firebase.google.com/pricing/.');
    }
    function unauthenticated() {
        var message = 'User is not authenticated, please authenticate using Firebase ' +
            'Authentication and try again.';
        return new FirebaseStorageError("unauthenticated" /* UNAUTHENTICATED */, message);
    }
    function unauthorized(path) {
        return new FirebaseStorageError("unauthorized" /* UNAUTHORIZED */, "User does not have permission to access '" + path + "'.");
    }
    function retryLimitExceeded() {
        return new FirebaseStorageError("retry-limit-exceeded" /* RETRY_LIMIT_EXCEEDED */, 'Max retry time for operation exceeded, please try again.');
    }
    function canceled() {
        return new FirebaseStorageError("canceled" /* CANCELED */, 'User canceled the upload/download.');
    }
    function invalidUrl(url) {
        return new FirebaseStorageError("invalid-url" /* INVALID_URL */, "Invalid URL '" + url + "'.");
    }
    function invalidDefaultBucket(bucket) {
        return new FirebaseStorageError("invalid-default-bucket" /* INVALID_DEFAULT_BUCKET */, "Invalid default bucket '" + bucket + "'.");
    }
    function noDefaultBucket() {
        return new FirebaseStorageError("no-default-bucket" /* NO_DEFAULT_BUCKET */, 'No default bucket ' +
            "found. Did you set the '" +
            CONFIG_STORAGE_BUCKET_KEY +
            "' property when initializing the app?");
    }
    function cannotSliceBlob() {
        return new FirebaseStorageError("cannot-slice-blob" /* CANNOT_SLICE_BLOB */, 'Cannot slice blob for upload. Please retry the upload.');
    }
    function serverFileWrongSize() {
        return new FirebaseStorageError("server-file-wrong-size" /* SERVER_FILE_WRONG_SIZE */, 'Server recorded incorrect upload file size, please retry the upload.');
    }
    function noDownloadURL() {
        return new FirebaseStorageError("no-download-url" /* NO_DOWNLOAD_URL */, 'The given file does not have any download URLs.');
    }
    function invalidArgument(message) {
        return new FirebaseStorageError("invalid-argument" /* INVALID_ARGUMENT */, message);
    }
    function appDeleted() {
        return new FirebaseStorageError("app-deleted" /* APP_DELETED */, 'The Firebase app was deleted.');
    }
    /**
     * @param name - The name of the operation that was invalid.
     */
    function invalidRootOperation(name) {
        return new FirebaseStorageError("invalid-root-operation" /* INVALID_ROOT_OPERATION */, "The operation '" +
            name +
            "' cannot be performed on a root reference, create a non-root " +
            "reference using child, such as .child('file.png').");
    }
    /**
     * @param format - The format that was not valid.
     * @param message - A message describing the format violation.
     */
    function invalidFormat(format, message) {
        return new FirebaseStorageError("invalid-format" /* INVALID_FORMAT */, "String does not match format '" + format + "': " + message);
    }
    /**
     * @param message - A message describing the internal error.
     */
    function internalError(message) {
        throw new FirebaseStorageError("internal-error" /* INTERNAL_ERROR */, 'Internal error: ' + message);
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * An enumeration of the possible string formats for upload.
     * @public
     */
    var StringFormat = {
        /**
         * Indicates the string should be interpreted "raw", that is, as normal text.
         * The string will be interpreted as UTF-16, then uploaded as a UTF-8 byte
         * sequence.
         * Example: The string 'Hello! \\ud83d\\ude0a' becomes the byte sequence
         * 48 65 6c 6c 6f 21 20 f0 9f 98 8a
         */
        RAW: 'raw',
        /**
         * Indicates the string should be interpreted as base64-encoded data.
         * Padding characters (trailing '='s) are optional.
         * Example: The string 'rWmO++E6t7/rlw==' becomes the byte sequence
         * ad 69 8e fb e1 3a b7 bf eb 97
         */
        BASE64: 'base64',
        /**
         * Indicates the string should be interpreted as base64url-encoded data.
         * Padding characters (trailing '='s) are optional.
         * Example: The string 'rWmO--E6t7_rlw==' becomes the byte sequence
         * ad 69 8e fb e1 3a b7 bf eb 97
         */
        BASE64URL: 'base64url',
        /**
         * Indicates the string is a data URL, such as one obtained from
         * canvas.toDataURL().
         * Example: the string 'data:application/octet-stream;base64,aaaa'
         * becomes the byte sequence
         * 69 a6 9a
         * (the content-type "application/octet-stream" is also applied, but can
         * be overridden in the metadata object).
         */
        DATA_URL: 'data_url'
    };
    var StringData = /** @class */ (function () {
        function StringData(data, contentType) {
            this.data = data;
            this.contentType = contentType || null;
        }
        return StringData;
    }());
    function dataFromString(format, stringData) {
        switch (format) {
            case StringFormat.RAW:
                return new StringData(utf8Bytes_(stringData));
            case StringFormat.BASE64:
            case StringFormat.BASE64URL:
                return new StringData(base64Bytes_(format, stringData));
            case StringFormat.DATA_URL:
                return new StringData(dataURLBytes_(stringData), dataURLContentType_(stringData));
            // do nothing
        }
        // assert(false);
        throw unknown();
    }
    function utf8Bytes_(value) {
        var b = [];
        for (var i = 0; i < value.length; i++) {
            var c = value.charCodeAt(i);
            if (c <= 127) {
                b.push(c);
            }
            else {
                if (c <= 2047) {
                    b.push(192 | (c >> 6), 128 | (c & 63));
                }
                else {
                    if ((c & 64512) === 55296) {
                        // The start of a surrogate pair.
                        var valid = i < value.length - 1 && (value.charCodeAt(i + 1) & 64512) === 56320;
                        if (!valid) {
                            // The second surrogate wasn't there.
                            b.push(239, 191, 189);
                        }
                        else {
                            var hi = c;
                            var lo = value.charCodeAt(++i);
                            c = 65536 | ((hi & 1023) << 10) | (lo & 1023);
                            b.push(240 | (c >> 18), 128 | ((c >> 12) & 63), 128 | ((c >> 6) & 63), 128 | (c & 63));
                        }
                    }
                    else {
                        if ((c & 64512) === 56320) {
                            // Invalid low surrogate.
                            b.push(239, 191, 189);
                        }
                        else {
                            b.push(224 | (c >> 12), 128 | ((c >> 6) & 63), 128 | (c & 63));
                        }
                    }
                }
            }
        }
        return new Uint8Array(b);
    }
    function percentEncodedBytes_(value) {
        var decoded;
        try {
            decoded = decodeURIComponent(value);
        }
        catch (e) {
            throw invalidFormat(StringFormat.DATA_URL, 'Malformed data URL.');
        }
        return utf8Bytes_(decoded);
    }
    function base64Bytes_(format, value) {
        switch (format) {
            case StringFormat.BASE64: {
                var hasMinus = value.indexOf('-') !== -1;
                var hasUnder = value.indexOf('_') !== -1;
                if (hasMinus || hasUnder) {
                    var invalidChar = hasMinus ? '-' : '_';
                    throw invalidFormat(format, "Invalid character '" +
                        invalidChar +
                        "' found: is it base64url encoded?");
                }
                break;
            }
            case StringFormat.BASE64URL: {
                var hasPlus = value.indexOf('+') !== -1;
                var hasSlash = value.indexOf('/') !== -1;
                if (hasPlus || hasSlash) {
                    var invalidChar = hasPlus ? '+' : '/';
                    throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
                }
                value = value.replace(/-/g, '+').replace(/_/g, '/');
                break;
            }
            // do nothing
        }
        var bytes;
        try {
            bytes = atob(value);
        }
        catch (e) {
            throw invalidFormat(format, 'Invalid character found');
        }
        var array = new Uint8Array(bytes.length);
        for (var i = 0; i < bytes.length; i++) {
            array[i] = bytes.charCodeAt(i);
        }
        return array;
    }
    var DataURLParts = /** @class */ (function () {
        function DataURLParts(dataURL) {
            this.base64 = false;
            this.contentType = null;
            var matches = dataURL.match(/^data:([^,]+)?,/);
            if (matches === null) {
                throw invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
            }
            var middle = matches[1] || null;
            if (middle != null) {
                this.base64 = endsWith(middle, ';base64');
                this.contentType = this.base64
                    ? middle.substring(0, middle.length - ';base64'.length)
                    : middle;
            }
            this.rest = dataURL.substring(dataURL.indexOf(',') + 1);
        }
        return DataURLParts;
    }());
    function dataURLBytes_(dataUrl) {
        var parts = new DataURLParts(dataUrl);
        if (parts.base64) {
            return base64Bytes_(StringFormat.BASE64, parts.rest);
        }
        else {
            return percentEncodedBytes_(parts.rest);
        }
    }
    function dataURLContentType_(dataUrl) {
        var parts = new DataURLParts(dataUrl);
        return parts.contentType;
    }
    function endsWith(s, end) {
        var longEnough = s.length >= end.length;
        if (!longEnough) {
            return false;
        }
        return s.substring(s.length - end.length) === end;
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * An event that is triggered on a task.
     */
    var TaskEvent = {
        /**
         * For this event,
         * <ul>
         *   <li>The `next` function is triggered on progress updates and when the
         *       task is paused/resumed with an `UploadTaskSnapshot` as the first
         *       argument.</li>
         *   <li>The `error` function is triggered if the upload is canceled or fails
         *       for another reason.</li>
         *   <li>The `complete` function is triggered if the upload completes
         *       successfully.</li>
         * </ul>
         */
        STATE_CHANGED: 'state_changed'
    };
    /**
     * Represents the current state of a running upload.
     */
    var TaskState = {
        /** The task is currently transferring data. */
        RUNNING: 'running',
        /** The task was paused by the user. */
        PAUSED: 'paused',
        /** The task completed successfully. */
        SUCCESS: 'success',
        /** The task was canceled. */
        CANCELED: 'canceled',
        /** The task failed with an error. */
        ERROR: 'error'
    };
    function taskStateFromInternalTaskState(state) {
        switch (state) {
            case "running" /* RUNNING */:
            case "pausing" /* PAUSING */:
            case "canceling" /* CANCELING */:
                return TaskState.RUNNING;
            case "paused" /* PAUSED */:
                return TaskState.PAUSED;
            case "success" /* SUCCESS */:
                return TaskState.SUCCESS;
            case "canceled" /* CANCELED */:
                return TaskState.CANCELED;
            case "error" /* ERROR */:
                return TaskState.ERROR;
            default:
                // TODO(andysoto): assert(false);
                return TaskState.ERROR;
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Error codes for requests made by the the XhrIo wrapper.
     */
    var ErrorCode;
    (function (ErrorCode) {
        ErrorCode[ErrorCode["NO_ERROR"] = 0] = "NO_ERROR";
        ErrorCode[ErrorCode["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
        ErrorCode[ErrorCode["ABORT"] = 2] = "ABORT";
    })(ErrorCode || (ErrorCode = {}));

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * We use this instead of goog.net.XhrIo because goog.net.XhrIo is hyuuuuge and
     * doesn't work in React Native on Android.
     */
    var NetworkXhrIo = /** @class */ (function () {
        function NetworkXhrIo() {
            var _this = this;
            this.sent_ = false;
            this.xhr_ = new XMLHttpRequest();
            this.errorCode_ = ErrorCode.NO_ERROR;
            this.sendPromise_ = new Promise(function (resolve) {
                _this.xhr_.addEventListener('abort', function () {
                    _this.errorCode_ = ErrorCode.ABORT;
                    resolve(_this);
                });
                _this.xhr_.addEventListener('error', function () {
                    _this.errorCode_ = ErrorCode.NETWORK_ERROR;
                    resolve(_this);
                });
                _this.xhr_.addEventListener('load', function () {
                    resolve(_this);
                });
            });
        }
        /**
         * @override
         */
        NetworkXhrIo.prototype.send = function (url, method, body, headers) {
            if (this.sent_) {
                throw internalError('cannot .send() more than once');
            }
            this.sent_ = true;
            this.xhr_.open(method, url, true);
            if (headers !== undefined) {
                for (var key in headers) {
                    if (headers.hasOwnProperty(key)) {
                        this.xhr_.setRequestHeader(key, headers[key].toString());
                    }
                }
            }
            if (body !== undefined) {
                this.xhr_.send(body);
            }
            else {
                this.xhr_.send();
            }
            return this.sendPromise_;
        };
        /**
         * @override
         */
        NetworkXhrIo.prototype.getErrorCode = function () {
            if (!this.sent_) {
                throw internalError('cannot .getErrorCode() before sending');
            }
            return this.errorCode_;
        };
        /**
         * @override
         */
        NetworkXhrIo.prototype.getStatus = function () {
            if (!this.sent_) {
                throw internalError('cannot .getStatus() before sending');
            }
            try {
                return this.xhr_.status;
            }
            catch (e) {
                return -1;
            }
        };
        /**
         * @override
         */
        NetworkXhrIo.prototype.getResponseText = function () {
            if (!this.sent_) {
                throw internalError('cannot .getResponseText() before sending');
            }
            return this.xhr_.responseText;
        };
        /**
         * Aborts the request.
         * @override
         */
        NetworkXhrIo.prototype.abort = function () {
            this.xhr_.abort();
        };
        /**
         * @override
         */
        NetworkXhrIo.prototype.getResponseHeader = function (header) {
            return this.xhr_.getResponseHeader(header);
        };
        /**
         * @override
         */
        NetworkXhrIo.prototype.addUploadProgressListener = function (listener) {
            if (this.xhr_.upload != null) {
                this.xhr_.upload.addEventListener('progress', listener);
            }
        };
        /**
         * @override
         */
        NetworkXhrIo.prototype.removeUploadProgressListener = function (listener) {
            if (this.xhr_.upload != null) {
                this.xhr_.upload.removeEventListener('progress', listener);
            }
        };
        return NetworkXhrIo;
    }());

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Factory-like class for creating XhrIo instances.
     */
    var XhrIoPool = /** @class */ (function () {
        function XhrIoPool() {
        }
        XhrIoPool.prototype.createXhrIo = function () {
            return new NetworkXhrIo();
        };
        return XhrIoPool;
    }());

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Firebase Storage location data.
     *
     * @internal
     */
    var Location = /** @class */ (function () {
        function Location(bucket, path) {
            this.bucket = bucket;
            this.path_ = path;
        }
        Object.defineProperty(Location.prototype, "path", {
            get: function () {
                return this.path_;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Location.prototype, "isRoot", {
            get: function () {
                return this.path.length === 0;
            },
            enumerable: false,
            configurable: true
        });
        Location.prototype.fullServerUrl = function () {
            var encode = encodeURIComponent;
            return '/b/' + encode(this.bucket) + '/o/' + encode(this.path);
        };
        Location.prototype.bucketOnlyServerUrl = function () {
            var encode = encodeURIComponent;
            return '/b/' + encode(this.bucket) + '/o';
        };
        Location.makeFromBucketSpec = function (bucketString) {
            var bucketLocation;
            try {
                bucketLocation = Location.makeFromUrl(bucketString);
            }
            catch (e) {
                // Not valid URL, use as-is. This lets you put bare bucket names in
                // config.
                return new Location(bucketString, '');
            }
            if (bucketLocation.path === '') {
                return bucketLocation;
            }
            else {
                throw invalidDefaultBucket(bucketString);
            }
        };
        Location.makeFromUrl = function (url) {
            var location = null;
            var bucketDomain = '([A-Za-z0-9.\\-_]+)';
            function gsModify(loc) {
                if (loc.path.charAt(loc.path.length - 1) === '/') {
                    loc.path_ = loc.path_.slice(0, -1);
                }
            }
            var gsPath = '(/(.*))?$';
            var gsRegex = new RegExp('^gs://' + bucketDomain + gsPath, 'i');
            var gsIndices = { bucket: 1, path: 3 };
            function httpModify(loc) {
                loc.path_ = decodeURIComponent(loc.path);
            }
            var version = 'v[A-Za-z0-9_]+';
            var firebaseStorageHost = DEFAULT_HOST.replace(/[.]/g, '\\.');
            var firebaseStoragePath = '(/([^?#]*).*)?$';
            var firebaseStorageRegExp = new RegExp("^https?://" + firebaseStorageHost + "/" + version + "/b/" + bucketDomain + "/o" + firebaseStoragePath, 'i');
            var firebaseStorageIndices = { bucket: 1, path: 3 };
            var cloudStorageHost = '(?:storage.googleapis.com|storage.cloud.google.com)';
            var cloudStoragePath = '([^?#]*)';
            var cloudStorageRegExp = new RegExp("^https?://" + cloudStorageHost + "/" + bucketDomain + "/" + cloudStoragePath, 'i');
            var cloudStorageIndices = { bucket: 1, path: 2 };
            var groups = [
                { regex: gsRegex, indices: gsIndices, postModify: gsModify },
                {
                    regex: firebaseStorageRegExp,
                    indices: firebaseStorageIndices,
                    postModify: httpModify
                },
                {
                    regex: cloudStorageRegExp,
                    indices: cloudStorageIndices,
                    postModify: httpModify
                }
            ];
            for (var i = 0; i < groups.length; i++) {
                var group = groups[i];
                var captures = group.regex.exec(url);
                if (captures) {
                    var bucketValue = captures[group.indices.bucket];
                    var pathValue = captures[group.indices.path];
                    if (!pathValue) {
                        pathValue = '';
                    }
                    location = new Location(bucketValue, pathValue);
                    group.postModify(location);
                    break;
                }
            }
            if (location == null) {
                throw invalidUrl(url);
            }
            return location;
        };
        return Location;
    }());

    /**
     * A request whose promise always fails.
     */
    var FailRequest = /** @class */ (function () {
        function FailRequest(error) {
            this.promise_ = Promise.reject(error);
        }
        /** @inheritDoc */
        FailRequest.prototype.getPromise = function () {
            return this.promise_;
        };
        /** @inheritDoc */
        FailRequest.prototype.cancel = function (_appDelete) {
        };
        return FailRequest;
    }());

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @param f May be invoked
     *     before the function returns.
     * @param callback Get all the arguments passed to the function
     *     passed to f, including the initial boolean.
     */
    function start(f, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callback, timeout) {
        // TODO(andysoto): make this code cleaner (probably refactor into an actual
        // type instead of a bunch of functions with state shared in the closure)
        var waitSeconds = 1;
        // Would type this as "number" but that doesn't work for Node so ¯\_(ツ)_/¯
        // TODO: find a way to exclude Node type definition for storage because storage only works in browser
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var timeoutId = null;
        var hitTimeout = false;
        var cancelState = 0;
        function canceled() {
            return cancelState === 2;
        }
        var triggeredCallback = false;
        function triggerCallback() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!triggeredCallback) {
                triggeredCallback = true;
                callback.apply(null, args);
            }
        }
        function callWithDelay(millis) {
            timeoutId = setTimeout(function () {
                timeoutId = null;
                f(handler, canceled());
            }, millis);
        }
        function handler(success) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (triggeredCallback) {
                return;
            }
            if (success) {
                triggerCallback.call.apply(triggerCallback, __spreadArray([null, success], args));
                return;
            }
            var mustStop = canceled() || hitTimeout;
            if (mustStop) {
                triggerCallback.call.apply(triggerCallback, __spreadArray([null, success], args));
                return;
            }
            if (waitSeconds < 64) {
                /* TODO(andysoto): don't back off so quickly if we know we're offline. */
                waitSeconds *= 2;
            }
            var waitMillis;
            if (cancelState === 1) {
                cancelState = 2;
                waitMillis = 0;
            }
            else {
                waitMillis = (waitSeconds + Math.random()) * 1000;
            }
            callWithDelay(waitMillis);
        }
        var stopped = false;
        function stop(wasTimeout) {
            if (stopped) {
                return;
            }
            stopped = true;
            if (triggeredCallback) {
                return;
            }
            if (timeoutId !== null) {
                if (!wasTimeout) {
                    cancelState = 2;
                }
                clearTimeout(timeoutId);
                callWithDelay(0);
            }
            else {
                if (!wasTimeout) {
                    cancelState = 1;
                }
            }
        }
        callWithDelay(0);
        setTimeout(function () {
            hitTimeout = true;
            stop(true);
        }, timeout);
        return stop;
    }
    /**
     * Stops the retry loop from repeating.
     * If the function is currently "in between" retries, it is invoked immediately
     * with the second parameter as "true". Otherwise, it will be invoked once more
     * after the current invocation finishes iff the current invocation would have
     * triggered another retry.
     */
    function stop(id) {
        id(false);
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function isJustDef(p) {
        return p !== void 0;
    }
    // eslint-disable-next-line @typescript-eslint/ban-types
    function isFunction(p) {
        return typeof p === 'function';
    }
    function isNonArrayObject(p) {
        return typeof p === 'object' && !Array.isArray(p);
    }
    function isString(p) {
        return typeof p === 'string' || p instanceof String;
    }
    function isNativeBlob(p) {
        return isNativeBlobDefined() && p instanceof Blob;
    }
    function isNativeBlobDefined() {
        return typeof Blob !== 'undefined';
    }
    function validateNumber(argument, minValue, maxValue, value) {
        if (value < minValue) {
            throw invalidArgument("Invalid value for '" + argument + "'. Expected " + minValue + " or greater.");
        }
        if (value > maxValue) {
            throw invalidArgument("Invalid value for '" + argument + "'. Expected " + maxValue + " or less.");
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function makeUrl(urlPart) {
        return "https://" + DEFAULT_HOST + "/v0" + urlPart;
    }
    function makeQueryString(params) {
        var encode = encodeURIComponent;
        var queryPart = '?';
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var nextPart = encode(key) + '=' + encode(params[key]);
                queryPart = queryPart + nextPart + '&';
            }
        }
        // Chop off the extra '&' or '?' on the end
        queryPart = queryPart.slice(0, -1);
        return queryPart;
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var NetworkRequest = /** @class */ (function () {
        function NetworkRequest(url, method, headers, body, successCodes, additionalRetryCodes, callback, errorCallback, timeout, progressCallback, pool) {
            var _this = this;
            this.pendingXhr_ = null;
            this.backoffId_ = null;
            this.canceled_ = false;
            this.appDelete_ = false;
            this.url_ = url;
            this.method_ = method;
            this.headers_ = headers;
            this.body_ = body;
            this.successCodes_ = successCodes.slice();
            this.additionalRetryCodes_ = additionalRetryCodes.slice();
            this.callback_ = callback;
            this.errorCallback_ = errorCallback;
            this.progressCallback_ = progressCallback;
            this.timeout_ = timeout;
            this.pool_ = pool;
            this.promise_ = new Promise(function (resolve, reject) {
                _this.resolve_ = resolve;
                _this.reject_ = reject;
                _this.start_();
            });
        }
        /**
         * Actually starts the retry loop.
         */
        NetworkRequest.prototype.start_ = function () {
            var self = this;
            function doTheRequest(backoffCallback, canceled) {
                if (canceled) {
                    backoffCallback(false, new RequestEndStatus(false, null, true));
                    return;
                }
                var xhr = self.pool_.createXhrIo();
                self.pendingXhr_ = xhr;
                function progressListener(progressEvent) {
                    var loaded = progressEvent.loaded;
                    var total = progressEvent.lengthComputable ? progressEvent.total : -1;
                    if (self.progressCallback_ !== null) {
                        self.progressCallback_(loaded, total);
                    }
                }
                if (self.progressCallback_ !== null) {
                    xhr.addUploadProgressListener(progressListener);
                }
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                xhr
                    .send(self.url_, self.method_, self.body_, self.headers_)
                    .then(function (xhr) {
                    if (self.progressCallback_ !== null) {
                        xhr.removeUploadProgressListener(progressListener);
                    }
                    self.pendingXhr_ = null;
                    xhr = xhr;
                    var hitServer = xhr.getErrorCode() === ErrorCode.NO_ERROR;
                    var status = xhr.getStatus();
                    if (!hitServer || self.isRetryStatusCode_(status)) {
                        var wasCanceled = xhr.getErrorCode() === ErrorCode.ABORT;
                        backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
                        return;
                    }
                    var successCode = self.successCodes_.indexOf(status) !== -1;
                    backoffCallback(true, new RequestEndStatus(successCode, xhr));
                });
            }
            /**
             * @param requestWentThrough - True if the request eventually went
             *     through, false if it hit the retry limit or was canceled.
             */
            function backoffDone(requestWentThrough, status) {
                var resolve = self.resolve_;
                var reject = self.reject_;
                var xhr = status.xhr;
                if (status.wasSuccessCode) {
                    try {
                        var result = self.callback_(xhr, xhr.getResponseText());
                        if (isJustDef(result)) {
                            resolve(result);
                        }
                        else {
                            resolve();
                        }
                    }
                    catch (e) {
                        reject(e);
                    }
                }
                else {
                    if (xhr !== null) {
                        var err = unknown();
                        err.serverResponse = xhr.getResponseText();
                        if (self.errorCallback_) {
                            reject(self.errorCallback_(xhr, err));
                        }
                        else {
                            reject(err);
                        }
                    }
                    else {
                        if (status.canceled) {
                            var err = self.appDelete_ ? appDeleted() : canceled();
                            reject(err);
                        }
                        else {
                            var err = retryLimitExceeded();
                            reject(err);
                        }
                    }
                }
            }
            if (this.canceled_) {
                backoffDone(false, new RequestEndStatus(false, null, true));
            }
            else {
                this.backoffId_ = start(doTheRequest, backoffDone, this.timeout_);
            }
        };
        /** @inheritDoc */
        NetworkRequest.prototype.getPromise = function () {
            return this.promise_;
        };
        /** @inheritDoc */
        NetworkRequest.prototype.cancel = function (appDelete) {
            this.canceled_ = true;
            this.appDelete_ = appDelete || false;
            if (this.backoffId_ !== null) {
                stop(this.backoffId_);
            }
            if (this.pendingXhr_ !== null) {
                this.pendingXhr_.abort();
            }
        };
        NetworkRequest.prototype.isRetryStatusCode_ = function (status) {
            // The codes for which to retry came from this page:
            // https://cloud.google.com/storage/docs/exponential-backoff
            var isFiveHundredCode = status >= 500 && status < 600;
            var extraRetryCodes = [
                // Request Timeout: web server didn't receive full request in time.
                408,
                // Too Many Requests: you're getting rate-limited, basically.
                429
            ];
            var isExtraRetryCode = extraRetryCodes.indexOf(status) !== -1;
            var isRequestSpecificRetryCode = this.additionalRetryCodes_.indexOf(status) !== -1;
            return isFiveHundredCode || isExtraRetryCode || isRequestSpecificRetryCode;
        };
        return NetworkRequest;
    }());
    /**
     * A collection of information about the result of a network request.
     * @param opt_canceled - Defaults to false.
     */
    var RequestEndStatus = /** @class */ (function () {
        function RequestEndStatus(wasSuccessCode, xhr, canceled) {
            this.wasSuccessCode = wasSuccessCode;
            this.xhr = xhr;
            this.canceled = !!canceled;
        }
        return RequestEndStatus;
    }());
    function addAuthHeader_(headers, authToken) {
        if (authToken !== null && authToken.length > 0) {
            headers['Authorization'] = 'Firebase ' + authToken;
        }
    }
    function addVersionHeader_(headers, firebaseVersion) {
        headers['X-Firebase-Storage-Version'] =
            'webjs/' + (firebaseVersion !== null && firebaseVersion !== void 0 ? firebaseVersion : 'AppManager');
    }
    function addGmpidHeader_(headers, appId) {
        if (appId) {
            headers['X-Firebase-GMPID'] = appId;
        }
    }
    function makeRequest(requestInfo, appId, authToken, pool, firebaseVersion) {
        var queryPart = makeQueryString(requestInfo.urlParams);
        var url = requestInfo.url + queryPart;
        var headers = Object.assign({}, requestInfo.headers);
        addGmpidHeader_(headers, appId);
        addAuthHeader_(headers, authToken);
        addVersionHeader_(headers, firebaseVersion);
        return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, pool);
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function getBlobBuilder() {
        if (typeof BlobBuilder !== 'undefined') {
            return BlobBuilder;
        }
        else if (typeof WebKitBlobBuilder !== 'undefined') {
            return WebKitBlobBuilder;
        }
        else {
            return undefined;
        }
    }
    /**
     * Concatenates one or more values together and converts them to a Blob.
     *
     * @param args The values that will make up the resulting blob.
     * @return The blob.
     */
    function getBlob() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var BlobBuilder = getBlobBuilder();
        if (BlobBuilder !== undefined) {
            var bb = new BlobBuilder();
            for (var i = 0; i < args.length; i++) {
                bb.append(args[i]);
            }
            return bb.getBlob();
        }
        else {
            if (isNativeBlobDefined()) {
                return new Blob(args);
            }
            else {
                throw new FirebaseStorageError("unsupported-environment" /* UNSUPPORTED_ENVIRONMENT */, "This browser doesn't seem to support creating Blobs");
            }
        }
    }
    /**
     * Slices the blob. The returned blob contains data from the start byte
     * (inclusive) till the end byte (exclusive). Negative indices cannot be used.
     *
     * @param blob The blob to be sliced.
     * @param start Index of the starting byte.
     * @param end Index of the ending byte.
     * @return The blob slice or null if not supported.
     */
    function sliceBlob(blob, start, end) {
        if (blob.webkitSlice) {
            return blob.webkitSlice(start, end);
        }
        else if (blob.mozSlice) {
            return blob.mozSlice(start, end);
        }
        else if (blob.slice) {
            return blob.slice(start, end);
        }
        return null;
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @param opt_elideCopy - If true, doesn't copy mutable input data
     *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
     *     modified after this blob's construction.
     *
     * @internal
     */
    var FbsBlob = /** @class */ (function () {
        function FbsBlob(data, elideCopy) {
            var size = 0;
            var blobType = '';
            if (isNativeBlob(data)) {
                this.data_ = data;
                size = data.size;
                blobType = data.type;
            }
            else if (data instanceof ArrayBuffer) {
                if (elideCopy) {
                    this.data_ = new Uint8Array(data);
                }
                else {
                    this.data_ = new Uint8Array(data.byteLength);
                    this.data_.set(new Uint8Array(data));
                }
                size = this.data_.length;
            }
            else if (data instanceof Uint8Array) {
                if (elideCopy) {
                    this.data_ = data;
                }
                else {
                    this.data_ = new Uint8Array(data.length);
                    this.data_.set(data);
                }
                size = data.length;
            }
            this.size_ = size;
            this.type_ = blobType;
        }
        FbsBlob.prototype.size = function () {
            return this.size_;
        };
        FbsBlob.prototype.type = function () {
            return this.type_;
        };
        FbsBlob.prototype.slice = function (startByte, endByte) {
            if (isNativeBlob(this.data_)) {
                var realBlob = this.data_;
                var sliced = sliceBlob(realBlob, startByte, endByte);
                if (sliced === null) {
                    return null;
                }
                return new FbsBlob(sliced);
            }
            else {
                var slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
                return new FbsBlob(slice, true);
            }
        };
        FbsBlob.getBlob = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (isNativeBlobDefined()) {
                var blobby = args.map(function (val) {
                    if (val instanceof FbsBlob) {
                        return val.data_;
                    }
                    else {
                        return val;
                    }
                });
                return new FbsBlob(getBlob.apply(null, blobby));
            }
            else {
                var uint8Arrays = args.map(function (val) {
                    if (isString(val)) {
                        return dataFromString(StringFormat.RAW, val).data;
                    }
                    else {
                        // Blobs don't exist, so this has to be a Uint8Array.
                        return val.data_;
                    }
                });
                var finalLength_1 = 0;
                uint8Arrays.forEach(function (array) {
                    finalLength_1 += array.byteLength;
                });
                var merged_1 = new Uint8Array(finalLength_1);
                var index_1 = 0;
                uint8Arrays.forEach(function (array) {
                    for (var i = 0; i < array.length; i++) {
                        merged_1[index_1++] = array[i];
                    }
                });
                return new FbsBlob(merged_1, true);
            }
        };
        FbsBlob.prototype.uploadData = function () {
            return this.data_;
        };
        return FbsBlob;
    }());

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Returns the Object resulting from parsing the given JSON, or null if the
     * given string does not represent a JSON object.
     */
    function jsonObjectOrNull(s) {
        var obj;
        try {
            obj = JSON.parse(s);
        }
        catch (e) {
            return null;
        }
        if (isNonArrayObject(obj)) {
            return obj;
        }
        else {
            return null;
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @fileoverview Contains helper methods for manipulating paths.
     */
    /**
     * @return Null if the path is already at the root.
     */
    function parent(path) {
        if (path.length === 0) {
            return null;
        }
        var index = path.lastIndexOf('/');
        if (index === -1) {
            return '';
        }
        var newPath = path.slice(0, index);
        return newPath;
    }
    function child(path, childPath) {
        var canonicalChildPath = childPath
            .split('/')
            .filter(function (component) { return component.length > 0; })
            .join('/');
        if (path.length === 0) {
            return canonicalChildPath;
        }
        else {
            return path + '/' + canonicalChildPath;
        }
    }
    /**
     * Returns the last component of a path.
     * '/foo/bar' -> 'bar'
     * '/foo/bar/baz/' -> 'baz/'
     * '/a' -> 'a'
     */
    function lastComponent(path) {
        var index = path.lastIndexOf('/', path.length - 2);
        if (index === -1) {
            return path;
        }
        else {
            return path.slice(index + 1);
        }
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function noXform_(metadata, value) {
        return value;
    }
    var Mapping = /** @class */ (function () {
        function Mapping(server, local, writable, xform) {
            this.server = server;
            this.local = local || server;
            this.writable = !!writable;
            this.xform = xform || noXform_;
        }
        return Mapping;
    }());
    var mappings_ = null;
    function xformPath(fullPath) {
        if (!isString(fullPath) || fullPath.length < 2) {
            return fullPath;
        }
        else {
            return lastComponent(fullPath);
        }
    }
    function getMappings() {
        if (mappings_) {
            return mappings_;
        }
        var mappings = [];
        mappings.push(new Mapping('bucket'));
        mappings.push(new Mapping('generation'));
        mappings.push(new Mapping('metageneration'));
        mappings.push(new Mapping('name', 'fullPath', true));
        function mappingsXformPath(_metadata, fullPath) {
            return xformPath(fullPath);
        }
        var nameMapping = new Mapping('name');
        nameMapping.xform = mappingsXformPath;
        mappings.push(nameMapping);
        /**
         * Coerces the second param to a number, if it is defined.
         */
        function xformSize(_metadata, size) {
            if (size !== undefined) {
                return Number(size);
            }
            else {
                return size;
            }
        }
        var sizeMapping = new Mapping('size');
        sizeMapping.xform = xformSize;
        mappings.push(sizeMapping);
        mappings.push(new Mapping('timeCreated'));
        mappings.push(new Mapping('updated'));
        mappings.push(new Mapping('md5Hash', null, true));
        mappings.push(new Mapping('cacheControl', null, true));
        mappings.push(new Mapping('contentDisposition', null, true));
        mappings.push(new Mapping('contentEncoding', null, true));
        mappings.push(new Mapping('contentLanguage', null, true));
        mappings.push(new Mapping('contentType', null, true));
        mappings.push(new Mapping('metadata', 'customMetadata', true));
        mappings_ = mappings;
        return mappings_;
    }
    function addRef(metadata, service) {
        function generateRef() {
            var bucket = metadata['bucket'];
            var path = metadata['fullPath'];
            var loc = new Location(bucket, path);
            return service._makeStorageReference(loc);
        }
        Object.defineProperty(metadata, 'ref', { get: generateRef });
    }
    function fromResource(service, resource, mappings) {
        var metadata = {};
        metadata['type'] = 'file';
        var len = mappings.length;
        for (var i = 0; i < len; i++) {
            var mapping = mappings[i];
            metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
        }
        addRef(metadata, service);
        return metadata;
    }
    function fromResourceString(service, resourceString, mappings) {
        var obj = jsonObjectOrNull(resourceString);
        if (obj === null) {
            return null;
        }
        var resource = obj;
        return fromResource(service, resource, mappings);
    }
    function downloadUrlFromResourceString(metadata, resourceString) {
        var obj = jsonObjectOrNull(resourceString);
        if (obj === null) {
            return null;
        }
        if (!isString(obj['downloadTokens'])) {
            // This can happen if objects are uploaded through GCS and retrieved
            // through list, so we don't want to throw an Error.
            return null;
        }
        var tokens = obj['downloadTokens'];
        if (tokens.length === 0) {
            return null;
        }
        var encode = encodeURIComponent;
        var tokensList = tokens.split(',');
        var urls = tokensList.map(function (token) {
            var bucket = metadata['bucket'];
            var path = metadata['fullPath'];
            var urlPart = '/b/' + encode(bucket) + '/o/' + encode(path);
            var base = makeUrl(urlPart);
            var queryString = makeQueryString({
                alt: 'media',
                token: token
            });
            return base + queryString;
        });
        return urls[0];
    }
    function toResourceString(metadata, mappings) {
        var resource = {};
        var len = mappings.length;
        for (var i = 0; i < len; i++) {
            var mapping = mappings[i];
            if (mapping.writable) {
                resource[mapping.server] = metadata[mapping.local];
            }
        }
        return JSON.stringify(resource);
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var PREFIXES_KEY = 'prefixes';
    var ITEMS_KEY = 'items';
    function fromBackendResponse(service, bucket, resource) {
        var listResult = {
            prefixes: [],
            items: [],
            nextPageToken: resource['nextPageToken']
        };
        if (resource[PREFIXES_KEY]) {
            for (var _i = 0, _a = resource[PREFIXES_KEY]; _i < _a.length; _i++) {
                var path = _a[_i];
                var pathWithoutTrailingSlash = path.replace(/\/$/, '');
                var reference = service._makeStorageReference(new Location(bucket, pathWithoutTrailingSlash));
                listResult.prefixes.push(reference);
            }
        }
        if (resource[ITEMS_KEY]) {
            for (var _b = 0, _c = resource[ITEMS_KEY]; _b < _c.length; _b++) {
                var item = _c[_b];
                var reference = service._makeStorageReference(new Location(bucket, item['name']));
                listResult.items.push(reference);
            }
        }
        return listResult;
    }
    function fromResponseString(service, bucket, resourceString) {
        var obj = jsonObjectOrNull(resourceString);
        if (obj === null) {
            return null;
        }
        var resource = obj;
        return fromBackendResponse(service, bucket, resource);
    }

    var RequestInfo = /** @class */ (function () {
        function RequestInfo(url, method, 
        /**
         * Returns the value with which to resolve the request's promise. Only called
         * if the request is successful. Throw from this function to reject the
         * returned Request's promise with the thrown error.
         * Note: The XhrIo passed to this function may be reused after this callback
         * returns. Do not keep a reference to it in any way.
         */
        handler, timeout) {
            this.url = url;
            this.method = method;
            this.handler = handler;
            this.timeout = timeout;
            this.urlParams = {};
            this.headers = {};
            this.body = null;
            this.errorHandler = null;
            /**
             * Called with the current number of bytes uploaded and total size (-1 if not
             * computable) of the request body (i.e. used to report upload progress).
             */
            this.progressCallback = null;
            this.successCodes = [200];
            this.additionalRetryCodes = [];
        }
        return RequestInfo;
    }());

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Throws the UNKNOWN FirebaseStorageError if cndn is false.
     */
    function handlerCheck(cndn) {
        if (!cndn) {
            throw unknown();
        }
    }
    function metadataHandler(service, mappings) {
        function handler(xhr, text) {
            var metadata = fromResourceString(service, text, mappings);
            handlerCheck(metadata !== null);
            return metadata;
        }
        return handler;
    }
    function listHandler(service, bucket) {
        function handler(xhr, text) {
            var listResult = fromResponseString(service, bucket, text);
            handlerCheck(listResult !== null);
            return listResult;
        }
        return handler;
    }
    function downloadUrlHandler(service, mappings) {
        function handler(xhr, text) {
            var metadata = fromResourceString(service, text, mappings);
            handlerCheck(metadata !== null);
            return downloadUrlFromResourceString(metadata, text);
        }
        return handler;
    }
    function sharedErrorHandler(location) {
        function errorHandler(xhr, err) {
            var newErr;
            if (xhr.getStatus() === 401) {
                newErr = unauthenticated();
            }
            else {
                if (xhr.getStatus() === 402) {
                    newErr = quotaExceeded(location.bucket);
                }
                else {
                    if (xhr.getStatus() === 403) {
                        newErr = unauthorized(location.path);
                    }
                    else {
                        newErr = err;
                    }
                }
            }
            newErr.serverResponse = err.serverResponse;
            return newErr;
        }
        return errorHandler;
    }
    function objectErrorHandler(location) {
        var shared = sharedErrorHandler(location);
        function errorHandler(xhr, err) {
            var newErr = shared(xhr, err);
            if (xhr.getStatus() === 404) {
                newErr = objectNotFound(location.path);
            }
            newErr.serverResponse = err.serverResponse;
            return newErr;
        }
        return errorHandler;
    }
    function getMetadata(service, location, mappings) {
        var urlPart = location.fullServerUrl();
        var url = makeUrl(urlPart);
        var method = 'GET';
        var timeout = service.maxOperationRetryTime;
        var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
        requestInfo.errorHandler = objectErrorHandler(location);
        return requestInfo;
    }
    function list(service, location, delimiter, pageToken, maxResults) {
        var urlParams = {};
        if (location.isRoot) {
            urlParams['prefix'] = '';
        }
        else {
            urlParams['prefix'] = location.path + '/';
        }
        if (delimiter && delimiter.length > 0) {
            urlParams['delimiter'] = delimiter;
        }
        if (pageToken) {
            urlParams['pageToken'] = pageToken;
        }
        if (maxResults) {
            urlParams['maxResults'] = maxResults;
        }
        var urlPart = location.bucketOnlyServerUrl();
        var url = makeUrl(urlPart);
        var method = 'GET';
        var timeout = service.maxOperationRetryTime;
        var requestInfo = new RequestInfo(url, method, listHandler(service, location.bucket), timeout);
        requestInfo.urlParams = urlParams;
        requestInfo.errorHandler = sharedErrorHandler(location);
        return requestInfo;
    }
    function getDownloadUrl(service, location, mappings) {
        var urlPart = location.fullServerUrl();
        var url = makeUrl(urlPart);
        var method = 'GET';
        var timeout = service.maxOperationRetryTime;
        var requestInfo = new RequestInfo(url, method, downloadUrlHandler(service, mappings), timeout);
        requestInfo.errorHandler = objectErrorHandler(location);
        return requestInfo;
    }
    function updateMetadata(service, location, metadata, mappings) {
        var urlPart = location.fullServerUrl();
        var url = makeUrl(urlPart);
        var method = 'PATCH';
        var body = toResourceString(metadata, mappings);
        var headers = { 'Content-Type': 'application/json; charset=utf-8' };
        var timeout = service.maxOperationRetryTime;
        var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
        requestInfo.headers = headers;
        requestInfo.body = body;
        requestInfo.errorHandler = objectErrorHandler(location);
        return requestInfo;
    }
    function deleteObject(service, location) {
        var urlPart = location.fullServerUrl();
        var url = makeUrl(urlPart);
        var method = 'DELETE';
        var timeout = service.maxOperationRetryTime;
        function handler(_xhr, _text) { }
        var requestInfo = new RequestInfo(url, method, handler, timeout);
        requestInfo.successCodes = [200, 204];
        requestInfo.errorHandler = objectErrorHandler(location);
        return requestInfo;
    }
    function determineContentType_(metadata, blob) {
        return ((metadata && metadata['contentType']) ||
            (blob && blob.type()) ||
            'application/octet-stream');
    }
    function metadataForUpload_(location, blob, metadata) {
        var metadataClone = Object.assign({}, metadata);
        metadataClone['fullPath'] = location.path;
        metadataClone['size'] = blob.size();
        if (!metadataClone['contentType']) {
            metadataClone['contentType'] = determineContentType_(null, blob);
        }
        return metadataClone;
    }
    /**
     * Prepare RequestInfo for uploads as Content-Type: multipart.
     */
    function multipartUpload(service, location, mappings, blob, metadata) {
        var urlPart = location.bucketOnlyServerUrl();
        var headers = {
            'X-Goog-Upload-Protocol': 'multipart'
        };
        function genBoundary() {
            var str = '';
            for (var i = 0; i < 2; i++) {
                str = str + Math.random().toString().slice(2);
            }
            return str;
        }
        var boundary = genBoundary();
        headers['Content-Type'] = 'multipart/related; boundary=' + boundary;
        var metadata_ = metadataForUpload_(location, blob, metadata);
        var metadataString = toResourceString(metadata_, mappings);
        var preBlobPart = '--' +
            boundary +
            '\r\n' +
            'Content-Type: application/json; charset=utf-8\r\n\r\n' +
            metadataString +
            '\r\n--' +
            boundary +
            '\r\n' +
            'Content-Type: ' +
            metadata_['contentType'] +
            '\r\n\r\n';
        var postBlobPart = '\r\n--' + boundary + '--';
        var body = FbsBlob.getBlob(preBlobPart, blob, postBlobPart);
        if (body === null) {
            throw cannotSliceBlob();
        }
        var urlParams = { name: metadata_['fullPath'] };
        var url = makeUrl(urlPart);
        var method = 'POST';
        var timeout = service.maxUploadRetryTime;
        var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
        requestInfo.urlParams = urlParams;
        requestInfo.headers = headers;
        requestInfo.body = body.uploadData();
        requestInfo.errorHandler = sharedErrorHandler(location);
        return requestInfo;
    }
    /**
     * @param current The number of bytes that have been uploaded so far.
     * @param total The total number of bytes in the upload.
     * @param opt_finalized True if the server has finished the upload.
     * @param opt_metadata The upload metadata, should
     *     only be passed if opt_finalized is true.
     */
    var ResumableUploadStatus = /** @class */ (function () {
        function ResumableUploadStatus(current, total, finalized, metadata) {
            this.current = current;
            this.total = total;
            this.finalized = !!finalized;
            this.metadata = metadata || null;
        }
        return ResumableUploadStatus;
    }());
    function checkResumeHeader_(xhr, allowed) {
        var status = null;
        try {
            status = xhr.getResponseHeader('X-Goog-Upload-Status');
        }
        catch (e) {
            handlerCheck(false);
        }
        var allowedStatus = allowed || ['active'];
        handlerCheck(!!status && allowedStatus.indexOf(status) !== -1);
        return status;
    }
    function createResumableUpload(service, location, mappings, blob, metadata) {
        var urlPart = location.bucketOnlyServerUrl();
        var metadataForUpload = metadataForUpload_(location, blob, metadata);
        var urlParams = { name: metadataForUpload['fullPath'] };
        var url = makeUrl(urlPart);
        var method = 'POST';
        var headers = {
            'X-Goog-Upload-Protocol': 'resumable',
            'X-Goog-Upload-Command': 'start',
            'X-Goog-Upload-Header-Content-Length': blob.size(),
            'X-Goog-Upload-Header-Content-Type': metadataForUpload['contentType'],
            'Content-Type': 'application/json; charset=utf-8'
        };
        var body = toResourceString(metadataForUpload, mappings);
        var timeout = service.maxUploadRetryTime;
        function handler(xhr) {
            checkResumeHeader_(xhr);
            var url;
            try {
                url = xhr.getResponseHeader('X-Goog-Upload-URL');
            }
            catch (e) {
                handlerCheck(false);
            }
            handlerCheck(isString(url));
            return url;
        }
        var requestInfo = new RequestInfo(url, method, handler, timeout);
        requestInfo.urlParams = urlParams;
        requestInfo.headers = headers;
        requestInfo.body = body;
        requestInfo.errorHandler = sharedErrorHandler(location);
        return requestInfo;
    }
    /**
     * @param url From a call to fbs.requests.createResumableUpload.
     */
    function getResumableUploadStatus(service, location, url, blob) {
        var headers = { 'X-Goog-Upload-Command': 'query' };
        function handler(xhr) {
            var status = checkResumeHeader_(xhr, ['active', 'final']);
            var sizeString = null;
            try {
                sizeString = xhr.getResponseHeader('X-Goog-Upload-Size-Received');
            }
            catch (e) {
                handlerCheck(false);
            }
            if (!sizeString) {
                // null or empty string
                handlerCheck(false);
            }
            var size = Number(sizeString);
            handlerCheck(!isNaN(size));
            return new ResumableUploadStatus(size, blob.size(), status === 'final');
        }
        var method = 'POST';
        var timeout = service.maxUploadRetryTime;
        var requestInfo = new RequestInfo(url, method, handler, timeout);
        requestInfo.headers = headers;
        requestInfo.errorHandler = sharedErrorHandler(location);
        return requestInfo;
    }
    /**
     * Any uploads via the resumable upload API must transfer a number of bytes
     * that is a multiple of this number.
     */
    var RESUMABLE_UPLOAD_CHUNK_SIZE = 256 * 1024;
    /**
     * @param url From a call to fbs.requests.createResumableUpload.
     * @param chunkSize Number of bytes to upload.
     * @param status The previous status.
     *     If not passed or null, we start from the beginning.
     * @throws fbs.Error If the upload is already complete, the passed in status
     *     has a final size inconsistent with the blob, or the blob cannot be sliced
     *     for upload.
     */
    function continueResumableUpload(location, service, url, blob, chunkSize, mappings, status, progressCallback) {
        // TODO(andysoto): standardize on internal asserts
        // assert(!(opt_status && opt_status.finalized));
        var status_ = new ResumableUploadStatus(0, 0);
        if (status) {
            status_.current = status.current;
            status_.total = status.total;
        }
        else {
            status_.current = 0;
            status_.total = blob.size();
        }
        if (blob.size() !== status_.total) {
            throw serverFileWrongSize();
        }
        var bytesLeft = status_.total - status_.current;
        var bytesToUpload = bytesLeft;
        if (chunkSize > 0) {
            bytesToUpload = Math.min(bytesToUpload, chunkSize);
        }
        var startByte = status_.current;
        var endByte = startByte + bytesToUpload;
        var uploadCommand = bytesToUpload === bytesLeft ? 'upload, finalize' : 'upload';
        var headers = {
            'X-Goog-Upload-Command': uploadCommand,
            'X-Goog-Upload-Offset': status_.current
        };
        var body = blob.slice(startByte, endByte);
        if (body === null) {
            throw cannotSliceBlob();
        }
        function handler(xhr, text) {
            // TODO(andysoto): Verify the MD5 of each uploaded range:
            // the 'x-range-md5' header comes back with status code 308 responses.
            // We'll only be able to bail out though, because you can't re-upload a
            // range that you previously uploaded.
            var uploadStatus = checkResumeHeader_(xhr, ['active', 'final']);
            var newCurrent = status_.current + bytesToUpload;
            var size = blob.size();
            var metadata;
            if (uploadStatus === 'final') {
                metadata = metadataHandler(service, mappings)(xhr, text);
            }
            else {
                metadata = null;
            }
            return new ResumableUploadStatus(newCurrent, size, uploadStatus === 'final', metadata);
        }
        var method = 'POST';
        var timeout = service.maxUploadRetryTime;
        var requestInfo = new RequestInfo(url, method, handler, timeout);
        requestInfo.headers = headers;
        requestInfo.body = body.uploadData();
        requestInfo.progressCallback = progressCallback || null;
        requestInfo.errorHandler = sharedErrorHandler(location);
        return requestInfo;
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var Observer = /** @class */ (function () {
        function Observer(nextOrObserver, error, complete) {
            var asFunctions = isFunction(nextOrObserver) || error != null || complete != null;
            if (asFunctions) {
                this.next = nextOrObserver;
                this.error = error;
                this.complete = complete;
            }
            else {
                var observer = nextOrObserver;
                this.next = observer.next;
                this.error = observer.error;
                this.complete = observer.complete;
            }
        }
        return Observer;
    }());

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Returns a function that invokes f with its arguments asynchronously as a
     * microtask, i.e. as soon as possible after the current script returns back
     * into browser code.
     */
    // eslint-disable-next-line @typescript-eslint/ban-types
    function async(f) {
        return function () {
            var argsToForward = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                argsToForward[_i] = arguments[_i];
            }
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            Promise.resolve().then(function () { return f.apply(void 0, argsToForward); });
        };
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Represents a blob being uploaded. Can be used to pause/resume/cancel the
     * upload and manage callbacks for various events.
     * @internal
     */
    var UploadTask = /** @class */ (function () {
        /**
         * @param ref - The firebaseStorage.Reference object this task came
         *     from, untyped to avoid cyclic dependencies.
         * @param blob - The blob to upload.
         */
        function UploadTask(ref, blob, metadata) {
            var _this = this;
            if (metadata === void 0) { metadata = null; }
            /**
             * Number of bytes transferred so far.
             */
            this._transferred = 0;
            this._needToFetchStatus = false;
            this._needToFetchMetadata = false;
            this._observers = [];
            this._error = undefined;
            this._uploadUrl = undefined;
            this._request = undefined;
            this._chunkMultiplier = 1;
            this._resolve = undefined;
            this._reject = undefined;
            this._ref = ref;
            this._blob = blob;
            this._metadata = metadata;
            this._mappings = getMappings();
            this._resumable = this._shouldDoResumable(this._blob);
            this._state = "running" /* RUNNING */;
            this._errorHandler = function (error) {
                _this._request = undefined;
                _this._chunkMultiplier = 1;
                if (error._codeEquals("canceled" /* CANCELED */)) {
                    _this._needToFetchStatus = true;
                    _this.completeTransitions_();
                }
                else {
                    _this._error = error;
                    _this._transition("error" /* ERROR */);
                }
            };
            this._metadataErrorHandler = function (error) {
                _this._request = undefined;
                if (error._codeEquals("canceled" /* CANCELED */)) {
                    _this.completeTransitions_();
                }
                else {
                    _this._error = error;
                    _this._transition("error" /* ERROR */);
                }
            };
            this._promise = new Promise(function (resolve, reject) {
                _this._resolve = resolve;
                _this._reject = reject;
                _this._start();
            });
            // Prevent uncaught rejections on the internal promise from bubbling out
            // to the top level with a dummy handler.
            this._promise.then(null, function () { });
        }
        UploadTask.prototype._makeProgressCallback = function () {
            var _this = this;
            var sizeBefore = this._transferred;
            return function (loaded) { return _this._updateProgress(sizeBefore + loaded); };
        };
        UploadTask.prototype._shouldDoResumable = function (blob) {
            return blob.size() > 256 * 1024;
        };
        UploadTask.prototype._start = function () {
            if (this._state !== "running" /* RUNNING */) {
                // This can happen if someone pauses us in a resume callback, for example.
                return;
            }
            if (this._request !== undefined) {
                return;
            }
            if (this._resumable) {
                if (this._uploadUrl === undefined) {
                    this._createResumable();
                }
                else {
                    if (this._needToFetchStatus) {
                        this._fetchStatus();
                    }
                    else {
                        if (this._needToFetchMetadata) {
                            // Happens if we miss the metadata on upload completion.
                            this._fetchMetadata();
                        }
                        else {
                            this._continueUpload();
                        }
                    }
                }
            }
            else {
                this._oneShotUpload();
            }
        };
        UploadTask.prototype._resolveToken = function (callback) {
            var _this = this;
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this._ref.storage._getAuthToken().then(function (authToken) {
                switch (_this._state) {
                    case "running" /* RUNNING */:
                        callback(authToken);
                        break;
                    case "canceling" /* CANCELING */:
                        _this._transition("canceled" /* CANCELED */);
                        break;
                    case "pausing" /* PAUSING */:
                        _this._transition("paused" /* PAUSED */);
                        break;
                }
            });
        };
        // TODO(andysoto): assert false
        UploadTask.prototype._createResumable = function () {
            var _this = this;
            this._resolveToken(function (authToken) {
                var requestInfo = createResumableUpload(_this._ref.storage, _this._ref._location, _this._mappings, _this._blob, _this._metadata);
                var createRequest = _this._ref.storage._makeRequest(requestInfo, authToken);
                _this._request = createRequest;
                createRequest.getPromise().then(function (url) {
                    _this._request = undefined;
                    _this._uploadUrl = url;
                    _this._needToFetchStatus = false;
                    _this.completeTransitions_();
                }, _this._errorHandler);
            });
        };
        UploadTask.prototype._fetchStatus = function () {
            var _this = this;
            // TODO(andysoto): assert(this.uploadUrl_ !== null);
            var url = this._uploadUrl;
            this._resolveToken(function (authToken) {
                var requestInfo = getResumableUploadStatus(_this._ref.storage, _this._ref._location, url, _this._blob);
                var statusRequest = _this._ref.storage._makeRequest(requestInfo, authToken);
                _this._request = statusRequest;
                statusRequest.getPromise().then(function (status) {
                    status = status;
                    _this._request = undefined;
                    _this._updateProgress(status.current);
                    _this._needToFetchStatus = false;
                    if (status.finalized) {
                        _this._needToFetchMetadata = true;
                    }
                    _this.completeTransitions_();
                }, _this._errorHandler);
            });
        };
        UploadTask.prototype._continueUpload = function () {
            var _this = this;
            var chunkSize = RESUMABLE_UPLOAD_CHUNK_SIZE * this._chunkMultiplier;
            var status = new ResumableUploadStatus(this._transferred, this._blob.size());
            // TODO(andysoto): assert(this.uploadUrl_ !== null);
            var url = this._uploadUrl;
            this._resolveToken(function (authToken) {
                var requestInfo;
                try {
                    requestInfo = continueResumableUpload(_this._ref._location, _this._ref.storage, url, _this._blob, chunkSize, _this._mappings, status, _this._makeProgressCallback());
                }
                catch (e) {
                    _this._error = e;
                    _this._transition("error" /* ERROR */);
                    return;
                }
                var uploadRequest = _this._ref.storage._makeRequest(requestInfo, authToken);
                _this._request = uploadRequest;
                uploadRequest.getPromise().then(function (newStatus) {
                    _this._increaseMultiplier();
                    _this._request = undefined;
                    _this._updateProgress(newStatus.current);
                    if (newStatus.finalized) {
                        _this._metadata = newStatus.metadata;
                        _this._transition("success" /* SUCCESS */);
                    }
                    else {
                        _this.completeTransitions_();
                    }
                }, _this._errorHandler);
            });
        };
        UploadTask.prototype._increaseMultiplier = function () {
            var currentSize = RESUMABLE_UPLOAD_CHUNK_SIZE * this._chunkMultiplier;
            // Max chunk size is 32M.
            if (currentSize < 32 * 1024 * 1024) {
                this._chunkMultiplier *= 2;
            }
        };
        UploadTask.prototype._fetchMetadata = function () {
            var _this = this;
            this._resolveToken(function (authToken) {
                var requestInfo = getMetadata(_this._ref.storage, _this._ref._location, _this._mappings);
                var metadataRequest = _this._ref.storage._makeRequest(requestInfo, authToken);
                _this._request = metadataRequest;
                metadataRequest.getPromise().then(function (metadata) {
                    _this._request = undefined;
                    _this._metadata = metadata;
                    _this._transition("success" /* SUCCESS */);
                }, _this._metadataErrorHandler);
            });
        };
        UploadTask.prototype._oneShotUpload = function () {
            var _this = this;
            this._resolveToken(function (authToken) {
                var requestInfo = multipartUpload(_this._ref.storage, _this._ref._location, _this._mappings, _this._blob, _this._metadata);
                var multipartRequest = _this._ref.storage._makeRequest(requestInfo, authToken);
                _this._request = multipartRequest;
                multipartRequest.getPromise().then(function (metadata) {
                    _this._request = undefined;
                    _this._metadata = metadata;
                    _this._updateProgress(_this._blob.size());
                    _this._transition("success" /* SUCCESS */);
                }, _this._errorHandler);
            });
        };
        UploadTask.prototype._updateProgress = function (transferred) {
            var old = this._transferred;
            this._transferred = transferred;
            // A progress update can make the "transferred" value smaller (e.g. a
            // partial upload not completed by server, after which the "transferred"
            // value may reset to the value at the beginning of the request).
            if (this._transferred !== old) {
                this._notifyObservers();
            }
        };
        UploadTask.prototype._transition = function (state) {
            if (this._state === state) {
                return;
            }
            switch (state) {
                case "canceling" /* CANCELING */:
                    // TODO(andysoto):
                    // assert(this.state_ === InternalTaskState.RUNNING ||
                    //        this.state_ === InternalTaskState.PAUSING);
                    this._state = state;
                    if (this._request !== undefined) {
                        this._request.cancel();
                    }
                    break;
                case "pausing" /* PAUSING */:
                    // TODO(andysoto):
                    // assert(this.state_ === InternalTaskState.RUNNING);
                    this._state = state;
                    if (this._request !== undefined) {
                        this._request.cancel();
                    }
                    break;
                case "running" /* RUNNING */:
                    // TODO(andysoto):
                    // assert(this.state_ === InternalTaskState.PAUSED ||
                    //        this.state_ === InternalTaskState.PAUSING);
                    var wasPaused = this._state === "paused" /* PAUSED */;
                    this._state = state;
                    if (wasPaused) {
                        this._notifyObservers();
                        this._start();
                    }
                    break;
                case "paused" /* PAUSED */:
                    // TODO(andysoto):
                    // assert(this.state_ === InternalTaskState.PAUSING);
                    this._state = state;
                    this._notifyObservers();
                    break;
                case "canceled" /* CANCELED */:
                    // TODO(andysoto):
                    // assert(this.state_ === InternalTaskState.PAUSED ||
                    //        this.state_ === InternalTaskState.CANCELING);
                    this._error = canceled();
                    this._state = state;
                    this._notifyObservers();
                    break;
                case "error" /* ERROR */:
                    // TODO(andysoto):
                    // assert(this.state_ === InternalTaskState.RUNNING ||
                    //        this.state_ === InternalTaskState.PAUSING ||
                    //        this.state_ === InternalTaskState.CANCELING);
                    this._state = state;
                    this._notifyObservers();
                    break;
                case "success" /* SUCCESS */:
                    // TODO(andysoto):
                    // assert(this.state_ === InternalTaskState.RUNNING ||
                    //        this.state_ === InternalTaskState.PAUSING ||
                    //        this.state_ === InternalTaskState.CANCELING);
                    this._state = state;
                    this._notifyObservers();
                    break;
            }
        };
        UploadTask.prototype.completeTransitions_ = function () {
            switch (this._state) {
                case "pausing" /* PAUSING */:
                    this._transition("paused" /* PAUSED */);
                    break;
                case "canceling" /* CANCELING */:
                    this._transition("canceled" /* CANCELED */);
                    break;
                case "running" /* RUNNING */:
                    this._start();
                    break;
            }
        };
        Object.defineProperty(UploadTask.prototype, "snapshot", {
            /**
             * A snapshot of the current task state.
             */
            get: function () {
                var externalState = taskStateFromInternalTaskState(this._state);
                return {
                    bytesTransferred: this._transferred,
                    totalBytes: this._blob.size(),
                    state: externalState,
                    metadata: this._metadata,
                    task: this,
                    ref: this._ref
                };
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Adds a callback for an event.
         * @param type - The type of event to listen for.
         * @param nextOrObserver -
         *     The `next` function, which gets called for each item in
         *     the event stream, or an observer object with some or all of these three
         *     properties (`next`, `error`, `complete`).
         * @param error - A function that gets called with a `FirebaseStorageError`
         *     if the event stream ends due to an error.
         * @param completed - A function that gets called if the
         *     event stream ends normally.
         * @returns
         *     If only the event argument is passed, returns a function you can use to
         *     add callbacks (see the examples above). If more than just the event
         *     argument is passed, returns a function you can call to unregister the
         *     callbacks.
         */
        UploadTask.prototype.on = function (type, nextOrObserver, error, completed) {
            var _this = this;
            var observer = new Observer(nextOrObserver, error, completed);
            this._addObserver(observer);
            return function () {
                _this._removeObserver(observer);
            };
        };
        /**
         * This object behaves like a Promise, and resolves with its snapshot data
         * when the upload completes.
         * @param onFulfilled - The fulfillment callback. Promise chaining works as normal.
         * @param onRejected - The rejection callback.
         */
        UploadTask.prototype.then = function (onFulfilled, onRejected) {
            // These casts are needed so that TypeScript can infer the types of the
            // resulting Promise.
            return this._promise.then(onFulfilled, onRejected);
        };
        /**
         * Equivalent to calling `then(null, onRejected)`.
         */
        UploadTask.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        /**
         * Adds the given observer.
         */
        UploadTask.prototype._addObserver = function (observer) {
            this._observers.push(observer);
            this._notifyObserver(observer);
        };
        /**
         * Removes the given observer.
         */
        UploadTask.prototype._removeObserver = function (observer) {
            var i = this._observers.indexOf(observer);
            if (i !== -1) {
                this._observers.splice(i, 1);
            }
        };
        UploadTask.prototype._notifyObservers = function () {
            var _this = this;
            this._finishPromise();
            var observers = this._observers.slice();
            observers.forEach(function (observer) {
                _this._notifyObserver(observer);
            });
        };
        UploadTask.prototype._finishPromise = function () {
            if (this._resolve !== undefined) {
                var triggered = true;
                switch (taskStateFromInternalTaskState(this._state)) {
                    case TaskState.SUCCESS:
                        async(this._resolve.bind(null, this.snapshot))();
                        break;
                    case TaskState.CANCELED:
                    case TaskState.ERROR:
                        var toCall = this._reject;
                        async(toCall.bind(null, this._error))();
                        break;
                    default:
                        triggered = false;
                        break;
                }
                if (triggered) {
                    this._resolve = undefined;
                    this._reject = undefined;
                }
            }
        };
        UploadTask.prototype._notifyObserver = function (observer) {
            var externalState = taskStateFromInternalTaskState(this._state);
            switch (externalState) {
                case TaskState.RUNNING:
                case TaskState.PAUSED:
                    if (observer.next) {
                        async(observer.next.bind(observer, this.snapshot))();
                    }
                    break;
                case TaskState.SUCCESS:
                    if (observer.complete) {
                        async(observer.complete.bind(observer))();
                    }
                    break;
                case TaskState.CANCELED:
                case TaskState.ERROR:
                    if (observer.error) {
                        async(observer.error.bind(observer, this._error))();
                    }
                    break;
                default:
                    // TODO(andysoto): assert(false);
                    if (observer.error) {
                        async(observer.error.bind(observer, this._error))();
                    }
            }
        };
        /**
         * Resumes a paused task. Has no effect on a currently running or failed task.
         * @returns True if the operation took effect, false if ignored.
         */
        UploadTask.prototype.resume = function () {
            var valid = this._state === "paused" /* PAUSED */ ||
                this._state === "pausing" /* PAUSING */;
            if (valid) {
                this._transition("running" /* RUNNING */);
            }
            return valid;
        };
        /**
         * Pauses a currently running task. Has no effect on a paused or failed task.
         * @returns True if the operation took effect, false if ignored.
         */
        UploadTask.prototype.pause = function () {
            var valid = this._state === "running" /* RUNNING */;
            if (valid) {
                this._transition("pausing" /* PAUSING */);
            }
            return valid;
        };
        /**
         * Cancels a currently running or paused task. Has no effect on a complete or
         * failed task.
         * @returns True if the operation took effect, false if ignored.
         */
        UploadTask.prototype.cancel = function () {
            var valid = this._state === "running" /* RUNNING */ ||
                this._state === "pausing" /* PAUSING */;
            if (valid) {
                this._transition("canceling" /* CANCELING */);
            }
            return valid;
        };
        return UploadTask;
    }());

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Provides methods to interact with a bucket in the Firebase Storage service.
     * @internal
     * @param _location - An fbs.location, or the URL at
     *     which to base this object, in one of the following forms:
     *         gs://<bucket>/<object-path>
     *         http[s]://firebasestorage.googleapis.com/
     *                     <api-version>/b/<bucket>/o/<object-path>
     *     Any query or fragment strings will be ignored in the http[s]
     *     format. If no value is passed, the storage object will use a URL based on
     *     the project ID of the base firebase.App instance.
     */
    var Reference = /** @class */ (function () {
        function Reference(_service, location) {
            this._service = _service;
            if (location instanceof Location) {
                this._location = location;
            }
            else {
                this._location = Location.makeFromUrl(location);
            }
        }
        /**
         * Returns the URL for the bucket and path this object references,
         *     in the form gs://<bucket>/<object-path>
         * @override
         */
        Reference.prototype.toString = function () {
            return 'gs://' + this._location.bucket + '/' + this._location.path;
        };
        Reference.prototype._newRef = function (service, location) {
            return new Reference(service, location);
        };
        Object.defineProperty(Reference.prototype, "root", {
            /**
             * A reference to the root of this object's bucket.
             */
            get: function () {
                var location = new Location(this._location.bucket, '');
                return this._newRef(this._service, location);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Reference.prototype, "bucket", {
            /**
             * The name of the bucket containing this reference's object.
             */
            get: function () {
                return this._location.bucket;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Reference.prototype, "fullPath", {
            /**
             * The full path of this object.
             */
            get: function () {
                return this._location.path;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Reference.prototype, "name", {
            /**
             * The short name of this object, which is the last component of the full path.
             * For example, if fullPath is 'full/path/image.png', name is 'image.png'.
             */
            get: function () {
                return lastComponent(this._location.path);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Reference.prototype, "storage", {
            /**
             * The `StorageService` instance this `StorageReference` is associated with.
             */
            get: function () {
                return this._service;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Reference.prototype, "parent", {
            /**
             * A `StorageReference` pointing to the parent location of this `StorageReference`, or null if
             * this reference is the root.
             */
            get: function () {
                var newPath = parent(this._location.path);
                if (newPath === null) {
                    return null;
                }
                var location = new Location(this._location.bucket, newPath);
                return new Reference(this._service, location);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Utility function to throw an error in methods that do not accept a root reference.
         */
        Reference.prototype._throwIfRoot = function (name) {
            if (this._location.path === '') {
                throw invalidRootOperation(name);
            }
        };
        return Reference;
    }());
    /**
     * Uploads data to this object's location.
     * The upload can be paused and resumed, and exposes progress updates.
     * @public
     * @param ref - StorageReference where data should be uploaded.
     * @param data - The data to upload.
     * @param metadata - Metadata for the newly uploaded data.
     * @returns An UploadTask
     */
    function uploadBytesResumable(ref, data, metadata) {
        ref._throwIfRoot('uploadBytesResumable');
        return new UploadTask(ref, new FbsBlob(data), metadata);
    }
    /**
     * List all items (files) and prefixes (folders) under this storage reference.
     *
     * This is a helper method for calling list() repeatedly until there are
     * no more results. The default pagination size is 1000.
     *
     * Note: The results may not be consistent if objects are changed while this
     * operation is running.
     *
     * Warning: listAll may potentially consume too many resources if there are
     * too many results.
     * @public
     * @param ref - StorageReference to get list from.
     *
     * @returns A Promise that resolves with all the items and prefixes under
     *      the current storage reference. `prefixes` contains references to
     *      sub-directories and `items` contains references to objects in this
     *      folder. `nextPageToken` is never returned.
     */
    function listAll(ref) {
        var accumulator = {
            prefixes: [],
            items: []
        };
        return listAllHelper(ref, accumulator).then(function () { return accumulator; });
    }
    /**
     * Separated from listAll because async functions can't use "arguments".
     * @param ref
     * @param accumulator
     * @param pageToken
     */
    function listAllHelper(ref, accumulator, pageToken) {
        return __awaiter(this, void 0, void 0, function () {
            var opt, nextPage;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        opt = {
                            // maxResults is 1000 by default.
                            pageToken: pageToken
                        };
                        return [4 /*yield*/, list$1(ref, opt)];
                    case 1:
                        nextPage = _c.sent();
                        (_a = accumulator.prefixes).push.apply(_a, nextPage.prefixes);
                        (_b = accumulator.items).push.apply(_b, nextPage.items);
                        if (!(nextPage.nextPageToken != null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, listAllHelper(ref, accumulator, nextPage.nextPageToken)];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    /**
     * List items (files) and prefixes (folders) under this storage reference.
     *
     * List API is only available for Firebase Rules Version 2.
     *
     * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
     * delimited folder structure.
     * Refer to GCS's List API if you want to learn more.
     *
     * To adhere to Firebase Rules's Semantics, Firebase Storage does not
     * support objects whose paths end with "/" or contain two consecutive
     * "/"s. Firebase Storage List API will filter these unsupported objects.
     * list() may fail if there are too many unsupported objects in the bucket.
     * @public
     *
     * @param ref - StorageReference to get list from.
     * @param options - See ListOptions for details.
     * @returns A Promise that resolves with the items and prefixes.
     *      `prefixes` contains references to sub-folders and `items`
     *      contains references to objects in this folder. `nextPageToken`
     *      can be used to get the rest of the results.
     */
    function list$1(ref, options) {
        return __awaiter(this, void 0, void 0, function () {
            var authToken, op, requestInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (options != null) {
                            if (typeof options.maxResults === 'number') {
                                validateNumber('options.maxResults', 
                                /* minValue= */ 1, 
                                /* maxValue= */ 1000, options.maxResults);
                            }
                        }
                        return [4 /*yield*/, ref.storage._getAuthToken()];
                    case 1:
                        authToken = _a.sent();
                        op = options || {};
                        requestInfo = list(ref.storage, ref._location, 
                        /*delimiter= */ '/', op.pageToken, op.maxResults);
                        return [2 /*return*/, ref.storage._makeRequest(requestInfo, authToken).getPromise()];
                }
            });
        });
    }
    /**
     * A promise that resolves with the metadata for this object. If this
     * object doesn't exist or metadata cannot be retreived, the promise is
     * rejected.
     * @public
     * @param ref - StorageReference to get metadata from.
     */
    function getMetadata$1(ref) {
        return __awaiter(this, void 0, void 0, function () {
            var authToken, requestInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ref._throwIfRoot('getMetadata');
                        return [4 /*yield*/, ref.storage._getAuthToken()];
                    case 1:
                        authToken = _a.sent();
                        requestInfo = getMetadata(ref.storage, ref._location, getMappings());
                        return [2 /*return*/, ref.storage._makeRequest(requestInfo, authToken).getPromise()];
                }
            });
        });
    }
    /**
     * Updates the metadata for this object.
     * @public
     * @param ref - StorageReference to update metadata for.
     * @param metadata - The new metadata for the object.
     *     Only values that have been explicitly set will be changed. Explicitly
     *     setting a value to null will remove the metadata.
     * @returns A promise that resolves
     *     with the new metadata for this object.
     *     See `firebaseStorage.Reference.prototype.getMetadata`
     */
    function updateMetadata$1(ref, metadata) {
        return __awaiter(this, void 0, void 0, function () {
            var authToken, requestInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ref._throwIfRoot('updateMetadata');
                        return [4 /*yield*/, ref.storage._getAuthToken()];
                    case 1:
                        authToken = _a.sent();
                        requestInfo = updateMetadata(ref.storage, ref._location, metadata, getMappings());
                        return [2 /*return*/, ref.storage._makeRequest(requestInfo, authToken).getPromise()];
                }
            });
        });
    }
    /**
     * Returns the download URL for the given Reference.
     * @public
     * @returns A promise that resolves with the download
     *     URL for this object.
     */
    function getDownloadURL(ref) {
        return __awaiter(this, void 0, void 0, function () {
            var authToken, requestInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ref._throwIfRoot('getDownloadURL');
                        return [4 /*yield*/, ref.storage._getAuthToken()];
                    case 1:
                        authToken = _a.sent();
                        requestInfo = getDownloadUrl(ref.storage, ref._location, getMappings());
                        return [2 /*return*/, ref.storage
                                ._makeRequest(requestInfo, authToken)
                                .getPromise()
                                .then(function (url) {
                                if (url === null) {
                                    throw noDownloadURL();
                                }
                                return url;
                            })];
                }
            });
        });
    }
    /**
     * Deletes the object at this location.
     * @public
     * @param ref - StorageReference for object to delete.
     * @returns A promise that resolves if the deletion succeeds.
     */
    function deleteObject$1(ref) {
        return __awaiter(this, void 0, void 0, function () {
            var authToken, requestInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ref._throwIfRoot('deleteObject');
                        return [4 /*yield*/, ref.storage._getAuthToken()];
                    case 1:
                        authToken = _a.sent();
                        requestInfo = deleteObject(ref.storage, ref._location);
                        return [2 /*return*/, ref.storage._makeRequest(requestInfo, authToken).getPromise()];
                }
            });
        });
    }
    /**
     * Returns reference for object obtained by appending `childPath` to `ref`.
     *
     * @param ref - StorageReference to get child of.
     * @param childPath - Child path from provided ref.
     * @returns A reference to the object obtained by
     * appending childPath, removing any duplicate, beginning, or trailing
     * slashes.
     *
     */
    function _getChild(ref, childPath) {
        var newPath = child(ref._location.path, childPath);
        var location = new Location(ref._location.bucket, newPath);
        return new Reference(ref.storage, location);
    }

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function isUrl(path) {
        return /^[A-Za-z]+:\/\//.test(path);
    }
    /**
     * Returns a firebaseStorage.Reference for the given url.
     */
    function refFromURL(service, url) {
        return new Reference(service, url);
    }
    /**
     * Returns a firebaseStorage.Reference for the given path in the default
     * bucket.
     */
    function refFromPath(ref, path) {
        if (ref instanceof StorageService) {
            var service = ref;
            if (service._bucket == null) {
                throw noDefaultBucket();
            }
            var reference = new Reference(service, service._bucket);
            if (path != null) {
                return refFromPath(reference, path);
            }
            else {
                return reference;
            }
        }
        else {
            // ref is a Reference
            if (path !== undefined) {
                if (path.includes('..')) {
                    throw invalidArgument('`path` param cannot contain ".."');
                }
                return _getChild(ref, path);
            }
            else {
                return ref;
            }
        }
    }
    function ref(serviceOrRef, pathOrUrl) {
        if (pathOrUrl && isUrl(pathOrUrl)) {
            if (serviceOrRef instanceof StorageService) {
                return refFromURL(serviceOrRef, pathOrUrl);
            }
            else {
                throw invalidArgument('To use ref(service, url), the first argument must be a Storage instance.');
            }
        }
        else {
            return refFromPath(serviceOrRef, pathOrUrl);
        }
    }
    function extractBucket(config) {
        var bucketString = config === null || config === void 0 ? void 0 : config[CONFIG_STORAGE_BUCKET_KEY];
        if (bucketString == null) {
            return null;
        }
        return Location.makeFromBucketSpec(bucketString);
    }
    /**
     * A service that provides Firebase Storage Reference instances.
     * @public
     * @param opt_url - gs:// url to a custom Storage Bucket
     */
    var StorageService = /** @class */ (function () {
        function StorageService(
        /**
         * FirebaseApp associated with this StorageService instance.
         */
        app, _authProvider, _pool, _url, _firebaseVersion) {
            this.app = app;
            this._authProvider = _authProvider;
            this._pool = _pool;
            this._url = _url;
            this._firebaseVersion = _firebaseVersion;
            this._bucket = null;
            this._appId = null;
            this._deleted = false;
            this._maxOperationRetryTime = DEFAULT_MAX_OPERATION_RETRY_TIME;
            this._maxUploadRetryTime = DEFAULT_MAX_UPLOAD_RETRY_TIME;
            this._requests = new Set();
            if (_url != null) {
                this._bucket = Location.makeFromBucketSpec(_url);
            }
            else {
                this._bucket = extractBucket(this.app.options);
            }
        }
        Object.defineProperty(StorageService.prototype, "maxUploadRetryTime", {
            /**
             * The maximum time to retry uploads in milliseconds.
             */
            get: function () {
                return this._maxUploadRetryTime;
            },
            set: function (time) {
                validateNumber('time', 
                /* minValue=*/ 0, 
                /* maxValue= */ Number.POSITIVE_INFINITY, time);
                this._maxUploadRetryTime = time;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StorageService.prototype, "maxOperationRetryTime", {
            /**
             * The maximum time to retry operations other than uploads or downloads in
             * milliseconds.
             */
            get: function () {
                return this._maxOperationRetryTime;
            },
            set: function (time) {
                validateNumber('time', 
                /* minValue=*/ 0, 
                /* maxValue= */ Number.POSITIVE_INFINITY, time);
                this._maxOperationRetryTime = time;
            },
            enumerable: false,
            configurable: true
        });
        StorageService.prototype._getAuthToken = function () {
            return __awaiter(this, void 0, void 0, function () {
                var auth, tokenData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            auth = this._authProvider.getImmediate({ optional: true });
                            if (!auth) return [3 /*break*/, 2];
                            return [4 /*yield*/, auth.getToken()];
                        case 1:
                            tokenData = _a.sent();
                            if (tokenData !== null) {
                                return [2 /*return*/, tokenData.accessToken];
                            }
                            _a.label = 2;
                        case 2: return [2 /*return*/, null];
                    }
                });
            });
        };
        /**
         * Stop running requests and prevent more from being created.
         */
        StorageService.prototype._delete = function () {
            this._deleted = true;
            this._requests.forEach(function (request) { return request.cancel(); });
            this._requests.clear();
            return Promise.resolve();
        };
        /**
         * Returns a new firebaseStorage.Reference object referencing this StorageService
         * at the given Location.
         */
        StorageService.prototype._makeStorageReference = function (loc) {
            return new Reference(this, loc);
        };
        /**
         * @param requestInfo - HTTP RequestInfo object
         * @param authToken - Firebase auth token
         */
        StorageService.prototype._makeRequest = function (requestInfo, authToken) {
            var _this = this;
            if (!this._deleted) {
                var request_1 = makeRequest(requestInfo, this._appId, authToken, this._pool, this._firebaseVersion);
                this._requests.add(request_1);
                // Request removes itself from set when complete.
                request_1.getPromise().then(function () { return _this._requests.delete(request_1); }, function () { return _this._requests.delete(request_1); });
                return request_1;
            }
            else {
                return new FailRequest(appDeleted());
            }
        };
        return StorageService;
    }());

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Uploads data to this object's location.
     * The upload can be paused and resumed, and exposes progress updates.
     * @public
     * @param ref - StorageReference where data should be uploaded.
     * @param data - The data to upload.
     * @param metadata - Metadata for the data to upload.
     * @returns An UploadTask
     */
    function uploadBytesResumable$1(ref, data, metadata) {
        return uploadBytesResumable(ref, data, metadata);
    }
    /**
     * A promise that resolves with the metadata for this object. If this
     * object doesn't exist or metadata cannot be retreived, the promise is
     * rejected.
     * @public
     * @param ref - StorageReference to get metadata from.
     */
    function getMetadata$2(ref) {
        return getMetadata$1(ref);
    }
    /**
     * Updates the metadata for this object.
     * @public
     * @param ref - StorageReference to update metadata for.
     * @param metadata - The new metadata for the object.
     *     Only values that have been explicitly set will be changed. Explicitly
     *     setting a value to null will remove the metadata.
     * @returns A promise that resolves with the new metadata for this object.
     */
    function updateMetadata$2(ref, metadata) {
        return updateMetadata$1(ref, metadata);
    }
    /**
     * List items (files) and prefixes (folders) under this storage reference.
     *
     * List API is only available for Firebase Rules Version 2.
     *
     * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
     * delimited folder structure.
     * Refer to GCS's List API if you want to learn more.
     *
     * To adhere to Firebase Rules's Semantics, Firebase Storage does not
     * support objects whose paths end with "/" or contain two consecutive
     * "/"s. Firebase Storage List API will filter these unsupported objects.
     * list() may fail if there are too many unsupported objects in the bucket.
     * @public
     *
     * @param ref - StorageReference to get list from.
     * @param options - See ListOptions for details.
     * @returns A Promise that resolves with the items and prefixes.
     *      `prefixes` contains references to sub-folders and `items`
     *      contains references to objects in this folder. `nextPageToken`
     *      can be used to get the rest of the results.
     */
    function list$2(ref, options) {
        return list$1(ref, options);
    }
    /**
     * List all items (files) and prefixes (folders) under this storage reference.
     *
     * This is a helper method for calling list() repeatedly until there are
     * no more results. The default pagination size is 1000.
     *
     * Note: The results may not be consistent if objects are changed while this
     * operation is running.
     *
     * Warning: listAll may potentially consume too many resources if there are
     * too many results.
     * @public
     * @param ref - StorageReference to get list from.
     *
     * @returns A Promise that resolves with all the items and prefixes under
     *      the current storage reference. `prefixes` contains references to
     *      sub-directories and `items` contains references to objects in this
     *      folder. `nextPageToken` is never returned.
     */
    function listAll$1(ref) {
        return listAll(ref);
    }
    /**
     * Returns the download URL for the given Reference.
     * @public
     * @returns A promise that resolves with the download
     *     URL for this object.
     */
    function getDownloadURL$1(ref) {
        return getDownloadURL(ref);
    }
    /**
     * Deletes the object at this location.
     * @public
     * @param ref - StorageReference for object to delete.
     * @returns A promise that resolves if the deletion succeeds.
     */
    function deleteObject$2(ref) {
        return deleteObject$1(ref);
    }
    function ref$1(serviceOrRef, pathOrUrl) {
        return ref(serviceOrRef, pathOrUrl);
    }
    /**
     * @internal
     */
    function _getChild$1(ref, childPath) {
        return _getChild(ref, childPath);
    }

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var UploadTaskSnapshotCompat = /** @class */ (function () {
        function UploadTaskSnapshotCompat(_delegate, task, ref) {
            this._delegate = _delegate;
            this.task = task;
            this.ref = ref;
        }
        Object.defineProperty(UploadTaskSnapshotCompat.prototype, "bytesTransferred", {
            get: function () {
                return this._delegate.bytesTransferred;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(UploadTaskSnapshotCompat.prototype, "metadata", {
            get: function () {
                return this._delegate.metadata;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(UploadTaskSnapshotCompat.prototype, "state", {
            get: function () {
                return this._delegate.state;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(UploadTaskSnapshotCompat.prototype, "totalBytes", {
            get: function () {
                return this._delegate.totalBytes;
            },
            enumerable: false,
            configurable: true
        });
        return UploadTaskSnapshotCompat;
    }());

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var UploadTaskCompat = /** @class */ (function () {
        function UploadTaskCompat(_delegate, _ref) {
            this._delegate = _delegate;
            this._ref = _ref;
            this.cancel = this._delegate.cancel.bind(this._delegate);
            this.catch = this._delegate.catch.bind(this._delegate);
            this.pause = this._delegate.pause.bind(this._delegate);
            this.resume = this._delegate.resume.bind(this._delegate);
        }
        Object.defineProperty(UploadTaskCompat.prototype, "snapshot", {
            get: function () {
                return new UploadTaskSnapshotCompat(this._delegate.snapshot, this, this._ref);
            },
            enumerable: false,
            configurable: true
        });
        UploadTaskCompat.prototype.then = function (onFulfilled, onRejected) {
            var _this = this;
            return this._delegate.then(function (snapshot) {
                if (onFulfilled) {
                    return onFulfilled(new UploadTaskSnapshotCompat(snapshot, _this, _this._ref));
                }
            }, onRejected);
        };
        UploadTaskCompat.prototype.on = function (type, nextOrObserver, error, completed) {
            var _this = this;
            var wrappedNextOrObserver = undefined;
            if (!!nextOrObserver) {
                if (typeof nextOrObserver === 'function') {
                    wrappedNextOrObserver = function (taskSnapshot) {
                        return nextOrObserver(new UploadTaskSnapshotCompat(taskSnapshot, _this, _this._ref));
                    };
                }
                else {
                    wrappedNextOrObserver = {
                        next: !!nextOrObserver.next
                            ? function (taskSnapshot) {
                                return nextOrObserver.next(new UploadTaskSnapshotCompat(taskSnapshot, _this, _this._ref));
                            }
                            : undefined,
                        complete: nextOrObserver.complete || undefined,
                        error: nextOrObserver.error || undefined
                    };
                }
            }
            return this._delegate.on(type, wrappedNextOrObserver, error || undefined, completed || undefined);
        };
        return UploadTaskCompat;
    }());

    var ListResultCompat = /** @class */ (function () {
        function ListResultCompat(_delegate, _service) {
            this._delegate = _delegate;
            this._service = _service;
        }
        Object.defineProperty(ListResultCompat.prototype, "prefixes", {
            get: function () {
                var _this = this;
                return this._delegate.prefixes.map(function (ref) { return new ReferenceCompat(ref, _this._service); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListResultCompat.prototype, "items", {
            get: function () {
                var _this = this;
                return this._delegate.items.map(function (ref) { return new ReferenceCompat(ref, _this._service); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListResultCompat.prototype, "nextPageToken", {
            get: function () {
                return this._delegate.nextPageToken || null;
            },
            enumerable: false,
            configurable: true
        });
        return ListResultCompat;
    }());

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *  http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var ReferenceCompat = /** @class */ (function () {
        function ReferenceCompat(_delegate, storage) {
            this._delegate = _delegate;
            this.storage = storage;
        }
        Object.defineProperty(ReferenceCompat.prototype, "name", {
            get: function () {
                return this._delegate.name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReferenceCompat.prototype, "bucket", {
            get: function () {
                return this._delegate.bucket;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReferenceCompat.prototype, "fullPath", {
            get: function () {
                return this._delegate.fullPath;
            },
            enumerable: false,
            configurable: true
        });
        ReferenceCompat.prototype.toString = function () {
            return this._delegate.toString();
        };
        /**
         * @returns A reference to the object obtained by
         * appending childPath, removing any duplicate, beginning, or trailing
         * slashes.
         */
        ReferenceCompat.prototype.child = function (childPath) {
            var reference = _getChild$1(this._delegate, childPath);
            return new ReferenceCompat(reference, this.storage);
        };
        Object.defineProperty(ReferenceCompat.prototype, "root", {
            get: function () {
                return new ReferenceCompat(this._delegate.root, this.storage);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReferenceCompat.prototype, "parent", {
            /**
             * @returns A reference to the parent of the
             * current object, or null if the current object is the root.
             */
            get: function () {
                var reference = this._delegate.parent;
                if (reference == null) {
                    return null;
                }
                return new ReferenceCompat(reference, this.storage);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Uploads a blob to this object's location.
         * @param data - The blob to upload.
         * @returns An UploadTask that lets you control and
         * observe the upload.
         */
        ReferenceCompat.prototype.put = function (data, metadata) {
            this._throwIfRoot('put');
            return new UploadTaskCompat(uploadBytesResumable$1(this._delegate, data, metadata), this);
        };
        /**
         * Uploads a string to this object's location.
         * @param value - The string to upload.
         * @param format - The format of the string to upload.
         * @returns An UploadTask that lets you control and
         * observe the upload.
         */
        ReferenceCompat.prototype.putString = function (value, format, metadata) {
            if (format === void 0) { format = StringFormat.RAW; }
            this._throwIfRoot('putString');
            var data = dataFromString(format, value);
            var metadataClone = __assign({}, metadata);
            if (metadataClone['contentType'] == null && data.contentType != null) {
                metadataClone['contentType'] = data.contentType;
            }
            return new UploadTaskCompat(new UploadTask(this._delegate, new FbsBlob(data.data, true), metadataClone), this);
        };
        /**
         * List all items (files) and prefixes (folders) under this storage reference.
         *
         * This is a helper method for calling list() repeatedly until there are
         * no more results. The default pagination size is 1000.
         *
         * Note: The results may not be consistent if objects are changed while this
         * operation is running.
         *
         * Warning: listAll may potentially consume too many resources if there are
         * too many results.
         *
         * @returns A Promise that resolves with all the items and prefixes under
         *  the current storage reference. `prefixes` contains references to
         *  sub-directories and `items` contains references to objects in this
         *  folder. `nextPageToken` is never returned.
         */
        ReferenceCompat.prototype.listAll = function () {
            var _this = this;
            return listAll$1(this._delegate).then(function (r) { return new ListResultCompat(r, _this.storage); });
        };
        /**
         * List items (files) and prefixes (folders) under this storage reference.
         *
         * List API is only available for Firebase Rules Version 2.
         *
         * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
         * delimited folder structure. Refer to GCS's List API if you want to learn more.
         *
         * To adhere to Firebase Rules's Semantics, Firebase Storage does not
         * support objects whose paths end with "/" or contain two consecutive
         * "/"s. Firebase Storage List API will filter these unsupported objects.
         * list() may fail if there are too many unsupported objects in the bucket.
         *
         * @param options - See ListOptions for details.
         * @returns A Promise that resolves with the items and prefixes.
         * `prefixes` contains references to sub-folders and `items`
         * contains references to objects in this folder. `nextPageToken`
         * can be used to get the rest of the results.
         */
        ReferenceCompat.prototype.list = function (options) {
            var _this = this;
            return list$2(this._delegate, options || undefined).then(function (r) { return new ListResultCompat(r, _this.storage); });
        };
        /**
         * A promise that resolves with the metadata for this object. If this
         * object doesn't exist or metadata cannot be retreived, the promise is
         * rejected.
         */
        ReferenceCompat.prototype.getMetadata = function () {
            return getMetadata$2(this._delegate);
        };
        /**
         * Updates the metadata for this object.
         * @param metadata - The new metadata for the object.
         * Only values that have been explicitly set will be changed. Explicitly
         * setting a value to null will remove the metadata.
         * @returns A promise that resolves
         * with the new metadata for this object.
         * @see firebaseStorage.Reference.prototype.getMetadata
         */
        ReferenceCompat.prototype.updateMetadata = function (metadata) {
            return updateMetadata$2(this._delegate, metadata);
        };
        /**
         * @returns A promise that resolves with the download
         * URL for this object.
         */
        ReferenceCompat.prototype.getDownloadURL = function () {
            return getDownloadURL$1(this._delegate);
        };
        /**
         * Deletes the object at this location.
         * @returns A promise that resolves if the deletion succeeds.
         */
        ReferenceCompat.prototype.delete = function () {
            this._throwIfRoot('delete');
            return deleteObject$2(this._delegate);
        };
        ReferenceCompat.prototype._throwIfRoot = function (name) {
            if (this._delegate._location.path === '') {
                throw invalidRootOperation(name);
            }
        };
        return ReferenceCompat;
    }());

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * A service that provides firebaseStorage.Reference instances.
     * @param opt_url gs:// url to a custom Storage Bucket
     */
    var StorageServiceCompat = /** @class */ (function () {
        function StorageServiceCompat(app, _delegate) {
            var _this = this;
            this.app = app;
            this._delegate = _delegate;
            this.INTERNAL = {
                /**
                 * Called when the associated app is deleted.
                 */
                delete: function () {
                    return _this._delegate._delete();
                }
            };
        }
        Object.defineProperty(StorageServiceCompat.prototype, "maxOperationRetryTime", {
            get: function () {
                return this._delegate.maxOperationRetryTime;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StorageServiceCompat.prototype, "maxUploadRetryTime", {
            get: function () {
                return this._delegate.maxUploadRetryTime;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Returns a firebaseStorage.Reference for the given path in the default
         * bucket.
         */
        StorageServiceCompat.prototype.ref = function (path) {
            if (isUrl(path)) {
                throw invalidArgument('ref() expected a child path but got a URL, use refFromURL instead.');
            }
            return new ReferenceCompat(ref$1(this._delegate, path), this);
        };
        /**
         * Returns a firebaseStorage.Reference object for the given absolute URL,
         * which must be a gs:// or http[s]:// URL.
         */
        StorageServiceCompat.prototype.refFromURL = function (url) {
            if (!isUrl(url)) {
                throw invalidArgument('refFromURL() expected a full URL but got a child path, use ref() instead.');
            }
            try {
                Location.makeFromUrl(url);
            }
            catch (e) {
                throw invalidArgument('refFromUrl() expected a valid full URL but got an invalid one.');
            }
            return new ReferenceCompat(ref$1(this._delegate, url), this);
        };
        StorageServiceCompat.prototype.setMaxUploadRetryTime = function (time) {
            this._delegate.maxUploadRetryTime = time;
        };
        StorageServiceCompat.prototype.setMaxOperationRetryTime = function (time) {
            this._delegate.maxOperationRetryTime = time;
        };
        return StorageServiceCompat;
    }());

    var name = "@firebase/storage";
    var version = "0.4.5";

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Type constant for Firebase Storage.
     */
    var STORAGE_TYPE = 'storage';
    function factory(container, _a) {
        var url = _a.instanceIdentifier;
        // Dependencies
        // TODO: This should eventually be 'app-compat'
        var app = container.getProvider('app').getImmediate();
        var authProvider = container.getProvider('auth-internal');
        // TODO: get StorageService instance from component framework instead
        // of creating a new one.
        var storageServiceCompat = new StorageServiceCompat(app, new StorageService(app, authProvider, new XhrIoPool(), url, firebase$1.SDK_VERSION));
        return storageServiceCompat;
    }
    function registerStorage(instance) {
        var namespaceExports = {
            // no-inline
            TaskState: TaskState,
            TaskEvent: TaskEvent,
            StringFormat: StringFormat,
            Storage: StorageService,
            Reference: ReferenceCompat
        };
        instance.INTERNAL.registerComponent(new Component(STORAGE_TYPE, factory, "PUBLIC" /* PUBLIC */)
            .setServiceProps(namespaceExports)
            .setMultipleInstances(true));
        instance.registerVersion(name, version);
    }
    registerStorage(firebase$1);

    var style$1 = ":root {\n    --main-background: rgb(0, 0, 0);\n    --secondary-background: rgb(39, 39, 39);\n}\n\n.userPost {\n    width: auto;\n    margin: 0%;\n    padding: 0%;\n}\n\n.post {\n    background-color: rgb(25, 25, 25);\n    color: white;\n    margin: 5px;\n    width: fit-content;\n    padding: 5px;\n    border: 1px solid white;\n}\n\n.user {\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(40, 40, 40);\n}\n\n.user * {\n    margin: 0%;\n    padding: 0%;\n}\n\n.content p {\n    margin: 0%;\n    padding: 0%;\n}\n\n.comments[visible]{\n    display: flex;\n    flex-direction: column;\n}\n\n.comments[invisible] {\n    display: none;\n}\n\n.comments p {\n    color: white;\n}\n\n.userComment {\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(40, 40, 40);\n    margin: 7.5px;\n    padding: 7.5px;\n    border: 1px solid white;\n    width: fit-content\n}\n\n.userComment * {\n    margin: 0%;\n    padding: 0%;\n}\n\n.commentInput {\n    background-color: rgb(30, 30, 30);\n    width: fit-content;\n    word-wrap: normal;\n    margin: 8px;\n    padding: 7.5px;\n    color: white;\n}\n\n.commentInput::placeholder {\n    color: white;\n}\n\n.bind {\n    display: grid;\n    grid-template-columns: 10% 80% 10%;\n}\n\n.red {\n    color: red;\n}\n\n[invisible] {\n    display: none;\n}\n\n.userInput {\n    display: flex;\n    flex-direction: column;\n    width: fit-content;\n}\n\n.userInput input, .userInput input::placeholder, .userInput button {\n    color: white;\n}\n\n.userInput input, .userInput button {\n    background-color: transparent;\n}";

    class DBManager {
      static get(path) {
        return new Promise((resolve, reject) => {
          let posts = refer.child(path);
          posts.getDownloadURL().then((url) => {
            fetch(url).then((res) => res.text()).then((data) => {
              if (data.length <= 0)
                return;
              try {
                data = JSON.parse(data);
                resolve(data);
              } catch (e) {
                console.log(e);
              }
            });
          }).catch((error) => {
            reject(error);
          });
        });
      }
      static remove(path, posts, post) {
        for (let i = 0; i < posts.length; i++) {
          if (posts[i].name == post.name && posts[i].timestamp.toString() == post.timestamp.toString()) {
            posts.splice(i, 1);
          }
        }
        DBManager.set(path, posts);
      }
      static add(path, posts, post) {
        posts.push(post);
        DBManager.set(path, posts);
      }
      static set(path, posts) {
        if (!Array.isArray(posts))
          posts = [posts];
        refer.child(path).putString(JSON.stringify(posts, 4, null));
      }
      static approveComment(path, posts, post, comment) {
        if (!post.unauthcomments)
          post.unauthcomments = [];
        let newPost = posts.find((p) => p.name == post.name && p.timestamp.toString() == post.timestamp.toString());
        if (!newPost.comments)
          newPost.comments = [];
        newPost.comments.push(comment);
        if (post.unauthcomments)
          for (let i = 0; i < post.unauthcomments.length; i++) {
            if (post.unauthcomments[i].name == comment.name && post.unauthcomments[i].timestamp.toString() == comment.timestamp.toString())
              post.unauthcomments.splice(i, 1);
          }
        DBManager.set(path, post);
      }
      static removeComment(path, posts, post, comment) {
        if (!post.unauthcomments)
          post.unauthcomments = [];
        posts.find((p) => p.name == post.name && p.timestamp.toSTring() == post.timestamp.toString());
        if (post.unauthcomments)
          for (let i = 0; i < post.unauthcomments.length; i++) {
            if (post.unauthcomments[i].name == comment.name && post.unauthcomments[i].timestamp.toString() == comment.timestamp.toString())
              post.unauthcomments.splice(i, 1);
          }
        DBManager.set(path, posts);
      }
    }

    var __defProp$2 = Object.defineProperty;
    var __publicField$2 = (obj, key, value) => {
      if (typeof key !== "symbol")
        key += "";
      if (key in obj)
        return __defProp$2(obj, key, {enumerable: true, configurable: true, writable: true, value});
      return obj[key] = value;
    };
    class ForumPost extends I {
      constructor() {
        super(...arguments);
        __publicField$2(this, "refer", firebase$1.storage().ref());
        __publicField$2(this, "exit", new Event("exit"));
        __publicField$2(this, "finished", new Event("finished"));
        __publicField$2(this, "authorized", new Event("authorized"));
        __publicField$2(this, "delete", new Event("delete"));
        __publicField$2(this, "state", {
          mode: "main"
        });
      }
      render({post, active, type = "regular"}) {
        this.post = post;
        if (type == "catalog")
          return L`
            <div class="userInput">
                <input id="nameForPost" placeholder="Name for Post" />
                <input type="text" placeholder="Enter content" id="contentForPost" />
                <button onclick=${() => {
        this.finished.post = {
          name: this.root.querySelector("#nameForPost").value,
          content: this.root.querySelector("#contentForPost").value
        };
        this.dispatchEvent(this.finished);
      }}>Send</button>
            </div>
            `;
        if (!post)
          post = {name: "Template", timestamp: new Date(), content: "Template Message"};
        return L`
            <div class="userPost">
                <div class="post">
                    <div class="user">
                        <div class="bind">
                            <h2>${post.name}</h2>
                            <span> </span>
                            <h2 ${active ? "visible" : "invisible"} class="red" onclick=${() => this.dispatchEvent(this.exit)}>X
                            </h2>
                        </div>
                        <p>${new Date(post.timestamp).toUTCString()}</p>
                        <button ${this.props.staff == "authorized" ? "visible" : "invisible"} onclick=${() => this.dispatchEvent(this.delete)}>Delete</button>
                    </div>
                    <div class="content">
                        <p>${active ? post.content : post.shortDescription || post.content ? post.content.substr(0, 20) + "..." : "No description"}</p>
                        ${active ? this.authorize() : ""}
                    </div>
                </div>
            </div>
            <div ${active ? "visible" : "invisible"} class="comments">
                ${this.sortPosts(post)}
            </div>
        `;
      }
      setMode(mode) {
        this.state.mode = mode;
      }
      sortPosts(post) {
        if (!post.unauthcomments)
          post.unauthcomments = [];
        return L`
            ${post.comments ? post.comments.map((c) => this.renderComment(c)) : ""}
            <div>-----</div>
            ${this.props.staff == "authorized" ? post.unauthcomments ? post.unauthcomments.map((c) => this.renderComment(c, "auth")) : "" : ""}
            ${this.getNewCommentInput()}
        `;
      }
      authorize() {
        let mode = this.props.staff;
        if (mode != "") {
          return L`
                <div class="auth">
                    <button onclick=${() => {
        this.authorized.toggle = false;
        this.dispatchEvent(this.authorized);
      }}>Deny</button>
                    <button onclick=${() => {
        this.authorized.toggle = true;
        this.dispatchEvent(this.authorized);
      }}>Authorize</button>
                </div>
            `;
        }
      }
      checkDelete() {
        let mode = this.props.staff;
        if (mode != "") {
          return L`
                <div class="delete">
                    <button onclick=${() => {
        this.delete.toggle = true;
        this.dispatchEvent(this.delete);
      }}>Delete</button>
                </div>
            `;
        }
      }
      renderComment(comment, auth) {
        return L`
            <div class="userComment">
                <p>${new Date(comment.timestamp).toUTCString()}</p>
                <p>${comment.content}</p>
                <div ${auth == "auth" ? "visible" : "invisible"} class="buttons">
                    <button onclick=${() => DBManager.removeComment("queueMessages.json", this.props.posts, this.post, comment)}>Deny</button>
                    <button onclick=${() => DBManager.approveComment("messages.json", this.props.posts, this.post, comment)}>Approve</button>
                </div>
            </div>
        `;
      }
      getNewCommentInput() {
        return L`
            <input class="commentInput" id="newComment" placeholder="Enter comment" onchange=${() => this.onInput()} />
        `;
      }
      onInput() {
        this.props.posts.find((p) => p == this.props.post).unauthcomments = this.props.posts.find((p) => p == this.props.post).unauthcomments || [];
        this.props.posts.find((p) => p == this.props.post).unauthcomments.push({
          timestamp: new Date(),
          content: this.root.querySelector("#newComment").value
        });
        DBManager.set("queueMessages.json", this.props.posts);
      }
    }
    I.create({name: "forum-post", styles: [style$1]}, ForumPost);

    var __defProp$1 = Object.defineProperty;
    var __publicField$1 = (obj, key, value) => {
      if (typeof key !== "symbol")
        key += "";
      if (key in obj)
        return __defProp$1(obj, key, {enumerable: true, configurable: true, writable: true, value});
      return obj[key] = value;
    };
    class PostDisplay extends I {
      constructor() {
        super(...arguments);
        __publicField$1(this, "mode", "regular");
        __publicField$1(this, "state", {
          activePost: {name: "Template", timestamp: new Date(), content: "Template Message"},
          posts: [],
          secondPosts: [],
          user: "",
          mode: "main"
        });
      }
      render() {
        let staff = "";
        if (this.state.user != "")
          staff = "authorized";
        return L`
        <div class="switcher">
            <button ${staff == "authorized" ? "" : "invisible"} onclick=${() => {
      this.state.mode = this.state.mode == "main" ? "backend" : "main";
      this.getPosts();
    }}>Switch to ${this.state.mode == "main" ? "Backend" : "Main"}</button>
        </div>
        <div ${this.state.activePost.name != "Template" ? "" : "inactive"} id="display-post">
            <forum-post id="main" ondelete=${() => DBManager.remove(this.state.mode == "main" ? "messages.json" : "queueMessages.json", this.state.posts, this.state.activePost)} staff=${staff} onauthorized=${(e) => this.authorizePost(e)} posts=${this.state.posts} active="true" post=${this.state.activePost} onexit=${() => this.state.activePost = {name: "Template", timestamp: new Date(), content: "Template Message"}} />
        </div>
        <div ${this.state.activePost.name != "Template" ? "inactive" : ""} id="display-posts">
            ${this.createCatalog()}
        </div>
        `;
      }
      getPosts(path, callback) {
        DBManager.get(`${path || this.state.mode == "main" ? "messages.json" : "queueMessages.json"}`).then((posts) => {
          this.state.posts = posts;
          if (callback)
            callback(posts);
        });
      }
      mount() {
        this.getPosts();
      }
      onUpdate() {
        this.root.querySelector("#main").setMode(this.state.mode);
      }
      setUser(user) {
        this.state.user = user;
      }
      createCatalog() {
        return L`
            <div class="megaPosts">
                ${this.state.posts.map((p) => this.createPost(p))}
            </div>
            <forum-post type="catalog" onfinished=${(post) => this.finish(post)} />
        `;
      }
      finish(post) {
        post = post.post;
        post.timestamp = new Date();
        DBManager.add("queueMessages.json", this.state.posts, post);
      }
      authorizePost(e) {
        if (e.toggle == true) {
          this.getPosts("messages.json", (posts) => {
            DBManager.add("messages.json", posts, this.state.activePost);
          });
          this.getPosts("queueMessages.json", (posts) => {
            DBManager.remove("queueMessages.json", posts, this.state.activePost);
          });
        } else {
          DBManager.remove("queueMessages.json", this.state.posts, this.state.activePost);
        }
      }
      createPost(post) {
        return L`
            <forum-post onclick=${() => this.state.activePost = post} post=${post} />
        `;
      }
    }
    I.create({name: "post-display", styles: [style$2]}, PostDisplay);

    (function() {/*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var k,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value);};function ba(a){a=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}return globalThis}var ca=ba(this);
    function da(a,b){if(b){var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e];}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b});}}function ea(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function fa(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ea(a)}}
    da("Promise",function(a){function b(g){this.b=0;this.c=void 0;this.a=[];var h=this.f();try{g(h.resolve,h.reject);}catch(m){h.reject(m);}}function c(){this.a=null;}function d(g){return g instanceof b?g:new b(function(h){h(g);})}if(a)return a;c.prototype.b=function(g){if(null==this.a){this.a=[];var h=this;this.c(function(){h.g();});}this.a.push(g);};var e=ca.setTimeout;c.prototype.c=function(g){e(g,0);};c.prototype.g=function(){for(;this.a&&this.a.length;){var g=this.a;this.a=[];for(var h=0;h<g.length;++h){var m=
    g[h];g[h]=null;try{m();}catch(p){this.f(p);}}}this.a=null;};c.prototype.f=function(g){this.c(function(){throw g;});};b.prototype.f=function(){function g(p){return function(v){m||(m=!0,p.call(h,v));}}var h=this,m=!1;return {resolve:g(this.m),reject:g(this.g)}};b.prototype.m=function(g){if(g===this)this.g(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.s(g);else {a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1;}h?this.v(g):this.h(g);}};
    b.prototype.v=function(g){var h=void 0;try{h=g.then;}catch(m){this.g(m);return}"function"==typeof h?this.u(h,g):this.h(g);};b.prototype.g=function(g){this.i(2,g);};b.prototype.h=function(g){this.i(1,g);};b.prototype.i=function(g,h){if(0!=this.b)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.b);this.b=g;this.c=h;this.l();};b.prototype.l=function(){if(null!=this.a){for(var g=0;g<this.a.length;++g)f.b(this.a[g]);this.a=null;}};var f=new c;b.prototype.s=function(g){var h=this.f();
    g.Qa(h.resolve,h.reject);};b.prototype.u=function(g,h){var m=this.f();try{g.call(h,m.resolve,m.reject);}catch(p){m.reject(p);}};b.prototype.then=function(g,h){function m(A,Q){return "function"==typeof A?function(ya){try{p(A(ya));}catch(Ad){v(Ad);}}:Q}var p,v,B=new b(function(A,Q){p=A;v=Q;});this.Qa(m(g,p),m(h,v));return B};b.prototype.catch=function(g){return this.then(void 0,g)};b.prototype.Qa=function(g,h){function m(){switch(p.b){case 1:g(p.c);break;case 2:h(p.c);break;default:throw Error("Unexpected state: "+
    p.b);}}var p=this;null==this.a?f.b(m):this.a.push(m);};b.resolve=d;b.reject=function(g){return new b(function(h,m){m(g);})};b.race=function(g){return new b(function(h,m){for(var p=fa(g),v=p.next();!v.done;v=p.next())d(v.value).Qa(h,m);})};b.all=function(g){var h=fa(g),m=h.next();return m.done?d([]):new b(function(p,v){function B(ya){return function(Ad){A[ya]=Ad;Q--;0==Q&&p(A);}}var A=[],Q=0;do A.push(void 0),Q++,d(m.value).Qa(B(A.length-1),v),m=h.next();while(!m.done)})};return b});
    var ha=ha||{},l=this||self,ia=/^[\w+/_-]+[=]{0,2}$/,ja=null;function ka(a){return (a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&ia.test(a)?a:""}function la(){}function ma(a){var b=typeof a;return "object"!=b?b:a?Array.isArray(a)?"array":b:"null"}function na(a){var b=ma(a);return "array"==b||"object"==b&&"number"==typeof a.length}function oa(a){return "function"==ma(a)}function n(a){var b=typeof a;return "object"==b&&null!=a||"function"==b}
    function pa(a){return Object.prototype.hasOwnProperty.call(a,qa)&&a[qa]||(a[qa]=++ra)}var qa="closure_uid_"+(1E9*Math.random()>>>0),ra=0;function sa(a,b,c){return a.call.apply(a.bind,arguments)}function ta(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
    function q(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?q=sa:q=ta;return q.apply(null,arguments)}function ua(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}var va=Date.now;function r(a,b){function c(){}c.prototype=b.prototype;a.ab=b.prototype;a.prototype=new c;a.prototype.constructor=a;}function wa(a){return a}function t(a,b,c){this.code=xa+a;this.message=b||za[a]||"";this.a=c||null;}r(t,Error);t.prototype.w=function(){var a={code:this.code,message:this.message};this.a&&(a.serverResponse=this.a);return a};t.prototype.toJSON=function(){return this.w()};function Aa(a){var b=a&&a.code;return b?new t(b.substring(xa.length),a.message,a.serverResponse):null}
    var xa="auth/",za={"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
    "captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.",
    "requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.",
    "internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal error has occurred.",
    "invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
    "invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.",
    "invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.",
    "unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
    "invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.",
    "multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
    "missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
    "missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
    "no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
    "popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.",
    "rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.",
    "too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.",
    "unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.",
    "web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."};/*

     Copyright 2017 Google LLC

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    var Ba={ld:{Ta:"https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",Za:"https://staging-securetoken.sandbox.googleapis.com/v1/token",Wa:"https://staging-identitytoolkit.sandbox.googleapis.com/v2/",id:"b"},sd:{Ta:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",Za:"https://securetoken.googleapis.com/v1/token",Wa:"https://identitytoolkit.googleapis.com/v2/",id:"p"},ud:{Ta:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
    Za:"https://staging-securetoken.sandbox.googleapis.com/v1/token",Wa:"https://staging-identitytoolkit.sandbox.googleapis.com/v2/",id:"s"},vd:{Ta:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",Za:"https://test-securetoken.sandbox.googleapis.com/v1/token",Wa:"https://test-identitytoolkit.sandbox.googleapis.com/v2/",id:"t"}};
    function Ca(a){for(var b in Ba)if(Ba[b].id===a)return a=Ba[b],{firebaseEndpoint:a.Ta,secureTokenEndpoint:a.Za,identityPlatformEndpoint:a.Wa};return null}var Da;Da=Ca("__EID__")?"__EID__":void 0;function Ea(a){if(!a)return !1;try{return !!a.$goog_Thenable}catch(b){return !1}}function u(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else {var b=Error().stack;b&&(this.stack=b);}a&&(this.message=String(a));}r(u,Error);u.prototype.name="CustomError";function Fa(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");u.call(this,c+a[d]);}r(Fa,u);Fa.prototype.name="AssertionError";function Ga(a,b){throw new Fa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));}function Ha(a,b){this.c=a;this.f=b;this.b=0;this.a=null;}Ha.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null;}else a=this.c();return a};function Ia(a,b){a.f(b);100>a.b&&(a.b++,b.next=a.a,a.a=b);}function Ja(){this.b=this.a=null;}var La=new Ha(function(){return new Ka},function(a){a.reset();});Ja.prototype.add=function(a,b){var c=La.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c;};function Ma(){var a=Na,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b}function Ka(){this.next=this.b=this.a=null;}Ka.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null;};Ka.prototype.reset=function(){this.next=this.b=this.a=null;};var Oa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return "string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return -1},w=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c);}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a);};
    function Pa(a,b){for(var c="string"===typeof a?a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a);}
    var Qa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];b.call(void 0,h,g,a)&&(d[e++]=h);}return d},Ra=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d},Sa=Array.prototype.some?function(a,
    b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return !0;return !1};function Ta(a){a:{var b=Ua;for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1;}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}function Va(a,b){return 0<=Oa(a,b)}
    function Wa(a,b){b=Oa(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}function Xa(a,b){var c=0;Pa(a,function(d,e){b.call(void 0,d,e,a)&&1==Array.prototype.splice.call(a,e,1).length&&c++;});}function Ya(a){return Array.prototype.concat.apply([],arguments)}function Za(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return []}var $a=String.prototype.trim?function(a){return a.trim()}:function(a){return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},ab=/&/g,bb=/</g,cb=/>/g,db=/"/g,eb=/'/g,fb=/\x00/g,gb=/[\x00&<>"']/;function x(a,b){return -1!=a.indexOf(b)}function hb(a,b){return a<b?-1:a>b?1:0}var ib;a:{var jb=l.navigator;if(jb){var kb=jb.userAgent;if(kb){ib=kb;break a}}ib="";}function y(a){return x(ib,a)}function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a);}function mb(a){for(var b in a)return !1;return !0}function nb(a){var b={},c;for(c in a)b[c]=a[c];return b}var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function z(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c]);}}function pb(a,b){a:{try{var c=a&&a.ownerDocument,d=c&&(c.defaultView||c.parentWindow);d=d||l;if(d.Element&&d.Location){var e=d;break a}}catch(g){}e=null;}if(e&&"undefined"!=typeof e[b]&&(!a||!(a instanceof e[b])&&(a instanceof e.Location||a instanceof e.Element))){if(n(a))try{var f=a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a);}catch(g){f="<object could not be stringified>";}else f=void 0===a?"undefined":null===a?"null":typeof a;Ga("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
    b,f);}}function qb(a,b){this.a=a===rb&&b||"";this.b=sb;}qb.prototype.sa=!0;qb.prototype.ra=function(){return this.a};qb.prototype.toString=function(){return "Const{"+this.a+"}"};function tb(a){if(a instanceof qb&&a.constructor===qb&&a.b===sb)return a.a;Ga("expected object of type Const, got '"+a+"'");return "type_error:Const"}var sb={},rb={};var ub;function vb(){if(void 0===ub){var a=null,b=l.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:wa,createScript:wa,createScriptURL:wa});}catch(c){l.console&&l.console.error(c.message);}ub=a;}else ub=a;}return ub}function wb(a,b){this.a=b===xb?a:"";}wb.prototype.sa=!0;wb.prototype.ra=function(){return this.a.toString()};wb.prototype.toString=function(){return "TrustedResourceUrl{"+this.a+"}"};function yb(a){if(a instanceof wb&&a.constructor===wb)return a.a;Ga("expected object of type TrustedResourceUrl, got '"+a+"' of type "+ma(a));return "type_error:TrustedResourceUrl"}
    function zb(a,b){var c=tb(a);if(!Ab.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);a=c.replace(Bb,function(d,e){if(!Object.prototype.hasOwnProperty.call(b,e))throw Error('Found marker, "'+e+'", in format string, "'+c+'", but no valid label mapping found in args: '+JSON.stringify(b));d=b[e];return d instanceof qb?tb(d):encodeURIComponent(String(d))});return Cb(a)}var Bb=/%{(\w+)}/g,Ab=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,xb={};
    function Cb(a){var b=vb();a=b?b.createScriptURL(a):a;return new wb(a,xb)}function C(a,b){this.a=b===Db?a:"";}C.prototype.sa=!0;C.prototype.ra=function(){return this.a.toString()};C.prototype.toString=function(){return "SafeUrl{"+this.a+"}"};function Eb(a){if(a instanceof C&&a.constructor===C)return a.a;Ga("expected object of type SafeUrl, got '"+a+"' of type "+ma(a));return "type_error:SafeUrl"}
    var Fb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Gb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Hb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    function Ib(a){if(a instanceof C)return a;a="object"==typeof a&&a.sa?a.ra():String(a);if(Hb.test(a))a=new C(a,Db);else {a=String(a);a=a.replace(/(%0A|%0D)/g,"");var b=a.match(Gb);a=b&&Fb.test(b[1])?new C(a,Db):null;}return a}function Jb(a){if(a instanceof C)return a;a="object"==typeof a&&a.sa?a.ra():String(a);Hb.test(a)||(a="about:invalid#zClosurez");return new C(a,Db)}var Db={},Kb=new C("about:invalid#zClosurez",Db);function Lb(a,b,c){this.a=c===Mb?a:"";}Lb.prototype.sa=!0;Lb.prototype.ra=function(){return this.a.toString()};Lb.prototype.toString=function(){return "SafeHtml{"+this.a+"}"};function Nb(a){if(a instanceof Lb&&a.constructor===Lb)return a.a;Ga("expected object of type SafeHtml, got '"+a+"' of type "+ma(a));return "type_error:SafeHtml"}var Mb={};function Ob(a,b){pb(a,"HTMLScriptElement");a.src=yb(b);(b=a.ownerDocument&&a.ownerDocument.defaultView)&&b!=l?b=ka(b.document):(null===ja&&(ja=ka(l.document)),b=ja);b&&a.setAttribute("nonce",b);}function Pb(a,b,c,d){a=a instanceof C?a:Jb(a);b=b||l;c=c instanceof qb?tb(c):c||"";return b.open(Eb(a),c,d,void 0)}function Qb(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}function Rb(a){gb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(ab,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(bb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(cb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(db,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(eb,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(fb,"&#0;")));return a}function Sb(a){Sb[" "](a);return a}Sb[" "]=la;function Tb(a,b){var c=Ub;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}var Vb=y("Opera"),Wb=y("Trident")||y("MSIE"),Xb=y("Edge"),Yb=Xb||Wb,Zb=y("Gecko")&&!(x(ib.toLowerCase(),"webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),$b=x(ib.toLowerCase(),"webkit")&&!y("Edge");function ac(){var a=l.document;return a?a.documentMode:void 0}var bc;
    a:{var cc="",dc=function(){var a=ib;if(Zb)return /rv:([^\);]+)(\)|;)/.exec(a);if(Xb)return /Edge\/([\d\.]+)/.exec(a);if(Wb)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if($b)return /WebKit\/(\S+)/.exec(a);if(Vb)return /(?:Version)[ \/]?(\S+)/.exec(a)}();dc&&(cc=dc?dc[1]:"");if(Wb){var ec=ac();if(null!=ec&&ec>parseFloat(cc)){bc=String(ec);break a}}bc=cc;}var Ub={};
    function fc(a){return Tb(a,function(){for(var b=0,c=$a(String(bc)).split("."),d=$a(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=hb(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||hb(0==g[2].length,0==h[2].length)||hb(g[2],h[2]);g=g[3];h=h[3];}while(0==b)}return 0<=b})}var gc;
    if(l.document&&Wb){var hc=ac();gc=hc?hc:parseInt(bc,10)||void 0;}else gc=void 0;var ic=gc;try{(new self.OffscreenCanvas(0,0)).getContext("2d");}catch(a){}var jc=!Wb||9<=Number(ic);function kc(a){var b=document;return "string"===typeof a?b.getElementById(a):a}function lc(a,b){lb(b,function(c,d){c&&"object"==typeof c&&c.sa&&(c=c.ra());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:mc.hasOwnProperty(d)?a.setAttribute(mc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c;});}
    var mc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
    function nc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!jc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Rb(g.name),'"');if(g.type){f.push(' type="',Rb(g.type),'"');var h={};z(h,g);delete h.type;g=h;}f.push(">");f=f.join("");}f=oc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):lc(f,g));2<d.length&&pc(e,f,d);return f}
    function pc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h);}for(var e=2;e<c.length;e++){var f=c[e];if(!na(f)||n(f)&&0<f.nodeType)d(f);else {a:{if(f&&"number"==typeof f.length){if(n(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if(oa(f)){g="function"==typeof f.item;break a}}g=!1;}w(g?Za(f):f,d);}}}function oc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}function qc(a){l.setTimeout(function(){throw a;},0);}var rc;
    function sc(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!y("Presto")&&(a=function(){var e=oc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=q(function(m){if(("*"==h||m.origin==h)&&m.data==g)this.port1.onmessage();},this);
    f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h);}};});if("undefined"!==typeof a&&!y("Trident")&&!y("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Gb;c.Gb=null;e();}};return function(e){d.next={Gb:e};d=d.next;b.port2.postMessage(0);}}return function(e){l.setTimeout(e,0);}}function tc(a,b){uc||vc();wc||(uc(),wc=!0);Na.add(a,b);}var uc;function vc(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);uc=function(){a.then(xc);};}else uc=function(){var b=xc;!oa(l.setImmediate)||l.Window&&l.Window.prototype&&!y("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(rc||(rc=sc()),rc(b)):l.setImmediate(b);};}var wc=!1,Na=new Ja;function xc(){for(var a;a=Ma();){try{a.a.call(a.b);}catch(b){qc(b);}Ia(La,a);}wc=!1;}function D(a,b){this.a=yc;this.i=void 0;this.f=this.b=this.c=null;this.g=this.h=!1;if(a!=la)try{var c=this;a.call(b,function(d){zc(c,Ac,d);},function(d){if(!(d instanceof Bc))try{if(d instanceof Error)throw d;throw Error("Promise rejected.");}catch(e){}zc(c,Cc,d);});}catch(d){zc(this,Cc,d);}}var yc=0,Ac=2,Cc=3;function Dc(){this.next=this.f=this.b=this.g=this.a=null;this.c=!1;}Dc.prototype.reset=function(){this.f=this.b=this.g=this.a=null;this.c=!1;};var Ec=new Ha(function(){return new Dc},function(a){a.reset();});
    function Fc(a,b,c){var d=Ec.get();d.g=a;d.b=b;d.f=c;return d}function E(a){if(a instanceof D)return a;var b=new D(la);zc(b,Ac,a);return b}function F(a){return new D(function(b,c){c(a);})}function Gc(a,b,c){Hc(a,b,c,null)||tc(ua(b,a));}function Ic(a){return new D(function(b,c){var d=a.length,e=[];if(d)for(var f=function(p,v){d--;e[p]=v;0==d&&b(e);},g=function(p){c(p);},h=0,m;h<a.length;h++)m=a[h],Gc(m,ua(f,h),g);else b(e);})}
    function Jc(a){return new D(function(b){var c=a.length,d=[];if(c)for(var e=function(h,m,p){c--;d[h]=m?{Pb:!0,value:p}:{Pb:!1,reason:p};0==c&&b(d);},f=0,g;f<a.length;f++)g=a[f],Gc(g,ua(e,f,!0),ua(e,f,!1));else b(d);})}D.prototype.then=function(a,b,c){return Kc(this,oa(a)?a:null,oa(b)?b:null,c)};D.prototype.$goog_Thenable=!0;k=D.prototype;k.oa=function(a,b){a=Fc(a,a,b);a.c=!0;Lc(this,a);return this};k.o=function(a,b){return Kc(this,null,a,b)};
    k.cancel=function(a){if(this.a==yc){var b=new Bc(a);tc(function(){Mc(this,b);},this);}};function Mc(a,b){if(a.a==yc)if(a.c){var c=a.c;if(c.b){for(var d=0,e=null,f=null,g=c.b;g&&(g.c||(d++,g.a==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(c.a==yc&&1==d?Mc(c,b):(f?(d=f,d.next==c.f&&(c.f=d),d.next=d.next.next):Nc(c),Oc(c,e,Cc,b)));}a.c=null;}else zc(a,Cc,b);}function Lc(a,b){a.b||a.a!=Ac&&a.a!=Cc||Pc(a);a.f?a.f.next=b:a.b=b;a.f=b;}
    function Kc(a,b,c,d){var e=Fc(null,null,null);e.a=new D(function(f,g){e.g=b?function(h){try{var m=b.call(d,h);f(m);}catch(p){g(p);}}:f;e.b=c?function(h){try{var m=c.call(d,h);void 0===m&&h instanceof Bc?g(h):f(m);}catch(p){g(p);}}:g;});e.a.c=a;Lc(a,e);return e.a}k.$c=function(a){this.a=yc;zc(this,Ac,a);};k.ad=function(a){this.a=yc;zc(this,Cc,a);};
    function zc(a,b,c){a.a==yc&&(a===c&&(b=Cc,c=new TypeError("Promise cannot resolve to itself")),a.a=1,Hc(c,a.$c,a.ad,a)||(a.i=c,a.a=b,a.c=null,Pc(a),b!=Cc||c instanceof Bc||Qc(a,c)));}function Hc(a,b,c,d){if(a instanceof D)return Lc(a,Fc(b||la,c||null,d)),!0;if(Ea(a))return a.then(b,c,d),!0;if(n(a))try{var e=a.then;if(oa(e))return Rc(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return !1}
    function Rc(a,b,c,d,e){function f(m){h||(h=!0,d.call(e,m));}function g(m){h||(h=!0,c.call(e,m));}var h=!1;try{b.call(a,g,f);}catch(m){f(m);}}function Pc(a){a.h||(a.h=!0,tc(a.gc,a));}function Nc(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.f=null);return b}k.gc=function(){for(var a;a=Nc(this);)Oc(this,a,this.a,this.i);this.h=!1;};
    function Oc(a,b,c,d){if(c==Cc&&b.b&&!b.c)for(;a&&a.g;a=a.c)a.g=!1;if(b.a)b.a.c=null,Sc(b,c,d);else try{b.c?b.g.call(b.f):Sc(b,c,d);}catch(e){Tc.call(null,e);}Ia(Ec,b);}function Sc(a,b,c){b==Ac?a.g.call(a.f,c):a.b&&a.b.call(a.f,c);}function Qc(a,b){a.g=!0;tc(function(){a.g&&Tc.call(null,b);});}var Tc=qc;function Bc(a){u.call(this,a);}r(Bc,u);Bc.prototype.name="cancel";function Uc(){this.xa=this.xa;this.pa=this.pa;}var Vc=0;Uc.prototype.xa=!1;function Xc(a){if(!a.xa&&(a.xa=!0,a.Da(),0!=Vc)){pa(a);}}Uc.prototype.Da=function(){if(this.pa)for(;this.pa.length;)this.pa.shift()();};var Yc=Object.freeze||function(a){return a};var Zc=!Wb||9<=Number(ic),$c=Wb&&!fc("9"),ad=function(){if(!l.addEventListener||!Object.defineProperty)return !1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0;}});try{l.addEventListener("test",la,b),l.removeEventListener("test",la,b);}catch(c){}return a}();function G(a,b){this.type=a;this.b=this.target=b;this.defaultPrevented=!1;}G.prototype.preventDefault=function(){this.defaultPrevented=!0;};function bd(a,b){G.call(this,a?a.type:"");this.relatedTarget=this.b=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.a=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.b=b;if(b=a.relatedTarget){if(Zb){a:{try{Sb(b.nodeName);var e=!0;break a}catch(f){}e=!1;}e||(b=null);}}else "mouseover"==
    c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
    a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:cd[a.pointerType]||"";this.a=a;a.defaultPrevented&&this.preventDefault();}}r(bd,G);var cd=Yc({2:"touch",3:"pen",4:"mouse"});bd.prototype.preventDefault=function(){bd.ab.preventDefault.call(this);var a=this.a;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,$c)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1;}catch(b){}};bd.prototype.g=function(){return this.a};var dd="closure_listenable_"+(1E6*Math.random()|0),ed=0;function fd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Va=e;this.key=++ed;this.va=this.Pa=!1;}function gd(a){a.va=!0;a.listener=null;a.proxy=null;a.src=null;a.Va=null;}function hd(a){this.src=a;this.a={};this.b=0;}hd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var g=id(a,b,d,e);-1<g?(b=a[g],c||(b.Pa=!1)):(b=new fd(b,this.src,f,!!d,e),b.Pa=c,a.push(b));return b};function jd(a,b){var c=b.type;c in a.a&&Wa(a.a[c],b)&&(gd(b),0==a.a[c].length&&(delete a.a[c],a.b--));}function id(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.va&&f.listener==b&&f.capture==!!c&&f.Va==d)return e}return -1}var kd="closure_lm_"+(1E6*Math.random()|0),ld={};function nd(a,b,c,d,e){if(d&&d.once)od(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)nd(a,b[f],c,d,e);else c=pd(c),a&&a[dd]?qd(a,b,c,n(d)?!!d.capture:!!d,e):rd(a,b,c,!1,d,e);}
    function rd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=n(e)?!!e.capture:!!e,h=sd(a);h||(a[kd]=h=new hd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=td();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ad||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ud(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");}}
    function td(){var a=vd,b=Zc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function od(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)od(a,b[f],c,d,e);else c=pd(c),a&&a[dd]?wd(a,b,c,n(d)?!!d.capture:!!d,e):rd(a,b,c,!0,d,e);}
    function xd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)xd(a,b[f],c,d,e);else (d=n(d)?!!d.capture:!!d,c=pd(c),a&&a[dd])?(a=a.v,b=String(b).toString(),b in a.a&&(f=a.a[b],c=id(f,c,d,e),-1<c&&(gd(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=sd(a))&&(b=a.a[b.toString()],a=-1,b&&(a=id(b,c,d,e)),(c=-1<a?b[a]:null)&&yd(c));}
    function yd(a){if("number"!==typeof a&&a&&!a.va){var b=a.src;if(b&&b[dd])jd(b.v,a);else {var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ud(c),d):b.addListener&&b.removeListener&&b.removeListener(d);(c=sd(b))?(jd(c,a),0==c.b&&(c.src=null,b[kd]=null)):gd(a);}}}function ud(a){return a in ld?ld[a]:ld[a]="on"+a}
    function zd(a,b,c,d){var e=!0;if(a=sd(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.va&&(f=Bd(f,d),e=e&&!1!==f);}return e}function Bd(a,b){var c=a.listener,d=a.Va||a.src;a.Pa&&yd(a);return c.call(d,b)}
    function vd(a,b){if(a.va)return !0;if(!Zc){if(!b)a:{b=["window","event"];for(var c=l,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c;}d=b;b=new bd(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0;}if(e||void 0==d.returnValue)d.returnValue=!0;}d=[];for(e=b.b;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;0<=e;e--){b.b=d[e];var f=zd(d[e],a,!0,b);c=c&&f;}for(e=0;e<d.length;e++)b.b=d[e],f=zd(d[e],a,!1,b),c=c&&f;}return c}return Bd(a,
    new bd(b,this))}function sd(a){a=a[kd];return a instanceof hd?a:null}var Cd="__closure_events_fn_"+(1E9*Math.random()>>>0);function pd(a){if(oa(a))return a;a[Cd]||(a[Cd]=function(b){return a.handleEvent(b)});return a[Cd]}function H(){Uc.call(this);this.v=new hd(this);this.ac=this;this.gb=null;}r(H,Uc);H.prototype[dd]=!0;H.prototype.addEventListener=function(a,b,c,d){nd(this,a,b,c,d);};H.prototype.removeEventListener=function(a,b,c,d){xd(this,a,b,c,d);};
    H.prototype.dispatchEvent=function(a){var b,c=this.gb;if(c)for(b=[];c;c=c.gb)b.push(c);c=this.ac;var d=a.type||a;if("string"===typeof a)a=new G(a,c);else if(a instanceof G)a.target=a.target||c;else {var e=a;a=new G(d,c);z(a,e);}e=!0;if(b)for(var f=b.length-1;0<=f;f--){var g=a.b=b[f];e=Dd(g,d,!0,a)&&e;}g=a.b=c;e=Dd(g,d,!0,a)&&e;e=Dd(g,d,!1,a)&&e;if(b)for(f=0;f<b.length;f++)g=a.b=b[f],e=Dd(g,d,!1,a)&&e;return e};
    H.prototype.Da=function(){H.ab.Da.call(this);if(this.v){var a=this.v,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)gd(d[e]);delete a.a[c];a.b--;}}this.gb=null;};function qd(a,b,c,d,e){a.v.add(String(b),c,!1,d,e);}function wd(a,b,c,d,e){a.v.add(String(b),c,!0,d,e);}
    function Dd(a,b,c,d){b=a.v.a[String(b)];if(!b)return !0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.va&&g.capture==c){var h=g.listener,m=g.Va||g.src;g.Pa&&jd(a.v,g);e=!1!==h.call(m,d)&&e;}}return e&&!d.defaultPrevented}function Ed(a,b,c){if(oa(a))c&&(a=q(a,c));else if(a&&"function"==typeof a.handleEvent)a=q(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)}function Fd(a){var b=null;return (new D(function(c,d){b=Ed(function(){c(void 0);},a);-1==b&&d(Error("Failed to schedule timer."));})).o(function(c){l.clearTimeout(b);throw c;})}function Gd(a){if(a.W&&"function"==typeof a.W)return a.W();if("string"===typeof a)return a.split("");if(na(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b}function Hd(a){if(a.Y&&"function"==typeof a.Y)return a.Y();if(!a.W||"function"!=typeof a.W){if(na(a)||"string"===typeof a){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(var d in a)b[c++]=d;return b}}
    function Id(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(na(a)||"string"===typeof a)w(a,b,void 0);else for(var c=Hd(a),d=Gd(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a);}function Jd(a,b){this.b={};this.a=[];this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1]);}else if(a)if(a instanceof Jd)for(c=a.Y(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d]);}k=Jd.prototype;k.W=function(){Kd(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};k.Y=function(){Kd(this);return this.a.concat()};
    k.clear=function(){this.b={};this.c=this.a.length=0;};function Kd(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Ld(a.b,d)&&(a.a[c++]=d);b++;}a.a.length=c;}if(a.c!=a.a.length){var e={};for(c=b=0;b<a.a.length;)d=a.a[b],Ld(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c;}}k.get=function(a,b){return Ld(this.b,a)?this.b[a]:b};k.set=function(a,b){Ld(this.b,a)||(this.c++,this.a.push(a));this.b[a]=b;};
    k.forEach=function(a,b){for(var c=this.Y(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this);}};function Ld(a,b){return Object.prototype.hasOwnProperty.call(a,b)}var Md=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Nd(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1);}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"");}}}function Od(a,b){this.a=this.l=this.c="";this.g=null;this.h=this.f="";this.i=!1;var c;a instanceof Od?(this.i=void 0!==b?b:a.i,Pd(this,a.c),this.l=a.l,this.a=a.a,Qd(this,a.g),this.f=a.f,Rd(this,Sd(a.b)),this.h=a.h):a&&(c=String(a).match(Md))?(this.i=!!b,Pd(this,c[1]||"",!0),this.l=Td(c[2]||""),this.a=Td(c[3]||"",!0),Qd(this,c[4]),this.f=Td(c[5]||"",!0),Rd(this,c[6]||"",!0),this.h=Td(c[7]||"")):(this.i=!!b,this.b=new Ud(null,this.i));}
    Od.prototype.toString=function(){var a=[],b=this.c;b&&a.push(Vd(b,Wd,!0),":");var c=this.a;if(c||"file"==b)a.push("//"),(b=this.l)&&a.push(Vd(b,Wd,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.g,null!=c&&a.push(":",String(c));if(c=this.f)this.a&&"/"!=c.charAt(0)&&a.push("/"),a.push(Vd(c,"/"==c.charAt(0)?Xd:Yd,!0));(c=this.b.toString())&&a.push("?",c);(c=this.h)&&a.push("#",Vd(c,Zd));return a.join("")};
    Od.prototype.resolve=function(a){var b=new Od(this),c=!!a.c;c?Pd(b,a.c):c=!!a.l;c?b.l=a.l:c=!!a.a;c?b.a=a.a:c=null!=a.g;var d=a.f;if(c)Qd(b,a.g);else if(c=!!a.f){if("/"!=d.charAt(0))if(this.a&&!this.f)d="/"+d;else {var e=b.f.lastIndexOf("/");-1!=e&&(d=b.f.substr(0,e+1)+d);}e=d;if(".."==e||"."==e)d="";else if(x(e,"./")||x(e,"/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],g=0;g<e.length;){var h=e[g++];"."==h?d&&g==e.length&&f.push(""):".."==h?((1<f.length||1==f.length&&""!=f[0])&&f.pop(),
    d&&g==e.length&&f.push("")):(f.push(h),d=!0);}d=f.join("/");}else d=e;}c?b.f=d:c=""!==a.b.toString();c?Rd(b,Sd(a.b)):c=!!a.h;c&&(b.h=a.h);return b};function Pd(a,b,c){a.c=c?Td(b,!0):b;a.c&&(a.c=a.c.replace(/:$/,""));}function Qd(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.g=b;}else a.g=null;}function Rd(a,b,c){b instanceof Ud?(a.b=b,$d(a.b,a.i)):(c||(b=Vd(b,ae)),a.b=new Ud(b,a.i));}function I(a,b,c){a.b.set(b,c);}function be(a,b){return a.b.get(b)}
    function J(a){return a instanceof Od?new Od(a):new Od(a,void 0)}function ce(a,b,c,d){var e=new Od(null,void 0);a&&Pd(e,a);b&&(e.a=b);c&&Qd(e,c);d&&(e.f=d);return e}function Td(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Vd(a,b,c){return "string"===typeof a?(a=encodeURI(a).replace(b,de),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function de(a){a=a.charCodeAt(0);return "%"+(a>>4&15).toString(16)+(a&15).toString(16)}
    var Wd=/[#\/\?@]/g,Yd=/[#\?:]/g,Xd=/[#\?]/g,ae=/[#\?@]/g,Zd=/#/g;function Ud(a,b){this.b=this.a=null;this.c=a||null;this.f=!!b;}function ee(a){a.a||(a.a=new Jd,a.b=0,a.c&&Nd(a.c,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c);}));}function fe(a){var b=Hd(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new Ud(null,void 0);a=Gd(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];Array.isArray(f)?ge(c,e,f):c.add(e,f);}return c}k=Ud.prototype;
    k.add=function(a,b){ee(this);this.c=null;a=he(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b+=1;return this};function ie(a,b){ee(a);b=he(a,b);Ld(a.a.b,b)&&(a.c=null,a.b-=a.a.get(b).length,a=a.a,Ld(a.b,b)&&(delete a.b[b],a.c--,a.a.length>2*a.c&&Kd(a)));}k.clear=function(){this.a=this.c=null;this.b=0;};function je(a,b){ee(a);b=he(a,b);return Ld(a.a.b,b)}k.forEach=function(a,b){ee(this);this.a.forEach(function(c,d){w(c,function(e){a.call(b,e,d,this);},this);},this);};
    k.Y=function(){ee(this);for(var a=this.a.W(),b=this.a.Y(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};k.W=function(a){ee(this);var b=[];if("string"===typeof a)je(this,a)&&(b=Ya(b,this.a.get(he(this,a))));else {a=this.a.W();for(var c=0;c<a.length;c++)b=Ya(b,a[c]);}return b};k.set=function(a,b){ee(this);this.c=null;a=he(this,a);je(this,a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b+=1;return this};
    k.get=function(a,b){if(!a)return b;a=this.W(a);return 0<a.length?String(a[0]):b};function ge(a,b,c){ie(a,b);0<c.length&&(a.c=null,a.a.set(he(a,b),Za(c)),a.b+=c.length);}k.toString=function(){if(this.c)return this.c;if(!this.a)return "";for(var a=[],b=this.a.Y(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.W(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g);}}return this.c=a.join("&")};
    function Sd(a){var b=new Ud;b.c=a.c;a.a&&(b.a=new Jd(a.a),b.b=a.b);return b}function he(a,b){b=String(b);a.f&&(b=b.toLowerCase());return b}function $d(a,b){b&&!a.f&&(ee(a),a.c=null,a.a.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(ie(this,d),ge(this,e,c));},a));a.f=b;}function ke(a){var b=[];le(new me,a,b);return b.join("")}function me(){}
    function le(a,b,c){if(null==b)c.push("null");else {if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),le(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else {c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),ne(d,c),c.push(":"),le(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":ne(b,c);break;case "number":c.push(isFinite(b)&&
    !isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var oe={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},pe=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;
    function ne(a,b){b.push('"',a.replace(pe,function(c){var d=oe[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),oe[c]=d);return d}),'"');}function qe(){var a=K();return Wb&&!!ic&&11==ic||/Edge\/\d+/.test(a)}function re(){return l.window&&l.window.location.href||self&&self.location&&self.location.href||""}function se(a,b){b=b||l.window;var c="about:blank";a&&(c=Eb(Ib(a)||Kb));b.location.href=c;}function te(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<te(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c}
    function ue(){var a=K();a=ve(a)!=we?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],10):null;return a&&30>a?!1:!Wb||!ic||9<ic}function xe(a){a=(a||K()).toLowerCase();return a.match(/android/)||a.match(/webos/)||a.match(/iphone|ipad|ipod/)||a.match(/blackberry/)||a.match(/windows phone/)||a.match(/iemobile/)?!0:!1}function ye(a){a=a||l.window;try{a.close();}catch(b){}}
    function ze(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};c=K().toLowerCase();d&&(b.target=d,x(c,"crios/")&&(b.target="_blank"));ve(K())==Ae&&(a=a||"http://localhost",b.scrollbars=!0);c=a||"";(a=b)||(a={});d=window;b=c instanceof C?c:Ib("undefined"!=typeof c.href?c.href:String(c))||Kb;c=a.target||c.target;e=
    [];for(g in a)switch(g){case "width":case "height":case "top":case "left":e.push(g+"="+a[g]);break;case "target":case "noopener":case "noreferrer":break;default:e.push(g+"="+(a[g]?1:0));}var g=e.join(",");if((y("iPhone")&&!y("iPod")&&!y("iPad")||y("iPad")||y("iPod"))&&d.navigator&&d.navigator.standalone&&c&&"_self"!=c)g=oc(document,"A"),pb(g,"HTMLAnchorElement"),b=b instanceof C?b:Jb(b),g.href=Eb(b),g.setAttribute("target",c),a.noreferrer&&g.setAttribute("rel","noreferrer"),a=document.createEvent("MouseEvent"),
    a.initMouseEvent("click",!0,!0,d,1),g.dispatchEvent(a),g={};else if(a.noreferrer){if(g=Pb("",d,c,g),a=Eb(b),g&&(Yb&&x(a,";")&&(a="'"+a.replace(/'/g,"%27")+"'"),g.opener=null,a='<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+Rb(a)+'">',a=(d=vb())?d.createHTML(a):a,a=new Lb(a,null,Mb),d=g.document))d.write(Nb(a)),d.close();}else (g=Pb(b,d,c,g))&&a.noopener&&(g.opener=null);if(g)try{g.focus();}catch(h){}return g}
    function Be(a){return new D(function(b){function c(){Fd(2E3).then(function(){if(!a||a.closed)b();else return c()});}return c()})}var Ce=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,De=/^[^@]+@[^@]+$/;function Ee(){var a=null;return (new D(function(b){"complete"==l.document.readyState?b():(a=function(){b();},od(window,"load",a));})).o(function(b){xd(window,"load",a);throw b;})}
    function Fe(){return Ge(void 0)?Ee().then(function(){return new D(function(a,b){var c=l.document,d=setTimeout(function(){b(Error("Cordova framework is not ready."));},1E3);c.addEventListener("deviceready",function(){clearTimeout(d);a();},!1);})}):F(Error("Cordova must run in an Android or iOS file scheme."))}function Ge(a){a=a||K();return !("file:"!==He()&&"ionic:"!==He()||!a.toLowerCase().match(/iphone|ipad|ipod|android/))}function Ie(){var a=l.window;try{return !(!a||a==a.top)}catch(b){return !1}}
    function Je(){return "undefined"!==typeof l.WorkerGlobalScope&&"function"===typeof l.importScripts}function Ke(){return firebase$1.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":firebase$1.INTERNAL.hasOwnProperty("node")?"Node":Je()?"Worker":"Browser"}function Le(){var a=Ke();return "ReactNative"===a||"Node"===a}function Me(){for(var a=50,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}
    var Ae="Firefox",we="Chrome";
    function ve(a){var b=a.toLowerCase();if(x(b,"opera/")||x(b,"opr/")||x(b,"opios/"))return "Opera";if(x(b,"iemobile"))return "IEMobile";if(x(b,"msie")||x(b,"trident/"))return "IE";if(x(b,"edge/"))return "Edge";if(x(b,"firefox/"))return Ae;if(x(b,"silk/"))return "Silk";if(x(b,"blackberry"))return "Blackberry";if(x(b,"webos"))return "Webos";if(!x(b,"safari/")||x(b,"chrome/")||x(b,"crios/")||x(b,"android"))if(!x(b,"chrome/")&&!x(b,"crios/")||x(b,"edge/")){if(x(b,"android"))return "Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&
    2==a.length)return a[1]}else return we;else return "Safari";return "Other"}var Ne={md:"FirebaseCore-web",od:"FirebaseUI-web"};function Oe(a,b){b=b||[];var c=[],d={},e;for(e in Ne)d[Ne[e]]=!0;for(e=0;e<b.length;e++)"undefined"!==typeof d[b[e]]&&(delete d[b[e]],c.push(b[e]));c.sort();b=c;b.length||(b=["FirebaseCore-web"]);c=Ke();"Browser"===c?(d=K(),c=ve(d)):"Worker"===c&&(d=K(),c=ve(d)+"-"+c);return c+"/JsCore/"+a+"/"+b.join(",")}function K(){return l.navigator&&l.navigator.userAgent||""}
    function L(a,b){a=a.split(".");b=b||l;for(var c=0;c<a.length&&"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b}function Pe(){try{var a=l.localStorage,b=Qe();if(a)return a.setItem(b,"1"),a.removeItem(b),qe()?!!l.indexedDB:!0}catch(c){return Je()&&!!l.indexedDB}return !1}function Re(){return (Se()||"chrome-extension:"===He()||Ge())&&!Le()&&Pe()&&!Je()}function Se(){return "http:"===He()||"https:"===He()}function He(){return l.location&&l.location.protocol||null}
    function Te(a){a=a||K();return xe(a)||ve(a)==Ae?!1:!0}function Ue(a){return "undefined"===typeof a?null:ke(a)}function Ve(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return b}function We(a){if(null!==a)return JSON.parse(a)}function Qe(a){return a?a:Math.floor(1E9*Math.random()).toString()}function Xe(a){a=a||K();return "Safari"==ve(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0}
    function Ye(){var a=l.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=null;}function Ze(a,b){if(a>b)throw Error("Short delay should be less than long delay!");this.a=a;this.c=b;a=K();b=Ke();this.b=xe(a)||"ReactNative"===b;}
    Ze.prototype.get=function(){var a=l.navigator;return (a&&"boolean"===typeof a.onLine&&(Se()||"chrome-extension:"===He()||"undefined"!==typeof a.connection)?a.onLine:1)?this.b?this.c:this.a:Math.min(5E3,this.a)};function $e(){var a=l.document;return a&&"undefined"!==typeof a.visibilityState?"visible"==a.visibilityState:!0}
    function af(){var a=l.document,b=null;return $e()||!a?E():(new D(function(c){b=function(){$e()&&(a.removeEventListener("visibilitychange",b,!1),c());};a.addEventListener("visibilitychange",b,!1);})).o(function(c){a.removeEventListener("visibilitychange",b,!1);throw c;})}function bf(a){try{var b=new Date(parseInt(a,10));if(!isNaN(b.getTime())&&!/[^0-9]/.test(a))return b.toUTCString()}catch(c){}return null}function cf(){return !(!L("fireauth.oauthhelper",l)&&!L("fireauth.iframe",l))}
    function df(){var a=l.navigator;return a&&a.serviceWorker&&a.serviceWorker.controller||null}function ef(){var a=l.navigator;return a&&a.serviceWorker?E().then(function(){return a.serviceWorker.ready}).then(function(b){return b.active||null}).o(function(){return null}):E(null)}var ff={};function gf(a){ff[a]||(ff[a]=!0,"undefined"!==typeof console&&"function"===typeof console.warn&&console.warn(a));}var hf;try{var jf={};Object.defineProperty(jf,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(jf,"abcd",{configurable:!0,enumerable:!0,value:2});hf=2==jf.abcd;}catch(a){hf=!1;}function M(a,b,c){hf?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c;}function N(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&M(a,c,b[c]);}function kf(a){var b={};N(b,a);return b}function lf(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}
    function mf(a,b){if(!b||!b.length)return !0;if(!a)return !1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return !1}return !0}function nf(a){var b=a;if("object"==typeof a&&null!=a){b="length"in a?[]:{};for(var c in a)M(b,c,nf(a[c]));}return b}function of(a){var b=a&&(a[pf]?"phone":null);if(b&&a&&a[qf]){M(this,"uid",a[qf]);M(this,"displayName",a[rf]||null);var c=null;a[sf]&&(c=(new Date(a[sf])).toUTCString());M(this,"enrollmentTime",c);M(this,"factorId",b);}else throw new t("internal-error","Internal assert: invalid MultiFactorInfo object");}of.prototype.w=function(){return {uid:this.uid,displayName:this.displayName,factorId:this.factorId,enrollmentTime:this.enrollmentTime}};function tf(a){try{var b=new uf(a);}catch(c){b=null;}return b}
    var rf="displayName",sf="enrolledAt",qf="mfaEnrollmentId",pf="phoneInfo";function uf(a){of.call(this,a);M(this,"phoneNumber",a[pf]);}r(uf,of);uf.prototype.w=function(){var a=uf.ab.w.call(this);a.phoneNumber=this.phoneNumber;return a};function vf(a){var b={},c=a[wf],d=a[xf],e=a[yf];a=tf(a[zf]);if(!e||e!=Af&&e!=Bf&&!c||e==Bf&&!d||e==Cf&&!a)throw Error("Invalid checkActionCode response!");e==Bf?(b[Df]=c||null,b[Ef]=c||null,b[Ff]=d):(b[Df]=d||null,b[Ef]=d||null,b[Ff]=c||null);b[Gf]=a||null;M(this,Hf,e);M(this,If,nf(b));}
    var Cf="REVERT_SECOND_FACTOR_ADDITION",Af="EMAIL_SIGNIN",Bf="VERIFY_AND_CHANGE_EMAIL",wf="email",zf="mfaInfo",xf="newEmail",yf="requestType",Ff="email",Df="fromEmail",Gf="multiFactorInfo",Ef="previousEmail",If="data",Hf="operation";function Jf(a){a=J(a);var b=be(a,Kf)||null,c=be(a,Lf)||null,d=be(a,Mf)||null;d=d?Nf[d]||null:null;if(!b||!c||!d)throw new t("argument-error",Kf+", "+Lf+"and "+Mf+" are required in a valid action code URL.");N(this,{apiKey:b,operation:d,code:c,continueUrl:be(a,Of)||null,languageCode:be(a,Pf)||null,tenantId:be(a,Qf)||null});}
    var Kf="apiKey",Lf="oobCode",Of="continueUrl",Pf="languageCode",Mf="mode",Qf="tenantId",Nf={recoverEmail:"RECOVER_EMAIL",resetPassword:"PASSWORD_RESET",revertSecondFactorAddition:Cf,signIn:Af,verifyAndChangeEmail:Bf,verifyEmail:"VERIFY_EMAIL"};function Rf(a){try{return new Jf(a)}catch(b){return null}}function Sf(a){var b=a[Tf];if("undefined"===typeof b)throw new t("missing-continue-uri");if("string"!==typeof b||"string"===typeof b&&!b.length)throw new t("invalid-continue-uri");this.h=b;this.b=this.a=null;this.g=!1;var c=a[Uf];if(c&&"object"===typeof c){b=c[Vf];var d=c[Wf];c=c[Xf];if("string"===typeof b&&b.length){this.a=b;if("undefined"!==typeof d&&"boolean"!==typeof d)throw new t("argument-error",Wf+" property must be a boolean when specified.");this.g=!!d;if("undefined"!==typeof c&&("string"!==
    typeof c||"string"===typeof c&&!c.length))throw new t("argument-error",Xf+" property must be a non empty string when specified.");this.b=c||null;}else {if("undefined"!==typeof b)throw new t("argument-error",Vf+" property must be a non empty string when specified.");if("undefined"!==typeof d||"undefined"!==typeof c)throw new t("missing-android-pkg-name");}}else if("undefined"!==typeof c)throw new t("argument-error",Uf+" property must be a non null object when specified.");this.f=null;if((b=a[Yf])&&"object"===
    typeof b)if(b=b[Zf],"string"===typeof b&&b.length)this.f=b;else {if("undefined"!==typeof b)throw new t("argument-error",Zf+" property must be a non empty string when specified.");}else if("undefined"!==typeof b)throw new t("argument-error",Yf+" property must be a non null object when specified.");b=a[$f];if("undefined"!==typeof b&&"boolean"!==typeof b)throw new t("argument-error",$f+" property must be a boolean when specified.");this.c=!!b;a=a[ag];if("undefined"!==typeof a&&("string"!==typeof a||"string"===
    typeof a&&!a.length))throw new t("argument-error",ag+" property must be a non empty string when specified.");this.i=a||null;}var Uf="android",ag="dynamicLinkDomain",$f="handleCodeInApp",Yf="iOS",Tf="url",Wf="installApp",Xf="minimumVersion",Vf="packageName",Zf="bundleId";
    function bg(a){var b={};b.continueUrl=a.h;b.canHandleCodeInApp=a.c;if(b.androidPackageName=a.a)b.androidMinimumVersion=a.b,b.androidInstallApp=a.g;b.iOSBundleId=a.f;b.dynamicLinkDomain=a.i;for(var c in b)null===b[c]&&delete b[c];return b}function cg(a){return Ra(a,function(b){b=b.toString(16);return 1<b.length?b:"0"+b}).join("")}var dg=null;function eg(a){var b=[];fg(a,function(c){b.push(c);});return b}function fg(a,b){function c(m){for(;d<a.length;){var p=a.charAt(d++),v=dg[p];if(null!=v)return v;if(!/^[\s\xa0]*$/.test(p))throw Error("Unknown base64 encoding at char: "+p);}return m}gg();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h));}}
    function gg(){if(!dg){dg={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++)for(var d=a.concat(b[c].split("")),e=0;e<d.length;e++){var f=d[e];void 0===dg[f]&&(dg[f]=e);}}}function hg(a){var b=ig(a);if(!(b&&b.sub&&b.iss&&b.aud&&b.exp))throw Error("Invalid JWT");this.h=a;this.a=b.exp;this.i=b.sub;a=Date.now()/1E3;this.g=b.iat||(a>this.a?this.a:a);this.b=b.provider_id||b.firebase&&b.firebase.sign_in_provider||null;this.f=b.firebase&&b.firebase.tenant||null;this.c=!!b.is_anonymous||"anonymous"==this.b;}hg.prototype.T=function(){return this.f};hg.prototype.l=function(){return this.c};hg.prototype.toString=function(){return this.h};
    function jg(a){try{return new hg(a)}catch(b){return null}}
    function ig(a){if(!a)return null;a=a.split(".");if(3!=a.length)return null;a=a[1];for(var b=(4-a.length%4)%4,c=0;c<b;c++)a+=".";try{var d=eg(a);a=[];for(c=b=0;b<d.length;){var e=d[b++];if(128>e)a[c++]=String.fromCharCode(e);else if(191<e&&224>e){var f=d[b++];a[c++]=String.fromCharCode((e&31)<<6|f&63);}else if(239<e&&365>e){f=d[b++];var g=d[b++],h=d[b++],m=((e&7)<<18|(f&63)<<12|(g&63)<<6|h&63)-65536;a[c++]=String.fromCharCode(55296+(m>>10));a[c++]=String.fromCharCode(56320+(m&1023));}else f=d[b++],g=
    d[b++],a[c++]=String.fromCharCode((e&15)<<12|(f&63)<<6|g&63);}return JSON.parse(a.join(""))}catch(p){}return null}var kg="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),lg=["client_id","response_type","scope","redirect_uri","state"],mg={nd:{Ja:"locale",ua:700,ta:600,fa:"facebook.com",Xa:lg},pd:{Ja:null,ua:500,ta:750,fa:"github.com",Xa:lg},qd:{Ja:"hl",ua:515,ta:680,fa:"google.com",Xa:lg},wd:{Ja:"lang",ua:485,ta:705,fa:"twitter.com",Xa:kg},kd:{Ja:"locale",ua:640,ta:600,fa:"apple.com",Xa:[]}};
    function ng(a){for(var b in mg)if(mg[b].fa==a)return mg[b];return null}function og(a){var b={};b["facebook.com"]=pg;b["google.com"]=qg;b["github.com"]=rg;b["twitter.com"]=sg;var c=a&&a[tg];try{if(c)return b[c]?new b[c](a):new ug(a);if("undefined"!==typeof a[vg])return new wg(a)}catch(d){}return null}var vg="idToken",tg="providerId";
    function wg(a){var b=a[tg];if(!b&&a[vg]){var c=jg(a[vg]);c&&c.b&&(b=c.b);}if(!b)throw Error("Invalid additional user info!");if("anonymous"==b||"custom"==b)b=null;c=!1;"undefined"!==typeof a.isNewUser?c=!!a.isNewUser:"identitytoolkit#SignupNewUserResponse"===a.kind&&(c=!0);M(this,"providerId",b);M(this,"isNewUser",c);}function ug(a){wg.call(this,a);a=We(a.rawUserInfo||"{}");M(this,"profile",nf(a||{}));}r(ug,wg);
    function pg(a){ug.call(this,a);if("facebook.com"!=this.providerId)throw Error("Invalid provider ID!");}r(pg,ug);function rg(a){ug.call(this,a);if("github.com"!=this.providerId)throw Error("Invalid provider ID!");M(this,"username",this.profile&&this.profile.login||null);}r(rg,ug);function qg(a){ug.call(this,a);if("google.com"!=this.providerId)throw Error("Invalid provider ID!");}r(qg,ug);
    function sg(a){ug.call(this,a);if("twitter.com"!=this.providerId)throw Error("Invalid provider ID!");M(this,"username",a.screenName||null);}r(sg,ug);function xg(a){var b=J(a),c=be(b,"link"),d=be(J(c),"link");b=be(b,"deep_link_id");return be(J(b),"link")||b||d||c||a}function yg(a,b){if(!a&&!b)throw new t("internal-error","Internal assert: no raw session string available");if(a&&b)throw new t("internal-error","Internal assert: unable to determine the session type");this.a=a||null;this.b=b||null;this.type=this.a?zg:Ag;}var zg="enroll",Ag="signin";yg.prototype.Ha=function(){return this.a?E(this.a):E(this.b)};yg.prototype.w=function(){return this.type==zg?{multiFactorSession:{idToken:this.a}}:{multiFactorSession:{pendingCredential:this.b}}};function Bg(){}Bg.prototype.ka=function(){};Bg.prototype.b=function(){};Bg.prototype.c=function(){};Bg.prototype.w=function(){};function Cg(a,b){return a.then(function(c){if(c[Dg]){var d=jg(c[Dg]);if(!d||b!=d.i)throw new t("user-mismatch");return c}throw new t("user-mismatch");}).o(function(c){throw c&&c.code&&c.code==xa+"user-not-found"?new t("user-mismatch"):c;})}
    function Eg(a,b){if(b)this.a=b;else throw new t("internal-error","failed to construct a credential");M(this,"providerId",a);M(this,"signInMethod",a);}Eg.prototype.ka=function(a){return Fg(a,Gg(this))};Eg.prototype.b=function(a,b){var c=Gg(this);c.idToken=b;return Hg(a,c)};Eg.prototype.c=function(a,b){return Cg(Ig(a,Gg(this)),b)};function Gg(a){return {pendingToken:a.a,requestUri:"http://localhost"}}Eg.prototype.w=function(){return {providerId:this.providerId,signInMethod:this.signInMethod,pendingToken:this.a}};
    function Jg(a){if(a&&a.providerId&&a.signInMethod&&0==a.providerId.indexOf("saml.")&&a.pendingToken)try{return new Eg(a.providerId,a.pendingToken)}catch(b){}return null}
    function Kg(a,b,c){this.a=null;if(b.idToken||b.accessToken)b.idToken&&M(this,"idToken",b.idToken),b.accessToken&&M(this,"accessToken",b.accessToken),b.nonce&&!b.pendingToken&&M(this,"nonce",b.nonce),b.pendingToken&&(this.a=b.pendingToken);else if(b.oauthToken&&b.oauthTokenSecret)M(this,"accessToken",b.oauthToken),M(this,"secret",b.oauthTokenSecret);else throw new t("internal-error","failed to construct a credential");M(this,"providerId",a);M(this,"signInMethod",c);}
    Kg.prototype.ka=function(a){return Fg(a,Lg(this))};Kg.prototype.b=function(a,b){var c=Lg(this);c.idToken=b;return Hg(a,c)};Kg.prototype.c=function(a,b){var c=Lg(this);return Cg(Ig(a,c),b)};
    function Lg(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.providerId;a.nonce&&!a.a&&(b.nonce=a.nonce);b={postBody:fe(b).toString(),requestUri:"http://localhost"};a.a&&(delete b.postBody,b.pendingToken=a.a);return b}
    Kg.prototype.w=function(){var a={providerId:this.providerId,signInMethod:this.signInMethod};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);this.nonce&&(a.nonce=this.nonce);this.a&&(a.pendingToken=this.a);return a};
    function Mg(a){if(a&&a.providerId&&a.signInMethod){var b={idToken:a.oauthIdToken,accessToken:a.oauthTokenSecret?null:a.oauthAccessToken,oauthTokenSecret:a.oauthTokenSecret,oauthToken:a.oauthTokenSecret&&a.oauthAccessToken,nonce:a.nonce,pendingToken:a.pendingToken};try{return new Kg(a.providerId,b,a.signInMethod)}catch(c){}}return null}function Ng(a,b){this.Qc=b||[];N(this,{providerId:a,isOAuthProvider:!0});this.Ib={};this.pb=(ng(a)||{}).Ja||null;this.ob=null;}
    Ng.prototype.Ka=function(a){this.Ib=nb(a);return this};function Og(a){if("string"!==typeof a||0!=a.indexOf("saml."))throw new t("argument-error",'SAML provider IDs must be prefixed with "saml."');Ng.call(this,a,[]);}r(Og,Ng);function Pg(a){Ng.call(this,a,lg);this.a=[];}r(Pg,Ng);Pg.prototype.Ca=function(a){Va(this.a,a)||this.a.push(a);return this};Pg.prototype.Qb=function(){return Za(this.a)};
    Pg.prototype.credential=function(a,b){var c;n(a)?c={idToken:a.idToken||null,accessToken:a.accessToken||null,nonce:a.rawNonce||null}:c={idToken:a||null,accessToken:b||null};if(!c.idToken&&!c.accessToken)throw new t("argument-error","credential failed: must provide the ID token and/or the access token.");return new Kg(this.providerId,c,this.providerId)};function Qg(){Pg.call(this,"facebook.com");}r(Qg,Pg);M(Qg,"PROVIDER_ID","facebook.com");M(Qg,"FACEBOOK_SIGN_IN_METHOD","facebook.com");
    function Rg(a){if(!a)throw new t("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;n(a)&&(b=a.accessToken);return (new Qg).credential({accessToken:b})}function Sg(){Pg.call(this,"github.com");}r(Sg,Pg);M(Sg,"PROVIDER_ID","github.com");M(Sg,"GITHUB_SIGN_IN_METHOD","github.com");
    function Tg(a){if(!a)throw new t("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;n(a)&&(b=a.accessToken);return (new Sg).credential({accessToken:b})}function Ug(){Pg.call(this,"google.com");this.Ca("profile");}r(Ug,Pg);M(Ug,"PROVIDER_ID","google.com");M(Ug,"GOOGLE_SIGN_IN_METHOD","google.com");function Vg(a,b){var c=a;n(a)&&(c=a.idToken,b=a.accessToken);return (new Ug).credential({idToken:c,accessToken:b})}function Wg(){Ng.call(this,"twitter.com",kg);}
    r(Wg,Ng);M(Wg,"PROVIDER_ID","twitter.com");M(Wg,"TWITTER_SIGN_IN_METHOD","twitter.com");function Xg(a,b){var c=a;n(c)||(c={oauthToken:a,oauthTokenSecret:b});if(!c.oauthToken||!c.oauthTokenSecret)throw new t("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");return new Kg("twitter.com",c,"twitter.com")}
    function Yg(a,b,c){this.a=a;this.f=b;M(this,"providerId","password");M(this,"signInMethod",c===Zg.EMAIL_LINK_SIGN_IN_METHOD?Zg.EMAIL_LINK_SIGN_IN_METHOD:Zg.EMAIL_PASSWORD_SIGN_IN_METHOD);}Yg.prototype.ka=function(a){return this.signInMethod==Zg.EMAIL_LINK_SIGN_IN_METHOD?O(a,$g,{email:this.a,oobCode:this.f}):O(a,ah,{email:this.a,password:this.f})};
    Yg.prototype.b=function(a,b){return this.signInMethod==Zg.EMAIL_LINK_SIGN_IN_METHOD?O(a,bh,{idToken:b,email:this.a,oobCode:this.f}):O(a,ch,{idToken:b,email:this.a,password:this.f})};Yg.prototype.c=function(a,b){return Cg(this.ka(a),b)};Yg.prototype.w=function(){return {email:this.a,password:this.f,signInMethod:this.signInMethod}};function dh(a){return a&&a.email&&a.password?new Yg(a.email,a.password,a.signInMethod):null}function Zg(){N(this,{providerId:"password",isOAuthProvider:!1});}
    function eh(a,b){b=fh(b);if(!b)throw new t("argument-error","Invalid email link!");return new Yg(a,b.code,Zg.EMAIL_LINK_SIGN_IN_METHOD)}function fh(a){a=xg(a);return (a=Rf(a))&&a.operation===Af?a:null}N(Zg,{PROVIDER_ID:"password"});N(Zg,{EMAIL_LINK_SIGN_IN_METHOD:"emailLink"});N(Zg,{EMAIL_PASSWORD_SIGN_IN_METHOD:"password"});function gh(a){if(!(a.eb&&a.cb||a.La&&a.ea))throw new t("internal-error");this.a=a;M(this,"providerId","phone");this.fa="phone";M(this,"signInMethod","phone");}
    gh.prototype.ka=function(a){return a.fb(hh(this))};gh.prototype.b=function(a,b){var c=hh(this);c.idToken=b;return O(a,ih,c)};gh.prototype.c=function(a,b){var c=hh(this);c.operation="REAUTH";a=O(a,jh,c);return Cg(a,b)};gh.prototype.w=function(){var a={providerId:"phone"};this.a.eb&&(a.verificationId=this.a.eb);this.a.cb&&(a.verificationCode=this.a.cb);this.a.La&&(a.temporaryProof=this.a.La);this.a.ea&&(a.phoneNumber=this.a.ea);return a};
    function kh(a){if(a&&"phone"===a.providerId&&(a.verificationId&&a.verificationCode||a.temporaryProof&&a.phoneNumber)){var b={};w(["verificationId","verificationCode","temporaryProof","phoneNumber"],function(c){a[c]&&(b[c]=a[c]);});return new gh(b)}return null}function hh(a){return a.a.La&&a.a.ea?{temporaryProof:a.a.La,phoneNumber:a.a.ea}:{sessionInfo:a.a.eb,code:a.a.cb}}
    function lh(a){try{this.a=a||firebase$1.auth();}catch(b){throw new t("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");}N(this,{providerId:"phone",isOAuthProvider:!1});}
    lh.prototype.fb=function(a,b){var c=this.a.a;return E(b.verify()).then(function(d){if("string"!==typeof d)throw new t("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");switch(b.type){case "recaptcha":var e=n(a)?a.session:null,f=n(a)?a.phoneNumber:a,g;e&&e.type==zg?g=e.Ha().then(function(h){return mh(c,{idToken:h,phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:d}})}):e&&e.type==Ag?g=e.Ha().then(function(h){return nh(c,
    {mfaPendingCredential:h,mfaEnrollmentId:a.multiFactorHint&&a.multiFactorHint.uid||a.multiFactorUid,phoneSignInInfo:{recaptchaToken:d}})}):g=oh(c,{phoneNumber:f,recaptchaToken:d});return g.then(function(h){"function"===typeof b.reset&&b.reset();return h},function(h){"function"===typeof b.reset&&b.reset();throw h;});default:throw new t("argument-error",'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');}})};
    function ph(a,b){if(!a)throw new t("missing-verification-id");if(!b)throw new t("missing-verification-code");return new gh({eb:a,cb:b})}N(lh,{PROVIDER_ID:"phone"});N(lh,{PHONE_SIGN_IN_METHOD:"phone"});
    function qh(a){if(a.temporaryProof&&a.phoneNumber)return new gh({La:a.temporaryProof,ea:a.phoneNumber});var b=a&&a.providerId;if(!b||"password"===b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret,e=a&&a.nonce,f=a&&a.oauthIdToken,g=a&&a.pendingToken;try{switch(b){case "google.com":return Vg(f,c);case "facebook.com":return Rg(c);case "github.com":return Tg(c);case "twitter.com":return Xg(c,d);default:return c||d||f||g?g?0==b.indexOf("saml.")?new Eg(b,g):new Kg(b,{pendingToken:g,idToken:a.oauthIdToken,
    accessToken:a.oauthAccessToken},b):(new Pg(b)).credential({idToken:f,accessToken:c,rawNonce:e}):null}}catch(h){return null}}function rh(a){if(!a.isOAuthProvider)throw new t("invalid-oauth-provider");}function sh(a,b,c,d,e,f,g){this.c=a;this.b=b||null;this.g=c||null;this.f=d||null;this.i=f||null;this.h=g||null;this.a=e||null;if(this.g||this.a){if(this.g&&this.a)throw new t("invalid-auth-event");if(this.g&&!this.f)throw new t("invalid-auth-event");}else throw new t("invalid-auth-event");}sh.prototype.getUid=function(){var a=[];a.push(this.c);this.b&&a.push(this.b);this.f&&a.push(this.f);this.h&&a.push(this.h);return a.join("-")};sh.prototype.T=function(){return this.h};
    sh.prototype.w=function(){return {type:this.c,eventId:this.b,urlResponse:this.g,sessionId:this.f,postBody:this.i,tenantId:this.h,error:this.a&&this.a.w()}};function th(a){a=a||{};return a.type?new sh(a.type,a.eventId,a.urlResponse,a.sessionId,a.error&&Aa(a.error),a.postBody,a.tenantId):null}function uh(){this.b=null;this.a=[];}var vh=null;function wh(a){var b=vh;b.a.push(a);b.b||(b.b=function(c){for(var d=0;d<b.a.length;d++)b.a[d](c);},a=L("universalLinks.subscribe",l),"function"===typeof a&&a(null,b.b));}function xh(a){var b="unauthorized-domain",c=void 0,d=J(a);a=d.a;d=d.c;"chrome-extension"==d?c=Qb("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):"http"==d||"https"==d?c=Qb("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):b="operation-not-supported-in-this-environment";
    t.call(this,b,c);}r(xh,t);function yh(a,b,c){t.call(this,a,c);a=b||{};a.Jb&&M(this,"email",a.Jb);a.ea&&M(this,"phoneNumber",a.ea);a.credential&&M(this,"credential",a.credential);a.Zb&&M(this,"tenantId",a.Zb);}r(yh,t);yh.prototype.w=function(){var a={code:this.code,message:this.message};this.email&&(a.email=this.email);this.phoneNumber&&(a.phoneNumber=this.phoneNumber);this.tenantId&&(a.tenantId=this.tenantId);var b=this.credential&&this.credential.w();b&&z(a,b);return a};yh.prototype.toJSON=function(){return this.w()};
    function zh(a){if(a.code){var b=a.code||"";0==b.indexOf(xa)&&(b=b.substring(xa.length));var c={credential:qh(a),Zb:a.tenantId};if(a.email)c.Jb=a.email;else if(a.phoneNumber)c.ea=a.phoneNumber;else if(!c.credential)return new t(b,a.message||void 0);return new yh(b,c,a.message)}return null}function Ah(){}Ah.prototype.c=null;function Bh(a){return a.c||(a.c=a.b())}var Ch;function Dh(){}r(Dh,Ah);Dh.prototype.a=function(){var a=Eh(this);return a?new ActiveXObject(a):new XMLHttpRequest};Dh.prototype.b=function(){var a={};Eh(this)&&(a[0]=!0,a[1]=!0);return a};
    function Eh(a){if(!a.f&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.f=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.f}Ch=new Dh;function Fh(){}r(Fh,Ah);Fh.prototype.a=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new Gh;throw Error("Unsupported browser");};Fh.prototype.b=function(){return {}};
    function Gh(){this.a=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseType=this.responseText=this.response="";this.status=-1;this.statusText="";this.a.onload=q(this.qc,this);this.a.onerror=q(this.Sb,this);this.a.onprogress=q(this.rc,this);this.a.ontimeout=q(this.vc,this);}k=Gh.prototype;k.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.a.open(a,b);};
    k.send=function(a){if(a)if("string"==typeof a)this.a.send(a);else throw Error("Only string data is supported");else this.a.send();};k.abort=function(){this.a.abort();};k.setRequestHeader=function(){};k.getResponseHeader=function(a){return "content-type"==a.toLowerCase()?this.a.contentType:""};k.qc=function(){this.status=200;this.response=this.responseText=this.a.responseText;Hh(this,4);};k.Sb=function(){this.status=500;this.response=this.responseText="";Hh(this,4);};k.vc=function(){this.Sb();};
    k.rc=function(){this.status=200;Hh(this,1);};function Hh(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange();}k.getAllResponseHeaders=function(){return "content-type: "+this.a.contentType};function Ih(a,b,c){this.reset(a,b,c,void 0,void 0);}Ih.prototype.a=null;Ih.prototype.reset=function(a,b,c,d,e){delete this.a;};function Kh(a){this.f=a;this.b=this.c=this.a=null;}function Lh(a,b){this.name=a;this.value=b;}Lh.prototype.toString=function(){return this.name};var Mh=new Lh("SEVERE",1E3),Nh=new Lh("WARNING",900),Oh=new Lh("CONFIG",700),Ph=new Lh("FINE",500);function Qh(a){if(a.c)return a.c;if(a.a)return Qh(a.a);Ga("Root logger has no level set.");return null}Kh.prototype.log=function(a,b,c){if(a.value>=Qh(this).value)for(oa(b)&&(b=b()),a=new Ih(a,String(b),this.f),c&&(a.a=c),c=this;c;)c=c.a;};var Rh={},Sh=null;
    function Th(a){Sh||(Sh=new Kh(""),Rh[""]=Sh,Sh.c=Oh);var b;if(!(b=Rh[a])){b=new Kh(a);var c=a.lastIndexOf("."),d=a.substr(c+1);c=Th(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;Rh[a]=b;}return b}function Uh(a,b){a&&a.log(Ph,b,void 0);}function Vh(a){this.f=a;}r(Vh,Ah);Vh.prototype.a=function(){return new Wh(this.f)};Vh.prototype.b=function(a){return function(){return a}}({});function Wh(a){H.call(this);this.u=a;this.h=void 0;this.readyState=Xh;this.status=0;this.responseType=this.responseText=this.response=this.statusText="";this.onreadystatechange=null;this.l=new Headers;this.b=null;this.s="GET";this.f="";this.a=!1;this.i=Th("goog.net.FetchXmlHttp");this.m=this.c=this.g=null;}r(Wh,H);var Xh=0;k=Wh.prototype;
    k.open=function(a,b){if(this.readyState!=Xh)throw this.abort(),Error("Error reopening a connection");this.s=a;this.f=b;this.readyState=1;Yh(this);};k.send=function(a){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.a=!0;var b={headers:this.l,method:this.s,credentials:this.h,cache:void 0};a&&(b.body=a);this.u.fetch(new Request(this.f,b)).then(this.uc.bind(this),this.Ua.bind(this));};
    k.abort=function(){this.response=this.responseText="";this.l=new Headers;this.status=0;this.c&&this.c.cancel("Request was aborted.");1<=this.readyState&&this.a&&4!=this.readyState&&(this.a=!1,Zh(this));this.readyState=Xh;};
    k.uc=function(a){this.a&&(this.g=a,this.b||(this.status=this.g.status,this.statusText=this.g.statusText,this.b=a.headers,this.readyState=2,Yh(this)),this.a&&(this.readyState=3,Yh(this),this.a&&("arraybuffer"===this.responseType?a.arrayBuffer().then(this.sc.bind(this),this.Ua.bind(this)):"undefined"!==typeof l.ReadableStream&&"body"in a?(this.response=this.responseText="",this.c=a.body.getReader(),this.m=new TextDecoder,$h(this)):a.text().then(this.tc.bind(this),this.Ua.bind(this)))));};
    function $h(a){a.c.read().then(a.pc.bind(a)).catch(a.Ua.bind(a));}k.pc=function(a){if(this.a){var b=this.m.decode(a.value?a.value:new Uint8Array(0),{stream:!a.done});b&&(this.response=this.responseText+=b);a.done?Zh(this):Yh(this);3==this.readyState&&$h(this);}};k.tc=function(a){this.a&&(this.response=this.responseText=a,Zh(this));};k.sc=function(a){this.a&&(this.response=a,Zh(this));};k.Ua=function(a){var b=this.i;b&&b.log(Nh,"Failed to fetch url "+this.f,a instanceof Error?a:Error(a));this.a&&Zh(this);};
    function Zh(a){a.readyState=4;a.g=null;a.c=null;a.m=null;Yh(a);}k.setRequestHeader=function(a,b){this.l.append(a,b);};k.getResponseHeader=function(a){return this.b?this.b.get(a.toLowerCase())||"":((a=this.i)&&a.log(Nh,"Attempting to get response header but no headers have been received for url: "+this.f,void 0),"")};
    k.getAllResponseHeaders=function(){if(!this.b){var a=this.i;a&&a.log(Nh,"Attempting to get all response headers but no headers have been received for url: "+this.f,void 0);return ""}a=[];for(var b=this.b.entries(),c=b.next();!c.done;)c=c.value,a.push(c[0]+": "+c[1]),c=b.next();return a.join("\r\n")};function Yh(a){a.onreadystatechange&&a.onreadystatechange.call(a);}Object.defineProperty(Wh.prototype,"withCredentials",{get:function(){return "include"===this.h},set:function(a){this.h=a?"include":"same-origin";}});function ai(a){H.call(this);this.headers=new Jd;this.D=a||null;this.c=!1;this.C=this.a=null;this.h=this.R=this.l="";this.f=this.O=this.i=this.J=!1;this.g=0;this.s=null;this.m=bi;this.u=this.S=!1;}r(ai,H);var bi="";ai.prototype.b=Th("goog.net.XhrIo");var ci=/^https?$/i,di=["POST","PUT"];
    function ei(a,b,c,d,e){if(a.a)throw Error("[goog.net.XhrIo] Object is active with another request="+a.l+"; newUri="+b);c=c?c.toUpperCase():"GET";a.l=b;a.h="";a.R=c;a.J=!1;a.c=!0;a.a=a.D?a.D.a():Ch.a();a.C=a.D?Bh(a.D):Bh(Ch);a.a.onreadystatechange=q(a.Vb,a);try{Uh(a.b,fi(a,"Opening Xhr")),a.O=!0,a.a.open(c,String(b),!0),a.O=!1;}catch(g){Uh(a.b,fi(a,"Error opening Xhr: "+g.message));gi(a,g);return}b=d||"";var f=new Jd(a.headers);e&&Id(e,function(g,h){f.set(h,g);});e=Ta(f.Y());d=l.FormData&&b instanceof
    l.FormData;!Va(di,c)||e||d||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");f.forEach(function(g,h){this.a.setRequestHeader(h,g);},a);a.m&&(a.a.responseType=a.m);"withCredentials"in a.a&&a.a.withCredentials!==a.S&&(a.a.withCredentials=a.S);try{hi(a),0<a.g&&(a.u=ii(a.a),Uh(a.b,fi(a,"Will abort after "+a.g+"ms if incomplete, xhr2 "+a.u)),a.u?(a.a.timeout=a.g,a.a.ontimeout=q(a.Ma,a)):a.s=Ed(a.Ma,a.g,a)),Uh(a.b,fi(a,"Sending request")),a.i=!0,a.a.send(b),a.i=!1;}catch(g){Uh(a.b,
    fi(a,"Send error: "+g.message)),gi(a,g);}}function ii(a){return Wb&&fc(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout}function Ua(a){return "content-type"==a.toLowerCase()}k=ai.prototype;k.Ma=function(){"undefined"!=typeof ha&&this.a&&(this.h="Timed out after "+this.g+"ms, aborting",Uh(this.b,fi(this,this.h)),this.dispatchEvent("timeout"),this.abort(8));};function gi(a,b){a.c=!1;a.a&&(a.f=!0,a.a.abort(),a.f=!1);a.h=b;ji(a);ki(a);}
    function ji(a){a.J||(a.J=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"));}k.abort=function(){this.a&&this.c&&(Uh(this.b,fi(this,"Aborting")),this.c=!1,this.f=!0,this.a.abort(),this.f=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),ki(this));};k.Da=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),ki(this,!0));ai.ab.Da.call(this);};k.Vb=function(){this.xa||(this.O||this.i||this.f?li(this):this.Jc());};k.Jc=function(){li(this);};
    function li(a){if(a.c&&"undefined"!=typeof ha)if(a.C[1]&&4==mi(a)&&2==ni(a))Uh(a.b,fi(a,"Local request error detected and ignored"));else if(a.i&&4==mi(a))Ed(a.Vb,0,a);else if(a.dispatchEvent("readystatechange"),4==mi(a)){Uh(a.b,fi(a,"Request complete"));a.c=!1;try{var b=ni(a);a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1;}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.l).match(Md)[1]||null;if(!f&&l.self&&l.self.location){var g=l.self.location.protocol;
    f=g.substr(0,g.length-1);}e=!ci.test(f?f.toLowerCase():"");}d=e;}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else {try{var h=2<mi(a)?a.a.statusText:"";}catch(m){Uh(a.b,"Can not get status: "+m.message),h="";}a.h=h+" ["+ni(a)+"]";ji(a);}}finally{ki(a);}}}function ki(a,b){if(a.a){hi(a);var c=a.a,d=a.C[0]?la:null;a.a=null;a.C=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d;}catch(e){(a=a.b)&&a.log(Mh,"Problem encountered resetting onreadystatechange: "+e.message,void 0);}}}
    function hi(a){a.a&&a.u&&(a.a.ontimeout=null);a.s&&(l.clearTimeout(a.s),a.s=null);}function mi(a){return a.a?a.a.readyState:0}function ni(a){try{return 2<mi(a)?a.a.status:-1}catch(b){return -1}}function oi(a){try{return a.a?a.a.responseText:""}catch(b){return Uh(a.b,"Can not get responseText: "+b.message),""}}
    k.getResponse=function(){try{if(!this.a)return null;if("response"in this.a)return this.a.response;switch(this.m){case bi:case "text":return this.a.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in this.a)return this.a.mozResponseArrayBuffer}var a=this.b;a&&a.log(Mh,"Response type "+this.m+" is not supported on this browser",void 0);return null}catch(b){return Uh(this.b,"Can not get response: "+b.message),null}};function fi(a,b){return b+" ["+a.R+" "+a.l+" "+ni(a)+"]"}function pi(a){var b=qi;this.g=[];this.u=b;this.s=a||null;this.f=this.a=!1;this.c=void 0;this.v=this.C=this.i=!1;this.h=0;this.b=null;this.l=0;}pi.prototype.cancel=function(a){if(this.a)this.c instanceof pi&&this.c.cancel();else {if(this.b){var b=this.b;delete this.b;a?b.cancel(a):(b.l--,0>=b.l&&b.cancel());}this.u?this.u.call(this.s,this):this.v=!0;this.a||(a=new ri(this),si(this),ti(this,!1,a));}};pi.prototype.m=function(a,b){this.i=!1;ti(this,a,b);};function ti(a,b,c){a.a=!0;a.c=c;a.f=!b;ui(a);}
    function si(a){if(a.a){if(!a.v)throw new vi(a);a.v=!1;}}function wi(a,b){xi(a,null,b,void 0);}function xi(a,b,c,d){a.g.push([b,c,d]);a.a&&ui(a);}pi.prototype.then=function(a,b,c){var d,e,f=new D(function(g,h){d=g;e=h;});xi(this,d,function(g){g instanceof ri?f.cancel():e(g);});return f.then(a,b,c)};pi.prototype.$goog_Thenable=!0;function yi(a){return Sa(a.g,function(b){return oa(b[1])})}
    function ui(a){if(a.h&&a.a&&yi(a)){var b=a.h,c=zi[b];c&&(l.clearTimeout(c.a),delete zi[b]);a.h=0;}a.b&&(a.b.l--,delete a.b);b=a.c;for(var d=c=!1;a.g.length&&!a.i;){var e=a.g.shift(),f=e[0],g=e[1];e=e[2];if(f=a.f?g:f)try{var h=f.call(e||a.s,b);void 0!==h&&(a.f=a.f&&(h==b||h instanceof Error),a.c=b=h);if(Ea(b)||"function"===typeof l.Promise&&b instanceof l.Promise)d=!0,a.i=!0;}catch(m){b=m,a.f=!0,yi(a)||(c=!0);}}a.c=b;d&&(h=q(a.m,a,!0),d=q(a.m,a,!1),b instanceof pi?(xi(b,h,d),b.C=!0):b.then(h,d));c&&(b=
    new Ai(b),zi[b.a]=b,a.h=b.a);}function vi(){u.call(this);}r(vi,u);vi.prototype.message="Deferred has already fired";vi.prototype.name="AlreadyCalledError";function ri(){u.call(this);}r(ri,u);ri.prototype.message="Deferred was canceled";ri.prototype.name="CanceledError";function Ai(a){this.a=l.setTimeout(q(this.c,this),0);this.b=a;}Ai.prototype.c=function(){delete zi[this.a];throw this.b;};var zi={};function Bi(a){var c=document,d=yb(a).toString(),e=oc(document,"SCRIPT"),f={Wb:e,Ma:void 0},g=new pi(f),h=null,m=5E3;(h=window.setTimeout(function(){Ci(e,!0);var p=new Di(Ei,"Timeout reached for loading script "+d);si(g);ti(g,!1,p);},m),f.Ma=h);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(Ci(e,!1,h),si(g),ti(g,!0,null));};e.onerror=function(){Ci(e,!0,h);var p=new Di(Fi,"Error while loading script "+
    d);si(g);ti(g,!1,p);};f={};z(f,{type:"text/javascript",charset:"UTF-8"});lc(e,f);Ob(e,a);Gi(c).appendChild(e);return g}function Gi(a){var b;return (b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement}function qi(){if(this&&this.Wb){var a=this.Wb;a&&"SCRIPT"==a.tagName&&Ci(a,!0,this.Ma);}}
    function Ci(a,b,c){null!=c&&l.clearTimeout(c);a.onload=la;a.onerror=la;a.onreadystatechange=la;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a);},0);}var Fi=0,Ei=1;function Di(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);u.call(this,c);this.code=a;}r(Di,u);function Hi(a){this.f=a;}r(Hi,Ah);Hi.prototype.a=function(){return new this.f};Hi.prototype.b=function(){return {}};
    function Ii(a,b,c){this.c=a;a=b||{};this.l=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.m=a.secureTokenTimeout||Ji;this.g=nb(a.secureTokenHeaders||Ki);this.h=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.i=a.identityPlatformEndpoint||"https://identitytoolkit.googleapis.com/v2/";this.v=a.firebaseTimeout||Li;this.a=nb(a.firebaseHeaders||Mi);c&&(this.a["X-Client-Version"]=c,this.g["X-Client-Version"]=c);c="Node"==Ke();c=l.XMLHttpRequest||
    c&&firebase$1.INTERNAL.node&&firebase$1.INTERNAL.node.XMLHttpRequest;if(!c&&!Je())throw new t("internal-error","The XMLHttpRequest compatibility library was not found.");this.f=void 0;Je()?this.f=new Vh(self):Le()?this.f=new Hi(c):this.f=new Fh;this.b=null;}var Ni,Dg="idToken",Ji=new Ze(3E4,6E4),Ki={"Content-Type":"application/x-www-form-urlencoded"},Li=new Ze(3E4,6E4),Mi={"Content-Type":"application/json"};function Oi(a,b){b?a.a["X-Firebase-Locale"]=b:delete a.a["X-Firebase-Locale"];}
    function Pi(a,b){b&&(a.l=Qi("https://securetoken.googleapis.com/v1/token",b),a.h=Qi("https://www.googleapis.com/identitytoolkit/v3/relyingparty/",b),a.i=Qi("https://identitytoolkit.googleapis.com/v2/",b));}function Qi(a,b){a=J(a);b=J(b.url);a.f=a.a+a.f;Pd(a,b.c);a.a=b.a;Qd(a,b.g);return a.toString()}function Ri(a,b){b?(a.a["X-Client-Version"]=b,a.g["X-Client-Version"]=b):(delete a.a["X-Client-Version"],delete a.g["X-Client-Version"]);}Ii.prototype.T=function(){return this.b};
    function Si(a,b,c,d,e,f,g){ue()||Je()?a=q(a.u,a):(Ni||(Ni=new D(function(h,m){Ti(h,m);})),a=q(a.s,a));a(b,c,d,e,f,g);}
    Ii.prototype.u=function(a,b,c,d,e,f){if(Je()&&("undefined"===typeof l.fetch||"undefined"===typeof l.Headers||"undefined"===typeof l.Request))throw new t("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");var g=new ai(this.f);if(f){g.g=Math.max(0,f);var h=setTimeout(function(){g.dispatchEvent("timeout");},f);}qd(g,"complete",function(){h&&clearTimeout(h);var m=null;try{m=
    JSON.parse(oi(this))||null;}catch(p){m=null;}b&&b(m);});wd(g,"ready",function(){h&&clearTimeout(h);Xc(this);});wd(g,"timeout",function(){h&&clearTimeout(h);Xc(this);b&&b(null);});ei(g,a,c,d,e);};var Ui=new qb(rb,"https://apis.google.com/js/client.js?onload=%{onload}"),Vi="__fcb"+Math.floor(1E6*Math.random()).toString();
    function Ti(a,b){if(((window.gapi||{}).client||{}).request)a();else {l[Vi]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"));};var c=zb(Ui,{onload:Vi});wi(Bi(c),function(){b(Error("CORS_UNSUPPORTED"));});}}
    Ii.prototype.s=function(a,b,c,d,e){var f=this;Ni.then(function(){window.gapi.client.setApiKey(f.c);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(h){window.gapi.auth.setToken(g);b&&b(h);}});}).o(function(g){b&&b({error:{message:g&&g.message||"CORS_UNSUPPORTED"}});});};
    function Wi(a,b){return new D(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?Si(a,a.l+"?key="+encodeURIComponent(a.c),function(e){e?e.error?d(Xi(e)):e.access_token&&e.refresh_token?c(e):d(new t("internal-error")):d(new t("network-request-failed"));},"POST",fe(b).toString(),a.g,a.m.get()):d(new t("internal-error"));})}
    function Yi(a,b,c,d,e,f,g){var h=J(b+c);I(h,"key",a.c);g&&I(h,"cb",va().toString());var m="GET"==d;if(m)for(var p in e)e.hasOwnProperty(p)&&I(h,p,e[p]);return new D(function(v,B){Si(a,h.toString(),function(A){A?A.error?B(Xi(A,f||{})):v(A):B(new t("network-request-failed"));},d,m?void 0:ke(Ve(e)),a.a,a.v.get());})}function Zi(a){a=a.email;if("string"!==typeof a||!De.test(a))throw new t("invalid-email");}function $i(a){"email"in a&&Zi(a);}
    function aj(a,b){return O(a,bj,{identifier:b,continueUri:Se()?re():"http://localhost"}).then(function(c){return c.signinMethods||[]})}function cj(a){return O(a,dj,{}).then(function(b){return b.authorizedDomains||[]})}function P(a){if(!a[Dg]){if(a.mfaPendingCredential)throw new t("multi-factor-auth-required",null,nb(a));throw new t("internal-error");}}
    function ej(a){if(a.phoneNumber||a.temporaryProof){if(!a.phoneNumber||!a.temporaryProof)throw new t("internal-error");}else {if(!a.sessionInfo)throw new t("missing-verification-id");if(!a.code)throw new t("missing-verification-code");}}Ii.prototype.zb=function(){return O(this,fj,{})};Ii.prototype.Bb=function(a,b){return O(this,gj,{idToken:a,email:b})};Ii.prototype.Cb=function(a,b){return O(this,ch,{idToken:a,password:b})};var hj={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};k=Ii.prototype;
    k.Db=function(a,b){var c={idToken:a},d=[];lb(hj,function(e,f){var g=b[f];null===g?d.push(e):f in b&&(c[f]=g);});d.length&&(c.deleteAttribute=d);return O(this,gj,c)};k.vb=function(a,b){a={requestType:"PASSWORD_RESET",email:a};z(a,b);return O(this,ij,a)};k.wb=function(a,b){a={requestType:"EMAIL_SIGNIN",email:a};z(a,b);return O(this,jj,a)};k.ub=function(a,b){a={requestType:"VERIFY_EMAIL",idToken:a};z(a,b);return O(this,kj,a)};
    k.Eb=function(a,b,c){a={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:a,newEmail:b};z(a,c);return O(this,lj,a)};function oh(a,b){return O(a,mj,b)}k.fb=function(a){return O(this,nj,a)};function mh(a,b){return O(a,oj,b).then(function(c){return c.phoneSessionInfo.sessionInfo})}
    function pj(a){if(!a.phoneVerificationInfo)throw new t("internal-error");if(!a.phoneVerificationInfo.sessionInfo)throw new t("missing-verification-id");if(!a.phoneVerificationInfo.code)throw new t("missing-verification-code");}function nh(a,b){return O(a,qj,b).then(function(c){return c.phoneResponseInfo.sessionInfo})}function rj(a,b,c){return O(a,sj,{idToken:b,deleteProvider:c})}function tj(a){if(!a.requestUri||!a.sessionId&&!a.postBody&&!a.pendingToken)throw new t("internal-error");}
    function uj(a,b){b.oauthIdToken&&b.providerId&&0==b.providerId.indexOf("oidc.")&&!b.pendingToken&&(a.sessionId?b.nonce=a.sessionId:a.postBody&&(a=new Ud(a.postBody),je(a,"nonce")&&(b.nonce=a.get("nonce"))));return b}
    function vj(a){var b=null;a.needConfirmation?(a.code="account-exists-with-different-credential",b=zh(a)):"FEDERATED_USER_ID_ALREADY_LINKED"==a.errorMessage?(a.code="credential-already-in-use",b=zh(a)):"EMAIL_EXISTS"==a.errorMessage?(a.code="email-already-in-use",b=zh(a)):a.errorMessage&&(b=wj(a.errorMessage));if(b)throw b;P(a);}function Fg(a,b){b.returnIdpCredential=!0;return O(a,xj,b)}function Hg(a,b){b.returnIdpCredential=!0;return O(a,yj,b)}
    function Ig(a,b){b.returnIdpCredential=!0;b.autoCreate=!1;return O(a,zj,b)}function Aj(a){if(!a.oobCode)throw new t("invalid-action-code");}k.nb=function(a,b){return O(this,Bj,{oobCode:a,newPassword:b})};k.Ra=function(a){return O(this,Cj,{oobCode:a})};k.jb=function(a){return O(this,Dj,{oobCode:a})};
    var Dj={endpoint:"setAccountInfo",A:Aj,Z:"email",B:!0},Cj={endpoint:"resetPassword",A:Aj,G:function(a){var b=a.requestType;if(!b||!a.email&&"EMAIL_SIGNIN"!=b&&"VERIFY_AND_CHANGE_EMAIL"!=b)throw new t("internal-error");},B:!0},Ej={endpoint:"signupNewUser",A:function(a){Zi(a);if(!a.password)throw new t("weak-password");},G:P,V:!0,B:!0},bj={endpoint:"createAuthUri",B:!0},Fj={endpoint:"deleteAccount",N:["idToken"]},sj={endpoint:"setAccountInfo",N:["idToken","deleteProvider"],A:function(a){if(!Array.isArray(a.deleteProvider))throw new t("internal-error");
    }},$g={endpoint:"emailLinkSignin",N:["email","oobCode"],A:Zi,G:P,V:!0,B:!0},bh={endpoint:"emailLinkSignin",N:["idToken","email","oobCode"],A:Zi,G:P,V:!0},Gj={endpoint:"accounts/mfaEnrollment:finalize",N:["idToken","phoneVerificationInfo"],A:pj,G:P,B:!0,Na:!0},Hj={endpoint:"accounts/mfaSignIn:finalize",N:["mfaPendingCredential","phoneVerificationInfo"],A:pj,G:P,B:!0,Na:!0},Ij={endpoint:"getAccountInfo"},jj={endpoint:"getOobConfirmationCode",N:["requestType"],A:function(a){if("EMAIL_SIGNIN"!=a.requestType)throw new t("internal-error");
    Zi(a);},Z:"email",B:!0},kj={endpoint:"getOobConfirmationCode",N:["idToken","requestType"],A:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new t("internal-error");},Z:"email",B:!0},lj={endpoint:"getOobConfirmationCode",N:["idToken","newEmail","requestType"],A:function(a){if("VERIFY_AND_CHANGE_EMAIL"!=a.requestType)throw new t("internal-error");},Z:"email",B:!0},ij={endpoint:"getOobConfirmationCode",N:["requestType"],A:function(a){if("PASSWORD_RESET"!=a.requestType)throw new t("internal-error");
    Zi(a);},Z:"email",B:!0},dj={lb:!0,endpoint:"getProjectConfig",Ub:"GET"},Jj={lb:!0,endpoint:"getRecaptchaParam",Ub:"GET",G:function(a){if(!a.recaptchaSiteKey)throw new t("internal-error");}},Bj={endpoint:"resetPassword",A:Aj,Z:"email",B:!0},mj={endpoint:"sendVerificationCode",N:["phoneNumber","recaptchaToken"],Z:"sessionInfo",B:!0},gj={endpoint:"setAccountInfo",N:["idToken"],A:$i,V:!0},ch={endpoint:"setAccountInfo",N:["idToken"],A:function(a){$i(a);if(!a.password)throw new t("weak-password");},G:P,
    V:!0},fj={endpoint:"signupNewUser",G:P,V:!0,B:!0},oj={endpoint:"accounts/mfaEnrollment:start",N:["idToken","phoneEnrollmentInfo"],A:function(a){if(!a.phoneEnrollmentInfo)throw new t("internal-error");if(!a.phoneEnrollmentInfo.phoneNumber)throw new t("missing-phone-number");if(!a.phoneEnrollmentInfo.recaptchaToken)throw new t("missing-app-credential");},G:function(a){if(!a.phoneSessionInfo||!a.phoneSessionInfo.sessionInfo)throw new t("internal-error");},B:!0,Na:!0},qj={endpoint:"accounts/mfaSignIn:start",
    N:["mfaPendingCredential","mfaEnrollmentId","phoneSignInInfo"],A:function(a){if(!a.phoneSignInInfo||!a.phoneSignInInfo.recaptchaToken)throw new t("missing-app-credential");},G:function(a){if(!a.phoneResponseInfo||!a.phoneResponseInfo.sessionInfo)throw new t("internal-error");},B:!0,Na:!0},xj={endpoint:"verifyAssertion",A:tj,Ya:uj,G:vj,V:!0,B:!0},zj={endpoint:"verifyAssertion",A:tj,Ya:uj,G:function(a){if(a.errorMessage&&"USER_NOT_FOUND"==a.errorMessage)throw new t("user-not-found");if(a.errorMessage)throw wj(a.errorMessage);
    P(a);},V:!0,B:!0},yj={endpoint:"verifyAssertion",A:function(a){tj(a);if(!a.idToken)throw new t("internal-error");},Ya:uj,G:vj,V:!0},Kj={endpoint:"verifyCustomToken",A:function(a){if(!a.token)throw new t("invalid-custom-token");},G:P,V:!0,B:!0},ah={endpoint:"verifyPassword",A:function(a){Zi(a);if(!a.password)throw new t("wrong-password");},G:P,V:!0,B:!0},nj={endpoint:"verifyPhoneNumber",A:ej,G:P,B:!0},ih={endpoint:"verifyPhoneNumber",A:function(a){if(!a.idToken)throw new t("internal-error");ej(a);},
    G:function(a){if(a.temporaryProof)throw a.code="credential-already-in-use",zh(a);P(a);}},jh={Hb:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",A:ej,G:P,B:!0},Lj={endpoint:"accounts/mfaEnrollment:withdraw",N:["idToken","mfaEnrollmentId"],G:function(a){if(!!a[Dg]^!!a.refreshToken)throw new t("internal-error");},B:!0,Na:!0};
    function O(a,b,c){if(!mf(c,b.N))return F(new t("internal-error"));var d=!!b.Na,e=b.Ub||"POST",f;return E(c).then(b.A).then(function(){b.V&&(c.returnSecureToken=!0);b.B&&a.b&&"undefined"===typeof c.tenantId&&(c.tenantId=a.b);return d?Yi(a,a.i,b.endpoint,e,c,b.Hb,b.lb||!1):Yi(a,a.h,b.endpoint,e,c,b.Hb,b.lb||!1)}).then(function(g){f=g;return b.Ya?b.Ya(c,f):f}).then(b.G).then(function(){if(!b.Z)return f;if(!(b.Z in f))throw new t("internal-error");return f[b.Z]})}
    function wj(a){return Xi({error:{errors:[{message:a}],code:400,message:a}})}
    function Xi(a,b){var c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?new t(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",
    MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_OR_INVALID_NONCE:"missing-or-invalid-nonce",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",
    EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",INVALID_PROVIDER_ID:"invalid-provider-id",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",
    OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",
    QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired",REJECTED_CREDENTIAL:"rejected-credential",INVALID_CONTINUE_URI:"invalid-continue-uri",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_DYNAMIC_LINK_DOMAIN:"invalid-dynamic-link-domain",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",INVALID_CERT_HASH:"invalid-cert-hash",UNSUPPORTED_TENANT_OPERATION:"unsupported-tenant-operation",
    INVALID_TENANT_ID:"invalid-tenant-id",TENANT_ID_MISMATCH:"tenant-id-mismatch",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",EMAIL_CHANGE_NEEDS_VERIFICATION:"email-change-needs-verification",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",
    UNSUPPORTED_FIRST_FACTOR:"unsupported-first-factor",UNVERIFIED_EMAIL:"unverified-email"};z(d,b||{});b=(b=c.match(/^[^\s]+\s*:\s*([\s\S]*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new t(d[e],b);!b&&a&&(b=Ue(a));return new t("internal-error",b)}function Mj(a){this.b=a;this.a=null;this.rb=Nj(this);}
    function Nj(a){return Oj().then(function(){return new D(function(b,c){L("gapi.iframes.getContext")().open({where:document.body,url:a.b,messageHandlersFilter:L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),attributes:{style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},dontclear:!0},function(d){function e(){clearTimeout(f);b();}a.a=d;a.a.restyle({setHideOnLeave:!1});var f=setTimeout(function(){c(Error("Network Error"));},Pj.get());d.ping(e).then(e,function(){c(Error("Network Error"));});});})})}
    function Qj(a,b){return a.rb.then(function(){return new D(function(c){a.a.send(b.type,b,c,L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));})})}function Rj(a,b){a.rb.then(function(){a.a.register("authEvent",b,L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));});}var Sj=new qb(rb,"https://apis.google.com/js/api.js?onload=%{onload}"),Tj=new Ze(3E4,6E4),Pj=new Ze(5E3,15E3),Uj=null;
    function Oj(){return Uj?Uj:Uj=(new D(function(a,b){function c(){Ye();L("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){Ye();b(Error("Network Error"));},timeout:Tj.get()});}if(L("gapi.iframes.Iframe"))a();else if(L("gapi.load"))c();else {var d="__iframefcb"+Math.floor(1E6*Math.random()).toString();l[d]=function(){L("gapi.load")?c():b(Error("Network Error"));};d=zb(Sj,{onload:d});E(Bi(d)).o(function(){b(Error("Network Error"));});}})).o(function(a){Uj=null;throw a;})}function Vj(a,b,c,d){this.l=a;this.h=b;this.i=c;this.g=d;this.f=null;this.g?(a=J(this.g.url),a=ce(a.c,a.a,a.g,"/emulator/auth/iframe")):a=ce("https",this.l,null,"/__/auth/iframe");this.a=a;I(this.a,"apiKey",this.h);I(this.a,"appName",this.i);this.b=null;this.c=[];}Vj.prototype.toString=function(){this.f?I(this.a,"v",this.f):ie(this.a.b,"v");this.b?I(this.a,"eid",this.b):ie(this.a.b,"eid");this.c.length?I(this.a,"fw",this.c.join(",")):ie(this.a.b,"fw");return this.a.toString()};
    function Wj(a,b,c,d,e,f){this.u=a;this.s=b;this.c=c;this.m=d;this.v=f;this.i=this.g=this.l=null;this.a=e;this.h=this.f=null;}Wj.prototype.yb=function(a){this.h=a;return this};
    Wj.prototype.toString=function(){if(this.v){var a=J(this.v.url);a=ce(a.c,a.a,a.g,"/emulator/auth/handler");}else a=ce("https",this.u,null,"/__/auth/handler");I(a,"apiKey",this.s);I(a,"appName",this.c);I(a,"authType",this.m);if(this.a.isOAuthProvider){var b=this.a;try{var c=firebase$1.app(this.c).auth().la();}catch(h){c=null;}b.ob=c;I(a,"providerId",this.a.providerId);c=this.a;b=Ve(c.Ib);for(var d in b)b[d]=b[d].toString();d=c.Qc;b=nb(b);for(var e=0;e<d.length;e++){var f=d[e];f in b&&delete b[f];}c.pb&&
    c.ob&&!b[c.pb]&&(b[c.pb]=c.ob);mb(b)||I(a,"customParameters",Ue(b));}"function"===typeof this.a.Qb&&(c=this.a.Qb(),c.length&&I(a,"scopes",c.join(",")));this.l?I(a,"redirectUrl",this.l):ie(a.b,"redirectUrl");this.g?I(a,"eventId",this.g):ie(a.b,"eventId");this.i?I(a,"v",this.i):ie(a.b,"v");if(this.b)for(var g in this.b)this.b.hasOwnProperty(g)&&!be(a,g)&&I(a,g,this.b[g]);this.h?I(a,"tid",this.h):ie(a.b,"tid");this.f?I(a,"eid",this.f):ie(a.b,"eid");g=Xj(this.c);g.length&&I(a,"fw",g.join(","));return a.toString()};
    function Xj(a){try{return firebase$1.app(a).auth().Ga()}catch(b){return []}}function Yj(a,b,c,d,e,f){this.s=a;this.g=b;this.b=c;this.f=f;this.c=d||null;this.i=e||null;this.l=this.u=this.C=null;this.h=[];this.m=this.a=null;}
    function Zj(a){var b=re();return cj(a).then(function(c){a:{var d=J(b),e=d.c;d=d.a;for(var f=0;f<c.length;f++){var g=c[f];var h=d;var m=e;0==g.indexOf("chrome-extension://")?h=J(g).a==h&&"chrome-extension"==m:"http"!=m&&"https"!=m?h=!1:Ce.test(g)?h=h==g:(g=g.split(".").join("\\."),h=(new RegExp("^(.+\\."+g+"|"+g+")$","i")).test(h));if(h){c=!0;break a}}c=!1;}if(!c)throw new xh(re());})}
    function ak(a){if(a.m)return a.m;a.m=Ee().then(function(){if(!a.u){var b=a.c,c=a.i,d=Xj(a.b),e=new Vj(a.s,a.g,a.b,a.f);e.f=b;e.b=c;e.c=Za(d||[]);a.u=e.toString();}a.v=new Mj(a.u);bk(a);});return a.m}k=Yj.prototype;k.Ob=function(a,b,c){var d=new t("popup-closed-by-user"),e=new t("web-storage-unsupported"),f=this,g=!1;return this.ma().then(function(){ck(f).then(function(h){h||(a&&ye(a),b(e),g=!0);});}).o(function(){}).then(function(){if(!g)return Be(a)}).then(function(){if(!g)return Fd(c).then(function(){b(d);})})};
    k.Xb=function(){var a=K();return !Te(a)&&!Xe(a)};k.Tb=function(){return !1};
    k.Mb=function(a,b,c,d,e,f,g,h){if(!a)return F(new t("popup-blocked"));if(g&&!Te())return this.ma().o(function(p){ye(a);e(p);}),d(),E();this.a||(this.a=Zj(dk(this)));var m=this;return this.a.then(function(){var p=m.ma().o(function(v){ye(a);e(v);throw v;});d();return p}).then(function(){rh(c);if(!g){var p=ek(m.s,m.g,m.b,b,c,null,f,m.c,void 0,m.i,h,m.f);se(p,a);}}).o(function(p){"auth/network-request-failed"==p.code&&(m.a=null);throw p;})};
    function dk(a){a.l||(a.C=a.c?Oe(a.c,Xj(a.b)):null,a.l=new Ii(a.g,Ca(a.i),a.C),a.f&&Pi(a.l,a.f));return a.l}k.Nb=function(a,b,c,d){this.a||(this.a=Zj(dk(this)));var e=this;return this.a.then(function(){rh(b);var f=ek(e.s,e.g,e.b,a,b,re(),c,e.c,void 0,e.i,d,e.f);se(f);}).o(function(f){"auth/network-request-failed"==f.code&&(e.a=null);throw f;})};k.ma=function(){var a=this;return ak(this).then(function(){return a.v.rb}).o(function(){a.a=null;throw new t("network-request-failed");})};k.$b=function(){return !0};
    function ek(a,b,c,d,e,f,g,h,m,p,v,B){a=new Wj(a,b,c,d,e,B);a.l=f;a.g=g;a.i=h;a.b=nb(m||null);a.f=p;return a.yb(v).toString()}function bk(a){if(!a.v)throw Error("IfcHandler must be initialized!");Rj(a.v,function(b){var c={};if(b&&b.authEvent){var d=!1;b=th(b.authEvent);for(c=0;c<a.h.length;c++)d=a.h[c](b)||d;c={};c.status=d?"ACK":"ERROR";return E(c)}c.status="ERROR";return E(c)});}
    function ck(a){var b={type:"webStorageSupport"};return ak(a).then(function(){return Qj(a.v,b)}).then(function(c){if(c&&c.length&&"undefined"!==typeof c[0].webStorageSupport)return c[0].webStorageSupport;throw Error();})}k.Ea=function(a){this.h.push(a);};k.Sa=function(a){Xa(this.h,function(b){return b==a});};function fk(a){this.a=a||firebase$1.INTERNAL.reactNative&&firebase$1.INTERNAL.reactNative.AsyncStorage;if(!this.a)throw new t("internal-error","The React Native compatibility library was not found.");this.type="asyncStorage";}k=fk.prototype;k.get=function(a){return E(this.a.getItem(a)).then(function(b){return b&&We(b)})};k.set=function(a,b){return E(this.a.setItem(a,Ue(b)))};k.U=function(a){return E(this.a.removeItem(a))};k.ca=function(){};k.ia=function(){};function gk(a){this.b=a;this.a={};this.f=q(this.c,this);}var hk=[];function ik(){var a=Je()?self:null;w(hk,function(c){c.b==a&&(b=c);});if(!b){var b=new gk(a);hk.push(b);}return b}
    gk.prototype.c=function(a){var b=a.data.eventType,c=a.data.eventId,d=this.a[b];if(d&&0<d.length){a.ports[0].postMessage({status:"ack",eventId:c,eventType:b,response:null});var e=[];w(d,function(f){e.push(E().then(function(){return f(a.origin,a.data.data)}));});Jc(e).then(function(f){var g=[];w(f,function(h){g.push({fulfilled:h.Pb,value:h.value,reason:h.reason?h.reason.message:void 0});});w(g,function(h){for(var m in h)"undefined"===typeof h[m]&&delete h[m];});a.ports[0].postMessage({status:"done",eventId:c,
    eventType:b,response:g});});}};function jk(a,b,c){mb(a.a)&&a.b.addEventListener("message",a.f);"undefined"===typeof a.a[b]&&(a.a[b]=[]);a.a[b].push(c);}function kk(a){this.a=a;}kk.prototype.postMessage=function(a,b){this.a.postMessage(a,b);};function lk(a){this.c=a;this.b=!1;this.a=[];}
    function mk(a,b,c,d){var e,f=c||{},g,h,m,p=null;if(a.b)return F(Error("connection_unavailable"));var v=d?800:50,B="undefined"!==typeof MessageChannel?new MessageChannel:null;return (new D(function(A,Q){B?(e=Math.floor(Math.random()*Math.pow(10,20)).toString(),B.port1.start(),h=setTimeout(function(){Q(Error("unsupported_event"));},v),g=function(ya){ya.data.eventId===e&&("ack"===ya.data.status?(clearTimeout(h),m=setTimeout(function(){Q(Error("timeout"));},3E3)):"done"===ya.data.status?(clearTimeout(m),
    "undefined"!==typeof ya.data.response?A(ya.data.response):Q(Error("unknown_error"))):(clearTimeout(h),clearTimeout(m),Q(Error("invalid_response"))));},p={messageChannel:B,onMessage:g},a.a.push(p),B.port1.addEventListener("message",g),a.c.postMessage({eventType:b,eventId:e,data:f},[B.port2])):Q(Error("connection_unavailable"));})).then(function(A){nk(a,p);return A}).o(function(A){nk(a,p);throw A;})}
    function nk(a,b){if(b){var c=b.messageChannel,d=b.onMessage;c&&(c.port1.removeEventListener("message",d),c.port1.close());Xa(a.a,function(e){return e==b});}}lk.prototype.close=function(){for(;0<this.a.length;)nk(this,this.a[0]);this.b=!0;};function ok(){if(!pk())throw new t("web-storage-unsupported");this.c={};this.a=[];this.b=0;this.m=l.indexedDB;this.type="indexedDB";this.g=this.v=this.f=this.l=null;this.s=!1;this.h=null;var a=this;Je()&&self?(this.v=ik(),jk(this.v,"keyChanged",function(b,c){return qk(a).then(function(d){0<d.length&&w(a.a,function(e){e(d);});return {keyProcessed:Va(d,c.key)}})}),jk(this.v,"ping",function(){return E(["keyChanged"])})):ef().then(function(b){if(a.h=b)a.g=new lk(new kk(b)),mk(a.g,"ping",null,!0).then(function(c){c[0].fulfilled&&
    Va(c[0].value,"keyChanged")&&(a.s=!0);}).o(function(){});});}var rk;function sk(a){return new D(function(b,c){var d=a.m.deleteDatabase("firebaseLocalStorageDb");d.onsuccess=function(){b();};d.onerror=function(e){c(Error(e.target.error));};})}
    function tk(a){return new D(function(b,c){var d=a.m.open("firebaseLocalStorageDb",1);d.onerror=function(e){try{e.preventDefault();}catch(f){}c(Error(e.target.error));};d.onupgradeneeded=function(e){e=e.target.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"});}catch(f){c(f);}};d.onsuccess=function(e){e=e.target.result;e.objectStoreNames.contains("firebaseLocalStorage")?b(e):sk(a).then(function(){return tk(a)}).then(function(f){b(f);}).o(function(f){c(f);});};})}
    function uk(a){a.i||(a.i=tk(a));return a.i}function vk(a,b){function c(e,f){uk(a).then(b).then(e).o(function(g){if(3<++d)f(g);else return uk(a).then(function(h){h.close();a.i=void 0;return c(e,f)}).o(function(h){f(h);})});}var d=0;return new D(c)}function pk(){try{return !!l.indexedDB}catch(a){return !1}}function wk(a){return a.objectStore("firebaseLocalStorage")}function xk(a,b){return a.transaction(["firebaseLocalStorage"],b?"readwrite":"readonly")}
    function yk(a){return new D(function(b,c){a.onsuccess=function(d){d&&d.target?b(d.target.result):b();};a.onerror=function(d){c(d.target.error);};})}k=ok.prototype;k.set=function(a,b){var c=this,d=!1;return vk(this,function(e){e=wk(xk(e,!0));return yk(e.get(a))}).then(function(e){return vk(c,function(f){f=wk(xk(f,!0));if(e)return e.value=b,yk(f.put(e));c.b++;d=!0;var g={};g.fbase_key=a;g.value=b;return yk(f.add(g))})}).then(function(){c.c[a]=b;return zk(c,a)}).oa(function(){d&&c.b--;})};
    function zk(a,b){return a.g&&a.h&&df()===a.h?mk(a.g,"keyChanged",{key:b},a.s).then(function(){}).o(function(){}):E()}k.get=function(a){return vk(this,function(b){return yk(wk(xk(b,!1)).get(a))}).then(function(b){return b&&b.value})};k.U=function(a){var b=this,c=!1;return vk(this,function(d){c=!0;b.b++;return yk(wk(xk(d,!0))["delete"](a))}).then(function(){delete b.c[a];return zk(b,a)}).oa(function(){c&&b.b--;})};
    function qk(a){return uk(a).then(function(b){var c=wk(xk(b,!1));return c.getAll?yk(c.getAll()):new D(function(d,e){var f=[],g=c.openCursor();g.onsuccess=function(h){(h=h.target.result)?(f.push(h.value),h["continue"]()):d(f);};g.onerror=function(h){e(h.target.error);};})}).then(function(b){var c={},d=[];if(0==a.b){for(d=0;d<b.length;d++)c[b[d].fbase_key]=b[d].value;d=te(a.c,c);a.c=c;}return d})}k.ca=function(a){0==this.a.length&&Ak(this);this.a.push(a);};
    k.ia=function(a){Xa(this.a,function(b){return b==a});0==this.a.length&&Bk(this);};function Ak(a){function b(){a.f=setTimeout(function(){a.l=qk(a).then(function(c){0<c.length&&w(a.a,function(d){d(c);});}).then(function(){b();}).o(function(c){"STOP_EVENT"!=c.message&&b();});},800);}Bk(a);b();}function Bk(a){a.l&&a.l.cancel("STOP_EVENT");a.f&&(clearTimeout(a.f),a.f=null);}function Ck(a){var b=this,c=null;this.a=[];this.type="indexedDB";this.c=a;this.b=E().then(function(){if(pk()){var d=Qe(),e="__sak"+d;rk||(rk=new ok);c=rk;return c.set(e,d).then(function(){return c.get(e)}).then(function(f){if(f!==d)throw Error("indexedDB not supported!");return c.U(e)}).then(function(){return c}).o(function(){return b.c})}return b.c}).then(function(d){b.type=d.type;d.ca(function(e){w(b.a,function(f){f(e);});});return d});}k=Ck.prototype;k.get=function(a){return this.b.then(function(b){return b.get(a)})};
    k.set=function(a,b){return this.b.then(function(c){return c.set(a,b)})};k.U=function(a){return this.b.then(function(b){return b.U(a)})};k.ca=function(a){this.a.push(a);};k.ia=function(a){Xa(this.a,function(b){return b==a});};function Dk(){this.a={};this.type="inMemory";}k=Dk.prototype;k.get=function(a){return E(this.a[a])};k.set=function(a,b){this.a[a]=b;return E()};k.U=function(a){delete this.a[a];return E()};k.ca=function(){};k.ia=function(){};function Ek(){if(!Fk()){if("Node"==Ke())throw new t("internal-error","The LocalStorage compatibility library was not found.");throw new t("web-storage-unsupported");}this.a=Gk()||firebase$1.INTERNAL.node.localStorage;this.type="localStorage";}function Gk(){try{var a=l.localStorage,b=Qe();a&&(a.setItem(b,"1"),a.removeItem(b));return a}catch(c){return null}}
    function Fk(){var a="Node"==Ke();a=Gk()||a&&firebase$1.INTERNAL.node&&firebase$1.INTERNAL.node.localStorage;if(!a)return !1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return !1}}k=Ek.prototype;k.get=function(a){var b=this;return E().then(function(){var c=b.a.getItem(a);return We(c)})};k.set=function(a,b){var c=this;return E().then(function(){var d=Ue(b);null===d?c.U(a):c.a.setItem(a,d);})};k.U=function(a){var b=this;return E().then(function(){b.a.removeItem(a);})};
    k.ca=function(a){l.window&&nd(l.window,"storage",a);};k.ia=function(a){l.window&&xd(l.window,"storage",a);};function Hk(){this.type="nullStorage";}k=Hk.prototype;k.get=function(){return E(null)};k.set=function(){return E()};k.U=function(){return E()};k.ca=function(){};k.ia=function(){};function Ik(){if(!Jk()){if("Node"==Ke())throw new t("internal-error","The SessionStorage compatibility library was not found.");throw new t("web-storage-unsupported");}this.a=Kk()||firebase$1.INTERNAL.node.sessionStorage;this.type="sessionStorage";}function Kk(){try{var a=l.sessionStorage,b=Qe();a&&(a.setItem(b,"1"),a.removeItem(b));return a}catch(c){return null}}
    function Jk(){var a="Node"==Ke();a=Kk()||a&&firebase$1.INTERNAL.node&&firebase$1.INTERNAL.node.sessionStorage;if(!a)return !1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return !1}}k=Ik.prototype;k.get=function(a){var b=this;return E().then(function(){var c=b.a.getItem(a);return We(c)})};k.set=function(a,b){var c=this;return E().then(function(){var d=Ue(b);null===d?c.U(a):c.a.setItem(a,d);})};k.U=function(a){var b=this;return E().then(function(){b.a.removeItem(a);})};k.ca=function(){};
    k.ia=function(){};function Lk(){var a={};a.Browser=Mk;a.Node=Nk;a.ReactNative=Ok;a.Worker=Pk;this.a=a[Ke()];}var Qk,Mk={F:Ek,bb:Ik},Nk={F:Ek,bb:Ik},Ok={F:fk,bb:Hk},Pk={F:Ek,bb:Hk};var Rk={rd:"local",NONE:"none",td:"session"};function Sk(a){var b=new t("invalid-persistence-type"),c=new t("unsupported-persistence-type");a:{for(d in Rk)if(Rk[d]==a){var d=!0;break a}d=!1;}if(!d||"string"!==typeof a)throw b;switch(Ke()){case "ReactNative":if("session"===a)throw c;break;case "Node":if("none"!==a)throw c;break;case "Worker":if("session"===a||!pk()&&"none"!==a)throw c;break;default:if(!Pe()&&"none"!==a)throw c;}}
    function Tk(){var a=!Xe(K())&&Ie()?!0:!1,b=Te(),c=Pe();this.m=a;this.h=b;this.l=c;this.a={};Qk||(Qk=new Lk);a=Qk;try{this.g=!qe()&&cf()||!l.indexedDB?new a.a.F:new Ck(Je()?new Dk:new a.a.F);}catch(d){this.g=new Dk,this.h=!0;}try{this.i=new a.a.bb;}catch(d){this.i=new Dk;}this.v=new Dk;this.f=q(this.Yb,this);this.b={};}var Uk;function Vk(){Uk||(Uk=new Tk);return Uk}function Wk(a,b){switch(b){case "session":return a.i;case "none":return a.v;default:return a.g}}
    function Xk(a,b){return "firebase:"+a.name+(b?":"+b:"")}function Yk(a,b,c){var d=Xk(b,c),e=Wk(a,b.F);return a.get(b,c).then(function(f){var g=null;try{g=We(l.localStorage.getItem(d));}catch(h){}if(g&&!f)return l.localStorage.removeItem(d),a.set(b,g,c);g&&f&&"localStorage"!=e.type&&l.localStorage.removeItem(d);})}k=Tk.prototype;k.get=function(a,b){return Wk(this,a.F).get(Xk(a,b))};function Zk(a,b,c){c=Xk(b,c);"local"==b.F&&(a.b[c]=null);return Wk(a,b.F).U(c)}
    k.set=function(a,b,c){var d=Xk(a,c),e=this,f=Wk(this,a.F);return f.set(d,b).then(function(){return f.get(d)}).then(function(g){"local"==a.F&&(e.b[d]=g);})};k.addListener=function(a,b,c){a=Xk(a,b);this.l&&(this.b[a]=l.localStorage.getItem(a));mb(this.a)&&(Wk(this,"local").ca(this.f),this.h||(qe()||!cf())&&l.indexedDB||!this.l||$k(this));this.a[a]||(this.a[a]=[]);this.a[a].push(c);};
    k.removeListener=function(a,b,c){a=Xk(a,b);this.a[a]&&(Xa(this.a[a],function(d){return d==c}),0==this.a[a].length&&delete this.a[a]);mb(this.a)&&(Wk(this,"local").ia(this.f),al(this));};function $k(a){al(a);a.c=setInterval(function(){for(var b in a.a){var c=l.localStorage.getItem(b),d=a.b[b];c!=d&&(a.b[b]=c,c=new bd({type:"storage",key:b,target:window,oldValue:d,newValue:c,a:!0}),a.Yb(c));}},1E3);}function al(a){a.c&&(clearInterval(a.c),a.c=null);}
    k.Yb=function(a){if(a&&a.g){var b=a.a.key;if(null==b)for(var c in this.a){var d=this.b[c];"undefined"===typeof d&&(d=null);var e=l.localStorage.getItem(c);e!==d&&(this.b[c]=e,this.mb(c));}else if(0==b.indexOf("firebase:")&&this.a[b]){"undefined"!==typeof a.a.a?Wk(this,"local").ia(this.f):al(this);if(this.m)if(c=l.localStorage.getItem(b),d=a.a.newValue,d!==c)null!==d?l.localStorage.setItem(b,d):l.localStorage.removeItem(b);else if(this.b[b]===d&&"undefined"===typeof a.a.a)return;var f=this;c=function(){if("undefined"!==
    typeof a.a.a||f.b[b]!==l.localStorage.getItem(b))f.b[b]=l.localStorage.getItem(b),f.mb(b);};Wb&&ic&&10==ic&&l.localStorage.getItem(b)!==a.a.newValue&&a.a.newValue!==a.a.oldValue?setTimeout(c,10):c();}}else w(a,q(this.mb,this));};k.mb=function(a){this.a[a]&&w(this.a[a],function(b){b();});};function bl(a){this.a=a;this.b=Vk();}var cl={name:"authEvent",F:"local"};function dl(a){return a.b.get(cl,a.a).then(function(b){return th(b)})}function el(){this.a=Vk();}function fl(){this.b=-1;}function gl(a,b){this.b=hl;this.f=l.Uint8Array?new Uint8Array(this.b):Array(this.b);this.g=this.c=0;this.a=[];this.i=a;this.h=b;this.l=l.Int32Array?new Int32Array(64):Array(64);void 0===il&&(l.Int32Array?il=new Int32Array(jl):il=jl);this.reset();}var il;r(gl,fl);for(var hl=64,kl=hl-1,ll=[],ml=0;ml<kl;ml++)ll[ml]=0;var nl=Ya(128,ll);gl.prototype.reset=function(){this.g=this.c=0;this.a=l.Int32Array?new Int32Array(this.h):Za(this.h);};
    function ol(a){for(var b=a.f,c=a.l,d=0,e=0;e<b.length;)c[d++]=b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3],e=4*d;for(b=16;64>b;b++){e=c[b-15]|0;d=c[b-2]|0;var f=(c[b-16]|0)+((e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)|0,g=(c[b-7]|0)+((d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10)|0;c[b]=f+g|0;}d=a.a[0]|0;e=a.a[1]|0;var h=a.a[2]|0,m=a.a[3]|0,p=a.a[4]|0,v=a.a[5]|0,B=a.a[6]|0;f=a.a[7]|0;for(b=0;64>b;b++){var A=((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+(d&e^d&h^e&h)|0;g=p&v^~p&B;f=f+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<
    7))|0;g=g+(il[b]|0)|0;g=f+(g+(c[b]|0)|0)|0;f=B;B=v;v=p;p=m+g|0;m=h;h=e;e=d;d=g+A|0;}a.a[0]=a.a[0]+d|0;a.a[1]=a.a[1]+e|0;a.a[2]=a.a[2]+h|0;a.a[3]=a.a[3]+m|0;a.a[4]=a.a[4]+p|0;a.a[5]=a.a[5]+v|0;a.a[6]=a.a[6]+B|0;a.a[7]=a.a[7]+f|0;}
    function pl(a,b,c){void 0===c&&(c=b.length);var d=0,e=a.c;if("string"===typeof b)for(;d<c;)a.f[e++]=b.charCodeAt(d++),e==a.b&&(ol(a),e=0);else if(na(b))for(;d<c;){var f=b[d++];if(!("number"==typeof f&&0<=f&&255>=f&&f==(f|0)))throw Error("message must be a byte array");a.f[e++]=f;e==a.b&&(ol(a),e=0);}else throw Error("message must be string or array");a.c=e;a.g+=c;}
    var jl=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
    4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function ql(){gl.call(this,8,rl);}r(ql,gl);var rl=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];function sl(a,b,c,d,e,f){this.v=a;this.i=b;this.l=c;this.m=d||null;this.u=e||null;this.s=f;this.h=b+":"+c;this.C=new el;this.g=new bl(this.h);this.f=null;this.b=[];this.a=this.c=null;}function tl(a){return new t("invalid-cordova-configuration",a)}k=sl.prototype;
    k.ma=function(){return this.Ia?this.Ia:this.Ia=Fe().then(function(){if("function"!==typeof L("universalLinks.subscribe",l))throw tl("cordova-universal-links-plugin-fix is not installed");if("undefined"===typeof L("BuildInfo.packageName",l))throw tl("cordova-plugin-buildinfo is not installed");if("function"!==typeof L("cordova.plugins.browsertab.openUrl",l))throw tl("cordova-plugin-browsertab is not installed");if("function"!==typeof L("cordova.InAppBrowser.open",l))throw tl("cordova-plugin-inappbrowser is not installed");
    },function(){throw new t("cordova-not-ready");})};function ul(){for(var a=20,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}function vl(a){var b=new ql;pl(b,a);a=[];var c=8*b.g;56>b.c?pl(b,nl,56-b.c):pl(b,nl,b.b-(b.c-56));for(var d=63;56<=d;d--)b.f[d]=c&255,c/=256;ol(b);for(d=c=0;d<b.i;d++)for(var e=24;0<=e;e-=8)a[c++]=b.a[d]>>e&255;return cg(a)}
    k.Ob=function(a,b){b(new t("operation-not-supported-in-this-environment"));return E()};k.Mb=function(){return F(new t("operation-not-supported-in-this-environment"))};k.$b=function(){return !1};k.Xb=function(){return !0};k.Tb=function(){return !0};
    k.Nb=function(a,b,c,d){if(this.c)return F(new t("redirect-operation-pending"));var e=this,f=l.document,g=null,h=null,m=null,p=null;return this.c=E().then(function(){rh(b);return wl(e)}).then(function(){return xl(e,a,b,c,d)}).then(function(){return (new D(function(v,B){h=function(){var A=L("cordova.plugins.browsertab.close",l);v();"function"===typeof A&&A();e.a&&"function"===typeof e.a.close&&(e.a.close(),e.a=null);return !1};e.Ea(h);m=function(){g||(g=Fd(2E3).then(function(){B(new t("redirect-cancelled-by-user"));}));};
    p=function(){$e()&&m();};f.addEventListener("resume",m,!1);K().toLowerCase().match(/android/)||f.addEventListener("visibilitychange",p,!1);})).o(function(v){return yl(e).then(function(){throw v;})})}).oa(function(){m&&f.removeEventListener("resume",m,!1);p&&f.removeEventListener("visibilitychange",p,!1);g&&g.cancel();h&&e.Sa(h);e.c=null;})};
    function xl(a,b,c,d,e){var f=ul(),g=new sh(b,d,null,f,new t("no-auth-event"),null,e),h=L("BuildInfo.packageName",l);if("string"!==typeof h)throw new t("invalid-cordova-configuration");var m=L("BuildInfo.displayName",l),p={};if(K().toLowerCase().match(/iphone|ipad|ipod/))p.ibi=h;else if(K().toLowerCase().match(/android/))p.apn=h;else return F(new t("operation-not-supported-in-this-environment"));m&&(p.appDisplayName=m);f=vl(f);p.sessionId=f;var v=ek(a.v,a.i,a.l,b,c,null,d,a.m,p,a.u,e,a.s);return a.ma().then(function(){var B=
    a.h;return a.C.a.set(cl,g.w(),B)}).then(function(){var B=L("cordova.plugins.browsertab.isAvailable",l);if("function"!==typeof B)throw new t("invalid-cordova-configuration");var A=null;B(function(Q){if(Q){A=L("cordova.plugins.browsertab.openUrl",l);if("function"!==typeof A)throw new t("invalid-cordova-configuration");A(v);}else {A=L("cordova.InAppBrowser.open",l);if("function"!==typeof A)throw new t("invalid-cordova-configuration");Q=K();a.a=A(v,Q.match(/(iPad|iPhone|iPod).*OS 7_\d/i)||Q.match(/(iPad|iPhone|iPod).*OS 8_\d/i)?
    "_blank":"_system","location=yes");}});})}function zl(a,b){for(var c=0;c<a.b.length;c++)try{a.b[c](b);}catch(d){}}function wl(a){a.f||(a.f=a.ma().then(function(){return new D(function(b){function c(d){b(d);a.Sa(c);return !1}a.Ea(c);Al(a);})}));return a.f}function yl(a){var b=null;return dl(a.g).then(function(c){b=c;c=a.g;return Zk(c.b,cl,c.a)}).then(function(){return b})}
    function Al(a){function b(g){d=!0;e&&e.cancel();yl(a).then(function(h){var m=c;if(h&&g&&g.url){var p=null;m=xg(g.url);-1!=m.indexOf("/__/auth/callback")&&(p=J(m),p=We(be(p,"firebaseError")||null),p=(p="object"===typeof p?Aa(p):null)?new sh(h.c,h.b,null,null,p,null,h.T()):new sh(h.c,h.b,m,h.f,null,null,h.T()));m=p||c;}zl(a,m);});}var c=new sh("unknown",null,null,null,new t("no-auth-event")),d=!1,e=Fd(500).then(function(){return yl(a).then(function(){d||zl(a,c);})}),f=l.handleOpenURL;l.handleOpenURL=function(g){0==
    g.toLowerCase().indexOf(L("BuildInfo.packageName",l).toLowerCase()+"://")&&b({url:g});if("function"===typeof f)try{f(g);}catch(h){console.error(h);}};vh||(vh=new uh);wh(b);}k.Ea=function(a){this.b.push(a);wl(this).o(function(b){"auth/invalid-cordova-configuration"===b.code&&(b=new sh("unknown",null,null,null,new t("no-auth-event")),a(b));});};k.Sa=function(a){Xa(this.b,function(b){return b==a});};function Bl(a){this.a=a;this.b=Vk();}var Cl={name:"pendingRedirect",F:"session"};function Dl(a){return a.b.set(Cl,"pending",a.a)}function El(a){return Zk(a.b,Cl,a.a)}function Fl(a){return a.b.get(Cl,a.a).then(function(b){return "pending"==b})}function Gl(a,b,c,d){this.i={};this.u=0;this.D=a;this.v=b;this.m=c;this.J=d;this.h=[];this.f=!1;this.l=q(this.s,this);this.b=new Hl;this.C=new Il;this.g=new Bl(Jl(this.v,this.m));this.c={};this.c.unknown=this.b;this.c.signInViaRedirect=this.b;this.c.linkViaRedirect=this.b;this.c.reauthViaRedirect=this.b;this.c.signInViaPopup=this.C;this.c.linkViaPopup=this.C;this.c.reauthViaPopup=this.C;this.a=Kl(this.D,this.v,this.m,Da,this.J);}
    function Kl(a,b,c,d,e){var f=firebase$1.SDK_VERSION||null;return Ge()?new sl(a,b,c,f,d,e):new Yj(a,b,c,f,d,e)}Gl.prototype.reset=function(){this.f=!1;this.a.Sa(this.l);this.a=Kl(this.D,this.v,this.m,null,this.J);this.i={};};function Ll(a){a.f||(a.f=!0,a.a.Ea(a.l));var b=a.a;return a.a.ma().o(function(c){a.a==b&&a.reset();throw c;})}
    function Ml(a){a.a.Xb()&&Ll(a).o(function(b){var c=new sh("unknown",null,null,null,new t("operation-not-supported-in-this-environment"));Nl(b)&&a.s(c);});a.a.Tb()||Ol(a.b);}function Pl(a,b){Va(a.h,b)||a.h.push(b);a.f||Fl(a.g).then(function(c){c?El(a.g).then(function(){Ll(a).o(function(d){var e=new sh("unknown",null,null,null,new t("operation-not-supported-in-this-environment"));Nl(d)&&a.s(e);});}):Ml(a);}).o(function(){Ml(a);});}function Ql(a,b){Xa(a.h,function(c){return c==b});}
    Gl.prototype.s=function(a){if(!a)throw new t("invalid-auth-event");6E5<=va()-this.u&&(this.i={},this.u=0);if(a&&a.getUid()&&this.i.hasOwnProperty(a.getUid()))return !1;for(var b=!1,c=0;c<this.h.length;c++){var d=this.h[c];if(d.Fb(a.c,a.b)){if(b=this.c[a.c])b.h(a,d),a&&(a.f||a.b)&&(this.i[a.getUid()]=!0,this.u=va());b=!0;break}}Ol(this.b);return b};var Rl=new Ze(2E3,1E4),Sl=new Ze(3E4,6E4);Gl.prototype.qa=function(){return this.b.qa()};
    function Tl(a,b,c,d,e,f,g){return a.a.Mb(b,c,d,function(){a.f||(a.f=!0,a.a.Ea(a.l));},function(){a.reset();},e,f,g)}function Nl(a){return a&&"auth/cordova-not-ready"==a.code?!0:!1}
    function Ul(a,b,c,d,e){var f;return Dl(a.g).then(function(){return a.a.Nb(b,c,d,e).o(function(g){if(Nl(g))throw new t("operation-not-supported-in-this-environment");f=g;return El(a.g).then(function(){throw f;})}).then(function(){return a.a.$b()?new D(function(){}):El(a.g).then(function(){return a.qa()}).then(function(){}).o(function(){})})})}function Vl(a,b,c,d,e){return a.a.Ob(d,function(f){b.na(c,null,f,e);},Rl.get())}var Wl={};function Jl(a,b,c){a=a+":"+b;c&&(a=a+":"+c.url);return a}
    function Xl(a,b,c,d){var e=Jl(b,c,d);Wl[e]||(Wl[e]=new Gl(a,b,c,d));return Wl[e]}function Hl(){this.b=null;this.f=[];this.c=[];this.a=null;this.i=this.g=!1;}Hl.prototype.reset=function(){this.b=null;this.a&&(this.a.cancel(),this.a=null);};
    Hl.prototype.h=function(a,b){if(a){this.reset();this.g=!0;var c=a.c,d=a.b,e=a.a&&"auth/web-storage-unsupported"==a.a.code,f=a.a&&"auth/operation-not-supported-in-this-environment"==a.a.code;this.i=!(!e&&!f);"unknown"!=c||e||f?a.a?(Yl(this,!0,null,a.a),E()):b.Fa(c,d)?Zl(this,a,b):F(new t("invalid-auth-event")):(Yl(this,!1,null,null),E());}else F(new t("invalid-auth-event"));};function Ol(a){a.g||(a.g=!0,Yl(a,!1,null,null));}function $l(a){a.g&&!a.i&&Yl(a,!1,null,null);}
    function Zl(a,b,c){c=c.Fa(b.c,b.b);var d=b.g,e=b.f,f=b.i,g=b.T(),h=!!b.c.match(/Redirect$/);c(d,e,g,f).then(function(m){Yl(a,h,m,null);}).o(function(m){Yl(a,h,null,m);});}function am(a,b){a.b=function(){return F(b)};if(a.c.length)for(var c=0;c<a.c.length;c++)a.c[c](b);}function bm(a,b){a.b=function(){return E(b)};if(a.f.length)for(var c=0;c<a.f.length;c++)a.f[c](b);}function Yl(a,b,c,d){b?d?am(a,d):bm(a,c):bm(a,{user:null});a.f=[];a.c=[];}
    Hl.prototype.qa=function(){var a=this;return new D(function(b,c){a.b?a.b().then(b,c):(a.f.push(b),a.c.push(c),cm(a));})};function cm(a){var b=new t("timeout");a.a&&a.a.cancel();a.a=Fd(Sl.get()).then(function(){a.b||(a.g=!0,Yl(a,!0,null,b));});}function Il(){}Il.prototype.h=function(a,b){if(a){var c=a.c,d=a.b;a.a?(b.na(a.c,null,a.a,a.b),E()):b.Fa(c,d)?dm(a,b):F(new t("invalid-auth-event"));}else F(new t("invalid-auth-event"));};
    function dm(a,b){var c=a.b,d=a.c;b.Fa(d,c)(a.g,a.f,a.T(),a.i).then(function(e){b.na(d,e,null,c);}).o(function(e){b.na(d,null,e,c);});}function em(){this.ib=!1;Object.defineProperty(this,"appVerificationDisabled",{get:function(){return this.ib},set:function(a){this.ib=a;},enumerable:!1});}function fm(a,b){this.a=b;M(this,"verificationId",a);}fm.prototype.confirm=function(a){a=ph(this.verificationId,a);return this.a(a)};function gm(a,b,c,d){return (new lh(a)).fb(b,c).then(function(e){return new fm(e,d)})}function hm(a){var b=ig(a);if(!(b&&b.exp&&b.auth_time&&b.iat))throw new t("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");N(this,{token:a,expirationTime:bf(1E3*b.exp),authTime:bf(1E3*b.auth_time),issuedAtTime:bf(1E3*b.iat),signInProvider:b.firebase&&b.firebase.sign_in_provider?b.firebase.sign_in_provider:null,signInSecondFactor:b.firebase&&b.firebase.sign_in_second_factor?b.firebase.sign_in_second_factor:null,claims:b});}
    function im(a,b,c){var d=b&&b[jm];if(!d)throw new t("argument-error","Internal assert: Invalid MultiFactorResolver");this.a=a;this.f=nb(b);this.g=c;this.c=new yg(null,d);this.b=[];var e=this;w(b[km]||[],function(f){(f=tf(f))&&e.b.push(f);});M(this,"auth",this.a);M(this,"session",this.c);M(this,"hints",this.b);}var km="mfaInfo",jm="mfaPendingCredential";im.prototype.Rc=function(a){var b=this;return a.sb(this.a.a,this.c).then(function(c){var d=nb(b.f);delete d[km];delete d[jm];z(d,c);return b.g(d)})};function lm(a,b,c,d){t.call(this,"multi-factor-auth-required",d,b);this.b=new im(a,b,c);M(this,"resolver",this.b);}r(lm,t);function mm(a,b,c){if(a&&n(a.serverResponse)&&"auth/multi-factor-auth-required"===a.code)try{return new lm(b,a.serverResponse,c,a.message)}catch(d){}return null}function nm(){}nm.prototype.sb=function(a,b,c){return b.type==zg?om(this,a,b,c):pm(this,a,b)};function om(a,b,c,d){return c.Ha().then(function(e){e={idToken:e};"undefined"!==typeof d&&(e.displayName=d);z(e,{phoneVerificationInfo:hh(a.a)});return O(b,Gj,e)})}function pm(a,b,c){return c.Ha().then(function(d){d={mfaPendingCredential:d};z(d,{phoneVerificationInfo:hh(a.a)});return O(b,Hj,d)})}function qm(a){M(this,"factorId",a.fa);this.a=a;}r(qm,nm);
    function rm(a){qm.call(this,a);if(this.a.fa!=lh.PROVIDER_ID)throw new t("argument-error","firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential");}r(rm,qm);function sm(a,b){G.call(this,a);for(var c in b)this[c]=b[c];}r(sm,G);function tm(a,b){this.a=a;this.b=[];this.c=q(this.yc,this);nd(this.a,"userReloaded",this.c);var c=[];b&&b.multiFactor&&b.multiFactor.enrolledFactors&&w(b.multiFactor.enrolledFactors,function(d){var e=null,f={};if(d){d.uid&&(f[qf]=d.uid);d.displayName&&(f[rf]=d.displayName);d.enrollmentTime&&(f[sf]=(new Date(d.enrollmentTime)).toISOString());d.phoneNumber&&(f[pf]=d.phoneNumber);try{e=new uf(f);}catch(g){}d=e;}else d=null;d&&c.push(d);});um(this,c);}
    function vm(a){var b=[];w(a.mfaInfo||[],function(c){(c=tf(c))&&b.push(c);});return b}k=tm.prototype;k.yc=function(a){um(this,vm(a.hd));};function um(a,b){a.b=b;M(a,"enrolledFactors",b);}k.Rb=function(){return this.a.I().then(function(a){return new yg(a,null)})};k.fc=function(a,b){var c=this,d=this.a.a;return this.Rb().then(function(e){return a.sb(d,e,b)}).then(function(e){wm(c.a,e);return c.a.reload()})};
    k.bd=function(a){var b=this,c="string"===typeof a?a:a.uid,d=this.a.a;return this.a.I().then(function(e){return O(d,Lj,{idToken:e,mfaEnrollmentId:c})}).then(function(e){var f=Qa(b.b,function(g){return g.uid!=c});um(b,f);wm(b.a,e);return b.a.reload().o(function(g){if("auth/user-token-expired"!=g.code)throw g;})})};k.w=function(){return {multiFactor:{enrolledFactors:Ra(this.b,function(a){return a.w()})}}};function xm(a,b,c){this.h=a;this.i=b;this.g=c;this.c=3E4;this.f=96E4;this.b=null;this.a=this.c;if(this.f<this.c)throw Error("Proactive refresh lower bound greater than upper bound!");}xm.prototype.start=function(){this.a=this.c;ym(this,!0);};function zm(a,b){if(b)return a.a=a.c,a.g();b=a.a;a.a*=2;a.a>a.f&&(a.a=a.f);return b}function ym(a,b){a.stop();a.b=Fd(zm(a,b)).then(function(){return af()}).then(function(){return a.h()}).then(function(){ym(a,!0);}).o(function(c){a.i(c)&&ym(a,!1);});}
    xm.prototype.stop=function(){this.b&&(this.b.cancel(),this.b=null);};function Am(a){this.f=a;this.b=this.a=null;this.c=Date.now();}Am.prototype.w=function(){return {apiKey:this.f.c,refreshToken:this.a,accessToken:this.b&&this.b.toString(),expirationTime:this.c}};function Bm(a,b){"undefined"===typeof b&&(a.b?(b=a.b,b=b.a-b.g):b=0);a.c=Date.now()+1E3*b;}function Cm(a,b){a.b=jg(b[Dg]||"");a.a=b.refreshToken;b=b.expiresIn;Bm(a,"undefined"!==typeof b?Number(b):void 0);}function Dm(a,b){a.b=b.b;a.a=b.a;a.c=b.c;}
    function Em(a,b){return Wi(a.f,b).then(function(c){a.b=jg(c.access_token);a.a=c.refresh_token;Bm(a,c.expires_in);return {accessToken:a.b.toString(),refreshToken:a.a}}).o(function(c){"auth/user-token-expired"==c.code&&(a.a=null);throw c;})}Am.prototype.getToken=function(a){a=!!a;return this.b&&!this.a?F(new t("user-token-expired")):a||!this.b||Date.now()>this.c-3E4?this.a?Em(this,{grant_type:"refresh_token",refresh_token:this.a}):E(null):E({accessToken:this.b.toString(),refreshToken:this.a})};function Fm(a,b){this.a=a||null;this.b=b||null;N(this,{lastSignInTime:bf(b||null),creationTime:bf(a||null)});}function Gm(a){return new Fm(a.a,a.b)}Fm.prototype.w=function(){return {lastLoginAt:this.b,createdAt:this.a}};function Hm(a,b,c,d,e,f){N(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,phoneNumber:f||null,providerId:b});}
    function Im(a,b,c){this.J=[];this.l=a.apiKey;this.m=a.appName;this.s=a.authDomain||null;var d=firebase$1.SDK_VERSION?Oe(firebase$1.SDK_VERSION):null;this.a=new Ii(this.l,Ca(Da),d);a.emulatorConfig&&Pi(this.a,a.emulatorConfig);this.b=new Am(this.a);Jm(this,b[Dg]);Cm(this.b,b);M(this,"refreshToken",this.b.a);Km(this,c||{});H.call(this);this.R=!1;this.s&&Re()&&(this.i=Xl(this.s,this.l,this.m));this.S=[];this.h=null;this.u=Lm(this);this.aa=q(this.hb,this);var e=this;this.ya=null;this.Oa=function(f){e.wa(f.h);};
    this.ja=null;this.Aa=function(f){Pi(e.a,f.c);};this.X=null;this.$=[];this.Ba=function(f){Mm(e,f.f);};this.ba=null;this.O=new tm(this,c);M(this,"multiFactor",this.O);}r(Im,H);Im.prototype.wa=function(a){this.ya=a;Oi(this.a,a);};Im.prototype.la=function(){return this.ya};function Nm(a,b){a.ja&&xd(a.ja,"languageCodeChanged",a.Oa);(a.ja=b)&&nd(b,"languageCodeChanged",a.Oa);}function Om(a,b){a.X&&xd(a.X,"emulatorConfigChanged",a.Aa);(a.X=b)&&nd(b,"emulatorConfigChanged",a.Aa);}
    function Mm(a,b){a.$=b;Ri(a.a,firebase$1.SDK_VERSION?Oe(firebase$1.SDK_VERSION,a.$):null);}Im.prototype.Ga=function(){return Za(this.$)};function Pm(a,b){a.ba&&xd(a.ba,"frameworkChanged",a.Ba);(a.ba=b)&&nd(b,"frameworkChanged",a.Ba);}Im.prototype.hb=function(){this.u.b&&(this.u.stop(),this.u.start());};function Qm(a){try{return firebase$1.app(a.m).auth()}catch(b){throw new t("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+a.m+"'!");}}
    function Lm(a){return new xm(function(){return a.I(!0)},function(b){return b&&"auth/network-request-failed"==b.code?!0:!1},function(){var b=a.b.c-Date.now()-3E5;return 0<b?b:0})}function Rm(a){a.D||a.u.b||(a.u.start(),xd(a,"tokenChanged",a.aa),nd(a,"tokenChanged",a.aa));}function Sm(a){xd(a,"tokenChanged",a.aa);a.u.stop();}function Jm(a,b){a.za=b;M(a,"_lat",b);}function Tm(a,b){Xa(a.S,function(c){return c==b});}
    function Um(a){for(var b=[],c=0;c<a.S.length;c++)b.push(a.S[c](a));return Jc(b).then(function(){return a})}function Vm(a){a.i&&!a.R&&(a.R=!0,Pl(a.i,a));}function Km(a,b){N(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,phoneNumber:b.phoneNumber||null,isAnonymous:b.isAnonymous||!1,tenantId:b.tenantId||null,metadata:new Fm(b.createdAt,b.lastLoginAt),providerData:[]});a.a.b=a.tenantId;}M(Im.prototype,"providerId","firebase");
    function Wm(){}function Xm(a){return E().then(function(){if(a.D)throw new t("app-deleted");})}function Ym(a){return Ra(a.providerData,function(b){return b.providerId})}function Zm(a,b){b&&($m(a,b.providerId),a.providerData.push(b));}function $m(a,b){Xa(a.providerData,function(c){return c.providerId==b});}function an(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&M(a,b,c);}
    function bn(a,b){a!=b&&(N(a,{uid:b.uid,displayName:b.displayName,photoURL:b.photoURL,email:b.email,emailVerified:b.emailVerified,phoneNumber:b.phoneNumber,isAnonymous:b.isAnonymous,tenantId:b.tenantId,providerData:[]}),b.metadata?M(a,"metadata",Gm(b.metadata)):M(a,"metadata",new Fm),w(b.providerData,function(c){Zm(a,c);}),Dm(a.b,b.b),M(a,"refreshToken",a.b.a),um(a.O,b.O.b));}k=Im.prototype;k.reload=function(){var a=this;return R(this,Xm(this).then(function(){return cn(a).then(function(){return Um(a)}).then(Wm)}))};
    function cn(a){return a.I().then(function(b){var c=a.isAnonymous;return dn(a,b).then(function(){c||an(a,"isAnonymous",!1);return b})})}k.oc=function(a){return this.I(a).then(function(b){return new hm(b)})};k.I=function(a){var b=this;return R(this,Xm(this).then(function(){return b.b.getToken(a)}).then(function(c){if(!c)throw new t("internal-error");c.accessToken!=b.za&&(Jm(b,c.accessToken),b.dispatchEvent(new sm("tokenChanged")));an(b,"refreshToken",c.refreshToken);return c.accessToken}))};
    function wm(a,b){b[Dg]&&a.za!=b[Dg]&&(Cm(a.b,b),a.dispatchEvent(new sm("tokenChanged")),Jm(a,b[Dg]),an(a,"refreshToken",a.b.a));}function dn(a,b){return O(a.a,Ij,{idToken:b}).then(q(a.Kc,a))}
    k.Kc=function(a){a=a.users;if(!a||!a.length)throw new t("internal-error");a=a[0];Km(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified,phoneNumber:a.phoneNumber,lastLoginAt:a.lastLoginAt,createdAt:a.createdAt,tenantId:a.tenantId});for(var b=en(a),c=0;c<b.length;c++)Zm(this,b[c]);an(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length));this.dispatchEvent(new sm("userReloaded",{hd:a}));};
    function en(a){return (a=a.providerUserInfo)&&a.length?Ra(a,function(b){return new Hm(b.rawId,b.providerId,b.email,b.displayName,b.photoUrl,b.phoneNumber)}):[]}k.Lc=function(a){gf("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.");return this.tb(a)};
    k.tb=function(a){var b=this,c=null;return R(this,a.c(this.a,this.uid).then(function(d){wm(b,d);c=fn(b,d,"reauthenticate");b.h=null;return b.reload()}).then(function(){return c}),!0)};function gn(a,b){return cn(a).then(function(){if(Va(Ym(a),b))return Um(a).then(function(){throw new t("provider-already-linked");})})}k.Cc=function(a){gf("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead.");return this.qb(a)};
    k.qb=function(a){var b=this,c=null;return R(this,gn(this,a.providerId).then(function(){return b.I()}).then(function(d){return a.b(b.a,d)}).then(function(d){c=fn(b,d,"link");return hn(b,d)}).then(function(){return c}))};k.Dc=function(a,b){var c=this;return R(this,gn(this,"phone").then(function(){return gm(Qm(c),a,b,q(c.qb,c))}))};k.Mc=function(a,b){var c=this;return R(this,E().then(function(){return gm(Qm(c),a,b,q(c.tb,c))}),!0)};
    function fn(a,b,c){var d=qh(b);b=og(b);return kf({user:a,credential:d,additionalUserInfo:b,operationType:c})}function hn(a,b){wm(a,b);return a.reload().then(function(){return a})}k.Bb=function(a){var b=this;return R(this,this.I().then(function(c){return b.a.Bb(c,a)}).then(function(c){wm(b,c);return b.reload()}))};k.ed=function(a){var b=this;return R(this,this.I().then(function(c){return a.b(b.a,c)}).then(function(c){wm(b,c);return b.reload()}))};
    k.Cb=function(a){var b=this;return R(this,this.I().then(function(c){return b.a.Cb(c,a)}).then(function(c){wm(b,c);return b.reload()}))};
    k.Db=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return Xm(this);var b=this;return R(this,this.I().then(function(c){return b.a.Db(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(c){wm(b,c);an(b,"displayName",c.displayName||null);an(b,"photoURL",c.photoUrl||null);w(b.providerData,function(d){"password"===d.providerId&&(M(d,"displayName",b.displayName),M(d,"photoURL",b.photoURL));});return Um(b)}).then(Wm))};
    k.cd=function(a){var b=this;return R(this,cn(this).then(function(c){return Va(Ym(b),a)?rj(b.a,c,[a]).then(function(d){var e={};w(d.providerUserInfo||[],function(f){e[f.providerId]=!0;});w(Ym(b),function(f){e[f]||$m(b,f);});e[lh.PROVIDER_ID]||M(b,"phoneNumber",null);return Um(b)}):Um(b).then(function(){throw new t("no-such-provider");})}))};
    k.delete=function(){var a=this;return R(this,this.I().then(function(b){return O(a.a,Fj,{idToken:b})}).then(function(){a.dispatchEvent(new sm("userDeleted"));})).then(function(){for(var b=0;b<a.J.length;b++)a.J[b].cancel("app-deleted");Nm(a,null);Om(a,null);Pm(a,null);a.J=[];a.D=!0;Sm(a);M(a,"refreshToken",null);a.i&&Ql(a.i,a);})};
    k.Fb=function(a,b){return "linkViaPopup"==a&&(this.g||null)==b&&this.f||"reauthViaPopup"==a&&(this.g||null)==b&&this.f||"linkViaRedirect"==a&&(this.ga||null)==b||"reauthViaRedirect"==a&&(this.ga||null)==b?!0:!1};k.na=function(a,b,c,d){"linkViaPopup"!=a&&"reauthViaPopup"!=a||d!=(this.g||null)||(c&&this.C?this.C(c):b&&!c&&this.f&&this.f(b),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.C);};
    k.Fa=function(a,b){return "linkViaPopup"==a&&b==(this.g||null)?q(this.Kb,this):"reauthViaPopup"==a&&b==(this.g||null)?q(this.Lb,this):"linkViaRedirect"==a&&(this.ga||null)==b?q(this.Kb,this):"reauthViaRedirect"==a&&(this.ga||null)==b?q(this.Lb,this):null};k.Ec=function(a){var b=this;return jn(this,"linkViaPopup",a,function(){return gn(b,a.providerId).then(function(){return Um(b)})},!1)};k.Nc=function(a){return jn(this,"reauthViaPopup",a,function(){return E()},!0)};
    function jn(a,b,c,d,e){if(!Re())return F(new t("operation-not-supported-in-this-environment"));if(a.h&&!e)return F(a.h);var f=ng(c.providerId),g=Qe(a.uid+":::"),h=null;(!Te()||Ie())&&a.s&&c.isOAuthProvider&&(h=ek(a.s,a.l,a.m,b,c,null,g,firebase$1.SDK_VERSION||null,null,null,a.tenantId));var m=ze(h,f&&f.ua,f&&f.ta);d=d().then(function(){kn(a);if(!e)return a.I().then(function(){})}).then(function(){return Tl(a.i,m,b,c,g,!!h,a.tenantId)}).then(function(){return new D(function(p,v){a.na(b,null,new t("cancelled-popup-request"),
    a.g||null);a.f=p;a.C=v;a.g=g;a.c=Vl(a.i,a,b,m,g);})}).then(function(p){m&&ye(m);return p?kf(p):null}).o(function(p){m&&ye(m);throw p;});return R(a,d,e)}k.Fc=function(a){var b=this;return ln(this,"linkViaRedirect",a,function(){return gn(b,a.providerId)},!1)};k.Oc=function(a){return ln(this,"reauthViaRedirect",a,function(){return E()},!0)};
    function ln(a,b,c,d,e){if(!Re())return F(new t("operation-not-supported-in-this-environment"));if(a.h&&!e)return F(a.h);var f=null,g=Qe(a.uid+":::");d=d().then(function(){kn(a);if(!e)return a.I().then(function(){})}).then(function(){a.ga=g;return Um(a)}).then(function(h){a.ha&&(h=a.ha,h=h.b.set(mn,a.w(),h.a));return h}).then(function(){return Ul(a.i,b,c,g,a.tenantId)}).o(function(h){f=h;if(a.ha)return nn(a.ha);throw f;}).then(function(){if(f)throw f;});return R(a,d,e)}
    function kn(a){if(!a.i||!a.R){if(a.i&&!a.R)throw new t("internal-error");throw new t("auth-domain-config-required");}}k.Kb=function(a,b,c,d){var e=this;this.c&&(this.c.cancel(),this.c=null);var f=null;c=this.I().then(function(g){return Hg(e.a,{requestUri:a,postBody:d,sessionId:b,idToken:g})}).then(function(g){f=fn(e,g,"link");return hn(e,g)}).then(function(){return f});return R(this,c)};
    k.Lb=function(a,b,c,d){var e=this;this.c&&(this.c.cancel(),this.c=null);var f=null,g=E().then(function(){return Cg(Ig(e.a,{requestUri:a,sessionId:b,postBody:d,tenantId:c}),e.uid)}).then(function(h){f=fn(e,h,"reauthenticate");wm(e,h);e.h=null;return e.reload()}).then(function(){return f});return R(this,g,!0)};
    k.ub=function(a){var b=this,c=null;return R(this,this.I().then(function(d){c=d;return "undefined"===typeof a||mb(a)?{}:bg(new Sf(a))}).then(function(d){return b.a.ub(c,d)}).then(function(d){if(b.email!=d)return b.reload()}).then(function(){}))};k.Eb=function(a,b){var c=this,d=null;return R(this,this.I().then(function(e){d=e;return "undefined"===typeof b||mb(b)?{}:bg(new Sf(b))}).then(function(e){return c.a.Eb(d,a,e)}).then(function(e){if(c.email!=e)return c.reload()}).then(function(){}))};
    function R(a,b,c){var d=on(a,b,c);a.J.push(d);d.oa(function(){Wa(a.J,d);});return d.o(function(e){var f=null;e&&"auth/multi-factor-auth-required"===e.code&&(f=mm(e.w(),Qm(a),q(a.jc,a)));throw f||e;})}k.jc=function(a){var b=null,c=this;a=Cg(E(a),c.uid).then(function(d){b=fn(c,d,"reauthenticate");wm(c,d);c.h=null;return c.reload()}).then(function(){return b});return R(this,a,!0)};
    function on(a,b,c){return a.h&&!c?(b.cancel(),F(a.h)):b.o(function(d){!d||"auth/user-disabled"!=d.code&&"auth/user-token-expired"!=d.code||(a.h||a.dispatchEvent(new sm("userInvalidated")),a.h=d);throw d;})}k.toJSON=function(){return this.w()};
    k.w=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,tenantId:this.tenantId,providerData:[],apiKey:this.l,appName:this.m,authDomain:this.s,stsTokenManager:this.b.w(),redirectEventId:this.ga||null};this.metadata&&z(a,this.metadata.w());w(this.providerData,function(b){a.providerData.push(lf(b));});z(a,this.O.w());return a};
    function pn(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName,emulatorConfig:a.emulatorConfig},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken){c[Dg]=a.stsTokenManager.accessToken;c.refreshToken=a.stsTokenManager.refreshToken||null;var d=a.stsTokenManager.expirationTime;d&&(c.expiresIn=(d-Date.now())/1E3);}else return null;var e=new Im(b,c,a);a.providerData&&w(a.providerData,function(f){f&&Zm(e,kf(f));});a.redirectEventId&&(e.ga=a.redirectEventId);
    return e}function qn(a,b,c,d){var e=new Im(a,b);c&&(e.ha=c);d&&Mm(e,d);return e.reload().then(function(){return e})}function rn(a,b,c,d){var e=a.b,f={};f[Dg]=e.b&&e.b.toString();f.refreshToken=e.a;b=new Im(b||{apiKey:a.l,authDomain:a.s,appName:a.m},f);c&&(b.ha=c);d&&Mm(b,d);bn(b,a);return b}function sn(a){this.a=a;this.b=Vk();}var mn={name:"redirectUser",F:"session"};function nn(a){return Zk(a.b,mn,a.a)}function tn(a,b){return a.b.get(mn,a.a).then(function(c){c&&b&&(c.authDomain=b);return pn(c||{})})}function un(a){this.a=a;this.b=Vk();this.c=null;this.f=vn(this);this.b.addListener(wn("local"),this.a,q(this.g,this));}un.prototype.g=function(){var a=this,b=wn("local");xn(this,function(){return E().then(function(){return a.c&&"local"!=a.c.F?a.b.get(b,a.a):null}).then(function(c){if(c)return yn(a,"local").then(function(){a.c=b;})})});};function yn(a,b){var c=[],d;for(d in Rk)Rk[d]!==b&&c.push(Zk(a.b,wn(Rk[d]),a.a));c.push(Zk(a.b,zn,a.a));return Ic(c)}
    function vn(a){var b=wn("local"),c=wn("session"),d=wn("none");return Yk(a.b,b,a.a).then(function(){return a.b.get(c,a.a)}).then(function(e){return e?c:a.b.get(d,a.a).then(function(f){return f?d:a.b.get(b,a.a).then(function(g){return g?b:a.b.get(zn,a.a).then(function(h){return h?wn(h):b})})})}).then(function(e){a.c=e;return yn(a,e.F)}).o(function(){a.c||(a.c=b);})}var zn={name:"persistence",F:"session"};function wn(a){return {name:"authUser",F:a}}
    un.prototype.xb=function(a){var b=null,c=this;Sk(a);return xn(this,function(){return a!=c.c.F?c.b.get(c.c,c.a).then(function(d){b=d;return yn(c,a)}).then(function(){c.c=wn(a);if(b)return c.b.set(c.c,b,c.a)}):E()})};function An(a){return xn(a,function(){return a.b.set(zn,a.c.F,a.a)})}function Bn(a,b){return xn(a,function(){return a.b.set(a.c,b.w(),a.a)})}function Cn(a){return xn(a,function(){return Zk(a.b,a.c,a.a)})}
    function Dn(a,b,c){return xn(a,function(){return a.b.get(a.c,a.a).then(function(d){d&&b&&(d.authDomain=b);d&&c&&(d.emulatorConfig=c);return pn(d||{})})})}function xn(a,b){a.f=a.f.then(b,b);return a.f}function En(a){this.l=!1;M(this,"settings",new em);M(this,"app",a);if(S(this).options&&S(this).options.apiKey)a=firebase$1.SDK_VERSION?Oe(firebase$1.SDK_VERSION):null,this.a=new Ii(S(this).options&&S(this).options.apiKey,Ca(Da),a);else throw new t("invalid-api-key");this.R=[];this.s=[];this.O=[];this.hb=firebase$1.INTERNAL.createSubscribe(q(this.zc,this));this.X=void 0;this.bc=firebase$1.INTERNAL.createSubscribe(q(this.Ac,this));Fn(this,null);this.i=new un(S(this).options.apiKey+":"+S(this).name);this.D=
    new sn(S(this).options.apiKey+":"+S(this).name);this.$=T(this,Gn(this));this.h=T(this,Hn(this));this.ba=!1;this.ja=q(this.Zc,this);this.Ba=q(this.da,this);this.ya=q(this.mc,this);this.za=q(this.wc,this);this.Aa=q(this.xc,this);this.b=null;In(this);this.INTERNAL={};this.INTERNAL["delete"]=q(this.delete,this);this.INTERNAL.logFramework=q(this.Gc,this);this.u=0;H.call(this);Jn(this);this.J=[];this.P=null;}r(En,H);function Kn(a){G.call(this,"languageCodeChanged");this.h=a;}r(Kn,G);
    function Ln(a){G.call(this,"emulatorConfigChanged");this.c=a;}r(Ln,G);function Mn(a){G.call(this,"frameworkChanged");this.f=a;}r(Mn,G);k=En.prototype;k.xb=function(a){a=this.i.xb(a);return T(this,a)};k.wa=function(a){this.aa===a||this.l||(this.aa=a,Oi(this.a,this.aa),this.dispatchEvent(new Kn(this.la())));};k.la=function(){return this.aa};k.fd=function(){var a=l.navigator;this.wa(a?a.languages&&a.languages[0]||a.language||a.userLanguage||null:null);};
    k.gd=function(a,b){if(!this.P){if(!/^https?:\/\//.test(a))throw new t("argument-error","Emulator URL must start with a valid scheme (http:// or https://).");b=b?!!b.disableWarnings:!1;Nn(b);this.P={url:a,ec:b};this.settings.ib=!0;Pi(this.a,this.P);this.dispatchEvent(new Ln(this.P));}};
    function Nn(a){"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");l.document&&!a&&Ee().then(function(){var b=l.document.createElement("div");b.innerText="Running in emulator mode. Do not use with production credentials.";b.style.position="fixed";b.style.width="100%";b.style.backgroundColor="#ffffff";b.style.border=".1em solid #000000";b.style.color=
    "#ff0000";b.style.bottom="0px";b.style.left="0px";b.style.margin="0px";b.style.zIndex=1E4;b.style.textAlign="center";b.classList.add("firebase-emulator-warning");l.document.body.appendChild(b);});}k.Gc=function(a){this.J.push(a);Ri(this.a,firebase$1.SDK_VERSION?Oe(firebase$1.SDK_VERSION,this.J):null);this.dispatchEvent(new Mn(this.J));};k.Ga=function(){return Za(this.J)};k.yb=function(a){this.S===a||this.l||(this.S=a,this.a.b=this.S);};k.T=function(){return this.S};
    function Jn(a){Object.defineProperty(a,"lc",{get:function(){return this.la()},set:function(b){this.wa(b);},enumerable:!1});a.aa=null;Object.defineProperty(a,"ti",{get:function(){return this.T()},set:function(b){this.yb(b);},enumerable:!1});a.S=null;Object.defineProperty(a,"emulatorConfig",{get:function(){if(this.P){var b=J(this.P.url);b=kf({protocol:b.c,host:b.a,port:b.g,options:kf({disableWarnings:this.P.ec})});}else b=null;return b},enumerable:!1});}
    k.toJSON=function(){return {apiKey:S(this).options.apiKey,authDomain:S(this).options.authDomain,appName:S(this).name,currentUser:U(this)&&U(this).w()}};function On(a){return a.Oa||F(new t("auth-domain-config-required"))}
    function In(a){var b=S(a).options.authDomain,c=S(a).options.apiKey;b&&Re()&&(a.Oa=a.$.then(function(){if(!a.l){a.b=Xl(b,c,S(a).name,a.P);Pl(a.b,a);U(a)&&Vm(U(a));if(a.m){Vm(a.m);var d=a.m;d.wa(a.la());Nm(d,a);d=a.m;Mm(d,a.J);Pm(d,a);d=a.m;Pi(d.a,a.P);Om(d,a);a.m=null;}return a.b}}));}k.Fb=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return !0;case "signInViaPopup":return this.g==b&&!!this.f;default:return !1}};
    k.na=function(a,b,c,d){"signInViaPopup"==a&&this.g==d&&(c&&this.C?this.C(c):b&&!c&&this.f&&this.f(b),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.C);};k.Fa=function(a,b){return "signInViaRedirect"==a||"signInViaPopup"==a&&this.g==b&&this.f?q(this.ic,this):null};k.ic=function(a,b,c,d){var e=this,f={requestUri:a,postBody:d,sessionId:b,tenantId:c};this.c&&(this.c.cancel(),this.c=null);return e.$.then(function(){return Pn(e,Fg(e.a,f))})};
    k.Xc=function(a){if(!Re())return F(new t("operation-not-supported-in-this-environment"));var b=this,c=ng(a.providerId),d=Qe(),e=null;(!Te()||Ie())&&S(this).options.authDomain&&a.isOAuthProvider&&(e=ek(S(this).options.authDomain,S(this).options.apiKey,S(this).name,"signInViaPopup",a,null,d,firebase$1.SDK_VERSION||null,null,null,this.T(),this.P));var f=ze(e,c&&c.ua,c&&c.ta);c=On(this).then(function(g){return Tl(g,f,"signInViaPopup",a,d,!!e,b.T())}).then(function(){return new D(function(g,h){b.na("signInViaPopup",
    null,new t("cancelled-popup-request"),b.g);b.f=g;b.C=h;b.g=d;b.c=Vl(b.b,b,"signInViaPopup",f,d);})}).then(function(g){f&&ye(f);return g?kf(g):null}).o(function(g){f&&ye(f);throw g;});return T(this,c)};k.Yc=function(a){if(!Re())return F(new t("operation-not-supported-in-this-environment"));var b=this,c=On(this).then(function(){return An(b.i)}).then(function(){return Ul(b.b,"signInViaRedirect",a,void 0,b.T())});return T(this,c)};
    function Qn(a){if(!Re())return F(new t("operation-not-supported-in-this-environment"));var b=On(a).then(function(){return a.b.qa()}).then(function(c){return c?kf(c):null});return T(a,b)}k.qa=function(){var a=this;return Qn(this).then(function(b){a.b&&$l(a.b.b);return b}).o(function(b){a.b&&$l(a.b.b);throw b;})};
    k.dd=function(a){if(!a)return F(new t("null-user"));if(this.S!=a.tenantId)return F(new t("tenant-id-mismatch"));var b=this,c={};c.apiKey=S(this).options.apiKey;c.authDomain=S(this).options.authDomain;c.appName=S(this).name;var d=rn(a,c,b.D,b.Ga());return T(this,this.h.then(function(){if(S(b).options.apiKey!=a.l)return d.reload()}).then(function(){if(U(b)&&a.uid==U(b).uid)return bn(U(b),a),b.da(a);Fn(b,d);Vm(d);return b.da(d)}).then(function(){Rn(b);}))};
    function Sn(a,b){var c={};c.apiKey=S(a).options.apiKey;c.authDomain=S(a).options.authDomain;c.appName=S(a).name;a.P&&(c.emulatorConfig=a.P);return a.$.then(function(){return qn(c,b,a.D,a.Ga())}).then(function(d){if(U(a)&&d.uid==U(a).uid)return bn(U(a),d),a.da(d);Fn(a,d);Vm(d);return a.da(d)}).then(function(){Rn(a);})}
    function Fn(a,b){U(a)&&(Tm(U(a),a.Ba),xd(U(a),"tokenChanged",a.ya),xd(U(a),"userDeleted",a.za),xd(U(a),"userInvalidated",a.Aa),Sm(U(a)));b&&(b.S.push(a.Ba),nd(b,"tokenChanged",a.ya),nd(b,"userDeleted",a.za),nd(b,"userInvalidated",a.Aa),0<a.u&&Rm(b));M(a,"currentUser",b);b&&(b.wa(a.la()),Nm(b,a),Mm(b,a.J),Pm(b,a),Pi(b.a,a.P),Om(b,a));}k.Ab=function(){var a=this,b=this.h.then(function(){a.b&&$l(a.b.b);if(!U(a))return E();Fn(a,null);return Cn(a.i).then(function(){Rn(a);})});return T(this,b)};
    function Tn(a){var b=tn(a.D,S(a).options.authDomain).then(function(c){if(a.m=c)c.ha=a.D;return nn(a.D)});return T(a,b)}function Gn(a){var b=S(a).options.authDomain,c=Tn(a).then(function(){return Dn(a.i,b,a.P)}).then(function(d){return d?(d.ha=a.D,a.m&&(a.m.ga||null)==(d.ga||null)?d:d.reload().then(function(){return Bn(a.i,d).then(function(){return d})}).o(function(e){return "auth/network-request-failed"==e.code?d:Cn(a.i)})):null}).then(function(d){Fn(a,d||null);});return T(a,c)}
    function Hn(a){return a.$.then(function(){return Qn(a)}).o(function(){}).then(function(){if(!a.l)return a.ja()}).o(function(){}).then(function(){if(!a.l){a.ba=!0;var b=a.i;b.b.addListener(wn("local"),b.a,a.ja);}})}
    k.Zc=function(){var a=this;return Dn(this.i,S(this).options.authDomain).then(function(b){if(!a.l){var c;if(c=U(a)&&b){c=U(a).uid;var d=b.uid;c=void 0===c||null===c||""===c||void 0===d||null===d||""===d?!1:c==d;}if(c)return bn(U(a),b),U(a).I();if(U(a)||b)Fn(a,b),b&&(Vm(b),b.ha=a.D),a.b&&Pl(a.b,a),Rn(a);}})};k.da=function(a){return Bn(this.i,a)};k.mc=function(){Rn(this);this.da(U(this));};k.wc=function(){this.Ab();};k.xc=function(){this.Ab();};
    function Pn(a,b){var c=null,d=null;return T(a,b.then(function(e){c=qh(e);d=og(e);return Sn(a,e)},function(e){var f=null;e&&"auth/multi-factor-auth-required"===e.code&&(f=mm(e.w(),a,q(a.kc,a)));throw f||e;}).then(function(){return kf({user:U(a),credential:c,additionalUserInfo:d,operationType:"signIn"})}))}k.kc=function(a){var b=this;return this.h.then(function(){return Pn(b,E(a))})};k.zc=function(a){var b=this;this.addAuthTokenListener(function(){a.next(U(b));});};
    k.Ac=function(a){var b=this;Un(this,function(){a.next(U(b));});};k.Ic=function(a,b,c){var d=this;this.ba&&Promise.resolve().then(function(){"function"===typeof a?a(U(d)):"function"===typeof a.next&&a.next(U(d));});return this.hb(a,b,c)};k.Hc=function(a,b,c){var d=this;this.ba&&Promise.resolve().then(function(){d.X=d.getUid();"function"===typeof a?a(U(d)):"function"===typeof a.next&&a.next(U(d));});return this.bc(a,b,c)};
    k.nc=function(a){var b=this,c=this.h.then(function(){return U(b)?U(b).I(a).then(function(d){return {accessToken:d}}):null});return T(this,c)};k.Tc=function(a){var b=this;return this.h.then(function(){return Pn(b,O(b.a,Kj,{token:a}))}).then(function(c){var d=c.user;an(d,"isAnonymous",!1);b.da(d);return c})};k.Uc=function(a,b){var c=this;return this.h.then(function(){return Pn(c,O(c.a,ah,{email:a,password:b}))})};
    k.dc=function(a,b){var c=this;return this.h.then(function(){return Pn(c,O(c.a,Ej,{email:a,password:b}))})};k.$a=function(a){var b=this;return this.h.then(function(){return Pn(b,a.ka(b.a))})};k.Sc=function(a){gf("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead.");return this.$a(a)};
    k.zb=function(){var a=this;return this.h.then(function(){var b=U(a);if(b&&b.isAnonymous){var c=kf({providerId:null,isNewUser:!1});return kf({user:b,credential:null,additionalUserInfo:c,operationType:"signIn"})}return Pn(a,a.a.zb()).then(function(d){var e=d.user;an(e,"isAnonymous",!0);a.da(e);return d})})};function S(a){return a.app}function U(a){return a.currentUser}k.getUid=function(){return U(this)&&U(this).uid||null};function Vn(a){return U(a)&&U(a)._lat||null}
    function Rn(a){if(a.ba){for(var b=0;b<a.s.length;b++)if(a.s[b])a.s[b](Vn(a));if(a.X!==a.getUid()&&a.O.length)for(a.X=a.getUid(),b=0;b<a.O.length;b++)if(a.O[b])a.O[b](Vn(a));}}k.cc=function(a){this.addAuthTokenListener(a);this.u++;0<this.u&&U(this)&&Rm(U(this));};k.Pc=function(a){var b=this;w(this.s,function(c){c==a&&b.u--;});0>this.u&&(this.u=0);0==this.u&&U(this)&&Sm(U(this));this.removeAuthTokenListener(a);};
    k.addAuthTokenListener=function(a){var b=this;this.s.push(a);T(this,this.h.then(function(){b.l||Va(b.s,a)&&a(Vn(b));}));};k.removeAuthTokenListener=function(a){Xa(this.s,function(b){return b==a});};function Un(a,b){a.O.push(b);T(a,a.h.then(function(){!a.l&&Va(a.O,b)&&a.X!==a.getUid()&&(a.X=a.getUid(),b(Vn(a)));}));}
    k.delete=function(){this.l=!0;for(var a=0;a<this.R.length;a++)this.R[a].cancel("app-deleted");this.R=[];this.i&&(a=this.i,a.b.removeListener(wn("local"),a.a,this.ja));this.b&&(Ql(this.b,this),$l(this.b.b));return Promise.resolve()};function T(a,b){a.R.push(b);b.oa(function(){Wa(a.R,b);});return b}k.hc=function(a){return T(this,aj(this.a,a))};k.Bc=function(a){return !!fh(a)};
    k.wb=function(a,b){var c=this;return T(this,E().then(function(){var d=new Sf(b);if(!d.c)throw new t("argument-error",$f+" must be true when sending sign in link to email");return bg(d)}).then(function(d){return c.a.wb(a,d)}).then(function(){}))};k.jd=function(a){return this.Ra(a).then(function(b){return b.data.email})};k.nb=function(a,b){return T(this,this.a.nb(a,b).then(function(){}))};k.Ra=function(a){return T(this,this.a.Ra(a).then(function(b){return new vf(b)}))};
    k.jb=function(a){return T(this,this.a.jb(a).then(function(){}))};k.vb=function(a,b){var c=this;return T(this,E().then(function(){return "undefined"===typeof b||mb(b)?{}:bg(new Sf(b))}).then(function(d){return c.a.vb(a,d)}).then(function(){}))};k.Wc=function(a,b){return T(this,gm(this,a,b,q(this.$a,this)))};
    k.Vc=function(a,b){var c=this;return T(this,E().then(function(){var d=b||re(),e=eh(a,d);d=fh(d);if(!d)throw new t("argument-error","Invalid email link!");if(d.tenantId!==c.T())throw new t("tenant-id-mismatch");return c.$a(e)}))};function Wn(){}Wn.prototype.render=function(){};Wn.prototype.reset=function(){};Wn.prototype.getResponse=function(){};Wn.prototype.execute=function(){};function Xn(){this.a={};this.b=1E12;}var Yn=null;Xn.prototype.render=function(a,b){this.a[this.b.toString()]=new Zn(a,b);return this.b++};Xn.prototype.reset=function(a){var b=$n(this,a);a=ao(a);b&&a&&(b.delete(),delete this.a[a]);};Xn.prototype.getResponse=function(a){return (a=$n(this,a))?a.getResponse():null};Xn.prototype.execute=function(a){(a=$n(this,a))&&a.execute();};function $n(a,b){return (b=ao(b))?a.a[b]||null:null}function ao(a){return (a="undefined"===typeof a?1E12:a)?a.toString():null}
    function Zn(a,b){this.g=!1;this.c=b;this.a=this.b=null;this.h="invisible"!==this.c.size;this.f=kc(a);var c=this;this.i=function(){c.execute();};this.h?this.execute():nd(this.f,"click",this.i);}Zn.prototype.getResponse=function(){bo(this);return this.b};
    Zn.prototype.execute=function(){bo(this);var a=this;this.a||(this.a=setTimeout(function(){a.b=Me();var b=a.c.callback,c=a.c["expired-callback"];if(b)try{b(a.b);}catch(d){}a.a=setTimeout(function(){a.a=null;a.b=null;if(c)try{c();}catch(d){}a.h&&a.execute();},6E4);},500));};Zn.prototype.delete=function(){bo(this);this.g=!0;clearTimeout(this.a);this.a=null;xd(this.f,"click",this.i);};function bo(a){if(a.g)throw Error("reCAPTCHA mock was already deleted!");}function co(){}M(co,"FACTOR_ID","phone");function eo(){}eo.prototype.g=function(){Yn||(Yn=new Xn);return E(Yn)};eo.prototype.c=function(){};var fo=null;function go(){this.b=l.grecaptcha?Infinity:0;this.f=null;this.a="__rcb"+Math.floor(1E6*Math.random()).toString();}var ho=new qb(rb,"https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),io=new Ze(3E4,6E4);
    go.prototype.g=function(a){var b=this;return new D(function(c,d){var e=setTimeout(function(){d(new t("network-request-failed"));},io.get());if(!l.grecaptcha||a!==b.f&&!b.b){l[b.a]=function(){if(l.grecaptcha){b.f=a;var g=l.grecaptcha.render;l.grecaptcha.render=function(h,m){h=g(h,m);b.b++;return h};clearTimeout(e);c(l.grecaptcha);}else clearTimeout(e),d(new t("internal-error"));delete l[b.a];};var f=zb(ho,{onload:b.a,hl:a||""});E(Bi(f)).o(function(){clearTimeout(e);d(new t("internal-error","Unable to load external reCAPTCHA dependencies!"));});}else clearTimeout(e),
    c(l.grecaptcha);})};go.prototype.c=function(){this.b--;};var jo=null;function ko(a,b,c,d,e,f,g){M(this,"type","recaptcha");this.c=this.f=null;this.D=!1;this.v=b;this.g=null;g?(fo||(fo=new eo),g=fo):(jo||(jo=new go),g=jo);this.m=g;this.a=c||{theme:"light",type:"image"};this.h=[];if(this.a[lo])throw new t("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");this.i="invisible"===this.a[mo];if(!l.document)throw new t("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
    if(!kc(b)||!this.i&&kc(b).hasChildNodes())throw new t("argument-error","reCAPTCHA container is either not found or already contains inner elements!");this.s=new Ii(a,f||null,e||null);this.u=d||function(){return null};var h=this;this.l=[];var m=this.a[no];this.a[no]=function(v){oo(h,v);if("function"===typeof m)m(v);else if("string"===typeof m){var B=L(m,l);"function"===typeof B&&B(v);}};var p=this.a[po];this.a[po]=function(){oo(h,null);if("function"===typeof p)p();else if("string"===typeof p){var v=
    L(p,l);"function"===typeof v&&v();}};}var no="callback",po="expired-callback",lo="sitekey",mo="size";function oo(a,b){for(var c=0;c<a.l.length;c++)try{a.l[c](b);}catch(d){}}function qo(a,b){Xa(a.l,function(c){return c==b});}function ro(a,b){a.h.push(b);b.oa(function(){Wa(a.h,b);});return b}k=ko.prototype;
    k.Ia=function(){var a=this;return this.f?this.f:this.f=ro(this,E().then(function(){if(Se()&&!Je())return Ee();throw new t("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");}).then(function(){return a.m.g(a.u())}).then(function(b){a.g=b;return O(a.s,Jj,{})}).then(function(b){a.a[lo]=b.recaptchaSiteKey;}).o(function(b){a.f=null;throw b;}))};
    k.render=function(){so(this);var a=this;return ro(this,this.Ia().then(function(){if(null===a.c){var b=a.v;if(!a.i){var c=kc(b);b=nc("DIV");c.appendChild(b);}a.c=a.g.render(b,a.a);}return a.c}))};k.verify=function(){so(this);var a=this;return ro(this,this.render().then(function(b){return new D(function(c){var d=a.g.getResponse(b);if(d)c(d);else {var e=function(f){f&&(qo(a,e),c(f));};a.l.push(e);a.i&&a.g.execute(a.c);}})}))};k.reset=function(){so(this);null!==this.c&&this.g.reset(this.c);};
    function so(a){if(a.D)throw new t("internal-error","RecaptchaVerifier instance has been destroyed.");}k.clear=function(){so(this);this.D=!0;this.m.c();for(var a=0;a<this.h.length;a++)this.h[a].cancel("RecaptchaVerifier instance has been destroyed.");if(!this.i){a=kc(this.v);for(var b;b=a.firstChild;)a.removeChild(b);}};
    function to(a,b,c){var d=!1;try{this.b=c||firebase$1.app();}catch(g){throw new t("argument-error","No firebase.app.App instance is currently initialized.");}if(this.b.options&&this.b.options.apiKey)c=this.b.options.apiKey;else throw new t("invalid-api-key");var e=this,f=null;try{f=this.b.auth().Ga();}catch(g){}try{d=this.b.auth().settings.appVerificationDisabledForTesting;}catch(g){}f=firebase$1.SDK_VERSION?Oe(firebase$1.SDK_VERSION,f):null;ko.call(this,c,a,b,function(){try{var g=e.b.auth().la();}catch(h){g=
    null;}return g},f,Ca(Da),d);}r(to,ko);function uo(a,b,c,d){a:{c=Array.prototype.slice.call(c);var e=0;for(var f=!1,g=0;g<b.length;g++)if(b[g].optional)f=!0;else {if(f)throw new t("internal-error","Argument validator encountered a required argument after an optional argument.");e++;}f=b.length;if(c.length<e||f<c.length)d="Expected "+(e==f?1==e?"1 argument":e+" arguments":e+"-"+f+" arguments")+" but got "+c.length+".";else {for(e=0;e<c.length;e++)if(f=b[e].optional&&void 0===c[e],!b[e].M(c[e])&&!f){b=b[e];if(0>e||e>=vo.length)throw new t("internal-error",
    "Argument validator received an unsupported number of arguments.");c=vo[e];d=(d?"":c+" argument ")+(b.name?'"'+b.name+'" ':"")+"must be "+b.K+".";break a}d=null;}}if(d)throw new t("argument-error",a+" failed: "+d);}var vo="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");function V(a,b){return {name:a||"",K:"a valid string",optional:!!b,M:function(c){return "string"===typeof c}}}
    function wo(a,b){return {name:a||"",K:"a boolean",optional:!!b,M:function(c){return "boolean"===typeof c}}}function W(a,b){return {name:a||"",K:"a valid object",optional:!!b,M:n}}function xo(a,b){return {name:a||"",K:"a function",optional:!!b,M:function(c){return "function"===typeof c}}}function yo(a,b){return {name:a||"",K:"null",optional:!!b,M:function(c){return null===c}}}function zo(){return {name:"",K:"an HTML element",optional:!1,M:function(a){return !!(a&&a instanceof Element)}}}
    function Ao(){return {name:"auth",K:"an instance of Firebase Auth",optional:!0,M:function(a){return !!(a&&a instanceof En)}}}function Bo(){return {name:"app",K:"an instance of Firebase App",optional:!0,M:function(a){return !!(a&&a instanceof firebase$1.app.App)}}}function Co(a){return {name:a?a+"Credential":"credential",K:a?"a valid "+a+" credential":"a valid credential",optional:!1,M:function(b){if(!b)return !1;var c=!a||b.providerId===a;return !(!b.ka||!c)}}}
    function Do(){return {name:"multiFactorAssertion",K:"a valid multiFactorAssertion",optional:!1,M:function(a){return a?!!a.sb:!1}}}function Eo(){return {name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(a){return !!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}}function Fo(a,b){return n(a)&&"string"===typeof a.type&&a.type===b&&"function"===typeof a.Ha}function Go(a){return n(a)&&"string"===typeof a.uid}
    function Ho(){return {name:"applicationVerifier",K:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,M:function(a){return !(!a||"string"!==typeof a.type||"function"!==typeof a.verify)}}}function X(a,b,c,d){return {name:c||"",K:a.K+" or "+b.K,optional:!!d,M:function(e){return a.M(e)||b.M(e)}}}function Y(a,b){for(var c in b){var d=b[c].name;a[d]=Io(d,a[c],b[c].j);}}function Jo(a,b){for(var c in b){var d=b[c].name;d!==c&&Object.defineProperty(a,d,{get:ua(function(e){return this[e]},c),set:ua(function(e,f,g,h){uo(e,[g],[h],!0);this[f]=h;},d,c,b[c].kb),enumerable:!0});}}function Z(a,b,c,d){a[b]=Io(b,c,d);}
    function Io(a,b,c){function d(){var g=Array.prototype.slice.call(arguments);uo(e,c,g);return b.apply(this,g)}if(!c)return b;var e=Ko(a),f;for(f in b)d[f]=b[f];for(f in b.prototype)d.prototype[f]=b.prototype[f];return d}function Ko(a){a=a.split(".");return a[a.length-1]}Y(En.prototype,{jb:{name:"applyActionCode",j:[V("code")]},Ra:{name:"checkActionCode",j:[V("code")]},nb:{name:"confirmPasswordReset",j:[V("code"),V("newPassword")]},dc:{name:"createUserWithEmailAndPassword",j:[V("email"),V("password")]},hc:{name:"fetchSignInMethodsForEmail",j:[V("email")]},qa:{name:"getRedirectResult",j:[]},Bc:{name:"isSignInWithEmailLink",j:[V("emailLink")]},Hc:{name:"onAuthStateChanged",j:[X(W(),xo(),"nextOrObserver"),xo("opt_error",!0),xo("opt_completed",!0)]},Ic:{name:"onIdTokenChanged",
    j:[X(W(),xo(),"nextOrObserver"),xo("opt_error",!0),xo("opt_completed",!0)]},vb:{name:"sendPasswordResetEmail",j:[V("email"),X(W("opt_actionCodeSettings",!0),yo(null,!0),"opt_actionCodeSettings",!0)]},wb:{name:"sendSignInLinkToEmail",j:[V("email"),W("actionCodeSettings")]},xb:{name:"setPersistence",j:[V("persistence")]},Sc:{name:"signInAndRetrieveDataWithCredential",j:[Co()]},zb:{name:"signInAnonymously",j:[]},$a:{name:"signInWithCredential",j:[Co()]},Tc:{name:"signInWithCustomToken",j:[V("token")]},
    Uc:{name:"signInWithEmailAndPassword",j:[V("email"),V("password")]},Vc:{name:"signInWithEmailLink",j:[V("email"),V("emailLink",!0)]},Wc:{name:"signInWithPhoneNumber",j:[V("phoneNumber"),Ho()]},Xc:{name:"signInWithPopup",j:[Eo()]},Yc:{name:"signInWithRedirect",j:[Eo()]},dd:{name:"updateCurrentUser",j:[X(function(a){return {name:"user",K:"an instance of Firebase User",optional:!!a,M:function(b){return !!(b&&b instanceof Im)}}}(),yo(),"user")]},Ab:{name:"signOut",j:[]},toJSON:{name:"toJSON",j:[V(null,
    !0)]},fd:{name:"useDeviceLanguage",j:[]},gd:{name:"useEmulator",j:[V("url"),W("options",!0)]},jd:{name:"verifyPasswordResetCode",j:[V("code")]}});Jo(En.prototype,{lc:{name:"languageCode",kb:X(V(),yo(),"languageCode")},ti:{name:"tenantId",kb:X(V(),yo(),"tenantId")}});En.Persistence=Rk;En.Persistence.LOCAL="local";En.Persistence.SESSION="session";En.Persistence.NONE="none";
    Y(Im.prototype,{"delete":{name:"delete",j:[]},oc:{name:"getIdTokenResult",j:[wo("opt_forceRefresh",!0)]},I:{name:"getIdToken",j:[wo("opt_forceRefresh",!0)]},Cc:{name:"linkAndRetrieveDataWithCredential",j:[Co()]},qb:{name:"linkWithCredential",j:[Co()]},Dc:{name:"linkWithPhoneNumber",j:[V("phoneNumber"),Ho()]},Ec:{name:"linkWithPopup",j:[Eo()]},Fc:{name:"linkWithRedirect",j:[Eo()]},Lc:{name:"reauthenticateAndRetrieveDataWithCredential",j:[Co()]},tb:{name:"reauthenticateWithCredential",j:[Co()]},Mc:{name:"reauthenticateWithPhoneNumber",
    j:[V("phoneNumber"),Ho()]},Nc:{name:"reauthenticateWithPopup",j:[Eo()]},Oc:{name:"reauthenticateWithRedirect",j:[Eo()]},reload:{name:"reload",j:[]},ub:{name:"sendEmailVerification",j:[X(W("opt_actionCodeSettings",!0),yo(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",j:[V(null,!0)]},cd:{name:"unlink",j:[V("provider")]},Bb:{name:"updateEmail",j:[V("email")]},Cb:{name:"updatePassword",j:[V("password")]},ed:{name:"updatePhoneNumber",j:[Co("phone")]},Db:{name:"updateProfile",j:[W("profile")]},
    Eb:{name:"verifyBeforeUpdateEmail",j:[V("email"),X(W("opt_actionCodeSettings",!0),yo(null,!0),"opt_actionCodeSettings",!0)]}});Y(Xn.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}});Y(Wn.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}});Y(D.prototype,{oa:{name:"finally"},o:{name:"catch"},then:{name:"then"}});
    Jo(em.prototype,{appVerificationDisabled:{name:"appVerificationDisabledForTesting",kb:wo("appVerificationDisabledForTesting")}});Y(fm.prototype,{confirm:{name:"confirm",j:[V("verificationCode")]}});Z(Bg,"fromJSON",function(a){a="string"===typeof a?JSON.parse(a):a;for(var b,c=[Mg,dh,kh,Jg],d=0;d<c.length;d++)if(b=c[d](a))return b;return null},[X(V(),W(),"json")]);Z(Zg,"credential",function(a,b){return new Yg(a,b)},[V("email"),V("password")]);Y(Yg.prototype,{w:{name:"toJSON",j:[V(null,!0)]}});
    Y(Qg.prototype,{Ca:{name:"addScope",j:[V("scope")]},Ka:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Qg,"credential",Rg,[X(V(),W(),"token")]);Z(Zg,"credentialWithLink",eh,[V("email"),V("emailLink")]);Y(Sg.prototype,{Ca:{name:"addScope",j:[V("scope")]},Ka:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Sg,"credential",Tg,[X(V(),W(),"token")]);Y(Ug.prototype,{Ca:{name:"addScope",j:[V("scope")]},Ka:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});
    Z(Ug,"credential",Vg,[X(V(),X(W(),yo()),"idToken"),X(V(),yo(),"accessToken",!0)]);Y(Wg.prototype,{Ka:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Wg,"credential",Xg,[X(V(),W(),"token"),V("secret",!0)]);Y(Pg.prototype,{Ca:{name:"addScope",j:[V("scope")]},credential:{name:"credential",j:[X(V(),X(W(),yo()),"optionsOrIdToken"),X(V(),yo(),"accessToken",!0)]},Ka:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Y(Kg.prototype,{w:{name:"toJSON",j:[V(null,!0)]}});
    Y(Eg.prototype,{w:{name:"toJSON",j:[V(null,!0)]}});Z(lh,"credential",ph,[V("verificationId"),V("verificationCode")]);
    Y(lh.prototype,{fb:{name:"verifyPhoneNumber",j:[X(V(),function(a,b){return {name:a||"phoneInfoOptions",K:"valid phone info options",optional:!!b,M:function(c){return c?c.session&&c.phoneNumber?Fo(c.session,zg)&&"string"===typeof c.phoneNumber:c.session&&c.multiFactorHint?Fo(c.session,Ag)&&Go(c.multiFactorHint):c.session&&c.multiFactorUid?Fo(c.session,Ag)&&"string"===typeof c.multiFactorUid:c.phoneNumber?"string"===typeof c.phoneNumber:!1:!1}}}(),"phoneInfoOptions"),Ho()]}});
    Y(gh.prototype,{w:{name:"toJSON",j:[V(null,!0)]}});Y(t.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(yh.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(xh.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(lm.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(im.prototype,{Rc:{name:"resolveSignIn",j:[Do()]}});
    Y(tm.prototype,{Rb:{name:"getSession",j:[]},fc:{name:"enroll",j:[Do(),V("displayName",!0)]},bd:{name:"unenroll",j:[X({name:"multiFactorInfo",K:"a valid multiFactorInfo",optional:!1,M:Go},V(),"multiFactorInfoIdentifier")]}});Y(to.prototype,{clear:{name:"clear",j:[]},render:{name:"render",j:[]},verify:{name:"verify",j:[]}});Z(Jf,"parseLink",Rf,[V("link")]);Z(co,"assertion",function(a){return new rm(a)},[Co("phone")]);
    (function(){if("undefined"!==typeof firebase$1&&firebase$1.INTERNAL&&firebase$1.INTERNAL.registerComponent){var a={ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Af,PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:Cf,VERIFY_AND_CHANGE_EMAIL:Bf,VERIFY_EMAIL:"VERIFY_EMAIL"}},Auth:En,AuthCredential:Bg,Error:t};Z(a,"EmailAuthProvider",Zg,[]);Z(a,"FacebookAuthProvider",Qg,[]);Z(a,"GithubAuthProvider",Sg,[]);Z(a,"GoogleAuthProvider",Ug,[]);Z(a,"TwitterAuthProvider",Wg,[]);
    Z(a,"OAuthProvider",Pg,[V("providerId")]);Z(a,"SAMLAuthProvider",Og,[V("providerId")]);Z(a,"PhoneAuthProvider",lh,[Ao()]);Z(a,"RecaptchaVerifier",to,[X(V(),zo(),"recaptchaContainer"),W("recaptchaParameters",!0),Bo()]);Z(a,"ActionCodeURL",Jf,[]);Z(a,"PhoneMultiFactorGenerator",co,[]);firebase$1.INTERNAL.registerComponent({name:"auth",instanceFactory:function(b){b=b.getProvider("app").getImmediate();return new En(b)},multipleInstances:!1,serviceProps:a,instantiationMode:"LAZY",type:"PUBLIC"});firebase$1.INTERNAL.registerComponent({name:"auth-internal",
    instanceFactory:function(b){b=b.getProvider("auth").getImmediate();return {getUid:q(b.getUid,b),getToken:q(b.nc,b),addAuthTokenListener:q(b.cc,b),removeAuthTokenListener:q(b.Pc,b)}},multipleInstances:!1,instantiationMode:"LAZY",type:"PRIVATE"});firebase$1.registerVersion("@firebase/auth","0.16.4");firebase$1.INTERNAL.extendNamespace({User:Im});}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();}).apply(typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {});

    class AuthManager {
      static login(email, password) {
        return new Promise((resolve, reject) => {
          firebase$1.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
            let user = userCredential.user;
            resolve(user);
          }).catch(reject);
        });
      }
    }

    var style = ":host {\n    display: grid;\n    grid-template-columns: auto 30vw;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.31);\n    padding: 5px;\n}\n\n#login input {\n    width: 10vw;\n}\n\n#login button {\n    width: 7.5vw;\n}";

    var __defProp = Object.defineProperty;
    var __publicField = (obj, key, value) => {
      if (typeof key !== "symbol")
        key += "";
      if (key in obj)
        return __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value});
      return obj[key] = value;
    };
    class LoginPanel extends I {
      constructor() {
        super(...arguments);
        __publicField(this, "state", {
          name: ""
        });
        __publicField(this, "success", new Event("success"));
      }
      render() {
        return L`
            <span>${this.state.name == "" ? "Not logged in." : `Logged in as ${this.state.name}`}</span>
            <div id="login">
                <input type="email" id="email" placeholder="Enter staff email" />
                <input type="password" id="pass" placeholder="Enter staff password" />
                <button onclick=${() => this.login()}>Login</button>
            </div>
        `;
      }
      login() {
        let email = this.root.querySelector("#email");
        let pass = this.root.querySelector("#pass");
        let user = AuthManager.login(email.value, pass.value);
        this.success.user = user;
        this.dispatchEvent(this.success);
      }
    }
    I.create({name: "login-panel", styles: [style]}, LoginPanel);

    const firebaseConfig = {
      apiKey: "AIzaSyCG3uN9ufwu_CMWvT-YEjBemdeeKbjFUnw",
      authDomain: "scratal-c77cb.firebaseapp.com",
      projectId: "scratal-c77cb",
      storageBucket: "scratal-c77cb.appspot.com",
      messagingSenderId: "634884394477",
      appId: "1:634884394477:web:ca9a8d63b689dd9b7b6be4",
      measurementId: "G-MPGMXMLP0K"
    };
    firebase$1.initializeApp(firebaseConfig);
    window.refer = firebase$1.storage().ref();
    class App extends I {
      render() {
        return L`
            <login-panel onsuccess=${(e) => this.update(e)} />
            <post-display />
        `;
      }
      update(e) {
        this.root.querySelector("post-display").setUser(e.user);
      }
    }
    I.create({name: "app-root"}, App);

    exports.App = App;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
