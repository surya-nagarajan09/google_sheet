const express=require('express');
const app=express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("progress");
});

app.post("/get-values",(req, res, ) => {
  console.log(req.body);
});

app.listen(6000,()=>{
  console.log("i am listening on port")
});






