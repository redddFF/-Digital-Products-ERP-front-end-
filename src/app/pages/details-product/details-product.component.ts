import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { Product } from 'src/app/models/product.model';
import { CatalogServiceService } from 'src/app/services/catalog-service.service';
import { DockerService } from 'src/app/services/docker.service';
import { ProductServiceService } from 'src/app/services/product-service.service';



@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {

 
  currentCatalog:any ; 
  currentProduct:any ;
  roles:any ;  
  constructor(private dockerService : DockerService,private keycloakService: KeycloakService,private routes:Router,private productService : ProductServiceService,private catalogService :CatalogServiceService,private route: ActivatedRoute){
  
  }
  
  ngOnInit(): void {
    this.loadRoles() ; 
    this.getCurrentProduct()
    this.loadCatalog() ; 
  

   }
   loadRoles(){
    this.roles=this.keycloakService.getUserRoles()
  console.log(this.roles)
  }
   loadCatalog()
{
  
  this.catalogService.getCatalog(this.route.snapshot.paramMap.get('id_catalog')).subscribe((data:any)=>{
    this.currentCatalog=data ; 
    console.log(this.currentCatalog)
  })

}
  getCurrentProduct(){
    this.productService.getProduct(this.route.snapshot.paramMap.get('id_product')).subscribe((data:any)=>{
      this.currentProduct=data ; 
      console.log(this.currentProduct)
    })
   }
   deleteProduct(){
    this.productService.deleteProduct(this.currentProduct.product_id).subscribe(data=>{
      this.routes.navigate(['/catalog/',this.route.snapshot.paramMap.get('id_catalog')]) ; 
    })
   }

startContainer(){
this.dockerService.pullImage(this.currentProduct.imageName) ; 
this.dockerService.runImage(this.currentProduct.imageName)
}
   

}
