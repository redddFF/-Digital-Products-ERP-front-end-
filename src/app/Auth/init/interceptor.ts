import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private keycloakService: KeycloakService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.keycloakService.getKeycloakInstance().authenticated) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.keycloakService.getKeycloakInstance().token}`
        }
      });
    }
    return next.handle(request);
  }
}

