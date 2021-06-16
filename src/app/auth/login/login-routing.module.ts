import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassRecoveryComponent } from 'src/app/page/pass-recovery/pass-recovery.component';

import { AppComponent } from '../../../app/app.component'

import { LoginPage } from './login.page';

const routes: Routes = [
 
  {
    path: '',
    component:LoginPage
  },
  {
    path: 'recovery',
    component: PassRecoveryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
