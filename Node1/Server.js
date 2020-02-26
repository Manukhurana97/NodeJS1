const http =  require('http');

http.createServer(function (req, res) {

    res.setHeader('200', {'Content-type':'text/html'})

    res.end("<h1>hiiiieeee</h1>")

}).listen(5000);

console.log("server is running");
