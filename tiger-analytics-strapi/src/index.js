module.exports = {
  register({ strapi }) {
    // Get the underlying Koa app
    const app = strapi.server.app;
    
    // Force proxy trust
    app.proxy = true;
    
    // Intercept ALL requests at the earliest possible point
    const originalCallback = app.callback();
    
    app.callback = function() {
      return async (req, res) => {
        // Check the x-forwarded-proto header from the raw Node request
        const proto = req.headers['x-forwarded-proto'];
        
        if (proto === 'https') {
          // Modify the encrypted property which Koa uses
          Object.defineProperty(req.socket, 'encrypted', {
            value: true,
            configurable: true,
            writable: true
          });
        }
        
        return originalCallback(req, res);
      };
    };
  },

  bootstrap(/*{ strapi }*/) {},
};