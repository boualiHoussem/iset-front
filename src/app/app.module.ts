import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankListComponent } from './components/bank-components/bank-list/bank-list.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { AddBankComponent } from './components/bank-components/add-bank/add-bank.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BankService} from './services/bank.service';

@NgModule({
  declarations: [
    AppComponent,
    BankListComponent,
    HomeComponent,
    AddBankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
