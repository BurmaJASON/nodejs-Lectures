const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')


// express app
const app = express();

// Connect to mongodb
const dbUri = "mongodb+srv://SawYeHtet:sawyehtet@nodetuts.8ze98i1.mongodb.net/note-tuts?retryWrites=true&w=majority";

mongoose.connect(dbUri)
        .then((result)=> app.listen(8000))
        .catch(err => console.log(err))

// register view engine
app.set('view engine', 'ejs');//if your render file is under views folder it will automatically render that file but its is under others u will need to config that file like below codes
// app.set('views','');



// middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'))
// app.use(morgan('tiny'))

// mongoose and mongo sandbox routes

app.get('/add-blog',(req,res) => {
    const blog = new Blog({
        title : 'new blog2',
        snippet : 'about my new blog',
        body: 'more about my new blog'
    });
    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch(err => console.log(err))
})


app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => res.send(result) )
        .catch(error => console.log(error))
})

app.get('/single-blog', (req,res) => {
    Blog.findById('64917086eb55750a55dd3270')
        .then((result) => res.send(result))
        .catch(err => console.log(err))
})

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
