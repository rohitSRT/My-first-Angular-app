import { Injectable } from "@angular/core";

@Injectable()
export class CounterService{
count:number=1;
    counter(){

        console.log(this.count++);
    }
}