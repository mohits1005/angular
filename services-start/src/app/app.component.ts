import { Component, OnInit } from '@angular/core';
import { Account } from './Account.model';
import { AccountService} from './account.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AccountService]
})
export class AppComponent implements OnInit{
  title = 'services-start';
  accounts: Account[] = [];
  constructor(private accountService: AccountService) { }
  ngOnInit(){
    this.accounts = this.accountService.accounts;
  }
  // accounts: Account[] = [
  //   new Account(0, 'Test Account 1', 'active'),
  //   new Account(1, 'Test Account 2', 'inactive')
  // ];

  // newAccount(event) {
  //   const name = event.name;
  //   const status = event.status;
  //   event.id = this.accounts.length;
  //   // console.log('id ' + (this.accounts.length + 1));
  //   this.accounts.push(event);
  // }

  // onStatusChange(event){
  //   // console.log('recieve '+event.id+event.status);
  //   this.accounts[event.id].status = event.status;
  // }

}

