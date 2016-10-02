import { Component, Input, Output, EventEmitter,  OnInit } from '@angular/core'
import { MenuService } from './menu.service'

// interfaces
import { IMenuItemObject } from './app.interfaces'

@Component({
    selector: 'npmpage-nav',
    styles: [`

    `],
    template: `
        <md-nav-list *ngFor="let menuItem of menuItemsArray, let i = index">
            <md-list-item (click)="clickMenuItem(menuItem.title)">{{menuItem.title}}</md-list-item>
        </md-nav-list>
    `
})
export class NavComponent implements OnInit {
    menuItemsArray: IMenuItemObject[]
    @Output() menuItemUpdated = new EventEmitter<IMenuItemObject>()

    constructor(private menuService: MenuService) { }


    /**
     * executed on init
     */
    ngOnInit() {
        this.menuService.getMenuItemArray().then(menuItemsArrayArg => {
            this.menuItemsArray = menuItemsArrayArg
        })
    }

    clickMenuItem(itemTitleArg: string) {
        console.log(itemTitleArg)
        let menuItem = this.menuItemsArray.filter(menuItemArg => {
            return menuItemArg.title === itemTitleArg
        })[0]
        this.menuItemUpdated.emit(menuItem)
    }
}
