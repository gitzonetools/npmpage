import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { IMenuItemObject } from './app.interfaces'
import * as q from 'q'
import { Objectmap } from 'lik'

@Injectable()
export class MenuService {
    menuDataReady = q.defer()
    private menuData = new Objectmap<IMenuItemObject>()

    constructor(private http: Http) {
        this.getMenuData() // this executes async upon Service Creation, so not blocking
    }

    /**
     * Gets a specific menu item by string
     */
    getMenuItem(menuItemTitle: string): q.Promise<IMenuItemObject> {
        let done = q.defer<IMenuItemObject>()
        this.menuDataReady.promise.then(() => {
            done.resolve(this.menuData.find((menuObjectArg) => {
                return menuObjectArg.title === menuItemTitle
            }))
        })
        return done.promise
    }

    /**
     * gets all menu items as array
     */
    getMenuItemArray(): q.Promise<IMenuItemObject[]> {
        let done = q.defer<IMenuItemObject[]>()
        this.menuDataReady.promise.then(() => {
            done.resolve(this.menuData.getArray())
        })
        return done.promise
    }

    /**
     * fetches the menu data from the base url
     */
    private getMenuData = () => {
        this.http.get('./menu.json')
            .toPromise()
            .then(response => {
                this.menuData.addArray(response.json().menuItems)
                this.menuDataReady.resolve()
            })
    }
}
