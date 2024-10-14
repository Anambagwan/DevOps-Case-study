import { Injectable, EventEmitter } from '@angular/core';
import { User } from "../Models/User";
import { LoggerService } from "./logger.service";

@Injectable()
export class UserService{
    users: User[] = [
        new User('Amit Roy', 20, 'Kolkata', '01-01-1997'),
        new User('Akash', 20, 'Delhi', '1999-05-01') 
    ];

    constructor(private logger: LoggerService){

    }

    OnUserDetailsClicked: EventEmitter<User> = new EventEmitter<User>();

    OnShowUserDetails(user: User){
        this.OnUserDetailsClicked.emit(user);
    }

    GetAllUsers(){
        return this.users;
    }

    CreateUser(name: string, age: number, city: string, dob: string){
        let user = new User(name, age, city, dob);
        this.users.push(user);
        this.logger.LogMessage(name, city);
    }
}