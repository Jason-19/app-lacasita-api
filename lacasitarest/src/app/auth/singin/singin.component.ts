import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-singin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './singin.component.html',
  styleUrl: './singin.component.css'
})
export class SinginComponent {

  singin: FormGroup;
  constructor(private fb:FormBuilder){
    this.singin = this.fb.group({

    })
  }




  
}
