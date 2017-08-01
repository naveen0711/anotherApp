var http=require('http');
var fs=require('fs');
var url=require('url');
http.createServer(function(reqest,response){
    var pathname=url.parse(reqest.url).pathname;
    console.log("Request for "+ pathname +"recived");
    fs.readFile(pathname.substr(1),function(error,data){
        if(error){
            console.log('Some error Occured'+error);
            response.writeHead(404,{'Content-Type':'text/html'});
        }else{
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write(data.toString());
        }
            response.end();
    });
}).listen(8000);
console.log('server running at port :8000');