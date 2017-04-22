"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./npmpage.plugins");
/**
 * the path of the project's main readme.md
 */
let readmePath = (() => {
    let upperCase = plugins.path.join(process.cwd(), 'README.md');
    let lowerCase = plugins.path.join(process.cwd(), 'readme.md');
    if (plugins.smartfile.fs.fileExistsSync(upperCase)) {
        return upperCase;
    }
    else if (plugins.smartfile.fs.fileExists(lowerCase)) {
        return lowerCase;
    }
    else {
        return;
    }
})();
/**
 * wether project already has a docs/index.md
 */
let indexMdPresent = plugins.smartfile.fs.isFile(plugins.path.join(process.cwd(), 'docs/index.md'));
/**
 * in case there is no index.md, copy the project's readme
 */
if (readmePath && !indexMdPresent) {
    plugins.smartfile.fs.copySync(readmePath, plugins.path.join(process.cwd(), 'docs/index.md'));
}
require("quicksite");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUE0QztBQUU1Qzs7R0FFRztBQUNILElBQUksVUFBVSxHQUFXLENBQUM7SUFDeEIsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQzdELElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQTtJQUM3RCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxTQUFTLENBQUE7SUFDbEIsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sQ0FBQyxTQUFTLENBQUE7SUFDbEIsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sTUFBTSxDQUFBO0lBQ1IsQ0FBQztBQUNILENBQUMsQ0FBQyxFQUFFLENBQUE7QUFFSjs7R0FFRztBQUNILElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQTtBQUVuRzs7R0FFRztBQUNILEVBQUUsQ0FBQyxDQUFDLFVBQVUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUMzQixVQUFVLEVBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLGVBQWUsQ0FBQyxDQUNsRCxDQUFBO0FBQ0gsQ0FBQztBQUVELHFCQUFrQiJ9