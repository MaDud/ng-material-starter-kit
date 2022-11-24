import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-crypto-chip',
  styleUrls: ['./crypto-chip.component.scss'],
  templateUrl: './crypto-chip.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoChipComponent {
  constructor(private _cryptoService: CryptoService) {
  }

  cryptoChips$ = this._cryptoService.getAll()
}
