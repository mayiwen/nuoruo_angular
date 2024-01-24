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
  @Input('width') width = ''
  /** 设置一个最小宽度 */
  @Input('minWidth') minWidth = ''
  // 是否显示外框线
  @Input('noBorder') noBorder: boolean = false
  @Input('') 
  ngOnInit() {
  }
}
 