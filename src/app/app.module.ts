import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './comps/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from './comps/register/register.component';
import { AllTripComponent } from './comps/all-trip/all-trip.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeComponent } from './comps/home/home.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatSelectModule } from '@angular/material/select';
import { NavComponent } from './comps/nav/nav.component';
import { MyPersonalComponent } from './comps/my-personal/my-personal.component';
import { DetailsComponent } from './comps/details/details.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './comps/dialog/dialog.component';
import { AllUserComponent } from './comps/all-user/all-user.component';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AllTripComponent,
    HomeComponent,
    NavComponent,
    MyPersonalComponent,
    DetailsComponent,
    DialogComponent,
    AllUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    HttpClientModule,
    MatTabsModule,
    MatIconModule,
    FormsModule,
    MatChipsModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatExpansionModule,
    MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule,
    MatButtonModule, MatDialogModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
