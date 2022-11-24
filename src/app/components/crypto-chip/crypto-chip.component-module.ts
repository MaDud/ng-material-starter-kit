import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CryptoChipComponent } from './crypto-chip.component';

@NgModule({
  imports: [MatCardModule, MatChipsModule, CommonModule],
  declarations: [CryptoChipComponent],
  providers: [],
  exports: [CryptoChipComponent]
})
export class CryptoChipComponentModule {
}
