import {Component, Input, OnInit} from '@angular/core';
import Accordion from './Accordion.model';
import {AccordionService} from './accordion.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input('id')
  id: string;
  accordion: Accordion;

  constructor(private accordionService: AccordionService) { }

  ngOnInit(): void {
    this.getAccordionData();
  }

  getAccordionData(): void {
    this.accordion = this.accordionService.getAccountById(this.id);
  }

}
