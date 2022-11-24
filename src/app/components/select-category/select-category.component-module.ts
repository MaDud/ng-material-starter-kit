import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { SelectCategoryComponent } from './select-category.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule],
  declarations: [SelectCategoryComponent],
  providers: [],
  exports: [SelectCategoryComponent]
})
export class SelectCategoryComponentModule {
}
