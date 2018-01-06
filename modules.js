var os = require('os');
var sedSys = require('./sedSysUtils');

var toMb = function(f) {
    return (Math.round((f/1024/1024)*100)/100);
}

console.log('Host: ' + os.hostname());

console.log('15 min. load average: ' + os.loadavg()[2]);
console.log('All load averages: ' + os.loadavg());



console.log('sedsysutils: ' + sedSys.freeMem());
console.log('sedsysutils signature: ' + sedSys.signature);


