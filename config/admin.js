module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c6832fc2ba4318fdf4b5397d57b2f76d'),
  },
});
