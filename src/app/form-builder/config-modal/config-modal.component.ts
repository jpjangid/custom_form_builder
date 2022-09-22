import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-config-modal',
  templateUrl: './config-modal.component.html',
  styleUrls: ['./config-modal.component.scss']
})
export class ConfigModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
  @Input() public modalInstance: any;
  @Input() public paymentOption: any;
  @Output() passValue = new EventEmitter();
  formDetail: any = []
  paymentDetail: any = [];


  ngOnInit(): void {
    this.formDetail = Object.assign({}, this.modalInstance);
    console.log(this.modalInstance)
    console.log(this.paymentOption)
  }

  submitDetail(detail: NgForm) {
    console.log(detail.value);
    if(!this.paymentOption) {
      this.activeModal.close(this.formDetail);
    }
    else {
      this.paymentOption=this.paymentOption.paymentDetailObject
      this.activeModal.close(this.paymentOption);
    }
  }

  //for add one more option in radio and checkbox
  addOption() {
    console.log(this.formDetail)
    this.formDetail.data.push({ label: 'Another Label' + this.formDetail.data?.length })
    console.log(this.formDetail.data)
  }

  //for remove option in radio and checkbox 
  removeOption(index?: any) {
    console.log(this.formDetail.data?.length >= 1, this.formDetail.data?.length)
    if ((this.formDetail.id == 'checkbox') && (this.formDetail.data?.length > 1)) {
      this.formDetail.data.splice((this.formDetail.data?.length) - 1, 1);
    }
    else if ((this.formDetail.id == 'radio') && (this.formDetail.data?.length > 2)) {
      this.formDetail.data.splice((this.formDetail.data?.length) - 1, 1);
    }
  }

  closeModal() {
    this.activeModal.close();
  }

  //add remove rows form payment condition
  actionButtonForPayment(string?:any) {
    if(string=='add') {
      this.paymentOption.paymentDetailObject.push(this.paymentOption.paymentDetailObject[0])
    }
    else if(this.paymentOption.paymentDetailObject?.length>1) {
      this.paymentOption.paymentDetailObject.splice((this.paymentOption.paymentDetailObject?.length-1),1);
    }
    console.log(this.paymentOption.paymentDetailObject)
  }
}
