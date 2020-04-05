import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import {DemoMaterialModule} from '../material-module';



@NgModule({
    declarations: [AdminPanelComponent],
    exports: [
        AdminPanelComponent
    ],
    imports: [
        CommonModule,
        DemoMaterialModule
    ]
})
export class LayoutsModule { }
