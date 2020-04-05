import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import {DemoMaterialModule} from '../material-module';
import { NavigationComponent } from './navigation/navigation.component';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
    declarations: [AdminPanelComponent, NavigationComponent, ToolbarComponent],
    exports: [
        AdminPanelComponent
    ],
    imports: [
        CommonModule,
        DemoMaterialModule
    ]
})
export class LayoutsModule { }
