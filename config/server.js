module.exports = ({ env }) => ({
  host: env('HOST', process.env.HOST || '0.0.0.0'),
  port: env.int('PORT', process.env.PORT || 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '092b508de77b4819a58393da1064af33'),
    },
    url: '/dashboard'
  },
});
