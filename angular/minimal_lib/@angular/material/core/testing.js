(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tslib'), require('@angular/cdk/testing')) :
    typeof define === 'function' && define.amd ? define('@angular/material/core/testing', ['exports', 'tslib', '@angular/cdk/testing'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.material = global.ng.material || {}, global.ng.material.core = global.ng.material.core || {}, global.ng.material.core.testing = {}), global.tslib, global.ng.cdk.testing));
}(this, (function (exports, tslib, testing) { 'use strict';

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Harness for interacting with a `mat-option` in tests. */
    var MatOptionHarness = /** @class */ (function (_super) {
        tslib.__extends(MatOptionHarness, _super);
        function MatOptionHarness() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Gets a `HarnessPredicate` that can be used to search for a `MatOptionsHarness` that meets
         * certain criteria.
         * @param options Options for filtering which option instances are considered a match.
         * @return a `HarnessPredicate` configured with the given options.
         */
        MatOptionHarness.with = function (options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            return new testing.HarnessPredicate(MatOptionHarness, options)
                .addOption('text', options.text, function (harness, title) { return tslib.__awaiter(_this, void 0, void 0, function () { var _a, _b; return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = testing.HarnessPredicate).stringMatches;
                        return [4 /*yield*/, harness.getText()];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), title])];
                }
            }); }); })
                .addOption('isSelected', options.isSelected, function (harness, isSelected) { return tslib.__awaiter(_this, void 0, void 0, function () { return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, harness.isSelected()];
                    case 1: return [2 /*return*/, (_a.sent()) === isSelected];
                }
            }); }); });
        };
        /** Clicks the option. */
        MatOptionHarness.prototype.click = function () {
            return tslib.__awaiter(this, void 0, void 0, function () {
                return tslib.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.host()];
                        case 1: return [2 /*return*/, (_a.sent()).click()];
                    }
                });
            });
        };
        /** Gets the option's label text. */
        MatOptionHarness.prototype.getText = function () {
            return tslib.__awaiter(this, void 0, void 0, function () {
                return tslib.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.host()];
                        case 1: return [2 /*return*/, (_a.sent()).text()];
                    }
                });
            });
        };
        /** Gets whether the option is disabled. */
        MatOptionHarness.prototype.isDisabled = function () {
            return tslib.__awaiter(this, void 0, void 0, function () {
                return tslib.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.host()];
                        case 1: return [2 /*return*/, (_a.sent()).hasClass('mat-option-disabled')];
                    }
                });
            });
        };
        /** Gets whether the option is selected. */
        MatOptionHarness.prototype.isSelected = function () {
            return tslib.__awaiter(this, void 0, void 0, function () {
                return tslib.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.host()];
                        case 1: return [2 /*return*/, (_a.sent()).hasClass('mat-selected')];
                    }
                });
            });
        };
        /** Gets whether the option is active. */
        MatOptionHarness.prototype.isActive = function () {
            return tslib.__awaiter(this, void 0, void 0, function () {
                return tslib.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.host()];
                        case 1: return [2 /*return*/, (_a.sent()).hasClass('mat-active')];
                    }
                });
            });
        };
        /** Gets whether the option is in multiple selection mode. */
        MatOptionHarness.prototype.isMultiple = function () {
            return tslib.__awaiter(this, void 0, void 0, function () {
                return tslib.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.host()];
                        case 1: return [2 /*return*/, (_a.sent()).hasClass('mat-option-multiple')];
                    }
                });
            });
        };
        /** Selector used to locate option instances. */
        MatOptionHarness.hostSelector = '.mat-option';
        return MatOptionHarness;
    }(testing.ComponentHarness));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Harness for interacting with a `mat-optgroup` in tests. */
    var MatOptgroupHarness = /** @class */ (function (_super) {
        tslib.__extends(MatOptgroupHarness, _super);
        function MatOptgroupHarness() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._label = _this.locatorFor('.mat-optgroup-label');
            return _this;
        }
        /**
         * Gets a `HarnessPredicate` that can be used to search for a `MatOptgroupHarness` that meets
         * certain criteria.
         * @param options Options for filtering which option instances are considered a match.
         * @return a `HarnessPredicate` configured with the given options.
         */
        MatOptgroupHarness.with = function (options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            return new testing.HarnessPredicate(MatOptgroupHarness, options)
                .addOption('labelText', options.labelText, function (harness, title) { return tslib.__awaiter(_this, void 0, void 0, function () { var _a, _b; return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = testing.HarnessPredicate).stringMatches;
                        return [4 /*yield*/, harness.getLabelText()];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), title])];
                }
            }); }); });
        };
        /** Gets the option group's label text. */
        MatOptgroupHarness.prototype.getLabelText = function () {
            return tslib.__awaiter(this, void 0, void 0, function () {
                return tslib.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this._label()];
                        case 1: return [2 /*return*/, (_a.sent()).text()];
                    }
                });
            });
        };
        /** Gets whether the option group is disabled. */
        MatOptgroupHarness.prototype.isDisabled = function () {
            return tslib.__awaiter(this, void 0, void 0, function () {
                return tslib.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.host()];
                        case 1: return [2 /*return*/, (_a.sent()).hasClass('mat-optgroup-disabled')];
                    }
                });
            });
        };
        /**
         * Gets the options that are inside the group.
         * @param filter Optionally filters which options are included.
         */
        MatOptgroupHarness.prototype.getOptions = function (filter) {
            if (filter === void 0) { filter = {}; }
            return tslib.__awaiter(this, void 0, void 0, function () {
                return tslib.__generator(this, function (_a) {
                    return [2 /*return*/, this.locatorForAll(MatOptionHarness.with(filter))()];
                });
            });
        };
        /** Selector used to locate option group instances. */
        MatOptgroupHarness.hostSelector = '.mat-optgroup';
        return MatOptgroupHarness;
    }(testing.ComponentHarness));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    exports.MatOptgroupHarness = MatOptgroupHarness;
    exports.MatOptionHarness = MatOptionHarness;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
// source map elided