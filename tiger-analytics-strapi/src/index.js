module.exports = {
  register({ strapi }) {
    // Force trust proxy headers
    strapi.server.proxy = true;
    
    // Manually set secure flag based on X-Forwarded-Proto
    strapi.server.use(async (ctx, next) => {
      const proto = ctx.get('x-forwarded-proto');
      if (proto === 'https') {
        ctx.request.secure = true;
        ctx.request.protocol = 'https';
      }
      await next();
    });
  },

  bootstrap(/*{ strapi }*/) {},
};