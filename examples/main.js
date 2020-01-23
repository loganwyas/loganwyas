// const animal = "bear";
// // animal = 3;
// console.log(animal);
// let hello = (a) => {
//     console.log("Hi " + a);
// }
// hello(animal);
// let numbers = [];
// for (let i = 0; i < 20; i++) {
//     if (i%2 === 0) {
//         numbers.push(i);
//     }
// }
// for (let i = 0; i < numbers.length; i++) {
//     numbers[i] = numbers[i]*3;
// }
// numbers = numbers.map(n => n*3);
// console.log(numbers);

let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

console.log("Here is fizzbuzz using a for statement:")
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 !== 0) {
        console.log("fizz");
    }
    else if (numbers[i] % 3 !== 0 && numbers[i] % 5 === 0) {
        console.log("buzz");
    }
    else if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
        console.log("fizzbuzz");
    }
    else {
        console.log(numbers[i]);
    }
}

console.log("");
console.log("Here is fizzbuzz using .forEach:")
numbers.forEach(function(number) {
    if (number % 3 === 0 && number % 5 !== 0) {
        console.log("fizz");
    }
    else if (number % 3 !== 0 && number % 5 === 0) {
        console.log("buzz");
    }
    else if (number % 3 === 0 && number % 5 === 0) {
        console.log("fizzbuzz")
    }
    else {
        console.log(number);
    }
});

console.log("");
console.log("Here is a representation of the .filter method:");
console.log(numbers.filter(i => i >= 50));

let s = {
    Loc: "STL"
}
s.Loc