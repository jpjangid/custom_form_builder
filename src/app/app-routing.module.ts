import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./form-builder/form-builder.module').then(m => m.FormBuilderModule) },
  { path: 'form-renderer', loadChildren: () => import('./form-renderer/form-renderer.module').then(m => m.FormRendererModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
