import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiveToast } from 'ngx-toastr';
import { Product } from '../../../types';

@Component({
  selector: 'app-edit-menu',
  standalone: true,
  imports: [],
  templateUrl: './edit-menu.component.html',
  styleUrl: './edit-menu.component.css'
})
export class EditMenuComponent {

  product_menu: Product[] = []
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.get_data_url(router)
  }


  // datos de url   
  get_data_url(router:Router) {
    this.route.snapshot.paramMap.get('id');
  }

}
