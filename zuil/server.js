charset='utf8';
var http=require("http");
var url=require("url");
var fs=require('fs');
http.createServer(function(request,response){
   var urlObj=url.parse(request.url,true);
   var urlPath=urlObj.pathname;
   var pathQuery=urlObj.query;


}).listen(66666);
