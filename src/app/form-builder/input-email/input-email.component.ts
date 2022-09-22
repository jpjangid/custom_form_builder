import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss']
})
export class InputEmailComponent implements OnInit {
  @Input() inputEmailDetail:any;
  constructor() { }

  ngOnInit(): void {
  }

}
