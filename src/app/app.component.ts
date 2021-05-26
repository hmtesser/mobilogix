import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'mail' },
    { title: 'Devices', url: '/folder/Devices', icon: 'bag' },
    { title: 'Veículos', url: '/folder/Veiculos', icon: 'car' },
  ];
 

  constructor() {}

 userEmail:string="hmarcondes@mobilogix.com"






}
