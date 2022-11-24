import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SelectCategoryComponent } from './components/select-category/select-category.component';
import { CryptoChipComponent } from './components/crypto-chip/crypto-chip.component';
import { PublicHolidaySelectComponent } from './components/public-holiday-select/public-holiday-select.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { SelectCategoryComponentModule } from './components/select-category/select-category.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { CryptoChipComponentModule } from './components/crypto-chip/crypto-chip.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { PublicHolidaySelectComponentModule } from './components/public-holiday-select/public-holiday-select.component-module';
import { PublicHolidayServiceModule } from './services/public-holiday.service-module';

@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path: 'products', component: ProductListComponent },
      { path: 'categories', component: SelectCategoryComponent },
      { path: 'crypto', component: CryptoChipComponent },
      { path: 'public-holidays', component: PublicHolidaySelectComponent }
    ]), ProductListComponentModule, ProductServiceModule, SelectCategoryComponentModule, CategoryServiceModule, CryptoChipComponentModule, CryptoServiceModule, PublicHolidaySelectComponentModule, PublicHolidayServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
