import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  apiUrl: string = 'http://localhost:8080';
  constructor(private http:HttpClient) { 
  }
AddProduct(Product:any){
  return this.http.post(this.apiUrl+'/addProduct',Product) ; 
}

listProducts()
{
return this.http.get(this.apiUrl + '/getProducts') ;
}
getProduct(id:any)
{
return this.http.get(this.apiUrl+'/product/' +id) ; 
}
deleteProduct(id:any){
  return this.http.delete(this.apiUrl+'/deleteProduct/'+id) ;

}

updateProduct(product:any,id:any){
return this.http.put(this.apiUrl+'/product/'+id ,product,id)  ; 
}


}
