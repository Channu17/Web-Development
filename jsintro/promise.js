async function getData()  {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(350);
        }, 2000);
    }
    )
}

console.log("Before calling getData");

let data = await getData();
console.log(data);

// console.log("After calling getData");

console.log("After calling getData");


