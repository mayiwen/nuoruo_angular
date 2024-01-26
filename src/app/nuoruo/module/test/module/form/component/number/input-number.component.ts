import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'nuoruo-test-form-input',
  templateUrl: './input.component.html',
  providers: []
})
export class NuoruoTestFormInputComponent implements OnInit, AfterViewInit {
  value = '1'
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
  }
  ngOnDestroy() {
  }

}
