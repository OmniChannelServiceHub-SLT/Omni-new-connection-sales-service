require("dotenv").config();

const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT || 3007;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(
        `New Connection & Sales Service running on port ${PORT}`
      );
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });