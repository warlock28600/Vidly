const express = require("express");
const api=require('./routes/api')
const app = express();

app.use(express.json());
app.use('/api',api)

app.get("/", (req, res) => {
  res.send("server is on");
});


app.listen(3000, () => {
  console.log("server listen on 3000");
});
