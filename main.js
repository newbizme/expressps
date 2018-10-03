//http://qaru.site/questions/12522/how-to-get-get-query-string-variables-in-expressjs-on-nodejs
const express = require('express');
const app = express();
const port = 3000;
const logger = require('morgan');
const PSRunner = require('./PSRunner.js');
const exec = require("child_process").exec;
app.use(logger('dev'));

//let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

//запуск севрвера
app.listen(port, '192.168.1.109', (err) => {  //точное указание ип адреса, чтоб возвращал без префикса ipv6
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})
// проверка на IP
app.get('/', (req, res, next) => {
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        if (ip == '192.168.1.103') {
            res.send('Hello from Express! you ip = '+ip)
            console.log('true '+ip)
            console.log('uname=' +req.headers['uname'])
            next()
        }
//// в этом else должно прекращаться все
                else {
            res.end(console.log('not true ' + ip))
            //console.log('uname=' +req.headers['uname'])
        next()// в продакшене убрать
                     }
});
// newu=1&uname='   '&upass='   ' newADUser
// enable=0&uname='   '             disableADUser
// enable=1&uname='    '             enable ADUser

app.use('/21545213413543845313846453521', function(req, res, next) {  // можно подставлять любую комбинацию цифр и букв (как то генерировать их)
    let newu = req.query.newu;
    let enable = req.query.enable;
    uname = req.query.uname;
    global.upass = req.query.upass;
    if (newu == '1') {
    console.log(uname)
        var spawn = require("child_process").spawn,child;
        child = spawn("powershell.exe", ["C:\\Users\\User\\WebstormProjects\\expressps\\test.ps1", [uname], [upass]]); //working
        child.stdout.on("data",function(data){
            console.log("Powershell Data: " + data);
        });
        child.stderr.on("data",function(data){
            console.log("Powershell Errors: " + data);
        });
        child.on("exit",function(){
            console.log("Powershell Script finished");
        });
        child.stdin.end(); //end input

        console.log('newu -uname -upass ' +uname + ' ' +upass)// в этом блоке посылаем повершелу нового юзера с перемеными uname, upass
    }

    if (enable == '0') {
        var spawn = require("child_process").spawn,child;
        child = spawn("powershell.exe", ["C:\\Users\\User\\WebstormProjects\\expressps\\disableUAD.ps1", [uname]]);
        child.stdout.on("data",function(data){
            console.log("Powershell Data: " + data);
        });
        child.stderr.on("data",function(data){
            console.log("Powershell Errors: " + data);
        });
        child.on("exit",function(){
            console.log("Powershell Script finished");
        });
        child.stdin.end(); //end input

        console.log('выключаем юзера ' +uname) // тут передаем команду на отключение юзера с переменной uname
    }
    if (enable == '1') {
        var spawn = require("child_process").spawn,child;
        child = spawn("powershell.exe", ["C:\\Users\\User\\WebstormProjects\\expressps\\enableUAD.ps1", [uname]]); //working
        child.stdout.on("data",function(data){
            console.log("Powershell Data: " + data);
        });
        child.stderr.on("data",function(data){
            console.log("Powershell Errors: " + data);
        });
        child.on("exit",function(){
            console.log("Powershell Script finished");
        });
        child.stdin.end(); //end input
        console.log('включаем ' +uname) // тут передаем команду на включение юзера с переменной uname
    }
    next()
})

// начинается PowerShell
// var spawn = require("child_process").spawn,child;
// child = spawn("powershell.exe",["C:\\Users\\User\\WebstormProjects\\expressps\\test.ps1"]);
// child.stdout.on("data",function(data){
//     console.log("Powershell Data: " + data);
// });
// child.stderr.on("data",function(data){
//     console.log("Powershell Errors: " + data);
// });
// child.on("exit",function(){
//     console.log("Powershell Script finished");
// });
// child.stdin.end(); //end input








// app.use('/', (err, req, res) => {
//     // логирование ошибки, пока просто console.log
//    // console.log(err)
//     res.send('Something broke!' +err)
// })

//var ip = request.connection.remoteAddress; // http://qaru.site/questions/29273/how-to-determine-a-users-ip-address-in-node
// var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || (req.connection.socket ? req.connection.socket.remoteAddress : null);


// app.use((req, res, next) => {
//     if (req.headers[uname] == 'max')
//     {
//         uname = username
//         console.log(uname)
//     }
//     next()
// })
