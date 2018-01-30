const request = require("request").defaults({jar: true});
const cheerio = require('cheerio');

let sessionID = null;

function getSessionID(callback) {
	if (sessionID) {
		console.log("Using prior session ID.");
		callback(null, sessionID);
		return;
	}

	let options = {
		url: "https://webapp4.asu.edu/catalog/",
		followRedirect: false
	};

	request.get(options, function(error, response, body) {
		let cookies = response.headers['set-cookie'];

		for (let i in cookies) {
			if (cookies[i].includes("JSESSIONID")) {
				console.log("Received session ID");

				sessionID = cookies[i].split(";")[0];
				callback(error, sessionID);
			}
		}
	});
}

function parseHTML(html) {
	const $ = cheerio.load(html);

	let details = {};

	$('.start-value').each((i, element) => {
		if (i == 1) {
			details['startTime'] = $(element).text();
		}
	});

	details['endTime'] = $('.end-value').text();
	details['days'] = $('.days-value').text();
	
	return details;
}

exports.getClassDetails = (classID, callback) => {
	getSessionID((err, sessionID) => {
		let options = {
		  url: "https://webapp4.asu.edu/catalog/coursedetails?r=" + classID,
		  headers: {
		    "method":"GET",
		    "accept-encoding": "identity",
		    "scheme":"https",
		    "accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
		    "accept-language":"en-US,en;q=0.8",
		    "cache-control":"no-cache",
		    "cookie":"onlineCampusSelection=C; JSESSIONID=" + sessionID,
		    "pragma":"no-cache",
		    "referer":"https://webapp4.asu.edu/catalog/",
		    "upgrade-insecure-requests":"1",
		    "user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36"
		  }
		};

		request.get(options, (error, response, body) => {
			console.log("Received class details.");

			if (error) {
				callback(error, body);
			} else {
				callback(error, parseHTML(body));
			}
		});
	});
}
