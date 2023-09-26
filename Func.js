

class Animal  {
    constructor (name) {
        this.name = name
    }

    eat () {
        return `${this.name} is eating!`;
    }
}

const cat = new Animal("Cat") 

const dog = {
    name: "Dog"
}




console.log(cat.eat());