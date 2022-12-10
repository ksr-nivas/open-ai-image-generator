const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use('/openai', require('./routes/openaiRouter'));

// parser
app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
})