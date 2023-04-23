import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { AddProductComponent } from './pages/add-product/add-product.component';
import { DetailsProductComponent } from './pages/details-product/details-product.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
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
    AddProductComponent,
    DetailsProductComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
