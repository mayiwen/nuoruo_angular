import { Component, Input} from '@angular/core';
@Component({
  selector: 'nr-button',
  templateUrl: './nuoruo-button.component.html',
  styleUrls: ['./nuoruo-button.component.scss'],
  providers: []
})
export class NuoruoButtonComponent {
  /** 是否在加载中 */
  @Input('loading') loading: boolean = false
  /** 是否禁用 */
  @Input('disabled') disabled: boolean = false
  /** 是否是选择中状态 */
  @Input('active') active: boolean = false
  /** 设置默认的宽度 */
  @Input('w') w = ''
  /** 设置默认的宽度 */
  @Input() h = ''
  /** 设置一个最小宽度 */
  @Input('minWidth') minWidth = ''
  // 是否显示外框线
  @Input('noBorder') noBorder: boolean = false
  // 标题
  @Input('title') title: string = ''
  // 是否显示外框线
  @Input() group: boolean = false
  /** 是否圆角 
   * reaius 四个角都是圆角
   * left 左边的两个角是圆角
   * right 右边的两个角是圆角
   * none 非圆角
  */
  @Input() radius: 'radius' | 'left' | 'right' | 'none' = 'radius'
  ngOnInit() {
  }
}
 