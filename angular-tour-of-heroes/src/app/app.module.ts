import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContuctUsComponent } from './components/contuct-us/contuct-us.component';
import {RouterModule, Routes} from "@angular/router";

const routes :Routes =[
  {path:'ContactUs', component:ContuctUsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContuctUsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
