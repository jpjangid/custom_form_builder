import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRendererRoutingModule } from './form-renderer-routing.module';
import { FormRendererComponent } from './form-renderer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const exportdata: any = [
  FormRendererComponent
]
@NgModule({
  declarations: [
    ...exportdata    
  ],
  imports: [
    CommonModule,
    FormRendererRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[exportdata]
})
export class FormRendererModule { }
