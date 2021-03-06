const express = require('express');
const app = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
require('./db/db')

app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'));

const authorsController = require('./controllers/authors.js');
const articlesController = require('./controllers/articles.js');


app.use('/authors', authorsController)
app.use('/articles', articlesController)



app.get('/', (req, res) => {
  res.render('index.ejs')
})







app.listen(3000, () => {
  console.log('app is listening on port 3000');
})
