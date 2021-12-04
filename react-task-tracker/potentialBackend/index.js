const express = require("express");
const mysql = require("mysql");
const app = express();

app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "RestaurantApp",
});

app.post('/Reserve' , (req, res)=> {
    
const firstname = req.body.firstName;
const lastname = req.body.lastName;
const email = req.body.email;
const phone = req.body.phone;
const numGuests = req.body.numGuests;
const time = req.body.time;

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


