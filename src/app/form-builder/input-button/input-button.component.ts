import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.scss']
})
export class InputButtonComponent implements OnInit {
  @Input() inputButtonDetail:any
  constructor() { }

  ngOnInit(): void {
    console.log(this.inputButtonDetail)
  }

}
