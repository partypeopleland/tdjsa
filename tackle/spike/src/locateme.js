var locate = function() {
	const onSuccess = pos => {
		let lon = pos.coords.longitude;
		let lat = pos.coords.latitude;
		window.location = `http://maps.google.com/?q=${lat},${lon}`;
	};
	const onFail = () => {
		document.getElementById("error").innerHTML = "unable to get your location";
	};
	navigator.geolocation.getCurrentPosition(onSuccess, onFail);
};
