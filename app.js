// function myFirstFunction(str) {
//     if (str == str.split("").reverse("").join("")) {
//         console.log("Palindrom");
//     } else {
//         console.log("Palindrom emas");
//     }
// }

// myFirstFunction("salom")

// function finddegree(a) {
//     console.log(Math.sqrt(a));
// }

// finddegree(23)
// finddegree(30)


function greeting(name) {
    if (name) {
        return `Hello, ${name} how are you doing`
    } else {
        return "Hello world"
    }
}

console.log(greeting("John"));
console.log(greeting(""));