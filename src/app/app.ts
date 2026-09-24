import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Demo App');
  name  = '';
  displayInput = '';
  email = '';
  displayEmail = '';

  getValue(event:Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  getInputValue(){
    this.displayInput = this.name;
  }

  setInputValue(){
    this.name = 'Rahul';
  }

  getEmail(val:string){
    this.displayEmail = val;
  }
  setEmail(){
    this.email = 'rahul@example.com'
  }
}
  