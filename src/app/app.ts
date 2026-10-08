import { Component, signal,computed  } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  count = signal(0);
  x = signal(10);
  y = signal(20);
  z = computed(() => this.x() + this.y());

  showValue() {
    console.log(this.z());
    this.x.set(this.x() + 5);
  }

}
