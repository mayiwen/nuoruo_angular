import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
@Component({
  selector: 'nuoruo-loading',
  templateUrl: './nuoruo-loading.component.html',
  styleUrls: ['./nuoruo-loading.component.scss'],
  providers: [],
})
export class NuoruoLoadingComponent implements AfterViewInit {
  @Input() v = '';
  @Input() h?: string;
  /** 请传入具体的内容，如 20px 或 50%这样的。 */
  @Input() w?: string;
  @Input() t?: string;
  @Input() fixed?: boolean = true;
  flagShow = false;
  selectTab = 0;
  deg = 0;
  /** setInterval 解订阅 */
  timer: any;
  /** 指定宽高，必须是正方形，暂不支持其他形式的loading */
  constructor(private cdr: ChangeDetectorRef) {}
  get wh() {
    if (this.message === 'fixed') return '100%';
    return this.w ? this.w : this.h ? this.h : '20px';
  }
  @Input()
  get message() {
    return this._message;
  }
  set message(message) {
    this._message = message;
  }
  private _message = '';

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }
  ngAfterViewInit(): void {
    this.timer = setInterval(() => {
      this.deg = this.deg + 1;
      if (this.deg === 360) this.deg = 0;
    }, 10);
  }
  nextTick() {
    this.cdr.markForCheck();
    this.cdr.detectChanges();
  }
  @Output() closed = new EventEmitter<void>();
  cancel() {
    this.closed.next();
  }
}
