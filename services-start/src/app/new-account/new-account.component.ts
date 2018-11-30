import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { LoggingService }  from '../logging.service'

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  @Output() addNewAccount = new EventEmitter<{}>();
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('statusInput') statusInputRef: ElementRef;

  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
  }

  addAccount(){
    const name = this.nameInputRef.nativeElement.value;
    const status = this.statusInputRef.nativeElement.value;
    this.addNewAccount.emit({name: name, status: status});
    // const service = new LoggingService();
    // service.logStatusChange(status);
    this.loggingService.logStatusChange(status);
  }

}
