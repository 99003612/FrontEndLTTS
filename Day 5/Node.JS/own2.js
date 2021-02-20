var http = require('http');
var dt = require('./own');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time is: "+dt.myDT());
    res.end();
}).listen(4100);