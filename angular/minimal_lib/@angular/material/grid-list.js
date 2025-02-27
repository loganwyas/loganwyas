(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/core'), require('@angular/cdk/coercion'), require('tslib'), require('@angular/cdk/bidi')) :
    typeof define === 'function' && define.amd ? define('@angular/material/grid-list', ['exports', '@angular/core', '@angular/material/core', '@angular/cdk/coercion', 'tslib', '@angular/cdk/bidi'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.material = global.ng.material || {}, global.ng.material.gridList = {}), global.ng.core, global.ng.material.core, global.ng.cdk.coercion, global.tslib, global.ng.cdk.bidi));
}(this, (function (exports, core, core$1, coercion, tslib, bidi) { 'use strict';

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Injection token used to provide a grid list to a tile and to avoid circular imports.
     * @docs-private
     */
    var MAT_GRID_LIST = new core.InjectionToken('MAT_GRID_LIST');

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var MatGridTile = /** @class */ (function () {
        function MatGridTile(_element, _gridList) {
            this._element = _element;
            this._gridList = _gridList;
            this._rowspan = 1;
            this._colspan = 1;
        }
        Object.defineProperty(MatGridTile.prototype, "rowspan", {
            /** Amount of rows that the grid tile takes up. */
            get: function () { return this._rowspan; },
            set: function (value) { this._rowspan = Math.round(coercion.coerceNumberProperty(value)); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatGridTile.prototype, "colspan", {
            /** Amount of columns that the grid tile takes up. */
            get: function () { return this._colspan; },
            set: function (value) { this._colspan = Math.round(coercion.coerceNumberProperty(value)); },
            enumerable: true,
            configurable: true
        });
        /**
         * Sets the style of the grid-tile element.  Needs to be set manually to avoid
         * "Changed after checked" errors that would occur with HostBinding.
         */
        MatGridTile.prototype._setStyle = function (property, value) {
            this._element.nativeElement.style[property] = value;
        };
        MatGridTile.decorators = [
            { type: core.Component, args: [{
                        selector: 'mat-grid-tile',
                        exportAs: 'matGridTile',
                        host: {
                            'class': 'mat-grid-tile',
                            // Ensures that the "rowspan" and "colspan" input value is reflected in
                            // the DOM. This is needed for the grid-tile harness.
                            '[attr.rowspan]': 'rowspan',
                            '[attr.colspan]': 'colspan'
                        },
                        template: "<!-- TODO(kara): Revisit why this is a figure.-->\n<figure class=\"mat-figure\">\n  <ng-content></ng-content>\n</figure>",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
                    }] }
        ];
        /** @nocollapse */
        MatGridTile.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [MAT_GRID_LIST,] }] }
        ]; };
        MatGridTile.propDecorators = {
            rowspan: [{ type: core.Input }],
            colspan: [{ type: core.Input }]
        };
        return MatGridTile;
    }());
    var MatGridTileText = /** @class */ (function () {
        function MatGridTileText(_element) {
            this._element = _element;
        }
        MatGridTileText.prototype.ngAfterContentInit = function () {
            core$1.setLines(this._lines, this._element);
        };
        MatGridTileText.decorators = [
            { type: core.Component, args: [{
                        selector: 'mat-grid-tile-header, mat-grid-tile-footer',
                        template: "<ng-content select=\"[mat-grid-avatar], [matGridAvatar]\"></ng-content>\n<div class=\"mat-grid-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div>\n<ng-content></ng-content>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        MatGridTileText.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        MatGridTileText.propDecorators = {
            _lines: [{ type: core.ContentChildren, args: [core$1.MatLine, { descendants: true },] }]
        };
        return MatGridTileText;
    }());
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * @docs-private
     */
    var MatGridAvatarCssMatStyler = /** @class */ (function () {
        function MatGridAvatarCssMatStyler() {
        }
        MatGridAvatarCssMatStyler.decorators = [
            { type: core.Directive, args: [{
                        selector: '[mat-grid-avatar], [matGridAvatar]',
                        host: { 'class': 'mat-grid-avatar' }
                    },] }
        ];
        return MatGridAvatarCssMatStyler;
    }());
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * @docs-private
     */
    var MatGridTileHeaderCssMatStyler = /** @class */ (function () {
        function MatGridTileHeaderCssMatStyler() {
        }
        MatGridTileHeaderCssMatStyler.decorators = [
            { type: core.Directive, args: [{
                        selector: 'mat-grid-tile-header',
                        host: { 'class': 'mat-grid-tile-header' }
                    },] }
        ];
        return MatGridTileHeaderCssMatStyler;
    }());
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * @docs-private
     */
    var MatGridTileFooterCssMatStyler = /** @class */ (function () {
        function MatGridTileFooterCssMatStyler() {
        }
        MatGridTileFooterCssMatStyler.decorators = [
            { type: core.Directive, args: [{
                        selector: 'mat-grid-tile-footer',
                        host: { 'class': 'mat-grid-tile-footer' }
                    },] }
        ];
        return MatGridTileFooterCssMatStyler;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
     * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
     * because the tiles can have a rowspan.
     *
     * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
     * large enough to accommodate it so that the tiles still render in the same order in which they
     * are given.
     *
     * The basis of the algorithm is the use of an array to track the already placed tiles. Each
     * element of the array corresponds to a column, and the value indicates how many cells in that
     * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
     * decrements each value in the tracking array (indicating that the column is one cell closer to
     * being free).
     *
     * @docs-private
     */
    var TileCoordinator = /** @class */ (function () {
        function TileCoordinator() {
            /** Index at which the search for the next gap will start. */
            this.columnIndex = 0;
            /** The current row index. */
            this.rowIndex = 0;
        }
        Object.defineProperty(TileCoordinator.prototype, "rowCount", {
            /** Gets the total number of rows occupied by tiles */
            get: function () { return this.rowIndex + 1; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TileCoordinator.prototype, "rowspan", {
            /**
             * Gets the total span of rows occupied by tiles.
             * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
             */
            get: function () {
                var lastRowMax = Math.max.apply(Math, tslib.__spread(this.tracker));
                // if any of the tiles has a rowspan that pushes it beyond the total row count,
                // add the difference to the rowcount
                return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Updates the tile positions.
         * @param numColumns Amount of columns in the grid.
         * @param tiles Tiles to be positioned.
         */
        TileCoordinator.prototype.update = function (numColumns, tiles) {
            var _this = this;
            this.columnIndex = 0;
            this.rowIndex = 0;
            this.tracker = new Array(numColumns);
            this.tracker.fill(0, 0, this.tracker.length);
            this.positions = tiles.map(function (tile) { return _this._trackTile(tile); });
        };
        /** Calculates the row and col position of a tile. */
        TileCoordinator.prototype._trackTile = function (tile) {
            // Find a gap large enough for this tile.
            var gapStartIndex = this._findMatchingGap(tile.colspan);
            // Place tile in the resulting gap.
            this._markTilePosition(gapStartIndex, tile);
            // The next time we look for a gap, the search will start at columnIndex, which should be
            // immediately after the tile that has just been placed.
            this.columnIndex = gapStartIndex + tile.colspan;
            return new TilePosition(this.rowIndex, gapStartIndex);
        };
        /** Finds the next available space large enough to fit the tile. */
        TileCoordinator.prototype._findMatchingGap = function (tileCols) {
            if (tileCols > this.tracker.length) {
                throw Error("mat-grid-list: tile with colspan " + tileCols + " is wider than " +
                    ("grid with cols=\"" + this.tracker.length + "\"."));
            }
            // Start index is inclusive, end index is exclusive.
            var gapStartIndex = -1;
            var gapEndIndex = -1;
            // Look for a gap large enough to fit the given tile. Empty spaces are marked with a zero.
            do {
                // If we've reached the end of the row, go to the next row.
                if (this.columnIndex + tileCols > this.tracker.length) {
                    this._nextRow();
                    gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                    gapEndIndex = this._findGapEndIndex(gapStartIndex);
                    continue;
                }
                gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                // If there are no more empty spaces in this row at all, move on to the next row.
                if (gapStartIndex == -1) {
                    this._nextRow();
                    gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                    gapEndIndex = this._findGapEndIndex(gapStartIndex);
                    continue;
                }
                gapEndIndex = this._findGapEndIndex(gapStartIndex);
                // If a gap large enough isn't found, we want to start looking immediately after the current
                // gap on the next iteration.
                this.columnIndex = gapStartIndex + 1;
                // Continue iterating until we find a gap wide enough for this tile. Since gapEndIndex is
                // exclusive, gapEndIndex is 0 means we didn't find a gap and should continue.
            } while ((gapEndIndex - gapStartIndex < tileCols) || (gapEndIndex == 0));
            // If we still didn't manage to find a gap, ensure that the index is
            // at least zero so the tile doesn't get pulled out of the grid.
            return Math.max(gapStartIndex, 0);
        };
        /** Move "down" to the next row. */
        TileCoordinator.prototype._nextRow = function () {
            this.columnIndex = 0;
            this.rowIndex++;
            // Decrement all spaces by one to reflect moving down one row.
            for (var i = 0; i < this.tracker.length; i++) {
                this.tracker[i] = Math.max(0, this.tracker[i] - 1);
            }
        };
        /**
         * Finds the end index (exclusive) of a gap given the index from which to start looking.
         * The gap ends when a non-zero value is found.
         */
        TileCoordinator.prototype._findGapEndIndex = function (gapStartIndex) {
            for (var i = gapStartIndex + 1; i < this.tracker.length; i++) {
                if (this.tracker[i] != 0) {
                    return i;
                }
            }
            // The gap ends with the end of the row.
            return this.tracker.length;
        };
        /** Update the tile tracker to account for the given tile in the given space. */
        TileCoordinator.prototype._markTilePosition = function (start, tile) {
            for (var i = 0; i < tile.colspan; i++) {
                this.tracker[start + i] = tile.rowspan;
            }
        };
        return TileCoordinator;
    }());
    /**
     * Simple data structure for tile position (row, col).
     * @docs-private
     */
    var TilePosition = /** @class */ (function () {
        function TilePosition(row, col) {
            this.row = row;
            this.col = col;
        }
        return TilePosition;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * RegExp that can be used to check whether a value will
     * be allowed inside a CSS `calc()` expression.
     */
    var cssCalcAllowedValue = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;
    /**
     * Sets the style properties for an individual tile, given the position calculated by the
     * Tile Coordinator.
     * @docs-private
     */
    var TileStyler = /** @class */ (function () {
        function TileStyler() {
            this._rows = 0;
            this._rowspan = 0;
        }
        /**
         * Adds grid-list layout info once it is available. Cannot be processed in the constructor
         * because these properties haven't been calculated by that point.
         *
         * @param gutterSize Size of the grid's gutter.
         * @param tracker Instance of the TileCoordinator.
         * @param cols Amount of columns in the grid.
         * @param direction Layout direction of the grid.
         */
        TileStyler.prototype.init = function (gutterSize, tracker, cols, direction) {
            this._gutterSize = normalizeUnits(gutterSize);
            this._rows = tracker.rowCount;
            this._rowspan = tracker.rowspan;
            this._cols = cols;
            this._direction = direction;
        };
        /**
         * Computes the amount of space a single 1x1 tile would take up (width or height).
         * Used as a basis for other calculations.
         * @param sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
         * @param gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
         * @return The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
         */
        TileStyler.prototype.getBaseTileSize = function (sizePercent, gutterFraction) {
            // Take the base size percent (as would be if evenly dividing the size between cells),
            // and then subtracting the size of one gutter. However, since there are no gutters on the
            // edges, each tile only uses a fraction (gutterShare = numGutters / numCells) of the gutter
            // size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
            // edge evenly among the cells).
            return "(" + sizePercent + "% - (" + this._gutterSize + " * " + gutterFraction + "))";
        };
        /**
         * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
         * @param offset Number of tiles that have already been rendered in the row/column.
         * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
         * @return Position of the tile as a CSS calc() expression.
         */
        TileStyler.prototype.getTilePosition = function (baseSize, offset) {
            // The position comes the size of a 1x1 tile plus gutter for each previous tile in the
            // row/column (offset).
            return offset === 0 ? '0' : calc("(" + baseSize + " + " + this._gutterSize + ") * " + offset);
        };
        /**
         * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
         * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
         * @param span The tile's rowspan or colspan.
         * @return Size of the tile as a CSS calc() expression.
         */
        TileStyler.prototype.getTileSize = function (baseSize, span) {
            return "(" + baseSize + " * " + span + ") + (" + (span - 1) + " * " + this._gutterSize + ")";
        };
        /**
         * Sets the style properties to be applied to a tile for the given row and column index.
         * @param tile Tile to which to apply the styling.
         * @param rowIndex Index of the tile's row.
         * @param colIndex Index of the tile's column.
         */
        TileStyler.prototype.setStyle = function (tile, rowIndex, colIndex) {
            // Percent of the available horizontal space that one column takes up.
            var percentWidthPerTile = 100 / this._cols;
            // Fraction of the vertical gutter size that each column takes up.
            // For example, if there are 5 columns, each column uses 4/5 = 0.8 times the gutter width.
            var gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
            this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
            this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
        };
        /** Sets the horizontal placement of the tile in the list. */
        TileStyler.prototype.setColStyles = function (tile, colIndex, percentWidth, gutterWidth) {
            // Base horizontal size of a column.
            var baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth);
            // The width and horizontal position of each tile is always calculated the same way, but the
            // height and vertical position depends on the rowMode.
            var side = this._direction === 'rtl' ? 'right' : 'left';
            tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));
            tile._setStyle('width', calc(this.getTileSize(baseTileWidth, tile.colspan)));
        };
        /**
         * Calculates the total size taken up by gutters across one axis of a list.
         */
        TileStyler.prototype.getGutterSpan = function () {
            return this._gutterSize + " * (" + this._rowspan + " - 1)";
        };
        /**
         * Calculates the total size taken up by tiles across one axis of a list.
         * @param tileHeight Height of the tile.
         */
        TileStyler.prototype.getTileSpan = function (tileHeight) {
            return this._rowspan + " * " + this.getTileSize(tileHeight, 1);
        };
        /**
         * Calculates the computed height and returns the correct style property to set.
         * This method can be implemented by each type of TileStyler.
         * @docs-private
         */
        TileStyler.prototype.getComputedHeight = function () { return null; };
        return TileStyler;
    }());
    /**
     * This type of styler is instantiated when the user passes in a fixed row height.
     * Example `<mat-grid-list cols="3" rowHeight="100px">`
     * @docs-private
     */
    var FixedTileStyler = /** @class */ (function (_super) {
        tslib.__extends(FixedTileStyler, _super);
        function FixedTileStyler(fixedRowHeight) {
            var _this = _super.call(this) || this;
            _this.fixedRowHeight = fixedRowHeight;
            return _this;
        }
        FixedTileStyler.prototype.init = function (gutterSize, tracker, cols, direction) {
            _super.prototype.init.call(this, gutterSize, tracker, cols, direction);
            this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);
            if (!cssCalcAllowedValue.test(this.fixedRowHeight)) {
                throw Error("Invalid value \"" + this.fixedRowHeight + "\" set as rowHeight.");
            }
        };
        FixedTileStyler.prototype.setRowStyles = function (tile, rowIndex) {
            tile._setStyle('top', this.getTilePosition(this.fixedRowHeight, rowIndex));
            tile._setStyle('height', calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
        };
        FixedTileStyler.prototype.getComputedHeight = function () {
            return [
                'height', calc(this.getTileSpan(this.fixedRowHeight) + " + " + this.getGutterSpan())
            ];
        };
        FixedTileStyler.prototype.reset = function (list) {
            list._setListStyle(['height', null]);
            if (list._tiles) {
                list._tiles.forEach(function (tile) {
                    tile._setStyle('top', null);
                    tile._setStyle('height', null);
                });
            }
        };
        return FixedTileStyler;
    }(TileStyler));
    /**
     * This type of styler is instantiated when the user passes in a width:height ratio
     * for the row height.  Example `<mat-grid-list cols="3" rowHeight="3:1">`
     * @docs-private
     */
    var RatioTileStyler = /** @class */ (function (_super) {
        tslib.__extends(RatioTileStyler, _super);
        function RatioTileStyler(value) {
            var _this = _super.call(this) || this;
            _this._parseRatio(value);
            return _this;
        }
        RatioTileStyler.prototype.setRowStyles = function (tile, rowIndex, percentWidth, gutterWidth) {
            var percentHeightPerTile = percentWidth / this.rowHeightRatio;
            this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth);
            // Use padding-top and margin-top to maintain the given aspect ratio, as
            // a percentage-based value for these properties is applied versus the *width* of the
            // containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties
            tile._setStyle('marginTop', this.getTilePosition(this.baseTileHeight, rowIndex));
            tile._setStyle('paddingTop', calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
        };
        RatioTileStyler.prototype.getComputedHeight = function () {
            return [
                'paddingBottom', calc(this.getTileSpan(this.baseTileHeight) + " + " + this.getGutterSpan())
            ];
        };
        RatioTileStyler.prototype.reset = function (list) {
            list._setListStyle(['paddingBottom', null]);
            list._tiles.forEach(function (tile) {
                tile._setStyle('marginTop', null);
                tile._setStyle('paddingTop', null);
            });
        };
        RatioTileStyler.prototype._parseRatio = function (value) {
            var ratioParts = value.split(':');
            if (ratioParts.length !== 2) {
                throw Error("mat-grid-list: invalid ratio given for row-height: \"" + value + "\"");
            }
            this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
        };
        return RatioTileStyler;
    }(TileStyler));
    /**
     * This type of styler is instantiated when the user selects a "fit" row height mode.
     * In other words, the row height will reflect the total height of the container divided
     * by the number of rows.  Example `<mat-grid-list cols="3" rowHeight="fit">`
     *
     * @docs-private
     */
    var FitTileStyler = /** @class */ (function (_super) {
        tslib.__extends(FitTileStyler, _super);
        function FitTileStyler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FitTileStyler.prototype.setRowStyles = function (tile, rowIndex) {
            // Percent of the available vertical space that one row takes up.
            var percentHeightPerTile = 100 / this._rowspan;
            // Fraction of the horizontal gutter size that each column takes up.
            var gutterHeightPerTile = (this._rows - 1) / this._rows;
            // Base vertical size of a column.
            var baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);
            tile._setStyle('top', this.getTilePosition(baseTileHeight, rowIndex));
            tile._setStyle('height', calc(this.getTileSize(baseTileHeight, tile.rowspan)));
        };
        FitTileStyler.prototype.reset = function (list) {
            if (list._tiles) {
                list._tiles.forEach(function (tile) {
                    tile._setStyle('top', null);
                    tile._setStyle('height', null);
                });
            }
        };
        return FitTileStyler;
    }(TileStyler));
    /** Wraps a CSS string in a calc function */
    function calc(exp) {
        return "calc(" + exp + ")";
    }
    /** Appends pixels to a CSS string if no units are given. */
    function normalizeUnits(value) {
        return value.match(/([A-Za-z%]+)$/) ? value : value + "px";
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // TODO(kara): Conditional (responsive) column count / row size.
    // TODO(kara): Re-layout on window resize / media change (debounced).
    // TODO(kara): gridTileHeader and gridTileFooter.
    var MAT_FIT_MODE = 'fit';
    var MatGridList = /** @class */ (function () {
        function MatGridList(_element, _dir) {
            this._element = _element;
            this._dir = _dir;
            /** The amount of space between tiles. This will be something like '5px' or '2em'. */
            this._gutter = '1px';
        }
        Object.defineProperty(MatGridList.prototype, "cols", {
            /** Amount of columns in the grid list. */
            get: function () { return this._cols; },
            set: function (value) {
                this._cols = Math.max(1, Math.round(coercion.coerceNumberProperty(value)));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatGridList.prototype, "gutterSize", {
            /** Size of the grid list's gutter in pixels. */
            get: function () { return this._gutter; },
            set: function (value) { this._gutter = "" + (value == null ? '' : value); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatGridList.prototype, "rowHeight", {
            /** Set internal representation of row height from the user-provided value. */
            get: function () { return this._rowHeight; },
            set: function (value) {
                var newValue = "" + (value == null ? '' : value);
                if (newValue !== this._rowHeight) {
                    this._rowHeight = newValue;
                    this._setTileStyler(this._rowHeight);
                }
            },
            enumerable: true,
            configurable: true
        });
        MatGridList.prototype.ngOnInit = function () {
            this._checkCols();
            this._checkRowHeight();
        };
        /**
         * The layout calculation is fairly cheap if nothing changes, so there's little cost
         * to run it frequently.
         */
        MatGridList.prototype.ngAfterContentChecked = function () {
            this._layoutTiles();
        };
        /** Throw a friendly error if cols property is missing */
        MatGridList.prototype._checkCols = function () {
            if (!this.cols) {
                throw Error("mat-grid-list: must pass in number of columns. " +
                    "Example: <mat-grid-list cols=\"3\">");
            }
        };
        /** Default to equal width:height if rowHeight property is missing */
        MatGridList.prototype._checkRowHeight = function () {
            if (!this._rowHeight) {
                this._setTileStyler('1:1');
            }
        };
        /** Creates correct Tile Styler subtype based on rowHeight passed in by user */
        MatGridList.prototype._setTileStyler = function (rowHeight) {
            if (this._tileStyler) {
                this._tileStyler.reset(this);
            }
            if (rowHeight === MAT_FIT_MODE) {
                this._tileStyler = new FitTileStyler();
            }
            else if (rowHeight && rowHeight.indexOf(':') > -1) {
                this._tileStyler = new RatioTileStyler(rowHeight);
            }
            else {
                this._tileStyler = new FixedTileStyler(rowHeight);
            }
        };
        /** Computes and applies the size and position for all children grid tiles. */
        MatGridList.prototype._layoutTiles = function () {
            var _this = this;
            if (!this._tileCoordinator) {
                this._tileCoordinator = new TileCoordinator();
            }
            var tracker = this._tileCoordinator;
            var tiles = this._tiles.filter(function (tile) { return !tile._gridList || tile._gridList === _this; });
            var direction = this._dir ? this._dir.value : 'ltr';
            this._tileCoordinator.update(this.cols, tiles);
            this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);
            tiles.forEach(function (tile, index) {
                var pos = tracker.positions[index];
                _this._tileStyler.setStyle(tile, pos.row, pos.col);
            });
            this._setListStyle(this._tileStyler.getComputedHeight());
        };
        /** Sets style on the main grid-list element, given the style name and value. */
        MatGridList.prototype._setListStyle = function (style) {
            if (style) {
                this._element.nativeElement.style[style[0]] = style[1];
            }
        };
        MatGridList.decorators = [
            { type: core.Component, args: [{
                        selector: 'mat-grid-list',
                        exportAs: 'matGridList',
                        template: "<div>\n  <ng-content></ng-content>\n</div>",
                        host: {
                            'class': 'mat-grid-list',
                            // Ensures that the "cols" input value is reflected in the DOM. This is
                            // needed for the grid-list harness.
                            '[attr.cols]': 'cols',
                        },
                        providers: [{
                                provide: MAT_GRID_LIST,
                                useExisting: MatGridList
                            }],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
                    }] }
        ];
        /** @nocollapse */
        MatGridList.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
        ]; };
        MatGridList.propDecorators = {
            _tiles: [{ type: core.ContentChildren, args: [MatGridTile, { descendants: true },] }],
            cols: [{ type: core.Input }],
            gutterSize: [{ type: core.Input }],
            rowHeight: [{ type: core.Input }]
        };
        return MatGridList;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var MatGridListModule = /** @class */ (function () {
        function MatGridListModule() {
        }
        MatGridListModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [core$1.MatLineModule, core$1.MatCommonModule],
                        exports: [
                            MatGridList,
                            MatGridTile,
                            MatGridTileText,
                            core$1.MatLineModule,
                            core$1.MatCommonModule,
                            MatGridTileHeaderCssMatStyler,
                            MatGridTileFooterCssMatStyler,
                            MatGridAvatarCssMatStyler
                        ],
                        declarations: [
                            MatGridList,
                            MatGridTile,
                            MatGridTileText,
                            MatGridTileHeaderCssMatStyler,
                            MatGridTileFooterCssMatStyler,
                            MatGridAvatarCssMatStyler
                        ],
                    },] }
        ];
        return MatGridListModule;
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

    exports.MatGridAvatarCssMatStyler = MatGridAvatarCssMatStyler;
    exports.MatGridList = MatGridList;
    exports.MatGridListModule = MatGridListModule;
    exports.MatGridTile = MatGridTile;
    exports.MatGridTileFooterCssMatStyler = MatGridTileFooterCssMatStyler;
    exports.MatGridTileHeaderCssMatStyler = MatGridTileHeaderCssMatStyler;
    exports.MatGridTileText = MatGridTileText;
    exports.ɵTileCoordinator = TileCoordinator;
    exports.ɵangular_material_src_material_grid_list_grid_list_a = MAT_GRID_LIST;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
// source map elided