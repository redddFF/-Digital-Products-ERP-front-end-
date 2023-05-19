import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogServiceService } from 'src/app/services/catalog-service.service';

@Component({
  selector: 'app-update-catalog',
  templateUrl: './update-catalog.component.html',
  styleUrls: ['./update-catalog.component.scss']
})
export class UpdateCatalogComponent implements OnInit {
  formvalue!: FormGroup
  currentCatalog:any  ; 
  constructor(private routes: Router, private formBuilder: FormBuilder, private catalogService: CatalogServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadCatalog()


    this.formvalue = this.formBuilder.group(
      {
        businessLine: ['', Validators.required],
        description: ['', Validators.required],
      }
    )

  }


  loadCatalog()
  {
    
    this.catalogService.getCatalog(this.activatedRoute.snapshot.paramMap.get('id')).subscribe((data:any)=>{
      this.currentCatalog=data ; 
      console.log(this.currentCatalog)
    })
  
  }

  onSubmit() {

    const catalog = {
      businessLine: this.formvalue.value.businessLine,
      description: this.formvalue.value.description,
    }
    this.catalogService.updateCatalog(catalog,this.currentCatalog.catalog_id).subscribe((data: any) => {
     
      
      this.routes.navigate(['/catalog/',this.currentCatalog.catalog_id]); 
    })


  }

}
