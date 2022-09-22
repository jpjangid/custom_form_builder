import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  @Input() inputTextDetail:any
  constructor() { }

  ngOnInit(): void {
  }
}
