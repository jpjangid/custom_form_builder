import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.css']
})
export class InputButtonComponent implements OnInit {

  @Input() inputButtonDetail:any
  constructor() { }

  ngOnInit(): void {
    console.log(this.inputButtonDetail)
  }

}
