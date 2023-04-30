import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CatalogServiceService } from 'src/app/services/catalog-service.service';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})

export class BankingComponent implements OnInit {
  products: any;
currentCatalog:any ; 
constructor(private router: Router,private route: ActivatedRoute,private productService:ProductServiceService, private catalogService : CatalogServiceService) {}



ngOnInit(): void {
  
 this.loadProducts()
 this.loadCatalog()


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
  
  this.catalogService.getCatalog(1).subscribe((data:any)=>{
    this.currentCatalog=data ; 
    console.log(this.currentCatalog)
  })
}



}
