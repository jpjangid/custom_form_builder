import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss']
})
export class InputCheckboxComponent implements OnInit {
  @Input() inputCheckboxDetail:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.inputCheckboxDetail)
  }

}
