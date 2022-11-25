import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {
  category$ = this._categoryService.getAll()

  readonly productForm: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required, Validators.min(0)]),
    description: new FormControl(null, [Validators.required]),
    image: new FormControl(null),
    category: new FormControl(null)
  });

  constructor(private _productService: ProductService, private _categoryService: CategoryService) {
  }

  onProductFormSubmitted(productForm: FormGroup): void {
    this._productService.create({
      title: productForm.get('title')?.value,
      id: productForm.get('id')?.value,
      description: productForm.get('description')?.value,
      price: productForm.get('price')?.value,
      category: productForm.get('category')?.value,
      image: productForm.get('image')?.value
    })
      .subscribe({ next: () => alert('Success') });
  }
}
