export class User{

    constructor(name: string, age: number, city: string, dob: string){
        this.name = name;
        this.age = age;
        this.city = city;
        this.dob = dob;
    }

    name: string;
    age: number;
    city: string;
    dob: string;
}