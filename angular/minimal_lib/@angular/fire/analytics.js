(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common'), require('rxjs/operators'), require('@angular/fire'), require('@angular/router'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('@angular/fire/analytics', ['exports', '@angular/core', 'rxjs', '@angular/common', 'rxjs/operators', '@angular/fire', '@angular/router', '@angular/platform-browser'], factory) :
    (global = global || self, factory((global.angular = global.angular || {}, global.angular.fire = global.angular.fire || {}, global.angular.fire.analytics = {}), global.ng.core, global.rxjs, global.ng.common, global.rxjs.operators, global.angular.fire, global.ng.router, global.ng.platformBrowser));
}(this, (function (exports, core, rxjs, common, operators, fire, router, platformBrowser) { 'use strict';

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
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
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

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
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

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function Config() { }
    ;
    /** @type {?} */
    var COLLECTION_ENABLED = new core.InjectionToken('angularfire2.analytics.analyticsCollectionEnabled');
    /** @type {?} */
    var APP_VERSION = new core.InjectionToken('angularfire2.analytics.appVersion');
    /** @type {?} */
    var APP_NAME = new core.InjectionToken('angularfire2.analytics.appName');
    /** @type {?} */
    var DEBUG_MODE = new core.InjectionToken('angularfire2.analytics.debugMode');
    /** @type {?} */
    var CONFIG = new core.InjectionToken('angularfire2.analytics.config');
    /** @type {?} */
    var APP_NAME_KEY = 'app_name';
    /** @type {?} */
    var APP_VERSION_KEY = 'app_version';
    /** @type {?} */
    var DEBUG_MODE_KEY = 'debug_mode';
    /** @type {?} */
    var ANALYTICS_ID_FIELD = 'measurementId';
    /** @type {?} */
    var GTAG_CONFIG_COMMAND = 'config';
    /** @type {?} */
    var GTAG_FUNCTION_NAME = 'gtag';
    /** @type {?} */
    var DATA_LAYER_NAME = 'dataLayer';
    // WARNING: interface has both a type and a value, skipping emit
    ;
    /** @type {?} */
    var ANALYTICS_INSTANCE_CACHE = Symbol();
    /** @type {?} */
    var ANALYTICS_INITIALIZED = Symbol();
    var AngularFireAnalytics = /** @class */ (function () {
        function AngularFireAnalytics(options, nameOrConfig, analyticsCollectionEnabled, providedAppVersion, providedAppName, debugModeEnabled, providedConfig, platformId, zone) {
            var _a, _b, _c;
            var _this = this;
            this.options = options;
            /** @type {?} */
            var schedulers = new fire["ɵAngularFireSchedulers"](zone);
            // Analytics errors if it's not unique from a measurementId standpoint, so we need to cache the instances
            if (!global[ANALYTICS_INSTANCE_CACHE]) {
                global[ANALYTICS_INSTANCE_CACHE] = {};
            }
            ;
            /** @type {?} */
            var analyticsInitialized = global[ANALYTICS_INITIALIZED];
            /** @type {?} */
            var analyticsInstanceCache = global[ANALYTICS_INSTANCE_CACHE];
            /** @type {?} */
            var analytics = analyticsInstanceCache[options[ANALYTICS_ID_FIELD]];
            if (common.isPlatformBrowser(platformId)) {
                window[DATA_LAYER_NAME] = window[DATA_LAYER_NAME] || [];
                this.gtag = window[GTAG_FUNCTION_NAME] || (/**
                 * @return {?}
                 */
                function () { window[DATA_LAYER_NAME].push(arguments); });
                if (!analyticsInitialized) {
                    analyticsInitialized = zone.runOutsideAngular((/**
                     * @return {?}
                     */
                    function () {
                        return new Promise((/**
                         * @param {?} resolve
                         * @return {?}
                         */
                        function (resolve) {
                            window[GTAG_FUNCTION_NAME] = (/**
                             * @param {...?} args
                             * @return {?}
                             */
                            function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                if (args[0] == 'js') {
                                    resolve();
                                }
                                _this.gtag.apply(_this, __spread(args));
                            });
                        }));
                    }));
                }
            }
            else {
                analyticsInitialized = Promise.resolve();
                this.gtag = (/**
                 * @return {?}
                 */
                function () { });
            }
            if (!analytics) {
                analytics = rxjs.of(undefined).pipe(operators.observeOn(schedulers.outsideAngular), operators.switchMap((/**
                 * @return {?}
                 */
                function () { return common.isPlatformBrowser(platformId) ? import('firebase/analytics') : rxjs.empty(); })), operators.map((/**
                 * @return {?}
                 */
                function () { return fire["ɵfirebaseAppFactory"](options, zone, nameOrConfig); })), operators.map((/**
                 * @param {?} app
                 * @return {?}
                 */
                function (app) { return app.analytics(); })), operators.tap((/**
                 * @param {?} analytics
                 * @return {?}
                 */
                function (analytics) {
                    if (analyticsCollectionEnabled === false) {
                        analytics.setAnalyticsCollectionEnabled(false);
                    }
                })), operators.shareReplay({ bufferSize: 1, refCount: false }));
                analyticsInstanceCache[options[ANALYTICS_ID_FIELD]] = analytics;
            }
            if (providedConfig) {
                this.updateConfig(providedConfig);
            }
            if (providedAppName) {
                this.updateConfig((_a = {}, _a[APP_NAME_KEY] = providedAppName, _a));
            }
            if (providedAppVersion) {
                this.updateConfig((_b = {}, _b[APP_VERSION_KEY] = providedAppVersion, _b));
            }
            if (debugModeEnabled) {
                this.updateConfig((_c = {}, _c[DEBUG_MODE_KEY] = 1, _c));
            }
            return fire["ɵlazySDKProxy"](this, analytics, zone);
        }
        /**
         * @param {?} config
         * @return {?}
         */
        AngularFireAnalytics.prototype.updateConfig = /**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, global[ANALYTICS_INITIALIZED]];
                        case 1:
                            _a.sent();
                            this.gtag(GTAG_CONFIG_COMMAND, this.options[ANALYTICS_ID_FIELD], __assign(__assign({}, config), { update: true }));
                            return [2 /*return*/];
                    }
                });
            });
        };
        ;
        AngularFireAnalytics.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'any'
                    },] }
        ];
        /** @nocollapse */
        AngularFireAnalytics.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [fire.FIREBASE_OPTIONS,] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [fire.FIREBASE_APP_NAME,] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [COLLECTION_ENABLED,] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [APP_VERSION,] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [APP_NAME,] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [DEBUG_MODE,] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [CONFIG,] }] },
            { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] },
            { type: core.NgZone }
        ]; };
        /** @nocollapse */ AngularFireAnalytics.ɵprov = core["ɵɵdefineInjectable"]({ factory: function AngularFireAnalytics_Factory() { return new AngularFireAnalytics(core["ɵɵinject"](fire.FIREBASE_OPTIONS), core["ɵɵinject"](fire.FIREBASE_APP_NAME, 8), core["ɵɵinject"](COLLECTION_ENABLED, 8), core["ɵɵinject"](APP_VERSION, 8), core["ɵɵinject"](APP_NAME, 8), core["ɵɵinject"](DEBUG_MODE, 8), core["ɵɵinject"](CONFIG, 8), core["ɵɵinject"](core.PLATFORM_ID), core["ɵɵinject"](core.NgZone)); }, token: AngularFireAnalytics, providedIn: "any" });
        return AngularFireAnalytics;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AngularFireAnalytics.prototype.gtag;
        /**
         * @type {?}
         * @private
         */
        AngularFireAnalytics.prototype.options;
        /* Skipping unhandled member: ;*/
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var FIREBASE_EVENT_ORIGIN_KEY = 'firebase_event_origin';
    /** @type {?} */
    var FIREBASE_PREVIOUS_SCREEN_CLASS_KEY = 'firebase_previous_class';
    /** @type {?} */
    var FIREBASE_PREVIOUS_SCREEN_INSTANCE_ID_KEY = 'firebase_previous_id';
    /** @type {?} */
    var FIREBASE_PREVIOUS_SCREEN_NAME_KEY = 'firebase_previous_screen';
    /** @type {?} */
    var FIREBASE_SCREEN_CLASS_KEY = 'firebase_screen_class';
    /** @type {?} */
    var FIREBASE_SCREEN_INSTANCE_ID_KEY = 'firebase_screen_id';
    /** @type {?} */
    var FIREBASE_SCREEN_NAME_KEY = 'firebase_screen';
    /** @type {?} */
    var OUTLET_KEY = 'outlet';
    /** @type {?} */
    var PAGE_PATH_KEY = 'page_path';
    /** @type {?} */
    var PAGE_TITLE_KEY = 'page_title';
    /** @type {?} */
    var SCREEN_CLASS_KEY = 'screen_class';
    /** @type {?} */
    var SCREEN_NAME_KEY = 'screen_name';
    /** @type {?} */
    var SCREEN_VIEW_EVENT = 'screen_view';
    /** @type {?} */
    var EVENT_ORIGIN_AUTO = 'auto';
    /** @type {?} */
    var DEFAULT_SCREEN_CLASS = '???';
    /** @type {?} */
    var NG_PRIMARY_OUTLET = 'primary';
    /** @type {?} */
    var SCREEN_INSTANCE_DELIMITER = '#';
    /** @type {?} */
    var ANNOTATIONS = '__annotations__';
    var ScreenTrackingService = /** @class */ (function () {
        function ScreenTrackingService(analytics, router$1, title, componentFactoryResolver, platformId, debugModeEnabled, zone, injector) {
            var _this = this;
            if (!router$1 || !common.isPlatformBrowser(platformId)) {
                return this;
            }
            zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var activationEndEvents = router$1.events.pipe(operators.filter((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return e instanceof router.ActivationEnd; })));
                /** @type {?} */
                var navigationEndEvents = router$1.events.pipe(operators.filter((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return e instanceof router.NavigationEnd; })));
                _this.disposable = navigationEndEvents.pipe(operators.withLatestFrom(activationEndEvents), operators.switchMap((/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var _b, _c, _d, _e, _f;
                    var _g = __read(_a, 2), navigationEnd = _g[0], activationEnd = _g[1];
                    // SEMVER: start using optional chains and nullish coalescing once we support newer typescript
                    /** @type {?} */
                    var page_path = navigationEnd.url;
                    /** @type {?} */
                    var screen_name = activationEnd.snapshot.routeConfig && activationEnd.snapshot.routeConfig.path || page_path;
                    /** @type {?} */
                    var params = (_b = {},
                        _b[SCREEN_NAME_KEY] = screen_name,
                        _b[PAGE_PATH_KEY] = page_path,
                        _b[FIREBASE_EVENT_ORIGIN_KEY] = EVENT_ORIGIN_AUTO,
                        _b[FIREBASE_SCREEN_NAME_KEY] = screen_name,
                        _b[OUTLET_KEY] = activationEnd.snapshot.outlet,
                        _b);
                    if (title) {
                        params[PAGE_TITLE_KEY] = title.getTitle();
                    }
                    /** @type {?} */
                    var component = activationEnd.snapshot.component;
                    /** @type {?} */
                    var routeConfig = activationEnd.snapshot.routeConfig;
                    /** @type {?} */
                    var loadChildren = routeConfig && routeConfig.loadChildren;
                    // TODO figure out how to handle minification
                    if (typeof loadChildren === "string") {
                        // SEMVER: this is the older lazy load style "./path#ClassName", drop this when we drop old ng
                        // TODO is it worth seeing if I can look up the component factory selector from the module name?
                        // it's lazy so it's not registered with componentFactoryResolver yet... seems a pain for a depreciated style
                        return rxjs.of(__assign(__assign({}, params), (_c = {}, _c[SCREEN_CLASS_KEY] = loadChildren.split('#')[1], _c)));
                    }
                    else if (typeof component === 'string') {
                        return rxjs.of(__assign(__assign({}, params), (_d = {}, _d[SCREEN_CLASS_KEY] = component, _d)));
                    }
                    else if (component) {
                        /** @type {?} */
                        var componentFactory = componentFactoryResolver.resolveComponentFactory(component);
                        return rxjs.of(__assign(__assign({}, params), (_e = {}, _e[SCREEN_CLASS_KEY] = componentFactory.selector, _e)));
                    }
                    else if (loadChildren) {
                        /** @type {?} */
                        var loadedChildren = loadChildren();
                        /** @type {?} */
                        var loadedChildren$ = (loadedChildren instanceof rxjs.Observable) ? loadedChildren : rxjs.from(Promise.resolve(loadedChildren));
                        return loadedChildren$.pipe(operators.map((/**
                         * @param {?} lazyModule
                         * @return {?}
                         */
                        function (lazyModule) {
                            var _a, _b, _c;
                            if (lazyModule instanceof core.NgModuleFactory) {
                                // AOT create an injector
                                /** @type {?} */
                                var moduleRef = lazyModule.create(injector);
                                // INVESTIGATE is this the right way to get at the matching route?
                                /** @type {?} */
                                var routes = moduleRef.injector.get(router.ROUTES);
                                /** @type {?} */
                                var component_1 = routes[0][0].component;
                                try {
                                    /** @type {?} */
                                    var componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory((/** @type {?} */ (component_1)));
                                    return __assign(__assign({}, params), (_a = {}, _a[SCREEN_CLASS_KEY] = componentFactory.selector, _a));
                                }
                                catch (_) {
                                    return __assign(__assign({}, params), (_b = {}, _b[SCREEN_CLASS_KEY] = DEFAULT_SCREEN_CLASS, _b));
                                }
                            }
                            else {
                                // JIT look at the annotations
                                // INVESTIGATE are there public APIs for this stuff?
                                /** @type {?} */
                                var declarations = [].concat.apply([], (lazyModule[ANNOTATIONS] || []).map((/**
                                 * @param {?} f
                                 * @return {?}
                                 */
                                function (f) { return f.declarations; })));
                                /** @type {?} */
                                var selectors = [].concat.apply([], declarations.map((/**
                                 * @param {?} c
                                 * @return {?}
                                 */
                                function (c) { return (c[ANNOTATIONS] || []).map((/**
                                 * @param {?} f
                                 * @return {?}
                                 */
                                function (f) { return f.selector; })); })));
                                // should I just be grabbing the selector like this or should i match against the route component?
                                //   const routerModule = lazyModule.ngInjectorDef.imports.find(i => i.ngModule && ....);
                                //   const route = routerModule.providers[0].find(p => p.provide == ROUTES).useValue[0];
                                return __assign(__assign({}, params), (_c = {}, _c[SCREEN_CLASS_KEY] = selectors[0] || DEFAULT_SCREEN_CLASS, _c));
                            }
                        })));
                    }
                    else {
                        return rxjs.of(__assign(__assign({}, params), (_f = {}, _f[SCREEN_CLASS_KEY] = DEFAULT_SCREEN_CLASS, _f)));
                    }
                })), operators.map((/**
                 * @param {?} params
                 * @return {?}
                 */
                function (params) {
                    var _a;
                    return (__assign((_a = {}, _a[FIREBASE_SCREEN_CLASS_KEY] = params[SCREEN_CLASS_KEY], _a[FIREBASE_SCREEN_INSTANCE_ID_KEY] = getScreenInstanceID(params), _a), params));
                })), operators.tap((/**
                 * @param {?} params
                 * @return {?}
                 */
                function (params) {
                    var _a, _b;
                    // TODO perhaps I can be smarter about this, bubble events up to the nearest outlet?
                    if (params[OUTLET_KEY] == NG_PRIMARY_OUTLET) {
                        analytics.setCurrentScreen(params[SCREEN_NAME_KEY]);
                        analytics.updateConfig((_a = {},
                            _a[PAGE_PATH_KEY] = params[PAGE_PATH_KEY],
                            _a[SCREEN_CLASS_KEY] = params[SCREEN_CLASS_KEY],
                            _a));
                        if (title) {
                            analytics.updateConfig((_b = {}, _b[PAGE_TITLE_KEY] = params[PAGE_TITLE_KEY], _b));
                        }
                    }
                })), operators.groupBy((/**
                 * @param {?} params
                 * @return {?}
                 */
                function (params) { return params[OUTLET_KEY]; })), operators.mergeMap((/**
                 * @param {?} group
                 * @return {?}
                 */
                function (group) { return group.pipe(operators.startWith(undefined), operators.pairwise()); })), operators.map((/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var _b;
                    var _c = __read(_a, 2), prior = _c[0], current = _c[1];
                    return prior ? __assign((_b = {}, _b[FIREBASE_PREVIOUS_SCREEN_CLASS_KEY] = prior[SCREEN_CLASS_KEY], _b[FIREBASE_PREVIOUS_SCREEN_NAME_KEY] = prior[SCREEN_NAME_KEY], _b[FIREBASE_PREVIOUS_SCREEN_INSTANCE_ID_KEY] = prior[FIREBASE_SCREEN_INSTANCE_ID_KEY], _b), (/** @type {?} */ (current))) : (/** @type {?} */ (current));
                })), operators.tap((/**
                 * @param {?} params
                 * @return {?}
                 */
                function (params) { return debugModeEnabled && console.info(SCREEN_VIEW_EVENT, params); })), operators.tap((/**
                 * @param {?} params
                 * @return {?}
                 */
                function (params) { return zone.runOutsideAngular((/**
                 * @return {?}
                 */
                function () { return analytics.logEvent(SCREEN_VIEW_EVENT, params); })); }))).subscribe();
            }));
        }
        /**
         * @return {?}
         */
        ScreenTrackingService.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this.disposable) {
                this.disposable.unsubscribe();
            }
        };
        ScreenTrackingService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'any'
                    },] }
        ];
        /** @nocollapse */
        ScreenTrackingService.ctorParameters = function () { return [
            { type: AngularFireAnalytics },
            { type: router.Router, decorators: [{ type: core.Optional }] },
            { type: platformBrowser.Title, decorators: [{ type: core.Optional }] },
            { type: core.ComponentFactoryResolver },
            { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [DEBUG_MODE,] }] },
            { type: core.NgZone },
            { type: core.Injector }
        ]; };
        /** @nocollapse */ ScreenTrackingService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function ScreenTrackingService_Factory() { return new ScreenTrackingService(core["ɵɵinject"](AngularFireAnalytics), core["ɵɵinject"](router.Router, 8), core["ɵɵinject"](platformBrowser.Title, 8), core["ɵɵinject"](core.ComponentFactoryResolver), core["ɵɵinject"](core.PLATFORM_ID), core["ɵɵinject"](DEBUG_MODE, 8), core["ɵɵinject"](core.NgZone), core["ɵɵinject"](core.INJECTOR)); }, token: ScreenTrackingService, providedIn: "any" });
        return ScreenTrackingService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ScreenTrackingService.prototype.disposable;
    }
    var UserTrackingService = /** @class */ (function () {
        // TODO a user properties injector
        function UserTrackingService(analytics, zone, platformId) {
            var _this = this;
            /** @type {?} */
            var schedulers = new fire["ɵAngularFireSchedulers"](zone);
            if (!common.isPlatformServer(platformId)) {
                zone.runOutsideAngular((/**
                 * @return {?}
                 */
                function () {
                    // @ts-ignore zap the import in the UMD
                    _this.disposable = rxjs.from(import('firebase/auth')).pipe(operators.observeOn(schedulers.outsideAngular), operators.switchMap((/**
                     * @return {?}
                     */
                    function () { return analytics.app; })), operators.map((/**
                     * @param {?} app
                     * @return {?}
                     */
                    function (app) { return app.auth(); })), operators.switchMap((/**
                     * @param {?} auth
                     * @return {?}
                     */
                    function (auth) { return new rxjs.Observable(auth.onAuthStateChanged.bind(auth)); })), operators.switchMap((/**
                     * @param {?} user
                     * @return {?}
                     */
                    function (user) { return analytics.setUserId(user ? user.uid : (/** @type {?} */ (null))); }))).subscribe();
                }));
            }
        }
        /**
         * @return {?}
         */
        UserTrackingService.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this.disposable) {
                this.disposable.unsubscribe();
            }
        };
        UserTrackingService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'any'
                    },] }
        ];
        /** @nocollapse */
        UserTrackingService.ctorParameters = function () { return [
            { type: AngularFireAnalytics },
            { type: core.NgZone },
            { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
        ]; };
        /** @nocollapse */ UserTrackingService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function UserTrackingService_Factory() { return new UserTrackingService(core["ɵɵinject"](AngularFireAnalytics), core["ɵɵinject"](core.NgZone), core["ɵɵinject"](core.PLATFORM_ID)); }, token: UserTrackingService, providedIn: "any" });
        return UserTrackingService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        UserTrackingService.prototype.disposable;
    }
    // this is an INT64 in iOS/Android but use INT32 cause javascript
    /** @type {?} */
    var nextScreenInstanceID = Math.floor(Math.random() * (Math.pow(2, 32) - 1)) - Math.pow(2, 31);
    /** @type {?} */
    var knownScreenInstanceIDs = {};
    /** @type {?} */
    var getScreenInstanceID = (/**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        // unique the screen class against the outlet name
        /** @type {?} */
        var screenInstanceKey = [
            params[SCREEN_CLASS_KEY],
            params[OUTLET_KEY]
        ].join(SCREEN_INSTANCE_DELIMITER);
        if (knownScreenInstanceIDs.hasOwnProperty(screenInstanceKey)) {
            return knownScreenInstanceIDs[screenInstanceKey];
        }
        else {
            /** @type {?} */
            var ret = nextScreenInstanceID++;
            knownScreenInstanceIDs[screenInstanceKey] = ret;
            return ret;
        }
    });
    var ɵ0 = getScreenInstanceID;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularFireAnalyticsModule = /** @class */ (function () {
        function AngularFireAnalyticsModule(analytics, screenTracking, userTracking) {
            // calling anything on analytics will eagerly load the SDK
            analytics.app;
        }
        AngularFireAnalyticsModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [AngularFireAnalytics]
                    },] }
        ];
        /** @nocollapse */
        AngularFireAnalyticsModule.ctorParameters = function () { return [
            { type: AngularFireAnalytics },
            { type: ScreenTrackingService, decorators: [{ type: core.Optional }] },
            { type: UserTrackingService, decorators: [{ type: core.Optional }] }
        ]; };
        return AngularFireAnalyticsModule;
    }());

    exports.APP_NAME = APP_NAME;
    exports.APP_VERSION = APP_VERSION;
    exports.AngularFireAnalytics = AngularFireAnalytics;
    exports.AngularFireAnalyticsModule = AngularFireAnalyticsModule;
    exports.COLLECTION_ENABLED = COLLECTION_ENABLED;
    exports.CONFIG = CONFIG;
    exports.DEBUG_MODE = DEBUG_MODE;
    exports.ScreenTrackingService = ScreenTrackingService;
    exports.UserTrackingService = UserTrackingService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
// source map elided