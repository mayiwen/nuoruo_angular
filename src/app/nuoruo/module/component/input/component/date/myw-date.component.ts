import { DatePipe } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ContentChild, ElementRef, HostBinding, HostListener, Input, OnInit, TemplateRef, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'myw-date',
  templateUrl: './myw-date.component.html',
  styleUrls: ['./myw-date.component.scss'],
  providers: [
    DatePipe,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MywDateComponent),
      multi: true
    }
  ]
})
export class MywDateComponent implements  AfterViewInit, ControlValueAccessor {
  /** 父组件传过来的正则。 */
  @Input('reg') reg? = ''
  @Input('w') w? = '100'
  @Input('placeholder') placeholder? = ''
  @Input('bold') bold: any
  @Input('name') name: any
  @Input('disabled') disabled: boolean = false
  /** 父组件传过来的数据 */
  _fathrData: string = ''
  /** 是否disabled */
  flagDisabled: boolean = false
  /** 父组件传过的数据复制的一份数据。主要是为了不满足正则的时候，要恢复原来的内容。 */
  fatherDataCopy: string = ''
  dataArr: any = [

  ]
  /** 年份 */
  yearArr = [[], [], [], [], [], []]
  monthArr = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12]]
  selectYear = 2000
  selectMonth = 2000

  /** 选择的面版 当为d的时候选择日期，当为 y 的时候选择年份，当为m的时候选择日期*/
  selectPanel: 'd' | 'y' | 'm' = 'd'
  flagShow: boolean = false
  @HostListener('window:click', ['$event']) onClose() {
    this.flagShow = false
  }
  showDateSelect(e: any) {
    this.flagShow = true
    e.stopPropagation()
  }
  toBeforeMonth() {
    this.nowDate = this.dateAddAndSub(this.nowDate, 'month', -1)
    this.getDateArrByDate(this.nowDate)
  }

  toAfterMonth() {
    this.nowDate = this.dateAddAndSub(this.nowDate, 'month', 1)
    this.getDateArrByDate(this.nowDate)
  }
  toBeforeYear() {
    this.nowDate = this.dateAddAndSub(this.nowDate, 'year', -1)
    this.getDateArrByDate(this.nowDate)
  }

  toAfterYear() {
    this.nowDate = this.dateAddAndSub(this.nowDate, 'year', 1)
    this.getDateArrByDate(this.nowDate)
  }
  selectDate(itemi: any) {
    this.nowDate = itemi.date
    this.getDateArrByDate(this.nowDate)
  }
  getYearArr(year: number) {
    let nowyear = year
    let arr: any = [[], [], [], [], [], []]
    for (let index = year - 29; index <= nowyear ; index++){
      for (let indexInner = 0; indexInner <= 5; indexInner++) {
        if (arr[indexInner].length < 5) {
          arr[indexInner].push(index)
          break
        }
      }
    }
    return arr
  }
  get nowDateYear() {
    return this.nowDate.getFullYear()
  }
  toBeforeYearArr() {
    let year = this.yearArr[this.yearArr.length - 1][this.yearArr[this.yearArr.length - 1].length - 1]
    console.log(year)
    let after = year - 30
    this.yearArr = this.getYearArr(after)
  }
  toAfterYearArr() {
    let year = this.yearArr[this.yearArr.length - 1][this.yearArr[this.yearArr.length - 1].length - 1]
    console.log(year)
    let after = year + 30
    this.yearArr = this.getYearArr(after)
  }
  selectPanelFn(panel: 'y' | 'm' | 'd', data?: any) {
    console.log('年份选择了')
    this.selectPanel = panel
    let year = this.nowDate.getFullYear()
    if (panel === 'y') {
      let arr = this.getYearArr(year)
      this.yearArr = arr
      // console.log(data)
      // this.selectYear = data
    }
    if (panel === 'm') {
      this.selectYear = data
    }
    if (panel === 'd') {
      this.selectMonth = data
      let date = this.selectYear + '/'+ this.addZero(this.selectMonth) +  '/01'
      console.log(date)
      this.nowDate = new Date(date)
      this.getDateArrByDate(this.nowDate)
      
    }


  }
  constructor(private datePipe: DatePipe) {
    this.getDateArrByDate(this.nowDate)
  }
  nowDate = new Date()
  get nowDateString() {
    let nowO = this.getDateObjectString(this.nowDate)
    return nowO.year + '/' + this.addZero(nowO.month) + '/' +  this.addZero(nowO.day)
  }
  getDateArrByDate(nowDate: Date) {
    // 将当前的日期 转化为 日期
    let date = new Date(nowDate)
    console.log(this.datePipe.transform(date, 'yyyy-MM-dd'))
    // 根据当前的日期，获取当月的第1天
    let dayO = this.getDateObjectString(date)
    let oneDay = dayO.year + '/' + this.addZero(dayO.month) + '/01'
    let oneDayO = this.getDateObjectString(new Date(oneDay))
    console.log('获取的当前月的第一天')
    console.log(oneDayO)
    // 获取 当月的天数
    let nowDaysCount = this.getMonthDay(date.getFullYear(), date.getMonth())
    let beforeMonth = this.dateAddAndSub(date, 'month', -1)
    let beforeDaysCount = this.getMonthDay(beforeMonth.getFullYear(), beforeMonth.getMonth())
    let afterMonth = this.dateAddAndSub(date, 'month', 1)
    let afterDaysCount = this.getMonthDay(afterMonth.getFullYear(), afterMonth.getMonth())
    console.log(nowDaysCount, beforeDaysCount, afterDaysCount)
    console.log('-------')
    let arr: any = [[], [], [], [], [], []]
    
    if (oneDayO.week !== 1) {
      let week = oneDayO.week === 0 ? 7 : oneDayO.week
      console.log(week)
      for (let index = beforeDaysCount - (week - 1 - 1); index <= beforeDaysCount; index++) {
        console.log(index)
        arr[0].push({
          date: new Date(beforeMonth.getFullYear() + '/' + this.addZero(beforeMonth.getMonth() + 1) + '/' + this.addZero(index)),
          type: 'before',
          select: false
        })
      }
    }
    for (let index = 1; index <= nowDaysCount ; index++){
      for (let indexInner = 0; indexInner <= 5; indexInner++) {
        if (arr[indexInner].length < 7) {
          arr[indexInner].push({
            date: new Date(date.getFullYear() + '/' + this.addZero(date.getMonth() + 1) + '/' + this.addZero(index)),
            type: 'now',
            select: date.getDate() === index
          })
          break
        }
      }
    }
    for (let index = 1; index <= afterDaysCount ; index++){
      for (let indexInner = 0; indexInner <= 5; indexInner++) {
        if (arr[indexInner].length < 7) {
          arr[indexInner].push({
            date: new Date(afterMonth.getFullYear() + '/' + this.addZero(afterMonth.getMonth() + 1) + '/' + this.addZero(index)),
            type: 'after',
            select: false
          })
          break
        }
      }
    }
    console.log(arr)
    this.dataArr = arr
  }
  /**
   * 对日期做加减的方法 这个方法并不会修改传入的日期
   * @param date 传入的日期
   * @param type 可以对 年 月 日 周 做  加减
   * @param scale 当为正数的时候，做加法。否则做减法
   * @returns 返回一个新的日期
   */
  dateAddAndSub(date: Date, type: 'year' | 'month' | 'day' | 'week', scale: number): Date {
    let newDate = new Date(date)
    switch (type) {
      case 'year':
        newDate.setFullYear(newDate.getFullYear() + scale);
        break;
      case 'month':
        newDate.setMonth(newDate.getMonth() + scale);
        break;
      case 'day':
        newDate.setDate(newDate.getDate() + scale);
        break;
      default:
        break;
    }
    return newDate
  }
  getMonthFirstDay(date: Date): Date {
    return date
  }
  getDateObjectString(date: Date): any {
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      week: date.getDay()
    }
  }
  addZero(num: string | number): string {
    if (Number(num) < 10) {
      return '0' + num
    }
    return num + ''
  }

  getMonthDay(year: number, month: number) {
    let days = new Date(year, month + 1, 0).getDate()
    return days
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
    this.flagDisabled = isDisabled
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
 