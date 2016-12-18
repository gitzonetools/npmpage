"use strict";
const plugins = require("./npmpage.plugins");
// package dirs
exports.packageDir = plugins.path.join(__dirname, '../../');
// packagefiles
exports.webJsBundleFile = plugins.path.join(exports.packageDir, 'plr_bundle/build.js');
// project dirs
exports.cwd = process.cwd();
exports.docsDir = plugins.path.join(exports.cwd, 'docs/');
exports.pagesDir = plugins.path.join(exports.cwd, 'pages/');
exports.publicDir = plugins.path.join(exports.cwd, 'public/');
exports.coverageDir = plugins.path.join(exports.cwd, 'coverage/');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtcGFnZS5wYXRocy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3RzL25wbXBhZ2UucGF0aHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDZDQUE0QztBQUU1QyxlQUFlO0FBQ0osUUFBQSxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLFFBQVEsQ0FBQyxDQUFBO0FBRTdELGVBQWU7QUFDSixRQUFBLGVBQWUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBVSxFQUFDLHFCQUFxQixDQUFDLENBQUE7QUFFaEYsZUFBZTtBQUNKLFFBQUEsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQTtBQUVuQixRQUFBLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFHLEVBQUUsT0FBTyxDQUFDLENBQUE7QUFDekMsUUFBQSxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0FBQzNDLFFBQUEsU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQTtBQUM3QyxRQUFBLFdBQVcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFHLEVBQUUsV0FBVyxDQUFDLENBQUEifQ==