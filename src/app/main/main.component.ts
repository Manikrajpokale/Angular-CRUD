import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  products = [
    { name: 'Product 1', price: 50 },
    { name: 'Product 2', price: 100 },
    { name: 'Product 3', price: 150 }
  ];
}
