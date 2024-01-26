import { AfterViewInit, ChangeDetectorRef, Component, ContentChild, ElementRef, HostBinding, HostListener, Input, OnInit, TemplateRef, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NuoruoInputComponent } from '../../nuoruo-input.component';
@Component({
  selector: 'nr-number',
  templateUrl: './nuoruo-number.component.html',
  styleUrls: ['./nuoruo-number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NuoruoNumberComponent),
      multi: true
    }
  ]
})
export class NuoruoNumberComponent extends NuoruoInputComponent {
  constructor() {
    super()
  }
}
 