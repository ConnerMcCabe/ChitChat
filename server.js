const express = require('express');
const path = require('path');

const app = express();

//Set static folders
app.use(express.static(path.join(__dirname, 'public')));
//we learned today that for express find your public folder and run you need an index.js to get started,
//landing page is always gonna be the index.js
app.get('/', function (req, res) {
  throw new Error('OOPS') // Express will catch this on its own.
  
})

const PORT = process.env.PORT || 3000 ;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));