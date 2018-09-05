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

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    this.clickCount += 1;
    this.clickDict = {'click': this.clickCount};
    this.clicks.push(this.clickDict);
  }
}
