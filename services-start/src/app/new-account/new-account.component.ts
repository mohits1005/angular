import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { LoggingService }  from '../logging.service'
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  // @Output() addNewAccount = new EventEmitter<{}>();
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('statusInput') statusInputRef: ElementRef;

  constructor(private loggingService: LoggingService, private accountService: AccountService) { 
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('New Status: '+status)
    );
  }

  ngOnInit() {
  }

  addAccount(){
    const name = this.nameInputRef.nativeElement.value;
    const status = this.statusInputRef.nativeElement.value;
    // this.addNewAccount.emit({name: name, status: status});
    // const service = new LoggingService();
    // service.logStatusChange(status);
    this.accountService.newAccount({name,status})
    // this.loggingService.logStatusChange(status);
  }

}
