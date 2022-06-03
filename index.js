require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db");
const port = process.env.PORT || 3000;
const userRoute = require("./routes/user.route");
const authRoute = require("./routes/auth.route");

// Middlewares
app.use(express.json());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);


const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
