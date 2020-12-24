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
}
