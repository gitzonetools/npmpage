import * as plugins from "./npmpage.plugins";
import * as npmpageOptions from "./npmpage.options";
import * as npmpagePublic from "./npmpage.public";
export let run = () => {
    let done = plugins.q.defer();
    npmpageOptions.init()
        .then(npmpagePublic.init)
        .then(() => {
            done.resolve();
        })
    return done.promise;
}