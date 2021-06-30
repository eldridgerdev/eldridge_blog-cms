module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8081),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '3c8b6538-d2ad-4998-a6ac-f1a39b806a70'),
    },
    url: '/dashboard'
  },
});
