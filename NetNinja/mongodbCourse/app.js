const express = require('express')

// init app & middleware
const app = express();

app.listen(8000,()=> {
    console.log('app listening on port 8000');
})

// routes
app.get('/books',(req,res) => {
    res.json({msg: "welcome to the api"})
})
