import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import {DemoMaterialModule} from '../material-module';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
    declarations: [AdminPanelComponent, NavigationComponent],
    exports: [
        AdminPanelComponent
    ],
    imports: [
        CommonModule,
        DemoMaterialModule
    ]
})
export class LayoutsModule { }
