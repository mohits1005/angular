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

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    this.clickCount += 1;
    this.clickDict = {'click': this.clickCount};
    this.clicks.push(this.clickDict);
    this.secretFlag = this.clickCount >= 5 ? true : false;
  }
  getColor(clickCount) {
    return clickCount >= 5 ? 'blue' : 'transparent';
  }
}
