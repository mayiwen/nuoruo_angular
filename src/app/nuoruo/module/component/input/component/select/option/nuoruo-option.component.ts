import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
@Component({
  selector: 'nr-option',
  templateUrl: './nuoruo-option.component.html',
  styleUrls: ['./nuoruo-option.component.scss'],
  providers: []
})
export class NuoruoOptionComponent implements OnInit, AfterViewInit {
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
