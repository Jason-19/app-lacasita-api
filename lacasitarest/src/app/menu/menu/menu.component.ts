import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../../types';
import { RouterLink,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  products: Product[] = [
    // {
    //   nombre: 'Hambuerguesa TEST',
    //   descripcion: 'Hambuerguesa acompañadas de papas fritas',
    //   precio: 7,
    //   stock: 20,
    //   disponible: true
    // }
  ]
  
  constructor(private api: ProductService, private route:Router, private toast: ToastrService) {
    this.get_products_api()
  }

  // GET PRODUCTOS CON LA API LOCAL 
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
          this.toast.error('Error inesperado. Por favor, inténtelo de nuevo.');
        }
        console.log('Error al obtener los productos', err);
      }
    }); 
  }

  // AÑADIR LOS PRODUCTOS DEL MENU 
  add_product(product:Product) {
    this.route.navigate(['/product']);

    this.toast.success('Añadida', '', {
      timeOut: 1000,
    });
  }

}
