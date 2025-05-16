class Animal{
    constructor(name){
        this.name = name;
        console.log("Animal constructor");
        console.log("Animal name: " + this.name);
    }
    eat(){
        console.log("Animal eats");
    }
    sleep(){
        console.log("Animal sleeps");
    }
}

a = new Animal("Dog");
a.eat();
a.sleep();


class Lion extends Animal{
    constructor(name){
        super(name);
        console.log("Lion constructor");
        console.log("Lion name: " + this.name);
    }
    roar(){
        console.log("Lion roars");
        super.eat();
    }
}

l = new Lion("Simba");  
l.roar();