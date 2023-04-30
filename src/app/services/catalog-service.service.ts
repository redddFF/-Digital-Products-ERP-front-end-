import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CatalogServiceService {
  apiUrl: string = 'http://localhost:8080';
  constructor(private http:HttpClient) { 
  }

  listCatalogs():Observable<any>
{
return this.http.get(this.apiUrl + '/getCatalogs') ;
}

getCatalog(id:any)
{
return this.http.get(this.apiUrl+'/catalog/' +id) ; 
}
}
