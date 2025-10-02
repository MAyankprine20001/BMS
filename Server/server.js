const express = require("express");
const app = express();
const userRouter = require("./routes/usersRoutes");
const cors = require("cors");

require("dotenv").config();
require("./config/db.js");

app.use(express.json());
app.use(cors());

app.use("/api/users", userRouter);

app.get("/heath", (req, res) => {
  res.status(200).json({ success: true, message: "server is healthy" });
});
//handle the 404 error
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 8082;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
