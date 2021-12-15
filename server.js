const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();

app.use('/.well-known', express.static('.well-known'), function (req, res) {
  res.status(404);
  res.json({
    error: {
      code: 404
    }
  })
});
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 80;
app.listen(port);