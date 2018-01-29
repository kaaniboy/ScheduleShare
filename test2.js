var request = require('request');
var fs = require('fs');

var options = {
  url: "https://webapp4.asu.edu/catalog/coursedetails?r=30700",
  headers: {
    "method":"GET",
    "accept-encoding": "identity",
    "scheme":"https",
    "accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
    "accept-language":"en-US,en;q=0.8",
    "cache-control":"no-cache",
    "cookie":"JSESSIONID=javaprod10~A564F2E1AE331B5553AF91607A1182D4.catalog10; onlineCampusSelection=C",
    "pragma":"no-cache",
    "referer":"https://webapp4.asu.edu/catalog/",
    "upgrade-insecure-requests":"1",
    "user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36"
  }
};

function callback(error, response, body) {
	fs.writeFile("res.txt", body, function(err) {
		console.log("Done writing.");
		console.log(err);
	});
}

request(options, callback);
