const express = require("express");

// creating a server
const app = express();
const PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Creating a few array variables that will hold the data
const waiting = [];
const haveReservation = [];

// making parent class people

class People {
    constructor (name, phoneNumber, email, id ) {
      this.name = name,
      this.phoneNumber = phoneNumber,
      this.email = email,
      this.id = id
    }
}

// Routes

// home page
app.get("/", function(req, res) {
    res.sendFile("C:/Users/13476/Documents/GWhomework/Hot-restaurant/home.html");
  });

app.get("/make.html", function(req, res) {
    res.sendFile("C:/Users/13476/Documents/GWhomework/Hot-restaurant/make.html");
  });
  
app.get("/view.html", function(req, res) {
    res.sendFile("C:/Users/13476/Documents/GWhomework/Hot-restaurant/view.html");
  });
  