import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilderRoutingModule } from './form-builder-routing.module';
import { FormBuilderComponent } from './form-builder.component';
import { DragulaModule } from 'ng2-dragula';
import { InputTextComponent } from './input-text/input-text.component';
import { InputAreaComponent } from './input-area/input-area.component';
import { InputEmailComponent } from './input-email/input-email.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { InputCheckboxComponent } from './input-checkbox/input-checkbox.component';
import { InputRadioComponent } from './input-radio/input-radio.component';
import { InputButtonComponent } from './input-button/input-button.component';
import { FormsModule } from '@angular/forms';
import { FormRendererModule } from '../form-renderer/form-renderer.module';
import { ConfigModalComponent } from './config-modal/config-modal.component';
import { InputDatepickerComponent } from './input-datepicker/input-datepicker.component';
import { DropdownComponent } from './dropdown/dropdown.component';



@NgModule({
  declarations: [
    FormBuilderComponent,
    InputTextComponent,
    InputAreaComponent,
    InputEmailComponent,
    InputPasswordComponent,
    InputCheckboxComponent,
    InputRadioComponent,
    InputButtonComponent,
    ConfigModalComponent,
    InputDatepickerComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    FormBuilderRoutingModule,
    FormsModule,
    DragulaModule.forRoot(),
    FormRendererModule
  ],
  exports:[FormBuilderComponent]
})
export class FormBuilderModule { }
