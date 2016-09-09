"use strict";
const plugins = require("./npmpage.plugins");
const npmpageDocs = require("./npmpage.docs");
const npmpageOptions = require("./npmpage.options");
const npmpageGitbook = require("./npmpage.gitbook");
const npmpagePublic = require("./npmpage.public");
exports.run = () => {
    let done = plugins.q.defer();
    npmpageOptions.init()
        .then(npmpageDocs.run)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtcGFnZS5wcm9taXNlY2hhaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9ucG1wYWdlLnByb21pc2VjaGFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNkNBQTRDO0FBQzVDLDhDQUE2QztBQUM3QyxvREFBbUQ7QUFDbkQsb0RBQW1EO0FBQ25ELGtEQUFpRDtBQUN0QyxRQUFBLEdBQUcsR0FBRztJQUNiLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDNUIsY0FBYyxDQUFDLElBQUksRUFBRTtTQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztTQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztTQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztTQUN4QixJQUFJLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDbEIsQ0FBQyxDQUFDO1NBQ0QsS0FBSyxDQUFDLENBQUMsR0FBRztRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDcEIsQ0FBQyxDQUFDLENBQUE7SUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUN2QixDQUFDLENBQUEifQ==