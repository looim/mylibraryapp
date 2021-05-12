const express = require('express')

//add our router
const authorRouter = express.Router()

//require the author controller
const authorController = require('../controllers/authorController.js')

//handle the GET request to get all authors
authorRouter.get ('/', authorController.getAllAuthors)

//handle the GET request to get all ids
authorRouter.get ('/authorId', authorController.getOneAuthor)

//handle POST requests to add one author
// authorRouter.post('/', authorController.addAuthor)

//export the router
module.exports = authorRouter
