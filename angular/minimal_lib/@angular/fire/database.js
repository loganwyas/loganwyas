(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/fire')) :
    typeof define === 'function' && define.amd ? define('@angular/fire/database', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/fire'], factory) :
    (global = global || self, factory((global.angular = global.angular || {}, global.angular.fire = global.angular.fire || {}, global.angular.fire.database = {}), global.ng.core, global.rxjs, global.rxjs.operators, global.angular.fire));
}(this, (function (exports, core, rxjs, operators, fire) { 'use strict';

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
     * @param {?} value
     * @return {?}
     */
    function isString(value) {
        return typeof value === 'string';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function isFirebaseDataSnapshot(value) {
        return typeof value.exportVal === 'function';
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    function isNil(obj) {
        return obj === undefined || obj === null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function isFirebaseRef(value) {
        return typeof value.set === 'function';
    }
    /**
     * Returns a database reference given a Firebase App and an
     * absolute or relative path.
     * @param {?} database
     * @param {?} pathRef
     * @return {?}
     */
    function getRef(database, pathRef) {
        // if a db ref was passed in, just return it
        return isFirebaseRef(pathRef) ? (/** @type {?} */ (pathRef))
            : database.ref((/** @type {?} */ (pathRef)));
    }
    /**
     * @param {?} item
     * @param {?} cases
     * @return {?}
     */
    function checkOperationCases(item, cases) {
        if (isString(item)) {
            return cases.stringCase();
        }
        else if (isFirebaseRef(item)) {
            return (/** @type {?} */ (cases.firebaseCase))();
        }
        else if (isFirebaseDataSnapshot(item)) {
            return (/** @type {?} */ (cases.snapshotCase))();
        }
        throw new Error("Expects a string, snapshot, or reference. Got: " + typeof item);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     * @template T
     */
    function SnapshotPrevKey() { }
    if (false) {
        /** @type {?} */
        SnapshotPrevKey.prototype.snapshot;
        /** @type {?} */
        SnapshotPrevKey.prototype.prevKey;
    }
    /**
     * Create an observable from a Database Reference or Database Query.
     * @template T
     * @param {?} ref Database Reference
     * @param {?} event Listen event type ('value', 'added', 'changed', 'removed', 'moved')
     * @param {?=} listenType
     * @param {?=} scheduler
     * @return {?}
     */
    function fromRef(ref, event, listenType, scheduler) {
        if (listenType === void 0) { listenType = 'on'; }
        if (scheduler === void 0) { scheduler = rxjs.asyncScheduler; }
        return new rxjs.Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        function (subscriber) {
            /** @type {?} */
            var fn = null;
            fn = ref[listenType](event, (/**
             * @param {?} snapshot
             * @param {?} prevKey
             * @return {?}
             */
            function (snapshot, prevKey) {
                scheduler.schedule((/**
                 * @return {?}
                 */
                function () {
                    subscriber.next({ snapshot: snapshot, prevKey: prevKey });
                }));
                if (listenType == 'once') {
                    scheduler.schedule((/**
                     * @return {?}
                     */
                    function () { return subscriber.complete(); }));
                }
            }), (/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                scheduler.schedule((/**
                 * @return {?}
                 */
                function () { return subscriber.error(err); }));
            }));
            if (listenType == 'on') {
                return {
                    unsubscribe: /**
                     * @return {?}
                     */
                    function () {
                        if (fn != null) {
                            ref.off(event, fn);
                        }
                    }
                };
            }
            else {
                return { unsubscribe: /**
                     * @return {?}
                     */
                    function () { } };
            }
        })).pipe(operators.map((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            var snapshot = payload.snapshot, prevKey = payload.prevKey;
            /** @type {?} */
            var key = null;
            if (snapshot.exists()) {
                key = snapshot.key;
            }
            return { type: event, payload: snapshot, prevKey: prevKey, key: key };
        })), operators.share());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     * @param {?} ref
     * @param {?} events
     * @param {?=} scheduler
     * @return {?}
     */
    function listChanges(ref, events, scheduler) {
        return fromRef(ref, 'value', 'once', scheduler).pipe(operators.switchMap((/**
         * @param {?} snapshotAction
         * @return {?}
         */
        function (snapshotAction) {
            /** @type {?} */
            var childEvent$ = [rxjs.of(snapshotAction)];
            events.forEach((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return childEvent$.push(fromRef(ref, event, 'on', scheduler)); }));
            return rxjs.merge.apply(void 0, __spread(childEvent$)).pipe(operators.scan(buildView, []));
        })), operators.distinctUntilChanged());
    }
    /**
     * @template T
     * @param {?} changes
     * @param {?} key
     * @return {?}
     */
    function positionFor(changes, key) {
        /** @type {?} */
        var len = changes.length;
        for (var i = 0; i < len; i++) {
            if (changes[i].payload.key === key) {
                return i;
            }
        }
        return -1;
    }
    /**
     * @template T
     * @param {?} changes
     * @param {?=} prevKey
     * @return {?}
     */
    function positionAfter(changes, prevKey) {
        if (isNil(prevKey)) {
            return 0;
        }
        else {
            /** @type {?} */
            var i = positionFor(changes, prevKey);
            if (i === -1) {
                return changes.length;
            }
            else {
                return i + 1;
            }
        }
    }
    /**
     * @param {?} current
     * @param {?} action
     * @return {?}
     */
    function buildView(current, action) {
        var payload = action.payload, type = action.type, prevKey = action.prevKey, key = action.key;
        /** @type {?} */
        var currentKeyPosition = positionFor(current, key);
        /** @type {?} */
        var afterPreviousKeyPosition = positionAfter(current, prevKey);
        switch (action.type) {
            case 'value':
                if (action.payload && action.payload.exists()) {
                    /** @type {?} */
                    var prevKey_1 = null;
                    action.payload.forEach((/**
                     * @param {?} payload
                     * @return {?}
                     */
                    function (payload) {
                        /** @type {?} */
                        var action = { payload: payload, type: 'value', prevKey: prevKey_1, key: payload.key };
                        prevKey_1 = payload.key;
                        current = __spread(current, [action]);
                        return false;
                    }));
                }
                return current;
            case 'child_added':
                if (currentKeyPosition > -1) {
                    // check that the previouskey is what we expect, else reorder
                    /** @type {?} */
                    var previous = current[currentKeyPosition - 1];
                    if ((previous && previous.key || null) != prevKey) {
                        current = current.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.payload.key !== payload.key; }));
                        current.splice(afterPreviousKeyPosition, 0, action);
                    }
                }
                else if (prevKey == null) {
                    return __spread([action], current);
                }
                else {
                    current = current.slice();
                    current.splice(afterPreviousKeyPosition, 0, action);
                }
                return current;
            case 'child_removed':
                return current.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.payload.key !== payload.key; }));
            case 'child_changed':
                return current.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.payload.key === key ? action : x; }));
            case 'child_moved':
                if (currentKeyPosition > -1) {
                    /** @type {?} */
                    var data = current.splice(currentKeyPosition, 1)[0];
                    current = current.slice();
                    current.splice(afterPreviousKeyPosition, 0, data);
                    return current;
                }
                return current;
            // default will also remove null results
            default:
                return current;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?=} events
     * @return {?}
     */
    function validateEventsArray(events) {
        if (isNil(events) || (/** @type {?} */ (events)).length === 0) {
            events = ['child_added', 'child_removed', 'child_changed', 'child_moved'];
        }
        return events;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     * @param {?} query
     * @param {?=} events
     * @param {?=} scheduler
     * @return {?}
     */
    function snapshotChanges(query, events, scheduler) {
        events = validateEventsArray(events);
        return listChanges(query, (/** @type {?} */ (events)), scheduler);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     * @param {?} query
     * @param {?=} events
     * @param {?=} scheduler
     * @return {?}
     */
    function stateChanges(query, events, scheduler) {
        events = (/** @type {?} */ (validateEventsArray(events)));
        /** @type {?} */
        var childEvent$ = events.map((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return fromRef(query, event, 'on', scheduler); }));
        return rxjs.merge.apply(void 0, __spread(childEvent$));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     * @param {?} query
     * @param {?=} events
     * @param {?=} scheduler
     * @return {?}
     */
    function auditTrail(query, events, scheduler) {
        /** @type {?} */
        var auditTrail$ = stateChanges(query, events)
            .pipe(operators.scan((/**
         * @param {?} current
         * @param {?} action
         * @return {?}
         */
        function (current, action) { return __spread(current, [action]); }), []));
        return waitForLoaded(query, auditTrail$, scheduler);
    }
    /**
     * @record
     */
    function LoadedMetadata() { }
    if (false) {
        /** @type {?} */
        LoadedMetadata.prototype.data;
        /** @type {?} */
        LoadedMetadata.prototype.lastKeyToLoad;
    }
    /**
     * @template T
     * @param {?} query
     * @param {?=} scheduler
     * @return {?}
     */
    function loadedData(query, scheduler) {
        // Create an observable of loaded values to retrieve the
        // known dataset. This will allow us to know what key to
        // emit the "whole" array at when listening for child events.
        return fromRef(query, 'value', 'on', scheduler)
            .pipe(operators.map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            // Store the last key in the data set
            /** @type {?} */
            var lastKeyToLoad;
            // Loop through loaded dataset to find the last key
            data.payload.forEach((/**
             * @param {?} child
             * @return {?}
             */
            function (child) {
                lastKeyToLoad = child.key;
                return false;
            }));
            // return data set and the current last key loaded
            return { data: data, lastKeyToLoad: lastKeyToLoad };
        })));
    }
    /**
     * @template T
     * @param {?} query
     * @param {?} action$
     * @param {?=} scheduler
     * @return {?}
     */
    function waitForLoaded(query, action$, scheduler) {
        /** @type {?} */
        var loaded$ = loadedData(query, scheduler);
        return loaded$
            .pipe(operators.withLatestFrom(action$), 
        // Get the latest values from the "loaded" and "child" datasets
        // We can use both datasets to form an array of the latest values.
        operators.map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), loaded = _b[0], actions = _b[1];
            // Store the last key in the data set
            /** @type {?} */
            var lastKeyToLoad = loaded.lastKeyToLoad;
            // Store all child keys loaded at this point
            /** @type {?} */
            var loadedKeys = actions.map((/**
             * @param {?} snap
             * @return {?}
             */
            function (snap) { return snap.key; }));
            return { actions: actions, lastKeyToLoad: lastKeyToLoad, loadedKeys: loadedKeys };
        })), 
        // This is the magical part, only emit when the last load key
        // in the dataset has been loaded by a child event. At this point
        // we can assume the dataset is "whole".
        operators.skipWhile((/**
         * @param {?} meta
         * @return {?}
         */
        function (meta) { return meta.loadedKeys.indexOf(meta.lastKeyToLoad) === -1; })), 
        // Pluck off the meta data because the user only cares
        // to iterate through the snapshots
        operators.map((/**
         * @param {?} meta
         * @return {?}
         */
        function (meta) { return meta.actions; })));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     * @param {?} ref
     * @param {?} operation
     * @return {?}
     */
    function createDataOperationMethod(ref, operation) {
        return (/**
         * @template T
         * @param {?} item
         * @param {?} value
         * @return {?}
         */
        function dataOperation(item, value) {
            return checkOperationCases(item, {
                stringCase: (/**
                 * @return {?}
                 */
                function () { return ref.child((/** @type {?} */ (item)))[operation](value); }),
                firebaseCase: (/**
                 * @return {?}
                 */
                function () { return ((/** @type {?} */ (item)))[operation](value); }),
                snapshotCase: (/**
                 * @return {?}
                 */
                function () { return ((/** @type {?} */ (item))).ref[operation](value); })
            });
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO(davideast): Find out why TS thinks this returns firebase.Primise
    // instead of Promise.
    /**
     * @template T
     * @param {?} ref
     * @return {?}
     */
    function createRemoveMethod(ref) {
        return (/**
         * @param {?=} item
         * @return {?}
         */
        function remove(item) {
            if (!item) {
                return ref.remove();
            }
            return checkOperationCases(item, {
                stringCase: (/**
                 * @return {?}
                 */
                function () { return ref.child((/** @type {?} */ (item))).remove(); }),
                firebaseCase: (/**
                 * @return {?}
                 */
                function () { return ((/** @type {?} */ (item))).remove(); }),
                snapshotCase: (/**
                 * @return {?}
                 */
                function () { return ((/** @type {?} */ (item))).ref.remove(); })
            });
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     * @param {?} query
     * @param {?} afDatabase
     * @return {?}
     */
    function createListReference(query, afDatabase) {
        /** @type {?} */
        var outsideAngularScheduler = afDatabase.schedulers.outsideAngular;
        return {
            query: query,
            update: createDataOperationMethod(query.ref, 'update'),
            set: createDataOperationMethod(query.ref, 'set'),
            push: (/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return query.ref.push(data); }),
            remove: createRemoveMethod(query.ref),
            snapshotChanges: /**
             * @param {?=} events
             * @return {?}
             */
            function (events) {
                return snapshotChanges(query, events, outsideAngularScheduler).pipe(afDatabase.keepUnstableUntilFirst);
            },
            stateChanges: /**
             * @param {?=} events
             * @return {?}
             */
            function (events) {
                return stateChanges(query, events, outsideAngularScheduler).pipe(afDatabase.keepUnstableUntilFirst);
            },
            auditTrail: /**
             * @param {?=} events
             * @return {?}
             */
            function (events) {
                return auditTrail(query, events, outsideAngularScheduler).pipe(afDatabase.keepUnstableUntilFirst);
            },
            valueChanges: /**
             * @param {?=} events
             * @return {?}
             */
            function (events) {
                /** @type {?} */
                var snapshotChanges$ = snapshotChanges(query, events, outsideAngularScheduler);
                return snapshotChanges$.pipe(afDatabase.keepUnstableUntilFirst, operators.map((/**
                 * @param {?} actions
                 * @return {?}
                 */
                function (actions) { return actions.map((/**
                 * @param {?} a
                 * @return {?}
                 */
                function (a) { return (/** @type {?} */ (a.payload.val())); })); })));
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     * @param {?} query
     * @param {?=} scheduler
     * @return {?}
     */
    function createObjectSnapshotChanges(query, scheduler) {
        return (/**
         * @return {?}
         */
        function snapshotChanges() {
            return fromRef(query, 'value', 'on', scheduler);
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     * @param {?} query
     * @param {?} afDatabase
     * @return {?}
     */
    function createObjectReference(query, afDatabase) {
        return {
            query: query,
            snapshotChanges: /**
             * @template T
             * @return {?}
             */
            function () {
                return createObjectSnapshotChanges(query, afDatabase.schedulers.outsideAngular)().pipe((/** @type {?} */ (afDatabase.keepUnstableUntilFirst)));
            },
            update: /**
             * @param {?} data
             * @return {?}
             */
            function (data) { return (/** @type {?} */ (query.ref.update((/** @type {?} */ (data))))); },
            set: /**
             * @param {?} data
             * @return {?}
             */
            function (data) { return (/** @type {?} */ (query.ref.set(data))); },
            remove: /**
             * @return {?}
             */
            function () { return (/** @type {?} */ (query.ref.remove())); },
            valueChanges: /**
             * @template T
             * @return {?}
             */
            function () {
                /** @type {?} */
                var snapshotChanges$ = createObjectSnapshotChanges(query, afDatabase.schedulers.outsideAngular)();
                return snapshotChanges$.pipe(afDatabase.keepUnstableUntilFirst, operators.map((/**
                 * @param {?} action
                 * @return {?}
                 */
                function (action) { return action.payload.exists() ? (/** @type {?} */ (action.payload.val())) : null; })));
            },
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var URL = new core.InjectionToken('angularfire2.realtimeDatabaseURL');
    var AngularFireDatabase = /** @class */ (function () {
        function AngularFireDatabase(options, nameOrConfig, databaseURL, platformId, zone) {
            this.schedulers = new fire["ɵAngularFireSchedulers"](zone);
            this.keepUnstableUntilFirst = fire["ɵkeepUnstableUntilFirstFactory"](this.schedulers, platformId);
            this.database = zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var app = fire["ɵfirebaseAppFactory"](options, zone, nameOrConfig);
                if (!app.database) {
                    throw "You must import 'firebase/database' before using AngularFireDatabase";
                }
                return app.database(databaseURL || undefined);
            }));
        }
        /**
         * @template T
         * @param {?} pathOrRef
         * @param {?=} queryFn
         * @return {?}
         */
        AngularFireDatabase.prototype.list = /**
         * @template T
         * @param {?} pathOrRef
         * @param {?=} queryFn
         * @return {?}
         */
        function (pathOrRef, queryFn) {
            /** @type {?} */
            var ref = getRef(this.database, pathOrRef);
            /** @type {?} */
            var query = ref;
            if (queryFn) {
                query = queryFn(ref);
            }
            return createListReference(query, this);
        };
        /**
         * @template T
         * @param {?} pathOrRef
         * @return {?}
         */
        AngularFireDatabase.prototype.object = /**
         * @template T
         * @param {?} pathOrRef
         * @return {?}
         */
        function (pathOrRef) {
            /** @type {?} */
            var ref = getRef(this.database, pathOrRef);
            return createObjectReference(ref, this);
        };
        /**
         * @return {?}
         */
        AngularFireDatabase.prototype.createPushId = /**
         * @return {?}
         */
        function () {
            return this.database.ref().push().key;
        };
        AngularFireDatabase.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'any'
                    },] }
        ];
        /** @nocollapse */
        AngularFireDatabase.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [fire.FIREBASE_OPTIONS,] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [fire.FIREBASE_APP_NAME,] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [URL,] }] },
            { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] },
            { type: core.NgZone }
        ]; };
        /** @nocollapse */ AngularFireDatabase.ɵprov = core["ɵɵdefineInjectable"]({ factory: function AngularFireDatabase_Factory() { return new AngularFireDatabase(core["ɵɵinject"](fire.FIREBASE_OPTIONS), core["ɵɵinject"](fire.FIREBASE_APP_NAME, 8), core["ɵɵinject"](URL, 8), core["ɵɵinject"](core.PLATFORM_ID), core["ɵɵinject"](core.NgZone)); }, token: AngularFireDatabase, providedIn: "any" });
        return AngularFireDatabase;
    }());
    if (false) {
        /** @type {?} */
        AngularFireDatabase.prototype.database;
        /** @type {?} */
        AngularFireDatabase.prototype.schedulers;
        /** @type {?} */
        AngularFireDatabase.prototype.keepUnstableUntilFirst;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularFireDatabaseModule = /** @class */ (function () {
        function AngularFireDatabaseModule() {
        }
        AngularFireDatabaseModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [AngularFireDatabase]
                    },] }
        ];
        return AngularFireDatabaseModule;
    }());

    exports.AngularFireDatabase = AngularFireDatabase;
    exports.AngularFireDatabaseModule = AngularFireDatabaseModule;
    exports.URL = URL;
    exports.auditTrail = auditTrail;
    exports.createListReference = createListReference;
    exports.fromRef = fromRef;
    exports.listChanges = listChanges;
    exports.snapshotChanges = snapshotChanges;
    exports.stateChanges = stateChanges;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
// source map elided