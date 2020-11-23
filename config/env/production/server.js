module.exports = ({ env }) => ({
    "host": "localhost",
    "port": "${process.env.PORT || 1337}",
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
  