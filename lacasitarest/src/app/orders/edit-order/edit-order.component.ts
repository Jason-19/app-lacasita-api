import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { items,order} from '../../../types';

  


@Component({
  selector: 'app-edit-order',
  standalone: true,
  imports: [NgFor],
  templateUrl: './edit-order.component.html',
  styleUrl: './edit-order.component.css'
})

export class EditOrderComponent {

  order!: order 
  items!: items[]

  constructor(private activatedroute: ActivatedRoute) {

    // optenemos this. order con los query paremetros de la ruta activa 
    this.activatedroute.queryParams.subscribe(params => {
      this.order = JSON.parse(params['data']) as order
    });

  }

}
