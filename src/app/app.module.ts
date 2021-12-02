import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule} from '@angular/forms';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AngularFirestore } from '@angular/fire/firestore';

import { EmployeeFormModule } from './shared/components/employee-form/employee-form.module';

@NgModule({
  declarations: [
	AppComponent, NavbarComponent
  
	
  ],
  imports: [
	BrowserModule,
	AppRoutingModule,
	ReactiveFormsModule,
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireAuthModule,
  EmployeeFormModule,
  
  
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
