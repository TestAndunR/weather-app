let AWS = require('aws-sdk');
let request = require('request');
exports.handler = function(event, context, callback) {

	let city = event.queryStringParameters.city;

	let apiKey = "e56ee13c7129aba6b847905b40afec56";
	let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

	request(apiUrl,function(err,response,body){
		if (err){
			console.log("error",err);
		}else{
			console.log(body);
		}
	})


}