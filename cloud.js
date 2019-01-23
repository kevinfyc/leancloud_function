var AV = require('leanengine');
var https = require('https');

/**
 * 一个简单的云代码方法
 */
AV.Cloud.define('hello', function(request) {
  return 'Hello world!';
});

AV.Cloud.define('bdCode2session', function(request){
	let code = request.code;
	let client_id = "LxG1SrmGPAXGzwrzEvxEABZslxnjzP0t"
	let sk = "rfGp0GnH7pNaBfUFfkcqZpeBw6Yu08Zu";

	let url = 'https://openapi.baidu.com/nalogin/getSessionKeyByCode';
	let req = https.request(url, (error, reponse, body) =>{
		console.log(`error is ${error}`);
		console.log(`reponse is ${reponse}`);
		console.log(`body is ${body}`);
		return [error, reponse, body];
	});

	req.on('error', (e)=>{
	   console.log(`https error ${e.message}`);
	   return [error, reponse, body];
	});

	let content = `code=${code}&client_id=${client_id}&sk=${sk}`
	console.log(`content is ${content}`);
	req.write(content);
});
