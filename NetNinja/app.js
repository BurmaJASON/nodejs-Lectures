const express = require('express');

// express app
const app = express();


// register view engine
app.set('view engine', 'ejs');//if your render file is under views folder it will automatically render that file but its is under others u will need to config that file like below codes
// app.set('views','myviews');


// listen for requests
app.listen(3000);


app.get('/',(req,res) => {
    
    res.render('index');
})


app.get('/about',(req,res) => {
    res.render('about');
})


app.get('/blogs/create', (req,res) => {
    res.render('create');
})

// 404 page
app.use((req, res) => {
    res.status(404).render('404')
})
