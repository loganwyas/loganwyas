/**
 * @license Angular v9.0.1
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('@angular/upgrade/static', ['exports', '@angular/core', '@angular/platform-browser'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.upgrade = global.ng.upgrade || {}, global.ng.upgrade.static = {}), global.ng.core, global.ng.platformBrowser));
}(this, (function (exports, core, platformBrowser) { 'use strict';

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function noNg() {
        throw new Error('AngularJS v1.x is not loaded!');
    }
    var noNgElement = (function () { return noNg(); });
    noNgElement.cleanData = noNg;
    var angular = {
        bootstrap: noNg,
        module: noNg,
        element: noNgElement,
        injector: noNg,
        version: undefined,
        resumeBootstrap: noNg,
        getTestability: noNg
    };
    try {
        if (window.hasOwnProperty('angular')) {
            angular = window.angular;
        }
    }
    catch (_a) {
        // ignore in CJS mode.
    }
    /**
     * @deprecated Use `setAngularJSGlobal` instead.
     *
     * @publicApi
     */
    function setAngularLib(ng) {
        setAngularJSGlobal(ng);
    }
    /**
     * @deprecated Use `getAngularJSGlobal` instead.
     *
     * @publicApi
     */
    function getAngularLib() {
        return getAngularJSGlobal();
    }
    /**
     * Resets the AngularJS global.
     *
     * Used when AngularJS is loaded lazily, and not available on `window`.
     *
     * @publicApi
     */
    function setAngularJSGlobal(ng) {
        angular = ng;
    }
    /**
     * Returns the current AngularJS global.
     *
     * @publicApi
     */
    function getAngularJSGlobal() {
        return angular;
    }
    var bootstrap = function (e, modules, config) {
        return angular.bootstrap(e, modules, config);
    };
    // Do not declare as `module` to avoid webpack bug
    // (see https://github.com/angular/angular/issues/30050).
    var module_ = function (prefix, dependencies) {
        return angular.module(prefix, dependencies);
    };
    var element = (function (e) { return angular.element(e); });
    element.cleanData = function (nodes) { return angular.element.cleanData(nodes); };
    var injector = function (modules, strictDi) { return angular.injector(modules, strictDi); };
    var resumeBootstrap = function () { return angular.resumeBootstrap(); };
    var getTestability = function (e) { return angular.getTestability(e); };

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
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var $COMPILE = '$compile';
    var $CONTROLLER = '$controller';
    var $DELEGATE = '$delegate';
    var $EXCEPTION_HANDLER = '$exceptionHandler';
    var $HTTP_BACKEND = '$httpBackend';
    var $INJECTOR = '$injector';
    var $INTERVAL = '$interval';
    var $PARSE = '$parse';
    var $PROVIDE = '$provide';
    var $ROOT_SCOPE = '$rootScope';
    var $SCOPE = '$scope';
    var $TEMPLATE_CACHE = '$templateCache';
    var $TEMPLATE_REQUEST = '$templateRequest';
    var $$TESTABILITY = '$$testability';
    var COMPILER_KEY = '$$angularCompiler';
    var DOWNGRADED_MODULE_COUNT_KEY = '$$angularDowngradedModuleCount';
    var GROUP_PROJECTABLE_NODES_KEY = '$$angularGroupProjectableNodes';
    var INJECTOR_KEY = '$$angularInjector';
    var LAZY_MODULE_REF = '$$angularLazyModuleRef';
    var NG_ZONE_KEY = '$$angularNgZone';
    var UPGRADE_APP_TYPE_KEY = '$$angularUpgradeAppType';
    var REQUIRE_INJECTOR = '?^^' + INJECTOR_KEY;
    var REQUIRE_NG_MODEL = '?ngModel';
    var UPGRADE_MODULE_NAME = '$$UpgradeModule';

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A `PropertyBinding` represents a mapping between a property name
     * and an attribute name. It is parsed from a string of the form
     * `"prop: attr"`; or simply `"propAndAttr" where the property
     * and attribute have the same identifier.
     */
    var PropertyBinding = /** @class */ (function () {
        function PropertyBinding(prop, attr) {
            this.prop = prop;
            this.attr = attr;
            this.parseBinding();
        }
        PropertyBinding.prototype.parseBinding = function () {
            this.bracketAttr = "[" + this.attr + "]";
            this.parenAttr = "(" + this.attr + ")";
            this.bracketParenAttr = "[(" + this.attr + ")]";
            var capitalAttr = this.attr.charAt(0).toUpperCase() + this.attr.substr(1);
            this.onAttr = "on" + capitalAttr;
            this.bindAttr = "bind" + capitalAttr;
            this.bindonAttr = "bindon" + capitalAttr;
        };
        return PropertyBinding;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var DIRECTIVE_PREFIX_REGEXP = /^(?:x|data)[:\-_]/i;
    var DIRECTIVE_SPECIAL_CHARS_REGEXP = /[:\-_]+(.)/g;
    function onError(e) {
        // TODO: (misko): We seem to not have a stack trace here!
        if (console.error) {
            console.error(e, e.stack);
        }
        else {
            // tslint:disable-next-line:no-console
            console.log(e, e.stack);
        }
        throw e;
    }
    function controllerKey(name) {
        return '$' + name + 'Controller';
    }
    function directiveNormalize(name) {
        return name.replace(DIRECTIVE_PREFIX_REGEXP, '')
            .replace(DIRECTIVE_SPECIAL_CHARS_REGEXP, function (_, letter) { return letter.toUpperCase(); });
    }
    function getTypeName(type) {
        // Return the name of the type or the first line of its stringified version.
        return type.overriddenName || type.name || type.toString().split('\n')[0];
    }
    function getDowngradedModuleCount($injector) {
        return $injector.has(DOWNGRADED_MODULE_COUNT_KEY) ? $injector.get(DOWNGRADED_MODULE_COUNT_KEY) :
            0;
    }
    function getUpgradeAppType($injector) {
        return $injector.has(UPGRADE_APP_TYPE_KEY) ? $injector.get(UPGRADE_APP_TYPE_KEY) :
            0 /* None */;
    }
    function isFunction(value) {
        return typeof value === 'function';
    }
    function validateInjectionKey($injector, downgradedModule, injectionKey, attemptedAction) {
        var upgradeAppType = getUpgradeAppType($injector);
        var downgradedModuleCount = getDowngradedModuleCount($injector);
        // Check for common errors.
        switch (upgradeAppType) {
            case 1 /* Dynamic */:
            case 2 /* Static */:
                if (downgradedModule) {
                    throw new Error("Error while " + attemptedAction + ": 'downgradedModule' unexpectedly specified.\n" +
                        'You should not specify a value for \'downgradedModule\', unless you are downgrading ' +
                        'more than one Angular module (via \'downgradeModule()\').');
                }
                break;
            case 3 /* Lite */:
                if (!downgradedModule && (downgradedModuleCount >= 2)) {
                    throw new Error("Error while " + attemptedAction + ": 'downgradedModule' not specified.\n" +
                        'This application contains more than one downgraded Angular module, thus you need to ' +
                        'always specify \'downgradedModule\' when downgrading components and injectables.');
                }
                if (!$injector.has(injectionKey)) {
                    throw new Error("Error while " + attemptedAction + ": Unable to find the specified downgraded module.\n" +
                        'Did you forget to downgrade an Angular module or include it in the AngularJS ' +
                        'application?');
                }
                break;
            default:
                throw new Error("Error while " + attemptedAction + ": Not a valid '@angular/upgrade' application.\n" +
                    'Did you forget to downgrade an Angular module or include it in the AngularJS ' +
                    'application?');
        }
    }
    var Deferred = /** @class */ (function () {
        function Deferred() {
            var _this = this;
            this.promise = new Promise(function (res, rej) {
                _this.resolve = res;
                _this.reject = rej;
            });
        }
        return Deferred;
    }());
    /**
     * @return Whether the passed-in component implements the subset of the
     *     `ControlValueAccessor` interface needed for AngularJS `ng-model`
     *     compatibility.
     */
    function supportsNgModel(component) {
        return typeof component.writeValue === 'function' &&
            typeof component.registerOnChange === 'function';
    }
    /**
     * Glue the AngularJS `NgModelController` (if it exists) to the component
     * (if it implements the needed subset of the `ControlValueAccessor` interface).
     */
    function hookupNgModel(ngModel, component) {
        if (ngModel && supportsNgModel(component)) {
            ngModel.$render = function () { component.writeValue(ngModel.$viewValue); };
            component.registerOnChange(ngModel.$setViewValue.bind(ngModel));
            if (typeof component.registerOnTouched === 'function') {
                component.registerOnTouched(ngModel.$setTouched.bind(ngModel));
            }
        }
    }
    /**
     * Test two values for strict equality, accounting for the fact that `NaN !== NaN`.
     */
    function strictEquals(val1, val2) {
        return val1 === val2 || (val1 !== val1 && val2 !== val2);
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var INITIAL_VALUE = {
        __UNINITIALIZED__: true
    };
    var DowngradeComponentAdapter = /** @class */ (function () {
        function DowngradeComponentAdapter(element, attrs, scope, ngModel, parentInjector, $injector, $compile, $parse, componentFactory, wrapCallback) {
            this.element = element;
            this.attrs = attrs;
            this.scope = scope;
            this.ngModel = ngModel;
            this.parentInjector = parentInjector;
            this.$injector = $injector;
            this.$compile = $compile;
            this.$parse = $parse;
            this.componentFactory = componentFactory;
            this.wrapCallback = wrapCallback;
            this.implementsOnChanges = false;
            this.inputChangeCount = 0;
            this.inputChanges = {};
            this.componentScope = scope.$new();
        }
        DowngradeComponentAdapter.prototype.compileContents = function () {
            var _this = this;
            var compiledProjectableNodes = [];
            var projectableNodes = this.groupProjectableNodes();
            var linkFns = projectableNodes.map(function (nodes) { return _this.$compile(nodes); });
            this.element.empty();
            linkFns.forEach(function (linkFn) {
                linkFn(_this.scope, function (clone) {
                    compiledProjectableNodes.push(clone);
                    _this.element.append(clone);
                });
            });
            return compiledProjectableNodes;
        };
        DowngradeComponentAdapter.prototype.createComponent = function (projectableNodes) {
            var providers = [{ provide: $SCOPE, useValue: this.componentScope }];
            var childInjector = core.Injector.create({ providers: providers, parent: this.parentInjector, name: 'DowngradeComponentAdapter' });
            this.componentRef =
                this.componentFactory.create(childInjector, projectableNodes, this.element[0]);
            this.viewChangeDetector = this.componentRef.injector.get(core.ChangeDetectorRef);
            this.changeDetector = this.componentRef.changeDetectorRef;
            this.component = this.componentRef.instance;
            // testability hook is commonly added during component bootstrap in
            // packages/core/src/application_ref.bootstrap()
            // in downgraded application, component creation will take place here as well as adding the
            // testability hook.
            var testability = this.componentRef.injector.get(core.Testability, null);
            if (testability) {
                this.componentRef.injector.get(core.TestabilityRegistry)
                    .registerApplication(this.componentRef.location.nativeElement, testability);
            }
            hookupNgModel(this.ngModel, this.component);
        };
        DowngradeComponentAdapter.prototype.setupInputs = function (manuallyAttachView, propagateDigest) {
            var _this = this;
            if (propagateDigest === void 0) { propagateDigest = true; }
            var attrs = this.attrs;
            var inputs = this.componentFactory.inputs || [];
            var _loop_1 = function (i) {
                var input = new PropertyBinding(inputs[i].propName, inputs[i].templateName);
                var expr = null;
                if (attrs.hasOwnProperty(input.attr)) {
                    var observeFn_1 = (function (prop) {
                        var prevValue = INITIAL_VALUE;
                        return function (currValue) {
                            // Initially, both `$observe()` and `$watch()` will call this function.
                            if (!strictEquals(prevValue, currValue)) {
                                if (prevValue === INITIAL_VALUE) {
                                    prevValue = currValue;
                                }
                                _this.updateInput(prop, prevValue, currValue);
                                prevValue = currValue;
                            }
                        };
                    })(input.prop);
                    attrs.$observe(input.attr, observeFn_1);
                    // Use `$watch()` (in addition to `$observe()`) in order to initialize the input in time
                    // for `ngOnChanges()`. This is necessary if we are already in a `$digest`, which means that
                    // `ngOnChanges()` (which is called by a watcher) will run before the `$observe()` callback.
                    var unwatch_1 = this_1.componentScope.$watch(function () {
                        unwatch_1();
                        unwatch_1 = null;
                        observeFn_1(attrs[input.attr]);
                    });
                }
                else if (attrs.hasOwnProperty(input.bindAttr)) {
                    expr = attrs[input.bindAttr];
                }
                else if (attrs.hasOwnProperty(input.bracketAttr)) {
                    expr = attrs[input.bracketAttr];
                }
                else if (attrs.hasOwnProperty(input.bindonAttr)) {
                    expr = attrs[input.bindonAttr];
                }
                else if (attrs.hasOwnProperty(input.bracketParenAttr)) {
                    expr = attrs[input.bracketParenAttr];
                }
                if (expr != null) {
                    var watchFn = (function (prop) { return function (currValue, prevValue) {
                        return _this.updateInput(prop, prevValue, currValue);
                    }; })(input.prop);
                    this_1.componentScope.$watch(expr, watchFn);
                }
            };
            var this_1 = this;
            for (var i = 0; i < inputs.length; i++) {
                _loop_1(i);
            }
            // Invoke `ngOnChanges()` and Change Detection (when necessary)
            var detectChanges = function () { return _this.changeDetector.detectChanges(); };
            var prototype = this.componentFactory.componentType.prototype;
            this.implementsOnChanges = !!(prototype && prototype.ngOnChanges);
            this.componentScope.$watch(function () { return _this.inputChangeCount; }, this.wrapCallback(function () {
                // Invoke `ngOnChanges()`
                if (_this.implementsOnChanges) {
                    var inputChanges = _this.inputChanges;
                    _this.inputChanges = {};
                    _this.component.ngOnChanges(inputChanges);
                }
                _this.viewChangeDetector.markForCheck();
                // If opted out of propagating digests, invoke change detection when inputs change.
                if (!propagateDigest) {
                    detectChanges();
                }
            }));
            // If not opted out of propagating digests, invoke change detection on every digest
            if (propagateDigest) {
                this.componentScope.$watch(this.wrapCallback(detectChanges));
            }
            // If necessary, attach the view so that it will be dirty-checked.
            // (Allow time for the initial input values to be set and `ngOnChanges()` to be called.)
            if (manuallyAttachView || !propagateDigest) {
                var unwatch_2 = this.componentScope.$watch(function () {
                    unwatch_2();
                    unwatch_2 = null;
                    var appRef = _this.parentInjector.get(core.ApplicationRef);
                    appRef.attachView(_this.componentRef.hostView);
                });
            }
        };
        DowngradeComponentAdapter.prototype.setupOutputs = function () {
            var attrs = this.attrs;
            var outputs = this.componentFactory.outputs || [];
            for (var j = 0; j < outputs.length; j++) {
                var output = new PropertyBinding(outputs[j].propName, outputs[j].templateName);
                var bindonAttr = output.bindonAttr.substring(0, output.bindonAttr.length - 6);
                var bracketParenAttr = "[(" + output.bracketParenAttr.substring(2, output.bracketParenAttr.length - 8) + ")]";
                // order below is important - first update bindings then evaluate expressions
                if (attrs.hasOwnProperty(bindonAttr)) {
                    this.subscribeToOutput(output, attrs[bindonAttr], true);
                }
                if (attrs.hasOwnProperty(bracketParenAttr)) {
                    this.subscribeToOutput(output, attrs[bracketParenAttr], true);
                }
                if (attrs.hasOwnProperty(output.onAttr)) {
                    this.subscribeToOutput(output, attrs[output.onAttr]);
                }
                if (attrs.hasOwnProperty(output.parenAttr)) {
                    this.subscribeToOutput(output, attrs[output.parenAttr]);
                }
            }
        };
        DowngradeComponentAdapter.prototype.subscribeToOutput = function (output, expr, isAssignment) {
            var _this = this;
            if (isAssignment === void 0) { isAssignment = false; }
            var getter = this.$parse(expr);
            var setter = getter.assign;
            if (isAssignment && !setter) {
                throw new Error("Expression '" + expr + "' is not assignable!");
            }
            var emitter = this.component[output.prop];
            if (emitter) {
                emitter.subscribe({
                    next: isAssignment ? function (v) { return setter(_this.scope, v); } :
                        function (v) { return getter(_this.scope, { '$event': v }); }
                });
            }
            else {
                throw new Error("Missing emitter '" + output.prop + "' on component '" + getTypeName(this.componentFactory.componentType) + "'!");
            }
        };
        DowngradeComponentAdapter.prototype.registerCleanup = function () {
            var _this = this;
            var testabilityRegistry = this.componentRef.injector.get(core.TestabilityRegistry);
            var destroyComponentRef = this.wrapCallback(function () { return _this.componentRef.destroy(); });
            var destroyed = false;
            this.element.on('$destroy', function () { return _this.componentScope.$destroy(); });
            this.componentScope.$on('$destroy', function () {
                if (!destroyed) {
                    destroyed = true;
                    testabilityRegistry.unregisterApplication(_this.componentRef.location.nativeElement);
                    destroyComponentRef();
                }
            });
        };
        DowngradeComponentAdapter.prototype.getInjector = function () { return this.componentRef.injector; };
        DowngradeComponentAdapter.prototype.updateInput = function (prop, prevValue, currValue) {
            if (this.implementsOnChanges) {
                this.inputChanges[prop] = new core.SimpleChange(prevValue, currValue, prevValue === currValue);
            }
            this.inputChangeCount++;
            this.component[prop] = currValue;
        };
        DowngradeComponentAdapter.prototype.groupProjectableNodes = function () {
            var ngContentSelectors = this.componentFactory.ngContentSelectors;
            return groupNodesBySelector(ngContentSelectors, this.element.contents());
        };
        return DowngradeComponentAdapter;
    }());
    /**
     * Group a set of DOM nodes into `ngContent` groups, based on the given content selectors.
     */
    function groupNodesBySelector(ngContentSelectors, nodes) {
        var projectableNodes = [];
        var wildcardNgContentIndex;
        for (var i = 0, ii = ngContentSelectors.length; i < ii; ++i) {
            projectableNodes[i] = [];
        }
        for (var j = 0, jj = nodes.length; j < jj; ++j) {
            var node = nodes[j];
            var ngContentIndex = findMatchingNgContentIndex(node, ngContentSelectors);
            if (ngContentIndex != null) {
                projectableNodes[ngContentIndex].push(node);
            }
        }
        return projectableNodes;
    }
    function findMatchingNgContentIndex(element, ngContentSelectors) {
        var ngContentIndices = [];
        var wildcardNgContentIndex = -1;
        for (var i = 0; i < ngContentSelectors.length; i++) {
            var selector = ngContentSelectors[i];
            if (selector === '*') {
                wildcardNgContentIndex = i;
            }
            else {
                if (matchesSelector(element, selector)) {
                    ngContentIndices.push(i);
                }
            }
        }
        ngContentIndices.sort();
        if (wildcardNgContentIndex !== -1) {
            ngContentIndices.push(wildcardNgContentIndex);
        }
        return ngContentIndices.length ? ngContentIndices[0] : null;
    }
    var _matches;
    function matchesSelector(el, selector) {
        if (!_matches) {
            var elProto = Element.prototype;
            _matches = elProto.matches || elProto.matchesSelector || elProto.mozMatchesSelector ||
                elProto.msMatchesSelector || elProto.oMatchesSelector || elProto.webkitMatchesSelector;
        }
        return el.nodeType === Node.ELEMENT_NODE ? _matches.call(el, selector) : false;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function isThenable(obj) {
        return !!obj && isFunction(obj.then);
    }
    /**
     * Synchronous, promise-like object.
     */
    var SyncPromise = /** @class */ (function () {
        function SyncPromise() {
            this.resolved = false;
            this.callbacks = [];
        }
        SyncPromise.all = function (valuesOrPromises) {
            var aggrPromise = new SyncPromise();
            var resolvedCount = 0;
            var results = [];
            var resolve = function (idx, value) {
                results[idx] = value;
                if (++resolvedCount === valuesOrPromises.length)
                    aggrPromise.resolve(results);
            };
            valuesOrPromises.forEach(function (p, idx) {
                if (isThenable(p)) {
                    p.then(function (v) { return resolve(idx, v); });
                }
                else {
                    resolve(idx, p);
                }
            });
            return aggrPromise;
        };
        SyncPromise.prototype.resolve = function (value) {
            // Do nothing, if already resolved.
            if (this.resolved)
                return;
            this.value = value;
            this.resolved = true;
            // Run the queued callbacks.
            this.callbacks.forEach(function (callback) { return callback(value); });
            this.callbacks.length = 0;
        };
        SyncPromise.prototype.then = function (callback) {
            if (this.resolved) {
                callback(this.value);
            }
            else {
                this.callbacks.push(callback);
            }
        };
        return SyncPromise;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @description
     *
     * A helper function that allows an Angular component to be used from AngularJS.
     *
     * *Part of the [upgrade/static](api?query=upgrade%2Fstatic)
     * library for hybrid upgrade apps that support AOT compilation*
     *
     * This helper function returns a factory function to be used for registering
     * an AngularJS wrapper directive for "downgrading" an Angular component.
     *
     * @usageNotes
     * ### Examples
     *
     * Let's assume that you have an Angular component called `ng2Heroes` that needs
     * to be made available in AngularJS templates.
     *
     * {@example upgrade/static/ts/full/module.ts region="ng2-heroes"}
     *
     * We must create an AngularJS [directive](https://docs.angularjs.org/guide/directive)
     * that will make this Angular component available inside AngularJS templates.
     * The `downgradeComponent()` function returns a factory function that we
     * can use to define the AngularJS directive that wraps the "downgraded" component.
     *
     * {@example upgrade/static/ts/full/module.ts region="ng2-heroes-wrapper"}
     *
     * For more details and examples on downgrading Angular components to AngularJS components please
     * visit the [Upgrade guide](guide/upgrade#using-angular-components-from-angularjs-code).
     *
     * @param info contains information about the Component that is being downgraded:
     *
     * - `component: Type<any>`: The type of the Component that will be downgraded
     * - `downgradedModule?: string`: The name of the downgraded module (if any) that the component
     *   "belongs to", as returned by a call to `downgradeModule()`. It is the module, whose
     *   corresponding Angular module will be bootstrapped, when the component needs to be instantiated.
     *   <br />
     *   (This option is only necessary when using `downgradeModule()` to downgrade more than one
     *   Angular module.)
     * - `propagateDigest?: boolean`: Whether to perform {@link ChangeDetectorRef#detectChanges
     *   change detection} on the component on every
     *   [$digest](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$digest). If set to `false`,
     *   change detection will still be performed when any of the component's inputs changes.
     *   (Default: true)
     *
     * @returns a factory function that can be used to register the component in an
     * AngularJS module.
     *
     * @publicApi
     */
    function downgradeComponent(info) {
        var directiveFactory = function ($compile, $injector, $parse) {
            // When using `downgradeModule()`, we need to handle certain things specially. For example:
            // - We always need to attach the component view to the `ApplicationRef` for it to be
            //   dirty-checked.
            // - We need to ensure callbacks to Angular APIs (e.g. change detection) are run inside the
            //   Angular zone.
            //   NOTE: This is not needed, when using `UpgradeModule`, because `$digest()` will be run
            //         inside the Angular zone (except if explicitly escaped, in which case we shouldn't
            //         force it back in).
            var isNgUpgradeLite = getUpgradeAppType($injector) === 3 /* Lite */;
            var wrapCallback = !isNgUpgradeLite ? function (cb) { return cb; } : function (cb) { return function () { return core.NgZone.isInAngularZone() ? cb() : ngZone.run(cb); }; };
            var ngZone;
            // When downgrading multiple modules, special handling is needed wrt injectors.
            var hasMultipleDowngradedModules = isNgUpgradeLite && (getDowngradedModuleCount($injector) > 1);
            return {
                restrict: 'E',
                terminal: true,
                require: [REQUIRE_INJECTOR, REQUIRE_NG_MODEL],
                link: function (scope, element, attrs, required) {
                    // We might have to compile the contents asynchronously, because this might have been
                    // triggered by `UpgradeNg1ComponentAdapterBuilder`, before the Angular templates have
                    // been compiled.
                    var ngModel = required[1];
                    var parentInjector = required[0];
                    var moduleInjector = undefined;
                    var ranAsync = false;
                    if (!parentInjector || hasMultipleDowngradedModules) {
                        var downgradedModule = info.downgradedModule || '';
                        var lazyModuleRefKey = "" + LAZY_MODULE_REF + downgradedModule;
                        var attemptedAction = "instantiating component '" + getTypeName(info.component) + "'";
                        validateInjectionKey($injector, downgradedModule, lazyModuleRefKey, attemptedAction);
                        var lazyModuleRef = $injector.get(lazyModuleRefKey);
                        moduleInjector = lazyModuleRef.injector || lazyModuleRef.promise;
                    }
                    // Notes:
                    //
                    // There are two injectors: `finalModuleInjector` and `finalParentInjector` (they might be
                    // the same instance, but that is irrelevant):
                    // - `finalModuleInjector` is used to retrieve `ComponentFactoryResolver`, thus it must be
                    //   on the same tree as the `NgModule` that declares this downgraded component.
                    // - `finalParentInjector` is used for all other injection purposes.
                    //   (Note that Angular knows to only traverse the component-tree part of that injector,
                    //   when looking for an injectable and then switch to the module injector.)
                    //
                    // There are basically three cases:
                    // - If there is no parent component (thus no `parentInjector`), we bootstrap the downgraded
                    //   `NgModule` and use its injector as both `finalModuleInjector` and
                    //   `finalParentInjector`.
                    // - If there is a parent component (and thus a `parentInjector`) and we are sure that it
                    //   belongs to the same `NgModule` as this downgraded component (e.g. because there is only
                    //   one downgraded module, we use that `parentInjector` as both `finalModuleInjector` and
                    //   `finalParentInjector`.
                    // - If there is a parent component, but it may belong to a different `NgModule`, then we
                    //   use the `parentInjector` as `finalParentInjector` and this downgraded component's
                    //   declaring `NgModule`'s injector as `finalModuleInjector`.
                    //   Note 1: If the `NgModule` is already bootstrapped, we just get its injector (we don't
                    //           bootstrap again).
                    //   Note 2: It is possible that (while there are multiple downgraded modules) this
                    //           downgraded component and its parent component both belong to the same NgModule.
                    //           In that case, we could have used the `parentInjector` as both
                    //           `finalModuleInjector` and `finalParentInjector`, but (for simplicity) we are
                    //           treating this case as if they belong to different `NgModule`s. That doesn't
                    //           really affect anything, since `parentInjector` has `moduleInjector` as ancestor
                    //           and trying to resolve `ComponentFactoryResolver` from either one will return
                    //           the same instance.
                    // If there is a parent component, use its injector as parent injector.
                    // If this is a "top-level" Angular component, use the module injector.
                    var finalParentInjector = parentInjector || moduleInjector;
                    // If this is a "top-level" Angular component or the parent component may belong to a
                    // different `NgModule`, use the module injector for module-specific dependencies.
                    // If there is a parent component that belongs to the same `NgModule`, use its injector.
                    var finalModuleInjector = moduleInjector || parentInjector;
                    var doDowngrade = function (injector, moduleInjector) {
                        // Retrieve `ComponentFactoryResolver` from the injector tied to the `NgModule` this
                        // component belongs to.
                        var componentFactoryResolver = moduleInjector.get(core.ComponentFactoryResolver);
                        var componentFactory = componentFactoryResolver.resolveComponentFactory(info.component);
                        if (!componentFactory) {
                            throw new Error("Expecting ComponentFactory for: " + getTypeName(info.component));
                        }
                        var injectorPromise = new ParentInjectorPromise(element);
                        var facade = new DowngradeComponentAdapter(element, attrs, scope, ngModel, injector, $injector, $compile, $parse, componentFactory, wrapCallback);
                        var projectableNodes = facade.compileContents();
                        facade.createComponent(projectableNodes);
                        facade.setupInputs(isNgUpgradeLite, info.propagateDigest);
                        facade.setupOutputs();
                        facade.registerCleanup();
                        injectorPromise.resolve(facade.getInjector());
                        if (ranAsync) {
                            // If this is run async, it is possible that it is not run inside a
                            // digest and initial input values will not be detected.
                            scope.$evalAsync(function () { });
                        }
                    };
                    var downgradeFn = !isNgUpgradeLite ? doDowngrade : function (pInjector, mInjector) {
                        if (!ngZone) {
                            ngZone = pInjector.get(core.NgZone);
                        }
                        wrapCallback(function () { return doDowngrade(pInjector, mInjector); })();
                    };
                    // NOTE:
                    // Not using `ParentInjectorPromise.all()` (which is inherited from `SyncPromise`), because
                    // Closure Compiler (or some related tool) complains:
                    // `TypeError: ...$src$downgrade_component_ParentInjectorPromise.all is not a function`
                    SyncPromise.all([finalParentInjector, finalModuleInjector])
                        .then(function (_a) {
                        var _b = __read(_a, 2), pInjector = _b[0], mInjector = _b[1];
                        return downgradeFn(pInjector, mInjector);
                    });
                    ranAsync = true;
                }
            };
        };
        // bracket-notation because of closure - see #14441
        directiveFactory['$inject'] = [$COMPILE, $INJECTOR, $PARSE];
        return directiveFactory;
    }
    /**
     * Synchronous promise-like object to wrap parent injectors,
     * to preserve the synchronous nature of AngularJS's `$compile`.
     */
    var ParentInjectorPromise = /** @class */ (function (_super) {
        __extends(ParentInjectorPromise, _super);
        function ParentInjectorPromise(element) {
            var _this = _super.call(this) || this;
            _this.element = element;
            _this.injectorKey = controllerKey(INJECTOR_KEY);
            // Store the promise on the element.
            element.data(_this.injectorKey, _this);
            return _this;
        }
        ParentInjectorPromise.prototype.resolve = function (injector) {
            // Store the real injector on the element.
            this.element.data(this.injectorKey, injector);
            // Release the element to prevent memory leaks.
            this.element = null;
            // Resolve the promise.
            _super.prototype.resolve.call(this, injector);
        };
        return ParentInjectorPromise;
    }(SyncPromise));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @description
     *
     * A helper function to allow an Angular service to be accessible from AngularJS.
     *
     * *Part of the [upgrade/static](api?query=upgrade%2Fstatic)
     * library for hybrid upgrade apps that support AOT compilation*
     *
     * This helper function returns a factory function that provides access to the Angular
     * service identified by the `token` parameter.
     *
     * @usageNotes
     * ### Examples
     *
     * First ensure that the service to be downgraded is provided in an `NgModule`
     * that will be part of the upgrade application. For example, let's assume we have
     * defined `HeroesService`
     *
     * {@example upgrade/static/ts/full/module.ts region="ng2-heroes-service"}
     *
     * and that we have included this in our upgrade app `NgModule`
     *
     * {@example upgrade/static/ts/full/module.ts region="ng2-module"}
     *
     * Now we can register the `downgradeInjectable` factory function for the service
     * on an AngularJS module.
     *
     * {@example upgrade/static/ts/full/module.ts region="downgrade-ng2-heroes-service"}
     *
     * Inside an AngularJS component's controller we can get hold of the
     * downgraded service via the name we gave when downgrading.
     *
     * {@example upgrade/static/ts/full/module.ts region="example-app"}
     *
     * <div class="alert is-important">
     *
     *   When using `downgradeModule()`, downgraded injectables will not be available until the Angular
     *   module that provides them is instantiated. In order to be safe, you need to ensure that the
     *   downgraded injectables are not used anywhere _outside_ the part of the app where it is
     *   guaranteed that their module has been instantiated.
     *
     *   For example, it is _OK_ to use a downgraded service in an upgraded component that is only used
     *   from a downgraded Angular component provided by the same Angular module as the injectable, but
     *   it is _not OK_ to use it in an AngularJS component that may be used independently of Angular or
     *   use it in a downgraded Angular component from a different module.
     *
     * </div>
     *
     * @param token an `InjectionToken` that identifies a service provided from Angular.
     * @param downgradedModule the name of the downgraded module (if any) that the injectable
     * "belongs to", as returned by a call to `downgradeModule()`. It is the module, whose injector will
     * be used for instantiating the injectable.<br />
     * (This option is only necessary when using `downgradeModule()` to downgrade more than one Angular
     * module.)
     *
     * @returns a [factory function](https://docs.angularjs.org/guide/di) that can be
     * used to register the service on an AngularJS module.
     *
     * @publicApi
     */
    function downgradeInjectable(token, downgradedModule) {
        if (downgradedModule === void 0) { downgradedModule = ''; }
        var factory = function ($injector) {
            var injectorKey = "" + INJECTOR_KEY + downgradedModule;
            var injectableName = isFunction(token) ? getTypeName(token) : String(token);
            var attemptedAction = "instantiating injectable '" + injectableName + "'";
            validateInjectionKey($injector, downgradedModule, injectorKey, attemptedAction);
            var injector = $injector.get(injectorKey);
            return injector.get(token);
        };
        factory['$inject'] = [$INJECTOR];
        return factory;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @publicApi
     */
    var VERSION = new core.Version('9.0.1');

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // We have to do a little dance to get the ng1 injector into the module injector.
    // We store the ng1 injector so that the provider in the module injector can access it
    // Then we "get" the ng1 injector from the module injector, which triggers the provider to read
    // the stored injector and release the reference to it.
    var tempInjectorRef = null;
    function setTempInjectorRef(injector) {
        tempInjectorRef = injector;
    }
    function injectorFactory() {
        if (!tempInjectorRef) {
            throw new Error('Trying to get the AngularJS injector before it being set.');
        }
        var injector = tempInjectorRef;
        tempInjectorRef = null; // clear the value to prevent memory leaks
        return injector;
    }
    function rootScopeFactory(i) {
        return i.get('$rootScope');
    }
    function compileFactory(i) {
        return i.get('$compile');
    }
    function parseFactory(i) {
        return i.get('$parse');
    }
    var angular1Providers = [
        // We must use exported named functions for the ng2 factories to keep the compiler happy:
        // > Metadata collected contains an error that will be reported at runtime:
        // >   Function calls are not supported.
        // >   Consider replacing the function or lambda with a reference to an exported function
        { provide: '$injector', useFactory: injectorFactory, deps: [] },
        { provide: '$rootScope', useFactory: rootScopeFactory, deps: ['$injector'] },
        { provide: '$compile', useFactory: compileFactory, deps: ['$injector'] },
        { provide: '$parse', useFactory: parseFactory, deps: ['$injector'] }
    ];

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var NgAdapterInjector = /** @class */ (function () {
        function NgAdapterInjector(modInjector) {
            this.modInjector = modInjector;
        }
        // When Angular locate a service in the component injector tree, the not found value is set to
        // `NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR`. In such a case we should not walk up to the module
        // injector.
        // AngularJS only supports a single tree and should always check the module injector.
        NgAdapterInjector.prototype.get = function (token, notFoundValue) {
            if (notFoundValue === core.ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR) {
                return notFoundValue;
            }
            return this.modInjector.get(token, notFoundValue);
        };
        return NgAdapterInjector;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var moduleUid = 0;
    /**
     * @description
     *
     * A helper function for creating an AngularJS module that can bootstrap an Angular module
     * "on-demand" (possibly lazily) when a {@link downgradeComponent downgraded component} needs to be
     * instantiated.
     *
     * *Part of the [upgrade/static](api?query=upgrade/static) library for hybrid upgrade apps that
     * support AOT compilation.*
     *
     * It allows loading/bootstrapping the Angular part of a hybrid application lazily and not having to
     * pay the cost up-front. For example, you can have an AngularJS application that uses Angular for
     * specific routes and only instantiate the Angular modules if/when the user visits one of these
     * routes.
     *
     * The Angular module will be bootstrapped once (when requested for the first time) and the same
     * reference will be used from that point onwards.
     *
     * `downgradeModule()` requires either an `NgModuleFactory` or a function:
     * - `NgModuleFactory`: If you pass an `NgModuleFactory`, it will be used to instantiate a module
     *   using `platformBrowser`'s {@link PlatformRef#bootstrapModuleFactory bootstrapModuleFactory()}.
     * - `Function`: If you pass a function, it is expected to return a promise resolving to an
     *   `NgModuleRef`. The function is called with an array of extra {@link StaticProvider Providers}
     *   that are expected to be available from the returned `NgModuleRef`'s `Injector`.
     *
     * `downgradeModule()` returns the name of the created AngularJS wrapper module. You can use it to
     * declare a dependency in your main AngularJS module.
     *
     * {@example upgrade/static/ts/lite/module.ts region="basic-how-to"}
     *
     * For more details on how to use `downgradeModule()` see
     * [Upgrading for Performance](guide/upgrade-performance).
     *
     * @usageNotes
     *
     * Apart from `UpgradeModule`, you can use the rest of the `upgrade/static` helpers as usual to
     * build a hybrid application. Note that the Angular pieces (e.g. downgraded services) will not be
     * available until the downgraded module has been bootstrapped, i.e. by instantiating a downgraded
     * component.
     *
     * <div class="alert is-important">
     *
     *   You cannot use `downgradeModule()` and `UpgradeModule` in the same hybrid application.<br />
     *   Use one or the other.
     *
     * </div>
     *
     * ### Differences with `UpgradeModule`
     *
     * Besides their different API, there are two important internal differences between
     * `downgradeModule()` and `UpgradeModule` that affect the behavior of hybrid applications:
     *
     * 1. Unlike `UpgradeModule`, `downgradeModule()` does not bootstrap the main AngularJS module
     *    inside the {@link NgZone Angular zone}.
     * 2. Unlike `UpgradeModule`, `downgradeModule()` does not automatically run a
     *    [$digest()](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$digest) when changes are
     *    detected in the Angular part of the application.
     *
     * What this means is that applications using `UpgradeModule` will run change detection more
     * frequently in order to ensure that both frameworks are properly notified about possible changes.
     * This will inevitably result in more change detection runs than necessary.
     *
     * `downgradeModule()`, on the other side, does not try to tie the two change detection systems as
     * tightly, restricting the explicit change detection runs only to cases where it knows it is
     * necessary (e.g. when the inputs of a downgraded component change). This improves performance,
     * especially in change-detection-heavy applications, but leaves it up to the developer to manually
     * notify each framework as needed.
     *
     * For a more detailed discussion of the differences and their implications, see
     * [Upgrading for Performance](guide/upgrade-performance).
     *
     * <div class="alert is-helpful">
     *
     *   You can manually trigger a change detection run in AngularJS using
     *   [scope.$apply(...)](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$apply) or
     *   [$rootScope.$digest()](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$digest).
     *
     *   You can manually trigger a change detection run in Angular using {@link NgZone#run
     *   ngZone.run(...)}.
     *
     * </div>
     *
     * ### Downgrading multiple modules
     *
     * It is possible to downgrade multiple modules and include them in an AngularJS application. In
     * that case, each downgraded module will be bootstrapped when an associated downgraded component or
     * injectable needs to be instantiated.
     *
     * Things to keep in mind, when downgrading multiple modules:
     *
     * - Each downgraded component/injectable needs to be explicitly associated with a downgraded
     *   module. See `downgradeComponent()` and `downgradeInjectable()` for more details.
     *
     * - If you want some injectables to be shared among all downgraded modules, you can provide them as
     *   `StaticProvider`s, when creating the `PlatformRef` (e.g. via `platformBrowser` or
     *   `platformBrowserDynamic`).
     *
     * - When using {@link PlatformRef#bootstrapmodule `bootstrapModule()`} or
     *   {@link PlatformRef#bootstrapmodulefactory `bootstrapModuleFactory()`} to bootstrap the
     *   downgraded modules, each one is considered a "root" module. As a consequence, a new instance
     *   will be created for every injectable provided in `"root"` (via
     *   {@link Injectable#providedIn `providedIn`}).
     *   If this is not your intention, you can have a shared module (that will act as act as the "root"
     *   module) and create all downgraded modules using that module's injector:
     *
     *   {@example upgrade/static/ts/lite-multi-shared/module.ts region="shared-root-module"}
     *
     * @publicApi
     */
    function downgradeModule(moduleFactoryOrBootstrapFn) {
        var lazyModuleName = UPGRADE_MODULE_NAME + ".lazy" + ++moduleUid;
        var lazyModuleRefKey = "" + LAZY_MODULE_REF + lazyModuleName;
        var lazyInjectorKey = "" + INJECTOR_KEY + lazyModuleName;
        var bootstrapFn = isFunction(moduleFactoryOrBootstrapFn) ?
            moduleFactoryOrBootstrapFn :
            function (extraProviders) {
                return platformBrowser.platformBrowser(extraProviders).bootstrapModuleFactory(moduleFactoryOrBootstrapFn);
            };
        var injector;
        // Create an ng1 module to bootstrap.
        module_(lazyModuleName, [])
            .constant(UPGRADE_APP_TYPE_KEY, 3 /* Lite */)
            .factory(INJECTOR_KEY, [lazyInjectorKey, identity])
            .factory(lazyInjectorKey, function () {
            if (!injector) {
                throw new Error('Trying to get the Angular injector before bootstrapping the corresponding ' +
                    'Angular module.');
            }
            return injector;
        })
            .factory(LAZY_MODULE_REF, [lazyModuleRefKey, identity])
            .factory(lazyModuleRefKey, [
            $INJECTOR,
            function ($injector) {
                setTempInjectorRef($injector);
                var result = {
                    promise: bootstrapFn(angular1Providers).then(function (ref) {
                        injector = result.injector = new NgAdapterInjector(ref.injector);
                        injector.get($INJECTOR);
                        return injector;
                    })
                };
                return result;
            }
        ])
            .config([
            $INJECTOR, $PROVIDE,
            function ($injector, $provide) {
                $provide.constant(DOWNGRADED_MODULE_COUNT_KEY, getDowngradedModuleCount($injector) + 1);
            }
        ]);
        return lazyModuleName;
    }
    function identity(x) {
        return x;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // Constants
    var REQUIRE_PREFIX_RE = /^(\^\^?)?(\?)?(\^\^?)?/;
    // Classes
    var UpgradeHelper = /** @class */ (function () {
        function UpgradeHelper(injector, name, elementRef, directive) {
            this.injector = injector;
            this.name = name;
            this.$injector = injector.get($INJECTOR);
            this.$compile = this.$injector.get($COMPILE);
            this.$controller = this.$injector.get($CONTROLLER);
            this.element = elementRef.nativeElement;
            this.$element = element(this.element);
            this.directive = directive || UpgradeHelper.getDirective(this.$injector, name);
        }
        UpgradeHelper.getDirective = function ($injector, name) {
            var directives = $injector.get(name + 'Directive');
            if (directives.length > 1) {
                throw new Error("Only support single directive definition for: " + name);
            }
            var directive = directives[0];
            // AngularJS will transform `link: xyz` to `compile: () => xyz`. So we can only tell there was a
            // user-defined `compile` if there is no `link`. In other cases, we will just ignore `compile`.
            if (directive.compile && !directive.link)
                notSupported(name, 'compile');
            if (directive.replace)
                notSupported(name, 'replace');
            if (directive.terminal)
                notSupported(name, 'terminal');
            return directive;
        };
        UpgradeHelper.getTemplate = function ($injector, directive, fetchRemoteTemplate, $element) {
            if (fetchRemoteTemplate === void 0) { fetchRemoteTemplate = false; }
            if (directive.template !== undefined) {
                return getOrCall(directive.template, $element);
            }
            else if (directive.templateUrl) {
                var $templateCache_1 = $injector.get($TEMPLATE_CACHE);
                var url_1 = getOrCall(directive.templateUrl, $element);
                var template = $templateCache_1.get(url_1);
                if (template !== undefined) {
                    return template;
                }
                else if (!fetchRemoteTemplate) {
                    throw new Error('loading directive templates asynchronously is not supported');
                }
                return new Promise(function (resolve, reject) {
                    var $httpBackend = $injector.get($HTTP_BACKEND);
                    $httpBackend('GET', url_1, null, function (status, response) {
                        if (status === 200) {
                            resolve($templateCache_1.put(url_1, response));
                        }
                        else {
                            reject("GET component template from '" + url_1 + "' returned '" + status + ": " + response + "'");
                        }
                    });
                });
            }
            else {
                throw new Error("Directive '" + directive.name + "' is not a component, it is missing template.");
            }
        };
        UpgradeHelper.prototype.buildController = function (controllerType, $scope) {
            // TODO: Document that we do not pre-assign bindings on the controller instance.
            // Quoted properties below so that this code can be optimized with Closure Compiler.
            var locals = { '$scope': $scope, '$element': this.$element };
            var controller = this.$controller(controllerType, locals, null, this.directive.controllerAs);
            this.$element.data(controllerKey(this.directive.name), controller);
            return controller;
        };
        UpgradeHelper.prototype.compileTemplate = function (template) {
            if (template === undefined) {
                template =
                    UpgradeHelper.getTemplate(this.$injector, this.directive, false, this.$element);
            }
            return this.compileHtml(template);
        };
        UpgradeHelper.prototype.onDestroy = function ($scope, controllerInstance) {
            if (controllerInstance && isFunction(controllerInstance.$onDestroy)) {
                controllerInstance.$onDestroy();
            }
            $scope.$destroy();
            // Clean the jQuery/jqLite data on the component+child elements.
            // Equivelent to how jQuery/jqLite invoke `cleanData` on an Element (this.element)
            //  https://github.com/jquery/jquery/blob/e743cbd28553267f955f71ea7248377915613fd9/src/manipulation.js#L223
            //  https://github.com/angular/angular.js/blob/26ddc5f830f902a3d22f4b2aab70d86d4d688c82/src/jqLite.js#L306-L312
            // `cleanData` will invoke the AngularJS `$destroy` DOM event
            //  https://github.com/angular/angular.js/blob/26ddc5f830f902a3d22f4b2aab70d86d4d688c82/src/Angular.js#L1911-L1924
            element.cleanData([this.element]);
            element.cleanData(this.element.querySelectorAll('*'));
        };
        UpgradeHelper.prototype.prepareTransclusion = function () {
            var _this = this;
            var transclude = this.directive.transclude;
            var contentChildNodes = this.extractChildNodes();
            var attachChildrenFn = function (scope, cloneAttachFn) {
                // Since AngularJS v1.5.8, `cloneAttachFn` will try to destroy the transclusion scope if
                // `$template` is empty. Since the transcluded content comes from Angular, not AngularJS,
                // there will be no transclusion scope here.
                // Provide a dummy `scope.$destroy()` method to prevent `cloneAttachFn` from throwing.
                scope = scope || { $destroy: function () { return undefined; } };
                return cloneAttachFn($template, scope);
            };
            var $template = contentChildNodes;
            if (transclude) {
                var slots_1 = Object.create(null);
                if (typeof transclude === 'object') {
                    $template = [];
                    var slotMap_1 = Object.create(null);
                    var filledSlots_1 = Object.create(null);
                    // Parse the element selectors.
                    Object.keys(transclude).forEach(function (slotName) {
                        var selector = transclude[slotName];
                        var optional = selector.charAt(0) === '?';
                        selector = optional ? selector.substring(1) : selector;
                        slotMap_1[selector] = slotName;
                        slots_1[slotName] = null; // `null`: Defined but not yet filled.
                        filledSlots_1[slotName] = optional; // Consider optional slots as filled.
                    });
                    // Add the matching elements into their slot.
                    contentChildNodes.forEach(function (node) {
                        var slotName = slotMap_1[directiveNormalize(node.nodeName.toLowerCase())];
                        if (slotName) {
                            filledSlots_1[slotName] = true;
                            slots_1[slotName] = slots_1[slotName] || [];
                            slots_1[slotName].push(node);
                        }
                        else {
                            $template.push(node);
                        }
                    });
                    // Check for required slots that were not filled.
                    Object.keys(filledSlots_1).forEach(function (slotName) {
                        if (!filledSlots_1[slotName]) {
                            throw new Error("Required transclusion slot '" + slotName + "' on directive: " + _this.name);
                        }
                    });
                    Object.keys(slots_1).filter(function (slotName) { return slots_1[slotName]; }).forEach(function (slotName) {
                        var nodes = slots_1[slotName];
                        slots_1[slotName] = function (scope, cloneAttach) {
                            return cloneAttach(nodes, scope);
                        };
                    });
                }
                // Attach `$$slots` to default slot transclude fn.
                attachChildrenFn.$$slots = slots_1;
                // AngularJS v1.6+ ignores empty or whitespace-only transcluded text nodes. But Angular
                // removes all text content after the first interpolation and updates it later, after
                // evaluating the expressions. This would result in AngularJS failing to recognize text
                // nodes that start with an interpolation as transcluded content and use the fallback
                // content instead.
                // To avoid this issue, we add a
                // [zero-width non-joiner character](https://en.wikipedia.org/wiki/Zero-width_non-joiner)
                // to empty text nodes (which can only be a result of Angular removing their initial content).
                // NOTE: Transcluded text content that starts with whitespace followed by an interpolation
                //       will still fail to be detected by AngularJS v1.6+
                $template.forEach(function (node) {
                    if (node.nodeType === Node.TEXT_NODE && !node.nodeValue) {
                        node.nodeValue = '\u200C';
                    }
                });
            }
            return attachChildrenFn;
        };
        UpgradeHelper.prototype.resolveAndBindRequiredControllers = function (controllerInstance) {
            var directiveRequire = this.getDirectiveRequire();
            var requiredControllers = this.resolveRequire(directiveRequire);
            if (controllerInstance && this.directive.bindToController && isMap(directiveRequire)) {
                var requiredControllersMap_1 = requiredControllers;
                Object.keys(requiredControllersMap_1).forEach(function (key) {
                    controllerInstance[key] = requiredControllersMap_1[key];
                });
            }
            return requiredControllers;
        };
        UpgradeHelper.prototype.compileHtml = function (html) {
            this.element.innerHTML = html;
            return this.$compile(this.element.childNodes);
        };
        UpgradeHelper.prototype.extractChildNodes = function () {
            var childNodes = [];
            var childNode;
            while (childNode = this.element.firstChild) {
                this.element.removeChild(childNode);
                childNodes.push(childNode);
            }
            return childNodes;
        };
        UpgradeHelper.prototype.getDirectiveRequire = function () {
            var require = this.directive.require || (this.directive.controller && this.directive.name);
            if (isMap(require)) {
                Object.keys(require).forEach(function (key) {
                    var value = require[key];
                    var match = value.match(REQUIRE_PREFIX_RE);
                    var name = value.substring(match[0].length);
                    if (!name) {
                        require[key] = match[0] + key;
                    }
                });
            }
            return require;
        };
        UpgradeHelper.prototype.resolveRequire = function (require, controllerInstance) {
            var _this = this;
            if (!require) {
                return null;
            }
            else if (Array.isArray(require)) {
                return require.map(function (req) { return _this.resolveRequire(req); });
            }
            else if (typeof require === 'object') {
                var value_1 = {};
                Object.keys(require).forEach(function (key) { return value_1[key] = _this.resolveRequire(require[key]); });
                return value_1;
            }
            else if (typeof require === 'string') {
                var match = require.match(REQUIRE_PREFIX_RE);
                var inheritType = match[1] || match[3];
                var name_1 = require.substring(match[0].length);
                var isOptional = !!match[2];
                var searchParents = !!inheritType;
                var startOnParent = inheritType === '^^';
                var ctrlKey = controllerKey(name_1);
                var elem = startOnParent ? this.$element.parent() : this.$element;
                var value = searchParents ? elem.inheritedData(ctrlKey) : elem.data(ctrlKey);
                if (!value && !isOptional) {
                    throw new Error("Unable to find required '" + require + "' in upgraded directive '" + this.name + "'.");
                }
                return value;
            }
            else {
                throw new Error("Unrecognized 'require' syntax on upgraded directive '" + this.name + "': " + require);
            }
        };
        return UpgradeHelper;
    }());
    function getOrCall(property) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return isFunction(property) ? property.apply(void 0, __spread(args)) : property;
    }
    // NOTE: Only works for `typeof T !== 'object'`.
    function isMap(value) {
        return value && !Array.isArray(value) && typeof value === 'object';
    }
    function notSupported(name, feature) {
        throw new Error("Upgraded directive '" + name + "' contains unsupported feature: '" + feature + "'.");
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var NOT_SUPPORTED = 'NOT_SUPPORTED';
    var INITIAL_VALUE$1 = {
        __UNINITIALIZED__: true
    };
    var Bindings = /** @class */ (function () {
        function Bindings() {
            this.twoWayBoundProperties = [];
            this.twoWayBoundLastValues = [];
            this.expressionBoundProperties = [];
            this.propertyToOutputMap = {};
        }
        return Bindings;
    }());
    /**
     * @description
     *
     * A helper class that allows an AngularJS component to be used from Angular.
     *
     * *Part of the [upgrade/static](api?query=upgrade%2Fstatic)
     * library for hybrid upgrade apps that support AOT compilation.*
     *
     * This helper class should be used as a base class for creating Angular directives
     * that wrap AngularJS components that need to be "upgraded".
     *
     * @usageNotes
     * ### Examples
     *
     * Let's assume that you have an AngularJS component called `ng1Hero` that needs
     * to be made available in Angular templates.
     *
     * {@example upgrade/static/ts/full/module.ts region="ng1-hero"}
     *
     * We must create a `Directive` that will make this AngularJS component
     * available inside Angular templates.
     *
     * {@example upgrade/static/ts/full/module.ts region="ng1-hero-wrapper"}
     *
     * In this example you can see that we must derive from the `UpgradeComponent`
     * base class but also provide an {@link Directive `@Directive`} decorator. This is
     * because the AOT compiler requires that this information is statically available at
     * compile time.
     *
     * Note that we must do the following:
     * * specify the directive's selector (`ng1-hero`)
     * * specify all inputs and outputs that the AngularJS component expects
     * * derive from `UpgradeComponent`
     * * call the base class from the constructor, passing
     *   * the AngularJS name of the component (`ng1Hero`)
     *   * the `ElementRef` and `Injector` for the component wrapper
     *
     * @publicApi
     */
    var UpgradeComponent = /** @class */ (function () {
        /**
         * Create a new `UpgradeComponent` instance. You should not normally need to do this.
         * Instead you should derive a new class from this one and call the super constructor
         * from the base class.
         *
         * {@example upgrade/static/ts/full/module.ts region="ng1-hero-wrapper" }
         *
         * * The `name` parameter should be the name of the AngularJS directive.
         * * The `elementRef` and `injector` parameters should be acquired from Angular by dependency
         *   injection into the base class constructor.
         */
        function UpgradeComponent(name, elementRef, injector) {
            this.name = name;
            this.elementRef = elementRef;
            this.injector = injector;
            this.helper = new UpgradeHelper(injector, name, elementRef);
            this.$injector = this.helper.$injector;
            this.element = this.helper.element;
            this.$element = this.helper.$element;
            this.directive = this.helper.directive;
            this.bindings = this.initializeBindings(this.directive);
            // We ask for the AngularJS scope from the Angular injector, since
            // we will put the new component scope onto the new injector for each component
            var $parentScope = injector.get($SCOPE);
            // QUESTION 1: Should we create an isolated scope if the scope is only true?
            // QUESTION 2: Should we make the scope accessible through `$element.scope()/isolateScope()`?
            this.$componentScope = $parentScope.$new(!!this.directive.scope);
            this.initializeOutputs();
        }
        UpgradeComponent.prototype.ngOnInit = function () {
            var _this = this;
            // Collect contents, insert and compile template
            var attachChildNodes = this.helper.prepareTransclusion();
            var linkFn = this.helper.compileTemplate();
            // Instantiate controller
            var controllerType = this.directive.controller;
            var bindToController = this.directive.bindToController;
            if (controllerType) {
                this.controllerInstance = this.helper.buildController(controllerType, this.$componentScope);
            }
            else if (bindToController) {
                throw new Error("Upgraded directive '" + this.directive.name + "' specifies 'bindToController' but no controller.");
            }
            // Set up outputs
            this.bindingDestination = bindToController ? this.controllerInstance : this.$componentScope;
            this.bindOutputs();
            // Require other controllers
            var requiredControllers = this.helper.resolveAndBindRequiredControllers(this.controllerInstance);
            // Hook: $onChanges
            if (this.pendingChanges) {
                this.forwardChanges(this.pendingChanges);
                this.pendingChanges = null;
            }
            // Hook: $onInit
            if (this.controllerInstance && isFunction(this.controllerInstance.$onInit)) {
                this.controllerInstance.$onInit();
            }
            // Hook: $doCheck
            if (this.controllerInstance && isFunction(this.controllerInstance.$doCheck)) {
                var callDoCheck = function () { return _this.controllerInstance.$doCheck(); };
                this.unregisterDoCheckWatcher = this.$componentScope.$parent.$watch(callDoCheck);
                callDoCheck();
            }
            // Linking
            var link = this.directive.link;
            var preLink = typeof link == 'object' && link.pre;
            var postLink = typeof link == 'object' ? link.post : link;
            var attrs = NOT_SUPPORTED;
            var transcludeFn = NOT_SUPPORTED;
            if (preLink) {
                preLink(this.$componentScope, this.$element, attrs, requiredControllers, transcludeFn);
            }
            linkFn(this.$componentScope, null, { parentBoundTranscludeFn: attachChildNodes });
            if (postLink) {
                postLink(this.$componentScope, this.$element, attrs, requiredControllers, transcludeFn);
            }
            // Hook: $postLink
            if (this.controllerInstance && isFunction(this.controllerInstance.$postLink)) {
                this.controllerInstance.$postLink();
            }
        };
        UpgradeComponent.prototype.ngOnChanges = function (changes) {
            if (!this.bindingDestination) {
                this.pendingChanges = changes;
            }
            else {
                this.forwardChanges(changes);
            }
        };
        UpgradeComponent.prototype.ngDoCheck = function () {
            var _this = this;
            var twoWayBoundProperties = this.bindings.twoWayBoundProperties;
            var twoWayBoundLastValues = this.bindings.twoWayBoundLastValues;
            var propertyToOutputMap = this.bindings.propertyToOutputMap;
            twoWayBoundProperties.forEach(function (propName, idx) {
                var newValue = _this.bindingDestination[propName];
                var oldValue = twoWayBoundLastValues[idx];
                if (!core.ɵlooseIdentical(newValue, oldValue)) {
                    var outputName = propertyToOutputMap[propName];
                    var eventEmitter = _this[outputName];
                    eventEmitter.emit(newValue);
                    twoWayBoundLastValues[idx] = newValue;
                }
            });
        };
        UpgradeComponent.prototype.ngOnDestroy = function () {
            if (isFunction(this.unregisterDoCheckWatcher)) {
                this.unregisterDoCheckWatcher();
            }
            this.helper.onDestroy(this.$componentScope, this.controllerInstance);
        };
        UpgradeComponent.prototype.initializeBindings = function (directive) {
            var _this = this;
            var btcIsObject = typeof directive.bindToController === 'object';
            if (btcIsObject && Object.keys(directive.scope).length) {
                throw new Error("Binding definitions on scope and controller at the same time is not supported.");
            }
            var context = btcIsObject ? directive.bindToController : directive.scope;
            var bindings = new Bindings();
            if (typeof context == 'object') {
                Object.keys(context).forEach(function (propName) {
                    var definition = context[propName];
                    var bindingType = definition.charAt(0);
                    // QUESTION: What about `=*`? Ignore? Throw? Support?
                    switch (bindingType) {
                        case '@':
                        case '<':
                            // We don't need to do anything special. They will be defined as inputs on the
                            // upgraded component facade and the change propagation will be handled by
                            // `ngOnChanges()`.
                            break;
                        case '=':
                            bindings.twoWayBoundProperties.push(propName);
                            bindings.twoWayBoundLastValues.push(INITIAL_VALUE$1);
                            bindings.propertyToOutputMap[propName] = propName + 'Change';
                            break;
                        case '&':
                            bindings.expressionBoundProperties.push(propName);
                            bindings.propertyToOutputMap[propName] = propName;
                            break;
                        default:
                            var json = JSON.stringify(context);
                            throw new Error("Unexpected mapping '" + bindingType + "' in '" + json + "' in '" + _this.name + "' directive.");
                    }
                });
            }
            return bindings;
        };
        UpgradeComponent.prototype.initializeOutputs = function () {
            var _this = this;
            // Initialize the outputs for `=` and `&` bindings
            this.bindings.twoWayBoundProperties.concat(this.bindings.expressionBoundProperties)
                .forEach(function (propName) {
                var outputName = _this.bindings.propertyToOutputMap[propName];
                _this[outputName] = new core.EventEmitter();
            });
        };
        UpgradeComponent.prototype.bindOutputs = function () {
            var _this = this;
            // Bind `&` bindings to the corresponding outputs
            this.bindings.expressionBoundProperties.forEach(function (propName) {
                var outputName = _this.bindings.propertyToOutputMap[propName];
                var emitter = _this[outputName];
                _this.bindingDestination[propName] = function (value) { return emitter.emit(value); };
            });
        };
        UpgradeComponent.prototype.forwardChanges = function (changes) {
            var _this = this;
            // Forward input changes to `bindingDestination`
            Object.keys(changes).forEach(function (propName) { return _this.bindingDestination[propName] = changes[propName].currentValue; });
            if (isFunction(this.bindingDestination.$onChanges)) {
                this.bindingDestination.$onChanges(changes);
            }
        };
        return UpgradeComponent;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @description
     *
     * An `NgModule`, which you import to provide AngularJS core services,
     * and has an instance method used to bootstrap the hybrid upgrade application.
     *
     * *Part of the [upgrade/static](api?query=upgrade/static)
     * library for hybrid upgrade apps that support AOT compilation*
     *
     * The `upgrade/static` package contains helpers that allow AngularJS and Angular components
     * to be used together inside a hybrid upgrade application, which supports AOT compilation.
     *
     * Specifically, the classes and functions in the `upgrade/static` module allow the following:
     *
     * 1. Creation of an Angular directive that wraps and exposes an AngularJS component so
     *    that it can be used in an Angular template. See `UpgradeComponent`.
     * 2. Creation of an AngularJS directive that wraps and exposes an Angular component so
     *    that it can be used in an AngularJS template. See `downgradeComponent`.
     * 3. Creation of an Angular root injector provider that wraps and exposes an AngularJS
     *    service so that it can be injected into an Angular context. See
     *    {@link UpgradeModule#upgrading-an-angular-1-service Upgrading an AngularJS service} below.
     * 4. Creation of an AngularJS service that wraps and exposes an Angular injectable
     *    so that it can be injected into an AngularJS context. See `downgradeInjectable`.
     * 3. Bootstrapping of a hybrid Angular application which contains both of the frameworks
     *    coexisting in a single application.
     *
     * @usageNotes
     *
     * ```ts
     * import {UpgradeModule} from '@angular/upgrade/static';
     * ```
     *
     * See also the {@link UpgradeModule#examples examples} below.
     *
     * ### Mental Model
     *
     * When reasoning about how a hybrid application works it is useful to have a mental model which
     * describes what is happening and explains what is happening at the lowest level.
     *
     * 1. There are two independent frameworks running in a single application, each framework treats
     *    the other as a black box.
     * 2. Each DOM element on the page is owned exactly by one framework. Whichever framework
     *    instantiated the element is the owner. Each framework only updates/interacts with its own
     *    DOM elements and ignores others.
     * 3. AngularJS directives always execute inside the AngularJS framework codebase regardless of
     *    where they are instantiated.
     * 4. Angular components always execute inside the Angular framework codebase regardless of
     *    where they are instantiated.
     * 5. An AngularJS component can be "upgraded"" to an Angular component. This is achieved by
     *    defining an Angular directive, which bootstraps the AngularJS component at its location
     *    in the DOM. See `UpgradeComponent`.
     * 6. An Angular component can be "downgraded" to an AngularJS component. This is achieved by
     *    defining an AngularJS directive, which bootstraps the Angular component at its location
     *    in the DOM. See `downgradeComponent`.
     * 7. Whenever an "upgraded"/"downgraded" component is instantiated the host element is owned by
     *    the framework doing the instantiation. The other framework then instantiates and owns the
     *    view for that component.
     *    1. This implies that the component bindings will always follow the semantics of the
     *       instantiation framework.
     *    2. The DOM attributes are parsed by the framework that owns the current template. So
     *       attributes in AngularJS templates must use kebab-case, while AngularJS templates must use
     *       camelCase.
     *    3. However the template binding syntax will always use the Angular style, e.g. square
     *       brackets (`[...]`) for property binding.
     * 8. Angular is bootstrapped first; AngularJS is bootstrapped second. AngularJS always owns the
     *    root component of the application.
     * 9. The new application is running in an Angular zone, and therefore it no longer needs calls to
     *    `$apply()`.
     *
     * ### The `UpgradeModule` class
     *
     * This class is an `NgModule`, which you import to provide AngularJS core services,
     * and has an instance method used to bootstrap the hybrid upgrade application.
     *
     * * Core AngularJS services
     *   Importing this `NgModule` will add providers for the core
     *   [AngularJS services](https://docs.angularjs.org/api/ng/service) to the root injector.
     *
     * * Bootstrap
     *   The runtime instance of this class contains a {@link UpgradeModule#bootstrap `bootstrap()`}
     *   method, which you use to bootstrap the top level AngularJS module onto an element in the
     *   DOM for the hybrid upgrade app.
     *
     *   It also contains properties to access the {@link UpgradeModule#injector root injector}, the
     *   bootstrap `NgZone` and the
     *   [AngularJS $injector](https://docs.angularjs.org/api/auto/service/$injector).
     *
     * ### Examples
     *
     * Import the `UpgradeModule` into your top level {@link NgModule Angular `NgModule`}.
     *
     * {@example upgrade/static/ts/full/module.ts region='ng2-module'}
     *
     * Then inject `UpgradeModule` into your Angular `NgModule` and use it to bootstrap the top level
     * [AngularJS module](https://docs.angularjs.org/api/ng/type/angular.Module) in the
     * `ngDoBootstrap()` method.
     *
     * {@example upgrade/static/ts/full/module.ts region='bootstrap-ng1'}
     *
     * Finally, kick off the whole process, by bootstraping your top level Angular `NgModule`.
     *
     * {@example upgrade/static/ts/full/module.ts region='bootstrap-ng2'}
     *
     * {@a upgrading-an-angular-1-service}
     * ### Upgrading an AngularJS service
     *
     * There is no specific API for upgrading an AngularJS service. Instead you should just follow the
     * following recipe:
     *
     * Let's say you have an AngularJS service:
     *
     * {@example upgrade/static/ts/full/module.ts region="ng1-text-formatter-service"}
     *
     * Then you should define an Angular provider to be included in your `NgModule` `providers`
     * property.
     *
     * {@example upgrade/static/ts/full/module.ts region="upgrade-ng1-service"}
     *
     * Then you can use the "upgraded" AngularJS service by injecting it into an Angular component
     * or service.
     *
     * {@example upgrade/static/ts/full/module.ts region="use-ng1-upgraded-service"}
     *
     * @publicApi
     */
    var UpgradeModule = /** @class */ (function () {
        function UpgradeModule(
        /** The root `Injector` for the upgrade application. */
        injector, 
        /** The bootstrap zone for the upgrade application */
        ngZone) {
            this.ngZone = ngZone;
            this.injector = new NgAdapterInjector(injector);
        }
        /**
         * Bootstrap an AngularJS application from this NgModule
         * @param element the element on which to bootstrap the AngularJS application
         * @param [modules] the AngularJS modules to bootstrap for this application
         * @param [config] optional extra AngularJS bootstrap configuration
         */
        UpgradeModule.prototype.bootstrap = function (element$1, modules, config /*angular.IAngularBootstrapConfig*/) {
            var _this = this;
            if (modules === void 0) { modules = []; }
            var INIT_MODULE_NAME = UPGRADE_MODULE_NAME + '.init';
            // Create an ng1 module to bootstrap
            var initModule = module_(INIT_MODULE_NAME, [])
                .constant(UPGRADE_APP_TYPE_KEY, 2 /* Static */)
                .value(INJECTOR_KEY, this.injector)
                .factory(LAZY_MODULE_REF, [INJECTOR_KEY, function (injector) { return ({ injector: injector }); }])
                .config([
                $PROVIDE, $INJECTOR,
                function ($provide, $injector) {
                    if ($injector.has($$TESTABILITY)) {
                        $provide.decorator($$TESTABILITY, [
                            $DELEGATE,
                            function (testabilityDelegate) {
                                var originalWhenStable = testabilityDelegate.whenStable;
                                var injector = _this.injector;
                                // Cannot use arrow function below because we need the context
                                var newWhenStable = function (callback) {
                                    originalWhenStable.call(testabilityDelegate, function () {
                                        var ng2Testability = injector.get(core.Testability);
                                        if (ng2Testability.isStable()) {
                                            callback();
                                        }
                                        else {
                                            ng2Testability.whenStable(newWhenStable.bind(testabilityDelegate, callback));
                                        }
                                    });
                                };
                                testabilityDelegate.whenStable = newWhenStable;
                                return testabilityDelegate;
                            }
                        ]);
                    }
                    if ($injector.has($INTERVAL)) {
                        $provide.decorator($INTERVAL, [
                            $DELEGATE,
                            function (intervalDelegate) {
                                // Wrap the $interval service so that setInterval is called outside NgZone,
                                // but the callback is still invoked within it. This is so that $interval
                                // won't block stability, which preserves the behavior from AngularJS.
                                var wrappedInterval = function (fn, delay, count, invokeApply) {
                                    var pass = [];
                                    for (var _i = 4; _i < arguments.length; _i++) {
                                        pass[_i - 4] = arguments[_i];
                                    }
                                    return _this.ngZone.runOutsideAngular(function () {
                                        return intervalDelegate.apply(void 0, __spread([function () {
                                                var args = [];
                                                for (var _i = 0; _i < arguments.length; _i++) {
                                                    args[_i] = arguments[_i];
                                                }
                                                // Run callback in the next VM turn - $interval calls
                                                // $rootScope.$apply, and running the callback in NgZone will
                                                // cause a '$digest already in progress' error if it's in the
                                                // same vm turn.
                                                setTimeout(function () { _this.ngZone.run(function () { return fn.apply(void 0, __spread(args)); }); });
                                            }, delay, count, invokeApply], pass));
                                    });
                                };
                                wrappedInterval['cancel'] = intervalDelegate.cancel;
                                return wrappedInterval;
                            }
                        ]);
                    }
                }
            ])
                .run([
                $INJECTOR,
                function ($injector) {
                    _this.$injector = $injector;
                    // Initialize the ng1 $injector provider
                    setTempInjectorRef($injector);
                    _this.injector.get($INJECTOR);
                    // Put the injector on the DOM, so that it can be "required"
                    element(element$1).data(controllerKey(INJECTOR_KEY), _this.injector);
                    // Wire up the ng1 rootScope to run a digest cycle whenever the zone settles
                    // We need to do this in the next tick so that we don't prevent the bootup
                    // stabilizing
                    setTimeout(function () {
                        var $rootScope = $injector.get('$rootScope');
                        var subscription = _this.ngZone.onMicrotaskEmpty.subscribe(function () {
                            if ($rootScope.$$phase) {
                                if (core.isDevMode()) {
                                    console.warn('A digest was triggered while one was already in progress. This may mean that something is triggering digests outside the Angular zone.');
                                }
                                return $rootScope.$evalAsync();
                            }
                            return $rootScope.$digest();
                        });
                        $rootScope.$on('$destroy', function () { subscription.unsubscribe(); });
                    }, 0);
                }
            ]);
            var upgradeModule = module_(UPGRADE_MODULE_NAME, [INIT_MODULE_NAME].concat(modules));
            // Make sure resumeBootstrap() only exists if the current bootstrap is deferred
            var windowAngular = window['angular'];
            windowAngular.resumeBootstrap = undefined;
            // Bootstrap the AngularJS application inside our zone
            this.ngZone.run(function () { bootstrap(element$1, [upgradeModule.name], config); });
            // Patch resumeBootstrap() to run inside the ngZone
            if (windowAngular.resumeBootstrap) {
                var originalResumeBootstrap_1 = windowAngular.resumeBootstrap;
                var ngZone_1 = this.ngZone;
                windowAngular.resumeBootstrap = function () {
                    var _this = this;
                    var args = arguments;
                    windowAngular.resumeBootstrap = originalResumeBootstrap_1;
                    return ngZone_1.run(function () { return windowAngular.resumeBootstrap.apply(_this, args); });
                };
            }
        };
        UpgradeModule = __decorate([
            core.NgModule({ providers: [angular1Providers] }),
            __metadata("design:paramtypes", [core.Injector,
                core.NgZone])
        ], UpgradeModule);
        return UpgradeModule;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // This file only re-exports items to appear in the public api. Keep it that way.

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.UpgradeComponent = UpgradeComponent;
    exports.UpgradeModule = UpgradeModule;
    exports.VERSION = VERSION;
    exports.downgradeComponent = downgradeComponent;
    exports.downgradeInjectable = downgradeInjectable;
    exports.downgradeModule = downgradeModule;
    exports.getAngularJSGlobal = getAngularJSGlobal;
    exports.getAngularLib = getAngularLib;
    exports.setAngularJSGlobal = setAngularJSGlobal;
    exports.setAngularLib = setAngularLib;
    exports.ɵangular_packages_upgrade_static_static_a = injectorFactory;
    exports.ɵangular_packages_upgrade_static_static_b = rootScopeFactory;
    exports.ɵangular_packages_upgrade_static_static_c = compileFactory;
    exports.ɵangular_packages_upgrade_static_static_d = parseFactory;
    exports.ɵangular_packages_upgrade_static_static_e = angular1Providers;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
// source map elided