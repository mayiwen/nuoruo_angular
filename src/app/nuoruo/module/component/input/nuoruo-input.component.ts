import { AfterViewInit, ChangeDetectorRef, Component, ContentChild, ElementRef, HostBinding, HostListener, Input, OnInit, TemplateRef, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'nr-input',
  templateUrl: './nuoruo-input.component.html',
  styleUrls: ['./nuoruo-input.component.scss', './common/style/common.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NuoruoInputComponent),
      multi: true
    }
  ]
})
export class NuoruoInputComponent implements  AfterViewInit, ControlValueAccessor {
  /* 基础类 */
  @Input('w') w? = 100
  @Input('type') type?: string = ''
  /** 父组件传过来的正则。 */
  @Input('reg') reg? = ''
  @Input('placeholder') placeholder? = ''
  @Input('bold') bold: any
  @Input('name') name: any
  /** 是否是disabled */
  @Input('disabled') disabled: boolean = false
  /** 父组件传过来的数据 */
  _fathrData: string = ''
  /** 父组件传过的数据复制的一份数据。主要是为了不满足正则的时候，要恢复原来的内容。 */
  fatherDataCopy: string = ''
  // 是否显示外框线
  @Input() group: boolean = false
  /** 是否圆角 
   * reaius 四个角都是圆角
   * left 左边的两个角是圆角
   * right 右边的两个角是圆角
   * none 非圆角
  */
  @Input() radius: 'radius' | 'left' | 'right' | 'none' = 'radius'
  constructor() {
    
  }
  set fatherData(value: string) {
    // 将子元素赋值
    this._fathrData = value
    this.change(this._fathrData)
  }
  get fatherData() {
    return this._fathrData
  }
  /** 将父组件传过来的数据写入到此组件中。 */
  writeValue(obj: any): void {
    
    this._fathrData = obj
    console.log('writevalue')
    console.log(obj)
    this.fatherDataCopy = this._fathrData ? JSON.parse(JSON.stringify(this._fathrData)) : ''
  }
  /** 把此组件修改过的内容，写入到子组件中 */
  registerOnChange(fn: any): void {
    this.change = fn
  }
  registerOnTouched(fn: any): void {
    console.log('当前的元素被触发了。')
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }
  change = (value:any) => {}

  ngAfterViewInit(): void {
  }
  changeValue(e: any, input:any) {
    if (this.fatherData) {
      // 如果当前的reg有值。
      if (this.reg) {
        try {
          let reg = eval(this.reg)
          let res = reg.test(this.fatherData)
          if (res) {
            this.fatherData = e
            this.fatherDataCopy = this._fathrData ? JSON.parse(JSON.stringify(this._fathrData)) : ''
            
          } else {
            this._fathrData = JSON.parse(JSON.stringify(this.fatherDataCopy))
            input.value = this._fathrData
            this.fatherData = input.value
          }
        } catch(error) {
          this.fatherData = ''
          this.fatherDataCopy = ''
        }
      } else {
        this.fatherData = e
        this.fatherDataCopy = this._fathrData ? JSON.parse(JSON.stringify(this._fathrData)) : ''
      }
    } else {
      this.fatherData = ''
      this.fatherDataCopy = ''
    }
  }
}
 