import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonBackButton } from '@ionic/angular';

@Component({
  selector: 'app-pass-recovery',
  templateUrl: './pass-recovery.component.html',
  styleUrls: ['./pass-recovery.component.scss'],
})
export class PassRecoveryComponent implements OnInit {
  recoveryForm: FormGroup

  constructor(private router :  Router) {
    
    this.recoveryForm = new FormGroup({
      inputEmail: new FormControl('', [Validators.required, Validators.min(4)]),
    });
  }

  sendRecoveryRequest(){
    if(this.recoveryForm.valid){
      //serviço de envio de email para recovery
      //retornar para tela de home quando der status 200
      this.router.navigateByUrl('/');
      

    }
  }

  return(){
    this.router.navigateByUrl('/')

  }

  ngOnInit() {}
}
