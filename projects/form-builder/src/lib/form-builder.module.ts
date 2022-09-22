import { NgModule } from '@angular/core';
import { FormBuilderComponent } from './form-builder.component';
import { FormRendererComponent } from './form-renderer.component';
import { BuilderComponent } from './builder/builder.component';
import { RendererComponent } from './renderer/renderer.component';
import { DragulaModule } from 'ng2-dragula';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from './builder/input-text/input-text.component';
import { InputAreaComponent } from './builder/input-area/input-area.component';
import { InputEmailComponent } from './builder/input-email/input-email.component';
import { InputPasswordComponent } from './builder/input-password/input-password.component';
import { InputCheckboxComponent } from './builder/input-checkbox/input-checkbox.component';
import { InputRadioComponent } from './builder/input-radio/input-radio.component';
import { InputButtonComponent } from './builder/input-button/input-button.component';
import { ConfigModalComponent } from './builder/config-modal/config-modal.component';
import { InputDatepickerComponent } from './builder/input-datepicker/input-datepicker.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    FormBuilderComponent,
    FormRendererComponent,
    BuilderComponent,
    RendererComponent,
    InputTextComponent,
    InputAreaComponent,
    InputEmailComponent,
    InputPasswordComponent,
    InputCheckboxComponent,
    InputRadioComponent,
    InputButtonComponent,
    ConfigModalComponent,
    InputDatepickerComponent
  ],
  imports: [
    BrowserModule,
    DragulaModule.forRoot(),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    FormBuilderComponent,
    FormRendererComponent
  ]
})
export class FormBuilderModule { }
