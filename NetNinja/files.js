const fs = require("node:fs")

// reading files

    //async readFile
    fs.readFile('./docs/blog1.txt',(err,data)   => {
        if(err) console.log(err);
        // console.log(data);//this will give buffer of the string
        console.log(data.toString());
        console.log("file is read");
    });
    console.log('last line');



// writing files




// directories




// deleting files