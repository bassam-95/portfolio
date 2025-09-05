import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer {
  currentYear = new Date().getFullYear();
  
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
