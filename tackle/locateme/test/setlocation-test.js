describe("setLocation test", () => {
	it("should set the URL into location of window", () => {
		var windowStub = {};
		var url = "http://example.com";
		setLocation(windowStub, url);
		expect(windowStub.location).to.be.eql(url);
	});
});
