var fs = require('fs');
// setTimeout(()=>{
//         console.log(fs.readFileSync('main.js').toString());
//     },2000);
// console.log('end file here');
var data=fs.readFileSync('main.js');
    setTimeout(()=>{
        console.log(data.toString());
    },2000);
    console.log('end file here');
