const express = require('express');
const app = express();
const port = 3000;
var edge = require('edge-js');
app.listen(port, '192.168.1.109', (err) => {  //точное указание ип адреса, чтоб возвращал без префикса ipv6
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})
var unamed = 'makzu'; //param([string] $uname = $unamed)
var hello = edge.func(function () {/*
	async (input) =>
	{
		$(Get-Date) return ".NET welcomes " + input.ToString();
	}
*/});

hello('Node.js', function (error, result) {
    if (error) throw error;
    console.log(result);
});
