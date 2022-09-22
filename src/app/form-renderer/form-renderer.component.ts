import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from '../services/payment.service';
import { JsonFormData } from './custom-interface';
declare var Razorpay: any;
@Component({
  selector: 'app-form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.scss'],
})
export class FormRendererComponent implements OnInit, OnChanges {
  @Input() jsonFormData: JsonFormData = {
    controls: [
      {
        name: '',
        placeholder: '',
        label: '',
        required: false,
        type: '',
        value: '',
        validators: {},
        layout: '',
      },
    ],
    paymentDetailObject:[{selectedCategory:"",type:"",amount:''}],
    payment_required: false,
    form_id:0,
    event_id:0
  };
  form: any = {};
  paymentId: string = '';
  errors: string = '';
  public myForm: FormGroup = this.fb.group({});
  // customJson: JsonFormData = {
  //   controls: [
  //     {
  //       name: "firstName",
  //       label: "",
  //       value: "",
  //       type: "text",
  //       required: false,
  //       validators: {
  //         required: true
  //       }
  //     },
  //     {
  //       name: "lastName",
  //       label: "",
  //       value: "",
  //       type: "text",
  //       required: true,
  //       validators: {
  //         required: true
  //       }
  //     },
  //     {
  //       name: "gender",
  //       label: "gender",
  //       value: "",
  //       type: "radio",
  //       required: true,
  //       data: [{ label: 'Male', value: 'M' }, { label: 'Female', value: 'F' }],
  //       validators: {
  //         required: true
  //       }
  //     },
  //     {
  //       name: "description",
  //       label: "description",
  //       value: "",
  //       type: "textarea",
  //       required: true,
  //       validators: {
  //         required: true
  //       }
  //     },
  //     {
  //       name: "agreeTerms",
  //       label: "agreeTerms",
  //       value: "true",
  //       type: "checkbox",
  //       required: true,
  //       validators: {}
  //     }
  //   ]
  // }
  constructor(private fb: FormBuilder, private paymentAPi: PaymentService) {}

  ngOnInit(): void {
    // this.jsonFormData.controls = this.customJson.controls;
    // this.createForm(this.jsonFormData.controls);
    console.log(this.jsonFormData);
  }
  ngOnChanges() {
    this.createForm(this.jsonFormData);
    console.log(this.jsonFormData);
  }

  payment(orderId: string, amount: number): void {
    this.paymentId = '';
    this.errors = '';

    let options = {
      key: 'rzp_test_5R3ifzCtFSn1j1',
      amount: amount,
      name: 'Java Chinna',
      description: 'Web Development',
      image:
        'https://www.javachinna.com/wp-content/uploads/2020/02/android-chrome-512x512-1.png',
      order_id: orderId,
      handler: function (response: any) {
        var event = new CustomEvent('payment.success', {
          detail: response,
          bubbles: true,
          cancelable: true,
        });
        window.dispatchEvent(event);
      },
      prefill: {
        name: '',
        email: '',
        contact: '',
      },
      notes: {
        address: '',
      },
      theme: {
        color: '#3399cc',
      },
    };

    var rzp1 = new Razorpay(options);
    rzp1.open();

    rzp1.on('payment.failed', (response: any) => {
      console.log(response)
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
      let statusDetail = {
        status : "Payment Success",
        payment_id:response.error.metadata.payment_id,
        razorpay_signature:"",
        description:response.error.description
      }
      this.paymentAPi.updatePaymentStatus(response.error.metadata.order_id,statusDetail).subscribe((res:any)=> {
        console.log(res);
      })
      this.errors = response.error.reason;
    });
  }

  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: any): void {
    console.log(event);
    let statusDetail = {
      status : "Payment Success",
      payment_id:event.detail.razorpay_payment_id,
      razorpay_signature:event.detail.razorpay_signature,
      description:"Payment Success"
    }
    this.paymentAPi.updatePaymentStatus(event.detail.razorpay_order_id,statusDetail).subscribe((res:any)=> {
      console.log(res);
    })
  }

  createForm(controls: any) {
    console.log(controls);
    if (controls) {
      controls.controls?.map((control:any)=> {
        if (control.name != 'button') {
          const validatorsToAdd = [];
          if (Object.keys(control.validators).length > 0) {
            for (const [key, value] of Object.entries(control.validators)) {
              switch (key) {
                case 'min':
                  validatorsToAdd.push(Validators.min(Number(value)));
                  break;
                case 'max':
                  validatorsToAdd.push(Validators.max(Number(value)));
                  break;
                case 'required':
                  if (value) {
                    validatorsToAdd.push(Validators.required);
                  }
                  break;
                case 'requiredTrue':
                  if (value) {
                    validatorsToAdd.push(Validators.requiredTrue);
                  }
                  break;
                case 'email':
                  if (value) {
                    validatorsToAdd.push(Validators.email);
                  }
                  break;
                case 'minLength':
                  validatorsToAdd.push(Validators.minLength(Number(value)));
                  break;
                case 'maxLength':
                  validatorsToAdd.push(Validators.maxLength(Number(value)));
                  break;
                case 'pattern':
                  validatorsToAdd.push(Validators.pattern(String(value)));
                  break;
                case 'nullValidator':
                  if (value) {
                    validatorsToAdd.push(Validators.nullValidator);
                  }
                  break;
                default:
                  break;
              }
            }
          }
          this.myForm.addControl(
            control.name,
            this.fb.control(control.value, validatorsToAdd)
          );
        }
      })
      // for (let control of controls?.controls) {
      // }
    }
  }

  submitData() {
    console.log(this.jsonFormData);
    let postData = {
      form_id: this.jsonFormData?.form_id,
      event_id: this.jsonFormData?.event_id,
      data: {
        ...this.myForm.value,
        payment_required: this.jsonFormData?.payment_required,
      },
    };

    if (this.myForm.valid) {
      this.paymentAPi.saveFormResponse(postData).subscribe((res: any) => {
        if (this.jsonFormData?.payment_required == true) {
          if (res.Order_id != undefined && res.Order_id != '') {
            this.payment(res.Order_id, res.Amount);
          }
        } else {
          alert('Form submitted.');
        }
      });

      //this.getFormData.emit(this.myForm.value);
    }
  }
}
