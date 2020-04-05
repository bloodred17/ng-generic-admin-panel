import { Component } from '@angular/core';
import { HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import {sideNavAnimation, sideNavContainerAnimation} from './sidenav.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    sideNavAnimation,
    sideNavContainerAnimation
  ]
})
export class AppComponent {
  title = 'material-test';
  widthSideBarExpanded = 250;
  widthSideBarCollapsed = 50;
  widthSideBar = this.widthSideBarExpanded;
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  // toggleSideBar() {
  //   if (this.widthSideBar === this.widthSideBarExpanded) {
  //     this.widthSideBar = this.widthSideBarCollapsed;
  //     this.isOpen = false;
  //   } else {
  //     this.widthSideBar = this.widthSideBarExpanded;
  //     this.isOpen = true;
  //   }
  // }
}
