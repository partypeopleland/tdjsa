var expect = require("chai").expect;
var linesCount = require("../src/files");

describe("test server-side callback", () => {
	it("should return correct lines count for a valid file", done => {
		var cb = function(count) {
			expect(count).to.be.eql(15);
			done();
		};
		linesCount("src/files.js", cb);
	});

	it("should report error for an invalid file name", done => {
		var onError = function(error) {
			expect(error).to.be.eql("unable to open file src/flies.js");
			done();
		};
		linesCount("src/flies.js", undefined, onError);
	});
});
