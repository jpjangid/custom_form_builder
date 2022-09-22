import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.scss']
})
export class InputAreaComponent implements OnInit {
  @Input() inputAreaDetail:any;
  areaDetail:any=[];
  constructor() { }

  ngOnInit() {
    console.log(this.inputAreaDetail)
  }
}
