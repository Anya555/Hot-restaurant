const express = require("express");
const path = require("path");

// creating a server
const app = express();
const PORT = 9270;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Creating a few array variables that will hold the data
const waiting = [];
const haveReservation = [];

// making parent class people

// class People {
//     constructor (name, phoneNumber, email, id ) {
//       this.name = name,
//       this.phoneNumber = phoneNumber,
//       this.email = email,
//       this.id = id
//     }
// }

const tables = [
    {
        id: 1,
        name: "John Doe",
        email: "johndoe@gamil.com",
        phone: "555-555-1111"
    },
    {
        id: 2,
        name: "Anya Panas",
        email: "Anya@gamil.com",
        phone: "347-555-1111"
    },
    {
        id: 3,
        name: "Gary Almes",
        email: "johndoe@gamil.com",
        phone: "800-555-1111"
    },
]

// Routes

// home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/:page", function(req, res) {
    const pageName = req.params.page
    res.sendFile(path.join(__dirname, `${pageName}.html`));
});

app.get("/api/view", function(req, res){
   res.json(tables); 
});

  
// displaying people 
app.get("/person"), function(req, res) {
    var chosen = req.params.character;

  console.log(chosen);
}

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
