(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/fire'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@angular/fire/performance', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/fire', '@angular/common'], factory) :
    (global = global || self, factory((global.angular = global.angular || {}, global.angular.fire = global.angular.fire || {}, global.angular.fire.performance = {}), global.ng.core, global.rxjs, global.rxjs.operators, global.angular.fire, global.ng.common));
}(this, (function (exports, core, rxjs, operators, fire, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // SEMVER @ v6, drop and move core ng metrics to a service
    /** @type {?} */
    var AUTOMATICALLY_TRACE_CORE_NG_METRICS = new core.InjectionToken('angularfire2.performance.auto_trace');
    /** @type {?} */
    var INSTRUMENTATION_ENABLED = new core.InjectionToken('angularfire2.performance.instrumentationEnabled');
    /** @type {?} */
    var DATA_COLLECTION_ENABLED = new core.InjectionToken('angularfire2.performance.dataCollectionEnabled');
    // WARNING: interface has both a type and a value, skipping emit
    ;
    var AngularFirePerformance = /** @class */ (function () {
        function AngularFirePerformance(app, automaticallyTraceCoreNgMetrics, instrumentationEnabled, dataCollectionEnabled, appRef, zone, platformId) {
            var _this = this;
            this.zone = zone;
            this.trace$ = (/**
             * @param {?} name
             * @param {?=} options
             * @return {?}
             */
            function (name, options) {
                return _this.performance.pipe(operators.switchMap((/**
                 * @param {?} performance
                 * @return {?}
                 */
                function (performance) {
                    return new rxjs.Observable((/**
                     * @param {?} emitter
                     * @return {?}
                     */
                    function (emitter) {
                        return _this.zone.runOutsideAngular((/**
                         * @return {?}
                         */
                        function () {
                            /** @type {?} */
                            var trace = performance.trace(name);
                            options && options.metrics && Object.keys(options.metrics).forEach((/**
                             * @param {?} metric
                             * @return {?}
                             */
                            function (metric) {
                                trace.putMetric(metric, (/** @type {?} */ ((/** @type {?} */ (options)).metrics))[metric]);
                            }));
                            options && options.attributes && Object.keys(options.attributes).forEach((/**
                             * @param {?} attribute
                             * @return {?}
                             */
                            function (attribute) {
                                trace.putAttribute(attribute, (/** @type {?} */ ((/** @type {?} */ (options)).attributes))[attribute]);
                            }));
                            /** @type {?} */
                            var attributeSubscriptions = options && options.attribute$ ? Object.keys(options.attribute$).map((/**
                             * @param {?} attribute
                             * @return {?}
                             */
                            function (attribute) {
                                return (/** @type {?} */ ((/** @type {?} */ (options)).attribute$))[attribute].subscribe((/**
                                 * @param {?} next
                                 * @return {?}
                                 */
                                function (next) { return trace.putAttribute(attribute, next); }));
                            })) : [];
                            /** @type {?} */
                            var metricSubscriptions = options && options.metric$ ? Object.keys(options.metric$).map((/**
                             * @param {?} metric
                             * @return {?}
                             */
                            function (metric) {
                                return (/** @type {?} */ ((/** @type {?} */ (options)).metric$))[metric].subscribe((/**
                                 * @param {?} next
                                 * @return {?}
                                 */
                                function (next) { return trace.putMetric(metric, next); }));
                            })) : [];
                            /** @type {?} */
                            var incrementOnSubscriptions = options && options.incrementMetric$ ? Object.keys(options.incrementMetric$).map((/**
                             * @param {?} metric
                             * @return {?}
                             */
                            function (metric) {
                                return (/** @type {?} */ ((/** @type {?} */ (options)).incrementMetric$))[metric].subscribe((/**
                                 * @param {?} next
                                 * @return {?}
                                 */
                                function (next) { return trace.incrementMetric(metric, next || undefined); }));
                            })) : [];
                            emitter.next(trace.start());
                            return { unsubscribe: (/**
                                 * @return {?}
                                 */
                                function () {
                                    trace.stop();
                                    metricSubscriptions.forEach((/**
                                     * @param {?} m
                                     * @return {?}
                                     */
                                    function (m) { return m.unsubscribe(); }));
                                    incrementOnSubscriptions.forEach((/**
                                     * @param {?} m
                                     * @return {?}
                                     */
                                    function (m) { return m.unsubscribe(); }));
                                    attributeSubscriptions.forEach((/**
                                     * @param {?} m
                                     * @return {?}
                                     */
                                    function (m) { return m.unsubscribe(); }));
                                }) };
                        }));
                    }));
                })));
            });
            this.traceUntil = (/**
             * @template T
             * @param {?} name
             * @param {?} test
             * @param {?=} options
             * @return {?}
             */
            function (name, test, options) { return (/**
             * @param {?} source$
             * @return {?}
             */
            function (source$) { return new rxjs.Observable((/**
             * @param {?} subscriber
             * @return {?}
             */
            function (subscriber) {
                /** @type {?} */
                var traceSubscription = _this.trace$(name, options).subscribe();
                return source$.pipe(operators.tap((/**
                 * @param {?} a
                 * @return {?}
                 */
                function (a) { return test(a) && traceSubscription.unsubscribe(); }), (/**
                 * @return {?}
                 */
                function () { }), (/**
                 * @return {?}
                 */
                function () { return options && options.orComplete && traceSubscription.unsubscribe(); }))).subscribe(subscriber);
            })); }); });
            this.traceWhile = (/**
             * @template T
             * @param {?} name
             * @param {?} test
             * @param {?=} options
             * @return {?}
             */
            function (name, test, options) { return (/**
             * @param {?} source$
             * @return {?}
             */
            function (source$) { return new rxjs.Observable((/**
             * @param {?} subscriber
             * @return {?}
             */
            function (subscriber) {
                /** @type {?} */
                var traceSubscription;
                return source$.pipe(operators.tap((/**
                 * @param {?} a
                 * @return {?}
                 */
                function (a) {
                    if (test(a)) {
                        traceSubscription = traceSubscription || _this.trace$(name, options).subscribe();
                    }
                    else {
                        traceSubscription && traceSubscription.unsubscribe();
                        traceSubscription = undefined;
                    }
                }), (/**
                 * @return {?}
                 */
                function () { }), (/**
                 * @return {?}
                 */
                function () { return options && options.orComplete && traceSubscription && traceSubscription.unsubscribe(); }))).subscribe(subscriber);
            })); }); });
            this.traceUntilComplete = (/**
             * @template T
             * @param {?} name
             * @param {?=} options
             * @return {?}
             */
            function (name, options) { return (/**
             * @param {?} source$
             * @return {?}
             */
            function (source$) { return new rxjs.Observable((/**
             * @param {?} subscriber
             * @return {?}
             */
            function (subscriber) {
                /** @type {?} */
                var traceSubscription = _this.trace$(name, options).subscribe();
                return source$.pipe(operators.tap((/**
                 * @return {?}
                 */
                function () { }), (/**
                 * @return {?}
                 */
                function () { }), (/**
                 * @return {?}
                 */
                function () { return traceSubscription.unsubscribe(); }))).subscribe(subscriber);
            })); }); });
            this.traceUntilFirst = (/**
             * @template T
             * @param {?} name
             * @param {?=} options
             * @return {?}
             */
            function (name, options) { return (/**
             * @param {?} source$
             * @return {?}
             */
            function (source$) { return new rxjs.Observable((/**
             * @param {?} subscriber
             * @return {?}
             */
            function (subscriber) {
                /** @type {?} */
                var traceSubscription = _this.trace$(name, options).subscribe();
                return source$.pipe(operators.tap((/**
                 * @return {?}
                 */
                function () { return traceSubscription.unsubscribe(); }), (/**
                 * @return {?}
                 */
                function () { }), (/**
                 * @return {?}
                 */
                function () { }))).subscribe(subscriber);
            })); }); });
            this.trace = (/**
             * @template T
             * @param {?} name
             * @param {?=} options
             * @return {?}
             */
            function (name, options) { return (/**
             * @param {?} source$
             * @return {?}
             */
            function (source$) { return new rxjs.Observable((/**
             * @param {?} subscriber
             * @return {?}
             */
            function (subscriber) {
                /** @type {?} */
                var traceSubscription = _this.trace$(name, options).subscribe();
                return source$.pipe(operators.tap((/**
                 * @return {?}
                 */
                function () { return traceSubscription.unsubscribe(); }), (/**
                 * @return {?}
                 */
                function () { }), (/**
                 * @return {?}
                 */
                function () { return traceSubscription.unsubscribe(); }))).subscribe(subscriber);
            })); }); });
            this.performance = rxjs.of(undefined).pipe(operators.switchMap((/**
             * @return {?}
             */
            function () { return common.isPlatformBrowser(platformId) ? zone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return import('firebase/performance'); })) : rxjs.empty(); })), operators.map((/**
             * @return {?}
             */
            function () { return zone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return app.performance(); })); })), operators.tap((/**
             * @param {?} performance
             * @return {?}
             */
            function (performance) {
                if (instrumentationEnabled == false) {
                    performance.instrumentationEnabled = false;
                }
                if (dataCollectionEnabled == false) {
                    performance.dataCollectionEnabled = false;
                }
            })), operators.shareReplay({ bufferSize: 1, refCount: false }));
            if (automaticallyTraceCoreNgMetrics != false) {
                // TODO determine more built in metrics
                // this leaks... move to a service?
                appRef.isStable.pipe(operators.first((/**
                 * @param {?} it
                 * @return {?}
                 */
                function (it) { return it; })), this.traceUntilComplete('isStable')).subscribe();
            }
            return fire["ɵlazySDKProxy"](this, this.performance, zone);
        }
        AngularFirePerformance.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'any'
                    },] }
        ];
        /** @nocollapse */
        AngularFirePerformance.ctorParameters = function () { return [
            { type: fire.FirebaseApp },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [AUTOMATICALLY_TRACE_CORE_NG_METRICS,] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [INSTRUMENTATION_ENABLED,] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [DATA_COLLECTION_ENABLED,] }] },
            { type: core.ApplicationRef },
            { type: core.NgZone },
            { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
        ]; };
        /** @nocollapse */ AngularFirePerformance.ɵprov = core["ɵɵdefineInjectable"]({ factory: function AngularFirePerformance_Factory() { return new AngularFirePerformance(core["ɵɵinject"](fire.FirebaseApp), core["ɵɵinject"](AUTOMATICALLY_TRACE_CORE_NG_METRICS, 8), core["ɵɵinject"](INSTRUMENTATION_ENABLED, 8), core["ɵɵinject"](DATA_COLLECTION_ENABLED, 8), core["ɵɵinject"](core.ApplicationRef), core["ɵɵinject"](core.NgZone), core["ɵɵinject"](core.PLATFORM_ID)); }, token: AngularFirePerformance, providedIn: "any" });
        return AngularFirePerformance;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AngularFirePerformance.prototype.performance;
        /**
         * @type {?}
         * @private
         */
        AngularFirePerformance.prototype.trace$;
        /** @type {?} */
        AngularFirePerformance.prototype.traceUntil;
        /** @type {?} */
        AngularFirePerformance.prototype.traceWhile;
        /** @type {?} */
        AngularFirePerformance.prototype.traceUntilComplete;
        /** @type {?} */
        AngularFirePerformance.prototype.traceUntilFirst;
        /** @type {?} */
        AngularFirePerformance.prototype.trace;
        /**
         * @type {?}
         * @private
         */
        AngularFirePerformance.prototype.zone;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularFirePerformanceModule = /** @class */ (function () {
        function AngularFirePerformanceModule(_) {
            // DI inject AFP here for the automatic data collection
        }
        AngularFirePerformanceModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [AngularFirePerformance]
                    },] }
        ];
        /** @nocollapse */
        AngularFirePerformanceModule.ctorParameters = function () { return [
            { type: AngularFirePerformance }
        ]; };
        return AngularFirePerformanceModule;
    }());

    exports.AUTOMATICALLY_TRACE_CORE_NG_METRICS = AUTOMATICALLY_TRACE_CORE_NG_METRICS;
    exports.AngularFirePerformance = AngularFirePerformance;
    exports.AngularFirePerformanceModule = AngularFirePerformanceModule;
    exports.DATA_COLLECTION_ENABLED = DATA_COLLECTION_ENABLED;
    exports.INSTRUMENTATION_ENABLED = INSTRUMENTATION_ENABLED;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
// source map elided