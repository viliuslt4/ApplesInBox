import { Component, OnInit } from '@angular/core';
import { IBox } from '../models/box';

@Component({
  selector: 'app-apples',
  templateUrl: './apples.component.html',
  styleUrls: ['./apples.component.scss']
})
export class ApplesComponent implements OnInit {
  applesBox: IBox[];
  results: boolean = false;
  timeCount;
  apples: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.generateRandomNumberApplesToBox();
  }
  generateRandomNumberApplesToBox(){
    let items = Math.floor((Math.random() * 15) + 1);
    let applesArray = new Array();
    for(let i=0;i<items;i++){ 
      applesArray.push("apple");
    }
    this.applesBox = applesArray;
  }
  count(){
    const timeStart = window.performance.now();
    this.countApples();
    const timeEnd = window.performance.now();
    this.timeCount = (timeEnd - timeStart).toFixed(2);
    this.results = true;
  }
  countApples(){
    for(let j=0;j<this.applesBox.length;j++){
      if(this.applesBox[j] === "apple"){
        this.apples++;
      }
    }
  }
}
