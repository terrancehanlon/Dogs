//Install express server
const express = require('express');
const path = require('path');
var router = express.Router();

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/dogs'));

// app.use('/*', express.static(path.resolve('dist/dogs/index.html')));
// app.use('./dist/main', express.static(__dirname + '/dist/dogs/main.7bfa94303bec8c0ed597.js'));
// app.use('./dist/polyfills', express.static(__dirname + '/dost/dogs/polyfills.2f4a59095805af02bd79.js'));
// app.use('*', express.static(__dirname+ '/dist/dogs/runtime.a66f828dca56eeb90e02.js'));
// app.use('./dist/styles', express.static(__dirname+ '/dist/dogs/styles.34c57ab7888ec1573f9c.css'));
// router.get('*', express.static(path.resolve('dist/dogs/index.html')));
app.get('/', function(req, res) {
    console.log(__dirname);
    res.sendFile(__dirname + '/dist/dogs/index.html');
})



// app.get('/*', function(req,res) {
//     console.log(__dirname);
//     ///home/terrance/Desktop/projs/Angular/Dogs/dogs/src/index.html
// res.sendFile(path.join(__dirname+'/dist/dogs/index.html'));
// ///home/terrance/Desktop/projs/Angular/Dogs/dogs/dist/dogs/index.html
// });

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);
// /home/terrance/Desktop/projs/Angular/Dogs/dogs/dist/dogs/index.html