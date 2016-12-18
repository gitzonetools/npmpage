"use strict";
const q = require("q");
const paths = require("../npmpage.paths");
const plugins = require("./mod.plugins");
exports.run = (configArg) => {
    let done = q.defer();
    if (configArg.publish) {
        switch (configArg.publishTarget) {
            case 'gitlab':
                plugins.smartfile.fs.copySync(paths.pagesDir, paths.publicDir);
                break;
            default:
                plugins.beautylog.warn(`publish target "${configArg.publishTarget}" unknown`);
                break;
        }
    }
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90cy9tb2RfcHVibGlzaC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUJBQXNCO0FBQ3RCLDBDQUF5QztBQUN6Qyx5Q0FBd0M7QUFJN0IsUUFBQSxHQUFHLEdBQUcsQ0FBQyxTQUF5QjtJQUN2QyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDcEIsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDcEIsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDOUIsS0FBSyxRQUFRO2dCQUNULE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FDekIsS0FBSyxDQUFDLFFBQVEsRUFDZCxLQUFLLENBQUMsU0FBUyxDQUNsQixDQUFBO2dCQUNELEtBQUssQ0FBQTtZQUNUO2dCQUNJLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUNsQixtQkFBbUIsU0FBUyxDQUFDLGFBQWEsV0FBVyxDQUN4RCxDQUFBO2dCQUNELEtBQUssQ0FBQTtRQUNiLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7QUFDdkIsQ0FBQyxDQUFBIn0=