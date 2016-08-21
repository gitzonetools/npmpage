import * as plugins from "./npmpage.plugins";

export let init = () => {
    let done = plugins.q.defer();
    
    return done.promise;
}