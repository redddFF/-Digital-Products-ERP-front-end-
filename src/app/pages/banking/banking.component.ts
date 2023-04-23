import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})

export class BankingComponent implements OnInit {
constructor(private productService:ProductServiceService) {}

products:any= [];

ngOnInit(): void {
 this.loadProducts()


}

loadProducts()
{
  this.productService.listProducts().subscribe((data:any)=>{
console.log(data) 
  })
}



}
