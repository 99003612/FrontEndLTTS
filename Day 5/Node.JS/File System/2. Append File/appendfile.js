var fs= require('fs');
fs.appendFile('test1.txt','Hello append!', function(err){
    if(err) throw err;
    console.log('Saved!');
});