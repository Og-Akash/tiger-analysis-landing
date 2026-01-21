module.exports = {
  register({ strapi }) {
    // Log incoming requests to debug
    strapi.server.use(async (ctx, next) => {
      console.log('Protocol:', ctx.protocol);
      console.log('Secure:', ctx.secure);
      console.log('Headers:', {
        'x-forwarded-proto': ctx.get('x-forwarded-proto'),
        'x-forwarded-host': ctx.get('x-forwarded-host'),
      });
      await next();
    });
  },
};