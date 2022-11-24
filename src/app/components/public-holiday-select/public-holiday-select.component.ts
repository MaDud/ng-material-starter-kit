import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { PublicHolidayService } from '../../services/public-holiday.service';

@Component({
  selector: 'app-public-holiday-select',
  styleUrls: ['./public-holiday-select.component.scss'],
  templateUrl: './public-holiday-select.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicHolidaySelectComponent {
  constructor(private _publicHolidayService: PublicHolidayService) {
  }

  publicHoliday$ = this._publicHolidayService.getAll()
}
