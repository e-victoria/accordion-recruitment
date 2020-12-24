import { CurrencyEnum } from '../enums/currency.enum';

export default interface Accordion {
  id: string;
  title: string;
  account_number: string;
  balance: number;
  currency: CurrencyEnum;
  blocked_amount: number;
  available_amount: number;
  bank: string;
}
