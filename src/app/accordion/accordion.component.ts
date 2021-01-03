import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
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
  @ViewChild('balance')
  private balanceContainer: ElementRef;
  @ViewChild('accordionEl')
  private accordionEl: ElementRef;
  @ViewChild('additionalInfo')
  private additionalInfo: ElementRef;
  @ViewChild('infoBtn')
  private infoBtn: ElementRef;

  constructor(private accordionService: AccordionService) { }

  ngOnInit(): void {
    this.getAccordionData();
  }

  getAccordionData(): void {
    this.accordion = this.accordionService.getAccountById(this.id);
  }

  showDetails(): void {
    this.balanceContainer.nativeElement.classList.toggle('hidden');
    this.accordionEl.nativeElement.classList.toggle('accordion--expanded');
    this.additionalInfo.nativeElement.classList.toggle('hidden');
    this.infoBtn.nativeElement.classList.toggle('hidden');
  }

}
