import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observer } from "rxjs";
import { Observable } from "rxjs";
import { Subscription } from "rxjs";
import "rxjs/add/observable/interval";
import "rxjs/Rx";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit,OnDestroy {
  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;
  constructor() {}

  ngOnInit() {
    const myNumbers = interval(1000).map(
      (data: number) => {
        return data * 2;
      });
    this.numbersObsSubscription = myNumbers.subscribe((number: number) => {
      console.log(number);
    });
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next("first package");
      }, 2000);
      setTimeout(() => {
        observer.next("second package");
      }, 4000);
      setTimeout(() => {
        // observer.error("this doesnt work");
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next("third package");
      }, 6000);
    });
    this.customObsSubscription = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log("Completed");
      }
    );
  }
  ngOnDestroy() {
    this.numbersObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }
}
