var _ = require("lodash");
var getOptions = require("./get-options");

exports.breakdowns = (setWeight, options) => {
    options = getOptions(options);

    var perSide = (setWeight - options.bar) / 2;

    var breakdowns = possibilities(perSide, options.plates);
    for (var breakdown of breakdowns) {
        breakdown.sort((a, b) => b - a);
    }

    breakdowns = _.uniq(breakdowns, breakdown => JSON.stringify(breakdown));

    return breakdowns;
};

function possibilities(weight, plates) {
    var results = [];
    for (var p of plates) {
        if (p < weight) {
            for (var tail of possibilities(weight - p, plates)) {
                results.push([p].concat(tail));
            }
        }
        if (p === weight) {
            results.push([p]);
        }
    }
    return results;
}
