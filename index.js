const express = require("express");
const mongoose = require("mongoose");
const database = require("./config/database");

const { connect } = require("mongoose");

const routes = require("./routes/ToDoRoute"); 
require("dotenv").config();

const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 5000;
app.use(
  cors({
    origin: "http://localhost:3000", // Allow your frontend origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow necessary methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow necessary headers
  })
);

// Connect to the database
database.connect();

// Middleware for parsing JSON
app.use(express.json());

app.use("/api/todos", routes);



// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
