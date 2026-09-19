require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/config/db");

const PORT = process.env.PORT || 3007;

connectDB()
  .then(() =>
    app.listen(PORT, () =>
      console.log(`New Connection & Sales Service running on port ${PORT}`)
    )
  )
  .catch((error) => {
    console.error("Failed to start service:", error.message);
    process.exit(1);
  });
