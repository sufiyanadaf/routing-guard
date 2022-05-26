import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HeaderComponent } from './Dummy app/header/header/header.component';
import { LeftNavComponent } from './Dummy app/left-nav/left-nav/left-nav.component';
import { RightNavComponent } from './Dummy app/right-nav/right-nav/right-nav.component';
import { BodyComponent } from './Dummy app/body/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    DashboardComponent,
    HeaderComponent,
    LeftNavComponent,
    RightNavComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
