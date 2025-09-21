import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
  popular?: boolean;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class Services {
  services: Service[] = [
    {
      id: 'consultation',
      title: 'Development Consultation',
      description: 'Get expert advice on your Angular project architecture, best practices, and technical decisions.',
      features: [
        'Technical architecture review',
        'Code quality assessment',
        'Performance optimization recommendations',
        'Best practices guidance',
        'Technology stack recommendations'
      ],
      price: '$50/hour',
      duration: '1-2 hours'
    },
    {
      id: 'component',
      title: 'Custom Component Development',
      description: 'Build reusable Angular components tailored to your specific needs.',
      features: [
        'Custom Angular components',
        'Responsive design',
        'TypeScript implementation',
        'Unit testing included',
        'Documentation provided'
      ],
      price: '$200-500',
      duration: '1-3 days',
      popular: true
    },
    {
      id: 'full-app',
      title: 'Complete Web Application',
      description: 'End-to-end Angular application development from concept to deployment.',
      features: [
        'Full Angular application',
        'Responsive design',
        'API integration',
        'Authentication system',
        'Testing & deployment',
        '3 months support'
      ],
      price: '$2,000-8,000',
      duration: '2-8 weeks'
    },
    {
      id: 'maintenance',
      title: 'Application Maintenance',
      description: 'Ongoing support and maintenance for your existing Angular applications.',
      features: [
        'Bug fixes and updates',
        'Security patches',
        'Performance monitoring',
        'Feature enhancements',
        'Monthly reports'
      ],
      price: '$500/month',
      duration: 'Ongoing'
    }
  ];

  contactForQuote(service: Service) {
    const subject = `Quote Request - ${service.title}`;
    const body = `Hi Bassam,\n\nI'm interested in your ${service.title} service.\n\nProject details:\n- Budget: ${service.price}\n- Timeline: ${service.duration}\n- Additional requirements:\n\nPlease provide more information about this service.\n\nBest regards,`;
    
    window.open(`mailto:bassam251295@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  }
}


