import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { DetailsProductComponent } from './pages/details-product/details-product.component';


import { SettingsComponent } from './pages/settings/settings.component';
import { AddCatalogComponent } from './pages/add-catalog/add-catalog.component';
import { DisplayCatalogComponent } from './pages/display-catalog/display-catalog.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { UpdateCatalogComponent } from './pages/update-catalog/update-catalog.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { TokenInterceptor } from './Auth/init/interceptor';
import { AuthService } from './services/auth.service';






function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'vermeg-realm',
        clientId: 'client-side'
      },
      initOptions: {
        
      }
    });
    
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,KeycloakAngularModule,
    [CommonModule]
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    DetailsProductComponent,
    SettingsComponent,
    AddCatalogComponent,
    DisplayCatalogComponent,
    AddProductComponent,
    UpdateCatalogComponent,
    UpdateProductComponent,
   
  ],
  providers: [
    AuthService,
    KeycloakService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService],
  },  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
