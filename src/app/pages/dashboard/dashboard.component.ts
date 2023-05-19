import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

// core components


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private keycloakService:KeycloakService) {}
  roles:any ; 

  ngOnInit() {
console.log(this.keycloakService.getKeycloakInstance().token)
  }



}
