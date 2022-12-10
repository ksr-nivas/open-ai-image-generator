const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();

// body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}));

// static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/openaiRouter'));

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
})