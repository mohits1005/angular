import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from '../Account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input('accountElement') element: Account;
  @Output() changeStatus = new EventEmitter<{}>();
  constructor() { }

  ngOnInit() {
  }

  onStatusChange(id, status){
    // console.log('emit '+id+status);
    this.changeStatus.emit({ id: id, status: status });
    console.log('A server status changed, new status: ' + status);
  }

}
