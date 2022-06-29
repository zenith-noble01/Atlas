const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = connectDB;

//overdrive
//12 strong
//insurgent
//47 meters down
