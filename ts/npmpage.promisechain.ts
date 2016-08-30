import * as plugins from "./npmpage.plugins";
import * as npmpageOptions from "./npmpage.options";
import * as npmpageGitbook from "./npmpage.gitbook";
import * as npmpagePublic from "./npmpage.public";
export let run = () => {
    let done = plugins.q.defer();
    npmpageOptions.init()
        .then(npmpageGitbook.run)
        .then(npmpagePublic.init)
        .then(() => {
            done.resolve();
        })
        .catch((err) => {
            console.log(err);
        });
    return done.promise;
}