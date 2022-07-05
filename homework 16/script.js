class PersonClass{
    constructor(firstName,lastName,id,workHouse,salary){
        this.firstName = name,
        this.lastName = lastName,
        this._id = id,
        this.salary = salary,
        this.workHouse = workHouse
    }
    get  getsalary () {
        return this.salary;
    }
    set setsurname(newsurname){
        this.lastName = newsurname;
    }
    set setname (newname){
        this.firstName = newname;
    }
    toString(){
        return (this.firstName + " " + this.lastName);

    }

}
let person = new PersonClass("Yervand","Petrosyan",321342,  "8:00 - 19:00 ","1500 $");
person.setname = "Yervand";
console.log(person);
console.log(person);
person.setsurname = " Qochar";
console.log(person);
