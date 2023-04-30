import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {

  currentProduct:any ; 
  constructor(private productService : ProductServiceService,private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.getCurrentProduct()
   console.log(this.currentProduct)
   console.log(this.route.snapshot.paramMap.get('id'))
   }
  getCurrentProduct(){
    this.productService.getProduct(this.route.snapshot.paramMap.get('id')).subscribe((data:any)=>{
      this.currentProduct=data ; 
      console.log(this.currentProduct)
    })
   }
}
