import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.css']
})
export class InputRadioComponent implements OnInit {

  @Input() inputRadioDetail:any
  constructor() { }

  ngOnInit(): void {
  }

}
