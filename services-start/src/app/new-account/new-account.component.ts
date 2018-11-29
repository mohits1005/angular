import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Account } from '../Account.model';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  @Output() addNewAccount = new EventEmitter<{}>();
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('statusInput') statusInputRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addAccount(){
    const name = this.nameInputRef.nativeElement.value;
    const status = this.statusInputRef.nativeElement.value;
    this.addNewAccount.emit({name: name, status: status});
    console.log('A server status changed, new status: ' + status);
  }

}
