const express = require('express');
const morgan = require('morgan')

// express app
const app = express();


// register view engine
app.set('view engine', 'ejs');//if your render file is under views folder it will automatically render that file but its is under others u will need to config that file like below codes
// app.set('views','');


// listen for requests
app.listen(8000);

// middleware and static files
app.use(express.static('public'));

app.use(morgan('dev'))
// app.use(morgan('tiny'))


app.get('/',(req,res) => {
    const blogs = [
        {title: 'Saw finds eggs', snippet: 'Lorem ipsum dolor sit  consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit  consectetur'},
        {title: 'How to defeat browser', snippet: 'Lorem ipsum dolor sit  consectetur'},
    ];
    
    res.render('index', {title: 'Home', blogs });
})


app.get('/about',(req,res) => {
    res.render('about', {title: 'About'});
})


app.get('/blogs/create', (req,res) => {
    res.render('create', {title: 'Create a new Blog'});
})

// 404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404 Page'})
})
