import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { OrderService } from '../../services/orders/order.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [NgIf, NgFor,NgClass,RouterLink],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})

export class OrdersComponent {

  constructor(private api:OrderService, private router:Router){
    this.get_products();
  }

  orders = [
    {
      "nombre":"Order-001",
      "fecha": "04-02-2025",
      "tipo_entrega": "aqui",
      "total": 24.99,
      "estado": "completed",
      items: [
        {
          "cantidad": 1,
          "precio_unitario": 5,
          "item_id": 1
        }
      ]
    },
    {
      "nombre":"Order-002",
      "fecha": "05-02-2024",
      "tipo_entrega": "llevar",
      "total": 4.99,
      "estado": "Listo",
      items: [
        {
          "cantidad": 1,
          "precio_unitario": 5,
          "item_id": 1
        }
      ]
    },



  ]
  title = 'La Casita Restaurant & Garden'
  
  // ngOnInit(): void {
  //     this.get_products();
  // }
  get_products():void{
    this.api.get().subscribe( {
        next: (data)=>{
          this.orders = data;
        },
        error: (error)=>{
          console.log(error)//'Error al obtener los productos';
        }
      }
    )
  }


  edit_order(order:any){
    const encodedOrder = encodeURIComponent(JSON.stringify(order)); 
    this.router.navigate(['/order/edit/'],{queryParams:{data:JSON.stringify(order)}});
  }
}
