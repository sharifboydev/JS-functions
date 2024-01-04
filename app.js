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


// function greeting(name) {
//     if (name) {
//         return `Hello, ${name} how are you doing`
//     } else {
//         return "Hello world"
//     }
// }

// console.log(greeting("John"));
// console.log(greeting(""));

// const userHeight = prompt("height")
// const userWeight = prompt("weight")

// const bmi = ((userWeight / (userHeight * userHeight)) * 10000).toFixed(1);

// if (bmi < 18.5) {
//     console.log("Underweight", bmi);
// } else if (bmi >= 18.5 && bmi < 24.9) {
//     console.log("Normal weight", bmi);
// } else if (bmi >= 25 && bmi < 29.9) {
//     console.log("OverWeight", bmi);
// } else if (bmi >= 30) {
//     console.log("Obesity", bmi);
// } else {
//     console.log("Error");
// }


// function calculateBMI(height, weight) {
//     const bmi = weight / (height * height);

//     if (bmi < 18.5) {
//         console.log("Underweight", bmi);
//     } else if (bmi >= 18.5 && bmi < 24.9) {
//         console.log("Normal", bmi);
//     } else if (bmi >= 25 && bmi < 19.9) {
//         console.log("Overweight", bmi);
//     } else if (bmi >= 30) {
//         console.log("Obesity", bmi);
//     } else {
//         console.log("Error");
//     }
//  }

// calculateBMI(1.5, 80);


function calculateYear(a) {
    console.log(`Siz ${new Date().getFullYear() - a}-yilda tug'ilgansiz`);
}

calculateYear(23)

const value = 12310;

// function cutNUmbers(number) {
//     return +number.toFixed(2);
// }

// let userBudgetSUM = +prompt("Sum kiriting")
// let userBudgetDollor = +prompt("USD kiriting")

function convertUZStoUSd(money) {
    const sum = money / value;
    const result = cutNUmbers(sum);
    alert(`$ ${result}`);
}

function convertUSDtoSUM(money) {
    const dollor = money * value;
    const result = cutNUmbers(dollor)
    alert(`${result.toLocaleString()} sum`)
}

// convertUZStoUSd(userBudgetSUM);

// convertUSDtoSUM(userBudgetDollor);


function mouthSize (animal) {
    if (animal == "alligator") {
        console.log("small");
    } else {
        console.log("wide");
    }
}

mouthSize()