var http = require('http'); 
http.createServer (function (req, res) {
    res.write('Hello World ! Node.js as a Web Server');
    res.end();
}).listen(8080);

//then after go to the browser window and  type
//localhost:8080        