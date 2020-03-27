const http = require("http");
const listenPort = 3000;

const requestHandler = (req, res) => {
	console.log(req.url);
	res.end("Hello world, hellp graphs maker!");
};

const server = http.createServer(requestHandler);

server.listen(listenPort, (err) => {
	if (err) {
		return console.log("LAUNCHING ERROR: Something went wrong");
	}

	console.log(`Server listen on ${listenPort}`);
});
