import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  apiUrl: string = 'http://localhost:8081';
  constructor(private http:HttpClient) { 
  }
AddProduct(id:any,Product:any){
  var headers = new HttpHeaders({
    "Content-Type": "application/json","Accept": "application/json"
}); 
  return this.http.post(this.apiUrl+`/api/catalogs/${id}/addProduct`,Product) ; 
}

listProducts():Observable<Product>
{
return this.http.get(this.apiUrl+'/api/getProducts') ;
}
getProduct(id:any)
{
return this.http.get(this.apiUrl+'/api/product/' +id) ; 
}
deleteProduct(id:any){
  return this.http.delete(this.apiUrl+'/api/deleteProduct/'+id) ;

}

updateProduct(catalog_id:any,product:any,id:any){
return this.http.put(this.apiUrl+'/api/'+catalog_id+'/product/'+id ,product,id)  ; 
}


}
