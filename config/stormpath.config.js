var stormpathConfig = require('./stormpath.json');

module.exports = {
    client: {
        apiKey: {
            id: process.env.STORMPATH_CLIENT_APIKEY_ID || stormpathConfig.client.apiKey.id,
            secret: process.env.STORMPATH_CLIENT_APIKEY_SECRET || stormpathConfig.client.apiKey.secret
        }
    },
    application: {
        href: process.env.STORMPATH_APPLICATION_HREF || stormpathConfig.application.href
    },
    website: true,
    web: {
        produces: ['application/json'],
        debug: 'info',
        login: {
            form: {
                fields: {
                    login: {
                        label: 'Email',
                        placeholder: 'Email'
                    }
                }
            }
        }
    }
};
