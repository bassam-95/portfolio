import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Skills } from "./pages/skills/skills";
import { Contact } from "./pages/contact/contact";
import { Projects } from "./pages/projects/projects";


@Component({
  selector: 'app-root',
  imports: [Header, Footer, Home, About, Skills, Contact,Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
