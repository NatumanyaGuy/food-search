var fs = require("fs");
var data = fs.readFileSync("data.json", "utf8");
var foods = JSON.parse(data);

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3030;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Home Route - List All Foods
app.get("/", (req, res) => {
  // res.send(foods);

  let foodnames = [];
  foods.forEach((name) => {
    foodnames = [...foodnames, name.food_description];
  });
  // console.log(foodnames);
  res.send(foodnames);
});

//Pass Random - Get random Food
app.get("/random", (req, res) => {
  let response = [];
  response = [...response, foods[Math.floor(Math.random() * foods.length)]];
  res.send(response);
  return;
});

//Pass Query to food_description
app.get("/:term", (req, res) => {
  let response = [];
  const term = req.params.term;
  // Searching books for the term
  for (let food of foods) {
    if (food.food_description.includes(term.toLocaleUpperCase())) {
      response = [...response, food];
    }
  }

  if (response.length !== 0) {
    res.json(response);
    return;
  } else {
    res.status(404).send({
      error: "No Results Found",
      errorMessage: "Could not find any foods that match this query; " + term,
    });
    return;
  }
  // Sending 404 when not found something is a good practice
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
