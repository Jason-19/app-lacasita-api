import { JsonPipe, NgIf } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { Customer } from '../../../types';
import { CustomerService } from '../../services/customer/customer.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  form_login: FormGroup;


  constructor(private fb: FormBuilder, private router: Router, private user_api: CustomerService) {
    
    this.form_login = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });

    this.get_user()
  }

  customer: Customer[] = []
  message = ''

  // api get users v2
  async get_user() {
    try {
      const data_user = await this.user_api.get().toPromise()
      this.customer = data_user;
      console.log('API ALREADY')
    } catch (err:any) {
      if (err.status === 404) {
        this.message = 'Recurso no encontrado.';
      } else if (err.status === 500) {
        this.message = 'Error del servidor. Por favor, inténtelo de nuevo más tarde.';
      } else {
        this.message = 'Error inesperado. Por favor, inténtelo de nuevo.';
      }
      console.log('Error ', err);
    }
  }



  // validar 
  async login(){

    if (this.form_login.invalid) {
      return;
    }
    const { email: mail, password: pass } = this.form_login.value;
    
    // if (this.customer.length === 0) {
    //   await this.get_user(); 

    const user = this.customer.find(customer => customer.email === mail && customer.password_has === pass);

    if(user){
      this.router.navigate(['/products']);
      
      console.log('api', user);
      console.log('Correo:', mail);
      console.log('Contraseña:', pass);
    }
    else{

      console.log('api', user);
      console.log('Correo:', mail);
      console.log('Contraseña:', pass);
      
    }




  }

}
