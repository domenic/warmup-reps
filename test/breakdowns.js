var assert = require("assert");
var { breakdowns }= require("..");

describe("breakdowns", () => {
    checkBreakdowns(45, []);
    checkBreakdowns(50, [[2.5]]);
    checkBreakdowns(55, [[2.5, 2.5], [5]]);
    checkBreakdowns(60, [[2.5, 2.5, 2.5], [5, 2.5]]);
    checkBreakdowns(65, [[2.5, 2.5, 2.5, 2.5], [5, 2.5, 2.5], [5, 5], [10]]);
    checkBreakdowns(70, [[2.5, 2.5, 2.5, 2.5, 2.5], [5, 2.5, 2.5, 2.5], [5, 5, 2.5], [10, 2.5]]);

    checkSum(120);
    checkSum(125);
    checkSum(130);
    checkSum(135);
    checkSum(225);
    checkSum(235);
});

function checkBreakdowns(setWeight, desiredBreakdowns) {
    it(`should return ${JSON.stringify(desiredBreakdowns)} for ${setWeight}`, () => {
        assert.deepEqual(breakdowns(setWeight), desiredBreakdowns);
    });
}

function checkSum(setWeight) {
    it(`should return breakdowns all of which sum to ${setWeight} for ${setWeight}`, () => {
        var results = breakdowns(setWeight);
        for (var r of results) {
            assert.strictEqual(sum(r), setWeight, `The breakdown ${JSON.stringify(r)} should sum to ${setWeight}`);
        }
    });
}

function sum(array) {
    return array.reduce((x, y) => x + y, 0) * 2 + 45;
}
