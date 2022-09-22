import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }
  @Input() inputDropdownDetail:any={data:[{label:"Member",value:"member"},{label:"Non-Member",value:"non-member"}],id:"dropdown",label:"",name:"dropdown",layout:"col-lg-12",required:true,type:"",validators:{},value:""};
  ngOnInit(): void {
  }

}
