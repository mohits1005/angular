import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainblock',
  templateUrl: './mainblock.component.html',
  styleUrls: ['./mainblock.component.css']
})
export class MainblockComponent implements OnInit {
  clickCount = 0;
  clicks = [];
  clickDict = {};
  secretFlag = false;
  logs = [];

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    this.clickCount += 1;
    // this.clickDict = {'click': this.clickCount};
    // this.clicks.push(this.clickDict);
    this.logs.push(new Date());
    this.secretFlag = this.clickCount >= 5 ? true : false;
  }
  getColor(index) {
    return index >= 4 ? 'blue' : 'transparent';
  }
}
