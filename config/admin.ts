export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
	sessions: {
      maxSessionLifespan: 1000 * 60 * 60 * 24 * 7, // 7 days in milliseconds
      maxRefreshTokenLifespan: 1000 * 60 * 60 * 24 * 30, // 30 days in milliseconds
    },
	options: {
      expiresIn: '7d', // This is what triggers the warning
    },
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
