import {
  AfterViewInit,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'nr-message',
  templateUrl: './nuoruo-message.component.html',
  styleUrls: ['./nuoruo-message.component.scss'],
  animations: [
    trigger('state', [
      state('opened', style({ transform: 'translateY(0%)', opacity: 1 })),
      state(
        'void, closed',
        style({ transform: 'translateY(100%)', opacity: 0 })
      ),
      transition('* => *', animate('200ms ease-in')),
    ]),
  ],
})
export class NuoruoMessageComponent implements  AfterViewInit, OnDestroy {
  @Output()
  closed = new EventEmitter<void>();
  /** 是否是第一次 */
  flagFirst: boolean = true
  arr = [
    
  ] as any[]
  type = ''
  /** 计时器 */
  timerShiftMessage: any

  ngOnDestroy(): void {
    this.state = 'closed'
    if (this.timerShiftMessage) clearTimeout(this.timerShiftMessage);
  }
  ngAfterViewInit(): void {
  }
  
  @HostBinding('@state')
  state: 'opened' | 'closed' = 'closed';

  @Input()
  get message(): string {
    return this._message;
  }
  set message(message: string) {
    this._message = message;
    if (this.arr.length > 2)  {
      this.arr.shift()
    }
    this.arr.push({message})
    this.state = 'opened';
    if (this.flagFirst) {
      this.flagFirst = false
      this.shiftMessage()
    }
  }
  private _message = '';
  shiftMessage() {
    if (this.timerShiftMessage) clearTimeout(this.timerShiftMessage);
    this.timerShiftMessage =  setTimeout(() => {
      if (this.arr.length > 0) {
        this.arr.shift()
        this.shiftMessage()
      } else {
        this.closed.next()
      }
    }, 1500)

  }

  
}
