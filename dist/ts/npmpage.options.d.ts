/// <reference types="q" />
import * as plugins from './npmpage.plugins';
export interface INpmpageConfig {
    coverage: boolean;
    docs: boolean;
    serve: boolean;
}
export declare let init: (argvArg: any) => plugins.q.Promise<INpmpageConfig>;
