/// <reference types="q" />
import * as plugins from './mod.plugins';
import { INpmpageConfig } from '../npmpage.options';
export declare let npmpageSmartbrowser: plugins.smartbrowser.Smartbrowser;
export declare let run: (configArg: INpmpageConfig) => Q.Promise<{}>;
