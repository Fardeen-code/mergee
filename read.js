var fs = require("fs");
fs.writeFile('input.txt','hello world',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log('successful');
});
fs.readFile('input.txt',function(err,data){
    if(err){
        return console.error(err);

    }
    console.log(data)
    console.log('2nd update')
})
