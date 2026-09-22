import { Component, signal } from '@angular/core';
import { Home } from './home/home';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [Home,Header],
  styleUrl: './app.css',
  templateUrl: './app.html',
  // template: '<h1>{{title()}}</h1><h2>{{name}}</h2>', this was inline template, but now we are using external template file
})
export class App {
  protected readonly title = signal('Demo App');
  name = 'Rahul';
}
  