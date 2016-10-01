import { Component, Input } from '@angular/core'

@Component({
  selector: 'npmpage-content',
  template: `
    <div class="markdown-body" [innerHtml]="htmlContent"></div>
  `
})
export class ContentComponent {
    @Input() htmlContent: string
    constructor(){}
}
