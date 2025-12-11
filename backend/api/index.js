const app = require('../server');

module.exports = async (req, res) => {
  // Ensure DB is connected before handling request
  if (typeof app.connectDB === 'function') {
    await app.connectDB();
  }
  return app(req, res);
};
