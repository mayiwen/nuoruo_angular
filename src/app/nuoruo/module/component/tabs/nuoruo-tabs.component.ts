import { AfterViewInit, ChangeDetectorRef, Component, ContentChildren, EventEmitter, Input, OnChanges, OnInit, Output, QueryList, SimpleChanges, ViewChild, ViewChildren, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NuoruoTabComponent } from './tab/nuoruo-tab.component';
@Component({
  selector: 'nr-tabs',
  templateUrl: './nuoruo-tabs.component.html',
  styleUrls: ['./nuoruo-tabs.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NuoruoTabsComponent),
    multi: true
  }]
})
export class NuoruoTabsComponent implements OnInit, AfterViewInit, ControlValueAccessor {
  @Input() flagShowIcon = false
  @Input() oneLine = false
  @ContentChildren(NuoruoTabComponent) tabsetList!: QueryList<NuoruoTabComponent>;
  @Output() tabClick = new EventEmitter()
  @Output() dlbTabClick = new EventEmitter()
  @Output() closeClick = new EventEmitter()
  @Output() contextmenuTabClick = new EventEmitter()
  tabsetTitleList = [] as any;
  selectTab = 0;
  _fatherNgModel: any
  constructor( private cdr: ChangeDetectorRef ) {

  }

  get fatherNgModel() {
    return this._fatherNgModel;
  }
  set fatherNgModel(data: any) {
    this._fatherNgModel = data;
  }
  
  
  ngOnInit(): void {
  }

  reload() {
    this.ngAfterViewInit()
  }
  changeTab(index: any) {
    this.tabClick.emit(this.clickTrans(index))
  }

  dlbTabClickFn(index: any) {
    return false
    this.dlbTabClick.emit(this.clickTrans(index))
  }
  contextmenuTabClickFn(index: any) {
    this.contextmenuTabClick.emit(this.clickTrans(index))
  }
  clickTrans(index: any) {
    this.selectTab = index;
    this.changeData = index;
    let itemSave
    this.tabsetList.forEach((item, indexi) => {
      item.flagShow = false;
    });
    this.tabsetList.forEach((item, indexi) => {
      if (indexi === this.selectTab) {
        item.flagShow = true;
        itemSave = item
        item.tclick(item)
      } else {
        item.flagShow = false;
      }
      item.selectTab = indexi;
      item.nextTick();
    });
    return itemSave
  }

  ngAfterViewInit() {
    console.log('这是打印的内容')
    console.log('tabset ngAfterViewInit')
    console.log(this.tabsetTitleList)
    console.log(this.selectTab)
    this.tabsetList.forEach((item, index) => {
      if (index === this.selectTab) {
        item.flagShow = true;
      } else {
        item.flagShow = false;
      }
      item.selectTab = index;
      item.nextTick();
    });
    this.tabsetTitleList = []
    this.tabsetList.forEach((item, index) => {
      this.tabsetTitleList.push({
        v: item.v,
        index,
      });
    });
    this.cdr.detectChanges();
    this.cdr.markForCheck();
    this.tabsetList.forEach((item, index) => {
      item.nextTick();
    });
  }
  selectByKey(id: string | number) {
    this.tabsetList.forEach((item, index) => {
      console.log(item)
      if (item.id === id) {
        item.flagShow = true;
        this.selectTab = index;
        this.changeData = index;
      } else {
        item.flagShow = false;
      }
      item.selectTab = index;
      item.nextTick();
    });
    this.cdr.detectChanges()
  }

  /** controlvalue */
  change = (value: any) => {};
  // 外部给内部赋值的方法
  writeValue(value: any): void {
    this.fatherNgModel = value
  }
  // 改变的方法
  registerOnChange(fn: any): void {
    console.log('myw-tabs registerOnChangessss');
    this.change = fn;
  }
  registerOnTouched(fn: any): void {
    console.log('myw-tabs registerOnTouchedssss');
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log('setDisabledStatesss');
  }
  set changeData(value:any) {
    this.fatherNgModel = value;
    this.change(this.fatherNgModel)
  }

  iconCloseClick(e: any, tab: NuoruoTabComponent) {
    e.stopPropagation()
    // e.preventDefault()
    console.log('iconCloseClick')
    this.closeClick.emit(tab)
  }
}
