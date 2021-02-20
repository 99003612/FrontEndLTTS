var http = require('http');
http:http.createServer(function (req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write(req. url);
    res.end();
}).listen(6100);

// localhost:6100/ajay prints ajay