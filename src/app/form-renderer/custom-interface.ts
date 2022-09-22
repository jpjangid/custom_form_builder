interface JsonFormValidators {
    min?: number;
    max?: number;
    required?: boolean;
    requiredTrue?: boolean;
    email?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    nullValidator?: boolean;
}

interface optionDetails {
    label:string ,
    value :string
}
interface JsonFormControlOptions {
    min?: string;
    max?: string;
    step?: string;
    icon?: string;
   
}
interface JsonFormControls {
    name: string;
    placeholder:string;
    label: string;
    value: string;
    type: string;
    options?: JsonFormControlOptions;
    required: boolean;
    layout:string;
    validators: JsonFormValidators;
    data?: optionDetails[]
}
interface JsonPaymentDetailObject {
    selectedCategory:string;
    type : string;
    amount : string;
}

export interface JsonFormData {
    controls: JsonFormControls[];
    paymentDetailObject : JsonPaymentDetailObject[]
    payment_required:boolean;
    form_id:number;
    event_id:number;
}

