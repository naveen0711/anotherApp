var fs=require('fs');
var event =require('events');
var myEvent=new event.EventEmitter();

var data=fs.readFile('main.js',function(error,data){
    if(error){
        console.log('some error occured');
    }
    setTimeout(()=>{
        console.log(data.toString());
        myEvent.emit('readFile');
    },2000);
    console.log('end file here');
});
myEvent.on('readFile',()=>{
    console.log('read file event emitted');
});