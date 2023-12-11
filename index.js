// Importing necessary modules
const express = require("express"); // Express framework for building the web server
const cors = require("cors"); // CORS middleware to enable Cross-Origin Resource Sharing
const app = express(); // Creating an instance of express
const port = 5001; // Port number where the server will listen
require("dotenv").config(); // Importing and configuring dotenv to manage environment variables

// const { job } = require("./scheduler");
const { job } = require("./scheduler/index");

// Database Connection
require("./connection/dbconn"); // Importing database connection settings

// Middleware
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Applying CORS middleware to allow cross-origin requests

// Route definitions
// Root route
app.get("/", (req, res) => {
  res.send("Hello World!"); // Sending a response when the root URL is accessed
  job();
});

// Route for currency endpoints
app.use("/api/currency", require("./routes/currencyRoutes")); // Route for currency endpoints

// 404 Error Handling
// Define a route for handling 404 errors
app.use("*", (req, res, next) => {
  console.log(req.originalUrl); // Logging the original URL of the request
  const error = {
    status: 404,
    message: "API endpoint not found", // Error message for endpoints that don't exist
  };
  next(error); // Passing the error to the next middleware (error handling middleware)
});

// Starting the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); // Console log to indicate that the server is running
});

// Export the Express API
module.exports = app;
