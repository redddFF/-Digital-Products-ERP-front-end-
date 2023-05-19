import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogServiceService } from 'src/app/services/catalog-service.service';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  base64String: any;
  headers: any;
  name: any
  data: any
  public techsBack: any[];
  public techsFront: any[];
  public techsDataBase: any[];
  selectedFile: File;
  technologiesIds: [];
  resourcesIds: [];

  id: any;
  res1: any;
  res2: any;
  res3: any;
  tech1: any;
  tech2: any;
  tech3: any;

  technologies = [
    { id: 1, name: 'AngularJs', type: 'Front-end' },
    { id: 2, name: 'VueJS', type: 'Front-end' },
    { id: 3, name: 'ReactJs', type: 'Front-end' },
    { id: 4, name: 'Java', type: 'Back-end' },
    { id: 5, name: 'Python', type: 'Back-end' },
    { id: 6, name: 'Laravel', type: 'Back-end' },
    { id: 7, name: 'Nodejs', type: 'Back-end' },
    { id: 8, name: 'MySQL', type: 'Database' },
    { id: 9, name: 'PostgreSQL', type: 'Database' },
    { id: 10, name: 'MongoDB', type: 'Database' },
    { id: 11, name: 'Oracle', type: 'Database' },
    { id: 12, name: 'MariaDB', type: 'Database' }


  ];


  formvalue!: FormGroup
  currentProduct: any;
  constructor( private routes: Router, private formBuilder: FormBuilder, private productService: ProductServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  
    this.loadProduct()
    
    this.techsBack = this.technologies.filter(technology => technology.type == 'Back-end');
    this.techsFront = this.technologies.filter(technology => technology.type == 'Front-end');
    this.techsDataBase = this.technologies.filter(technology => technology.type == 'Database');

    this.formvalue = this.formBuilder.group(
      {
        name: ['', Validators.required],
        description: ['', Validators.required],
        version: ['', Validators.required],
        testStatus: ['', Validators.required],
        resource1: ['', Validators.required],
        resource2: ['', Validators.required],
        resource3: ['', Validators.required],
        tech1: ['', Validators.required],
        tech2: ['', Validators.required],
        tech3: ['', Validators.required],
      }
    )

  }


  onFileSelected(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result.toString().split(',')[1]; // remove data:image/*;base64, from the beginning of the string
      this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.name = file.name;
      this.data = base64String;
    };
  }
 
 

  loadProduct() {
    this.productService.getProduct(this.route.snapshot.paramMap.get('id_product')).subscribe((data: any) => {
      this.currentProduct = data;
    })
  }

  onSubmit() {





    const product = {
      name: this.formvalue.value.name,
      description: this.formvalue.value.description,
      version: this.formvalue.value.version,
      testStatus: this.formvalue.value.testStatus,
      technologiesIds: [],
      resourcesIds: [],
      fileName: this.name,
      data: this.data,
    }

    if (this.formvalue.value.resource1 == true) {
      this.res1 = 1;
      product.resourcesIds.push(parseInt(this.res1))
    }
    if (this.formvalue.value.resource2 == true) {
      this.res2 = 2;
      product.resourcesIds.push(parseInt(this.res2))
    }
    if (this.formvalue.value.resource3 == true) {
      this.res3 = 3;
      product.resourcesIds.push(parseInt(this.res3))
    }

    if (this.formvalue.value.tech1) {
      product.technologiesIds.push(parseInt(this.formvalue.value.tech1));
    }
    if (this.formvalue.value.tech2) {
      product.technologiesIds.push(parseInt(this.formvalue.value.tech2));
    }
    if (this.formvalue.value.tech3) {
      product.technologiesIds.push(parseInt(this.formvalue.value.tech3));
    }


    console.log(product)

    this.productService.updateProduct(this.currentProduct.catalog.catalog_id,product,this.currentProduct.product_id).subscribe((data: any) => {

      this.routes.navigate(['/dashboard']);
    })


  }

}
