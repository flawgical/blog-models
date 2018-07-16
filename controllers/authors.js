const express = require('express');
const router = express.Router();
const Author = require('../models/authors')

//show all authors created in author index
//=======================================================
router.get('/', (req, res) => {
  Author.find({}, (err, foundAuthors) => {


    res.render('authors/index.ejs', {
      authors: foundAuthors
    })
  })

})

//=======================================================

router.get('/new', (req, res) => {
  res.render('authors/new.ejs')
})

router.post('/', (req, res) => {
  console.log(req.body)

Author.create(req.body, (err, createdAuthor) => {
  console.log(createdAuthor, 'this is the createdAuthor')
  res.redirect('/authors');
  })


  //we are just doing this to see if server is receiving request
  // res.send('server received the request')
})

module.exports = router;
