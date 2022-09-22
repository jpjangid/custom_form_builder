import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.css']
})
export class InputEmailComponent implements OnInit {

  @Input() inputEmailDetail:any;
  constructor() { }

  ngOnInit(): void {
  }

}
