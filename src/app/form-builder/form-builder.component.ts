import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DragulaService } from 'ng2-dragula';
import { BehaviorSubject } from 'rxjs';

import { ConfigModalComponent } from './config-modal/config-modal.component';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit,OnDestroy {
  @Input() buttonFields: any = { controls: [{
    id: "button",
    name: "button",
    label: "Submit",
    type: "submit",
    validators: {},
    layout:"col-lg-12"
  }] , paymentDetailObject:[{
    selectedCategory:"",
    type:"",
    amount:""
  }],payment_required:false};
  paymentValue:boolean=false;
  // formJsonData = new BehaviorSubject<any>({});
  @Output() formJson = new  EventEmitter<any>();
 
  formValueCheck: boolean = false;
  constructor(private dragulaService: DragulaService, public modalService: NgbModal,private route : Router) {
    this.initDragula();
  }

  ngOnInit(): void {
    console.log(this.buttonFields);
    this.paymentValue = this.buttonFields?.payment_required
    console.log("payment value",this.paymentValue)
  }

  initDragula() {
    this.dragulaService.createGroup('COPYABLE', {
      copy: (el, source) => {
        console.log(this.buttonFields)
        return source.id === 'left';
      },
      copyItem: (model: any) => {
        console.log(model,this.buttonFields); 
        return model;
      },
      accepts: (el, target: any, source, sibling) => {
        // To avoid dragging from right to left container
        return target.id !== 'left';
      }
    });
  }

  customJson: any = {
    controls: [
      {
        id: "text",
        name: "text",
        placeholder: "Enter Text Here",
        label: "Text Box",
        value: "",
        type: "text",
        required: true,
        validators: {
          required: false
        },
        layout:"col-lg-12"
      },
      {
        id: "area",
        name: "area",
        placeholder: "Enter Description",
        label: "Text Area",
        value: "",
        type: "textarea",
        required: true,
        validators: {
          required: false
        },
        layout:"col-lg-12"
      },
      {
        id: "radio",
        name: "radio",
        label: "Radio",
        value: "",
        type: "radio",
        required: true,
        data: [{ label: 'Option1', value: '1' }, { label: 'Option2', value: '2' }],
        validators: {
          required: false
        },
        layout:"col-lg-12"
      },
      {
        id: "password",
        name: "password",
        placeholder: "Enter Password",
        label: "Password",
        value: "",
        type: "password",
        required: true,
        validators: {
          required: false
        },
        layout:"col-lg-12"
      },
      {
        id: "email",
        name: "email",
        placeholder: "Enter Email",
        label: "Email",
        value: "",
        type: "email",
        required: true,
        validators: {
          required: true
        },
        layout:"col-lg-12"
      },
      {
        id: "checkbox",
        name: "checkbox",
        label: "Checkbox",
        value: "",
        type: "checkbox",
        required: true,
        data: [{ label: 'Test', value: '1' }],
        validators: {},
        layout:"col-lg-12"
      },
      {
        id: "date",
        name: "date",
        label: "Date",
        type: "date",
        validators: {},
        layout:"col-lg-12"
      },
      {
        id: "button",
        name: "button",
        label: "Submit",
        type: "submit",
        validators: {},
        layout:"col-lg-12"
      }
    ]
  }
  icons:any=[{class:"far fa-text"},{class:"fas fa-paragraph"},{class:"fas fa-list-ul"},{class:"fas fa-lock-alt"},{class:"far fa-at"},{class:"far fa-check-square"},{class:"fas fa-calendar-alt"},{class:"fas fa-location-arrow"}]

  //for delete form field
  deleteField(index?: any) {
    console.log(index);
    this.buttonFields.controls.splice(index, 1)
  }

  //open modal to set config of field
  openConfigForm(value?: any, index?: any) {
    console.log(value)
    const modalRef = this.modalService.open(ConfigModalComponent);
    modalRef.componentInstance.modalInstance = value;
    modalRef.result.then((result) => {
      console.log(result);
      this.buttonFields.controls[index] = result;
    }).catch((error) => {
      console.log(error);
    });
  }

  //get form builder json
  getFormJsonData() {
    this.formValueCheck=!this.formValueCheck;
    // this.formJsonData.next(this.buttonFields);
    // this.formJsonData.subscribe((res:any)=> {
    //   alert("hello")
    // })
    this.buttonFields.payment_required=this.paymentValue
    this.formJson.emit(JSON.stringify(this.buttonFields));
    // localStorage.setItem('formjson',JSON.stringify(this.buttonFields));
    // this.route.navigateByUrl('form-renderer');
    console.log(this.buttonFields);
  }
  ngOnDestroy(){
    this.dragulaService.destroy('COPYABLE')
  }

  getLayoutValue(layout?:any) {
    console.log(layout.value);
    console.log(this.customJson)
    this.customJson.controls?.map((res:any)=> {
      res.layout=layout.value
    })
    console.log(this.customJson)
  }
  openModalOnPayment() {
    if(this.paymentValue==true) {
      const modalRef = this.modalService.open(ConfigModalComponent, {size: 'lg', windowClass: 'modal-xl'});
      modalRef.componentInstance.paymentOption = this.buttonFields;
      modalRef.result.then((result) => {
        console.log(result);
        this.buttonFields.paymentDetailObject =result
      }).catch((error) => {
        console.log(error);
      });
    }
  }
}
