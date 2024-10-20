import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContuctUsComponent } from './components/contuct-us/contuct-us.component';
import {RouterModule, Routes} from "@angular/router";
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import { AboutPageComponent } from './components/about-page/about-page.component';

const routes :Routes =[
  {path:'ContactUs', component:ContuctUsComponent},
  {path:'AboutUs',  component : AboutUsComponent },
  {path:'AboutMe', component:AboutPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContuctUsComponent,
    AboutUsComponent,
    AboutPageComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
