import { Component, OnInit } from '@angular/core';
import {sideNavAnimation, sideNavContainerAnimation} from './sidenav.animations';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
  animations: [
    sideNavAnimation,
    sideNavContainerAnimation
  ]
})
export class AdminPanelComponent implements OnInit {
  isOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  getState($event) {
    this.isOpen = $event;
  }

}
