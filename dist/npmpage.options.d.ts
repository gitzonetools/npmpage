/// <reference types="q" />
import * as plugins from './npmpage.plugins';
export interface INpmpageConfig {
    coverage: boolean;
    docs: boolean;
    gitbook: boolean;
}
export declare let init: () => plugins.q.Promise<INpmpageConfig>;
