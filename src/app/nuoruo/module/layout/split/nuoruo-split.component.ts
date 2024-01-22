import { AfterViewInit, Component, ContentChild, Input, TemplateRef } from '@angular/core';
@Component({
  selector: 'nr-split',
  templateUrl: './nuoruo-split.component.html',
  styleUrls: ['./nuoruo-split.component.scss'],
  providers: []
})
export class NuoruoSplitComponent implements AfterViewInit {

  @ContentChild('top', { static: true }) headerTemplate!: TemplateRef<any>;
  @ContentChild('left', { static: true }) leftTemplate!: TemplateRef<any>;
  
  @Input('top') top: number = 0
  @Input('left') left: number = 0
  public heightStr: string = ''
  public widthStr: string = ''
  public title = 'Test';
  public otherDate = {
    auth: 'me',
    name: 'appCard'
  };
  ngAfterViewInit(): void {

  }
  ngOnInit(): void {
    if (this.top && this.top >= 1) {
      this.heightStr = 'calc(100% - ' + this.top + 'px)';
    } else {
      if (!this.top) this.top = 0
      this.heightStr = (1 - this.top) * 100 + '%'
    }
    if (this.left && this.left >= 1) {
      this.widthStr = 'calc(100% - ' + this.left + 'px)';
    } else {
      if (!this.left) this.left = 0
      this.widthStr = (1 - this.left) * 100 + '%'
    }
  }
  get getWidthStr() {
    return this.widthStr
  }
}
