var http = require('http');
const { networkInterfaces } = require('os');
var url = require('url');

const server = http.createServer((request, response) => {
    // Write the request to the log. 
    console.log(request);

    // Standard Hello World.
    response.writeHead(200, {'Content-Type': 'text/html'});

    response.write("<h1>Joel Feddes</h1>")
    response.write("<h3>Web based Assignments:</h3>")
    response.write("<a href='https://purple-beach-003a02a10.azurestaticapps.net/'>Getting to Know Eachother</a><br>")
    response.write("<a href='https://gray-rock-0f51c6610.azurestaticapps.net/'>Resume</a><br>")
    response.write("<a href='https://calm-sea-0c9111010.azurestaticapps.net/'>Dice Game</a><br>")
    response.write("<a href='https://gray-rock-0f51c6610.azurestaticapps.net/regex'>Regex</a><br>")
    response.write("<a href='https://gray-rock-0f51c6610.azurestaticapps.net/'>Resume</a><br>")


    // Show the url. 
    response.write("req.url="+request.url+"<br><br>");

    // Close the response
    response.end("<h3>'That's all for now. Adding more localStorage.'</h3>");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
