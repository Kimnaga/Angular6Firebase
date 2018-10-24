import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../shared/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  submitted:boolean;
  showSuccessMessage:boolean;
  formControls = this.customerService.form.controls;
  constructor(private customerService : CustomerService) { }


  ngOnInit() {
  }
  onSubmit(){
    this.submitted = true;
    //console.log ("inside submit");
    if (this.customerService.form.valid){
      if (this.customerService.form.get('$key').value==null){
        this.customerService.insertCustomers(this.customerService.form.value);
        this.showSuccessMessage =true;
        setTimeout(()=>this.showSuccessMessage=false,3000);
      } else {
        //update
        this.customerService.updateCustomer (this.customerService.form.value);
      }
    }
    this.submitted = false;
    this.customerService.form.reset();
  }

}
