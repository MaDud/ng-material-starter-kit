import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-menu-categories',
  styleUrls: ['./menu-categories.component.scss'],
  templateUrl: './menu-categories.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuCategoriesComponent {
  constructor(private _categoryService: CategoryService) {
  }

  category$ = this._categoryService.getAll()
}
