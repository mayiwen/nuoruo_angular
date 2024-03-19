import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  forwardRef,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TreeI } from './o/tree-item.i';
import { NuoruoTreeDirective } from './directive/nuoruo-tree.directive';
@Component({
  selector: 'nr-tree',
  templateUrl: './nuoruo-tree.component.html',
  styleUrls: ['./nuoruo-tree.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NuoruoTreeComponent),
      multi: true,
    },
  ],
})
export class NuoruoTreeComponent
  implements OnInit, AfterViewInit, ControlValueAccessor
{
  @ContentChild(NuoruoTreeDirective) nrTree!: NuoruoTreeDirective;
  @Input() indexId = '';
  _fatherNgModel: any = {};

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

  ngAfterViewInit(): void {
    this.cdr.detectChanges()
  }
  ngOnInit(): void {
    console.log('ngOnInit 执行了');
  }
  getMessage(treei: TreeI, i: any, e: any) {
    let treeId = this.indexId ? this.indexId + '-' + i : i + '';
    let treeiCopy: TreeI = JSON.parse(JSON.stringify(treei));
    treeiCopy.treeId = treeId;
    let timer = setTimeout(() => {
      console.log(e);
      e.view.focus();
      e.target.focus();
      clearTimeout(timer);
    }, 300);
  }
  dragTreeItem(item: TreeI, index: any, e: any) {
    e.stopPropagation();
    console.log('拖动开始了');
    console.log(this.indexId ? this.indexId + '-' + index : index + '');
    let drapItem = {
      indexId: this.indexId ? this.indexId + '-' + index : index + '',
      item: item,
    };
  }
  addZero(num: any) {
    let str = '';
    for (let index = 0; index < num; index++) {
      str += '0';
    }
    return str;
  }
  arrTrans(str: any) {
    let StrTemp = str;
    let arr = StrTemp.split('-');
    arr.splice(arr.length - 1, 1);
    return arr.join('-');
  }

  
  
}
