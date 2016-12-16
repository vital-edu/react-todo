const express = require('express');

let app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
});
