let a = 11;
let b = 1;

let sum = parseInt(a) + parseInt(b);

console.log("Sum is: " + sum);

try {
    console.log("Sum is: " + sum);
} catch (error) {
    console.error("Error occurred: " + error.message);
}

