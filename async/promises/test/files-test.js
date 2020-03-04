var expect = require("chai").expect;
var linesCount = require("../src/files");
require("chai").use(require("chai-as-promised"));

describe("test promises", () => {
	it("should return correct lines count for a valid file", done => {
		var checkCount = function(count) {
			expect(count).to.be.eql(15);
			done();
		};
		linesCount("src/files.js").then(checkCount);
	});

	it("should return correct lines count - using return", () => {
		var callback = function(count) {
			expect(count).to.be.eql(15);
		};
		return linesCount("src/files.js").then(callback);
	});

	it("should return correct lines count - using eventually", () => {
		return expect(linesCount("src/files.js")).to.eventually.eql(15);
	});

	it("should return correct lines count - using no return", done => {
		expect(linesCount("src/files.js"))
			.to.eventually.eql(15)
			.notify(done);
	});

	it("should report error for an invalid file name", done => {
		expect(linesCount("src/notExist.js")).to.be.rejected.notify(done);
	});

	it("should report error for an invalid file name - uysing with", done => {
		expect(linesCount("src/notExist.js"))
			.to.be.rejectedWith("unable to open file src/notExist.js")
			.notify(done);
	});
});
