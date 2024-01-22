import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'nuoruo-test-tab',
  templateUrl: './tab.component.html',
  providers: []
})
export class NuoruoTestTabComponent implements OnInit, AfterViewInit {
  @Input() data: any
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
  }
  ngOnDestroy() {
  }
  tabClickFn(e: any) {
    console.log(e)
  }

}
