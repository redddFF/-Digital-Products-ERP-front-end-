import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CatalogServiceService } from 'src/app/services/catalog-service.service';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {
  products: any;
  currentCatalog:any ; 
  constructor(private route: ActivatedRoute,private productService:ProductServiceService, private catalogService : CatalogServiceService) {}
  
  
  
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
    
    this.catalogService.getCatalog(2).subscribe((data:any)=>{
      this.currentCatalog=data ; 
      console.log(this.currentCatalog)
    })
  }
  
  
}
