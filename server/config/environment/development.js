'use strict';

// Development specific configuration
// ==================================
module.exports = {
    // MongoDB connection options
    mongo: {
        uri: 'mongodb://localhost:27017/mqtt'
    },

    mqtt: {
        host: process.env.EMQTT_HOST || '127.0.0.1',
        clientId: 'API_Server_Dev',
        port: 1883
    }
};
