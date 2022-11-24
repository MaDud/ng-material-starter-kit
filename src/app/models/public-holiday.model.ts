export interface PublicHolidayModel {
  readonly counties: null | string[];
  readonly countryCode: string;
  readonly date: string;
  readonly fixed: boolean;
  readonly global: boolean;
  readonly launchYear: null | number;
  readonly localName: string;
  readonly name: string;
  readonly type: string;
}
