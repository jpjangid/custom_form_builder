import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'lib-config-modal',
  templateUrl: './config-modal.component.html',
  styleUrls: ['./config-modal.component.css']
})
export class ConfigModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
  @Input() public modalInstance: any;
  @Output() passValue = new EventEmitter();
  areaDetail: any = {}
  ngOnInit(): void {
    this.areaDetail = Object.assign({},this.modalInstance) ;
    console.log(this.modalInstance)
  }
  submitDetail(formDetail: NgForm) {
    console.log(formDetail.value);
    this.areaDetail.name = this.areaDetail.label;
    this.activeModal.close(this.areaDetail);
  }
  // extraField:any={ label: 'Another Label'}
  addOption() {
    console.log(this.areaDetail)
    this.areaDetail.data.push({ label: 'Another Label'+this.areaDetail.data?.length})
    console.log(this.areaDetail.data)
  }
  removeOption(index?:any) {
    console.log(this.areaDetail.data?.length>=1,this.areaDetail.data?.length)
    if((this.areaDetail.id=='checkbox') && (this.areaDetail.data?.length>1)) {
      this.areaDetail.data.splice((this.areaDetail.data?.length)-1,1);
    }
    else if((this.areaDetail.id=='radio') && (this.areaDetail.data?.length>2)) {
      this.areaDetail.data.splice((this.areaDetail.data?.length)-1,1);
    }
  }

}
