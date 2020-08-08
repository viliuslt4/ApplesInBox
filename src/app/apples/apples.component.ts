import { Component, OnInit } from '@angular/core';
import { IBox } from '../models/box';

@Component({
  selector: 'app-apples',
  templateUrl: './apples.component.html',
  styleUrls: ['./apples.component.scss']
})
export class ApplesComponent implements OnInit {
  apples: IBox;
  results: boolean = false;
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
    this.apples = applesArray;
  }
  countApples(){

  }
}
