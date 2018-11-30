import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from '../Account.model';
import { LoggingService } from '../logging.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent implements OnInit {
  @Input('accountElement') element: Account;
  @Output() changeStatus = new EventEmitter<{}>();
  constructor(private loggingService: LoggingService) { }


  ngOnInit() {
  }

  onStatusChange(id, status){
    // console.log('emit '+id+status);
    this.changeStatus.emit({ id: id, status: status });
    // console.log('A server status changed, new status: ' + status);
    this.loggingService.logStatusChange(status);

  }

}
