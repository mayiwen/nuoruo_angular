import { AfterViewInit, ChangeDetectorRef, Component, ContentChild, ElementRef, HostBinding, HostListener, Input, OnInit, TemplateRef, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NuoruoInputComponent } from '../../nuoruo-input.component';
@Component({
  selector: 'nr-textarea',
  templateUrl: './nuoruo-textarea.component.html',
  styleUrls: ['./nuoruo-textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NuoruoTextareaComponent),
      multi: true
    }
  ]
})
export class NuoruoTextareaComponent extends NuoruoInputComponent {
  constructor() {
    super()
  }
}
 