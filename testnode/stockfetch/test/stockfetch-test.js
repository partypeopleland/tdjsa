var expect = require("chai").expect;
var sinon = require("sinon");
var fs = require("fs");
var Stockfetch = require("../src/stockfetch.js");

describe("Stockfetch tests", () => {
	var stockfetch;
	var sandbox;

	beforeEach(() => {
		stockfetch = new Stockfetch();
		sandbox = sinon.sandbox.create();
	});

	afterEach(() => {
		sandbox.restore();
	});

	it("should pass this canary test", () => {
		expect(true).to.be.true;
	});

	it("read should invoke error handler for invalid file", done => {
		var onError = function(err) {
			expect(err).to.be.eql("Error reading file: InvalidFile");
			done();
		};

		sandbox.stub(fs, "readFile", function(fileName, callback) {
			callback(new Error("failed"));
		});

		stockfetch.readTickersFile("InvalidFile", onError);
	});
});
