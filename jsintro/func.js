console.log("learning the functions in js")

function nice(name){
    console.log("your name is", name);
    console.log("your  nice", name)
}

nice("John")
nice("channu")


function add(a, b){
    return a + b;
}   

console.log(add(3, 4))

function add(a, b, c=3){       
    return a + b + c;
}

console.log(add(3, 4))
console.log(add(3, 4, 5))


const func1 = (x) =>{
    console.log("I am a function", x);
}

func1(5)