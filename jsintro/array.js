let arr = [1, 2, 3, 4, 5];

console.log(arr);
console.log(arr.length);

console.log(arr[0]);

arr[0] = 10;
console.log(arr[0]);
console.log(arr.push(6));

arr1 = arr.toString();
console.log(arr1);

console.log(arr1.length);
console.log(arr.join(" and "));

console.log(arr.pop());

console.log(arr.shift());
console.log(arr.unshift(0));

delete arr[0];
console.log(arr);
console.log(arr.length);


console.log(arr.slice(0, 2));

console.log(arr.sort());

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log(arr.reverse());


arr.forEach((value, index, arr) => {
    console.log(value, index, arr);
})