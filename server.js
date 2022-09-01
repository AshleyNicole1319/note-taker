const express = require('express');
const PORT = process.env.port || 3001;
const app = express();
const fs = require('fs');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//app.use adds new middleware to app
//express.static targets the static 'public' files
app.use(express.static('public'));

//urlencoded is express.js function that parses incoming request and returns an object
app.use(express.urlencoded({ extended: true }));

//express.json parses json and puts parsed data in req.body
app.use(express.json());

//Use Routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//Remember: hardcoded 3001 won't open on Heroku
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
}); 