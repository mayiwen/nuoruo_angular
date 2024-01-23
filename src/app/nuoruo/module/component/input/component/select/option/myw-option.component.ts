import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MayiwenSelectService } from '../myw-select.service';
@Component({
  selector: 'myw-option',
  templateUrl: './myw-option.component.html',
  styleUrls: ['./myw-option.component.less'],
  providers: []
})
export class MywOptionComponent implements OnInit, AfterViewInit {
  @Input() value = '';
  @Input() v = '';
  @Input() o: any
  tabsetTitleList = [] as any;
  selectTab = 0;
  flagShow = false;
  constructor(private cdr: ChangeDetectorRef) {

  }
  get title() {
    return JSON.stringify(this.tabsetTitleList);
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  changeTab(index: any) {
  }
  ngAfterViewInit() {
  }
  selectOption() {
    console.log('这是option');

  }

}
