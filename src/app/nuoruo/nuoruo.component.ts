import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'nuoruo',
  templateUrl: './nuoruo.component.html',
  styleUrls: ['./nuoruo.component.scss'],
  providers: []
})
export class NuoruoComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
  }
  ngOnDestroy() {
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
