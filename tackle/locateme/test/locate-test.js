describe("locate test", function() {
	it("should register handlers with getCurrentPosition", function() {
		// 模擬getCurrentPosition，同時傳入onSuccess、onError
		var mock = sandbox
			.mock(navigator.geolocation)
			.expects("getCurrentPosition")
			.withArgs(onSuccess, onError);

		// 進行測試
		locate();

		// 驗證
		mock.verify()
	});
});
