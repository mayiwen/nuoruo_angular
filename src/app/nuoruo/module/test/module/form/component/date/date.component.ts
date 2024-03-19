import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'nuoruo-test-form-date',
  templateUrl: './date.component.html',
  providers: []
})
export class NuoruoTestFormDateComponent implements OnInit, AfterViewInit {
  value = '1'
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
  }
  ngOnDestroy() {
  }

}
