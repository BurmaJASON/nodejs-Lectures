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
app.use(express.urlencoded());
app.use(morgan('dev'))
// app.use(morgan('tiny'))

// mongoose and mongo sandbox routes



//routes
app.get('/',(req,res) => {
    res.redirect('/blogs');
})


app.get('/about',(req,res) => {
    res.render('about', {title: 'About'});
})

//blog routes
app.get('/blogs',(req,res) => {
    // get all blogs from database\
    Blog.find().sort({createdAt: -1})
        .then(result => {
            res.render('index', {title: 'All Blogs', blogs : result})
        })
        .catch(err => console.log(err))
})

app.post('/blogs',(req,res) => {
    const blog = new Blog(req.body)
    blog.save()
        .then((result) => {
             res.redirect('/blogs')
        })
        .catch((err) => console.log(err))
})

app.get('/blogs/:id',(req,res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('detail', {blog: result, title : 'Blog Details'})
        })
        .catch(err => console.log(err))
})

app.delete('/blogs/:id',(req,res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/blogs' })
        })
        .catch(err => console.log(err));
})

app.get('/blogs/create', (req,res) => {
    res.render('create', {title: 'Create a new Blog'});
})

// 404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404 Page'})
})
