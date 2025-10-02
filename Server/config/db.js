const moongoose = require("mongoose");

moongoose.connect(process.env.mongo_url, {});

const connection = moongoose.connection;

connection.on("connected", () => {
  console.log("MongoDB connected successfully");
});
connection.on("error", () => {
  console.log("MongoDB connection failed");
});
