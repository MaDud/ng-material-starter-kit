import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-table',
  styleUrls: ['./products-table.component.scss'],
  templateUrl: './products-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsTableComponent {
  constructor(private _productService: ProductService) {
  }

  products$ = this._productService.getAll()
}
