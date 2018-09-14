const express = require('express');
const path = require('path');

const app = express();


app.use(express.static('./dist/dogs'));

app.get('/', function(req, res) {
    console.log(__dirname);
    res.sendFile(__dirname + '/dist/dogs/index.html');
})


const port = process.env.PORT;
app.listen (port || 8080);
// app.listen(port, () => {
//     console.log('sdfasdf' + port);
// });
