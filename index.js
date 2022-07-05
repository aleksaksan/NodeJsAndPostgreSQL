const express = require('express');

const PORT = process.env.PORT || 3030;

const app = express();

app.get('/', (req, res) => {
  res.send(`Hello Postgress! on port ${PORT}`);
})

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT: ${PORT}`));
