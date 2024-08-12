// app.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');

const app = express();
app.use(bodyParser.json());

app.use('/users', userRoutes);

const PORT = process.env.PORT || 1569;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});