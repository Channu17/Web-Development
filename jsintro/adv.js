console.log('hello world');

async function sleep(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('45')
        }, 100);
    })
}

(async function main(){
    // let a = await sleep();
    // console.log(a);
    // let b = await sleep();
    // console.log(b);

    let [x, y, ...rest] = [1,2, 4, 5]

    console.log(x, y, rest);

    let arr = [1, 2, 3, 4, 5]
    console.log(sum(...arr))
})()


