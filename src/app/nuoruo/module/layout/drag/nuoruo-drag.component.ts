import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NuoruoDragService } from './service/nuoruo-drag.service';
@Component({
  selector: 'nr-drag',
  templateUrl: './nuoruo-drag.component.html',
  styleUrls: ['./nuoruo-drag.component.scss']
})
export class NuoruoDragComponent
  implements OnInit, AfterViewInit, ControlValueAccessor {
  @Input() position: boolean = true
  @Input() v: string = ''
  @ViewChild('dragRef') dragRef!: ElementRef
  @Input() indexId = '';
  @Output() close = new EventEmitter()
  @Output() dragEnd = new EventEmitter()
  
  offsetX = 0;
  offsetY = 0;
  _fatherNgModel: any = {};
  arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
  zIndex = 100000
  resizeObserver: any

  constructor(private cdr: ChangeDetectorRef,private service: NuoruoDragService) { 
    this.zIndex = ++this.service.zIndex
    console.log('这是打印的下标')
    console.log(this.zIndex)
    console.log(this.zIndex % 10)
  }
  get fatherNgModel() {
    return this._fatherNgModel;
  }
  set fatherNgModel(data: any) {
    // 此处动用了getf方法
    this._fatherNgModel = data;
    this.change(this.fatherNgModel);
  }
  change = (value: any) => {
    console.log('changge');
    console.log(value);
  };
  // 先定义一个方法，很重要，用于接收registerOnChange()方法里传递回来的方法，然后通过这个方法就能通知到外部组件数据更新。
  // 这个是外部给内部赋值的方法。
  writeValue(val: any): void {
    console.log('这是write value，父组件给里面的原素赋值了。');
    console.log(val);
    if (val) {
      /* 此处动调用了fatherNgModel的set法法。 */
      this.fatherNgModel = val.map((item: any) => {
        item.flagExpand = true;
        item.flagEdit = false;
        return item;
      });
    }
  }
  registerOnChange(fn: any): void {
    console.log('registerOnChange');
    this.change = fn;
  }
  registerOnTouched(fn: any): void {
    console.log('registerOnTouched');
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log('setDisabledState');
  }
  ngAfterViewInit(): void {
    console.log('这是打印的gridList')
    this.resizeObserver = new ResizeObserver(() => {
      this.dragEnd.emit()
    });
    this.resizeObserver.observe(this.dragRef.nativeElement);

    this.cdr.detectChanges()
  }
  ngOnInit(): void {
    console.log('ngOnInit 执行了');
  }

  dragStart(e: any) {
    console.log('开始拖动了。')
    this.offsetX = e.offsetX;
    this.offsetY = e.offsetY;
    this.dragRef.nativeElement.style.opacity = 1;
    console.log(e)
    console.log('开始拖动打印结束')
  }
  drag(e: any) {
    var x = e.pageX;
    var y = e.pageY;
    console.log(x + '-' + y);
    //drag事件最后一刻，无法读取鼠标的坐标，pageX和pageY都变为0  
    if (x == 0 && y == 0) {
     
      return; //不处理拖动最后一刻X和Y都为0的情形  
    }
    x -= this.offsetX;
    y -= this.offsetY;
    this.dragRef.nativeElement.style.left = x + 'px';
    this.dragRef.nativeElement.style.top = y + 'px';
  }
  // drop() {
  //   this.dragEnd.emit()
  // }
  closeEmit() {
    this.close.emit()
  }
  divResize() {
    console.log('div 宽度改变了')
    this.cdr.detectChanges()
    this.dragEnd.emit()
  }
}
