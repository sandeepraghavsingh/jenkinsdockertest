const express = require('express');
const app = express();
const port = 3000; // Change this to the desired port

app.get('/', (req, res) => {
  res.send('Hello Jenkins!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});