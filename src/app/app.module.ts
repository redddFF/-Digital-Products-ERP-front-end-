import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { BankingComponent } from './pages/banking/banking.component';
import { InsuranceComponent } from './pages/insurance/insurance.component';
import { DetailsProductComponent } from './pages/details-product/details-product.component';
import { AddProductInsuranceComponent } from './pages/add-product-insurance/add-product-insurance.component';

import { AddProductBankComponent } from './pages/add-product-bank/add-product-bank.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    BankingComponent,
    InsuranceComponent,
    DetailsProductComponent,
    AddProductInsuranceComponent,
    AddProductBankComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
