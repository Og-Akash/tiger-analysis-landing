module.exports = ({ env }) => {
  const clientUrl = env("CLIENT_URL");
  const previewSecret = env("PREVIEW_SECRET");

  return {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    apiToken: {
      salt: env('API_TOKEN_SALT'),
    },
    transfer: {
      token: {
        salt: env('TRANSFER_TOKEN_SALT'),
      },
    },
    url: '/admin',
    forceSecureCookie: env.bool('STRAPI_ADMIN_FORCE_SECURE_COOKIE', false),
    secrets: {
      encryptionKey: env('ENCRYPTION_KEY'),
    },
    flags: {
      nps: env.bool('FLAG_NPS', true),
      promoteEE: env.bool('FLAG_PROMOTE_EE', true),
    },
    // Preview configuration
    preview: {
      enabled: true,
      config: {
        allowedOrigins: clientUrl,
        async handler(uid, { documentId, locale, status }) {
          // Only enable preview for homepage
          if (uid === "api::homepage.homepage") {
            const urlSearchParams = new URLSearchParams({
              url: "/",
              secret: previewSecret,
              status,
            });
            return `${clientUrl}/api/preview?${urlSearchParams}`;
          }
          if (uid === "api::title-block.title-block") {
            const urlSearchParams = new URLSearchParams({
              url: "/",
              secret: previewSecret,
              status,
            });
            return `${clientUrl}/api/preview?${urlSearchParams}`;
          }
          // Return null for other content types (disables preview for them)
          return null;
        },
      },
    },
  };
};
