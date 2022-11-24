import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-checkbox-categories',
  styleUrls: ['./checkbox-categories.component.scss'],
  templateUrl: './checkbox-categories.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxCategoriesComponent {
  constructor(private _categoryService: CategoryService) {
  }

  category$ = this._categoryService.getAll()
}
