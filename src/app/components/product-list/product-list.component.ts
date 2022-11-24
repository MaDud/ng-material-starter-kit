import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  styleUrls: ['./product-list.component.scss'],
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  constructor(private _productService: ProductService) {
  }

  products$= this._productService.getAll()
}
