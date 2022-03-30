const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Parse incoming JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});