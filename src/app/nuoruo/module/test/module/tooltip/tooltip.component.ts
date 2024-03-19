import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'nuoruo-test-tooltip',
  templateUrl: './tooltip.component.html',
  providers: []
})
export class NuoruoTestTooltipComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
  }
  ngOnDestroy() {
  }

  treeData = [
    {
      v: 'v1',
      value: '1',
      flagExpand: true,
      children: [
        {
          v: 'v11',
          value: '11',
          flagExpand: true,
          children: [
            {
              v: 'v111',
              value: '111',
              flagExpand: true,
              children: [
                {
                  v: 'v1111',
                  value: '1111',
                  flagExpand: true,
                  children: [
                    {
                      v: 'v11111',
                      value: '11111',
                      flagExpand: true,
                    },
                    {
                      v: 'v11112',
                      value: '11112',
                      flagExpand: true,
                    },
                  ],
                },
              ],
            },
            {
              v: 'v112',
              value: '112',
              flagExpand: true,
              children: [{
                  v: 'v1121',
                  value: '1121',
                  flagExpand: true,
              }]
            },
          ],
        },
      ],
    },
    {
      v: 'v2',
      value: '2',
      flagExpand: true,
      children: [{
        v: 'v21',
        value: '21',
        flagExpand: true,
    }]
    },
  ];
  loading = true;
}
