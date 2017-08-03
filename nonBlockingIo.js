var fs=require('fs');
var data=fs.readFile('main.js',function(error,data){
    if(error){
        console.log('some error occured');
    }
    setTimeout(()=>{
        console.log(data.toString());
    },2000);
    console.log('end file here');
});