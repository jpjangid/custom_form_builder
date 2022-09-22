import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JsonFormData } from './renderer/lib-custom';

@Component({
  selector: 'lib-form-renderer',
  template: `
    <lib-renderer [jsonFormData]="jsonFormData"></lib-renderer>
  `,
  styles: [
  ]
})
export class FormRendererComponent implements OnInit {
  @Input() jsonFormData: JsonFormData = { controls: [{ name: '',placeholder:'', label: '', required: false, type: '', value: '', validators: {},layout:'' }],paymentDetailObject:[{selectedCategory:"",type:"",amount:""}], payment_required:false, form_id : 0, event_id:0 };
  constructor() { }

  ngOnInit(): void {
  }

}
