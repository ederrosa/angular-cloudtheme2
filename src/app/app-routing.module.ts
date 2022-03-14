import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404Component } from './modules/error/error404/error404.component';
import { MainHomeComponent } from './modules/home/main/main-home.component';

const routes: Routes = [{
  path: '',
  component: MainHomeComponent,  
},
{
  path: '**',
  component: Error404Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
