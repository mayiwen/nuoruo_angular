import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'nr-grid',
  templateUrl: './nuoruo-grid.component.html',
  styleUrls: ['./nuoruo-grid.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NuoruoGridComponent),
      multi: true,
    },
  ],
})
export class NuoruoGridComponent
  implements OnInit, AfterViewInit, ControlValueAccessor
{


  @Input() indexId = '';
  @ViewChild('gridBox') gridBox!: ElementRef
  arrHeight = [] as any
  arrWidth = [] as any
  _fatherNgModel: any = {};
  arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
  constructor(private cdr: ChangeDetectorRef) {}
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
  @HostListener('window:resize', ['$event']) onResize() {
    this.getresize()
  }
  ngAfterViewInit(): void {
    let timer = setTimeout(() => {
      clearTimeout(timer)
      this.getresize()
    }, 100);
  }
  getresize() {
    console.log('这是打印的gridList')
     /* 获取当前元素的高 */
     let screenHeight: number = this.gridBox.nativeElement.offsetHeight
     /* 获取当前元斯的宽 */
     let screenWidth: number = this.gridBox.nativeElement.offsetWidth
 
     let h  = Math.floor(screenHeight / 44)
     let h1 = screenHeight % 44
     if (h1 >= 40) h = h + 1
     let w  = Math.floor(screenWidth / 44)
     let w1 = screenHeight % 44
     if (w1 >= 40) w = w + 1
 
     let arrHeight = []
     let arrWidth = []
     for (let index = 1; index <= h; index++) {
       arrHeight.push(index)
     }
     for (let index = 1; index <= w; index++) {
       arrWidth.push(index)
     }
     this.arrHeight = arrHeight
     this.arrWidth = arrWidth
     this.cdr.detectChanges()
  }

  ngOnInit(): void {
    console.log('ngOnInit 执行了');
  }
  

  
  
}
