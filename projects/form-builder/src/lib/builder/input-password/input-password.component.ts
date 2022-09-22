import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.css']
})
export class InputPasswordComponent implements OnInit {

  @Input() inputPasswordDetail:any;
  constructor() { }

  ngOnInit(): void {
  }

}
