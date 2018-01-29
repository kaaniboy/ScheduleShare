var request = require('request');
var fs = require('fs');

var options = {
  url: "https://webapp4.asu.edu/catalog/coursedetails?s=CSE&n=355&c=TEMPE&t=2181&f=COORL1-74&r=30700",
  headers: {
    "method":"GET",
    // "path":"/catalog/classlist?k=math&t=2177&e=all&hon=F&promod=F",
    "accept-encoding": "identity",
    "scheme":"https",
    "accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
    // "accept-encoding":"gzip, deflate, br",
    "accept-language":"en-US,en;q=0.8",
    "cache-control":"no-cache",
    "cookie":"JSESSIONID=javaprod10~A564F2E1AE331B5553AF91607A1182D4.catalog10; onlineCampusSelection=C; __cfduid=d5e9cb96f2485f7500fec2116ee8f23381491087061; __utma=59190898.1874896314.1491088625.1491088625.1491088625.1; __utmb=59190898.2.10.1491088625; __utmc=59190898; __utmz=59190898.1491088625.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utma=137925942.2000995260.1491087063.1491087063.1491088718.2; __utmb=137925942.2.10.1491088718; __utmc=137925942; __utmz=137925942.1491088718.2.2.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); ADRUM=s=1491089349546&r=https%3A%2F%2Fwebapp4.asu.edu%2Fcatalog%2Fclasslist%3F-1275642430",
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
