/// <reference types="q" />
import * as plugins from './npmpage.plugins';
import { INpmpageConfig } from './npmpage.options';
export declare let npmpageSmartbrowser: plugins.smartbrowser.Smartbrowser;
export declare let run: (configArg: INpmpageConfig) => plugins.q.Promise<{}>;
