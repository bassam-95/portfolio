import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value to account for fixed header height
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }
}
