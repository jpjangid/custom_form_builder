import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-form-builder',
  template: `
    <lib-builder [buttonFields]="buttonFields" (formJson)="getJson($event)"></lib-builder>
  `,
  styles: [
  ]
})
export class FormBuilderComponent implements OnInit,OnChanges {
  @Input() buttonFields: any = { controls: [
    {
      id: 'button',
      name: 'button',
      label: 'Submit',
      type: 'submit',
      validators: {},
      layout: 'col-lg-12',
    }
  ],paymentDetailObject: [
    {
      selectedCategory: '',
      type: '',
      amount: '',
    },
  ],payment_required:false };
  @Output() formJson = new EventEmitter<any>();
  constructor() { 
    
  }
  ngOnChanges(): void {
    console.log(this.buttonFields); 
  }

  ngOnInit(): void {
    console.log(this.buttonFields); 
  }

  getJson(event : any){
    this.formJson.emit(event);
  }

}
