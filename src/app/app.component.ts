import { Component, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'mail' },
    { title: 'Devices', url: '/folder/devices', icon: 'bag' },
    { title: 'Véiculos', url: '/folder/veiculos', icon: 'car' },
  ];

  constructor() {}


  ngOninit(){
   
  }
  userEmail: string = 'hmarcondes@mobilogix.com';


  
}
