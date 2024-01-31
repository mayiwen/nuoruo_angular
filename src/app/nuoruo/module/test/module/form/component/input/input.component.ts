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
  hello = {
    v: '百度',
    value: 'hello0',
  };
  hello1 = {
    v: '搜狗',
    value: 'hello1',
  };
  hello2 = {
    v: '360',
    value: 'hello2',
  };

  arr = [this.hello, this.hello1, this.hello2];
  h = this.arr[0];
  inputChange(e: any) {
    console.log('inputChange 执行了 这是外部的');
    console.log(e);
    if (e === '') {
      this.arr = [];
      return;
    }
    this.arr = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ].map((item) => {
      e + item;
      return {
        v: e + item,
        value: 'value' + e + item,
      };
    });
  }
}
