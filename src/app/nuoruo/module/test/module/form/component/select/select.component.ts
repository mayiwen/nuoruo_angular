import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'nuoruo-test-form-select',
  templateUrl: './select.component.html',
  providers: []
})
export class NuoruoTestFormSelectComponent implements OnInit, AfterViewInit {
  dis: boolean = true
  mywInput: string = '100'
  loading = true;
  test = '';
  value: string = '100';

  hello = {
    v: 'hello0',
    value: 'hello0',
  };
  hello1 = {
    v: 'hello1',
    value: 'hello1',
  };
  hello2 = {
    v: 'hello2',
    value: 'hello2',
  };

  arr = [this.hello, this.hello1, this.hello2];
  h = this.arr[0];
  constructor() {}
  // fbForm = this.fb.group({
  //   selectObj: this.fb.control(this.arr[0])
  // })
  
  ngOnInit(): void {
    this.h = this.arr[1];
  }
  getfb() {
  }
  numValue = '';
  ngAfterViewInit(): void {

    console.log('这是打印的form');
    console.log('----------------');
    
    console.log()
    console.log('这是fb')
    console.log('------------')
    console.log(this.arr[1])
    // this.fbForm.controls.selectObj.patchValue(this.arr[2])
  }
  ngOnDestroy(): void {}

  alert() {}
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
  show() {
    console.log(this.mywInput)
  }

}
