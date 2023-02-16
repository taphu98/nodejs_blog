
const path = require('path');
const hbs = require('express-handlebars');
const express = require('express');
const app = express();
const port = 3000; // cổng truy cập localhost:3000
const morgan = require('morgan');
const { extname } = require('path');

app.use(express.static(path.join(__dirname,'public')));

// Template engine
app.engine('hbs', hbs.engine({
  extname:'.hbs'
}
  
));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'resources\\views'));

// HTTP logger
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => 
  console.log(`Example app listening on port ${port}`));
