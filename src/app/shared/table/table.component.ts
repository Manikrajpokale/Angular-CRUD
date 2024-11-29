import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  products: any[] = [];
  productForm: FormGroup;
  editIndex: number | null = null;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      category: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Dummy data to start with
    this.products = [
      { name: 'Laptop', price: 1000, category: 'Electronics' },
      { name: 'Chair', price: 50, category: 'Furniture' },
      { name: 'Table', price: 150, category: 'Furniture' },
      { name: 'Mouse', price: 25, category: 'Electronics' },
      { name: 'Keyboard', price: 45, category: 'Electronics' },
      { name: 'Monitor', price: 300, category: 'Electronics' },
      { name: 'Fan', price: 20, category: 'Appliances' },
      { name: 'Phone', price: 600, category: 'Electronics' },
      { name: 'Headphones', price: 80, category: 'Electronics' },
      { name: 'Shirt', price: 25, category: 'Clothing' }
    ];
  }

  addOrUpdateProduct() {
    if (this.productForm.valid) {
      const product = this.productForm.value;

      if (this.editIndex === null) {
        this.products.push(product);
      } else {
        this.products[this.editIndex] = product;
        this.editIndex = null;
      }

      this.productForm.reset();
    }
  }

  editProduct(index: number) {
    this.editIndex = index;
    this.productForm.patchValue(this.products[index]);
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }
}
