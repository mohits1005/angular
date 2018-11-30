import { Account } from "./Account.model"
import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";
@Injectable()
export class AccountService {
    accounts: Account[] = [
        new Account(0, 'Test Account 1', 'active'),
        new Account(1, 'Test Account 2', 'inactive')
    ];

    statusUpdated = new EventEmitter<String>(); 

    constructor(private loggingService: LoggingService) { }

    newAccount(event) {
        const name = event.name;
        const status = event.status;
        event.id = this.accounts.length;
        // console.log('id ' + (this.accounts.length + 1));
        this.accounts.push(event);
        this.loggingService.logStatusChange(status);
    }

    onStatusChange(event) {
        // console.log('recieve '+event.id+event.status);
        this.accounts[event.id].status = event.status;
        this.loggingService.logStatusChange(event.status);
    }
}