import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LoginDataService } from '../../services/login-data.service';
import { MenuController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../models/login';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})




export class LoginPage implements OnInit {

  @ViewChild('.testeAnimacao', { read: ElementRef }) errormsg:ElementRef

  returnToken: Login;
  erro: any;

  returnError: boolean = false;

  loginForm: FormGroup;

  constructor(
    private animationCtrl: AnimationController,
    private LoginToken: LoginDataService, private router : Router
  ) {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  errorMessage: string;

  async login() {
    if (this.loginForm.valid) {      
      this.returnError = false;
      
      const retorno = await this.LoginToken.getToken(
        this.loginForm.get('userName').value,
        this.loginForm.get('password').value
     )
     
     console.log(Object[retorno].key('token'));
    ///this.router.navigateByUrl('/folder/home')
     
    } else {
      this.returnError = true;


      const animation: Animation = this.animationCtrl
        .create()
        .addElement(document.querySelector('.testeAnimacao'))
        .duration(1000)
        .fromTo('opacity', '0', '1')
        .fromTo('visibilty','none','visible')
        
      animation.play();
      this.errorMessage = 'Favor preencher os campos e tentar novamente';

      console.log('erro');
    }
  }

  goRecoveryRoute(){
    this.router.navigateByUrl('/recovery')
  }

  ngOnInit() {}
 




}
