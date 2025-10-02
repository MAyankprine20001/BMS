const express = require("express");
const app = express();
const userRouter = require("./routes/usersRoutes");
const cors = require("cors");

require("dotenv").config();
require("./config/db.js");

app.use(express.json());
app.use(cors());

app.use("/api/users", userRouter);

const PORT = process.env.PORT || 8082;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
