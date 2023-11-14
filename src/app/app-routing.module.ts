import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router"; 
import {LoginComponent } from "./auth/login/login/login.component"; 
import { AdpspostsCreateComponent } from "./APDSPosts/adpsposts-create/adpsposts-create.component";
import { ApdsDisplayComponent } from "./APDSPosts/apds-display/apds-display.component";

const routes: Routes = [ 
    {path:'', component: ApdsDisplayComponent}, 
    {path: 'add', component: AdpspostsCreateComponent}, 
    {path: 'login', component: LoginComponent}, 
    {path: 'signup', component: LoginComponent}
];

@NgModule({

imports: [RouterModule.forRoot(routes)], 
exports: [RouterModule] 
})

export class AppRoutingModule{}