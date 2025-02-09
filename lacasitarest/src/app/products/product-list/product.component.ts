import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { NgIf, NgFor } from '@angular/common';
import { Product } from '../../../types';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private api: ProductService, private router: Router, private toast: ToastrService) { }

  products: Product[] = [
    // {
    //   nombre: 'Hambuerguesa TEST',
    //   descripcion: 'Hambuerguesa con peperoni acompañadas de papas fritas',
    //   precio: 7,
    //   stock: 20,
    //   disponible: true
    // } 
  ];
  
  // title = 'La Casita Restaurant & Garden'

  ngOnInit(): void {
    this.get_products_api();
  }


  get_products_api(): void {
    this.api.get().subscribe({
      next: (data) => {
        this.products = data
      },
      error: (err) => {
        if (err.status === 404) {
          this.toast.error('Recurso no encontrado.');
        } else if (err.status === 500) {
          this.toast.error('Error del servidor. Por favor, inténtelo de nuevo más tarde.');
        } else {
          this.toast.error('Error inesperado. Por favor, inténtelo de nuevo.','API');
        }
        console.log('Error al obtener los productos', err);
      }
    });
  }
  // edid product
  update_product(product: Product) {
    this.router.navigate(['/edit/product/', product])
    // this.router.navigate(['/edit', product.nombre, product.descripcion, product.precio, product.stock, product.disponible]);

  }

  create_product(){
    this.router.navigate(['create/product'])

  }
}
