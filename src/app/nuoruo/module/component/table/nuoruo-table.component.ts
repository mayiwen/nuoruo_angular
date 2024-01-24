import { AfterViewInit, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, QueryList, SimpleChanges, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { NuoruoTableDirective } from './directive/nuoruo-table.directive';
@Component({
  selector: 'nr-table',
  templateUrl: './nuoruo-table.component.html',
  styleUrls: ['./nuoruo-table.component.scss'],
  providers: []
})
export class NuoruoTableComponent implements  OnInit,AfterViewInit, OnChanges {
  /** 用于生成表格列的数据 */
  @Input('tableCol') tableCol!: any[]
  /** 表格绑定的数据。 */
  @Input('tableData') tableData!: any[]
  /** 用于说明哪个字段是控制展开隐藏的。 */
  @Input('flagExpand') flagExpand = ''
  /** 出参 当拖动完成时，将调用这个事件 */
  @Output() dragAfter = new EventEmitter()
  /** 拖动的时候，保存的数据。 */
  dragData = {} as any;
  _tableData: any
  @ContentChildren(NuoruoTableDirective) qlist!: QueryList<NuoruoTableDirective>;
  fixeded = false
  flagEdit = false
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('这是发生了变化 ')
    console.log(this._tableData)
    this.cdr.detectChanges()
  }
  get tableWidth () {
    return this.tableCol.reduce((total, item , index) => {
      item.w ? total = total + item.w : total = total + 100
      return total
    }, 0)
  }

  
  showList = {} as any
  ngAfterViewInit(): void {
    // 如果用户使用了自定义模板，则这个地方，要将自定义模板取出来，然后渲染自定义的模板。
    this.qlist.forEach(item => {
      this.showList[item.select] = item
    })
    this.cdr.detectChanges()
  }
  chagneItemShow(e: any, item: any) {
    item.show = e
  }

  dragStart(item: any, index: number) {
    console.log('开始移动的事件')
    console.log(item)
    this.dragData = {
      drag: item,
      dragIndex: index
    }
  }
  drop(item: any, index: number) {
    console.log('drop')
    console.log(item)
    this.dragData.drop = item
    this.dragData.dropIndex = index
    this.dragAfter.emit(this.dragData)
  }
  rightClick(e: MouseEvent) {
    e.preventDefault()
    this.flagEdit = !this.flagEdit
  }
}
