import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeButtonsComponent } from './prime-buttons/prime-buttons.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [PrimeButtonsComponent],
    imports: [
      CommonModule,
      BrowserAnimationsModule,
      ButtonModule
    ]
})
export class PagesModule { }
