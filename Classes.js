
class User {
    constructor (name, field) {
        this.name = name
        this.field = field
    }
    introduce () {
        return `Hi, I am ${this.name}. I like ${this.field}`
    }
}


class Admin extends User {
    constructor (name, field, experience) {
        super(name, field)
        this.experience = experience
    }
    
}

class Student extends User {
    constructor (name, field, year) {
        super(name, field)
        this.year = year
    }
}

const teacher = new Admin("Sarad", "Business Management", 12);
const student = new Student("Roman", "Computer Science", 6);

console.log(teacher.introduce());
console.log(student.introduce());
