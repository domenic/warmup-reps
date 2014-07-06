var assert = require("assert");
var { breakdowns }= require("..");

describe("breakdowns", () => {
    testCase(45, []);
    testCase(50, [[2.5]]);
    testCase(55, [[2.5, 2.5], [5]]);
    testCase(60, [[2.5, 2.5, 2.5], [5, 2.5]]);
});

function testCase(setWeight, desiredBreakdowns) {
    it(`should return ${JSON.stringify(desiredBreakdowns)} for ${setWeight}`, () => {
        assert.deepEqual(breakdowns(setWeight), desiredBreakdowns);
    });
}
