var zh = require('zh-js');
var originalString = '採用Uint16Array陣列取代相聯陣列';
var simplifiedString = '采用Uint16Array阵列取代相联阵列';
var traditionalString = '採用Uint16Array陣列取代相聯陣列';
var longSimplifiedString = '', longTraditionalString = '';
for (var i = 0; i < 2000; i++) {
	longSimplifiedString += simplifiedString;
	longTraditionalString += traditionalString;
}
(function(){
	var start = +new Date();
	for (var i = 0; i < 2000; i++) {
		zh.hant(simplifiedString);
	}
	var end = +new Date();
	console.log('To zh-Hant x 2000: ' + (end - start) + 'ms');
})();
(function(){
	var start = +new Date();
	for (var i = 0; i < 2000; i++) {
		zh.hans(traditionalString);
	}
	var end = +new Date();
	console.log('To zh-Hans x 2000: ' + (end - start) + 'ms');
})();
(function(){
	var start = +new Date();
	zh.hant(longSimplifiedString);
	var end = +new Date();
	console.log('To zh-Hant (Long): ' + (end - start) + 'ms');
})();
(function(){
	var start = +new Date();
	zh.hans(longTraditionalString);
	var end = +new Date();
	console.log('To zh-Hans (Long): ' + (end - start) + 'ms');
})();