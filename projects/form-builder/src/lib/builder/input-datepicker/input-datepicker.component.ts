import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-input-datepicker',
  templateUrl: './input-datepicker.component.html',
  styleUrls: ['./input-datepicker.component.css']
})
export class InputDatepickerComponent implements OnInit {
  @Input() inputDateDetail:any
  constructor() { }

  ngOnInit(): void {
  }

}
