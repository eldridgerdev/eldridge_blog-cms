module.exports = ({ env }) => ({
    // "host": `${process.env.HOST || '127.0.0.1'}`,
    // "port": `${process.env.PORT || 1337}`,
    host: env('HOST', process.env.HOST || '127.0.0.1'),
    port: env.int('PORT', process.env.PORT || 1337),
    "production": true,
    "proxy": {
        "enabled": false
    },
    "autoReload": {
        "enabled": false
    },
    "cron": {
        "enabled": false
    },
    "admin": {
        "autoOpen": false
    }
  });
  