module.exports = ({ env }) => ({
  host: env('HOST', '127.0.0.1'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      // secret: env('ADMIN_JWT_SECRET', '092b508de77b4819a58393da1064af33'),
    },
    url: '/dashboard'
  },
});
