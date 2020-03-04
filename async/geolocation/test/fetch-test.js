describe("fetch location test", () => {
	it("should get lat and lon from fetchLocation", done => {
		var onSuccess = function(location) {
			expect(location).to.have.property("lat");
			expect(location).to.have.property("lon");
			done();
		};

		var onError = function(err) {
			throw "not expected";
		};

		this.setTimeout(10000);
		fetchLocation(onSuccess, onError);
	});
}); 
