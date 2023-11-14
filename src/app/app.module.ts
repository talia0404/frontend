import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import{MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { AdpspostsCreateComponent } from './APDSPosts/adpsposts-create/adpsposts-create.component';
import { ApdsDisplayComponent } from './APDSPosts/apds-display/apds-display.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth/auth.inceptor';
import { LoginComponent } from './auth/login/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error/error.component';
import { ErrorInterceptor } from './error/error/error.inceptor';

@NgModule({
  declarations: [
    AppComponent,
    AdpspostsCreateComponent,
    ApdsDisplayComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass:AuthInterceptor, multi:true},
  {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
