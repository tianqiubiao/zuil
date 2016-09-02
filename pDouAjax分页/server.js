var http = require("http");
var url = require("url");
var fs = require("fs");

var server = http.createServer(function (request, response) {
                                   var urlObj = url.parse(request.url, true);
                                   var pathname = urlObj.pathname;
                                   var pathquery = urlObj.query;
                                   console.log(pathname)

                                   if (pathname === "/myRegularInvsetRepayment") {
                                       var count = pathquery.count;
                                       var page = pathquery.currPage;
                                       console.log('当前请求第' + page + '页')
                                       var data = fs.readFileSync("./package.json", "utf8");
                                       data = JSON.parse(data);

                                       var mapList = data.mapListRepayment;
                                       var ary = [];
                                       var obj = {};
                                       //page-1*4 1-1*4=0 2-1*4=4
                                       console.log('当前数据共' + mapList.length + '条')
                                       console.log('当前是从第' + (page - 1) * 4 + '条开始');
                                       //计算页码；
                                       totalPage = Math.floor(mapList.length / 5)
                                       //console.log(totalPage)
                                       for (var i = (page - 1) * 4; i < mapList.length; i++) {
                                           if (ary.length <= 4) {
                                               ary.push(mapList[i]);
                                           }
                                       }
                                       obj['totalPage'] = totalPage;
                                       obj["mapListRepayment"] = ary;
                                       response.writeHead(200, {'content-type': 'application/json'});
                                       response.end(JSON.stringify(obj));
                                       return;
                                   }
                                   if (pathname === '/pageD'){
                                       var count = pathquery.count;
                                       var page = pathquery.currPage;
                                       console.log('当前请求第' + page + '页')
                                       var data = fs.readFileSync("./package.json", "utf8");
                                       response.writeHead(200, {'content-type': 'application/json'});
                                       response.end(JSON.stringify(data));
                                       return;
                                   }

                                   if (pathname === '/') {
                                       var con = fs.readFileSync("./account_qdxiangqing.html", "utf8");
                                       response.writeHead(200, {'content-type': 'text/html'});
                                       response.end(con);
                                       return;
                                   }
                                   if (pathname === "/account-wodetouzi.html") {
                                       var con = fs.readFileSync("./account-wodetouzi.html", "utf8");
                                       response.writeHead(200, {'content-type': 'text/html'});
                                       response.end(con);
                                       return;
                                   }
                                   if (pathname === "/public/css/app.css") {
                                       var con = fs.readFileSync("./public/css/app.css");
                                       response.writeHead(200, {'content-type': 'text/css'});
                                       response.end(con);
                                       return;
                                   }
                                   if (pathname === "/public/js/jquery.min.js") {
                                       var con = fs.readFileSync("./public/js/jquery.min.js");
                                       response.writeHead(200, {'content-type': 'application/javascript'});
                                       response.end(con);
                                       return;
                                   }
                                   if (pathname === "/public/js/app.js") {
                                       var con = fs.readFileSync("./public/js/app.js");
                                       response.writeHead(200, {'content-type': 'application/javascript'});
                                       response.end(con);
                                       return;
                                   }
                                   if (pathname === "/public/js/stickUp.js") {
                                       var con = fs.readFileSync("./public/js/stickUp.js");
                                       response.writeHead(200, {'content-type': 'application/javascript'});
                                       response.end(con);
                                       return;
                                   }
                                   if (pathname === '/fen.js') {
                                       var con = fs.readFileSync("./fen.js");
                                       response.write(200, {'content-type': 'application/javascript'});
                                       response.end(con);
                                       return;
                                   }
                                   if (pathname === "/public/images/h1.png") {
                                       var con = fs.readFileSync("./public/images/h1.png");
                                       response.writeHead(200, {'content-type': 'image/png'});
                                       response.end(con);
                                       return;
                                   }
                                   if (pathname === "/public/images/more_sin_diso.png") {
                                       var con = fs.readFileSync("./public/images/more_sin_diso.png");
                                       response.writeHead(200, {'content-type': 'image/png'});
                                       response.end(con);
                                       return;
                                   }
                                   if (pathname === "/public/images/weixin.png") {
                                       var con = fs.readFileSync("./public/images/weixin.png");
                                       response.writeHead(200, {'content-type': 'image/png'});
                                       return;
                                   }
                                   if (pathname === "/public/images/pNav.png") {
                                       var con = fs.readFileSync("./public/images/pNav.png");
                                       response.writeHead(200, {'content-type': 'image/png'});
                                       return;
                                   }
                                   if (pathname === "/public/images/kftel.png") {
                                       var con = fs.readFileSync("./public/images/kftel.png");
                                       response.writeHead(200, {'content-type': 'image/png'});
                                       return;
                                   }
                                   if (pathname === "/public/images/app.png") {
                                       var con = fs.readFileSync("./public/images/app.png");
                                       response.writeHead(200, {'content-type': 'image/png'});
                                       return;
                                   }
                                   if (pathname === "/public/images/kftel.png") {
                                       var con = fs.readFileSync("./public/images/kftel.png");
                                       response.writeHead(200, {'content-type': 'image/png'});
                                       return
                                   }
                                   if (pathname === "/public/images/people_nav.png") {
                                       var con = fs.readFileSync("./public/images/people_nav.png");
                                       response.writeHead(200, {'content-type': 'image/png'});
                                       return

                                   }

                               }
);
server.listen(8888);










