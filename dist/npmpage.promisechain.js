"use strict";
const plugins = require("./npmpage.plugins");
const npmpageOptions = require("./npmpage.options");
const npmpageGitbook = require("./npmpage.gitbook");
const npmpagePublic = require("./npmpage.public");
exports.run = () => {
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtcGFnZS5wcm9taXNlY2hhaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9ucG1wYWdlLnByb21pc2VjaGFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBWSxPQUFPLFdBQU0sbUJBQW1CLENBQUMsQ0FBQTtBQUM3QyxNQUFZLGNBQWMsV0FBTSxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3BELE1BQVksY0FBYyxXQUFNLG1CQUFtQixDQUFDLENBQUE7QUFDcEQsTUFBWSxhQUFhLFdBQU0sa0JBQWtCLENBQUMsQ0FBQTtBQUN2QyxXQUFHLEdBQUc7SUFDYixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLGNBQWMsQ0FBQyxJQUFJLEVBQUU7U0FDaEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUM7U0FDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7U0FDeEIsSUFBSSxDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxDQUFDLEdBQUc7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDeEIsQ0FBQyxDQUFBIn0=