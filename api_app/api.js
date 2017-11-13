
console.log('hello running...');

// var env = require('./config.json');

// module.exports = env[process.env.NODE_ENV || 'development'];
// var config = env['development'];

console.log("NODE_ENV : ", process.env.NODE_ENV);
var config = require('./env');
// var config
// config = env['development'];
// if(process.env.NODE_ENV)
//     config = env[process.env.NODE_ENV || 'development'];
    

console.log('gateway --> ', config.gateway.host)
setInterval(() => {

},20000);