import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  apiUrl: string = 'http://localhost:8080';
  constructor(private http:HttpClient) { 
  }
AddProduct(id:any,Product:any){
  var headers = new HttpHeaders({
    "Content-Type": "application/json","Accept": "application/json"
}); 
  return this.http.post(`http://localhost:8080/catalogs/${id}/addProduct`,Product) ; 
}

listProducts():Observable<Product>
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
