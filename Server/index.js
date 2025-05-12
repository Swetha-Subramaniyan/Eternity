import express from 'express';
const app = express();
const PORT = 3000;


app.get("/",(req,res)=>{
    res.send("Hellooo")
})

app.listen(PORT,(req,res)=>{
    console.log(`server listening to the post ${PORT}`)
})
