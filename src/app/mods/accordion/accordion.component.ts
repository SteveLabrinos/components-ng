import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  @Input() items: { title: string; content: string }[] = [];

  openedItemIndex = 0;

  constructor() {}

  onClick(index: number): void {
    this.openedItemIndex = this.openedItemIndex === index ? -1 : index;
  }

  ngOnInit(): void {}
}
