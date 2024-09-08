const express = require('express');

const path = require('path');
const pathToDistFolder = path.join(__dirname, '../react801/dist');
// without "path" in path.join. dirname and dist would not be able to connect. You would just have

console.log(pathToDistFolder);
const app = express();

const serveStaticFiles = express.static(pathToDistFolder);
//express.static(filepath) middleware to make static assets publicly available.

// Middleware function for logging route requests
//Every time we hit any type of request we are now getting this request, date and time logged.
const logRoutes = (req, res, next) => {
	//variable holding the time
	const time = new Date().toLocaleString();
	//info we are getting from request
	//because it is an object , it has within it properties we can access.
	console.log(`${req.method}: ${req.originalUrl} - ${time}`);
	//move to the next controller
	next(); // Passes the request to the next middleware/controller
};

app.use(logRoutes); //middleware does not need path, we just want it to be run every time a request is made.
app.use(serveStaticFiles);
// we do not need to serve static assets when accessing data.
const port = 8080;
app.listen(port, () => {
	console.log(`Server is now running on http://localhost:${port}`);
});
/*
__dirname:

Represents the absolute path to the directory where your current script (file) is located. It tells you the exact location of that script within your file system.


dist:

This is a specific folder or directory you want to reference or work with. It could be a folder that contains compiled files, static assets, or other resources.

Using path Module:

The path module helps you connect __dirname with dist (or any other folder) by combining paths in a way that’s correct and consistent across different operating systems.
*/
