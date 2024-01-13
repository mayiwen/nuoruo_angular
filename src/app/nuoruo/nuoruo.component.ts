import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'nuoruo',
  templateUrl: './nuoruo.component.html',
  styleUrls: ['./nuoruo.component.scss'],
  providers: []
})
export class NuoruoComponent implements OnInit, AfterViewInit {
  @ViewChild('formTest') formTest!: ElementRef
  loading: boolean = true
  test= 9
  a: any
  b: any
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }
  ngOnInit(): void {

  }
  ngOnDestroy() {
  }
  formtesst() {
    console.log(this.formTest)
  }
  hello() {
    alert('这是一个测试文件')
  }
  changeTheme() {
    console.log(window.document.documentElement.getAttribute('data-myw-theme'))
    if (window.document.documentElement.getAttribute('data-myw-theme') === 'black') {
      window.document.documentElement.setAttribute('data-myw-theme', 'white');
    } else {
      window.document.documentElement.setAttribute('data-myw-theme', 'black');
    }
  }


}
