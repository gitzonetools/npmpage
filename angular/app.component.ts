import { Component, OnInit } from '@angular/core'
import { ContentComponent } from './content.component'
import { MenuService } from './menu.service'

@Component({
    selector: 'npmpage-app',
    styles: [`
        .content {
            background: #ffffff;
            box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.20);
            border-radius: 4px; 
            max-width: 1200px;
            margin: auto;
            padding: 50px;
        }
    `],
    template: `
        <div class='content'>
            <npmpage-content [htmlContent]="content">Loading...</npmpage-content>
        </div>
        <h1>Npmpage Menu</h1>
    `,
    providers: [MenuService]
})
export class AppComponent implements OnInit {
    content: string
    constructor(private menuService: MenuService) { }
    ngOnInit() {
        this.menuService.getMenu().then(menuItemArrayArg => {
            this.content = menuItemArrayArg[0].content
        })
    }
}
