var expect = require("chai").expect;
var Util = require("../src/util");

describe("util tests", () => {
	it("should pass this canary test", () => {
		expect(true).to.be.true;
	});

	var util;
	beforeEach(() => {
		util = new Util();
	});

	it("should pass if f2c returns 0C for 32F", function() {
		var f = 32;
		var c = util.f2c(f);
		expect(c).to.eql(0);
	});

	it("should pass if f2c returns 10C for 50F", function() {
		var f = 50;
		var c = util.f2c(f);
		expect(c).to.eql(10);
	});
});
