import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { NuoruoModalFooterDirective } from "./directive/nuoruo-modal-footer.directive";
import { NuoruoModalHeaderDirective } from "./directive/nuoruo-modal-header.directive";
import { NuoruoModalSectionDirective } from "./directive/nuoruo-modal-section.directive";
@Component({
  selector: 'nr-modal',
  templateUrl: './nuoruo-modal.component.html',
  styleUrls: ['./nuoruo-modal.component.scss'],
  providers: [
  ],
})
export class NuoruoModalComponent{
  @Input() v:any
  @Input() w:any
  @Input() h:any
  @Output() close = new EventEmitter<any>();
  @ContentChild(NuoruoModalFooterDirective) footer!: NuoruoModalFooterDirective;
  @ContentChild(NuoruoModalHeaderDirective) header!: NuoruoModalHeaderDirective;
  @ContentChild(NuoruoModalSectionDirective) section!: NuoruoModalSectionDirective;
  constructor() {
  }
  closeClick() {
    this.close.emit(true);
  }
}
