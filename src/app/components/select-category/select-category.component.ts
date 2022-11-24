import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-select-category',
  styleUrls: ['./select-category.component.scss'],
  templateUrl: './select-category.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectCategoryComponent {
  constructor(private _categoryService: CategoryService) {
  }

  categories$ = this._categoryService.getAll()
}
