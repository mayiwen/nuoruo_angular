import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'nuoruo-test-modal',
  templateUrl: './modal.component.html',
  providers: []
})
export class NuoruoTestModalComponent implements OnInit, AfterViewInit {
  flagShow = false
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
  }
  ngOnDestroy() {
  }


}
