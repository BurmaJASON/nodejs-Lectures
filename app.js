function greet(name) {
    console.log(`Hello ${name}`);
}

function higherOrderFunction(callback) {
    const name = "Saw Ye Htet";
    callback(name);
}

higherOrderFunction(greet);