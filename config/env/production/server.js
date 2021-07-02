module.exports = ({ env }) => ({
    host: env('HOST', process.env.HOST || '0.0.0.0'),
    port: process.env.PORT || 8082, //env.int('PORT', process.env.PORT || 1338),
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
        "autoOpen": false,
        "auth": {
          "secret": env('ADMIN_JWT_SECRET', '092b508de77b4819a58393da1064af33'),
        },
        "url": '/dashboard'
    },
  });
  