import { Component, OnInit } from '@angular/core'
import { ContentComponent } from './content.component'
import { NavComponent } from './nav.component'
import { MenuService } from './menu.service'

// interfaces
import { IMenuItemObject } from './app.interfaces'

@Component({
    selector: 'npmpage-app',
    styles: [`
        .flexParent {
            display: flex;
            padding: 20px;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-around;
            align-items: stretch;
            align-content: stretch;
        }

        .flexChild {
            order: 0;
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: auto; 
            align-self: auto;

            background: #ffffff;
            box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.20);
            border-radius: 4px; 
            max-width: 1200px;
            padding: 50px;
        }

        .content {
            flex-grow: 2;
            flex-shrink: 1;
        }

        .nav {
            flex-grow: 0.5;
            align-self: flex-start;
            margin-left: 20px;
        }
    `],
    template: `
        <md-toolbar color="primary">
            <span>Documentation for "{{menuItem.project.name}}"</span>
        </md-toolbar>

        <div class="flexParent">
            <div class='flexChild content'>
                <npmpage-content [htmlContent]="menuItem.content">Loading...</npmpage-content>
            </div>
            <div class='flexChild nav'>
                <npmpage-nav (menuItemUpdated)="setNewContent($event)">Loading...</npmpage-nav>
            </div>
        </div>
    `,
    providers: [MenuService]
})
export class AppComponent implements OnInit {
    menuItem: IMenuItemObject = {
        title: 'loading...',
        content: 'loading...',
        relPath: '/some/path',
        project: {
            name: 'loading...'
        }
    }
    constructor(private menuService: MenuService) { }
    ngOnInit() {
        this.menuService.getMenuItem('index').then(menuItemArg => {
            this.menuItem = menuItemArg
        })
    }

    setNewContent(menuItemArg: IMenuItemObject) {
        this.menuItem = menuItemArg
    }
}
