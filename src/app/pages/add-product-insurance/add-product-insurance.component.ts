import { Component ,OnInit} from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-add-product-insurance',
  templateUrl: './add-product-insurance.component.html',
  styleUrls: ['./add-product-insurance.component.scss']
})
export class AddProductInsuranceComponent implements OnInit{ 
  public techsBack: any[];
  public techsFront: any[];
  public techsDataBase: any[];
  id :any ; 
  res1:any ; 
  res2:any ; 
  res3:any ; 
  tech1:any  ; 
  tech2:any ; 
  tech3:any ; 

   technologies = [
    { id: 1, name: 'AngularJs',  type: 'Front-end'},
    { id: 2, name: 'VueJS',  type: 'Front-end'},
    { id: 3, name: 'ReactJs',  type: 'Front-end'},
    { id: 4, name: 'Java',  type: 'Back-end'},
    { id: 5, name: 'Python',  type: 'Back-end'},
    { id: 6, name: 'Laravel',  type: 'Back-end'},
    { id: 7, name: 'Nodejs',  type: 'Back-end'},
    { id: 8, name: 'MySQL',  type: 'Database'},
    { id: 9, name: 'PostgreSQL',  type: 'Database'},
    { id: 10, name: 'MongoDB',  type: 'Database'},
    { id: 11, name: 'Oracle',  type: 'Database'},
    { id: 12, name: 'MariaDB',  type: 'Database'}

   
];


  formvalue!:FormGroup
  constructor(private routes:Router,private formBuilder:FormBuilder,private productService:ProductServiceService,private activatedRoute: ActivatedRoute){}

ngOnInit(): void {

  this.techsBack = this.technologies.filter(technology => technology.type=='Back-end');
  this.techsFront = this.technologies.filter(technology => technology.type=='Front-end');
  this.techsDataBase = this.technologies.filter(technology => technology.type=='Database');
 
  this.formvalue=this.formBuilder.group(
    {
    name:['',Validators.required],
    description :['',Validators.required],
    version :['',Validators.required], 
    testStatus  :['',Validators.required], 
    resource1  :['',Validators.required], 
    resource2  :['',Validators.required], 
    resource3  :['',Validators.required], 
    tech1  :['',Validators.required], 
    tech2  :['',Validators.required], 
    tech3  :['',Validators.required], 
  }
    )
    
}
product = {
  name:'',
  description:'', 
  version:'' , 
  testStatus:'',
  technologiesIds:[],
  resourcesIds:[]

}
onSubmit(){

  this.product={
    name:this.formvalue.value.name,
    description:this.formvalue.value.description, 
    version:this.formvalue.value.version , 
    testStatus:this.formvalue.value.testStatus ,
    technologiesIds:[],
    resourcesIds:[]
  }

  if (this.formvalue.value.resource1 == true)
  {
    this.res1=1 ;
    this.product.resourcesIds.push(this.res1) 
  }
  if (this.formvalue.value.resource2 == true)
  {
    this.res2=1 ; 
    this.product.resourcesIds.push(this.res2) 
  }
  if (this.formvalue.value.resource3 == true)
  {
    this.res3=1 ; 
    this.product.resourcesIds.push(this.res3) 
  } 
if (this.formvalue.value.tech1){
  this.product.technologiesIds.push(this.formvalue.value.tech1) ; 
}
if (this.formvalue.value.tech2){
  this.product.technologiesIds.push(this.formvalue.value.tech2) ; 
}
if (this.formvalue.value.tech3){
  this.product.technologiesIds.push(this.formvalue.value.tech3) ; 
}


console.log(this.product.technologiesIds)
console.log(this.product)
  this.productService.AddProduct(2,this.product).subscribe((data :any)=>{
 
  this.routes.navigate(['/insurance/2']) ; 
})    
}

}

