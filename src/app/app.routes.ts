import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Skills } from './pages/skills/skills';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { 
    path: '', 
    component: Home,
    title: 'Home - My Portfolio'
  },
  { 
    path: 'about', 
    component: About,
    title: 'About Me'
  },
  { 
    path: 'skills', 
    component: Skills,
    title: 'My Skills'
  },
  { 
    path: 'contact', 
    component: Contact,
    title: 'Contact Me'
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];