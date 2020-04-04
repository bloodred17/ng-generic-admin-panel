import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-test';
  widthSideBarExpanded = 250;
  widthSideBarCollapsed = 50;
  widthSideBar = this.widthSideBarExpanded;
  isOpen = true;

  toggleSideBar() {
    if (this.widthSideBar === this.widthSideBarExpanded) {
      this.widthSideBar = this.widthSideBarCollapsed;
      this.isOpen = false;
    } else {
      this.widthSideBar = this.widthSideBarExpanded;
      this.isOpen = true;
    }
  }
}
