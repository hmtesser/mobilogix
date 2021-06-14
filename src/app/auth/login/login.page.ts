import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LoginDataService } from '../../services/login-data.service'
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  constructor(private router: Router,private LoginToken : LoginDataService, private menuCtrl: MenuController ) {}


  ngOnInit(){

  }
  Teste:boolean = true;




  login() {
  

    this.router.navigateByUrl('/folder/home')
  }


   
  

  
}
