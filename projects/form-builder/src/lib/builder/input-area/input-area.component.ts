import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.css']
})
export class InputAreaComponent implements OnInit {

  @Input() inputAreaDetail:any;
  areaDetail:any=[];
  constructor() { }

  ngOnInit() {
    console.log(this.inputAreaDetail)
  }

}
