import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PrimeButtonsComponent} from './pages/prime-buttons/prime-buttons.component';


const routes: Routes = [
  { path: 'prime-button', component: PrimeButtonsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
