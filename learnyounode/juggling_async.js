var http = require('http');
var bl = require('bl');

var oneReady = false;
var twoReady = false;
var threeReady = false;
var data1 = "";
var data2 = "";
var data3 = "";

http.get(process.argv[2], function(resOne) {
    resOne.pipe(bl(function(err, data){
        if(err)
            return console.error(err);
        oneReady = true;
        data1 = data.toString();
        outputData();
    }));
});

http.get(process.argv[3], function(resTwo) {
    resTwo.pipe(bl(function(err, data){
        if(err)
            return console.error(err);
         twoReady = true; 
         data2 = data.toString();  
         outputData();
    }));
});

http.get(process.argv[4], function(resThree) {
    resThree.pipe(bl(function(err, data){
        if(err)
            return console.error(err);
        threeReady = true; 
        data3 = data.toString();   
        outputData();
    }));
});

function outputData() {
    if(oneReady && twoReady && threeReady) {
        console.log(data1);
        console.log(data2);
        console.log(data3);
    }
}