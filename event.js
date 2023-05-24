const event = require('events');

const e = new event.EventEmitter();

e.on('like',() => {
    console.log('like this');
})

e.on('dislike',() => {
    console.log('dislike this');
})

e.emit("like");
e.emit("dislike")