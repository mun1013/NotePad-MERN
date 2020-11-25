const app = require('./app');
const path = require('path');

// server static assets for production
if(process.env.NODE_ENV == 'production') {
  // set up static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

// set port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});