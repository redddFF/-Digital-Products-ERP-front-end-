import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogServiceService } from 'src/app/services/catalog-service.service';
import { HttpClient, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}


export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Home',  icon: 'ni-tv-2 text-primary', class: '' },
  //  { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
 //   { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
   // { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' },
    // { path: '/settings', title: 'Settings',  icon:'ni ni-settings', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  subscription: Subscription;
  public catalogs: any[] ; 
  public isCollapsed = true;

  constructor(private keycloakService: KeycloakService,private router: Router,private catalogService:CatalogServiceService) { }
roles:any ; 
  ngOnInit() {
      this.loadRoles() ; 
      this.loadCatalogs() ; 
      this.menuItems = ROUTES.filter(menuItem => menuItem);
      this.router.events.subscribe((event) => {
      this.isCollapsed = true;
      this.loadCatalogs();

      // Poll for new data every 10 seconds
       this.subscription = interval(10000).subscribe(() => {
        this.loadCatalogs();
       });
   });
  }
  ngOnDestroy(): void {
    // Unsubscribe from the polling interval when the component is destroyed
    this.subscription.unsubscribe();
  }
  async loadCatalogs(){
    const data =  await this.catalogService.listCatalogs().toPromise();
    if (JSON.stringify(this.catalogs) !== JSON.stringify(data)) {
      this.catalogs = data;
      console.log(this.catalogs);
    }
     
    
  }
  loadRoles(){
    this.roles=this.keycloakService.getUserRoles()
  console.log(this.roles)
  }
}
