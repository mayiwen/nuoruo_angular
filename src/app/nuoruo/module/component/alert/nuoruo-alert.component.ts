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
  selector: 'nr-alert',
  templateUrl: './nuoruo-alert.component.html',
  styleUrls: ['./nuoruo-alert.component.scss'],
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
export class NuoruoAlertComponent implements  AfterViewInit, OnDestroy {
  timer = null
  type = ''
  messageSave: any
  ngOnDestroy(): void {
    this.state = 'closed'
  }
  ngAfterViewInit(): void {
  }
  
  @HostBinding('@state')
  state: 'opened' | 'closed' = 'closed';
  
  @Input()
  get message() {
    return this._message;
  }
  set message(message) {
    this._message = message;
    this.messageSave = message
    this.state = 'opened';
  }
  private _message = {};

  @Output() closed = new EventEmitter<void>();
  cancel() {
    this.closed.next()
  }
  sure() {
    this.messageSave.success()
    this.closed.next()
  }
}
