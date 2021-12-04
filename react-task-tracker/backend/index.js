const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors())

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "RestaurantApp",
});
console.log("hello world")

app.post('/reserve' , (req, res)=> {
    
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phone = req.body.name;
    const numGuests = req.body.numGuests;
    const time = req.body.time;
    const date = req.body.date;
    console.log("hello world")
    console.log(req.body);

    db.query("INSERT INTO table_reservation (name, phone_number, email, date, time, number_of_seats, availability VALUES (? , ?)", 
        [name, phone_number, email, date, time, number_of_seats, availability], 
        (err, result)=> {
            console.log(err);
        }
        );
});

app.listen(3001, ()=> {
    console.log("running server");
})


