const express = require('express');
const mongoose =require('mongoose');
const bodyParser = require('body-parser');
const Books = require('./booksModel');
const { response } = require('express');
const app = express();

app.use(bodyParser.json());


mongoose.connect(`mongodb://127.0.0.1:27017/bookshop`,()=>{
    console.log("Database is created sucessfully!!")
})

// get all books
app.get('/',(req,res)=>{
    Books.find()
    .then((response)=> res.send(response))
    .catch((err)=>console.log(err))
})

// add a new book
app.post('/',(req,res,next)=>{
   const {title ,price} =req.body;
   const newBook ={
       title,
       price
   }

  let book = new Books(newBook);

  book.save()
  .then(()=>{
      res.send("Book  is successfully added")
  })
  .catch((err)=>console.log(err))
})

app.listen(3000, ()=>{
    console.log("books server running on port 3000!!");
})