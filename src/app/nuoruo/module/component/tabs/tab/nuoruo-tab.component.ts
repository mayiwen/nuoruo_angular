import { AfterViewInit, ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { NuoruoTabDirective } from '../directive/nuoruo-tab.directive';
@Component({
  selector: 'nr-tab',
  templateUrl: './nuoruo-tab.component.html',
  providers: []
})
export class NuoruoTabComponent implements OnInit, AfterViewInit {
  @Input() v = '';
  @Output() tabClick = new EventEmitter()
  // @ContentChild('tabset') oneTemplate: TemplateRef<any>;
  @ContentChild(NuoruoTabDirective) mywTabDirective!:  NuoruoTabDirective
  // @ContentChildren(MywTableDirective) qlist!: QueryList<MywTableDirective>;

  flagShow = false;
  selectTab = 0;
  constructor(private cdr: ChangeDetectorRef) {

  }
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
  }
  nextTick() {
    if (this.cdr) {
      this.cdr.markForCheck();
      this.cdr.detectChanges();
    }
  }
  tclick(item: any) {
    this.tabClick.emit(item)
  }
}
