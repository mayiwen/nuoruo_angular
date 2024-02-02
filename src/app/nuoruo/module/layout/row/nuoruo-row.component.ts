import {
  AfterViewInit,
  Component,
  ContentChildren,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import { NuoruoColDirective } from './directive/nuoruo-col.directive';
@Component({
  selector: 'nr-row',
  templateUrl: './nuoruo-row.component.html',
  styleUrls: ['./nuoruo-row.component.less'],
  providers: [
  ],
})
export class NuoruoRowComponent implements AfterViewInit, OnChanges{
  @ContentChildren(NuoruoColDirective) colList!: QueryList<NuoruoColDirective>
  @Input() gutter: any = 8
  @Input() margin: string = ''
  @Input() total: number = 24
  @Input() w: any;
  @Input() h: any;
  @Input() style: any = {};
  _style = {}
  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('变动的方法执行了')
    console.log(changes)
    this.ngAfterViewInit()
    // throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    let account = 0
    this.colList && this.colList.forEach(item => {
      account = account + item.span
      if (account === this.total) {
        item.flagShowSpan = false
        account = 0
      } else {
        if (account > this.total) {
          account = item.span
        } else {
          item.flagShowSpan = true
        }
      }
    })
  }
  get height() {
    return this.h
  }
  get width() {
    return this.w
  }
 
}
