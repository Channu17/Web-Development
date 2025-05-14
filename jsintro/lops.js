console.log("loops in js")

let a = 1;

for (let i = 0;i<5 ;i++){
    console.log("hello world", i);
    a += 1;
    console.log(a);
}

let obj = {
    name: "John",
    age: 30,
    city: "New York"
}

for  (let key in obj){
    const ele = obj[key];
    console.log(key, ele);
}

let i = 0;
while(i<5){
    console.log("hello world", i);
    i ++;
}

let j = 0;
do {
    console.log("hello world", j);
    j++;   
}while(j<5)