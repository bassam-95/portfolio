import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  project: string;
  avatar?: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.css']
})
export class Testimonials {
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Project Manager",
      company: "TechStart Solutions",
      content: "Bassam delivered an exceptional Angular application that exceeded our expectations. His attention to detail, clean code practices, and timely delivery made him a pleasure to work with. Highly recommended!",
      rating: 5,
      project: "E-commerce Platform"
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      role: "CEO",
      company: "Digital Innovations",
      content: "Working with Bassam was a game-changer for our project. His expertise in Angular and TypeScript helped us build a robust, scalable application. Professional, reliable, and always available for support.",
      rating: 5,
      project: "Business Management System"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "Frontend Lead",
      company: "Creative Agency",
      content: "Bassam's technical skills and problem-solving abilities are outstanding. He transformed our complex requirements into a beautiful, user-friendly application. Will definitely work with him again!",
      rating: 5,
      project: "Portfolio Website"
    },
    {
      id: 4,
      name: "David Chen",
      role: "Startup Founder",
      company: "InnovateLab",
      content: "Bassam helped us build our MVP in record time. His Angular expertise and responsive design skills created a product our users love. Great communication throughout the project.",
      rating: 5,
      project: "SaaS Application"
    },
    {
      id: 5,
      name: "Fatima Al-Zahra",
      role: "Product Owner",
      company: "EduTech Solutions",
      content: "Exceptional developer with a deep understanding of modern web technologies. Bassam delivered a complex educational platform that handles thousands of users seamlessly. Highly professional!",
      rating: 5,
      project: "Learning Management System"
    },
    {
      id: 6,
      name: "Michael Thompson",
      role: "CTO",
      company: "FinanceApp Inc",
      content: "Bassam's Angular development skills are top-notch. He built our financial dashboard with complex data visualizations and real-time updates. Clean code, excellent documentation, and ongoing support.",
      rating: 5,
      project: "Financial Dashboard"
    }
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}


