const express=require('express');
const app=express();
app.use(express.json());


const port=process.env.PORT || 4000;
app.get("/", (req, res) => {
  res.send("progress");
});

app.post("/get-values",(req, res, ) => {
  console.log(req.body);
});


app.listen(port,()=>{
  console.log("i am listening on port")
});






