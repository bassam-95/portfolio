import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  description: string;
  progress: number;
  targetProgress: number;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular',
      description: 'Modern web development framework for building single-page applications',
      progress: 0,
      targetProgress: 75,
      icon: 'A'
    },
    {
      name: 'TypeScript',
      description: 'Strongly typed programming language that builds on JavaScript',
      progress: 0,
      targetProgress: 70,
      icon: 'TS'
    },
    {
      name: 'HTML/CSS',
      description: 'Core web technologies for structure and styling',
      progress: 0,
      targetProgress: 95,
      icon: 'HC'
    },
    {
      name: 'JavaScript',
      description: 'Versatile programming language for web development',
      progress: 0,
      targetProgress: 80,
      icon: 'JS'
    },
    {
      name: 'Responsive Design',
      description: 'Creating layouts that work across all devices and screen sizes',
      progress: 0,
      targetProgress: 85,
      icon: 'RD'
    },
    {
      name: 'UI/UX Design',
      description: 'User interface and experience design principles',
      progress: 0,
      targetProgress: 80,
      icon: 'UX'
    }
  ];

  ngOnInit() {
    this.animateProgressBars();
  }

  animateProgressBars() {
    this.skills.forEach((skill, index) => {
      setTimeout(() => {
        this.animateSkill(skill);
      }, index * 100);
    });
  }

  animateSkill(skill: Skill) {
    const duration = 1500; // 1.5 seconds
    const steps = 100;
    const increment = skill.targetProgress / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= skill.targetProgress) {
        skill.progress = skill.targetProgress;
        clearInterval(interval);
      } else {
        skill.progress = Math.round(current);
      }
    }, duration / steps);
  }
}
