{
    console.log(x); // undefined due to hoisting
    console.log(y); // throws referenceError

    console.log(z); // throws referenceError

    var x = "shushil";
    let y = "skills";
    const z = "!";
    console.log(x);
    console.log(y);
    console.log(z);
}