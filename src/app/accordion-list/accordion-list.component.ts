import { Component, OnInit } from '@angular/core';
import Accordion from '../accordion/Accordion.model';
import {AccordionService} from '../accordion/accordion.service';

@Component({
  selector: 'app-accordion-list',
  templateUrl: './accordion-list.component.html',
  styleUrls: ['./accordion-list.component.scss']
})
export class AccordionListComponent implements OnInit {

  accordionList: string[];

  constructor(private accordionService: AccordionService) { }

  ngOnInit(): void {
    this.accordionService.getData();
    this.accordionList = this.accordionService.getAccountsIdsList();
  }

}
