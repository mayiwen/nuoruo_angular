import {
  AfterViewInit,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { NuoruoColDirective } from './directive/nuoruo-col.directive';
@Component({
  selector: 'nr-row',
  templateUrl: './nuoruo-row.component.html',
  styleUrls: ['./nuoruo-row.component.less'],
  providers: [
  ],
})
export class NuoruoRowComponent implements AfterViewInit{
  @ContentChildren(NuoruoColDirective) colList!: QueryList<NuoruoColDirective>
  @Input() gutter: any = 8
  @Input() total: number = 24
  @Input() w: any;
  @Input() h: any;
  constructor() {
  }
  ngAfterViewInit(): void {
    let account = 0
    this.colList.forEach(item => {
      account = account + item.span
      if (account === 24) {
        item.flagShowSpan = false
        account = 0
      } else {
        if (account > 24) {
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
