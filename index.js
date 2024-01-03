import express from "express";

//import body-parser
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

//mounts the middleware using .use() method and specify extended true to create a body for request
//This line of code will give each incoming request a body that we can reference like an object
app.use(bodyParser.urlencoded({extended:true}));

//this returns the homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//log the entire body of post from the "/submit" form
app.post("/submit", (req,res)=>{
  console.log(req.body);
});

//log specific parts of post
app.post("/submit", (req,res)=>{
  console.log(req.body.street + req.body.pet);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
