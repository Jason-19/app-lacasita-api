import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  mobileMenuOpen = false
  profileMenuOpen = false


  toggleMobileMenu(){
    
    this.mobileMenuOpen = !this.mobileMenuOpen;
    setTimeout(() => {
      this.mobileMenuOpen = false;
    }, 4000); 
   
  }


  ProfileMenu(){
    this.profileMenuOpen = !this.profileMenuOpen;

    setTimeout(() => {
      this.profileMenuOpen = !this.profileMenuOpen;
    }, 3000);
  }
  
}
