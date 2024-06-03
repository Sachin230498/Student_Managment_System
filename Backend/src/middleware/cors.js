const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000', // specify your frontend URL
  optionsSuccessStatus: 200, 
};

module.exports = cors(corsOptions);
