import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgxComponentsComponent} from './pages/ngx-components/ngx-components.component';


const routes: Routes = [
  { path: 'ngx', component: NgxComponentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
