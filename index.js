const express = require("express");
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1/Vidly')
.then(()=>{console.log('connected to database....')})
.catch(err=>{console.error('could not connect to database',err)})
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
