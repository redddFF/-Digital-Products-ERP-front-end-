import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { KeycloakService } from 'keycloak-angular';
@Injectable({
  providedIn: 'root'
})
export class CatalogServiceService {
  apiUrl: string = 'http://localhost:8081';
  constructor(private http: HttpClient, private keycloakService: KeycloakService) {}

  listCatalogs(): Observable<any> {

    return this.http.get<any>(this.apiUrl + '/api/getCatalogs');
  }

getCatalog(id:any)
{

  
return this.http.get(this.apiUrl+'/api/catalog/' +id) ; 
}

addCatalog(catalog:any){
  return this.http.post(this.apiUrl+'/api/addCatalog',catalog) ; 
}
deleteCatalog(id:any){
  return this.http.delete(this.apiUrl+'/api/deleteCatalog/'+id) ; 

}
updateCatalog(catalog:any,id:any){
return this.http.put(this.apiUrl+'/api/catalog/'+id,catalog,id) ; 
}
}
