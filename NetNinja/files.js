const fs = require("node:fs")

// reading files

    //async readFile
    // fs.readFile('./docs/blog1.txt',(err,data)   => {
    //     if(err) console.log(err);
    //     // console.log(data);//this will give buffer of the string
    //     console.log(data.toString());
    //     console.log("file is read");
    // });
    // console.log('last line');



// writing files
    // overwriting a file
    fs.writeFile('./docs/blog1.txt', 'hello world', () => {
        console.log('file is overwritten');
    });

    // writing a new file
    fs.writeFile('./docs/blog2.txt', 'hello jason', () => {
        console.log('file is created and written');
    });



// directories




// deleting files