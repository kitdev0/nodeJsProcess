var config = require('./config')

// module.exports = config[process.env.NODE_ENV || 'development'];
module.exports = config['development'];
