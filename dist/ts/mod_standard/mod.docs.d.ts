/// <reference types="q" />
import { Objectmap } from 'lik';
import { INpmpageConfig } from '../npmpage.options';
import { IMenuItemObject } from '../../angular/app.interfaces';
/**
 * class Binder
 */
export declare class Binder {
    baseDir: string;
    docArray: Doc[];
    menu: Menu;
    constructor(dirPathArg: string);
    /**
     * writes the binder to disk
     */
    writeToDisk(): void;
}
/**
 * class Menu
 */
export declare class Menu {
    docArray: Doc[];
    menuItemObjectmap: Objectmap<IMenuItemObject>;
    constructor(docArrayArg: Doc[]);
    /**
     * updates the menu
     */
    update(): void;
    /**
     * write to disk
     */
    writeToDisk(filePathArg: any): void;
}
/**
 * class Doc
 */
export declare class Doc {
    name: string;
    filePath: string;
    baseDir: string;
    markdown: string;
    html: string;
    constructor(filePathArg: string, baseDirArg: string);
}
export declare let run: (configArg: INpmpageConfig) => Q.Promise<{}>;
