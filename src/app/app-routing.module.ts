import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SelectCategoryComponent } from './components/select-category/select-category.component';
import { CryptoChipComponent } from './components/crypto-chip/crypto-chip.component';
import { PublicHolidaySelectComponent } from './components/public-holiday-select/public-holiday-select.component';
import { CheckboxCategoriesComponent } from './components/checkbox-categories/checkbox-categories.component';
import { MenuCategoriesComponent } from './components/menu-categories/menu-categories.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { SelectCategoryComponentModule } from './components/select-category/select-category.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { CryptoChipComponentModule } from './components/crypto-chip/crypto-chip.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { PublicHolidaySelectComponentModule } from './components/public-holiday-select/public-holiday-select.component-module';
import { PublicHolidayServiceModule } from './services/public-holiday.service-module';
import { CheckboxCategoriesComponentModule } from './components/checkbox-categories/checkbox-categories.component-module';
import { MenuCategoriesComponentModule } from './components/menu-categories/menu-categories.component-module';
import { ProductsTableComponentModule } from './components/products-table/products-table.component-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { LoginComponentModule } from './components/login/login.component-module';
import { LoginServiceModule } from './services/login.service-module';
import { RegistrationFormComponentModule } from './components/registration-form/registration-form.component-module';
import {RegistrationServiceModule} from "./services/registration.service-module";

@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path: 'products', component: ProductListComponent },
      { path: 'categories', component: SelectCategoryComponent },
      { path: 'crypto', component: CryptoChipComponent },
      { path: 'public-holidays', component: PublicHolidaySelectComponent },
      { path: 'checkbox-categories', component: CheckboxCategoriesComponent },
      { path: 'categories-menu', component: MenuCategoriesComponent },
      { path: 'product-search', component: ProductsTableComponent },
      { path: 'create-product', component: ProductFormComponent },
      { path: 'create-employee', component: EmployeeFormComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegistrationFormComponent }
    ]), ProductListComponentModule, ProductServiceModule, SelectCategoryComponentModule, CategoryServiceModule, CryptoChipComponentModule, CryptoServiceModule, PublicHolidaySelectComponentModule, PublicHolidayServiceModule, CheckboxCategoriesComponentModule, MenuCategoriesComponentModule, ProductsTableComponentModule, ProductFormComponentModule, EmployeeFormComponentModule, EmployeeServiceModule, LoginComponentModule, LoginServiceModule, RegistrationFormComponentModule, RegistrationServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
