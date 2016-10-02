/// <reference types="q" />
import * as plugins from './npmpage.plugins';
export declare type TSupportedHosts = 'gitlab';
export interface INpmpageConfig {
    coverage: boolean;
    docs: boolean;
    serve: boolean;
    publish: boolean;
    publishTarget: TSupportedHosts;
    projectinfo: plugins.projectinfo.ProjectInfo;
}
export declare let run: (argvArg: any) => plugins.q.Promise<INpmpageConfig>;
