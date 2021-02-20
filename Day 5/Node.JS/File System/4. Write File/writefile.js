var fs= require('fs');
fs.writeFile('test3.txt',"I'm writing!",function(err){
    if(err) throw err;
    console.log('Saved!');
});