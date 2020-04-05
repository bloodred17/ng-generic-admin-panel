import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxComponentsComponent } from './ngx-components/ngx-components.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  declarations: [NgxComponentsComponent],
    imports: [
      CommonModule,
      ButtonsModule.forRoot()
    ]
})
export class PagesModule { }
