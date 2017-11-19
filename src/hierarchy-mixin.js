/**
 * Hierarchy is a mixin that provides margin utility functions for charts that operate on hierarchial data structures.
 * @name hierarcyMixin
 * @memberof dc
 * @mixin
 * @param {Object} _chart
 * @returns {dc.hierarchyMixin}
 */
dc.hierarchyMixin = function (_chart) {
    var _nest = d3.nest();

    /**
     * Get or set the nest function used for building hierarchial data structures
     * @method nest
     * @memberof dc.hierarchyMixin
     * @instance
     * @example
     * chart.nest()
     *  .key(function(d) { return d.key; }) // first level
     *  .key(function(d) { return d.category; }) // second level
     *  .key(function(d) { return d.subcategory; }); // third level
     * @param nest function, default d3.nest
     * @returns generator of hierarchy from flat array
     */
    _chart.nest = function (nest) {
        if (!arguments.length) {
            return _nest;
        }
        _nest = nest;
        return _chart;
    };
    
    return _chart;
};
