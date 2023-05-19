import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogServiceService } from 'src/app/services/catalog-service.service';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-add-catalog',
  templateUrl: './add-catalog.component.html',
  styleUrls: ['./add-catalog.component.scss']
})
export class AddCatalogComponent implements OnInit {
  formvalue!: FormGroup
  constructor(private routes: Router, private formBuilder: FormBuilder, private catalogService: CatalogServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {



    this.formvalue = this.formBuilder.group(
      {
        businessLine: ['', Validators.required],
        description: ['', Validators.required],
      }
    )

  }




  onSubmit() {

    const catalog = {
      businessLine: this.formvalue.value.businessLine,
      description: this.formvalue.value.description,
    }
    this.catalogService.addCatalog(catalog).subscribe((data: any) => {
     
      
      this.routes.navigate(['/']); 
    })


  }

}
