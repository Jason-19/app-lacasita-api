import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  form_product_create: FormGroup

  // 
  name!: string
  descripcion!: string
  precio!: number
  stock!: number
  disponible!: boolean

  product: Product[] = []

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private toast: ToastrService
  ) {

    // products del form 
    this.form_product_create = this.fb.group({
      name: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      precio: new FormControl(0, Validators.required),
      stock: new FormControl(0, Validators.required),
      disponible: new FormControl(false, Validators.required),
    });
  }
  guardar() {
    if(this.form_product_create.invalid){
      this.toast.error('Invalid Form','Campos en blanco')
      return
    }
    else{
      this.product.push(this.form_product_create.value)
      console.log(this.product)
      console.log(this.form_product_create.value)
    }
  }
  cancelar() {
    this.route.navigate(['/products'])
  }







}
