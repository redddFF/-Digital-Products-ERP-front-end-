import { Component, OnInit ,OnChanges, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { CatalogServiceService } from 'src/app/services/catalog-service.service';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-display-catalog',
  templateUrl: './display-catalog.component.html',
  styleUrls: ['./display-catalog.component.scss']
})
export class DisplayCatalogComponent implements OnInit {
  @Input() fetchData: boolean;
  products: any;
currentCatalog:any ; 
constructor(private keycloakService: KeycloakService, private routes: Router,private route: ActivatedRoute,private productService:ProductServiceService, private catalogService : CatalogServiceService) {}
roles:any 

ngOnInit(): void {
  this.loadRoles()
  this.route.paramMap.subscribe(params => {
  const catalogId = params.get('id');
  this.loadCatalog()
  this.loadProducts()
  });
}
loadRoles(){
  this.roles=this.keycloakService.getUserRoles()
console.log(this.roles)
}


loadProducts()
{
  
 this.productService.listProducts().subscribe((data:any)=>{
    this.products=data ; 
    console.log(this.products)
  })

}

loadCatalog()
{
  
  this.catalogService.getCatalog(this.route.snapshot.paramMap.get('id')).subscribe((data:any)=>{
    this.currentCatalog=data ; 
    console.log(this.currentCatalog)
  })

}

deleteCatalog(){
  this.catalogService.deleteCatalog(this.currentCatalog.catalog_id).subscribe(data=>{
    this.routes.navigate(['dashboard']) ; 
  })
 }

}
