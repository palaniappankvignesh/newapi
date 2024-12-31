import express from "express"

const app = express()
const PORT = 4500

app.get('/', (req, res)=>{
    res.json({msg: "Hello"});
});

app.listen(PORT, ()=>{
    console.log(`server running at http:\\localhost:${PORT}`);
});