import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {LoginPageModule} from './auth/login/login.module'

import { LoginPage } from './auth/login/login.page'

import { LoginDataService } from './services/login-data.service';
import { FolderPage } from './folder/folder.page';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  exports:[],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,LoginPageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },LoginDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
