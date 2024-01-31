import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  Output,
  QueryList,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NuoruoOptionComponent } from './option/nuoruo-option.component';
@Component({
  selector: 'nr-select',
  templateUrl: './nuoruo-select.component.html',
  styleUrls: ['./nuoruo-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NuoruoSelectComponent),
      multi: true,
    },
  ],
})
export class NuoruoSelectComponent implements  AfterViewInit, ControlValueAccessor {
  @Input() w = 100;
  @Input() v = 'v';
  @Input() value = 'value';
  @Input() name = '';
  /** 获取 option 的列表  */
  @ContentChildren(NuoruoOptionComponent) optionList!: QueryList<NuoruoOptionComponent>;
  @Output('optionSelect') optionSelect = new EventEmitter()
  @Output('inputChange') inputChange = new EventEmitter()
  /** 是否显示下面的option */
  flagShow = false;
  inputValue = '111';
  /** 这是展示的值。 */
  showAndSearchValue = ''
  /** 父组件把ngModel传进来的时候绑定的值 */
  _fatherNgModel: any = {};
  data: any;
  // 是否显示外框线
  @Input() group: boolean = false
  /** 是否圆角 
   * reaius 四个角都是圆角
   * left 左边的两个角是圆角
   * right 右边的两个角是圆角
   * none 非圆角
  */
  @Input() radius: 'radius' | 'left' | 'right' | 'none' = 'radius'
  constructor(
    private cdr: ChangeDetectorRef,
  ) {
    // this.childData = 2;
  }
  @HostListener('window:click', ['$event']) onClose() {
    this.flagShow = false
  }
  get width() {
    return parseInt(this.w + '', 10) + 4;
  }
  get fatherNgModel() {
    return this._fatherNgModel;
  }
  set fatherNgModel(data: any) {
    this._fatherNgModel = data;
    this.change(this.fatherNgModel);
  }
  ngAfterViewInit() {
    console.log('这是打印的option list')
    console.log(this.optionList)
  }
  add() {
    // this.childData++;
  }
  change = (value: any) => {
    console.log('changge');
    console.log(value);
  }; // 先定义一个方法，很重要，用于接收registerOnChange()方法里传递回来的方法，然后通过这个方法就能通知到外部组件数据更新。
  /** 写入值的方法执行了 */
  writeValue(val: any): void {
    console.log('写入值的方法执行了')
    console.log(val)
    // 初始化时，获取并监听父组件通过ngModel传递进来的数据
    if (val) {
      this.fatherNgModel = val;
      console.log('这是执行的方法')
      console.log(val)
      this.showAndSearchValue = this.fatherNgModel[this.v]
    }
  }
  registerOnChange(fn: any): void {
    console.log('registerOnChange');
    console.log(this._fatherNgModel)
    console.log(fn)
    // 初始化后，执行该方法，并保存控件接收到 change 事件后，调用的函数
    this.change = fn;
    console.log('这是')
  }
  registerOnTouched(fn: any): void { }

  ngOnInit(): void { }
  changeTab(index: any) { }
  select(item: any) {
    console.log('这是item')
    console.log(item)
    this.fatherNgModel = JSON.parse(JSON.stringify(item.o))
    console.log(this.fatherNgModel)
    this.showAndSearchValue = this.fatherNgModel[this.v]
    console.log('这是选择后的 fatherNgmodel')
    console.log(this.fatherNgModel)

    this.optionSelect.emit(this.fatherNgModel)
    // alert('你好')
  }
  inputChangeFn(e: any) {
    console.log('input 改变了')
    console.log(e)
    this.inputChange.emit(e)
  }

}
