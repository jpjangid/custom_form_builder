import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.css']
})
export class InputCheckboxComponent implements OnInit {

  @Input() inputCheckboxDetail:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.inputCheckboxDetail)
  }

}
