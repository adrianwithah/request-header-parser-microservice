var express = require("express");
var app = express();
var useragent = require("useragent");

app.get("/api/whoami",function(request, response) {
	var ipaddress = request.connection.remoteAddress;
	var browserLanguage = request.get("Accept-Language");
	var operatingSystem = request.headers["user-agent"].match(/(\([\s\S]*?\))/)[0];
	response.end(JSON.stringify({
		"ipaddress": ipaddress,
		"language": browserLanguage.slice(0,browserLanguage.indexOf(",")),
		"software": operatingSystem.slice(1,operatingSystem.length - 1)
	}));
});

app.listen(process.env.PORT || 5000);