import { Injectable } from '@angular/core';
import Accordion from './Accordion.model';

declare var require: any;
const data: any = require('../accounts.json');

@Injectable({
  providedIn: 'root'
})

export class AccordionService {

  data: Accordion[];

  constructor() {}

  getData(): void {
    this.data = data;
  }

  getAccountsIdsList(): string[] {
    const accountsIds: string[] = [];

    for (const account of this.data) {
      accountsIds.push(account.id);
    }

    return accountsIds;
  }

  getAccountById(id: string): Accordion {
    for (const account of this.data) {
      if (account.id === id) {
        if (typeof account.available_amount === 'string') {
          account.available_amount = parseFloat(account.available_amount);
        }
        if (typeof account.blocked_amount === 'string') {
          account.blocked_amount = parseFloat(account.blocked_amount);
        }
        if (typeof account.balance === 'string') {
          account.balance = parseFloat(account.balance);
        }
        return account;
      }
    }
  }
}
