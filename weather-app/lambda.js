let AWS = require('aws-sdk');
let request = require('request');
exports.handler = function(event, context, callback) {

	let city = event.queryStringParameters.City;

	let apiKey = "e56ee13c7129aba6b847905b40afec56";
	let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
	let res = {
		body: "",
		statusCode: 200,
		isBase64Encoded: false
	}

	request(apiUrl,function(err,response,body){
		if (err){
			console.log("error",err);
			res.body = JSON.stringify(body);
			callback(res,null);
		}else{
			console.log(body);
			res.body = JSON.stringify(body);
			callback(null,res);
		}
	})


}