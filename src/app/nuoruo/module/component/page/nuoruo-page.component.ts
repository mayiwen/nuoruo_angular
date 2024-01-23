import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { NuoruoPage } from './i/nuoruo-page.i';
@Component({
  selector: 'nr-page',
  templateUrl: './nuoruo-page.component.html',
  styleUrls: ['./nuoruo-page.component.scss'],
  providers: [
  ],
})
export class NuoruoPageComponent implements AfterViewInit, OnChanges{
  @Input() w: any;
  @Input() h: any;
  @Input() p: any;
  mywPageData: NuoruoPage = {} as any
  @Input() set mywPage(value: any) {
    console.log('这是打印的value')
    console.log(value)
    this.mywPageData = value
    this.setPageData()

  }
  @Output() changePage: EventEmitter<number> = new EventEmitter()
  total = 0
  page = 1
  pageSize = 10
  pageTotal = 0
  jumpPage = 1

  constructor(private cdr: ChangeDetectorRef) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('触发了change')
    console.log(changes)
    console.log()
    this.cdr.detectChanges()
  }
  ngAfterViewInit(): void {
    if (this.w && this.h) {
      this.w = ''
    }
    if (!this.w && !this.h) {
      this.h = '8'
    }
    
  }
  setPageData() {
    console.log('这是打印的mywpage')
    console.log(this.mywPageData)
  
    this.total = this.mywPageData.total
    this.page = this.mywPageData.page
    this.pageSize = this.mywPageData.pageSize
    
    this.pageTotal = (this.total % this.pageSize === 0)? (this.total / this.pageSize) : (Math.floor(this.total / this.pageSize) + 1)
  }
  get height() {
    return this.h
  }
  get width() {
    return this.w
  }
  changePageFn(page: any) {
    console.log(page)
    this.jumpPage = +page
    this.changePage.emit(page)
  }
  jumpPageFn() {
    if (+this.jumpPage > this.pageTotal ) {
      this.jumpPage  = this.pageTotal
    }
    if (this.jumpPage < 1 ) {
      this.jumpPage  = 1
    }
    this.changePageFn(+this.jumpPage)
   }
}
