import { Injectable } from '@angular/core'
import { IMenuItemObject } from './app.interfaces'
import * as q from 'q'

@Injectable()
export class MenuService {
    getMenu(): q.Promise<IMenuItemObject[]> {
        let done = q.defer<IMenuItemObject[]>()
        done.resolve([{
            title: 'Intro',
            content: '<h1>Hi</h1><h2>hi</h2>',
            relPath: 'intro'
        }])
        return done.promise
    }
}