const express = require('express');//http://qaru.site/questions/12522/how-to-get-get-query-string-variables-in-expressjs-on-nodejs
const app = express();
const port = 8443;
const logger = require('morgan');
app.use(logger('dev'));

app.get('/', function(req, res, next) {
//    console.log('id: ' + req.query.id, 'main: ' + req.query.main, 'uname: ' + req.query.uname) //отправляем строку url 192.168.1.109:3000/?id=sdsdfsdfsdfsdfsd&main=adssd&uname=alex
    res.send('ok')
    global.ident = req.query.id
    if (ident == '13') {
        console.log(ident+ '=ident13')
        next()
    }
});
app.use('/', function(res, req) {
    console.log('next route' +ident)
})
app.listen(port, '192.168.1.109', (err) => {  //точное указание ип адреса, чтоб возвращал без префикса ipv6
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})
