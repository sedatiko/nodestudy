var os = require('os');

var toMb = function(f) {
    return (Math.round((f/1024/1024)*100)/100);
}

var freeMem = function(){
    return toMb(os.totalmem());
};

module.exports.freeMem = freeMem;

module.exports.signature = 'this code is provided by sedat';

// freeMem