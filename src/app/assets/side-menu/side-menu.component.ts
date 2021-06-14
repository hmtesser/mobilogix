import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'mail' },
    { title: 'Devices', url: '/folder/Devices', icon: 'bag' },
    { title: 'Veículos', url: '/folder/Veiculos', icon: 'car' },
  ];
  constructor() { }

  ngOnInit() {}

}
