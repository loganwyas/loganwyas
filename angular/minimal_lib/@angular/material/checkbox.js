(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tslib'), require('@angular/cdk/a11y'), require('@angular/cdk/coercion'), require('@angular/core'), require('@angular/forms'), require('@angular/material/core'), require('@angular/platform-browser/animations'), require('@angular/cdk/observers'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@angular/material/checkbox', ['exports', 'tslib', '@angular/cdk/a11y', '@angular/cdk/coercion', '@angular/core', '@angular/forms', '@angular/material/core', '@angular/platform-browser/animations', '@angular/cdk/observers', '@angular/common'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.material = global.ng.material || {}, global.ng.material.checkbox = {}), global.tslib, global.ng.cdk.a11y, global.ng.cdk.coercion, global.ng.core, global.ng.forms, global.ng.material.core, global.ng.platformBrowser.animations, global.ng.cdk.observers, global.ng.common));
}(this, (function (exports, tslib, a11y, coercion, core, forms, core$1, animations, observers, common) { 'use strict';

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Injection token to be used to override the default options for `mat-checkbox`. */
    var MAT_CHECKBOX_DEFAULT_OPTIONS = new core.InjectionToken('mat-checkbox-default-options', {
        providedIn: 'root',
        factory: MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY
    });
    /** @docs-private */
    function MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY() {
        return {
            color: 'accent',
            clickAction: 'check-indeterminate',
        };
    }
    /**
     * Injection token that can be used to specify the checkbox click behavior.
     * @deprecated Injection token will be removed, use `MAT_CHECKBOX_DEFAULT_OPTIONS` instead.
     * @breaking-change 10.0.0
     */
    var MAT_CHECKBOX_CLICK_ACTION = new core.InjectionToken('mat-checkbox-click-action');

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // Increasing integer for generating unique ids for checkbox components.
    var nextUniqueId = 0;
    /**
     * Provider Expression that allows mat-checkbox to register as a ControlValueAccessor.
     * This allows it to support [(ngModel)].
     * @docs-private
     */
    var MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return MatCheckbox; }),
        multi: true
    };
    (function (TransitionCheckState) {
        /** The initial state of the component before any user interaction. */
        TransitionCheckState[TransitionCheckState["Init"] = 0] = "Init";
        /** The state representing the component when it's becoming checked. */
        TransitionCheckState[TransitionCheckState["Checked"] = 1] = "Checked";
        /** The state representing the component when it's becoming unchecked. */
        TransitionCheckState[TransitionCheckState["Unchecked"] = 2] = "Unchecked";
        /** The state representing the component when it's becoming indeterminate. */
        TransitionCheckState[TransitionCheckState["Indeterminate"] = 3] = "Indeterminate";
    })(exports.TransitionCheckState || (exports.TransitionCheckState = {}));
    /** Change event object emitted by MatCheckbox. */
    var MatCheckboxChange = /** @class */ (function () {
        function MatCheckboxChange() {
        }
        return MatCheckboxChange;
    }());
    // Boilerplate for applying mixins to MatCheckbox.
    /** @docs-private */
    var MatCheckboxBase = /** @class */ (function () {
        function MatCheckboxBase(_elementRef) {
            this._elementRef = _elementRef;
        }
        return MatCheckboxBase;
    }());
    var _MatCheckboxMixinBase = core$1.mixinTabIndex(core$1.mixinColor(core$1.mixinDisableRipple(core$1.mixinDisabled(MatCheckboxBase))));
    /**
     * A material design checkbox component. Supports all of the functionality of an HTML5 checkbox,
     * and exposes a similar API. A MatCheckbox can be either checked, unchecked, indeterminate, or
     * disabled. Note that all additional accessibility attributes are taken care of by the component,
     * so there is no need to provide them yourself. However, if you want to omit a label and still
     * have the checkbox be accessible, you may supply an [aria-label] input.
     * See: https://material.io/design/components/selection-controls.html
     */
    var MatCheckbox = /** @class */ (function (_super) {
        tslib.__extends(MatCheckbox, _super);
        function MatCheckbox(elementRef, _changeDetectorRef, _focusMonitor, _ngZone, tabIndex, 
        /**
         * @deprecated `_clickAction` parameter to be removed, use
         * `MAT_CHECKBOX_DEFAULT_OPTIONS`
         * @breaking-change 10.0.0
         */
        _clickAction, _animationMode, _options) {
            var _this = _super.call(this, elementRef) || this;
            _this._changeDetectorRef = _changeDetectorRef;
            _this._focusMonitor = _focusMonitor;
            _this._ngZone = _ngZone;
            _this._clickAction = _clickAction;
            _this._animationMode = _animationMode;
            _this._options = _options;
            /**
             * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
             * take precedence so this may be omitted.
             */
            _this.ariaLabel = '';
            /**
             * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
             */
            _this.ariaLabelledby = null;
            _this._uniqueId = "mat-checkbox-" + ++nextUniqueId;
            /** A unique id for the checkbox input. If none is supplied, it will be auto-generated. */
            _this.id = _this._uniqueId;
            /** Whether the label should appear after or before the checkbox. Defaults to 'after' */
            _this.labelPosition = 'after';
            /** Name value will be applied to the input element if present */
            _this.name = null;
            /** Event emitted when the checkbox's `checked` value changes. */
            _this.change = new core.EventEmitter();
            /** Event emitted when the checkbox's `indeterminate` value changes. */
            _this.indeterminateChange = new core.EventEmitter();
            /**
             * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
             * @docs-private
             */
            _this._onTouched = function () { };
            _this._currentAnimationClass = '';
            _this._currentCheckState = exports.TransitionCheckState.Init;
            _this._controlValueAccessorChangeFn = function () { };
            _this._checked = false;
            _this._disabled = false;
            _this._indeterminate = false;
            _this._options = _this._options || {};
            if (_this._options.color) {
                _this.color = _this._options.color;
            }
            _this.tabIndex = parseInt(tabIndex) || 0;
            _this._focusMonitor.monitor(elementRef, true).subscribe(function (focusOrigin) {
                if (!focusOrigin) {
                    // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                    // Angular does not expect events to be raised during change detection, so any state change
                    // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
                    // See https://github.com/angular/angular/issues/17793. To work around this, we defer
                    // telling the form control it has been touched until the next tick.
                    Promise.resolve().then(function () {
                        _this._onTouched();
                        _changeDetectorRef.markForCheck();
                    });
                }
            });
            // TODO: Remove this after the `_clickAction` parameter is removed as an injection parameter.
            _this._clickAction = _this._clickAction || _this._options.clickAction;
            return _this;
        }
        Object.defineProperty(MatCheckbox.prototype, "inputId", {
            /** Returns the unique id for the visual hidden input. */
            get: function () { return (this.id || this._uniqueId) + "-input"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatCheckbox.prototype, "required", {
            /** Whether the checkbox is required. */
            get: function () { return this._required; },
            set: function (value) { this._required = coercion.coerceBooleanProperty(value); },
            enumerable: true,
            configurable: true
        });
        MatCheckbox.prototype.ngAfterViewInit = function () {
            this._syncIndeterminate(this._indeterminate);
        };
        // TODO: Delete next major revision.
        MatCheckbox.prototype.ngAfterViewChecked = function () { };
        MatCheckbox.prototype.ngOnDestroy = function () {
            this._focusMonitor.stopMonitoring(this._elementRef);
        };
        Object.defineProperty(MatCheckbox.prototype, "checked", {
            /**
             * Whether the checkbox is checked.
             */
            get: function () { return this._checked; },
            set: function (value) {
                if (value != this.checked) {
                    this._checked = value;
                    this._changeDetectorRef.markForCheck();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatCheckbox.prototype, "disabled", {
            /**
             * Whether the checkbox is disabled. This fully overrides the implementation provided by
             * mixinDisabled, but the mixin is still required because mixinTabIndex requires it.
             */
            get: function () { return this._disabled; },
            set: function (value) {
                var newValue = coercion.coerceBooleanProperty(value);
                if (newValue !== this.disabled) {
                    this._disabled = newValue;
                    this._changeDetectorRef.markForCheck();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatCheckbox.prototype, "indeterminate", {
            /**
             * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
             * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
             * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
             * set to false.
             */
            get: function () { return this._indeterminate; },
            set: function (value) {
                var changed = value != this._indeterminate;
                this._indeterminate = coercion.coerceBooleanProperty(value);
                if (changed) {
                    if (this._indeterminate) {
                        this._transitionCheckState(exports.TransitionCheckState.Indeterminate);
                    }
                    else {
                        this._transitionCheckState(this.checked ? exports.TransitionCheckState.Checked : exports.TransitionCheckState.Unchecked);
                    }
                    this.indeterminateChange.emit(this._indeterminate);
                }
                this._syncIndeterminate(this._indeterminate);
            },
            enumerable: true,
            configurable: true
        });
        MatCheckbox.prototype._isRippleDisabled = function () {
            return this.disableRipple || this.disabled;
        };
        /** Method being called whenever the label text changes. */
        MatCheckbox.prototype._onLabelTextChange = function () {
            // Since the event of the `cdkObserveContent` directive runs outside of the zone, the checkbox
            // component will be only marked for check, but no actual change detection runs automatically.
            // Instead of going back into the zone in order to trigger a change detection which causes
            // *all* components to be checked (if explicitly marked or not using OnPush), we only trigger
            // an explicit change detection for the checkbox view and its children.
            this._changeDetectorRef.detectChanges();
        };
        // Implemented as part of ControlValueAccessor.
        MatCheckbox.prototype.writeValue = function (value) {
            this.checked = !!value;
        };
        // Implemented as part of ControlValueAccessor.
        MatCheckbox.prototype.registerOnChange = function (fn) {
            this._controlValueAccessorChangeFn = fn;
        };
        // Implemented as part of ControlValueAccessor.
        MatCheckbox.prototype.registerOnTouched = function (fn) {
            this._onTouched = fn;
        };
        // Implemented as part of ControlValueAccessor.
        MatCheckbox.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        MatCheckbox.prototype._getAriaChecked = function () {
            return this.checked ? 'true' : (this.indeterminate ? 'mixed' : 'false');
        };
        MatCheckbox.prototype._transitionCheckState = function (newState) {
            var oldState = this._currentCheckState;
            var element = this._elementRef.nativeElement;
            if (oldState === newState) {
                return;
            }
            if (this._currentAnimationClass.length > 0) {
                element.classList.remove(this._currentAnimationClass);
            }
            this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
            this._currentCheckState = newState;
            if (this._currentAnimationClass.length > 0) {
                element.classList.add(this._currentAnimationClass);
                // Remove the animation class to avoid animation when the checkbox is moved between containers
                var animationClass_1 = this._currentAnimationClass;
                this._ngZone.runOutsideAngular(function () {
                    setTimeout(function () {
                        element.classList.remove(animationClass_1);
                    }, 1000);
                });
            }
        };
        MatCheckbox.prototype._emitChangeEvent = function () {
            var event = new MatCheckboxChange();
            event.source = this;
            event.checked = this.checked;
            this._controlValueAccessorChangeFn(this.checked);
            this.change.emit(event);
        };
        /** Toggles the `checked` state of the checkbox. */
        MatCheckbox.prototype.toggle = function () {
            this.checked = !this.checked;
        };
        /**
         * Event handler for checkbox input element.
         * Toggles checked state if element is not disabled.
         * Do not toggle on (change) event since IE doesn't fire change event when
         *   indeterminate checkbox is clicked.
         * @param event
         */
        MatCheckbox.prototype._onInputClick = function (event) {
            var _this = this;
            // We have to stop propagation for click events on the visual hidden input element.
            // By default, when a user clicks on a label element, a generated click event will be
            // dispatched on the associated input element. Since we are using a label element as our
            // root container, the click event on the `checkbox` will be executed twice.
            // The real click event will bubble up, and the generated click event also tries to bubble up.
            // This will lead to multiple click events.
            // Preventing bubbling for the second event will solve that issue.
            event.stopPropagation();
            // If resetIndeterminate is false, and the current state is indeterminate, do nothing on click
            if (!this.disabled && this._clickAction !== 'noop') {
                // When user manually click on the checkbox, `indeterminate` is set to false.
                if (this.indeterminate && this._clickAction !== 'check') {
                    Promise.resolve().then(function () {
                        _this._indeterminate = false;
                        _this.indeterminateChange.emit(_this._indeterminate);
                    });
                }
                this.toggle();
                this._transitionCheckState(this._checked ? exports.TransitionCheckState.Checked : exports.TransitionCheckState.Unchecked);
                // Emit our custom change event if the native input emitted one.
                // It is important to only emit it, if the native input triggered one, because
                // we don't want to trigger a change event, when the `checked` variable changes for example.
                this._emitChangeEvent();
            }
            else if (!this.disabled && this._clickAction === 'noop') {
                // Reset native input when clicked with noop. The native checkbox becomes checked after
                // click, reset it to be align with `checked` value of `mat-checkbox`.
                this._inputElement.nativeElement.checked = this.checked;
                this._inputElement.nativeElement.indeterminate = this.indeterminate;
            }
        };
        /** Focuses the checkbox. */
        MatCheckbox.prototype.focus = function (origin, options) {
            if (origin === void 0) { origin = 'keyboard'; }
            this._focusMonitor.focusVia(this._inputElement, origin, options);
        };
        MatCheckbox.prototype._onInteractionEvent = function (event) {
            // We always have to stop propagation on the change event.
            // Otherwise the change event, from the input element, will bubble up and
            // emit its event object to the `change` output.
            event.stopPropagation();
        };
        MatCheckbox.prototype._getAnimationClassForCheckStateTransition = function (oldState, newState) {
            // Don't transition if animations are disabled.
            if (this._animationMode === 'NoopAnimations') {
                return '';
            }
            var animSuffix = '';
            switch (oldState) {
                case exports.TransitionCheckState.Init:
                    // Handle edge case where user interacts with checkbox that does not have [(ngModel)] or
                    // [checked] bound to it.
                    if (newState === exports.TransitionCheckState.Checked) {
                        animSuffix = 'unchecked-checked';
                    }
                    else if (newState == exports.TransitionCheckState.Indeterminate) {
                        animSuffix = 'unchecked-indeterminate';
                    }
                    else {
                        return '';
                    }
                    break;
                case exports.TransitionCheckState.Unchecked:
                    animSuffix = newState === exports.TransitionCheckState.Checked ?
                        'unchecked-checked' : 'unchecked-indeterminate';
                    break;
                case exports.TransitionCheckState.Checked:
                    animSuffix = newState === exports.TransitionCheckState.Unchecked ?
                        'checked-unchecked' : 'checked-indeterminate';
                    break;
                case exports.TransitionCheckState.Indeterminate:
                    animSuffix = newState === exports.TransitionCheckState.Checked ?
                        'indeterminate-checked' : 'indeterminate-unchecked';
                    break;
            }
            return "mat-checkbox-anim-" + animSuffix;
        };
        /**
         * Syncs the indeterminate value with the checkbox DOM node.
         *
         * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
         * property is supported on an element boils down to `if (propName in element)`. Domino's
         * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
         * server-side rendering.
         */
        MatCheckbox.prototype._syncIndeterminate = function (value) {
            var nativeCheckbox = this._inputElement;
            if (nativeCheckbox) {
                nativeCheckbox.nativeElement.indeterminate = value;
            }
        };
        MatCheckbox.decorators = [
            { type: core.Component, args: [{
                        selector: 'mat-checkbox',
                        template: "<label [attr.for]=\"inputId\" class=\"mat-checkbox-layout\" #label>\n  <div class=\"mat-checkbox-inner-container\"\n       [class.mat-checkbox-inner-container-no-side-margin]=\"!checkboxLabel.textContent || !checkboxLabel.textContent.trim()\">\n    <input #input\n           class=\"mat-checkbox-input cdk-visually-hidden\" type=\"checkbox\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [checked]=\"checked\"\n           [attr.value]=\"value\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [tabIndex]=\"tabIndex\"\n           [attr.aria-label]=\"ariaLabel || null\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           [attr.aria-checked]=\"_getAriaChecked()\"\n           (change)=\"_onInteractionEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n    <div matRipple class=\"mat-checkbox-ripple\"\n         [matRippleTrigger]=\"label\"\n         [matRippleDisabled]=\"_isRippleDisabled()\"\n         [matRippleRadius]=\"20\"\n         [matRippleCentered]=\"true\"\n         [matRippleAnimation]=\"{enterDuration: 150}\">\n      <div class=\"mat-ripple-element mat-checkbox-persistent-ripple\"></div>\n    </div>\n    <div class=\"mat-checkbox-frame\"></div>\n    <div class=\"mat-checkbox-background\">\n      <svg version=\"1.1\"\n           focusable=\"false\"\n           class=\"mat-checkbox-checkmark\"\n           viewBox=\"0 0 24 24\"\n           xml:space=\"preserve\">\n        <path class=\"mat-checkbox-checkmark-path\"\n              fill=\"none\"\n              stroke=\"white\"\n              d=\"M4.1,12.7 9,17.6 20.3,6.3\"/>\n      </svg>\n      <!-- Element for rendering the indeterminate state checkbox. -->\n      <div class=\"mat-checkbox-mixedmark\"></div>\n    </div>\n  </div>\n  <span class=\"mat-checkbox-label\" #checkboxLabel (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
                        exportAs: 'matCheckbox',
                        host: {
                            'class': 'mat-checkbox',
                            '[id]': 'id',
                            '[attr.tabindex]': 'null',
                            '[class.mat-checkbox-indeterminate]': 'indeterminate',
                            '[class.mat-checkbox-checked]': 'checked',
                            '[class.mat-checkbox-disabled]': 'disabled',
                            '[class.mat-checkbox-label-before]': 'labelPosition == "before"',
                            '[class._mat-animation-noopable]': "_animationMode === 'NoopAnimations'",
                        },
                        providers: [MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR],
                        inputs: ['disableRipple', 'color', 'tabIndex'],
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: ["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.mat-checkbox.cdk-keyboard-focused .cdk-high-contrast-active .mat-checkbox-frame{border-style:dotted}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}\n"]
                    }] }
        ];
        /** @nocollapse */
        MatCheckbox.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: a11y.FocusMonitor },
            { type: core.NgZone },
            { type: String, decorators: [{ type: core.Attribute, args: ['tabindex',] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [MAT_CHECKBOX_CLICK_ACTION,] }] },
            { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations.ANIMATION_MODULE_TYPE,] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [MAT_CHECKBOX_DEFAULT_OPTIONS,] }] }
        ]; };
        MatCheckbox.propDecorators = {
            ariaLabel: [{ type: core.Input, args: ['aria-label',] }],
            ariaLabelledby: [{ type: core.Input, args: ['aria-labelledby',] }],
            id: [{ type: core.Input }],
            required: [{ type: core.Input }],
            labelPosition: [{ type: core.Input }],
            name: [{ type: core.Input }],
            change: [{ type: core.Output }],
            indeterminateChange: [{ type: core.Output }],
            value: [{ type: core.Input }],
            _inputElement: [{ type: core.ViewChild, args: ['input',] }],
            ripple: [{ type: core.ViewChild, args: [core$1.MatRipple,] }],
            checked: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            indeterminate: [{ type: core.Input }]
        };
        return MatCheckbox;
    }(_MatCheckboxMixinBase));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var MAT_CHECKBOX_REQUIRED_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return MatCheckboxRequiredValidator; }),
        multi: true
    };
    /**
     * Validator for Material checkbox's required attribute in template-driven checkbox.
     * Current CheckboxRequiredValidator only work with `input type=checkbox` and does not
     * work with `mat-checkbox`.
     */
    var MatCheckboxRequiredValidator = /** @class */ (function (_super) {
        tslib.__extends(MatCheckboxRequiredValidator, _super);
        function MatCheckboxRequiredValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MatCheckboxRequiredValidator.decorators = [
            { type: core.Directive, args: [{
                        selector: "mat-checkbox[required][formControlName],\n             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]",
                        providers: [MAT_CHECKBOX_REQUIRED_VALIDATOR],
                    },] }
        ];
        return MatCheckboxRequiredValidator;
    }(forms.CheckboxRequiredValidator));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** This module is used by both original and MDC-based checkbox implementations. */
    var _MatCheckboxRequiredValidatorModule = /** @class */ (function () {
        function _MatCheckboxRequiredValidatorModule() {
        }
        _MatCheckboxRequiredValidatorModule.decorators = [
            { type: core.NgModule, args: [{
                        exports: [MatCheckboxRequiredValidator],
                        declarations: [MatCheckboxRequiredValidator],
                    },] }
        ];
        return _MatCheckboxRequiredValidatorModule;
    }());
    var MatCheckboxModule = /** @class */ (function () {
        function MatCheckboxModule() {
        }
        MatCheckboxModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule, core$1.MatRippleModule, core$1.MatCommonModule, observers.ObserversModule,
                            _MatCheckboxRequiredValidatorModule
                        ],
                        exports: [MatCheckbox, core$1.MatCommonModule, _MatCheckboxRequiredValidatorModule],
                        declarations: [MatCheckbox],
                    },] }
        ];
        return MatCheckboxModule;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MAT_CHECKBOX_CLICK_ACTION = MAT_CHECKBOX_CLICK_ACTION;
    exports.MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR = MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR;
    exports.MAT_CHECKBOX_DEFAULT_OPTIONS = MAT_CHECKBOX_DEFAULT_OPTIONS;
    exports.MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY = MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY;
    exports.MAT_CHECKBOX_REQUIRED_VALIDATOR = MAT_CHECKBOX_REQUIRED_VALIDATOR;
    exports.MatCheckbox = MatCheckbox;
    exports.MatCheckboxChange = MatCheckboxChange;
    exports.MatCheckboxModule = MatCheckboxModule;
    exports.MatCheckboxRequiredValidator = MatCheckboxRequiredValidator;
    exports._MatCheckboxRequiredValidatorModule = _MatCheckboxRequiredValidatorModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
// source map elided