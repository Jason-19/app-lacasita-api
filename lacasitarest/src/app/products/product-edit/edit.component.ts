import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../types';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  // form 
  form_product: FormGroup

  name!: string
  description!: string
  price!: number
  stock!: number
  available!: boolean

  product:Product[] = []

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastrService
  ) {

    // obtener parametros desde la url
    this.route.params.subscribe(params=>{
      this.name = params['name']
      this.description =params['description'] || '';
      this.price = +params['price']; 
      this.stock = params['stock'] ? +params['stock'] : 0,
      this.available =params['available'] === 'true'
      
    });
    
    
    this.form_product = this.fb.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl(0, Validators.required),
      stock: new FormControl(0, Validators.required),
      available: new FormControl(false, Validators.required),
    });

  }

  // update
  guardar() {
    if(this.form_product.invalid){ 
      return
    }
    this.toast.success("Guardado","",{
      timeOut:1000,
      closeButton:true,
      progressBar:true,
      tapToDismiss:true,
    });

    console.table(this.form_product.value);
  }

  cancelar() {
    this.router.navigate(['/products']);
  }
}
