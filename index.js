const exprees = require("express");
const mongoose = require("mongoose");
const user = require("./models/user");
const app = exprees();
const DBURL =
  "mongodb+srv://amuddasir966:karachi456@cluster0.tpqnwuk.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(DBURL)
  .then((res) => console.log("database"))
  .catch((err) => console.log(err));
// mongoose.connect(DBURL).then(()=> console.log("database conneced ...")).catch((err) => console.log (err));


app.get("/", async (req, res) => {
  try {
    const users = await user.find();
    res.json(users);
  } catch (error) {
    console.log("users"), res.send("something went wrong ..");
  }
});
app.post("/", async (req, res) => {
  try {
    const userr = await user.creative(req.body);
    res.json(userr);
  } catch (error) {
    console.log("users"), res.send("some thing went wrong ");
  }
});
app.listen(8000, () => {
  console.log("server is running ");
});
