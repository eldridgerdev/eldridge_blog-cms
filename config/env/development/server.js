module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3002),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '092b508de77b4819a58393da1064af33'),
    },
    port: 3003,
    url: '/dashboard'
  },
});
