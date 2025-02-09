import { Component } from '@angular/core';
import { Customer } from '../../../types';
import { NgFor, NgIf } from '@angular/common';
import { CustomerService } from '../../services/customer/customer.service';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  constructor(private api: CustomerService) {
    this.get_user()
  }

  customers: Customer[] = []
  errMessage = ''

  //  api get users fuction 
  async  get_user() {
   this.api.get().subscribe(
    {
      next: (response)=>{
        this.customers = response;
        console.table(this.customers)
        this.errMessage =''
      },
      error: (err)=>{ 
        if (err.status === 404) {
          this.errMessage = 'Recurso no encontrado.';
        } else if (err.status === 500) {
          this.errMessage = 'Error del servidor. Por favor, inténtelo de nuevo más tarde.';
        } else {
          this.errMessage = 'Error inesperado. Por favor, inténtelo de nuevo.';
        }
        console.log(err)
      }
    }
   );
  }


}
