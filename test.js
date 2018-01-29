var request = require("request").defaults({jar: true});

var options = {
	url: "https://webapp4.asu.edu/catalog/",
	followRedirect: false
};

request.get(options, function(error, response, body) {
	console.log(response.headers['set-cookie']);
	var sessionCookie = response.headers['set-cookie'][0].split(";")[0];
	console.log(sessionCookie);

	var options2 = {
		url: "https://webapp4.asu.edu/catalog/",
		followRedirect: false,
		headers: {
			'set-cookie': sessionCookie
		}
	};

	request.get(options2, function(err, res, b) {
		console.log(b);
	});

	// console.log(error);
	// console.log(response);	
});
