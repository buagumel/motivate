import express from "express";
import { getQuotes, getRandomQuote, getDayOfQuote } from 'motivate-quotes';
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));




app.get("/",  (req, res) => {

  res.render("index.ejs", {

  });

  });

  app.post("/submit", (req, res)=>{

    const quoteCategory = ['Education', 'Programming', 'Trading', 'Business', 'Life', 'Fitness', 'Creativity', 'Leadership'];

    const currentCategory = quoteCategory[Math.floor(Math.random()*quoteCategory.length)]

    const randomQuote = getRandomQuote(`${currentCategory}`);
    res.render("index.ejs", {
        data: randomQuote,
    })

    res.redirect("index.ejs")
  })



app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });



 