import { Component } from '@angular/core';
import { Account } from './Account.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'services-start';
  accounts: Account[] = [
    new Account(0, 'Test Account 1', 'active'),
    new Account(1, 'Test Account 2', 'inactive')
  ];

  newAccount(event) {
    const name = event.name;
    const status = event.status;
    event.id = this.accounts.length;
    // console.log('id ' + (this.accounts.length + 1));
    this.accounts.push(event);
  }

  onStatusChange(event){
    // console.log('recieve '+event.id+event.status);
    this.accounts[event.id].status = event.status;
  }

}

