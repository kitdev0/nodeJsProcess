module.exports = {
    development: {
        keep_alive_time: 30000,
        gateway: {
            host: '',
            port: 8080
        },
        mqtt: {
            host: '',
            user: '',
            pass: '',
            qos: '',
            port: 1883
        }
    },
    production: {
        keep_alive_time: 120000,
        gateway: {
            host: '',
            port: 8080
        },
        mqtt: {
            host: '',
            user: '',
            pass: '',
            port: 1883
        }
    }
}
