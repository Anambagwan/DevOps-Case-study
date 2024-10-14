import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoggerService{
    LogMessage(name: string, status: string){
        console.log(`A new user with name ${name} is added to user list.`)
    }
}