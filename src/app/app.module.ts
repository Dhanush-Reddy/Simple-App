import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UpdateComponent } from './update/update.component';
import { ApphighletDirective } from './directive/apphighlet.directive';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    HeaderComponent,
    SidenavComponent,
    UpdateComponent,
    [ApphighletDirective],
    DeleteComponent
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
